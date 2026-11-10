import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, formatDate } from "@/lib/mdx";
import MapEmbed from "@/components/MapEmbed";
import { alternatesFor, blogCategoryLabel } from "@/lib/i18n";

export const metadata: Metadata = {
  title: { absolute: "Dr. Alejandra Téllez — Dermatologist in Bogotá, Colombia" },
  description:
    "Clinical and aesthetic dermatologist in Bogotá, Colombia, with over 8 years of experience. Acne, hair loss, Botox, CO2 laser, peels and more. 531 five-star reviews. Book your appointment.",
  alternates: alternatesFor("/", "en"),
};

const featuredServices = [
  {
    title: "Acne Treatment",
    description:
      "Personalized diagnosis and treatment for mild, moderate and severe acne. Long-lasting results with a medical approach.",
    href: "/en/services/acne",
  },
  {
    title: "Botulinum Toxin",
    description:
      "Botox to soften expression lines and wrinkles with natural-looking results.",
    href: "/en/services/toxina-botulinica",
  },
  {
    title: "Hyaluronic Acid",
    description:
      "Fillers for lips, under-eyes, cheeks and non-surgical nose reshaping. Immediate, reversible results.",
    href: "/en/services/acido-hialuronico",
  },
  {
    title: "CO2 Laser",
    description:
      "Deep resurfacing for scars, dark spots and rejuvenation. State-of-the-art technology.",
    href: "/en/services/laser-co2",
  },
  {
    title: "Trichology · Hair Loss",
    description:
      "Comprehensive diagnosis and treatment of hair loss and androgenetic alopecia.",
    href: "/en/services/alopecia",
  },
  {
    title: "Chemical Peel",
    description:
      "Cell renewal and dark-spot treatment with Cosmelan, TCA peels and more.",
    href: "/en/services/peeling-quimico",
  },
  {
    title: "Cosmelan",
    description:
      "High-potency medical depigmenting treatment for dark spots, melasma and hyperpigmentation. Visible results from the first week.",
    href: "/en/services/cosmelan",
  },
  {
    title: "Mole & Lipoma Removal",
    description:
      "Safe removal of moles, lipomas and skin lesions under local anesthesia. Prior diagnosis and histopathological analysis included.",
    href: "/en/services/retiro-lunares-lipomas",
  },
  {
    title: "Laser Hair Removal",
    description:
      "Permanent hair removal with state-of-the-art laser technology. Safe for all skin phototypes, fast and with long-lasting results.",
    href: "/en/services/depilacion-laser",
  },
];

const stats = [
  { value: "531+", label: "Verified reviews" },
  { value: "5★", label: "Doctoralia rating" },
  { value: "8+", label: "Years of experience" },
  { value: "100%", label: "Personalized care" },
];

const testimonials = [
  {
    text: "I'd had cystic acne for years, and with Dr. Téllez it was the first time I saw real results. The diagnosis was very thorough and the treatment transformed my skin in three months. Highly recommended.",
    author: "Verified patient on Doctoralia",
    treatment: "Acne Treatment",
  },
  {
    text: "I had Cosmelan for pregnancy-related dark spots and I'm thrilled. The doctor explains every step very clearly, follows up with you, and the results are incredible. I don't wear foundation anymore.",
    author: "Verified patient on Doctoralia",
    treatment: "Cosmelan",
  },
  {
    text: "I was very nervous about getting Botox for the first time, but Dr. Téllez made me feel completely confident. The result is totally natural. Nobody notices I had anything done — just that I look rested.",
    author: "Verified patient on Doctoralia",
    treatment: "Botulinum Toxin",
  },
  {
    text: "I came in for hair loss after a difficult birth. The doctor made a very detailed diagnosis, explained exactly what was happening, and the treatment worked. The difference was noticeable from the second month.",
    author: "Verified patient on Doctoralia",
    treatment: "Trichology · Hair Loss",
  },
  {
    text: "I had a mole removed that had always made me self-conscious. The procedure was super quick and painless, and the scar is almost invisible. Excellent care before, during and after.",
    author: "Verified patient on Doctoralia",
    treatment: "Mole Removal",
  },
  {
    text: "The under-eye filler transformed my face. For years I looked tired without being tired. Dr. Téllez has a very precise technique, and the result lasted much longer than I expected.",
    author: "Verified patient on Doctoralia",
    treatment: "Hyaluronic Acid · Under-eyes",
  },
];

