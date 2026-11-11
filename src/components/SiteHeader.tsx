"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  CaretDown,
  List,
  X,
} from "@phosphor-icons/react/dist/ssr";
import LanguageCorner from "@/components/LanguageCorner";
import TalkButton from "@/components/TalkButton";
import { landingPages } from "@/lib/landing-pages";
import { localeNames, localePath, locales, stripLocale } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";

type MenuItem = { href: string; label: string; current?: boolean };

// The top bar on every page.
// - Guide pages (pass `guide`): Home, the four service guides and the free review button.
// - Every other page: Services (a list of the guides), How we work, Blog, About us and the free review button.
export default function SiteHeader({
  onHome = false,
  guide,
  reviewHref = "#review",
}: {
  onHome?: boolean;
  guide?: string;
  reviewHref?: string;
}) {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  // Where the list starts from the bar's left edge, so it opens under the button (from 640px up).
  const [panelLeft, setPanelLeft] = useState<number | null>(null);
  const panelId = useId();
  const { lang, t, href } = useLocale();
  // The page without its language prefix, so /es/about and /about both read "/about".
  const pathname = stripLocale(usePathname());

  // Close the lists on Escape or on a click outside the bar.
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && close();
    const onClick = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  // Line the list up with the button that opened it, without letting it run past the bar's right edge.
  useLayoutEffect(() => {
    if (!open) return;
    const place = () => {
      const nav = navRef.current?.getBoundingClientRect();
      const button = toggleRef.current?.getBoundingClientRect();
      if (!nav || !button || !window.matchMedia("(min-width: 640px)").matches) {
        setPanelLeft(null);
        return;
      }
      const panelWidth = 320; // sm:w-80
      setPanelLeft(Math.max(0, Math.min(button.left - nav.left, nav.width - panelWidth)));
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [open]);

  const guides: MenuItem[] = landingPages.map((page) => ({
    href: href(`/services/${page.slug}`),
    label: t.guides[page.slug as keyof typeof t.guides]?.menu ?? page.menu,
    current: page.slug === guide,
  }));
  const how = onHome ? "#how" : href("/#how");
  // The services hub (level 2), reached from "Services" in the bar on wide screens.
  const onServices = pathname === "/services";
  const servicesHub: MenuItem = { href: href("/services"), label: t.header.allServices, current: onServices };
  const onGuide = Boolean(guide);

  // What the dropdown lists: on guide pages it is the small-screen version of the menu.
  const menuItems: MenuItem[] = onGuide
    ? [{ href: href("/"), label: t.header.home }, servicesHub, ...guides]
    : [
        servicesHub,
        ...guides,
        { href: how, label: t.header.howWeWork },
        { href: href("/blog"), label: t.header.blog, current: pathname.startsWith("/blog") },
        {
          href: href("/about"),
          label: t.header.aboutUs,
          current: pathname === "/about",
        },
      ];
  // Links that also sit in the bar, and the screen width from which they do (the list hides them there).
  const barLinks: Record<string, string> = {
    [t.header.howWeWork]: "md:hidden",
    [t.header.blog]: "sm:hidden",
    [t.header.aboutUs]: "sm:hidden",
  };

  const textLink = "whitespace-nowrap py-3 transition-colors hover:text-cyan";
  const toggle = (
    <button
      ref={toggleRef}
      type="button"
      aria-expanded={open}
      aria-controls={panelId}
      onClick={() => setOpen((value) => !value)}
      className={`flex items-center gap-1.5 py-1 transition-colors sm:py-3 hover:text-cyan ${open ? "text-cyan" : ""}`}
    >
      <span className="hidden sm:inline">
        {onGuide ? t.header.menu : t.header.services}
      </span>
      <CaretDown
        size={14}
        weight="bold"
        aria-hidden
        className={`hidden transition-transform duration-200 sm:block ${open ? "rotate-180" : ""}`}
      />
      <span
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 sm:hidden"
        aria-hidden
      >
        {open ? (
          <X size={18} weight="bold" />
        ) : (
          <List size={18} weight="bold" />
        )}
      </span>
      <span className="sr-only sm:hidden">
        {open ? t.header.closeMenu : t.header.openMenu}
      </span>
    </button>
  );

  return (
    <>
      <LanguageCorner
        className={onGuide ? "hidden xl:block" : "hidden lg:block"}
      />
      <header className="on-dark fixed inset-x-0 top-4 z-20 flex justify-center px-4">
        <nav
          ref={navRef}
          aria-label={t.header.main}
          className={`relative flex w-full items-center justify-between rounded-full bg-graphite/95 py-2 pl-4 pr-2 sm:pl-5 shadow-[0_12px_40px_-12px_rgba(22,25,31,0.5)] ring-1 ring-white/10 backdrop-blur-md ${
            onGuide ? "max-w-5xl" : "max-w-3xl"
          }`}
        >
          {/* Always leads to the top of the homepage, even when you are already on it. */}
          <Link
            href={href("/")}
            aria-label={onHome ? t.header.backToTop : t.header.homepage}
            className="relative z-10 shrink-0"
            onClick={(event) => {
              setOpen(false);
              if (pathname !== "/") return;
              event.preventDefault();
              window.history.replaceState(null, "", href("/"));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image
              src="/nautilo-wordmark-light.png"
              alt="Nautilo Studio"
              width={668}
              height={270}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <div className="flex items-center gap-3 text-sm text-offwhite/85 sm:gap-6">
            {onGuide ? (
              <>
                {/* Wide screens: every guide in the bar, with the language switch in the corner */}
                <Link
                  href={href("/")}
                  className={`hidden xl:inline ${textLink}`}
                >
                  {t.header.home}
                </Link>
                <Link href={href("/services")} className={`hidden xl:inline ${textLink}`}>
                  {t.header.services}
                </Link>
                {guides.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={`hidden xl:inline ${textLink} ${
                      item.current
                        ? "text-cyan underline decoration-2 underline-offset-8"
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                {/* Narrower screens: the same links in a list */}
                <div className="xl:hidden">{toggle}</div>
              </>
            ) : (
              <>
                <div className="md:hidden">{toggle}</div>
                <Link
                  href={href("/services")}
                  aria-current={onServices ? "page" : undefined}
                  className={`hidden md:inline ${textLink} ${
                    onServices ? "text-cyan underline decoration-2 underline-offset-8" : ""
                  }`}
                >
                  {t.header.services}
                </Link>
                <Link href={how} className={`hidden md:inline ${textLink}`}>
                  {t.header.howWeWork}
                </Link>
                <Link
                  href={href("/blog")}
                  aria-current={pathname.startsWith("/blog") ? "page" : undefined}
                  className={`hidden sm:inline ${textLink} ${
                    pathname.startsWith("/blog")
                      ? "text-cyan underline decoration-2 underline-offset-8"
                      : ""
                  }`}
                >
                  {t.header.blog}
                </Link>
                <Link
                  href={href("/about")}
                  aria-current={pathname === "/about" ? "page" : undefined}
                  className={`hidden sm:inline ${textLink} ${
                    pathname === "/about"
                      ? "text-cyan underline decoration-2 underline-offset-8"
                      : ""
                  }`}
                >
                  {t.header.aboutUs}
                </Link>
              </>
            )}
            {/* Pages with their own free review form use "#review"; the others pass a link to one. */}
            <TalkButton
              href={reviewHref}
              label={t.header.freeReview}
              tone="cyan"
              size="sm"
            />
          </div>

          {open && (
            <div
              id={panelId}
              style={panelLeft === null ? undefined : { left: panelLeft, right: "auto" }}
              className={`absolute inset-x-0 top-full mt-3 rounded-[1.75rem] bg-graphite p-2 shadow-[0_24px_60px_-20px_rgba(22,25,31,0.6)] ring-1 ring-white/10 sm:left-auto sm:w-80 ${
                onGuide ? "xl:hidden" : ""
              }`}
            >
              {!onGuide && (
                <p className="px-4 pb-1 pt-3 font-display text-xs font-semibold uppercase tracking-[0.14em] text-offwhite/60">
                  {t.header.guidesTitle}
                </p>
              )}
              <ul className="m-0 list-none p-0">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={item.current ? "page" : undefined}
                      className={`flex items-center justify-between gap-4 rounded-2xl px-4 py-3 font-display font-semibold transition-colors hover:bg-white/10 ${
                        item.current ? "text-cyan" : "text-offwhite"
                      } ${barLinks[item.label] ?? ""}`}
                    >
                      {item.label}
                      <ArrowUpRight
                        size={16}
                        weight="bold"
                        aria-hidden
                        className="text-cyan"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Where the corner language button doesn't fit beside the bar, the languages live here. */}
              <div
                className={`border-t border-white/10 px-2 pb-2 pt-3 ${onGuide ? "" : "lg:hidden"}`}
              >
                <p className="px-2 font-display text-xs font-semibold uppercase tracking-[0.14em] text-offwhite/60">
                  {t.header.language}
                </p>
                <ul className="m-0 mt-2 flex list-none flex-wrap gap-2 p-0">
                  {locales.map((code) => (
                    <li key={code}>
                      <a
                        href={localePath(code, pathname)}
                        hrefLang={code}
                        lang={code}
                        aria-current={code === lang ? "true" : undefined}
                        aria-label={localeNames[code]}
                        className={`flex h-10 min-w-11 items-center justify-center rounded-full px-3 font-display text-sm font-semibold uppercase ${
                          code === lang
                            ? "bg-cyan text-graphite"
                            : "bg-white/10 text-offwhite"
                        }`}
                      >
                        {code}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
