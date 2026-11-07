import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import Nautilus from "@/components/Nautilus";
import SiteHeader from "@/components/SiteHeader";
import TeamCarousel from "@/components/TeamCarousel";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL, alternates, hasLocale, localeTags } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { team } from "@/lib/team";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { title, description } = (await getDictionary(lang)).meta.about;
  const links = alternates(lang, "/about");
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

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.about;
  const members = dict.common.team.members;

  // Who's who, for search engines and AI answer engines.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nautilo Studio",
    url: SITE_URL,
    description: dict.meta.about.description,
    member: team.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: members[member.name as keyof typeof members]?.role ?? member.role,
      sameAs: [member.linkedin],
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />

      <main id="main" className="flex-1 overflow-x-clip">
        {/* Intro */}
        <section className="mx-auto max-w-7xl px-4 pt-32 sm:px-6 md:pt-40">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,8fr)_minmax(0,4fr)]">
            <div>
              <p
                className="rise font-display text-sm font-semibold uppercase tracking-[0.14em] text-royal"
                style={{ "--i": 0 } as React.CSSProperties}
              >
                {t.label}
              </p>
              <h1
                className="rise mt-4 font-display text-[clamp(2.4rem,5.6vw,5rem)] font-bold leading-[1.03] tracking-[-0.04em]"
                style={{ "--i": 1 } as React.CSSProperties}
              >
                {t.title}
              </h1>
              <p
                className="rise mt-6 max-w-2xl text-lg leading-relaxed text-slate sm:text-xl"
                style={{ "--i": 2 } as React.CSSProperties}
              >
                {t.intro}
              </p>
              <ul
                className="rise m-0 mt-8 flex list-none flex-wrap gap-2 p-0"
                style={{ "--i": 3 } as React.CSSProperties}
              >
                {t.facts.map((fact) => (
                  <li
                    key={fact}
                    className="rounded-full bg-white px-4 py-2 font-display text-sm font-semibold ring-1 ring-sand"
                  >
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rise hidden md:block" style={{ "--i": 2 } as React.CSSProperties}>
              <Nautilus className="mx-auto w-full max-w-xs rotate-12" />
            </div>
          </div>
        </section>

        {/* Story */}
        <section aria-labelledby="story" className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 md:mt-28">
          <h2 id="story" className="sr-only">
            {t.storyHeading}
          </h2>
          <ol className="m-0 grid list-none gap-5 p-0 md:grid-cols-3">
            {t.story.map((item, index) => (
              <li key={item.heading} className="reveal rounded-[2rem] bg-white p-8">
                <p className="font-display text-sm font-semibold text-royal">0{index + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.01em]">
                  {item.heading}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-slate">{item.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Team */}
        <section
          id="team"
          aria-labelledby="team-heading"
          className="mx-auto mt-24 max-w-7xl scroll-mt-24 px-4 sm:px-6 md:mt-36"
        >
          <div className="reveal max-w-3xl">
            <h2
              id="team-heading"
              className="font-display text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]"
            >
              {t.teamHeading}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
              {t.teamText}
            </p>
          </div>
          <div className="mt-10">
            <TeamCarousel />
          </div>
        </section>

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

<SiteFooter lang={lang} path="/about" t={dict.footer} />
    </>
  );
}
