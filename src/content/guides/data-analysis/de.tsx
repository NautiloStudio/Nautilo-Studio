import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const BRAND_ANALYTICS = "https://sell.amazon.com/blog/brand-analytics";
const ACOS = "https://advertising.amazon.com/library/guides/acos-advertising-cost-of-sales";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const p = (path: string) => localePath("de", path);

const title = "Amazon-Datenanalyse: Welche Zahlen zählen | Nautilo Studio";
const description =
  "Die Amazon-Kennzahlen, die Händler in den USA jede Woche verfolgen sollten, was sie verraten und wo Sie sie in Seller Central finden. Gratis Listing-Check.";

const page: GuideCopy["page"] = {
  slug: "data-analysis",
  breadcrumb: "Datenanalyse",
  question: "Welche Amazon-Kennzahlen sollten Händler verfolgen?",
  answer:
    "Beginnen Sie mit vier Zahlen pro Produkt: Sitzungen, Conversion-Rate, ob Sie das Empfohlene Angebot halten, und Ihre Werbekosten im Verhältnis zum Umsatz (ACOS). Zusammen zeigen sie, ob das Problem beim Gefundenwerden, beim Ausgewähltwerden oder bei zu hohen Werbeausgaben liegt. Prüfen Sie sie jede Woche, vergleichen Sie mit der Vorwoche und ändern Sie immer nur eine Sache.",
  description,
  image: {
    src: "/img/service-data.jpg",
    alt: "Kartons, in steigenden Säulen gestapelt wie ein Balkendiagramm",
    tile: "bg-royal",
  },
  updated: "2026-11-07",
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
      heading: "Welche Zahlen sind am wichtigsten?",
      body: (
        <ul>
          <li>
            <strong>Sitzungen.</strong> Wie viele Käufer Ihre Produktseite besucht haben. Das zeigt,
            ob man Sie findet.
          </li>
          <li>
            <strong>Conversion-Rate.</strong> Der Anteil dieser Besuche, der zu einer Bestellung
            wurde. Das zeigt, ob das Listing überzeugt.
          </li>
          <li>
            <strong>Empfohlenes Angebot.</strong> Das Angebot neben dem Kaufen-Button. Laut Amazon
            spielen Preis, Verfügbarkeit und Versand eine Rolle dabei,{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              das Empfohlene Angebot zu gewinnen
            </a>
            , was den Umsatz deutlich steigern kann.
          </li>
          <li>
            <strong>ACOS.</strong> Werbeausgaben geteilt durch Werbeumsatz. Laut Amazon Ads muss Ihr{" "}
            <a href={ACOS} target="_blank" rel="noopener noreferrer">
              ACOS unter Ihrer Gewinnmarge liegen
            </a>
            , damit Werbung profitabel bleibt.
          </li>
        </ul>
      ),
    },
    {
      id: "what-they-mean",
      heading: "Was sagen Ihnen die Zahlen?",
      body: (
        <ul>
          <li>
            <strong>Wenige Sitzungen.</strong> Käufer finden das Produkt nicht. Prüfen Sie Ihre
            Keywords mit unserem <Link href={p("/amazon-seo")}>Leitfaden zu Amazon-SEO</Link>.
          </li>
          <li>
            <strong>Viele Sitzungen, wenig Conversion.</strong> Käufer kommen, kaufen aber nicht.
            Arbeiten Sie am Listing mit unserem{" "}
            <Link href={p("/listing-optimization")}>Leitfaden zur Listing-Optimierung</Link>.
          </li>
          <li>
            <strong>Empfohlenes Angebot verloren.</strong> Vergleichen Sie Preis, Bestand und Versand
            mit den anderen Angeboten für dasselbe Produkt.
          </li>
          <li>
            <strong>ACOS über Ihrer Marge.</strong> Die Werbung verliert Geld. Pausieren Sie
            Suchbegriffe, die Geld kosten, ohne zu verkaufen, bevor Sie ein Budget erhöhen.
          </li>
        </ul>
      ),
    },
    {
      id: "where-to-find",
      heading: "Wo finden Sie diese Daten?",
      body: (
        <ul>
          <li>
            <strong>Geschäftsberichte.</strong> In Seller Central unter Berichte. Sie zeigen
            Sitzungen, Seitenaufrufe und Umsatz pro Produkt.
          </li>
          <li>
            <strong>Brand Analytics.</strong> Für Marken in der Markenregistrierung. Das{" "}
            <a href={BRAND_ANALYTICS} target="_blank" rel="noopener noreferrer">
              Dashboard zur Suchanfragen-Performance
            </a>{" "}
            zeigt Impressionen, Klicks und Warenkorb-Hinzufügungen für die Suchen, die zu Ihren
            Produkten führen.
          </li>
          <li>
            <strong>Werbeberichte.</strong> In der Kampagnenverwaltung. Sie zeigen Ausgaben, Umsatz,
            Klicks und ACOS pro Kampagne und Suchbegriff.
          </li>
          <li>
            <strong>Profit Analytics.</strong> In Seller Central. Zeigt, was Amazon Ihnen pro Produkt
            berechnet. Die Gebühren ändern sich jedes Jahr: Lesen Sie,{" "}
            <Link href={p("/blog/amazon-fba-fees-2027")}>was sich bei den Amazon-FBA-Gebühren 2027 ändert</Link>.
          </li>
          <li>
            <strong>Ihre eigene Tabelle.</strong> Eine Zeile pro Woche und Produkt, damit Sie Trends
            sehen, die ein einzelner Bericht verbirgt.
          </li>
        </ul>
      ),
    },
    {
      id: "weekly-routine",
      heading: "Wie bauen Sie eine Wochenroutine auf?",
      body: (
        <ol>
          <li>Wählen Sie einen Tag pro Woche und ziehen Sie jedes Mal dieselben Berichte.</li>
          <li>Vergleichen Sie jede Zahl mit der Vorwoche und mit derselben Woche im Vormonat.</li>
          <li>Notieren Sie, was Sie geändert haben, etwa Preis, Bilder oder Gebote, und wann.</li>
          <li>Wählen Sie ein Problem für diese Woche. Prüfen Sie das Ergebnis in der nächsten.</li>
        </ol>
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
