import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, DownloadSimple, FilePdf } from "@phosphor-icons/react/dist/ssr";
import type { BlogPost } from "@/content/blog/types";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

// Home page: what visitors can take away for free, the PDF guides and the blog, instead of a
// second list of services. Each PDF opens its short download form on the blog.
const pdfs = [
  { slug: "listing-optimization", tile: "bg-apricot" },
  { slug: "data-analysis", tile: "bg-royal" },
  { slug: "ai-automation", tile: "bg-graphite" },
] as const;

type Props = { lang: Locale; dict: Dictionary; posts: BlogPost[] };

export default function ResourcesSection({ lang, dict, posts }: Props) {
  const t = dict.home.resources;
  const href = (path: string) => localePath(lang, path);

  return (
    <section id="resources" aria-labelledby="resources-heading" className="mx-auto mt-28 max-w-7xl scroll-mt-24 px-4 sm:px-6 md:mt-44">
      <h2 id="resources-heading" className="reveal max-w-4xl font-display text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
        {t.heading}
      </h2>
      <p className="reveal mt-5 max-w-2xl text-lg leading-relaxed text-slate">{t.intro}</p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        {/* Free PDF guides */}
        <div className="reveal">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-royal">{t.guidesLabel}</p>
          <ul className="m-0 mt-5 grid list-none gap-3 p-0">
            {pdfs.map((pdf) => {
              const guide = dict.common.guides[pdf.slug];
              return (
                <li key={pdf.slug}>
                  <Link
                    href={href(`/blog#guide-${pdf.slug}`)}
                    className="group flex items-center gap-4 rounded-[1.5rem] bg-white p-4 ring-1 ring-sand transition-shadow hover:ring-2 hover:ring-royal sm:p-5"
                  >
                    <span className={`flex h-16 w-12 shrink-0 items-center justify-center rounded-lg ${pdf.tile}`} aria-hidden>
                      <FilePdf size={26} weight="duotone" className={pdf.tile === "bg-apricot" ? "text-graphite" : "text-offwhite"} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate">
                        {t.guideMeta}
                        {dict.common.pdfLanguage && ` (${dict.common.pdfLanguage})`}
                      </span>
                      <span className="mt-1 block font-display text-lg font-semibold leading-snug">{guide.title}</span>
                      <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-royal">
                        {t.guideCta}
                        <DownloadSimple size={14} weight="bold" aria-hidden />
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Latest articles */}
        <div className="reveal">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-royal">{t.blogLabel}</p>
          <ul className="m-0 mt-5 grid list-none gap-4 p-0 sm:grid-cols-2">
            {posts.slice(0, 2).map((post) => (
              <li key={post.slug}>
                <Link
                  href={href(`/blog/${post.slug}`)}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-sand transition-shadow hover:ring-2 hover:ring-royal"
                >
                  <span className="relative block aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.hero.image}
                      alt={post.hero.alt}
                      fill
                      sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-(--ease-out-strong) group-hover:scale-[1.03]"
                    />
                  </span>
                  <span className="flex flex-1 flex-col gap-2 p-5">
                    <span className="text-xs text-slate">
                      {post.readMinutes} {dict.blog.minRead}
                    </span>
                    <span className="font-display text-lg font-semibold leading-snug">{post.h1}</span>
                    <span className="text-sm leading-relaxed text-slate">{post.excerpt}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={href("/blog")}
            className="group mt-5 inline-flex items-center gap-3 rounded-full bg-graphite py-2 pl-6 pr-2 font-display font-semibold text-offwhite transition-colors hover:bg-royal"
          >
            {t.blogCta}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-(--ease-out-strong) group-hover:-translate-y-px group-hover:translate-x-0.5">
              <ArrowUpRight size={18} weight="bold" aria-hidden />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
