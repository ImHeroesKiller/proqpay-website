import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { aboutContent } from "@/lib/content/about";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "About MSG",
  description:
    "About PT Mandiri Semesta Gemilang (MSG): Indonesian enterprise workforce solutions company established in 2019.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About MSG"
        description={`${siteConfig.legalName} — enterprise workforce solutions for Indonesian businesses.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <section className="section-padding">
        <Container className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold">Who we are</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
            {aboutContent.whoWeAre.map((p) => (
              <p key={p.slice(0, 36)}>{p}</p>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                {aboutContent.vision}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                {aboutContent.mission}
              </CardContent>
            </Card>
          </div>

          <h2 className="mt-14 text-2xl font-bold">Core services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {aboutContent.coreServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="rounded-2xl border border-border bg-card p-5 transition hover:border-[#0B3A6E]/40"
              >
                <h3 className="font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <h2 className="mt-14 text-2xl font-bold">Company timeline</h2>
          <ol className="mt-6 space-y-5 border-l border-border pl-6">
            {aboutContent.timeline.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[1.9rem] top-1.5 h-2.5 w-2.5 rounded-full bg-[#0B3A6E]" />
                <div className="text-sm font-semibold text-[#0B3A6E] dark:text-blue-300">
                  {item.year}
                </div>
                <div className="mt-1 font-semibold">{item.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>

          <h2 className="mt-14 text-2xl font-bold">Corporate values</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {aboutContent.values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <h3 className="font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button asChild className="bg-[#0B3A6E] text-white hover:bg-[#0a3360]">
              <Link href="/contact">Contact MSG</Link>
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
