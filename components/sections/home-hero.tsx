import Link from "next/link";
import { Container } from "@/components/shared/container";
import { DashboardMockup } from "@/components/shared/dashboard-mockup";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-navy-dark text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,140,40,0.18),transparent_40%)]" />
      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
            {siteConfig.tagline}
          </p>
          <h1 className="mt-4 whitespace-pre-line text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            {siteConfig.hero.subheadline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="accent" size="lg">
              <Link href="/request-demo">Request Demo</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-white/20 bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/contact?intent=sales">Talk to Sales</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/70">
            <span>Simple</span>
            <span className="text-white/30">|</span>
            <span>Secure</span>
            <span className="text-white/30">|</span>
            <span>Reliable</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <DashboardMockup />
        </FadeIn>
      </Container>
    </section>
  );
}
