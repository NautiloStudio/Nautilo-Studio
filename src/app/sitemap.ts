import type { MetadataRoute } from "next";
import { alternates, locales } from "@/i18n/config";
import { landingPages } from "@/lib/landing-pages";
import { getPosts } from "@/content/blog";

// Every page in every language, each listing its translations so search engines link them.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: { path: string; priority: number; lastModified?: string; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    ...landingPages.map((page) => ({
      path: `/services/${page.slug}`,
      priority: 0.8,
      lastModified: page.updated,
      changeFrequency: "monthly" as const,
    })),
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    ...(await getPosts("en")).map((post) => ({
      path: `/blog/${post.slug}`,
      priority: 0.7,
      lastModified: post.updated,
      changeFrequency: "monthly" as const,
    })),
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
