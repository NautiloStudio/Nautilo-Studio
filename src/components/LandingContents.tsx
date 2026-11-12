"use client";

import { useEffect, useRef, useState } from "react";

// The section list beside a landing page's text on wide screens. It stays in view while you read
// and marks the section you are in. Without JavaScript it is still a plain list of links.
type ContentsItem = { id: string; heading: string };

// Which section the reader is in: a section counts as current once its top passes the upper third of the screen.
function useActiveSection(items: ContentsItem[]) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return active;
}

// The numbered list with the rail that marks the current section; shared by both layouts.
function ContentsList({ items, active, onPick }: { items: ContentsItem[]; active?: string; onPick?: () => void }) {
  return (
    <ol className="m-0 list-none space-y-1 border-l-2 border-sand p-0">
      {items.map((item, index) => {
        const current = item.id === active;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onPick}
              aria-current={current ? "location" : undefined}
              className={`-ml-0.5 flex gap-3 border-l-2 py-2 pl-4 text-sm leading-snug transition-colors duration-200 ${
                current ? "border-royal font-semibold text-graphite" : "border-transparent text-slate hover:text-graphite"
              }`}
            >
              <span className={`font-display tabular-nums ${current ? "text-royal" : "text-slate/70"}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item.heading}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

export default function LandingContents({ label, items }: { label: string; items: ContentsItem[] }) {
  const active = useActiveSection(items);

  return (
    <nav aria-labelledby="landing-contents" className="hidden lg:block">
      <div className="sticky top-32">
        <p id="landing-contents" className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-slate">
          {label}
        </p>
        <div className="mt-5">
          <ContentsList items={items} active={active} />
        </div>
      </div>
    </nav>
  );
}

// Phones and tablets: the same list folded into a bar that stays under the top bar while you read.
// It shows the section you are in and a progress line; tap it to open the list and jump.
export function MobileContents({ label, items }: { label: string; items: ContentsItem[] }) {
  const active = useActiveSection(items);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const index = Math.max(0, items.findIndex((item) => item.id === active));
  const current = items[index];

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav ref={ref} aria-label={label} className="sticky top-[5.25rem] z-10 mt-10 lg:hidden">
      <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_16px_40px_-20px_rgba(22,25,31,0.35)] ring-1 ring-sand">
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-contents-list"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center gap-3 px-5 pb-2.5 pt-3 text-left"
        >
          <span className="font-display text-sm font-semibold tabular-nums text-royal">
            {String(index + 1).padStart(2, "0")}
            <span className="text-slate/60">/{String(items.length).padStart(2, "0")}</span>
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-display text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate">{label}</span>
            <span className="block truncate text-sm font-semibold text-graphite">{current?.heading}</span>
          </span>
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            className={`h-4 w-4 shrink-0 text-slate transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            <path d="M3.5 6l4.5 4.5L12.5 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="mx-5 mb-3 h-1 overflow-hidden rounded-full bg-sand">
          <div
            className="h-full rounded-full bg-royal transition-[width] duration-300"
            style={{ width: `${((index + 1) / items.length) * 100}%` }}
          />
        </div>
        <div id="mobile-contents-list" hidden={!open} className="max-h-[60vh] overflow-y-auto border-t border-sand px-5 pb-4 pt-3">
          <ContentsList items={items} active={active} onPick={() => setOpen(false)} />
        </div>
      </div>
    </nav>
  );
}
