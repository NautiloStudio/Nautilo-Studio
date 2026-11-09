import { after, NextResponse } from "next/server";
import { hasLocale } from "@/i18n/config";
import { sendLeadEmails, type Lead } from "@/lib/lead-emails";
import { getSupabase } from "@/lib/supabase";

// Both website forms post here. The lead is saved in Supabase first (same `leads` table and
// columns as before), then the emails go out after the response, so the visitor never waits on them.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  // Hidden field that people never see: bots that fill it get a quiet success and nothing is saved.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const variant = body.variant === "review" ? "review" : body.variant === "talk" ? "talk" : null;
  const lang = clean(body.lang, 5);
  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const message = clean(body.message, 4000);
  const listing = clean(body.listing, 500);

  const valid =
    variant &&
    hasLocale(lang) &&
    name &&
    EMAIL.test(email) &&
    (variant === "talk" ? message.length > 0 : /^https?:\/\/\S+$/i.test(listing));
  if (!valid) return NextResponse.json({ error: "invalid" }, { status: 400 });

  const lead: Lead = {
    variant,
    lang,
    name,
    email,
    message: variant === "talk" ? message : null,
    listing: variant === "review" ? listing : null,
  };

  const { error } = await getSupabase().from("leads").insert({
    source: lead.variant,
    name: lead.name,
    email: lead.email,
    message: lead.message,
    listing_url: lead.listing,
  });
  if (error) {
    console.error("Lead insert failed:", error);
    return NextResponse.json({ error: "save" }, { status: 500 });
  }

  after(() => sendLeadEmails(lead));
  return NextResponse.json({ ok: true });
}
