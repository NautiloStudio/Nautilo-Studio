import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const PRODUCT_LISTINGS = "https://sell.amazon.com/blog/amazon-product-listings";
const PRODUCT_PHOTOS = "https://sell.amazon.com/blog/product-photos";
const A_PLUS = "https://sell.amazon.com/tools/a-content";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const p = (path: string) => localePath("fr", path);

const title = "Optimisation de fiche produit Amazon | Nautilo Studio";
const description =
  "Comment optimiser une fiche Amazon pour que plus de visiteurs achètent : titre, puces, images, contenu A+ et tests. Guide PDF gratuit et audit offert.";

const page: GuideCopy["page"] = {
  slug: "listing-optimization",
  breadcrumb: "Optimisation des fiches",
  question: "Comment optimiser une fiche Amazon pour que plus d’acheteurs achètent ?",
  answer:
    "Optimiser une fiche, c’est améliorer le titre, les puces, les images et le contenu A+ pour que les acheteurs qui arrivent sur votre page choisissent d’acheter. Commencez par des images claires et un titre qui dit exactement ce qu’est le produit, puis servez-vous des puces pour répondre aux questions que les acheteurs se posent avant de commander. Testez un changement à la fois et gardez la version qui vend le mieux.",
  description,
  image: {
    src: "/img/service-listing.jpg",
    alt: "Planche à découper en bambou avec une étiquette en papier vierge",
    tile: "bg-apricot",
  },
  updated: "2026-11-07",
  facts: [
    { value: 9, label: "Photos qu’Amazon vous permet d’ajouter" },
    { value: 85, suffix: " %", label: "Du cadre que le produit devrait remplir" },
    { value: 5, label: "Puces par fiche" },
    {
      value: 8,
      prefix: "Jusqu’à ",
      suffix: " %",
      label: "De ventes en plus qu’Amazon attribue au contenu A+ de base",
    },
  ],
  sections: [
    {
      id: "what-matters",
      heading: "Quelles parties d’une fiche Amazon comptent le plus ?",
      body: (
        <ul>
          <li>
            <strong>Titre.</strong> Dites ce qu’est le produit, puis la marque et les détails que les
            acheteurs comparent, comme la taille ou la couleur. Notre{" "}
            <Link href={p("/amazon-seo")}>guide SEO Amazon</Link> explique quels mots utiliser.
          </li>
          <li>
            <strong>Images.</strong> Amazon vous permet{" "}
            <a href={PRODUCT_LISTINGS} target="_blank" rel="noopener noreferrer">
              d’ajouter jusqu’à neuf photos
            </a>
            . Ses conseils photo recommandent un fond blanc et un produit qui{" "}
            <a href={PRODUCT_PHOTOS} target="_blank" rel="noopener noreferrer">
              remplit au moins 85 % du cadre
            </a>
            .
          </li>
          <li>
            <strong>Puces.</strong> Vous en avez jusqu’à cinq. Donnez à chacune un seul avantage,
            appuyé par un fait que l’acheteur peut vérifier.
          </li>
          <li>
            <strong>Contenu A+.</strong> Des images et du texte en plus sous la fiche, pour les
            marques inscrites au Registre des marques. Amazon indique que{" "}
            <a href={A_PLUS} target="_blank" rel="noopener noreferrer">
              le contenu A+ de base peut augmenter les ventes jusqu’à 8 %
            </a>
            , d’après ses données internes.
          </li>
        </ul>
      ),
    },
    {
      id: "signs",
      heading: "Comment savoir qu’une fiche doit être retravaillée ?",
      body: (
        <>
          <p>
            Amazon donne un exemple simple :{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              une fiche très consultée mais qui vend peu
            </a>{" "}
            a peut-être besoin de meilleures images ou descriptions.
          </p>
          <ul>
            <li>
              <strong>Beaucoup de visites, peu de commandes.</strong> Les acheteurs vous trouvent mais
              ne sont pas convaincus. Travaillez les images, les puces et le contenu A+.
            </li>
            <li>
              <strong>Peu de visites.</strong> Les acheteurs ne trouvent pas la fiche. Commencez plutôt
              par le <Link href={p("/amazon-seo")}>SEO Amazon</Link>.
            </li>
            <li>
              <strong>Les mêmes questions reviennent.</strong> Si les avis et les questions des clients
              répètent un doute, répondez-y dans vos puces ou vos images.
            </li>
            <li>
              <strong>Des retours pour « non conforme à la description ».</strong> La fiche
              promet quelque chose que le produit ne tient pas. Corrigez le texte avant de dépenser
              plus en trafic.
            </li>
          </ul>
          <p>
            Vous ne savez pas quels chiffres regarder ? Notre{" "}
            <Link href={p("/data-analysis")}>guide d’analyse de données</Link> les explique.
          </p>
        </>
      ),
    },
    {
      id: "testing",
      heading: "Comment tester ce qui fonctionne ?",
      body: (
        <ol>
          <li>Choisissez un élément, comme l’image principale ou le titre. Ne changez que lui.</li>
          <li>
            Si votre marque est inscrite au Registre des marques, utilisez{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              Gérer vos expériences
            </a>{" "}
            d’Amazon pour montrer deux versions aux acheteurs et comparer les résultats.
          </li>
          <li>Laissez le test durer assez longtemps pour réunir de vraies commandes, pas quelques jours.</li>
          <li>Gardez la version gagnante, puis passez à l’élément suivant.</li>
        </ol>
      ),
    },
    {
      id: "mistakes",
      heading: "Quelles erreurs empêchent les acheteurs d’acheter ?",
      body: (
        <ul>
          <li>
            <strong>Des images floues ou sombres.</strong> L’acheteur ne peut pas toucher le
            produit, alors les photos doivent le faire pour lui.
          </li>
          <li>
            <strong>Des caractéristiques sans bénéfices.</strong> « Acier inoxydable » parle
            davantage si vous dites que la boisson reste fraîche.
          </li>
          <li>
            <strong>Des promesses que vous ne pouvez pas prouver.</strong> Elles entraînent des
            retours et de mauvais avis, et peuvent enfreindre les règles d’Amazon.
          </li>
          <li>
            <strong>Des détails qui ne concordent pas.</strong> Le titre, les puces et les images
            doivent décrire la même taille, la même couleur et le même contenu.
          </li>
        </ul>
      ),
    },
  ],
  faqs: [
    {
      question: "Combien d’images une fiche Amazon devrait-elle avoir ?",
      answer:
        "Amazon vous permet d’ajouter jusqu’à neuf photos et dit que plus il y en a, mieux c’est. Commencez par une image principale nette sur fond blanc, puis ajoutez d’autres angles, le produit en situation et sa taille.",
    },
    {
      question: "Le contenu A+ vaut-il la peine ?",
      answer:
        "En général oui, si vous y avez accès. Amazon indique que le contenu A+ de base peut augmenter les ventes jusqu’à 8 %, d’après ses données internes. Il est gratuit pour les marques éligibles inscrites au Registre des marques.",
    },
    {
      question: "Quelle différence entre l’optimisation des fiches et le SEO Amazon ?",
      answer:
        "Le SEO Amazon aide les acheteurs à trouver votre fiche. L’optimisation aide ceux qui arrivent à décider d’acheter. Il vous faut les deux, et les ventes d’une meilleure fiche soutiennent aussi votre classement.",
    },
    {
      question: "Nautilo Studio peut-il vérifier ma fiche ?",
      answer:
        "Oui. Envoyez-nous le lien d’une fiche Amazon via le formulaire d’audit gratuit de cette page et nous vous écrirons ce que nous améliorerions en premier.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
