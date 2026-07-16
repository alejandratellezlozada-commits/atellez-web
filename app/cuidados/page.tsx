import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cuidados Antes y Después de Procedimientos — Dra. Téllez",
  description:
    "Recomendaciones pre y post procedimiento para toxina botulínica, ácido hialurónico en labios, pómulos y ojeras, y Sculptra. Instrucciones de la Dra. Alejandra Téllez, dermatóloga en Bogotá.",
  alternates: { canonical: "https://alejandratellezderma.com/cuidados" },
  openGraph: {
    title: "Cuidados Pre y Post Procedimiento — Dra. Alejandra Téllez",
    description:
      "Todo lo que necesitas saber antes y después de tu tratamiento con botox, ácido hialurónico o Sculptra.",
    url: "https://alejandratellezderma.com/cuidados",
  },
};

interface Treatment {
  id: string;
  name: string;
  subtitle: string;
  color: string;
  before: string[];
  after: string[];
  note?: string;
}

const treatments: Treatment[] = [
  {
    id: "toxina-botulinica",
    name: "Toxina Botulínica",
    subtitle: "Botox",
    color: "var(--color-primary)",
    before: [
      "Iniciar la preparación con 2 días de anticipación al procedimiento.",
      "Evitar bebidas alcohólicas las 24 horas previas al procedimiento.",
      "Suspender aspirina, ibuprofeno, vitamina E y omega-3 al menos 2 días antes (siempre con autorización médica).",
      "Informar a la Dra. Téllez sobre todos los medicamentos o suplementos que esté tomando.",
      "Llegar al consultorio con la cara completamente limpia, sin maquillaje.",
      "No realizarse limpiezas faciales, masajes ni otros procedimientos en los 7 días previos.",
      "Si tiene cita dental próxima, programarla para antes del procedimiento o mínimo 2 semanas después.",
    ],
    after: [
      "No tocar, frotar ni masajear la zona tratada durante las primeras 4 horas.",
      "No acostarse, agacharse ni realizar esfuerzo físico durante las 4 horas siguientes al procedimiento.",
      "Dormir boca arriba la primera noche para evitar desplazamiento del producto.",
      "Evitar ejercicio físico intenso el día del procedimiento.",
      "No exponerse al sol directo, sauna ni calor excesivo durante las primeras 24 horas.",
      "Es normal presentar leve sensibilidad o pequeños hematomas en los sitios de inyección.",
      "El efecto completo se observa entre 7 y 14 días después de la aplicación.",
      "Asistir al control de revisión a las 2 semanas para evaluar el resultado.",
    ],
    note: "El resultado dura entre 4 y 6 meses. Con tratamientos regulares, el efecto tiende a prolongarse con el tiempo.",
  },
  {
    id: "ha-labios",
    name: "Ácido Hialurónico",
    subtitle: "Aumento y definición de labios",
    color: "var(--color-accent)",
    before: [
      "Iniciar la preparación con 2 días de anticipación al procedimiento.",
      "Evitar bebidas alcohólicas las 24 horas previas.",
      "Suspender aspirina, ibuprofeno y anticoagulantes al menos 2 días antes (con autorización médica).",
      "Si tiene historial de herpes labial (calentura), informar a la Dra. Téllez con anticipación para recibir profilaxis antiviral antes del procedimiento.",
      "Llegar sin maquillaje, sin bálsamo labial ni productos en los labios.",
      "Mantener los labios bien hidratados los días previos — los labios hidratados responden mejor al tratamiento.",
      "Si ha tenido fillers anteriores en labios, informarlo aunque hayan sido hace meses.",
    ],
    after: [
      "La hinchazón y los moretones en labios son esperados y completamente normales. Pueden durar entre 3 y 7 días.",
      "Aplicar hielo envuelto en un paño limpio sobre los labios durante los primeros días (nunca hielo directamente sobre la piel).",
      "No masajear ni presionar los labios durante las primeras 24 horas.",
      "Evitar besos fuertes, movimientos exagerados de labios y el uso de pajillas las primeras 24 horas.",
      "No realizarse tratamientos dentales ni limpiezas orales durante las 2 semanas siguientes.",
      "Evitar labiales, gloss o productos irritantes los primeros 3 días.",
      "El resultado definitivo se aprecia a las 2 semanas, cuando cede completamente la inflamación.",
    ],
    note: "El ácido hialurónico en labios dura entre 6 y 12 meses. Es reversible con hialuronidasa si fuera necesario.",
  },
  {
    id: "ha-pomulos",
    name: "Ácido Hialurónico",
    subtitle: "Volumen y proyección en pómulos",
    color: "var(--color-gold)",
    before: [
      "Iniciar la preparación con 2 días de anticipación al procedimiento.",
      "Evitar bebidas alcohólicas las 24 horas previas.",
      "Suspender aspirina, ibuprofeno, vitamina E y anticoagulantes al menos 2 días antes (con autorización médica).",
      "Si tiene fotos de referencia de resultados que le gusten, llevarlas a la consulta.",
      "Llegar al consultorio con la cara completamente limpia, sin maquillaje.",
      "No aplicarse calor en la cara (masajes, radiofrecuencia) en los 7 días previos.",
      "Informar si tiene implantes o fillers previos en la zona malar.",
    ],
    after: [
      "La hinchazón y los hematomas en la zona de los pómulos son normales los primeros 3 a 7 días.",
      "No masajear la zona tratada durante las primeras 24 horas.",
      "Dormir boca arriba, con la cabeza ligeramente elevada, las primeras noches.",
      "Evitar ejercicio físico intenso el día del procedimiento.",
      "No exponerse al calor excesivo (sauna, sol directo) durante las primeras 48 horas.",
      "No usar gafas que ejerzan presión sobre la zona malar durante las primeras 48 horas.",
      "El resultado definitivo se ve a las 2 semanas cuando cede la inflamación.",
    ],
    note: "El filler de pómulos dura entre 12 y 18 meses dependiendo del producto utilizado.",
  },
  {
    id: "ha-ojeras",
    name: "Ácido Hialurónico",
    subtitle: "Ojeras y surco nasoyugal (valle lagrimal)",
    color: "var(--color-primary)",
    before: [
      "Iniciar la preparación con 2 días de anticipación al procedimiento.",
      "Evitar bebidas alcohólicas las 24 horas previas.",
      "Suspender aspirina, ibuprofeno, vitamina E y suplementos anticoagulantes al menos 2 días antes.",
      "Descansar bien la noche anterior — las ojeras acentuadas por cansancio dificultan la evaluación y el resultado.",
      "Llegar sin maquillaje ni corrector en la zona de los ojos.",
      "Evitar la exposición solar intensa los días previos.",
      "Informar si usa lentes de contacto para retirarlos antes del procedimiento.",
    ],
    after: [
      "El área periorbitaria es la zona más propensa a hematomas — son normales y pueden durar entre 7 y 14 días.",
      "Aplicar compresas frías (no hielo directo) sobre el área las primeras horas.",
      "No frotar, presionar ni masajear el área de los ojos bajo ninguna circunstancia.",
      "Dormir con la cabeza elevada durante los primeros 3 días.",
      "Retirar los lentes de contacto durante el procedimiento y no usarlos las primeras horas.",
      "El resultado definitivo puede tardar hasta 4 semanas en estabilizarse completamente.",
      "Es normal observar leve irregularidad inicial — se resuelve de forma espontánea.",
    ],
    note: "Es uno de los procedimientos más delicados por la cercanía al ojo. Siempre debe realizarse con un médico dermatólogo calificado.",
  },
  {
    id: "sculptra",
    name: "Sculptra",
    subtitle: "Bioestimulador de colágeno (ácido poliláctico)",
    color: "var(--color-accent)",
    before: [
      "Iniciar la preparación con 2 días de anticipación al procedimiento.",
      "Evitar bebidas alcohólicas las 24 horas previas.",
      "Suspender aspirina, ibuprofeno y anticoagulantes al menos 2 días antes (con autorización médica).",
      "Llegar con la cara completamente limpia, sin maquillaje.",
      "No tener infecciones activas (granos, herpes, foliculitis) en las zonas a tratar.",
      "Informar si tiene historial de queloides o cicatrización anormal.",
      "Comunicar si ha recibido otros tratamientos con fillers o bioestimuladores en los últimos 6 meses.",
    ],
    after: [
      "Aplicar la Regla del 5: masajear suavemente la zona tratada durante 5 minutos, 5 veces al día, por 5 días consecutivos. Este paso es fundamental para distribuir el producto de forma uniforme y prevenir nódulos.",
      "Es normal presentar hinchazón, enrojecimiento y hematomas los primeros días.",
      "No preocuparse si después de unas semanas pareciera que el efecto desapareció — Sculptra actúa de forma gradual y progresiva, estimulando el colágeno.",
      "Los resultados visibles comienzan a apreciarse entre las 4 y 8 semanas.",
      "Evitar ejercicio físico intenso el día del procedimiento.",
      "Usar protección solar diariamente para proteger la piel durante el proceso de regeneración.",
    ],
    note: "Sculptra es un bioestimulador, no un filler. Sus resultados son graduales y naturales, y pueden durar hasta 2 a 3 años.",
  },
];

