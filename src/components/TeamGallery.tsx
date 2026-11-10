"use client";

import { useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, LinkedinLogo, Plus } from "@phosphor-icons/react/dist/ssr";
import NautilusLoader from "@/components/NautilusLoader";
import { team as people, type TeamMember } from "@/lib/team";
import { useLocale } from "@/i18n/LocaleProvider";

const pad = (n: number) => String(n).padStart(2, "0");

// The tile colour as a CSS colour, for the duotone wash over closed portraits.
const tileColour: Record<string, string> = {
  "bg-cyan": "var(--color-cyan)",
  "bg-apricot": "var(--color-apricot)",
  "bg-royal": "var(--color-royal)",
  "bg-graphite": "var(--color-graphite)",
};

function Portrait({ member, open, sizes }: { member: TeamMember; open: boolean; sizes: string }) {
  const focus = member.frame ?? { position: "50% 30%", zoom: 1 };
  return (
    <>
      {member.photo ? (
        <Image
          src={member.photo}
          alt=""
          fill
          sizes={sizes}
          quality={90}
          className="team-photo object-cover"
          style={
            {
              objectPosition: focus.position,
              transformOrigin: focus.position,
              "--zoom": focus.zoom,
            } as React.CSSProperties
          }
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center font-display text-6xl font-bold">
          {member.name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </span>
      )}
      {/* Closed portraits share one look: the photo washed in the person's service colour.
          Opening a profile fades the wash out, so the colour "charges" like the nautilus. */}
      <span
        aria-hidden
        className={`team-wash pointer-events-none absolute inset-0 ${open ? "opacity-0" : "opacity-100"}`}
        style={{ backgroundColor: tileColour[member.tile] ?? "var(--color-royal)" }}
      />
    </>
  );
}

// One person open at a time; the others stay as portrait strips you can open.
// Wide screens: a row that widens the open card. Phones: a list that unfolds the open card.
export default function TeamGallery() {
  const { t, href } = useLocale();
  const team: TeamMember[] = people.map((person) => {
    const copy = t.team.members[person.name as keyof typeof t.team.members];
    if (!copy) return person;
    return {
      ...person,
      role: copy.role,
      summary: copy.summary,
      focus: [...copy.focus],
      guide: { href: person.guide.href, label: copy.guide },
    };
  });
  const [open, setOpen] = useState(0);
  const total = team.length;

  const go = (index: number) => setOpen((index + total) % total);

  // Left and right arrows move between people anywhere inside the gallery.
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    go(open + (event.key === "ArrowRight" ? 1 : -1));
  };

  return (
    <div role="region" aria-label={t.team.label} onKeyDown={onKeyDown}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="m-0 text-slate">{t.team.hint}</p>
        <div className="flex items-center gap-4">
          <p className="m-0 font-display text-sm font-semibold tabular-nums text-slate" aria-live="polite">
            <span className="text-graphite">{pad(open + 1)}</span> / {pad(total)}
            <span className="sr-only">: {team[open].name}</span>
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(open - 1)}
              aria-label={t.team.previous}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white ring-1 ring-sand transition-[box-shadow,transform] duration-150 hover:ring-royal active:scale-95"
            >
              <ArrowLeft size={18} weight="bold" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go(open + 1)}
              aria-label={t.team.next}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-royal text-offwhite transition-transform duration-150 active:scale-95"
            >
              <ArrowRight size={18} weight="bold" aria-hidden />
            </button>
          </div>
        </div>
      </div>

      <ul aria-label={t.team.scroll} className="m-0 mt-6 flex list-none flex-col gap-3 p-0 lg:h-[36rem] lg:flex-row">
        {team.map((member, index) => {
          const isOpen = index === open;
          return (
            <li
              key={member.name}
              data-open={isOpen || undefined}
              className={`team-panel group relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-sand lg:min-w-0 ${
                isOpen
                  ? "lg:flex-[5] shadow-[0_30px_80px_-40px_rgba(28,47,214,0.45)]"
                  : `lg:flex-[1] lg:hover:flex-[1.3] ${member.tile}`
              }`}
            >
              {/* Portrait: a thumbnail on phones, the whole strip or the left part of the card on wide screens */}
              <div
                className={`team-portrait absolute overflow-hidden ${member.tile} ${
                  isOpen
                    ? "inset-x-0 top-0 h-80 lg:inset-y-0 lg:left-0 lg:right-auto lg:h-auto lg:w-[44%]"
                    : "inset-y-0 left-0 w-24 lg:w-full"
                }`}
              >
                <Portrait
                  member={member}
                  open={isOpen}
                  sizes={isOpen ? "(min-width: 1024px) 30vw, 100vw" : "(min-width: 1024px) 15vw, 96px"}
                />
                {isOpen && (
                  <span className="team-badge absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-offwhite/90 shadow-sm">
                    <NautilusLoader progress={1} className="h-8 w-8" />
                  </span>
                )}
              </div>

              {isOpen ? (
                <div className="team-details relative pt-80 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[56%] lg:pt-0">
                  <div className="flex h-full flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-royal">
                      {member.role}
                    </p>
                    <h3 className="mt-2 font-display text-[clamp(1.9rem,3.2vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.025em]">
                      {member.name}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-slate">{member.summary}</p>
                    <ul className="m-0 mt-5 flex list-none flex-wrap gap-2 p-0">
                      {member.focus.map((item) => (
                        <li key={item} className="rounded-full bg-offwhite px-3 py-1.5 text-sm font-medium">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <Link
                        href={href(member.guide.href)}
                        className="group/link inline-flex items-center gap-2 rounded-full bg-royal py-2 pl-5 pr-2 font-display font-semibold text-offwhite transition-transform duration-150 active:scale-[0.97]"
                      >
                        {member.guide.label}
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-(--ease-out-strong) group-hover/link:-translate-y-px group-hover/link:translate-x-0.5">
                          <ArrowUpRight size={16} weight="bold" aria-hidden />
                        </span>
                      </Link>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-display font-semibold text-graphite underline decoration-sand decoration-2 underline-offset-8 transition-colors hover:decoration-royal"
                      >
                        <LinkedinLogo size={18} weight="fill" aria-hidden className="text-royal" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setOpen(index)}
                  aria-expanded={false}
                  className="relative flex h-24 w-full items-center gap-4 pl-28 pr-5 text-left lg:absolute lg:inset-0 lg:h-auto lg:items-end lg:p-5"
                >
                  {/* Darkens the bottom of the strip so the name stays readable on any photo */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-graphite/75 via-graphite/10 to-transparent lg:block"
                  />
                  <span className="relative min-w-0 flex-1 lg:flex lg:flex-col lg:items-start lg:gap-3">
                    <span className="hidden font-display text-xs font-semibold tabular-nums text-offwhite/80 lg:block">
                      {pad(index + 1)}
                    </span>
                    <span className="block font-display text-base font-semibold leading-tight lg:truncate lg:text-xl lg:text-offwhite lg:[writing-mode:vertical-rl] lg:rotate-180">
                      {member.name}
                    </span>
                    <span className="mt-1 line-clamp-2 text-sm leading-snug text-slate lg:hidden">{member.role}</span>
                  </span>
                  <span
                    aria-hidden
                    className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-offwhite text-graphite ring-1 ring-sand transition-transform duration-300 ease-(--ease-out-strong) group-hover:rotate-90 lg:absolute lg:right-4 lg:top-4"
                  >
                    <Plus size={16} weight="bold" />
                  </span>
                  <span className="sr-only">
                    {member.name}, {member.role}
                  </span>
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
