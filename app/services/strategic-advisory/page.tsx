import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { JsonLd } from "@/components/shared/json-ld";
import { ProcessFlow } from "@/components/shared/process-flow";
import { PortfolioCompanyCard } from "@/components/portfolio/portfolio-company-card";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { strategicAdvisoryContent } from "@/lib/content/services";
import { industriesWeSupport } from "@/lib/content/about";
import {
  getPublishedPortfolioCompanies,
  isManagedPortfolioPublished,
  managedPortfolioConfig,
} from "@/lib/content/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export const metadata = buildMetadata({
  title: "Strategic Advisory",
  description:
    "MSG Strategic Advisory: business recovery, outsourcing business advisory, investment readiness, M&A advisory, and business transformation for Indonesian enterprises.",
  path: "/services/strategic-advisory",
});

export default function StrategicAdvisoryPage() {
  const content = strategicAdvisoryContent;
  const portfolioPublished = isManagedPortfolioPublished();
  const portfolioCompanies = getPublishedPortfolioCompanies();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Strategic Advisory", path: "/services/strategic-advisory" },
        ])}
      />
      <JsonLd data={faqJsonLd(content.faq)} />

      <PageHero
        title={content.title}
        description={content.subheadline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Strategic Advisory" },
        ]}
        cta={{
          label: "Request Strategic Assessment",
          href: "/request-consultation?intent=strategic-advisory",
        }}
      />

      <section className="border-b border-border bg-[#0B1F33] py-10 text-white">
        <Container>
          <Badge className="bg-orange/20 text-orange hover:bg-orange/20">
            {content.badge}
          </Badge>
          <h2 className="mt-4 max-w-3xl text-2xl font-bold tracking-tight sm:text-3xl">
            {content.headline}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
            Focused on Business Recovery, Business Growth, and Business
            Transformation—for companies preparing for their next stage of growth
            and sustainable business improvement.
          </p>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <h2 className="text-2xl font-bold sm:text-3xl">Business challenges</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Leaders engage MSG when they need structured support for operational
            excellence, strategic growth, and transformation—not generic consulting
            alone.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {content.challenges.map((item) => (
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
        <Container>
          <h2 className="text-2xl font-bold sm:text-3xl">Our advisory services</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Five advisory lines designed for recovery, growth, investment readiness,
            transactions, and transformation.
          </p>
          <div className="mt-12 space-y-8">
            {content.serviceLines.map((line) => (
              <Card
                key={line.id}
                id={line.id}
                className="overflow-hidden scroll-mt-28"
              >
                <div className="grid lg:grid-cols-[1fr_1.2fr]">
                  <CardHeader className="p-8">
                    <CardTitle className="text-xl sm:text-2xl">{line.title}</CardTitle>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {line.description}
                    </p>
                  </CardHeader>
                  <CardContent className="border-t border-border bg-card p-8 lg:border-l lg:border-t-0">
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {line.items.map((item) => (
                        <li key={item} className="flex gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0B3A6E] dark:text-blue-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-[#0B1F33] text-white">
        <Container>
          <h2 className="text-2xl font-bold sm:text-3xl">
            {managedPortfolioConfig.sectionTitle}
          </h2>
          <p className="mt-2 text-sm font-medium text-white/60">
            {managedPortfolioConfig.sectionTitleId}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75">
            {managedPortfolioConfig.advisoryIntegrationCopy}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/55">
            {managedPortfolioConfig.sectionSubtitle}
          </p>
          {portfolioPublished && portfolioCompanies.length > 0 ? (
            <>
              <div className="mt-10 grid gap-6">
                {portfolioCompanies.map((company) => (
                  <PortfolioCompanyCard
                    key={company.slug}
                    company={company}
                    variant="dark"
                  />
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="accent">
                  <Link href={`/portfolio/${portfolioCompanies[0].slug}`}>
                    View MKB Profile
                  </Link>
                </Button>
                <Button
                  asChild
                  className="border border-white/20 bg-transparent text-white hover:bg-white/10"
                >
                  <Link href="/contact/strategic-interest">
                    Discuss Portfolio Opportunities
                  </Link>
                </Button>
              </div>
            </>
          ) : (
            <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-6 text-sm text-white/70">
              Portfolio company profiles will appear here when published.
              <div className="mt-4">
                <Button
                  asChild
                  className="border border-white/20 bg-transparent text-white hover:bg-white/10"
                >
                  <Link href="/portfolio">View Managed Portfolio</Link>
                </Button>
              </div>
            </div>
          )}
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <h2 className="text-2xl font-bold sm:text-3xl">Industries</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Advisory support across sectors preparing for growth, excellence, and
            transformation.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {content.industries.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industriesWeSupport.slice(0, 4).map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="rounded-2xl border border-border bg-card px-4 py-4 text-sm font-semibold transition hover:border-[#0B3A6E]/40"
              >
                {industry.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <h2 className="text-2xl font-bold sm:text-3xl">How we work</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            From discovery to execution support—with practical, enterprise-grade
            discipline.
          </p>
          <div className="mt-10">
            <ProcessFlow steps={content.howWeWork} variant="horizontal" />
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-lg font-semibold">Important disclaimer</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {content.disclaimer}
            </p>
            <div className="mt-6">
              <Button asChild className="bg-[#0B3A6E] text-white hover:bg-[#0a3360]">
                <Link href="/request-consultation?intent=strategic-advisory">
                  Talk to Our Advisory Team
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FaqSection
        title="Strategic Advisory FAQ"
        description="Common questions about MSG advisory services."
        items={content.faq}
      />

      <CtaBand
        title="Request Strategic Assessment"
        description="Discuss business recovery, growth, investment readiness, M&A preparation, or transformation with MSG."
        primaryHref="/request-consultation?intent=strategic-advisory"
        primaryLabel="Talk to Our Advisory Team"
        secondaryHref="/contact"
        secondaryLabel="Contact MSG"
      />
    </>
  );
}
