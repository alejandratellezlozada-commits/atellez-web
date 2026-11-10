import type { Metadata } from "next";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { alternatesFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Before & After Results — Dr. Alejandra Téllez, Dermatologist",
  description:
    "Gallery of real results from procedures performed by Dr. Alejandra Téllez: Botox, hyaluronic acid for lips and under-eyes, non-surgical rhinoplasty, Sculptra, Cosmelan and hair loss.",
  alternates: alternatesFor("/resultados", "en"),
  openGraph: {
    title: "Before & After Results — Dr. Alejandra Téllez",
    description:
      "Real cases of Botox, fillers, Sculptra, Cosmelan and more. Natural, safe results.",
    url: "https://alejandratellezderma.com/en/results",
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
  { src: "/images/resultados/botox-1.webp", alt: "Botulinum toxin result — before and after", category: "Botulinum Toxin", label: "Botulinum Toxin" },
  { src: "/images/resultados/botox-2.webp", alt: "Botox result on forehead and frown lines — before and after", category: "Botulinum Toxin", label: "Botulinum Toxin" },
  { src: "/images/resultados/botox-3.webp", alt: "Botox result on crow's feet — before and after", category: "Botulinum Toxin", label: "Botulinum Toxin" },
  // Labios
  { src: "/images/resultados/labios-antes-1.webp", alt: "Before lip filler — hyaluronic acid", category: "Hyaluronic Acid", label: "HA — Lips" },
  { src: "/images/resultados/labios-despues-1.webp", alt: "After lip filler — hyaluronic acid", category: "Hyaluronic Acid", label: "HA — Lips" },
  // Ojeras
  { src: "/images/resultados/ojeras-1.webp", alt: "Under-eye hyaluronic acid result — before and after", category: "Hyaluronic Acid", label: "HA — Under-eyes" },
  { src: "/images/resultados/ojeras-2.webp", alt: "Tear trough filler result — before and after", category: "Hyaluronic Acid", label: "HA — Under-eyes" },
  // Rinomodelación
  { src: "/images/resultados/nariz-antes-1.webp", alt: "Before non-surgical rhinoplasty with hyaluronic acid", category: "Hyaluronic Acid", label: "HA — Nose" },
  { src: "/images/resultados/nariz-despues-1.webp", alt: "After non-surgical rhinoplasty with hyaluronic acid", category: "Hyaluronic Acid", label: "HA — Nose" },
  { src: "/images/resultados/nariz-antes-2.webp", alt: "Before non-surgical rhinoplasty, case 2", category: "Hyaluronic Acid", label: "HA — Nose" },
  { src: "/images/resultados/nariz-despues-2.webp", alt: "After non-surgical rhinoplasty, case 2", category: "Hyaluronic Acid", label: "HA — Nose" },
  { src: "/images/resultados/nariz-antes-3.webp", alt: "Before non-surgical rhinoplasty, case 3", category: "Hyaluronic Acid", label: "HA — Nose" },
  { src: "/images/resultados/nariz-despues-3.webp", alt: "After non-surgical rhinoplasty, case 3", category: "Hyaluronic Acid", label: "HA — Nose" },
  // Surcos nasogenianos
  { src: "/images/resultados/surcos-antes-1.webp", alt: "Before nasolabial folds — filler", category: "Hyaluronic Acid", label: "HA — Nasolabial folds" },
  { src: "/images/resultados/surcos-despues-1.webp", alt: "After nasolabial folds — filler", category: "Hyaluronic Acid", label: "HA — Nasolabial folds" },
  { src: "/images/resultados/surcos-antes-2.webp", alt: "Before nasolabial folds, case 2", category: "Hyaluronic Acid", label: "HA — Nasolabial folds" },
  { src: "/images/resultados/surcos-despues-2.webp", alt: "After nasolabial folds, case 2", category: "Hyaluronic Acid", label: "HA — Nasolabial folds" },
  // Líneas marioneta
  { src: "/images/resultados/marioneta-antes-1.webp", alt: "Before marionette lines — filler", category: "Hyaluronic Acid", label: "HA — Marionette lines" },
  { src: "/images/resultados/marioneta-despues-1.webp", alt: "After marionette lines — filler", category: "Hyaluronic Acid", label: "HA — Marionette lines" },
  // Sculptra
  { src: "/images/resultados/sculptra-1.webp", alt: "Sculptra biostimulator result — before and after", category: "Sculptra", label: "Sculptra" },
  { src: "/images/resultados/sculptra-2.webp", alt: "Sculptra facial volume result — before and after", category: "Sculptra", label: "Sculptra" },
  // Cosmelan
  { src: "/images/resultados/cosmelan-antes-1.webp", alt: "Before Cosmelan — dark spots and hyperpigmentation", category: "Cosmelan", label: "Cosmelan" },
  { src: "/images/resultados/cosmelan-despues-1.webp", alt: "After Cosmelan — even, spot-free skin", category: "Cosmelan", label: "Cosmelan" },
  // Dermapen
  { src: "/images/resultados/dermapen-antes-1.webp", alt: "Before Dermapen — texture and scars", category: "Dermapen", label: "Dermapen" },
  { src: "/images/resultados/dermapen-despues-1.webp", alt: "After Dermapen — renewed skin", category: "Dermapen", label: "Dermapen" },
  // Retiro de lunares
  { src: "/images/resultados/retiro-lunar-antes-1.webp", alt: "Before mole removal on nose and cheek", category: "Mole Removal", label: "Mole Removal" },
  { src: "/images/resultados/retiro-lunar-despues-1.webp", alt: "After mole removal on nose and cheek", category: "Mole Removal", label: "Mole Removal" },
  // Alopecia
  { src: "/images/resultados/alopecia-1.webp", alt: "Hair loss treatment result — before and after", category: "Hair Loss", label: "Hair Loss" },
];

const categories = ["Botulinum Toxin", "Hyaluronic Acid", "Sculptra", "Cosmelan", "Dermapen", "Mole Removal", "Hair Loss"];

export default function ResultadosPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-primary-50)" }}
      >
        <div className="container-custom">
          <span className="eyebrow">Real cases</span>
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
            Before & After Results
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
            Real photos of procedures performed by Dr. Alejandra Téllez. Every result is unique — the goal is always to enhance each patient's natural beauty.
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
            Photos published with patients' consent. Results may vary depending on skin type, the treated area and each person's individual characteristics.
          </p>
        </div>
      </section>

      {/* Casos antes y después — slider interactivo */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)" }}>
              Drag to compare
            </span>
            <h2
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 300, color: "var(--color-text)", marginTop: "0.5rem", lineHeight: 1.1 }}
            >
              Before & After
            </h2>
            <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginTop: "0.75rem" }}>
              Slide the line to see the result of each treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Lip Filler",             before: "/images/resultados/labios-antes-1.webp",        after: "/images/resultados/labios-despues-1.webp",        ratio: "2 / 1" },
              { label: "Non-surgical Rhinoplasty — Case 2",      before: "/images/resultados/nariz-antes-2.webp",         after: "/images/resultados/nariz-despues-2.webp",         ratio: "3 / 4" },
              { label: "Non-surgical Rhinoplasty — Case 3",      before: "/images/resultados/nariz-antes-3.webp",         after: "/images/resultados/nariz-despues-3.webp",         ratio: "3 / 4" },
              { label: "Nasolabial Folds — Case 1", before: "/images/resultados/surcos-antes-1.webp",        after: "/images/resultados/surcos-despues-1.webp",        ratio: "4 / 3" },
              { label: "Nasolabial Folds — Case 2", before: "/images/resultados/surcos-antes-2.webp",        after: "/images/resultados/surcos-despues-2.webp",        ratio: "8 / 5" },
              { label: "Marionette Lines",              before: "/images/resultados/marioneta-antes-1.webp",    after: "/images/resultados/marioneta-despues-1.webp",     ratio: "4 / 3" },
              { label: "Cosmelan",                      before: "/images/resultados/cosmelan-antes-1.webp",     after: "/images/resultados/cosmelan-despues-1.webp",      ratio: "3 / 4" },
              { label: "Mole Removal",               before: "/images/resultados/retiro-lunar-antes-1.webp", after: "/images/resultados/retiro-lunar-despues-1.webp",  ratio: "3 / 4" },
            ].map((caso) => (
              <BeforeAfterSlider
                key={caso.label}
                before={caso.before}
                after={caso.after}
                altBefore={`Before — ${caso.label}`}
                altAfter={`After — ${caso.label}`}
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
            Would you like to see similar results?
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
            Book a consultation with Dr. Téllez and receive a personalized treatment plan.
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
              Book on Doctoralia
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
