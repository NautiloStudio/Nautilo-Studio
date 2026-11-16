import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const PRODUCT_LISTINGS = "https://sell.amazon.com/blog/amazon-product-listings";
const PRODUCT_PHOTOS = "https://sell.amazon.com/blog/product-photos";
const A_PLUS = "https://sell.amazon.com/tools/a-content";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const p = (path: string) => localePath("de", path);

const title = "Agentur für Conversion-Optimierung: Amazon | Nautilo Studio";
const description =
  "Nautilo Studio ist die Agentur für Conversion-Rate-Optimierung für Amazon-Händler in den USA: Titel, Bilder und A+ Content, die verkaufen. Gratis Listing-Check.";

const page: GuideCopy["page"] = {
  slug: "listing-optimization",
  breadcrumb: "Amazon-Listing-Optimierung",
  question: "Agentur für Conversion-Rate-Optimierung auf Amazon: aus Besuchen werden Verkäufe",
  answer:
    "Amazon-Listing-Optimierung, die Arbeit einer Agentur für Conversion-Rate-Optimierung, heißt, Titel, Bullet Points, Bilder und A+ Content so zu verbessern, dass sich Käufer auf Ihrer Seite für den Kauf entscheiden. Beginnen Sie mit klaren Bildern und einem Titel, der genau sagt, was das Produkt ist, und beantworten Sie mit den Bullet Points die Fragen, die Käufer vor der Bestellung haben. Testen Sie eine Änderung nach der anderen und behalten Sie die Version, die besser verkauft.",
  description,
  image: {
    src: "/img/amazon-listing-optimization.jpg",
    alt: "iMac auf einem Büroschreibtisch mit der Amazon-Produktseite eines Bambus-Schneidebretts, auf der Titel, Hauptbild, Bullet Points, A+ Content und neue Bilder als geändert markiert sind",
    tile: "bg-apricot",
  },
  updated: "2026-11-16",
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
      heading: "Amazon-Listing-Optimierung: was Käufer zum Kauf bringt",
      body: (
        <>
          <p>
            Sobald ein Käufer auf Ihrer Produktseite landet, entscheiden vier Dinge über den Kauf: der Titel, die Bilder, die Bullet Points und der A+ Content. Eine Agentur für Conversion-Rate-Optimierung arbeitet an allen vier, denn jedes beantwortet eine andere Frage des Käufers.
          </p>
          <p>
            Der Titel sagt, was das Produkt ist, dann folgen Marke und die Details, die Käufer vergleichen, etwa Größe oder Farbe. Bilder übernehmen die Rolle der Ladentheke: Amazon lässt Sie{" "}
            <a href={PRODUCT_LISTINGS} target="_blank" rel="noopener noreferrer">
              bis zu neun Fotos hochladen
            </a>
            , und die Foto-Tipps empfehlen einen weißen Hintergrund und ein Produkt, das{" "}
            <a href={PRODUCT_PHOTOS} target="_blank" rel="noopener noreferrer">
              85 % oder mehr des Bildes ausfüllt
            </a>
            . Die fünf Bullet Points nennen je einen Vorteil, belegt durch einen prüfbaren Fakt. A+ Content ergänzt Bilder und Text unter dem Listing für Marken in der Markenregistrierung, und Amazon sagt, dass{" "}
            <a href={A_PLUS} target="_blank" rel="noopener noreferrer">
              einfacher A+ Content den Umsatz um bis zu 8 % steigern kann
            </a>
            , auf Basis interner Daten.
          </p>
          <blockquote>Käufer können Ihr Produkt nicht anfassen. Ihr Listing muss das für sie tun.</blockquote>
        </>
      ),
    },
    {
      id: "signs",
      heading: "Conversion-Rate-Optimierung: Zeichen, dass Ihr Listing Arbeit braucht",
      body: (
        <>
          <p>
            Amazon nennt ein einfaches Beispiel:{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              ein Listing mit vielen Aufrufen, aber wenigen Verkäufen
            </a>{" "}
            braucht womöglich bessere Bilder oder Beschreibungen. Viele Besuche und wenige Bestellungen heißen: Käufer finden Sie, sind aber nicht überzeugt. Bilder, Bullet Points und A+ Content kommen also zuerst.
          </p>
          <p>
            Wenige Besuche deuten auf ein anderes Problem hin: Käufer finden das Listing gar nicht, und unser{" "}
            <Link href={p("/services/amazon-seo")}>B2B-SEO-Service für Amazon-Händler</Link> ist der bessere Startpunkt. Zwei weitere Zeichen lohnen den Blick. Wiederholen Bewertungen und Kundenfragen denselben Zweifel, beantworten Sie ihn in Bullet Points oder Bildern. Und Retouren wegen „entspricht nicht der Beschreibung“ zeigen, dass das Listing etwas verspricht, was das Produkt nicht hält: Korrigieren Sie den Text, bevor Sie mehr in Traffic investieren.
          </p>
        </>
      ),
    },
    {
      id: "testing",
      heading: "Wie eine Agentur für Conversion-Optimierung testet, was wirkt",
      body: (
        <>
          <p>
            Gute Conversion-Rate-Optimierung ändert immer nur eine Sache. Wählen Sie ein Element, etwa das Hauptbild oder den Titel, und ändern Sie nur dieses, damit Sie wissen, was den Unterschied gemacht hat.
          </p>
          <p>
            Ist Ihre Marke in der Markenregistrierung, zeigt Amazons{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              Manage Your Experiments
            </a>{" "}
            Käufern zwei Versionen und vergleicht die Ergebnisse. Lassen Sie den Test lange genug laufen, um echte Bestellungen zu sammeln, nicht nur ein paar Tage. Behalten Sie dann die bessere Version und gehen Sie zum nächsten Element.
          </p>
        </>
      ),
    },
    {
      id: "mistakes",
      heading: "Amazon-Listing-Fehler, die Käufer vom Kauf abhalten",
      body: (
        <>
          <p>
            Unscharfe oder dunkle Bilder sind der häufigste Fehler: Käufer können das Produkt nicht anfassen, also müssen die Fotos das übernehmen. Dicht dahinter folgen Merkmale ohne Nutzen. „Edelstahl“ sagt mehr, wenn Sie erklären, dass er Getränke kalt hält.
          </p>
          <p>
            Versprechen, die Sie nicht belegen können, führen zu Retouren und schlechten Bewertungen und können gegen Amazons Regeln verstoßen. Auch Details, die nicht zusammenpassen, schaden: Titel, Bullet Points und Bilder sollten dieselbe Größe, Farbe und denselben Inhalt beschreiben. Die Wörter, nach denen Käufer suchen, gehören in den sichtbaren Text und in die versteckten Suchbegriffe, und unser Schritt-für-Schritt-Leitfaden zum{" "}
            <Link href={p("/blog/amazon-backend-keywords")}>Ausfüllen der Amazon-Backend-Keywords</Link> erklärt den zweiten Teil.
          </p>
        </>
      ),
    },
    {
      id: "cro-service",
      heading: "Was unsere Agentur für Conversion-Optimierung für Amazon-Händler tut",
      figure: {
        src: "/img/amazon-listing-optimization.jpg",
        alt: "iMac auf einem Büroschreibtisch mit einem Amazon-Listing und fünf markierten Änderungen an Titel, Hauptbild, Bullet Points, A+ Content und Suchbegriffen: die Arbeit einer Agentur für Conversion-Optimierung",
        width: 2400,
        height: 1350,
        caption: "Beispiel-Listing mit unseren fünf markierten Änderungen. Illustration, kein Kunden-Listing. Foto: Carl Heyerdahl, Unsplash.",
      },
      body: (
        <>
          <p>
            Sehen Sie es als Amazon-Listing-Optimierung mit einem Test hinter jeder Änderung. Unser Service für Conversion-Rate-Optimierung folgt vier Schritten, ein Listing nach dem anderen.
          </p>
          <p>
            Zuerst lesen wir Ihr Listing wie ein Käufer und notieren, was fehlt oder unklar ist. Dann schreiben wir Titel und Bullet Points so um, dass jeder eine Käuferfrage beantwortet, und briefen neue Bilder und A+ Content dort, wo sie am meisten helfen. Zum Schluss testen wir eine Änderung nach der anderen und behalten die Version, die besser verkauft.
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
