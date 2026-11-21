import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const SELLER_ASSISTANT =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-agentic-ai";
const WORKFLOWS =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-plugin-amazon-quick-claude";
const ENHANCE_MY_LISTING =
  "https://www.aboutamazon.com/news/innovation-at-amazon/amazon-generative-ai-seller-growth-shopping-experience";

const p = (path: string) => localePath("it", path);

const title = "Automazione marketing Amazon con l’IA | Nautilo Studio";
const description =
  "Automazione del marketing su Amazon con l’IA per venditori USA: schede, inventario e report, e ogni modifica la approvi tu. Chiedi la revisione gratuita.";

const page: GuideCopy["page"] = {
  slug: "ai-automation",
  breadcrumb: "Automazione del marketing su Amazon",
  question: "Automazione del marketing su Amazon con l’IA: cosa automatizzare prima",
  answer:
    "L’automazione del marketing su Amazon usa l’IA per occuparsi del lavoro ripetitivo, come scrivere le bozze delle schede, tenere d’occhio l’inventario o riassumere i report. Amazon offre già strumenti per farlo, tra cui il suo Seller Assistant gratuito, che può monitorare il tuo account e agire con la tua approvazione. Le decisioni restano tue, quindi l’IA ti fa risparmiare tempo senza sostituire il tuo giudizio.",
  description,
  image: {
    src: "/img/amazon-ai-automation.jpg",
    alt: "Portatile con una dashboard venditore Amazon e un chip di IA collegato alle icone di schede, ricerca, report e impostazioni",
    tile: "bg-graphite",
  },
  updated: "2026-11-16",
  facts: [
    { value: 4, label: "Attività che l’IA può svolgere" },
    { value: 3, label: "Strumenti di IA di Amazon da cui partire" },
    { value: 0, suffix: " $", label: "Costo di Seller Assistant per i venditori negli USA" },
    { value: 1, label: "Automazione da cui iniziare" },
  ],
  sections: [
    {
      id: "what-to-automate",
      heading: "Automazione del marketing su Amazon: i compiti che l’IA può prendersi",
      body: (
        <>
          <p>
            Gran parte del lavoro settimanale in un negozio Amazon si ripete, ed è lì che l’automazione del marketing su Amazon aiuta. L’IA può proporre titoli, attributi e descrizioni, mentre tu controlli i fatti e il tono del marchio. Può generare idee per gli annunci dei tuoi prodotti, mentre tu scegli cosa pubblicare e fissi il budget. E può trasformare i report di vendite e traffico in brevi riassunti, mentre tu decidi cosa significano i cambiamenti.
          </p>
          <p>
            L’IA può anche segnalarti le scorte che girano lente e i problemi dell’account, e tu decidi cosa sistemare. Il livello delle scorte conta di più dal 2027, quando cambiano le commissioni di stoccaggio e di scorte basse di Amazon: leggi{" "}
            <Link href={p("/blog/amazon-fba-fees-2027")}>cosa cambia nelle commissioni Amazon FBA per il 2027</Link>.
          </p>
          <blockquote>Lascia all’IA le ripetizioni. Tieni per te le decisioni.</blockquote>
        </>
      ),
    },
    {
      id: "amazon-tools",
      heading: "Gli strumenti di IA che Amazon offre già ai venditori",
      body: (
        <>
          <p>
            Per iniziare non ti serve un software esterno. Il{" "}
            <a href={SELLER_ASSISTANT} target="_blank" rel="noopener noreferrer">
              Seller Assistant
            </a>{" "}
            di Amazon è gratuito per i venditori del negozio USA: monitora il tuo account e può agire con il tuo permesso. I suoi{" "}
            <a href={WORKFLOWS} target="_blank" rel="noopener noreferrer">
              Workflows
            </a>{" "}
            sono automazioni su misura che restano attive, e scegli tu se devono solo consigliare o anche agire.
          </p>
          <p>
            Per le schede,{" "}
            <a href={ENHANCE_MY_LISTING} target="_blank" rel="noopener noreferrer">
              Enhance My Listing
            </a>{" "}
            di Amazon suggerisce miglioramenti che puoi modificare o rifiutare. Non tutti gli account hanno ancora accesso a tutti gli strumenti, quindi controlla cosa è disponibile nel tuo prima di pianificare.
          </p>
        </>
      ),
    },
    {
      id: "keep-human",
      heading: "Cosa deve restare nelle mani delle persone",
      body: (
        <>
          <p>
            Alcune decisioni non andrebbero mai automatizzate. Le affermazioni su sicurezza, materiali o risultati del prodotto devono essere controllate da una persona. Il tono del tuo marchio, e ciò che rende diverso il tuo prodotto, devono venire da te.
          </p>
          <p>
            Anche le decisioni sui soldi restano alle persone: prezzi, budget pubblicitari e strategia generale. E ogni modifica a una scheda o a una campagna attiva richiede l’approvazione finale di qualcuno che conosce l’attività.
          </p>
        </>
      ),
    },
    {
      id: "how-to-start",
      heading: "Come iniziare con l’automazione del marketing su Amazon",
      body: (
        <>
          <p>
            Parti in piccolo. Scegli un compito che ripeti ogni settimana, lascia che l’IA consigli e rivedi i suoi suggerimenti prima che cambi qualcosa. Affidale altro solo quando ti fidi dei risultati.
          </p>
          <p>
            I report sono spesso il primo compito più facile, perché un riassunto sbagliato non costa nulla finché nessuno agisce su di esso. Per sapere quali numeri dovrebbero mostrare i tuoi report, leggi la nostra{" "}
            <Link href={p("/services/data-analysis")}>guida di marketing analytics per venditori Amazon</Link>.
          </p>
        </>
      ),
    },
    {
      id: "automation-service",
      heading: "Cosa fa il nostro servizio di automazione del marketing su Amazon",
      figure: {
        src: "/img/amazon-ai-automation.jpg",
        alt: "Portatile con una dashboard venditore Amazon collegata a un chip di IA che gestisce schede, ricerca, report e impostazioni: l’automazione del marketing su Amazon in azione",
        width: 1600,
        height: 899,
        caption: "L’automazione si prende il lavoro ripetitivo, le persone tengono le decisioni. Illustrazione, non è la configurazione di un cliente.",
      },
      body: (
        <>
          <p>
            Pensala come automazione con l’IA per venditori Amazon, impostata un compito alla volta. Il nostro servizio di automazione del marketing su Amazon segue quattro passi.
          </p>
          <p>
            Prima elenchiamo i compiti che ripeti ogni settimana e quanto tempo richiede ciascuno. Poi ne scegliamo uno e lo impostiamo con gli strumenti che Amazon offre già, in modalità solo suggerimento. Rivediamo i risultati con te ogni settimana e, solo quando ti fidi, lasciamo agire l’automazione o passiamo al compito successivo.
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
      question: "Il Seller Assistant di Amazon è gratuito?",
      answer:
        "Sì. Amazon dice che Seller Assistant è gratuito e disponibile per tutti i venditori dello store statunitense.",
    },
    {
      question: "L’IA può scrivere tutta la mia scheda Amazon?",
      answer:
        "L’IA può scriverne gran parte, ma conviene comunque controllare il risultato. Enhance My Listing di Amazon permette di rivedere, personalizzare o rifiutare ogni suggerimento.",
    },
    {
      question: "L’IA cambierà il mio account senza chiedere?",
      answer:
        "Amazon dice che i venditori rivedono e approvano le azioni di Seller Assistant prima che vengano eseguite, e che ogni azione viene registrata.",
    },
    {
      question: "Nautilo Studio può aiutarmi a configurarla?",
      answer:
        "Sì. L’automazione con l’IA è uno dei nostri servizi. Inviaci una scheda per una revisione gratuita, oppure raccontaci quali attività vuoi automatizzare.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
