"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  FileText,
  LogOut,
  Paperclip,
  RefreshCw,
  Send,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Row = Record<string, string | number | boolean | null>;
type Portal = {
  application: Row;
  documents: Row[];
  activity: Row[];
  followups: Row[];
};

export function ClientPortalHome() {
  const [data, setData] = useState<Portal | null>(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [category, setCategory] = useState("supporting");
  const [busy, setBusy] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const load = useCallback(async () => {
    const response = await fetch("/api/payroll/client");
    if (response.status === 401 || response.status === 403) {
      window.location.href = "/portal";
      return;
    }
    const body = await response.json();
    if (response.ok) setData(body);
    else setError(body.error || "Data tidak dapat dimuat");
  }, []);
  useEffect(() => {
    void load();
  }, [load]);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [data?.followups]);

  const send = async () => {
    if ((!message.trim() && !files?.length) || !data) return;
    setBusy(true);
    setError("");
    try {
      const uploaded: string[] = [];
      for (const file of Array.from(files ?? [])) {
        if (file.size > 2 * 1024 * 1024)
          throw new Error(`${file.name} melebihi batas 2 MB.`);
        const payload = new FormData();
        payload.set("file", file);
        payload.set("category", category);
        payload.set("documentType", `client-chat-${category}`);
        const upload = await fetch(
          `/api/payroll/applications/${data.application.id}/documents`,
          { method: "POST", body: payload },
        );
        if (!upload.ok)
          throw new Error(
            (await upload.json()).error || `Upload ${file.name} gagal.`,
          );
        uploaded.push(file.name);
      }
      const composed = [
        message.trim(),
        uploaded.length ? `Lampiran: ${uploaded.join(", ")}` : "",
      ]
        .filter(Boolean)
        .join("\n\n");
      const response = await fetch("/api/payroll/follow-ups", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          subject: uploaded.length ? "Pesan dengan lampiran" : undefined,
          message: composed,
        }),
      });
      if (!response.ok)
        throw new Error(
          (await response.json()).error || "Pesan gagal dikirim.",
        );
      setMessage("");
      setFiles(null);
      await load();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Pesan gagal dikirim.");
    } finally {
      setBusy(false);
    }
  };
  const logout = async () => {
    await fetch("/api/payroll/logout", { method: "POST" });
    window.location.href = "/portal";
  };

  if (!data)
    return (
      <main className="container-pro py-20">
        <Button asChild variant="ghost">
          <Link href="/portal">
            <ArrowLeft />
            Portal Login
          </Link>
        </Button>
        <p className="mt-8">{error || "Memuat dashboard client..."}</p>
      </main>
    );
  const application = data.application;
  const company = JSON.parse(String(application.company_json || "{}"));
  const payroll = JSON.parse(String(application.payroll_json || "{}"));
  const open = data.followups.filter(
    (item) => item.sender_role === "ADMIN" && item.status === "OPEN",
  );
  const ordered = [...data.followups].reverse();

  return (
    <main className="min-h-screen bg-[#f4f6f8]">
      <header className="bg-[#0B1F33] text-white">
        <div className="container-pro flex flex-wrap items-center justify-between gap-4 py-10">
          <div>
            <Button asChild variant="ghost" className="mb-3 text-white">
              <Link href="/">
                <ArrowLeft />
                Website MSG
              </Link>
            </Button>
            <p className="text-xs font-bold uppercase tracking-wider text-orange">
              {String(application.registration_number)}
            </p>
            <h1 className="mt-2 text-3xl font-bold">{company.legalName}</h1>
            <p className="text-white/60">Client Action Center</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={load} className="bg-white/10 text-white">
              <RefreshCw />
              Refresh
            </Button>
            <Button onClick={logout} variant="ghost" className="text-white">
              <LogOut />
              Logout
            </Button>
          </div>
        </div>
      </header>
      <div className="container-pro py-8">
        <div className="grid gap-4 md:grid-cols-4">
          <Stat
            label="Status"
            value={String(application.status).replaceAll("_", " ")}
          />
          <Stat
            label="Employees"
            value={String(payroll.employeeCount || "—")}
          />
          <Stat
            label="Monthly Payroll"
            value={`IDR ${Number(payroll.monthlyPayroll || 0).toLocaleString("id-ID")}`}
          />
          <Stat label="Open Follow-ups" value={String(open.length)} />
        </div>
        {application.assessment_notes && (
          <section className="mt-6 rounded-2xl border-l-4 border-orange bg-amber-50 p-6">
            <p className="text-xs font-bold uppercase text-amber-700">
              Assessment highlight
            </p>
            <p className="mt-2 text-amber-950">
              {String(application.assessment_notes)}
            </p>
          </section>
        )}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="space-y-6">
            <section className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <div className="flex items-center justify-between border-b px-5 py-4">
                <div>
                  <h2 className="text-xl font-bold">Chatroom MSG</h2>
                  <p className="text-xs text-muted-foreground">
                    Diskusi assessment dan tindak lanjut dokumen.
                  </p>
                </div>
                <Badge variant="secondary">{data.followups.length}</Badge>
              </div>
              <div
                className="h-[30rem] space-y-4 overflow-y-auto bg-slate-50/70 p-5"
                aria-live="polite"
              >
                {ordered.length ? (
                  ordered.map((item) => {
                    const mine = item.sender_role === "CLIENT";
                    return (
                      <div
                        key={String(item.id)}
                        className={`flex ${mine ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${mine ? "rounded-br-md bg-[#0B3A6E] text-white" : "rounded-bl-md border bg-white"}`}
                        >
                          <div className="mb-1 text-[10px] uppercase tracking-wide opacity-65">
                            {mine ? "Anda" : "MSG Admin"} ·{" "}
                            {String(item.type).replaceAll("_", " ")}
                          </div>
                          {item.subject && (
                            <strong className="block text-sm">
                              {String(item.subject)}
                            </strong>
                          )}
                          <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed">
                            {String(item.message)}
                          </p>
                          {item.due_date && (
                            <p className="mt-2 text-xs font-bold">
                              Due{" "}
                              {new Date(
                                String(item.due_date),
                              ).toLocaleDateString("id-ID")}
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
                <Textarea
                  className="min-h-24"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tulis pertanyaan, konfirmasi, atau update tindak lanjut..."
                />
                <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
                  <div className="flex flex-wrap items-end gap-3">
                    <select
                      aria-label="Kategori lampiran"
                      className="h-9 rounded-lg border px-3 text-sm"
                      value={category}
                      onChange={(event) => setCategory(event.target.value)}
                    >
                      <option value="financial">Financial</option>
                      <option value="legal">Legal</option>
                      <option value="payroll">Payroll</option>
                      <option value="commercial">Contract / Commercial</option>
                      <option value="supporting">Supporting Other</option>
                    </select>
                    <label className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-lg border px-3 text-sm font-medium hover:bg-muted">
                      <Paperclip className="h-4 w-4" />
                      {files?.length
                        ? `${files.length} file dipilih`
                        : "Lampirkan file"}
                      <input
                        className="sr-only"
                        multiple
                        type="file"
                        accept=".pdf,.xls,.xlsx,.png,.jpg,.jpeg"
                        onChange={(event) => setFiles(event.target.files)}
                      />
                    </label>
                    <span className="text-xs text-muted-foreground">
                      Maks. 2 MB/file
                    </span>
                  </div>
                  <Button
                    disabled={busy || (!message.trim() && !files?.length)}
                    onClick={send}
                  >
                    <Send />
                    {busy ? "Mengirim..." : "Kirim"}
                  </Button>
                </div>
                {error && (
                  <p className="mt-3 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                    {error}
                  </p>
                )}
              </div>
            </section>
            <Card title="Dokumen">
              <Badge>{data.documents.length} files</Badge>
              <div className="mt-4 space-y-2">
                {data.documents.map((document) => (
                  <div
                    key={String(document.id)}
                    className="flex gap-3 rounded-xl bg-muted/50 p-3"
                  >
                    <FileText className="text-[#0B3A6E]" />
                    <div>
                      <strong className="text-sm">
                        {String(document.original_filename)}
                      </strong>
                      <p className="text-xs text-muted-foreground">
                        {String(document.category)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div className="space-y-6">
            <Card title="Timeline">
              <div className="space-y-4">
                {data.activity.map((item, index) => (
                  <div key={index} className="border-l-2 border-orange pl-4">
                    <p className="text-sm font-medium">
                      {String(item.action).replaceAll("_", " ")}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(String(item.created_at)).toLocaleString(
                        "id-ID",
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
            {application.award_title && (
              <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <h2 className="text-xl font-bold text-emerald-950">
                  {String(application.award_title)}
                </h2>
                <p className="mt-2 text-sm text-emerald-800">
                  {String(application.award_terms)}
                </p>
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border bg-white p-6">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      {children}
    </section>
  );
}
function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5">
      <p className="text-xs uppercase text-muted-foreground">{label}</p>
      <p className="mt-2 text-lg font-bold">{value}</p>
    </div>
  );
}
