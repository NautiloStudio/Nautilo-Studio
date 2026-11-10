"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { withCounts } from "./withCounts";
import { useLocale } from "@/i18n/LocaleProvider";

const guides = [
  {
    slug: "amazon-seo",
    image: "/img/service-ads.jpg",
    tile: "bg-cyan",
  },
  {
    slug: "listing-optimization",
    image: "/img/service-listing.jpg",
    tile: "bg-apricot",
  },
  {
    slug: "data-analysis",
    image: "/img/service-data.jpg",
    tile: "bg-royal",
  },
  {
    slug: "ai-automation",
    image: "/img/service-ai.jpg",
    tile: "bg-graphite",
  },
] as const;

// One guide is open at a time; the others stay as narrow photo strips you can click to open.
type Props = { exclude?: string; heading?: ReactNode; intro?: string; id?: string };

export default function GuideGallery({ exclude, heading, intro, id = "guides" }: Props) {
  const [open, setOpen] = useState(0);
  const { t, href } = useLocale();
  const shown = guides
    .filter((guide) => guide.slug !== exclude)
    .map((guide) => ({ ...guide, ...t.guides[guide.slug] }));

  return (
    <section id={id} className="mx-auto mt-28 max-w-7xl px-4 sm:px-6 md:mt-44">
      <h2 className="reveal max-w-4xl font-display text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
        {heading ?? withCounts(t.gallery.heading)}
      </h2>
      <p className="reveal mt-5 max-w-xl text-lg leading-relaxed text-slate">
        {intro ?? t.gallery.intro}
      </p>

      <ul className="m-0 mt-12 flex list-none flex-col gap-3 p-0 md:h-[32rem] md:flex-row">
        {shown.map((guide, index) => {
          const isOpen = index === open;
          return (
            <li
              key={guide.slug}
              className={`guide-panel relative overflow-hidden rounded-[2rem] ${guide.tile} ${
                isOpen ? "h-[26rem] md:h-auto md:flex-[5]" : "h-20 md:h-auto md:flex-[1]"
              }`}
            >
              <Image
                src={guide.image}
                alt=""
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className={`object-cover transition-transform duration-700 ease-(--ease-out-strong) ${isOpen ? "scale-100" : "scale-110"}`}
              />
              <div
                className={`absolute inset-0 transition-colors duration-500 ${isOpen ? "bg-graphite/55" : "bg-graphite/35"}`}
              />

              {!isOpen && (
                <button
                  type="button"
                  onClick={() => setOpen(index)}
                  aria-expanded={false}
                  className="absolute inset-0 z-10 flex items-start p-5 text-left font-display font-semibold text-offwhite md:p-6"
                >
                  <span className="md:[writing-mode:vertical-rl] md:rotate-180">{guide.name}</span>
                </button>
              )}

              {isOpen && (
                <div className="on-dark absolute inset-0 z-10 flex flex-col justify-between p-6 text-offwhite md:p-10">
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-cyan">
                    {guide.name} · {t.gallery.tenPage}
                  </p>
                  <div className="max-w-xl">
                    <h3 className="font-display text-[clamp(1.6rem,3vw,2.6rem)] font-bold leading-[1.1] tracking-[-0.02em]">
                      {guide.title}
                    </h3>
                    <p className="mt-3 text-lg leading-relaxed text-offwhite/85">{guide.text}</p>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Link
                        href={href(`/${guide.slug}`)}
                        className="inline-flex items-center gap-2 rounded-full bg-cyan px-5 py-3 font-display font-semibold text-graphite"
                      >
                        {t.gallery.read}
                        <ArrowUpRight size={16} weight="bold" aria-hidden />
                      </Link>
                      <a
                        href={`/guides/nautilo-${guide.slug}-guide.pdf`}
                        download
                        className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-display font-semibold text-offwhite ring-1 ring-white/30"
                      >
                        {t.gallery.download}
                        {t.pdfLanguage && (
                          <span className="text-offwhite/70">({t.pdfLanguage})</span>
                        )}
                        <DownloadSimple size={16} weight="bold" aria-hidden />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
