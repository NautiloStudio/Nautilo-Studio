import Link from "next/link";
import { localePath } from "@/i18n/config";
import { SearchTermsFigure } from "@/components/BlogFigures";
import type { BlogPost } from "../types";
import { heroPhoto } from "./media";

const AMAZON_SEO_GUIDE = "https://sell.amazon.com/blog/amazon-seo";
const PRODUCT_LISTINGS = "https://sell.amazon.com/blog/amazon-product-listings";
const p = (path: string) => localePath("fr", path);

const post: BlogPost = {
  slug: "amazon-backend-keywords",
  title: "Mots-clés backend Amazon : comment bien les remplir",
  description:
    "Mots-clés backend Amazon : quoi mettre dans le champ des termes de recherche, quoi éviter et un exemple concret. Lisez-le, puis demandez un audit gratuit.",
  h1: "Mots-clés backend Amazon : comment remplir vos termes de recherche",
  breadcrumb: "Mots-clés backend Amazon",
  keyword: "mots-clés backend amazon",
  excerpt:
    "Ce qui va dans le champ caché des termes de recherche, ce qu’il faut éviter et un exemple concret à reprendre pour votre fiche.",
  published: "2026-11-10",
  updated: "2026-11-10",
  readMinutes: 9,
  hero: { ...heroPhoto, alt: "Loupe tenue au-dessus du clavier d’un ordinateur portable" },
  intro: (
    <>
      <p>
        Les <strong>mots-clés backend Amazon</strong> sont les mots que vous donnez à Amazon dans le
        champ des termes de recherche de votre fiche. Les acheteurs ne les voient jamais, mais Amazon
        les lit pour décider dans quelles recherches votre produit peut apparaître. Bien utilisés, ils
        couvrent les synonymes, les autres noms du produit et les fautes de frappe courantes sans
        surcharger le titre.
      </p>
      <p>
        Ce guide explique ce qu’est ce champ, pourquoi il compte encore, comment trouver les bons mots
        et comment les écrire, avec un exemple concret à la fin. Si le sujet est nouveau pour vous,
        commencez par notre <Link href={p("/services/amazon-seo")}>guide du SEO sur Amazon</Link>, qui montre
        comment Amazon classe les produits.
      </p>
    </>
  ),
  sections: [
    {
      id: "what-are-backend-keywords",
      heading: "Que sont les mots-clés backend Amazon ?",
      body: (
        <>
          <p>
            Chaque fiche Amazon contient du texte visible, comme le titre, les puces et la
            description, et des champs cachés que seul Amazon lit. Le champ des termes de recherche
            en fait partie. Les vendeurs appellent souvent son contenu mots-clés backend ou termes de
            recherche backend.
          </p>
          <p>
            Voyez-le comme une courte liste d’autres façons dont un acheteur pourrait décrire votre
            produit. Si quelqu’un cherche un mot présent dans vos mots-clés backend, votre produit peut
            être pris en compte pour cette recherche, même si le mot n’apparaît nulle part sur la page.
          </p>
          <h3>Où trouver le champ des termes de recherche</h3>
          <p>
            Dans Seller Central, ouvrez la fiche à modifier et allez dans la section mots-clés des
            détails du produit. Vous y verrez un champ appelé termes de recherche. Ce que vous y
            changez ne modifie rien de ce que voient les acheteurs : c’est un bon endroit pour tester.
          </p>
          <h3>La différence avec le titre</h3>
          <p>
            Le titre doit se lire facilement : c’est la première chose que voit l’acheteur, et Amazon
            en encadre la longueur et la formulation. Les mots-clés backend n’ont pas de lecteur, ils
            peuvent donc être une simple liste de mots. C’est tout l’intérêt : le titre porte vos mots
            les plus importants, le champ backend récupère tout le reste.
          </p>
        </>
      ),
    },
    {
      id: "why-they-matter",
      heading: "Pourquoi les mots-clés backend comptent encore",
      body: (
        <>
          <p>
            Certains vendeurs pensent que le champ caché ne sert plus à rien depuis des années. Amazon
            dit le contraire : son propre guide vendeur sur la recherche indique que{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              les mots-clés backend peuvent encore aider un produit à se classer sur des recherches
              précises
            </a>
            .
          </p>
          <p>
            À eux seuls, ils ne feront pas remonter une fiche faible. Amazon tient toujours compte de
            la pertinence du produit, de la fréquence des clics et des achats, et des ventes dans la
            durée. Ce champ élargit l’ensemble des recherches où vous pouvez apparaître. Impossible de
            vous classer sur une recherche pour laquelle vous n’êtes pas éligible.
          </p>
          <p>
            C’est donc l’une des améliorations les moins chères : quelques minutes pour les écrire,
            aucun coût, et rien ne change dans ce que voient les acheteurs.
          </p>
        </>
      ),
    },
    {
      id: "find-backend-keywords",
      heading: "Comment trouver des mots-clés backend pour votre produit",
      body: (
        <>
          <p>
            Les bons mots-clés backend viennent de ce que les acheteurs tapent vraiment, pas du nom que
            vous donnez au produit en interne. Utilisez plusieurs sources, puis gardez seulement les
            mots qui ne sont pas déjà dans votre titre et vos puces.
          </p>
          <h3>Commencez par la barre de recherche d’Amazon</h3>
          <p>
            Tapez le mot principal de votre produit sur Amazon et notez les suggestions. Elles viennent
            de vraies recherches et révèlent souvent d’autres noms auxquels vous n’aviez pas pensé,
            comme « flask » pour une gourde ou « chopping board » pour une planche à découper.
          </p>
          <h3>Utilisez Product Opportunity Explorer</h3>
          <p>
            Product Opportunity Explorer, dans Seller Central, montre les principaux termes de
            recherche et l’évolution des volumes d’une niche. Cherchez des termes proches de votre
            produit que vous n’avez pas encore utilisés dans la fiche.
          </p>
          <h3>Exploitez le rapport des termes de recherche Sponsored Products</h3>
          <p>
            Si vous faites de la publicité Sponsored Products, le rapport des termes de recherche
            liste les recherches exactes qui ont mené les acheteurs à vos annonces, y compris celles
            qui ont abouti à une vente. Les termes qui convertissent mais manquent dans votre fiche
            sont de bons candidats pour le backend.
          </p>
          <h3>Consultez Brand Analytics si votre marque est enregistrée</h3>
          <p>
            Les marques du Registre des marques ont accès à Brand Analytics. Son tableau de bord Search
            Query Performance montre quelles recherches génèrent des impressions, des clics et des
            achats pour vos produits : vous voyez ce qui marche déjà et ce qui vous manque.
          </p>
        </>
      ),
    },
    {
      id: "write-search-terms",
      heading: "Comment rédiger le champ des termes de recherche",
      body: (
        <>
          <p>
            Une fois la liste prête, rédiger le champ consiste surtout à retirer des mots. Visez une
            ligne propre de termes uniques qui ajoute ce que votre texte visible ne couvre pas déjà.
          </p>
          <h3>Utilisez synonymes, autres noms et fautes courantes</h3>
          <p>
            Ajoutez d’autres mots pour le même produit, d’autres façons d’en décrire l’usage et les
            fautes que font souvent les acheteurs. Ajoutez les abréviations et les unités écrites
            autrement, comme « oz » et « ounce », seulement si elles ne figurent pas déjà ailleurs.
          </p>
          <h3>Gardez un format simple</h3>
          <p>
            Écrivez en minuscules et séparez les mots par des espaces. Pas besoin de virgules, ni de
            répéter un mot dans chaque combinaison : Amazon combine lui-même les mots de votre fiche.
            Laissez de côté les mots vides comme « a », « the » ou « for ».
          </p>
          <h3>Ne répétez pas les mots du titre</h3>
          <p>
            Chaque mot répété prend la place d’un mot nouveau. Si « stainless steel » est déjà dans le
            titre, il n’apporte rien dans le backend. Vérifiez chaque mot face au titre et aux puces
            avant de le garder.
          </p>
          <h3>Respectez la limite de longueur</h3>
          <p>
            Amazon limite la longueur du champ et la mesure en octets, pas en caractères : les lettres
            accentuées peuvent donc compter davantage. La limite peut changer et varier selon la
            boutique, alors vérifiez le chiffre actuel de votre marketplace dans Seller Central et
            restez bien en dessous.
          </p>
        </>
      ),
    },
    {
      id: "what-to-leave-out",
      heading: "Ce qu’il faut exclure de vos termes de recherche backend",
      body: (
        <>
          <p>Certains mots gaspillent de la place, d’autres enfreignent les règles d’Amazon. Excluez :</p>
          <ul>
            <li>
              <strong>Les noms de marque.</strong> Ni la vôtre ni celles des autres. Les marques
              concurrentes, en particulier, peuvent vous attirer des ennuis.
            </li>
            <li>
              <strong>Les ASIN et codes produit.</strong> Ils n’apportent rien à la façon dont les
              acheteurs cherchent.
            </li>
            <li>
              <strong>Les affirmations subjectives.</strong> Des mots comme « best », « amazing » ou
              « top quality » décrivent des opinions, pas des produits.
            </li>
            <li>
              <strong>Les mots temporaires.</strong> « New », « on sale » ou « limited offer » se
              périment et ne décrivent pas le produit.
            </li>
            <li>
              <strong>Les répétitions et le remplissage.</strong> Le même mot deux fois, les pluriels
              de mots déjà utilisés ou de longues suites d’expressions presque identiques.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "worked-example",
      heading: "Un exemple concret : des mots-clés backend pour une gourde",
      body: (
        <>
          <p>
            La fiche étant destinée à la boutique américaine, l’exemple est en anglais. Imaginons que
            votre titre soit « 24 oz Stainless Steel Water Bottle with Screw-Top Lid, Charcoal ». Il
            couvre déjà <em>24 oz</em>, <em>stainless steel</em>, <em>water bottle</em>,{" "}
            <em>screw-top lid</em> et <em>charcoal</em>. Vos mots-clés backend doivent couvrir le
            reste. Un premier jet pourrait ressembler à ceci :
          </p>
          <SearchTermsFigure
            labels={{"title": "Déjà dans le titre", "field": "Search terms", "bytes": "octets", "leftOut": "Écartés exprès"}}
            titleWords={["24 oz", "stainless steel", "water bottle", "screw-top lid", "charcoal"]}
            terms="insulated flask thermos canteen vacuum leakproof reusable travel gym hiking office kids bpa free metal tumbler ounce black grey gray"
            leftOut={["marques", "best", "new", "stainless steel"]}
            caption="L’exemple en un coup d’œil : le titre couvre déjà la première ligne, le champ search terms ajoute des mots nouveaux et la dernière ligne reste dehors."
          />
          <p>
            Remarquez ce qui n’y est pas : aucune marque, pas de « best », aucune répétition du titre,
            et « grey » comme « gray » pour que les acheteurs vous trouvent quelle que soit leur
            orthographe. Comparez ensuite avec vos puces et retirez ce qu’elles disent déjà.
          </p>
          <p>
            Pour travailler la partie visible de la même fiche, titre, puces et images, lisez notre{" "}
            <Link href={p("/services/listing-optimization")}>guide d’optimisation des fiches Amazon</Link>.
          </p>
        </>
      ),
    },
    {
      id: "check-results",
      heading: "Comment vérifier que vos mots-clés backend fonctionnent",
      body: (
        <>
          <p>
            Attendez quelques semaines avant de juger un changement, et ne changez qu’une chose à la
            fois pour savoir ce qui a fait la différence.
          </p>
          <ul>
            <li>
              <strong>Cherchez le terme vous-même.</strong> Tapez sur Amazon un terme présent
              uniquement dans le backend et regardez si votre produit apparaît.
            </li>
            <li>
              <strong>Surveillez vos sessions.</strong> Les rapports commerciaux de Seller Central
              montrent si davantage d’acheteurs arrivent sur la fiche.
            </li>
            <li>
              <strong>Utilisez Search Query Performance.</strong> Avec le Registre des marques,
              vérifiez si les nouveaux termes apportent impressions, clics et achats.
            </li>
          </ul>
          <p>
            Vous ne savez pas quels chiffres suivre ? Notre{" "}
            <Link href={p("/services/data-analysis")}>guide de l’analyse de données Amazon</Link> présente les
            quatre qui comptent le plus et où les trouver.
          </p>
        </>
      ),
    },
    {
      id: "common-mistakes",
      heading: "Les erreurs courantes avec les mots-clés backend Amazon",
      body: (
        <>
          <p>La plupart des problèmes viennent de la volonté d’en mettre trop. Les erreurs les plus courantes :</p>
          <ul>
            <li>
              <strong>Copier le titre dans le champ.</strong> Cela semble rigoureux, mais n’ajoute rien.
            </li>
            <li>
              <strong>Dépasser la limite de longueur.</strong> Beaucoup de vendeurs signalent qu’un
              champ trop long risque de ne pas être indexé comme prévu : restez bien en dessous.
            </li>
            <li>
              <strong>Le remplir une fois et l’oublier.</strong> Les habitudes de recherche changent.
              Revoyez le champ en même temps que le reste de la fiche.
            </li>
            <li>
              <strong>Ne compter que sur lui.</strong> Les mots-clés backend élargissent votre portée,
              mais la fiche doit toujours convaincre l’acheteur. Les conseils d’Amazon pour{" "}
              <a href={PRODUCT_LISTINGS} target="_blank" rel="noopener noreferrer">
                créer des fiches produit
              </a>{" "}
              couvrent aussi la partie visible.
            </li>
          </ul>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: "Les mots-clés backend Amazon fonctionnent-ils encore ?",
      answer:
        "Oui. Le guide vendeur d’Amazon indique que les mots-clés backend peuvent encore aider un produit à se classer sur des recherches précises. Ils élargissent les recherches où vous pouvez apparaître ; la pertinence, la conversion et les ventes décident de votre position.",
    },
    {
      question: "Combien de mots-clés backend faut-il utiliser ?",
      answer:
        "Il n’y a pas de nombre fixe. Utilisez autant de mots uniques et pertinents que la limite de longueur de votre marketplace le permet sans forcer, et excluez ce qui est déjà dans le titre ou les puces.",
    },
    {
      question: "Faut-il séparer les mots-clés backend par des virgules ?",
      answer:
        "Non. Séparez-les par des espaces et écrivez en minuscules. La ponctuation est inutile, et Amazon combine les mots de votre fiche pour correspondre à différentes recherches.",
    },
    {
      question: "Puis-je mettre des marques concurrentes dans les mots-clés backend ?",
      answer:
        "Non. Excluez du champ tous les noms de marque, y compris la vôtre et surtout celles des concurrents, pour respecter les règles d’Amazon.",
    },
    {
      question: "Nautilo Studio peut-il vérifier mes mots-clés backend ?",
      answer:
        "Oui. Envoyez-nous le lien d’une fiche via notre audit gratuit et nous vous dirons ce que nous changerions en premier, mots-clés backend compris.",
    },
  ],
  sources: [
    {
      publisher: "Amazon (blog Sell on Amazon)",
      title: "Amazon SEO: 7 ways to improve your product’s search rankings",
      url: AMAZON_SEO_GUIDE,
    },
    {
      publisher: "Amazon (blog Sell on Amazon)",
      title: "How to create Amazon product listings",
      url: PRODUCT_LISTINGS,
    },
  ],
  cta: {
    text: "Les mots-clés backend sont une partie du SEO sur Amazon. Voyez comment titre, puces et ventes s’articulent, ou laissez-nous auditer votre fiche gratuitement.",
    pillar: { href: "/services/amazon-seo", label: "Lire notre guide du SEO sur Amazon" },
    formHeading: "Vous voulez que nous vérifiions vos mots-clés backend ?",
    formText: "Envoyez-nous une fiche et nous vous dirons, gratuitement, ce que nous changerions en premier.",
  },
};

export default post;
