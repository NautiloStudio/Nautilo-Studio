import type { MetadataRoute } from "next";
import { alternates, locales } from "@/i18n/config";
import { landingPages } from "@/lib/landing-pages";

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

  return pages.flatMap(({ path, ...rest }) =>
    locales.map((lang) => {
      const links = alternates(lang, path);
      return {
        url: links.canonical,
        ...rest,
        alternates: { languages: links.languages },
      };
    }),
  );
}
