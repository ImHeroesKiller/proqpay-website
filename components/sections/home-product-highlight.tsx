import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const highlights = [
  "Payroll Processing",
  "Multi-Level Approval",
  "Salary Disbursement",
  "Reconciliation",
  "Reporting & Audit",
];

export function HomeProductHighlight() {
  return (
    <section className="section-padding border-b border-border bg-background">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A6E] dark:text-blue-300">
              Workforce Technology
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem]">
              One controlled payroll workflow from processing to reconciliation.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              ProQPay is MSG&apos;s enterprise payroll operating platform for payroll
              processing, approval, salary disbursement, reconciliation, audit, and
              reporting.
            </p>

            <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <Badge className="bg-orange/15 text-orange hover:bg-orange/15">
                Featured Product
              </Badge>
              <div className="mt-5">
                <Image
                  src="/brand/logo-proqpay.png"
                  alt="ProQPay"
                  width={190}
                  height={66}
                  className="h-11 w-auto object-contain"
                />
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Use ProQPay as a technology platform, engage MSG to operate a managed
                payroll service powered by ProQPay, or request optional payroll funding
                if your company qualifies through assessment.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground/90"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0B3A6E] dark:text-blue-300" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  className="bg-[#0B3A6E] text-white hover:bg-[#0a3360]"
                >
                  <Link href="/products/proqpay">Explore ProQPay</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/request-consultation?intent=payroll-assessment">
                    Request Payroll Assessment
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="overflow-hidden rounded-3xl border border-border bg-[#061A33] shadow-md">
              <div className="group relative aspect-video overflow-hidden bg-white">
                <Image
                  src="/images/products/proqpay-image -hero.png"
                  alt="ProQPay payroll dashboard showing employee and payroll data"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center transition duration-700 group-hover:scale-[1.01]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061A33]/10 via-transparent to-transparent" />
              </div>
              <div className="border-t border-white/10 bg-[#061A33] px-5 py-4 text-white sm:px-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                  Product preview
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  ProQPay payroll operating dashboard
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/65">
                  Processing, approvals, disbursement status, reconciliation, and reporting in one workflow.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
