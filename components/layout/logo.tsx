import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  compact = false,
  variant = "auto",
}: {
  className?: string;
  compact?: boolean;
  variant?: "auto" | "light" | "dark";
}) {
  const wordmarkClass =
    variant === "light"
      ? "text-white"
      : variant === "dark"
        ? "text-[#102A43]"
        : "text-foreground";

  return (
    <Link
      href="/"
      className={cn("inline-flex flex-col leading-none", className)}
      aria-label="MSG home — PT Mandiri Semesta Gemilang"
    >
      <span
        className={cn(
          "font-heading text-xl font-bold tracking-tight sm:text-2xl",
          wordmarkClass,
        )}
      >
        <span className="text-orange">M</span>
        <span>SG</span>
      </span>
      {!compact ? (
        <span
          className={cn(
            "mt-0.5 max-w-[11rem] text-[9px] font-semibold uppercase tracking-[0.12em]",
            variant === "light" ? "text-white/70" : "text-muted-foreground",
          )}
        >
          Mandiri Semesta Gemilang
        </span>
      ) : null}
    </Link>
  );
}
