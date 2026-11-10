// Bilingual routing helpers.
// Spanish lives at the site root ("/perfil/"), English under "/en/" with
// English section names ("/en/about/"). Item slugs (services, blog posts,
// news) are shared between both languages.

export type Locale = "es" | "en";

export const BASE_URL = "https://alejandratellezderma.com";

// Spanish section → English section
export const sectionEsToEn: Record<string, string> = {
  perfil: "about",
  servicios: "services",
  resultados: "results",
  cuidados: "care",
  blog: "blog",
  noticias: "news",
  contacto: "contact",
  "politica-de-privacidad": "privacy-policy",
};

const sectionEnToEs: Record<string, string> = Object.fromEntries(
  Object.entries(sectionEsToEn).map(([es, en]) => [en, es])
);

export function localeFromPath(pathname: string | null | undefined): Locale {
  if (!pathname) return "es";
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

function splitPath(pathname: string): string[] {
  return pathname.split("/").filter(Boolean);
}

/** Converts a Spanish path ("/servicios/acne") to its English counterpart ("/en/services/acne"). */
export function esPathToEn(esPath: string): string {
  const parts = splitPath(esPath);
  if (parts.length === 0) return "/en/";
  const [section, ...rest] = parts;
  const enSection = sectionEsToEn[section] ?? section;
  return "/" + ["en", enSection, ...rest].join("/") + "/";
}

/** Converts an English path ("/en/services/acne") to its Spanish counterpart ("/servicios/acne"). */
export function enPathToEs(enPath: string): string {
  const parts = splitPath(enPath);
  if (parts[0] === "en") parts.shift();
  if (parts.length === 0) return "/";
  const [section, ...rest] = parts;
  const esSection = sectionEnToEs[section] ?? section;
  return "/" + [esSection, ...rest].join("/") + "/";
}

/** Path of the same page in the other language. */
export function alternatePath(pathname: string): string {
  return localeFromPath(pathname) === "en" ? enPathToEs(pathname) : esPathToEn(pathname);
}

/** Localizes a Spanish internal href for the given locale. */
export function localizeHref(esHref: string, locale: Locale): string {
  return locale === "en" ? esPathToEn(esHref) : esHref;
}

/** `alternates` metadata (canonical + hreflang) for a page, given its Spanish path. */
export function alternatesFor(esPath: string, locale: Locale) {
  const es = BASE_URL + (esPath === "/" ? "" : esPath.replace(/\/$/, ""));
  const en = BASE_URL + esPathToEn(esPath).replace(/\/$/, "");
  return {
    canonical: locale === "en" ? en : es,
    languages: { "es-CO": es, en, "x-default": es },
  };
}

export const blogCategoryLabels: Record<Locale, Record<string, string>> = {
  es: {
    acne: "Acné",
    alopecia: "Alopecia",
    estetica: "Estética",
    laser: "Láser",
    consejos: "Consejos",
    general: "General",
  },
  en: {
    acne: "Acne",
    alopecia: "Hair loss",
    estetica: "Aesthetics",
    laser: "Laser",
    consejos: "Tips",
    general: "General",
  },
};

export function blogCategoryLabel(category: string, locale: Locale): string {
  return blogCategoryLabels[locale][category] ?? category;
}
