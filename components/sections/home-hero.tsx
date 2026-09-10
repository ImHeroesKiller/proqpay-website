import Link from "next/link";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { HeroVideo } from "@/components/sections/hero-video";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const capabilityCards = [
  {
    label: "Strategic Advisory",
    detail: "Recovery · Growth · Transformation",
  },
  {
    label: "Workforce Solutions",
    detail: "People · Operations · Managed delivery",
  },
  {
    label: "Workforce Technology",
    detail: "ProQPay · Payroll control · Visibility",
  },
];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B1930] text-white lg:min-h-[clamp(460px,34.5vw,620px)]">
      <HeroVideo />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-white/10" />

      <Container className="relative py-12 sm:py-14 lg:flex lg:min-h-[clamp(460px,34.5vw,620px)] lg:flex-col lg:justify-center lg:py-10">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              {siteConfig.hero.eyebrow}
            </p>
            <h1 className="mt-4 text-[2.15rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.15rem] xl:text-[3.45rem]">
              {siteConfig.hero.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              {siteConfig.hero.subheadline}
            </p>
            <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-white/55">
              {siteConfig.hero.subheadlineEn}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0B3A6E] transition-transform hover:-translate-y-px hover:bg-white/90"
              >
                <Link href="/request-consultation">Request Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <ul className="mt-8 grid gap-3 md:grid-cols-3">
            {capabilityCards.map((card) => (
              <li
                key={card.label}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 backdrop-blur-md"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-white/50">
                  {card.label}
                </p>
                <p className="mt-1.5 text-sm font-medium text-white/90">
                  {card.detail}
                </p>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
