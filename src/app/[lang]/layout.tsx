import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import PullToRefresh from "@/components/PullToRefresh";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { SITE_URL, alternates, defaultLocale, hasLocale, localeTags, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// Every page is built once per language.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { title, description } = (await getDictionary(lang)).meta.home;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: alternates(lang, "/"),
    openGraph: {
      title,
      description,
      siteName: "Nautilo Studio",
      type: "website",
      locale: localeTags[lang].replace("-", "_"),
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang: raw } = await params;
  // The proxy only ever sends a supported language here; fall back to English just in case.
  const lang = hasLocale(raw) ? raw : defaultLocale;
  const dict = await getDictionary(lang);

  return (
    <html
      lang={localeTags[lang]}
      // Keeps smooth scrolling for in-page links but lets Next.js jump to the top of a new page.
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main"
          className="sr-only rounded-full bg-royal px-5 py-3 text-offwhite focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-30"
        >
          {dict.common.skip}
        </a>
        <LocaleProvider lang={lang} t={dict.common}>
          {children}
          <PullToRefresh />
        </LocaleProvider>
        {/* Cookieless page-view counts in Vercel (Analytics tab). Conversions show up as visits to /thanks/... */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
