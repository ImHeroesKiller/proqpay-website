import { PageHero } from "@/components/shared/page-hero";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBand } from "@/components/sections/cta-band";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about MSG enterprise workforce solutions, services, ProQPay, and partnership models.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently asked questions"
        description="Clear answers for enterprise buyers evaluating workforce solutions, managed operations, and ProQPay."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />
      <FaqSection showSchema />
      <CtaBand
        title="Still have questions?"
        description="Speak with the MSG team about your workforce and operational requirements."
        primaryHref="/request-consultation"
        primaryLabel="Request Consultation"
        secondaryHref="/contact"
        secondaryLabel="Contact MSG"
      />
    </>
  );
}
