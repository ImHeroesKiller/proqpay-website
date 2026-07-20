import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { ProcessFlow } from "@/components/shared/process-flow";
import { ProQPayLogo } from "@/components/layout/logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { proqpayFaqs, proqpayProduct } from "@/lib/content/proqpay";
import { Check } from "lucide-react";

const payrollFlow = [
  {
    step: 1,
    title: "Prepare & validate",
    description: "Attendance, pay items, exceptions, and readiness checks.",
  },
  {
    step: 2,
    title: "Multi-level approval",
    description: "Configurable HR and finance authorization before money moves.",
  },
  {
    step: 3,
    title: "Payment instructions",
    description: "Client-funded orchestration with optional working capital path.",
  },
  {
    step: 4,
    title: "Reconcile & report",
    description: "Settlement visibility, audit trail, and leadership reporting.",
  },
];

export const metadata = buildMetadata({
  title: "ProQPay",
  description: proqpayProduct.description,
  path: "/products/proqpay",
});

function StatusBadge({ status }: { status: string }) {
  const variant =
    status === "Available"
      ? "accent"
      : status === "In Development"
        ? "secondary"
        : "outline";
  return (
    <Badge variant={variant as "accent" | "secondary" | "outline"}>{status}</Badge>
  );
}

/** SaaS product experience — distinct from corporate MSG homepage. */
export default function ProQPayProductPage() {
  return (
    <div className="bg-background">
      {/* Product hero — Stripe/Deel style density */}
      <section className="border-b border-border bg-[#0B1F33] text-white">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <div className="mb-6">
              <ProQPayLogo variant="light" />
            </div>
            <Badge className="bg-orange/20 text-orange hover:bg-orange/20">
              {proqpayProduct.label}
            </Badge>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              {proqpayProduct.headline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              {proqpayProduct.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="accent" size="lg">
                <Link href="/contact?intent=payroll-demo">Request Demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <a href={siteConfig.appUrl} rel="noopener noreferrer">
                  Open App
                </a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-white/45">
              Product of PT Mandiri Semesta Gemilang · msg-os.com
            </p>
          </div>
          <div
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#102A43] shadow-sm"
            aria-hidden
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-2 text-xs text-white/45">Payroll Console</span>
            </div>
            <div className="space-y-3 p-4">
              <div className="grid grid-cols-3 gap-2">
                {["Runs", "Approvals", "Paid"].map((label) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-white/5 p-3"
                  >
                    <div className="text-[10px] uppercase text-white/40">{label}</div>
                    <div className="mt-1 h-2 w-12 rounded bg-orange/50" />
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-3 flex justify-between text-xs text-white/50">
                  <span>Current cycle</span>
                  <span className="text-orange">In review</span>
                </div>
                {[70, 45, 88, 52].map((w, i) => (
                  <div key={i} className="mb-2 h-2 rounded bg-white/10">
                    <div
                      className="h-2 rounded bg-orange/70"
                      style={{ width: `${w}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem */}
      <section className="section-padding">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">
              Payroll problems
            </p>
            <h2 className="mt-3 text-3xl font-bold">{proqpayProduct.problem.title}</h2>
            <p className="mt-4 text-muted-foreground">
              {proqpayProduct.problem.description}
            </p>
          </div>
          <ul className="space-y-3">
            {proqpayProduct.problem.points.map((point) => (
              <li
                key={point}
                className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
              >
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Solution */}
      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">
            Solution
          </p>
          <h2 className="mt-3 text-3xl font-bold">{proqpayProduct.solution.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {proqpayProduct.solution.description}
          </p>
        </Container>
      </section>

      {/* Payroll process graph */}
      <section className="section-padding">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-bold">Payroll operating flow</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            A clear control plane from preparation through reconciliation.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-sm">
            <Image
              src="/images/products/proqpay-flow.svg"
              alt="ProQPay payroll process: validate, approve, instruct, reconcile"
              width={1200}
              height={400}
              className="h-auto w-full"
              unoptimized
            />
          </div>
          <div className="mt-10">
            <ProcessFlow steps={payrollFlow} variant="horizontal" tone="orange" />
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="section-padding">
        <Container>
          <h2 className="text-3xl font-bold">Features</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Status labels show what is available versus planned or in development.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {proqpayProduct.features.map((feature) => (
              <Card key={feature.title} className="transition hover:border-orange/40">
                <CardHeader className="space-y-3">
                  <StatusBadge status={feature.status} />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {feature.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Modules detail */}
      <section className="section-padding bg-[#0B1F33] text-white">
        <Container>
          <h2 className="text-3xl font-bold">Working capital, workflow & reports</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {proqpayProduct.modules.map((module) => (
              <div
                key={module.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="font-semibold text-orange">{module.title}</h3>
                <p className="mt-2 text-sm text-white/70">{module.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Roadmap */}
      <section className="section-padding">
        <Container>
          <h2 className="text-3xl font-bold">Roadmap</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {proqpayProduct.roadmap.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3"
              >
                <span className="text-sm font-medium">{item.title}</span>
                <StatusBadge status={item.status} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <h2 className="text-2xl font-bold">Security & auditability</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Role-based access for sensitive payroll data",
              "Approval history for material decisions",
              "Separation of prepare, approve, and pay",
              "Multi-entity control model",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FaqSection items={proqpayFaqs} />

      <CtaBand
        title="Request a ProQPay demo"
        description="See payroll processing, approvals, disbursement, and working capital support in a guided walkthrough."
        primaryHref="/contact?intent=payroll-demo"
        primaryLabel="Request Demo"
        secondaryHref={siteConfig.appUrl}
        secondaryLabel="Open App"
      />
    </div>
  );
}
