import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const BRAND_ANALYTICS = "https://sell.amazon.com/blog/brand-analytics";
const ACOS = "https://advertising.amazon.com/library/guides/acos-advertising-cost-of-sales";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const p = (path: string) => localePath("de", path);

const title = "Marketing-Analytics-Agentur für Amazon | Nautilo Studio";
const description =
  "Nautilo Studio ist die Marketing-Analytics-Agentur für Amazon-Händler in den USA: Wir verfolgen die Zahlen, die zeigen, wo Umsatz verloren geht. Gratis-Check.";

const page: GuideCopy["page"] = {
  slug: "data-analysis",
  breadcrumb: "Amazon-Datenanalyse",
  question: "Marketing-Analytics-Agentur für Amazon: die Zahlen, die zählen",
  answer:
    "Amazon-Datenanalyse, wie eine Marketing-Analytics-Agentur sie macht, beginnt mit vier Zahlen pro Produkt: Sitzungen, Conversion-Rate, ob Sie das Empfohlene Angebot halten, und Ihre Werbekosten im Verhältnis zum Umsatz (ACOS). Zusammen zeigen sie, ob das Problem beim Gefundenwerden, beim Ausgewähltwerden oder bei zu hohen Werbeausgaben liegt. Prüfen Sie sie jede Woche, vergleichen Sie mit der Vorwoche und ändern Sie immer nur eine Sache.",
  description,
  image: {
    src: "/img/amazon-data-analysis.jpg",
    alt: "iMac mit einem Analytics-Dashboard eines Amazon-Shops: Umsatz, Bestellungen, Conversion-Rate, ACOS, Empfohlenes Angebot und Werbekampagnen",
    tile: "bg-royal",
  },
  updated: "2026-11-16",
  facts: [
    { value: 4, label: "Kennzahlen für jedes Produkt" },
    {
      value: 50,
      suffix: " %",
      label: "ACOS in Amazons Beispiel: 50 $ ausgegeben, 100 $ eingenommen",
    },
    { value: 1, label: "Tag pro Woche für Ihre Routine" },
    { value: 1, label: "Problem, das Sie jede Woche lösen" },
  ],
  sections: [
    {
      id: "numbers",
      heading: "Amazon-Datenanalyse: die vier wichtigsten Zahlen",
      body: (
        <>
          <p>
            Seller Central ist voller Berichte, doch eine Marketing-Analytics-Agentur beginnt mit vier Zahlen pro Produkt. Sitzungen zeigen, wie viele Käufer die Produktseite besucht haben, also ob man Sie findet. Die Conversion-Rate ist der Anteil dieser Besuche, der zu einer Bestellung wurde, also ob das Listing überzeugt.
          </p>
          <p>
            Das Empfohlene Angebot ist das Angebot neben dem Jetzt-kaufen-Button, und laut Amazon spielen Preis, Verfügbarkeit und Versand eine Rolle dabei,{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              das Empfohlene Angebot zu gewinnen
            </a>
            , was den Umsatz deutlich steigern kann. ACOS sind Werbeausgaben geteilt durch Werbeumsatz, und Amazon Ads sagt, dass Ihr{" "}
            <a href={ACOS} target="_blank" rel="noopener noreferrer">
              ACOS unter Ihrer Gewinnmarge liegen muss
            </a>
            , damit Werbung profitabel bleibt.
          </p>
          <blockquote>Vier Zahlen, jede Woche geprüft, zeigen Ihnen, wo Umsatz verloren geht.</blockquote>
        </>
      ),
    },
    {
      id: "what-they-mean",
      heading: "Was die Zahlen einer Marketing-Analytics-Agentur verraten",
      body: (
        <>
          <p>
            Zusammen gelesen, zeigen die vier Zahlen jeweils ein Problem. Wenige Sitzungen heißen, dass Käufer das Produkt nicht finden, also kommen die Keywords in Titel, Bullet Points und Suchbegriffen zuerst. Viele Sitzungen bei niedriger Conversion heißen, dass Käufer kommen, aber nicht kaufen, und unser{" "}
            <Link href={p("/services/listing-optimization")}>Service für Amazon-SEO und Listing-Optimierung</Link> ist genau dafür gemacht.
          </p>
          <p>
            Verlieren Sie das Empfohlene Angebot, vergleichen Sie Preis, Bestand und Versand mit den anderen Angeboten zum selben Produkt. Liegt Ihr ACOS über Ihrer Marge, verliert die Werbung Geld: Pausieren Sie Suchbegriffe, die Geld kosten, ohne zu verkaufen, bevor Sie ein Budget erhöhen.
          </p>
        </>
      ),
    },
    {
      id: "where-to-find",
      heading: "Wo Sie Ihre Amazon-Daten in Seller Central finden",
      body: (
        <>
          <p>
            Die Geschäftsberichte unter Berichte in Seller Central zeigen Sitzungen, Seitenaufrufe und Umsatz pro Produkt. Marken in der Markenregistrierung haben zusätzlich Brand Analytics, dessen{" "}
            <a href={BRAND_ANALYTICS} target="_blank" rel="noopener noreferrer">
              Dashboard Search Query Performance
            </a>{" "}
            Impressionen, Klicks und Warenkorb-Hinzufügungen für die Suchen zeigt, die zu Ihren Produkten führen. Die Werbeberichte im Kampagnenmanager zeigen Ausgaben, Umsatz, Klicks und ACOS pro Kampagne und Suchbegriff.
          </p>
          <p>
            Profit Analytics, ebenfalls in Seller Central, zeigt, was Amazon Ihnen pro Produkt berechnet. Gebühren ändern sich jedes Jahr, lesen Sie also{" "}
            <Link href={p("/blog/amazon-fba-fees-2027")}>was sich bei den Amazon FBA Gebühren 2027 ändert</Link>, bevor Sie Preise planen. Führen Sie dann Ihre eigene Tabelle, eine Zeile pro Woche und Produkt, um Trends zu sehen, die ein einzelner Bericht verbirgt.
          </p>
        </>
      ),
    },
    {
      id: "weekly-routine",
      heading: "Eine wöchentliche Amazon-Reporting-Routine, die Sie durchhalten",
      body: (
        <>
          <p>
            Amazon-Datenanalyse funktioniert am besten als Gewohnheit. Wählen Sie einen Tag pro Woche und ziehen Sie immer dieselben Berichte, dann vergleichen Sie jede Zahl mit der Vorwoche und derselben Woche im Vormonat.
          </p>
          <p>
            Notieren Sie jede Änderung, etwa Preis, Bilder oder Gebote, und wann Sie sie gemacht haben. Wählen Sie dann ein Problem für diese Woche und prüfen Sie das Ergebnis in der nächsten. Eine Korrektur nach der anderen wirkt langsamer, ist aber der einzige Weg zu wissen, was gewirkt hat.
          </p>
        </>
      ),
    },
    {
      id: "analytics-service",
      heading: "Was unsere Marketing-Analytics-Agentur für Amazon-Händler tut",
      figure: {
        src: "/img/amazon-data-analysis.jpg",
        alt: "iMac mit den wöchentlichen Amazon-Zahlen, die eine Marketing-Analytics-Agentur verfolgt: Umsatz, Conversion, ACOS, Empfohlenes Angebot, Umsatz pro Produkt und Werbekampagnen",
        width: 1600,
        height: 900,
        caption: "Beispieldaten, keine Kundenzahlen. Foto: Amy Hirschi, Unsplash.",
      },
      body: (
        <>
          <p>
            Sehen Sie uns als Web-Analytics-Agentur für Ihren Amazon-Shop: dieselbe Disziplin, angewandt auf die Berichte, die Amazon Ihnen gibt. Unser Marketing-Analytics-Service folgt vier Schritten, ein Produkt nach dem anderen.
          </p>
          <p>
            Zuerst ziehen wir die vier Zahlen für jedes Produkt und richten eine Tabelle ein, die Sie in Minuten lesen. Dann finden wir heraus, wo Umsatz verloren geht: beim Gefundenwerden, beim Ausgewähltwerden oder bei den Werbeausgaben. Wir vereinbaren eine Korrektur für die Woche und prüfen in der nächsten Woche, ob sie gewirkt hat, bevor wir weitermachen.
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
      question: "Was ist eine gute Conversion-Rate auf Amazon?",
      answer:
        "Das hängt von Kategorie, Preis und davon ab, wie Käufer zu Ihnen kommen. Eine einzige gute Zahl gibt es also nicht. Vergleichen Sie jedes Produkt mit seiner eigenen Historie und mit ähnlichen Produkten in Ihrem Shop.",
    },
    {
      question: "Wie berechnet man den ACOS?",
      answer:
        "Teilen Sie die Werbeausgaben durch den Werbeumsatz und multiplizieren Sie mit 100. Amazon Ads nennt als Beispiel 50 $ Ausgaben für eine Kampagne mit 100 $ Umsatz, also einen ACOS von 50 %.",
    },
    {
      question: "Brauche ich die Markenregistrierung, um meine Daten zu analysieren?",
      answer:
        "Für die Grundlagen nicht. Geschäftsberichte und Werbeberichte finden Sie in Seller Central und in der Kampagnenverwaltung. Brand Analytics mit Suchanfragedaten setzt eine Marke in der Markenregistrierung voraus.",
    },
    {
      question: "Kann Nautilo Studio meine Zahlen analysieren?",
      answer:
        "Ja. Datenanalyse ist eine unserer Leistungen. Schicken Sie uns ein Listing für einen kostenlosen Check oder erzählen Sie uns, welche Berichte Sie verstehen möchten.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
