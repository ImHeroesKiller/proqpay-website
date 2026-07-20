import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { solutionSlugs } from "@/lib/content/solutions";
import { industrySlugs } from "@/lib/content/industries";
import { getBlogPosts, getGuides } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/solutions",
    "/industries",
    "/platform",
    "/about",
    "/resources",
    "/resources/blog",
    "/resources/guides",
    "/resources/faq",
    "/resources/downloads",
    "/contact",
    "/request-demo",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const solutions = solutionSlugs.map((slug) => ({
    url: `${base}/solutions/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const industries = industrySlugs.map((slug) => ({
    url: `${base}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const posts = getBlogPosts().map((post) => ({
    url: `${base}/resources/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const guides = getGuides().map((guide) => ({
    url: `${base}/resources/guides/${guide.slug}`,
    lastModified: new Date(guide.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...solutions, ...industries, ...posts, ...guides];
}
