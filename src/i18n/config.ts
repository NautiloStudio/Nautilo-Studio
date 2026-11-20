// The site's languages. English lives at the root (/services/data-analysis); the others get a prefix (/es/services/data-analysis).
export const locales = ["en", "es", "fr", "de", "it"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const SITE_URL = "https://nautilostudio.com";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
};

// Used for <html lang>, Open Graph and number formatting.
export const localeTags: Record<Locale, string> = {
  en: "en-US",
  es: "es-ES",
  fr: "fr-FR",
  de: "de-DE",
  it: "it-IT",
};

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

// "/services/data-analysis" or "/#contact" in the given language: "/es/services/data-analysis", "/es#contact".
export function localePath(lang: Locale, path: string): string {
  if (lang === defaultLocale) return path;
  if (path === "/") return `/${lang}`;
  if (path.startsWith("/#")) return `/${lang}${path.slice(1)}`;
  return `/${lang}${path}`;
}

// The same page without its language prefix: "/es/services/data-analysis" -> "/services/data-analysis".
export function stripLocale(pathname: string): string {
  const [, first, ...rest] = pathname.split("/");
  if (first && hasLocale(first)) return `/${rest.join("/")}`;
  return pathname || "/";
}

// Canonical URL plus hreflang links for every language version of a page.
export function alternates(lang: Locale, path: string) {
  const url = (l: Locale) => `${SITE_URL}${localePath(l, path) === "/" ? "" : localePath(l, path)}`;
  const languages: Record<string, string> = {};
  for (const l of locales) languages[localeTags[l]] = url(l);
  languages["x-default"] = url(defaultLocale);
  return { canonical: url(lang), languages };
}

export const pageUrl = (lang: Locale, path: string) => alternates(lang, path).canonical;
