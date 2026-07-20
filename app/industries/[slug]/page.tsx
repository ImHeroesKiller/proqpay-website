import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { getIndustry, industrySlugs } from "@/lib/content/industries";
import { Check } from "lucide-react";

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return buildMetadata({
    title: `${industry.title} Solutions`,
    description: industry.summary,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.title, path: `/industries/${slug}` },
        ])}
      />
      <PageHero
        title={`${industry.title} Solutions`}
        description={industry.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.title },
        ]}
        cta={{ label: "Request Consultation", href: "/request-consultation" }}
      />

      <section className="section-padding">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold">Pain points</h2>
            <ul className="mt-6 space-y-3">
              {industry.painPoints.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">How MSG helps</h2>
            <ul className="mt-6 space-y-3">
              {industry.howWeHelp.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Expected results</h2>
            <ul className="mt-6 space-y-3">
              {industry.expectedResults.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBand title={`Modernize ${industry.title.toLowerCase()} workforce operations`} />
    </>
  );
}
