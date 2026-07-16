import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — Dra. Alejandra Téllez",
  description:
    "Política de tratamiento de datos personales del sitio web de la Dra. Alejandra Téllez, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.",
  alternates: { canonical: "https://alejandratellezderma.com/politica-de-privacidad" },
  robots: { index: true, follow: false },
};

const sections = [
  {
    title: "1. Responsable del tratamiento",
    content: `La responsable del tratamiento de los datos personales recopilados a través de este sitio web es:

**Alejandra Téllez Lozada** (Dra. Alejandra Téllez)
Médica Dermatóloga — Matrícula Profesional 1030537845
Avenida Carrera 19 97-31, Consultorio 606, Bogotá, Colombia
Teléfono: +57 314 744 4537
Correo electrónico: alejandratellezlozada@gmail.com`,
  },
  {
    title: "2. Marco legal",
    content: `Esta política se rige por la **Ley Estatutaria 1581 de 2012** (Ley de Protección de Datos Personales de Colombia), el **Decreto 1377 de 2013** y las demás normas que los modifiquen o complementen.

Al utilizar este sitio web o al suministrar sus datos a través del formulario de contacto, el usuario acepta los términos de la presente política.`,
  },
  {
    title: "3. Datos personales que recopilamos",
    content: `Recopilamos únicamente los datos que el usuario proporciona voluntariamente a través del formulario de contacto:

- **Nombre completo**
- **Número de teléfono / WhatsApp**
- **Motivo de consulta** (servicio de interés)
- **Mensaje libre** (opcional)

Este sitio **no utiliza formularios que almacenen datos en servidores propios**. El formulario de contacto redirige al usuario a WhatsApp, donde la conversación se rige por la política de privacidad de Meta Platforms, Inc.

Adicionalmente, el sitio puede recopilar de forma automática datos técnicos como la dirección IP, el tipo de navegador y las páginas visitadas a través de herramientas de análisis web (Google Analytics), con el único fin de mejorar la experiencia del usuario.`,
  },
  {
    title: "4. Finalidades del tratamiento",
    content: `Los datos personales proporcionados se utilizan para:

- **Atender solicitudes de información** sobre servicios médicos y procedimientos
- **Gestionar la agendación de citas** en el consultorio
- **Responder consultas** realizadas a través de los canales de contacto
- **Mejorar el sitio web** mediante análisis anónimo del comportamiento de usuarios

Los datos **no se utilizan** para envío de publicidad no solicitada, perfiles comerciales ni se venden a terceros.`,
  },
  {
    title: "5. Compartición de datos con terceros",
    content: `Para la prestación de los servicios de este sitio web, podemos compartir información con los siguientes terceros:

- **WhatsApp / Meta Platforms**: cuando el usuario utiliza el formulario de contacto o el botón de WhatsApp. La comunicación queda bajo la política de privacidad de Meta.
- **Doctoralia (Docplanner Group)**: cuando el usuario accede al portal de agendamiento de citas. La información queda bajo la política de privacidad de Docplanner.
- **Google LLC**: a través de Google Maps (integrado en este sitio) y Google Analytics (análisis de tráfico anónimo).

No compartimos datos personales con terceros con fines comerciales o publicitarios.`,
  },
  {
    title: "6. Derechos del titular de los datos",
    content: `De conformidad con la Ley 1581 de 2012, el titular de los datos personales tiene derecho a:

- **Conocer, actualizar y rectificar** sus datos personales
- **Solicitar prueba** de la autorización otorgada para el tratamiento de sus datos
- **Ser informado** sobre el uso que se ha dado a sus datos personales
- **Presentar quejas** ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la ley
- **Revocar la autorización** y/o solicitar la supresión de sus datos cuando no se respeten los principios, derechos y garantías constitucionales y legales

Para ejercer cualquiera de estos derechos, puede contactarnos por escrito a:
**alejandratellezlozada@gmail.com**
con el asunto: "Solicitud de protección de datos personales"

Responderemos en un plazo máximo de **10 días hábiles**.`,
  },
  {
    title: "7. Medidas de seguridad",
    content: `Adoptamos medidas técnicas y administrativas razonables para proteger los datos personales contra acceso no autorizado, pérdida, alteración o divulgación. Sin embargo, ningún sistema de transmisión de datos por internet es completamente seguro, por lo que no podemos garantizar la seguridad absoluta de la información transmitida.`,
  },
  {
    title: "8. Cookies y tecnologías de rastreo",
    content: `Este sitio puede utilizar cookies propias y de terceros para:

- **Funcionamiento técnico**: recordar preferencias de navegación
- **Análisis**: medir el tráfico y comportamiento de usuarios de forma anónima (Google Analytics)

Las cookies de análisis no recopilan información personal identificable. El usuario puede desactivar las cookies desde la configuración de su navegador, aunque esto puede afectar la funcionalidad del sitio.`,
  },
  {
    title: "9. Transferencias internacionales",
    content: `Algunos de los terceros mencionados en esta política (Google, Meta/WhatsApp, Docplanner) pueden procesar datos en servidores ubicados fuera de Colombia. Estas transferencias se realizan conforme a los mecanismos de protección reconocidos por la normativa colombiana vigente.`,
  },
  {
    title: "10. Información de menores de edad",
    content: `Este sitio web no recopila intencionalmente datos personales de menores de 18 años sin el consentimiento de sus padres o tutores legales. Si los padres o tutores consideran que su hijo/a ha proporcionado datos personales a través de este sitio, pueden contactarnos para solicitar su eliminación.`,
  },
  {
    title: "11. Vigencia y cambios a esta política",
    content: `Esta política entra en vigencia el **21 de mayo de 2026** y puede ser modificada en cualquier momento. Las actualizaciones se publicarán en esta misma página con la fecha de la última modificación. El uso continuado del sitio web después de la publicación de cambios implica la aceptación de la política actualizada.`,
  },
  {
    title: "12. Autoridad de control",
    content: `En Colombia, la autoridad competente para la protección de datos personales es la **Superintendencia de Industria y Comercio (SIC)**.

Sitio web: www.sic.gov.co
Línea de atención: 601 592 0400`,
  },
];

