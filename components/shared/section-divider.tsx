import { cn } from "@/lib/utils";

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={cn("container-pro", className)}>
      <div className="h-px w-full bg-border" />
    </div>
  );
}
