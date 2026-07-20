import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { operationalExcellence, recruitmentFlow } from "@/lib/content/about";
import { buildMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = buildMetadata({
  title: "Operational Excellence",
  description:
    "MSG operational excellence: command center coordination, hybrid field supervision, standardized SOPs, SLA monitoring, and compliance-aware practices.",
  path: "/operational-excellence",
});

export default function OperationalExcellencePage() {
  return (
    <>
      <PageHero
        title="Operational Excellence"
        description="A core MSG differentiator—command-center coordination, hybrid field supervision, standardized SOPs, quality control, and labor-aware risk practices designed for multi-location workforce operations."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Operational Excellence" },
        ]}
        dark
        cta={{ label: "Request Consultation", href: "/request-consultation" }}
      />

      <section className="section-padding">
        <Container>
          <h2 className="text-2xl font-bold">How MSG operates</h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            MSG is designed to provide timely operational visibility through
            structured supervision, issue escalation, and reporting routines—without
            overstating capabilities that depend on each client&apos;s deployment model.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {operationalExcellence.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
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
          <h2 className="text-2xl font-bold">Operations diagram</h2>
          <p className="mt-2 text-muted-foreground">
            A simplified view of MSG&apos;s multi-layer operating control.
          </p>
          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8">
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-border bg-navy-dark p-5 text-white">
                <p className="text-xs uppercase tracking-wide text-orange">Layer 1</p>
                <h3 className="mt-2 text-lg font-semibold">Command Center</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  <li>Status coordination</li>
                  <li>Issue intake</li>
                  <li>Escalation routing</li>
                  <li>SLA monitoring</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-muted/40 p-5">
                <p className="text-xs uppercase tracking-wide text-orange">Layer 2</p>
                <h3 className="mt-2 text-lg font-semibold">Hybrid Supervision</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Field presence</li>
                  <li>Wide-reaching coverage</li>
                  <li>Quality control</li>
                  <li>Local issue handling</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-muted/40 p-5">
                <p className="text-xs uppercase tracking-wide text-orange">Layer 3</p>
                <h3 className="mt-2 text-lg font-semibold">Workforce Delivery</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Deployed teams</li>
                  <li>SOP execution</li>
                  <li>Payroll via ProQPay</li>
                  <li>Continuous reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <h2 className="text-2xl font-bold">Recruitment workflow</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recruitmentFlow.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-orange">
                  Step {step.step}
                </div>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Compliance oversight</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Adherence to Indonesian labor regulations as an operating priority.</p>
              <p>Proactive risk mitigation and issue escalation routines.</p>
              <p>BPJS awareness and administration support as part of workforce operations.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quality and reporting</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Standardized SOP across locations to reduce process variation.</p>
              <p>Workforce reporting for client and internal stakeholders.</p>
              <p>Continuous improvement based on operational findings.</p>
            </CardContent>
          </Card>
        </Container>
      </section>

      <CtaBand title="Discuss operational excellence for your workforce" />
    </>
  );
}
