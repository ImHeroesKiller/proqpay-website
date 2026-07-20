import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { ComingSoon } from "@/components/shared/coming-soon";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: `${siteConfig.legalName} terms of use. Full legal text coming soon.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        description={`Terms governing use of the ${siteConfig.name} website and related services.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Use" },
        ]}
      />
      <section className="section-padding">
        <Container className="max-w-3xl">
          <ComingSoon
            title="Content Coming Soon"
            description="The full terms of use will be published here after legal review."
          />
        </Container>
      </section>
    </>
  );
}
