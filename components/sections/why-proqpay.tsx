import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionTitle } from "@/components/shared/section-title";
import { whyProQPay } from "@/lib/content/about";
import { CheckCircle2 } from "lucide-react";

export function WhyProQPay() {
  return (
    <section className="section-padding bg-background">
      <Container>
        <SectionTitle
          eyebrow="Why ProQPay"
          title="Enterprise trust, local payroll depth"
          description="We combine BPO discipline with platform controls so HR and finance teams can run payroll accurately, on time, and in full compliance."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyProQPay.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.04}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-orange" />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
