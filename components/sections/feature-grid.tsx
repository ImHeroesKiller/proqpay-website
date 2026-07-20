import { Container } from "@/components/shared/container";
import { FeatureCard } from "@/components/shared/feature-card";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionTitle } from "@/components/shared/section-title";
import { homeFeatures, workflowSteps } from "@/lib/content/about";

export function FeatureGrid() {
  return (
    <section className="section-padding bg-background">
      <Container>
        <SectionTitle
          eyebrow="Capabilities"
          title="Enterprise payroll operations on one platform"
          description="From processing and disbursement to compliance and reporting—built for Indonesian enterprises that need accuracy at scale."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeFeatures.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.05}>
              <FeatureCard {...feature} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-gray-bg p-6 dark:bg-muted/30 sm:p-8">
          <h3 className="text-xl font-semibold">End-to-end payroll workflow</h3>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            One integrated process from employee data to analytics—designed for
            control, compliance, and on-time payment.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-border bg-card p-4"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-orange">
                  Step {step.step}
                </div>
                <div className="mt-1 font-semibold">{step.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
