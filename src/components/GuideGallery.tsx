"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { withCounts } from "./withCounts";
import { useLocale } from "@/i18n/LocaleProvider";

const guides = [
  {
    slug: "amazon-seo",
    image: "/img/amazon-seo-dashboard.webp",
    focus: "68% 30%", // SEO line chart, above the laptop keyboard
    tile: "bg-cyan",
  },
  {
    slug: "listing-optimization",
    image: "/img/amazon-listing-optimization.jpg",
    focus: "30% 40%", // cutting board on the listing
    tile: "bg-apricot",
  },
  {
    slug: "data-analysis",
    image: "/img/amazon-data-analysis.jpg",
    focus: "70% 30%", // KPIs and marketplace donut
    tile: "bg-royal",
  },
  {
    slug: "ai-automation",
    image: "/img/amazon-ai-automation.jpg",
    focus: "58% 32%", // AI chip and workflow icons
    tile: "bg-graphite",
  },
] as const;

// One guide is open at a time. Closed strips zoom into the screen (focus) so the device frame and
// logo fall outside the strip, and a multiplied brand gradient tints the photo blue but keeps it visible.
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
                style={{ objectPosition: guide.focus, transformOrigin: guide.focus }}
                className={`object-cover transition-transform duration-700 ease-(--ease-out-strong) ${isOpen ? "scale-100" : "scale-[1.8]"}`}
              />
              <div
                className={`absolute inset-0 bg-graphite/55 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
              />
              {/* Closed strips: a very soft brand-blue tint over the photo, so the original colours stay. */}
              <div
                className={`absolute inset-0 bg-[linear-gradient(160deg,#33d6ff_0%,#1c2fd6_48%,#0f1a7a_100%)] mix-blend-multiply transition-opacity duration-500 ${isOpen ? "opacity-0" : "opacity-35"}`}
              />
              {/* Soft shade on the label edge (top on phones, left from md) so the strip name stays readable on light screens. */}
              <div
                className={`absolute inset-0 bg-[linear-gradient(180deg,rgba(15,26,122,0.6)_0%,transparent_70%)] md:bg-[linear-gradient(90deg,rgba(15,26,122,0.6)_0%,transparent_50%)] transition-opacity duration-500 ${isOpen ? "opacity-0" : "opacity-100"}`}
              />

              {!isOpen && (
                <button
                  type="button"
                  onClick={() => setOpen(index)}
                  aria-expanded={false}
                  className="absolute inset-0 z-10 flex items-start p-5 text-left font-display font-semibold text-offwhite md:p-6"
                >
                  <span className="[text-shadow:0_1px_10px_rgba(15,26,122,0.7)] md:[writing-mode:vertical-rl] md:rotate-180">{guide.name}</span>
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
                        href={href(`/services/${guide.slug}`)}
                        className="inline-flex items-center gap-2 rounded-full bg-cyan px-5 py-3 font-display font-semibold text-graphite"
                      >
                        {t.gallery.read.replace("{name}", guide.name)}
                        <ArrowUpRight size={16} weight="bold" aria-hidden />
                      </Link>
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
