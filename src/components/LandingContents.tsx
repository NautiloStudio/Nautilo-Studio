"use client";

import { useEffect, useState } from "react";

// The section list beside a landing page's text on wide screens. It stays in view while you read
// and marks the section you are in. Without JavaScript it is still a plain list of links.
export default function LandingContents({
  label,
  items,
}: {
  label: string;
  items: { id: string; heading: string }[];
}) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    // A section counts as current once its top passes the upper third of the screen.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-labelledby="landing-contents" className="hidden lg:block">
      <div className="sticky top-32">
        <p id="landing-contents" className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-slate">
          {label}
        </p>
        <ol className="m-0 mt-5 list-none space-y-1 border-l-2 border-sand p-0">
          {items.map((item, index) => {
            const current = item.id === active;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={current ? "location" : undefined}
                  className={`-ml-0.5 flex gap-3 border-l-2 py-2 pl-4 text-sm leading-snug transition-colors duration-200 ${
                    current ? "border-royal font-semibold text-graphite" : "border-transparent text-slate hover:text-graphite"
                  }`}
                >
                  <span className={`font-display tabular-nums ${current ? "text-royal" : "text-slate/70"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.heading}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
