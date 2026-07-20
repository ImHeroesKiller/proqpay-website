import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.legalName} website, contact forms, and chatbot interactions.`,
  path: "/privacy",
});

const sections = [
  {
    title: "1. Scope",
    body: [
      `This Privacy Policy explains how ${siteConfig.legalName} (“MSG”, “we”, “us”) handles personal information collected through ${siteConfig.websiteDisplay}, related contact forms, consultation requests, and the website chatbot assistant.`,
      "It applies to website visitors, prospective clients, job applicants who contact us voluntarily, and other individuals who submit information through our public channels.",
    ],
  },
  {
    title: "2. Information we collect",
    body: [
      "Information you provide directly, such as name, company, email, phone number, role, workforce requirements, message content, and career-related materials you choose to send.",
      "Technical information collected automatically, such as browser type, device category, approximate location derived from IP (if available), pages visited, and basic usage logs needed to operate and secure the website.",
      "Chatbot conversation content you send to Sinta (MSG Assistant), used to respond to your questions and improve support quality during the session.",
    ],
  },
  {
    title: "3. How we use information",
    body: [
      "Respond to inquiries, consultation requests, product demos, and support questions.",
      "Coordinate commercial discussions related to workforce solutions and ProQPay.",
      "Process career interest submissions you send voluntarily.",
      "Operate, secure, and improve the website, forms, and chatbot experience.",
      "Meet legal, compliance, and record-keeping obligations applicable to our operations in Indonesia.",
    ],
  },
  {
    title: "4. Legal basis and consent",
    body: [
      "Where you submit a form or chat message, we process the information to respond to your request and manage related business communications.",
      "You may choose not to provide personal data, but certain services (for example contact forms) may not function without the information needed to reply.",
    ],
  },
  {
    title: "5. Sharing of information",
    body: [
      "We do not sell personal information.",
      "We may share information with trusted service providers that help us operate email delivery, hosting, analytics, or communications—only as needed to perform those services.",
      "We may disclose information if required by applicable law, regulation, legal process, or to protect the rights, safety, and integrity of MSG, our clients, or the public.",
    ],
  },
  {
    title: "6. Data retention",
    body: [
      "We retain inquiry and operational records for as long as reasonably necessary to handle your request, maintain business records, and meet legal requirements.",
      "Chatbot short-term memory may be stored in your browser session and/or processed server-side for the active conversation window. Do not submit sensitive credentials, national ID numbers, or confidential payroll data in the public chatbot.",
    ],
  },
  {
    title: "7. Security",
    body: [
      "We apply reasonable technical and organizational measures to protect personal information against unauthorized access, alteration, or destruction.",
      "No method of transmission over the internet is completely secure. Please use official channels and avoid sharing highly sensitive documents through unsolicited third-party contacts.",
    ],
  },
  {
    title: "8. Your choices",
    body: [
      "You may request access, correction, or deletion of personal information you previously submitted, subject to legal retention requirements.",
      `To exercise these choices, contact ${siteConfig.contact.email} with sufficient detail for us to verify and process the request.`,
    ],
  },
  {
    title: "9. Third-party links",
    body: [
      "Our website may link to external sites (for example the ProQPay application subdomain or social media). Their privacy practices are governed by their own policies.",
    ],
  },
  {
    title: "10. Updates",
    body: [
      "We may update this Privacy Policy from time to time. The “Last updated” date below reflects the latest revision published on this page.",
    ],
  },
  {
    title: "11. Contact",
    body: [
      `${siteConfig.legalName}`,
      `Email: ${siteConfig.contact.email}`,
      `Phone: ${siteConfig.contact.phoneDisplay}`,
      `Office: ${siteConfig.contact.addressDetail}`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description={`How ${siteConfig.legalName} handles personal and organizational information collected through our website and related channels.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
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
