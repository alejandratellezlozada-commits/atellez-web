import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { alternatesFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About Dr. Alejandra Téllez — Dermatologist in Bogotá",
  description:
    "Meet Dr. Alejandra Téllez: trained at Universidad de Los Andes, Tulane University and Hospital Italiano de Buenos Aires. Abbott spokesperson for hyaluronic acid, Fagron ambassador. 8+ years of experience.",
  alternates: alternatesFor("/perfil", "en"),
  openGraph: {
    title: "About — Dr. Alejandra Téllez, Dermatologist in Bogotá",
    description:
      "National and international training. Specialist in clinical and aesthetic dermatology with over 8 years of experience in Bogotá.",
    url: "https://alejandratellezderma.com/en/about",
  },
};

const education = [
  {
    institution: "South Korea",
    location: "South Korea",
    type: "International Training",
    description: "Fellowship in aesthetic dermatology and advanced injectable techniques.",
  },
  {
    institution: "Tulane University",
    location: "New Orleans, USA",
    type: "International Training",
    description: "Training in advanced dermatological procedures.",
  },
  {
    institution: "Hospital Italiano de Buenos Aires",
    location: "Buenos Aires, Argentina",
    type: "International Training",
    description: "Specialization in dermatology and aesthetic procedures.",
  },
  {
    institution: "Centro Dermatológico Federico Lleras Acosta",
    location: "Bogotá, Colombia",
    type: "Residency",
    description: "Colombia's leading dermatology referral center.",
  },
  {
    institution: "Universidad de Los Andes",
    location: "Bogotá, Colombia",
    type: "Medical Degree",
    description: "Undergraduate medical training.",
  },
];

const specialties = [
  { category: "Clinical Dermatology", items: ["Acne and scars", "Psoriasis", "Atopic dermatitis", "Hyperpigmentation", "Warts and papillomas", "Skin biopsies", "Dermoscopy", "Electrocautery"] },
  { category: "Aesthetic Dermatology", items: ["Botulinum toxin (Botox)", "Hyaluronic acid", "Sculptra", "Chemical peel", "Cosmelan", "Cryosurgery", "HydraFacial facial cleansing"] },
  { category: "Trichology", items: ["Androgenetic alopecia", "Alopecia areata", "Telogen effluvium", "Scalp PRP", "Scalp mesotherapy", "Advanced hair diagnostics"] },
  { category: "Laser Technology", items: ["Fractional CO2 laser", "Laser hair removal", "Vascular treatment", "Laser rejuvenation"] },
];

const affiliations = [
  { name: "Asociación Colombiana de Dermatología (AsoColDerma)", role: "Active member" },
  { name: "EADV — European Academy of Dermatology and Venereology", role: "International member" },
  { name: "Abbott Aesthetics", role: "Official spokesperson — Hyaluronic acid and injectables" },
  { name: "Fagron Colombia", role: "National Ambassador" },
  { name: "National and international conferences", role: "Speaker and presenter" },
  { name: "International Congress — Taiwan", role: "International speaker" },
  { name: "Exosomes in Colombia", role: "Pioneer in introducing and clinically applying exosomes in Colombia" },
];

