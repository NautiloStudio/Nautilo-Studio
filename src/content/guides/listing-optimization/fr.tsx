import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const PRODUCT_LISTINGS = "https://sell.amazon.com/blog/amazon-product-listings";
const PRODUCT_PHOTOS = "https://sell.amazon.com/blog/product-photos";
const A_PLUS = "https://sell.amazon.com/tools/a-content";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const p = (path: string) => localePath("fr", path);

const title = "Agence d’optimisation de conversion Amazon | Nautilo Studio";
const description =
  "Nautilo Studio, agence d’optimisation du taux de conversion des vendeurs Amazon aux États-Unis : titres, images et A+ qui font acheter. Audit gratuit.";

const page: GuideCopy["page"] = {
  slug: "listing-optimization",
  breadcrumb: "Optimisation des fiches Amazon",
  question: "Agence d’optimisation du taux de conversion Amazon : des visites aux ventes",
  answer:
    "L’optimisation des fiches Amazon, le métier d’une agence d’optimisation du taux de conversion, consiste à améliorer le titre, les puces, les images et le contenu A+ pour que les acheteurs qui arrivent sur votre page choisissent d’acheter. Commencez par des images claires et un titre qui dit exactement ce qu’est le produit, puis servez-vous des puces pour répondre aux questions que les acheteurs se posent avant de commander. Testez un changement à la fois et gardez la version qui vend le mieux.",
  description,
  image: {
    src: "/img/amazon-listing-optimization.jpg",
    alt: "MacBook affichant la page produit Amazon d’une planche à découper en bambou, avec le titre, l’image principale, les puces et le contenu A+ modifiés et signalés",
    tile: "bg-apricot",
  },
  updated: "2026-11-16",
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
      heading: "Optimisation des fiches Amazon : ce qui fait acheter",
      body: (
        <>
          <p>
            Quand un acheteur arrive sur votre page produit, quatre éléments décident s’il achète : le titre, les images, les puces et le contenu A+. Une agence d’optimisation du taux de conversion travaille sur les quatre, car chacun répond à une question différente de l’acheteur.
          </p>
          <p>
            Le titre dit ce qu’est le produit, puis la marque et les détails que l’on compare, comme la taille ou la couleur. Les images font le travail d’un comptoir de magasin : Amazon vous permet de{" "}
            <a href={PRODUCT_LISTINGS} target="_blank" rel="noopener noreferrer">
              publier jusqu’à neuf photos
            </a>
            , et ses conseils recommandent un fond blanc avec un produit qui{" "}
            <a href={PRODUCT_PHOTOS} target="_blank" rel="noopener noreferrer">
              occupe 85 % ou plus du cadre
            </a>
            . Les cinq puces donnent chacune un bénéfice, appuyé par un fait vérifiable. Le contenu A+ ajoute images et texte sous la fiche pour les marques inscrites au Brand Registry, et Amazon indique que{" "}
            <a href={A_PLUS} target="_blank" rel="noopener noreferrer">
              le contenu A+ de base peut augmenter les ventes jusqu’à 8 %
            </a>
            , d’après ses données internes.
          </p>
          <blockquote>L’acheteur ne peut pas toucher votre produit. Votre fiche doit le faire à sa place.</blockquote>
        </>
      ),
    },
    {
      id: "signs",
      heading: "Optimisation de la conversion : les signes qu’une fiche doit évoluer",
      body: (
        <>
          <p>
            Amazon donne un exemple simple :{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              une fiche très vue mais peu vendue
            </a>{" "}
            a sans doute besoin de meilleures images ou descriptions. Beaucoup de visites et peu de commandes signifient qu’on vous trouve sans être convaincu : les images, les puces et le contenu A+ passent en premier.
          </p>
          <p>
            Peu de visites signalent un autre problème : les acheteurs ne trouvent pas la fiche, et notre{" "}
            <Link href={p("/services/amazon-seo")}>service SEO B2B pour vendeurs Amazon</Link> est le meilleur point de départ. Deux autres signes comptent. Si les avis et les questions répètent le même doute, répondez-y dans les puces ou les images. Et les retours pour « non conforme à la description » montrent que la fiche promet ce que le produit ne tient pas : corrigez le texte avant de dépenser plus en trafic.
          </p>
        </>
      ),
    },
    {
      id: "testing",
      heading: "Comment une agence d’optimisation de la conversion teste ce qui marche",
      body: (
        <>
          <p>
            Une bonne optimisation du taux de conversion ne change qu’une chose à la fois. Choisissez un élément, comme l’image principale ou le titre, et ne modifiez que lui, pour savoir ce qui a fait la différence.
          </p>
          <p>
            Si votre marque est inscrite au Brand Registry, l’outil{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              Manage Your Experiments
            </a>{" "}
            d’Amazon montre deux versions aux acheteurs et compare les résultats. Laissez le test tourner assez longtemps pour réunir de vraies commandes, pas seulement quelques jours, gardez la version gagnante et passez à l’élément suivant.
          </p>
        </>
      ),
    },
    {
      id: "mistakes",
      heading: "Les erreurs de fiche Amazon qui empêchent l’achat",
      body: (
        <>
          <p>
            Les images floues ou sombres sont l’erreur la plus fréquente : l’acheteur ne peut pas toucher le produit, les photos doivent donc le faire. Juste derrière viennent les caractéristiques sans bénéfice. « Acier inoxydable » parle davantage si vous dites qu’il garde les boissons au frais.
          </p>
          <p>
            Les promesses impossibles à prouver entraînent retours et mauvais avis, et peuvent enfreindre les règles d’Amazon. Les détails incohérents nuisent aussi : titre, puces et images doivent décrire la même taille, la même couleur et le même contenu. Les mots que cherchent les acheteurs vont dans le texte visible et dans les termes de recherche cachés, et notre guide pas à pas pour{" "}
            <Link href={p("/blog/amazon-backend-keywords")}>remplir les mots-clés backend Amazon</Link> couvre le second point.
          </p>
        </>
      ),
    },
    {
      id: "cro-service",
      heading: "Ce que fait notre agence d’optimisation de la conversion pour les vendeurs Amazon",
      figure: {
        src: "/img/amazon-listing-optimization.jpg",
        alt: "MacBook affichant une fiche Amazon avec cinq modifications signalées (titre, image principale, puces, contenu A+ et termes de recherche) : le travail d’une agence d’optimisation de la conversion",
        width: 1600,
        height: 900,
        caption: "Fiche d’exemple avec nos cinq changements signalés. Illustration, pas une fiche client. Photo : Kari Shea, Unsplash.",
      },
      body: (
        <>
          <p>
            Voyez-le comme une optimisation des fiches Amazon avec un test derrière chaque changement. Notre service d’optimisation du taux de conversion suit quatre étapes, une fiche à la fois.
          </p>
          <p>
            Nous lisons d’abord votre fiche comme un acheteur et notons ce qui manque ou n’est pas clair. Nous réécrivons ensuite le titre et les puces pour que chacune réponde à une question d’acheteur, et nous préparons le brief des nouvelles images et du contenu A+ là où ils aident le plus. Enfin, nous testons un changement à la fois et gardons la version qui vend le mieux.
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
