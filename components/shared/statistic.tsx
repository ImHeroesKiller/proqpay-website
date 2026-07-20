import { cn } from "@/lib/utils";
import { AnimatedCounter } from "@/components/shared/animated-counter";

export function Statistic({
  value,
  label,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center sm:text-left", className)}>
      <div className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        <AnimatedCounter value={value} prefix={prefix} suffix={suffix} />
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
