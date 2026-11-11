import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import BlogArticle from "@/components/BlogArticle";
import { getPost, posts } from "@/content/blog";
import { SITE_URL, hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// The blog is English only: /blog/<slug>. Other languages redirect to the English post.
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    ...(post.author && { authors: [{ name: post.author.name, url: `${SITE_URL}${post.author.href}` }] }),
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "Nautilo Studio",
      type: "article",
      locale: "en_US",
      publishedTime: post.published,
      modifiedTime: post.updated,
      ...(post.author && { authors: [post.author.name] }),
    },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/[lang]/blog/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const post = getPost(slug);
  if (!post) notFound();
  if (lang !== "en") permanentRedirect(`/blog/${post.slug}`);
  return <BlogArticle post={post} dict={await getDictionary("en")} />;
}
