import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Servicios de Dermatología — Dra. Alejandra Téllez, Bogotá",
  description:
    "Servicios de dermatología clínica y estética en Bogotá: acné, alopecia, botox, láser CO2, Cosmelan, Sculptra, peeling químico y más. Dra. Alejandra Téllez.",
  alternates: { canonical: "https://alejandratellezderma.com/servicios" },
};

const serviceVisuals: Record<string, { image: string; position: string; tag: string; benefit: string }> = {
  "acne":                   { image: "/images/servicios/acne.jpg",                  position: "center 20%", tag: "Clínica",    benefit: "Piel Clara" },
  "toxina-botulinica":      { image: "/images/servicios/toxina-botulinica.jpg",     position: "center 30%", tag: "Estética",   benefit: "Sin Arrugas" },
  "acido-hialuronico":      { image: "/images/servicios/acido-hialuronico.jpg",     position: "center 40%", tag: "Estética",   benefit: "Volumen" },
  "laser-co2":              { image: "/images/servicios/laser-co2.jpg",             position: "center 35%", tag: "Láser",      benefit: "Piel Nueva" },
  "alopecia":               { image: "/images/servicios/alopecia.jpg",              position: "center 30%", tag: "Tricología", benefit: "Pelo Sano" },
  "peeling-quimico":        { image: "/images/servicios/peeling-quimico.jpg",       position: "center 35%", tag: "Estética",   benefit: "Luminosidad" },
  "mesoterapia-capilar":    { image: "/images/servicios/mesoterapia-capilar.jpg",   position: "center 40%", tag: "Tricología", benefit: "Pelo Fuerte" },
  "retiro-lunares-lipomas": { image: "/images/servicios/retiro-lunares-lipomas.jpg",position: "center 30%", tag: "Clínica",    benefit: "Sin Lesiones" },
  "depilacion-laser":       { image: "/images/servicios/depilacion-laser.jpg",      position: "center 70%", tag: "Láser",      benefit: "Sin Pelo" },
  "cosmelan":               { image: "/images/servicios/cosmelan.jpg",              position: "center 40%", tag: "Estética",   benefit: "Sin Manchas" },
  "sculptra":               { image: "/images/servicios/acido-hialuronico.jpg",     position: "center 35%", tag: "Estética",   benefit: "Colágeno" },
};

const categories = [
  { id: "estetica",   label: "Dermatología Estética" },
  { id: "clinica",    label: "Dermatología Clínica" },
  { id: "laser",      label: "Tecnología Láser" },
  { id: "tricologia", label: "Tricología" },
];

