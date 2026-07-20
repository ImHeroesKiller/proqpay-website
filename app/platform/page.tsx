import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { platformModules } from "@/lib/content/platform";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Platform",
  description:
    "Explore the ProQPay enterprise payroll platform: architecture, security, approvals, roles, audit trail, multi-company, scalability, integrations, and future AI.",
  path: "/platform",
});

export default function PlatformPage() {
  return (
    <>
      <PageHero
        title="Enterprise payroll platform"
        description="Architecture and controls designed for multi-entity organizations that need accuracy, auditability, and on-time disbursement."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Platform" },
        ]}
        dark
      />

      <section className="border-b border-border bg-background py-8">
        <Container>
          <div className="flex flex-wrap gap-2">
            {platformModules.map((module) => (
              <a
                key={module.id}
                href={`#${module.id}`}
                className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-orange/40 hover:text-foreground"
              >
                {module.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container className="space-y-16">
          {platformModules.map((module) => (
            <article
              key={module.id}
              id={module.id}
              className="scroll-mt-28 grid gap-8 border-b border-border pb-16 last:border-0 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-orange">
                  Platform module
                </p>
                <h2 className="mt-2 text-3xl font-bold">{module.title}</h2>
                <p className="mt-3 text-muted-foreground">{module.summary}</p>
              </div>
              <div>
                <p className="leading-relaxed text-foreground/90">
                  {module.description}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {module.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground"
                    >
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <CtaBand title="See the platform in a guided demo" />
    </>
  );
}
