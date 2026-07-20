import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { getBlogPosts } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = buildMetadata({
  title: "News",
  description:
    "Insights and updates on enterprise workforce solutions, operations, and payroll technology from MSG.",
  path: "/news",
});

export default function NewsPage() {
  const posts = getBlogPosts();

  return (
    <>
      <PageHero
        title="News & insights"
        description="Perspectives for HR directors, operations leaders, and finance teams building reliable workforce operations."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News" },
        ]}
      />
      <section className="section-padding">
        <Container className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/resources/blog/${post.slug}`}>
              <Card className="h-full transition hover:border-[#0B3A6E]/40">
                <CardHeader>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#0B3A6E] dark:text-blue-300">
                    {post.category}
                  </p>
                  <CardTitle className="text-xl leading-snug">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {post.description}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    · {post.readingTime}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Container>
      </section>
    </>
  );
}
