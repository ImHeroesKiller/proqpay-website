import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { Statistic } from "@/components/shared/statistic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { proqpayFaqs, proqpayProduct } from "@/lib/content/proqpay";
import { industries } from "@/lib/content/industries";
import { Check } from "lucide-react";

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
  return <Badge variant={variant as "accent" | "secondary" | "outline"}>{status}</Badge>;
}

export default function ProQPayProductPage() {
  return (
    <>
      <PageHero
        title={proqpayProduct.headline}
        description={proqpayProduct.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "ProQPay" },
        ]}
        dark
        cta={{
          label: "Request a Demo",
          href: "/request-consultation?intent=proqpay-demo",
        }}
      />

      <section className="border-b border-border bg-background py-6">
        <Container className="flex flex-wrap items-center justify-between gap-4">
          <Badge variant="accent">{proqpayProduct.label}</Badge>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" size="sm">
              <a href={siteConfig.proqpayAppUrl} rel="noopener noreferrer">
                ProQPay Login
              </a>
            </Button>
            <Button asChild variant="accent" size="sm">
              <Link href="/request-consultation?intent=proqpay-demo">
                Request Demo
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">{proqpayProduct.problem.title}</h2>
            <p className="mt-3 text-muted-foreground">
              {proqpayProduct.problem.description}
            </p>
            <ul className="mt-6 space-y-3">
              {proqpayProduct.problem.points.map((point) => (
                <li key={point} className="text-sm text-muted-foreground">
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{proqpayProduct.solution.title}</h2>
            <p className="mt-3 text-muted-foreground">
              {proqpayProduct.solution.description}
            </p>
            <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-6 text-sm text-muted-foreground">
              ProQPay is developed and operated within the MSG ecosystem as the
              technology layer of MSG&apos;s workforce operating model.
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-navy-dark py-14 text-white">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {proqpayProduct.stats.map((stat) => (
              <div
                key={stat.label}
                className="[&_*]:text-white [&_p]:text-white/70"
              >
                <Statistic
                  value={stat.value}
                  label={stat.label}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <h2 className="text-2xl font-bold">Product capabilities</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Status labels distinguish what is available today from items that are
            planned or in development.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {proqpayProduct.features.map((feature) => (
              <Card key={feature.title}>
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

      <section className="section-padding">
        <Container>
          <h2 className="text-2xl font-bold">How ProQPay works</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {proqpayProduct.modules.map((module) => (
              <div
                key={module.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <h3 className="font-semibold">{module.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{module.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <h2 className="text-2xl font-bold">Security and auditability</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Role-based access controls for sensitive payroll data",
              "Approval history retained for material decisions",
              "Separation of prepare, approve, and pay responsibilities",
              "Designed for multi-entity operating control",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <h2 className="text-2xl font-bold">Industries</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="rounded-2xl border border-border bg-card p-5 transition hover:border-orange/40"
              >
                <div className="font-semibold">{industry.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {industry.summary}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <h2 className="text-2xl font-bold">Product roadmap</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Roadmap items are not claimed as operational until status is marked
            Available.
          </p>
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

      <FaqSection items={proqpayFaqs} showSchema />
      <CtaBand
        title="See ProQPay in a guided walkthrough"
        description="Request a demo of payroll processing, approvals, disbursement, and working capital support within the MSG ecosystem."
        primaryHref="/request-consultation?intent=proqpay-demo"
        primaryLabel="Request a Demo"
        secondaryHref={siteConfig.proqpayAppUrl}
        secondaryLabel="ProQPay Login"
      />
    </>
  );
}
