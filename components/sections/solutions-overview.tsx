import Link from "next/link";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionTitle } from "@/components/shared/section-title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const items = [
  {
    title: "Enterprise",
    description:
      "Multi-entity governance, controlled approvals, and reporting for complex organizations.",
    href: "/industries/professional-services",
  },
  {
    title: "Manufacturing",
    description:
      "Shift rules, multi-site workforces, and cost visibility across plants.",
    href: "/industries/manufacturing",
  },
  {
    title: "Outsourcing",
    description:
      "Client-site deployments, SLA pressure, and high-volume disbursement reliability.",
    href: "/industries/outsourcing",
  },
];

export function SolutionsOverview() {
  return (
    <section className="section-padding bg-gray-bg dark:bg-background">
      <Container>
        <SectionTitle
          eyebrow="Industries"
          title="Built for the organizations that cannot miss payday"
          description="ProQPay supports enterprises where workforce complexity, compliance, and operational tempo demand a stronger payroll model."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href={item.href}>Explore</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
