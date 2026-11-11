import Link from "next/link";
import { localePath } from "@/i18n/config";
import { BlogPhotoFigure, FeeChangeFigure } from "@/components/BlogFigures";
import type { BlogPost } from "../types";
import { calculatorPhoto, heroPhoto } from "./media";

const AMAZON_2027 = "https://sellingpartners.aboutamazon.com/update-to-us-referral-and-fulfillment-by-amazon-fees-for-2027";
const AMAZON_2026 = "https://sellingpartners.aboutamazon.com/update-to-u-s-referral-and-fulfillment-by-amazon-fees-for-2026";
const PPC_LAND = "https://ppc.land/amazon-sellers-face-average-0-19-fba-fee-rise-from-january-15-2027/";
const p = (path: string) => localePath("fr", path);

const post: BlogPost = {
  slug: "amazon-fba-fees-2027",
  title: "Frais Amazon FBA 2027 : 5 changements clés à anticiper",
  description:
    "Frais Amazon FBA 2027 : les 5 changements aux États-Unis dès le 15 janvier, les dates clés et comment vérifier vos marges. Lisez-le et demandez un audit.",
  h1: "Frais Amazon FBA 2027 : 5 changements clés et comment protéger vos marges",
  breadcrumb: "Frais Amazon FBA 2027",
  keyword: "frais amazon fba 2027",
  excerpt:
    "Amazon a annoncé ses frais 2027 aux États-Unis le 5 novembre. Ce qui change, quand, et comment mesurer l’effet sur chacun de vos produits.",
  published: "2026-11-11",
  updated: "2026-11-11",
  readMinutes: 8,
  hero: { ...heroPhoto, alt: "Allée d’entrepôt aux hautes étagères remplies de cartons" },
  intro: (
    <>
      <p>
        Les <strong>frais Amazon FBA 2027</strong> sont publics. Le 5 novembre 2026, Amazon a annoncé
        aux vendeurs américains que ses frais d’expédition augmenteront en moyenne d’environ 0,19 $ par
        unité vendue, la plupart des changements prenant effet le 15 janvier 2027. Une moyenne cache
        beaucoup de choses : Amazon précise que les frais augmenteront pour certains produits et
        baisseront pour d’autres, et que les règles de stockage et de stock faible changent aussi.
      </p>
      <p>
        Cet article résume les cinq changements les plus importants, les dates à noter et comment
        vérifier, produit par produit, leur effet sur vos marges. Si la lecture de vos chiffres est
        nouvelle pour vous, notre <Link href={p("/data-analysis")}>guide de l’analyse de données Amazon</Link>{" "}
        indique par quels rapports commencer.
      </p>
    </>
  ),
  sections: [
    {
      id: "what-changes",
      heading: "Qu’est-ce qui change dans les frais Amazon FBA en 2027 ?",
      body: (
        <>
          <p>
            L’annonce d’Amazon, signée par son vice-président Expédié par Amazon (FBA), couvre les
            frais d’expédition, de stockage, de stock faible et de promotions. La plupart des
            changements d’expédition commencent le 15 janvier 2027, le lendemain de la fin des frais de
            haute saison 2026. Le stockage et les frais de stock faible suivent le 1er février 2027.
          </p>
          <p>
            L’objectif affiché d’Amazon est que chaque frais corresponde mieux au coût réel
            d’expédition du produit. En pratique, deux vendeurs peuvent lire la même annonce et
            recevoir des factures très différentes. La seule façon de connaître votre impact est de
            vérifier produit par produit, comme nous l’expliquons plus bas.
          </p>
        </>
      ),
    },
    {
      id: "five-changes",
      heading: "Les 5 changements clés pour les vendeurs aux États-Unis",
      body: (
        <>
          <h3>1. Les frais d’expédition augmentent de 0,19 $ par unité en moyenne</h3>
          <p>
            À partir du 15 janvier 2027, les frais de préparation et d’expédition augmentent en
            moyenne d’environ 0,19 $ par unité. La hausse n’est pas uniforme. Selon l’analyse détaillée
            de PPC Land, les articles de taille standard vendus entre 10 et 50 $ et au-delà de 50 $
            connaissent les plus fortes hausses moyennes, tandis que certains grands articles
            deviennent moins chers. Parmi les exemples d’Amazon, une coque de téléphone à moins de 10 $
            passe de 2,49 $ à 2,72 $ par unité.
          </p>
          <p>
            Les frais gardent trois tranches de prix : moins de 10 $, de 10 à 50 $ et plus de 50 $. Les
            articles vendus exactement 10 $ ou 50 $ paient le tarif de la tranche de 10 à 50 $.
          </p>

          <FeeChangeFigure
            lang="fr"
            before={{ label: "2026", value: 2.49 }}
            after={{ label: "2027", value: 2.72 }}
            labels={{ title: "L’exemple d’Amazon : les frais FBA d’une coque de téléphone à moins de 10 $", perUnit: "par unité" }}
            caption="Frais par unité avant et après le 15 janvier 2027. Source : Amazon."
          />

          <h3>2. Moins de produits éligibles aux tarifs Low-Price FBA</h3>
          <p>
            Jusqu’au 14 janvier 2027, les articles à moins de 10 $ bénéficient automatiquement des
            tarifs réduits Low-Price FBA. Dès le 15 janvier, cinq catégories de frais les perdent et
            passent aux tarifs de 10 à 50 $ : Automobile et sports motorisés, Petit électroménager,
            Instruments de musique et production audiovisuelle, Médias (livres, DVD, musique, logiciels
            et vidéo) et Informatique. Si vous vendez des articles bon marché dans ces catégories, c’est
            probablement le changement qui vous touche le plus.
          </p>

          <h3>3. Nouvelles tranches et frais de manutention pour les grands articles</h3>
          <p>
            Les produits volumineux et hors normes gagnent des tranches de taille, pour que les frais
            suivent mieux la taille. Deux nouveaux frais de manutention apparaissent : l’un pour les
            produits plats, comme les planches et panneaux, l’autre pour les articles dont un côté est
            très long. L’ancien frais pour les articles hors gabarit maximal disparaît. Certains
            articles lourds paieront moins, d’autres plus : vérifiez la tranche de chaque grand
            produit.
          </p>

          <h3>4. Un frais de stockage selon l’ancienneté dès le 1er février</h3>
          <p>
            Amazon supprime le supplément d’utilisation du stockage et intègre le supplément pour stock
            ancien dans le frais de stockage mensuel, sous la forme d’un tarif unique selon la durée
            passée dans ses entrepôts. Amazon indique que le stock vendu en moins de six mois paiera
            autant ou moins, et le stock ancien davantage. Les produits qui tournent lentement
            coûteront plus cher à garder.
          </p>

          <h3>5. Un nouveau critère pour les frais de stock faible</h3>
          <p>
            Également dès le 1er février, les frais de stock faible ne s’appliquent que lorsque le
            stock passe sous 28 jours de couverture. Amazon les calculera sur les expéditions réelles
            des quatre semaines avant et après chaque contrôle, au lieu des ventes des 30 et 90 derniers
            jours. Garder au moins quatre semaines de stock dans les entrepôts d’Amazon permet de les
            éviter.
          </p>
        </>
      ),
    },
    {
      id: "what-stays-the-same",
      heading: "Ce qui ne change pas",
      body: (
        <ul>
          <li>
            <strong>Le supplément carburant et logistique.</strong> Amazon indique que le supplément de
            3,5 % introduit en 2026 reste inchangé.
          </li>
          <li>
            <strong>La plupart des frais de vente.</strong> Les changements annoncés sont un nouveau
            taux pour les imprimantes 3D, en vigueur depuis le 5 novembre 2026, et un taux promotionnel
            de 10 % pour les produits Amazon Renewed jusqu’au 18 octobre 2027.
          </li>
          <li>
            <strong>La grille des frais de placement à l’entrée.</strong> PPC Land ne signale aucun
            changement de tarifs, même si les sites d’entrée pour la taille standard sont regroupés.
          </li>
        </ul>
      ),
    },
    {
      id: "key-dates",
      heading: "Les dates clés des frais Amazon FBA 2027",
      body: (
        <ul>
          <li>
            <strong>5 novembre 2026 :</strong> Amazon annonce les frais 2027. Le taux pour les
            imprimantes 3D entre en vigueur.
          </li>
          <li>
            <strong>14 janvier 2027 :</strong> fin de la haute saison 2026 et des tarifs Low-Price FBA
            pour les cinq catégories citées.
          </li>
          <li>
            <strong>15 janvier 2027 :</strong> nouveaux frais d’expédition, tranches de taille et frais
            de manutention.
          </li>
          <li>
            <strong>1er février 2027 :</strong> le frais de stockage selon l’ancienneté et le nouveau
            critère de stock faible.
          </li>
        </ul>
      ),
    },
    {
      id: "check-your-margins",
      heading: "Comment mesurer l’effet des frais 2027 sur vos marges",
      body: (
        <>
          <BlogPhotoFigure photo={{ ...calculatorPhoto, alt: "Calculatrice posée sur des graphiques imprimés, près d’un ordinateur portable" }} label="Photo" />
          <p>
            Amazon a créé deux outils pour cela. Utilisez-les avant le 15 janvier, tant que vous avez
            encore le temps d’ajuster vos prix ou vos stocks.
          </p>
          <ul>
            <li>
              <strong>Tableau de bord Fee Change Comparison.</strong> Dans Profit Analytics, sur Seller
              Central. Il montre l’effet des changements sur votre compte et sur chaque produit.
            </li>
            <li>
              <strong>Revenue Calculator.</strong> Il permet de simuler les frais et le bénéfice d’un
              produit à différents prix.
            </li>
          </ul>
          <h3>Une routine simple, produit par produit</h3>
          <ul>
            <li>Listez vos produits avec leur tranche de prix, leur tranche de taille et les unités vendues par mois.</li>
            <li>Pour chacun, notez le frais d’expédition 2026, celui de 2027 et la différence.</li>
            <li>Multipliez la différence par les unités vendues pour obtenir le coût mensuel.</li>
            <li>Triez par ce coût : le haut de la liste, c’est là qu’il faut agir en premier.</li>
          </ul>
          <h3>Un exemple illustratif</h3>
          <p>
            Prenons l’exemple d’Amazon de la coque de téléphone : le frais passe de 2,49 $ à 2,72 $, soit
            0,23 $ de plus par unité. Si un tel produit se vendait à 2 000 unités par mois, un volume que
            nous utilisons uniquement pour illustrer le calcul, le changement coûterait 460 $ par mois,
            soit 5 520 $ par an. Sur un article bon marché à faible marge, cela peut faire la
            différence entre profit et perte.
          </p>
        </>
      ),
    },
    {
      id: "before-january-15",
      heading: "Que faire avant le 15 janvier",
      body: (
        <>
          <ul>
            <li>
              <strong>Revoyez les prix proches des limites de tranche.</strong> Un produit juste
              au-dessus de 10 $ ou de 50 $ paie désormais un autre tarif qu’un produit juste en dessous.
              Mesurez l’effet d’un petit changement de prix sur le frais et sur vos ventes avant d’agir.
            </li>
            <li>
              <strong>Écoulez le stock ancien avant le 1er février.</strong> Avec le nouveau frais selon
              l’ancienneté, le vieux stock coûte plus cher. Envisagez des promotions ou des retraits
              pour les produits lents.
            </li>
            <li>
              <strong>Prévoyez 28 jours de couverture.</strong> Réglez le réapprovisionnement pour que
              vos meilleures ventes ne descendent pas sous quatre semaines de stock.
            </li>
            <li>
              <strong>Revérifiez les grands articles.</strong> Avec les nouvelles tranches et les frais
              de manutention, l’emballage et les dimensions comptent plus qu’avant.
            </li>
          </ul>
          <p>
            Les frais ne sont qu’une partie du bénéfice. Pour voir comment sessions, conversion et
            publicité s’articulent, lisez notre{" "}
            <Link href={p("/data-analysis")}>guide des chiffres Amazon qui comptent</Link>.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: "Quand les frais Amazon FBA 2027 entrent-ils en vigueur ?",
      answer:
        "La plupart des changements de frais d’expédition commencent le 15 janvier 2027. Le nouveau frais de stockage selon l’ancienneté et le nouveau critère de stock faible commencent le 1er février 2027. Le frais est fixé à l’expédition de l’unité, pas à la commande.",
    },
    {
      question: "De combien les frais Amazon FBA augmentent-ils en 2027 ?",
      answer:
        "Amazon indique que le frais d’expédition augmente en moyenne d’environ 0,19 $ par unité vendue. Certains produits paient plus, d’autres moins, selon leur tranche de taille et de prix : vérifiez les vôtres dans le tableau de bord Fee Change Comparison.",
    },
    {
      question: "Le supplément carburant et logistique change-t-il en 2027 ?",
      answer: "Non. Amazon indique que le supplément carburant et logistique de 3,5 % reste inchangé.",
    },
    {
      question: "Comment éviter les frais de stock faible en 2027 ?",
      answer:
        "Dès le 1er février 2027, ces frais ne s’appliquent que si votre stock passe sous 28 jours de couverture. Garder au moins quatre semaines de stock de chaque produit dans les entrepôts d’Amazon permet de les éviter.",
    },
    {
      question: "Nautilo Studio peut-il m’aider à vérifier mes marges ?",
      answer:
        "Oui. L’analyse de données fait partie de nos services. Envoyez-nous une fiche via notre audit gratuit et nous vous dirons ce que nous regarderions en premier.",
    },
  ],
  sources: [
    {
      publisher: "Amazon Selling Partners",
      title: "Update to US referral and Fulfillment by Amazon fees for 2027",
      url: AMAZON_2027,
    },
    {
      publisher: "PPC Land",
      title: "Amazon sellers face average $0.19 FBA fee rise from January 15, 2027",
      url: PPC_LAND,
    },
    {
      publisher: "Amazon Selling Partners",
      title: "Update to U.S. referral and Fulfillment by Amazon fees for 2026",
      url: AMAZON_2026,
    },
  ],
  cta: {
    text: "Les nouveaux frais changent les calculs de chaque produit. Voyez quels chiffres suivre chaque semaine, ou laissez-nous jeter un œil gratuit à l’une de vos fiches.",
    pillar: { href: "/data-analysis", label: "Lire notre guide de l’analyse de données" },
    formHeading: "Vous ne savez pas ce que les frais 2027 changent pour vous ?",
    formText: "Envoyez-nous une fiche et nous vous dirons, gratuitement, ce que nous vérifierions en premier.",
  },
};

export default post;
