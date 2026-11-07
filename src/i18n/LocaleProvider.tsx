"use client";

import { createContext, useContext, type ReactNode } from "react";
import { localePath, type Locale } from "./config";
import type { CommonDictionary } from "./dictionaries/en";

type Value = { lang: Locale; t: CommonDictionary };

const LocaleContext = createContext<Value | null>(null);

// Gives client components the current language and the shared copy (menu, forms, gallery, team).
export function LocaleProvider({ lang, t, children }: Value & { children: ReactNode }) {
  return <LocaleContext.Provider value={{ lang, t }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used inside LocaleProvider");
  return { ...value, href: (path: string) => localePath(value.lang, path) };
}
