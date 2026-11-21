import type { ReactNode } from "react";
import {
  ArrowRight,
  ChartBar,
  ChartLineUp,
  Database,
  Eye,
  HandGrabbing,
  Lightbulb,
  LockSimple,
  MagnifyingGlass,
  Sparkle,
  Spiral,
  Storefront,
  Tag,
} from "@phosphor-icons/react/dist/ssr";
import { NAUTILUS_CHAMBERS, NAUTILUS_OUTLINE, NAUTILUS_VIEW_BOX } from "./nautilus-paths";

// "Our story" as three illustrated cards (about page and service pages). Each card opens with a
// small wordless picture, so it works in every language: the seller left alone, data + AI + hands-on
// work flowing into one listing, and the shell growing one chamber at a time. The pictures loop gently
// on their own and rest when the visitor asks for reduced motion (see .story-* in globals.css).

type Step = { heading: string; text: string };

const icons = [
  { Icon: Eye, chip: "bg-apricot text-graphite" },
  { Icon: Lightbulb, chip: "bg-cyan text-graphite" },
  { Icon: Spiral, chip: "bg-royal text-offwhite" },
];

export default function StorySteps({ steps, className = "" }: { steps: Step[]; className?: string }) {
  const pictures = [<Alone key="alone" />, <Together key="together" />, <Grow key="grow" />];

  return (
    <ol className={`m-0 grid list-none gap-5 p-0 lg:grid-cols-3 ${className}`}>
      {steps.map((step, index) => {
        const { Icon, chip } = icons[index % icons.length];
        return (
          <li
            key={step.heading}
            className="story-card group relative flex flex-col rounded-[2rem] bg-white p-3 ring-1 ring-sand shadow-[0_24px_50px_-32px_rgba(28,47,214,0.35)] md:max-lg:grid md:max-lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:max-lg:items-center"
          >
            {pictures[index % pictures.length]}
            <div className="px-3 pb-4 pt-5 sm:px-5 md:max-lg:py-3">
              <div className="flex items-center gap-3">
                <span className={`flex h-10 w-10 items-center justify-center rounded-full ${chip}`} aria-hidden>
                  <Icon size={20} weight="duotone" />
                </span>
                <span className="font-display text-sm font-semibold tabular-nums tracking-[0.14em] text-royal">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.01em]">{step.heading}</h3>
              <p className="mt-3 text-lg leading-relaxed text-slate">{step.text}</p>
            </div>
            {index < steps.length - 1 && (
              <span
                aria-hidden
                className="story-link absolute -right-7 z-10 hidden h-9 w-9 items-center justify-center rounded-full bg-offwhite text-royal shadow-[0_6px_16px_-8px_rgba(22,25,31,0.4)] ring-1 ring-sand lg:flex"
              >
                <ArrowRight size={16} weight="bold" />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}

/** A picture panel: fixed 16:7 frame, so the SVG lines and the chips placed in % line up. */
function Panel({ tone, children }: { tone: string; children: ReactNode }) {
  return (
    <div aria-hidden className={`relative aspect-[16/7] overflow-hidden rounded-[1.5rem] ${tone}`}>
      {children}
    </div>
  );
}

/** A round icon chip centred on a point given in % of the panel. */
function Chip({ x, y, size = 40, className = "", children }: { x: number; y: number; size?: number; className?: string; children: ReactNode }) {
  return (
    <span
      className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ${className}`}
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
    >
      {children}
    </span>
  );
}

// 01 What we saw: the seller's shop alone in the middle; the agency keeps the know-how (lock), the
// tools hand over data (chart). Both links stop halfway and their dashes drift away from the shop.
function Alone() {
  return (
    <Panel tone="bg-[linear-gradient(160deg,#ffe6d3,var(--color-apricot))]">
      <svg viewBox="0 0 320 140" className="absolute inset-0 h-full w-full" fill="none">
        <circle cx="160" cy="84" r="44" stroke="var(--color-graphite)" strokeOpacity="0.08" strokeWidth="1.5" strokeDasharray="2 6" />
        <path className="story-drift" d="M112 63 L64 42" stroke="var(--color-graphite)" strokeOpacity="0.45" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 6" />
        <path className="story-drift" d="M208 63 L256 42" stroke="var(--color-graphite)" strokeOpacity="0.45" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 6" />
        <circle cx="114" cy="64" r="3" fill="var(--color-graphite)" fillOpacity="0.45" />
        <circle cx="206" cy="64" r="3" fill="var(--color-graphite)" fillOpacity="0.45" />
      </svg>
      <Chip x={20} y={30} className="bg-white/80 text-royal ring-1 ring-graphite/10">
        <LockSimple size={18} weight="duotone" />
      </Chip>
      <Chip x={80} y={30} className="bg-white/80 text-royal ring-1 ring-graphite/10">
        <ChartBar size={18} weight="duotone" />
      </Chip>
      <Chip x={50} y={60} size={56} className="story-pop bg-white text-graphite shadow-[0_10px_24px_-12px_rgba(22,25,31,0.5)]">
        <Storefront size={26} weight="duotone" />
      </Chip>
    </Panel>
  );
}

// 02 Our idea: data, AI and hands-on work flow into one listing. A light keeps running down each line.
const flows = ["M62 28 C140 28 150 70 200 70", "M62 70 L200 70", "M62 112 C140 112 150 70 200 70"];

function Together() {
  return (
    <Panel tone="bg-[linear-gradient(160deg,#eefaff,#c9f1ff)]">
      <svg viewBox="0 0 320 140" className="absolute inset-0 h-full w-full" fill="none">
        {flows.map((d) => (
          <path key={d} d={d} stroke="var(--color-royal)" strokeOpacity="0.28" strokeWidth="2" strokeLinecap="round" />
        ))}
        {flows.map((d, i) => (
          <path
            key={`run-${d}`}
            d={d}
            pathLength={100}
            className="story-run"
            style={{ animationDelay: `${i * 0.25}s` }}
            stroke="var(--color-royal)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="14 86"
          />
        ))}
      </svg>
      {[Database, Sparkle, HandGrabbing].map((Icon, i) => (
        <Chip key={i} x={13.75} y={20 + i * 30} size={36} className="bg-white text-royal ring-1 ring-royal/15">
          <Icon size={17} weight="duotone" />
        </Chip>
      ))}
      {/* The one listing everything flows into */}
      <span className="story-pop absolute left-[79%] top-1/2 flex w-[30%] max-w-[7rem] -translate-x-1/2 -translate-y-1/2 flex-col gap-1.5 rounded-xl bg-white p-2 shadow-[0_12px_28px_-14px_rgba(28,47,214,0.55)]">
        <span className="flex items-center gap-1.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-cyan/40 text-royal">
            <Tag size={13} weight="duotone" />
          </span>
          <span className="h-1.5 flex-1 rounded-full bg-graphite/70" />
        </span>
        <span className="h-1.5 w-full rounded-full bg-graphite/15" />
        <span className="h-1.5 w-3/4 rounded-full bg-graphite/15" />
        <span className="flex gap-0.5 text-[#ffa41c]">
          {[0, 1, 2, 3, 4].map((s) => (
            <span key={s} className="h-1.5 w-1.5 rounded-full bg-current" />
          ))}
        </span>
      </span>
    </Panel>
  );
}

// 03 Why a nautilus: the Nautilo shell on a dark panel, with +1 listing, +1 keyword, +1 report.
// The chambers light up from the centre out, one at a time, then the +1s follow, every 4 s.
function Grow() {
  return (
    <Panel tone="bg-[radial-gradient(circle_at_30%_55%,#1f2a6b,var(--color-graphite)_70%)]">
      <svg
        viewBox={NAUTILUS_VIEW_BOX}
        className="absolute left-[6%] top-1/2 h-[86%] w-auto -translate-y-1/2 -rotate-6"
        focusable="false"
      >
        <path d={NAUTILUS_OUTLINE} fill="var(--color-offwhite)" fillOpacity="0.14" fillRule="evenodd" />
        {NAUTILUS_CHAMBERS.map((chamber, i) => (
          <path
            key={chamber.d}
            d={chamber.d}
            fill={chamber.color}
            fillRule="evenodd"
            className="story-chamber"
            style={{ animationDelay: `${i * 70}ms` }}
          />
        ))}
      </svg>
      <span className="absolute right-[6%] top-1/2 flex -translate-y-1/2 flex-col gap-1.5">
        {[Tag, MagnifyingGlass, ChartLineUp].map((Icon, i) => (
          <span
            key={i}
            className="story-plus flex items-center gap-1.5 rounded-full bg-white/10 py-0.5 pl-0.5 pr-2 font-display text-xs font-semibold text-offwhite ring-1 ring-white/15"
            style={{ animationDelay: `${0.95 + i * 0.12}s` }}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan text-graphite">
              <Icon size={11} weight="bold" />
            </span>
            +1
          </span>
        ))}
      </span>
    </Panel>
  );
}
