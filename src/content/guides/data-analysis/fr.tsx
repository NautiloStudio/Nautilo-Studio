import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const BRAND_ANALYTICS = "https://sell.amazon.com/blog/brand-analytics";
const ACOS = "https://advertising.amazon.com/library/guides/acos-advertising-cost-of-sales";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const p = (path: string) => localePath("fr", path);

const title = "Analyse de données Amazon : quels chiffres | Nautilo Studio";
const description =
  "Les chiffres Amazon que les vendeurs aux États-Unis devraient suivre chaque semaine, ce qu’ils révèlent et où les voir dans Seller Central. Audit offert.";

const page: GuideCopy["page"] = {
  slug: "data-analysis",
  breadcrumb: "Analyse de données",
  question: "Quels chiffres Amazon les vendeurs devraient-ils suivre ?",
  answer:
    "Commencez par quatre chiffres pour chaque produit : les sessions, le taux de conversion, la détention de l’Offre en vedette et votre coût publicitaire des ventes (ACOS). Ensemble, ils montrent si le problème vient du fait d’être trouvé, d’être choisi ou de trop dépenser en publicité. Vérifiez-les chaque semaine, comparez-les à la semaine précédente et ne changez qu’une chose à la fois.",
  description,
  image: {
    src: "/img/service-data.jpg",
    alt: "Colis en carton empilés en colonnes croissantes, comme un graphique en barres",
    tile: "bg-royal",
  },
  updated: "2026-11-07",
  facts: [
    { value: 4, label: "Chiffres à suivre pour chaque produit" },
    {
      value: 50,
      suffix: " %",
      label: "ACOS de l’exemple d’Amazon : 50 $ dépensés, 100 $ gagnés",
    },
    { value: 1, label: "Jour par semaine pour votre routine" },
    { value: 1, label: "Problème à corriger chaque semaine" },
  ],
  sections: [
    {
      id: "numbers",
      heading: "Quels chiffres comptent le plus ?",
      body: (
        <ul>
          <li>
            <strong>Sessions.</strong> Le nombre d’acheteurs qui ont visité votre page produit. Elles
            montrent si l’on vous trouve.
          </li>
          <li>
            <strong>Taux de conversion.</strong> La part de ces visites qui se termine par une
            commande. Il montre si la fiche convainc.
          </li>
          <li>
            <strong>Offre en vedette.</strong> L’offre à côté du bouton d’achat. Amazon indique que le
            prix, la disponibilité et la livraison comptent pour{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              remporter l’Offre en vedette
            </a>
            , ce qui peut fortement augmenter les ventes.
          </li>
          <li>
            <strong>ACOS.</strong> Les dépenses publicitaires divisées par le chiffre d’affaires
            publicitaire. Amazon Ads explique que votre{" "}
            <a href={ACOS} target="_blank" rel="noopener noreferrer">
              ACOS doit rester inférieur à votre marge
            </a>{" "}
            pour que la publicité reste rentable.
          </li>
        </ul>
      ),
    },
    {
      id: "what-they-mean",
      heading: "Que vous disent les chiffres ?",
      body: (
        <ul>
          <li>
            <strong>Peu de sessions.</strong> Les acheteurs ne trouvent pas le produit. Revoyez vos
            mots-clés avec notre <Link href={p("/services/amazon-seo")}>guide SEO Amazon</Link>.
          </li>
          <li>
            <strong>Beaucoup de sessions, peu de conversion.</strong> Les acheteurs arrivent mais
            n’achètent pas. Travaillez la fiche avec notre{" "}
            <Link href={p("/services/listing-optimization")}>guide d’optimisation des fiches</Link>.
          </li>
          <li>
            <strong>Offre en vedette perdue.</strong> Comparez votre prix, votre stock et votre
            livraison avec les autres offres sur le même produit.
          </li>
          <li>
            <strong>ACOS au-dessus de votre marge.</strong> La publicité perd de l’argent. Mettez en
            pause les termes de recherche qui dépensent sans vendre avant d’augmenter un budget.
          </li>
        </ul>
      ),
    },
    {
      id: "where-to-find",
      heading: "Où trouver ces données ?",
      body: (
        <ul>
          <li>
            <strong>Rapports commerciaux.</strong> Dans Seller Central, rubrique Rapports. Ils
            montrent sessions, pages vues et ventes pour chaque produit.
          </li>
          <li>
            <strong>Brand Analytics.</strong> Pour les marques du Registre des marques. Son{" "}
            <a href={BRAND_ANALYTICS} target="_blank" rel="noopener noreferrer">
              tableau de performance des requêtes de recherche
            </a>{" "}
            montre impressions, clics et ajouts au panier pour les recherches qui mènent à vos
            produits.
          </li>
          <li>
            <strong>Rapports publicitaires.</strong> Dans le gestionnaire de campagnes. Ils montrent
            dépenses, ventes, clics et ACOS pour chaque campagne et terme de recherche.
          </li>
          <li>
            <strong>Profit Analytics.</strong> Dans Seller Central. Il montre ce qu’Amazon vous facture
            pour chaque produit. Les frais changent chaque année : voyez{" "}
            <Link href={p("/blog/amazon-fba-fees-2027")}>ce qui change dans les frais Amazon FBA en 2027</Link>.
          </li>
          <li>
            <strong>Votre propre tableau.</strong> Une ligne par semaine et par produit, pour voir
            les tendances qu’un seul rapport cache.
          </li>
        </ul>
      ),
    },
    {
      id: "weekly-routine",
      heading: "Comment mettre en place une routine hebdomadaire ?",
      body: (
        <ol>
          <li>Choisissez un jour par semaine et téléchargez toujours les mêmes rapports.</li>
          <li>Comparez chaque chiffre à la semaine précédente et à la même semaine du mois dernier.</li>
          <li>Notez ce que vous avez changé, comme le prix, les images ou les enchères, et quand.</li>
          <li>Choisissez un problème à corriger cette semaine. Vérifiez le résultat la semaine suivante.</li>
        </ol>
      ),
    },
  ],
  faqs: [
    {
      question: "Qu’est-ce qu’un bon taux de conversion sur Amazon ?",
      answer:
        "Cela dépend de la catégorie, du prix et de la façon dont les acheteurs arrivent, donc il n’y a pas un seul bon chiffre. Comparez chaque produit à son propre historique et à des produits similaires de votre boutique.",
    },
    {
      question: "Comment calcule-t-on l’ACOS ?",
      answer:
        "Divisez les dépenses publicitaires par le chiffre d’affaires publicitaire, puis multipliez par 100. Amazon Ads donne l’exemple de 50 $ dépensés pour une campagne qui a rapporté 100 $, soit un ACOS de 50 %.",
    },
    {
      question: "Faut-il le Registre des marques pour analyser mes données ?",
      answer:
        "Pas pour l’essentiel. Les rapports commerciaux et publicitaires sont dans Seller Central et dans le gestionnaire de campagnes. Brand Analytics, avec les données de recherche, nécessite une marque inscrite au Registre des marques.",
    },
    {
      question: "Nautilo Studio peut-il analyser mes chiffres ?",
      answer:
        "Oui. L’analyse de données fait partie de nos services. Envoyez-nous une fiche pour un audit gratuit, ou parlez-nous des rapports que vous voulez comprendre.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
