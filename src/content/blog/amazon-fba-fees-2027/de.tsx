import Link from "next/link";
import { localePath } from "@/i18n/config";
import { BlogPhotoFigure, FeeChangeFigure } from "@/components/BlogFigures";
import type { BlogPost } from "../types";
import { calculatorPhoto, heroPhoto } from "./media";

const AMAZON_2027 = "https://sellingpartners.aboutamazon.com/update-to-us-referral-and-fulfillment-by-amazon-fees-for-2027";
const AMAZON_2026 = "https://sellingpartners.aboutamazon.com/update-to-u-s-referral-and-fulfillment-by-amazon-fees-for-2026";
const PPC_LAND = "https://ppc.land/amazon-sellers-face-average-0-19-fba-fee-rise-from-january-15-2027/";
const p = (path: string) => localePath("de", path);

const post: BlogPost = {
  slug: "amazon-fba-fees-2027",
  title: "Amazon FBA Gebühren 2027: Die 5 wichtigsten Änderungen",
  description:
    "Amazon FBA Gebühren 2027: die 5 Änderungen für US-Händler ab 15. Januar, die wichtigsten Termine und wie Sie Ihre Margen prüfen. Jetzt lesen und Check anfragen.",
  h1: "Amazon FBA Gebühren 2027: 5 wichtige Änderungen und wie Sie Ihre Margen schützen",
  breadcrumb: "Amazon FBA Gebühren 2027",
  keyword: "amazon fba gebühren 2027",
  excerpt:
    "Amazon hat am 5. November seine US-Gebühren für 2027 angekündigt. Was sich ändert, wann, und wie Sie die Folgen für jedes Produkt prüfen.",
  published: "2026-11-11",
  updated: "2026-11-11",
  readMinutes: 8,
  hero: { ...heroPhoto, alt: "Lagergang mit hohen Regalen voller Kartons" },
  intro: (
    <>
      <p>
        Die <strong>Amazon FBA Gebühren 2027</strong> sind bekannt. Am 5. November 2026 hat Amazon
        US-Händlern mitgeteilt, dass die Versandgebühren im Schnitt um etwa 0,19 $ pro verkaufter
        Einheit steigen und die meisten Änderungen am 15. Januar 2027 beginnen. Ein Durchschnitt
        verbirgt viel: Laut Amazon steigen die Gebühren für manche Produkte und sinken für andere, und
        auch die Regeln für Lagerung und niedrigen Lagerbestand ändern sich.
      </p>
      <p>
        Dieser Artikel fasst die fünf wichtigsten Änderungen zusammen, nennt die Termine für Ihren
        Kalender und zeigt, wie Sie Produkt für Produkt prüfen, was sie für Ihre Margen bedeuten. Wenn
        das Auswerten Ihrer Zahlen neu für Sie ist, erklärt unser{" "}
        <Link href={p("/data-analysis")}>Ratgeber zur Amazon-Datenanalyse</Link>, mit welchen Berichten
        Sie anfangen.
      </p>
    </>
  ),
  sections: [
    {
      id: "what-changes",
      heading: "Was ändert sich bei den Amazon FBA Gebühren 2027?",
      body: (
        <>
          <p>
            Die Ankündigung von Amazon, unterzeichnet vom Vice President für Versand durch Amazon
            (FBA), betrifft Versand-, Lager-, Niedrigbestands- und Aktionsgebühren. Die meisten
            Änderungen beim Versand beginnen am 15. Januar 2027, einen Tag nach dem Ende der
            Hochsaisongebühren 2026. Lagerung und Niedrigbestandsgebühr folgen am 1. Februar 2027.
          </p>
          <p>
            Amazons erklärtes Ziel ist, dass jede Gebühr besser zu den tatsächlichen Versandkosten des
            Produkts passt. In der Praxis können zwei Händler dieselbe Ankündigung lesen und sehr
            unterschiedliche Rechnungen bekommen. Ihre eigene Belastung kennen Sie nur, wenn Sie
            Produkt für Produkt prüfen, wie weiter unten beschrieben.
          </p>
        </>
      ),
    },
    {
      id: "five-changes",
      heading: "Die 5 wichtigsten Änderungen für US-Händler",
      body: (
        <>
          <h3>1. Versandgebühren steigen im Schnitt um 0,19 $ pro Einheit</h3>
          <p>
            Ab dem 15. Januar 2027 steigt die Gebühr für Kommissionierung, Verpackung und Versand im
            Schnitt um etwa 0,19 $ pro Einheit. Der Anstieg ist nicht gleich verteilt. Laut der
            ausführlichen Auswertung von PPC Land steigen Standardartikel zwischen 10 und 50 $ und über
            50 $ im Schnitt am stärksten, während manche großen Artikel günstiger werden. Zu Amazons
            Beispielen gehört eine Handyhülle unter 10 $, deren Gebühr von 2,49 $ auf 2,72 $ pro Einheit
            steigt.
          </p>
          <p>
            Die Gebühren nutzen weiterhin drei Preisstufen: unter 10 $, 10 bis 50 $ und über 50 $.
            Artikel, die genau 10 $ oder 50 $ kosten, zahlen den Satz für 10 bis 50 $.
          </p>

          <FeeChangeFigure
            lang="de"
            before={{ label: "2026", value: 2.49 }}
            after={{ label: "2027", value: 2.72 }}
            labels={{ title: "Amazons Beispiel: die FBA-Gebühr für eine Handyhülle unter 10 $", perUnit: "pro Einheit" }}
            caption="Gebühr pro Einheit vor und nach dem 15. Januar 2027. Quelle: Amazon."
          />

          <h3>2. Weniger Produkte erhalten Low-Price-FBA-Tarife</h3>
          <p>
            Bis zum 14. Januar 2027 erhalten Artikel unter 10 $ automatisch die günstigeren
            Low-Price-FBA-Tarife. Ab dem 15. Januar verlieren fünf Gebührenkategorien diese Tarife und
            wechseln zu den Sätzen für 10 bis 50 $: Auto und Motorrad, Kompakte Haushaltsgeräte,
            Musikinstrumente und AV-Produktion, Medien (Bücher, DVDs, Musik, Software und Video) sowie
            Computer. Wenn Sie günstige Artikel in diesen Kategorien verkaufen, trifft Sie diese
            Änderung wahrscheinlich am stärksten.
          </p>

          <h3>3. Neue Stufen und Bearbeitungsgebühren für große Artikel</h3>
          <p>
            Sperrige Produkte und Übergrößen bekommen mehr Größenstufen, damit die Gebühr der Größe
            genauer folgt. Zwei neue Bearbeitungsgebühren kommen hinzu: eine für flache Produkte wie
            Platten und Paneele, eine für Artikel mit einer sehr langen Seite. Die alte Gebühr für
            Artikel über der Maximalgröße entfällt. Manche schweren Artikel zahlen weniger, andere
            mehr. Händler großer Produkte sollten deshalb die Größenstufe jedes Produkts prüfen.
          </p>

          <h3>4. Eine altersabhängige Lagergebühr ab dem 1. Februar</h3>
          <p>
            Amazon streicht den Zuschlag für die Lagerauslastung und rechnet den Zuschlag für
            Altbestand in die monatliche Lagergebühr ein, als einheitlichen Satz je nach Lagerdauer.
            Laut Amazon zahlt Ware, die sich innerhalb von sechs Monaten verkauft, gleich viel oder
            weniger, Altbestand dagegen mehr. Langsamdreher werden teurer im Lager.
          </p>

          <h3>5. Ein neuer Maßstab für die Gebühr bei niedrigem Lagerbestand</h3>
          <p>
            Ebenfalls ab dem 1. Februar gilt die Gebühr bei niedrigem Lagerbestand nur noch, wenn der
            Bestand unter 28 Tage Reichweite fällt. Amazon misst sie anhand der tatsächlichen Versände
            der vier Wochen vor und nach jeder Prüfung statt anhand der Verkäufe der letzten 30 und 90
            Tage. Mit mindestens vier Wochen Bestand in Amazons Lagern vermeiden Sie die Gebühr.
          </p>
        </>
      ),
    },
    {
      id: "what-stays-the-same",
      heading: "Was gleich bleibt",
      body: (
        <ul>
          <li>
            <strong>Der Treibstoff- und Logistikzuschlag.</strong> Laut Amazon bleibt der 2026
            eingeführte Zuschlag von 3,5 % unverändert.
          </li>
          <li>
            <strong>Die meisten Verkaufsgebühren.</strong> Gemeldet wurden ein neuer Satz für
            3D-Drucker, gültig seit dem 5. November 2026, und ein Aktionssatz von 10 % für Amazon
            Renewed bis zum 18. Oktober 2027.
          </li>
          <li>
            <strong>Die Tarife für die Einlagerungsplatzierung.</strong> PPC Land meldet keine
            Änderung der Sätze, auch wenn die Annahmestandorte für Standardgrößen zusammengelegt werden.
          </li>
        </ul>
      ),
    },
    {
      id: "key-dates",
      heading: "Wichtige Termine für die Amazon FBA Gebühren 2027",
      body: (
        <ul>
          <li>
            <strong>5. November 2026:</strong> Amazon kündigt die Gebühren für 2027 an. Der Satz für
            3D-Drucker gilt ab sofort.
          </li>
          <li>
            <strong>14. Januar 2027:</strong> Ende der Hochsaison 2026 und der Low-Price-FBA-Tarife
            für die fünf genannten Kategorien.
          </li>
          <li>
            <strong>15. Januar 2027:</strong> neue Versandgebühren, Größenstufen und
            Bearbeitungsgebühren.
          </li>
          <li>
            <strong>1. Februar 2027:</strong> die altersabhängige Lagergebühr und der neue Maßstab für
            niedrigen Lagerbestand.
          </li>
        </ul>
      ),
    },
    {
      id: "check-your-margins",
      heading: "So prüfen Sie, was die Gebühren 2027 für Ihre Margen bedeuten",
      body: (
        <>
          <BlogPhotoFigure photo={{ ...calculatorPhoto, alt: "Taschenrechner auf ausgedruckten Diagrammen neben einem Laptop" }} label="Foto" />
          <p>
            Amazon hat dafür zwei Tools gebaut. Nutzen Sie sie vor dem 15. Januar, solange Sie Preise
            oder Bestände noch anpassen können.
          </p>
          <ul>
            <li>
              <strong>Dashboard Fee Change Comparison.</strong> In Profit Analytics in Seller Central.
              Es zeigt, wie sich die Änderungen auf Ihr Konto und jedes Produkt auswirken.
            </li>
            <li>
              <strong>Revenue Calculator.</strong> Damit simulieren Sie Gebühren und Gewinn eines
              Produkts bei verschiedenen Preisen.
            </li>
          </ul>
          <h3>Eine einfache Routine, Produkt für Produkt</h3>
          <ul>
            <li>Listen Sie Ihre Produkte mit Preisstufe, Größenstufe und monatlich verkauften Einheiten auf.</li>
            <li>Notieren Sie für jedes Produkt die Versandgebühr 2026 und 2027 und die Differenz.</li>
            <li>Multiplizieren Sie die Differenz mit den verkauften Einheiten, um die Kosten pro Monat zu sehen.</li>
            <li>Sortieren Sie nach diesen Kosten: Oben auf der Liste sollten Sie zuerst handeln.</li>
          </ul>
          <h3>Ein Rechenbeispiel zur Veranschaulichung</h3>
          <p>
            Nehmen Sie Amazons Beispiel der Handyhülle: Die Gebühr steigt von 2,49 $ auf 2,72 $, also
            0,23 $ mehr pro Einheit. Würde ein solches Produkt 2.000 Einheiten im Monat verkaufen, eine
            Menge, die wir nur zur Veranschaulichung nutzen, kostete die Änderung 460 $ im Monat oder
            5.520 $ im Jahr. Bei einem günstigen Artikel mit dünner Marge kann das über Gewinn oder
            Verlust entscheiden.
          </p>
        </>
      ),
    },
    {
      id: "before-january-15",
      heading: "Was Sie vor dem 15. Januar tun sollten",
      body: (
        <>
          <ul>
            <li>
              <strong>Preise nahe den Stufengrenzen prüfen.</strong> Ein Produkt knapp über 10 $ oder
              50 $ zahlt jetzt einen anderen Satz als eines knapp darunter. Prüfen Sie, was eine kleine
              Preisänderung für Gebühr und Absatz bedeuten würde, bevor Sie handeln.
            </li>
            <li>
              <strong>Altbestand vor dem 1. Februar abbauen.</strong> Mit der neuen altersabhängigen
              Gebühr kostet alte Ware mehr. Erwägen Sie Aktionen oder Rücksendungen für Langsamdreher.
            </li>
            <li>
              <strong>Mit 28 Tagen Reichweite planen.</strong> Stellen Sie den Nachschub so ein, dass
              Ihre Bestseller nicht unter vier Wochen Bestand fallen.
            </li>
            <li>
              <strong>Große Artikel erneut prüfen.</strong> Mit den neuen Stufen und
              Bearbeitungsgebühren zählen Verpackung und Maße mehr als zuvor.
            </li>
          </ul>
          <p>
            Gebühren sind nur ein Teil des Gewinns. Wie Sitzungen, Conversion und Werbung
            zusammenspielen, zeigt unser{" "}
            <Link href={p("/data-analysis")}>Ratgeber zu den Amazon-Zahlen, die zählen</Link>.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: "Wann gelten die Amazon FBA Gebühren 2027?",
      answer:
        "Die meisten Änderungen der Versandgebühren beginnen am 15. Januar 2027. Die neue altersabhängige Lagergebühr und der neue Maßstab für niedrigen Lagerbestand starten am 1. Februar 2027. Die Gebühr richtet sich nach dem Versandtag der Einheit, nicht nach dem Bestelltag.",
    },
    {
      question: "Wie stark steigen die Amazon FBA Gebühren 2027?",
      answer:
        "Laut Amazon steigt die Versandgebühr im Schnitt um etwa 0,19 $ pro verkaufter Einheit. Manche Produkte zahlen mehr, andere weniger, je nach Größen- und Preisstufe. Prüfen Sie Ihre Produkte im Dashboard Fee Change Comparison.",
    },
    {
      question: "Ändert sich der Treibstoff- und Logistikzuschlag 2027?",
      answer: "Nein. Laut Amazon bleibt der Treibstoff- und Logistikzuschlag von 3,5 % unverändert.",
    },
    {
      question: "Wie vermeide ich 2027 die Gebühr bei niedrigem Lagerbestand?",
      answer:
        "Ab dem 1. Februar 2027 gilt die Gebühr nur, wenn Ihr Bestand unter 28 Tage Reichweite fällt. Mit mindestens vier Wochen Bestand pro Produkt in Amazons Lagern vermeiden Sie sie.",
    },
    {
      question: "Kann Nautilo Studio mir helfen, meine Margen zu prüfen?",
      answer:
        "Ja. Datenanalyse ist einer unserer Services. Senden Sie uns über unseren kostenlosen Check ein Listing, und wir sagen Ihnen, was wir uns zuerst ansehen würden.",
    },
  ],
  sources: [
    {
      publisher: "Amazon Selling Partners",
      title: "Update to US referral and Fulfillment by Amazon fees for 2027",
      url: AMAZON_2027,
    },
    {
      publisher: "PPC Land",
      title: "Amazon sellers face average $0.19 FBA fee rise from January 15, 2027",
      url: PPC_LAND,
    },
    {
      publisher: "Amazon Selling Partners",
      title: "Update to U.S. referral and Fulfillment by Amazon fees for 2026",
      url: AMAZON_2026,
    },
  ],
  cta: {
    text: "Neue Gebühren verändern die Rechnung für jedes Produkt. Sehen Sie, welche Zahlen Sie jede Woche beobachten sollten, oder lassen Sie uns kostenlos eines Ihrer Listings ansehen.",
    pillar: { href: "/data-analysis", label: "Unseren Ratgeber zur Datenanalyse lesen" },
    formHeading: "Unsicher, was die Gebühren 2027 für Sie bedeuten?",
    formText: "Senden Sie uns ein Listing, und wir sagen Ihnen kostenlos, was wir zuerst prüfen würden.",
  },
};

export default post;
