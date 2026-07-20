import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { getGuides } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = buildMetadata({
  title: "Payroll Guides",
  description:
    "Practical payroll guides for Indonesian enterprises from ProQPay.",
  path: "/resources/guides",
});

export default function GuidesPage() {
  const guides = getGuides();

  return (
    <>
      <PageHero
        title="Payroll guides"
        description="Structured guidance for designing reliable payroll operations."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Guides" },
        ]}
      />
      <section className="section-padding">
        <Container className="grid gap-6 lg:grid-cols-2">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/resources/guides/${guide.slug}`}>
              <Card className="h-full transition hover:border-orange/40">
                <CardHeader>
                  <CardTitle>{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {guide.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Container>
      </section>
    </>
  );
}
