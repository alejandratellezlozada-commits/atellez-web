"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie_consent_v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "all");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: "1.5rem",
        left: "1.5rem",
        right: "1.5rem",
        zIndex: 200,
        maxWidth: "480px",
        background: "var(--color-accent)",
        borderRadius: "2px",
        padding: "1.5rem",
        boxShadow: "0 8px 40px rgba(0,0,0,0.22)",
        animation: "slideUp 0.4s cubic-bezier(0.16,1,0.3,1) both",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Línea dorada decorativa */}
      <div style={{ width: "28px", height: "1px", background: "var(--color-gold)", marginBottom: "1rem" }} />

      <p
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "1.1rem",
          fontWeight: 500,
          color: "white",
          marginBottom: "0.5rem",
          lineHeight: 1.2,
        }}
      >
        Usamos cookies
      </p>
      <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
        Utilizamos cookies propias y de terceros (Google Analytics, Google Maps) para mejorar tu experiencia.
        Puedes aceptar todas o solo las estrictamente necesarias.{" "}
        <Link
          href="/politica-de-privacidad"
          style={{ color: "var(--color-gold-light)", textDecoration: "underline" }}
        >
          Más información
        </Link>
      </p>

      <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
        <button
          onClick={accept}
          style={{
            padding: "0.6rem 1.25rem",
            background: "white",
            color: "var(--color-accent)",
            border: "none",
            borderRadius: "2px",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "opacity 0.15s",
          }}
        >
          Aceptar todas
        </button>
        <button
          onClick={decline}
          style={{
            padding: "0.6rem 1.25rem",
            background: "transparent",
            color: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: "2px",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "border-color 0.15s",
          }}
        >
          Solo esenciales
        </button>
      </div>
    </div>
  );
}
