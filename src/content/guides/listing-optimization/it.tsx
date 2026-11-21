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

const p = (path: string) => localePath("it", path);
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const title = "SEO su Amazon e ottimizzazione delle schede | Nautilo Studio";
const description =
  "SEO su Amazon e ottimizzazione delle schede per venditori negli USA: farti trovare per le ricerche dei clienti, poi farti scegliere. Chiedi una revisione.";

const page: GuideCopy["page"] = {
  slug: "listing-optimization",
  breadcrumb: "SEO e ottimizzazione delle schede",
  question: "SEO su Amazon e ottimizzazione delle schede: farti trovare, poi farti scegliere",
  answer:
    "La SEO su Amazon fa comparire il tuo prodotto quando i clienti cercano. L’ottimizzazione delle schede fa sì che lo scelgano quando lo vedono. Su Amazon le due cose succedono sulla stessa pagina: titolo, punti elenco, immagini, contenuti A+ e termini di ricerca nascosti decidono dove ti posizioni e se i clienti comprano. Metti le parole che cercano i tuoi clienti dove Amazon le legge, rendi la scheda convincente e prova una modifica alla volta. Le vendite che porta una scheda migliore la aiutano anche a salire.",
  description,
  image: {
    src: "/img/amazon-listing-optimization.jpg",
    alt: "Schermo con una scheda Amazon ottimizzata di un tagliere di bambù, segnata come «farti scegliere», accanto ai risultati di ricerca in cui compare al primo posto e al suo posizionamento per parola chiave, segnati come «farti trovare»",
    tile: "bg-apricot",
  },
  updated: "2026-11-20",
  quickWin: {
    title: "Migliora la tua scheda",
    link: { href: "#title", text: "Come scrivere il titolo" },
  },
  facts: [
    { value: 200, label: "Caratteri ammessi in un titolo, secondo la guida SEO di Amazon" },
    { value: 60, label: "Caratteri che Amazon consiglia per un titolo" },
    { value: 9, label: "Foto che Amazon ti lascia caricare" },
    { value: 20, suffix: "%", label: "Aumento massimo delle vendite che Amazon attribuisce ai contenuti ottimizzati" },
  ],
  sections: [
    {
      id: "found-then-chosen",
      heading: "Come funziona Amazon per chi vende: farti trovare, poi farti scegliere",
      body: (
        <>
          <p>Prima che una ricerca diventi una vendita devono succedere due cose. Amazon deve mostrare il tuo prodotto per le parole che il cliente ha scritto, e il cliente deve sceglierlo tra gli altri risultati della pagina. La prima è la SEO su Amazon. La seconda è l’ottimizzazione delle schede. Su Amazon lavorano sulla stessa pagina, quindi le trattiamo come un unico lavoro.</p>
          <p>
            {"Farti trovare parte dalla pertinenza: se una parola di ricerca non compare nel titolo, nei punti elenco, nella descrizione o nei termini di ricerca nascosti, il prodotto esce di rado per quella ricerca. Farti scegliere dipende da quello che il cliente vede dopo: l’immagine principale, il titolo, il prezzo, le recensioni e la Featured Offer. Le due cose si alimentano a vicenda. La guida SEO di Amazon dice che "}
            <a href={AMAZON_SEO_GUIDE} {...ext}>la qualità della scheda e lo stato dell’account possono contribuire al posizionamento</a>
            {", e che foto e prezzi migliori possono aiutare un prodotto a salire nei risultati in modo organico. Una scheda che vende sale, e una scheda che sale la vedono più clienti."}
          </p>
          <ListingFieldMap
            caption={"La tua scheda, campo per campo"}
            labels={{ found: "Farti trovare", chosen: "Farti scegliere" }}
            rows={[
              { field: "Titolo", text: "Le parole a cui Amazon dà più peso, e la prima cosa che legge il cliente.", effect: "both" },
              { field: "Punti elenco", text: "Parole chiave secondarie per la ricerca e motivi d’acquisto per il cliente.", effect: "both" },
              { field: "Termini di ricerca", text: "Sinonimi ed errori di battitura che il cliente non vede mai.", effect: "found" },
              { field: "Immagini", text: "Il bancone del negozio: forma, misure e il prodotto in uso.", effect: "chosen" },
              { field: "Contenuti A+", text: "Immagini più grandi e confronti sotto la scheda.", effect: "chosen" },
            ]}
          />
          <blockquote>La pertinenza ti fa comparire. Le vendite ti fanno restare.</blockquote>
        </>
      ),
    },
    {
      id: "keyword-research",
      heading: "Ricerca delle parole chiave su Amazon: le parole che scrivono i tuoi clienti",
      body: (
        <>
          <p>Le buone parole chiave nascono da quello che i clienti scrivono davvero, non da supposizioni. Il modo più rapido è la barra di ricerca di Amazon: scrivi la parola principale del tuo prodotto e annota i suggerimenti, perché vengono da ricerche reali.</p>
          <p>Seller Central aggiunge dati gratuiti. Product Opportunity Explorer mostra i termini più cercati di una nicchia. Brand Analytics mostra quali ricerche portano a clic e vendite per i marchi registrati. Se usi già Sponsored Products, il report dei termini di ricerca elenca le ricerche esatte che ti hanno portato clienti. Ordina quello che trovi in base a quanto descrive bene il tuo prodotto, non solo in base al volume: una ricerca precisa con meno clienti spesso vende più di una generica.</p>
          <p>Questa lista alimenta poi ogni campo della mappa qui sopra. Le due o tre ricerche più importanti vanno nel titolo, le successive nei punti elenco e i sinonimi che non trovano posto altrove nei termini di ricerca nascosti.</p>
        </>
      ),
    },
    {
      id: "title",
      heading: "Il titolo su Amazon: dove si incontrano posizionamento e clic",
      body: (
        <>
          <p>
            {"Il titolo è l’unico campo che lavora a fondo sia per la ricerca sia per il cliente, ed è per questo che è così facile sbagliarlo. Amazon consente "}
            <a href={AMAZON_SEO_GUIDE} {...ext}>fino a 200 caratteri e ne consiglia 60 o meno</a>
            {", e le sue "}
            <a href={TITLE_RULES} {...ext}>regole sui titoli</a>
            {" ammettono la stessa parola al massimo due volte."}
          </p>
          <p>Un titolo pieno di parole chiave può comparire in più ricerche, ma si legge come un elenco e perde il clic a favore di un concorrente più chiaro. Sul telefono i titoli lunghi vengono tagliati, quindi cosa è il prodotto deve stare nelle prime parole, seguito dal marchio e dai dettagli che i clienti confrontano, come misure, materiale o quantità. Scrivilo prima per il cliente, poi controlla che le tue ricerche principali ci siano.</p>
        </>
      ),
    },
    {
      id: "images-bullets-a-plus",
      heading: "Immagini, punti elenco e contenuti A+: trasformare una visita in un ordine",
      body: (
        <>
          <p>
            {"Quando un cliente apre la tua pagina, il resto della scheda deve rispondere alle domande che farebbe in negozio. Amazon ti lascia "}
            <a href={PRODUCT_LISTINGS} {...ext}>caricare fino a nove foto</a>
            {", e i suoi consigli per le foto raccomandano uno sfondo bianco con il prodotto che "}
            <a href={PRODUCT_PHOTOS} {...ext}>occupa l’85% o più dell’inquadratura</a>
            {". Dopo l’immagine principale, mostra il prodotto da altre angolazioni, in uso e accanto a qualcosa che ne faccia capire le misure."}
          </p>
          <p>
            {"I cinque punti elenco danno un vantaggio ciascuno, sostenuto da un fatto che il cliente può verificare, e sono il posto naturale per le parole chiave che non sono entrate nel titolo. «Acciaio inox» dice di più se aggiungi che tiene la bevanda fresca per un giorno intero. I contenuti A+ aggiungono immagini e tabelle di confronto sotto la scheda per i marchi registrati nel Brand Registry, e Amazon dice che "}
            <a href={A_PLUS} {...ext}>i contenuti A+ di base possono aumentare le vendite fino all’8%</a>
            {", secondo i suoi dati interni. I termini di ricerca nascosti raccolgono sinonimi ed errori di battitura, senza ripetizioni, nomi di marchi o ASIN: controlla il "}
            <a href={SEARCH_TERMS_HELP} {...ext}>limite di lunghezza attuale</a>
            {" e segui la nostra guida per "}
            <Link href={p("/blog/amazon-backend-keywords")}>compilare le parole chiave nascoste di Amazon</Link>.
          </p>
        </>
      ),
    },
    {
      id: "warning-signs",
      heading: "Segnali che la tua scheda sta perdendo posizioni, vendite o entrambe",
      body: (
        <>
          <p>
            {"I tuoi numeri ti dicono quale metà del lavoro ha bisogno di attenzione. Poche impressioni e poche visite vogliono dire che non ti trovano: parti dalle parole chiave e dal titolo. Molte visite e pochi ordini vogliono dire che ti trovano ma non li convinci. Amazon fa proprio questo esempio: "}
            <a href={BOOST_LISTINGS} {...ext}>una scheda con molte visualizzazioni ma poche vendite</a>
            {" può avere bisogno di immagini o descrizioni migliori."}
          </p>
          <p>Alcuni segnali riguardano entrambe le cose. Recensioni e domande che ripetono lo stesso dubbio dicono che la scheda non lo risolve, e i resi per «non conforme alla descrizione» dicono che la scheda promette qualcosa che il prodotto non mantiene. Correggi il testo prima di portare altro traffico.</p>
          <p>Gli errori più comuni nascono dagli stessi punti: riempire il titolo di parole chiave, usare marchi della concorrenza (Amazon non lo permette né nella scheda né nei termini di ricerca), un titolo, dei punti elenco e delle immagini che descrivono misure o contenuti diversi, e cambiare tutto insieme, così nessuno sa quale modifica ha aiutato.</p>
        </>
      ),
    },
    {
      id: "seo-listing-service",
      heading: "Cosa include il nostro servizio di SEO su Amazon e ottimizzazione delle schede",
      figure: {
        src: "/img/amazon-listing-optimization.jpg",
        alt: "Schermo con una scheda Amazon con cinque modifiche segnalate, i risultati di ricerca per «bamboo cutting board» e il posizionamento per parola chiave prima e dopo",
        width: 1600,
        height: 1000,
        caption: "Scheda di esempio con le nostre modifiche segnalate, i suoi risultati di ricerca e il posizionamento. Illustrazione con dati di esempio, non la scheda di un cliente.",
      },
      body: (
        <>
          <p>Lavoriamo su una scheda alla volta e la guardiamo due volte: una come la vede la ricerca di Amazon, una come la vede un cliente.</p>
          <p>Prima ricerchiamo con gli strumenti di Amazon quello che i tuoi clienti cercano davvero. Poi riscriviamo titolo e punti elenco perché le parole chiave principali vengano prima e ogni riga risponda ancora a una domanda del cliente, e compiliamo i termini di ricerca nascosti nel rispetto delle regole di Amazon. Poi prepariamo il brief per nuove immagini e contenuti A+ dove aiutano di più.</p>
          <p>
            {"Infine testiamo. Se il tuo marchio è nel Brand Registry, "}
            <a href={EXPERIMENTS} {...ext}>Manage Your Experiments</a>
            {" di Amazon mostra ai clienti due versioni di un titolo, un’immagine, i punti elenco o i contenuti A+ e confronta i risultati; Amazon dice che i contenuti ottimizzati possono aiutare ad aumentare le vendite fino al 20%. Cambiamo una cosa alla volta e seguiamo posizioni e vendite con il nostro "}
            <Link href={p("/services/data-analysis")}>servizio di analisi dei dati Amazon</Link>.
          </p>
          <p>
            {"Il lavoro lo fa il nostro team a Barcellona. "}
            <Link href={p("/about")}>Conosci il team di Nautilo Studio</Link>.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: "Perché unire la SEO su Amazon e l’ottimizzazione delle schede?",
      answer:
        "Perché lavorano sugli stessi campi e si alimentano a vicenda. Le parole chiave portano i clienti alla scheda, la scheda li trasforma in ordini e quelle vendite aiutano il prodotto a posizionarsi.",
    },
    {
      question: "Quanto ci vuole per vedere l’effetto su posizioni e vendite?",
      answer:
        "Il posizionamento segue le vendite, quindi valuta una modifica nell’arco di qualche settimana, non di pochi giorni. Cambia una cosa alla volta per sapere cosa ha fatto la differenza.",
    },
    {
      question: "Devo pagare la pubblicità per posizionarmi su Amazon?",
      answer:
        "No. Amazon dice che Sponsored Products può aiutare le offerte a salire nei risultati, ma prima viene una scheda pertinente e convincente, che rende anche più efficace ogni annuncio. Noi ci concentriamo sulla scheda e sulla ricerca organica, non sulla gestione di campagne pubblicitarie.",
    },
    {
      question: "Nautilo Studio può rivedere la mia scheda?",
      answer:
        "Sì. Mandaci una scheda Amazon con il modulo di revisione gratuita in questa pagina e ti scriveremo via email cosa miglioreremmo per primo, per la ricerca e per le vendite.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
