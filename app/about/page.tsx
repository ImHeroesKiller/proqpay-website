import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { ComingSoon } from "@/components/shared/coming-soon";
import { CtaBand } from "@/components/sections/cta-band";
import { aboutContent } from "@/lib/content/about";
import { buildMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "About MSG",
  description:
    "Learn about PT Mandiri Semesta Gemilang (MSG)—established in 2019 as an enterprise workforce solutions company combining people, operations, and technology.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About MSG"
        description={`${siteConfig.legalName} combines people, operational expertise, and technology to help enterprise clients build efficient, compliant, and scalable workforce operations.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <section className="section-padding">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-bold">{aboutContent.story.title}</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              {aboutContent.story.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-border bg-muted/40 p-6">
              <h3 className="font-semibold">MSG and ProQPay</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {aboutContent.proqpayRelation}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {aboutContent.mission}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {aboutContent.vision}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Company message</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {siteConfig.companyMessage}
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <h2 className="text-3xl font-bold">Core values</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aboutContent.values.map((value) => (
              <Card key={value.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {value.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <h2 className="text-3xl font-bold">Operating model</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            MSG works through three integrated pillars—not isolated vendor
            silos.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {aboutContent.operatingModel.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {item.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <h2 className="text-3xl font-bold">Timeline</h2>
          <ol className="relative mt-10 space-y-8 border-l border-border pl-6">
            {aboutContent.timeline.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[1.92rem] top-1.5 h-3 w-3 rounded-full border-2 border-orange bg-background" />
                <div className="text-sm font-semibold text-orange">{item.year}</div>
                <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <h2 className="text-3xl font-bold">Leadership</h2>
          <p className="mt-2 text-muted-foreground">
            Leadership information will be published soon.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <ComingSoon
                key={item}
                title="Leadership profile"
                description="Content Coming Soon"
              />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
