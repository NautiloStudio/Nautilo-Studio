import Link from "next/link";
import { localePath } from "@/i18n/config";
import { BlogPhotoFigure, FeeChangeFigure } from "@/components/BlogFigures";
import type { BlogPost } from "../types";
import { calculatorPhoto, heroPhoto } from "./media";

const AMAZON_2027 = "https://sellingpartners.aboutamazon.com/update-to-us-referral-and-fulfillment-by-amazon-fees-for-2027";
const AMAZON_2026 = "https://sellingpartners.aboutamazon.com/update-to-u-s-referral-and-fulfillment-by-amazon-fees-for-2026";
const PPC_LAND = "https://ppc.land/amazon-sellers-face-average-0-19-fba-fee-rise-from-january-15-2027/";
const p = (path: string) => localePath("it", path);

const post: BlogPost = {
  slug: "amazon-fba-fees-2027",
  title: "Commissioni Amazon FBA 2027: 5 novità chiave e cosa fare",
  description:
    "Commissioni Amazon FBA 2027: le 5 novità negli USA dal 15 gennaio, le date chiave e come controllare i margini. Leggilo e chiedi una revisione gratis.",
  h1: "Commissioni Amazon FBA 2027: 5 novità chiave e come proteggere i tuoi margini",
  breadcrumb: "Commissioni Amazon FBA 2027",
  keyword: "commissioni amazon fba 2027",
  excerpt:
    "Amazon ha annunciato le commissioni 2027 per gli USA il 5 novembre. Cosa cambia, quando e come capire l’effetto su ognuno dei tuoi prodotti.",
  published: "2026-11-11",
  updated: "2026-11-11",
  readMinutes: 8,
  hero: { ...heroPhoto, alt: "Corridoio di un magazzino con scaffali alti pieni di scatole" },
  intro: (
    <>
      <p>
        Le <strong>commissioni Amazon FBA 2027</strong> sono ufficiali. Il 5 novembre 2026 Amazon ha
        comunicato ai venditori statunitensi che le commissioni di logistica aumenteranno in media di
        circa 0,19 $ per unità venduta, con la maggior parte dei cambiamenti in vigore dal 15 gennaio
        2027. Una media nasconde molto: Amazon dice che le commissioni saliranno per alcuni prodotti e
        scenderanno per altri, e che cambiano anche le regole su stoccaggio e scorte basse.
      </p>
      <p>
        Questo articolo riassume le cinque novità più importanti, le date da segnare e come
        verificare, prodotto per prodotto, cosa significano per i tuoi margini. Se leggere i tuoi
        numeri è una novità, la nostra{" "}
        <Link href={p("/data-analysis")}>guida all’analisi dei dati su Amazon</Link> spiega da quali
        report partire.
      </p>
    </>
  ),
  sections: [
    {
      id: "what-changes",
      heading: "Cosa cambia nelle commissioni Amazon FBA nel 2027?",
      body: (
        <>
          <p>
            L’annuncio di Amazon, firmato dal vicepresidente di Logistica di Amazon (FBA), riguarda le
            commissioni di logistica, stoccaggio, scorte basse e promozioni. La maggior parte delle
            novità sulla logistica parte il 15 gennaio 2027, il giorno dopo la fine delle commissioni
            dell’alta stagione 2026. Stoccaggio e commissione per scorte basse seguono il 1° febbraio
            2027.
          </p>
          <p>
            L’obiettivo dichiarato di Amazon è far corrispondere meglio ogni commissione al costo reale
            di gestione di quel prodotto. In pratica, due venditori possono leggere lo stesso annuncio
            e ricevere fatture molto diverse. L’unico modo per conoscere il tuo impatto è controllare
            prodotto per prodotto, come spieghiamo più sotto.
          </p>
        </>
      ),
    },
    {
      id: "five-changes",
      heading: "Le 5 novità chiave per chi vende negli USA",
      body: (
        <>
          <h3>1. La commissione di logistica sale di 0,19 $ per unità in media</h3>
          <p>
            Dal 15 gennaio 2027 la commissione di preparazione e spedizione sale in media di circa
            0,19 $ per unità. L’aumento non è uguale per tutti. Secondo l’analisi dettagliata di PPC
            Land, gli articoli di dimensioni standard con prezzo tra 10 e 50 $ e sopra i 50 $ hanno gli
            aumenti medi maggiori, mentre alcuni articoli grandi diventano più economici. Tra gli
            esempi di Amazon c’è una cover per telefono sotto i 10 $ che passa da 2,49 $ a 2,72 $ per
            unità.
          </p>
          <p>
            Le commissioni continuano a usare tre fasce di prezzo: sotto i 10 $, da 10 a 50 $ e sopra i
            50 $. Gli articoli che costano esattamente 10 $ o 50 $ pagano la tariffa da 10 a 50 $.
          </p>

          <FeeChangeFigure
            lang="it"
            before={{ label: "2026", value: 2.49 }}
            after={{ label: "2027", value: 2.72 }}
            labels={{ title: "L’esempio di Amazon: la commissione FBA di una cover per telefono sotto i 10 $", perUnit: "per unità" }}
            caption="Commissione per unità prima e dopo il 15 gennaio 2027. Fonte: Amazon."
          />

          <h3>2. Meno prodotti con le tariffe Low-Price FBA</h3>
          <p>
            Fino al 14 gennaio 2027 gli articoli sotto i 10 $ ricevono in automatico le tariffe ridotte
            Low-Price FBA. Dal 15 gennaio cinque categorie di commissioni le perdono e passano alle
            tariffe da 10 a 50 $: Auto e moto, Piccoli elettrodomestici, Strumenti musicali e
            produzione audiovisiva, Media (libri, DVD, musica, software e video) e Computer. Se vendi
            articoli economici in queste categorie, è probabilmente la novità che ti tocca di più.
          </p>

          <h3>3. Nuove fasce e commissioni di gestione per gli articoli grandi</h3>
          <p>
            I prodotti ingombranti e fuori misura hanno più fasce di dimensione, così la commissione
            segue meglio la grandezza. Arrivano due nuove commissioni di gestione: una per i prodotti
            piatti, come pannelli e tavole, e una per gli articoli con un lato molto lungo. Sparisce la
            vecchia commissione per gli articoli oltre la misura massima. Alcuni articoli pesanti
            pagheranno meno, altri di più: chi vende prodotti grandi deve ricontrollare la fascia di
            ognuno.
          </p>

          <h3>4. Una commissione di stoccaggio in base all’anzianità dal 1° febbraio</h3>
          <p>
            Amazon elimina il supplemento per l’utilizzo dello spazio e porta il supplemento per le
            scorte vecchie dentro la commissione mensile di stoccaggio, come tariffa unica in base a
            quanto tempo la merce resta nei suoi magazzini. Amazon dice che le scorte vendute entro sei
            mesi pagheranno uguale o meno, quelle vecchie di più. I prodotti che girano piano costano
            di più da tenere.
          </p>

          <h3>5. Un nuovo criterio per la commissione per scorte basse</h3>
          <p>
            Sempre dal 1° febbraio, la commissione per scorte basse si applica solo quando le scorte
            scendono sotto i 28 giorni di copertura. Amazon la calcolerà sulle spedizioni reali delle
            quattro settimane prima e dopo ogni controllo, invece che sulle vendite degli ultimi 30 e 90
            giorni. Tenere almeno quattro settimane di scorte nei magazzini di Amazon permette di
            evitarla.
          </p>
        </>
      ),
    },
    {
      id: "what-stays-the-same",
      heading: "Cosa resta uguale",
      body: (
        <ul>
          <li>
            <strong>Il supplemento carburante e logistica.</strong> Amazon dice che il supplemento del
            3,5% introdotto nel 2026 resta invariato.
          </li>
          <li>
            <strong>La maggior parte delle commissioni di vendita.</strong> Le novità riportate sono una
            nuova tariffa per le stampanti 3D, in vigore dal 5 novembre 2026, e una tariffa promozionale
            del 10% per i prodotti Amazon Renewed fino al 18 ottobre 2027.
          </li>
          <li>
            <strong>Le tariffe di posizionamento in entrata.</strong> PPC Land non segnala cambiamenti
            negli importi, anche se i centri di entrata per le dimensioni standard vengono accorpati.
          </li>
        </ul>
      ),
    },
    {
      id: "key-dates",
      heading: "Le date chiave delle commissioni Amazon FBA 2027",
      body: (
        <ul>
          <li>
            <strong>5 novembre 2026:</strong> Amazon annuncia le commissioni 2027. Parte la tariffa
            per le stampanti 3D.
          </li>
          <li>
            <strong>14 gennaio 2027:</strong> finiscono l’alta stagione 2026 e le tariffe Low-Price FBA
            per le cinque categorie citate.
          </li>
          <li>
            <strong>15 gennaio 2027:</strong> nuove commissioni di logistica, fasce di dimensione e
            commissioni di gestione.
          </li>
          <li>
            <strong>1° febbraio 2027:</strong> la commissione di stoccaggio in base all’anzianità e il
            nuovo criterio per le scorte basse.
          </li>
        </ul>
      ),
    },
    {
      id: "check-your-margins",
      heading: "Come capire cosa significano le commissioni 2027 per i tuoi margini",
      body: (
        <>
          <BlogPhotoFigure photo={{ ...calculatorPhoto, alt: "Calcolatrice su grafici stampati accanto a un portatile" }} label="Foto" />
          <p>
            Amazon ha creato due strumenti apposta. Usali prima del 15 gennaio, finché hai ancora tempo
            per cambiare prezzi o scorte.
          </p>
          <ul>
            <li>
              <strong>Dashboard Fee Change Comparison.</strong> In Profit Analytics, dentro Seller
              Central. Mostra come i cambiamenti incidono sul tuo account e su ogni prodotto.
            </li>
            <li>
              <strong>Revenue Calculator.</strong> Permette di simulare commissioni e profitto di un
              prodotto a prezzi diversi.
            </li>
          </ul>
          <h3>Una routine semplice, prodotto per prodotto</h3>
          <ul>
            <li>Elenca i tuoi prodotti con fascia di prezzo, fascia di dimensione e unità vendute al mese.</li>
            <li>Per ognuno, annota la commissione di logistica 2026, quella 2027 e la differenza.</li>
            <li>Moltiplica la differenza per le unità vendute per vedere il costo al mese.</li>
            <li>Ordina per quel costo: in cima alla lista c’è dove intervenire per primo.</li>
          </ul>
          <h3>Un esempio illustrativo</h3>
          <p>
            Prendi l’esempio di Amazon della cover per telefono: la commissione passa da 2,49 $ a
            2,72 $, cioè 0,23 $ in più per unità. Se un prodotto così vendesse 2.000 unità al mese, un
            volume che usiamo solo per illustrare il calcolo, il cambiamento costerebbe 460 $ al mese,
            ovvero 5.520 $ all’anno. Su un articolo economico con margini ridotti, può fare la
            differenza tra guadagno e perdita.
          </p>
        </>
      ),
    },
    {
      id: "before-january-15",
      heading: "Cosa fare prima del 15 gennaio",
      body: (
        <>
          <ul>
            <li>
              <strong>Ricontrolla i prezzi vicini ai limiti di fascia.</strong> Un prodotto appena
              sopra i 10 $ o i 50 $ ora paga una tariffa diversa da uno appena sotto. Valuta cosa
              farebbe un piccolo cambio di prezzo alla commissione e alle vendite prima di muoverti.
            </li>
            <li>
              <strong>Smaltisci le scorte vecchie prima del 1° febbraio.</strong> Con la nuova
              commissione in base all’anzianità, la merce vecchia costa di più. Valuta promozioni o
              rimozioni per i prodotti lenti.
            </li>
            <li>
              <strong>Pianifica 28 giorni di copertura.</strong> Imposta il riassortimento in modo che i
              tuoi prodotti più venduti non scendano sotto le quattro settimane di scorte.
            </li>
            <li>
              <strong>Ricontrolla gli articoli grandi.</strong> Con le nuove fasce e commissioni di
              gestione, imballaggio e misure contano più di prima.
            </li>
          </ul>
          <p>
            Le commissioni sono solo una parte del profitto. Per vedere come si combinano sessioni,
            conversione e pubblicità, leggi la nostra{" "}
            <Link href={p("/data-analysis")}>guida ai numeri di Amazon che contano</Link>.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: "Quando entrano in vigore le commissioni Amazon FBA 2027?",
      answer:
        "La maggior parte dei cambiamenti alla commissione di logistica parte il 15 gennaio 2027. La nuova commissione di stoccaggio in base all’anzianità e il nuovo criterio per le scorte basse partono il 1° febbraio 2027. La commissione si calcola quando l’unità viene spedita, non quando viene ordinata.",
    },
    {
      question: "Di quanto aumentano le commissioni Amazon FBA nel 2027?",
      answer:
        "Amazon dice che la commissione di logistica sale in media di circa 0,19 $ per unità venduta. Alcuni prodotti pagano di più e altri di meno in base alla fascia di dimensione e di prezzo, quindi controlla i tuoi nella dashboard Fee Change Comparison.",
    },
    {
      question: "Il supplemento carburante e logistica cambia nel 2027?",
      answer: "No. Amazon dice che il supplemento carburante e logistica del 3,5% resta invariato.",
    },
    {
      question: "Come evito la commissione per scorte basse nel 2027?",
      answer:
        "Dal 1° febbraio 2027 la commissione si applica solo quando le tue scorte scendono sotto i 28 giorni di copertura. Tenere almeno quattro settimane di scorte di ogni prodotto nei magazzini di Amazon permette di evitarla.",
    },
    {
      question: "Nautilo Studio può aiutarmi a controllare i margini?",
      answer:
        "Sì. L’analisi dei dati è uno dei nostri servizi. Mandaci una scheda con la nostra revisione gratuita e ti diremo cosa guarderemmo per primo.",
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
    text: "Le nuove commissioni cambiano i conti di ogni prodotto. Scopri quali numeri seguire ogni settimana, oppure facci dare un’occhiata gratuita a una delle tue schede.",
    pillar: { href: "/data-analysis", label: "Leggi la nostra guida all’analisi dei dati" },
    formHeading: "Non sai cosa cambiano per te le commissioni 2027?",
    formText: "Mandaci una scheda e ti diremo, gratis, cosa controlleremmo per primo.",
  },
};

export default post;
