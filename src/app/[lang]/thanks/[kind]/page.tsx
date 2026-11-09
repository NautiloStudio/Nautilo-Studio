import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import GuideGallery from "@/components/GuideGallery";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { withCounts } from "@/components/withCounts";
import { hasLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// Where the forms land after a successful send. Vercel Web Analytics counts each visit to
// /thanks/review and /thanks/message as a conversion, since the free plan has no custom events.
const kinds = { review: "review", message: "talk" } as const;
type Kind = keyof typeof kinds;
const isKind = (value: string): value is Kind => value in kinds;

export function generateStaticParams() {
  return Object.keys(kinds).map((kind) => ({ kind }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/thanks/[kind]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = (await getDictionary(lang)).thanks;
  return { title: t.metaTitle, robots: { index: false, follow: true } };
}

export default async function ThanksPage({ params }: PageProps<"/[lang]/thanks/[kind]">) {
  const { lang, kind } = await params;
  if (!hasLocale(lang) || !isKind(kind)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.thanks;
  const copy = t[kinds[kind]];

  return (
    <>
      <SiteHeader reviewHref={localePath(lang, "/#review")} />

      <main id="main" className="flex-1 overflow-x-clip">
        <section className="mx-auto max-w-3xl px-4 pt-36 text-center sm:px-6 md:pt-44">
          <p
            className="rise inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-display text-sm font-semibold text-royal ring-1 ring-sand"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            <CheckCircle size={18} weight="fill" className="text-cyan" aria-hidden />
            {copy.label}
          </p>
          <h1
            className="rise mt-6 font-display text-[clamp(2.4rem,5.6vw,4.5rem)] font-bold leading-[1.04] tracking-[-0.04em]"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            {copy.title}
          </h1>
          <p
            className="rise mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate sm:text-xl"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            {copy.text}
          </p>
          <Link
            href={localePath(lang, "/")}
            className="rise mt-9 inline-block font-display font-semibold text-graphite underline decoration-sand decoration-2 underline-offset-8 transition-colors hover:decoration-royal"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            {t.back}
          </Link>
        </section>

        <GuideGallery heading={withCounts(t.guidesHeading)} intro={t.guidesIntro} />
      </main>

      <SiteFooter lang={lang} path={`/thanks/${kind}`} t={dict.footer} />
    </>
  );
}
