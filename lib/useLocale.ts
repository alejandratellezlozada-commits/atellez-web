"use client";

import { usePathname } from "next/navigation";
import { localeFromPath, type Locale } from "./i18n";

/** Current site language, derived from the URL ("/en/..." → English). */
export function useLocale(): Locale {
  return localeFromPath(usePathname());
}
