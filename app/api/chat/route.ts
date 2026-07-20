import { NextResponse } from "next/server";
import { z } from "zod";
import { buildMsgChatSystemPrompt } from "@/lib/chat-system-prompt";
import {
  mergeShortMemory,
  trimMessagesForContext,
  type ShortMemory,
} from "@/lib/chat/memory";
import { retrieveKnowledge } from "@/lib/chat/rag";
import { generateChatReply, getGeminiKeyStatus } from "@/lib/gemini";

const messageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(4000),
});

const memorySchema = z
  .object({
    summary: z.string().max(800).optional(),
    facts: z.array(z.string().max(200)).max(12).optional(),
    visitorName: z.string().max(80).optional(),
    company: z.string().max(120).optional(),
    interest: z.string().max(120).optional(),
  })
  .optional();

const bodySchema = z.object({
  messages: z.array(messageSchema).min(1).max(24),
  memory: memorySchema,
  sessionId: z.string().max(80).optional(),
  /** Honeypot — bots fill this; humans leave empty */
  website: z.string().max(0).optional(),
});

/** Simple in-memory rate limit (per instance). */
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 24;
const RATE_WINDOW_MS = 60_000;

/** Short session memory store (TTL). */
const sessionMemory = new Map<
  string,
  { memory: ShortMemory; expiresAt: number }
>();
const SESSION_TTL_MS = 30 * 60 * 1000;

function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count += 1;
  return true;
}

function loadSessionMemory(sessionId?: string): ShortMemory | undefined {
  if (!sessionId) return undefined;
  const row = sessionMemory.get(sessionId);
  if (!row) return undefined;
  if (Date.now() > row.expiresAt) {
    sessionMemory.delete(sessionId);
    return undefined;
  }
  return row.memory;
}

function saveSessionMemory(sessionId: string | undefined, memory: ShortMemory) {
  if (!sessionId) return;
  sessionMemory.set(sessionId, {
    memory,
    expiresAt: Date.now() + SESSION_TTL_MS,
  });
}

export async function GET() {
  const status = getGeminiKeyStatus();
  return NextResponse.json({
    ok: status.configured,
    model: status.model,
    keyCount: status.keyCount,
    features: { rag: true, shortMemory: true },
  });
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Terlalu banyak permintaan. Coba lagi sebentar ya." },
        { status: 429 },
      );
    }

    const json = await request.json();
    const parsed = bodySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Permintaan tidak valid.", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({
        reply: "Terima kasih. Tim MSG akan menindaklanjuti bila diperlukan.",
        memory: {},
      });
    }

    const messages = parsed.data.messages
      .map((m) => ({
        role: m.role,
        content: m.content.trim(),
      }))
      .filter((m) => m.content.length > 0);

    if (messages.length === 0) {
      return NextResponse.json({ error: "Pesan wajib diisi." }, { status: 400 });
    }

    const last = messages[messages.length - 1];
    if (last.role !== "user") {
      return NextResponse.json(
        { error: "Pesan terakhir harus dari user." },
        { status: 400 },
      );
    }

    const sessionId = parsed.data.sessionId?.trim();
    const prior = loadSessionMemory(sessionId);
    const memory = mergeShortMemory(
      {
        ...prior,
        ...parsed.data.memory,
        facts: [
          ...(prior?.facts || []),
          ...(parsed.data.memory?.facts || []),
        ],
      },
      messages,
    );

    // Mini RAG on latest user question (+ light memory terms)
    const ragQuery = [
      last.content,
      memory.interest,
      memory.company,
      ...(memory.facts || []).slice(0, 3),
    ]
      .filter(Boolean)
      .join(" ");
    const retrieved = retrieveKnowledge(ragQuery, { topK: 5, minScore: 1.2 });

    const compact = trimMessagesForContext(messages);
    const systemInstruction = buildMsgChatSystemPrompt({
      retrieved,
      memory,
    });

    const { text, usedKey } = await generateChatReply({
      systemInstruction,
      messages: compact,
    });

    // Update rolling summary lightly
    const updatedMemory: ShortMemory = {
      ...memory,
      summary: [
        memory.summary,
        `User: ${last.content.slice(0, 120)}`,
        `Sinta: ${text.slice(0, 160)}`,
      ]
        .filter(Boolean)
        .join(" · ")
        .slice(0, 500),
    };
    saveSessionMemory(sessionId, updatedMemory);

    console.info("[MSG Chat]", {
      ip,
      usedKey,
      messageCount: compact.length,
      ragChunks: retrieved.map((c) => c.id),
      sessionId: sessionId ? "yes" : "no",
      at: new Date().toISOString(),
    });

    return NextResponse.json({
      reply: text,
      memory: updatedMemory,
      rag: retrieved.map((c) => ({ id: c.id, title: c.title, score: c.score })),
    });
  } catch (error) {
    console.error("[MSG Chat] error", error instanceof Error ? error.message : error);
    return NextResponse.json(
      {
        error:
          "Asisten sedang sibuk sebentar. Coba lagi ya, atau hubungi info@msg-os.com.",
      },
      { status: 502 },
    );
  }
}
