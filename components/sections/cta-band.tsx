import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export function CtaBand({
  title = "Ready to simplify enterprise payroll?",
  description = "Request a demo and see how ProQPay supports processing, disbursement, compliance, and controlled working capital for Indonesian organizations.",
}: {
  title?: string;
  description?: string;
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
      </Container>
    </section>
  );
}
