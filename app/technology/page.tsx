import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, ShieldCheck, Workflow } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { ProcessFlow } from "@/components/shared/process-flow";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { servicePillars } from "@/lib/content/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const pillar = servicePillars.find((p) => p.id === "workforce-technology")!;

export const metadata = buildMetadata({
  title: "Workforce Technology",
  description:
    "MSG Workforce Technology focuses on practical workforce systems, led by ProQPay as the enterprise payroll operating platform.",
  path: "/technology",
});

const productPipeline = [
  {
    step: 1,
    title: "Identify friction",
    description: "Map operational problems that technology can solve clearly.",
  },
  {
    step: 2,
    title: "Design controls",
    description: "Define workflow, approvals, auditability, and ownership.",
  },
  {
    step: 3,
    title: "Deploy usable capability",
    description: "Ship practical tools that operations and finance can use every day.",
  },
  {
    step: 4,
    title: "Improve from usage",
    description: "Refine the product from real operating cycles and client feedback.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        title="Workforce Technology"
        description={pillar.positioning}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Technology" },
        ]}
        cta={{
          label: "Explore ProQPay",
          href: "/products/proqpay",
        }}
      />

      <section className="section-padding">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Card className="border-orange/30 shadow-sm">
            <CardHeader>
              <Badge variant="accent" className="w-fit">
                {siteConfig.products.proqpay.label}
              </Badge>
              <CardTitle className="mt-3 text-2xl">ProQPay</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg font-semibold text-foreground">
                {siteConfig.products.proqpay.headline}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {siteConfig.products.proqpay.description}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Payroll processing and multi-level approval",
                  "Salary disbursement workflow",
                  "Reconciliation, reporting, and audit trail",
                  "Optional payroll funding for assessed clients",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild variant="accent">
                  <Link href="/products/proqpay">
                    Explore ProQPay <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/request-consultation?intent=payroll">
                    Request Payroll Assessment
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="relative overflow-hidden rounded-3xl border border-border bg-[#0B1F33] p-6 text-white sm:p-8">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange/20 blur-2xl" />
            <div className="relative flex items-start gap-4">
              <Image
                src="/brand/icon-msg-256.png"
                alt="MSG brand mark"
                width={56}
                height={56}
                className="h-14 w-14 rounded-2xl object-cover ring-2 ring-white/10"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange">
                  Product philosophy
                </p>
                <h2 className="mt-2 text-xl font-bold">Built around real operations</h2>
              </div>
            </div>
            <p className="relative mt-5 text-sm leading-relaxed text-white/75">
              MSG develops technology where operating control matters: payroll visibility, approval discipline, payment workflow, reconciliation, and auditability for enterprise workforce environments.
            </p>
            <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Workflow, label: "Workflow first" },
                { icon: ShieldCheck, label: "Audit ready" },
                { icon: Layers, label: "Modular growth" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center text-xs font-medium text-white/85"
                >
                  <Icon className="mx-auto mb-2 h-4 w-4 text-orange" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">
              Product Development
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">How MSG builds workforce technology</h2>
            <p className="mt-2 text-muted-foreground">
              We keep the public story focused on usable capability today. Future product ideas stay outside the main sales journey until they are ready to be scoped with clients.
            </p>
          </div>
          <div className="mt-10">
            <ProcessFlow steps={productPipeline} variant="horizontal" tone="orange" />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Start with the workforce problem"
        description="Discuss your payroll or workforce technology requirement with MSG, then choose the right product and service model."
        primaryHref="/request-consultation?intent=payroll"
        primaryLabel="Request Payroll Assessment"
        secondaryHref="/products/proqpay"
        secondaryLabel="Explore ProQPay"
      />
    </>
  );
}
