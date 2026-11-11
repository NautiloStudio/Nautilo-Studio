import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { getPosts } from "@/content/blog";
import { alternates, hasLocale, localePath, localeTags, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({ params }: PageProps<"/[lang]/blog">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { metaTitle: title, metaDescription: description } = (await getDictionary(lang)).blog;
  const links = alternates(lang, "/blog");
  return {
    title,
    description,
    alternates: links,
    openGraph: {
      title,
      description,
      url: links.canonical,
      siteName: "Nautilo Studio",
      type: "website",
      locale: localeTags[lang].replace("-", "_"),
    },
  };
}

// The four free PDF guides, one per service. Names and summaries come from the dictionary.
const pdfGuides = [
  { slug: "amazon-seo", tile: "bg-cyan" },
  { slug: "listing-optimization", tile: "bg-apricot" },
  { slug: "data-analysis", tile: "bg-royal" },
  { slug: "ai-automation", tile: "bg-graphite" },
] as const;

const h2 = "font-display text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em]";

const formatDate = (iso: string, lang: Locale) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(localeTags[lang], { year: "numeric", month: "long", day: "numeric" });

// The blog index, in every language: free PDF guides, then the articles.
export default async function BlogIndex({ params }: PageProps<"/[lang]/blog">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.blog;
  const posts = await getPosts(lang);
  const href = (path: string) => localePath(lang, path);

  return (
    <>
      <SiteHeader reviewHref={href("/#review")} />
      <main id="main" className="flex-1 overflow-x-clip">
        <section className="mx-auto max-w-5xl px-4 pt-32 sm:px-6 md:pt-40">
          <p className="rise font-display text-sm font-semibold uppercase tracking-[0.14em] text-royal">{t.label}</p>
          <h1
            className="rise mt-4 max-w-3xl font-display text-[clamp(2.4rem,5.4vw,4.5rem)] font-bold leading-[1.03] tracking-[-0.04em]"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            {t.h1}
          </h1>
          <div
            className="rise mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-slate sm:text-xl"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            <p>{t.intro}</p>
            <p>
              {t.introMore}{" "}
              <Link href={href("/services/amazon-seo")} className="text-graphite underline decoration-royal/40 underline-offset-4 hover:text-royal">
                {t.introLink}
              </Link>
              .
            </p>
          </div>
          <ul
            className="rise m-0 mt-8 flex list-none flex-wrap gap-2 p-0 font-display text-sm font-semibold"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            {t.tags.map((tag) => (
              <li key={tag} className="rounded-full bg-white px-4 py-2 text-graphite ring-1 ring-sand">
                {tag}
              </li>
            ))}
          </ul>
        </section>

        {/* Free PDF guides */}
        <section id="guides" aria-labelledby="guides-heading" className="mx-auto mt-20 max-w-5xl scroll-mt-28 px-4 sm:px-6 md:mt-28">
          <h2 id="guides-heading" className={`reveal ${h2}`}>
            {t.guidesHeading}
          </h2>
          <p className="reveal mt-4 max-w-2xl text-lg leading-relaxed text-slate">
            {t.guidesIntro}
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
                        {copy.name} · {t.pdfMeta}
                        {dict.common.pdfLanguage && ` (${dict.common.pdfLanguage})`}
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
            {t.articlesHeading}
          </h2>
          <ul className="m-0 mt-10 grid list-none gap-5 p-0">
            {posts.map((post) => (
              <li key={post.slug} className="reveal">
                <Link
                  href={href(`/blog/${post.slug}`)}
                  className="glow-ring group flex flex-col gap-4 rounded-[2rem] bg-white p-6 transition-shadow hover:ring-2 hover:ring-royal sm:p-8"
                >
                  <span className="text-sm text-slate">
                    {formatDate(post.published, lang)} · {post.readMinutes} {t.minRead}
                    {post.author && ` · ${post.author.name}`}
                  </span>
                  <span className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.02em]">
                    {post.h1}
                  </span>
                  <span className="text-lg leading-relaxed text-slate">{post.excerpt}</span>
                  <span className="inline-flex items-center gap-2 font-display font-semibold text-royal">
                    {t.readPost} {post.breadcrumb}
                    <ArrowUpRight size={16} weight="bold" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter lang={lang} path="/blog" t={dict.footer} />
    </>
  );
}
