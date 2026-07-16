import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog de Dermatología — Dra. Alejandra Téllez, Bogotá",
  description:
    "Artículos educativos sobre dermatología clínica y estética por la Dra. Alejandra Téllez. Aprende sobre acné, alopecia, botox, láser, cuidado de la piel y más.",
  alternates: { canonical: "https://alejandratellezderma.com/blog" },
  openGraph: {
    title: "Blog de Dermatología — Dra. Alejandra Téllez",
    description: "Educación dermatológica basada en evidencia. Artículos sobre acné, alopecia, botox, láser y cuidado de la piel.",
    url: "https://alejandratellezderma.com/blog",
  },
};

const categoryStyles: Record<string, { background: string; color: string }> = {
  acne:      { background: "#fef2f2", color: "#b91c1c" },
  alopecia:  { background: "#f0fdf4", color: "#15803d" },
  estetica:  { background: "#faf5ff", color: "#7e22ce" },
  laser:     { background: "#eff6ff", color: "#1d4ed8" },
  consejos:  { background: "#fefce8", color: "#a16207" },
  general:   { background: "var(--color-primary-50)", color: "var(--color-primary)" },
};

export default function BlogPage() {
  const posts = getAllPosts("blog");

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog de Dermatología — Dra. Alejandra Téllez",
    url: "https://alejandratellezderma.com/blog",
    description: "Artículos educativos sobre dermatología clínica y estética",
    author: {
      "@type": "Physician",
      name: "Dra. Alejandra Téllez",
      "@id": "https://alejandratellezderma.com/#physician",
    },
    blogPost: posts.slice(0, 10).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      url: `https://alejandratellezderma.com/blog/${p.slug}`,
      datePublished: p.date,
      author: { "@type": "Person", name: p.author },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      {/* Hero */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-primary-50)", textAlign: "center" }}
      >
        <div className="container-custom">
          <span className="eyebrow">Educación</span>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "var(--color-text)",
              marginTop: "0.5rem",
              marginBottom: "1rem",
              lineHeight: 1.05,
            }}
          >
            Blog de Dermatología
          </h1>
          <p
            style={{
              color: "var(--color-text-secondary)",
              maxWidth: "480px",
              margin: "0 auto",
              fontSize: "0.9375rem",
              lineHeight: 1.75,
            }}
          >
            Artículos educativos escritos y revisados por la Dra. Alejandra Téllez sobre dermatología clínica y estética.
          </p>
        </div>
      </section>

      {/* Artículos */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="container-custom">
          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 0" }}>
              <div
                style={{
                  width: "48px",
                  height: "1px",
                  backgroundColor: "var(--color-gold)",
                  margin: "0 auto 2rem",
                }}
              />
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 300,
                  color: "var(--color-text)",
                  marginBottom: "1rem",
                }}
              >
                Próximamente
              </h2>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  maxWidth: "360px",
                  margin: "0 auto 2rem",
                  fontSize: "0.9375rem",
                  lineHeight: 1.75,
                }}
              >
                Estamos preparando artículos educativos sobre dermatología. Vuelve pronto.
              </p>
              <a
                href="https://www.instagram.com/alejandratellezdermatologa/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "0.875rem 2rem",
                  background: "var(--color-primary)",
                  color: "white",
                  borderRadius: "2px",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Seguir en Instagram →
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post) => {
                const catStyle = categoryStyles[post.category] ?? categoryStyles.general;
                return (
                  <article
                    key={post.slug}
                    className="group"
                    style={{
                      border: "1px solid var(--color-border)",
                      borderRadius: "2px",
                      overflow: "hidden",
                      background: "var(--color-background)",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Imagen placeholder */}
                    <div
                      style={{
                        height: "180px",
                        background: "var(--color-primary-50)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg style={{ width: "32px", height: "32px", color: "var(--color-primary)", opacity: 0.4 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>

                    <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                      {/* Meta */}
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.875rem" }}>
                        <span
                          style={{
                            fontSize: "0.6rem",
                            fontWeight: 500,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            padding: "0.2rem 0.5rem",
                            borderRadius: "2px",
                            background: catStyle.background,
                            color: catStyle.color,
                          }}
                        >
                          {post.category}
                        </span>
                        <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
                          {post.readingTime} min
                        </span>
                      </div>

                      {/* Título */}
                      <h2
                        style={{
                          fontFamily: "var(--font-cormorant)",
                          fontSize: "1.25rem",
                          fontWeight: 500,
                          color: "var(--color-text)",
                          lineHeight: 1.25,
                          marginBottom: "0.625rem",
                          flex: 1,
                        }}
                      >
                        <Link
                          href={`/blog/${post.slug}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          {post.title}
                        </Link>
                      </h2>

                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--color-text-muted)",
                          lineHeight: 1.65,
                          marginBottom: "1.25rem",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {post.description}
                      </p>

                      {/* Footer */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--color-border)", paddingTop: "1rem" }}>
                        <time
                          dateTime={post.date}
                          style={{ fontSize: "0.72rem", color: "var(--color-text-muted)" }}
                        >
                          {formatDate(post.date)}
                        </time>
                        <Link
                          href={`/blog/${post.slug}`}
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 500,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--color-primary)",
                            textDecoration: "none",
                          }}
                        >
                          Leer →
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Aviso médico */}
      <section style={{ padding: "1.5rem 0", backgroundColor: "var(--color-background)", borderTop: "1px solid var(--color-border)" }}>
        <div className="container-custom">
          <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", textAlign: "center", maxWidth: "42rem", margin: "0 auto", lineHeight: 1.7 }}>
            Los artículos de este blog son revisados y aprobados por la Dra. Alejandra Téllez (Matrícula 1030537845). Son de carácter educativo y no reemplazan la consulta médica profesional.
          </p>
        </div>
      </section>
    </>
  );
}
