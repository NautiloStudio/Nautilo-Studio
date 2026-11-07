import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const PRODUCT_LISTINGS = "https://sell.amazon.com/blog/amazon-product-listings";
const PRODUCT_PHOTOS = "https://sell.amazon.com/blog/product-photos";
const A_PLUS = "https://sell.amazon.com/tools/a-content";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const p = (path: string) => localePath("de", path);

const title = "Amazon-Listing-Optimierung für Händler | Nautilo Studio";
const description =
  "So optimieren Sie ein Amazon-Listing, damit mehr Besucher kaufen: Titel, Bullet Points, Bilder, A+ Content und Tests. Gratis PDF-Leitfaden und Check.";

const page: GuideCopy["page"] = {
  slug: "listing-optimization",
  breadcrumb: "Listing-Optimierung",
  question: "Wie optimieren Sie ein Amazon-Listing, damit mehr Käufer kaufen?",
  answer:
    "Listing-Optimierung heißt, Titel, Bullet Points, Bilder und A+ Content so zu verbessern, dass sich Käufer auf Ihrer Seite für den Kauf entscheiden. Beginnen Sie mit klaren Bildern und einem Titel, der genau sagt, was das Produkt ist, und beantworten Sie mit den Bullet Points die Fragen, die Käufer vor der Bestellung haben. Testen Sie eine Änderung nach der anderen und behalten Sie die Version, die besser verkauft.",
  description,
  image: {
    src: "/img/service-listing.jpg",
    alt: "Bambus-Schneidebrett mit leerem Papieranhänger",
    tile: "bg-apricot",
  },
  updated: "2026-11-07",
  facts: [
    { value: 9, label: "Fotos, die Amazon Sie hochladen lässt" },
    { value: 85, suffix: " %", label: "Des Bildes sollte das Produkt ausfüllen" },
    { value: 5, label: "Bullet Points pro Listing" },
    {
      value: 8,
      prefix: "Bis zu ",
      suffix: " %",
      label: "Mehr Umsatz, den Amazon einfachem A+ Content zuschreibt",
    },
  ],
  sections: [
    {
      id: "what-matters",
      heading: "Welche Teile eines Amazon-Listings zählen am meisten?",
      body: (
        <ul>
          <li>
            <strong>Titel.</strong> Sagen Sie, was das Produkt ist, dann die Marke und die Details,
            die Käufer vergleichen, etwa Größe oder Farbe. Unser{" "}
            <Link href={p("/amazon-seo")}>Leitfaden zu Amazon-SEO</Link> zeigt, welche Wörter Sie
            verwenden sollten.
          </li>
          <li>
            <strong>Bilder.</strong> Amazon lässt Sie{" "}
            <a href={PRODUCT_LISTINGS} target="_blank" rel="noopener noreferrer">
              bis zu neun Fotos hochladen
            </a>
            . Die Fototipps empfehlen einen weißen Hintergrund und ein Produkt, das{" "}
            <a href={PRODUCT_PHOTOS} target="_blank" rel="noopener noreferrer">
              85 % oder mehr des Bildes ausfüllt
            </a>
            .
          </li>
          <li>
            <strong>Bullet Points.</strong> Sie haben bis zu fünf. Geben Sie jedem einen einzigen
            Vorteil und belegen Sie ihn mit einem Fakt, den Käufer prüfen können.
          </li>
          <li>
            <strong>A+ Content.</strong> Zusätzliche Bilder und Texte unter dem Listing für Marken in
            der Markenregistrierung. Laut Amazon{" "}
            <a href={A_PLUS} target="_blank" rel="noopener noreferrer">
              kann einfacher A+ Content den Umsatz um bis zu 8 % steigern
            </a>
            , basierend auf internen Daten.
          </li>
        </ul>
      ),
    },
    {
      id: "signs",
      heading: "Woran erkennen Sie, dass ein Listing Arbeit braucht?",
      body: (
        <>
          <p>
            Amazon nennt ein einfaches Beispiel:{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              ein Listing mit vielen Aufrufen, aber wenigen Verkäufen
            </a>{" "}
            braucht vielleicht bessere Bilder oder Beschreibungen.
          </p>
          <ul>
            <li>
              <strong>Viele Besuche, wenige Bestellungen.</strong> Käufer finden Sie, sind aber
              nicht überzeugt. Arbeiten Sie an Bildern, Bullet Points und A+ Content.
            </li>
            <li>
              <strong>Wenige Besuche.</strong> Käufer finden das Listing nicht. Beginnen Sie stattdessen
              mit <Link href={p("/amazon-seo")}>Amazon-SEO</Link>.
            </li>
            <li>
              <strong>Immer wieder dieselben Fragen.</strong> Wenn Bewertungen und Kundenfragen
              denselben Zweifel wiederholen, beantworten Sie ihn in Bullet Points oder Bildern.
            </li>
            <li>
              <strong>Rücksendungen wegen „nicht wie beschrieben“.</strong> Das Listing verspricht
              etwas, das das Produkt nicht hält. Korrigieren Sie den Text, bevor Sie mehr für Traffic
              ausgeben.
            </li>
          </ul>
          <p>
            Unsicher, welche Zahlen Sie ansehen sollten? Unser{" "}
            <Link href={p("/data-analysis")}>Leitfaden zur Datenanalyse</Link> erklärt sie.
          </p>
        </>
      ),
    },
    {
      id: "testing",
      heading: "Wie testen Sie, was funktioniert?",
      body: (
        <ol>
          <li>Wählen Sie ein Element, etwa das Hauptbild oder den Titel. Ändern Sie nur dieses.</li>
          <li>
            Ist Ihre Marke in der Markenregistrierung, nutzen Sie Amazons{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              Meine Experimente verwalten
            </a>
            , um Käufern zwei Versionen zu zeigen und die Ergebnisse zu vergleichen.
          </li>
          <li>Lassen Sie den Test lange genug laufen, um echte Bestellungen zu sammeln, nicht nur ein paar Tage.</li>
          <li>Behalten Sie die Gewinnerversion und gehen Sie zum nächsten Element.</li>
        </ol>
      ),
    },
    {
      id: "mistakes",
      heading: "Welche Fehler halten Käufer vom Kauf ab?",
      body: (
        <ul>
          <li>
            <strong>Unscharfe oder dunkle Bilder.</strong> Käufer können das Produkt nicht anfassen,
            also müssen die Fotos diese Aufgabe übernehmen.
          </li>
          <li>
            <strong>Merkmale ohne Nutzen.</strong> „Edelstahl“ sagt mehr, wenn Sie dazuschreiben,
            dass Getränke kalt bleiben.
          </li>
          <li>
            <strong>Aussagen, die Sie nicht belegen können.</strong> Sie führen zu Rücksendungen und
            schlechten Bewertungen und können gegen Amazons Richtlinien verstoßen.
          </li>
          <li>
            <strong>Angaben, die nicht zusammenpassen.</strong> Titel, Bullet Points und Bilder
            sollten dieselbe Größe, Farbe und denselben Lieferumfang beschreiben.
          </li>
        </ul>
      ),
    },
  ],
  faqs: [
    {
      question: "Wie viele Bilder sollte ein Amazon-Listing haben?",
      answer:
        "Amazon lässt Sie bis zu neun Fotos hochladen und sagt: je mehr, desto besser. Beginnen Sie mit einem sauberen Hauptbild auf weißem Hintergrund, dann folgen weitere Ansichten, das Produkt im Einsatz und seine Größe.",
    },
    {
      question: "Lohnt sich A+ Content?",
      answer:
        "Meistens ja, wenn Sie ihn nutzen können. Laut Amazon kann einfacher A+ Content den Umsatz um bis zu 8 % steigern, basierend auf internen Daten. Für berechtigte Marken in der Markenregistrierung ist er kostenlos.",
    },
    {
      question: "Was ist der Unterschied zwischen Listing-Optimierung und Amazon-SEO?",
      answer:
        "Amazon-SEO hilft Käufern, Ihr Listing zu finden. Listing-Optimierung hilft denen, die ankommen, sich für den Kauf zu entscheiden. Sie brauchen beides, und die Verkäufe eines besseren Listings stützen auch Ihr Ranking.",
    },
    {
      question: "Kann Nautilo Studio mein Listing prüfen?",
      answer:
        "Ja. Schicken Sie uns den Link zu einem Amazon-Listing über das Formular für den kostenlosen Check auf dieser Seite, und wir schreiben Ihnen, was wir zuerst verbessern würden.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
