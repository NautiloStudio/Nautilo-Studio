import Link from "next/link";
import { ArrowUpRight, CaretDown } from "@phosphor-icons/react/dist/ssr";
import { BlogPhotoFigure } from "@/components/BlogFigures";
import ContactForm from "@/components/ContactForm";
import LandingContents, { MobileContents } from "@/components/LandingContents";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TalkButton from "@/components/TalkButton";
import { localePath, localeTags, pageUrl, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { BlogPost } from "@/content/blog/types";

const formatDate = (iso: string, lang: Locale) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(localeTags[lang], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

// Article, FAQ and breadcrumb data for search engines and AI answer engines.
function structuredData(post: BlogPost, lang: Locale, dict: Dictionary) {
  const url = pageUrl(lang, `/blog/${post.slug}`);
  const home = pageUrl(lang, "/");
  const organization = { "@type": "Organization", name: "Nautilo Studio", url: home };
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.h1,
      description: post.description,
      inLanguage: localeTags[lang],
      mainEntityOfPage: url,
      image: new URL(post.hero.image.src, home).href,
      datePublished: post.published,
      dateModified: post.updated,
      ...(post.author && {
        author: {
          "@type": "Person",
          name: post.author.name,
          jobTitle: post.author.role,
          url: pageUrl(lang, post.author.href),
          worksFor: organization,
        },
      }),
      publisher: organization,
      keywords: post.keyword,
      citation: post.sources.map((source) => source.url),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: dict.landing.home, item: home },
        { "@type": "ListItem", position: 2, name: dict.blog.label, item: pageUrl(lang, "/blog") },
        { "@type": "ListItem", position: 3, name: post.h1, item: url },
      ],
    },
  ];
}

// Body text styles: short paragraphs, H3 subsections, lists and links in the site's look.
const prose =
  "space-y-5 text-lg leading-relaxed text-slate [&_a]:text-graphite [&_a]:underline [&_a]:decoration-royal/40 [&_a]:underline-offset-4 [&_a:hover]:text-royal [&_h3]:pt-3 [&_h3]:font-display [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:tracking-[-0.01em] [&_h3]:text-graphite [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-graphite [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-6";

const h2 = "font-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em]";

