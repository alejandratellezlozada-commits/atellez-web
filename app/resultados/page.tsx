import type { Metadata } from "next";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "Resultados Antes y Después — Dra. Alejandra Téllez, Dermatóloga",
  description:
    "Galería de resultados reales de procedimientos realizados por la Dra. Alejandra Téllez: botox, ácido hialurónico en labios y ojeras, rinomodelación, Sculptra, Cosmelan y alopecia.",
  alternates: { canonical: "https://alejandratellezderma.com/resultados" },
  openGraph: {
    title: "Resultados Antes y Después — Dra. Alejandra Téllez",
    description:
      "Casos reales de botox, fillers, Sculptra, Cosmelan y más. Resultados naturales y seguros.",
    url: "https://alejandratellezderma.com/resultados",
  },
};

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  label: string;
}

const gallery: GalleryItem[] = [
  // Botox
  { src: "/images/resultados/botox-1.jpg", alt: "Resultado toxina botulínica — antes y después", category: "Toxina Botulínica", label: "Toxina Botulínica" },
  { src: "/images/resultados/botox-2.jpg", alt: "Resultado botox frente y entrecejo — antes y después", category: "Toxina Botulínica", label: "Toxina Botulínica" },
  { src: "/images/resultados/botox-3.jpg", alt: "Resultado botox patas de gallo — antes y después", category: "Toxina Botulínica", label: "Toxina Botulínica" },
  // Labios
  { src: "/images/resultados/labios-antes-1.jpg", alt: "Antes filler de labios — ácido hialurónico", category: "Ácido Hialurónico", label: "AH — Labios" },
  { src: "/images/resultados/labios-despues-1.jpg", alt: "Después filler de labios — ácido hialurónico", category: "Ácido Hialurónico", label: "AH — Labios" },
  // Ojeras
  { src: "/images/resultados/ojeras-1.jpg", alt: "Resultado ácido hialurónico ojeras — antes y después", category: "Ácido Hialurónico", label: "AH — Ojeras" },
  { src: "/images/resultados/ojeras-2.jpg", alt: "Resultado filler valle lagrimal — antes y después", category: "Ácido Hialurónico", label: "AH — Ojeras" },
  // Rinomodelación
  { src: "/images/resultados/nariz-antes-1.jpg", alt: "Antes rinomodelación con ácido hialurónico", category: "Ácido Hialurónico", label: "AH — Nariz" },
  { src: "/images/resultados/nariz-despues-1.jpg", alt: "Después rinomodelación con ácido hialurónico", category: "Ácido Hialurónico", label: "AH — Nariz" },
  { src: "/images/resultados/nariz-antes-2.jpg", alt: "Antes rinomodelación caso 2", category: "Ácido Hialurónico", label: "AH — Nariz" },
  { src: "/images/resultados/nariz-despues-2.jpg", alt: "Después rinomodelación caso 2", category: "Ácido Hialurónico", label: "AH — Nariz" },
  { src: "/images/resultados/nariz-antes-3.jpg", alt: "Antes rinomodelación caso 3", category: "Ácido Hialurónico", label: "AH — Nariz" },
  { src: "/images/resultados/nariz-despues-3.jpg", alt: "Después rinomodelación caso 3", category: "Ácido Hialurónico", label: "AH — Nariz" },
  // Surcos nasogenianos
  { src: "/images/resultados/surcos-antes-1.jpg", alt: "Antes surcos nasogenianos — filler", category: "Ácido Hialurónico", label: "AH — Surcos" },
  { src: "/images/resultados/surcos-despues-1.jpg", alt: "Después surcos nasogenianos — filler", category: "Ácido Hialurónico", label: "AH — Surcos" },
  { src: "/images/resultados/surcos-antes-2.jpg", alt: "Antes surcos nasogenianos caso 2", category: "Ácido Hialurónico", label: "AH — Surcos" },
  { src: "/images/resultados/surcos-despues-2.jpg", alt: "Después surcos nasogenianos caso 2", category: "Ácido Hialurónico", label: "AH — Surcos" },
  // Líneas marioneta
  { src: "/images/resultados/marioneta-antes-1.jpg", alt: "Antes líneas marioneta — filler", category: "Ácido Hialurónico", label: "AH — Marioneta" },
  { src: "/images/resultados/marioneta-despues-1.jpg", alt: "Después líneas marioneta — filler", category: "Ácido Hialurónico", label: "AH — Marioneta" },
  // Sculptra
  { src: "/images/resultados/sculptra-1.jpg", alt: "Resultado Sculptra bioestimulador — antes y después", category: "Sculptra", label: "Sculptra" },
  { src: "/images/resultados/sculptra-2.jpg", alt: "Resultado Sculptra volumen facial — antes y después", category: "Sculptra", label: "Sculptra" },
  // Cosmelan
  { src: "/images/resultados/cosmelan-antes-1.jpg", alt: "Antes Cosmelan — manchas e hiperpigmentación", category: "Cosmelan", label: "Cosmelan" },
  { src: "/images/resultados/cosmelan-despues-1.jpg", alt: "Después Cosmelan — piel uniforme sin manchas", category: "Cosmelan", label: "Cosmelan" },
  // Dermapen
  { src: "/images/resultados/dermapen-antes-1.jpg", alt: "Antes Dermapen — textura y cicatrices", category: "Dermapen", label: "Dermapen" },
  { src: "/images/resultados/dermapen-despues-1.jpg", alt: "Después Dermapen — piel renovada", category: "Dermapen", label: "Dermapen" },
  // Retiro de lunares
  { src: "/images/resultados/retiro-lunar-antes-1.jpg", alt: "Antes retiro de lunar nariz y mejilla", category: "Retiro de Lunares", label: "Retiro Lunar" },
  { src: "/images/resultados/retiro-lunar-despues-1.jpg", alt: "Después retiro de lunar nariz y mejilla", category: "Retiro de Lunares", label: "Retiro Lunar" },
  // Alopecia
  { src: "/images/resultados/alopecia-1.jpg", alt: "Resultado tratamiento alopecia — antes y después", category: "Alopecia", label: "Alopecia" },
];

