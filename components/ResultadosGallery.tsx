"use client";

import { useState } from "react";
import GalleryLightbox from "./GalleryLightbox";

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  label: string;
}

interface Props {
  items: GalleryItem[];
  categories: string[];
}

export default function ResultadosGallery({ items, categories }: Props) {
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos" ? items : items.filter((i) => i.category === active);

  return (
    <>
      {/* Filtros */}
      <div
        style={{
          position: "sticky",
          top: "64px",
          zIndex: 20,
          backgroundColor: "white",
          borderBottom: "1px solid var(--color-border)",
          padding: "0 1.5rem",
        }}
      >
        <div
          className="container-custom"
          style={{
            display: "flex",
            gap: "0.25rem",
            overflowX: "auto",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            scrollbarWidth: "none",
          }}
        >
          {["Todos", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "2px",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                border: active === cat ? "1px solid var(--color-primary)" : "1px solid var(--color-border)",
                background: active === cat ? "var(--color-primary)" : "transparent",
                color: active === cat ? "white" : "var(--color-text-muted)",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Galería filtrada */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div style={{ marginBottom: "1rem" }}>
            <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
              {filtered.length} {filtered.length === 1 ? "resultado" : "resultados"}
              {active !== "Todos" ? ` · ${active}` : ""}
            </p>
          </div>
          <GalleryLightbox
            items={filtered}
            groupName={active}
            sectionIndex={0}
            allItems={filtered}
          />
        </div>
      </section>
    </>
  );
}
