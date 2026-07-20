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
    "MSG supports manufacturing, retail, construction and engineering, logistics, professional services, and financial services organizations.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industry-ready workforce solutions"
        description="MSG supports enterprises where staffing reliability, operational supervision, and process discipline are critical."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries" },
        ]}
      />
      <section className="section-padding">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`}>
              <Card className="h-full transition hover:-translate-y-0.5 hover:border-orange/40">
                <CardHeader>
                  <CardTitle>{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {industry.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange">
                    View industry <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
