import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { posts } from "@/content/blog";
import { SITE_URL, hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const title = "Amazon Seller Blog: Practical SEO Guides | Nautilo Studio";
const description =
  "News and practical guides for US Amazon sellers on SEO, listings, data and AI, updated as Amazon changes. Read the latest posts and get our free PDF guides.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: { title, description, url: `${SITE_URL}/blog`, siteName: "Nautilo Studio", type: "website", locale: "en_US" },
};

// The four free PDF guides, one per service. Names and summaries come from the dictionary.
const pdfGuides = [
  { slug: "amazon-seo", tile: "bg-cyan" },
  { slug: "listing-optimization", tile: "bg-apricot" },
  { slug: "data-analysis", tile: "bg-royal" },
  { slug: "ai-automation", tile: "bg-graphite" },
] as const;

const h2 = "font-display text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em]";

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
            The Amazon seller blog: what changed, and what to do about it.
          </h1>
          <div
            className="rise mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-slate sm:text-xl"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            <p>
              Amazon keeps changing how search works, what its rules allow and which tools sellers get in
              Seller Central. We follow those changes for you and turn them into short, practical articles
              for US sellers: what is new, why it matters and what to change in your listings.
            </p>
            <p>
              This blog is updated continuously. New articles go up as new things happen on Amazon, so
              bookmark this page and check back. For the full picture, start with our{" "}
              <Link href="/amazon-seo" className="text-graphite underline decoration-royal/40 underline-offset-4 hover:text-royal">
                Amazon SEO guide
              </Link>
              .
            </p>
          </div>
          <ul
            className="rise m-0 mt-8 flex list-none flex-wrap gap-2 p-0 font-display text-sm font-semibold"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            {["Updated continuously", "Amazon news, explained", "How-to articles", "Free PDF guides"].map((tag) => (
              <li key={tag} className="rounded-full bg-white px-4 py-2 text-graphite ring-1 ring-sand">
                {tag}
              </li>
            ))}
          </ul>
        </section>

        {/* Free PDF guides */}
        <section id="guides" aria-labelledby="guides-heading" className="mx-auto mt-20 max-w-5xl scroll-mt-28 px-4 sm:px-6 md:mt-28">
          <h2 id="guides-heading" className={`reveal ${h2}`}>
            Free PDF guides
          </h2>
          <p className="reveal mt-4 max-w-2xl text-lg leading-relaxed text-slate">
            One 10-page guide for each of our services, with examples, charts and a checklist. Free to download.
          </p>
          <ul className="m-0 mt-10 grid list-none gap-5 p-0 sm:grid-cols-2">
            {pdfGuides.map((guide) => {
              const copy = dict.common.guides[guide.slug];
              return (
                <li key={guide.slug} className="reveal">
                  <a
                    href={`/guides/nautilo-${guide.slug}-guide.pdf`}
                    download
                    className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white ring-1 ring-sand transition-shadow hover:ring-2 hover:ring-royal"
                  >
                    <span className={`block h-3 ${guide.tile}`} aria-hidden />
                    <span className="flex flex-1 flex-col gap-3 p-6 sm:p-8">
                      <span className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-slate">
                        {copy.name} · PDF · 10 pages
                      </span>
                      <span className="font-display text-[clamp(1.4rem,2.4vw,1.9rem)] font-bold leading-[1.1] tracking-[-0.02em]">
                        {copy.title}
                      </span>
                      <span className="text-lg leading-relaxed text-slate">{copy.text}</span>
                      <span className="mt-auto inline-flex items-center gap-2 pt-2 font-display font-semibold text-royal">
                        {dict.common.gallery.download}
                        <DownloadSimple size={16} weight="bold" aria-hidden />
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Articles */}
        <section id="articles" aria-labelledby="articles-heading" className="mx-auto mt-20 max-w-5xl scroll-mt-28 px-4 sm:px-6 md:mt-28">
          <h2 id="articles-heading" className={`reveal ${h2}`}>
            Latest articles
          </h2>
          <ul className="m-0 mt-10 grid list-none gap-5 p-0">
            {posts.map((post) => (
              <li key={post.slug} className="reveal">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-4 rounded-[2rem] bg-white p-6 ring-1 ring-sand transition-shadow hover:ring-2 hover:ring-royal sm:p-8"
                >
                  <span className="text-sm text-slate">
                    {formatDate(post.published)} · {post.readMinutes} min read
                    {post.author && ` · ${post.author.name}`}
                  </span>
                  <span className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.02em]">
                    {post.h1}
                  </span>
                  <span className="text-lg leading-relaxed text-slate">{post.excerpt}</span>
                  <span className="inline-flex items-center gap-2 font-display font-semibold text-royal">
                    Read the post on {post.breadcrumb}
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
