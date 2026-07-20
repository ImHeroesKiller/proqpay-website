import { Container } from "@/components/shared/container";
import { LogosCarousel } from "@/components/shared/logos-carousel";
import { clientLogos } from "@/lib/content/about";

export function TrustLogos() {
  return (
    <section className="border-b border-border bg-background py-12">
      <Container>
        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by Growing Indonesian Businesses
        </p>
        <LogosCarousel logos={clientLogos} />
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Client logos: Content Coming Soon
        </p>
      </Container>
    </section>
  );
}
