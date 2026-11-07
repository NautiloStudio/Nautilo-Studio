import { NextResponse, type NextRequest } from "next/server";

// Keep in sync with src/i18n/config.ts. Proxy runs on its own, so it doesn't import app modules.
const prefixed = ["es", "fr", "de", "it"];

// English pages keep their short URLs (/amazon-seo) and are served from app/[lang] with lang "en".
// /es, /fr, /de and /it go straight through. /en/... redirects to the short URL so each page has one address.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  if (prefixed.includes(first)) return NextResponse.next();

  if (first === "en") {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next.js internals and any file with an extension (images, PDFs, icons, robots.txt, sitemap.xml).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
