import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { JsonLd } from "@/components/shared/json-ld";
import { ProcessFlow } from "@/components/shared/process-flow";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { getService, serviceSlugs } from "@/lib/content/services";
import { Check } from "lucide-react";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${slug}` },
        ])}
      />
      <PageHero
        title={service.title}
        description={service.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        cta={{ label: "Request Consultation", href: "/request-consultation" }}
      />

      <section className="section-padding">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">The challenge</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Organizations often face operational friction as workforce needs
              grow in volume, complexity, or geography.
            </p>
            <ul className="mt-6 space-y-3">
              {service.painPoints.map((item) => (
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
            <h2 className="text-2xl font-bold">MSG solution</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {service.outcome}
            </p>
            <ul className="mt-6 space-y-3">
              {service.approach.map((item) => (
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
          <h2 className="text-2xl font-bold">Service scope</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-card p-5 text-sm shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <h2 className="text-2xl font-bold">Benefits</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.outcomes.map((item) => (
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
            End-to-end service flow from understanding requirements to continuous
            improvement.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-sm">
            <Image
              src="/images/services/service-flow.svg"
              alt={`${service.title} delivery process flow`}
              width={1400}
              height={420}
              className="h-auto w-full"
              unoptimized
            />
          </div>
          <div className="mt-10">
            <ProcessFlow steps={service.workflow} variant="horizontal" />
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Industries we support</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Capability-oriented sectors—not a claim of exclusive client lists.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.industries.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Key outcome</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {service.benefit}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {service.outcome}
            </p>
          </div>
        </Container>
      </section>

      {service.faq.length > 0 ? (
        <FaqSection
          title={`${service.title} FAQ`}
          description="Common questions about this service."
          items={service.faq}
        />
      ) : null}

      <CtaBand
        title={`Discuss ${service.title} with MSG`}
        description="Share your workforce requirements, locations, and operating constraints. MSG will help design a practical service model."
        primaryHref="/request-consultation"
        primaryLabel="Request Consultation"
        secondaryHref="/contact"
        secondaryLabel="Contact MSG"
      />
    </>
  );
}
