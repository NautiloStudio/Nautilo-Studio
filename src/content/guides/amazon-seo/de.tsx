import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const AMAZON_SEO_GUIDE = "https://sell.amazon.com/blog/amazon-seo";
const TITLE_RULES = "https://sellercentral.amazon.com/gp/help/external/GYTR6SYGFA5E3EQC";
const SEARCH_TERMS_HELP = "https://sellercentral.amazon.com/help/hub/reference/external/G23501";

const p = (path: string) => localePath("de", path);

const title = "B2B-SEO für Amazon-Händler: höher ranken | Nautilo Studio";
const description =
  "Nautilo Studio ist die B2B-SEO-Agentur für Amazon-Händler in den USA: Wir finden, wonach Käufer suchen, und setzen es dorthin, wo Amazon es liest. Gratis-Check.";

const page: GuideCopy["page"] = {
  slug: "amazon-seo",
  breadcrumb: "B2B-SEO für Amazon",
  question: "B2B-SEO für Amazon-Händler: So ranken Sie höher",
  answer:
    "B2B-SEO für Amazon-Händler, also Amazon-SEO, bringt Ihr Produkt vor die Käufer, die danach suchen. Amazon zeigt die Produkte, die am besten zu einer Suche passen und die Käufer am ehesten kaufen. Bringen Sie die Wörter, die Käufer eintippen, in Titel, Bullet Points und Backend-Suchbegriffe, und machen Sie das Listing überzeugend genug, um zu verkaufen. Diese Verkäufe bringen das Produkt zusammen mit einem guten Listing mit der Zeit nach oben.",
  description,
  image: {
    src: "/img/amazon-seo-dashboard.webp",
    alt: "Laptop mit einem Amazon-SEO-Dashboard: Keyword-Rankings und organischer Traffic",
    tile: "bg-cyan",
  },
  updated: "2026-11-11",
  facts: [
    { value: 200, label: "Zeichen als Titellimit laut Amazons SEO-Leitfaden" },
    { value: 60, label: "Zeichen, die Amazon für den Titel empfiehlt" },
    { value: 2, suffix: "×", label: "So oft darf ein Wort höchstens im Titel stehen" },
    { value: 4, label: "Quellen für echte Suchbegriffe" },
  ],
  sections: [
    {
      id: "how-ranking-works",
      heading: "Amazon-SEO-Rankingfaktoren: was über Ihre Position entscheidet",
      body: (
        <>
          <p>
            Wenn ein Käufer sucht, muss Amazon entscheiden, welche Produkte zuerst erscheinen. Es wählt die Listings, die am besten zu den eingegebenen Wörtern passen und die der Käufer am ehesten kauft. Deshalb beginnt B2B-SEO für Amazon-Händler mit Relevanz und endet bei Verkäufen.
          </p>
          <p>
            Relevanz entsteht durch Titel, Bullet Points, Beschreibung und Backend-Suchbegriffe: Steht ein Suchwort in keinem davon, erscheint das Produkt für diese Suche kaum. Danach kommt die Conversion. Käufer klicken und kaufen, wenn Bilder, Preis, Bewertungen und das empfohlene Angebot überzeugen, und Produkte, die stetig verkaufen, halten meist ihre Position. Amazon sagt außerdem, dass{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              Listing-Qualität und Kontozustand zum Ranking beitragen können
            </a>
            . Ein sauberes, vollständiges Listing zählt also genauso viel wie die richtigen Wörter.
          </p>
          <blockquote>Relevanz bringt Ihr Produkt in die Suche. Verkäufe halten es oben.</blockquote>
        </>
      ),
    },
    {
      id: "find-keywords",
      heading: "Amazon-Keyword-Recherche: die Wörter, die Ihre Käufer eintippen",
      body: (
        <>
          <p>
            Gute Keywords kommen aus dem, was Käufer wirklich eintippen, nicht aus Vermutungen. Am schnellsten starten Sie mit Amazons Suchleiste: Geben Sie Ihr wichtigstes Produktwort ein und notieren Sie die Vorschläge, denn sie stammen aus echten Suchen.
          </p>
          <p>
            Seller Central liefert kostenlos weitere Daten. Product Opportunity Explorer zeigt die wichtigsten Suchbegriffe einer Nische. Brand Analytics zeigt registrierten Marken, welche Suchen zu Klicks und Verkäufen führen. Der Suchbegriffsbericht Ihrer Sponsored-Products-Anzeigen listet die genauen Suchen, über die Käufer zu Ihnen kamen. Zusammen sind das vier Quellen echter Suchbegriffe und eine klare Liste, womit Sie anfangen.
          </p>
        </>
      ),
    },
    {
      id: "where-to-put-keywords",
      heading: "Wohin Ihre Amazon-Keywords gehören: Titel, Bullet Points und Suchbegriffe",
      body: (
        <>
          <p>
            Der Titel hat das meiste Gewicht, daher sollte er in den ersten Wörtern sagen, was das Produkt ist. Amazons Leitfaden nennt{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              ein Limit von 200 Zeichen und empfiehlt 60 oder weniger
            </a>
            , und die{" "}
            <a href={TITLE_RULES} target="_blank" rel="noopener noreferrer">
              Titelregeln
            </a>{" "}
            erlauben dasselbe Wort höchstens zweimal.
          </p>
          <p>
            Jeder Bullet Point erklärt einen Vorteil und ist der natürliche Platz für Ihre sekundären Keywords. Beschreibung und A+ Content decken Material, Größe, Pflege und Lieferumfang ab. Die Backend-Suchbegriffe nehmen Synonyme und Tippfehler auf, die nirgends sonst passen, ohne Wiederholungen, Marken oder ASINs. Prüfen Sie das{" "}
            <a href={SEARCH_TERMS_HELP} target="_blank" rel="noopener noreferrer">
              aktuelle Längenlimit
            </a>
             und folgen Sie unserer Schritt-für-Schritt-Anleitung zum{" "}
            <Link href={p("/blog/amazon-backend-keywords")}>Ausfüllen der Amazon-Backend-Keywords</Link>.
          </p>
        </>
      ),
    },
    {
      id: "common-mistakes",
      heading: "Amazon-SEO-Fehler, die Sie Rankings kosten",
      body: (
        <>
          <p>
            Der häufigste Fehler ist Keyword-Stuffing: Ein Titel voller möglicher Begriffe liest sich schlecht und kann gegen Amazons Titelregeln verstoßen. Knapp dahinter folgen Markennamen von Wettbewerbern, die Amazon weder im Listing noch in den Suchbegriffen erlaubt.
          </p>
          <p>
            Zwei leisere Fehler schaden ebenfalls. Lange Titel werden auf dem Handy abgeschnitten, deshalb müssen die Keywords nach vorn. Und wer alles auf einmal ändert, weiß nicht, welche Änderung geholfen hat. Das Ranking bringt Käufer, und unser{" "}
            <Link href={p("/services/listing-optimization")}>Leitfaden zur Listing-Optimierung</Link> zeigt, wie Sie aus diesen Besuchen Verkäufe machen.
          </p>
        </>
      ),
    },
    {
      id: "b2b-seo-service",
      heading: "Was unsere B2B-SEO-Agentur für Amazon-Händler tut",
      figure: {
        src: "/img/amazon-seo-dashboard.webp",
        alt: "Laptop mit einem Dashboard für Amazon-B2B-SEO und Werbung: Keyword-Rankings, organischer Traffic und ACOS pro Kampagne",
        width: 1600,
        height: 899,
        caption: "Die Art von Dashboard, mit der wir Ranking und Verkäufe verfolgen. Beispielzahlen, kein Kundenergebnis.",
      },
      body: (
        <>
          <p>
            Sehen Sie es als B2B-Marketing mit SEO für Ihre Marke auf Amazon: Ist die Arbeit erledigt, bringt es weiter Käufer. Unser B2B-SEO-Service folgt vier Schritten, Listing für Listing.
          </p>
          <p>
            Zuerst recherchieren wir mit Amazons eigenen Tools die Suchen, die Ihre Käufer wirklich eintippen. Dann schreiben wir Titel und Bullet Points so um, dass die wichtigsten Keywords vorn stehen und gut lesbar bleiben, und füllen die Backend-Suchbegriffe mit Synonymen und Tippfehlern, im Rahmen der Amazon-Regeln. Zum Schluss prüfen wir nach jeder Änderung Ranking und Verkäufe mit unserem Service für Amazon-Datenanalyse.
          </p>
          <p>
            Die Arbeit macht unser Team in Barcelona. <Link href={p("/about")}>Lernen Sie das Team von Nautilo Studio kennen</Link>.
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
