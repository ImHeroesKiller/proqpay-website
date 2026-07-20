import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/content/about";

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-background">
      <Container>
        <SectionTitle
          eyebrow="Testimonials"
          title="What our clients say"
          description="Approved client stories will be published here. Until then, this section remains intentionally reserved."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.role + item.company} className="h-full">
              <CardContent className="flex h-full flex-col p-6">
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{item.quote}”
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.role}, {item.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
