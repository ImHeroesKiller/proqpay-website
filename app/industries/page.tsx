import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { industries } from "@/lib/content/industries";
import { buildMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "Industries",
  description:
    "Industries MSG supports with workforce solutions and business transformation: technology, construction, financial services, manufacturing, energy, logistics, retail, and professional services.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries we support"
        description="MSG supports workforce delivery and business transformation across key Indonesian sectors—not manpower placement alone. This is a capability map—not a list of named client endorsements."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries" },
        ]}
        cta={{
          label: "Schedule Business Consultation",
          href: "/request-consultation",
        }}
      />
      <section className="section-padding">
        <Container>
          <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-muted-foreground">
            MSG does not claim exclusive experience in every sector listed. Use
            these pages to explore how advisory, workforce solutions, and
            technology can support your industry context.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`}>
                <Card className="h-full transition duration-300 hover:-translate-y-0.5 hover:border-[#0B3A6E]/40 hover:shadow-md">
                  <CardHeader>
                    <CardTitle>{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {industry.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0B3A6E] dark:text-blue-300">
                      View industry <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand
        title="Discuss industry-specific workforce needs"
        description="Share your operating model, locations, and talent requirements with MSG."
        primaryHref="/request-consultation"
        primaryLabel="Request Consultation"
        secondaryHref="/services"
        secondaryLabel="Explore Services"
      />
    </>
  );
}
