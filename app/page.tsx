import Link from "next/link";
import { HomeHero } from "@/components/sections/home-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeIn } from "@/components/shared/fade-in";
import { FeatureCard } from "@/components/shared/feature-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import {
  aboutContent,
  howMsgWorks,
  operationalExcellence,
  pillars,
  portfolioHighlights,
  whyMsg,
} from "@/lib/content/about";
import { services } from "@/lib/content/services";
import { industries } from "@/lib/content/industries";
import { proqpayProduct } from "@/lib/content/proqpay";
import { getBlogPosts } from "@/lib/mdx";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = buildMetadata({
  title: siteConfig.legalName,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const posts = getBlogPosts().slice(0, 3);

  return (
    <>
      <HomeHero />

      {/* Intro */}
      <section className="section-padding bg-background">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionTitle
            eyebrow="Since 2019"
            title="A Strategic Partner for Sustainable Business Growth"
            description="MSG was established to create mutually beneficial partnerships—delivering reliable services and innovative solutions across industries with a focus on trust, quality, and shared success."
          />
          <Card>
            <CardContent className="space-y-4 p-6 text-sm leading-relaxed text-muted-foreground">
              <p>{aboutContent.story.paragraphs[1]}</p>
              <p>
                We combine workforce solutions, operational management, engineering
                talent, IT services, compliance awareness, and digital products such
                as ProQPay.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/about">About MSG</Link>
              </Button>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* Pillars */}
      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <SectionTitle
            eyebrow="Business Pillars"
            title="People, Operations & Technology"
            description="MSG is not only a manpower outsourcing vendor. We operate as an integrated workforce solutions company."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <FadeIn key={pillar.title} delay={index * 0.05}>
                <Card className="h-full">
                  <CardHeader>
                    <Badge variant="accent" className="w-fit">
                      Pillar
                    </Badge>
                    <CardTitle className="mt-3 text-2xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {pillar.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {pillar.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm text-foreground/90"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <Container>
          <SectionTitle
            eyebrow="Services"
            title="Integrated solutions across workforce, operations, and technology"
            description="Six principal service categories designed for enterprise operating realities."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 0.03}>
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <Card className="h-full transition hover:-translate-y-0.5 hover:border-orange/40">
                    <CardHeader>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        {service.summary}
                      </p>
                      <p className="text-sm font-medium text-foreground/90">
                        Outcome: {service.outcome}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/services">View all services</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* How MSG works */}
      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <SectionTitle
            eyebrow="How MSG Works"
            title="From consultation to continuous improvement"
            description="A clear operating sequence that connects workforce planning, deployment, supervision, and payroll technology."
          />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {howMsgWorks.map((step) => (
              <li
                key={step.step}
                className="rounded-2xl border border-border bg-card p-4 shadow-sm"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-orange">
                  Step {step.step}
                </div>
                <h3 className="mt-2 text-sm font-semibold">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Why MSG */}
      <section className="section-padding bg-background">
        <Container>
          <SectionTitle
            eyebrow="Why MSG"
            title="Practical differentiators for enterprise operations"
            description="Built around service reliability, supervision, lean delivery, HR availability, compliance awareness, and technology-enabled operations."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyMsg.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.03}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-orange" />
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Operational excellence */}
      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionTitle
              eyebrow="Operational Excellence"
              title="Supervision, SOP discipline, and timely visibility"
              description="A major MSG differentiator: command-center coordination, hybrid field supervision, standardized SOPs, and compliance-aware risk practices."
            />
            <Button asChild variant="accent">
              <Link href="/operational-excellence">
                Explore Operational Excellence
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {operationalExcellence.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {item.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ProQPay flagship */}
      <section className="section-padding bg-navy-dark text-white">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge className="bg-orange/20 text-orange hover:bg-orange/20">
              {proqpayProduct.label}
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Meet ProQPay
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              Enterprise payroll infrastructure created from MSG&apos;s experience
              managing workforce operations.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {proqpayProduct.features.map((feature) => (
                <li key={feature.title} className="flex gap-2 text-sm text-white/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  {feature.title}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="accent">
                <Link href="/products/proqpay">Explore ProQPay</Link>
              </Button>
              <Button
                asChild
                className="border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/request-consultation?intent=proqpay-demo">
                  Request a Demo
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-orange">
              {proqpayProduct.headline}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {proqpayProduct.description}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {proqpayProduct.modules.slice(0, 4).map((module) => (
                <div
                  key={module.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-sm font-semibold text-white">
                    {module.title}
                  </div>
                  <p className="mt-2 text-xs text-white/60">{module.body}</p>
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
            title="Built for enterprise operating environments"
            description="MSG supports organizations where workforce reliability, supervision, and process discipline matter."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <FeatureCard
                key={industry.slug}
                title={industry.title}
                description={industry.summary}
                href={`/industries/${industry.slug}`}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <SectionTitle
            eyebrow="Portfolio"
            title="Selected project experience"
            description="Portfolio highlights describe teams deployed and project support experience. They are not presented as formal client endorsements."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {portfolioHighlights.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    {item.tag}
                  </Badge>
                  <CardTitle className="mt-2 text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {item.description}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="/portfolio">View portfolio</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Insights */}
      <section className="section-padding bg-background">
        <Container>
          <SectionTitle
            eyebrow="Insights"
            title="Resources for workforce and operations leaders"
            description="Articles on outsourcing, payroll, compliance, technology, and operations."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/resources/blog/${post.slug}`}>
                <Card className="h-full transition hover:border-orange/40">
                  <CardHeader>
                    <p className="text-xs font-semibold uppercase tracking-wide text-orange">
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

      <FaqSection showSchema />
      <CtaBand />
    </>
  );
}
