import Link from "next/link";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-navy-dark text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,140,40,0.16),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(135deg,transparent_40%,rgba(255,255,255,0.03)_100%)]" />
      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange">
            {siteConfig.hero.eyebrow}
          </p>
          <h1 className="mt-4 whitespace-pre-line text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {siteConfig.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            {siteConfig.hero.subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="accent" size="lg">
              <Link href="/services">Explore Our Solutions</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-white/20 bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/request-consultation">Request Consultation</Link>
            </Button>
          </div>
          <div className="mt-5">
            <Link
              href="/products/proqpay"
              className="text-sm font-semibold text-orange hover:underline"
            >
              Discover ProQPay →
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
            <span>People</span>
            <span className="text-white/30">|</span>
            <span>Operations</span>
            <span className="text-white/30">|</span>
            <span>Technology</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f2438] p-5 shadow-sm"
            aria-hidden="true"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-white/45">
                  MSG Operating Model
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  People · Operations · Technology
                </p>
              </div>
              <div className="rounded-full bg-orange/20 px-2.5 py-1 text-[10px] font-semibold text-orange">
                Enterprise
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {["People", "Operations", "Technology"].map((pillar, index) => (
                <div
                  key={pillar}
                  className="rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <div className="text-[10px] uppercase tracking-wide text-white/45">
                    Pillar 0{index + 1}
                  </div>
                  <div className="mt-1 font-semibold text-white">{pillar}</div>
                  <div className="mt-3 space-y-1.5">
                    <div className="h-1.5 rounded bg-white/10" />
                    <div className="h-1.5 w-4/5 rounded bg-white/10" />
                    <div className="h-1.5 w-3/5 rounded bg-orange/50" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-medium text-white">
                  Workforce Operating Flow
                </p>
                <span className="text-[10px] text-white/45">ProQPay-ready</span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {["Plan", "Recruit", "Deploy", "Supervise", "Payroll", "Report"].map(
                  (step) => (
                    <div
                      key={step}
                      className="rounded-lg bg-white/5 px-2 py-2 text-center text-xs text-white/75"
                    >
                      {step}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
