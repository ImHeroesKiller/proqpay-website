import { NextResponse } from "next/server";
import { z } from "zod";
import { buildMsgChatSystemPrompt } from "@/lib/chat-system-prompt";
import { generateChatReply, getGeminiKeyStatus } from "@/lib/gemini";

const messageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(4000),
});

const bodySchema = z.object({
  messages: z.array(messageSchema).min(1).max(20),
  /** Honeypot — bots fill this; humans leave empty */
  website: z.string().max(0).optional(),
});

/** Simple in-memory rate limit (per instance). */
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60_000;

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

export async function GET() {
  const status = getGeminiKeyStatus();
  return NextResponse.json({
    ok: status.configured,
    model: status.model,
    keyCount: status.keyCount,
  });
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment and try again." },
        { status: 429 },
      );
    }

    const json = await request.json();
    const parsed = bodySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request.", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    // Honeypot
    if (parsed.data.website) {
      return NextResponse.json({
        reply:
          "Terima kasih. Tim MSG akan menindaklanjuti jika diperlukan.",
      });
    }

    const messages = parsed.data.messages
      .map((m) => ({
        role: m.role,
        content: m.content.trim(),
      }))
      .filter((m) => m.content.length > 0);

    if (messages.length === 0) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    const last = messages[messages.length - 1];
    if (last.role !== "user") {
      return NextResponse.json(
        { error: "Last message must be from the user." },
        { status: 400 },
      );
    }

    // Cap total context size
    const compact = messages.slice(-12);

    const { text, usedKey } = await generateChatReply({
      systemInstruction: buildMsgChatSystemPrompt(),
      messages: compact,
    });

    console.info("[MSG Chat]", {
      ip,
      usedKey,
      messageCount: compact.length,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("[MSG Chat] error", error instanceof Error ? error.message : error);
    return NextResponse.json(
      {
        error:
          "Assistant is temporarily unavailable. Please try again or contact info@msg-os.com.",
      },
      { status: 502 },
    );
  }
}
