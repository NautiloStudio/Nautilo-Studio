import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { BlogPost } from "../types";

const AMAZON_SEO_GUIDE = "https://sell.amazon.com/blog/amazon-seo";
const PRODUCT_LISTINGS = "https://sell.amazon.com/blog/amazon-product-listings";
const p = (path: string) => localePath("de", path);

const post: BlogPost = {
  slug: "amazon-backend-keywords",
  title: "Amazon Backend Keywords: Suchbegriffe richtig ausfüllen",
  description:
    "Amazon Backend Keywords erklärt: was ins Feld für Suchbegriffe gehört, was nicht und ein durchgerechnetes Beispiel. Jetzt lesen und kostenlosen Check holen.",
  h1: "Amazon Backend Keywords: So füllen Sie Ihre Suchbegriffe richtig aus",
  breadcrumb: "Amazon Backend Keywords",
  keyword: "amazon backend keywords",
  excerpt:
    "Was ins versteckte Feld für Suchbegriffe gehört, was Sie weglassen sollten und ein Beispiel, das Sie für Ihr Listing übernehmen können.",
  published: "2026-11-10",
  updated: "2026-11-10",
  readMinutes: 9,
  intro: (
    <>
      <p>
        <strong>Amazon Backend Keywords</strong> sind die Wörter, die Sie Amazon im Feld für
        Suchbegriffe Ihres Listings mitgeben. Käufer sehen sie nie, aber Amazon liest sie, wenn es
        entscheidet, bei welchen Suchen Ihr Produkt erscheinen kann. Richtig eingesetzt, decken sie
        Synonyme, andere Bezeichnungen und häufige Tippfehler ab, ohne den Titel zu überladen.
      </p>
      <p>
        Dieser Ratgeber erklärt, was das Feld ist, warum es weiterhin zählt, wie Sie die richtigen
        Wörter finden und wie Sie sie eintragen, mit einem Beispiel am Ende. Wenn das Thema neu für
        Sie ist, beginnen Sie mit unserem <Link href={p("/amazon-seo")}>Ratgeber zu Amazon SEO</Link>,
        der zeigt, wie Amazon Produkte reiht.
      </p>
    </>
  ),
  sections: [
    {
      id: "what-are-backend-keywords",
      heading: "Was sind Amazon Backend Keywords?",
      body: (
        <>
          <p>
            Jedes Amazon-Listing hat sichtbaren Text wie Titel, Bullet Points und Beschreibung, und
            versteckte Felder, die nur Amazon liest. Das Feld für Suchbegriffe ist eines davon. Händler
            nennen seinen Inhalt meist Backend Keywords oder Backend-Suchbegriffe.
          </p>
          <p>
            Stellen Sie es sich als kurze Liste weiterer Wörter vor, mit denen ein Käufer Ihr Produkt
            beschreiben könnte. Sucht jemand nach einem Wort aus Ihren Backend Keywords, kann Ihr
            Produkt für diese Suche berücksichtigt werden, auch wenn das Wort nirgends auf der Seite
            steht.
          </p>
          <h3>Wo Sie das Feld für Suchbegriffe finden</h3>
          <p>
            Öffnen Sie in Seller Central das Listing, das Sie bearbeiten möchten, und gehen Sie zum
            Abschnitt Keywords in den Produktdetails. Dort sehen Sie ein Feld namens Suchbegriffe.
            Änderungen dort verändern nichts, was Käufer sehen. Es ist also ein sicherer Ort zum
            Testen.
          </p>
          <h3>Der Unterschied zum Titel</h3>
          <p>
            Der Titel muss sich gut lesen: Er ist das Erste, was ein Käufer sieht, und Amazon legt
            Regeln für Länge und Wortwahl fest. Backend Keywords haben keinen Leser, sie können also
            eine schlichte Wortliste sein. Genau das ist der Vorteil: Der Titel trägt Ihre wichtigsten
            Wörter, das Backend-Feld nimmt den Rest auf.
          </p>
        </>
      ),
    },
    {
      id: "why-they-matter",
      heading: "Warum Amazon Backend Keywords weiterhin zählen",
      body: (
        <>
          <p>
            Manche Händler glauben, das versteckte Feld wirke seit Jahren nicht mehr. Amazon sagt
            etwas anderes: Sein eigener Händlerratgeber zur Suche hält fest, dass{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              Backend Keywords einem Produkt weiterhin helfen können, bei bestimmten Suchen zu ranken
            </a>
            .
          </p>
          <p>
            Allein heben sie kein schwaches Listing nach oben. Amazon bewertet weiterhin, wie relevant
            Ihr Produkt ist, wie oft Käufer klicken und kaufen und wie es sich über die Zeit verkauft.
            Das Feld erweitert die Menge der Suchen, in denen Sie überhaupt erscheinen können. Für eine
            Suche, für die Sie nicht infrage kommen, können Sie nicht ranken.
          </p>
          <p>
            Damit gehören Backend Keywords zu den günstigsten Verbesserungen: Sie sind in Minuten
            geschrieben, kosten nichts und ändern nicht, wie Käufer Ihr Listing sehen.
          </p>
        </>
      ),
    },
    {
      id: "find-backend-keywords",
      heading: "So finden Sie Backend Keywords für Ihr Produkt",
      body: (
        <>
          <p>
            Gute Backend Keywords kommen aus dem, was Käufer wirklich eintippen, nicht aus dem internen
            Namen Ihres Produkts. Nutzen Sie mehrere Quellen und behalten Sie nur Wörter, die noch nicht
            in Titel und Bullet Points stehen.
          </p>
          <h3>Starten Sie mit der Amazon-Suchleiste</h3>
          <p>
            Geben Sie das Hauptwort Ihres Produkts bei Amazon ein und notieren Sie die Vorschläge. Sie
            stammen aus echten Suchen und zeigen oft andere Bezeichnungen, an die Sie nicht gedacht
            haben, etwa „flask“ für eine Trinkflasche oder „chopping board“ für ein Schneidebrett.
          </p>
          <h3>Nutzen Sie den Product Opportunity Explorer</h3>
          <p>
            Der Product Opportunity Explorer in Seller Central zeigt die wichtigsten Suchbegriffe und
            die Entwicklung des Suchvolumens in einer Nische. Suchen Sie Begriffe nahe an Ihrem
            Produkt, die Sie im Listing noch nicht verwendet haben.
          </p>
          <h3>Werten Sie den Suchbegriff-Bericht von Sponsored Products aus</h3>
          <p>
            Wenn Sie Sponsored-Products-Anzeigen schalten, listet der Suchbegriff-Bericht die genauen
            Suchen, über die Käufer zu Ihren Anzeigen kamen, auch die, die mit einem Kauf endeten.
            Begriffe, die konvertieren, aber im Listing fehlen, sind starke Kandidaten fürs Backend.
          </p>
          <h3>Prüfen Sie Brand Analytics, wenn Ihre Marke registriert ist</h3>
          <p>
            Marken in der Markenregistrierung können Brand Analytics nutzen. Das Dashboard Search Query
            Performance zeigt, welche Suchen Impressionen, Klicks und Käufe für Ihre Produkte bringen.
            So sehen Sie, welche Begriffe schon funktionieren und welche fehlen.
          </p>
        </>
      ),
    },
    {
      id: "write-search-terms",
      heading: "So schreiben Sie das Feld für Suchbegriffe",
      body: (
        <>
          <p>
            Steht die Liste, geht es beim Ausfüllen vor allem ums Streichen. Ziel ist eine saubere
            Zeile einzigartiger Begriffe, die abdeckt, was Ihr sichtbarer Text noch nicht abdeckt.
          </p>
          <h3>Synonyme, andere Bezeichnungen und Tippfehler</h3>
          <p>
            Nehmen Sie andere Wörter für dasselbe Produkt auf, andere Beschreibungen seiner Nutzung und
            Schreibweisen, bei denen sich Käufer oft vertippen. Abkürzungen und anders geschriebene
            Einheiten wie „oz“ und „ounce“ nur, wenn Sie sie noch nicht verwendet haben.
          </p>
          <h3>Halten Sie das Format einfach</h3>
          <p>
            Schreiben Sie klein und trennen Sie Wörter mit Leerzeichen. Kommas sind nicht nötig, und
            Sie müssen kein Wort in jeder Kombination wiederholen, weil Amazon die Wörter Ihres
            Listings selbst kombiniert. Lassen Sie Füllwörter wie „a“, „the“ und „for“ weg.
          </p>
          <h3>Keine Wörter aus dem Titel wiederholen</h3>
          <p>
            Jedes wiederholte Wort nimmt einem neuen den Platz weg. Steht „stainless steel“ schon im
            Titel, bringt es im Backend nichts. Prüfen Sie jedes Wort gegen Titel und Bullet Points,
            bevor Sie es behalten.
          </p>
          <h3>Bleiben Sie unter dem Längenlimit</h3>
          <p>
            Amazon begrenzt die Länge des Feldes und misst sie in Bytes, nicht in Zeichen. Umlaute und
            Akzente können also mehr zählen. Das Limit kann sich ändern und je nach Shop abweichen.
            Prüfen Sie deshalb den aktuellen Wert für Ihren Marketplace in Seller Central und bleiben
            Sie deutlich darunter.
          </p>
        </>
      ),
    },
    {
      id: "what-to-leave-out",
      heading: "Was nicht in Ihre Backend-Suchbegriffe gehört",
      body: (
        <>
          <p>Manche Wörter verschwenden Platz, andere verstoßen gegen Amazons Regeln. Lassen Sie weg:</p>
          <ul>
            <li>
              <strong>Markennamen.</strong> Weder Ihre eigene noch fremde Marken. Namen von
              Wettbewerbern können Ihr Listing besonders in Schwierigkeiten bringen.
            </li>
            <li>
              <strong>ASINs und Produktcodes.</strong> Sie tragen nichts dazu bei, wie Käufer suchen.
            </li>
            <li>
              <strong>Subjektive Aussagen.</strong> Wörter wie „best“, „amazing“ oder „top quality“
              beschreiben Meinungen, keine Produkte.
            </li>
            <li>
              <strong>Zeitgebundene Wörter.</strong> „New“, „on sale“ oder „limited offer“ veralten
              und beschreiben das Produkt nicht.
            </li>
            <li>
              <strong>Wiederholungen und Füllstoff.</strong> Dasselbe Wort zweimal, Pluralformen schon
              genutzter Wörter oder lange Ketten fast gleicher Phrasen.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "worked-example",
      heading: "Ein Beispiel: Backend Keywords für eine Trinkflasche",
      body: (
        <>
          <p>
            Da das Listing für den US-Shop ist, ist das Beispiel auf Englisch. Angenommen, Ihr Titel
            lautet „24 oz Stainless Steel Water Bottle with Screw-Top Lid, Charcoal“. Er deckt bereits{" "}
            <em>24 oz</em>, <em>stainless steel</em>, <em>water bottle</em>, <em>screw-top lid</em> und{" "}
            <em>charcoal</em> ab. Ihre Backend Keywords sollten den Rest abdecken. Ein erster Entwurf
            könnte so aussehen:
          </p>
          <p className="rounded-2xl bg-white p-5 font-mono text-base text-graphite">
            insulated flask thermos canteen vacuum leakproof reusable travel gym hiking office kids
            bpa free metal tumbler ounce black grey gray
          </p>
          <p>
            Achten Sie darauf, was fehlt: keine Marken, kein „best“, keine Wiederholungen aus dem
            Titel, dafür „grey“ und „gray“, damit Käufer Sie bei beiden Schreibweisen finden. Gleichen
            Sie danach mit Ihren Bullet Points ab und streichen Sie, was dort schon steht.
          </p>
          <p>
            Für die sichtbare Seite desselben Listings, also Titel, Bullet Points und Bilder, lesen Sie
            unseren <Link href={p("/listing-optimization")}>Ratgeber zur Optimierung von Amazon-Listings</Link>.
          </p>
        </>
      ),
    },
    {
      id: "check-results",
      heading: "So prüfen Sie, ob Ihre Backend Keywords wirken",
      body: (
        <>
          <p>
            Geben Sie einer Änderung ein paar Wochen Zeit und ändern Sie immer nur eine Sache, damit
            Sie wissen, was den Unterschied gemacht hat.
          </p>
          <ul>
            <li>
              <strong>Suchen Sie selbst.</strong> Geben Sie bei Amazon einen Begriff ein, der nur im
              Backend steht, und prüfen Sie, ob Ihr Produkt erscheint.
            </li>
            <li>
              <strong>Beobachten Sie Ihre Sitzungen.</strong> Die Geschäftsberichte in Seller Central
              zeigen, ob mehr Käufer auf das Listing kommen.
            </li>
            <li>
              <strong>Nutzen Sie Search Query Performance.</strong> Mit Markenregistrierung sehen Sie,
              ob die neuen Begriffe Impressionen, Klicks und Käufe bringen.
            </li>
          </ul>
          <p>
            Unsicher, welche Zahlen Sie beobachten sollten? Unser{" "}
            <Link href={p("/data-analysis")}>Ratgeber zur Amazon-Datenanalyse</Link> erklärt die vier
            wichtigsten und wo Sie sie finden.
          </p>
        </>
      ),
    },
    {
      id: "common-mistakes",
      heading: "Häufige Fehler bei Amazon Backend Keywords",
      body: (
        <>
          <p>Die meisten Probleme entstehen, wenn man zu viel hineinpacken will. Die häufigsten Fehler:</p>
          <ul>
            <li>
              <strong>Den Titel ins Feld kopieren.</strong> Wirkt gründlich, bringt aber nichts.
            </li>
            <li>
              <strong>Das Längenlimit überschreiten.</strong> Viele Händler berichten, dass ein zu
              langes Feld womöglich nicht wie erwartet indexiert wird. Bleiben Sie deutlich darunter.
            </li>
            <li>
              <strong>Einmal ausfüllen und vergessen.</strong> Suchgewohnheiten ändern sich. Prüfen
              Sie das Feld, wenn Sie den Rest des Listings überarbeiten.
            </li>
            <li>
              <strong>Sich allein darauf verlassen.</strong> Backend Keywords erweitern Ihre
              Reichweite, aber das Listing muss Käufer trotzdem überzeugen. Amazons Tipps zum{" "}
              <a href={PRODUCT_LISTINGS} target="_blank" rel="noopener noreferrer">
                Erstellen von Produktlistings
              </a>{" "}
              decken auch die sichtbaren Teile ab.
            </li>
          </ul>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: "Funktionieren Amazon Backend Keywords noch?",
      answer:
        "Ja. Amazons eigener Händlerratgeber sagt, dass Backend Keywords einem Produkt weiterhin helfen können, bei bestimmten Suchen zu ranken. Sie erweitern die Suchen, in denen Sie erscheinen können; Relevanz, Conversion und Verkäufe entscheiden, wie weit oben.",
    },
    {
      question: "Wie viele Backend Keywords sollte ich verwenden?",
      answer:
        "Es gibt keine feste Zahl. Nutzen Sie so viele einzigartige, relevante Wörter, wie bequem ins Längenlimit Ihres Marketplace passen, und lassen Sie alles weg, was schon in Titel oder Bullet Points steht.",
    },
    {
      question: "Soll ich Backend Keywords mit Kommas trennen?",
      answer:
        "Nein. Trennen Sie sie mit Leerzeichen und schreiben Sie klein. Satzzeichen sind nicht nötig, und Amazon kombiniert die Wörter Ihres Listings für verschiedene Suchen.",
    },
    {
      question: "Darf ich Markennamen von Wettbewerbern in die Backend Keywords schreiben?",
      answer:
        "Nein. Lassen Sie alle Markennamen aus dem Feld, auch Ihre eigene und vor allem die von Wettbewerbern, um Amazons Regeln einzuhalten.",
    },
    {
      question: "Kann Nautilo Studio meine Backend Keywords prüfen?",
      answer:
        "Ja. Senden Sie uns über unseren kostenlosen Check den Link zu einem Listing, und wir sagen Ihnen, was wir zuerst ändern würden, Backend Keywords inklusive.",
    },
  ],
  sources: [
    {
      publisher: "Amazon (Blog Sell on Amazon)",
      title: "Amazon SEO: 7 ways to improve your product’s search rankings",
      url: AMAZON_SEO_GUIDE,
    },
    {
      publisher: "Amazon (Blog Sell on Amazon)",
      title: "How to create Amazon product listings",
      url: PRODUCT_LISTINGS,
    },
  ],
  cta: {
    text: "Backend Keywords sind ein Teil von Amazon SEO. Sehen Sie, wie Titel, Bullet Points und Verkäufe zusammenspielen, oder lassen Sie uns Ihr Listing kostenlos prüfen.",
    pillar: { href: "/amazon-seo", label: "Unseren Ratgeber zu Amazon SEO lesen" },
    formHeading: "Sollen wir Ihre Backend Keywords prüfen?",
    formText: "Senden Sie uns ein Listing, und wir sagen Ihnen kostenlos, was wir zuerst ändern würden.",
  },
};

export default post;
