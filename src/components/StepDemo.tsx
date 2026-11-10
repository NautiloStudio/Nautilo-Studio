import { Check, MagnifyingGlass, Sparkle } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n/dictionaries/en";

type Copy = { t: Dictionary["demo"] };

// Small looping product scenes for the "How we work" steps. All numbers are examples.
function Tag({ label }: { label: string }) {
  return (
    <span className="absolute right-3 top-3 rounded-full bg-offwhite px-2.5 py-0.5 text-xs font-medium text-slate">
      {label}
    </span>
  );
}

function Analyse({ t }: Copy) {
  return (
    <div className="relative rounded-[1.5rem] bg-offwhite p-5">
      <Tag label={t.tag} />
      <p className="text-xs text-slate">{t.thisWeek}</p>
      <div className="mt-2 grid grid-cols-3 gap-3">
        {t.metrics.map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-white p-3">
            <p className="text-xs text-slate">{label}</p>
            <p className="font-display text-lg font-semibold">{value}</p>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 300 80" className="mt-3 w-full" aria-hidden>
        <polyline
          className="demo-draw"
          points="0,66 40,62 80,68 120,52 160,40 200,30 240,22 296,12"
          fill="none"
          stroke="var(--color-royal)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={100}
        />
      </svg>
    </div>
  );
}

function Optimise({ t }: Copy) {
  return (
    <div className="relative rounded-[1.5rem] bg-offwhite p-5">
      <Tag label={t.tag} />
      <div className="relative inline-grid grid-cols-2 rounded-full bg-white p-1 text-xs font-semibold">
        <span aria-hidden className="demo-pill absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-royal" />
        <span className="demo-before relative px-4 py-1">{t.before}</span>
        <span className="demo-after relative px-4 py-1">{t.after}</span>
      </div>
      <div className="mt-3 grid">
        <div className="demo-layer-a [grid-area:1/1] rounded-2xl bg-white p-4">
          <p className="text-sm font-semibold leading-snug">
            {t.beforeTitle}
          </p>
          <p className="mt-2 text-xs text-slate">{t.beforeText}</p>
        </div>
        <div className="demo-layer-b [grid-area:1/1] rounded-2xl bg-white p-4 ring-2 ring-royal">
          <p className="text-sm font-semibold leading-snug">
            {t.afterTitle}
          </p>
          <p className="mt-2 text-xs text-slate">{t.afterText}</p>
        </div>
      </div>
    </div>
  );
}

function Automate({ t }: Copy) {
  return (
    <div className="relative rounded-[1.5rem] bg-offwhite p-5">
      <Tag label={t.tag} />
      <p className="flex items-center gap-2 font-display text-sm font-semibold">
        <Sparkle size={16} weight="fill" className="text-royal" aria-hidden />
        {t.summary}
      </p>
      <ul className="m-0 mt-3 list-none space-y-1.5 p-0 text-sm text-slate">
        <li className="demo-l1">{t.summaryLines[0]}</li>
        <li className="demo-l2">{t.summaryLines[1]}</li>
        <li className="demo-l3">{t.summaryLines[2]}</li>
      </ul>
      <div className="mt-4 flex gap-2 text-xs font-semibold">
        <span className="demo-approve flex flex-1 items-center justify-center gap-1.5 rounded-full bg-cyan px-3 py-2 text-graphite">
          <Check size={14} weight="bold" aria-hidden />
          {t.approve}
        </span>
        <span className="flex flex-1 items-center justify-center rounded-full bg-white px-3 py-2 ring-1 ring-sand">
          {t.edit}
        </span>
      </div>
    </div>
  );
}

function Search({ t }: Copy) {
  const others = [t.otherBrand, t.otherBrand, t.otherBrand];
  return (
    <div className="relative rounded-[1.5rem] bg-offwhite p-5">
      <Tag label={t.tag} />
      <p className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-slate">
        <MagnifyingGlass size={16} weight="bold" aria-hidden />
        {t.search}
      </p>
      <div className="relative mt-3 h-[10.5rem]">
        {others.map((label, index) => (
          <div
            key={index}
            className="demo-down absolute inset-x-0 flex h-9 items-center gap-3 rounded-xl bg-white px-3 text-sm text-slate"
            style={{ top: `${index * 2.625}rem` }}
          >
            <span className="h-6 w-6 rounded-md bg-sand" aria-hidden />
            {label}
          </div>
        ))}
        <div
          className="demo-up absolute inset-x-0 flex h-9 items-center gap-3 rounded-xl bg-white px-3 text-sm font-semibold ring-2 ring-royal"
          style={{ top: "7.875rem" }}
        >
          <span className="h-6 w-6 rounded-md bg-royal" aria-hidden />
          <span className="flex-1">{t.yourProduct}</span>
          <span className="rounded-full bg-royal px-2 py-0.5 text-xs text-offwhite">{t.topResult}</span>
        </div>
      </div>
    </div>
  );
}

export type DemoKind = "search" | "analyse" | "optimise" | "automate";

export default function StepDemo({ kind, t }: { kind: DemoKind } & Copy) {
  if (kind === "search") return <Search t={t} />;
  if (kind === "analyse") return <Analyse t={t} />;
  if (kind === "optimise") return <Optimise t={t} />;
  return <Automate t={t} />;
}
