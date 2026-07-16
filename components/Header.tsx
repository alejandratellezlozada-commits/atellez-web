"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/perfil", label: "Perfil" },
  { href: "/servicios", label: "Servicios" },
  { href: "/resultados", label: "Resultados" },
  { href: "/cuidados", label: "Cuidados Pre & Post" },
  { href: "/blog", label: "Blog" },
  { href: "/noticias", label: "Noticias" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "var(--color-surface)",
        borderBottom: "1px solid var(--color-border)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "2px" }}>
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.25rem",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
                lineHeight: 1,
              }}
            >
              Dra. Alejandra Téllez
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                lineHeight: 1,
              }}
            >
              Dermatóloga · Bogotá
            </span>
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center" style={{ gap: "2rem" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textDecoration: "none",
                  color:
                    pathname === link.href
                      ? "var(--color-primary)"
                      : "var(--color-text-secondary)",
                  borderBottom:
                    pathname === link.href
                      ? "1px solid var(--color-gold)"
                      : "1px solid transparent",
                  paddingBottom: "2px",
                  transition: "color 0.15s, border-color 0.15s",
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.doctoralia.co/alejandra-tellez/dermatologo/bogota"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: "0.5rem",
                padding: "0.5625rem 1.25rem",
                background: "var(--color-primary)",
                color: "white",
                borderRadius: "2px",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
            >
              Agendar cita
            </a>
          </nav>

          {/* Botón hamburguesa */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            style={{
              padding: "0.5rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--color-text-secondary)",
            }}
          >
            {menuOpen ? (
              <svg
                style={{ width: "22px", height: "22px" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                style={{ width: "22px", height: "22px" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            backgroundColor: "var(--color-surface)",
          }}
        >
          <nav
            className="container-custom"
            style={{ paddingTop: "1rem", paddingBottom: "1.25rem", display: "flex", flexDirection: "column", gap: "2px" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "0.625rem 0.75rem",
                  fontSize: "0.875rem",
                  fontWeight: pathname === link.href ? 500 : 400,
                  color:
                    pathname === link.href
                      ? "var(--color-primary)"
                      : "var(--color-text-secondary)",
                  textDecoration: "none",
                  borderRadius: "2px",
                  background:
                    pathname === link.href
                      ? "var(--color-primary-50)"
                      : "transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.doctoralia.co/alejandra-tellez/dermatologo/bogota"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: "0.75rem",
                padding: "0.75rem 1rem",
                background: "var(--color-primary)",
                color: "white",
                borderRadius: "2px",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Agendar cita en Doctoralia
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
