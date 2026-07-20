import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { JsonLd } from "@/components/shared/json-ld";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { getBlogPost, getBlogPosts } from "@/lib/mdx";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/resources/blog/${slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Blog", path: "/resources/blog" },
          { name: post.title, path: `/resources/blog/${slug}` },
        ])}
      />
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.description,
          path: `/resources/blog/${slug}`,
          datePublished: post.date,
          author: post.author,
        })}
      />
      <PageHero
        title={post.title}
        description={post.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Blog", href: "/resources/blog" },
          { label: post.title },
        ]}
      />
      <section className="section-padding">
        <Container className="max-w-3xl">
          <p className="mb-8 text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {post.author} · {post.readingTime}
          </p>
          <article className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-heading prose-a:text-orange">
            <MDXRemote source={post.content} />
          </article>
        </Container>
      </section>
    </>
  );
}
