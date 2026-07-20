import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { portfolioHighlights } from "@/lib/content/about";
import { buildMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Selected MSG project experience and workforce deployment highlights. Portfolio materials are not formal client endorsements.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Portfolio and project experience"
        description="Selected enterprise engagements, workforce deployment experience, engineering project support, and business operations support. These materials describe experience—not formal endorsements."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio" },
        ]}
      />
      <section className="section-padding">
        <Container>
          <div className="mb-8 rounded-2xl border border-dashed border-border bg-muted/30 p-5 text-sm text-muted-foreground">
            Portfolio references may include enterprise-oriented activities and visual
            project environments. MSG does not claim contractual endorsement through
            the presentation of portfolio highlights.
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {portfolioHighlights.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    {item.tag}
                  </Badge>
                  <CardTitle className="mt-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {item.description}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              "Teams deployed across enterprise environments",
              "Engineering outsourcing project support",
              "Business operations and process delivery support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand title="Discuss how MSG can support your next engagement" />
    </>
  );
}
