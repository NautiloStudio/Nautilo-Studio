import Link from "next/link";
import ListingFieldMap from "@/components/ListingFieldMap";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const AMAZON_SEO_GUIDE = "https://sell.amazon.com/blog/amazon-seo";
const TITLE_RULES = "https://sellercentral.amazon.com/gp/help/external/GYTR6SYGFA5E3EQC";
const SEARCH_TERMS_HELP = "https://sellercentral.amazon.com/help/hub/reference/external/G23501";
const PRODUCT_LISTINGS = "https://sell.amazon.com/blog/amazon-product-listings";
const PRODUCT_PHOTOS = "https://sell.amazon.com/blog/product-photos";
const A_PLUS = "https://sell.amazon.com/tools/a-content";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";
const EXPERIMENTS = "https://sell.amazon.com/tools/manage-your-experiments";

const p = (path: string) => localePath("de", path);
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const title = "Amazon-SEO und Listing-Optimierung | Nautilo Studio";
const description =
  "Amazon-SEO und Listing-Optimierung für Händler in den USA: gefunden werden für die Suchen Ihrer Käufer, dann gewählt werden. Jetzt kostenlosen Check anfragen.";

const page: GuideCopy["page"] = {
  slug: "listing-optimization",
  breadcrumb: "SEO und Listing-Optimierung",
  question: "Amazon-SEO und Listing-Optimierung: gefunden werden, dann gewählt werden",
  answer:
    "Amazon-SEO sorgt dafür, dass Ihr Produkt erscheint, wenn Käufer suchen. Listing-Optimierung sorgt dafür, dass sie es wählen, sobald sie es sehen. Auf Amazon passiert beides auf derselben Seite: Titel, Bullet Points, Bilder, A+ Content und die versteckten Suchbegriffe entscheiden, wo Sie ranken und ob Käufer kaufen. Setzen Sie die Wörter, die Käufer eingeben, dorthin, wo Amazon sie liest, machen Sie das Listing überzeugend und testen Sie eine Änderung nach der anderen. Die Verkäufe, die ein besseres Listing bringt, helfen ihm auch beim Ranking.",
  description,
  image: {
    src: "/img/amazon-listing-optimization.jpg",
    alt: "iMac auf einem Schreibtisch mit einem optimierten Amazon-Listing für ein Bambus-Schneidebrett, markiert mit „gewählt werden“, neben den Suchergebnissen, in denen es auf Platz eins steht, und seinen Keyword-Rankings, markiert mit „gefunden werden“",
    tile: "bg-apricot",
  },
  updated: "2026-11-20",
  facts: [
    { value: 200, label: "Zeichen, die ein Titel laut Amazons SEO-Leitfaden haben darf" },
    { value: 60, label: "Zeichen, die Amazon für einen Titel empfiehlt" },
    { value: 9, label: "Fotos, die Amazon Sie hochladen lässt" },
    { value: 20, suffix: " %", label: "Maximales Umsatzplus, das Amazon optimierten Inhalten zuschreibt" },
  ],
  sections: [
    {
      id: "found-then-chosen",
      heading: "Wie Amazon für Händler funktioniert: gefunden werden, dann gewählt werden",
      body: (
        <>
          <p>Bevor aus einer Suche ein Verkauf wird, müssen zwei Dinge passieren. Amazon muss Ihr Produkt für die Wörter zeigen, die der Käufer eingegeben hat, und der Käufer muss es den anderen Ergebnissen auf der Seite vorziehen. Das Erste ist Amazon-SEO, das Zweite Listing-Optimierung. Auf Amazon arbeiten beide an derselben Seite, deshalb behandeln wir sie als eine Aufgabe.</p>
          <p>
            {"Gefunden werden beginnt mit Relevanz: Steht ein Suchwort weder im Titel noch in den Bullet Points, der Beschreibung oder den versteckten Suchbegriffen, erscheint das Produkt dafür kaum. Gewählt werden hängt davon ab, was der Käufer als Nächstes sieht: Hauptbild, Titel, Preis, Bewertungen und die Featured Offer. Beides nährt sich gegenseitig. Amazons SEO-Leitfaden sagt, dass "}
            <a href={AMAZON_SEO_GUIDE} {...ext}>Listing-Qualität und Kontozustand zum Suchranking beitragen können</a>
            {", und dass bessere Fotos und Preise einem Produkt helfen können, organisch in den Suchergebnissen aufzusteigen. Ein Listing, das verkauft, steigt, und ein Listing, das steigt, sehen mehr Käufer."}
          </p>
          <ListingFieldMap
            caption={"Ihr Listing, Feld für Feld"}
            labels={{ found: "Gefunden werden", chosen: "Gewählt werden" }}
            rows={[
              { field: "Titel", text: "Die Wörter, die Amazon am stärksten gewichtet, und das Erste, was Käufer lesen.", effect: "both" },
              { field: "Bullet Points", text: "Sekundäre Keywords für die Suche und Kaufgründe für den Käufer.", effect: "both" },
              { field: "Versteckte Suchbegriffe", text: "Synonyme und Tippfehler, die Käufer nie sehen.", effect: "found" },
              { field: "Bilder", text: "Die Ladentheke: Form, Größe und das Produkt im Einsatz.", effect: "chosen" },
              { field: "A+ Content", text: "Größere Bilder und Vergleiche unter dem Listing.", effect: "chosen" },
            ]}
          />
          <blockquote>Relevanz bringt Ihr Produkt in die Ergebnisse. Verkäufe halten es dort.</blockquote>
        </>
      ),
    },
    {
      id: "keyword-research",
      heading: "Amazon-Keyword-Recherche: die Wörter, die Ihre Käufer eingeben",
      body: (
        <>
          <p>Gute Keywords kommen aus dem, was Käufer wirklich eingeben, nicht aus Vermutungen. Am schnellsten geht es mit Amazons eigener Suchleiste: Geben Sie das Hauptwort Ihres Produkts ein und notieren Sie die Vorschläge, denn sie stammen aus echten Suchen.</p>
          <p>Seller Central liefert kostenlose Daten dazu. Product Opportunity Explorer zeigt die häufigsten Suchbegriffe einer Nische. Brand Analytics zeigt bei registrierten Marken, welche Suchen zu Klicks und Verkäufen führen. Wenn Sie schon Sponsored Products schalten, listet deren Suchbegriffsbericht die genauen Suchen, über die Käufer zu Ihnen kamen. Sortieren Sie die Funde danach, wie genau sie Ihr Produkt beschreiben, nicht nur nach Volumen: Eine präzise Suche mit weniger Käufern verkauft oft besser als eine breite.</p>
          <p>Diese Liste füllt dann jedes Feld der Übersicht oben. Die zwei oder drei wichtigsten Suchen gehören in den Titel, die nächsten in die Bullet Points und die Synonyme, die nirgendwo sonst passen, in die versteckten Suchbegriffe.</p>
        </>
      ),
    },
    {
      id: "title",
      heading: "Der Amazon-Titel: wo Ranking und Klicks zusammentreffen",
      body: (
        <>
          <p>
            {"Der Titel ist das einzige Feld, das gleichermaßen für die Suche und für den Käufer arbeitet, deshalb ist er so leicht falsch zu machen. Amazon erlaubt "}
            <a href={AMAZON_SEO_GUIDE} {...ext}>bis zu 200 Zeichen und empfiehlt 60 oder weniger</a>
            {", und seine "}
            <a href={TITLE_RULES} {...ext}>Titelregeln</a>
            {" erlauben dasselbe Wort höchstens zweimal."}
          </p>
          <p>Ein mit Keywords vollgestopfter Titel passt vielleicht zu mehr Suchen, liest sich aber wie eine Liste und verliert den Klick an einen klareren Wettbewerber. Auf dem Handy werden lange Titel abgeschnitten, also muss gleich in den ersten Wörtern stehen, was das Produkt ist, danach die Marke und die Details, die Käufer vergleichen, etwa Größe, Material oder Stückzahl. Schreiben Sie ihn zuerst für den Käufer und prüfen Sie dann, ob Ihre wichtigsten Suchen darin stehen.</p>
        </>
      ),
    },
    {
      id: "images-bullets-a-plus",
      heading: "Bilder, Bullet Points und A+ Content: aus einem Besuch eine Bestellung machen",
      body: (
        <>
          <p>
            {"Sobald ein Käufer Ihre Seite öffnet, muss der Rest des Listings die Fragen beantworten, die er im Laden stellen würde. Amazon lässt Sie "}
            <a href={PRODUCT_LISTINGS} {...ext}>bis zu neun Fotos hochladen</a>
            {", und seine Fototipps empfehlen einen weißen Hintergrund, bei dem das Produkt "}
            <a href={PRODUCT_PHOTOS} {...ext}>85 % oder mehr des Bildes ausfüllt</a>
            {". Zeigen Sie nach dem Hauptbild das Produkt aus anderen Blickwinkeln, im Einsatz und neben etwas, das seine Größe zeigt."}
          </p>
          <p>
            {"Die fünf Bullet Points nennen je einen Vorteil, belegt durch eine Tatsache, die Käufer prüfen können, und sind der natürliche Platz für die Keywords, die nicht in den Titel gepasst haben. „Edelstahl“ sagt mehr, wenn Sie dazuschreiben, dass er Getränke einen Tag lang kalt hält. A+ Content ergänzt für Marken in der Brand Registry Bilder und Vergleichstabellen unter dem Listing, und Amazon sagt, dass "}
            <a href={A_PLUS} {...ext}>einfacher A+ Content den Umsatz um bis zu 8 % steigern kann</a>
            {", basierend auf internen Daten. Die versteckten Suchbegriffe nehmen Synonyme und Tippfehler auf, ohne Wiederholungen, Markennamen oder ASINs: Prüfen Sie die "}
            <a href={SEARCH_TERMS_HELP} {...ext}>aktuelle Längengrenze</a>
            {" und folgen Sie unserer Anleitung zum "}
            <Link href={p("/blog/amazon-backend-keywords")}>Ausfüllen der versteckten Amazon-Keywords</Link>.
          </p>
        </>
      ),
    },
    {
      id: "warning-signs",
      heading: "Anzeichen, dass Ihr Listing Rankings, Verkäufe oder beides verliert",
      body: (
        <>
          <p>
            {"Ihre Zahlen zeigen, welche Hälfte der Arbeit Aufmerksamkeit braucht. Wenige Impressionen und wenige Besuche heißen: Käufer finden Sie nicht, also beginnen Sie mit den Keywords und dem Titel. Viele Besuche und wenige Bestellungen heißen: Sie werden gefunden, überzeugen aber nicht. Amazon nennt selbst dieses Beispiel: "}
            <a href={BOOST_LISTINGS} {...ext}>ein Listing mit vielen Aufrufen, aber wenigen Verkäufen</a>
            {" braucht womöglich bessere Bilder oder Beschreibungen."}
          </p>
          <p>Manche Zeichen betreffen beides. Bewertungen und Kundenfragen, die denselben Zweifel wiederholen, zeigen, dass das Listing ihn nicht beantwortet, und Retouren wegen „entspricht nicht der Beschreibung“ zeigen, dass das Listing etwas verspricht, was das Produkt nicht hält. Korrigieren Sie den Text, bevor Sie mehr Traffic holen.</p>
          <p>Die üblichen Fehler kommen aus denselben Stellen: Keyword-Stuffing, Markennamen der Konkurrenz (Amazon erlaubt sie weder im Listing noch in den Suchbegriffen), Titel, Bullet Points und Bilder, die unterschiedliche Größen oder Inhalte beschreiben, und alles auf einmal zu ändern, sodass niemand weiß, welche Änderung geholfen hat.</p>
        </>
      ),
    },
    {
      id: "seo-listing-service",
      heading: "Was unser Service für Amazon-SEO und Listing-Optimierung umfasst",
      figure: {
        src: "/img/amazon-listing-optimization.jpg",
        alt: "iMac auf einem Schreibtisch mit einem Amazon-Listing mit fünf markierten Änderungen, den Suchergebnissen für „bamboo cutting board“ und den Keyword-Rankings vorher und nachher",
        width: 1600,
        height: 1000,
        caption: "Beispiel-Listing mit unseren markierten Änderungen, seinen Suchergebnissen und Rankings. Illustration mit Beispieldaten, kein Kunden-Listing. Foto: Amy Hirschi, Unsplash.",
      },
      body: (
        <>
          <p>Wir arbeiten an einem Listing nach dem anderen und schauen es zweimal an: einmal so, wie Amazons Suche es sieht, einmal so, wie ein Käufer es sieht.</p>
          <p>Zuerst recherchieren wir mit Amazons eigenen Tools, wonach Ihre Käufer wirklich suchen. Dann schreiben wir Titel und Bullet Points so um, dass die wichtigsten Keywords vorne stehen und jede Zeile weiter eine Käuferfrage beantwortet, und wir füllen die versteckten Suchbegriffe innerhalb von Amazons Regeln. Danach erstellen wir das Briefing für neue Bilder und A+ Content, wo sie am meisten helfen.</p>
          <p>
            {"Zum Schluss testen wir. Ist Ihre Marke in der Brand Registry, zeigt Amazons "}
            <a href={EXPERIMENTS} {...ext}>Manage Your Experiments</a>
            {" Käufern zwei Versionen eines Titels, eines Bildes, der Bullet Points oder des A+ Contents und vergleicht die Ergebnisse; laut Amazon kann optimierter Inhalt den Umsatz um bis zu 20 % steigern. Wir ändern eine Sache nach der anderen und verfolgen Rankings und Verkäufe mit unserem "}
            <Link href={p("/services/data-analysis")}>Service für Amazon-Datenanalyse</Link>.
          </p>
          <p>
            {"Die Arbeit macht unser Team in Barcelona. "}
            <Link href={p("/about")}>Lernen Sie das Team von Nautilo Studio kennen</Link>.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: "Warum Amazon-SEO und Listing-Optimierung kombinieren?",
      answer:
        "Weil beide an denselben Feldern arbeiten und sich gegenseitig stärken. Keywords bringen Käufer zum Listing, das Listing macht aus ihnen Bestellungen, und diese Verkäufe helfen dem Produkt beim Ranking.",
    },
    {
      question: "Wie lange dauert es, bis Änderungen bei Ranking und Verkäufen sichtbar werden?",
      answer:
        "Das Ranking folgt den Verkäufen, beurteilen Sie eine Änderung also über mehrere Wochen statt über ein paar Tage. Ändern Sie eine Sache nach der anderen, damit Sie wissen, was den Unterschied gemacht hat.",
    },
    {
      question: "Muss ich für Werbung bezahlen, um auf Amazon zu ranken?",
      answer:
        "Nein. Amazon sagt, dass Sponsored Products Angeboten helfen kann, in den Suchergebnissen aufzusteigen, aber ein relevantes, überzeugendes Listing kommt zuerst und macht jede Anzeige wirksamer. Wir konzentrieren uns auf das Listing und die organische Suche, nicht auf das Betreuen von Werbekampagnen.",
    },
    {
      question: "Kann Nautilo Studio mein Listing prüfen?",
      answer:
        "Ja. Senden Sie uns ein Amazon-Listing über das Formular für den kostenlosen Check auf dieser Seite, und wir schreiben Ihnen per E-Mail, was wir zuerst verbessern würden, für die Suche und für die Verkäufe.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
