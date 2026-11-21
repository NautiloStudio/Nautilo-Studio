"use client";

import { useEffect, useState, useSyncExternalStore, type FormEvent } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { DownloadSimple } from "@phosphor-icons/react";
import { useLocale } from "@/i18n/LocaleProvider";

// A short form in front of each PDF guide: name, work email, company, role and whether the
// visitor sells on Amazon. The answers go to the leads table (message starting "Guide download") for lead analysis,
// then the download starts. A visitor who already filled it in on this browser downloads directly.
const SEEN = "nautilo-guide-lead";
const subscribeNever = () => () => {};

type Status = "closed" | "open" | "sending" | "done" | "error";

export default function GuideDownload({ slug, file }: { slug: string; file: string }) {
  const { t, href, lang } = useLocale();
  const f = t.guideForm;
  const [status, setStatus] = useState<Status>("closed");
  const ready = useSyncExternalStore(subscribeNever, () => true, () => false);

  const startDownload = () => {
    const link = document.createElement("a");
    link.href = file;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const known = () => {
    try {
      return window.localStorage.getItem(SEEN) === "1";
    } catch {
      return false;
    }
  };

  // Arriving from the home page on /blog#guide-<slug> (or following such a link while already on
  // the blog) opens this guide's form. The first check runs a tick after mount, not inside the effect.
  useEffect(() => {
    const check = () => {
      if (window.location.hash === `#guide-${slug}` && !known()) setStatus("open");
    };
    const timer = window.setTimeout(check, 0);
    window.addEventListener("hashchange", check);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", check);
    };
  }, [slug]);

  function open() {
    if (known()) {
      startDownload();
      track("Guide download", { guide: slug, lang, returning: true });
      setStatus("done");
      return;
    }
    setStatus("open");
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setStatus("sending");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          variant: "guide",
          lang,
          guide: slug,
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          role: data.get("role"),
          amazon: data.get("amazon"),
          consent: data.get("consent") === "on",
          website: data.get("website"),
          page: window.location.pathname,
        }),
      });
      if (!response.ok) throw new Error(`Guide lead failed: ${response.status}`);
      try {
        window.localStorage.setItem(SEEN, "1");
      } catch {}
      startDownload();
      track("Guide download", { guide: slug, lang, returning: false });
      setStatus("done");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  const button =
    "inline-flex items-center gap-2 font-display font-semibold text-royal underline-offset-4 hover:underline";

  if (status === "closed") {
    return (
      <button type="button" onClick={open} className={`mt-auto self-start pt-2 ${button}`}>
        {t.gallery.download}
        <DownloadSimple size={16} weight="bold" aria-hidden />
      </button>
    );
  }

  if (status === "done") {
    return (
      <div role="status" className="mt-auto rounded-2xl bg-offwhite p-4">
        <p className="font-display font-semibold text-graphite">{f.done}</p>
        <a href={file} download className={`mt-2 ${button}`}>
          {f.again}
          <DownloadSimple size={16} weight="bold" aria-hidden />
        </a>
      </div>
    );
  }

  const field =
    "w-full rounded-xl bg-offwhite px-4 py-3 text-graphite ring-1 ring-sand transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-royal";
  const label = "mb-1.5 block text-sm font-medium text-graphite";
  const id = (name: string) => `${slug}-${name}`;

  return (
    <form onSubmit={submit} className="relative mt-2 space-y-4 rounded-2xl bg-offwhite/60 p-4 ring-1 ring-sand sm:p-5">
      <div>
        <p className="font-display text-lg font-semibold">{f.title}</p>
        <p className="mt-1 text-sm text-slate">{f.intro}</p>
      </div>
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={id("website")}>Website</label>
        <input id={id("website")} name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={id("name")} className={label}>{f.name}</label>
          <input id={id("name")} name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor={id("email")} className={label}>{f.email}</label>
          <input id={id("email")} name="email" type="email" required autoComplete="email" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor={id("company")} className={label}>
          {f.company} <span className="font-normal text-slate">({f.optional})</span>
        </label>
        <input id={id("company")} name="company" autoComplete="organization" className={field} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={id("role")} className={label}>{f.role}</label>
          <select id={id("role")} name="role" required defaultValue="" className={field}>
            <option value="" disabled>{f.choose}</option>
            {f.roles.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={id("amazon")} className={label}>{f.amazon}</label>
          <select id={id("amazon")} name="amazon" required defaultValue="" className={field}>
            <option value="" disabled>{f.choose}</option>
            {f.amazonOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <label className="flex items-start gap-3 text-sm text-slate">
        <input name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-royal" />
        <span>
          {f.consent}{" "}
          <Link href={href("/privacy")} className="text-graphite underline underline-offset-4 hover:text-royal">
            {t.form.privacyLink}
          </Link>
          .
        </span>
      </label>
      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-[#b12704]">
          {f.error}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={!ready || status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-royal px-5 py-3 font-display font-semibold text-offwhite transition-transform duration-150 ease-out active:scale-[0.98] disabled:opacity-70"
        >
          {status === "sending" ? f.sending : f.submit}
          <DownloadSimple size={16} weight="bold" aria-hidden />
        </button>
        <button type="button" onClick={() => setStatus("closed")} className="text-sm text-slate underline-offset-4 hover:underline">
          {f.cancel}
        </button>
      </div>
    </form>
  );
}
