import { HomeHero } from "@/components/sections/home-hero";
import { TrustLogos } from "@/components/sections/trust-logos";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { StatsBand } from "@/components/sections/stats-band";
import { SolutionsOverview } from "@/components/sections/solutions-overview";
import { WhyProQPay } from "@/components/sections/why-proqpay";
import { TimelineSection } from "@/components/sections/timeline";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBand } from "@/components/sections/cta-band";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "ProQPay",
  description:
    "Simplifying payroll and empowering Indonesia's workforce. Modern payroll processing and disbursement for Indonesian enterprises.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustLogos />
      <FeatureGrid />
      <StatsBand />
      <SolutionsOverview />
      <WhyProQPay />
      <TimelineSection />
      <TestimonialsSection />
      <FaqSection showSchema />
      <CtaBand />
    </>
  );
}