export default function PerfilPage() {
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": "https://alejandratellezderma.com/#physician",
    name: "Dr. Alejandra Téllez",
    url: "https://alejandratellezderma.com/en/about",
    medicalSpecialty: "Dermatology",
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", educationalLevel: "Specialization", recognizedBy: { "@type": "Organization", name: "Centro Dermatológico Federico Lleras Acosta" } },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "license", name: "Professional License 1030537845" },
    ],
    knowsLanguage: [{ "@type": "Language", name: "Spanish" }, { "@type": "Language", name: "English" }],
    alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.institution, address: { "@type": "PostalAddress", addressLocality: e.location } })),
    memberOf: { "@type": "MedicalOrganization", name: "AsoColDerma — Asociación Colombiana de Dermatología" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "531" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }} />

      {/* ── HERO ── */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-primary-50)" }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-start">

            {/* Foto */}
            <div className="flex justify-center lg:justify-start">
              <div
                style={{
                  position: "relative",
                  width: "256px",
                  height: "340px",
                  border: "1px solid var(--color-gold)",
                  borderRadius: "2px",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/images/dra-alejandra-tellez-perfil.webp"
                  alt="Dr. Alejandra Téllez — Dermatologist in Bogotá"
                  fill
                  priority
                  sizes="256px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            </div>

            {/* Info principal */}
            <div className="lg:col-span-2">
              <span className="eyebrow">Medical Profile</span>
              <h1
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 300,
                  lineHeight: 1.05,
                  color: "var(--color-text)",
                  marginTop: "0.5rem",
                  marginBottom: "0.25rem",
                }}
              >
                Dr. Alejandra Téllez
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.25rem",
                  fontStyle: "italic",
                  color: "var(--color-primary)",
                  marginBottom: "0.25rem",
                }}
              >
                Board-certified Dermatologist
              </p>
              <p
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  color: "var(--color-text-muted)",
                  marginBottom: "2rem",
                }}
              >
                Professional license: 1030537845 · Bogotá, Colombia
              </p>

              <div
                style={{
                  width: "48px",
                  height: "1px",
                  backgroundColor: "var(--color-gold)",
                  marginBottom: "1.5rem",
                }}
              />

              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.85,
                  marginBottom: "1rem",
                  fontSize: "0.9375rem",
                }}
              >
                Dr. Alejandra Téllez is a board-certified dermatologist with over 8 years of clinical and aesthetic experience in Bogotá. Her training includes centers of excellence in Colombia, Argentina and the United States, allowing her to offer cutting-edge treatments to the highest international standards.
              </p>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.85,
                  marginBottom: "2.5rem",
                  fontSize: "0.9375rem",
                }}
              >
                Her philosophy of care is built on evidence-based medicine, accurate diagnosis and clear communication with the patient. Every consultation is a space for active listening, where patients receive complete information about their condition and the treatment options available.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", marginBottom: "2rem" }}>
                {["8+ years of experience", "Spanish & English", "Clinical & Aesthetic", "Bogotá"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "0.375rem 0.875rem",
                      fontSize: "0.62rem",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-secondary)",
                      borderRadius: "2px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }} className="sm:flex-row">
                <a
                  href="https://www.doctoralia.co/alejandra-tellez/dermatologo/bogota"
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
                    textAlign: "center",
                  }}
                >
                  Book on Doctoralia
                </a>
                <Link
                  href="/en/contact"
                  style={{
                    display: "inline-block",
                    padding: "0.875rem 2rem",
                    border: "1px solid var(--color-primary)",
                    color: "var(--color-primary)",
                    borderRadius: "2px",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ESPECIALIDADES ── */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="container-custom">
          <div style={{ marginBottom: "3.5rem" }}>
            <span className="eyebrow">Areas of practice</span>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 300,
                color: "var(--color-text)",
                marginTop: "0.625rem",
                lineHeight: 1.1,
              }}
            >
              Specialties
            </h2>
            <div style={{ width: "48px", height: "1px", backgroundColor: "var(--color-gold)", marginTop: "1.25rem" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "var(--color-border)" }}>
            {specialties.map((spec) => (
              <div
                key={spec.category}
                style={{
                  background: "var(--color-background)",
                  padding: "1.75rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--color-gold)",
                    marginBottom: "1.25rem",
                  }}
                >
                  {spec.category}
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {spec.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text-secondary)",
                        display: "flex",
                        gap: "0.625rem",
                        alignItems: "flex-start",
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: "1px" }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMACIÓN ── */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-primary-50)" }}>
        <div className="container-custom">
          <div style={{ marginBottom: "3.5rem" }}>
            <span className="eyebrow">Academic background</span>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 300,
                color: "var(--color-text)",
                marginTop: "0.625rem",
                lineHeight: 1.1,
              }}
            >
              Medical Training
            </h2>
            <div style={{ width: "48px", height: "1px", backgroundColor: "var(--color-gold)", marginTop: "1.25rem" }} />
          </div>

          <div>
            {education.map((edu, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.25rem",
                  padding: "1.75rem 0",
                  borderTop: "1px solid var(--color-border)",
                }}
              >
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
                  {String(education.length - i).padStart(2, "0")}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <span
                      style={{
                        fontSize: "0.58rem",
                        fontWeight: 500,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--color-gold)",
                      }}
                    >
                      {edu.type}
                    </span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {edu.location}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.375rem",
                      fontWeight: 500,
                      color: "var(--color-text)",
                      lineHeight: 1.2,
                      marginBottom: "0.375rem",
                    }}
                  >
                    {edu.institution}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--color-border)" }} />
          </div>
        </div>
      </section>

      {/* ── AFILIACIONES ── */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="container-custom">
          <div style={{ marginBottom: "3.5rem" }}>
            <span className="eyebrow">Recognition</span>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 300,
                color: "var(--color-text)",
                marginTop: "0.625rem",
                lineHeight: 1.1,
              }}
            >
              Affiliations & Ambassadorships
            </h2>
            <div style={{ width: "48px", height: "1px", backgroundColor: "var(--color-gold)", marginTop: "1.25rem" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--color-border)" }}>
            {affiliations.map((aff) => (
              <div
                key={aff.name}
                style={{
                  background: "var(--color-background)",
                  padding: "1.5rem 1.75rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.25rem",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: "20px",
                    height: "1px",
                    backgroundColor: "var(--color-gold)",
                    flexShrink: 0,
                    marginTop: "10px",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.0625rem",
                      fontWeight: 500,
                      color: "var(--color-text)",
                      lineHeight: 1.3,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {aff.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.08em",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {aff.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-accent)", textAlign: "center" }}
      >
        <div className="container-custom">
          <div
            style={{
              width: "32px",
              height: "1px",
              backgroundColor: "var(--color-gold)",
              margin: "0 auto 2.5rem",
            }}
          />
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
            Ready for your first consultation?
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
            Book with Dr. Téllez and receive a personalized diagnosis based on your condition.
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
            Book on Doctoralia
          </a>
        </div>
      </section>
    </>
  );
}
