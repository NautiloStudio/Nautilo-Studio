"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale } from "@/i18n/LocaleProvider";

type Status = "idle" | "sending" | "sent" | "error";
type Variant = "talk" | "review";

const subscribeNever = () => () => {};


export default function ContactForm({ variant = "talk" }: { variant?: Variant }) {
  const [status, setStatus] = useState<Status>("idle");
  // False until React has hydrated, so the form can never submit natively.
  const ready = useSyncExternalStore(subscribeNever, () => true, () => false);
  const { t, href, lang } = useLocale();
  const router = useRouter();
  const form = t.form;
  const text = form[variant];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.currentTarget;
    const data = new FormData(target);
    setStatus("sending");

    // The server saves the lead and emails the team (see app/api/lead). On success the visitor
    // moves to a thank-you page, which Vercel Analytics counts as a conversion.
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          variant,
          lang,
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          listing: data.get("listing"),
          website: data.get("website"),
        }),
      });
      if (!response.ok) throw new Error(`Lead request failed: ${response.status}`);
      target.reset();
      setStatus("sent");
      router.push(href(variant === "review" ? "/thanks/review" : "/thanks/message"));
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="self-center rounded-2xl bg-white/5 p-8">
        <p className="font-display text-2xl font-semibold text-cyan">{text.sentTitle}</p>
        <p className="mt-3 text-offwhite/80">{text.sentText}</p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl bg-white/8 px-4 py-3.5 text-offwhite ring-1 ring-white/25 transition-shadow duration-150 placeholder:text-offwhite/60 focus:outline-none focus:ring-2 focus:ring-cyan";
  const label = "mb-2 block text-sm font-medium text-offwhite";

  return (
    <form method="post" onSubmit={handleSubmit} className="relative space-y-5">
      {/* Left empty by people (it's hidden); bots that fill it are ignored by the server. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${variant}-website`}>Website</label>
        <input id={`${variant}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor={`${variant}-name`} className={label}>
          {form.name}
        </label>
        <input id={`${variant}-name`} name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor={`${variant}-email`} className={label}>
          {form.email}
        </label>
        <input
          id={`${variant}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </div>
      {variant === "review" ? (
        <div>
          <label htmlFor="review-listing" className={label}>
            {form.listing}
          </label>
          <input
            id="review-listing"
            name="listing"
            type="url"
            required
            placeholder="https://www.amazon.com/dp/..."
            className={field}
          />
        </div>
      ) : (
        <div>
          <label htmlFor="talk-message" className={label}>
            {form.message}
          </label>
          <textarea
            id="talk-message"
            name="message"
            required
            rows={4}
            placeholder={form.messagePlaceholder}
            className={field}
          />
        </div>
      )}
      <button
        type="submit"
        disabled={!ready || status === "sending"}
        className="w-full rounded-full bg-cyan px-6 py-4 font-display font-semibold text-graphite transition-transform duration-150 ease-out active:scale-[0.98] disabled:opacity-70"
      >
        {status === "sending" ? form.sending : text.button}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-apricot">
          {text.error} {form.retry} nautilostd@gmail.com.
        </p>
      )}
      <p className="text-sm text-offwhite/75">
        {form.privacyBefore}{" "}
        <Link href={href("/privacy")} className="underline underline-offset-4 hover:text-cyan">
          {form.privacyLink}
        </Link>
        .
      </p>
    </form>
  );
}
