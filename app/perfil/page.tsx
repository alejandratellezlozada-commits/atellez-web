import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Perfil de la Dra. Alejandra Téllez — Dermatóloga en Bogotá",
  description:
    "Conoce el perfil de la Dra. Alejandra Téllez: formación en Universidad de Los Andes, Tulane University y Hospital Italiano de Buenos Aires. Vocera Abbott para ácido hialurónico, embajadora Fagron. 8+ años de experiencia.",
  alternates: { canonical: "https://alejandratellezderma.com/perfil" },
  openGraph: {
    title: "Perfil — Dra. Alejandra Téllez, Dermatóloga Bogotá",
    description:
      "Formación nacional e internacional. Especialista en dermatología clínica y estética con más de 8 años de experiencia en Bogotá.",
    url: "https://alejandratellezderma.com/perfil",
  },
};

const education = [
  {
    institution: "Corea del Sur",
    location: "Corea del Sur",
    type: "Formación Internacional",
    description: "Fellowship en dermatología estética y técnicas avanzadas de inyectables.",
  },
  {
    institution: "Tulane University",
    location: "Nueva Orleans, EE.UU.",
    type: "Formación Internacional",
    description: "Entrenamiento en procedimientos dermatológicos avanzados.",
  },
  {
    institution: "Hospital Italiano de Buenos Aires",
    location: "Buenos Aires, Argentina",
    type: "Formación Internacional",
    description: "Especialización en dermatología y procedimientos estéticos.",
  },
  {
    institution: "Centro Dermatológico Federico Lleras Acosta",
    location: "Bogotá, Colombia",
    type: "Especialización",
    description: "Principal centro dermatológico de referencia en Colombia.",
  },
  {
    institution: "Universidad de Los Andes",
    location: "Bogotá, Colombia",
    type: "Pregrado",
    description: "Formación médica de pregrado.",
  },
];

const specialties = [
  { category: "Dermatología Clínica", items: ["Acné y cicatrices", "Psoriasis", "Dermatitis atópica", "Hiperpigmentación", "Verrugas y papilomas", "Biopsias cutáneas", "Dermatoscopia", "Electrocauterización"] },
  { category: "Dermatología Estética", items: ["Toxina botulínica (Botox)", "Ácido hialurónico", "Sculptra", "Peeling químico", "Cosmelan", "Criocirugía", "Limpieza facial con HydraFacial"] },
  { category: "Tricología", items: ["Alopecia androgenética", "Alopecia areata", "Effluvio telógeno", "PRP capilar", "Mesoterapia capilar", "Diagnóstico capilar avanzado"] },
  { category: "Tecnología Láser", items: ["Láser CO2 fraccionado", "Depilación láser", "Tratamiento vascular", "Rejuvenecimiento con láser"] },
];

const affiliations = [
  { name: "Asociación Colombiana de Dermatología (AsoColDerma)", role: "Miembro activo" },
  { name: "EADV — European Academy of Dermatology and Venereology", role: "Miembro internacional" },
  { name: "Abbott Estética", role: "Vocera oficial — Ácido hialurónico e inyectables" },
  { name: "Fagron Colombia", role: "Embajadora Nacional" },
  { name: "Congresos nacionales e internacionales", role: "Speaker y ponente" },
  { name: "Congreso Internacional — Taiwán", role: "Conferencista internacional" },
  { name: "Exosomas en Colombia", role: "Pionera en la introducción y aplicación clínica de exosomas en Colombia" },
];

export default function PerfilPage() {
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": "https://alejandratellezderma.com/#physician",
    name: "Dra. Alejandra Téllez",
    url: "https://alejandratellezderma.com/perfil",
    medicalSpecialty: "Dermatology",
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", educationalLevel: "Especialización", recognizedBy: { "@type": "Organization", name: "Centro Dermatológico Federico Lleras Acosta" } },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "license", name: "Matrícula Profesional 1030537845" },
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
                  src="/images/dra-alejandra-tellez-perfil.jpg"
                  alt="Dra. Alejandra Téllez — Dermatóloga en Bogotá"
                  fill
                  priority
                  sizes="256px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            </div>

            {/* Info principal */}
            <div className="lg:col-span-2">
              <span className="eyebrow">Perfil Médico</span>
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
                Dra. Alejandra Téllez
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
                Médica Dermatóloga
              </p>
              <p
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  color: "var(--color-text-muted)",
                  marginBottom: "2rem",
                }}
              >
                Matrícula profesional: 1030537845 · Bogotá, Colombia
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
                La Dra. Alejandra Téllez es médica dermatóloga con más de 8 años de experiencia clínica
                y estética en Bogotá. Su formación incluye centros de excelencia en Colombia, Argentina y
                Estados Unidos, lo que le permite ofrecer tratamientos de vanguardia con los más altos
                estándares internacionales.
              </p>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.85,
                  marginBottom: "2.5rem",
                  fontSize: "0.9375rem",
                }}
              >
                Su filosofía de atención se basa en la medicina basada en evidencia, el diagnóstico preciso
                y la comunicación clara con el paciente. Cada consulta es un espacio de escucha activa donde
                el paciente recibe información completa sobre su condición y las opciones de tratamiento disponibles.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", marginBottom: "2rem" }}>
                {["8+ años de experiencia", "Español & Inglés", "Clínica & Estética", "Bogotá"].map((tag) => (
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
                  Agendar cita en Doctoralia
                </a>
                <Link
                  href="/contacto"
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
                  Contactar
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
            <span className="eyebrow">Áreas de trabajo</span>
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
              Especialidades
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
            <span className="eyebrow">Trayectoria académica</span>
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
              Formación Médica
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
            <span className="eyebrow">Reconocimientos</span>
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
              Afiliaciones y Embajadas
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
            ¿Listo para tu primera consulta?
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
            Agenda con la Dra. Téllez y recibe un diagnóstico personalizado basado en tu condición.
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
            Agendar cita en Doctoralia
          </a>
        </div>
      </section>
    </>
  );
}
