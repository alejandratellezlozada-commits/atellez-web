import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: number;
  author: string;
  image?: string;
  keywords?: string[];
  featured?: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

function getContentDir(type: "blog" | "noticias"): string {
  return path.join(process.cwd(), "content", type);
}

function calcReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function getPostSlugs(type: "blog" | "noticias"): string[] {
  const dir = getContentDir(type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.(mdx|md)$/, ""));
}

export function getPost(type: "blog" | "noticias", slug: string): Post | null {
  const dir = getContentDir(type);
  const mdxPath = path.join(dir, `${slug}.mdx`);
  const mdPath = path.join(dir, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    category: data.category ?? "general",
    readingTime: calcReadingTime(content),
    author: data.author ?? "Dra. Alejandra Téllez",
    image: data.image,
    keywords: data.keywords ?? [],
    featured: data.featured ?? false,
    content,
  };
}

export function getAllPosts(type: "blog" | "noticias"): PostMeta[] {
  const slugs = getPostSlugs(type);
  return slugs
    .map((slug) => {
      const post = getPost(type, slug);
      if (!post) return null;
      const { content: _, ...meta } = post;
      return meta;
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()) as PostMeta[];
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
