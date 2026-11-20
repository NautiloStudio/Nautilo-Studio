"use client";

import { useEffect } from "react";

// Pages stream in after the loading screen, so on a fresh load the browser tries to jump to a link
// like /blog#guide-data-analysis before that section exists. Once the page is on screen, scroll to it.
export default function ScrollToHash() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id || window.scrollY > 0) return;
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ block: "start" });
  }, []);
  return null;
}
