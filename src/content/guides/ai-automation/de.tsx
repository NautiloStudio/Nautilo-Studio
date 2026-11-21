import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const SELLER_ASSISTANT =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-agentic-ai";
const WORKFLOWS =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-plugin-amazon-quick-claude";
const ENHANCE_MY_LISTING =
  "https://www.aboutamazon.com/news/innovation-at-amazon/amazon-generative-ai-seller-growth-shopping-experience";

const p = (path: string) => localePath("de", path);

const title = "Amazon-Marketing-Automatisierung mit KI | Nautilo Studio";
const description =
  "Amazon-Marketing-Automatisierung mit KI für Händler in den USA: Listings, Bestand und Berichte, jede Änderung geben Sie frei. Fordern Sie Ihren Gratis-Check an.";

const page: GuideCopy["page"] = {
  slug: "ai-automation",
  breadcrumb: "Amazon-Marketing-Automatisierung",
  question: "Amazon-Marketing-Automatisierung mit KI: was Sie zuerst automatisieren",
  answer:
    "Amazon-Marketing-Automatisierung nutzt KI für wiederkehrende Arbeit, etwa Listing-Texte entwerfen, den Bestand im Blick behalten oder Berichte zusammenfassen. Amazon bietet dafür bereits Tools an, darunter den kostenlosen Seller Assistant, der Ihr Konto überwachen und mit Ihrer Zustimmung handeln kann. Die Entscheidungen treffen weiterhin Sie, die KI spart also Zeit, ohne Ihr Urteil zu ersetzen.",
  description,
  image: {
    src: "/img/amazon-ai-automation.jpg",
    alt: "Laptop mit einem Amazon-Verkäufer-Dashboard und einem KI-Chip, verbunden mit Symbolen für Listings, Suche, Berichte und Einstellungen",
    tile: "bg-graphite",
  },
  updated: "2026-11-16",
  quickWin: {
    label: "10-Minuten-Check",
    title: "Wählen Sie in 10 Minuten Ihre erste KI-Aufgabe",
    steps: ["Listen Sie die Aufgaben auf, die Sie jede Woche wiederholen", "Wählen Sie eine, bei der ein falscher Entwurf nichts kostet, etwa einen Bericht", "Lassen Sie die KI vorschlagen und prüfen Sie, bevor sich etwas ändert"],
    link: { href: "#how-to-start", text: "So fangen Sie an" },
  },
  facts: [
    { value: 4, label: "Aufgaben, die KI übernehmen kann" },
    { value: 3, label: "KI-Tools von Amazon für den Einstieg" },
    { value: 0, suffix: " $", label: "Kosten des Seller Assistant für US-Händler" },
    { value: 1, label: "Automatisierung für den Anfang" },
  ],
  sections: [
    {
      id: "what-to-automate",
      heading: "Amazon-Marketing-Automatisierung: welche Aufgaben KI übernehmen kann",
      body: (
        <>
          <p>
            Ein Großteil der wöchentlichen Arbeit in einem Amazon-Shop wiederholt sich, und genau dort hilft Amazon-Marketing-Automatisierung. KI kann Titel, Attribute und Beschreibungen vorschlagen, während Sie Fakten und Markenstimme prüfen. Sie kann Werbeideen für Ihre Produkte erzeugen, während Sie entscheiden, was läuft, und das Budget festlegen. Und sie kann Verkaufs- und Traffic-Berichte in kurze Zusammenfassungen verwandeln, während Sie entscheiden, was die Veränderungen bedeuten.
          </p>
          <p>
            KI kann außerdem langsam drehenden Bestand und Kontoprobleme melden, und Sie entscheiden, was behoben wird. Der Lagerbestand zählt ab 2027 mehr, wenn sich Amazons Lager- und Niedrigbestandsgebühren ändern: Lesen Sie,{" "}
            <Link href={p("/blog/amazon-fba-fees-2027")}>was sich bei den Amazon FBA Gebühren 2027 ändert</Link>.
          </p>
          <blockquote>Lassen Sie die KI wiederholen. Behalten Sie das Entscheiden.</blockquote>
        </>
      ),
    },
    {
      id: "amazon-tools",
      heading: "Die KI-Tools, die Amazon Händlern schon anbietet",
      body: (
        <>
          <p>
            Für den Start brauchen Sie keine externe Software. Amazons{" "}
            <a href={SELLER_ASSISTANT} target="_blank" rel="noopener noreferrer">
              Seller Assistant
            </a>{" "}
            ist für Händler im US-Shop kostenlos: Er überwacht Ihr Konto und kann mit Ihrer Erlaubnis handeln. Seine{" "}
            <a href={WORKFLOWS} target="_blank" rel="noopener noreferrer">
              Workflows
            </a>{" "}
            sind eigene Automatisierungen, die dauerhaft laufen, und Sie wählen, ob sie nur empfehlen oder auch handeln.
          </p>
          <p>
            Für Listings schlägt Amazons{" "}
            <a href={ENHANCE_MY_LISTING} target="_blank" rel="noopener noreferrer">
              Enhance My Listing
            </a>{" "}
            Verbesserungen vor, die Sie bearbeiten oder ablehnen können. Noch hat nicht jedes Konto Zugang zu jedem Tool, prüfen Sie also, was in Ihrem verfügbar ist, bevor Sie damit planen.
          </p>
        </>
      ),
    },
    {
      id: "keep-human",
      heading: "Was in menschlicher Hand bleiben sollte",
      body: (
        <>
          <p>
            Manche Entscheidungen sollte man nie automatisieren. Produktaussagen zu Sicherheit, Materialien oder Ergebnissen muss ein Mensch prüfen. Ihre Markenstimme und das, was Ihr Produkt besonders macht, sollten von Ihnen kommen.
          </p>
          <p>
            Auch Geldentscheidungen bleiben beim Menschen: Preise, Werbebudgets und die Gesamtstrategie. Und jede Änderung an einem aktiven Listing oder einer laufenden Kampagne braucht die finale Freigabe von jemandem, der das Geschäft kennt.
          </p>
        </>
      ),
    },
    {
      id: "how-to-start",
      heading: "So starten Sie mit Amazon-Marketing-Automatisierung",
      body: (
        <>
          <p>
            Fangen Sie klein an. Wählen Sie eine Aufgabe, die Sie jede Woche wiederholen, lassen Sie die KI empfehlen und prüfen Sie ihre Vorschläge, bevor sich etwas ändert. Geben Sie ihr erst mehr zu tun, wenn Sie den Ergebnissen vertrauen.
          </p>
          <p>
            Berichte sind oft die einfachste erste Aufgabe, denn eine falsche Zusammenfassung kostet nichts, solange niemand danach handelt. Welche Zahlen Ihre Berichte zeigen sollten, erklärt unser{" "}
            <Link href={p("/services/data-analysis")}>Marketing-Analytics-Leitfaden für Amazon-Händler</Link>.
          </p>
        </>
      ),
    },
    {
      id: "automation-service",
      heading: "Was unser Service für Amazon-Marketing-Automatisierung tut",
      figure: {
        src: "/img/amazon-ai-automation.jpg",
        alt: "Laptop mit einem Amazon-Verkäufer-Dashboard, verbunden mit einem KI-Chip für Listings, Suche, Berichte und Einstellungen: Amazon-Marketing-Automatisierung in Aktion",
        width: 1600,
        height: 899,
        caption: "Automatisierung übernimmt das Wiederkehrende, Menschen behalten die Entscheidungen. Illustration, kein Kunden-Setup.",
      },
      body: (
        <>
          <p>
            Sehen Sie es als KI-Automatisierung für Amazon-Händler, eingerichtet Aufgabe für Aufgabe. Unser Service für Amazon-Marketing-Automatisierung folgt vier Schritten.
          </p>
          <p>
            Zuerst listen wir die Aufgaben auf, die Sie jede Woche wiederholen, und wie lange jede dauert. Dann wählen wir eine aus und richten sie mit den Tools ein, die Amazon schon anbietet, im Modus „nur empfehlen“. Wir prüfen die Ergebnisse jede Woche mit Ihnen, und erst wenn Sie ihnen vertrauen, lassen wir die Automatisierung handeln oder gehen zur nächsten Aufgabe.
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
      question: "Ist der Seller Assistant von Amazon kostenlos?",
      answer:
        "Ja. Laut Amazon ist der Seller Assistant kostenlos und für alle Händler im US-Store verfügbar.",
    },
    {
      question: "Kann KI mein ganzes Amazon-Listing schreiben?",
      answer:
        "KI kann den Großteil entwerfen, Sie sollten das Ergebnis aber trotzdem prüfen. Mit Enhance My Listing von Amazon können Händler jeden Vorschlag prüfen, anpassen oder ablehnen.",
    },
    {
      question: "Ändert die KI mein Konto, ohne zu fragen?",
      answer:
        "Laut Amazon prüfen und genehmigen Händler die Aktionen des Seller Assistant, bevor sie ausgeführt werden, und jede Aktion wird protokolliert.",
    },
    {
      question: "Kann Nautilo Studio mir bei der Einrichtung helfen?",
      answer:
        "Ja. KI-Automatisierung ist eine unserer Leistungen. Schicken Sie uns ein Listing für einen kostenlosen Check oder erzählen Sie uns, welche Aufgaben Sie automatisieren möchten.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
