"use client";

import { useEffect, type CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { alternatePath, localeFromPath } from "@/lib/i18n";

// ES | EN toggle shown in the header's top-right corner.
// Links to the same page in the other language.
export default function LanguageSwitcher() {
  const pathname = usePathname() ?? "/";
  const locale = localeFromPath(pathname);
  const otherHref = alternatePath(pathname);

  // Keep <html lang> in sync on client-side navigation between languages
  // (the static HTML already has the right value on first load).
  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "es-CO";
  }, [locale]);

  const pill = (code: "es" | "en", label: string, title: string) => {
    const active = locale === code;
    const style: CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "2.1rem",
      padding: "0.3rem 0.5rem",
      fontFamily: "var(--font-body)",
      fontSize: "0.68rem",
      fontWeight: 600,
      letterSpacing: "0.12em",
      textDecoration: "none",
      borderRadius: "2px",
      background: active ? "var(--color-primary)" : "transparent",
      color: active ? "white" : "var(--color-text-secondary)",
      transition: "background-color 0.15s, color 0.15s",
    };
    if (active) {
      return (
        <span style={style} aria-current="true" title={title}>
          {label}
        </span>
      );
    }
    return (
      <Link href={otherHref} hrefLang={code} lang={code} style={style} title={title}>
        {label}
      </Link>
    );
  };

  return (
    <div
      role="group"
      aria-label={locale === "en" ? "Language" : "Idioma"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "2px",
        padding: "2px",
        border: "1px solid var(--color-border)",
        borderRadius: "3px",
        background: "var(--color-surface)",
        flexShrink: 0,
      }}
    >
      {pill("es", "ES", "Español")}
      {pill("en", "EN", "English")}
    </div>
  );
}
