import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { aboutContent } from "@/lib/content/about";

export function TimelineSection() {
  return (
    <section className="section-padding bg-gray-bg dark:bg-background">
      <Container>
        <SectionTitle
          eyebrow="Journey"
          title="Building Indonesia’s trusted payroll platform"
          description="From founding in 2019 to enterprise platform expansion—our focus remains accuracy, reliability, and compliance."
        />
        <ol className="relative mt-12 space-y-8 border-l border-border pl-6">
          {aboutContent.timeline.map((item) => (
            <li key={item.year} className="relative">
              <span className="absolute -left-[1.92rem] top-1.5 h-3 w-3 rounded-full border-2 border-orange bg-background" />
              <div className="text-sm font-semibold text-orange">{item.year}</div>
              <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
