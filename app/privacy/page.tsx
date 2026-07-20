import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { ComingSoon } from "@/components/shared/coming-soon";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `${siteConfig.legalName} privacy policy. Full legal text coming soon.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description={`How ${siteConfig.legalName} handles personal and organizational information.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <section className="section-padding">
        <Container className="max-w-3xl">
          <ComingSoon
            title="Content Coming Soon"
            description="The full privacy policy will be published here after legal review."
          />
        </Container>
      </section>
    </>
  );
}
