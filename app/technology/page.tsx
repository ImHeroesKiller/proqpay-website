import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { ProcessFlow } from "@/components/shared/process-flow";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import {
  futureTechnologyProducts,
  servicePillars,
} from "@/lib/content/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, ShieldCheck, Workflow } from "lucide-react";

const pillar = servicePillars.find((p) => p.id === "workforce-technology")!;

export const metadata = buildMetadata({
  title: "Workforce Technology",
  description:
    "MSG Workforce Technology: technology that empowers workforce operations. ProQPay is the flagship product, with future platforms planned.",
  path: "/technology",
});

const productPipeline = [
  {
    step: 1,
    title: "Identify operational friction",
    description:
      "Map payroll, workforce admin, and visibility gaps that technology can solve.",
  },
  {
    step: 2,
    title: "Design product controls",
    description:
      "Define workflows, approvals, auditability, and integration boundaries.",
  },
  {
    step: 3,
    title: "Ship usable modules",
    description:
      "Deliver practical capabilities that operations and finance teams can run daily.",
  },
  {
    step: 4,
    title: "Improve with field feedback",
    description:
      "Refine based on real payroll cycles, multi-entity complexity, and client feedback.",
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
          label: "Request ProQPay Demo",
          href: "/contact?intent=payroll-demo",
        }}
      />

      <section className="section-padding">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Card className="border-orange/30 shadow-sm">
            <CardHeader>
              <Badge variant="accent" className="w-fit">
                {siteConfig.products.proqpay.label}
              </Badge>
              <CardTitle className="mt-3 font-heading text-2xl">
                Pro<span className="text-orange">Q</span>Pay
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {siteConfig.products.proqpay.headline}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {siteConfig.products.proqpay.description}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Payroll validation and multi-level approval",
                  "Client-funded execution orchestration",
                  "Optional working capital workflow",
                  "Reconciliation, audit trail, and reporting",
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
                  <a href={siteConfig.appUrl} rel="noopener noreferrer">
                    Open App
                  </a>
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
                <h2 className="mt-2 text-xl font-bold">
                  Built for operations, not demo theatre
                </h2>
              </div>
            </div>
            <p className="relative mt-5 text-sm leading-relaxed text-white/75">
              MSG develops technology where operational friction is real: payroll
              visibility, approval discipline, disbursement orchestration, and
              auditability for Indonesian enterprise workforce environments.
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

      <section
        id="future"
        className="section-padding scroll-mt-28 bg-gray-bg dark:bg-background"
      >
        <Container>
          <h2 className="text-2xl font-bold sm:text-3xl">Future products</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Architecture ready for expansion. Products below are planned with{" "}
            <strong>Coming Soon</strong> status—not live feature claims.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {futureTechnologyProducts.map((product) => (
              <Card key={product.title} className="h-full">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    {product.status}
                  </Badge>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <h2 className="text-2xl font-bold sm:text-3xl">How MSG builds products</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            A practical product development flow grounded in workforce operations.
          </p>
          <div className="mt-10">
            <ProcessFlow steps={productPipeline} variant="horizontal" tone="orange" />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Interested in Workforce Technology?"
        description="Request a ProQPay demo or discuss how MSG technology can support your workforce operations."
        primaryHref="/contact?intent=payroll-demo"
        primaryLabel="Request ProQPay Demo"
        secondaryHref="/products/proqpay"
        secondaryLabel="Explore ProQPay"
      />
    </>
  );
}
