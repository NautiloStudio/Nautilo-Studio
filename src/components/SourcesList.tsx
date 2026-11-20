"use client";

import { useEffect, useRef } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";

type Props = { heading: string; items: { label: string; href: string }[] };

// Sources for a service page, folded into one small line. A footnote link like [2]
// opens the list and scrolls to that source.
export default function SourcesList({ heading, items }: Props) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const openForHash = () => {
      if (!ref.current || !location.hash.startsWith("#source-")) return;
      ref.current.open = true;
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ block: "center" });
    };
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest('a[href^="#source-"]');
      if (link) requestAnimationFrame(openForHash);
    };
    openForHash();
    window.addEventListener("hashchange", openForHash);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", openForHash);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <details ref={ref} id="sources" className="group scroll-mt-28 border-t border-sand/70 pt-5 text-sm text-slate">
      <summary className="inline-flex cursor-pointer list-none items-center gap-2 [&::-webkit-details-marker]:hidden">
        <h2 className="font-display text-sm font-semibold text-graphite">
          {heading} ({items.length})
        </h2>
        <CaretDown size={14} weight="bold" aria-hidden className="text-royal transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <ol className="m-0 mt-3 max-w-4xl list-decimal space-y-1.5 pl-5 marker:font-semibold marker:text-royal">
        {items.map((source, index) => (
          <li key={source.href} id={`source-${index + 1}`} className="scroll-mt-28 pl-1">
            <a href={source.href} target="_blank" rel="noopener noreferrer" className="underline decoration-royal/40 underline-offset-4 hover:text-royal">
              {source.label}
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
}
