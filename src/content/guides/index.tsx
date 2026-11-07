import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/components/LandingPage";
import { alternates, hasLocale, localeTags, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { GuideCopy } from "./types";

type Slug = "amazon-seo" | "listing-optimization" | "data-analysis" | "ai-automation";

// Each guide has one file per language: src/content/guides/<slug>/<lang>.tsx
const loaders: Record<Slug, Record<Locale, () => Promise<{ default: GuideCopy }>>> = {
  "amazon-seo": {
    en: () => import("./amazon-seo/en"),
    es: () => import("./amazon-seo/es"),
    fr: () => import("./amazon-seo/fr"),
    de: () => import("./amazon-seo/de"),
    it: () => import("./amazon-seo/it"),
  },
  "listing-optimization": {
    en: () => import("./listing-optimization/en"),
    es: () => import("./listing-optimization/es"),
    fr: () => import("./listing-optimization/fr"),
    de: () => import("./listing-optimization/de"),
    it: () => import("./listing-optimization/it"),
  },
  "data-analysis": {
    en: () => import("./data-analysis/en"),
    es: () => import("./data-analysis/es"),
    fr: () => import("./data-analysis/fr"),
    de: () => import("./data-analysis/de"),
    it: () => import("./data-analysis/it"),
  },
  "ai-automation": {
    en: () => import("./ai-automation/en"),
    es: () => import("./ai-automation/es"),
    fr: () => import("./ai-automation/fr"),
    de: () => import("./ai-automation/de"),
    it: () => import("./ai-automation/it"),
  },
};

const load = async (slug: Slug, lang: Locale) => (await loaders[slug][lang]()).default;

export async function guideMetadata(slug: Slug, params: Promise<{ lang: string }>): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { title, page } = await load(slug, lang);
  const links = alternates(lang, `/${slug}`);
  return {
    title,
    description: page.description,
    alternates: links,
    openGraph: {
      title,
      description: page.description,
      url: links.canonical,
      siteName: "Nautilo Studio",
      type: "article",
      locale: localeTags[lang].replace("-", "_"),
    },
  };
}

export async function GuidePage({ slug, params }: { slug: Slug; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const [{ page }, dict] = await Promise.all([load(slug, lang), getDictionary(lang)]);
  return <LandingPage page={page} lang={lang} dict={dict} />;
}
