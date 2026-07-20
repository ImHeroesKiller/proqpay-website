import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { DemoForm } from "@/components/forms/demo-form";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Request Demo",
  description:
    "Request a ProQPay demo and see enterprise payroll processing, disbursement, approvals, and compliance workflows.",
  path: "/request-demo",
});

export default function RequestDemoPage() {
  return (
    <>
      <PageHero
        title="Request a demo"
        description="See how ProQPay supports accurate processing, controlled approvals, multi-bank disbursement, and Indonesian compliance."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Request Demo" },
        ]}
      />
      <section className="section-padding">
        <Container className="max-w-2xl">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <DemoForm />
          </div>
        </Container>
      </section>
    </>
  );
}
