import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const BRAND_ANALYTICS = "https://sell.amazon.com/blog/brand-analytics";
const ACOS = "https://advertising.amazon.com/library/guides/acos-advertising-cost-of-sales";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const p = (path: string) => localePath("it", path);

const title = "Analisi dati Amazon: i numeri che contano | Nautilo Studio";
const description =
  "I numeri di Amazon che i venditori negli USA dovrebbero seguire ogni settimana, cosa dice ognuno e dove trovarlo in Seller Central. Revisione gratuita.";

const page: GuideCopy["page"] = {
  slug: "data-analysis",
  breadcrumb: "Analisi dei dati",
  question: "Quali numeri di Amazon dovrebbero seguire i venditori?",
  answer:
    "Parti da quattro numeri per ogni prodotto: sessioni, tasso di conversione, se hai l’Offerta in evidenza e il costo pubblicitario sulle vendite (ACOS). Insieme ti dicono se il problema è farti trovare, farti scegliere o spendere troppo in pubblicità. Controllali ogni settimana, confrontali con la settimana precedente e cambia una cosa alla volta.",
  description,
  image: {
    src: "/img/service-data.jpg",
    alt: "Pacchi di cartone impilati in colonne crescenti, come un grafico a barre",
    tile: "bg-royal",
  },
  updated: "2026-11-07",
  facts: [
    { value: 4, label: "Numeri da seguire per ogni prodotto" },
    { value: 50, suffix: "%", label: "ACOS nell’esempio di Amazon: 50 $ spesi, 100 $ incassati" },
    { value: 1, label: "Giorno alla settimana per la tua routine" },
    { value: 1, label: "Problema da risolvere ogni settimana" },
  ],
  sections: [
    {
      id: "numbers",
      heading: "Quali numeri contano di più?",
      body: (
        <ul>
          <li>
            <strong>Sessioni.</strong> Quanti clienti hanno visitato la pagina del tuo prodotto. Ti
            dicono se la gente ti trova.
          </li>
          <li>
            <strong>Tasso di conversione.</strong> La quota di visite che è diventata un ordine. Ti
            dice se la scheda convince.
          </li>
          <li>
            <strong>Offerta in evidenza.</strong> L’offerta accanto al pulsante di acquisto. Amazon
            spiega che prezzo, disponibilità e spedizione contano per{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              ottenere l’Offerta in evidenza
            </a>
            , che può portare forti aumenti delle vendite.
          </li>
          <li>
            <strong>ACOS.</strong> Spesa pubblicitaria divisa per le entrate pubblicitarie. Amazon
            Ads spiega che il tuo{" "}
            <a href={ACOS} target="_blank" rel="noopener noreferrer">
              ACOS deve restare sotto il tuo margine di profitto
            </a>{" "}
            perché la pubblicità sia redditizia.
          </li>
        </ul>
      ),
    },
    {
      id: "what-they-mean",
      heading: "Cosa ti dicono i numeri?",
      body: (
        <ul>
          <li>
            <strong>Poche sessioni.</strong> I clienti non trovano il prodotto. Rivedi le parole
            chiave con la nostra <Link href={p("/services/amazon-seo")}>guida alla SEO su Amazon</Link>.
          </li>
          <li>
            <strong>Tante sessioni, poca conversione.</strong> I clienti arrivano ma non comprano.
            Lavora sulla scheda con la nostra{" "}
            <Link href={p("/services/listing-optimization")}>guida all’ottimizzazione delle schede</Link>.
          </li>
          <li>
            <strong>Offerta in evidenza persa.</strong> Confronta prezzo, disponibilità e spedizione
            con le altre offerte dello stesso prodotto.
          </li>
          <li>
            <strong>ACOS sopra il tuo margine.</strong> La pubblicità perde soldi. Metti in pausa i
            termini di ricerca che spendono senza vendere prima di aumentare qualsiasi budget.
          </li>
        </ul>
      ),
    },
    {
      id: "where-to-find",
      heading: "Dove trovi questi dati?",
      body: (
        <ul>
          <li>
            <strong>Report sull’attività.</strong> In Seller Central, nella sezione Report. Mostrano
            sessioni, visualizzazioni di pagina e vendite per ogni prodotto.
          </li>
          <li>
            <strong>Brand Analytics.</strong> Per i marchi del Registro dei marchi. La sua{" "}
            <a href={BRAND_ANALYTICS} target="_blank" rel="noopener noreferrer">
              dashboard sulle prestazioni delle query di ricerca
            </a>{" "}
            mostra impressioni, clic e aggiunte al carrello per le ricerche che portano ai tuoi
            prodotti.
          </li>
          <li>
            <strong>Report pubblicitari.</strong> Nel gestore delle campagne. Mostrano spesa,
            vendite, clic e ACOS per ogni campagna e termine di ricerca.
          </li>
          <li>
            <strong>Profit Analytics.</strong> In Seller Central. Mostra quanto Amazon ti addebita per
            ogni prodotto. Le commissioni cambiano ogni anno: scopri{" "}
            <Link href={p("/blog/amazon-fba-fees-2027")}>cosa cambia nelle commissioni Amazon FBA 2027</Link>.
          </li>
          <li>
            <strong>Il tuo foglio di calcolo.</strong> Una riga per settimana e per prodotto, così
            vedi tendenze che un singolo report nasconde.
          </li>
        </ul>
      ),
    },
    {
      id: "weekly-routine",
      heading: "Come si costruisce una routine settimanale?",
      body: (
        <ol>
          <li>Scegli un giorno alla settimana e scarica ogni volta gli stessi report.</li>
          <li>Confronta ogni numero con la settimana prima e con la stessa settimana del mese scorso.</li>
          <li>Annota cosa hai cambiato, come prezzo, immagini o offerte, e quando.</li>
          <li>Scegli un problema da risolvere questa settimana. Controlla il risultato la successiva.</li>
        </ol>
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
