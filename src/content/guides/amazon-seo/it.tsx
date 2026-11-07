import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const AMAZON_SEO_GUIDE = "https://sell.amazon.com/blog/amazon-seo";
const TITLE_RULES = "https://sellercentral.amazon.com/gp/help/external/GYTR6SYGFA5E3EQC";
const SEARCH_TERMS_HELP = "https://sellercentral.amazon.com/help/hub/reference/external/G23501";

const p = (path: string) => localePath("it", path);

const title = "SEO su Amazon: come salire nei risultati | Nautilo Studio";
const description =
  "SEO su Amazon per venditori negli USA: cosa decide la tua posizione, dove vanno le parole chiave e quali errori evitare. Richiedi una revisione gratuita.";

const page: GuideCopy["page"] = {
  slug: "amazon-seo",
  breadcrumb: "SEO su Amazon",
  question: "Come si sale nei risultati di ricerca di Amazon?",
  answer:
    "Amazon mostra i prodotti che rispondono meglio a una ricerca e che i clienti hanno più probabilità di comprare. Inserisci le parole che i clienti digitano nel titolo, nei punti elenco e nei termini di ricerca nascosti, poi rendi la scheda abbastanza convincente da vendere. Quelle vendite, insieme a una scheda di qualità, fanno salire il prodotto nel tempo.",
  description,
  image: {
    src: "/img/service-ads.jpg",
    alt: "Lente d’ingrandimento appoggiata a un piccolo pacco",
    tile: "bg-cyan",
  },
  updated: "2026-11-07",
  facts: [
    { value: 200, label: "Caratteri come limite del titolo nella guida SEO di Amazon" },
    { value: 60, label: "Caratteri che Amazon consiglia per il titolo" },
    { value: 2, suffix: "×", label: "Volte al massimo in cui una parola può comparire nel titolo" },
    { value: 4, label: "Fonti per trovare ricerche reali" },
  ],
  sections: [
    {
      id: "how-ranking-works",
      heading: "Come decide Amazon la tua posizione?",
      body: (
        <ul>
          <li>
            <strong>Pertinenza.</strong> Le parole della ricerca compaiono nel titolo, nei punti
            elenco, nella descrizione e nei termini di ricerca nascosti.
          </li>
          <li>
            <strong>Conversione.</strong> I clienti cliccano e comprano. Contano le immagini, il
            prezzo, le recensioni e l’Offerta in evidenza.
          </li>
          <li>
            <strong>Storico delle vendite.</strong> I prodotti che vendono con costanza tendono a
            mantenere la posizione.
          </li>
          <li>
            <strong>Qualità della scheda.</strong> Amazon spiega che{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              la qualità della scheda e lo stato dell’account possono contribuire al posizionamento
            </a>
            .
          </li>
        </ul>
      ),
    },
    {
      id: "find-keywords",
      heading: "Come trovi le parole che usano i clienti?",
      body: (
        <ul>
          <li>
            <strong>La barra di ricerca di Amazon.</strong> Scrivi il nome del tuo prodotto e annota
            cosa suggerisce Amazon.
          </li>
          <li>
            <strong>Product Opportunity Explorer.</strong> Uno strumento gratuito di Seller Central
            con i principali termini di ricerca di una nicchia.
          </li>
          <li>
            <strong>Brand Analytics.</strong> Per i marchi iscritti al Registro dei marchi: quali
            ricerche portano a clic e vendite.
          </li>
          <li>
            <strong>Report dei termini di ricerca.</strong> Le ricerche reali che hanno portato i
            clienti ai tuoi annunci Sponsored Products.
          </li>
        </ul>
      ),
    },
    {
      id: "where-to-put-keywords",
      heading: "Dove vanno le tue parole chiave?",
      body: (
        <ul>
          <li>
            <strong>Titolo.</strong> Prima cosa è il prodotto. La guida di Amazon indica{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              un limite di 200 caratteri e ne consiglia 60 o meno
            </a>
            , e le sue{" "}
            <a href={TITLE_RULES} target="_blank" rel="noopener noreferrer">
              regole sui titoli
            </a>{" "}
            permettono di ripetere una parola al massimo due volte.
          </li>
          <li>
            <strong>Punti elenco.</strong> Un vantaggio per punto, con le parole chiave secondarie
            dove suonano naturali.
          </li>
          <li>
            <strong>Descrizione e contenuti A+.</strong> Materiali, misure, manutenzione e contenuto
            della confezione.
          </li>
          <li>
            <strong>Termini di ricerca nascosti.</strong> Sinonimi ed errori di battitura, senza
            ripetizioni, nomi di marchi o ASIN. Controlla il{" "}
            <a href={SEARCH_TERMS_HELP} target="_blank" rel="noopener noreferrer">
              limite di lunghezza attuale
            </a>
            .
          </li>
        </ul>
      ),
    },
    {
      id: "common-mistakes",
      heading: "Quali sono gli errori più comuni?",
      body: (
        <>
          <ul>
            <li>
              <strong>Riempire il titolo di parole chiave.</strong> Si legge male e può violare le
              regole di Amazon sui titoli.
            </li>
            <li>
              <strong>Marchi della concorrenza.</strong> Usarli nella scheda o nei termini di ricerca
              è contro le regole di Amazon.
            </li>
            <li>
              <strong>Dimenticare lo smartphone.</strong> I titoli lunghi vengono tagliati, quindi le
              parole chiave vanno all’inizio.
            </li>
            <li>
              <strong>Cambiare tutto insieme.</strong> Poi non sai quale modifica ha funzionato.
            </li>
          </ul>
          <p>
            Il posizionamento porta i clienti. La nostra{" "}
            <Link href={p("/listing-optimization")}>guida all’ottimizzazione delle schede</Link>{" "}
            spiega come trasformare quelle visite in vendite.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: "La SEO su Amazon è diversa dalla SEO su Google?",
      answer:
        "Sì. Google posiziona pagine che rispondono a una domanda, mentre Amazon posiziona prodotti che i clienti probabilmente compreranno. Su Amazon la conversione e lo storico delle vendite contano molto di più.",
    },
    {
      question: "Quanto tempo serve perché la SEO su Amazon funzioni?",
      answer:
        "Il posizionamento segue le vendite, quindi valuta una modifica nell’arco di qualche settimana e non di pochi giorni, e cambia una cosa alla volta.",
    },
    {
      question: "Devo pagare la pubblicità per posizionarmi su Amazon?",
      answer:
        "No, ma può aiutare. Amazon spiega che gli annunci Sponsored Products possono aiutare le offerte a salire nei risultati, e le loro vendite si aggiungono allo storico del tuo prodotto.",
    },
    {
      question: "Nautilo Studio può controllare la mia scheda?",
      answer:
        "Sì. Inviaci una scheda Amazon tramite il modulo di revisione gratuita in questa pagina e ti scriveremo cosa miglioreremmo per primo.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
