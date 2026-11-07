import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const AMAZON_SEO_GUIDE = "https://sell.amazon.com/blog/amazon-seo";
const TITLE_RULES = "https://sellercentral.amazon.com/gp/help/external/GYTR6SYGFA5E3EQC";
const SEARCH_TERMS_HELP = "https://sellercentral.amazon.com/help/hub/reference/external/G23501";

const p = (path: string) => localePath("de", path);

const title = "Amazon-SEO: So ranken Sie Produkte höher | Nautilo Studio";
const description =
  "Amazon-SEO für Händler in den USA: was Ihr Ranking bestimmt, wohin Ihre Keywords gehören und welche Fehler Sie vermeiden. Kostenloser Listing-Check.";

const page: GuideCopy["page"] = {
  slug: "amazon-seo",
  breadcrumb: "Amazon-SEO",
  question: "Wie ranken Sie in den Amazon-Suchergebnissen höher?",
  answer:
    "Amazon zeigt die Produkte, die am besten zu einer Suche passen und die Käufer am ehesten kaufen. Bringen Sie die Wörter, die Käufer eintippen, in Titel, Bullet Points und Backend-Suchbegriffe, und machen Sie das Listing überzeugend genug, um zu verkaufen. Diese Verkäufe bringen das Produkt zusammen mit einem guten Listing mit der Zeit nach oben.",
  description,
  image: {
    src: "/img/service-ads.jpg",
    alt: "Lupe, an ein kleines Paket gelehnt",
    tile: "bg-cyan",
  },
  updated: "2026-11-07",
  facts: [
    { value: 200, label: "Zeichen als Titellimit laut Amazons SEO-Leitfaden" },
    { value: 60, label: "Zeichen, die Amazon für den Titel empfiehlt" },
    { value: 2, suffix: "×", label: "So oft darf ein Wort höchstens im Titel stehen" },
    { value: 4, label: "Quellen für echte Suchbegriffe" },
  ],
  sections: [
    {
      id: "how-ranking-works",
      heading: "Wie entscheidet Amazon über Ihr Ranking?",
      body: (
        <ul>
          <li>
            <strong>Relevanz.</strong> Die Suchwörter stehen in Titel, Bullet Points, Beschreibung
            und Backend-Suchbegriffen.
          </li>
          <li>
            <strong>Conversion.</strong> Käufer klicken und kaufen. Bilder, Preis, Bewertungen und
            das Empfohlene Angebot spielen alle eine Rolle.
          </li>
          <li>
            <strong>Verkaufshistorie.</strong> Produkte, die sich stetig verkaufen, halten ihre
            Position meist.
          </li>
          <li>
            <strong>Listing-Qualität.</strong> Laut Amazon{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              können Listing-Qualität und Kontozustand zum Ranking beitragen
            </a>
            .
          </li>
        </ul>
      ),
    },
    {
      id: "find-keywords",
      heading: "Wie finden Sie die Keywords, die Käufer nutzen?",
      body: (
        <ul>
          <li>
            <strong>Die Amazon-Suchleiste.</strong> Tippen Sie Ihren Produktbegriff ein und notieren
            Sie, was Amazon vorschlägt.
          </li>
          <li>
            <strong>Product Opportunity Explorer.</strong> Ein kostenloses Seller-Central-Tool mit
            den wichtigsten Suchbegriffen einer Nische.
          </li>
          <li>
            <strong>Brand Analytics.</strong> Für Marken in der Markenregistrierung: welche Suchen zu
            Klicks und Verkäufen führen.
          </li>
          <li>
            <strong>Suchbegriffsbericht.</strong> Die echten Suchen, über die Käufer zu Ihren
            Sponsored-Products-Anzeigen kamen.
          </li>
        </ul>
      ),
    },
    {
      id: "where-to-put-keywords",
      heading: "Wohin gehören Ihre Keywords?",
      body: (
        <ul>
          <li>
            <strong>Titel.</strong> Zuerst, was das Produkt ist. Amazons Leitfaden nennt{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              ein Limit von 200 Zeichen und empfiehlt 60 oder weniger
            </a>
            , und die{" "}
            <a href={TITLE_RULES} target="_blank" rel="noopener noreferrer">
              Titelrichtlinien
            </a>{" "}
            erlauben ein Wort höchstens zweimal.
          </li>
          <li>
            <strong>Bullet Points.</strong> Ein Vorteil pro Punkt, mit Ihren Neben-Keywords dort, wo
            sie sich natürlich lesen.
          </li>
          <li>
            <strong>Beschreibung und A+ Content.</strong> Material, Maße, Pflege und Lieferumfang.
          </li>
          <li>
            <strong>Backend-Suchbegriffe.</strong> Synonyme und Tippfehler, ohne Wiederholungen,
            Markennamen oder ASINs. Prüfen Sie das{" "}
            <a href={SEARCH_TERMS_HELP} target="_blank" rel="noopener noreferrer">
              aktuelle Längenlimit
            </a>
            .
          </li>
        </ul>
      ),
    },
    {
      id: "common-mistakes",
      heading: "Was sind die häufigsten Fehler?",
      body: (
        <>
          <ul>
            <li>
              <strong>Keyword-Stuffing.</strong> Schwer zu lesen, und es kann gegen Amazons
              Titelrichtlinien verstoßen.
            </li>
            <li>
              <strong>Markennamen der Konkurrenz.</strong> Sie im Listing oder in den Suchbegriffen zu
              verwenden, verstößt gegen Amazons Richtlinien.
            </li>
            <li>
              <strong>Das Smartphone vergessen.</strong> Lange Titel werden abgeschnitten, also
              gehören die wichtigen Wörter nach vorn.
            </li>
            <li>
              <strong>Alles auf einmal ändern.</strong> Dann wissen Sie nicht, welche Änderung
              geholfen hat.
            </li>
          </ul>
          <p>
            Das Ranking bringt Käufer zu Ihnen. Unser{" "}
            <Link href={p("/listing-optimization")}>Leitfaden zur Listing-Optimierung</Link> zeigt,
            wie Sie aus diesen Besuchen Verkäufe machen.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: "Unterscheidet sich Amazon-SEO von Google-SEO?",
      answer:
        "Ja. Google rankt Seiten, die eine Frage beantworten, Amazon rankt Produkte, die Käufer wahrscheinlich kaufen. Auf Amazon zählen Conversion und Verkaufshistorie deutlich mehr.",
    },
    {
      question: "Wie lange dauert es, bis Amazon-SEO wirkt?",
      answer:
        "Das Ranking folgt den Verkäufen. Bewerten Sie eine Änderung deshalb über mehrere Wochen statt weniger Tage, und ändern Sie immer nur eine Sache.",
    },
    {
      question: "Muss ich für Anzeigen zahlen, um auf Amazon zu ranken?",
      answer:
        "Nein, aber sie können helfen. Laut Amazon können Sponsored-Products-Anzeigen Angebote in den Suchergebnissen nach oben bringen, und ihre Verkäufe fließen in die Historie Ihres Produkts ein.",
    },
    {
      question: "Kann Nautilo Studio mein Listing prüfen?",
      answer:
        "Ja. Schicken Sie uns ein Amazon-Listing über das Formular für den kostenlosen Check auf dieser Seite, und wir schreiben Ihnen, was wir zuerst verbessern würden.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
