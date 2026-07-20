import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PricingCard() {
  return (
    <Card className="border-dashed">
      <CardHeader>
        <CardTitle>Enterprise Pricing</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Content Coming Soon — pricing is tailored to employee volume, entities,
          and service scope. Request a demo for a proposal aligned to your
          operating model.
        </p>
        <Button asChild variant="accent">
          <Link href="/contact?intent=payroll-demo">Request Demo</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
