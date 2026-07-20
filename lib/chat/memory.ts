import type { ChatMessage } from "@/lib/gemini";

export type ShortMemory = {
  /** Free-form rolling summary of the conversation */
  summary?: string;
  /** Compact facts remembered from the user */
  facts?: string[];
  /** Optional visitor name if shared */
  visitorName?: string;
  /** Optional company if shared */
  company?: string;
  /** Service interest if mentioned */
  interest?: string;
};

const FACT_LIMIT = 8;
const SUMMARY_MAX = 500;
export const SHORT_MEMORY_TURNS = 8; // last N user/assistant pairs kept as dialogue

/**
 * Extract lightweight facts from recent turns for short-term memory.
 */
export function extractFactsFromMessages(messages: ChatMessage[]): string[] {
  const facts: string[] = [];
  const text = messages
    .filter((m) => m.role === "user")
    .map((m) => m.content)
    .join(" \n ");

  const nameMatch = text.match(
    /(?:nama saya|saya|i am|i'm|my name is)\s+([A-ZÀ-ÖØ-öø-ÿ][\wÀ-ÖØ-öø-ÿ'.-]{1,40})/i,
  );
  if (nameMatch?.[1] && !/ingin|mau|butuh|need|looking/i.test(nameMatch[1])) {
    facts.push(`Visitor name: ${nameMatch[1]}`);
  }

  const companyMatch = text.match(
    /(?:perusahaan|company|dari|from)\s+([A-Z0-9][\w .&-]{1,60})/i,
  );
  if (companyMatch?.[1]) {
    facts.push(`Company mentioned: ${companyMatch[1].trim()}`);
  }

  const interestPatterns: [RegExp, string][] = [
    [/proqpay|payroll|gaji/i, "Interest: ProQPay / payroll"],
    [/outsourcing|tenaga kerja|manpower|workforce/i, "Interest: workforce outsourcing"],
    [/engineering|engineer|teknikal/i, "Interest: engineering talent"],
    [/business support|admin|back.?office/i, "Interest: business support"],
    [/managed workforce|end.?to.?end/i, "Interest: managed workforce"],
    [/karir|career|lowongan|lamar/i, "Interest: careers"],
    [/demo|konsultasi|consultation/i, "Intent: request consultation/demo"],
  ];
  for (const [re, label] of interestPatterns) {
    if (re.test(text)) facts.push(label);
  }

  return Array.from(new Set(facts)).slice(0, FACT_LIMIT);
}

/**
 * Merge client-provided memory with freshly extracted facts.
 */
export function mergeShortMemory(
  incoming: ShortMemory | undefined,
  messages: ChatMessage[],
): ShortMemory {
  const extracted = extractFactsFromMessages(messages);
  const facts = Array.from(
    new Set([...(incoming?.facts || []), ...extracted].map((f) => f.trim()).filter(Boolean)),
  ).slice(0, FACT_LIMIT);

  const visitorName =
    incoming?.visitorName ||
    facts.find((f) => f.startsWith("Visitor name:"))?.replace("Visitor name:", "").trim();
  const company =
    incoming?.company ||
    facts.find((f) => f.startsWith("Company mentioned:"))?.replace("Company mentioned:", "").trim();
  const interest =
    incoming?.interest ||
    facts.find((f) => f.startsWith("Interest:"))?.replace("Interest:", "").trim();

  let summary = (incoming?.summary || "").trim();
  if (!summary && messages.length >= 2) {
    const recent = messages.slice(-4);
    summary = recent
      .map((m) => `${m.role === "user" ? "User" : "Asisten"}: ${m.content}`)
      .join(" | ")
      .slice(0, SUMMARY_MAX);
  }

  return {
    summary: summary ? summary.slice(0, SUMMARY_MAX) : undefined,
    facts,
    visitorName,
    company,
    interest,
  };
}

export function formatMemoryBlock(memory: ShortMemory): string {
  const lines: string[] = [];
  if (memory.visitorName) lines.push(`- Nama pengunjung: ${memory.visitorName}`);
  if (memory.company) lines.push(`- Perusahaan: ${memory.company}`);
  if (memory.interest) lines.push(`- Minat: ${memory.interest}`);
  if (memory.facts?.length) {
    for (const f of memory.facts) lines.push(`- ${f}`);
  }
  if (memory.summary) lines.push(`- Ringkasan percakapan: ${memory.summary}`);
  if (lines.length === 0) return "Belum ada memori khusus.";
  return lines.join("\n");
}

/** Keep only the latest turns for model context (short memory window). */
export function trimMessagesForContext(messages: ChatMessage[]): ChatMessage[] {
  // Keep last SHORT_MEMORY_TURNS * 2 messages (user+assistant pairs)
  const max = SHORT_MEMORY_TURNS * 2;
  return messages.slice(-max);
}
