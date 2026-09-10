import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function Success({
  searchParams,
}: {
  searchParams: Promise<{ registration?: string }>;
}) {
  const { registration } = await searchParams;
  const timeline = [
    "Registration",
    "Assessment",
    "Document Review",
    "Credit Review",
    "Proposal",
    "Agreement",
    "Go Live",
  ];

  return (
    <main className="container-pro py-20">
      <div className="mx-auto max-w-3xl rounded-3xl border bg-card p-8 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600" />
        <h1 className="mt-5 text-3xl font-bold">Registrasi Berhasil</h1>
        <p className="mt-2 text-muted-foreground">Nomor registrasi Anda</p>
        <p className="mt-4 rounded-xl bg-muted p-4 font-mono text-xl font-bold">
          {registration ?? "Pending"}
        </p>
        <div className="mt-5 inline-flex rounded-full border border-orange/20 bg-orange/5 px-4 py-2 text-sm font-semibold text-foreground">
          Status: Initial Review
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-muted-foreground sm:grid-cols-4 lg:grid-cols-7">
          {timeline.map((stage, index) => (
            <div key={stage} className="rounded-xl border bg-background p-3">
              <div className={`mx-auto mb-2 h-2 w-2 rounded-full ${index === 0 ? "bg-orange" : "bg-border"}`} />
              {stage}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Tim MSG akan melakukan initial review terhadap informasi dan dokumen yang dikirim sebelum proses assessment berikutnya.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/payroll/dashboard">Buka Client Dashboard</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/payroll">Payroll Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
