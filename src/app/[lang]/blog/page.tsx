import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { posts } from "@/content/blog";
import { SITE_URL, hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const title = "Amazon Seller Blog: Practical SEO Guides | Nautilo Studio";
const description =
  "Practical guides for US Amazon sellers on SEO, listings, data and AI, written by the Nautilo Studio team. Read the latest post, then get a free listing review.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: { title, description, url: `${SITE_URL}/blog`, siteName: "Nautilo Studio", type: "website", locale: "en_US" },
};

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

// The blog index, English only. Other languages redirect here.
export default async function BlogIndex({ params }: PageProps<"/[lang]/blog">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  if (lang !== "en") permanentRedirect("/blog");
  const dict = await getDictionary("en");

  return (
    <>
      <SiteHeader reviewHref="/#review" />
      <main id="main" className="flex-1 overflow-x-clip">
        <section className="mx-auto max-w-5xl px-4 pt-32 sm:px-6 md:pt-40">
          <p className="rise font-display text-sm font-semibold uppercase tracking-[0.14em] text-royal">Blog</p>
          <h1
            className="rise mt-4 max-w-3xl font-display text-[clamp(2.4rem,5.4vw,4.5rem)] font-bold leading-[1.03] tracking-[-0.04em]"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Practical Amazon SEO guides for US sellers.
          </h1>
          <p
            className="rise mt-6 max-w-2xl text-lg leading-relaxed text-slate sm:text-xl"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            Short, hands-on posts on getting found, turning visits into sales and reading your numbers.
            For the full picture, start with our{" "}
            <Link href="/amazon-seo" className="text-graphite underline decoration-royal/40 underline-offset-4 hover:text-royal">
              Amazon SEO guide
            </Link>
            .
          </p>

          <ul className="m-0 mt-14 grid list-none gap-5 p-0">
            {posts.map((post) => (
              <li key={post.slug} className="reveal">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-4 rounded-[2rem] bg-white p-6 ring-1 ring-sand transition-shadow hover:ring-2 hover:ring-royal sm:p-8"
                >
                  <span className="text-sm text-slate">
                    {formatDate(post.published)} · {post.readMinutes} min read · {post.author.name}
                  </span>
                  <span className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.02em]">
                    {post.h1}
                  </span>
                  <span className="text-lg leading-relaxed text-slate">{post.excerpt}</span>
                  <span className="inline-flex items-center gap-2 font-display font-semibold text-royal">
                    Read the post on {post.breadcrumb.toLowerCase()}
                    <ArrowUpRight size={16} weight="bold" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter lang="en" path="/blog" t={dict.footer} />
    </>
  );
}
