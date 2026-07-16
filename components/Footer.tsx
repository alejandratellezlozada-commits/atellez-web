import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Acné", href: "/servicios/acne" },
  { label: "Toxina Botulínica", href: "/servicios/toxina-botulinica" },
  { label: "Ácido Hialurónico", href: "/servicios/acido-hialuronico" },
  { label: "Láser CO2", href: "/servicios/laser-co2" },
  { label: "Alopecia", href: "/servicios/alopecia" },
  { label: "Cosmelan", href: "/servicios/cosmelan" },
];

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Perfil", href: "/perfil" },
  { label: "Servicios", href: "/servicios" },
  { label: "Resultados", href: "/resultados" },
  { label: "Blog", href: "/blog" },
  { label: "Noticias", href: "/noticias" },
  { label: "Contacto", href: "/contacto" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-accent-dark)", color: "white" }}>
      {/* CTA Banner */}
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "4rem 1.5rem",
          textAlign: "center",
          background: "linear-gradient(135deg, var(--color-accent) 0%, #1E1825 100%)",
        }}
      >
        {/* Línea dorada */}
        <div
          style={{
            width: "28px",
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
            color: "white",
            lineHeight: 1.2,
            marginBottom: "1rem",
          }}
        >
          ¿Lista para cuidar tu piel?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            marginBottom: "2rem",
            maxWidth: "360px",
            margin: "0 auto 2rem",
            fontSize: "0.9375rem",
            lineHeight: 1.7,
          }}
        >
          Agenda tu cita con la Dra. Téllez. Consulta disponible para todos los
          tratamientos dermatológicos.
        </p>
        <a
          href="https://www.doctoralia.co/alejandra-tellez/dermatologo/bogota"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "0.875rem 2.25rem",
            background: "white",
            color: "var(--color-accent)",
            borderRadius: "2px",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Agendar cita en Doctoralia
        </a>
      </div>

      {/* Contenido principal */}
      <div
        className="container-custom"
        style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Columna 1 — Info */}
          <div className="lg:col-span-1">
            {/* Logo en footer */}
            <Image
              src="/images/logo.png"
              alt="Dra. Alejandra Téllez — Dermatóloga"
              width={1920}
              height={1080}
              style={{
                width: "160px",
                height: "auto",
                display: "block",
                marginBottom: "1.25rem",
                filter: "brightness(0) invert(1)",
                opacity: 0.85,
              }}
            />
            <p
              style={{
                color: "rgba(255,255,255,0.35)",
                fontSize: "0.875rem",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}
            >
              Médica dermatóloga con más de 8 años de experiencia. Especialista
              en dermatología clínica y estética.
            </p>
            {/* Redes sociales */}
            <div style={{ display: "flex", gap: "0.625rem" }}>
              <a
                href="https://www.instagram.com/alejandratellezdermatologa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "2px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "border-color 0.2s",
                  color: "rgba(255,255,255,0.5)",
                  flexShrink: 0,
                }}
              >
                <svg style={{ width: "14px", height: "14px" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@alejatellezdermatologa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "2px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.5)",
                  flexShrink: 0,
                }}
              >
                <svg style={{ width: "14px", height: "14px" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.24 8.24 0 004.81 1.54V6.78a4.85 4.85 0 01-1.04-.09z" />
                </svg>
              </a>
              <a
                href="https://www.doctoralia.co/alejandra-tellez/dermatologo/bogota"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Doctoralia"
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "2px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.5)",
                  flexShrink: 0,
                }}
              >
                <svg
                  style={{ width: "14px", height: "14px" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2 — Servicios */}
          <div>
            <h4
              style={{
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "1.25rem",
                fontFamily: "var(--font-body)",
              }}
            >
              Servicios
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: "0.25rem" }}>
                <Link
                  href="/servicios"
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-gold-light)",
                    textDecoration: "none",
                    letterSpacing: "0.05em",
                  }}
                >
                  Ver todos →
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3 — Navegación */}
          <div>
            <h4
              style={{
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "1.25rem",
                fontFamily: "var(--font-body)",
              }}
            >
              Navegación
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4 — Contacto */}
          <div>
            <h4
              style={{
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "1.25rem",
                fontFamily: "var(--font-body)",
              }}
            >
              Contacto
            </h4>
            <address
              style={{
                fontStyle: "normal",
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
              }}
            >
              <div style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                <svg
                  style={{ width: "13px", height: "13px", marginTop: "2px", flexShrink: 0, color: "var(--color-gold)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                  Av. Carrera 19 97-31, Cons. 606
                  <br />
                  Bogotá, Colombia
                </span>
              </div>
              <div style={{ display: "flex", gap: "0.625rem", alignItems: "center" }}>
                <svg
                  style={{ width: "13px", height: "13px", flexShrink: 0, color: "var(--color-gold)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href="tel:+573147444537"
                  style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
                >
                  +57 314 744 4537
                </a>
              </div>
              <div style={{ display: "flex", gap: "0.625rem", alignItems: "center" }}>
                <svg
                  style={{ width: "13px", height: "13px", flexShrink: 0, color: "var(--color-gold)" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <a
                  href="https://wa.me/573147444537"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
                >
                  WhatsApp
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.22)", letterSpacing: "0.04em" }}>
            © {new Date().getFullYear()} Dra. Alejandra Téllez. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.18)" }}>
            Matrícula profesional: 1030537845 · Información con fines educativos. No reemplaza la consulta médica.
          </p>
          <Link
            href="/politica-de-privacidad"
            style={{
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.25)",
              textDecoration: "none",
              letterSpacing: "0.05em",
              borderBottom: "1px solid rgba(255,255,255,0.12)",
              paddingBottom: "1px",
            }}
          >
            Política de Privacidad · Ley 1581 de 2012
          </Link>
        </div>
      </div>
    </footer>
  );
}
