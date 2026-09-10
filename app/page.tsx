import Link from "next/link";
import { ArrowRight, LineChart, Sparkles, Users } from "lucide-react";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeProductHighlight } from "@/components/sections/home-product-highlight";
import { HomePortfolioHighlight } from "@/components/sections/home-portfolio-highlight";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeIn } from "@/components/shared/fade-in";
import { ProcessFlow } from "@/components/shared/process-flow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { aboutContent, industriesWeSupport, trustStrip } from "@/lib/content/about";
import {
  getPublishedPortfolioCompanies,
  isManagedPortfolioPublished,
} from "@/lib/content/portfolio";

export const metadata = buildMetadata({
  title: `${siteConfig.legalName} | ${siteConfig.companyMessage}`,
  description: siteConfig.description,
  path: "/",
});

const pillarIcons = {
  advisory: Sparkles,
  workforce: Users,
  technology: LineChart,
} as const;

const pillarLinks = {
  advisory: "/services/strategic-advisory",
  workforce: "/services/workforce-solutions",
  technology: "/technology",
} as const;

export default function HomePage() {
  const portfolioPublished = isManagedPortfolioPublished();
  const portfolioCompanies = getPublishedPortfolioCompanies();
  const featuredPortfolio = portfolioCompanies[0];

  return (
    <>
      <HomeHero />

      <section className="border-b border-border bg-background">
        <Container className="py-6">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            MSG at a Glance
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:justify-between">
            {trustStrip.map((item) => (
              <li key={item.label} className="text-center sm:text-left">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground sm:text-base">
                  {item.value}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <SectionTitle
            eyebrow="What MSG Does"
            title="We advise. We operate. We enable with technology."
            description="One accountable partner across strategic advisory, workforce operations, and practical technology—designed around measurable business outcomes."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {aboutContent.pillars.map((pillar, index) => {
              const Icon = pillarIcons[pillar.id as keyof typeof pillarIcons] ?? Users;
              const href = pillarLinks[pillar.id as keyof typeof pillarLinks] ?? "/services";
              return (
                <FadeIn key={pillar.id} delay={index * 0.05}>
                  <Link href={href} className="group block h-full">
                    <Card className="h-full border-border/80 transition duration-300 hover:-translate-y-0.5 hover:border-[#0B3A6E]/35 hover:shadow-md">
                      <CardHeader>
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B3A6E]/10 text-[#0B3A6E] dark:bg-blue-400/10 dark:text-blue-300">
                          <Icon className="h-5 w-5" aria-hidden />
                        </div>
                        <CardTitle className="mt-2 text-xl">{pillar.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {pillar.description}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#0B3A6E] dark:text-blue-300">
                          Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <HomeProductHighlight />

      {portfolioPublished && featuredPortfolio ? (
        <HomePortfolioHighlight company={featuredPortfolio} />
      ) : null}

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <SectionTitle
            eyebrow="How We Create Value"
            title="From understanding the problem to measurable improvement"
            description="A disciplined operating model keeps strategy, workforce execution, and technology connected throughout delivery."
          />
          <div className="mt-10">
            <ProcessFlow steps={aboutContent.howWeWork} variant="cycle" />
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/about">How MSG Works</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-background">
        <Container>
          <SectionTitle
            eyebrow="Industries"
            title="Built for workforce-intensive businesses"
            description="MSG supports organizations that need reliable people operations, controlled payroll, and practical business transformation across multiple sectors."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industriesWeSupport.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="rounded-2xl border border-border bg-card px-5 py-5 text-sm font-semibold transition hover:border-[#0B3A6E]/40 hover:shadow-sm"
              >
                {industry.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Discuss What MSG Can Improve"
        description="Talk with MSG about strategic advisory, workforce operations, payroll services, or workforce technology—starting from the business problem, not the product catalogue."
        primaryHref="/request-consultation"
        primaryLabel="Schedule Business Consultation"
        secondaryHref="/payroll"
        secondaryLabel="Explore Payroll Services"
      />
    </>
  );
}
