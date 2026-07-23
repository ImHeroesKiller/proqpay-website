import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { ProcessFlow } from "@/components/shared/process-flow";
import { servicePillars } from "@/lib/content/services";
import { aboutContent } from "@/lib/content/about";
import { buildMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from "lucide-react";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "MSG services: Strategic Advisory (featured), Workforce Solutions, and Workforce Technology—enterprise workforce solutions and business transformation for Indonesian organizations.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Enterprise services for performance and transformation"
        description="Three integrated capabilities: Strategic Advisory, Workforce Solutions, and Workforce Technology. MSG helps organizations improve, operate, transform, grow, and scale."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        cta={{
          label: "Schedule Business Consultation",
          href: "/request-consultation",
        }}
      />

      <section className="section-padding">
        <Container className="space-y-10">
          {servicePillars.map((pillar) => (
            <Link
              key={pillar.id}
              href={pillar.href}
              className="group block"
            >
              <Card
                className={`overflow-hidden transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                  pillar.badge
                    ? "border-[#0B3A6E]/40 ring-1 ring-[#0B3A6E]/15"
                    : "hover:border-[#0B3A6E]/40"
                }`}
              >
                <div className="grid lg:grid-cols-[1.1fr_1fr]">
                  <CardHeader className="space-y-4 p-8 sm:p-10">
                    {pillar.badge ? (
                      <Badge className="w-fit bg-orange/15 text-orange hover:bg-orange/15">
                        {pillar.badge}
                      </Badge>
                    ) : null}
                    <CardTitle className="text-2xl sm:text-3xl group-hover:text-[#0B3A6E] dark:group-hover:text-blue-300">
                      {pillar.title}
                    </CardTitle>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                    <p className="text-sm font-medium text-foreground/85">
                      {pillar.positioning}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0B3A6E] dark:text-blue-300">
                      Explore {pillar.title}{" "}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </CardHeader>
                  <CardContent className="border-t border-border bg-gray-bg p-8 dark:bg-background/50 sm:p-10 lg:border-l lg:border-t-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      How we help
                    </p>
                    <ul className="mt-4 space-y-3">
                      {pillar.solutions.slice(0, 5).map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0B3A6E] dark:text-blue-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <h2 className="text-2xl font-bold sm:text-3xl">How service delivery works</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            A shared operating rhythm across advisory, workforce, and technology
            engagements.
          </p>
          <div className="mt-10">
            <ProcessFlow steps={aboutContent.howWeWork} variant="cycle" />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Discuss Your Business"
        description="Talk with MSG about Strategic Advisory, Workforce Solutions, or Workforce Technology."
        primaryHref="/request-consultation"
        primaryLabel="Schedule Business Consultation"
        secondaryHref="/contact"
        secondaryLabel="Contact MSG"
      />
    </>
  );
}
