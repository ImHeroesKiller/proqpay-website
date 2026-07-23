import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { serviceSlugs } from "@/lib/content/services";
import { industrySlugs } from "@/lib/content/industries";
import { getPortfolioSlugs, isManagedPortfolioPublished } from "@/lib/content/portfolio";
import { getBlogPosts, getGuides } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();
  const portfolioPublic = isManagedPortfolioPublished();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/strategic-advisory",
    "/services/workforce-solutions",
    "/technology",
    "/products",
    "/products/proqpay",
    "/industries",
    "/operational-excellence",
    "/portfolio",
    "/resources",
    "/news",
    "/resources/guides",
    "/faq",
    "/careers",
    "/contact",
    "/request-consultation",
    ...(portfolioPublic ? ["/contact/strategic-interest"] : []),
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority:
      path === ""
        ? 1
        : path === "/services/strategic-advisory" ||
            path === "/technology" ||
            path === "/products/proqpay" ||
            path === "/portfolio"
          ? 0.9
          : 0.7,
  }));

  const services = serviceSlugs.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const industries = industrySlugs.map((slug) => ({
    url: `${base}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const portfolio = getPortfolioSlugs().map((slug) => ({
    url: `${base}/portfolio/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
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

  return [
    ...staticRoutes,
    ...services,
    ...industries,
    ...portfolio,
    ...posts,
    ...guides,
  ];
}
