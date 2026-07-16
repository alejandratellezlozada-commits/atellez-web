import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getPostSlugs, getAllPosts, formatDate } from "@/lib/mdx";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPostSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("blog", slug);
  if (!post) return { title: "Artículo no encontrado" };

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical: `https://alejandratellezderma.com/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `https://alejandratellezderma.com/blog/${slug}`,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost("blog", slug);
  if (!post) notFound();

  const recentPosts = getAllPosts("blog").filter((p) => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: post.title,
    description: post.description,
    url: `https://alejandratellezderma.com/blog/${slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Physician",
      name: "Dra. Alejandra Téllez",
      "@id": "https://alejandratellezderma.com/#physician",
      hasCredential: "Médica Dermatóloga — Matrícula 1030537845",
    },
    reviewedBy: {
      "@type": "Physician",
      name: "Dra. Alejandra Téllez",
      "@id": "https://alejandratellezderma.com/#physician",
    },
    publisher: {
      "@type": "Person",
      name: "Dra. Alejandra Téllez",
      "@id": "https://alejandratellezderma.com/#physician",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://alejandratellezderma.com/blog/${slug}`,
    },
    inLanguage: "es-CO",
    medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://alejandratellezderma.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://alejandratellezderma.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://alejandratellezderma.com/blog/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
            <li><Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Inicio</Link></li>
            <li>›</li>
            <li><Link href="/blog" style={{ color: "inherit", textDecoration: "none" }}>Blog</Link></li>
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
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: "2.5rem" }}>
            {/* Artículo */}
            <article style={{ gridColumn: "span 2" }}>
              {/* Encabezado */}
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
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "1rem",
                    fontSize: "0.8125rem",
                    color: "var(--color-text-muted)",
                    paddingBottom: "1.5rem",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <span>
                    Por{" "}
                    <strong style={{ color: "var(--color-primary)", fontWeight: 500 }}>
                      {post.author}
                    </strong>
                  </span>
                  <span>·</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>·</span>
                  <span>{post.readingTime} min de lectura</span>
                </div>
              </header>

              {/* Contenido MDX */}
              <div className="prose-tellez">
                <MDXRemote source={post.content} />
              </div>

              {/* Autor box */}
              <div
                style={{
                  marginTop: "2.5rem",
                  padding: "1.5rem",
                  background: "var(--color-primary-50)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "2px",
                  borderLeft: "3px solid var(--color-primary)",
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "var(--color-primary)",
                    borderRadius: "2px",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg style={{ width: "24px", height: "24px", color: "white" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 500,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--color-gold)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    Revisado por
                  </div>
                  <div style={{ fontWeight: 500, color: "var(--color-text)", fontSize: "0.9375rem" }}>
                    Dra. Alejandra Téllez
                  </div>
                  <div style={{ fontSize: "0.8125rem", color: "var(--color-text-secondary)" }}>
                    Médica Dermatóloga · Matrícula 1030537845
                  </div>
                  <Link
                    href="/perfil"
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--color-primary)",
                      textDecoration: "none",
                      display: "inline-block",
                      marginTop: "0.5rem",
                    }}
                  >
                    Ver perfil completo →
                  </Link>
                </div>
              </div>

              {/* Disclaimer */}
              <div
                style={{
                  marginTop: "1.25rem",
                  padding: "1rem",
                  background: "var(--color-primary-50)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "2px",
                  fontSize: "0.8rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                <strong style={{ color: "var(--color-text)", fontWeight: 500 }}>Aviso médico:</strong>{" "}
                Este artículo es de carácter educativo y no constituye un diagnóstico ni reemplaza la consulta con un médico dermatólogo. Para una evaluación personalizada, agenda una cita con la Dra. Téllez.
              </div>
            </article>

            {/* Sidebar */}
            <aside style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* CTA */}
              <div
                style={{
                  background: "var(--color-accent)",
                  borderRadius: "2px",
                  padding: "1.75rem",
                  textAlign: "center",
                  position: "sticky",
                  top: "6rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.375rem",
                    fontWeight: 300,
                    color: "white",
                    marginBottom: "0.75rem",
                    lineHeight: 1.2,
                  }}
                >
                  ¿Necesitas una consulta?
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                  La Dra. Téllez puede evaluarte personalmente y crear un plan de tratamiento para tu caso.
                </p>
                <a
                  href="https://www.doctoralia.co/alejandra-tellez/dermatologo/bogota"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    padding: "0.75rem 1rem",
                    background: "white",
                    color: "var(--color-accent)",
                    borderRadius: "2px",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    marginBottom: "0.625rem",
                  }}
                >
                  Agendar en Doctoralia
                </a>
                <a
                  href="https://wa.me/573147444537"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    padding: "0.75rem 1rem",
                    border: "1px solid rgba(255,255,255,0.35)",
                    color: "white",
                    borderRadius: "2px",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  Escribir por WhatsApp
                </a>
              </div>

              {/* Artículos recientes */}
              {recentPosts.length > 0 && (
                <div
                  style={{
                    background: "var(--color-background)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "2px",
                    padding: "1.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.125rem",
                      fontWeight: 500,
                      color: "var(--color-text)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    Artículos recientes
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {recentPosts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          style={{
                            fontSize: "0.6rem",
                            fontWeight: 500,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "var(--color-gold)",
                            marginBottom: "0.25rem",
                          }}
                        >
                          {p.category}
                        </div>
                        <div
                          style={{
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            color: "var(--color-text)",
                            lineHeight: 1.4,
                          }}
                        >
                          {p.title}
                        </div>
                        <div style={{ fontSize: "0.72rem", color: "var(--color-text-muted)", marginTop: "0.25rem" }}>
                          {formatDate(p.date)}
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div style={{ borderTop: "1px solid var(--color-border)", marginTop: "1.25rem", paddingTop: "1rem" }}>
                    <Link
                      href="/blog"
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 500,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--color-primary)",
                        textDecoration: "none",
                      }}
                    >
                      Ver todos los artículos →
                    </Link>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
