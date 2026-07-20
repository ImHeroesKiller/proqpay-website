import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Request Consultation",
  description:
    "Request a consultation with MSG for workforce solutions or a ProQPay payroll demo.",
  path: "/request-consultation",
});

export default async function RequestConsultationPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const params = await searchParams;
  const intent =
    params.intent === "payroll-demo" ||
    params.intent === "partnership" ||
    params.intent === "support"
      ? params.intent
      : "sales";

  return (
    <>
      <PageHero
        title="Request a consultation"
        description="Tell MSG about your workforce, operations, or payroll technology needs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Request Consultation" },
        ]}
      />
      <section className="section-padding">
        <Container className="max-w-2xl">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <ConsultationForm defaultIntent={intent} />
          </div>
        </Container>
      </section>
    </>
  );
}
