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

  // "guide" = the short form before a PDF guide download (blog): saved for lead analysis, no emails.
  if (body.variant === "guide") return saveGuideLead(body);

  const variant = body.variant === "review" ? "review" : body.variant === "talk" ? "talk" : null;
  const lang = clean(body.lang, 5);
  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const message = clean(body.message, 4000);
  const listing = clean(body.listing, 500);
  // The page the form was sent from (funnel tracking). Only a plain site path is kept.
  const pagePath = clean(body.page, 300);
  const page = /^\/[A-Za-z0-9\-_/]*$/.test(pagePath) ? pagePath : null;

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
    page,
  };

  const { error } = await getSupabase().from("leads").insert({
    source: lead.variant,
    name: lead.name,
    email: lead.email,
    message: lead.message,
    listing_url: lead.listing,
    page: lead.page,
  });
  if (error) {
    console.error("Lead insert failed:", error);
    return NextResponse.json({ error: "save" }, { status: 500 });
  }

  after(() => sendLeadEmails(lead));
  return NextResponse.json({ ok: true });
}

const GUIDES = ["listing-optimization", "data-analysis", "ai-automation"];

// Guide downloads: name, email, company, role and whether the visitor sells on Amazon. Stored in the
// same `leads` table and columns (source "guide"); the extra answers go in `message` as one line.
async function saveGuideLead(body: Record<string, unknown>) {
  const lang = clean(body.lang, 5);
  const guide = clean(body.guide, 60);
  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const company = clean(body.company, 160);
  const role = clean(body.role, 80);
  const amazon = clean(body.amazon, 80);
  const pagePath = clean(body.page, 300);
  const page = /^\/[A-Za-z0-9\-_/]*$/.test(pagePath) ? pagePath : null;

  const valid =
    hasLocale(lang) && GUIDES.includes(guide) && name && EMAIL.test(email) && role && amazon && body.consent === true;
  if (!valid) return NextResponse.json({ error: "invalid" }, { status: 400 });

  const message = [
    `Guide: ${guide}`,
    `Company: ${company || "-"}`,
    `Role: ${role}`,
    `Sells on Amazon: ${amazon}`,
    `Language: ${lang}`,
    "Consent to email: yes",
  ].join(" | ");

  const { error } = await getSupabase().from("leads").insert({
    source: "guide",
    name,
    email,
    message,
    listing_url: null,
    page,
  });
  if (error) {
    console.error("Guide lead insert failed:", error);
    return NextResponse.json({ error: "save" }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
