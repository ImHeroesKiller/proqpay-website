import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { ContactForm } from "@/components/forms/contact-form";
import { ComingSoon } from "@/components/shared/coming-soon";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact ProQPay sales and support. Request a demo or speak with our enterprise payroll team.",
  path: "/contact",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const params = await searchParams;
  const intent =
    params.intent === "demo" || params.intent === "sales"
      ? params.intent
      : "general";

  return (
    <>
      <PageHero
        title="Contact ProQPay"
        description="Talk with our team about payroll processing, disbursement, compliance, or a product demonstration."
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
                <Mail className="mt-0.5 h-5 w-5 text-orange" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm text-muted-foreground hover:text-orange"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Sales: {siteConfig.contact.salesEmail}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border p-6">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-orange" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.contact.phone}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-orange" />
                <div>
                  <p className="font-semibold">Office</p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.contact.address}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {siteConfig.contact.addressDetail}
                  </p>
                </div>
              </div>
            </div>
            <ComingSoon
              title="Google Map"
              description="Content Coming Soon — interactive map placeholder."
            />
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">Send a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Share a few details and our team will follow up.
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
