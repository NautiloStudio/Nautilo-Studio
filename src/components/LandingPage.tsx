import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CaretDown } from "@phosphor-icons/react/dist/ssr";
import ContactForm from "@/components/ContactForm";
import CountUp from "@/components/CountUp";
import GuideGallery from "@/components/GuideGallery";
import LandingContents from "@/components/LandingContents";
import SiteHeader from "@/components/SiteHeader";
import StepDemo, { type DemoKind } from "@/components/StepDemo";
import TalkButton from "@/components/TalkButton";
import SiteFooter from "@/components/SiteFooter";
import { withCounts } from "@/components/withCounts";
import { SITE_URL, localePath, localeTags, pageUrl, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

// An optional photo shown under a section's text, rendered here so the image component loads with the page.
export type LandingFigure = { src: string; alt: string; width: number; height: number; caption?: string };
export type LandingSection = { id: string; heading: string; body: ReactNode; figure?: LandingFigure };
export type LandingFaq = { question: string; answer: string };
export type LandingFact = { value: number; prefix?: string; suffix?: string; label: string };

export type LandingContent = {
  slug: string;
  breadcrumb: string;
  question: string; // the H1, phrased exactly as people search it
  answer: string; // the direct three-sentence answer under the H1
  description: string; // same text as the meta description
  image: { src: string; alt: string; tile: string };
  updated: string; // ISO date
  // Optional named author, shown under the H1 with the update date (English guides only for now).
  author?: { name: string; role: string; href: string };
  facts: LandingFact[]; // real numbers from Amazon or the guide itself, never results
  sections: LandingSection[];
  faqs: LandingFaq[];
};

// Article, FAQ and breadcrumb data for search engines and AI answer engines.
function structuredData(page: LandingContent, lang: Locale, home: string, services: string) {
  const url = pageUrl(lang, `/services/${page.slug}`);
  const organization = { "@type": "Organization", name: "Nautilo Studio", url: SITE_URL };
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.question,
      inLanguage: localeTags[lang],
      description: page.description,
      mainEntityOfPage: url,
      dateModified: page.updated,
      author: page.author
        ? { "@type": "Person", name: page.author.name, jobTitle: page.author.role, url: `${SITE_URL}${page.author.href}`, worksFor: organization }
        : organization,
      publisher: organization,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: home, item: pageUrl(lang, "/") },
        { "@type": "ListItem", position: 2, name: services, item: pageUrl(lang, "/services") },
        { "@type": "ListItem", position: 3, name: page.breadcrumb, item: url },
      ],
    },
  ];
}

// The looping scene shown in each guide's hero.
const scenes: Record<string, DemoKind> = {
  "amazon-seo": "search",
  "listing-optimization": "optimise",
  "data-analysis": "analyse",
  "ai-automation": "automate",
};

// Body text: a larger opening paragraph, short paragraphs, plain bullet lists, pull quotes with a
// gradient edge, and rounded figures.
const prose =
  "space-y-6 text-lg leading-[1.75] text-slate [&>p:first-child]:text-xl [&>p:first-child]:leading-relaxed [&>p:first-child]:text-graphite [&_a]:text-graphite [&_a]:underline [&_a]:decoration-royal/40 [&_a]:underline-offset-4 [&_a:hover]:text-royal [&_strong]:font-semibold [&_strong]:text-graphite [&_h3]:pt-2 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-graphite [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-6 [&_li]:pl-1 [&_li]:marker:text-royal [&_blockquote]:my-10 [&_blockquote]:border-l-4 [&_blockquote]:border-cyan [&_blockquote]:pl-6 [&_blockquote]:font-display [&_blockquote]:text-[clamp(1.5rem,2.6vw,2rem)] [&_blockquote]:font-semibold [&_blockquote]:leading-snug [&_blockquote]:tracking-[-0.015em] [&_blockquote]:text-graphite [&_figure]:my-10";

const h2 =
  "font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.025em]";

