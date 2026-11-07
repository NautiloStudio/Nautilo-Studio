"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import Link from "next/link";
import { getSupabase } from "@/lib/supabase";
import { useLocale } from "@/i18n/LocaleProvider";

type Status = "idle" | "sending" | "sent" | "error";
type Variant = "talk" | "review";

const subscribeNever = () => () => {};


export default function ContactForm({ variant = "talk" }: { variant?: Variant }) {
  const [status, setStatus] = useState<Status>("idle");
  // False until React has hydrated, so the form can never submit natively.
  const ready = useSyncExternalStore(subscribeNever, () => true, () => false);
  const { t, href } = useLocale();
  const form = t.form;
  const text = form[variant];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.currentTarget;
    const data = new FormData(target);
    setStatus("sending");

    // Both forms write to the leads table; `source` tells them apart.
    const isReview = variant === "review";

    try {
      const { error } = await getSupabase()
        .from("leads")
        .insert({
          source: variant,
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          message: isReview ? null : String(data.get("message") ?? "").trim(),
          listing_url: isReview ? String(data.get("listing") ?? "").trim() : null,
        });
      if (error) throw error;
      target.reset();
      setStatus("sent");
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
    <form method="post" onSubmit={handleSubmit} className="space-y-5">
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
