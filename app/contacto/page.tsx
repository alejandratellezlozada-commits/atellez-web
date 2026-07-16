import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Dra. Alejandra Téllez, Dermatóloga Bogotá",
  description:
    "Contáctate con la Dra. Alejandra Téllez. Consultorio en Av. Carrera 19 97-31 Cons. 606, Bogotá. WhatsApp +57 314 744 4537 o agenda en Doctoralia.",
  alternates: { canonical: "https://alejandratellezderma.com/contacto" },
};

export default function ContactoPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Consultorio Dra. Alejandra Téllez — Dermatóloga",
    url: "https://alejandratellezderma.com",
    telephone: "+573147444537",
    email: "alejandratellezlozada@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Carrera 19 97-31, Consultorio 606",
      addressLocality: "Bogotá",
      addressRegion: "Cundinamarca",
      postalCode: "110111",
      addressCountry: "CO",
    },
    geo: { "@type": "GeoCoordinates", latitude: 4.6977, longitude: -74.0482 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    ],
    sameAs: [
      "https://www.doctoralia.co/alejandra-tellez/dermatologo/bogota",
      "https://www.instagram.com/alejandratellezdermatologa/",
      "https://www.tiktok.com/@alejatellezdermatologa",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "¿Cómo agendo una cita con la Dra. Téllez?", acceptedAnswer: { "@type": "Answer", text: "Puedes agendar en Doctoralia (el botón de esta página), por WhatsApp al +57 314 744 4537, o llamando directamente al +57 300 855 1145." } },
      { "@type": "Question", name: "¿Dónde queda el consultorio?", acceptedAnswer: { "@type": "Answer", text: "Avenida Carrera 19 97-31, Consultorio 606, Bogotá, Colombia." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--color-primary-50)", textAlign: "center" }}
      >
        <div className="container-custom">
          <span className="eyebrow">Contáctanos</span>
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
            Agenda tu Consulta
          </h1>
          <p
            style={{
              color: "var(--color-text-secondary)",
              maxWidth: "480px",
              margin: "0 auto",
              fontSize: "0.9375rem",
              lineHeight: 1.75,
            }}
          >
            Estamos aquí para atenderte. Elige el canal que más te convenga para comunicarte con la Dra. Téllez.
          </p>
        </div>
      </section>

      {/* Opciones de contacto */}
      <section className="section-padding" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="container-custom">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-px"
            style={{ background: "var(--color-border)", marginBottom: "5rem" }}
          >
            {/* Doctoralia */}
            <div
              style={{
                background: "var(--color-background)",
                padding: "2rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  border: "1px solid var(--color-primary)",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  color: "var(--color-primary)",
                }}
              >
                <svg style={{ width: "20px", height: "20px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.375rem",
                  fontWeight: 500,
                  color: "var(--color-text)",
                  marginBottom: "0.75rem",
                }}
              >
                Doctoralia
              </h2>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                  flex: 1,
                }}
              >
                Agenda tu cita en línea de forma rápida y sencilla. Confirma fecha y hora al instante.
              </p>
              <a
                href="https://www.doctoralia.co/alejandra-tellez/dermatologo/bogota"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "0.875rem 1rem",
                  background: "var(--color-primary)",
                  color: "white",
                  borderRadius: "2px",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Agendar en Doctoralia →
              </a>
            </div>

            {/* WhatsApp */}
            <div
              style={{
                background: "var(--color-background)",
                padding: "2rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  border: "1px solid #22c55e",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  color: "#22c55e",
                }}
              >
                <svg style={{ width: "20px", height: "20px" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.375rem",
                  fontWeight: 500,
                  color: "var(--color-text)",
                  marginBottom: "0.75rem",
                }}
              >
                WhatsApp
              </h2>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                  flex: 1,
                }}
              >
                Escríbenos directamente. Te responderemos en horario de atención (lunes a viernes, 8am–6pm).
              </p>
              <a
                href="https://wa.me/573147444537?text=Hola%20Dra.%20Alejandra%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20sus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "0.875rem 1rem",
                  background: "#22c55e",
                  color: "white",
                  borderRadius: "2px",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Escribir por WhatsApp →
              </a>
            </div>

            {/* Teléfono */}
            <div
              style={{
                background: "var(--color-background)",
                padding: "2rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  border: "1px solid var(--color-accent)",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  color: "var(--color-accent)",
                }}
              >
                <svg style={{ width: "20px", height: "20px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.375rem",
                  fontWeight: 500,
                  color: "var(--color-text)",
                  marginBottom: "0.75rem",
                }}
              >
                Teléfono
              </h2>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                  flex: 1,
                }}
              >
                Llámanos directamente para consultas o información sobre disponibilidad.
              </p>
              <div style={{ width: "100%" }}>
                <a
                  href="tel:+573147444537"
                  style={{
                    display: "block",
                    color: "var(--color-primary)",
                    fontWeight: 500,
                    fontSize: "0.9375rem",
                    textDecoration: "none",
                    marginBottom: "0.375rem",
                  }}
                >
                  +57 314 744 4537
                </a>
                <a
                  href="tel:+573008551145"
                  style={{
                    display: "block",
                    color: "var(--color-text-muted)",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                  }}
                >
                  +57 300 855 1145
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "2.5rem", alignItems: "start", marginBottom: "4rem" }}>
            <div>
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                Formulario de contacto
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 300,
                  color: "var(--color-text)",
                  lineHeight: 1.15,
                  marginBottom: "0.75rem",
                }}
              >
                Cuéntanos en qué
                <br />
                <em>podemos ayudarte</em>
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "2rem" }}>
                Completa el formulario y te contactaremos por WhatsApp. Tiempo de respuesta: menos de 24 horas en días hábiles.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Información del consultorio */}
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "2.5rem", alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
                <span style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)" }}>Consultorio</span>
                <div style={{ flex: 1, height: "1px", background: "var(--color-border)" }} />
              </div>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 300, color: "var(--color-text)", marginBottom: "1.75rem", lineHeight: 1.2 }}>
                Información del Consultorio
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  {
                    label: "Dirección",
                    content: "Avenida Carrera 19 97-31, Consultorio 606\nBogotá, Colombia",
                    icon: <svg style={{ width: "16px", height: "16px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                  },
                  {
                    label: "Horario",
                    content: "Lunes a viernes: 8:00 am – 6:00 pm\nSábados: 8:00 am – 1:00 pm",
                    icon: <svg style={{ width: "16px", height: "16px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  },
                  {
                    label: "Formas de pago",
                    content: "Efectivo, tarjeta de crédito\nSeguro Suramericana S.A. (cobertura varía)",
                    icon: <svg style={{ width: "16px", height: "16px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
                  },
                  {
                    label: "Idiomas",
                    content: "Español · Inglés",
                    icon: <svg style={{ width: "16px", height: "16px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>,
                  },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", paddingBottom: "1.25rem", borderBottom: "1px solid var(--color-border)" }}>
                    <div style={{ width: "36px", height: "36px", border: "1px solid var(--color-border)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--color-primary)" }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "0.3rem" }}>{item.label}</div>
                      <div style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.7, whiteSpace: "pre-line" }}>{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mapa */}
            <div style={{ borderRadius: "2px", overflow: "hidden", border: "1px solid var(--color-border)", height: "400px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4755484177326!2d-74.05043368573!3d4.6978939428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bef6e5e4f0d%3A0x7f7b9b9b9b9b9b9b!2sAv.%20Carrera%2019%20%2397-31%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación consultorio Dra. Alejandra Téllez"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ padding: "2rem 0", backgroundColor: "var(--color-background)", borderTop: "1px solid var(--color-border)" }}>
        <div className="container-custom">
          <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", textAlign: "center", maxWidth: "42rem", margin: "0 auto", lineHeight: 1.7 }}>
            La información de este sitio es de carácter educativo y no reemplaza la consulta médica profesional.
            Para diagnóstico y tratamiento, agenda una cita con la Dra. Téllez.
          </p>
        </div>
      </section>
    </>
  );
}
