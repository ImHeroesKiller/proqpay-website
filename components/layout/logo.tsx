import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * MSG corporate logo — official brand mark from PT Mandiri Semesta Gemilang.
 * Source: public/brand/logo-msg.webp (from Downloads/logo-msg.png).
 */
export function Logo({
  className,
  compact = false,
  variant = "auto",
}: {
  className?: string;
  compact?: boolean;
  variant?: "auto" | "light" | "dark";
}) {
  const needsLightTreatment = variant === "light";

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5 leading-none", className)}
      aria-label="MSG home — PT Mandiri Semesta Gemilang"
    >
      <Image
        src="/brand/logo-msg.webp"
        alt="MSG — Mandiri Semesta Gemilang"
        width={compact ? 120 : 148}
        height={compact ? 42 : 52}
        className={cn(
          "h-9 w-auto object-contain sm:h-10",
          needsLightTreatment && "brightness-0 invert",
        )}
        priority
      />
      {compact ? null : (
        <span className="sr-only">PT Mandiri Semesta Gemilang</span>
      )}
    </Link>
  );
}

/**
 * ProQPay product logo — navy + orange product identity.
 * Use only on product surfaces, never as the corporate logo.
 */
export function ProQPayLogo({
  className,
  compact = false,
  variant = "auto",
}: {
  className?: string;
  compact?: boolean;
  variant?: "auto" | "light" | "dark";
}) {
  const textClass =
    variant === "light"
      ? "text-white"
      : variant === "dark"
        ? "text-[#102A43]"
        : "text-foreground";

  return (
    <Link
      href="/products/proqpay"
      className={cn("inline-flex flex-col leading-none", className)}
      aria-label="ProQPay — An MSG Technology Product"
    >
      <span
        className={cn(
          "font-heading text-xl font-bold tracking-tight sm:text-2xl",
          textClass,
        )}
      >
        Pro
        <span className="text-[#F28C28]">Q</span>
        Pay
      </span>
      {!compact ? (
        <span
          className={cn(
            "mt-0.5 text-[9px] font-semibold uppercase tracking-[0.16em]",
            variant === "light" ? "text-white/65" : "text-muted-foreground",
          )}
        >
          An MSG Technology Product
        </span>
      ) : null}
    </Link>
  );
}
