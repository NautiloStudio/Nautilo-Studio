// A small map of the Amazon listing: each field, what it does, and whether it helps the product
// get found (ranking), get chosen (sales) or both. Used on the SEO and listing optimisation page.
// Built as a <dl> so the landing prose styles for lists don't apply to it.

type Effect = "found" | "chosen" | "both";

type Props = {
  caption: string;
  labels: { found: string; chosen: string };
  rows: { field: string; text: string; effect: Effect }[];
};

const pill = "inline-flex items-center rounded-full px-2.5 py-0.5 font-display text-xs font-semibold";

export default function ListingFieldMap({ caption, labels, rows }: Props) {
  return (
    <figure className="m-0 my-10 rounded-[1.5rem] bg-white p-5 ring-1 ring-sand sm:p-7">
      <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate">
        <span className="font-display font-semibold text-graphite">{caption}</span>
        <span className="flex items-center gap-2">
          <span className={`${pill} bg-cyan/25 text-graphite`}>{labels.found}</span>
          <span className={`${pill} bg-apricot/70 text-graphite`}>{labels.chosen}</span>
        </span>
      </figcaption>
      <dl className="m-0 mt-5 divide-y divide-sand">
        {rows.map((row) => (
          <div key={row.field} className="grid gap-x-6 gap-y-1.5 py-4 sm:grid-cols-[9rem_minmax(0,1fr)_auto] sm:items-baseline">
            <dt className="font-display text-base font-semibold text-graphite">{row.field}</dt>
            <dd className="m-0 text-base leading-relaxed text-slate">{row.text}</dd>
            <dd className="m-0 flex gap-1.5 sm:justify-end">
              {row.effect !== "chosen" && <span className={`${pill} bg-cyan/25 text-graphite`}>{labels.found}</span>}
              {row.effect !== "found" && <span className={`${pill} bg-apricot/70 text-graphite`}>{labels.chosen}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}
