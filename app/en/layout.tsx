import type { Metadata } from "next";

// English section of the site (/en/...). Header, footer and other shared
// components pick their language from the URL; this layout only overrides
// the default metadata inherited from app/layout.tsx.
// Note: <html lang> is set to "en" for these pages by scripts/set-html-lang.mjs
// after the static export (the root layout can't know the route).
export const metadata: Metadata = {
  title: {
    default: "Dr. Alejandra Téllez — Dermatologist in Bogotá, Colombia",
    template: "%s | Dr. Alejandra Téllez — Dermatologist in Bogotá",
  },
  description:
    "Clinical and aesthetic dermatologist in Bogotá, Colombia, with over 8 years of experience. Specialist in acne, hair loss, Botox, CO2 laser and aesthetic treatments. English-speaking care. Book on Doctoralia.",
  keywords: [
    "dermatologist bogota",
    "english speaking dermatologist bogota",
    "aesthetic dermatology bogota",
    "acne treatment bogota",
    "botox bogota",
    "co2 laser bogota",
    "hair loss treatment bogota",
    "alejandra tellez dermatologist",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_CO"],
    url: "https://alejandratellezderma.com/en",
    siteName: "Dr. Alejandra Téllez — Dermatologist",
    title: "Dr. Alejandra Téllez — Dermatologist in Bogotá",
    description:
      "Clinical and aesthetic dermatology specialist. Botox, laser, acne, hair loss and more. 531 five-star reviews on Doctoralia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Alejandra Téllez — Dermatologist in Bogotá",
    description: "Clinical and aesthetic dermatology specialist in Bogotá, Colombia. Book your appointment.",
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return children;
}