export default function CuidadosPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-primary-50)" }}
      >
        <div className="container-custom">
          <span className="eyebrow">Guía del paciente</span>
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
            Cuidados Antes y Después
          </h1>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--color-text-secondary)",
              maxWidth: "42rem",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            Seguir estas recomendaciones es parte esencial del tratamiento. Ayudan a minimizar riesgos,
            reducir efectos secundarios y optimizar los resultados de cada procedimiento.
          </p>
          {/* Quick nav */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {treatments.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                style={{
                  display: "inline-block",
                  padding: "0.375rem 0.875rem",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  border: "1px solid var(--color-border)",
                  borderRadius: "2px",
                  background: "var(--color-background)",
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
              >
                {t.name} — {t.subtitle}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      {treatments.map((treatment, index) => (
        <section
          key={treatment.id}
          id={treatment.id}
          className="section-padding"
          style={{ backgroundColor: index % 2 === 0 ? "var(--color-background)" : "var(--color-primary-50)" }}
        >
          <div className="container-custom">
            {/* Header */}
            <div
              style={{
                marginBottom: "2.5rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
                <div style={{ width: "3px", height: "2rem", backgroundColor: treatment.color, flexShrink: 0 }} />
                <div>
                  <span
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 500,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: treatment.color,
                      display: "block",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {treatment.subtitle}
                  </span>
                  <h2
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      fontWeight: 300,
                      color: "var(--color-text)",
                      lineHeight: 1.1,
                    }}
                  >
                    {treatment.name}
                  </h2>
                </div>
              </div>
              {treatment.note && (
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-secondary)",
                    marginTop: "1rem",
                    background: "var(--color-background)",
                    padding: "0.75rem 1rem",
                    borderRadius: "2px",
                    border: "1px solid var(--color-border)",
                    borderLeft: `3px solid ${treatment.color}`,
                    maxWidth: "42rem",
                    lineHeight: 1.65,
                  }}
                >
                  {treatment.note}
                </p>
              )}
            </div>

            {/* Before / After grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Antes */}
              <div
                style={{
                  background: "var(--color-background)",
                  padding: "1.75rem",
                  border: "1px solid var(--color-border)",
                  borderRadius: "2px",
                  borderTop: `3px solid var(--color-primary)`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      border: "1px solid var(--color-primary)",
                      borderRadius: "2px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-primary)",
                      fontSize: "1rem",
                      flexShrink: 0,
                    }}
                  >
                    ↑
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: "var(--color-text)",
                    }}
                  >
                    Antes del procedimiento
                  </h3>
                </div>
                <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {treatment.before.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        fontSize: "0.85rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.65,
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: "20px",
                          height: "20px",
                          borderRadius: "2px",
                          background: "var(--color-primary)",
                          color: "white",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "0.15rem",
                        }}
                      >
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Después */}
              <div
                style={{
                  background: "var(--color-background)",
                  padding: "1.75rem",
                  border: "1px solid var(--color-border)",
                  borderRadius: "2px",
                  borderTop: `3px solid var(--color-gold)`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      border: "1px solid var(--color-gold)",
                      borderRadius: "2px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-gold)",
                      fontSize: "1rem",
                      flexShrink: 0,
                    }}
                  >
                    ↓
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: "var(--color-text)",
                    }}
                  >
                    Después del procedimiento
                  </h3>
                </div>
                <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {treatment.after.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        fontSize: "0.85rem",
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.65,
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: "20px",
                          height: "20px",
                          borderRadius: "2px",
                          background: "var(--color-gold)",
                          color: "white",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "0.15rem",
                        }}
                      >
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Disclaimer + CTA */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-accent)", textAlign: "center" }}
      >
        <div className="container-custom">
          <div style={{ width: "32px", height: "1px", backgroundColor: "var(--color-gold)", margin: "0 auto 2rem" }} />
          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.75,
              maxWidth: "36rem",
              margin: "0 auto 2.5rem",
            }}
          >
            Estas recomendaciones son de carácter general. Cada paciente puede recibir indicaciones
            personalizadas según su condición y el tipo de procedimiento realizado. Ante cualquier
            duda o síntoma inesperado, comuníquese directamente con la Dra. Téllez.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            <a
              href="https://wa.me/573147444537"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "0.875rem 2rem",
                background: "white",
                color: "var(--color-accent)",
                borderRadius: "2px",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Escribir por WhatsApp →
            </a>
            <Link
              href="/servicios"
              style={{
                display: "inline-block",
                padding: "0.875rem 2rem",
                border: "1px solid rgba(255,255,255,0.35)",
                color: "white",
                borderRadius: "2px",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
