import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TalkButton from "@/components/TalkButton";
import { alternates, hasLocale, localePath, localeTags, pageUrl } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SHARE_IMAGE } from "@/lib/seo";

// The services hub (level 2): one row per service, each opening its own page (level 3).
// Words come from the home page's service list so both pages always say the same thing.
const media = [
  { slug: "amazon-seo", image: "/img/amazon-seo-dashboard.webp", fill: "bg-cyan", ink: "group-hover:text-graphite group-focus-visible:text-graphite", dot: "bg-cyan text-graphite group-hover:bg-graphite group-hover:text-offwhite" },
  { slug: "listing-optimization", image: "/img/service-listing.jpg", fill: "bg-apricot", ink: "group-hover:text-graphite group-focus-visible:text-graphite", dot: "bg-apricot text-graphite group-hover:bg-graphite group-hover:text-offwhite" },
  { slug: "data-analysis", image: "/img/service-data.jpg", fill: "bg-royal", ink: "group-hover:text-offwhite group-focus-visible:text-offwhite", dot: "bg-royal text-offwhite group-hover:bg-offwhite group-hover:text-royal" },
  { slug: "ai-automation", image: "/img/service-ai.jpg", fill: "bg-graphite", ink: "group-hover:text-offwhite group-focus-visible:text-offwhite", dot: "bg-graphite text-offwhite group-hover:bg-offwhite group-hover:text-graphite" },
];

export async function generateMetadata({ params }: PageProps<"/[lang]/services">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { title, description } = (await getDictionary(lang)).meta.services;
  const links = alternates(lang, "/services");
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
      images: [SHARE_IMAGE],
    },
  };
}

export default async function ServicesPage({ params }: PageProps<"/[lang]/services">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.servicesPage;
  const href = (path: string) => localePath(lang, path);
  // The SEO row shows the dashboard photo from the SEO page, so it needs its own description.
  const services = dict.home.services.map((service, index) => ({
    ...service,
    ...media[index],
    alt: index === 0 ? t.seoPhotoAlt : service.alt,
  }));

  // The list of services and where this page sits, for search engines.
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: t.h1,
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.title,
        url: pageUrl(lang, `/services/${service.slug}`),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: dict.landing.home, item: pageUrl(lang, "/") },
        { "@type": "ListItem", position: 2, name: dict.common.header.services, item: pageUrl(lang, "/services") },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <SiteHeader reviewHref={href("/#review")} />

      <main id="main" className="flex-1 overflow-x-clip">
        <div className="mx-auto max-w-7xl px-4 pt-32 sm:px-6 md:pt-40">
          <nav aria-label={dict.landing.breadcrumb} className="text-sm text-slate">
            <ol className="m-0 flex list-none gap-2 p-0">
              <li>
                <Link href={href("/")} className="underline underline-offset-4 hover:text-royal">
                  {dict.landing.home}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-graphite">
                {dict.common.header.services}
              </li>
            </ol>
          </nav>

          <h1
            className="rise mt-6 max-w-5xl text-balance font-display text-[clamp(2.4rem,5.6vw,5rem)] font-bold leading-[1.02] tracking-[-0.04em]"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            {t.h1}
          </h1>
          <p
            className="rise mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-slate md:mt-8"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            {t.intro}
          </p>

          {/* One row per service. Hover or focus floods the row with the service's colour and slides
              its photo in; on small screens the photo is always shown above the words. */}
          <ul className="m-0 mt-14 list-none border-t border-graphite/15 p-0 md:mt-20">
            {services.map((service, index) => (
              <li
                key={service.slug}
                className="rise border-b border-graphite/15"
                style={{ "--i": index + 2 } as React.CSSProperties}
              >
                <Link
                  href={href(`/services/${service.slug}`)}
                  className="group relative isolate block overflow-hidden rounded-[1.75rem] outline-none transition-[border-radius] duration-500 focus-visible:ring-4 focus-visible:ring-royal/40"
                >
                  <span
                    aria-hidden
                    className={`absolute inset-0 -z-10 ${service.fill} [clip-path:inset(100%_0_0_0_round_1.75rem)] transition-[clip-path] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:[clip-path:inset(0_0_0_0_round_1.75rem)] group-focus-visible:[clip-path:inset(0_0_0_0_round_1.75rem)] motion-reduce:transition-none`}
                  />
                  <span className="grid items-center gap-5 px-1 py-7 sm:px-2 md:grid-cols-[minmax(0,5fr)_minmax(0,5fr)_auto] md:gap-10 md:px-8 md:py-10">
                    {/* Photo: a thumbnail on phones, a slide-in panel on wide screens */}
                    <span className="relative block aspect-[16/9] overflow-hidden rounded-[1.25rem] md:hidden">
                      <Image src={service.image} alt={service.alt} fill sizes="100vw" className="object-cover" />
                    </span>
                    <span
                      className={`font-display text-[clamp(2rem,4.2vw,3.75rem)] font-bold leading-[1.02] tracking-[-0.035em] text-graphite transition-colors duration-300 ${service.ink}`}
                    >
                      {service.title}
                    </span>{" "}
                    <span className={`block text-slate transition-colors duration-300 ${service.ink}`}>
                      <span className="block font-display text-xl font-semibold leading-snug text-graphite transition-colors duration-300 group-hover:text-inherit group-focus-visible:text-inherit">
                        {service.problem}
                      </span>{" "}
                      <span className="mt-2 block text-base leading-relaxed opacity-90">{service.text}</span>
                    </span>
                    <span className="relative hidden h-28 w-44 md:block">
                      <span className="absolute inset-0 overflow-hidden rounded-[1.25rem] opacity-0 [clip-path:inset(0_0_0_100%_round_1.25rem)] transition-[clip-path,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:[clip-path:inset(0_0_0_0_round_1.25rem)] group-focus-visible:opacity-100 group-focus-visible:[clip-path:inset(0_0_0_0_round_1.25rem)] motion-reduce:transition-none">
                        <Image src={service.image} alt="" fill sizes="11rem" className="object-cover" />
                      </span>
                      <span className={`absolute right-0 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full ${service.dot} shadow-[0_10px_30px_-12px_rgba(22,25,31,0.6)] transition-[transform,background-color,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[calc(50%+2px)] group-hover:translate-x-3 group-hover:rotate-45`}>
                        <ArrowUpRight size={22} weight="bold" aria-hidden />
                      </span>
                    </span>
                    <span className="flex items-center gap-2 font-display font-semibold text-royal md:hidden">
                      {service.guide}
                      <ArrowUpRight size={16} weight="bold" aria-hidden />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* One call to action, the same free review the whole site offers */}
          <div className="reveal mt-16 flex flex-col items-start gap-6 md:mt-24 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl font-display text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-snug tracking-[-0.01em]">
              {t.closing}
            </p>
            <TalkButton href={href("/#review")} label={dict.landing.getReview} />
          </div>
        </div>
      </main>

      <SiteFooter lang={lang} path="/services" t={dict.footer} />
    </>
  );
}
