import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
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

const payrollFlow = [
  {
    step: 1,
    title: "Prepare",
    description: "Bring payroll inputs and exceptions into one controlled cycle.",
  },
  {
    step: 2,
    title: "Approve",
    description: "HR and finance review and authorize payroll before payment.",
  },
  {
    step: 3,
    title: "Disburse",
    description: "Generate and track salary payment instructions through the agreed funding path.",
  },
  {
    step: 4,
    title: "Reconcile",
    description: "Close the cycle with payment status, audit trail, and reporting.",
  },
];

export const metadata = buildMetadata({
  title: "ProQPay | Enterprise Payroll Operating Platform",
  description: proqpayProduct.description,
  path: "/products/proqpay",
});

export default function ProQPayProductPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-[#0B1F33] text-white">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
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
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="accent" size="lg">
                <Link href="/request-consultation?intent=payroll-assessment">
                  Request Payroll Assessment
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/payroll/register">Start Client Registration</Link>
              </Button>
            </div>
            <a
              href={siteConfig.appUrl}
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-white/65 transition hover:text-white"
            >
              Existing client? Open ProQPay <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-xl">
            <div className="relative aspect-video">
              <Image
                src="/images/products/proqpay-image -hero.png"
                alt="ProQPay enterprise payroll dashboard"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center"
                priority
              />
            </div>
            <div className="border-t border-slate-200 bg-white px-5 py-4 text-slate-900">
              <p className="text-sm font-semibold">One payroll operating workflow</p>
              <p className="mt-1 text-xs text-slate-500">
                Processing · Approval · Disbursement · Reconciliation · Reporting
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">
              How to use ProQPay
            </p>
            <h2 className="mt-3 text-3xl font-bold">One platform, three engagement models</h2>
            <p className="mt-3 text-muted-foreground">
              ProQPay is the technology. MSG Payroll Service is the managed service powered by ProQPay. Payroll Funding is an optional facility for eligible clients.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {proqpayProduct.engagementModels.map((model) => (
              <Card key={model.title} className="h-full border-border/80">
                <CardHeader>
                  <CardTitle className="text-xl">{model.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  {model.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">
            Operating Flow
          </p>
          <h2 className="mt-3 text-3xl font-bold">From payroll preparation to reconciliation</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            A clear sequence of responsibilities keeps payroll controlled before, during, and after salary payment.
          </p>
          <div className="mt-10">
            <ProcessFlow steps={payrollFlow} variant="horizontal" tone="orange" />
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">
              Available Today
            </p>
            <h2 className="mt-3 text-3xl font-bold">Core payroll capabilities</h2>
            <p className="mt-3 text-muted-foreground">
              The public product page focuses on capabilities that can be discussed and scoped today rather than future roadmap items.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {proqpayProduct.features.map((feature) => (
              <Card key={feature.title} className="h-full transition hover:border-orange/40">
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-[#0B1F33] text-white">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">
              Controls
            </p>
            <h2 className="mt-3 text-3xl font-bold">Security & auditability</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Role-based access for sensitive payroll data",
                "Approval history for material payroll decisions",
                "Separation of prepare, approve, and pay responsibilities",
                "Traceable workflow status across the payroll cycle",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-orange">PPh 21 & BPJS scope</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              MSG Managed Payroll can support agreed PPh 21 and BPJS administration as part of the service scope. Native ProQPay automation is only represented as live when confirmed for the client implementation.
            </p>
          </div>
        </Container>
      </section>

      <FaqSection items={proqpayFaqs} />

      <CtaBand
        title="Start with your payroll requirement"
        description="Talk with MSG first to define the operating model, service scope, controls, and whether optional payroll funding is relevant to your company."
        primaryHref="/request-consultation?intent=payroll-assessment"
        primaryLabel="Request Payroll Assessment"
        secondaryHref="/payroll/register"
        secondaryLabel="Start Client Registration"
      />
    </div>
  );
}
