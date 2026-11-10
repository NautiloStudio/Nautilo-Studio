import type { GuideCopy } from "../types";

const SELLER_ASSISTANT =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-agentic-ai";
const WORKFLOWS =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-plugin-amazon-quick-claude";
const ENHANCE_MY_LISTING =
  "https://www.aboutamazon.com/news/innovation-at-amazon/amazon-generative-ai-seller-growth-shopping-experience";

const title = "Automatisation IA pour vendeurs Amazon | Nautilo Studio";
const description =
  "L’IA fait gagner du temps aux vendeurs Amazon aux États-Unis : fiches, stocks, rapports. Ce qu’il faut automatiser ou garder humain. Audit offert.";

const page: GuideCopy["page"] = {
  slug: "ai-automation",
  breadcrumb: "Automatisation IA",
  question: "Comment l’automatisation par l’IA peut-elle aider les vendeurs Amazon ?",
  answer:
    "L’automatisation par l’IA prend en charge le travail répétitif, comme rédiger le contenu des fiches, surveiller les stocks ou résumer les rapports. Amazon propose déjà des outils pour cela, dont son Seller Assistant gratuit, qui peut surveiller votre compte et agir avec votre accord. Les décisions restent les vôtres : l’IA vous fait gagner du temps sans remplacer votre jugement.",
  description,
  image: {
    src: "/img/service-ai.jpg",
    alt: "Bras robotique blanc posant un colis au bout d’une rangée bien alignée",
    tile: "bg-graphite",
  },
  updated: "2026-11-07",
  facts: [
    { value: 4, label: "Tâches que l’IA peut reprendre" },
    { value: 3, label: "Outils IA d’Amazon pour commencer" },
    { value: 0, suffix: " $", label: "Coût de Seller Assistant pour les vendeurs aux États-Unis" },
    { value: 1, label: "Automatisation pour commencer" },
  ],
  sections: [
    {
      id: "what-to-automate",
      heading: "Quelles tâches Amazon l’IA peut-elle automatiser ?",
      body: (
        <ul>
          <li>
            <strong>Contenu des fiches.</strong> L’IA propose titres, attributs et descriptions.
            Vous vérifiez les faits et le ton de la marque.
          </li>
          <li>
            <strong>Stocks et santé du compte.</strong> L’IA signale les stocks qui tournent
            lentement et les problèmes de compte. Vous décidez quoi corriger.
          </li>
          <li>
            <strong>Idées de publicités.</strong> L’IA génère des idées d’annonces pour vos produits.
            Vous choisissez ce qui est diffusé et fixez le budget.
          </li>
          <li>
            <strong>Rapports.</strong> L’IA transforme les rapports de ventes et de trafic en courts
            résumés. Vous décidez de ce que signifient les variations.
          </li>
        </ul>
      ),
    },
    {
      id: "amazon-tools",
      heading: "Quels outils d’IA Amazon propose-t-il déjà ?",
      body: (
        <ul>
          <li>
            <strong>
              <a href={SELLER_ASSISTANT} target="_blank" rel="noopener noreferrer">
                Seller Assistant
              </a>
              .
            </strong>{" "}
            Gratuit pour les vendeurs de la boutique américaine. Il surveille votre compte et peut
            agir avec votre accord.
          </li>
          <li>
            <strong>
              <a href={WORKFLOWS} target="_blank" rel="noopener noreferrer">
                Workflows
              </a>
              .
            </strong>{" "}
            Des automatisations personnalisées qui tournent en continu. Vous choisissez entre
            recommandations et actions.
          </li>
          <li>
            <strong>
              <a href={ENHANCE_MY_LISTING} target="_blank" rel="noopener noreferrer">
                Enhance My Listing
              </a>
              .
            </strong>{" "}
            Propose des améliorations de fiche que vous pouvez modifier ou refuser. Vérifiez si votre
            compte y a accès.
          </li>
        </ul>
      ),
    },
    {
      id: "keep-human",
      heading: "Que faut-il garder entre des mains humaines ?",
      body: (
        <ul>
          <li>
            <strong>Les promesses produit.</strong> Tout ce qui touche à la sécurité, aux matériaux
            ou aux résultats doit être vérifié par une personne.
          </li>
          <li>
            <strong>Votre marque.</strong> Votre ton et ce qui rend votre produit différent.
          </li>
          <li>
            <strong>Les décisions financières.</strong> Les prix, les budgets publicitaires et la
            stratégie globale.
          </li>
          <li>
            <strong>La validation finale.</strong> Tout changement sur une fiche ou une campagne en
            ligne.
          </li>
        </ul>
      ),
    },
    {
      id: "how-to-start",
      heading: "Comment se lancer dans l’automatisation par l’IA ?",
      body: (
        <ol>
          <li>Choisissez une tâche que vous répétez chaque semaine.</li>
          <li>Laissez l’IA recommander, et relisez ses suggestions avant que quoi que ce soit change.</li>
          <li>Ne lui confiez davantage qu’une fois que vous avez confiance dans les résultats.</li>
        </ol>
      ),
    },
  ],
  faqs: [
    {
      question: "Le Seller Assistant d’Amazon est-il gratuit ?",
      answer:
        "Oui. Amazon indique que Seller Assistant est gratuit et disponible pour tous les vendeurs de la boutique américaine.",
    },
    {
      question: "L’IA peut-elle rédiger toute ma fiche Amazon ?",
      answer:
        "L’IA peut en rédiger l’essentiel, mais vous devez quand même relire le résultat. Enhance My Listing d’Amazon permet de relire, personnaliser ou refuser chaque suggestion.",
    },
    {
      question: "L’IA modifiera-t-elle mon compte sans me demander ?",
      answer:
        "Amazon indique que les vendeurs relisent et approuvent les actions de Seller Assistant avant leur exécution, et que chaque action est enregistrée.",
    },
    {
      question: "Nautilo Studio peut-il m’aider à mettre cela en place ?",
      answer:
        "Oui. L’automatisation par l’IA fait partie de nos services. Envoyez-nous une fiche pour un audit gratuit, ou parlez-nous des tâches que vous voulez automatiser.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
