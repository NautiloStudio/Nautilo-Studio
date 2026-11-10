import type { GuideCopy } from "../types";

const SELLER_ASSISTANT =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-agentic-ai";
const WORKFLOWS =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-plugin-amazon-quick-claude";
const ENHANCE_MY_LISTING =
  "https://www.aboutamazon.com/news/innovation-at-amazon/amazon-generative-ai-seller-growth-shopping-experience";

const title = "Automazione con l’IA per venditori Amazon | Nautilo Studio";
const description =
  "L’IA fa risparmiare tempo ai venditori Amazon negli USA su schede, inventario e report. Cosa automatizzare e cosa lasciare alle persone. Revisione gratis.";

const page: GuideCopy["page"] = {
  slug: "ai-automation",
  breadcrumb: "Automazione con l’IA",
  question: "Come può l’automazione con l’IA aiutare i venditori Amazon?",
  answer:
    "L’automazione con l’IA si occupa del lavoro ripetitivo, come scrivere le bozze delle schede, tenere d’occhio l’inventario o riassumere i report. Amazon offre già strumenti per farlo, tra cui il suo Seller Assistant gratuito, che può monitorare il tuo account e agire con la tua approvazione. Le decisioni restano tue, quindi l’IA ti fa risparmiare tempo senza sostituire il tuo giudizio.",
  description,
  image: {
    src: "/img/service-ai.jpg",
    alt: "Braccio robotico bianco che posa un pacco in fondo a una fila ordinata",
    tile: "bg-graphite",
  },
  updated: "2026-11-07",
  facts: [
    { value: 4, label: "Attività che l’IA può svolgere" },
    { value: 3, label: "Strumenti di IA di Amazon da cui partire" },
    { value: 0, suffix: " $", label: "Costo di Seller Assistant per i venditori negli USA" },
    { value: 1, label: "Automazione da cui iniziare" },
  ],
  sections: [
    {
      id: "what-to-automate",
      heading: "Quali attività su Amazon può automatizzare l’IA?",
      body: (
        <ul>
          <li>
            <strong>Contenuti delle schede.</strong> L’IA propone titoli, attributi e descrizioni. Tu
            controlli i fatti e il tono del marchio.
          </li>
          <li>
            <strong>Inventario e stato dell’account.</strong> L’IA segnala le scorte che girano
            lentamente e i problemi dell’account. Tu decidi cosa sistemare.
          </li>
          <li>
            <strong>Idee per gli annunci.</strong> L’IA genera idee di annunci per i tuoi prodotti.
            Tu scegli cosa pubblicare e fissi il budget.
          </li>
          <li>
            <strong>Report.</strong> L’IA trasforma i report su vendite e traffico in brevi
            riepiloghi. Tu decidi cosa significano i cambiamenti.
          </li>
        </ul>
      ),
    },
    {
      id: "amazon-tools",
      heading: "Quali strumenti di IA offre già Amazon?",
      body: (
        <ul>
          <li>
            <strong>
              <a href={SELLER_ASSISTANT} target="_blank" rel="noopener noreferrer">
                Seller Assistant
              </a>
              .
            </strong>{" "}
            Gratuito per i venditori dello store statunitense. Monitora il tuo account e può agire con
            il tuo permesso.
          </li>
          <li>
            <strong>
              <a href={WORKFLOWS} target="_blank" rel="noopener noreferrer">
                Workflows
              </a>
              .
            </strong>{" "}
            Automazioni personalizzate che restano attive. Scegli tu tra raccomandazioni e azioni.
          </li>
          <li>
            <strong>
              <a href={ENHANCE_MY_LISTING} target="_blank" rel="noopener noreferrer">
                Enhance My Listing
              </a>
              .
            </strong>{" "}
            Suggerisce miglioramenti alle schede che puoi modificare o rifiutare. Verifica se il tuo
            account ha accesso.
          </li>
        </ul>
      ),
    },
    {
      id: "keep-human",
      heading: "Cosa dovrebbe restare nelle mani delle persone?",
      body: (
        <ul>
          <li>
            <strong>Le affermazioni sul prodotto.</strong> Tutto ciò che riguarda sicurezza,
            materiali o risultati deve controllarlo una persona.
          </li>
          <li>
            <strong>Il tuo marchio.</strong> Il tuo tono e ciò che rende diverso il tuo prodotto.
          </li>
          <li>
            <strong>Le decisioni economiche.</strong> Prezzi, budget pubblicitari e strategia
            generale.
          </li>
          <li>
            <strong>L’approvazione finale.</strong> Qualsiasi modifica a una scheda o a una campagna
            attiva.
          </li>
        </ul>
      ),
    },
    {
      id: "how-to-start",
      heading: "Come si inizia con l’automazione con l’IA?",
      body: (
        <ol>
          <li>Scegli un’attività che ripeti ogni settimana.</li>
          <li>Lascia che l’IA ti dia suggerimenti e rivedili prima che cambi qualcosa.</li>
          <li>Affidale altro lavoro solo quando ti fidi dei risultati.</li>
        </ol>
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
