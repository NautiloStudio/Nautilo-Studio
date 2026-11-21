import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const BRAND_ANALYTICS = "https://sell.amazon.com/blog/brand-analytics";
const ACOS = "https://advertising.amazon.com/library/guides/acos-advertising-cost-of-sales";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const p = (path: string) => localePath("fr", path);

const title = "Agence d’analyse marketing pour Amazon | Nautilo Studio";
const description =
  "Nautilo Studio, agence d’analyse marketing des vendeurs Amazon aux États-Unis : nous suivons les chiffres qui montrent où se perdent les ventes. Audit gratuit.";

const page: GuideCopy["page"] = {
  slug: "data-analysis",
  breadcrumb: "Analyse de données Amazon",
  question: "Agence d’analyse marketing pour Amazon : les chiffres qui comptent",
  answer:
    "L’analyse de données Amazon, telle que la pratique une agence d’analyse marketing, commence par quatre chiffres pour chaque produit : les sessions, le taux de conversion, la détention de l’Offre en vedette et votre coût publicitaire des ventes (ACOS). Ensemble, ils montrent si le problème vient du fait d’être trouvé, d’être choisi ou de trop dépenser en publicité. Vérifiez-les chaque semaine, comparez-les à la semaine précédente et ne changez qu’une chose à la fois.",
  description,
  image: {
    src: "/img/amazon-data-analysis.jpg",
    alt: "iMac affichant un tableau de bord d’une boutique Amazon : ventes, commandes, taux de conversion, ACOS, Offre en vedette et campagnes publicitaires",
    tile: "bg-royal",
  },
  updated: "2026-11-16",
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
      heading: "Analyse de données Amazon : les quatre chiffres qui comptent le plus",
      body: (
        <>
          <p>
            Seller Central regorge de rapports, mais une agence d’analyse marketing commence par quatre chiffres pour chaque produit. Les sessions indiquent combien d’acheteurs ont visité la page, donc si l’on vous trouve. Le taux de conversion est la part de ces visites qui ont abouti à une commande, donc si la fiche convainc.
          </p>
          <p>
            L’Offre en vedette est l’offre placée à côté du bouton Acheter maintenant, et Amazon indique que le prix, la disponibilité et la livraison comptent pour{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              remporter l’Offre en vedette
            </a>
            , ce qui peut fortement augmenter les ventes. L’ACOS correspond aux dépenses publicitaires divisées par le chiffre d’affaires publicitaire, et Amazon Ads précise que votre{" "}
            <a href={ACOS} target="_blank" rel="noopener noreferrer">
              ACOS doit rester inférieur à votre marge
            </a>{" "}
            pour que la publicité reste rentable.
          </p>
          <blockquote>Quatre chiffres, vérifiés chaque semaine, montrent où se perdent les ventes.</blockquote>
        </>
      ),
    },
    {
      id: "what-they-mean",
      heading: "Ce que les chiffres disent à une agence d’analyse marketing",
      body: (
        <>
          <p>
            Lus ensemble, les quatre chiffres désignent un problème à la fois. Peu de sessions signifient que les acheteurs ne trouvent pas le produit : les mots-clés du titre, des puces et des termes de recherche passent en premier. Beaucoup de sessions et une conversion faible signifient qu’ils arrivent sans acheter, et notre{" "}
            <Link href={p("/services/listing-optimization")}>service SEO et optimisation des fiches Amazon</Link> est conçu pour ce cas.
          </p>
          <p>
            Si vous perdez l’Offre en vedette, comparez votre prix, votre stock et votre livraison aux autres offres du même produit. Si votre ACOS dépasse votre marge, la publicité perd de l’argent : mettez en pause les termes de recherche qui dépensent sans vendre avant d’augmenter un budget.
          </p>
        </>
      ),
    },
    {
      id: "where-to-find",
      heading: "Où trouver vos données Amazon dans Seller Central",
      body: (
        <>
          <p>
            Les rapports d’activité, dans le menu Rapports de Seller Central, montrent sessions, pages vues et ventes pour chaque produit. Les marques inscrites au Brand Registry ont aussi Brand Analytics, dont le{" "}
            <a href={BRAND_ANALYTICS} target="_blank" rel="noopener noreferrer">
              tableau Search Query Performance
            </a>{" "}
            montre impressions, clics et ajouts au panier pour les recherches qui mènent à vos produits. Les rapports publicitaires, dans le gestionnaire de campagnes, montrent dépenses, ventes, clics et ACOS par campagne et par terme de recherche.
          </p>
          <p>
            Profit Analytics, aussi dans Seller Central, montre ce qu’Amazon vous facture pour chaque produit. Les frais changent chaque année : lisez{" "}
            <Link href={p("/blog/amazon-fba-fees-2027")}>ce qui change dans les frais Amazon FBA en 2027</Link> avant de fixer vos prix. Tenez enfin votre propre tableau, une ligne par semaine et par produit, pour voir les tendances qu’un seul rapport cache.
          </p>
        </>
      ),
    },
    {
      id: "weekly-routine",
      heading: "Une routine hebdomadaire de suivi Amazon facile à tenir",
      body: (
        <>
          <p>
            L’analyse de données Amazon marche mieux comme une habitude. Choisissez un jour par semaine et sortez toujours les mêmes rapports, puis comparez chaque chiffre à la semaine précédente et à la même semaine le mois dernier.
          </p>
          <p>
            Notez chaque changement, comme le prix, les images ou les enchères, et sa date. Choisissez ensuite un problème à régler cette semaine et vérifiez le résultat la semaine suivante. Une correction à la fois semble plus lent, mais c’est la seule façon de savoir ce qui a marché.
          </p>
        </>
      ),
    },
    {
      id: "analytics-service",
      heading: "Ce que fait notre agence d’analyse marketing pour les vendeurs Amazon",
      figure: {
        src: "/img/amazon-data-analysis.jpg",
        alt: "iMac affichant les chiffres Amazon hebdomadaires que suit une agence d’analyse marketing : ventes, conversion, ACOS, Offre en vedette, ventes par produit et campagnes publicitaires",
        width: 1600,
        height: 900,
        caption: "Données d’exemple, pas des chiffres de clients. Photo : Amy Hirschi, Unsplash.",
      },
      body: (
        <>
          <p>
            Voyez-la comme une agence d’analyse web pour votre boutique Amazon : la même rigueur, appliquée aux rapports qu’Amazon vous donne. Notre service d’analyse marketing suit quatre étapes, un produit à la fois.
          </p>
          <p>
            Nous sortons d’abord les quatre chiffres de chaque produit et préparons un tableau lisible en quelques minutes. Nous repérons ensuite où se perdent les ventes : être trouvé, être choisi ou dépenses publicitaires. Nous convenons d’une correction pour la semaine et, la semaine suivante, vérifions qu’elle a marché avant de continuer.
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
