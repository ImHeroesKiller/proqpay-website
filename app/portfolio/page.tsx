import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { PortfolioCompanyCard } from "@/components/portfolio/portfolio-company-card";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import {
  getPublishedPortfolioCompanies,
  isManagedPortfolioPublished,
  isStrategicInterestEnabled,
  managedPortfolioConfig,
} from "@/lib/content/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "Managed Portfolio Companies | MSG Strategic Advisory",
  description:
    "Explore businesses being strengthened and developed through MSG Strategic Advisory, including operational transformation, investor readiness, and strategic value creation.",
  path: "/portfolio",
  noIndex: !isManagedPortfolioPublished(),
});

export default function PortfolioPage() {
  const published = isManagedPortfolioPublished();
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
        cta={
          published
            ? {
                label: "Explore Our Portfolio",
                href: "#portfolio-companies",
              }
            : {
                label: "Talk to Strategic Advisory",
                href: "/request-consultation?intent=strategic-advisory",
              }
        }
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
          {!published ? (
            <div className="mt-8 rounded-2xl border border-dashed border-border bg-muted/30 p-6 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">
                Listing status: pending legal approval
              </p>
              <p className="mt-2">
                Managed portfolio company profiles and public strategic-interest
                pathways will be published after internal confirmation that MSG
                has authorization to present named companies, use related brand
                materials, and open qualified partner discussions.
              </p>
              <p className="mt-3">
                Until then, please contact{" "}
                <Link
                  href="/services/strategic-advisory"
                  className="font-medium text-[#0B3A6E] hover:underline dark:text-blue-300"
                >
                  MSG Strategic Advisory
                </Link>{" "}
                for general transformation and partnership conversations.
              </p>
            </div>
          ) : null}
        </Container>
      </section>

      {published && companies.length > 0 ? (
        <section
          id="portfolio-companies"
          className="section-padding bg-gray-bg dark:bg-background"
        >
          <Container>
            <h2 className="text-2xl font-bold sm:text-3xl">Portfolio companies</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Selected businesses supported through MSG value-creation and
              strategic advisory capabilities.
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-1">
              {companies.map((company) => (
                <PortfolioCompanyCard key={company.slug} company={company} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

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
          <h2 className="text-2xl font-bold">Partnership and investor discussions</h2>
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
              <Link href="/services/strategic-advisory">Explore Strategic Advisory</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">Disclaimer</p>
            <p className="mt-2">{managedPortfolioConfig.generalDisclaimer}</p>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Discuss strategic partnership"
        description="Talk with MSG Strategic Advisory about transformation programs, managed portfolio inquiries, or confidential partnership discussions."
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
