import {
  Baby,
  Barbell,
  Coffee,
  CookingPot,
  Heartbeat,
  House,
  PawPrint,
  Plant,
  PuzzlePiece,
  Sparkle,
  Tent,
  TShirt,
} from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/i18n/dictionaries/en";

// The kinds of US Amazon sellers we're built for. Categories, not client or partner logos.
// Same order as the category names in the dictionaries.
const icons = [
  CookingPot,
  House,
  Tent,
  Sparkle,
  PawPrint,
  Baby,
  Heartbeat,
  Barbell,
  Plant,
  PuzzlePiece,
  Coffee,
  TShirt,
];

function Row({ labels, hidden = false }: { labels: string[]; hidden?: boolean }) {
  return (
    <ul className="m-0 flex shrink-0 list-none items-center gap-3 p-0 pr-3" aria-hidden={hidden || undefined}>
      {labels.map((label, index) => {
        const Icon = icons[index];
        return (
        <li
          key={label}
          className="flex items-center gap-2.5 whitespace-nowrap rounded-full bg-white px-5 py-3 font-display font-semibold text-graphite ring-1 ring-sand"
        >
          <Icon size={20} weight="bold" className="text-royal" aria-hidden />
          {label}
        </li>
        );
      })}
    </ul>
  );
}

export default function SellerMarquee({ t }: { t: Dictionary["marquee"] }) {
  return (
    <section aria-labelledby="built-for" className="mt-20 md:mt-28">
      <p
        id="built-for"
        className="px-4 text-center font-display text-sm font-semibold uppercase tracking-[0.14em] text-slate"
      >
        {t.title}
      </p>
      <div className="marquee mt-6 flex overflow-hidden">
        <div className="marquee-track flex shrink-0">
          <Row labels={t.categories} />
          <Row labels={t.categories} hidden />
        </div>
      </div>
    </section>
  );
}
