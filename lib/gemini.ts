/**
 * Gemini client with multi-key fallback using GEMINI_WORKER_* keys.
 * Primary: GEMINI_WORKER_1 → fallback GEMINI_WORKER_2 (then optional more).
 */

export const GEMINI_MODEL =
  process.env.GEMINI_MODEL?.trim() || "gemini-3.1-flash-lite";

const GEMINI_API_BASE = "https://generativelanguage.googleapis.com/v1beta";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function collectWorkerKeys(): { name: string; key: string }[] {
  const keys: { name: string; key: string }[] = [];

  // Explicit primary pair first
  for (const name of ["GEMINI_WORKER_1", "GEMINI_WORKER_2"] as const) {
    const key = process.env[name]?.trim();
    if (key) keys.push({ name, key });
  }

  // Optional additional workers if configured
  const ids = (process.env.GEMINI_WORKER_IDS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  for (const id of ids) {
    const name = `GEMINI_WORKER_${id}`;
    if (name === "GEMINI_WORKER_1" || name === "GEMINI_WORKER_2") continue;
    const key = process.env[name]?.trim();
    if (key && !keys.some((k) => k.key === key)) {
      keys.push({ name, key });
    }
  }

  // Legacy single-key fallback
  const legacy = process.env.GEMINI_API_KEY?.trim();
  if (legacy && !keys.some((k) => k.key === legacy)) {
    keys.push({ name: "GEMINI_API_KEY", key: legacy });
  }

  return keys;
}

export function getGeminiKeyStatus() {
  const keys = collectWorkerKeys();
  return {
    model: GEMINI_MODEL,
    configured: keys.length > 0,
    keyCount: keys.length,
    keyNames: keys.map((k) => k.name),
  };
}

type GeminiPart = { text?: string };
type GeminiContent = { role?: string; parts: GeminiPart[] };

function toGeminiContents(messages: ChatMessage[]): GeminiContent[] {
  return messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));
}

async function generateWithKey(
  apiKey: string,
  systemInstruction: string,
  messages: ChatMessage[],
): Promise<string> {
  const url = `${GEMINI_API_BASE}/models/${GEMINI_MODEL}:generateContent?key=${encodeURIComponent(apiKey)}`;

  const body = {
    systemInstruction: {
      parts: [{ text: systemInstruction }],
    },
    contents: toGeminiContents(messages),
    generationConfig: {
      temperature: 0.4,
      topP: 0.9,
      maxOutputTokens: 1024,
    },
    safetySettings: [
      { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      {
        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE",
      },
      {
        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
        threshold: "BLOCK_MEDIUM_AND_ABOVE",
      },
    ],
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = (await res.json().catch(() => null)) as {
    error?: { message?: string; code?: number; status?: string };
    candidates?: {
      content?: { parts?: { text?: string }[] };
      finishReason?: string;
    }[];
    promptFeedback?: { blockReason?: string };
  } | null;

  if (!res.ok) {
    const message = data?.error?.message || `Gemini HTTP ${res.status}`;
    const err = new Error(message) as Error & { status?: number; retryable?: boolean };
    err.status = res.status;
    err.retryable = res.status === 429 || res.status >= 500;
    throw err;
  }

  if (data?.promptFeedback?.blockReason) {
    throw new Error("Message was blocked by safety filters. Please rephrase your question.");
  }

  const text = data?.candidates?.[0]?.content?.parts
    ?.map((p) => p.text || "")
    .join("")
    .trim();

  if (!text) {
    throw new Error("Empty response from Gemini.");
  }

  return text;
}

export async function generateChatReply(options: {
  systemInstruction: string;
  messages: ChatMessage[];
}): Promise<{ text: string; usedKey: string }> {
  const keys = collectWorkerKeys();
  if (keys.length === 0) {
    throw new Error("Gemini API is not configured.");
  }

  let lastError: Error | null = null;

  for (let i = 0; i < keys.length; i += 1) {
    const { name, key } = keys[i];
    try {
      const text = await generateWithKey(
        key,
        options.systemInstruction,
        options.messages,
      );
      return { text, usedKey: name };
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      console.warn(`[gemini] ${name} failed, trying next key:`, lastError.message);
      // Continue to next worker key for fallback
    }
  }

  throw lastError || new Error("All Gemini worker keys failed.");
}
