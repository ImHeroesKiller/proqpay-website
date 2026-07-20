import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { getGuide, getGuides } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getGuides().map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return buildMetadata({
    title: guide.title,
    description: guide.description,
    path: `/resources/guides/${slug}`,
    type: "article",
  });
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <>
      <PageHero
        title={guide.title}
        description={guide.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Guides", href: "/resources/guides" },
          { label: guide.title },
        ]}
      />
      <section className="section-padding">
        <Container className="max-w-3xl">
          <article className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-heading prose-a:text-orange">
            <MDXRemote source={guide.content} />
          </article>
        </Container>
      </section>
    </>
  );
}
