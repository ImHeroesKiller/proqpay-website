import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

function CtaLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  if (external) {
    return (
      <a href={href} rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <Link href={href}>{children}</Link>;
}

export function CtaBand({
  title = "Build a More Efficient Workforce Operation with MSG",
  description = "Talk with our team about workforce solutions, operational excellence, engineering talent, IT support, or ProQPay payroll infrastructure.",
  primaryHref = "/request-consultation",
  primaryLabel = "Request Consultation",
  secondaryHref = "/contact",
  secondaryLabel = "Contact Our Team",
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="section-padding bg-navy-dark text-white">
      <Container className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            {description}
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button asChild variant="accent" size="lg">
            <CtaLink href={primaryHref}>{primaryLabel}</CtaLink>
          </Button>
          <Button
            asChild
            size="lg"
            className="border border-white/20 bg-transparent text-white hover:bg-white/10"
          >
            <CtaLink href={secondaryHref}>{secondaryLabel}</CtaLink>
          </Button>
        </div>
      </Container>
    </section>
  );
}
