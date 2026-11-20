import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CaretDown } from "@phosphor-icons/react/dist/ssr";
import ContactForm from "@/components/ContactForm";
import CountUp from "@/components/CountUp";
import GuideGallery from "@/components/GuideGallery";
import LandingContents, { MobileContents } from "@/components/LandingContents";
import SiteHeader from "@/components/SiteHeader";
import StepDemo, { type DemoKind } from "@/components/StepDemo";
import TalkButton from "@/components/TalkButton";
import SiteFooter from "@/components/SiteFooter";
import SourcesList from "@/components/SourcesList";
import { withCounts } from "@/components/withCounts";
import { team } from "@/lib/team";
import { SITE_URL, localePath, localeTags, pageUrl, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

// An optional photo shown under a section's text, rendered here so the image component loads with the page.
export type LandingFigure = { src: string; alt: string; width: number; height: number; caption?: string };
export type LandingSection = { id: string; heading: string; body: ReactNode; figure?: LandingFigure };
export type LandingFaq = { question: string; answer: string };
export type LandingFact = { value: number; prefix?: string; suffix?: string; label: string };
// `source` is a 1-based index into `sources`, shown as a footnote link.
export type LandingProof = { label: string; heading: string; note: string; items: { value: string; text: string; source: number }[] };
export type LandingCaseStudy = {
  label: string;
  heading: string;
  intro: string;
  steps: { heading: string; text: string }[];
  results: { value: string; label: string }[];
  quote: { text: string; by: string };
  takeaway: string;
  note: string;
  source: number;
};
export type LandingStory = { label: string; heading: string; steps: { heading: string; text: string }[]; link: { href: string; text: string } };

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
  // Optional evidence blocks: market figures, a published third-party case study, our own story, and the sources behind them.
  proof?: LandingProof;
  caseStudy?: LandingCaseStudy;
  story?: LandingStory;
  sources?: { heading: string; items: { label: string; href: string }[] };
};

