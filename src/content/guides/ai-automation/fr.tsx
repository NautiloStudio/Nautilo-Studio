import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const SELLER_ASSISTANT =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-agentic-ai";
const WORKFLOWS =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-plugin-amazon-quick-claude";
const ENHANCE_MY_LISTING =
  "https://www.aboutamazon.com/news/innovation-at-amazon/amazon-generative-ai-seller-growth-shopping-experience";

const p = (path: string) => localePath("fr", path);

const title = "Automatisation du marketing Amazon par l’IA | Nautilo Studio";
const description =
  "Automatisation du marketing Amazon par l’IA pour vendeurs aux États-Unis : fiches, stocks et rapports, chaque changement validé par vous. Audit offert.";

const page: GuideCopy["page"] = {
  slug: "ai-automation",
  breadcrumb: "Automatisation du marketing Amazon",
  question: "Automatisation du marketing Amazon par l’IA : que faut-il automatiser d’abord ?",
  answer:
    "L’automatisation du marketing Amazon utilise l’IA pour prendre en charge le travail répétitif, comme rédiger le contenu des fiches, surveiller les stocks ou résumer les rapports. Amazon propose déjà des outils pour cela, dont son Seller Assistant gratuit, qui peut surveiller votre compte et agir avec votre accord. Les décisions restent les vôtres : l’IA vous fait gagner du temps sans remplacer votre jugement.",
  description,
  image: {
    src: "/img/amazon-ai-automation.jpg",
    alt: "Ordinateur portable avec un tableau de bord vendeur Amazon et une puce d’IA reliée à des icônes de fiches, recherche, rapports et réglages",
    tile: "bg-graphite",
  },
  updated: "2026-11-16",
  facts: [
    { value: 4, label: "Tâches que l’IA peut reprendre" },
    { value: 3, label: "Outils IA d’Amazon pour commencer" },
    { value: 0, suffix: " $", label: "Coût de Seller Assistant pour les vendeurs aux États-Unis" },
    { value: 1, label: "Automatisation pour commencer" },
  ],
  sections: [
    {
      id: "what-to-automate",
      heading: "Automatisation du marketing Amazon : les tâches que l’IA peut prendre en charge",
      body: (
        <>
          <p>
            Une grande partie du travail hebdomadaire d’une boutique Amazon se répète, et c’est là que l’automatisation du marketing Amazon aide. L’IA peut proposer titres, attributs et descriptions, pendant que vous vérifiez les faits et le ton de la marque. Elle peut générer des idées de publicités pour vos produits, pendant que vous choisissez lesquelles diffuser et fixez le budget. Et elle peut résumer vos rapports de ventes et de trafic, pendant que vous décidez ce que les changements signifient.
          </p>
          <p>
            L’IA peut aussi signaler les stocks qui tournent lentement et les problèmes du compte, et vous décidez quoi corriger. Le niveau de stock compte davantage à partir de 2027, quand les frais de stockage et de stock faible d’Amazon changent : voyez{" "}
            <Link href={p("/blog/amazon-fba-fees-2027")}>ce qui change dans les frais Amazon FBA en 2027</Link>.
          </p>
          <blockquote>Laissez l’IA répéter. Gardez les décisions.</blockquote>
        </>
      ),
    },
    {
      id: "amazon-tools",
      heading: "Les outils d’IA qu’Amazon propose déjà aux vendeurs",
      body: (
        <>
          <p>
            Pas besoin d’un logiciel externe pour commencer. Le{" "}
            <a href={SELLER_ASSISTANT} target="_blank" rel="noopener noreferrer">
              Seller Assistant
            </a>{" "}
            d’Amazon est gratuit pour les vendeurs de la boutique américaine : il surveille votre compte et peut agir avec votre permission. Ses{" "}
            <a href={WORKFLOWS} target="_blank" rel="noopener noreferrer">
              Workflows
            </a>{" "}
            sont des automatisations sur mesure qui tournent en continu, et vous choisissez s’ils se contentent de recommander ou s’ils agissent aussi.
          </p>
          <p>
            Pour les fiches,{" "}
            <a href={ENHANCE_MY_LISTING} target="_blank" rel="noopener noreferrer">
              Enhance My Listing
            </a>{" "}
            d’Amazon suggère des améliorations que vous pouvez modifier ou refuser. Tous les comptes n’ont pas encore accès à tous les outils : vérifiez ce qui est disponible dans le vôtre avant de vous organiser autour.
          </p>
        </>
      ),
    },
    {
      id: "keep-human",
      heading: "Ce qui doit rester entre des mains humaines",
      body: (
        <>
          <p>
            Certaines décisions ne devraient jamais être automatisées. Les affirmations sur la sécurité, les matériaux ou les résultats d’un produit doivent être vérifiées par une personne. Le ton de votre marque, et ce qui rend votre produit différent, doivent venir de vous.
          </p>
          <p>
            Les décisions d’argent restent humaines aussi : prix, budgets publicitaires et stratégie d’ensemble. Et tout changement sur une fiche ou une campagne en ligne demande une validation finale par quelqu’un qui connaît l’entreprise.
          </p>
        </>
      ),
    },
    {
      id: "how-to-start",
      heading: "Comment démarrer avec l’automatisation du marketing Amazon",
      body: (
        <>
          <p>
            Commencez petit. Choisissez une tâche que vous répétez chaque semaine, laissez l’IA recommander et relisez ses suggestions avant que rien ne change. Confiez-lui davantage seulement quand vous faites confiance aux résultats.
          </p>
          <p>
            Les rapports sont souvent la première tâche la plus simple, car un résumé erroné ne coûte rien tant que personne n’agit dessus. Pour savoir quels chiffres vos rapports devraient montrer, lisez notre{" "}
            <Link href={p("/services/data-analysis")}>guide d’analyse marketing pour vendeurs Amazon</Link>.
          </p>
        </>
      ),
    },
    {
      id: "automation-service",
      heading: "Ce que fait notre service d’automatisation du marketing Amazon",
      figure: {
        src: "/img/amazon-ai-automation.jpg",
        alt: "Ordinateur portable avec un tableau de bord vendeur Amazon relié à une puce d’IA qui gère fiches, recherche, rapports et réglages : l’automatisation du marketing Amazon en action",
        width: 1600,
        height: 899,
        caption: "L’automatisation prend le travail répétitif, les personnes gardent les décisions. Illustration, pas une installation client.",
      },
      body: (
        <>
          <p>
            Voyez-le comme une automatisation par l’IA pour vendeurs Amazon, mise en place une tâche à la fois. Notre service d’automatisation du marketing Amazon suit quatre étapes.
          </p>
          <p>
            Nous listons d’abord les tâches que vous répétez chaque semaine et le temps que chacune prend. Nous en choisissons ensuite une et la configurons avec les outils qu’Amazon propose déjà, en mode recommandation seule. Nous revoyons les résultats avec vous chaque semaine, et c’est seulement quand vous leur faites confiance que nous laissons l’automatisation agir ou passons à la tâche suivante.
          </p>
          <p>
            Le travail est fait par notre équipe à Barcelone. <Link href={p("/about")}>Découvrez l’équipe de Nautilo Studio</Link>.
          </p>
        </>
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
