import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { alternates, hasLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { title, description } = (await getDictionary(lang)).meta.privacy;
  return { title, description, alternates: alternates(lang, "/privacy") };
}

export default async function PrivacyPage({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = (await getDictionary(lang)).privacy;

  return (
    <main id="main" className="mx-auto w-full max-w-2xl flex-1 px-4 py-20 sm:px-6">
      <Link
        href={localePath(lang, "/")}
        className="text-sm font-medium text-royal underline underline-offset-4"
      >
        {t.back}
      </Link>
      <h1 className="mt-8 font-display text-4xl font-bold tracking-tight">{t.title}</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate">
        {t.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          {t.contact}{" "}
          <a href="mailto:nautilostd@gmail.com" className="text-royal underline underline-offset-4">
            nautilostd@gmail.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
