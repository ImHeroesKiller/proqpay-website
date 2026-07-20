import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { ComingSoon } from "@/components/shared/coming-soon";
import { TimelineSection } from "@/components/sections/timeline";
import { CtaBand } from "@/components/sections/cta-band";
import { aboutContent } from "@/lib/content/about";
import { buildMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about ProQPay—founded in 2019 to simplify payroll processing and disbursement for Indonesian enterprises.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About ProQPay"
        description="Building Indonesia’s next trusted workforce financial platform—starting with payroll accuracy, compliance, and on-time payment."
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
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
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
          <h2 className="text-3xl font-bold">Leadership</h2>
          <p className="mt-2 text-muted-foreground">
            Leadership profiles will be published here after formal approval.
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

      <TimelineSection />
      <CtaBand />
    </>
  );
}
