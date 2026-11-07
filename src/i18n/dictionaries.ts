import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  es: () => import("./dictionaries/es").then((m) => m.default),
  fr: () => import("./dictionaries/fr").then((m) => m.default),
  de: () => import("./dictionaries/de").then((m) => m.default),
  it: () => import("./dictionaries/it").then((m) => m.default),
};

export const getDictionary = (lang: Locale) => dictionaries[lang]();
