import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import {
  OperationsLayerGraph,
  ProcessFlow,
} from "@/components/shared/process-flow";
import { operationalExcellence, recruitmentFlow } from "@/lib/content/about";
import { buildMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = buildMetadata({
  title: "Operational Excellence",
  description:
    "MSG operational excellence: command center coordination, hybrid field supervision, standardized SOPs, SLA monitoring, and compliance-aware practices.",
  path: "/operational-excellence",
});

const opsLayers = [
  {
    label: "Layer 1",
    title: "Command Center",
    accent: true,
    items: [
      "Status coordination",
      "Issue intake",
      "Escalation routing",
      "SLA monitoring",
    ],
  },
  {
    label: "Layer 2",
    title: "Hybrid Supervision",
    items: [
      "Field presence",
      "Wide-reaching coverage",
      "Quality control",
      "Local issue handling",
    ],
  },
  {
    label: "Layer 3",
    title: "Workforce Delivery",
    items: [
      "Deployed teams",
      "SOP execution",
      "Payroll via ProQPay",
      "Continuous reporting",
    ],
  },
];

const opsCycle = [
  {
    step: 1,
    title: "Signal intake",
    description: "Capture operational status, exceptions, and field signals.",
  },
  {
    step: 2,
    title: "Triage & escalate",
    description: "Route issues to the right ownership path with clear priority.",
  },
  {
    step: 3,
    title: "Field action",
    description: "Hybrid supervision resolves local issues and confirms quality.",
  },
  {
    step: 4,
    title: "Close & report",
    description: "Document outcomes and feed performance visibility to stakeholders.",
  },
];

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
          <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-sm">
            <Image
              src="/images/operations/ops-layers.svg"
              alt="MSG operational control layers diagram"
              width={1200}
              height={520}
              className="h-auto w-full"
              unoptimized
            />
          </div>
          <div className="mt-10">
            <OperationsLayerGraph layers={opsLayers} />
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <h2 className="text-2xl font-bold">Issue-to-resolution flow</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            How operational signals move from intake to closed-loop reporting.
          </p>
          <div className="mt-10">
            <ProcessFlow steps={opsCycle} variant="horizontal" tone="orange" />
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <h2 className="text-2xl font-bold">Recruitment workflow</h2>
          <div className="mt-8">
            <ProcessFlow steps={recruitmentFlow} variant="vertical" />
          </div>
        </Container>
      </section>

      <section className="section-padding">
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
