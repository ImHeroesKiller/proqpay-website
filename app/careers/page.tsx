import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { ComingSoon } from "@/components/shared/coming-soon";
import { CtaBand } from "@/components/sections/cta-band";
import { recruitmentFlow } from "@/lib/content/about";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Join MSG's talent pool. Explore careers and recruitment opportunities at PT Mandiri Semesta Gemilang.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers and talent pool"
        description="MSG builds teams across workforce operations, engineering, administration, IT support, and project delivery. Join a company focused on trust, excellence, and sustainable partnerships."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers" },
        ]}
        cta={{
          label: "Contact HR / Talent",
          href: `/contact?intent=careers`,
        }}
      />

      <section className="section-padding">
        <Container>
          <h2 className="text-2xl font-bold">How recruitment works</h2>
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
        <Container>
          <h2 className="text-2xl font-bold">Open roles</h2>
          <p className="mt-2 text-muted-foreground">
            Current openings will be published here. Until then, send your profile to{" "}
            <a
              className="font-medium text-orange hover:underline"
              href={`mailto:${siteConfig.contact.email}`}
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <ComingSoon
              title="Role listings"
              description="Content Coming Soon — open positions will appear here."
            />
            <ComingSoon
              title="Talent pool registration"
              description="Content Coming Soon — online talent pool form will be published after approval."
            />
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="/contact?intent=careers">Contact careers team</Link>
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Interested in joining MSG?"
        primaryHref="/contact?intent=careers"
        primaryLabel="Contact Careers"
        secondaryHref="/about"
        secondaryLabel="About MSG"
      />
    </>
  );
}
