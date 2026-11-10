import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const PRODUCT_LISTINGS = "https://sell.amazon.com/blog/amazon-product-listings";
const PRODUCT_PHOTOS = "https://sell.amazon.com/blog/product-photos";
const A_PLUS = "https://sell.amazon.com/tools/a-content";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const p = (path: string) => localePath("it", path);

const title = "Ottimizzazione delle schede Amazon | Nautilo Studio";
const description =
  "Come ottimizzare una scheda Amazon perché più visitatori comprino: titolo, punti elenco, immagini, contenuti A+ e test. Guida PDF e revisione gratuita.";

const page: GuideCopy["page"] = {
  slug: "listing-optimization",
  breadcrumb: "Ottimizzazione delle schede",
  question: "Come si ottimizza una scheda Amazon perché più clienti comprino?",
  answer:
    "Ottimizzare una scheda significa migliorare titolo, punti elenco, immagini e contenuti A+ perché chi arriva sulla tua pagina scelga di comprare. Parti da immagini chiare e da un titolo che dica esattamente cos’è il prodotto, poi usa i punti elenco per rispondere ai dubbi che i clienti hanno prima di ordinare. Prova una modifica alla volta e tieni la versione che vende di più.",
  description,
  image: {
    src: "/img/service-listing.jpg",
    alt: "Tagliere di bambù con un’etichetta di carta vuota",
    tile: "bg-apricot",
  },
  updated: "2026-11-07",
  facts: [
    { value: 9, label: "Foto che Amazon ti permette di caricare" },
    { value: 85, suffix: "%", label: "Dell’inquadratura che il prodotto dovrebbe occupare" },
    { value: 5, label: "Punti elenco per scheda" },
    {
      value: 8,
      prefix: "Fino all’",
      suffix: "%",
      label: "Di vendite in più che Amazon attribuisce ai contenuti A+ di base",
    },
  ],
  sections: [
    {
      id: "what-matters",
      heading: "Quali parti di una scheda Amazon contano di più?",
      body: (
        <ul>
          <li>
            <strong>Titolo.</strong> Di’ cos’è il prodotto, poi il marchio e i dettagli che i
            clienti confrontano, come misura o colore. La nostra{" "}
            <Link href={p("/amazon-seo")}>guida alla SEO su Amazon</Link> spiega quali parole usare.
          </li>
          <li>
            <strong>Immagini.</strong> Amazon ti permette di{" "}
            <a href={PRODUCT_LISTINGS} target="_blank" rel="noopener noreferrer">
              caricare fino a nove foto
            </a>
            . I suoi consigli fotografici raccomandano uno sfondo bianco e un prodotto che{" "}
            <a href={PRODUCT_PHOTOS} target="_blank" rel="noopener noreferrer">
              occupi almeno l’85% dell’inquadratura
            </a>
            .
          </li>
          <li>
            <strong>Punti elenco.</strong> Ne hai fino a cinque. Dai a ognuno un solo vantaggio e
            sostienilo con un fatto che il cliente può verificare.
          </li>
          <li>
            <strong>Contenuti A+.</strong> Immagini e testi in più sotto la scheda, per i marchi
            iscritti al Registro dei marchi. Amazon afferma che{" "}
            <a href={A_PLUS} target="_blank" rel="noopener noreferrer">
              i contenuti A+ di base possono aumentare le vendite fino all’8%
            </a>
            , secondo i suoi dati interni.
          </li>
        </ul>
      ),
    },
    {
      id: "signs",
      heading: "Come capisci che una scheda va migliorata?",
      body: (
        <>
          <p>
            Amazon fa un esempio semplice:{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              una scheda con molte visualizzazioni ma poche vendite
            </a>{" "}
            potrebbe aver bisogno di immagini o descrizioni migliori.
          </p>
          <ul>
            <li>
              <strong>Tante visite, pochi ordini.</strong> I clienti ti trovano ma non si convincono.
              Lavora su immagini, punti elenco e contenuti A+.
            </li>
            <li>
              <strong>Poche visite.</strong> I clienti non trovano la scheda. Parti invece dalla{" "}
              <Link href={p("/amazon-seo")}>SEO su Amazon</Link>.
            </li>
            <li>
              <strong>Tornano sempre le stesse domande.</strong> Se recensioni e domande dei clienti
              ripetono un dubbio, rispondi nei punti elenco o nelle immagini.
            </li>
            <li>
              <strong>Resi per «non conforme alla descrizione».</strong> La scheda promette qualcosa
              che il prodotto non mantiene. Correggi il testo prima di spendere di più in traffico.
            </li>
          </ul>
          <p>
            Non sai quali numeri guardare? La nostra{" "}
            <Link href={p("/data-analysis")}>guida all’analisi dei dati</Link> te li spiega.
          </p>
        </>
      ),
    },
    {
      id: "testing",
      heading: "Come si capisce cosa funziona?",
      body: (
        <ol>
          <li>Scegli un elemento, come l’immagine principale o il titolo. Cambia solo quello.</li>
          <li>
            Se il tuo marchio è nel Registro dei marchi, usa{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              Gestisci i tuoi esperimenti
            </a>{" "}
            di Amazon per mostrare due versioni ai clienti e confrontare i risultati.
          </li>
          <li>Lascia durare il test abbastanza da raccogliere ordini veri, non solo pochi giorni.</li>
          <li>Tieni la versione vincente, poi passa all’elemento successivo.</li>
        </ol>
      ),
    },
    {
      id: "mistakes",
      heading: "Quali errori bloccano l’acquisto?",
      body: (
        <ul>
          <li>
            <strong>Immagini sfocate o scure.</strong> Il cliente non può toccare il prodotto,
            quindi devono farlo le foto al posto suo.
          </li>
          <li>
            <strong>Caratteristiche senza vantaggi.</strong> «Acciaio inox» dice di più se spieghi
            che tiene le bevande fresche.
          </li>
          <li>
            <strong>Affermazioni che non puoi dimostrare.</strong> Portano a resi e recensioni
            negative, e possono violare le regole di Amazon.
          </li>
          <li>
            <strong>Dettagli che non coincidono.</strong> Titolo, punti elenco e immagini devono
            descrivere la stessa misura, lo stesso colore e lo stesso contenuto.
          </li>
        </ul>
      ),
    },
  ],
  faqs: [
    {
      question: "Quante immagini dovrebbe avere una scheda Amazon?",
      answer:
        "Amazon ti permette di caricare fino a nove foto e dice che più sono, meglio è. Parti da un’immagine principale pulita su sfondo bianco, poi aggiungi altre angolazioni, il prodotto in uso e le sue dimensioni.",
    },
    {
      question: "Vale la pena usare i contenuti A+?",
      answer:
        "Di solito sì, se puoi usarli. Amazon afferma che i contenuti A+ di base possono aumentare le vendite fino all’8%, secondo i suoi dati interni. Sono gratuiti per i marchi idonei iscritti al Registro dei marchi.",
    },
    {
      question: "Che differenza c’è tra ottimizzazione della scheda e SEO su Amazon?",
      answer:
        "La SEO su Amazon aiuta i clienti a trovare la tua scheda. L’ottimizzazione aiuta chi arriva a decidere di comprare. Servono entrambe, e le vendite di una scheda migliore sostengono anche il tuo posizionamento.",
    },
    {
      question: "Nautilo Studio può controllare la mia scheda?",
      answer:
        "Sì. Inviaci il link a una scheda Amazon tramite il modulo di revisione gratuita in questa pagina e ti scriveremo cosa miglioreremmo per primo.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
