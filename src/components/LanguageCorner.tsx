"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CaretDown, Check, GlobeSimple } from "@phosphor-icons/react/dist/ssr";
import { localeNames, localePath, locales, stripLocale } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";

// The language switch, on its own in the top-right corner of the page, outside the menu bar.
// It sits level with the bar's buttons and scrolls away with the page; the footer repeats the links.
export default function LanguageCorner({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const { lang, t } = useLocale();
  const pathname = stripLocale(usePathname());

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    const onClick = (event: MouseEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={root} className={`on-dark absolute right-4 top-6 z-30 sm:right-6 ${className}`}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={`flex h-11 items-center gap-1.5 rounded-full bg-graphite/95 pl-3.5 pr-3 font-display text-xs font-semibold uppercase tracking-[0.08em] shadow-[0_12px_40px_-12px_rgba(22,25,31,0.5)] ring-1 ring-white/10 backdrop-blur-md transition-colors hover:text-cyan ${
          open ? "text-cyan" : "text-offwhite/85"
        }`}
      >
        <GlobeSimple size={16} weight="bold" aria-hidden />
        <span className="sr-only">{t.header.language}: </span>
        {lang}
        <CaretDown
          size={12}
          weight="bold"
          aria-hidden
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          id={panelId}
          className="absolute right-0 top-full mt-3 w-56 rounded-[1.75rem] bg-graphite p-2 shadow-[0_24px_60px_-20px_rgba(22,25,31,0.6)] ring-1 ring-white/10"
        >
          <p className="px-4 pb-1 pt-3 font-display text-xs font-semibold uppercase tracking-[0.14em] text-offwhite/60">
            {t.header.language}
          </p>
          <ul className="m-0 list-none p-0">
            {locales.map((code) => (
              <li key={code}>
                {/* A full page load, since each language has its own <html lang>. */}
                <a
                  href={localePath(code, pathname)}
                  hrefLang={code}
                  lang={code}
                  aria-current={code === lang ? "true" : undefined}
                  className={`flex items-center justify-between gap-4 rounded-2xl px-4 py-3 font-display font-semibold transition-colors hover:bg-white/10 ${
                    code === lang ? "text-cyan" : "text-offwhite"
                  }`}
                >
                  {localeNames[code]}
                  {code === lang && <Check size={16} weight="bold" aria-hidden />}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
