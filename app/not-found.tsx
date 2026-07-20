import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-padding">
      <Container className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange">
          404
        </p>
        <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild variant="accent">
            <Link href="/">Back to home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact MSG</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
