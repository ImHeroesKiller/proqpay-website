import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Check } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import {
  getPortfolioCompany,
  isStrategicInterestEnabled,
  portfolioCompanies,
} from "@/lib/content/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function generateStaticParams() {
  return portfolioCompanies
    .filter((c) => c.publicationStatus === "public")
    .map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = getPortfolioCompany(slug);
  if (!company) {
    return buildMetadata({
      title: "Portfolio company",
      description: "MSG managed portfolio company profile.",
      path: `/portfolio/${slug}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: `${company.name} | MSG Portfolio Company`,
    description: company.summaryEn,
    path: `/portfolio/${slug}`,
  });
}

export default async function PortfolioCompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = getPortfolioCompany(slug);
  if (!company) notFound();

  const interestEnabled = isStrategicInterestEnabled();
  const interestHref = `/contact/strategic-interest?company=${company.slug}`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: company.name, path: `/portfolio/${company.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: company.name,
          alternateName: company.shortName,
          url: company.website,
          foundingDate: String(company.establishedYear),
          description: company.summaryEn,
          knowsAbout: company.coreCapabilities,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `${company.name} | MSG Portfolio Company`,
          description: company.summaryEn,
        }}
      />

      <PageHero
        title={company.name}
        description={company.heroSubheadline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: company.shortName },
        ]}
        cta={{
          label: "Contact MSG Advisory",
          href: interestEnabled
            ? interestHref
            : "/request-consultation?intent=strategic-advisory",
        }}
      />

      <section className="border-b border-border bg-[#0B1F33] py-10 text-white">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-orange/20 text-orange hover:bg-orange/20">
                {company.badge}
              </Badge>
              <Image
                src={company.logoImage}
                alt={company.logoImageAlt}
                width={88}
                height={80}
                className="h-10 w-auto rounded-md bg-white/95 object-contain p-1"
              />
            </div>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75">
              {company.summaryEn}
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/55">
              {company.summaryId}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="accent">
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5"
                >
                  Explore MKB Website
                  <ExternalLink className="h-4 w-4" aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Button>
              {interestEnabled ? (
                <Button
                  asChild
                  className="border border-white/20 bg-transparent text-white hover:bg-white/10"
                >
                  <Link href={interestHref}>Discuss Strategic Opportunity</Link>
                </Button>
              ) : null}
              <Button
                asChild
                className="border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/request-consultation?intent=strategic-advisory">
                  Contact MSG Advisory
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 shadow-lg">
            <Image
              src={company.coverImage}
              alt={company.coverImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
              priority={false}
            />
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Company overview</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {company.overview}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Managed and developed through MSG Strategic Advisory and Value
              Creation Program.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Sector
                </dt>
                <dd className="mt-1 font-medium">{company.sector}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Industry focus
                </dt>
                <dd className="mt-1 font-medium">
                  {company.industryFocus.join(" · ")}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Established
                </dt>
                <dd className="mt-1 font-medium">{company.establishedYear}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Engagement
                </dt>
                <dd className="mt-1 font-medium">{company.engagement}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Status
                </dt>
                <dd className="mt-1 font-medium">Portfolio Company</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <h2 className="text-2xl font-bold">Core capabilities</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {company.coreCapabilities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-card px-5 py-4 text-sm font-medium shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <Badge variant="secondary" className="w-fit">
              Technology
            </Badge>
            <h2 className="mt-3 text-2xl font-bold">
              {company.technologyProfile.name}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {company.technologyProfile.description}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {company.technologyProfile.ownershipNote}
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Field visibility themes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              {[
                "Attendance monitoring",
                "Operational reporting",
                "Evidence capture",
                "Management dashboards",
              ].map((item) => (
                <div key={item} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0B3A6E] dark:text-blue-300" />
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <h2 className="text-2xl font-bold">Value creation program</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {company.valueCreationIntro}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            The following areas describe program focus—not guaranteed results.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {company.valueCreationAreas.map((item) => (
              <div
                key={item}
                className="flex gap-2 rounded-2xl border border-border bg-card p-4 text-sm"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0B3A6E] dark:text-blue-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold">Strategic partnership opportunity</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {company.strategicOpportunityCopy}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Discussions may be relevant for strategic investors, financial
            investors, FMCG ecosystem partners, outsourcing operators, technology
            partners, potential acquirers, and joint venture partners—subject to
            qualification and confidentiality requirements.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {interestEnabled ? (
              <>
                <Button asChild className="bg-[#0B3A6E] text-white hover:bg-[#0a3360]">
                  <Link href={interestHref}>Request Confidential Discussion</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={interestHref}>Submit Strategic Interest</Link>
                </Button>
              </>
            ) : null}
            <Button asChild variant="outline">
              <Link href="/request-consultation?intent=strategic-advisory">
                Contact MSG Advisory
              </Link>
            </Button>
          </div>
          <div className="mt-10 space-y-4 rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">Confidentiality notice</p>
              <p className="mt-2">{company.confidentialityNotice}</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Disclaimer</p>
              <p className="mt-2">{company.disclaimer}</p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Discuss strategic opportunity"
        description="Qualified parties may request a confidential discussion with MSG Strategic Advisory. No financial or legal documents are published on this page."
        primaryHref={
          interestEnabled
            ? interestHref
            : "/request-consultation?intent=strategic-advisory"
        }
        primaryLabel={
          interestEnabled
            ? "Request Confidential Discussion"
            : "Contact MSG Advisory"
        }
        secondaryHref="/portfolio"
        secondaryLabel="View Managed Portfolio"
      />
    </>
  );
}
