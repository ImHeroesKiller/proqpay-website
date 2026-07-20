import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ComingSoon({
  title = "Content Coming Soon",
  description = "This section will be updated with approved materials.",
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <Card className={cn("border-dashed bg-muted/40", className)}>
      <CardContent className="flex min-h-40 flex-col items-center justify-center p-8 text-center">
        <p className="text-base font-semibold text-foreground">{title}</p>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
