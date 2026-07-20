"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { MessageCircle, Send, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ChatRole = "user" | "assistant";

type UiMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

type ShortMemory = {
  summary?: string;
  facts?: string[];
  visitorName?: string;
  company?: string;
  interest?: string;
};

const STORAGE_KEY = "msg-chat-v1";
const AVATAR_SRC = "/images/chat/assistant-avatar.webp";

const WELCOME: UiMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Halo! Aku Sinta, asisten virtual MSG. Bisa bantu jelasin layanan workforce, ProQPay, atau cara hubungi tim kami. Mau tanya apa dulu?",
};

const SUGGESTIONS = [
  "Apa saja layanan MSG?",
  "Apa itu ProQPay?",
  "Mau request consultation",
  "Ada lowongan di MSG?",
];

function createSessionId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `s-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function Chatbot() {
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<UiMessage[]>([WELCOME]);
  const [memory, setMemory] = useState<ShortMemory>({});
  const [sessionId, setSessionId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Restore short memory + recent messages from sessionStorage
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as {
          sessionId?: string;
          messages?: UiMessage[];
          memory?: ShortMemory;
        };
        if (parsed.sessionId) setSessionId(parsed.sessionId);
        else setSessionId(createSessionId());
        if (parsed.messages?.length) setMessages(parsed.messages.slice(-20));
        if (parsed.memory) setMemory(parsed.memory);
      } else {
        setSessionId(createSessionId());
      }
    } catch {
      setSessionId(createSessionId());
    }
    setHydrated(true);
  }, []);

  // Persist short memory window
  useEffect(() => {
    if (!hydrated || !sessionId) return;
    try {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          sessionId,
          messages: messages.slice(-20),
          memory,
        }),
      );
    } catch {
      /* ignore quota */
    }
  }, [hydrated, sessionId, messages, memory]);

  useEffect(() => {
    if (!open) return;
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
    inputRef.current?.focus();
  }, [open, messages, loading]);

  async function sendMessage(raw: string) {
    const text = raw.trim();
    if (!text || loading) return;

    setError("");
    setInput("");
    const userMsg: UiMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      content: text,
    };
    const next = [...messages, userMsg];
    setMessages(next);
    setLoading(true);

    try {
      const history = next
        .filter((m) => m.id !== "welcome")
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          website: honeypot,
          sessionId,
          memory,
          messages:
            history.length > 0
              ? history
              : [{ role: "user", content: text }],
        }),
      });
      const data = (await res.json().catch(() => null)) as {
        reply?: string;
        error?: string;
        memory?: ShortMemory;
      } | null;

      if (!res.ok) {
        throw new Error(data?.error || "Gagal menghubungi asisten.");
      }

      if (data?.memory) setMemory(data.memory);

      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          content: data?.reply || "Maaf, aku belum bisa jawab sekarang.",
        },
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  }

  function clearChat() {
    setMessages([WELCOME]);
    setMemory({});
    setSessionId(createSessionId());
    setError("");
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-label="Sinta — MSG Assistant"
          aria-modal="false"
          className="flex h-[min(34rem,calc(100vh-6rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
        >
          <header className="flex items-center justify-between gap-3 border-b border-border bg-[#0B3A6E] px-4 py-3 text-white">
            <div className="flex items-center gap-2.5">
              <span className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/25">
                <Image
                  src={AVATAR_SRC}
                  alt="Sinta, asisten virtual MSG"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                  priority
                />
              </span>
              <div>
                <p className="text-sm font-semibold">Sinta</p>
                <p className="text-[11px] text-white/70">MSG Assistant · Online</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={clearChat}
                className="rounded-lg px-2 py-1.5 text-[11px] text-white/75 transition hover:bg-white/10 hover:text-white"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
                aria-label="Tutup chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </header>

          <div
            ref={listRef}
            className="flex-1 space-y-3 overflow-y-auto bg-gray-bg/60 px-3 py-4 dark:bg-background"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex gap-2",
                  msg.role === "user" ? "justify-end" : "justify-start",
                )}
              >
                {msg.role === "assistant" ? (
                  <span className="relative mt-0.5 h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
                    <Image
                      src={AVATAR_SRC}
                      alt=""
                      width={28}
                      height={28}
                      className="h-full w-full object-cover"
                    />
                  </span>
                ) : null}
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                    msg.role === "user"
                      ? "bg-[#0B3A6E] text-white"
                      : "border border-border bg-card text-foreground shadow-sm",
                  )}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
                {msg.role === "user" ? (
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <User className="h-3.5 w-3.5" aria-hidden />
                  </span>
                ) : null}
              </div>
            ))}

            {loading ? (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="relative h-6 w-6 overflow-hidden rounded-full">
                  <Image
                    src={AVATAR_SRC}
                    alt=""
                    width={24}
                    height={24}
                    className="h-full w-full object-cover opacity-80"
                  />
                </span>
                <span className="inline-flex gap-1">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#0B3A6E] [animation-delay:-0.2s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#0B3A6E] [animation-delay:-0.1s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#0B3A6E]" />
                </span>
                Sinta sedang mengetik…
              </div>
            ) : null}

            {messages.length <= 1 && !loading ? (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => void sendMessage(s)}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-left text-xs font-medium text-foreground transition hover:border-[#0B3A6E]/40 hover:bg-muted"
                  >
                    {s}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <form
            className="border-t border-border bg-background p-3"
            onSubmit={(e) => {
              e.preventDefault();
              void sendMessage(input);
            }}
          >
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
              aria-hidden
            />
            {error ? (
              <p className="mb-2 text-xs text-destructive" role="alert">
                {error}
              </p>
            ) : null}
            <div className="flex items-end gap-2">
              <label htmlFor="msg-chat-input" className="sr-only">
                Pesan
              </label>
              <textarea
                id="msg-chat-input"
                ref={inputRef}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    void sendMessage(input);
                  }
                }}
                placeholder="Tanya Sinta tentang MSG…"
                className="max-h-28 min-h-[44px] flex-1 resize-none rounded-xl border border-input bg-background px-3 py-2.5 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-orange/70"
                disabled={loading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={loading || !input.trim()}
                className="h-11 w-11 shrink-0 bg-[#0B3A6E] text-white hover:bg-[#0a3360]"
                aria-label="Kirim pesan"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">
              Sinta bisa keliru. Untuk keputusan bisnis, hubungi tim MSG langsung.
            </p>
          </form>
        </div>
      ) : null}

      <Button
        type="button"
        size="lg"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        className="h-14 gap-2 rounded-full bg-[#0B3A6E] pr-5 pl-2 text-white shadow-lg hover:bg-[#0a3360] hover:-translate-y-0.5 transition-transform"
      >
        {open ? (
          <>
            <X className="h-5 w-5" />
            <span className="hidden sm:inline">Tutup</span>
          </>
        ) : (
          <>
            <span className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/30">
              <Image
                src={AVATAR_SRC}
                alt=""
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </span>
            <span>Tanya Sinta</span>
            <MessageCircle className="h-4 w-4 opacity-80" aria-hidden />
          </>
        )}
      </Button>
    </div>
  );
}
