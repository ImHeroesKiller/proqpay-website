import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { JsonLd } from "@/components/shared/json-ld";
import { ProcessFlow } from "@/components/shared/process-flow";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import {
  getService,
  servicePillars,
  workforceSubServices,
} from "@/lib/content/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";

const pillar = servicePillars.find((p) => p.id === "workforce-solutions")!;
const service = getService("workforce-solutions")!;

export const metadata = buildMetadata({
  title: "Workforce Solutions",
  description:
    "MSG Workforce Solutions: end-to-end workforce outsourcing, engineering talent, business support, and managed workforce operations for Indonesian enterprises.",
  path: "/services/workforce-solutions",
});

export default function WorkforceSolutionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Workforce Solutions", path: "/services/workforce-solutions" },
        ])}
      />

      <PageHero
        title="Workforce Solutions"
        description={pillar.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Workforce Solutions" },
        ]}
        cta={{
          label: "Talk to Our Workforce Experts",
          href: "/request-consultation?intent=workforce-solutions",
        }}
      />

      <section className="section-padding">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Challenges</h2>
            <ul className="mt-6 space-y-3">
              {pillar.challenges.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Solutions</h2>
            <ul className="mt-6 space-y-3">
              {pillar.solutions.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0B3A6E] dark:text-blue-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <h2 className="text-2xl font-bold sm:text-3xl">Sub-services</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Four focused offerings under one Workforce Solutions umbrella—not four
            disconnected service lines.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {workforceSubServices.map((sub) => (
              <Link key={sub.slug} href={sub.href} className="group block h-full">
                <Card className="h-full transition hover:-translate-y-0.5 hover:border-[#0B3A6E]/40 hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-[#0B3A6E] dark:group-hover:text-blue-300">
                      {sub.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{sub.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#0B3A6E] dark:text-blue-300">
                      View service{" "}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <h2 className="text-2xl font-bold">Benefits</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillar.benefits.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed shadow-sm"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0B3A6E] dark:text-blue-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <h2 className="text-2xl font-bold">Process</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            From workforce planning to continuous operational improvement.
          </p>
          <div className="mt-10">
            <ProcessFlow steps={pillar.process} variant="horizontal" />
          </div>
        </Container>
      </section>

      {service.faq.length > 0 ? (
        <FaqSection
          title="Workforce Solutions FAQ"
          description="Common questions about MSG workforce delivery."
          items={service.faq}
        />
      ) : null}

      <CtaBand
        title="Talk to Our Workforce Experts"
        description="Share your workforce requirements, locations, and operating constraints. MSG will help design a practical service model."
        primaryHref="/request-consultation?intent=workforce-solutions"
        primaryLabel="Talk to Our Workforce Experts"
        secondaryHref="/contact"
        secondaryLabel="Contact MSG"
      />
    </>
  );
}
