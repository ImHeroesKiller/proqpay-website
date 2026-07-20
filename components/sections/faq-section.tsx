import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/content/faq";
import { JsonLd } from "@/components/shared/json-ld";
import { faqJsonLd } from "@/lib/seo";

export function FaqSection({
  items = faqs,
  showSchema = false,
  title = "Questions enterprises ask about MSG",
  description = "Clear answers about MSG services, operations, ProQPay, and how we partner with enterprise teams.",
  eyebrow = "FAQ",
}: {
  items?: { question: string; answer: string }[];
  showSchema?: boolean;
  title?: string;
  description?: string;
  eyebrow?: string;
}) {
  return (
    <section className="section-padding bg-gray-bg dark:bg-background">
      {showSchema ? <JsonLd data={faqJsonLd(items)} /> : null}
      <Container className="max-w-3xl">
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
        />
        <Accordion type="single" collapsible className="mt-10">
          {items.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
