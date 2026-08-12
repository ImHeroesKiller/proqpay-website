"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, Paperclip, Send, UploadCloud } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Row = Record<string, unknown>;

export function AdminFollowUp({ id }: { id: string }) {
  const [rows, setRows] = useState<Row[]>([]);
  const [form, setForm] = useState({
    type: "MESSAGE",
    subject: "",
    message: "",
    dueDate: "",
  });
  const [files, setFiles] = useState<FileList | null>(null);
  const [category, setCategory] = useState("supporting");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const load = useCallback(async () => {
    const response = await fetch(
      `/api/admin/payroll/applications/${id}/follow-ups`,
    );
    if (response.status === 401) {
      window.location.href = "/portal";
      return;
    }
    const body = await response.json();
    if (response.ok) setRows(body.followups);
  }, [id]);

  useEffect(() => {
    void load();
  }, [load]);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [rows]);

  const send = async () => {
    if (!form.message.trim() && !files?.length) return;
    setBusy(true);
    setStatus("");
    try {
      const uploaded: string[] = [];
      for (const file of Array.from(files ?? [])) {
        if (file.size > 2 * 1024 * 1024)
          throw new Error(`${file.name} melebihi batas 2 MB.`);
        const payload = new FormData();
        payload.set("file", file);
        payload.set("category", category);
        payload.set("documentType", `admin-chat-${category}`);
        const upload = await fetch(
          `/api/payroll/applications/${id}/documents`,
          { method: "POST", body: payload },
        );
        if (!upload.ok)
          throw new Error(
            (await upload.json()).error || `Upload ${file.name} gagal.`,
          );
        uploaded.push(file.name);
      }
      const message = [
        form.message.trim(),
        uploaded.length ? `Lampiran: ${uploaded.join(", ")}` : "",
      ]
        .filter(Boolean)
        .join("\n\n");
      const response = await fetch(
        `/api/admin/payroll/applications/${id}/follow-ups`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ ...form, message }),
        },
      );
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Pesan gagal dikirim.");
      setForm({ ...form, subject: "", message: "", dueDate: "" });
      setFiles(null);
      setStatus("Pesan dan lampiran berhasil dikirim ke klien.");
      await load();
    } catch (error) {
      setStatus(
        error instanceof Error ? error.message : "Pesan gagal dikirim.",
      );
    } finally {
      setBusy(false);
    }
  };

  const ordered = [...rows].reverse();
  return (
    <main className="min-h-screen bg-[#f4f6f8]">
      <header className="bg-[#0B1F33] text-white">
        <div className="container-pro py-10">
          <Button asChild variant="ghost" className="mb-4 text-white">
            <Link href={`/admin/applications/${id}`}>
              <ArrowLeft />
              Detail Submission
            </Link>
          </Button>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-orange">
            Client Communication
          </p>
          <h1 className="mt-2 text-3xl font-bold">Client Chatroom</h1>
        </div>
      </header>
      <div className="container-pro py-8">
        <section className="mx-auto max-w-5xl overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="flex items-center justify-between border-b px-5 py-4">
            <div>
              <h2 className="font-bold">Assessment conversation</h2>
              <p className="text-xs text-muted-foreground">
                Pesan, permintaan dokumen, tindak lanjut, dan lampiran dalam
                satu ruang.
              </p>
            </div>
            <Badge variant="secondary">{rows.length} messages</Badge>
          </div>
          <div
            className="h-[28rem] space-y-4 overflow-y-auto bg-slate-50/70 p-5"
            aria-live="polite"
          >
            {ordered.length ? (
              ordered.map((item) => {
                const mine = item.sender_role === "ADMIN";
                return (
                  <div
                    key={String(item.id)}
                    className={`flex ${mine ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${mine ? "rounded-br-md bg-[#0B3A6E] text-white" : "rounded-bl-md border bg-white text-slate-900"}`}
                    >
                      <div className="mb-1 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-wide opacity-70">
                        <span>
                          {mine
                            ? "MSG Admin"
                            : String(item.sender_name || "Client")}
                        </span>
                        <span>·</span>
                        <span>{String(item.type).replaceAll("_", " ")}</span>
                      </div>
                      {Boolean(item.subject) && (
                        <strong className="block text-sm">
                          {String(item.subject)}
                        </strong>
                      )}
                      <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed">
                        {String(item.message)}
                      </p>
                      {Boolean(item.due_date) && (
                        <p className="mt-2 text-xs font-semibold">
                          Due{" "}
                          {new Date(String(item.due_date)).toLocaleDateString(
                            "id-ID",
                          )}
                        </p>
                      )}
                      <p className="mt-2 text-right text-[10px] opacity-60">
                        {new Date(String(item.created_at)).toLocaleString(
                          "id-ID",
                        )}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="py-16 text-center text-sm text-muted-foreground">
                Belum ada percakapan.
              </p>
            )}
            <div ref={endRef} />
          </div>
          <div className="border-t p-5">
            <div className="grid gap-3 sm:grid-cols-3">
              <div>
                <Label>Message type</Label>
                <select
                  className="mt-1 h-10 w-full rounded-lg border px-3 text-sm"
                  value={form.type}
                  onChange={(event) =>
                    setForm({ ...form, type: event.target.value })
                  }
                >
                  <option value="MESSAGE">Message</option>
                  <option value="DOCUMENT_REQUEST">Document Request</option>
                  <option value="ACTION_ITEM">Action Item</option>
                </select>
              </div>
              <div>
                <Label>Subject</Label>
                <Input
                  className="mt-1"
                  value={form.subject}
                  onChange={(event) =>
                    setForm({ ...form, subject: event.target.value })
                  }
                  placeholder="Optional subject"
                />
              </div>
              {form.type !== "MESSAGE" && (
                <div>
                  <Label>Due date</Label>
                  <Input
                    className="mt-1"
                    type="date"
                    value={form.dueDate}
                    onChange={(event) =>
                      setForm({ ...form, dueDate: event.target.value })
                    }
                  />
                </div>
              )}
            </div>
            <Textarea
              className="mt-3 min-h-24"
              value={form.message}
              onChange={(event) =>
                setForm({ ...form, message: event.target.value })
              }
              placeholder="Tulis pesan atau instruksi untuk klien..."
            />
            <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
              <div className="flex flex-wrap items-end gap-3">
                <div>
                  <Label className="text-xs">Kategori lampiran</Label>
                  <select
                    className="mt-1 h-9 rounded-lg border px-3 text-sm"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                  >
                    <option value="financial">Financial</option>
                    <option value="legal">Legal</option>
                    <option value="payroll">Payroll</option>
                    <option value="commercial">Contract / Commercial</option>
                    <option value="supporting">Supporting Other</option>
                  </select>
                </div>
                <label className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-lg border px-3 text-sm font-medium hover:bg-muted">
                  <Paperclip className="h-4 w-4" />
                  {files?.length
                    ? `${files.length} file dipilih`
                    : "Tambah lampiran"}
                  <input
                    className="sr-only"
                    multiple
                    type="file"
                    accept=".pdf,.xls,.xlsx,.png,.jpg,.jpeg"
                    onChange={(event) => setFiles(event.target.files)}
                  />
                </label>
                <span className="text-xs text-muted-foreground">
                  Maks. 2 MB per file
                </span>
              </div>
              <Button
                disabled={busy || (!form.message.trim() && !files?.length)}
                onClick={send}
              >
                {busy ? <UploadCloud className="animate-pulse" /> : <Send />}
                {busy ? "Mengirim..." : "Kirim"}
              </Button>
            </div>
            {status && (
              <p className="mt-3 rounded-lg bg-slate-100 p-3 text-sm">
                {status}
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