export default function BlogArticle({ post, lang, dict }: { post: BlogPost; lang: Locale; dict: Dictionary }) {
  const t = dict.blog;
  const href = (path: string) => localePath(lang, path);
  const contentsItems = [
    ...post.sections.map(({ id, heading }) => ({ id, heading })),
    { id: "faq", heading: dict.landing.faq },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(post, lang, dict)).replace(/</g, "\\u003c") }}
      />
      <SiteHeader reviewHref="#review" />

      <main id="main" className="flex-1 overflow-x-clip">
        {/* Wide screens: the contents list stays beside the article while you read and marks the
            section you are in. Narrower screens keep the list above the first section. */}
        <article className="mx-auto grid max-w-6xl gap-12 px-4 pt-32 sm:px-6 md:pt-40 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-16">
          <LandingContents label={t.contents} items={contentsItems} />
          <div className="min-w-0 max-w-3xl">
          <nav aria-label={dict.landing.breadcrumb} className="text-sm text-slate">
            <ol className="m-0 flex flex-wrap list-none gap-2 p-0">
              <li>
                <Link href={href("/")} className="underline underline-offset-4 hover:text-royal">
                  {dict.landing.home}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={href("/blog")} className="underline underline-offset-4 hover:text-royal">
                  {t.label}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-graphite">
                {post.breadcrumb}
              </li>
            </ol>
          </nav>

          <h1
            className="rise mt-6 font-display text-[clamp(2.3rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.035em]"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            {post.h1}
          </h1>
          <p className="rise mt-6 text-sm text-slate" style={{ "--i": 1 } as React.CSSProperties}>
            {post.author && (
              <>
                {t.by}{" "}
                <Link
                  href={href(post.author.href)}
                  className="font-medium text-graphite underline decoration-sand underline-offset-4 hover:decoration-royal"
                >
                  {post.author.name}
                </Link>
                , {post.author.role} ·{" "}
              </>
            )}
            <time dateTime={post.published}>{formatDate(post.published, lang)}</time>
            {post.updated !== post.published && (
              <>
                {" "}
                · {t.updated} <time dateTime={post.updated}>{formatDate(post.updated, lang)}</time>
              </>
            )}{" "}
            · {post.readMinutes} {t.minRead}
          </p>

          <div className="rise mt-10" style={{ "--i": 2 } as React.CSSProperties}>
            <BlogPhotoFigure photo={post.hero} label={t.photo} eager />
          </div>

          <div className={`rise mt-10 ${prose}`} style={{ "--i": 3 } as React.CSSProperties}>
            {post.intro}
          </div>

          {/* Contents on phones and tablets: a bar that follows you down the article */}
          <MobileContents label={t.contents} items={contentsItems} />

          {post.sections.map((section) => (
            <section key={section.id} id={section.id} className="reveal mt-16 scroll-mt-44 lg:scroll-mt-28">
              <h2 className={h2}>{section.heading}</h2>
              <div className={`mt-5 ${prose}`}>{section.body}</div>
            </section>
          ))}

          {/* Call to action: the landing page and the free review */}
          <aside className="reveal glow-ring on-dark mt-16 rounded-[2rem] bg-royal p-8 text-offwhite md:p-10">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-cyan">
              {t.nextStep}
            </p>
            <p className="mt-3 font-display text-[clamp(1.4rem,2.6vw,2rem)] font-semibold leading-snug tracking-[-0.01em]">
              {post.cta.text}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-4">
              <TalkButton href="#review" label={dict.landing.getReview} tone="cyan" />
              <Link
                href={href(post.cta.pillar.href)}
                className="group inline-flex items-center gap-2 font-display font-semibold text-offwhite underline decoration-cyan/60 decoration-2 underline-offset-8"
              >
                {post.cta.pillar.label}
                <ArrowUpRight size={16} weight="bold" aria-hidden />
              </Link>
            </div>
          </aside>

          {/* FAQ */}
          <section id="faq" className="reveal mt-16 scroll-mt-44 lg:scroll-mt-28">
            <h2 className={h2}>{dict.landing.faq}</h2>
            <div className="mt-6 divide-y divide-sand border-y border-sand">
              {post.faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-display text-lg font-semibold">{faq.question}</h3>
                    <CaretDown
                      size={20}
                      weight="bold"
                      aria-hidden
                      className="shrink-0 text-royal transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-3 text-lg leading-relaxed text-slate">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Sources */}
          <section aria-labelledby="sources" className="mt-12">
            <h2 id="sources" className="font-display text-xl font-semibold">
              {t.sources}
            </h2>
            <ol className="mt-4 space-y-2 pl-5 text-slate">
              {post.sources.map((source) => (
                <li key={source.url}>
                  {source.publisher},{" "}
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-graphite underline underline-offset-4 hover:text-royal"
                  >
                    {source.title}
                  </a>
                  .
                </li>
              ))}
            </ol>
          </section>
          </div>
        </article>

        {/* Free listing review */}
        <section id="review" className="on-dark mx-auto mt-24 max-w-7xl scroll-mt-24 px-4 sm:px-6 md:mt-32">
          <div className="glow-ring grid gap-12 rounded-[2rem] bg-graphite px-8 py-14 text-offwhite md:grid-cols-2 md:gap-16 md:px-16 md:py-24">
            <div>
              <h2 className="font-display text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                {post.cta.formHeading}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-offwhite/80">
                {post.cta.formText}
              </p>
            </div>
            <ContactForm variant="review" />
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} path={`/blog/${post.slug}`} t={dict.footer} />
    </>
  );
}
