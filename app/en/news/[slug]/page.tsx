import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getPostSlugs, formatDate } from "@/lib/mdx";
import { alternatesFor } from "@/lib/i18n";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPostSlugs("noticias", "en").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("noticias", slug, "en");
  if (!post) return { title: "News item not found" };

  return {
    title: post.title,
    description: post.description,
    alternates: alternatesFor(`/noticias/${slug}`, "en"),
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `https://alejandratellezderma.com/en/news/${slug}`,
      publishedTime: post.date,
    },
  };
}

export default async function NoticiaPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost("noticias", slug, "en");
  if (!post) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://alejandratellezderma.com" },
      { "@type": "ListItem", position: 2, name: "News", item: "https://alejandratellezderma.com/en/news" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://alejandratellezderma.com/en/news/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav style={{ backgroundColor: "var(--color-background)", borderBottom: "1px solid var(--color-border)", padding: "0.75rem 0" }}>
        <div className="container-custom">
          <ol
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.8125rem",
              color: "var(--color-text-muted)",
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            <li><Link href="/en/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link></li>
            <li>›</li>
            <li><Link href="/en/news" style={{ color: "inherit", textDecoration: "none" }}>News</Link></li>
            <li>›</li>
            <li
              style={{
                color: "var(--color-text)",
                fontWeight: 500,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "18rem",
              }}
            >
              {post.title}
            </li>
          </ol>
        </div>
      </nav>

      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="container-custom" style={{ maxWidth: "48rem" }}>
          <header style={{ marginBottom: "2.5rem" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                marginBottom: "0.875rem",
              }}
            >
              {post.category}
            </span>
            <h1
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "var(--color-text)",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              {post.title}
            </h1>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}
            >
              {post.description}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                fontSize: "0.8125rem",
                color: "var(--color-text-muted)",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <time dateTime={post.date}>{formatDate(post.date, "en")}</time>
              <span>·</span>
              <span>Dr. Alejandra Téllez</span>
            </div>
          </header>

          <div className="prose-tellez">
            <MDXRemote source={post.content} />
          </div>

          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--color-border)",
            }}
          >
            <Link
              href="/en/news"
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-primary)",
                textDecoration: "none",
              }}
            >
              ← View all news
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
