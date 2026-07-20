import { PageHero } from "@/components/shared/page-hero";
import { FaqSection } from "@/components/sections/faq-section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about ProQPay payroll processing, disbursement, compliance, and demos.",
  path: "/resources/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently asked questions"
        description="Clear answers for enterprise buyers evaluating payroll processing and disbursement partners."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "FAQ" },
        ]}
      />
      <FaqSection showSchema />
    </>
  );
}
