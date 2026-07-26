import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const highlights = [
  "Payroll Management",
  "Attendance & Workforce Data",
  "Employee Administration",
  "Approval Workflows",
  "Operational Reporting",
];

export function HomeProductHighlight() {
  return (
    <section className="section-padding border-b border-border bg-background">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0B3A6E] dark:text-blue-300">
              Product Highlight
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem]">
              Technology Built for Better Workforce Operations
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              MSG develops workforce technology that improves operational
              visibility, payroll control, employee administration, and
              management decision-making.
            </p>

            <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <Badge className="bg-orange/15 text-orange hover:bg-orange/15">
                Featured Product
              </Badge>
              <div className="mt-4 flex items-center gap-4">
                <Image
                  src="/brand/logo-proqpay.png"
                  alt="ProQPay logo"
                  width={160}
                  height={56}
                  className="h-10 w-auto object-contain"
                />
                <h3 className="font-heading text-2xl font-bold tracking-tight">
                  Pro<span className="text-orange">Q</span>Pay
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                ProQPay is MSG’s workforce technology platform designed to support
                payroll, attendance, employee administration, approval workflows,
                and operational visibility.
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
                  <Link href="/technology">View Workforce Technology</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact?intent=payroll-demo">
                    Request Product Demo
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="overflow-hidden rounded-3xl border border-border bg-[#061A33] shadow-md">
              <div className="group relative aspect-video overflow-hidden">
                <Image
                  src="/images/hero/proqpay-hero.webp"
                  alt="ProQPay dashboard showing payroll and employee data on a laptop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-[1.015]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061A33]/18 via-transparent to-transparent" />
              </div>
              <div className="border-t border-white/10 bg-[#061A33] px-5 py-4 text-white sm:px-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                  Product preview
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  ProQPay workforce operations dashboard
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/65">
                  Payroll, employee data, approvals, and reporting remain clearly visible.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
