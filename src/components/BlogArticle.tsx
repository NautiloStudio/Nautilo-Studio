import Link from "next/link";
import { ArrowUpRight, CaretDown } from "@phosphor-icons/react/dist/ssr";
import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TalkButton from "@/components/TalkButton";
import { SITE_URL } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { BlogPost } from "@/content/blog/types";

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

// Article, FAQ and breadcrumb data for search engines and AI answer engines.
function structuredData(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const organization = { "@type": "Organization", name: "Nautilo Studio", url: SITE_URL };
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.h1,
      description: post.description,
      inLanguage: "en-US",
      mainEntityOfPage: url,
      datePublished: post.published,
      dateModified: post.updated,
      ...(post.author && {
        author: {
          "@type": "Person",
          name: post.author.name,
          jobTitle: post.author.role,
          url: `${SITE_URL}${post.author.href}`,
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
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.h1, item: url },
      ],
    },
  ];
}

// Body text styles: short paragraphs, H3 subsections, lists and links in the site's look.
const prose =
  "space-y-5 text-lg leading-relaxed text-slate [&_a]:text-graphite [&_a]:underline [&_a]:decoration-royal/40 [&_a]:underline-offset-4 [&_a:hover]:text-royal [&_h3]:pt-3 [&_h3]:font-display [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:tracking-[-0.01em] [&_h3]:text-graphite [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-graphite [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-6";

const h2 = "font-display text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em]";

export default function BlogArticle({ post, dict }: { post: BlogPost; dict: Dictionary }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(post)).replace(/</g, "\\u003c") }}
      />
      <SiteHeader reviewHref="#review" />

      <main id="main" className="flex-1 overflow-x-clip">
        <article className="mx-auto max-w-3xl px-4 pt-32 sm:px-6 md:pt-40">
          <nav aria-label="Breadcrumb" className="text-sm text-slate">
            <ol className="m-0 flex flex-wrap list-none gap-2 p-0">
              <li>
                <Link href="/" className="underline underline-offset-4 hover:text-royal">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/blog" className="underline underline-offset-4 hover:text-royal">
                  Blog
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
                By{" "}
                <Link
                  href={post.author.href}
                  className="font-medium text-graphite underline decoration-sand underline-offset-4 hover:decoration-royal"
                >
                  {post.author.name}
                </Link>
                , {post.author.role} ·{" "}
              </>
            )}
            <time dateTime={post.published}>{formatDate(post.published)}</time>
            {post.updated !== post.published && (
              <>
                {" "}
                · Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
              </>
            )}{" "}
            · {post.readMinutes} min read
          </p>

          <div className={`rise mt-10 ${prose}`} style={{ "--i": 2 } as React.CSSProperties}>
            {post.intro}
          </div>

          {/* Contents */}
          <nav aria-labelledby="contents" className="mt-10 rounded-[2rem] bg-white p-6 sm:p-8">
            <p id="contents" className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-royal">
              In this guide
            </p>
            <ol className="m-0 mt-4 list-decimal space-y-2 pl-5 text-slate marker:font-display marker:text-royal">
              {post.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="transition-colors hover:text-royal">
                    {section.heading}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faq" className="transition-colors hover:text-royal">
                  Frequently asked questions
                </a>
              </li>
            </ol>
          </nav>

          {post.sections.map((section) => (
            <section key={section.id} id={section.id} className="reveal mt-16 scroll-mt-28">
              <h2 className={h2}>{section.heading}</h2>
              <div className={`mt-5 ${prose}`}>{section.body}</div>
            </section>
          ))}

          {/* Call to action: the landing page and the free review */}
          <aside className="reveal on-dark mt-16 rounded-[2rem] bg-royal p-8 text-offwhite md:p-10">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-cyan">
              Next step
            </p>
            <p className="mt-3 font-display text-[clamp(1.4rem,2.6vw,2rem)] font-semibold leading-snug tracking-[-0.01em]">
              Backend keywords are one part of Amazon SEO. See how titles, bullets and sales fit
              together, or let us check your listing for free.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-4">
              <TalkButton href="#review" label="Get a free listing review" tone="cyan" />
              <Link
                href="/amazon-seo"
                className="group inline-flex items-center gap-2 font-display font-semibold text-offwhite underline decoration-cyan/60 decoration-2 underline-offset-8"
              >
                Read our Amazon SEO guide
                <ArrowUpRight size={16} weight="bold" aria-hidden />
              </Link>
            </div>
          </aside>

          {/* FAQ */}
          <section id="faq" className="reveal mt-16 scroll-mt-28">
            <h2 className={h2}>Frequently asked questions</h2>
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
              Sources
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
        </article>

        {/* Free listing review */}
        <section id="review" className="on-dark mx-auto mt-24 max-w-7xl scroll-mt-24 px-4 sm:px-6 md:mt-32">
          <div className="grid gap-12 rounded-[2rem] bg-graphite px-8 py-14 text-offwhite md:grid-cols-2 md:gap-16 md:px-16 md:py-24">
            <div>
              <h2 className="font-display text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                Want us to check your backend keywords?
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-offwhite/80">
                Send one listing and we’ll tell you, for free, what we would change first.
              </p>
            </div>
            <ContactForm variant="review" />
          </div>
        </section>
      </main>

      <SiteFooter lang="en" path={`/blog/${post.slug}`} t={dict.footer} />
    </>
  );
}