export default function PoliticaPrivacidadPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--color-primary-50)",
          padding: "4rem 0 3rem",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="container-custom" style={{ maxWidth: "760px" }}>
          <span
            style={{
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-primary)",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            Legal
          </span>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 300,
              color: "var(--color-text)",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Política de Privacidad y Tratamiento de Datos Personales
          </h1>
          <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
            Última actualización: 21 de mayo de 2026 · Ley 1581 de 2012 · Decreto 1377 de 2013
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section style={{ backgroundColor: "white", padding: "4rem 0" }}>
        <div className="container-custom" style={{ maxWidth: "760px" }}>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.85,
              marginBottom: "3rem",
              padding: "1.25rem 1.5rem",
              background: "var(--color-primary-50)",
              borderLeft: "3px solid var(--color-primary)",
              borderRadius: "0 2px 2px 0",
            }}
          >
            En el consultorio de la Dra. Alejandra Téllez respetamos y protegemos su privacidad.
            Esta política explica qué datos recopilamos, cómo los usamos y cuáles son sus derechos
            como titular de la información, de conformidad con la legislación colombiana vigente.
          </p>

          {sections.map((section) => (
            <div
              key={section.title}
              style={{ marginBottom: "2.5rem", paddingBottom: "2.5rem", borderBottom: "1px solid var(--color-border)" }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  color: "var(--color-text)",
                  marginBottom: "1rem",
                }}
              >
                {section.title}
              </h2>
              <div style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.85 }}>
                {section.content.split("\n").map((line, i) => {
                  if (!line.trim()) return <br key={i} />;
                  const parts = line.split(/\*\*(.*?)\*\*/g);
                  return (
                    <p key={i} style={{ marginBottom: "0.5rem" }}>
                      {parts.map((part, j) =>
                        j % 2 === 1 ? <strong key={j} style={{ color: "var(--color-text)", fontWeight: 600 }}>{part}</strong> : part
                      )}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}

          <div style={{ paddingTop: "1rem", textAlign: "center" }}>
            <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
              ¿Preguntas sobre esta política? Escríbenos a{" "}
              <a
                href="mailto:alejandratellezlozada@gmail.com"
                style={{ color: "var(--color-primary)", textDecoration: "none" }}
              >
                alejandratellezlozada@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
