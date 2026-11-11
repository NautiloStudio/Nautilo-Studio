import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { BlogPhoto } from "@/content/blog/types";

// Photos and small data graphics used inside blog posts. Server components, no client JavaScript.

// A photo with a one-line credit. `label` is the word for "Photo" in the post's language.
export function BlogPhotoFigure({
  photo,
  label,
  eager = false,
}: {
  photo: BlogPhoto;
  label: string;
  eager?: boolean;
}) {
  return (
    <figure className="m-0">
      <Image
        src={photo.image}
        alt={photo.alt}
        placeholder="blur"
        sizes="(min-width: 800px) 768px, 100vw"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="aspect-video w-full rounded-[2rem] object-cover"
      />
      <figcaption className="mt-3 text-sm text-slate">
        {label}:{" "}
        <a
          href={`${photo.credit.url}?utm_source=nautilo_studio&utm_medium=referral`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-royal"
        >
          {photo.credit.name}
        </a>{" "}
        /{" "}
        <a
          href="https://unsplash.com/?utm_source=nautilo_studio&utm_medium=referral"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-royal"
        >
          Unsplash
        </a>
      </figcaption>
    </figure>
  );
}

// The worked example as a picture: what the title already covers, the search terms field with
// its size in bytes, and what was left out on purpose.
export function SearchTermsFigure({
  labels,
  titleWords,
  terms,
  leftOut,
  caption,
}: {
  labels: { title: string; field: string; bytes: string; leftOut: string };
  titleWords: string[];
  terms: string;
  leftOut: string[];
  caption: string;
}) {
  const bytes = new TextEncoder().encode(terms).length;
  const chip = "rounded-full px-3 py-1 text-sm font-medium";
  return (
    <figure className="m-0 rounded-[2rem] bg-white p-6 sm:p-8">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-slate">{labels.title}</p>
      <div role="list" className="mt-3 flex flex-wrap gap-2">
        {titleWords.map((word) => (
          <span role="listitem" key={word} className={`${chip} bg-offwhite text-graphite`}>
            {word}
          </span>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border-2 border-royal p-4 sm:p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="font-display text-sm font-semibold text-royal">{labels.field}</p>
          <p className="text-sm font-semibold tabular-nums text-royal">
            {bytes} {labels.bytes}
          </p>
        </div>
        <p className="mt-2 break-words font-mono text-base leading-relaxed text-graphite">{terms}</p>
      </div>

      <p className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-slate">
        {labels.leftOut}
      </p>
      <div role="list" className="mt-3 flex flex-wrap gap-2">
        {leftOut.map((word) => (
          <span role="listitem" key={word} className={`${chip} bg-sand/60 text-slate line-through decoration-2`}>
            {word}
          </span>
        ))}
      </div>
      <figcaption className="mt-5 text-sm text-slate">{caption}</figcaption>
    </figure>
  );
}

const usd = (value: number, lang: Locale) =>
  lang === "en" ? `$${value.toFixed(2)}` : `${value.toFixed(2).replace(".", ",")} $`;

// Amazon's own example of a fee before and after the 2027 change, drawn to scale from zero.
export function FeeChangeFigure({
  lang,
  before,
  after,
  labels,
  caption,
}: {
  lang: Locale;
  before: { label: string; value: number };
  after: { label: string; value: number };
  labels: { title: string; perUnit: string };
  caption: string;
}) {
  const max = Math.max(before.value, after.value);
  const diff = after.value - before.value;
  const percent = Math.round((diff / before.value) * 100);
  const bars = [
    { ...before, tone: "bg-cyan text-graphite" },
    { ...after, tone: "bg-royal text-offwhite" },
  ];
  return (
    <figure className="m-0 rounded-[2rem] bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <p className="max-w-xs font-display text-lg font-semibold leading-snug text-graphite">{labels.title}</p>
        <p className="rounded-full bg-apricot px-4 py-1.5 font-display text-sm font-semibold text-graphite">
          +{usd(diff, lang)} {labels.perUnit} (+{percent}
          {lang === "fr" || lang === "de" ? " %" : "%"})
        </p>
      </div>
      <div className="mt-6 flex h-56 items-end gap-6 border-b-2 border-graphite px-2 sm:gap-10 sm:px-8" aria-hidden>
        {bars.map((bar) => (
          <div key={bar.label} className="flex h-full flex-1 flex-col justify-end">
            <div
              className={`flex items-start justify-center rounded-t-2xl pt-3 font-display text-lg font-bold ${bar.tone}`}
              style={{ height: `${(bar.value / max) * 100}%` }}
            >
              {usd(bar.value, lang)}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-6 px-2 pt-3 sm:gap-10 sm:px-8" aria-hidden>
        {bars.map((bar) => (
          <p key={bar.label} className="flex-1 text-center text-sm font-semibold text-slate">
            {bar.label}
          </p>
        ))}
      </div>
      <figcaption className="mt-5 text-sm text-slate">
        <span className="sr-only">
          {before.label}: {usd(before.value, lang)}. {after.label}: {usd(after.value, lang)}.{" "}
        </span>
        {caption}
      </figcaption>
    </figure>
  );
}
