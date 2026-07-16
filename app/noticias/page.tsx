import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Noticias — Dra. Alejandra Téllez, Dermatóloga Bogotá",
  description:
    "Noticias y novedades del consultorio de la Dra. Alejandra Téllez. Congresos, reconocimientos, nuevos tratamientos y actualizaciones en dermatología.",
  alternates: { canonical: "https://alejandratellezderma.com/noticias" },
};

export default function NoticiasPage() {
  const noticias = getAllPosts("noticias");

  return (
    <>
      {/* Hero */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-primary-50)", textAlign: "center" }}
      >
        <div className="container-custom">
          <span className="eyebrow">Actualidad</span>
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
            Noticias
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
            Novedades del consultorio, congresos, reconocimientos y actualizaciones en el mundo de la dermatología.
          </p>
        </div>
      </section>

      {/* Lista de noticias */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="container-custom">
          {noticias.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 0" }}>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.5rem",
                  fontWeight: 300,
                  color: "var(--color-text)",
                  marginBottom: "0.75rem",
                }}
              >
                Próximas actualizaciones
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-text-secondary)",
                  marginBottom: "2rem",
                }}
              >
                Pronto publicaremos novedades del consultorio y eventos de dermatología.
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
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Seguir en Instagram
              </a>
            </div>
          ) : (
            <div>
              {noticias.map((noticia, i) => (
                <Link
                  key={noticia.slug}
                  href={`/noticias/${noticia.slug}`}
                  className="group"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.25rem",
                    padding: "1.75rem 0",
                    borderTop: "1px solid var(--color-border)",
                    textDecoration: "none",
                  }}
                >
                  {/* Número */}
                  <span
                    style={{
                      fontSize: "0.65rem",
                      color: "var(--color-text-muted)",
                      letterSpacing: "0.1em",
                      minWidth: "2rem",
                      flexShrink: 0,
                      paddingTop: "4px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Contenido */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        marginBottom: "0.375rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.58rem",
                          fontWeight: 500,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--color-gold)",
                        }}
                      >
                        {noticia.category}
                      </span>
                      <time
                        dateTime={noticia.date}
                        style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}
                      >
                        {formatDate(noticia.date)}
                      </time>
                    </div>
                    <h2
                      className="group-hover:text-[var(--color-primary)]"
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1.375rem",
                        fontWeight: 500,
                        color: "var(--color-text)",
                        lineHeight: 1.2,
                        marginBottom: "0.375rem",
                        transition: "color 0.15s",
                      }}
                    >
                      {noticia.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text-muted)",
                        lineHeight: 1.65,
                      }}
                    >
                      {noticia.description}
                    </p>
                  </div>

                  {/* Flecha */}
                  <span
                    className="group-hover:translate-x-1"
                    style={{
                      color: "var(--color-primary)",
                      fontSize: "1.125rem",
                      flexShrink: 0,
                      transition: "transform 0.15s",
                      paddingTop: "2px",
                    }}
                  >
                    →
                  </span>
                </Link>
              ))}
              <div style={{ borderTop: "1px solid var(--color-border)" }} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
