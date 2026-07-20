import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";
import type { ContactFormValues } from "@/lib/validations/contact";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact PT Mandiri Semesta Gemilang (MSG). Sales, support, payroll demo, partnership, and career inquiries.",
  path: "/contact",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const params = await searchParams;
  const allowed: ContactFormValues["intent"][] = [
    "sales",
    "support",
    "payroll-demo",
    "partnership",
    "career",
    "general",
  ];
  const intent = allowed.includes(params.intent as ContactFormValues["intent"])
    ? (params.intent as ContactFormValues["intent"])
    : "general";

  return (
    <>
      <PageHero
        title="Contact MSG"
        description="One corporate contact channel for sales, support, payroll demo, partnership, and career inquiries."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <section className="section-padding">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border p-6">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-[#0B3A6E] dark:text-blue-300" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm text-muted-foreground hover:text-[#0B3A6E]"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Marketing: {siteConfig.contact.marketingEmail}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border p-6">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-[#0B3A6E] dark:text-blue-300" />
                <div>
                  <p className="font-semibold">Phone & WhatsApp</p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.contact.phoneDisplay}
                  </p>
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    className="mt-1 block text-sm text-[#0B3A6E] hover:underline dark:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp {siteConfig.contact.whatsappDisplay}
                  </a>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {siteConfig.contact.salesRole}: {siteConfig.contact.salesContact}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-[#0B3A6E] dark:text-blue-300" />
                <div>
                  <p className="font-semibold">Head Office</p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.contact.addressDetail}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-5 text-sm text-muted-foreground">
              Categories: Sales · Support · Payroll Demo · Partnership · Career
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">Send a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Everything routes through MSG corporate operations.
            </p>
            <div className="mt-6">
              <ContactForm defaultIntent={intent} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