export default function LandingPage({
  page,
  lang,
  dict,
}: {
  page: LandingContent;
  lang: Locale;
  dict: Dictionary;
}) {
  const t = dict.landing;
  const href = (path: string) => localePath(lang, path);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData(page, lang, t.home, dict.common.header.services)).replace(/</g, "\\u003c"),
        }}
      />

      <SiteHeader guide={page.slug} />

      <main id="main" className="flex-1 overflow-x-clip">
        <article>
          {/* Question and direct answer */}
          <div className="mx-auto max-w-7xl px-4 pt-32 sm:px-6 md:pt-40">
            <div className="grid items-center gap-10 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-14">
              <div>
                <nav aria-label={t.breadcrumb} className="text-sm text-slate">
                  <ol className="m-0 flex list-none gap-2 p-0">
                    <li>
                      <Link href={href("/")} className="underline underline-offset-4 hover:text-royal">
                        {t.home}
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href={href("/services")} className="underline underline-offset-4 hover:text-royal">
                        {dict.common.header.services}
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li aria-current="page" className="text-graphite">
                      {page.breadcrumb}
                    </li>
                  </ol>
                </nav>
                <h1
                  className="rise mt-6 font-display text-[clamp(2.4rem,5.2vw,4.5rem)] font-bold leading-[1.03] tracking-[-0.04em]"
                  style={{ "--i": 0 } as React.CSSProperties}
                >
                  {page.question}
                </h1>
                {page.author && (
                  <p className="rise mt-5 text-sm text-slate" style={{ "--i": 1 } as React.CSSProperties}>
                    {dict.blog.by}{" "}
                    <Link href={href(page.author.href)} className="font-medium text-graphite underline decoration-sand underline-offset-4 hover:decoration-royal">
                      {page.author.name}
                    </Link>
                    , {page.author.role} · {dict.blog.updated}{" "}
                    <time dateTime={page.updated}>
                      {new Date(`${page.updated}T12:00:00Z`).toLocaleDateString(localeTags[lang], {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </p>
                )}
                <div
                  className="rise mt-8 flex flex-wrap items-center gap-x-7 gap-y-4"
                  style={{ "--i": 1 } as React.CSSProperties}
                >
                  <TalkButton href="#review" label={t.getReview} />
                  <Link
                    href={href("/#contact")}
                    className="py-3 font-display font-semibold text-graphite underline decoration-sand decoration-2 underline-offset-8 transition-colors hover:decoration-royal"
                  >
                    {t.talk}
                  </Link>
                </div>
              </div>
              <div className="rise glow-card rounded-[2rem]" style={{ "--i": 2 } as React.CSSProperties}>
                <div
                  className={`flex min-h-[20rem] items-center justify-center rounded-[2rem] p-6 md:aspect-[4/3] md:p-10 ${page.image.tile}`}
                >
                  <div className="w-full max-w-md">
                    <StepDemo kind={scenes[page.slug] ?? "optimise"} t={dict.demo} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rise on-dark mt-5 rounded-[2rem] bg-royal p-8 text-offwhite md:p-14"
              style={{ "--i": 3 } as React.CSSProperties}
            >
              <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-cyan">
                {t.shortAnswer}
              </p>
              <p className="mt-4 max-w-4xl font-display text-[clamp(1.25rem,2.3vw,1.75rem)] font-medium leading-[1.35] tracking-[-0.01em]">
                {page.answer}
              </p>
            </div>

            {/* Numbers that count up: facts from Amazon or this guide, not client results */}
            <ul className="m-0 mt-5 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {page.facts.map((fact) => (
                <li key={fact.label} className="reveal rounded-[1.5rem] bg-white p-6">
                  <p className="font-display text-[clamp(2.4rem,4vw,3.5rem)] font-bold leading-none tracking-[-0.03em] text-royal">
                    <CountUp to={fact.value} prefix={fact.prefix} suffix={fact.suffix} />
                  </p>
                  <p className="mt-3 text-slate">{fact.label}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Body: classic article text in paragraphs, with a numbered contents list that stays
              beside it on wide screens. Each section opens with its number and a brand-gradient rule. */}
          <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 md:mt-28">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-20">
              <LandingContents
                label={dict.blog.contents}
                items={page.sections.map(({ id, heading }) => ({ id, heading }))}
              />
              <div className="max-w-3xl">
                {page.sections.map((section, index) => (
                  <section key={section.id} id={section.id} className="reveal scroll-mt-28 [&+&]:mt-20 md:[&+&]:mt-24">
                    <p className="font-display text-sm font-semibold tabular-nums tracking-[0.14em] text-royal">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className={`${h2} mt-3`}>{section.heading}</h2>
                    <div
                      aria-hidden
                      className="mt-6 h-1 w-16 rounded-full bg-[linear-gradient(90deg,var(--color-cyan),var(--color-royal),var(--color-apricot))]"
                    />
                    <div className={`mt-8 ${prose}`}>{section.body}</div>
                    {section.figure && (
                      <figure className="m-0 mt-10">
                        <Image
                          src={section.figure.src}
                          alt={section.figure.alt}
                          width={section.figure.width}
                          height={section.figure.height}
                          sizes="(min-width: 800px) 48rem, 100vw"
                          className="h-auto w-full rounded-[1.5rem]"
                        />
                        {section.figure.caption && (
                          <figcaption className="mt-3 text-sm text-slate">{section.figure.caption}</figcaption>
                        )}
                      </figure>
                    )}
                  </section>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-24 max-w-7xl space-y-16 px-4 sm:px-6 md:mt-32 md:space-y-24">
              {/* Case study teaser */}
              <Link
                href={href("/#case-study")}
                className="reveal group flex items-center justify-between gap-6 rounded-[2rem] bg-apricot p-6 sm:p-8"
              >
                <span>
                  <span className="block font-display text-sm font-semibold uppercase tracking-[0.14em] text-graphite/70">
                    {t.caseLabel}
                  </span>
                  <span className="mt-2 block font-display text-2xl font-semibold leading-snug tracking-[-0.01em]">
                    {t.caseText}
                  </span>
                </span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-graphite text-offwhite transition-transform duration-300 ease-(--ease-out-strong) group-hover:-translate-y-px group-hover:translate-x-0.5">
                  <ArrowUpRight size={20} weight="bold" aria-hidden />
                </span>
              </Link>

              {/* FAQ */}
              <section id="faq" className="reveal scroll-mt-28">
                <h2 className={h2}>{t.faq}</h2>
                <div className="mt-6 max-w-4xl divide-y divide-sand border-y border-sand">
                  {page.faqs.map((faq) => (
                    <details key={faq.question} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-semibold [&::-webkit-details-marker]:hidden">
                        <h3 className="text-lg font-semibold">{faq.question}</h3>
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

              {/* Internal links */}
              <section aria-labelledby="related" className="reveal">
                <h2 id="related" className="font-display text-xl font-semibold">
                  {t.more}
                </h2>
                <ul className="mt-4 flex flex-wrap gap-3 p-0">
                  <li className="list-none">
                    <Link
                      href={href("/#services")}
                      className="inline-block rounded-full bg-white px-4 py-2 ring-1 ring-sand transition-colors hover:ring-royal"
                    >
                      {t.moreServices}
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href={href("/#how")}
                      className="inline-block rounded-full bg-white px-4 py-2 ring-1 ring-sand transition-colors hover:ring-royal"
                    >
                      {t.moreHow}
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href={href("/#contact")}
                      className="inline-block rounded-full bg-white px-4 py-2 ring-1 ring-sand transition-colors hover:ring-royal"
                    >
                      {t.moreTalk}
                    </Link>
                  </li>
                </ul>
              </section>
          </div>
        </article>

        {/* The other guides, as an expanding gallery */}
        <GuideGallery
          exclude={page.slug}
          id="more-guides"
          heading={withCounts(dict.common.gallery.moreHeading)}
          intro={dict.common.gallery.moreIntro}
        />

        {/* Free listing review */}
        <section id="review" className="on-dark mx-auto mt-28 max-w-7xl scroll-mt-24 px-4 sm:px-6 md:mt-36">
          <div className="grid gap-12 rounded-[2rem] bg-graphite px-8 py-14 text-offwhite md:grid-cols-2 md:gap-16 md:px-16 md:py-24">
            <div>
              <h2 className="font-display text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                {t.reviewHeading}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-offwhite/80">
                {t.reviewText}
              </p>
              <ol className="m-0 mt-8 list-none space-y-4 p-0">
                {dict.reviewSteps.map((step, index) => (
                  <li key={step} className="flex gap-4 text-lg leading-relaxed text-offwhite/85">
                    <span className="w-4 shrink-0 font-display font-semibold text-cyan" aria-hidden>
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <ContactForm variant="review" />
          </div>
        </section>
      </main>

<SiteFooter lang={lang} path={`/services/${page.slug}`} t={dict.footer} />
    </>
  );
}
