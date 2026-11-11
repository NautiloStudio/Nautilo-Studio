import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const AMAZON_SEO_GUIDE = "https://sell.amazon.com/blog/amazon-seo";
const TITLE_RULES = "https://sellercentral.amazon.com/gp/help/external/GYTR6SYGFA5E3EQC";
const SEARCH_TERMS_HELP = "https://sellercentral.amazon.com/help/hub/reference/external/G23501";

const p = (path: string) => localePath("fr", path);

const title = "SEO B2B pour vendeurs Amazon : mieux classé | Nautilo Studio";
const description =
  "Nautilo Studio, agence SEO B2B des vendeurs Amazon aux États-Unis : nous trouvons ce que cherchent vos acheteurs et le plaçons où Amazon le lit. Audit gratuit.";

const page: GuideCopy["page"] = {
  slug: "amazon-seo",
  breadcrumb: "SEO B2B pour Amazon",
  question: "SEO B2B pour vendeurs Amazon : comment mieux se classer",
  answer:
    "Le SEO B2B pour vendeurs Amazon, ou SEO Amazon, consiste à placer votre produit devant ceux qui le cherchent. Amazon affiche les produits qui correspondent le mieux à une recherche et que les acheteurs ont le plus de chances d’acheter. Placez les mots que tapent les acheteurs dans votre titre, vos puces et vos termes de recherche cachés, puis rendez la fiche assez convaincante pour vendre. Ces ventes, avec une fiche de qualité, font monter le produit au fil du temps.",
  description,
  image: {
    src: "/img/amazon-seo-dashboard.webp",
    alt: "Ordinateur portable affichant un tableau de bord SEO Amazon : positions des mots-clés et trafic organique",
    tile: "bg-cyan",
  },
  updated: "2026-11-11",
  facts: [
    { value: 200, label: "Caractères maximum pour le titre selon le guide SEO d’Amazon" },
    { value: 60, label: "Caractères recommandés par Amazon pour le titre" },
    { value: 2, suffix: "×", label: "Nombre maximal de fois qu’un mot peut figurer dans un titre" },
    { value: 4, label: "Sources pour trouver de vraies recherches" },
  ],
  sections: [
    {
      id: "how-ranking-works",
      heading: "Facteurs de classement du SEO Amazon : ce qui décide de votre position",
      body: (
        <>
          <p>
            Quand un acheteur fait une recherche, Amazon doit choisir quels produits montrer en premier. Il retient les fiches qui correspondent le mieux aux mots tapés et que l’acheteur a le plus de chances d’acheter. C’est pourquoi le SEO B2B pour vendeurs Amazon commence par la pertinence et se termine par les ventes.
          </p>
          <p>
            La pertinence vient de votre titre, de vos puces, de votre description et de vos termes de recherche cachés : si un mot n’apparaît dans aucun d’eux, le produit sort rarement pour cette recherche. Vient ensuite la conversion. Les acheteurs cliquent et achètent quand les images, le prix, les avis et l’offre mise en avant les convainquent, et les produits qui se vendent régulièrement gardent souvent leur position. Amazon indique aussi que{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              la qualité de la fiche et la santé du compte peuvent jouer sur le classement
            </a>
            , donc une fiche propre et complète compte autant que les bons mots.
          </p>
          <blockquote>La pertinence fait apparaître votre produit. Les ventes le maintiennent en haut.</blockquote>
        </>
      ),
    },
    {
      id: "find-keywords",
      heading: "Recherche de mots-clés Amazon : les mots que tapent vos acheteurs",
      body: (
        <>
          <p>
            Les bons mots-clés viennent de ce que les acheteurs tapent vraiment, pas de suppositions. Le plus rapide est de partir de la barre de recherche d’Amazon : tapez le mot principal de votre produit et notez les suggestions, car elles viennent de vraies recherches.
          </p>
          <p>
            Seller Central ajoute des données gratuites. Product Opportunity Explorer montre les principaux termes de recherche d’une niche. Brand Analytics montre quelles recherches mènent à des clics et des ventes pour les marques enregistrées. Le rapport des termes de recherche de vos annonces Sponsored Products liste les recherches exactes qui vous ont amené des acheteurs. Ensemble, ce sont quatre sources de vraies recherches et une liste claire de priorités.
          </p>
        </>
      ),
    },
    {
      id: "where-to-put-keywords",
      heading: "Où placer vos mots-clés Amazon : titre, puces et termes cachés",
      body: (
        <>
          <p>
            Le titre pèse le plus, il doit donc dire ce qu’est le produit dès les premiers mots. Le guide d’Amazon fixe{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              une limite de 200 caractères et en recommande 60 ou moins
            </a>
            , et ses{" "}
            <a href={TITLE_RULES} target="_blank" rel="noopener noreferrer">
              règles sur les titres
            </a>{" "}
            autorisent un même mot deux fois au plus.
          </p>
          <p>
            Chaque puce explique un avantage et accueille naturellement vos mots-clés secondaires. La description et le contenu A+ couvrent matières, taille, entretien et contenu de la boîte. Les termes de recherche cachés reçoivent les synonymes et les fautes de frappe qui ne trouvent pas leur place ailleurs, sans répétitions, marques ni ASIN. Vérifiez la{" "}
            <a href={SEARCH_TERMS_HELP} target="_blank" rel="noopener noreferrer">
              limite de longueur actuelle
            </a>
            , puis suivez notre guide pas à pas pour{" "}
            <Link href={p("/blog/amazon-backend-keywords")}>remplir les mots-clés cachés d’Amazon</Link>.
          </p>
        </>
      ),
    },
    {
      id: "common-mistakes",
      heading: "Les erreurs de SEO Amazon qui coûtent des positions",
      body: (
        <>
          <p>
            L’erreur la plus courante est le bourrage de mots-clés : un titre rempli de tous les termes possibles se lit mal et peut enfreindre les règles d’Amazon. Juste après vient l’usage de marques concurrentes, qu’Amazon interdit dans la fiche comme dans les termes de recherche.
          </p>
          <p>
            Deux erreurs plus discrètes coûtent aussi. Les titres longs sont coupés sur mobile, donc les mots-clés doivent venir en premier. Et tout changer d’un coup empêche de savoir quel changement a aidé. Le classement amène les acheteurs, et notre{" "}
            <Link href={p("/services/listing-optimization")}>guide d’optimisation des fiches</Link> explique comment transformer ces visites en ventes.
          </p>
        </>
      ),
    },
    {
      id: "b2b-seo-service",
      heading: "Ce que fait notre agence SEO B2B pour les vendeurs Amazon",
      figure: {
        src: "/img/amazon-seo-dashboard.webp",
        alt: "Ordinateur portable affichant un tableau de bord SEO B2B et publicité Amazon : positions des mots-clés, trafic organique et ACOS par campagne",
        width: 1600,
        height: 899,
        caption: "Le type de tableau de bord avec lequel nous suivons classement et ventes. Chiffres d’exemple, pas un résultat client.",
      },
      body: (
        <>
          <p>
            Voyez-le comme du marketing B2B par le SEO pour votre marque sur Amazon : une fois le travail fait, il continue d’amener des acheteurs. Notre service SEO B2B suit quatre étapes, fiche par fiche.
          </p>
          <p>
            D’abord, nous étudions les recherches que vos acheteurs tapent vraiment, avec les outils d’Amazon. Ensuite, nous réécrivons votre titre et vos puces pour que les mots-clés principaux arrivent en premier et restent lisibles, et nous remplissons les termes de recherche cachés avec synonymes et fautes de frappe, dans le respect des règles d’Amazon. Enfin, nous vérifions classement et ventes après chaque changement grâce à notre service d’analyse de données Amazon.
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
      question: "Le SEO Amazon est-il différent du SEO Google ?",
      answer:
        "Oui. Google classe des pages qui répondent à une question, alors qu’Amazon classe des produits que les acheteurs sont susceptibles d’acheter. Sur Amazon, la conversion et l’historique des ventes comptent beaucoup plus.",
    },
    {
      question: "Combien de temps faut-il pour que le SEO Amazon fasse effet ?",
      answer:
        "Le classement suit les ventes : jugez un changement sur plusieurs semaines plutôt que quelques jours, et ne changez qu’une chose à la fois.",
    },
    {
      question: "Faut-il payer de la publicité pour se classer sur Amazon ?",
      answer:
        "Non, mais elle peut aider. Amazon indique que les annonces Sponsored Products peuvent aider les offres à remonter dans les résultats, et leurs ventes s’ajoutent à l’historique de votre produit.",
    },
    {
      question: "Nautilo Studio peut-il vérifier ma fiche ?",
      answer:
        "Oui. Envoyez-nous une fiche Amazon via le formulaire d’audit gratuit de cette page et nous vous écrirons ce que nous améliorerions en premier.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
