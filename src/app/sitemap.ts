import type { MetadataRoute } from "next";
import { alternates, locales } from "@/i18n/config";
import { landingPages } from "@/lib/landing-pages";
import { posts } from "@/content/blog";
import { SITE_URL } from "@/i18n/config";

// Every page in every language, each listing its translations so search engines link them.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; lastModified?: string; changeFrequency: "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    ...landingPages.map((page) => ({
      path: `/${page.slug}`,
      priority: 0.8,
      lastModified: page.updated,
      changeFrequency: "monthly" as const,
    })),
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  ];

  // The blog is English only, so it has one address per page and no translations.
  const blog: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [...pages.flatMap(({ path, ...rest }) =>
    locales.map((lang) => {
      const links = alternates(lang, path);
      return {
        url: links.canonical,
        ...rest,
        alternates: { languages: links.languages },
      };
    }),
  ), ...blog];
}
