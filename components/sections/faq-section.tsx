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
}: {
  items?: { question: string; answer: string }[];
  showSchema?: boolean;
}) {
  return (
    <section className="section-padding bg-gray-bg dark:bg-background">
      {showSchema ? <JsonLd data={faqJsonLd(items)} /> : null}
      <Container className="max-w-3xl">
        <SectionTitle
          eyebrow="FAQ"
          title="Questions decision-makers ask"
          description="Clear answers on processing, disbursement, compliance, and how ProQPay works with enterprise teams."
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
