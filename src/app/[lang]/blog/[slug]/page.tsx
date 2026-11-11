import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/BlogArticle";
import { getPost, slugs } from "@/content/blog";
import { alternates, hasLocale, locales, localeTags } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// Every post exists in every language: /blog/<slug>, /es/blog/<slug>, ...
export function generateStaticParams() {
  return locales.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const post = await getPost(slug, lang);
  if (!post) return {};
  const links = alternates(lang, `/blog/${post.slug}`);
  return {
    title: post.title,
    description: post.description,
    alternates: links,
    ...(post.author && { authors: [{ name: post.author.name }] }),
    openGraph: {
      title: post.title,
      description: post.description,
      url: links.canonical,
      siteName: "Nautilo Studio",
      type: "article",
      locale: localeTags[lang].replace("-", "_"),
      publishedTime: post.published,
      modifiedTime: post.updated,
      ...(post.author && { authors: [post.author.name] }),
    },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/[lang]/blog/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const post = await getPost(slug, lang);
  if (!post) notFound();
  return <BlogArticle post={post} lang={lang} dict={await getDictionary(lang)} />;
}
