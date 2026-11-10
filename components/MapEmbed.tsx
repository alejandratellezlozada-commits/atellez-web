"use client";

import { useState } from "react";
import { useLocale } from "@/lib/useLocale";

interface Props {
  query: string;
  title: string;
}

export default function MapEmbed({ query, title }: Props) {
  const [loaded, setLoaded] = useState(false);
  const en = useLocale() === "en";
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  if (loaded) {
    return (
      <iframe
        src={embedSrc}
        width="100%"
        height="100%"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        background: "var(--color-primary-50)",
        border: "none",
        cursor: "pointer",
        padding: "1.5rem",
      }}
      aria-label={en ? "Load interactive map" : "Cargar mapa interactivo"}
    >
      <svg
        style={{ width: "28px", height: "28px", color: "var(--color-primary)" }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span
        style={{
          fontSize: "0.7rem",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-primary)",
        }}
      >
        {en ? "View interactive map" : "Ver mapa interactivo"}
      </span>
    </button>
  );
}
