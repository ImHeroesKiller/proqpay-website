import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  author?: string;
  category?: string;
  draft?: boolean;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
  readingTime: string;
};

const contentRoot = path.join(process.cwd(), "content");

function readCollection(collection: "blog" | "guides"): Post[] {
  const dir = path.join(contentRoot, collection);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      const fm = data as PostFrontmatter;
      return {
        slug,
        title: fm.title,
        description: fm.description,
        date: fm.date,
        author: fm.author ?? "ProQPay Team",
        category: fm.category ?? collection,
        draft: fm.draft ?? false,
        content,
        readingTime: readingTime(content).text,
      } satisfies Post;
    })
    .filter((post) => !post.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getBlogPosts() {
  return readCollection("blog");
}

export function getGuides() {
  return readCollection("guides");
}

export function getBlogPost(slug: string) {
  return getBlogPosts().find((post) => post.slug === slug);
}

export function getGuide(slug: string) {
  return getGuides().find((post) => post.slug === slug);
}
