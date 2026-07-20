import Link from "next/link";
import { HomeHero } from "@/components/sections/home-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeIn } from "@/components/shared/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { aboutContent, homepageClients, whyMsg } from "@/lib/content/about";
import { getBlogPosts } from "@/lib/mdx";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = buildMetadata({
  title: siteConfig.legalName,
  description: siteConfig.description,
  path: "/",
});

const homeServices = aboutContent.coreServices.filter(
  (s) => s.href.startsWith("/services") || s.href.includes("proqpay"),
);

export default function HomePage() {
  const posts = getBlogPosts().slice(0, 3);

  return (
    <>
      <HomeHero />

      {/* About MSG */}
      <section className="section-padding bg-background">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A6E] dark:text-blue-300">
              About MSG
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Who we are
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              {aboutContent.whoWeAre.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <Button asChild className="mt-8 bg-[#0B3A6E] text-white hover:bg-[#0a3360]">
              <Link href="/about">About MSG</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Established", value: "2019" },
              { title: "Focus", value: "Enterprise workforce" },
              { title: "Model", value: "People · Ops · Tech" },
              { title: "Product", value: "ProQPay" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {item.title}
                </p>
                <p className="mt-2 text-xl font-semibold text-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <SectionTitle
            eyebrow="Services"
            title="Our services"
            description="Core MSG capabilities for enterprise clients across Indonesia."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.04}>
                <Link href={service.href} className="block h-full">
                  <Card className="h-full transition hover:border-[#0B3A6E]/40">
                    <CardHeader>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0B3A6E] dark:text-blue-300">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Why MSG */}
      <section className="section-padding bg-background">
        <Container>
          <SectionTitle
            eyebrow="Why MSG"
            title="Why choose MSG"
            description="Practical differentiators for organizations that need reliable workforce operations."
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

      {/* ProQPay highlight only */}
      <section className="section-padding bg-[#0B1F33] text-white">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge className="bg-orange/20 text-orange hover:bg-orange/20">
              {siteConfig.products.proqpay.label}
            </Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Featured product: ProQPay
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              {siteConfig.products.proqpay.description}
            </p>
            <p className="mt-3 text-sm text-white/55">
              ProQPay is one product under MSG — not the company itself.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="accent">
                <Link href="/products/proqpay">Explore ProQPay</Link>
              </Button>
              <Button
                asChild
                className="border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/contact?intent=payroll-demo">Request Payroll Demo</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-heading text-2xl font-bold">
              Pro<span className="text-orange">Q</span>Pay
            </p>
            <p className="mt-2 text-sm text-white/60">
              {siteConfig.products.proqpay.headline}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              {[
                "Payroll Processing",
                "Approval Workflow",
                "Disbursement",
                "Working Capital",
                "Reporting",
                "Audit Trail",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Selected clients */}
      <section className="section-padding bg-background">
        <Container>
          <SectionTitle
            eyebrow="Experience"
            title="Selected operating environments"
            description="Illustrative sectors where MSG deploys teams and operational support. Not formal endorsements."
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3">
            {homepageClients.map((client) => (
              <div
                key={client}
                className="flex h-20 items-center justify-center rounded-xl border border-border bg-card px-4 text-center text-sm font-medium text-muted-foreground"
              >
                {client}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* News */}
      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionTitle
              eyebrow="News"
              title="Latest news"
              description="Insights for workforce, operations, and payroll leaders."
            />
            <Button asChild variant="outline" size="sm">
              <Link href="/resources/blog">View all</Link>
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
        title="Ready to partner with MSG?"
        description="Contact our team for workforce solutions, engineering support, business operations, or a ProQPay payroll demo."
        primaryHref="/contact"
        primaryLabel="Contact MSG"
        secondaryHref="/request-consultation"
        secondaryLabel="Request Consultation"
      />
    </>
  );
}
