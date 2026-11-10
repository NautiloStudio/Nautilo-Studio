// Emails sent when someone uses a form: an alert to the team, and a confirmation to the person.
// They go out through Resend (resend.com). Settings live in Vercel's environment variables:
//   RESEND_API_KEY  required for any email; without it the lead is still saved, just not emailed
//   LEAD_ALERT_TO   who gets the team alert (default: the team Gmail)
//   RESEND_FROM     sender, e.g. "Nautilo Studio <hello@nautilostudio.com>". Set it only once the
//                   domain is verified in Resend; until then alerts use Resend's test sender and
//                   no confirmation goes to the person (Resend only delivers test mail to the account owner).
import type { Locale } from "@/i18n/config";

export type Lead = {
  variant: "review" | "talk";
  lang: Locale;
  name: string;
  email: string;
  message: string | null;
  listing: string | null;
};

const TEAM_INBOX = "nautilostd@gmail.com";
const TEST_SENDER = "Nautilo Studio <onboarding@resend.dev>";

const confirmations: Record<Locale, Record<Lead["variant"], { subject: string; body: string }> & { sign: string }> = {
  en: {
    review: {
      subject: "We have your listing",
      body: "Thanks for sending us your Amazon listing. We’ll review its title, bullets, A+ content and images, and email you what we would improve first.",
    },
    talk: {
      subject: "We have your message",
      body: "Thanks for writing to us. One of us will reply to this email address.",
    },
    sign: "Carlo, Maria, Veronika and Filippo\nNautilo Studio",
  },
  es: {
    review: {
      subject: "Hemos recibido tu ficha",
      body: "Gracias por enviarnos tu ficha de Amazon. Revisaremos su título, viñetas, contenido A+ e imágenes, y te escribiremos qué mejoraríamos primero.",
    },
    talk: {
      subject: "Hemos recibido tu mensaje",
      body: "Gracias por escribirnos. Uno de nosotros te responderá a esta dirección de correo.",
    },
    sign: "Carlo, Maria, Veronika y Filippo\nNautilo Studio",
  },
  fr: {
    review: {
      subject: "Nous avons bien reçu votre fiche",
      body: "Merci de nous avoir envoyé votre fiche Amazon. Nous allons analyser son titre, ses puces, son contenu A+ et ses images, puis vous écrire ce que nous améliorerions en premier.",
    },
    talk: {
      subject: "Nous avons bien reçu votre message",
      body: "Merci de nous avoir écrit. L’un de nous vous répondra à cette adresse e-mail.",
    },
    sign: "Carlo, Maria, Veronika et Filippo\nNautilo Studio",
  },
  de: {
    review: {
      subject: "Wir haben Ihr Listing erhalten",
      body: "Danke, dass Sie uns Ihr Amazon-Listing geschickt haben. Wir prüfen Titel, Bullet Points, A+ Content und Bilder und schreiben Ihnen, was wir zuerst verbessern würden.",
    },
    talk: {
      subject: "Wir haben Ihre Nachricht erhalten",
      body: "Danke für Ihre Nachricht. Eine oder einer von uns antwortet an diese E-Mail-Adresse.",
    },
    sign: "Carlo, Maria, Veronika und Filippo\nNautilo Studio",
  },
  it: {
    review: {
      subject: "Abbiamo ricevuto la tua scheda",
      body: "Grazie per averci inviato la tua scheda Amazon. Analizzeremo titolo, punti elenco, contenuti A+ e immagini, e ti scriveremo cosa miglioreremmo per primo.",
    },
    talk: {
      subject: "Abbiamo ricevuto il tuo messaggio",
      body: "Grazie per averci scritto. Uno di noi ti risponderà a questo indirizzo email.",
    },
    sign: "Carlo, Maria, Veronika e Filippo\nNautilo Studio",
  },
};

const escape = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const toHtml = (text: string) =>
  `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5;color:#16191f">${escape(text)
    .split("\n")
    .join("<br>")}</div>`;

async function send(apiKey: string, email: Record<string, unknown>) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(email),
  });
  if (!response.ok) {
    throw new Error(`Resend ${response.status}: ${await response.text()}`);
  }
}

export async function sendLeadEmails(lead: Lead) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY is not set: lead saved, no email sent.");
    return;
  }
  const verifiedSender = process.env.RESEND_FROM;
  const from = verifiedSender || TEST_SENDER;
  const teamInbox = process.env.LEAD_ALERT_TO || TEAM_INBOX;

  const isReview = lead.variant === "review";
  const alertText = [
    isReview ? "New free listing review request" : "New message from the website",
    "",
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    isReview ? `Listing: ${lead.listing}` : `Message:\n${lead.message}`,
    `Language: ${lead.lang}`,
    "",
    "Reply to this email to answer them directly. The lead is also saved in the Supabase leads table.",
  ].join("\n");

  const jobs = [
    send(apiKey, {
      from,
      to: [teamInbox],
      reply_to: lead.email,
      subject: `${isReview ? "Free review request" : "New message"}: ${lead.name}`,
      text: alertText,
      html: toHtml(alertText),
    }),
  ];

  // Confirmations only from a verified domain, so they reach any inbox and don't look like spam.
  if (verifiedSender) {
    const copy = confirmations[lead.lang];
    const text = `${copy[lead.variant].body}\n\n${copy.sign}`;
    jobs.push(
      send(apiKey, {
        from,
        to: [lead.email],
        reply_to: teamInbox,
        subject: copy[lead.variant].subject,
        text,
        html: toHtml(text),
      }),
    );
  }

  const results = await Promise.allSettled(jobs);
  for (const result of results) {
    if (result.status === "rejected") console.error("Lead email failed:", result.reason);
  }
}
