import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--color-primary-50)", textAlign: "center", minHeight: "60vh", display: "flex", alignItems: "center" }}
    >
      <div className="container-custom" style={{ width: "100%" }}>
        <div style={{ width: "32px", height: "1px", backgroundColor: "var(--color-gold)", margin: "0 auto 2rem" }} />

        <span className="eyebrow">Error 404</span>

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
          Página no encontrada
        </h1>

        <p
          style={{
            color: "var(--color-text-secondary)",
            maxWidth: "420px",
            margin: "0 auto 3rem",
            fontSize: "0.9375rem",
            lineHeight: 1.75,
          }}
        >
          La página que buscas no existe o fue movida. Puedes volver al inicio o explorar los servicios.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
          <Link
            href="/"
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
            Volver al inicio
          </Link>
          <Link
            href="/servicios"
            style={{
              display: "inline-block",
              padding: "0.875rem 2rem",
              border: "1px solid var(--color-border)",
              color: "var(--color-text-secondary)",
              borderRadius: "2px",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
