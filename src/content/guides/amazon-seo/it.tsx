import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const AMAZON_SEO_GUIDE = "https://sell.amazon.com/blog/amazon-seo";
const TITLE_RULES = "https://sellercentral.amazon.com/gp/help/external/GYTR6SYGFA5E3EQC";
const SEARCH_TERMS_HELP = "https://sellercentral.amazon.com/help/hub/reference/external/G23501";

const p = (path: string) => localePath("it", path);

const title = "SEO B2B per venditori Amazon: sali in alto | Nautilo Studio";
const description =
  "Nautilo Studio è l’agenzia SEO B2B per venditori Amazon USA: troviamo cosa cercano i clienti e lo mettiamo dove Amazon lo legge. Chiedi la revisione gratuita.";

const page: GuideCopy["page"] = {
  slug: "amazon-seo",
  breadcrumb: "SEO B2B per Amazon",
  question: "SEO B2B per venditori Amazon: come salire nelle ricerche",
  answer:
    "La SEO B2B per venditori Amazon, cioè la SEO su Amazon, mette il tuo prodotto davanti a chi lo cerca. Amazon mostra i prodotti che rispondono meglio a una ricerca e che i clienti hanno più probabilità di comprare. Inserisci le parole che i clienti digitano nel titolo, nei punti elenco e nei termini di ricerca nascosti, poi rendi la scheda abbastanza convincente da vendere. Quelle vendite, insieme a una scheda di qualità, fanno salire il prodotto nel tempo.",
  description,
  image: {
    src: "/img/amazon-seo-dashboard.webp",
    alt: "Portatile con una dashboard SEO su Amazon: posizioni delle parole chiave e traffico organico",
    tile: "bg-cyan",
  },
  updated: "2026-11-11",
  facts: [
    { value: 200, label: "Caratteri come limite del titolo nella guida SEO di Amazon" },
    { value: 60, label: "Caratteri che Amazon consiglia per il titolo" },
    { value: 2, suffix: "×", label: "Volte al massimo in cui una parola può comparire nel titolo" },
    { value: 4, label: "Fonti per trovare ricerche reali" },
  ],
  sections: [
    {
      id: "how-ranking-works",
      heading: "Fattori di ranking della SEO su Amazon: cosa decide la tua posizione",
      body: (
        <>
          <p>
            Quando un cliente cerca, Amazon deve scegliere quali prodotti mostrare per primi. Sceglie le schede che rispondono meglio alle parole digitate e che il cliente ha più probabilità di comprare. Per questo la SEO B2B per venditori Amazon parte dalla pertinenza e arriva alle vendite.
          </p>
          <p>
            La pertinenza nasce da titolo, punti elenco, descrizione e termini di ricerca nascosti: se una parola non compare in nessuno di questi, il prodotto esce di rado per quella ricerca. Poi conta la conversione. I clienti cliccano e comprano quando immagini, prezzo, recensioni e offerta in evidenza li convincono, e i prodotti che vendono con costanza tendono a mantenere la posizione. Amazon dice anche che{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              la qualità della scheda e la salute dell’account possono contribuire al ranking
            </a>
            , quindi una scheda pulita e completa conta quanto le parole giuste.
          </p>
          <blockquote>La pertinenza fa comparire il tuo prodotto. Le vendite lo tengono in alto.</blockquote>
        </>
      ),
    },
    {
      id: "find-keywords",
      heading: "Ricerca delle parole chiave su Amazon: le parole che digitano i tuoi clienti",
      body: (
        <>
          <p>
            Le parole chiave buone nascono da ciò che i clienti digitano davvero, non da supposizioni. Il modo più veloce per iniziare è la barra di ricerca di Amazon: scrivi la parola principale del tuo prodotto e annota i suggerimenti, perché vengono da ricerche reali.
          </p>
          <p>
            Seller Central aggiunge dati gratuiti. Product Opportunity Explorer mostra i principali termini di ricerca di una nicchia. Brand Analytics mostra ai brand registrati quali ricerche portano a clic e vendite. Il report dei termini di ricerca dei tuoi annunci Sponsored Products elenca le ricerche esatte che ti hanno portato clienti. Insieme sono quattro fonti di ricerche reali e una lista chiara da cui partire.
          </p>
        </>
      ),
    },
    {
      id: "where-to-put-keywords",
      heading: "Dove vanno le parole chiave su Amazon: titolo, punti elenco e termini nascosti",
      body: (
        <>
          <p>
            Il titolo pesa più di tutto, quindi deve dire cos’è il prodotto nelle prime parole. La guida di Amazon indica{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              un limite di 200 caratteri e ne consiglia 60 o meno
            </a>
            , e le sue{" "}
            <a href={TITLE_RULES} target="_blank" rel="noopener noreferrer">
              regole sui titoli
            </a>{" "}
            permettono la stessa parola al massimo due volte.
          </p>
          <p>
            Ogni punto elenco spiega un vantaggio ed è il posto naturale per le parole chiave secondarie. Descrizione e contenuti A+ coprono materiali, misure, cura e contenuto della confezione. I termini di ricerca nascosti raccolgono sinonimi ed errori di battitura che non trovano posto altrove, senza ripetizioni, marchi o ASIN. Controlla il{" "}
            <a href={SEARCH_TERMS_HELP} target="_blank" rel="noopener noreferrer">
              limite di lunghezza attuale
            </a>
            , poi segui la nostra guida passo passo per{" "}
            <Link href={p("/blog/amazon-backend-keywords")}>compilare le parole chiave nascoste di Amazon</Link>.
          </p>
        </>
      ),
    },
    {
      id: "common-mistakes",
      heading: "Gli errori di SEO su Amazon che ti fanno perdere posizioni",
      body: (
        <>
          <p>
            L’errore più comune è riempire il titolo di parole chiave: un titolo con tutti i termini possibili si legge male e può violare le regole di Amazon. Subito dopo viene l’uso di marchi della concorrenza, che Amazon non permette né nella scheda né nei termini di ricerca.
          </p>
          <p>
            Due errori più silenziosi pesano comunque. Sul telefono i titoli lunghi vengono tagliati, quindi le parole chiave devono stare all’inizio. E cambiare tutto insieme impedisce di capire quale modifica ha funzionato. Il posizionamento porta i clienti, e la nostra{" "}
            <Link href={p("/services/listing-optimization")}>guida all’ottimizzazione delle schede</Link> spiega come trasformare quelle visite in vendite.
          </p>
        </>
      ),
    },
    {
      id: "b2b-seo-service",
      heading: "Cosa fa la nostra agenzia SEO B2B per i venditori Amazon",
      figure: {
        src: "/img/amazon-seo-dashboard.webp",
        alt: "Portatile con una dashboard di SEO B2B e pubblicità su Amazon: posizioni delle parole chiave, traffico organico e ACOS per campagna",
        width: 1600,
        height: 899,
        caption: "Il tipo di dashboard con cui seguiamo posizione e vendite. Numeri di esempio, non risultati di un cliente.",
      },
      body: (
        <>
          <p>
            Pensala come marketing B2B con la SEO per il tuo brand su Amazon: una volta fatto il lavoro, continua a portare clienti. Il nostro servizio SEO B2B segue quattro passaggi, una scheda alla volta.
          </p>
          <p>
            Prima studiamo le ricerche che i tuoi clienti digitano davvero, con gli strumenti di Amazon. Poi riscriviamo titolo e punti elenco perché le parole chiave principali vengano prima e si leggano bene, e compiliamo i termini di ricerca nascosti con sinonimi ed errori di battitura, nel rispetto delle regole di Amazon. Infine, dopo ogni modifica controlliamo posizione e vendite con il nostro servizio di analisi dei dati Amazon.
          </p>
          <p>
            Il lavoro lo fa il nostro team a Barcellona. <Link href={p("/about")}>Conosci il team di Nautilo Studio</Link>.
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