// Footnote link to the numbered source list at the end of the page.
function SourceRef({ n, onDark }: { n: number; onDark?: boolean }) {
  return (
    <sup className="ml-0.5">
      <a href={`#source-${n}`} className={`font-semibold no-underline hover:underline ${onDark ? "text-apricot" : "text-royal"}`} aria-label={`Source ${n}`}>
        [{n}]
      </a>
    </sup>
  );
}

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
  relatedPost,
}: {
  page: LandingContent;
  lang: Locale;
  dict: Dictionary;
  /** A blog post on the same topic, shown with a button to the blog. */
  relatedPost?: { href: string; title: string };
}) {
  const t = dict.landing;
  const contentsItems = page.sections.map(({ id, heading }) => ({ id, heading }));
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
          {/* First screen, in reading order: title, key numbers, example, the team, then the short answer */}
          <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 md:pt-28">
            <div className="grid items-center gap-8 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-12">
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
                  className="rise mt-4 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.035em]"
                  style={{ "--i": 0 } as React.CSSProperties}
                >
                  {page.question}
                </h1>
                {page.author && (
                  <p className="rise mt-3 text-sm text-slate" style={{ "--i": 1 } as React.CSSProperties}>
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

                {/* Numbers that count up: facts from Amazon or this guide, not client results */}
                <ul
                  className="rise m-0 mt-5 grid list-none grid-cols-2 gap-2 p-0 sm:grid-cols-4"
                  style={{ "--i": 1 } as React.CSSProperties}
                >
                  {page.facts.map((fact) => (
                    <li key={fact.label} className="rounded-2xl bg-white p-4">
                      <p className="font-display text-[clamp(1.6rem,2.4vw,2.1rem)] font-bold leading-none tracking-[-0.03em] text-royal">
                        <CountUp to={fact.value} prefix={fact.prefix} suffix={fact.suffix} />
                      </p>
                      <p className="mt-2 text-xs leading-snug text-slate">{fact.label}</p>
                    </li>
                  ))}
                </ul>

                <div
                  className="rise mt-5 flex flex-wrap items-center gap-x-7 gap-y-3"
                  style={{ "--i": 2 } as React.CSSProperties}
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
                  className={`flex min-h-[16rem] items-center justify-center rounded-[2rem] p-6 md:min-h-[20rem] md:p-8 ${page.image.tile}`}
                >
                  <div className="w-full max-w-md">
                    <StepDemo kind={scenes[page.slug] ?? "optimise"} t={dict.demo} />
                  </div>
                </div>
              </div>
            </div>

            {/* The people behind the work: one pill each, with photo, name and role */}
            <ul
              aria-label={dict.common.team.label}
              className="rise m-0 mt-4 flex list-none flex-wrap gap-2 p-0"
              style={{ "--i": 3 } as React.CSSProperties}
            >
              {team.map((person) => (
                <li key={person.name}>
                  <Link
                    href={href("/about")}
                    className="flex items-center gap-3 rounded-full bg-white py-1.5 pl-1.5 pr-5 ring-1 ring-sand transition-shadow hover:ring-royal"
                  >
                    <span className={`relative h-10 w-10 shrink-0 overflow-hidden rounded-full ${person.tile}`}>
                      {person.photo && (
                        <Image
                          src={person.photo}
                          alt=""
                          fill
                          sizes="40px"
                          className="object-cover"
                          style={{ objectPosition: person.frame?.position ?? "50% 30%" }}
                        />
                      )}
                    </span>
                    <span className="leading-tight">
                      <span className="block text-sm font-semibold text-graphite">{person.name}</span>
                      <span className="block text-xs text-slate">
                        {dict.common.team.members[person.name as keyof typeof dict.common.team.members]?.role ?? person.role}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className="rise glow-ring on-dark mt-4 rounded-[2rem] bg-royal p-7 text-offwhite md:px-10 md:py-8"
              style={{ "--i": 4 } as React.CSSProperties}
            >
              <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-cyan">
                {t.shortAnswer}
              </p>
              <p className="mt-3 max-w-4xl font-display text-[clamp(1.1rem,1.8vw,1.4rem)] font-medium leading-[1.4] tracking-[-0.01em]">
                {page.answer}
              </p>
            </div>
          </div>

          {/* Body: classic article text in paragraphs, with a numbered contents list that stays
              beside it on wide screens. Each section opens with its number and a brand-gradient rule. */}
          <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 md:mt-28">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-20">
              <LandingContents label={dict.blog.contents} items={contentsItems} />
              <div className="min-w-0 max-w-3xl">
                {/* Phones and tablets: the same list as a bar that follows you down the text, as on the blog */}
                <MobileContents label={dict.blog.contents} items={contentsItems} />
                <div className="mt-12 lg:mt-0">
                {page.sections.map((section, index) => (
                  <section key={section.id} id={section.id} className="reveal scroll-mt-44 lg:scroll-mt-28 [&+&]:mt-20 md:[&+&]:mt-24">
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
          </div>

          <div className="mx-auto mt-24 max-w-7xl space-y-16 px-4 sm:px-6 md:mt-32 md:space-y-24">
              {/* Social proof from the market: published figures, each with its source */}
              {page.proof && (
                <section aria-labelledby="proof" className="reveal">
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-royal">{page.proof.label}</p>
                  <h2 id="proof" className={`${h2} mt-3 max-w-4xl`}>{page.proof.heading}</h2>
                  <ul className="m-0 mt-8 grid list-none gap-3 p-0 md:grid-cols-3">
                    {page.proof.items.map((item) => (
                      <li key={item.value} className="rounded-[1.5rem] bg-white p-6 ring-1 ring-sand sm:p-8">
                        <p className="font-display text-[clamp(2.2rem,3.6vw,3.25rem)] font-bold leading-none tracking-[-0.03em] text-royal">
                          {item.value}
                        </p>
                        <p className="mt-4 text-lg leading-relaxed text-slate">
                          {item.text}
                          <SourceRef n={item.source} />
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-slate">{page.proof.note}</p>
                </section>
              )}

              {/* A published case study from a third party, told as challenge, approach, result. A soft royal tint on white, so it reads calmer than the black review box. */}
              {page.caseStudy && (
                <section aria-labelledby="case-study" className="reveal glow-ring rounded-[2rem] bg-[color-mix(in_oklab,var(--color-royal)_5%,white)] p-8 text-graphite md:p-14">
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-royal">{page.caseStudy.label}</p>
                  <h2 id="case-study" className={`${h2} mt-3 max-w-4xl`}>{page.caseStudy.heading}</h2>
                  <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate">{page.caseStudy.intro}</p>
                  <ol className="m-0 mt-10 grid list-none gap-8 p-0 md:grid-cols-3">
                    {page.caseStudy.steps.map((step, index) => (
                      <li key={step.heading}>
                        <p className="font-display text-sm font-semibold tabular-nums tracking-[0.14em] text-royal">
                          {String(index + 1).padStart(2, "0")} · {step.heading}
                        </p>
                        <p className="mt-3 leading-relaxed text-slate">{step.text}</p>
                      </li>
                    ))}
                  </ol>
                  <ul className="m-0 mt-10 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4">
                    {page.caseStudy.results.map((result) => (
                      <li key={result.label} className="rounded-[1.5rem] bg-white p-6 ring-1 ring-royal/10">
                        <p className="font-display text-[clamp(2.2rem,3.6vw,3rem)] font-bold leading-none tracking-[-0.03em] text-royal">
                          {result.value}
                        </p>
                        <p className="mt-3 text-slate">{result.label}</p>
                      </li>
                    ))}
                  </ul>
                  <blockquote className="m-0 mt-10 border-l-4 border-apricot pl-6">
                    <p className="font-display text-[clamp(1.25rem,2.2vw,1.6rem)] font-medium leading-snug">“{page.caseStudy.quote.text}”</p>
                    <footer className="mt-3 text-slate">{page.caseStudy.quote.by}</footer>
                  </blockquote>
                  <p className="mt-10 max-w-3xl text-lg leading-relaxed">{page.caseStudy.takeaway}</p>
                  <p className="mt-6 text-sm text-slate">
                    {page.caseStudy.note}
                    <SourceRef n={page.caseStudy.source} />
                  </p>
                </section>
              )}

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

              {/* Our story: why Nautilo Studio exists, as a short three-step arc */}
              {page.story && (
                <section aria-labelledby="our-story" className="reveal">
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-royal">{page.story.label}</p>
                  <h2 id="our-story" className={`${h2} mt-3 max-w-4xl`}>{page.story.heading}</h2>
                  <ol className="m-0 mt-8 grid list-none gap-3 p-0 md:grid-cols-3">
                    {page.story.steps.map((step, index) => (
                      <li key={step.heading} className="rounded-[1.5rem] bg-white p-6 ring-1 ring-sand sm:p-8">
                        <p className="font-display text-sm font-semibold tabular-nums tracking-[0.14em] text-royal">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-3 font-display text-xl font-semibold">{step.heading}</h3>
                        <p className="mt-3 text-lg leading-relaxed text-slate">{step.text}</p>
                      </li>
                    ))}
                  </ol>
                  <Link href={href(page.story.link.href)} className="mt-6 inline-block font-medium text-graphite underline decoration-royal/40 underline-offset-4 hover:text-royal">
                    {page.story.link.text}
                  </Link>
                </section>
              )}

              {/* Closing block: next steps for readers who want more, kept close together
                  so it reads as one group after the big sections above. */}
              <div className="space-y-6 md:space-y-8">
                {/* Case study teaser */}
                <Link
                  href={href("/#case-study")}
                  className="reveal glow-ring group flex items-center justify-between gap-6 rounded-[2rem] bg-apricot p-6 sm:p-8"
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

                {/* From our blog: keeps readers who are not ready to buy yet, and links the post they need */}
                {relatedPost && (
                  <aside
                    aria-labelledby="from-blog"
                    className="reveal flex flex-col gap-6 rounded-[2rem] bg-white p-6 ring-1 ring-sand sm:p-8 md:flex-row md:items-center md:justify-between"
                  >
                    <div className="max-w-2xl">
                      <p id="from-blog" className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-royal">
                        {t.blogLabel}
                      </p>
                      <p className="mt-2 font-display text-2xl font-semibold leading-snug tracking-[-0.01em]">{t.blogText}</p>
                      <p className="mt-3 text-slate">
                        {t.blogStart}{" "}
                        <Link href={relatedPost.href} className="font-medium text-graphite underline decoration-royal/40 underline-offset-4 hover:text-royal">
                          {relatedPost.title}
                        </Link>
                      </p>
                    </div>
                    <Link
                      href={href("/blog")}
                      className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-graphite py-2 pl-6 pr-2 font-display font-semibold text-offwhite transition-colors hover:bg-royal md:self-center"
                    >
                      {t.blogButton}
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-(--ease-out-strong) group-hover:-translate-y-px group-hover:translate-x-0.5">
                        <ArrowUpRight size={18} weight="bold" aria-hidden />
                      </span>
                    </Link>
                  </aside>
                )}

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

                {/* Sources for the figures and the case study above, folded into one small line */}
                {page.sources && <SourcesList heading={page.sources.heading} items={page.sources.items} />}
              </div>
          </div>
        </article>

        {/* The other guides, as an expanding gallery */}
        <GuideGallery
          className="mt-20 md:mt-28"
          exclude={page.slug}
          id="more-guides"
          heading={withCounts(dict.common.gallery.moreHeading)}
          intro={dict.common.gallery.moreIntro}
        />

        {/* Free listing review */}
        <section id="review" className="on-dark mx-auto mt-28 max-w-7xl scroll-mt-24 px-4 sm:px-6 md:mt-36">
          <div className="glow-ring grid gap-12 rounded-[2rem] bg-graphite px-8 py-14 text-offwhite md:grid-cols-2 md:gap-16 md:px-16 md:py-24">
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
