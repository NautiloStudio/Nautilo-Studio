import type { Locale } from "@/i18n/config";
import type { BlogPost } from "./types";

// Every blog post, in the order shown on the blog index.
// Each post has one file per language: src/content/blog/<slug>/<lang>.tsx, at /blog/<slug> (/es/blog/<slug>, ...).
export const slugs = ["amazon-backend-keywords", "amazon-fba-fees-2027"] as const;
export type BlogSlug = (typeof slugs)[number];

const loaders: Record<BlogSlug, Record<Locale, () => Promise<{ default: BlogPost }>>> = {
  "amazon-backend-keywords": {
    en: () => import("./amazon-backend-keywords/en"),
    es: () => import("./amazon-backend-keywords/es"),
    fr: () => import("./amazon-backend-keywords/fr"),
    de: () => import("./amazon-backend-keywords/de"),
    it: () => import("./amazon-backend-keywords/it"),
  },
  "amazon-fba-fees-2027": {
    en: () => import("./amazon-fba-fees-2027/en"),
    es: () => import("./amazon-fba-fees-2027/es"),
    fr: () => import("./amazon-fba-fees-2027/fr"),
    de: () => import("./amazon-fba-fees-2027/de"),
    it: () => import("./amazon-fba-fees-2027/it"),
  },
};

export const isBlogSlug = (value: string): value is BlogSlug => (slugs as readonly string[]).includes(value);

export async function getPost(slug: string, lang: Locale): Promise<BlogPost | undefined> {
  if (!isBlogSlug(slug)) return undefined;
  return (await loaders[slug][lang]()).default;
}

export async function getPosts(lang: Locale): Promise<BlogPost[]> {
  return Promise.all(slugs.map(async (slug) => (await loaders[slug][lang]()).default));
}
