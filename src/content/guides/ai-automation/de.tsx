import type { GuideCopy } from "../types";

const SELLER_ASSISTANT =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-agentic-ai";
const WORKFLOWS =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-plugin-amazon-quick-claude";
const ENHANCE_MY_LISTING =
  "https://www.aboutamazon.com/news/innovation-at-amazon/amazon-generative-ai-seller-growth-shopping-experience";

const title = "KI-Automatisierung für Amazon-Händler | Nautilo Studio";
const description =
  "KI spart Amazon-Händlern in den USA Zeit bei Listings, Bestand und Berichten. Was Sie automatisieren und was beim Menschen bleibt. Gratis Listing-Check.";

const page: GuideCopy["page"] = {
  slug: "ai-automation",
  breadcrumb: "KI-Automatisierung",
  question: "Wie kann KI-Automatisierung Amazon-Händlern helfen?",
  answer:
    "KI-Automatisierung übernimmt wiederkehrende Arbeit, etwa Listing-Texte entwerfen, den Bestand im Blick behalten oder Berichte zusammenfassen. Amazon bietet dafür bereits Tools an, darunter den kostenlosen Seller Assistant, der Ihr Konto überwachen und mit Ihrer Zustimmung handeln kann. Die Entscheidungen treffen weiterhin Sie, die KI spart also Zeit, ohne Ihr Urteil zu ersetzen.",
  description,
  image: {
    src: "/img/service-ai.jpg",
    alt: "Weißer Roboterarm, der ein Paket ans Ende einer ordentlichen Reihe stellt",
    tile: "bg-graphite",
  },
  updated: "2026-11-07",
  facts: [
    { value: 4, label: "Aufgaben, die KI übernehmen kann" },
    { value: 3, label: "KI-Tools von Amazon für den Einstieg" },
    { value: 0, suffix: " $", label: "Kosten des Seller Assistant für US-Händler" },
    { value: 1, label: "Automatisierung für den Anfang" },
  ],
  sections: [
    {
      id: "what-to-automate",
      heading: "Welche Amazon-Aufgaben kann KI automatisieren?",
      body: (
        <ul>
          <li>
            <strong>Listing-Inhalte.</strong> Die KI schlägt Titel, Attribute und Beschreibungen
            vor. Sie prüfen die Fakten und die Markenstimme.
          </li>
          <li>
            <strong>Bestand und Kontozustand.</strong> Die KI meldet langsam drehenden Bestand und
            Kontoprobleme. Sie entscheiden, was behoben wird.
          </li>
          <li>
            <strong>Anzeigenideen.</strong> Die KI entwirft Anzeigenideen für Ihre Produkte. Sie
            wählen aus, was läuft, und legen das Budget fest.
          </li>
          <li>
            <strong>Berichte.</strong> Die KI macht aus Umsatz- und Traffic-Berichten kurze
            Zusammenfassungen. Sie entscheiden, was die Veränderungen bedeuten.
          </li>
        </ul>
      ),
    },
    {
      id: "amazon-tools",
      heading: "Welche KI-Tools bietet Amazon bereits?",
      body: (
        <ul>
          <li>
            <strong>
              <a href={SELLER_ASSISTANT} target="_blank" rel="noopener noreferrer">
                Seller Assistant
              </a>
              .
            </strong>{" "}
            Kostenlos für Händler im US-Store. Er überwacht Ihr Konto und kann mit Ihrer Erlaubnis
            handeln.
          </li>
          <li>
            <strong>
              <a href={WORKFLOWS} target="_blank" rel="noopener noreferrer">
                Workflows
              </a>
              .
            </strong>{" "}
            Eigene Automatisierungen, die dauerhaft laufen. Sie wählen zwischen Empfehlungen und
            Aktionen.
          </li>
          <li>
            <strong>
              <a href={ENHANCE_MY_LISTING} target="_blank" rel="noopener noreferrer">
                Enhance My Listing
              </a>
              .
            </strong>{" "}
            Schlägt Verbesserungen für Listings vor, die Sie bearbeiten oder ablehnen können. Prüfen
            Sie, ob Ihr Konto Zugriff hat.
          </li>
        </ul>
      ),
    },
    {
      id: "keep-human",
      heading: "Was sollte in Menschenhand bleiben?",
      body: (
        <ul>
          <li>
            <strong>Produktaussagen.</strong> Alles zu Sicherheit, Material oder Wirkung muss ein
            Mensch prüfen.
          </li>
          <li>
            <strong>Ihre Marke.</strong> Ihre Stimme und das, was Ihr Produkt besonders macht.
          </li>
          <li>
            <strong>Entscheidungen über Geld.</strong> Preise, Werbebudgets und die
            Gesamtstrategie.
          </li>
          <li>
            <strong>Die finale Freigabe.</strong> Jede Änderung an einem aktiven Listing oder einer
            laufenden Kampagne.
          </li>
        </ul>
      ),
    },
    {
      id: "how-to-start",
      heading: "Wie starten Sie mit KI-Automatisierung?",
      body: (
        <ol>
          <li>Wählen Sie eine Aufgabe, die Sie jede Woche wiederholen.</li>
          <li>Lassen Sie die KI Empfehlungen geben, und prüfen Sie diese, bevor sich etwas ändert.</li>
          <li>Geben Sie ihr erst mehr Aufgaben, wenn Sie den Ergebnissen vertrauen.</li>
        </ol>
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
