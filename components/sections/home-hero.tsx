import Link from "next/link";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B3A6E] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      <Container className="relative grid items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            {siteConfig.hero.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            {siteConfig.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            {siteConfig.hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#0B3A6E] hover:bg-white/90"
            >
              <Link href="/services">Our Services</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/contact">Contact MSG</Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          {/* Corporate visual panel — Indonesian enterprise atmosphere */}
          <div
            className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/15 bg-[#082B52]"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.08)_0%,transparent_45%,rgba(0,0,0,0.25)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                Indonesia · Enterprise Operations
              </p>
              <p className="mt-2 text-xl font-semibold text-white">
                People. Operations. Technology.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {["Jakarta HO", "Multi-site teams", "Payroll tech"].map((label) => (
                  <div
                    key={label}
                    className="rounded-lg border border-white/10 bg-white/5 px-2 py-3 text-center text-[11px] text-white/75"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
            {/* Abstract skyline silhouette */}
            <svg
              className="absolute bottom-24 right-0 h-40 w-full opacity-20"
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
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
