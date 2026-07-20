import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { services, serviceGroups } from "@/lib/content/services";
import { buildMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "MSG services: workforce outsourcing, BPO, engineering outsourcing, managed security, IT infrastructure, and sales lead generation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Integrated workforce and operational services"
        description="MSG supports enterprise clients across workforce services, business operations, and technology—connected by operational discipline and digital products such as ProQPay."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        cta={{ label: "Request Consultation", href: "/request-consultation" }}
      />

      <section className="section-padding">
        <Container className="space-y-16">
          {serviceGroups.map((group) => {
            const groupServices = services.filter((s) => s.group === group.id);
            return (
              <div key={group.id}>
                <h2 className="text-2xl font-bold">{group.title}</h2>
                <p className="mt-2 max-w-2xl text-muted-foreground">
                  {group.description}
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {groupServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block h-full"
                    >
                      <Card className="h-full transition hover:border-orange/40">
                        <CardHeader>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            {service.summary}
                          </p>
                          <p className="text-sm font-medium">
                            Outcome: {service.outcome}
                          </p>
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange">
                            View service <ArrowRight className="h-4 w-4" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                  {group.id === "technology" ? (
                    <Link href="/products/proqpay" className="block h-full">
                      <Card className="h-full border-orange/30 transition hover:border-orange/50">
                        <CardHeader>
                          <CardTitle className="text-lg">ProQPay</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            MSG&apos;s enterprise payroll infrastructure product.
                          </p>
                          <p className="text-sm font-medium">
                            Outcome: Controlled payroll processing and disbursement.
                          </p>
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange">
                            Explore product <ArrowRight className="h-4 w-4" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  ) : null}
                </div>
              </div>
            );
          })}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
