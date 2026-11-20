import Link from "next/link";
import ListingFieldMap from "@/components/ListingFieldMap";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const AMAZON_SEO_GUIDE = "https://sell.amazon.com/blog/amazon-seo";
const TITLE_RULES = "https://sellercentral.amazon.com/gp/help/external/GYTR6SYGFA5E3EQC";
const SEARCH_TERMS_HELP = "https://sellercentral.amazon.com/help/hub/reference/external/G23501";
const PRODUCT_LISTINGS = "https://sell.amazon.com/blog/amazon-product-listings";
const PRODUCT_PHOTOS = "https://sell.amazon.com/blog/product-photos";
const A_PLUS = "https://sell.amazon.com/tools/a-content";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";
const EXPERIMENTS = "https://sell.amazon.com/tools/manage-your-experiments";

const p = (path: string) => localePath("fr", path);
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const title = "SEO Amazon et optimisation des fiches | Nautilo Studio";
const description =
  "SEO Amazon et optimisation des fiches pour les vendeurs aux États-Unis : être trouvé sur les recherches de vos clients, puis choisi. Demandez un audit gratuit.";

const page: GuideCopy["page"] = {
  slug: "listing-optimization",
  breadcrumb: "SEO et optimisation des fiches",
  question: "SEO Amazon et optimisation des fiches : être trouvé, puis être choisi",
  answer:
    "Le SEO Amazon fait apparaître votre produit quand les acheteurs cherchent. L’optimisation des fiches les pousse à le choisir quand ils le voient. Sur Amazon, les deux se jouent sur la même page : le titre, les puces, les images, le contenu A+ et les termes de recherche cachés décident de votre classement et de l’achat. Placez les mots que tapent vos acheteurs là où Amazon les lit, rendez la fiche convaincante, puis testez un changement à la fois. Les ventes qu’apporte une meilleure fiche l’aident aussi à monter.",
  description,
  image: {
    src: "/img/amazon-listing-optimization.jpg",
    alt: "iMac sur un bureau affichant une fiche Amazon optimisée d’une planche à découper en bambou, marquée « être choisi », à côté des résultats de recherche où elle arrive en première position et de son classement par mot-clé, marqués « être trouvé »",
    tile: "bg-apricot",
  },
  updated: "2026-11-20",
  facts: [
    { value: 200, label: "Caractères autorisés dans un titre, selon le guide SEO d’Amazon" },
    { value: 60, label: "Caractères qu’Amazon recommande pour un titre" },
    { value: 9, label: "Photos qu’Amazon vous laisse ajouter" },
    { value: 20, suffix: " %", label: "Hausse des ventes maximale qu’Amazon attribue au contenu optimisé" },
  ],
  sections: [
    {
      id: "found-then-chosen",
      heading: "Comment Amazon fonctionne pour les vendeurs : être trouvé, puis être choisi",
      body: (
        <>
          <p>Deux choses doivent se produire avant qu’une recherche devienne une vente. Amazon doit afficher votre produit pour les mots tapés par l’acheteur, et l’acheteur doit le préférer aux autres résultats de la page. La première, c’est le SEO Amazon. La seconde, l’optimisation des fiches. Sur Amazon, elles portent sur la même page, alors nous les traitons comme un seul travail.</p>
          <p>
            {"Être trouvé commence par la pertinence : si un mot recherché n’apparaît ni dans votre titre, ni dans vos puces, ni dans la description, ni dans les termes de recherche cachés, le produit s’affiche rarement pour lui. Être choisi dépend de ce que l’acheteur voit ensuite : l’image principale, le titre, le prix, les avis et la Featured Offer. Les deux se nourrissent. Le guide SEO d’Amazon indique que "}
            <a href={AMAZON_SEO_GUIDE} {...ext}>la qualité de la fiche et la santé du compte peuvent contribuer au classement</a>
            {", et que de meilleures photos et de meilleurs prix peuvent aider un produit à monter dans les résultats de façon organique. Une fiche qui vend monte, et une fiche qui monte est vue par plus d’acheteurs."}
          </p>
          <ListingFieldMap
            caption={"Votre fiche, champ par champ"}
            labels={{ found: "Être trouvé", chosen: "Être choisi" }}
            rows={[
              { field: "Titre", text: "Les mots qu’Amazon pèse le plus, et la première chose que lit l’acheteur.", effect: "both" },
              { field: "Puces", text: "Des mots-clés secondaires pour la recherche, et des raisons d’acheter pour l’acheteur.", effect: "both" },
              { field: "Termes de recherche", text: "Synonymes et fautes de frappe que l’acheteur ne voit jamais.", effect: "found" },
              { field: "Images", text: "Le comptoir du magasin : forme, taille et produit en situation.", effect: "chosen" },
              { field: "Contenu A+", text: "Des images plus grandes et des comparatifs sous la fiche.", effect: "chosen" },
            ]}
          />
          <blockquote>La pertinence vous fait apparaître. Les ventes vous y maintiennent.</blockquote>
        </>
      ),
    },
    {
      id: "keyword-research",
      heading: "Recherche de mots-clés Amazon : les mots que tapent vos acheteurs",
      body: (
        <>
          <p>Les bons mots-clés viennent de ce que les acheteurs tapent vraiment, pas de suppositions. Le plus rapide est la barre de recherche d’Amazon : tapez le mot principal de votre produit et notez les suggestions, car elles viennent de vraies recherches.</p>
          <p>Seller Central ajoute des données gratuites. Product Opportunity Explorer montre les termes les plus recherchés d’une niche. Brand Analytics montre quelles recherches mènent à des clics et à des ventes pour les marques enregistrées. Si vous faites déjà du Sponsored Products, son rapport des termes de recherche liste les recherches exactes qui vous ont amené des acheteurs. Triez ce que vous trouvez selon la précision avec laquelle il décrit votre produit, pas seulement selon le volume : une recherche précise avec moins d’acheteurs vend souvent mieux qu’une recherche large.</p>
          <p>Cette liste nourrit ensuite chaque champ de la carte ci-dessus. Les deux ou trois recherches les plus importantes vont dans le titre, les suivantes dans les puces, et les synonymes qui ne trouvent pas d’autre place dans les termes de recherche cachés.</p>
        </>
      ),
    },
    {
      id: "title",
      heading: "Le titre Amazon : là où se rencontrent le classement et les clics",
      body: (
        <>
          <p>
            {"Le titre est le seul champ qui travaille autant pour la recherche que pour l’acheteur, et c’est pourquoi il est si facile de se tromper. Amazon autorise "}
            <a href={AMAZON_SEO_GUIDE} {...ext}>jusqu’à 200 caractères et en recommande 60 ou moins</a>
            {", et ses "}
            <a href={TITLE_RULES} {...ext}>règles sur les titres</a>
            {" autorisent le même mot deux fois au maximum."}
          </p>
          <p>Un titre bourré de mots-clés peut correspondre à plus de recherches, mais il se lit comme une liste et perd le clic face à un concurrent plus clair. Les téléphones coupent les titres longs : ce qu’est le produit doit donc venir dans les premiers mots, suivi de la marque et des détails que les acheteurs comparent, comme la taille, la matière ou la quantité. Écrivez-le d’abord pour l’acheteur, puis vérifiez que vos recherches principales y sont.</p>
        </>
      ),
    },
    {
      id: "images-bullets-a-plus",
      heading: "Images, puces et contenu A+ : transformer une visite en commande",
      body: (
        <>
          <p>
            {"Quand un acheteur ouvre votre page, le reste de la fiche doit répondre aux questions qu’il poserait en magasin. Amazon vous laisse "}
            <a href={PRODUCT_LISTINGS} {...ext}>ajouter jusqu’à neuf photos</a>
            {", et ses conseils photo recommandent un fond blanc avec le produit "}
            <a href={PRODUCT_PHOTOS} {...ext}>occupant 85 % du cadre ou plus</a>
            {". Après l’image principale, montrez le produit sous d’autres angles, en situation et à côté d’un objet qui donne sa taille."}
          </p>
          <p>
            {"Les cinq puces donnent chacune un bénéfice, appuyé par un fait vérifiable, et accueillent naturellement les mots-clés qui n’entraient pas dans le titre. « Acier inoxydable » parle davantage quand vous ajoutez qu’il garde la boisson fraîche toute la journée. Le contenu A+ ajoute des images et des tableaux comparatifs sous la fiche pour les marques inscrites au Brand Registry, et Amazon indique que "}
            <a href={A_PLUS} {...ext}>le contenu A+ de base peut augmenter les ventes jusqu’à 8 %</a>
            {", selon ses données internes. Les termes de recherche cachés rassemblent synonymes et fautes de frappe, sans répétitions, noms de marque ni ASIN : vérifiez la "}
            <a href={SEARCH_TERMS_HELP} {...ext}>limite de longueur actuelle</a>
            {" et suivez notre guide pour "}
            <Link href={p("/blog/amazon-backend-keywords")}>remplir les mots-clés cachés d’Amazon</Link>.
          </p>
        </>
      ),
    },
    {
      id: "warning-signs",
      heading: "Les signes que votre fiche perd des places, des ventes ou les deux",
      body: (
        <>
          <p>
            {"Vos chiffres vous disent quelle moitié du travail demande de l’attention. Peu d’impressions et peu de visites : les acheteurs ne vous trouvent pas, commencez par les mots-clés et le titre. Beaucoup de visites et peu de commandes : ils vous trouvent mais ne sont pas convaincus. Amazon donne lui-même cet exemple : "}
            <a href={BOOST_LISTINGS} {...ext}>une fiche très vue mais peu vendue</a>
            {" peut avoir besoin de meilleures images ou descriptions."}
          </p>
          <p>Certains signes concernent les deux. Des avis et des questions qui répètent le même doute montrent que la fiche n’y répond pas, et des retours « non conforme à la description » montrent que la fiche promet ce que le produit ne tient pas. Corrigez le texte avant d’amener plus de trafic.</p>
          <p>Les erreurs courantes viennent des mêmes endroits : un titre bourré de mots-clés, des marques concurrentes (Amazon ne les autorise ni dans la fiche ni dans les termes de recherche), un titre, des puces et des images qui décrivent des tailles ou des contenus différents, et tout changer d’un coup, si bien que personne ne sait quel changement a aidé.</p>
        </>
      ),
    },
    {
      id: "seo-listing-service",
      heading: "Ce que comprend notre service SEO Amazon et optimisation des fiches",
      figure: {
        src: "/img/amazon-listing-optimization.jpg",
        alt: "iMac sur un bureau affichant une fiche Amazon avec cinq modifications signalées, les résultats de recherche pour « bamboo cutting board » et le classement par mot-clé avant et après",
        width: 1600,
        height: 1000,
        caption: "Fiche d’exemple avec nos modifications signalées, ses résultats de recherche et son classement. Illustration avec des données d’exemple, pas la fiche d’un client. Photo : Amy Hirschi, Unsplash.",
      },
      body: (
        <>
          <p>Nous travaillons une fiche à la fois et la regardons deux fois : une fois comme la recherche d’Amazon, une fois comme un acheteur.</p>
          <p>D’abord, nous cherchons ce que vos acheteurs tapent vraiment, avec les outils d’Amazon. Ensuite, nous réécrivons le titre et les puces pour que les mots-clés principaux arrivent en premier et que chaque ligne réponde encore à une question d’acheteur, et nous remplissons les termes de recherche cachés dans le respect des règles d’Amazon. Puis nous préparons le brief des nouvelles images et du contenu A+ là où ils aident le plus.</p>
          <p>
            {"Enfin, nous testons. Si votre marque est inscrite au Brand Registry, "}
            <a href={EXPERIMENTS} {...ext}>Manage Your Experiments</a>
            {" d’Amazon montre deux versions d’un titre, d’une image, des puces ou du contenu A+ aux acheteurs et compare les résultats ; Amazon indique que le contenu optimisé peut aider à augmenter les ventes jusqu’à 20 %. Nous changeons une chose à la fois et suivons classement et ventes avec notre "}
            <Link href={p("/services/data-analysis")}>service d’analyse de données Amazon</Link>.
          </p>
          <p>
            {"Le travail est fait par notre équipe à Barcelone. "}
            <Link href={p("/about")}>Découvrez l’équipe de Nautilo Studio</Link>.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: "Pourquoi associer SEO Amazon et optimisation des fiches ?",
      answer:
        "Parce qu’ils portent sur les mêmes champs et se nourrissent. Les mots-clés amènent les acheteurs sur la fiche, la fiche les transforme en commandes, et ces ventes aident le produit à se classer.",
    },
    {
      question: "Combien de temps avant de voir l’effet sur le classement et les ventes ?",
      answer:
        "Le classement suit les ventes : jugez un changement sur plusieurs semaines plutôt que sur quelques jours. Changez une chose à la fois pour savoir ce qui a fait la différence.",
    },
    {
      question: "Faut-il payer des publicités pour se classer sur Amazon ?",
      answer:
        "Non. Amazon indique que Sponsored Products peut aider les offres à monter dans les résultats, mais une fiche pertinente et convaincante passe avant, et elle rend chaque publicité plus efficace. Nous nous concentrons sur la fiche et la recherche organique, pas sur la gestion de campagnes publicitaires.",
    },
    {
      question: "Nautilo Studio peut-il auditer ma fiche ?",
      answer:
        "Oui. Envoyez-nous une fiche Amazon via le formulaire d’audit gratuit de cette page et nous vous dirons par e-mail ce que nous améliorerions en premier, pour la recherche et pour les ventes.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
