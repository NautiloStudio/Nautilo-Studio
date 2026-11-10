import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import CaseStudy from "@/components/CaseStudy";
import ContactForm from "@/components/ContactForm";
import GuideGallery from "@/components/GuideGallery";
import ListingCompare from "@/components/ListingCompare";
import Nautilus from "@/components/Nautilus";
import SellerMarquee from "@/components/SellerMarquee";
import SiteHeader from "@/components/SiteHeader";
import StepDemo from "@/components/StepDemo";
import TalkButton from "@/components/TalkButton";
import SiteFooter from "@/components/SiteFooter";
import { withCounts } from "@/components/withCounts";
import { hasLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { notFound } from "next/navigation";

// Pictures and links for each service; the words come from the dictionary, in the same order.
const serviceMedia = [
  { image: "/img/service-ads.jpg", tile: "bg-cyan", href: "/amazon-seo" },
  { image: "/img/service-listing.jpg", tile: "bg-apricot", href: "/listing-optimization" },
  { image: "/img/service-data.jpg", tile: "bg-royal", href: "/data-analysis" },
  { image: "/img/service-ai.jpg", tile: "bg-graphite", href: "/ai-automation" },
];
const demos = ["analyse", "optimise", "automate"] as const;

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.home;
  const href = (path: string) => localePath(lang, path);
  const services = t.services.map((service, index) => ({ ...service, ...serviceMedia[index] }));
  const steps = t.steps.map((step, index) => ({ ...step, demo: demos[index] }));

  return (
    <>
      <SiteHeader onHome />

      <main id="main" className="flex-1 overflow-x-clip">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 pt-32 text-center sm:px-6 md:pt-40">
          <h1
            className="rise mx-auto max-w-6xl font-display text-[clamp(2.6rem,6.4vw,6rem)] font-bold leading-[1.02] tracking-[-0.04em]"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            {t.title}
          </h1>
          <p
            className="rise mx-auto mt-7 max-w-xl text-lg leading-relaxed text-slate sm:text-xl"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            {t.subtitle}
          </p>
          <div
            className="rise mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            <TalkButton href="#review" label={t.getReview} />
            <a
              href="#services"
              className="font-display font-semibold text-graphite underline decoration-sand decoration-2 underline-offset-8 py-3 transition-colors hover:decoration-royal"
            >
              {t.seeServices}
            </a>
          </div>
          <p
            className="rise mt-5 text-slate"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            {t.notSure}{" "}
            <a
              href="#contact"
              className="font-medium text-graphite underline underline-offset-4 transition-colors hover:text-royal"
            >
              {t.talk}
            </a>
            .
          </p>

          <div
            className="rise relative mx-auto mt-16 max-w-5xl text-left md:mt-20"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <Nautilus className="pointer-events-none absolute -right-2 -top-12 z-10 w-24 rotate-12 md:-right-20 md:-top-20 md:w-44" />
            <ListingCompare />
          </div>
        </section>

        {/* Who we're built for */}
        <SellerMarquee t={dict.marquee} />

        {/* Statement */}
        <section className="mx-auto max-w-6xl px-4 py-28 text-center sm:px-6 md:py-44">
          <p className="font-display text-[clamp(2.2rem,5.6vw,5.25rem)] font-bold leading-[1.06] tracking-[-0.035em]">
            {t.statement.split(" ").map((word, i) => (
              <span key={i} className="ink-word">
                {word}{" "}
              </span>
            ))}
          </p>
          <p className="reveal mx-auto mt-10 max-w-xl text-lg leading-relaxed text-slate sm:text-xl">
            {t.statementText}
          </p>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="reveal max-w-3xl font-display text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            {t.servicesHeading}
          </h2>
          {/* Cards stack on top of each other as you scroll, each leaving its label visible. */}
          <ol className="m-0 mt-12 list-none space-y-6 p-0">
            {services.map((service, index) => (
              <li
                key={service.href}
                className="sticky"
                style={
                  {
                    top: `calc(6.5rem + ${index} * var(--stack-step))`,
                  } as React.CSSProperties
                }
              >
                <article className="grid gap-6 rounded-[2rem] bg-white p-5 shadow-[0_-18px_50px_-28px_rgba(22,25,31,0.35)] ring-1 ring-sand sm:p-6 md:h-[30rem] md:grid-cols-2 md:gap-10 md:p-8">
                  <div className="flex flex-col">
                    <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-slate">
                      {service.title}
                    </p>
                    <div className="mt-6 md:mt-auto">
                      <h3 className="font-display text-[clamp(1.6rem,3vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.02em]">
                        {service.problem}
                      </h3>
                      <p className="mt-3 max-w-md text-lg leading-relaxed text-slate">
                        {service.text}
                      </p>
                      <Link
                        href={href(service.href)}
                        className="group mt-6 inline-flex items-center gap-3 rounded-full bg-royal py-2 pl-5 pr-2 font-display font-semibold text-offwhite transition-transform duration-150 ease-out active:scale-[0.97]"
                      >
                        {service.guide}
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-(--ease-out-strong) group-hover:-translate-y-px group-hover:translate-x-0.5">
                          <ArrowUpRight size={16} weight="bold" aria-hidden />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`relative aspect-[16/10] overflow-hidden rounded-[1.5rem] md:aspect-auto ${service.tile}`}
                  >
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        {/* How we work */}
        <section
          id="how"
          className="steps-timeline mx-auto mt-28 max-w-7xl px-4 sm:px-6 md:mt-44"
        >
          <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
            <div className="md:sticky md:top-28">
              <h2 className="font-display text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                {t.howHeading}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-slate">
                {t.howText}
              </p>
              <Nautilus
                fillOnScroll
                className="mx-auto mt-10 hidden md:block md:w-[min(24rem,48vh)]"
              />
            </div>
            <div>
              {/* Below md the column layout has no sticky side, so a small shell follows the steps instead. */}
              <div className="pointer-events-none sticky top-24 z-10 flex h-0 justify-end pr-4 md:hidden">
                <Nautilus fillOnScroll className="h-24 w-24" />
              </div>
              <ol className="m-0 list-none space-y-8 p-0 md:pt-[26vh]">
                {steps.map((step) => (
                  <li key={step.word} className="glow-card rounded-[2rem]">
                    <div className="flex min-h-[46vh] flex-col justify-between gap-8 rounded-[2rem] bg-white p-6 md:p-10">
                      <StepDemo kind={step.demo} t={dict.demo} />
                      <div>
                        <p className="font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold tracking-[-0.03em] text-royal">
                          {step.word}
                        </p>
                        <p className="mt-3 max-w-md text-lg leading-relaxed text-slate">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Case study */}
        <CaseStudy t={dict.caseStudy} />

        {/* Free guides */}
        <GuideGallery heading={withCounts(dict.common.gallery.heading)} />

        {/* Free listing review */}
        <section
          id="review"
          className="on-dark mx-auto mt-28 max-w-7xl md:mt-44 px-4 sm:px-6"
        >
          <div className="grid gap-12 rounded-[2rem] bg-graphite px-8 py-14 text-offwhite md:grid-cols-2 md:gap-16 md:px-16 md:py-24">
            <div>
              <h2 className="font-display text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                {t.reviewHeading}
              </h2>
              <ol className="m-0 mt-8 list-none space-y-4 p-0">
                {dict.reviewSteps.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-4 text-lg leading-relaxed text-offwhite/85"
                  >
                    <span
                      className="w-4 shrink-0 font-display font-semibold text-cyan"
                      aria-hidden
                    >
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

        {/* Contact */}
        <section
          id="contact"
          className="on-dark mx-auto mt-5 max-w-7xl px-4 sm:px-6"
        >
          <div className="grid gap-12 rounded-[2rem] bg-royal px-8 py-14 text-offwhite md:grid-cols-2 md:gap-16 md:px-16 md:py-24">
            <div>
              <h2 className="font-display text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                {t.contactHeading}
              </h2>
              <p className="mt-5 font-display text-xl font-semibold text-cyan md:text-2xl">
                {t.contactOffer}
              </p>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-offwhite/80">
                {t.contactText}
              </p>
              <p className="mt-8 text-offwhite/80">
                {t.contactInbox}{" "}
                <a
                  href="mailto:nautilostd@gmail.com"
                  className="text-cyan underline underline-offset-4"
                >
                  nautilostd@gmail.com
                </a>
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

<SiteFooter lang={lang} path="/" t={dict.footer} />
    </>
  );
}
