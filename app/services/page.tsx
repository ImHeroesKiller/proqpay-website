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
    "MSG enterprise workforce services: workforce outsourcing, engineering talent, business support services, and managed workforce operations.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Enterprise workforce services"
        description="MSG helps organizations build, manage, and improve workforce operations through people, operational discipline, and technology—not manpower placement alone."
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
                      className="group block h-full"
                    >
                      <Card className="h-full transition duration-300 hover:-translate-y-0.5 hover:border-[#0B3A6E]/40 hover:shadow-md">
                        <CardHeader>
                          <CardTitle className="text-lg group-hover:text-[#0B3A6E] dark:group-hover:text-blue-300">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            {service.summary}
                          </p>
                          <p className="text-sm font-medium text-foreground/85">
                            {service.benefit}
                          </p>
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0B3A6E] dark:text-blue-300">
                            Learn more{" "}
                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                  {group.id === "technology" ? (
                    <Link href="/products/proqpay" className="group block h-full">
                      <Card className="h-full border-[#0B3A6E]/25 transition duration-300 hover:-translate-y-0.5 hover:border-[#0B3A6E]/50 hover:shadow-md">
                        <CardHeader>
                          <CardTitle className="text-lg">ProQPay</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            MSG&apos;s payroll technology product for visibility,
                            approval, disbursement, and reporting.
                          </p>
                          <p className="text-sm font-medium">
                            Payroll visibility for modern workforce operations.
                          </p>
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0B3A6E] dark:text-blue-300">
                            Explore product{" "}
                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
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
      <CtaBand
        title="Discuss your workforce needs"
        description="Talk with MSG about workforce outsourcing, engineering talent, business support, managed operations, or ProQPay."
        primaryHref="/request-consultation"
        primaryLabel="Request Consultation"
        secondaryHref="/contact"
        secondaryLabel="Contact MSG"
      />
    </>
  );
}