export default function ServiciosPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": "https://alejandratellezderma.com/#clinic",
    name: "Consultorio Dra. Alejandra Téllez",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Dermatológicos",
      itemListElement: services.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "MedicalProcedure",
          name: s.title,
          description: s.shortDescription,
          url: `https://alejandratellezderma.com/servicios/${s.slug}`,
        },
      })),
    },
  };

  const grouped = categories.map((cat) => ({
    ...cat,
    services: services.filter((s) => s.category === cat.id),
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* ── HERO ── */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-primary-50)", textAlign: "center" }}
      >
        <div className="container-custom">
          <span className="eyebrow">Especialidades</span>
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
            Servicios Dermatológicos
          </h1>
          <p
            style={{
              color: "var(--color-text-secondary)",
              maxWidth: "520px",
              margin: "0 auto",
              fontSize: "0.9375rem",
              lineHeight: 1.75,
            }}
          >
            Atención integral desde la dermatología clínica hasta los procedimientos estéticos más avanzados. Cada tratamiento, personalizado para ti.
          </p>
        </div>
      </section>

      {/* ── GRID POR CATEGORÍA ── */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="container-custom">
          {grouped.map((cat) =>
            cat.services.length > 0 ? (
              <div key={cat.id} style={{ marginBottom: "5rem" }}>
                {/* Separador de categoría */}
                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2.5rem" }}>
                  <div style={{ height: "1px", flex: 1, background: "var(--color-border)" }} />
                  <span
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 500,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--color-text-muted)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {cat.label}
                  </span>
                  <div style={{ height: "1px", flex: 1, background: "var(--color-border)" }} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.services.map((service) => {
                    const v = serviceVisuals[service.slug];
                    return (
                      <Link
                        key={service.slug}
                        href={`/servicios/${service.slug}`}
                        className="group"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          textDecoration: "none",
                          border: "1px solid var(--color-border)",
                          borderRadius: "2px",
                          overflow: "hidden",
                          transition: "border-color 0.2s, box-shadow 0.2s",
                        }}
                      >
                        {/* Imagen */}
                        <div style={{ position: "relative", height: "220px", overflow: "hidden", flexShrink: 0 }}>
                          {v ? (
                            <Image
                              src={v.image}
                              alt={service.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              style={{ objectFit: "cover", objectPosition: v.position, transition: "transform 0.4s ease" }}
                              className="group-hover:scale-105"
                            />
                          ) : (
                            <div style={{ width: "100%", height: "100%", background: "var(--color-accent)" }} />
                          )}
                          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.0) 60%)" }} />
                          <span
                            style={{
                              position: "absolute",
                              top: "0.875rem",
                              left: "0.875rem",
                              fontSize: "0.58rem",
                              fontWeight: 500,
                              letterSpacing: "0.16em",
                              textTransform: "uppercase",
                              color: "rgba(255,255,255,0.85)",
                              background: "rgba(0,0,0,0.25)",
                              padding: "0.25rem 0.625rem",
                              borderRadius: "2px",
                            }}
                          >
                            {v?.tag ?? service.categoryLabel}
                          </span>
                        </div>

                        {/* Contenido */}
                        <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column", background: "var(--color-background)" }}>
                          <h2
                            className="group-hover:text-[var(--color-primary)]"
                            style={{
                              fontFamily: "var(--font-cormorant)",
                              fontSize: "1.375rem",
                              fontWeight: 500,
                              color: "var(--color-text)",
                              lineHeight: 1.2,
                              marginBottom: "0.625rem",
                              transition: "color 0.15s",
                            }}
                          >
                            {service.title}
                          </h2>
                          <p
                            style={{
                              fontSize: "0.85rem",
                              color: "var(--color-text-muted)",
                              lineHeight: 1.65,
                              flex: 1,
                              marginBottom: "1.25rem",
                            }}
                          >
                            {service.shortDescription}
                          </p>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <span style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)" }}>
                              Ver tratamiento →
                            </span>
                            {service.priceRange && (
                              <span style={{ fontSize: "0.72rem", color: "var(--color-text-muted)" }}>
                                {service.priceRange}
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : null
          )}

          {/* Otros procedimientos */}
          <div
            style={{
              background: "var(--color-primary-50)",
              border: "1px solid var(--color-border)",
              borderRadius: "2px",
              padding: "2rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)" }}>También ofrecemos</span>
              <div style={{ flex: 1, height: "1px", background: "var(--color-border)" }} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "HydraFacial", "Criocirugía", "Electrocauterización",
                "Biopsias cutáneas", "Dermatoscopia",
                "Dermatología de uñas", "Rejuvenecimiento láser",
              ].map((s) => (
                <div
                  key={s}
                  style={{
                    background: "var(--color-background)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "2px",
                    padding: "0.625rem 0.875rem",
                    fontSize: "0.8rem",
                    color: "var(--color-text-secondary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ color: "var(--color-gold)", fontWeight: 600 }}>›</span>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-accent)", textAlign: "center" }}>
        <div className="container-custom">
          <div style={{ width: "32px", height: "1px", backgroundColor: "var(--color-gold)", margin: "0 auto 2.5rem" }} />
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "white",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            ¿No encuentras lo que buscas?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              maxWidth: "380px",
              margin: "0 auto 3rem",
              fontSize: "0.9375rem",
              lineHeight: 1.75,
            }}
          >
            Agenda una consulta y la Dra. Téllez evaluará tu caso y recomendará el tratamiento más adecuado para ti.
          </p>
          <a
            href="https://www.doctoralia.co/alejandra-tellez/dermatologo/bogota"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "0.875rem 2.5rem",
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
            Agendar consulta
          </a>
        </div>
      </section>
    </>
  );
}
