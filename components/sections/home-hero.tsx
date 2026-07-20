import Link from "next/link";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const floatingCards = [
  { label: "Workforce Active", detail: "Deployment ready" },
  { label: "Operational Coverage", detail: "Multi-location support" },
  { label: "Payroll Visibility", detail: "ProQPay enabled" },
  { label: "Compliance Monitoring", detail: "Process discipline" },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B3A6E] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-white/10" />

      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            {siteConfig.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-2xl text-[2.35rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            {siteConfig.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {siteConfig.hero.subheadline}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55">
            {siteConfig.hero.subheadlineEn}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#0B3A6E] hover:bg-white/90 hover:-translate-y-px transition-transform"
            >
              <Link href="/request-consultation">Request Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div
            className="relative min-h-[340px] overflow-hidden rounded-2xl border border-white/15 bg-[#082B52] sm:min-h-[400px]"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.08)_0%,transparent_45%,rgba(0,0,0,0.28)_100%)]" />

            {/* Abstract enterprise visual */}
            <svg
              className="absolute bottom-28 right-0 h-44 w-full opacity-15"
              viewBox="0 0 400 120"
              fill="none"
              aria-hidden
            >
              <rect x="20" y="40" width="28" height="80" fill="white" />
              <rect x="55" y="20" width="36" height="100" fill="white" />
              <rect x="100" y="50" width="24" height="70" fill="white" />
              <rect x="135" y="10" width="42" height="110" fill="white" />
              <rect x="185" y="35" width="30" height="85" fill="white" />
              <rect x="225" y="25" width="48" height="95" fill="white" />
              <rect x="285" y="45" width="26" height="75" fill="white" />
              <rect x="320" y="15" width="40" height="105" fill="white" />
            </svg>

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                  Indonesia · Enterprise Operations
                </p>
              </div>
              <p className="text-xl font-semibold text-white sm:text-2xl">
                People · Operations · Technology
              </p>
              <div className="mt-5 grid grid-cols-2 gap-2">
                {floatingCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 backdrop-blur-sm"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-white/50">
                      {card.label}
                    </p>
                    <p className="mt-1 text-sm text-white/85">{card.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
