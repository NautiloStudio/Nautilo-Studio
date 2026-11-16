import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const PRODUCT_LISTINGS = "https://sell.amazon.com/blog/amazon-product-listings";
const PRODUCT_PHOTOS = "https://sell.amazon.com/blog/product-photos";
const A_PLUS = "https://sell.amazon.com/tools/a-content";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const p = (path: string) => localePath("it", path);

const title = "Agenzia ottimizzazione conversioni Amazon | Nautilo Studio";
const description =
  "Nautilo Studio è l’agenzia di ottimizzazione del tasso di conversione per venditori Amazon USA: titoli, immagini e A+ che vendono. Revisione gratuita.";

const page: GuideCopy["page"] = {
  slug: "listing-optimization",
  breadcrumb: "Ottimizzazione delle schede Amazon",
  question: "Agenzia di ottimizzazione del tasso di conversione su Amazon: dalle visite alle vendite",
  answer:
    "L’ottimizzazione delle schede Amazon, il lavoro di un’agenzia di ottimizzazione del tasso di conversione, significa migliorare titolo, punti elenco, immagini e contenuti A+ perché chi arriva sulla tua pagina scelga di comprare. Parti da immagini chiare e da un titolo che dica esattamente cos’è il prodotto, poi usa i punti elenco per rispondere ai dubbi che i clienti hanno prima di ordinare. Prova una modifica alla volta e tieni la versione che vende di più.",
  description,
  image: {
    src: "/img/amazon-listing-optimization.jpg",
    alt: "iMac su una scrivania d’ufficio con la pagina prodotto Amazon di un tagliere di bambù, con titolo, immagine principale, punti elenco, contenuti A+ e nuove immagini modificati e segnalati",
    tile: "bg-apricot",
  },
  updated: "2026-11-16",
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
      heading: "Ottimizzazione delle schede Amazon: cosa fa comprare",
      body: (
        <>
          <p>
            Quando un cliente arriva sulla tua pagina prodotto, quattro elementi decidono se compra: il titolo, le immagini, i punti elenco e i contenuti A+. Un’agenzia di ottimizzazione del tasso di conversione lavora su tutti e quattro, perché ognuno risponde a una domanda diversa del cliente.
          </p>
          <p>
            Il titolo dice cos’è il prodotto, poi il marchio e i dettagli che si confrontano, come misura o colore. Le immagini fanno il lavoro del bancone di un negozio: Amazon ti permette di{" "}
            <a href={PRODUCT_LISTINGS} target="_blank" rel="noopener noreferrer">
              caricare fino a nove foto
            </a>
            , e i suoi consigli raccomandano sfondo bianco e un prodotto che{" "}
            <a href={PRODUCT_PHOTOS} target="_blank" rel="noopener noreferrer">
              occupi l’85% o più dell’inquadratura
            </a>
            . I cinque punti elenco danno un vantaggio ciascuno, sostenuto da un dato verificabile. I contenuti A+ aggiungono immagini e testo sotto la scheda per i marchi nel Brand Registry, e Amazon dice che{" "}
            <a href={A_PLUS} target="_blank" rel="noopener noreferrer">
              i contenuti A+ base possono aumentare le vendite fino all’8%
            </a>
            , secondo i suoi dati interni.
          </p>
          <blockquote>Il cliente non può toccare il tuo prodotto. La tua scheda deve farlo al posto suo.</blockquote>
        </>
      ),
    },
    {
      id: "signs",
      heading: "Ottimizzazione delle conversioni: i segnali che la scheda va migliorata",
      body: (
        <>
          <p>
            Amazon fa un esempio semplice:{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              una scheda con molte visite ma poche vendite
            </a>{" "}
            può avere bisogno di immagini o descrizioni migliori. Tante visite e pochi ordini vogliono dire che ti trovano ma non si convincono, quindi immagini, punti elenco e contenuti A+ vengono prima.
          </p>
          <p>
            Poche visite indicano un altro problema: i clienti non trovano proprio la scheda, e il nostro{" "}
            <Link href={p("/services/amazon-seo")}>servizio SEO B2B per venditori Amazon</Link> è il punto di partenza migliore. Altri due segnali contano. Se recensioni e domande ripetono lo stesso dubbio, rispondi nei punti elenco o nelle immagini. E i resi per “non conforme alla descrizione” dicono che la scheda promette qualcosa che il prodotto non mantiene: correggi il testo prima di spendere di più in traffico.
          </p>
        </>
      ),
    },
    {
      id: "testing",
      heading: "Come un’agenzia di ottimizzazione delle conversioni testa cosa funziona",
      body: (
        <>
          <p>
            Una buona ottimizzazione del tasso di conversione cambia una cosa alla volta. Scegli un elemento, come l’immagine principale o il titolo, e modifica solo quello, così sai cosa ha fatto la differenza.
          </p>
          <p>
            Se il tuo marchio è nel Brand Registry,{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              Manage Your Experiments
            </a>{" "}
            di Amazon mostra due versioni ai clienti e confronta i risultati. Lascia correre il test abbastanza a lungo da raccogliere ordini veri, non solo qualche giorno, poi tieni la versione vincente e passa all’elemento successivo.
          </p>
        </>
      ),
    },
    {
      id: "mistakes",
      heading: "Gli errori nelle schede Amazon che bloccano l’acquisto",
      body: (
        <>
          <p>
            Le immagini sfocate o scure sono l’errore più comune: il cliente non può toccare il prodotto, quindi devono farlo le foto. Subito dopo vengono le caratteristiche senza vantaggi. “Acciaio inox” dice di più se spieghi che tiene le bevande fresche.
          </p>
          <p>
            Le promesse che non puoi dimostrare portano resi e recensioni negative, e possono violare le regole di Amazon. Anche i dettagli che non tornano fanno danni: titolo, punti elenco e immagini devono descrivere la stessa misura, lo stesso colore e lo stesso contenuto. Le parole che i clienti cercano vanno nel testo visibile e nei termini di ricerca nascosti, e la nostra guida passo passo per{" "}
            <Link href={p("/blog/amazon-backend-keywords")}>compilare le parole chiave backend di Amazon</Link> spiega la seconda parte.
          </p>
        </>
      ),
    },
    {
      id: "cro-service",
      heading: "Cosa fa la nostra agenzia di ottimizzazione delle conversioni per i venditori Amazon",
      figure: {
        src: "/img/amazon-listing-optimization.jpg",
        alt: "iMac su una scrivania d’ufficio con una scheda Amazon e cinque modifiche segnalate a titolo, immagine principale, punti elenco, contenuti A+ e termini di ricerca: il lavoro di un’agenzia di ottimizzazione delle conversioni",
        width: 1600,
        height: 900,
        caption: "Scheda di esempio con le nostre cinque modifiche segnalate. Illustrazione, non è una scheda di un cliente. Foto: Carl Heyerdahl, Unsplash.",
      },
      body: (
        <>
          <p>
            Pensala come ottimizzazione delle schede Amazon con un test dietro ogni modifica. Il nostro servizio di ottimizzazione del tasso di conversione segue quattro passi, una scheda alla volta.
          </p>
          <p>
            Prima leggiamo la tua scheda come farebbe un cliente e annotiamo cosa manca o non è chiaro. Poi riscriviamo titolo e punti elenco perché ognuno risponda a una domanda del cliente, e prepariamo il brief per nuove immagini e contenuti A+ dove servono di più. Infine testiamo una modifica alla volta e teniamo la versione che vende di più.
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
