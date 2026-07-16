import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

const serviceImages: Record<string, { src: string; position: string }> = {
  "acne":                  { src: "/images/servicios/acne.jpg",                  position: "center 20%" },
  "toxina-botulinica":     { src: "/images/servicios/toxina-botulinica.jpg",     position: "center 30%" },
  "acido-hialuronico":     { src: "/images/servicios/acido-hialuronico.jpg",     position: "center 40%" },
  "laser-co2":             { src: "/images/servicios/laser-co2.jpg",             position: "center 35%" },
  "alopecia":              { src: "/images/servicios/alopecia.jpg",              position: "center 30%" },
  "peeling-quimico":       { src: "/images/servicios/peeling-quimico.jpg",       position: "center 35%" },
  "mesoterapia-capilar":   { src: "/images/servicios/mesoterapia-capilar.jpg",   position: "center 40%" },
  "retiro-lunares-lipomas":{ src: "/images/servicios/retiro-lunares-lipomas.jpg",position: "center 30%" },
  "depilacion-laser":      { src: "/images/servicios/depilacion-laser.jpg",      position: "center 70%" },
  "cosmelan":              { src: "/images/servicios/peeling-quimico.jpg",        position: "center 40%" },
  "sculptra":              { src: "/images/servicios/acido-hialuronico.jpg",      position: "center 35%" },
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Servicio no encontrado" };

  return {
    title: `${service.title} en Bogotá — Dra. Alejandra Téllez`,
    description: service.shortDescription,
    keywords: service.keywords,
    alternates: { canonical: `https://alejandratellezderma.com/servicios/${slug}` },
    openGraph: {
      title: `${service.title} en Bogotá | Dra. Alejandra Téllez`,
      description: service.shortDescription,
      url: `https://alejandratellezderma.com/servicios/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = services
    .filter((s) => service.relatedServices.includes(s.slug))
    .slice(0, 3);

  const img = serviceImages[slug];

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.description,
    procedureType: "https://health-lifesci.schema.org/MedicalProcedure",
    bodyLocation: "Piel",
    followup: service.aftercare.join(". "),
    preparation: service.process[0],
    recognizingAuthority: {
      "@type": "MedicalOrganization",
      name: "Asociación Colombiana de Dermatología (AsoColDerma)",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://alejandratellezderma.com" },
      { "@type": "ListItem", position: 2, name: "Servicios", item: "https://alejandratellezderma.com/servicios" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://alejandratellezderma.com/servicios/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          minHeight: "520px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          overflow: "hidden",
          background: img ? "transparent" : "var(--color-accent)",
        }}
      >
        {/* Foto de fondo */}
        {img && (
          <>
            <Image
              src={img.src}
              alt={service.title}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: img.position }}
            />
            {/* Gradiente sobre la foto */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.72) 100%)",
              }}
            />
          </>
        )}

        {/* Breadcrumb flotante */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
          <nav className="container-custom" style={{ paddingTop: "1.25rem" }}>
            <ol style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.7rem", color: "rgba(255,255,255,0.6)" }}>
              <li><Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Inicio</Link></li>
              <li>›</li>
              <li><Link href="/servicios" style={{ color: "inherit", textDecoration: "none" }}>Servicios</Link></li>
              <li>›</li>
              <li style={{ color: "rgba(255,255,255,0.9)" }}>{service.title}</li>
            </ol>
          </nav>
        </div>

        {/* Contenido del hero */}
        <div className="container-custom" style={{ position: "relative", paddingBottom: "3.5rem", paddingTop: "5rem" }}>
          <div style={{ maxWidth: "640px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{ width: "28px", height: "1px", background: "var(--color-gold)" }} />
              <span style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
                {service.categoryLabel}
              </span>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 300,
                color: "white",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}
            >
              {service.title}
            </h1>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "520px" }}>
              {service.shortDescription}
            </p>

            {/* Chips de info */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", marginBottom: "2rem" }}>
              {service.duration && (
                <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.85)", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "2px", padding: "0.4rem 0.875rem" }}>
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {service.duration}
                </span>
              )}
              {service.sessions && (
                <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.85)", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "2px", padding: "0.4rem 0.875rem" }}>
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                  {service.sessions}
                </span>
              )}
            </div>

            <a
              href="https://www.doctoralia.co/alejandra-tellez/dermatologo/bogota"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "0.875rem 2rem",
                background: "white",
                color: "var(--color-accent)",
                borderRadius: "2px",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Agendar cita →
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTENIDO PRINCIPAL ── */}
      <section data-reveal className="section-padding" style={{ background: "var(--color-background)" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">

            {/* Columna de contenido */}
            <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: "3.5rem" }}>

              {/* Descripción */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <span style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)" }}>Tratamiento</span>
                  <div style={{ flex: 1, height: "1px", background: "var(--color-border)" }} />
                </div>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 300, color: "var(--color-text)", marginBottom: "1rem" }}>
                  Sobre este tratamiento
                </h2>
                <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", lineHeight: 1.85 }}>
                  {service.description}
                </p>
              </div>

              {/* Candidatos */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <span style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)" }}>Candidatos</span>
                  <div style={{ flex: 1, height: "1px", background: "var(--color-border)" }} />
                </div>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 300, color: "var(--color-text)", marginBottom: "1.25rem" }}>
                  ¿Quiénes son candidatos?
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {service.candidates.map((c, i) => (
                    <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "var(--color-primary-50)", border: "1px solid var(--color-primary-100)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                        <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="var(--color-primary)" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </span>
                      <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{c}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proceso */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <span style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)" }}>Procedimiento</span>
                  <div style={{ flex: 1, height: "1px", background: "var(--color-border)" }} />
                </div>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 300, color: "var(--color-text)", marginBottom: "1.25rem" }}>
                  ¿Cómo es el proceso?
                </h2>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {service.process.map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: "1.25rem", paddingBottom: i < service.process.length - 1 ? "1.5rem" : 0, borderLeft: i < service.process.length - 1 ? "1px solid var(--color-border)" : "1px solid transparent", marginLeft: "10px", paddingLeft: "1.5rem" }}>
                      <div style={{ position: "relative", marginLeft: "-2.125rem" }}>
                        <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "var(--color-primary)", color: "white", fontSize: "0.65rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "2px solid var(--color-background)" }}>
                          {i + 1}
                        </div>
                      </div>
                      <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.7, paddingBottom: "0.25rem" }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cuidados post */}
              <div style={{ background: "var(--color-primary-50)", border: "1px solid var(--color-border)", borderRadius: "2px", padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)" }}>Post-procedimiento</span>
                  <div style={{ flex: 1, height: "1px", background: "var(--color-border)" }} />
                </div>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", fontWeight: 300, color: "var(--color-text)", marginBottom: "1.25rem" }}>
                  Cuidados posteriores
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "0.625rem" }}>
                  {service.aftercare.map((c, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--color-primary)", fontWeight: 600, flexShrink: 0, fontSize: "0.875rem" }}>›</span>
                      <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{c}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <span style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)" }}>FAQ</span>
                  <div style={{ flex: 1, height: "1px", background: "var(--color-border)" }} />
                </div>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 300, color: "var(--color-text)", marginBottom: "1.25rem" }}>
                  Preguntas frecuentes
                </h2>
                <div>
                  {service.faq.map((faq, i) => (
                    <details
                      key={i}
                      style={{ borderTop: "1px solid var(--color-border)" }}
                    >
                      <summary
                        style={{
                          cursor: "pointer",
                          padding: "1.25rem 0",
                          fontSize: "0.9375rem",
                          fontWeight: 500,
                          color: "var(--color-text)",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          listStyle: "none",
                          gap: "1rem",
                        }}
                      >
                        <span>{faq.q}</span>
                        <span style={{ flexShrink: 0, width: "22px", height: "22px", border: "1px solid var(--color-primary)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", color: "var(--color-primary)", lineHeight: 1 }}>+</span>
                      </summary>
                      <div style={{ paddingBottom: "1.25rem", fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.75 }}>
                        {faq.a}
                      </div>
                    </details>
                  ))}
                  <div style={{ borderTop: "1px solid var(--color-border)" }} />
                </div>
              </div>
            </div>

            {/* ── SIDEBAR ── */}
            <aside style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

              {/* CTA sticky */}
              <div style={{ position: "sticky", top: "90px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ background: "var(--color-accent)", borderRadius: "2px", padding: "2rem", color: "white" }}>
                  <div style={{ width: "24px", height: "1px", background: "var(--color-gold)", marginBottom: "1.25rem" }} />
                  <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.375rem", fontWeight: 400, color: "white", marginBottom: "0.75rem", lineHeight: 1.2 }}>
                    ¿Este tratamiento es para ti?
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    Agenda una consulta para que la Dra. Téllez evalúe tu caso y te recomiende el mejor plan.
                  </p>
                  <a
                    href="https://www.doctoralia.co/alejandra-tellez/dermatologo/bogota"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "block", padding: "0.875rem", background: "white", color: "var(--color-accent)", borderRadius: "2px", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", textAlign: "center", marginBottom: "0.75rem" }}
                  >
                    Agendar en Doctoralia
                  </a>
                  <a
                    href="https://wa.me/573147444537"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "block", padding: "0.875rem", border: "1px solid rgba(255,255,255,0.3)", color: "white", borderRadius: "2px", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", textAlign: "center" }}
                  >
                    WhatsApp
                  </a>
                </div>

                {/* Mini-perfil */}
                <div style={{ border: "1px solid var(--color-border)", borderRadius: "2px", padding: "1.5rem", background: "var(--color-surface)" }}>
                  <div style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                    <Image
                      src="/images/dra-alejandra-tellez.jpg"
                      alt="Dra. Alejandra Téllez"
                      width={52}
                      height={52}
                      style={{ objectFit: "cover", objectPosition: "center top", borderRadius: "2px", flexShrink: 0 }}
                    />
                    <div>
                      <p style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "0.2rem" }}>Realizado por</p>
                      <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem", fontWeight: 500, color: "var(--color-text)", lineHeight: 1.2, marginBottom: "0.25rem" }}>Dra. Alejandra Téllez</p>
                      <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Médica Dermatóloga · Bogotá</p>
                    </div>
                  </div>
                  <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--color-border)" }}>
                    <p style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                      Formación en Colombia, Argentina y EE.UU. Vocera oficial Abbott para ácido hialurónico y embajadora Fagron.
                    </p>
                    <Link
                      href="/perfil"
                      style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", textDecoration: "none" }}
                    >
                      Ver perfil completo →
                    </Link>
                  </div>
                </div>

                {/* Tecnología — solo depilación láser */}
                {service.slug === "depilacion-laser" && (
                  <div style={{ border: "1px solid var(--color-border)", borderRadius: "2px", padding: "1.5rem", background: "var(--color-surface)" }}>
                    <p style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "0.875rem" }}>Equipo utilizado</p>
                    <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", fontWeight: 500, color: "var(--color-text)", lineHeight: 1.1, marginBottom: "0.25rem" }}>Láser Triton</p>
                    <p style={{ fontSize: "0.72rem", color: "var(--color-text-muted)", marginBottom: "1rem" }}>por Alma Lasers</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {[
                        "Triple longitud de onda simultánea",
                        "755 nm · 810 nm · 1064 nm",
                        "Todos los fototipos (I–VI)",
                        "In-Motion: más rápido y cómodo",
                        "Enfriamiento por zafiro integrado",
                      ].map((feat) => (
                        <div key={feat} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <span style={{ color: "var(--color-gold)", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0 }}>›</span>
                          <span style={{ fontSize: "0.78rem", color: "var(--color-text-secondary)", lineHeight: 1.4 }}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Inversión */}
                {service.priceRange && (
                  <div style={{ border: "1px solid var(--color-border)", borderRadius: "2px", padding: "1.25rem 1.5rem", background: "var(--color-surface)" }}>
                    <p style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "0.375rem" }}>Inversión</p>
                    <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.375rem", fontWeight: 400, color: "var(--color-text)", lineHeight: 1.2 }}>{service.priceRange}</p>
                    <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginTop: "0.5rem", lineHeight: 1.5 }}>El precio final se define en consulta según el tratamiento personalizado.</p>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      {relatedServices.length > 0 && (
        <section data-reveal style={{ background: "var(--color-primary-50)", borderTop: "1px solid var(--color-border)", padding: "5rem 0" }}>
          <div className="container-custom">
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2.5rem" }}>
              <div style={{ height: "1px", flex: 1, background: "var(--color-border)" }} />
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem", fontWeight: 400, color: "var(--color-text-muted)", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
                Tratamientos relacionados
              </h2>
              <div style={{ height: "1px", flex: 1, background: "var(--color-border)" }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  style={{ display: "block", background: "white", border: "1px solid var(--color-border)", borderRadius: "2px", padding: "1.5rem", textDecoration: "none", transition: "border-color 0.15s, box-shadow 0.15s" }}
                  className="group hover:border-[var(--color-primary)] hover:shadow-md"
                >
                  <span style={{ fontSize: "0.58rem", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-gold)" }}>{s.categoryLabel}</span>
                  <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem", fontWeight: 500, color: "var(--color-text)", margin: "0.375rem 0 0.5rem", lineHeight: 1.2 }} className="group-hover:text-[var(--color-primary)]">
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>{s.shortDescription.slice(0, 90)}…</p>
                  <p style={{ fontSize: "0.7rem", fontWeight: 500, color: "var(--color-primary)", marginTop: "1rem" }}>Ver tratamiento →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Disclaimer */}
      <div style={{ background: "var(--color-background)", borderTop: "1px solid var(--color-border)", padding: "1.5rem 0" }}>
        <div className="container-custom">
          <p style={{ fontSize: "0.7rem", color: "var(--color-text-muted)", textAlign: "center", maxWidth: "640px", margin: "0 auto", lineHeight: 1.6 }}>
            Información con fines educativos. Los resultados pueden variar según cada paciente. Para diagnóstico personalizado agenda una consulta. Matrícula profesional: 1030537845.
          </p>
        </div>
      </div>
    </>
  );
}
