import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { HeroVideo } from "@/components/sections/hero-video";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const floatingCards = [
  { label: "Strategic Advisory", detail: "Featured service" },
  { label: "Workforce Solutions", detail: "End-to-end delivery" },
  { label: "Workforce Technology", detail: "ProQPay enabled" },
  { label: "Business Transformation", detail: "Improve · Grow · Scale" },
];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B1930] text-white">
      <HeroVideo />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-white/10" />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-end gap-10 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                {siteConfig.hero.eyebrow}
              </p>
              <h1 className="mt-5 text-[2.15rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.35rem] xl:text-[3.6rem]">
                {siteConfig.hero.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                {siteConfig.hero.subheadline}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
                {siteConfig.hero.subheadlineEn}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

          <FadeIn delay={0.08}>
            <div className="relative mx-auto hidden w-full max-w-[470px] lg:block">
              <div className="pointer-events-none absolute inset-x-8 bottom-2 h-24 rounded-full bg-[#0B3A6E]/45 blur-3xl" />
              <Image
                src="/images/home/Indonesia-worker.png"
                alt="Young Indonesian male and female office professionals"
                width={900}
                height={1000}
                priority
                className="relative z-10 h-auto max-h-[520px] w-full object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {floatingCards.map((card) => (
              <li
                key={card.label}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-4 backdrop-blur-md"
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