const credentials = [
  { label: "Universidad de Los Andes", type: "Education" },

  { label: "Tulane University, New Orleans", type: "International" },
  { label: "South Korea — Fellowship in Aesthetic Dermatology", type: "International" },
  { label: "Hospital Italiano de Buenos Aires", type: "International" },
  { label: "Centro Dermatológico Federico Lleras Acosta", type: "Residency" },
  { label: "Abbott Spokesperson — Hyaluronic Acid", type: "Ambassador" },
  { label: "Fagron National Ambassador", type: "Ambassador" },
  { label: "AsoColDerma", type: "Member" },
];

const faqItems = [
  {
    q: "How do I book an appointment with Dr. Téllez?",
    a: "You can book directly on Doctoralia (button at the top), by sending a WhatsApp message to +57 314 744 4537, or by using the contact form on this site.",
  },
  {
    q: "What insurance does Dr. Téllez accept?",
    a: "Dr. Téllez accepts private payment in cash and by credit card. She also works with Suramericana S.A. (coverage varies by service).",
  },
  {
    q: "What is the price range?",
    a: "Treatments range from $230,000 to $2,500,000 COP depending on the procedure. The first consultation includes a diagnosis and a personalized treatment plan.",
  },
  {
    q: "Does Dr. Téllez see both men and women?",
    a: "Yes, Dr. Téllez sees patients of all ages and genders. Her services include both clinical and aesthetic dermatology for everyone.",
  },
];

