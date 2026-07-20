import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: `Terms governing use of the ${siteConfig.name} website and related public digital channels.`,
  path: "/terms",
});

const sections = [
  {
    title: "1. Acceptance of terms",
    body: [
      `By accessing ${siteConfig.websiteDisplay} and related public pages operated by ${siteConfig.legalName} (“MSG”), you agree to these Terms of Use. If you do not agree, please discontinue use of the website.`,
    ],
  },
  {
    title: "2. Purpose of the website",
    body: [
      "This website provides general information about MSG’s enterprise workforce solutions, operational capabilities, industries we support, careers information, and technology products such as ProQPay.",
      "Content on this website is for informational purposes and does not constitute a binding offer, employment contract, legal advice, or guarantee of service outcomes unless expressly agreed in a signed commercial agreement.",
    ],
  },
  {
    title: "3. No unauthorized reliance",
    body: [
      "Descriptions of services, process flows, product capabilities, and roadmap items may evolve. Final scope, commercial terms, and technical configuration are defined only in client agreements, proposals, or product documentation issued by MSG.",
      "Portfolio and industry materials describe experience themes and capability orientation. They are not formal client endorsements unless explicitly stated with permission.",
    ],
  },
  {
    title: "4. ProQPay product distinction",
    body: [
      "ProQPay is a technology product of MSG. References to ProQPay on this corporate website are product information, not a substitute for product terms, app terms, or separately agreed commercial conditions for payroll operations.",
      `Access to the ProQPay application (for example ${siteConfig.appUrl}) may be subject to additional product terms, authentication, and client-specific configuration.`,
    ],
  },
  {
    title: "5. User conduct",
    body: [
      "You agree not to misuse the website, including attempts to disrupt service, probe systems without authorization, submit malicious content, harvest contact data, or impersonate MSG or third parties.",
      "You agree not to use contact forms or the chatbot to send unlawful, abusive, or deceptive content.",
    ],
  },
  {
    title: "6. Intellectual property",
    body: [
      "Website design, text, logos, icons, graphics, and other materials are owned by MSG or used under license. You may not copy, modify, distribute, or commercially exploit site materials without prior written permission, except for fair personal reference or ordinary browser caching.",
      "MSG and ProQPay brand assets may only be used with authorization.",
    ],
  },
  {
    title: "7. Third-party services and links",
    body: [
      "The website may link to third-party sites or services. MSG is not responsible for the content, availability, or practices of external sites.",
    ],
  },
  {
    title: "8. Disclaimer of warranties",
    body: [
      "The website is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, MSG disclaims warranties of uninterrupted access, error-free content, or fitness for a particular purpose regarding general website information.",
    ],
  },
  {
    title: "9. Limitation of liability",
    body: [
      "To the fullest extent permitted by applicable law, MSG shall not be liable for indirect, incidental, or consequential damages arising from use of, or inability to use, the website’s informational content.",
      "Nothing in these terms excludes liability that cannot be excluded under Indonesian law.",
    ],
  },
  {
    title: "10. Careers and recruitment",
    body: [
      "MSG does not charge candidates recruitment fees. Communications claiming otherwise should be treated as suspicious and verified through official channels.",
      "Submitting a CV or career interest does not create an employment relationship.",
    ],
  },
  {
    title: "11. Privacy",
    body: [
      "Personal information submitted through the website is handled in accordance with our Privacy Policy.",
    ],
  },
  {
    title: "12. Changes",
    body: [
      "We may update these Terms of Use periodically. Continued use of the website after changes are published constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "13. Governing law",
    body: [
      "These terms are governed by the laws of the Republic of Indonesia. Disputes shall be subject to the competent courts in Indonesia, without prejudice to mandatory consumer protections that may apply.",
    ],
  },
  {
    title: "14. Contact",
    body: [
      `${siteConfig.legalName}`,
      `Email: ${siteConfig.contact.email}`,
      `Phone: ${siteConfig.contact.phoneDisplay}`,
      `Office: ${siteConfig.contact.addressDetail}`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        description={`Terms governing use of the ${siteConfig.name} website and related public digital channels.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Use" },
        ]}
      />
      <section className="section-padding">
        <Container className="max-w-3xl">
          <p className="text-sm text-muted-foreground">
            Last updated: 20 July 2026
          </p>
          <div className="mt-8 space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold tracking-tight">{section.title}</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {section.body.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
