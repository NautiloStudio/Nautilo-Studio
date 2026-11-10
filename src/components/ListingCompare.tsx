"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLocale } from "@/i18n/LocaleProvider";

const images = {
  before: "/img/listing-before.jpg",
  after: "/img/listing-after.jpg",
};

type Key = keyof typeof images;
const keys: Key[] = ["before", "after"];

export default function ListingCompare() {
  const { t } = useLocale();
  const versions = t.listingCompare;
  const [active, setActive] = useState<Key>("before");
  const root = useRef<HTMLElement>(null);
  const touched = useRef(false);

  // Switches to "After" once, the first time the card is seen, to show the change.
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    let timer: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = setTimeout(() => {
          if (!touched.current) setActive("after");
        }, 1400);
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const choose = (key: Key) => {
    touched.current = true;
    setActive(key);
  };

  return (
    <figure ref={root} className="m-0">
      <div className="rounded-[2rem] bg-white p-5 shadow-[0_30px_80px_-30px_rgba(28,47,214,0.35)] sm:p-8">
        <div
          role="group"
          aria-label={versions.group}
          className="relative mb-5 inline-grid grid-cols-2 rounded-full bg-offwhite p-1 sm:mb-8"
        >
          <span
            aria-hidden
            className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-royal transition-transform duration-300 ease-(--ease-out-strong) ${
              active === "after" ? "translate-x-full" : ""
            }`}
          />
          {keys.map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={active === key}
              onClick={() => choose(key)}
              className={`relative min-h-11 rounded-full px-7 font-display text-sm font-semibold transition-colors duration-200 ${
                active === key ? "text-offwhite" : "text-slate"
              }`}
            >
              {versions[key].label}
            </button>
          ))}
        </div>

        <div className="grid">
          {keys.map((key) => {
            const version = versions[key];
            const shown = active === key;
            return (
              <div
                key={key}
                aria-hidden={!shown}
                className={`grid gap-5 transition-[opacity,filter] duration-300 ease-out [grid-area:1/1] sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-10 ${
                  shown ? "opacity-100" : "pointer-events-none opacity-0 blur-[2px]"
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-square">
                  <Image
                    src={images[key]}
                    alt={version.alt}
                    fill
                    sizes="(min-width: 640px) 380px, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 sm:self-center">
                  <p className="font-display text-lg font-semibold leading-snug sm:text-2xl">
                    {version.title}
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate sm:text-base">
                    {version.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm text-slate">
        {versions.caption}
      </figcaption>
    </figure>
  );
}
