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
  question: "SEO B2B pour vendeurs Amazon : comment mieux se classer dans Amazon ?",
  answer:
    "Le SEO B2B pour vendeurs Amazon, ou SEO Amazon, consiste à placer votre produit devant ceux qui le cherchent. Amazon affiche les produits qui correspondent le mieux à une recherche et que les acheteurs ont le plus de chances d’acheter. Placez les mots que tapent les acheteurs dans votre titre, vos puces et vos termes de recherche cachés, puis rendez la fiche assez convaincante pour vendre. Ces ventes, avec une fiche de qualité, font monter le produit au fil du temps.",
  description,
  image: {
    src: "/img/service-ads.jpg",
    alt: "Loupe appuyée contre un petit colis",
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
      heading: "Comment Amazon décide-t-il de votre classement ?",
      body: (
        <ul>
          <li>
            <strong>Pertinence.</strong> Les mots de la recherche figurent dans votre titre, vos
            puces, votre description et vos termes de recherche cachés.
          </li>
          <li>
            <strong>Conversion.</strong> Les acheteurs cliquent et achètent. Les images, le prix, les
            avis et l’Offre en vedette jouent tous un rôle.
          </li>
          <li>
            <strong>Historique des ventes.</strong> Les produits qui se vendent régulièrement ont
            tendance à garder leur position.
          </li>
          <li>
            <strong>Qualité de la fiche.</strong> Amazon indique que{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              la qualité de la fiche et la santé du compte peuvent contribuer au classement
            </a>
            .
          </li>
        </ul>
      ),
    },
    {
      id: "find-keywords",
      heading: "Comment trouver les mots-clés qu’utilisent les acheteurs ?",
      body: (
        <ul>
          <li>
            <strong>La barre de recherche d’Amazon.</strong> Tapez le nom de votre produit et notez
            les suggestions d’Amazon.
          </li>
          <li>
            <strong>Product Opportunity Explorer.</strong> Un outil gratuit de Seller Central qui
            donne les principaux termes de recherche d’une niche.
          </li>
          <li>
            <strong>Brand Analytics.</strong> Pour les marques inscrites au Registre des marques :
            les recherches qui mènent aux clics et aux ventes.
          </li>
          <li>
            <strong>Rapport sur les termes de recherche.</strong> Les vraies recherches qui ont mené
            les acheteurs à vos annonces Sponsored Products.
          </li>
        </ul>
      ),
    },
    {
      id: "where-to-put-keywords",
      heading: "Où placer vos mots-clés ?",
      body: (
        <ul>
          <li>
            <strong>Titre.</strong> D’abord ce qu’est le produit. Le guide d’Amazon fixe{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              une limite de 200 caractères et en recommande 60 ou moins
            </a>
            , et ses{" "}
            <a href={TITLE_RULES} target="_blank" rel="noopener noreferrer">
              règles sur les titres
            </a>{" "}
            autorisent un même mot deux fois au maximum.
          </li>
          <li>
            <strong>Puces.</strong> Un avantage par puce, avec vos mots-clés secondaires là où ils
            se lisent naturellement.
          </li>
          <li>
            <strong>Description et contenu A+.</strong> Matériaux, dimensions, entretien et contenu
            du colis.
          </li>
          <li>
            <strong>Termes de recherche cachés.</strong> Synonymes et fautes d’orthographe
            courantes, sans répétitions, noms de marque ni ASIN. Vérifiez la{" "}
            <a href={SEARCH_TERMS_HELP} target="_blank" rel="noopener noreferrer">
              limite de longueur actuelle
            </a>
            , et lisez notre guide pas à pas pour{" "}
            <Link href={p("/blog/amazon-backend-keywords")}>remplir les mots-clés cachés d’Amazon</Link>.
          </li>
        </ul>
      ),
    },
    {
      id: "b2b-seo-service",
      heading: "Notre service SEO B2B pour vendeurs Amazon : ce qu’il comprend",
      body: (
        <>
          <p>
            Pour une marque sur Amazon, le SEO est le marketing B2B qui continue d’amener des acheteurs une fois le travail fait. Notre service SEO B2B comprend quatre étapes :
          </p>
          <ul>
            <li>
              <strong>Recherche de mots-clés.</strong> Les recherches que vos acheteurs tapent vraiment, à partir des outils d’Amazon.
            </li>
            <li>
              <strong>Titre et puces.</strong> Réécrits pour que les mots-clés principaux arrivent en premier et restent lisibles.
            </li>
            <li>
              <strong>Termes de recherche cachés.</strong> Synonymes et fautes de frappe, dans le respect des règles d’Amazon.
            </li>
            <li>
              <strong>Suivi.</strong> Nous vérifions classement et ventes après chaque changement grâce à notre{" "}
              <Link href={p("/services/data-analysis")}>service d’analyse de données Amazon</Link>.
            </li>
          </ul>
          <p>
            Le travail est fait par notre équipe à Barcelone. <Link href={p("/about")}>Découvrez l’équipe de Nautilo Studio</Link>.
          </p>
        </>
      ),
    },
    {
      id: "common-mistakes",
      heading: "Quelles sont les erreurs les plus courantes ?",
      body: (
        <>
          <ul>
            <li>
              <strong>Bourrer le titre de mots-clés.</strong> C’est difficile à lire et ça peut
              enfreindre les règles d’Amazon sur les titres.
            </li>
            <li>
              <strong>Les marques concurrentes.</strong> Les utiliser dans votre fiche ou vos termes
              de recherche est contraire aux règles d’Amazon.
            </li>
            <li>
              <strong>Oublier le mobile.</strong> Les titres longs sont coupés, donc les mots
              importants passent en premier.
            </li>
            <li>
              <strong>Tout changer en même temps.</strong> Vous ne pouvez plus savoir quel
              changement a aidé.
            </li>
          </ul>
          <p>
            Le classement amène les acheteurs. Notre{" "}
            <Link href={p("/services/listing-optimization")}>guide d’optimisation des fiches</Link> explique
            comment transformer ces visites en ventes, et notre{" "}
            <Link href={p("/blog")}>blog pour vendeurs Amazon</Link> propose d’autres guides pas à pas.
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