export default function HomePage() {
  const recentPosts = getAllPosts("blog", "en").slice(0, 3);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Dr. Alejandra Téllez offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dr. Téllez offers clinical and aesthetic dermatology services: acne treatment, hair loss, Botox, fillers, CO2 laser, chemical peels, Cosmelan, scalp mesotherapy, exosomes, HydraFacial, biopsies, dermoscopy and more.",
        },
      },
      {
        "@type": "Question",
        name: "How can I book an appointment with Dr. Téllez?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book directly on Doctoralia through Dr. Alejandra Téllez's profile, or contact us on WhatsApp at +57 314 744 4537.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Dr. Téllez's office located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The office is located at Avenida Carrera 19 #97-31, Office 606, Bogotá, Colombia.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(150deg, #EFF3F8 0%, #FAFAF9 50%, #F7F0F0 100%)",
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Radial glow decorativo */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-15%",
            right: "-8%",
            width: "55%",
            height: "130%",
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(196,130,122,0.1) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div className="container-custom relative w-full py-20 md:py-28">
          {/* Logo centrado arriba del hero */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "3.5rem",
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Dr. Alejandra Téllez — Dermatologist"
              width={1920}
              height={1080}
              priority
              style={{
                width: "min(320px, 70vw)",
                height: "auto",
                display: "block",
                mixBlendMode: "multiply",
              }}
            />
            {/* Reflejo espejo de agua */}
            <Image
              aria-hidden="true"
              src="/images/logo.png"
              alt=""
              width={1920}
              height={1080}
              style={{
                width: "min(320px, 70vw)",
                height: "auto",
                display: "block",
                transform: "scaleY(-1)",
                opacity: 0.25,
                mixBlendMode: "multiply",
                marginTop: "-4px",
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 65%)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 65%)",
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Contenido */}
            <div>
              {/* Eyebrow con línea dorada */}
              <div className="flex items-center gap-4 mb-8">
                <span
                  style={{
                    display: "block",
                    width: "40px",
                    height: "1px",
                    backgroundColor: "var(--color-gold)",
                    flexShrink: 0,
                  }}
                />
                <span className="eyebrow">Dermatologist · Bogotá, Colombia</span>
              </div>

              {/* Nombre — tipografía de impacto */}
              <div style={{ marginBottom: "2rem" }}>
                <h1
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(3.25rem, 7vw, 5.5rem)",
                    fontWeight: 300,
                    lineHeight: 1.0,
                    letterSpacing: "-0.03em",
                    color: "var(--color-text)",
                    margin: 0,
                  }}
                >
                  Dr. Alejandra
                </h1>
                <h1
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(3.25rem, 7vw, 5.5rem)",
                    fontWeight: 500,
                    lineHeight: 1.05,
                    letterSpacing: "-0.03em",
                    fontStyle: "italic",
                    color: "var(--color-primary)",
                    margin: 0,
                  }}
                >
                  Téllez
                </h1>
              </div>

              {/* Línea de oro */}
              <div
                style={{
                  width: "52px",
                  height: "1px",
                  backgroundColor: "var(--color-gold)",
                  marginBottom: "1.75rem",
                }}
              />

              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.85,
                  fontSize: "1rem",
                  marginBottom: "2.5rem",
                  maxWidth: "460px",
                }}
              >
                Board-certified dermatologist with over 8 years of experience in Bogotá. Specialist in clinical and aesthetic dermatology. Trained in Colombia, the United States, South Korea and Argentina.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
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
                    transition: "background-color 0.2s",
                  }}
                >
                  Book on Doctoralia
                </a>
                <a
                  href="https://wa.me/573147444537"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.875rem 2rem",
                    border: "1px solid var(--color-primary)",
                    color: "var(--color-primary)",
                    borderRadius: "2px",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                >
                  <svg
                    style={{ width: "14px", height: "14px", flexShrink: 0 }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Foto + logo de fondo con espejo de agua */}
            <div
              className="hidden lg:flex flex-col items-center"
              style={{ position: "relative" }}
            >
              {/* Marco de foto con logo de fondo */}
              <div style={{ position: "relative" }}>
                {/* Marco offset decorativo */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    bottom: "-8px",
                    right: "-8px",
                    width: "340px",
                    height: "460px",
                    border: "1px solid var(--color-primary-100)",
                    borderRadius: "2px",
                    zIndex: 0,
                  }}
                />
                {/* Marco principal con foto */}
                <div
                  style={{
                    width: "340px",
                    height: "460px",
                    border: "1px solid var(--color-gold)",
                    borderRadius: "2px",
                    position: "relative",
                    zIndex: 1,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/dra-alejandra-tellez.webp"
                    alt="Dr. Alejandra Téllez — Dermatologist in Bogotá"
                    fill
                    priority
                    sizes="340px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                  />
                </div>
              </div>

              {/* Reflejo espejo de agua debajo del marco */}
              <Image
                aria-hidden="true"
                src="/images/logo.png"
                alt=""
                width={1920}
                height={1080}
                style={{
                  width: "340px",
                  height: "auto",
                  display: "block",
                  transform: "scaleY(-1)",
                  opacity: 0.22,
                  mixBlendMode: "multiply",
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 60%)",
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 60%)",
                  marginTop: "4px",
                  pointerEvents: "none",
                }}
              />
            </div>

          </div>

          {/* Stats inline para mobile */}
          <div
            className="lg:hidden mt-12 grid grid-cols-2 gap-px"
            style={{ background: "var(--color-border)" }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "var(--color-background)",
                  padding: "1.25rem 1rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.875rem",
                    fontWeight: 300,
                    color: "var(--color-primary)",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESTADÍSTICAS (desktop) ── */}
      <section
        className="hidden lg:block"
        data-reveal
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding: "3rem 2rem",
                  textAlign: "center",
                  borderRight:
                    i < stats.length - 1
                      ? "1px solid rgba(255,255,255,0.07)"
                      : "none",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "1px",
                    backgroundColor: "var(--color-gold)",
                    margin: "0 auto 1rem",
                  }}
                />
                <div
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "2.5rem",
                    fontWeight: 300,
                    color: "white",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.17em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.38)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS — lista editorial numerada ── */}
      <section data-reveal className="section-padding" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="container-custom">
          {/* Encabezado de sección */}
          <div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
            style={{ marginBottom: "3.5rem" }}
          >
            <div>
              <span className="eyebrow">Specialties</span>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.875rem, 4vw, 3rem)",
                  fontWeight: 300,
                  color: "var(--color-text)",
                  lineHeight: 1.1,
                  marginTop: "0.625rem",
                  margin: "0.625rem 0 0",
                }}
              >
                Dermatology Services
              </h2>
            </div>
            <Link
              href="/en/services"
              style={{
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-primary)",
                textDecoration: "none",
                flexShrink: 0,
                whiteSpace: "nowrap",
              }}
            >
              View all services →
            </Link>
          </div>

          {/* Lista de servicios */}
          <div>
            {featuredServices.map((service, i) => (
              <Link
                key={service.title}
                href={service.href}
                className="group"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.25rem",
                  padding: "1.75rem 0",
                  borderTop: "1px solid var(--color-border)",
                  textDecoration: "none",
                }}
              >
                {/* Número */}
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.1em",
                    fontFamily: "var(--font-body)",
                    minWidth: "2rem",
                    flexShrink: 0,
                    paddingTop: "4px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Contenido */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3
                    className="group-hover:text-[var(--color-primary)]"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.375rem",
                      fontWeight: 500,
                      color: "var(--color-text)",
                      lineHeight: 1.2,
                      marginBottom: "0.375rem",
                      transition: "color 0.15s",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Flecha */}
                <span
                  className="group-hover:translate-x-1"
                  style={{
                    color: "var(--color-primary)",
                    fontSize: "1.125rem",
                    flexShrink: 0,
                    transition: "transform 0.15s",
                    paddingTop: "2px",
                  }}
                >
                  →
                </span>
              </Link>
            ))}
            <div style={{ borderBottom: "1px solid var(--color-border)" }} />
          </div>
        </div>
      </section>

      {/* ── SOBRE LA DRA. ── */}
      <section
        data-reveal
        className="section-padding"
        style={{ backgroundColor: "var(--color-primary-50)" }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Texto */}
            <div>
              <span className="eyebrow">Professional Profile</span>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                  fontWeight: 300,
                  color: "var(--color-text)",
                  lineHeight: 1.15,
                  marginTop: "0.625rem",
                  marginBottom: "1.5rem",
                }}
              >
                Outstanding Training,
                <br />
                <em>Compassionate Care</em>
              </h2>
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
                Dr. Alejandra Téllez is a board-certified dermatologist trained in Colombia, the U.S., Argentina and South Korea. Her approach combines evidence-based medicine with warm, empathetic care that builds trust from the very first visit.
              </p>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.85,
                  marginBottom: "2.5rem",
                  fontSize: "0.9375rem",
                }}
              >
                As Abbott's official spokesperson for hyaluronic acid and a national ambassador for Fagron, she stays at the forefront of the most innovative dermatological treatments.
              </p>
              <Link
                href="/en/about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--color-text)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--color-gold)",
                  paddingBottom: "3px",
                }}
              >
                See her full profile <span>→</span>
              </Link>
            </div>

            {/* Credenciales */}
            <div style={{ paddingTop: "0.5rem" }}>
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    padding: "0.875rem 0",
                    borderBottom: "1px solid var(--color-border)",
                    gap: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.58rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--color-gold)",
                      minWidth: "6rem",
                      flexShrink: 0,
                      paddingTop: "3px",
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                    }}
                  >
                    {cred.type}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "var(--color-text)",
                      lineHeight: 1.4,
                    }}
                  >
                    {cred.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      {(() => {
        // Cuando tengas el video: pega solo el ID de YouTube aquí
        // Ejemplo: "dQw4w9WgXcQ" (lo que va después de ?v= en la URL)
        const YOUTUBE_VIDEO_ID = "";

        return (
          <section
            data-reveal
            className="section-padding"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            <div className="container-custom">
              <div
                className="grid grid-cols-1 lg:grid-cols-2"
                style={{ gap: "4rem", alignItems: "center" }}
              >
                {/* Texto */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
                    <div style={{ width: "28px", height: "1px", background: "var(--color-gold)" }} />
                    <span
                      style={{
                        fontSize: "0.6rem",
                        fontWeight: 500,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "var(--color-gold)",
                      }}
                    >
                      In her own words
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 300,
                      color: "white",
                      lineHeight: 1.1,
                      marginBottom: "1.5rem",
                    }}
                  >
                    Your skin, in expert<br />
                    <em>and caring hands</em>
                  </h2>

                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.75,
                      marginBottom: "2rem",
                      maxWidth: "420px",
                    }}
                  >
                    Dr. Téllez explains her philosophy: why every treatment should be personalized and what you can expect from a consultation.
                  </p>

                  {/* Puntos de confianza */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2.5rem" }}>
                    {[
                      "Over 8 years in clinical and aesthetic dermatology",
                      "Abbott's official spokesperson for hyaluronic acid",
                      "Speaker at national and international conferences",
                    ].map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                        <span style={{ color: "var(--color-gold)", fontSize: "0.9rem", marginTop: "1px", flexShrink: 0 }}>›</span>
                        <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.55 }}>{item}</span>
                      </div>
                    ))}
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
                      fontSize: "0.72rem",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                    }}
                  >
                    Book a consultation →
                  </a>
                </div>

                {/* Video */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16/9",
                    borderRadius: "2px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(0,0,0,0.3)",
                  }}
                >
                  {YOUTUBE_VIDEO_ID ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
                      title="Dr. Alejandra Téllez — Dermatologist in Bogotá"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        border: "none",
                        display: "block",
                      }}
                    />
                  ) : (
                    /* Placeholder mientras se graba el video */
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          border: "1px solid rgba(201,169,110,0.4)",
                          borderRadius: "2px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg style={{ width: "22px", height: "22px", color: "var(--color-gold)" }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <span
                        style={{
                          fontSize: "0.65rem",
                          fontWeight: 500,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.3)",
                        }}
                      >
                        Video coming soon
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* ── MARCAS Y AVALES ── */}
      <section
        data-reveal
        style={{
          backgroundColor: "var(--color-background)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          padding: "3rem 0",
        }}
      >
        <div className="container-custom">
          <p
            style={{
              textAlign: "center",
              fontSize: "0.6rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              marginBottom: "2.5rem",
            }}
          >
            Education · Ambassador · Member
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "0",
            }}
          >
            {[
              {
                name: "Abbott",
                sub: "Official Spokesperson",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M14 27l6-14 6 14M16.5 22.5h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                name: "Fagron",
                sub: "National Ambassador",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                    <rect x="2" y="2" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 20h16M20 12v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                name: "AsoColDerma",
                sub: "Active Member",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                    <path d="M20 4l4.5 9.5 10.5 1.5-7.5 7.5 1.5 10.5L20 28l-9 5 1.5-10.5L5 15l10.5-1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                name: "Univ. de Los Andes",
                sub: "Medical Education",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                    <path d="M20 6L6 14v2h28v-2L20 6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <rect x="10" y="18" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="18" y="18" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="26" y="18" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M6 30h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                name: "Tulane University",
                sub: "International Training",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                    <path d="M20 6L6 14v2h28v-2L20 6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <rect x="10" y="18" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="18" y="18" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="26" y="18" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M6 30h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((brand, i, arr) => (
              <div
                key={brand.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.625rem",
                  padding: "1.5rem 2.5rem",
                  borderRight: i < arr.length - 1 ? "1px solid var(--color-border)" : "none",
                  minWidth: "140px",
                  flex: "1 1 140px",
                  maxWidth: "220px",
                }}
              >
                <div style={{ color: "var(--color-primary)", opacity: 0.7 }}>
                  {brand.icon}
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "var(--color-text)",
                      lineHeight: 1.2,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {brand.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.58rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {brand.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EN LOS MEDIOS ── */}
      <section data-reveal className="section-padding" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="eyebrow" style={{ color: "rgba(255,255,255,0.45)" }}>Press & Media</span>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 300,
                color: "white",
                marginTop: "0.625rem",
                marginBottom: "0.75rem",
              }}
            >
              An expert voice in national media
            </h2>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", maxWidth: "440px", margin: "0 auto" }}>
              Dr. Téllez shares her knowledge on radio, TV and in print to bring dermatology closer to all Colombians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              {
                outlet: "W Radio",
                type: "Radio",
                frequency: "Twice a month",
                since: "Since 2022",
                description: "Dermatology and skin health segment on one of Colombia's most listened-to programs.",
                icon: (
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                ),
              },
              {
                outlet: "Teleamiga",
                type: "Television",
                frequency: "Monthly",
                since: "National channel",
                description: "Monthly appearance on national television sharing skincare tips and treatments.",
                icon: (
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                ),
              },
              {
                outlet: "RCN Radio",
                type: "Radio",
                frequency: "Expert guest",
                since: "National network",
                description: "Expert guest on health and wellness programs on the RCN network.",
                icon: (
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                ),
              },
              {
                outlet: "Revista Aló",
                type: "Magazine",
                frequency: "Contributor",
                since: "An El Tiempo publication",
                description: "Articles and expert commentary in Colombia's most widely read trends and lifestyle magazine.",
                icon: (
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.outlet}
                style={{
                  padding: "2rem",
                  background: "rgba(255,255,255,0.03)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontSize: "0.58rem",
                      fontWeight: 500,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--color-gold)",
                    }}
                  >
                    {item.type}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.25)" }}>{item.icon}</span>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      color: "white",
                      lineHeight: 1.1,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.outlet}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>
                    {item.since}
                  </div>
                </div>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.65, flex: 1 }}>
                  {item.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div style={{ width: "16px", height: "1px", backgroundColor: "var(--color-gold)" }} />
                  <span style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>
                    {item.frequency}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section data-reveal className="section-padding" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="container-custom">
          {/* Encabezado */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="eyebrow">Testimonials</span>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 300,
                color: "var(--color-text)",
                marginTop: "0.625rem",
                marginBottom: "0.875rem",
              }}
            >
              What our patients say
            </h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.625rem",
              }}
            >
              <span style={{ color: "#F59E0B", letterSpacing: "3px", fontSize: "0.875rem" }}>
                ★★★★★
              </span>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-text-muted)",
                }}
              >
                531 verified reviews on Doctoralia
              </span>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "var(--color-background)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "2px",
                  padding: "2rem",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Comilla decorativa */}
                <div
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "6rem",
                    lineHeight: 1,
                    color: "var(--color-primary-100)",
                    position: "absolute",
                    top: "0.75rem",
                    left: "1.25rem",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  "
                </div>

                <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column" }}>
                  {/* Tag de tratamiento */}
                  <span
                    style={{
                      fontSize: "0.58rem",
                      fontWeight: 500,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--color-gold)",
                      marginBottom: "1.25rem",
                      paddingTop: "0.25rem",
                    }}
                  >
                    {t.treatment}
                  </span>

                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.0625rem",
                      fontStyle: "italic",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.75,
                      marginBottom: "1.5rem",
                      flex: 1,
                    }}
                  >
                    {t.text}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        width: "20px",
                        height: "1px",
                        backgroundColor: "var(--color-gold)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {t.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a
              href="https://www.doctoralia.co/alejandra-tellez/dermatologo/bogota"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                color: "var(--color-primary)",
                textDecoration: "none",
              }}
            >
              See all reviews on Doctoralia →
            </a>
          </div>
        </div>
      </section>

      {/* ── RESULTADOS ── */}
      <section data-reveal className="section-padding" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="container-custom">
          <div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
            style={{ marginBottom: "3rem" }}
          >
            <div>
              <span className="eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>Real cases</span>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.875rem, 4vw, 3rem)",
                  fontWeight: 300,
                  color: "white",
                  lineHeight: 1.1,
                  marginTop: "0.625rem",
                  margin: "0.625rem 0 0",
                }}
              >
                Before & After
              </h2>
            </div>
            <Link
              href="/en/results"
              style={{
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                flexShrink: 0,
                whiteSpace: "nowrap",
                borderBottom: "1px solid rgba(255,255,255,0.3)",
                paddingBottom: "2px",
              }}
            >
              View full gallery →
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "4px",
            }}
            className="md:grid-cols-4"
          >
            {[
              { src: "/images/resultados/labios-1.webp", label: "HA · Lips" },
              { src: "/images/resultados/botox-1.webp", label: "Botulinum Toxin" },
              { src: "/images/resultados/cosmelan-1.webp", label: "Cosmelan" },
              { src: "/images/resultados/ojeras-1.webp", label: "HA · Under-eyes" },
            ].map((item, i) => (
              <Link
                key={i}
                href="/en/results"
                className="group"
                style={{
                  display: "block",
                  position: "relative",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 0.4s ease",
                  }}
                  className="group-hover:scale-105"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: "0.75rem",
                    left: "0.75rem",
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM ── */}
      <section data-reveal className="section-padding" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="container-custom">
          {/* Encabezado */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem", marginBottom: "0.75rem" }}>
              <svg style={{ width: "18px", height: "18px", color: "var(--color-primary)" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="eyebrow" style={{ margin: 0 }}>Instagram</span>
            </div>
            <a
              href="https://www.instagram.com/alejandratellezdermatologa/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 300,
                color: "var(--color-text)",
                textDecoration: "none",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              @alejandratellezdermatologa
            </a>
            <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
              Dermatology tips, procedures and real results
            </p>
          </div>

          {/* Grid de fotos */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "4px",
              marginBottom: "2.5rem",
            }}
          >
            {[
              { src: "/images/dra-alejandra-tellez.webp", alt: "Dr. Alejandra Téllez" },
              { src: "/images/servicios/toxina-botulinica.webp", alt: "Botulinum Toxin" },
              { src: "/images/servicios/peeling-quimico.webp", alt: "Chemical Peel" },
              { src: "/images/servicios/acne.webp", alt: "Acne treatment" },
              { src: "/images/servicios/alopecia.webp", alt: "Trichology" },
              { src: "/images/servicios/depilacion-laser.webp", alt: "Laser Hair Removal" },
            ].map((post, i) => (
              <a
                key={i}
                href="https://www.instagram.com/alejandratellezdermatologa/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                style={{
                  display: "block",
                  position: "relative",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 33vw, 33vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                    transition: "transform 0.4s ease",
                  }}
                  className="group-hover:scale-105"
                />
                {/* Overlay Instagram */}
                <div
                  className="group-hover:opacity-100"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(131,58,180,0.55) 0%, rgba(193,53,132,0.55) 50%, rgba(253,29,29,0.3) 100%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg style={{ width: "28px", height: "28px", color: "white" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center" }}>
            <a
              href="https://www.instagram.com/alejandratellezdermatologa/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "0.875rem 2rem",
                border: "1px solid var(--color-border)",
                borderRadius: "2px",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-text)",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              <svg style={{ width: "14px", height: "14px" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── TIKTOK ── */}
      <section data-reveal className="section-padding" style={{ backgroundColor: "var(--color-accent)" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Texto */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <svg style={{ width: "22px", height: "22px", color: "white", flexShrink: 0 }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.07 8.07 0 004.72 1.52v-3.4a4.85 4.85 0 01-1-.12z" />
                </svg>
                <span style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>TikTok</span>
              </div>

              <a
                href="https://www.tiktok.com/@alejatellezdermatologa"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                  fontWeight: 300,
                  color: "white",
                  textDecoration: "none",
                  display: "block",
                  lineHeight: 1.15,
                  marginBottom: "1.5rem",
                }}
              >
                @alejatellezdermatologa
              </a>

              <div style={{ width: "32px", height: "1px", backgroundColor: "var(--color-gold)", marginBottom: "1.5rem" }} />

              <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "420px" }}>
                Dermatology in short form: myths and facts, skincare routines, in-office procedures and the advice your skin needs.
              </p>

              {/* Tags de contenido */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
                {["#Skincare", "#Botox", "#Acne", "#DarkSpots", "#HairLoss"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      color: "rgba(255,255,255,0.5)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "2px",
                      padding: "0.3rem 0.75rem",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="https://www.tiktok.com/@alejatellezdermatologa"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.625rem",
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
                <svg style={{ width: "14px", height: "14px", flexShrink: 0 }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.07 8.07 0 004.72 1.52v-3.4a4.85 4.85 0 01-1-.12z" />
                </svg>
                Follow on TikTok
              </a>
            </div>

            {/* Stats + quote */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.08)" }}>
              {[
                { value: "Skincare", label: "Routines and products with medical backing" },
                { value: "Procedures", label: "Behind the scenes at the office" },
                { value: "Myths", label: "What really works (and what doesn't)" },
                { value: "W Radio · RCN", label: "Expert guest in national media" },
              ].map((item) => (
                <div
                  key={item.value}
                  style={{
                    padding: "1.75rem 2rem",
                    background: "rgba(255,255,255,0.04)",
                    borderLeft: "2px solid var(--color-gold)",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.125rem", fontWeight: 500, color: "white", marginBottom: "0.25rem" }}>
                    {item.value}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── UBICACIÓN ── */}
      <section data-reveal className="section-padding" style={{ backgroundColor: "var(--color-primary-50)" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Info */}
            <div>
              <span className="eyebrow">Where to find us</span>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                  fontWeight: 300,
                  color: "var(--color-text)",
                  lineHeight: 1.15,
                  marginTop: "0.625rem",
                  marginBottom: "1.5rem",
                }}
              >
                Our office in
                <br />
                <em>Bogotá</em>
              </h2>
              <div
                style={{
                  width: "48px",
                  height: "1px",
                  backgroundColor: "var(--color-gold)",
                  marginBottom: "2rem",
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* Address */}
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "var(--color-primary-100)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg style={{ width: "15px", height: "15px", color: "var(--color-primary)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "0.25rem" }}>
                      Address
                    </div>
                    <address style={{ fontStyle: "normal", fontSize: "0.9375rem", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                      Avenida Carrera 19 #97-31, Office 606
                      <br />
                      Bogotá, Colombia
                    </address>
                  </div>
                </div>

                {/* Hours */}
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "var(--color-primary-100)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg style={{ width: "15px", height: "15px", color: "var(--color-primary)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "0.25rem" }}>
                      Hours
                    </div>
                    <div style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                      Monday to Friday: 8:00 am – 6:00 pm
                      <br />
                      Saturdays: 8:00 am – 1:00 pm
                    </div>
                  </div>
                </div>

                {/* Contacto */}
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "var(--color-primary-100)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg style={{ width: "15px", height: "15px", color: "var(--color-primary)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-gold)", marginBottom: "0.25rem" }}>
                      Phone
                    </div>
                    <div style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                      <a href="tel:+573147444537" style={{ color: "inherit", textDecoration: "none" }}>+57 314 744 4537</a>
                      <br />
                      <a href="tel:+573008551145" style={{ color: "inherit", textDecoration: "none" }}>+57 300 855 1145</a>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Avenida+Carrera+19+%2397-31%2C+Consultorio+606%2C+Bogot%C3%A1%2C+Colombia"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "2.5rem",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--color-text)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--color-gold)",
                  paddingBottom: "3px",
                }}
              >
                Get directions <span>→</span>
              </a>
            </div>

            {/* Mapa */}
            <div
              style={{
                borderRadius: "2px",
                overflow: "hidden",
                border: "1px solid var(--color-border)",
                height: "420px",
              }}
            >
              <MapEmbed
                query="Avenida Carrera 19 #97-31, Consultorio 606, Bogotá, Colombia"
                title="Dr. Alejandra Téllez's office location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section data-reveal className="section-padding" style={{ backgroundColor: "var(--color-background)" }}>
        <div className="container-custom" style={{ maxWidth: "720px" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="eyebrow">Frequently asked questions</span>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                fontWeight: 300,
                color: "var(--color-text)",
                marginTop: "0.625rem",
              }}
            >
              Have questions?
            </h2>
          </div>

          <div>
            {faqItems.map((faq, i) => (
              <details key={i} style={{ borderTop: "1px solid var(--color-border)" }}>
                <summary
                  style={{
                    cursor: "pointer",
                    padding: "1.375rem 0",
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.125rem",
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
                  <span
                    style={{
                      flexShrink: 0,
                      width: "22px",
                      height: "22px",
                      border: "1px solid var(--color-primary)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1rem",
                      color: "var(--color-primary)",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </summary>
                <div
                  style={{
                    paddingBottom: "1.5rem",
                    fontSize: "0.9375rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.75,
                  }}
                >
                  {faq.a}
                </div>
              </details>
            ))}
            <div style={{ borderTop: "1px solid var(--color-border)" }} />
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      {recentPosts.length > 0 && (
        <section data-reveal className="section-padding" style={{ backgroundColor: "var(--color-surface)" }}>
          <div className="container-custom">
            <div
              className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
              style={{ marginBottom: "3.5rem" }}
            >
              <div>
                <span className="eyebrow">Education</span>
                <h2
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(1.875rem, 4vw, 3rem)",
                    fontWeight: 300,
                    color: "var(--color-text)",
                    lineHeight: 1.1,
                    marginTop: "0.625rem",
                    margin: "0.625rem 0 0",
                  }}
                >
                  From the Blog
                </h2>
              </div>
              <Link
                href="/en/blog"
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-primary)",
                  textDecoration: "none",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                }}
              >
                View all articles →
              </Link>
            </div>

            <div>
              {recentPosts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/en/blog/${post.slug}`}
                  className="group"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.25rem",
                    padding: "1.75rem 0",
                    borderTop: "1px solid var(--color-border)",
                    textDecoration: "none",
                  }}
                >
                  {/* Número */}
                  <span
                    style={{
                      fontSize: "0.65rem",
                      color: "var(--color-text-muted)",
                      letterSpacing: "0.1em",
                      fontFamily: "var(--font-body)",
                      minWidth: "2rem",
                      flexShrink: 0,
                      paddingTop: "4px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Contenido */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.375rem" }}>
                      <span
                        style={{
                          fontSize: "0.58rem",
                          fontWeight: 500,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--color-gold)",
                        }}
                      >
                        {blogCategoryLabel(post.category, "en")}
                      </span>
                      <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
                        {formatDate(post.date, "en")}
                      </span>
                      <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
                        · {post.readingTime} min
                      </span>
                    </div>
                    <h3
                      className="group-hover:text-[var(--color-primary)]"
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1.375rem",
                        fontWeight: 500,
                        color: "var(--color-text)",
                        lineHeight: 1.2,
                        marginBottom: "0.375rem",
                        transition: "color 0.15s",
                      }}
                    >
                      {post.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text-muted)",
                        lineHeight: 1.65,
                      }}
                    >
                      {post.description}
                    </p>
                  </div>

                  {/* Flecha */}
                  <span
                    className="group-hover:translate-x-1"
                    style={{
                      color: "var(--color-primary)",
                      fontSize: "1.125rem",
                      flexShrink: 0,
                      transition: "transform 0.15s",
                      paddingTop: "2px",
                    }}
                  >
                    →
                  </span>
                </Link>
              ))}
              <div style={{ borderBottom: "1px solid var(--color-border)" }} />
            </div>
          </div>
        </section>
      )}

    </>
  );
}
