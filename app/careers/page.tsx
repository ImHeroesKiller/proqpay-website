import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { ProcessFlow } from "@/components/shared/process-flow";
import {
  careerFraudWarning,
  careerValues,
  openPositions,
  recruitmentFlow,
} from "@/lib/content/about";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Join MSG. Explore careers and recruitment opportunities at PT Mandiri Semesta Gemilang. No recruitment fees. Official channels only.",
  path: "/careers",
});

export default function CareersPage() {
  const publishedRoles = openPositions.filter((role) => role.status === "open");

  return (
    <>
      <PageHero
        title="Careers at MSG"
        description="Build your career with an Enterprise Workforce Solutions & Business Transformation Partner focused on advisory, people operations, and technology."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers" },
        ]}
        cta={{
          label: "Contact Talent Team",
          href: `/contact?intent=career`,
        }}
      />

      <section className="section-padding">
        <Container>
          <h2 className="text-2xl font-bold sm:text-3xl">Why work with MSG</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {careerValues.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <h2 className="text-2xl font-bold sm:text-3xl">Recruitment process</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Transparent hiring steps. MSG never charges candidates recruitment fees.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-sm">
            <Image
              src="/images/careers/recruitment-flow.svg"
              alt="MSG recruitment process flow"
              width={1200}
              height={360}
              className="h-auto w-full"
              unoptimized
            />
          </div>
          <div className="mt-10">
            <ProcessFlow steps={recruitmentFlow} variant="horizontal" tone="orange" />
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <h2 className="text-2xl font-bold sm:text-3xl">Open positions</h2>
          {publishedRoles.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-border bg-card p-8">
              <p className="text-muted-foreground">
                There are no published openings at this time. You may still share
                your profile for future opportunities.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Send your CV to{" "}
                <a
                  className="font-medium text-[#0B3A6E] hover:underline dark:text-blue-300"
                  href={`mailto:${siteConfig.contact.email}?subject=Career%20Application%20-%20MSG`}
                >
                  {siteConfig.contact.email}
                </a>{" "}
                or use the contact form with intent &quot;Careers&quot;.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/contact?intent=career">Submit interest</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="mt-8 grid gap-4">
              {publishedRoles.map((role) => (
                <Card key={role.id}>
                  <CardHeader className="flex flex-row items-start justify-between gap-4">
                    <div>
                      <CardTitle>{role.position}</CardTitle>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {role.location} · {role.employmentType} ·{" "}
                        {role.department}
                      </p>
                    </div>
                    <Badge variant="secondary">{role.status}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {role.description}
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      {role.requirements.map((req) => (
                        <li key={req}>{req}</li>
                      ))}
                    </ul>
                    <Button asChild size="sm">
                      <Link href={role.applyHref}>Apply</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className="section-padding bg-gray-bg dark:bg-background">
        <Container>
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <div>
                <h2 className="text-lg font-semibold">Recruitment fraud warning</h2>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {careerFraudWarning.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  Official contact:{" "}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-medium text-[#0B3A6E] dark:text-blue-300"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready to join MSG?"
        description="Tell us about your experience and the roles you are interested in."
        primaryHref="/contact?intent=career"
        primaryLabel="Contact Talent Team"
        secondaryHref="/about"
        secondaryLabel="About MSG"
      />
    </>
  );
}
