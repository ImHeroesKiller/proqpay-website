import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/shared/json-ld";
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
            <h2 className="text-2xl font-bold">Client pain points</h2>
            <ul className="mt-6 space-y-3">
              {service.painPoints.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">MSG approach</h2>
            <ul className="mt-6 space-y-3">
              {service.approach.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <h2 className="text-2xl font-bold">Capabilities</h2>
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
          <h2 className="text-2xl font-bold">Implementation workflow</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {service.workflow.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-orange">
                  Step {step.step}
                </div>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Business outcomes</h2>
            <ul className="mt-6 space-y-3">
              {service.outcomes.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Industries</h2>
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
        </Container>
      </section>

      <CtaBand title={`Discuss ${service.title} with MSG`} />
    </>
  );
}
