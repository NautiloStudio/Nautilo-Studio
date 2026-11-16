import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const BRAND_ANALYTICS = "https://sell.amazon.com/blog/brand-analytics";
const ACOS = "https://advertising.amazon.com/library/guides/acos-advertising-cost-of-sales";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const p = (path: string) => localePath("it", path);

const title = "Agenzia di marketing analytics per Amazon | Nautilo Studio";
const description =
  "Nautilo Studio è l’agenzia di marketing analytics per venditori Amazon USA: seguiamo i numeri che mostrano dove si perdono vendite. Revisione gratuita.";

const page: GuideCopy["page"] = {
  slug: "data-analysis",
  breadcrumb: "Analisi dei dati Amazon",
  question: "Agenzia di marketing analytics per Amazon: i numeri che contano",
  answer:
    "L’analisi dei dati Amazon, come la fa un’agenzia di marketing analytics, parte da quattro numeri per ogni prodotto: sessioni, tasso di conversione, se hai l’Offerta in evidenza e il costo pubblicitario sulle vendite (ACOS). Insieme ti dicono se il problema è farti trovare, farti scegliere o spendere troppo in pubblicità. Controllali ogni settimana, confrontali con la settimana precedente e cambia una cosa alla volta.",
  description,
  image: {
    src: "/img/amazon-data-analysis.jpg",
    alt: "iMac con una dashboard di analisi di un negozio Amazon: sessioni, tasso di conversione, Offerta in evidenza, ACOS e ricerche principali",
    tile: "bg-royal",
  },
  updated: "2026-11-16",
  facts: [
    { value: 4, label: "Numeri da seguire per ogni prodotto" },
    { value: 50, suffix: "%", label: "ACOS nell’esempio di Amazon: 50 $ spesi, 100 $ incassati" },
    { value: 1, label: "Giorno alla settimana per la tua routine" },
    { value: 1, label: "Problema da risolvere ogni settimana" },
  ],
  sections: [
    {
      id: "numbers",
      heading: "Analisi dei dati Amazon: i quattro numeri che contano di più",
      body: (
        <>
          <p>
            Seller Central è pieno di report, ma un’agenzia di marketing analytics parte da quattro numeri per ogni prodotto. Le sessioni dicono quanti clienti hanno visitato la pagina, cioè se ti trovano. Il tasso di conversione è la quota di quelle visite che è diventata un ordine, cioè se la scheda convince.
          </p>
          <p>
            L’Offerta in evidenza è l’offerta accanto al pulsante Acquista ora, e Amazon dice che prezzo, disponibilità e spedizione contano per{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              vincere l’Offerta in evidenza
            </a>
            , cosa che può far crescere molto le vendite. L’ACOS è la spesa pubblicitaria divisa per i ricavi pubblicitari, e Amazon Ads dice che il tuo{" "}
            <a href={ACOS} target="_blank" rel="noopener noreferrer">
              ACOS deve restare sotto il tuo margine di profitto
            </a>{" "}
            perché la pubblicità resti redditizia.
          </p>
          <blockquote>Quattro numeri, controllati ogni settimana, ti mostrano dove si perdono le vendite.</blockquote>
        </>
      ),
    },
    {
      id: "what-they-mean",
      heading: "Cosa dicono i numeri a un’agenzia di marketing analytics",
      body: (
        <>
          <p>
            Letti insieme, i quattro numeri indicano un problema alla volta. Poche sessioni vogliono dire che i clienti non trovano il prodotto, quindi vengono prima le parole chiave di titolo, punti elenco e termini di ricerca. Tante sessioni con una conversione bassa vogliono dire che arrivano ma non comprano, e il nostro{" "}
            <Link href={p("/services/listing-optimization")}>servizio di ottimizzazione del tasso di conversione per le schede Amazon</Link> è pensato per questo caso.
          </p>
          <p>
            Se perdi l’Offerta in evidenza, confronta prezzo, scorte e spedizione con le altre offerte dello stesso prodotto. Se il tuo ACOS supera il margine, la pubblicità perde soldi: metti in pausa i termini di ricerca che spendono senza vendere prima di alzare qualsiasi budget.
          </p>
        </>
      ),
    },
    {
      id: "where-to-find",
      heading: "Dove trovare i tuoi dati Amazon in Seller Central",
      body: (
        <>
          <p>
            I Report sull’attività, nella sezione Report di Seller Central, mostrano sessioni, visualizzazioni e vendite per prodotto. I marchi nel Brand Registry hanno anche Brand Analytics, la cui{" "}
            <a href={BRAND_ANALYTICS} target="_blank" rel="noopener noreferrer">
              dashboard Search Query Performance
            </a>{" "}
            mostra impressioni, clic e aggiunte al carrello per le ricerche che portano ai tuoi prodotti. I report pubblicitari, nel gestore delle campagne, mostrano spesa, vendite, clic e ACOS per campagna e termine di ricerca.
          </p>
          <p>
            Profit Analytics, sempre in Seller Central, mostra quanto Amazon ti addebita per ogni prodotto. Le tariffe cambiano ogni anno, quindi leggi{" "}
            <Link href={p("/blog/amazon-fba-fees-2027")}>cosa cambia nelle commissioni Amazon FBA per il 2027</Link> prima di fissare i prezzi. Poi tieni un tuo foglio, una riga per settimana e per prodotto, per vedere tendenze che un singolo report nasconde.
          </p>
        </>
      ),
    },
    {
      id: "weekly-routine",
      heading: "Una routine settimanale di report Amazon facile da mantenere",
      body: (
        <>
          <p>
            L’analisi dei dati Amazon funziona meglio come abitudine. Scegli un giorno alla settimana ed estrai sempre gli stessi report, poi confronta ogni numero con la settimana precedente e con la stessa settimana del mese scorso.
          </p>
          <p>
            Annota ogni modifica, come prezzo, immagini o offerte, e quando l’hai fatta. Poi scegli un problema da risolvere questa settimana e controlla il risultato la settimana dopo. Una correzione alla volta sembra più lenta, ma è l’unico modo per sapere cosa ha funzionato.
          </p>
        </>
      ),
    },
    {
      id: "analytics-service",
      heading: "Cosa fa la nostra agenzia di marketing analytics per i venditori Amazon",
      figure: {
        src: "/img/amazon-data-analysis.jpg",
        alt: "iMac con i numeri settimanali di Amazon che segue un’agenzia di marketing analytics: sessioni, conversione, Offerta in evidenza, ACOS, ricerche e giorni di copertura",
        width: 1600,
        height: 900,
        caption: "Dati di esempio, non sono numeri di clienti. Foto: Amy Hirschi, Unsplash.",
      },
      body: (
        <>
          <p>
            Pensala come un’agenzia di web analytics per il tuo negozio Amazon: la stessa disciplina, applicata ai report che ti dà Amazon. Il nostro servizio di marketing analytics segue quattro passi, un prodotto alla volta.
          </p>
          <p>
            Prima estraiamo i quattro numeri di ogni prodotto e prepariamo un foglio che leggi in pochi minuti. Poi troviamo dove si perdono le vendite: nel farti trovare, nel farti scegliere o nella spesa pubblicitaria. Concordiamo una correzione per la settimana e, la settimana dopo, controlliamo se ha funzionato prima di andare avanti.
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
      question: "Qual è un buon tasso di conversione su Amazon?",
      answer:
        "Dipende dalla categoria, dal prezzo e da come arrivano i clienti, quindi non esiste un unico numero giusto. Confronta ogni prodotto con il suo storico e con prodotti simili del tuo negozio.",
    },
    {
      question: "Come si calcola l’ACOS?",
      answer:
        "Dividi la spesa pubblicitaria per le entrate pubblicitarie e moltiplica per 100. Amazon Ads fa l’esempio di 50 $ spesi per una campagna che ha incassato 100 $, cioè un ACOS del 50%.",
    },
    {
      question: "Mi serve il Registro dei marchi per analizzare i miei dati?",
      answer:
        "Per le basi no. I report sull’attività e quelli pubblicitari sono in Seller Central e nel gestore delle campagne. Brand Analytics, con i dati sulle ricerche, richiede un marchio iscritto al Registro dei marchi.",
    },
    {
      question: "Nautilo Studio può analizzare i miei numeri?",
      answer:
        "Sì. L’analisi dei dati è uno dei nostri servizi. Inviaci una scheda per una revisione gratuita, oppure raccontaci quali report vuoi capire.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
