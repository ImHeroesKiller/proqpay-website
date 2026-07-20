import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { FeatureCard } from "@/components/shared/feature-card";
import { CtaBand } from "@/components/sections/cta-band";
import { solutions } from "@/lib/content/solutions";
import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "Solutions",
  description:
    "Explore ProQPay payroll solutions: processing, disbursement, working capital, approvals, reports, and compliance for Indonesian enterprises.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        title="Payroll solutions for enterprise operations"
        description="End-to-end capabilities spanning processing, multi-bank disbursement, controlled approvals, compliance, and reporting."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions" },
        ]}
        cta={{ label: "Request Demo", href: "/request-demo" }}
      />
      <section className="section-padding">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <FeatureCard
                key={solution.slug}
                title={solution.title}
                description={solution.summary}
                href={`/solutions/${solution.slug}`}
                icon={solution.icon}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/platform">Explore the platform</Link>
            </Button>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
