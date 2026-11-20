"use client";

import { useEffect } from "react";

// Pages stream in after the loading screen, so on a fresh load the browser tries to jump to a link
// like /blog#guide-data-analysis before that section is on screen. Wait (up to ~3 s) until the target
// is laid out, then scroll to it, unless the visitor has already scrolled.
export default function ScrollToHash() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    let tries = 0;
    let timer = 0;
    const attempt = () => {
      if (window.scrollY > 0) return;
      const target = document.getElementById(id);
      if (target && target.getClientRects().length > 0 && target.getBoundingClientRect().height > 0) {
        target.scrollIntoView({ block: "start" });
        return;
      }
      if (++tries < 30) timer = window.setTimeout(attempt, 100);
    };
    attempt();
    return () => window.clearTimeout(timer);
  }, []);
  return null;
}
