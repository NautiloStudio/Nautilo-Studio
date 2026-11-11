import Link from "next/link";
import { localePath } from "@/i18n/config";
import { SearchTermsFigure } from "@/components/BlogFigures";
import type { BlogPost } from "../types";
import { heroPhoto } from "./media";

const AMAZON_SEO_GUIDE = "https://sell.amazon.com/blog/amazon-seo";
const PRODUCT_LISTINGS = "https://sell.amazon.com/blog/amazon-product-listings";
const p = (path: string) => localePath("it", path);

const post: BlogPost = {
  slug: "amazon-backend-keywords",
  title: "Parole chiave backend Amazon: come compilarle al meglio",
  description:
    "Parole chiave backend Amazon spiegate: cosa mettere nel campo dei termini di ricerca, cosa evitare e un esempio pratico. Leggilo e chiedi una revisione gratis.",
  h1: "Parole chiave backend Amazon: come compilare i termini di ricerca",
  breadcrumb: "Parole chiave backend Amazon",
  keyword: "parole chiave backend amazon",
  excerpt:
    "Cosa va nel campo nascosto dei termini di ricerca, cosa lasciare fuori e un esempio pratico da riprendere per la tua scheda.",
  published: "2026-11-10",
  updated: "2026-11-10",
  readMinutes: 9,
  hero: { ...heroPhoto, alt: "Lente d’ingrandimento sulla tastiera di un portatile" },
  intro: (
    <>
      <p>
        Le <strong>parole chiave backend Amazon</strong> sono le parole che dai ad Amazon nel campo
        dei termini di ricerca della tua scheda. I clienti non le vedono mai, ma Amazon le legge
        quando decide in quali ricerche può comparire il tuo prodotto. Usate bene, ti permettono di
        coprire sinonimi, nomi alternativi ed errori di battitura frequenti senza appesantire il
        titolo.
      </p>
      <p>
        Questa guida spiega cos’è quel campo, perché conta ancora, come trovare le parole giuste e
        come scriverle, con un esempio pratico alla fine. Se l’argomento è nuovo per te, parti dalla
        nostra <Link href={p("/amazon-seo")}>guida alla SEO su Amazon</Link>, che spiega come Amazon
        ordina i prodotti.
      </p>
    </>
  ),
  sections: [
    {
      id: "what-are-backend-keywords",
      heading: "Cosa sono le parole chiave backend di Amazon?",
      body: (
        <>
          <p>
            Ogni scheda Amazon ha un testo visibile, come titolo, punti elenco e descrizione, e campi
            nascosti che legge solo Amazon. Il campo dei termini di ricerca è uno di questi. I
            venditori chiamano il suo contenuto parole chiave backend o termini di ricerca backend.
          </p>
          <p>
            Pensalo come una breve lista di altri modi in cui un cliente potrebbe descrivere il tuo
            prodotto. Se qualcuno cerca una parola presente nelle tue parole chiave backend, il tuo
            prodotto può essere considerato per quella ricerca, anche se la parola non compare da
            nessuna parte nella pagina.
          </p>
          <h3>Dove trovare il campo dei termini di ricerca</h3>
          <p>
            In Seller Central apri la scheda da modificare e vai alla sezione parole chiave dei
            dettagli prodotto. Troverai un campo chiamato termini di ricerca. Quello che cambi lì non
            modifica nulla di ciò che vedono i clienti, quindi è un posto sicuro per fare prove.
          </p>
          <h3>La differenza con il titolo</h3>
          <p>
            Il titolo deve leggersi bene: è la prima cosa che vede il cliente, e Amazon fissa regole
            su lunghezza e formulazione. Le parole chiave backend non hanno un lettore, quindi possono
            essere una semplice lista di parole. È proprio questo il vantaggio: il titolo porta le
            parole più importanti, il campo backend raccoglie tutto il resto.
          </p>
        </>
      ),
    },
    {
      id: "why-they-matter",
      heading: "Perché le parole chiave backend contano ancora",
      body: (
        <>
          <p>
            Alcuni venditori pensano che il campo nascosto non funzioni più da anni. Amazon dice il
            contrario: la sua guida per i venditori sulla ricerca spiega che{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              le parole chiave backend possono ancora aiutare un prodotto a posizionarsi per ricerche
              specifiche
            </a>
            .
          </p>
          <p>
            Da sole non fanno salire una scheda debole. Amazon continua a valutare quanto è rilevante
            il prodotto, quanto spesso i clienti cliccano e comprano e come vende nel tempo. Questo
            campo allarga l’insieme delle ricerche in cui puoi comparire. Non puoi posizionarti per
            una ricerca per cui non sei idoneo.
          </p>
          <p>
            Per questo sono uno dei miglioramenti più economici: si scrivono in pochi minuti, non
            costano nulla e non cambiano come i clienti vedono la scheda.
          </p>
        </>
      ),
    },
    {
      id: "find-backend-keywords",
      heading: "Come trovare le parole chiave backend per il tuo prodotto",
      body: (
        <>
          <p>
            Le buone parole chiave backend nascono da ciò che i clienti digitano davvero, non dal nome
            che dai al prodotto internamente. Usa più fonti e tieni solo le parole che non sono già
            nel titolo e nei punti elenco.
          </p>
          <h3>Parti dalla barra di ricerca di Amazon</h3>
          <p>
            Scrivi su Amazon la parola principale del tuo prodotto e annota i suggerimenti. Vengono da
            ricerche reali e spesso rivelano nomi alternativi a cui non avevi pensato, come “flask”
            per una borraccia o “chopping board” per un tagliere.
          </p>
          <h3>Usa Product Opportunity Explorer</h3>
          <p>
            Product Opportunity Explorer, in Seller Central, mostra i principali termini di ricerca e
            l’andamento dei volumi di una nicchia. Cerca termini vicini al tuo prodotto che non hai
            ancora usato nella scheda.
          </p>
          <h3>Sfrutta il report dei termini di ricerca di Sponsored Products</h3>
          <p>
            Se fai pubblicità con Sponsored Products, il report dei termini di ricerca elenca le
            ricerche esatte che hanno portato i clienti ai tuoi annunci, comprese quelle finite in una
            vendita. I termini che convertono ma mancano nella scheda sono ottimi candidati per il
            backend.
          </p>
          <h3>Consulta Brand Analytics se il tuo marchio è registrato</h3>
          <p>
            I marchi nel Registro dei marchi possono usare Brand Analytics. La sua dashboard Search
            Query Performance mostra quali ricerche portano impression, clic e acquisti ai tuoi
            prodotti, così vedi quali termini funzionano già e quali ti mancano.
          </p>
        </>
      ),
    },
    {
      id: "write-search-terms",
      heading: "Come scrivere il campo dei termini di ricerca",
      body: (
        <>
          <p>
            Quando hai la lista, scrivere il campo significa soprattutto togliere parole. L’obiettivo
            è una riga pulita di termini unici che aggiunga ciò che il testo visibile non copre già.
          </p>
          <h3>Usa sinonimi, nomi alternativi ed errori di battitura</h3>
          <p>
            Inserisci altre parole per lo stesso prodotto, altri modi di descriverne l’uso e gli
            errori che i clienti fanno spesso. Aggiungi abbreviazioni e unità scritte in modo diverso,
            come “oz” e “ounce”, solo se non le hai già usate.
          </p>
          <h3>Mantieni un formato semplice</h3>
          <p>
            Scrivi in minuscolo e separa le parole con spazi. Non servono virgole e non devi ripetere
            una parola in ogni combinazione, perché Amazon combina da solo le parole della scheda.
            Lascia fuori parole riempitive come “a”, “the” e “for”.
          </p>
          <h3>Non ripetere le parole del titolo</h3>
          <p>
            Ogni parola ripetuta toglie spazio a una nuova. Se “stainless steel” è già nel titolo, nel
            backend non aggiunge nulla. Controlla ogni parola rispetto a titolo e punti elenco prima di
            tenerla.
          </p>
          <h3>Resta entro il limite di lunghezza</h3>
          <p>
            Amazon limita la lunghezza del campo e la misura in byte, non in caratteri, quindi le
            lettere accentate possono contare di più. Il limite può cambiare e variare da negozio a
            negozio: controlla il valore attuale del tuo marketplace in Seller Central e resta ben al
            di sotto.
          </p>
        </>
      ),
    },
    {
      id: "what-to-leave-out",
      heading: "Cosa lasciare fuori dai termini di ricerca backend",
      body: (
        <>
          <p>Alcune parole sprecano spazio, altre violano le regole di Amazon. Lascia fuori:</p>
          <ul>
            <li>
              <strong>Nomi di marchi.</strong> Né il tuo né quelli degli altri. I marchi dei
              concorrenti, in particolare, possono crearti problemi.
            </li>
            <li>
              <strong>ASIN e codici prodotto.</strong> Non aggiungono nulla al modo in cui cercano i
              clienti.
            </li>
            <li>
              <strong>Affermazioni soggettive.</strong> Parole come “best”, “amazing” o “top quality”
              descrivono opinioni, non prodotti.
            </li>
            <li>
              <strong>Parole temporanee.</strong> “New”, “on sale” o “limited offer” scadono e non
              descrivono il prodotto.
            </li>
            <li>
              <strong>Ripetizioni e riempitivi.</strong> La stessa parola due volte, plurali di parole
              già usate o lunghe catene di frasi quasi uguali.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "worked-example",
      heading: "Un esempio pratico: parole chiave backend per una borraccia",
      body: (
        <>
          <p>
            Poiché la scheda è per il negozio statunitense, l’esempio è in inglese. Immagina che il tuo
            titolo sia “24 oz Stainless Steel Water Bottle with Screw-Top Lid, Charcoal”. Copre già{" "}
            <em>24 oz</em>, <em>stainless steel</em>, <em>water bottle</em>, <em>screw-top lid</em> e{" "}
            <em>charcoal</em>. Le parole chiave backend devono coprire il resto. Una prima bozza
            potrebbe essere:
          </p>
          <SearchTermsFigure
            labels={{"title": "Già nel titolo", "field": "Search terms", "bytes": "byte", "leftOut": "Esclusi di proposito"}}
            titleWords={["24 oz", "stainless steel", "water bottle", "screw-top lid", "charcoal"]}
            terms="insulated flask thermos canteen vacuum leakproof reusable travel gym hiking office kids bpa free metal tumbler ounce black grey gray"
            leftOut={["marchi", "best", "new", "stainless steel"]}
            caption="L’esempio a colpo d’occhio: il titolo copre già la prima riga, il campo search terms aggiunge parole nuove e l’ultima riga resta fuori."
          />
          <p>
            Nota cosa manca: nessun marchio, niente “best”, nessuna ripetizione del titolo, e ci sono
            sia “grey” sia “gray”, così ti trova chi lo scrive in entrambi i modi. Poi confronta con i
            punti elenco e togli ciò che dicono già.
          </p>
          <p>
            Per la parte visibile della stessa scheda, titolo, punti elenco e immagini, leggi la nostra{" "}
            <Link href={p("/listing-optimization")}>guida all’ottimizzazione delle schede Amazon</Link>.
          </p>
        </>
      ),
    },
    {
      id: "check-results",
      heading: "Come verificare se le parole chiave backend funzionano",
      body: (
        <>
          <p>
            Aspetta un paio di settimane prima di giudicare una modifica e cambia una cosa alla volta,
            così sai cosa ha fatto la differenza.
          </p>
          <ul>
            <li>
              <strong>Cerca il termine tu stesso.</strong> Cerca su Amazon un termine presente solo nel
              backend e guarda se compare il tuo prodotto.
            </li>
            <li>
              <strong>Tieni d’occhio le sessioni.</strong> I report sull’attività di Seller Central
              mostrano se arrivano più clienti sulla scheda.
            </li>
            <li>
              <strong>Usa Search Query Performance.</strong> Con il Registro dei marchi, verifica se i
              nuovi termini portano impression, clic e acquisti.
            </li>
          </ul>
          <p>
            Non sai quali numeri guardare? La nostra{" "}
            <Link href={p("/data-analysis")}>guida all’analisi dei dati su Amazon</Link> spiega i
            quattro che contano di più e dove trovarli.
          </p>
        </>
      ),
    },
    {
      id: "common-mistakes",
      heading: "Errori comuni con le parole chiave backend di Amazon",
      body: (
        <>
          <p>La maggior parte dei problemi nasce dal voler inserire troppo. Gli errori più comuni sono:</p>
          <ul>
            <li>
              <strong>Copiare il titolo nel campo.</strong> Sembra scrupoloso, ma non aggiunge nulla.
            </li>
            <li>
              <strong>Superare il limite di lunghezza.</strong> Molti venditori riferiscono che un
              campo troppo lungo potrebbe non essere indicizzato come previsto: resta ben al di sotto.
            </li>
            <li>
              <strong>Compilarlo una volta e dimenticarlo.</strong> Le abitudini di ricerca cambiano.
              Rivedi il campo quando rivedi il resto della scheda.
            </li>
            <li>
              <strong>Affidarsi solo a quello.</strong> Le parole chiave backend ampliano la tua
              portata, ma la scheda deve comunque convincere il cliente. I consigli di Amazon per{" "}
              <a href={PRODUCT_LISTINGS} target="_blank" rel="noopener noreferrer">
                creare schede prodotto
              </a>{" "}
              coprono anche la parte visibile.
            </li>
          </ul>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: "Le parole chiave backend di Amazon funzionano ancora?",
      answer:
        "Sì. La guida di Amazon per i venditori dice che le parole chiave backend possono ancora aiutare un prodotto a posizionarsi per ricerche specifiche. Allargano le ricerche in cui puoi comparire; rilevanza, conversione e vendite decidono quanto in alto arrivi.",
    },
    {
      question: "Quante parole chiave backend dovrei usare?",
      answer:
        "Non c’è un numero fisso. Usa tutte le parole uniche e pertinenti che entrano comodamente nel limite di lunghezza del tuo marketplace, e lascia fuori ciò che è già nel titolo o nei punti elenco.",
    },
    {
      question: "Devo separare le parole chiave backend con le virgole?",
      answer:
        "No. Separale con spazi e scrivi in minuscolo. La punteggiatura non serve e Amazon combina le parole della scheda per adattarle a ricerche diverse.",
    },
    {
      question: "Posso inserire marchi dei concorrenti nelle parole chiave backend?",
      answer:
        "No. Lascia fuori dal campo tutti i nomi di marchi, compreso il tuo e soprattutto quelli dei concorrenti, per rispettare le regole di Amazon.",
    },
    {
      question: "Nautilo Studio può controllare le mie parole chiave backend?",
      answer:
        "Sì. Mandaci il link di una scheda con la nostra revisione gratuita e ti diremo cosa cambieremmo per primo, parole chiave backend comprese.",
    },
  ],
  sources: [
    {
      publisher: "Amazon (blog Sell on Amazon)",
      title: "Amazon SEO: 7 ways to improve your product’s search rankings",
      url: AMAZON_SEO_GUIDE,
    },
    {
      publisher: "Amazon (blog Sell on Amazon)",
      title: "How to create Amazon product listings",
      url: PRODUCT_LISTINGS,
    },
  ],
  cta: {
    text: "Le parole chiave backend sono una parte della SEO su Amazon. Scopri come titolo, punti elenco e vendite lavorano insieme, oppure facci controllare la tua scheda gratis.",
    pillar: { href: "/amazon-seo", label: "Leggi la nostra guida alla SEO su Amazon" },
    formHeading: "Vuoi che controlliamo le tue parole chiave backend?",
    formText: "Mandaci una scheda e ti diremo, gratis, cosa cambieremmo per primo.",
  },
};

export default post;
