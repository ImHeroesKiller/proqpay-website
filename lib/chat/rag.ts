import { buildKnowledgeBase, type KnowledgeChunk } from "@/lib/chat/knowledge";

const STOPWORDS = new Set([
  "a",
  "an",
  "the",
  "and",
  "or",
  "to",
  "of",
  "in",
  "on",
  "for",
  "is",
  "are",
  "was",
  "were",
  "be",
  "with",
  "as",
  "at",
  "by",
  "from",
  "this",
  "that",
  "it",
  "yang",
  "dan",
  "atau",
  "di",
  "ke",
  "dari",
  "untuk",
  "dengan",
  "apa",
  "siapa",
  "bagaimana",
  "adalah",
  "itu",
  "ini",
  "saya",
  "kami",
  "anda",
  "bisa",
  "tolong",
  "mohon",
  "tentang",
  "ya",
  "tidak",
  "dong",
  "kah",
  "nya",
  "pun",
]);

let cachedBase: KnowledgeChunk[] | null = null;

function getBase() {
  if (!cachedBase) cachedBase = buildKnowledgeBase();
  return cachedBase;
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u00c0-\u024f\s-]/g, " ")
    .split(/\s+/)
    .map((t) => t.trim())
    .filter((t) => t.length >= 2 && !STOPWORDS.has(t));
}

function scoreChunk(queryTokens: string[], chunk: KnowledgeChunk): number {
  if (queryTokens.length === 0) return 0;
  const hay = `${chunk.title} ${chunk.tags.join(" ")} ${chunk.content}`.toLowerCase();
  let score = 0;
  for (const token of queryTokens) {
    if (chunk.tags.some((t) => t.includes(token) || token.includes(t))) score += 3;
    if (chunk.title.toLowerCase().includes(token)) score += 2.5;
    if (hay.includes(token)) score += 1;
    // light phrase boost for important brand tokens
    if (token === "proqpay" && hay.includes("proqpay")) score += 4;
    if (token === "msg" && hay.includes("msg")) score += 2;
  }
  return score;
}

export type RetrievedChunk = KnowledgeChunk & { score: number };

/**
 * Mini lexical RAG: rank knowledge chunks by keyword overlap.
 * Fast, no external vector DB required.
 */
export function retrieveKnowledge(
  query: string,
  options?: { topK?: number; minScore?: number },
): RetrievedChunk[] {
  const topK = options?.topK ?? 5;
  const minScore = options?.minScore ?? 1.5;
  const tokens = tokenize(query);
  const ranked = getBase()
    .map((chunk) => ({ ...chunk, score: scoreChunk(tokens, chunk) }))
    .filter((c) => c.score >= minScore)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);

  // Always include company overview for grounding if nothing matched well
  if (ranked.length === 0) {
    const overview = getBase().find((c) => c.id === "company-overview");
    if (overview) return [{ ...overview, score: 0 }];
  }

  return ranked;
}

export function formatRetrievedContext(chunks: RetrievedChunk[]): string {
  if (chunks.length === 0) return "(no extra knowledge retrieved)";
  return chunks
    .map(
      (c, i) =>
        `[${i + 1}] ${c.title}\n${c.content.slice(0, 900)}${c.content.length > 900 ? "…" : ""}`,
    )
    .join("\n\n");
}
