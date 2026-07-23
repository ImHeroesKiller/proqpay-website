import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { DashboardMockup } from "@/components/shared/dashboard-mockup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

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
            <div className="relative overflow-hidden rounded-3xl border border-border bg-[#0B1F33] p-4 shadow-md sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/products/proqpay-product-icon.webp"
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-xl object-cover"
                    aria-hidden
                  />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                      Product preview
                    </p>
                    <p className="text-sm font-medium text-white/90">
                      {siteConfig.products.proqpay.headline}
                    </p>
                  </div>
                </div>
              </div>
              <DashboardMockup />
              <p className="mt-4 text-center text-xs text-white/45">
                Conceptual product interface preview — not live production data.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
