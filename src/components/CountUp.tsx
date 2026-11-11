"use client";

import { useEffect, useRef, useState } from "react";
import { localeTags } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";

type Props = { to: number; from?: number; duration?: number; prefix?: string; suffix?: string };


// Counts up to its value the first time it scrolls into view. The page text holds the final
// number only once (the sr-only span), so search engines and screen readers read "4", not "404".
// The visible digits and the space they reserve are CSS generated content (see .count-up in
// globals.css), which is not part of the page text.
export default function CountUp({ to, from = 0, duration = 1400, prefix = "", suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(from);
  const { lang } = useLocale();
  const format = (n: number) => Math.round(n).toLocaleString(localeTags[lang]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (reduced) {
          setValue(to);
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, Math.max(0, (now - start) / duration));
          setValue(from + (to - from) * (1 - Math.pow(1 - t, 3)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, from, duration]);

  const final = `${prefix}${format(to)}${suffix}`;
  return (
    <span
      ref={ref}
      className="count-up relative inline-grid tabular-nums"
      data-final={final}
      data-value={`${prefix}${format(value)}${suffix}`}
    >
      <span className="sr-only">{final}</span>
    </span>
  );
}
