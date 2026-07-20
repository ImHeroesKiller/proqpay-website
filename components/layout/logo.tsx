import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * MSG corporate logo — navy/blue enterprise identity.
 * Never use ProQPay orange branding for MSG.
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
  const markClass =
    variant === "light"
      ? "text-white"
      : variant === "dark"
        ? "text-[#0B3A6E]"
        : "text-[#0B3A6E] dark:text-white";

  const subClass =
    variant === "light"
      ? "text-white/70"
      : "text-[#486581] dark:text-muted-foreground";

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5 leading-none", className)}
      aria-label="MSG home — PT Mandiri Semesta Gemilang"
    >
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-lg bg-[#0B3A6E] text-sm font-bold tracking-tight text-white dark:bg-[#1B4F8A]",
          variant === "light" && "bg-white text-[#0B3A6E]",
        )}
        aria-hidden
      >
        MSG
      </span>
      <span className="flex flex-col">
        <span
          className={cn(
            "font-heading text-lg font-bold tracking-tight sm:text-xl",
            markClass,
          )}
        >
          MSG
        </span>
        {!compact ? (
          <span
            className={cn(
              "text-[9px] font-semibold uppercase tracking-[0.14em]",
              subClass,
            )}
          >
            Mandiri Semesta Gemilang
          </span>
        ) : null}
      </span>
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
