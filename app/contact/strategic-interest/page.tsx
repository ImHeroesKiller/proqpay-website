import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { StrategicInterestForm } from "@/components/forms/strategic-interest-form";
import { buildMetadata } from "@/lib/seo";
import {
  isStrategicInterestEnabled,
  portfolioCompanies,
} from "@/lib/content/portfolio";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "Strategic Interest | MSG Advisory",
  description:
    "Request a confidential discussion with MSG Strategic Advisory regarding managed portfolio companies, partnerships, or strategic opportunities.",
  path: "/contact/strategic-interest",
  noIndex: !isStrategicInterestEnabled(),
});

export default async function StrategicInterestPage({
  searchParams,
}: {
  searchParams: Promise<{ company?: string }>;
}) {
  const params = await searchParams;
  const enabled = isStrategicInterestEnabled();
  const slug = params.company;
  const company = portfolioCompanies.find((c) => c.slug === slug);

  return (
    <>
      <PageHero
        title="Strategic interest inquiry"
        description="For qualified investors, operators, and strategic partners. Financials, valuations, and transaction documents are not shared through this form."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
          { label: "Strategic Interest" },
        ]}
      />

      <section className="section-padding">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                How this process works
              </h2>
              <ol className="mt-4 list-decimal space-y-2 pl-5">
                <li>Submit a high-level expression of interest.</li>
                <li>MSG Strategic Advisory reviews for relevance and fit.</li>
                <li>
                  Where appropriate, MSG may request an NDA before sharing
                  confidential materials.
                </li>
              </ol>
            </div>
            {company ? (
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Related company
                </p>
                <p className="mt-2 font-semibold text-foreground">{company.name}</p>
                <p className="mt-2">{company.sector}</p>
              </div>
            ) : null}
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-semibold text-foreground">Contact</p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-medium text-[#0B3A6E] dark:text-blue-300"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="mt-1">Phone: {siteConfig.contact.phoneDisplay}</p>
            </div>
          </div>

          <div>
            {enabled ? (
              <StrategicInterestForm portfolioSlug={slug} />
            ) : (
              <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-8">
                <h2 className="text-xl font-semibold">
                  Strategic interest form not yet public
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Public investor and strategic-partner pathways for managed
                  portfolio companies will open after internal legal approval.
                  You may still contact MSG Strategic Advisory through the general
                  consultation channel.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="bg-[#0B3A6E] text-white hover:bg-[#0a3360]"
                  >
                    <Link href="/request-consultation?intent=strategic-advisory">
                      Contact Strategic Advisory
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">General contact</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
