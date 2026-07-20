import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { ComingSoon } from "@/components/shared/coming-soon";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Downloads",
  description:
    "Download ProQPay materials for internal evaluation. Brochures and packs will appear here when published.",
  path: "/resources/downloads",
});

const items = [
  "Company overview brochure",
  "Payroll processing one-pager",
  "Working capital overview",
  "Security & compliance summary",
];

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        title="Downloads"
        description="Materials for internal evaluation with your HR, finance, and risk stakeholders."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Downloads" },
        ]}
      />
      <section className="section-padding">
        <Container className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <ComingSoon
              key={item}
              title={item}
              description="Content Coming Soon — file will be available for download after approval."
            />
          ))}
        </Container>
      </section>
    </>
  );
}
