import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Landmark,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "MSG Payroll Service",
  description:
    "Managed payroll processing, administration, disbursement, reporting, and optional payroll funding powered by ProQPay.",
  path: "/payroll",
});

const services = [
  {
    icon: CheckCircle2,
    title: "Payroll Processing",
    body: "Payroll calculation, pay components, deductions, and exception handling.",
  },
  {
    icon: Workflow,
    title: "Payroll Administration",
    body: "Agreed payroll administration scope, including PPh 21 and BPJS support where applicable.",
  },
  {
    icon: Landmark,
    title: "Salary Disbursement",
    body: "Controlled approval, payment instruction, execution, and reconciliation workflow.",
  },
  {
    icon: BarChart3,
    title: "Payroll Reporting",
    body: "Structured payroll reporting for HR, finance, and management visibility.",
  },
  {
    icon: ShieldCheck,
    title: "Optional Payroll Funding",
    body: "Temporary payroll funding for eligible clients, subject to MSG financial and credit assessment.",
  },
];

export default function PayrollLanding() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1F33] text-white">
        <Container className="py-16 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-orange">
            MSG Managed Payroll Service
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Payroll lebih sederhana, terkontrol, dan terukur.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            MSG mengoperasikan layanan payroll menggunakan ProQPay sebagai platform kontrol untuk processing, approval, salary disbursement, reconciliation, dan reporting.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="accent" size="lg">
              <Link href="/request-consultation?intent=payroll-assessment">
                Request Payroll Assessment <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              <Link href="/payroll/register">Start Client Registration</Link>
            </Button>
          </div>
          <p className="mt-5 text-sm text-white/50">
            Existing client? <Link href="/payroll/dashboard" className="font-semibold text-white/80 hover:text-white">Open Client Dashboard</Link>
          </p>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">
              Service Scope
            </p>
            <h2 className="mt-3 text-3xl font-bold">Managed service powered by ProQPay</h2>
            <p className="mt-3 text-muted-foreground">
              ProQPay is the technology platform. MSG Payroll Service is the operating service delivered by MSG using that platform. Optional payroll funding is separate and assessment-based.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border bg-card p-6">
                <Icon className="h-6 w-6 text-orange" />
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-orange/20 bg-orange/5 p-5 text-sm leading-relaxed text-muted-foreground">
            PPh 21 and BPJS administration can be included in the managed-service scope where agreed. Native automation inside ProQPay should only be treated as available when confirmed for the client implementation.
          </div>
        </Container>
      </section>
    </>
  );
}