const categories = ["Toxina Botulínica", "Ácido Hialurónico", "Sculptra", "Cosmelan", "Dermapen", "Retiro de Lunares", "Alopecia"];

export default function ResultadosPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-primary-50)" }}
      >
        <div className="container-custom">
          <span className="eyebrow">Casos reales</span>
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
            Resultados Antes y Después
          </h1>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--color-text-secondary)",
              maxWidth: "42rem",
              lineHeight: 1.75,
              marginBottom: "1.5rem",
            }}
          >
            Fotos reales de procedimientos realizados por la Dra. Alejandra Téllez.
            Cada resultado es único — el objetivo siempre es resaltar la belleza natural de cada paciente.
          </p>
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--color-text-muted)",
              maxWidth: "34rem",
              lineHeight: 1.7,
              padding: "0.75rem 1rem",
              background: "var(--color-background)",
              border: "1px solid var(--color-border)",
              borderRadius: "2px",
            }}
          >
            Fotos publicadas con consentimiento de los pacientes. Los resultados pueden variar según el tipo de piel, la zona tratada y las características individuales de cada persona.
          </p>
        </div>
      </section>

      {/* Casos antes y después — slider interactivo */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)" }}>
              Arrastra para comparar
            </span>
            <h2
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 300, color: "var(--color-text)", marginTop: "0.5rem", lineHeight: 1.1 }}
            >
              Antes y Después
            </h2>
            <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginTop: "0.75rem" }}>
              Desliza la línea para ver el resultado de cada tratamiento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Filler de Labios",             before: "/images/resultados/labios-antes-1.jpg",        after: "/images/resultados/labios-despues-1.jpg",        ratio: "2 / 1" },
              { label: "Rinomodelación — Caso 2",      before: "/images/resultados/nariz-antes-2.jpg",         after: "/images/resultados/nariz-despues-2.jpg",         ratio: "3 / 4" },
              { label: "Rinomodelación — Caso 3",      before: "/images/resultados/nariz-antes-3.jpg",         after: "/images/resultados/nariz-despues-3.jpg",         ratio: "3 / 4" },
              { label: "Surcos Nasogenianos — Caso 1", before: "/images/resultados/surcos-antes-1.jpg",        after: "/images/resultados/surcos-despues-1.jpg",        ratio: "4 / 3" },
              { label: "Surcos Nasogenianos — Caso 2", before: "/images/resultados/surcos-antes-2.jpg",        after: "/images/resultados/surcos-despues-2.jpg",        ratio: "8 / 5" },
              { label: "Líneas Marioneta",              before: "/images/resultados/marioneta-antes-1.jpg",    after: "/images/resultados/marioneta-despues-1.jpg",     ratio: "4 / 3" },
              { label: "Cosmelan",                      before: "/images/resultados/cosmelan-antes-1.jpg",     after: "/images/resultados/cosmelan-despues-1.jpg",      ratio: "3 / 4" },
              { label: "Retiro de Lunar",               before: "/images/resultados/retiro-lunar-antes-1.jpg", after: "/images/resultados/retiro-lunar-despues-1.jpg",  ratio: "3 / 4" },
            ].map((caso) => (
              <BeforeAfterSlider
                key={caso.label}
                before={caso.before}
                after={caso.after}
                altBefore={`Antes — ${caso.label}`}
                altAfter={`Después — ${caso.label}`}
                label={caso.label}
                aspectRatio={caso.ratio}
              />
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-accent)", textAlign: "center" }}
      >
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
            ¿Te gustaría ver resultados similares?
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
            Agenda una consulta con la Dra. Téllez y recibe un plan de tratamiento personalizado.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
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
              Agendar cita en Doctoralia
            </a>
            <a
              href="https://wa.me/573147444537"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "0.875rem 2.5rem",
                border: "1px solid rgba(255,255,255,0.35)",
                color: "white",
                borderRadius: "2px",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
