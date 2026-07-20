import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { ComingSoon } from "@/components/shared/coming-soon";
import { CtaBand } from "@/components/sections/cta-band";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "MSG technology products including ProQPay—enterprise payroll infrastructure for Indonesian businesses.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="MSG Technology Products"
        description="Digital products that extend MSG's workforce and operational expertise into scalable technology platforms."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />
      <section className="section-padding">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Card className="border-orange/30">
            <CardHeader>
              <Badge variant="accent" className="w-fit">
                {siteConfig.products.proqpay.label}
              </Badge>
              <CardTitle className="mt-3 text-2xl">
                {siteConfig.products.proqpay.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {siteConfig.products.proqpay.headline}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {siteConfig.products.proqpay.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="accent">
                  <Link href="/products/proqpay">
                    Explore ProQPay <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={siteConfig.proqpayAppUrl}
                    rel="noopener noreferrer"
                  >
                    ProQPay Login
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <ComingSoon
            title="Future Products"
            description="Content Coming Soon — additional MSG technology products will be published here."
          />
        </Container>
      </section>
      <CtaBand
        title="Interested in ProQPay?"
        primaryHref="/request-consultation?intent=proqpay-demo"
        primaryLabel="Request a Demo"
        secondaryHref="/products/proqpay"
        secondaryLabel="Explore ProQPay"
      />
    </>
  );
}
