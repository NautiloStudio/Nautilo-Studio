import type { ReactNode } from "react";

// One blog post (English only). Its sections render as H2s; use <h3> inside a body for subsections.
export type BlogSection = { id: string; heading: string; body: ReactNode };

export type BlogPost = {
  slug: string;
  title: string; // the <title>, 50-60 characters, primary keyword first
  description: string; // the meta description, 150-160 characters, ends with a call to action
  h1: string;
  breadcrumb: string; // short name for the breadcrumb
  keyword: string; // primary keyword, for reference
  excerpt: string; // one line for the blog index
  author: { name: string; role: string; href: string };
  published: string; // ISO date
  updated: string; // ISO date
  readMinutes: number;
  intro: ReactNode; // must use the primary keyword in its first 100 words
  sections: BlogSection[];
  faqs: { question: string; answer: string }[];
  sources: { title: string; publisher: string; url: string }[];
};
