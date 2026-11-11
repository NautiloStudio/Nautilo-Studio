import Link from "next/link";
import { localeNames, localePath, locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

// The footer on every page, with links to the same page in each language.
export default function SiteFooter({
  lang,
  path,
  t,
}: {
  lang: Locale;
  path: string;
  t: Dictionary["footer"];
}) {
  return (
    <footer className="mx-auto mt-10 flex w-full max-w-7xl flex-col gap-4 px-4 pb-10 text-sm text-slate sm:px-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Nautilo Studio. {t.tagline}</p>
        <p>
          <Link href={localePath(lang, "/blog")} className="underline underline-offset-4 hover:text-royal">
            Blog
          </Link>
          {" · "}
          {t.student}{" "}
          <Link
            href={localePath(lang, "/privacy")}
            className="underline underline-offset-4 hover:text-royal"
          >
            {t.privacy}
          </Link>
        </p>
      </div>
      <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-2 p-0">
        {locales.map((code) => (
          <li key={code}>
            <a
              href={localePath(code, path)}
              hrefLang={code}
              lang={code}
              aria-current={code === lang ? "true" : undefined}
              className={
                code === lang
                  ? "font-semibold text-graphite"
                  : "underline underline-offset-4 hover:text-royal"
              }
            >
              {localeNames[code]}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
