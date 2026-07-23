import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  LineChart,
  Sparkles,
  Users,
} from "lucide-react";
import { HomeHero } from "@/components/sections/home-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeIn } from "@/components/shared/fade-in";
import { ProcessFlow } from "@/components/shared/process-flow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import {
  aboutContent,
  industriesWeSupport,
  operationalCapabilities,
  trustStrip,
  whyMsg,
} from "@/lib/content/about";
import {
  servicePillars,
  strategicAdvisoryContent,
  workforceSubServices,
} from "@/lib/content/services";
import { getBlogPosts } from "@/lib/mdx";

export const metadata = buildMetadata({
  title: `${siteConfig.legalName} | Enterprise Workforce Solutions & Business Transformation`,
  description: siteConfig.description,
  path: "/",
});

const pillarIcons = {
  advisory: Sparkles,
  workforce: Users,
  technology: LineChart,
} as const;

export default function HomePage() {
  const posts = getBlogPosts().slice(0, 3);
  const advisory = servicePillars[0];
  const workforce = servicePillars[1];
  const technology = servicePillars[2];

  return (
    <>
      <HomeHero />

      {/* Trusted by Indonesian Businesses */}
      <section className="border-b border-border bg-background">
        <Container className="py-6">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Trusted by Indonesian Businesses
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

      {/* Integrated Workforce Solutions */}
      <section className="section-padding bg-background">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A6E] dark:text-blue-300">
              Company introduction
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {aboutContent.moreThanManpower.title}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
              {aboutContent.moreThanManpower.body.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <Button
              asChild
              className="mt-8 bg-[#0B3A6E] text-white hover:bg-[#0a3360]"
            >
              <Link href="/about">About MSG</Link>
            </Button>
          </FadeIn>
          <FadeIn delay={0.06}>
            <blockquote className="relative overflow-hidden rounded-2xl border border-border bg-gray-bg p-8 dark:bg-card sm:p-10">
              <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#0B3A6E]/10" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A6E] dark:text-blue-300">
                Key statement
              </p>
              <p className="mt-4 text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
                “{aboutContent.moreThanManpower.quote}”
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                Established {siteConfig.founded} · {siteConfig.legalName}
              </p>
            </blockquote>
          </FadeIn>
        </Container>
      </section>

      {/* Three capability pillars */}
      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <SectionTitle
            eyebrow="Capabilities"
            title="Three pillars. One transformation partner."
            description="Strategic Advisory, Workforce Solutions, and Workforce Technology—integrated to help enterprises improve, operate, transform, grow, and scale."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {aboutContent.pillars.map((pillar, index) => {
              const Icon =
                pillarIcons[pillar.id as keyof typeof pillarIcons] ?? Users;
              return (
                <FadeIn key={pillar.id} delay={index * 0.05}>
                  <Card className="h-full border-border/80 transition hover:border-[#0B3A6E]/35 hover:shadow-md">
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
                    </CardContent>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Strategic Advisory — Featured (largest after hero) */}
      <section className="section-padding relative overflow-hidden bg-[#0B1F33] text-white">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#0B3A6E]/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-orange/10 blur-3xl" />
        <Container className="relative">
          <div className="max-w-3xl">
            <Badge className="bg-orange/20 text-orange hover:bg-orange/20">
              {advisory.badge}
            </Badge>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Strategic Advisory
            </h2>
            <p className="mt-2 text-lg font-medium text-white/90 sm:text-xl">
              {strategicAdvisoryContent.headline}
            </p>
            <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
              {advisory.description}
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {strategicAdvisoryContent.serviceLines.map((line) => (
              <div
                key={line.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-white">{line.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {line.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="accent" size="lg">
              <Link href="/services/strategic-advisory">
                Explore Strategic Advisory
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-white/20 bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/request-consultation?intent=strategic-advisory">
                Request Strategic Assessment
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Workforce Solutions */}
      <section className="section-padding bg-background">
        <Container>
          <SectionTitle
            eyebrow="Workforce Solutions"
            title="End-to-end workforce delivery"
            description={workforce.summary}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {workforceSubServices.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 0.04}>
                <Link href={service.href} className="group block h-full">
                  <Card className="h-full transition duration-300 hover:-translate-y-0.5 hover:border-[#0B3A6E]/40 hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-[#0B3A6E] dark:group-hover:text-blue-300">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {service.summary}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#0B3A6E] dark:text-blue-300">
                        Learn more{" "}
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/services/workforce-solutions">
                View Workforce Solutions
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Workforce Technology */}
      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge className="bg-orange/15 text-orange hover:bg-orange/15">
              {siteConfig.products.proqpay.label}
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Workforce Technology
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {technology.positioning} ProQPay is the first product—built for payroll
              process visibility, approval discipline, and operational control.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Future products (HR Platform, Workforce Analytics, AI Solutions, and
              more) are planned with Coming Soon status—no fabricated features.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-[#0B3A6E] text-white hover:bg-[#0a3360]">
                <Link href="/technology">Explore Technology</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/products/proqpay">Explore ProQPay</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Flagship product
            </p>
            <p className="mt-2 font-heading text-2xl font-bold">
              Pro<span className="text-orange">Q</span>Pay
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {siteConfig.products.proqpay.headline}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Payroll process visibility",
                "Employee data",
                "Attendance integration",
                "Reporting",
                "Approval workflow",
                "Secure access",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-border bg-background px-3 py-3 text-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0B3A6E] dark:text-blue-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="section-padding bg-background">
        <Container>
          <SectionTitle
            eyebrow="Industries"
            title="Industries we support"
            description="MSG supports workforce delivery and business transformation across multiple sectors—not manpower placement alone."
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

      {/* How We Work */}
      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <SectionTitle
            eyebrow="Process"
            title="How we work"
            description="A disciplined flow from understanding business needs to continuous improvement."
          />
          <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-sm">
            <Image
              src="/images/home/workforce-hero.svg"
              alt="MSG process: understand, design, mobilize, operate, measure, improve"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
              unoptimized
            />
          </div>
          <div className="mt-10">
            <ProcessFlow steps={aboutContent.howWeWork} variant="cycle" />
          </div>
        </Container>
      </section>

      {/* Why MSG */}
      <section className="section-padding bg-background">
        <Container>
          <SectionTitle
            eyebrow="Why MSG"
            title="Improve · Operate · Transform · Grow · Scale"
            description="MSG helps companies go beyond workforce supply—to stronger business performance."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyMsg.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 text-[#0B3A6E] dark:text-blue-300" />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Operational Capability */}
      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <SectionTitle
            eyebrow="Capability"
            title="Operational capability"
            description="Capability themes MSG is structured to support. Formal case studies will be published when client-approved materials are available."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {operationalCapabilities.map((item) => (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    {item.tag}
                  </Badge>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* News */}
      <section className="section-padding bg-background">
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionTitle
              eyebrow="News"
              title="Latest insights"
              description="Perspectives on business transformation, operational excellence, workforce, and technology."
            />
            <Button asChild variant="outline" size="sm">
              <Link href="/news">View all</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/resources/blog/${post.slug}`}>
                <Card className="h-full transition hover:border-[#0B3A6E]/40">
                  <CardHeader>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#0B3A6E] dark:text-blue-300">
                      {post.category}
                    </p>
                    <CardTitle className="text-lg leading-snug">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {post.description}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Discuss Your Business"
        description="Talk with MSG about strategic advisory, workforce solutions, or workforce technology. Schedule a business consultation with our team."
        primaryHref="/request-consultation"
        primaryLabel="Schedule Business Consultation"
        secondaryHref="/services/strategic-advisory"
        secondaryLabel="Talk to Our Advisory Team"
      />
    </>
  );
}
