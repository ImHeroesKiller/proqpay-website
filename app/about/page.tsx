import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { CtaBand } from "@/components/sections/cta-band";
import { ProcessFlow } from "@/components/shared/process-flow";
import { aboutContent } from "@/lib/content/about";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "About MSG",
  description:
    "About PT Mandiri Semesta Gemilang (MSG): Indonesian enterprise workforce solutions company established in 2019. People · Operations · Technology.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About MSG"
        description={`${siteConfig.legalName} is an Indonesian enterprise workforce solutions company. We help organizations grow through people, operational excellence, and technology.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        cta={{ label: "Request Consultation", href: "/request-consultation" }}
      />

      <section className="section-padding">
        <Container className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Company overview</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
            {aboutContent.whoWeAre.map((p) => (
              <p key={p.slice(0, 36)}>{p}</p>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Established", value: String(siteConfig.founded) },
              { label: "Positioning", value: "Enterprise Workforce" },
              { label: "Framework", value: "People · Ops · Tech" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-2 font-semibold">{item.value}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-16 text-2xl font-bold sm:text-3xl">
            People · Operations · Technology
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            MSG integrates three pillars so workforce delivery stays reliable as
            the business grows.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-border shadow-sm">
            <Image
              src="/images/about/pillars.svg"
              alt="MSG pillars: People, Operations, and Technology"
              width={1200}
              height={640}
              className="h-auto w-full"
              unoptimized
            />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {aboutContent.pillars.map((pillar) => (
              <Card key={pillar.id}>
                <CardHeader>
                  <CardTitle>{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
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

          <h2 className="mt-16 text-2xl font-bold sm:text-3xl">Company values</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aboutContent.values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <h3 className="font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <h2 className="mt-16 text-2xl font-bold sm:text-3xl">How we work</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Six-step delivery cycle from understanding requirements to continuous
            improvement.
          </p>
          <div className="mt-8">
            <ProcessFlow steps={aboutContent.howWeWork} variant="cycle" />
          </div>

          <h2 className="mt-16 text-2xl font-bold sm:text-3xl">Core services</h2>
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

          <h2 className="mt-16 text-2xl font-bold sm:text-3xl">Leadership</h2>
          <div className="mt-4 rounded-2xl border border-border bg-card p-6 sm:p-8">
            {siteConfig.placeholders.leadership.length === 0 ? (
              <>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Detailed leadership profiles will be published on this page
                  after internal confirmation. Until then, please contact our
                  office for partnership or media inquiries.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild size="sm">
                    <Link href="/contact">Contact MSG</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href={`mailto:${siteConfig.contact.email}`}>
                      {siteConfig.contact.email}
                    </a>
                  </Button>
                </div>
              </>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {siteConfig.placeholders.leadership.map((person) => (
                  <div
                    key={person.name}
                    className="rounded-xl border border-border bg-muted/20 p-5"
                  >
                    <p className="font-semibold">{person.name}</p>
                    <p className="mt-1 text-sm text-orange">{person.role}</p>
                    {person.bio ? (
                      <p className="mt-3 text-sm text-muted-foreground">
                        {person.bio}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </div>

          <h2 className="mt-16 text-2xl font-bold sm:text-3xl">
            Company timeline
          </h2>
          <ol className="mt-6 space-y-5 border-l border-border pl-6">
            {aboutContent.timeline.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[1.9rem] top-1.5 h-2.5 w-2.5 rounded-full bg-[#0B3A6E]" />
                <div className="text-sm font-semibold text-[#0B3A6E] dark:text-blue-300">
                  {item.year}
                </div>
                <h3 className="mt-1 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>

          <h2 className="mt-16 text-2xl font-bold sm:text-3xl">
            Legal & office information
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5 text-sm">
              <p className="font-semibold">{aboutContent.legalInfo.companyName}</p>
              <p className="mt-2 text-muted-foreground">
                Established {aboutContent.legalInfo.founded}
              </p>
              <p className="mt-2 text-muted-foreground">
                {aboutContent.legalInfo.office}
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                {aboutContent.legalInfo.note}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 text-sm">
              <p className="text-muted-foreground">Email</p>
              <a
                href={`mailto:${aboutContent.legalInfo.email}`}
                className="font-medium text-[#0B3A6E] dark:text-blue-300"
              >
                {aboutContent.legalInfo.email}
              </a>
              <p className="mt-4 text-muted-foreground">Phone</p>
              <a
                href={`tel:${aboutContent.legalInfo.phone.replace(/\s/g, "")}`}
                className="font-medium text-[#0B3A6E] dark:text-blue-300"
              >
                {aboutContent.legalInfo.phone}
              </a>
              <div className="mt-6">
                <Button asChild variant="outline" size="sm">
                  <Link href="/contact">Contact office</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Partner with MSG"
        description="Discuss workforce outsourcing, engineering talent, business support, managed operations, or ProQPay with our team."
        primaryHref="/request-consultation"
        primaryLabel="Request Consultation"
        secondaryHref="/contact"
        secondaryLabel="Contact MSG"
      />
    </>
  );
}
