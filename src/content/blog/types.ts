import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

// One blog post in one language. Its sections render as H2s; use <h3> inside a body for subsections.
export type BlogSection = { id: string; heading: string; body: ReactNode };

// A photo with its photographer, for the opening image and photos inside the article.
export type BlogPhoto = {
  image: StaticImageData;
  alt: string; // describes the photo in the post's language
  credit: { name: string; url: string };
};

export type BlogPost = {
  slug: string;
  title: string; // the <title>, 50-60 characters, primary keyword first
  description: string; // the meta description, 150-160 characters, ends with a call to action
  h1: string;
  breadcrumb: string; // short name for the breadcrumb
  keyword: string; // primary keyword, for reference
  excerpt: string; // one line for the blog index
  author?: { name: string; role: string; href: string }; // leave out to publish without a named author
  published: string; // ISO date
  updated: string; // ISO date
  readMinutes: number;
  hero: BlogPhoto; // the opening photo, shown right after the title
  intro: ReactNode; // must use the primary keyword in its first 100 words
  sections: BlogSection[];
  faqs: { question: string; answer: string }[];
  sources: { title: string; publisher: string; url: string }[];
  // The one call to action for this post: the closing box and the free review form at the bottom.
  cta: {
    text: string; // the sentence in the closing box
    pillar: { href: string; label: string }; // the service page this post belongs to
    formHeading: string; // heading next to the review form
    formText: string; // one line under it
  };
};
