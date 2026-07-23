import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { PortfolioCompanyCard } from "@/components/portfolio/portfolio-company-card";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import {
  getPublishedPortfolioCompanies,
  isStrategicInterestEnabled,
  managedPortfolioConfig,
} from "@/lib/content/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "Managed Portfolio Companies | MSG Strategic Advisory",
  description:
    "Explore businesses being strengthened and developed through MSG Strategic Advisory, operational transformation, investor readiness, and strategic value creation.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const companies = getPublishedPortfolioCompanies();
  const interestEnabled = isStrategicInterestEnabled();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Managed Portfolio Companies | MSG Strategic Advisory",
          description: managedPortfolioConfig.pageHeroDescription,
          isPartOf: {
            "@type": "WebSite",
            name: "PT Mandiri Semesta Gemilang",
          },
        }}
      />

      <PageHero
        title={managedPortfolioConfig.pageHeroTitle}
        description={managedPortfolioConfig.pageHeroDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio" },
        ]}
        cta={{
          label: "Explore Our Portfolio",
          href: "#portfolio-companies",
        }}
      />

      <section className="section-padding">
        <Container className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {managedPortfolioConfig.sectionTitle}
          </h2>
          <p className="mt-2 text-sm font-medium text-muted-foreground">
            {managedPortfolioConfig.sectionTitleId}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {managedPortfolioConfig.sectionSubtitle}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {managedPortfolioConfig.sectionSubtitleId}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Portfolio companies are managed and developed through MSG Strategic
            Advisory and Value Creation Program. This does not imply equity
            ownership unless separately disclosed.
          </p>
        </Container>
      </section>

      <section
        id="portfolio-companies"
        className="section-padding bg-gray-bg dark:bg-background"
      >
        <Container>
          <h2 className="text-2xl font-bold sm:text-3xl">Portfolio companies</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Selected businesses supported through MSG value-creation and strategic
            advisory capabilities.
          </p>
          {companies.length > 0 ? (
            <div className="mt-10 grid gap-6">
              {companies.map((company) => (
                <PortfolioCompanyCard key={company.slug} company={company} />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-sm text-muted-foreground">
              No public portfolio companies are listed at this time.
            </p>
          )}
          {companies.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-[#0B3A6E] text-white hover:bg-[#0a3360]">
                <Link href={`/portfolio/${companies[0].slug}`}>
                  View Company Profile
                </Link>
              </Button>
              {interestEnabled ? (
                <Button asChild variant="outline">
                  <Link href="/contact/strategic-interest">
                    Discuss Strategic Partnership
                  </Link>
                </Button>
              ) : null}
            </div>
          ) : null}
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <h2 className="text-2xl font-bold sm:text-3xl">
            MSG value creation approach
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A structured path from assessment to partnership readiness—without
            overstating outcomes that have not been achieved.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {managedPortfolioConfig.valueCreationApproach.map((item) => (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold">Strategic partnership opportunity</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            MSG may facilitate confidential conversations with qualified investors,
            operators, and strategic partners where appropriate. No financials,
            valuations, or transaction documents are published on this website.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {interestEnabled ? (
              <Button asChild className="bg-[#0B3A6E] text-white hover:bg-[#0a3360]">
                <Link href="/contact/strategic-interest">
                  Discuss Strategic Partnership
                </Link>
              </Button>
            ) : (
              <Button asChild className="bg-[#0B3A6E] text-white hover:bg-[#0a3360]">
                <Link href="/request-consultation?intent=strategic-advisory">
                  Contact MSG Advisory
                </Link>
              </Button>
            )}
            <Button asChild variant="outline">
              <Link href="/services/strategic-advisory">
                Explore Strategic Advisory
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container className="mx-auto max-w-3xl space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">Confidentiality notice</p>
            <p className="mt-2">
              Certain financial, legal, operational, client, and transaction-related
              information is confidential and will only be shared with qualified
              parties following internal review and, where required, the execution
              of a non-disclosure agreement.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">Disclaimer</p>
            <p className="mt-2">{managedPortfolioConfig.generalDisclaimer}</p>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Discuss strategic partnership"
        description="Talk with MSG Strategic Advisory about portfolio engagements, transformation programs, or confidential partnership discussions."
        primaryHref={
          interestEnabled
            ? "/contact/strategic-interest"
            : "/request-consultation?intent=strategic-advisory"
        }
        primaryLabel={
          interestEnabled
            ? "Request Confidential Discussion"
            : "Talk to Our Advisory Team"
        }
        secondaryHref="/services/strategic-advisory"
        secondaryLabel="Strategic Advisory"
      />
    </>
  );
}
