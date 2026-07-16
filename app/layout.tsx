import type { Metadata } from "next";
import Image from "next/image";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import CookieBanner from "@/components/CookieBanner";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alejandratellezderma.com"),
  title: {
    default: "Dra. Alejandra Téllez — Dermatóloga en Bogotá",
    template: "%s | Dra. Alejandra Téllez — Dermatóloga en Bogotá",
  },
  description:
    "Dermatóloga clínica y estética en Bogotá con más de 8 años de experiencia. Especialista en acné, alopecia, botox, láser CO2 y tratamientos estéticos. Agenda tu cita en Doctoralia.",
  keywords: [
    "dermatóloga bogotá",
    "dermatologa bogota",
    "dermatología estética bogotá",
    "tratamiento acné bogotá",
    "botox bogotá",
    "laser CO2 bogotá",
    "alopecia tratamiento bogotá",
    "alejandra tellez dermatóloga",
  ],
  authors: [{ name: "Dra. Alejandra Téllez" }],
  creator: "Dra. Alejandra Téllez",
  publisher: "Dra. Alejandra Téllez",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://alejandratellezderma.com",
    siteName: "Dra. Alejandra Téllez — Dermatóloga",
    title: "Dra. Alejandra Téllez — Dermatóloga en Bogotá",
    description:
      "Especialista en dermatología clínica y estética. Botox, láser, acné, alopecia y más. 531 reseñas con 5 estrellas en Doctoralia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Alejandra Téllez — Dermatóloga en Bogotá",
    description:
      "Especialista en dermatología clínica y estética en Bogotá. Agenda tu cita.",
  },
  alternates: {
    canonical: "https://alejandratellezderma.com",
    languages: { "es-CO": "https://alejandratellezderma.com" },
  },
  // Reemplaza el valor cuando obtengas el código de verificación en Google Search Console
  // verification: { google: "PEGA_AQUI_TU_CODIGO_DE_VERIFICACION" },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://alejandratellezderma.com/#physician",
      name: "Dra. Alejandra Téllez",
      url: "https://alejandratellezderma.com",
      image: "https://alejandratellezderma.com/images/dra-alejandra-tellez.jpg",
      description:
        "Médica dermatóloga con más de 8 años de experiencia en Bogotá, Colombia. Especialista en dermatología clínica y estética.",
      medicalSpecialty: "Dermatology",
      hasCredential: "Médica Dermatóloga — Matrícula 1030537845",
      knowsLanguage: ["es", "en"],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Universidad de Los Andes" },
        { "@type": "CollegeOrUniversity", name: "Fundación Universitaria Sanitas" },
        { "@type": "CollegeOrUniversity", name: "Centro Dermatológico Federico Lleras Acosta" },
        { "@type": "CollegeOrUniversity", name: "Tulane University" },
        { "@type": "CollegeOrUniversity", name: "Hospital Italiano de Buenos Aires" },
        { "@type": "CollegeOrUniversity", name: "Fellowship Corea del Sur" },
      ],
      memberOf: {
        "@type": "MedicalOrganization",
        name: "Asociación Colombiana de Dermatología (AsoColDerma)",
      },
      practicesAt: {
        "@type": "MedicalClinic",
        "@id": "https://alejandratellezderma.com/#clinic",
        name: "Consultorio Dra. Alejandra Téllez",
        url: "https://alejandratellezderma.com",
        telephone: "+573147444537",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Avenida Carrera 19 97-31, Consultorio 606",
          addressLocality: "Bogotá",
          addressRegion: "Cundinamarca",
          postalCode: "110111",
          addressCountry: "CO",
        },
        sameAs: [
          "https://www.doctoralia.co/alejandra-tellez/dermatologo/bogota",
          "https://www.instagram.com/alejandratellezdermatologa/",
          "https://www.tiktok.com/@alejatellezdermatologa",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "531",
          bestRating: "5",
          worstRating: "1",
        },
      },
      sameAs: [
        "https://www.doctoralia.co/alejandra-tellez/dermatologo/bogota",
        "https://www.instagram.com/alejandratellezdermatologa/",
        "https://www.tiktok.com/@alejatellezdermatologa",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://alejandratellezderma.com/#website",
      url: "https://alejandratellezderma.com",
      name: "Dra. Alejandra Téllez — Dermatóloga en Bogotá",
      description: "Sitio web oficial de la Dra. Alejandra Téllez, dermatóloga en Bogotá",
      inLanguage: "es-CO",
      publisher: { "@id": "https://alejandratellezderma.com/#physician" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CO"
      className={`${cormorant.variable} ${workSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--color-background)]">
        <Header />
        <main className="relative flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollReveal />
        <CookieBanner />
        {/* Logo watermark — encima de todo, pointer-events none */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(480px, 58vw)",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={1920}
            height={1080}
            style={{ width: "100%", height: "auto", opacity: 0.04, display: "block" }}
          />
        </div>
      </body>
    </html>
  );
}
