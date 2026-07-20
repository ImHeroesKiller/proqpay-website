import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { ComingSoon } from "@/components/shared/coming-soon";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "ProQPay terms of service. Full legal text coming soon.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        description="Terms governing use of the ProQPay website and related services."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Service" },
        ]}
      />
      <section className="section-padding">
        <Container className="max-w-3xl">
          <ComingSoon
            title="Content Coming Soon"
            description="The full terms of service will be published here after legal review."
          />
        </Container>
      </section>
    </>
  );
}
