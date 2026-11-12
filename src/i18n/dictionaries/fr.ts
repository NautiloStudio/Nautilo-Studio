import type { Dictionary } from "./en";

// French typography: a non-breaking space before ? ! : ; and %, written here as  .
const fr: Dictionary = {
  common: {
    skip: "Aller au contenu",
    loading: "Chargement",
    reloading: "Rechargement de la page",
    header: {
      main: "Principal",
      home: "Accueil",
      services: "Services",
      allServices: "Tous les services",
      menu: "Menu",
      howWeWork: "Notre méthode",
      aboutUs: "À propos",
      blog: "Blog",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      guidesTitle: "Nos guides par service",
      freeReview: "Audit gratuit",
      backToTop: "Nautilo Studio, retour en haut",
      homepage: "Accueil de Nautilo Studio",
      language: "Langue",
    },
    guides: {
      "amazon-seo": {
        menu: "SEO",
        name: "SEO Amazon",
        title: "Soyez trouvé par plus d’acheteurs sur Amazon",
        text: "Comment fonctionne la recherche Amazon, où placer vos mots-clés et comment remonter dans les résultats.",
      },
      "listing-optimization": {
        menu: "Optimisation des fiches",
        name: "Optimisation des fiches",
        title: "Transformez plus de visites en commandes",
        text: "Titres, images, puces et contenu A+ qui convainquent les acheteurs, et comment les tester.",
      },
      "data-analysis": {
        menu: "Analyse de données",
        name: "Analyse de données",
        title: "Sachez quels chiffres corriger en premier",
        text: "Les quatre chiffres à suivre pour chaque produit et une routine hebdomadaire de quelques minutes.",
      },
      "ai-automation": {
        menu: "Automatisation IA",
        name: "Automatisation IA",
        title: "Confiez le travail répétitif à l’IA",
        text: "Les tâches que l’IA peut reprendre, les outils d’Amazon et comment garder la main sur chaque décision.",
      },
    },
    gallery: {
      heading: "{4} guides gratuits. {40} pages d’idées à appliquer dès aujourd’hui.",
      intro:
        "Un guide par service, avec des exemples, des graphiques et une checklist. Gratuit, à lire et à télécharger.",
      moreHeading: "Pour aller plus loin : {3} autres guides gratuits.",
      moreIntro: "Chacun contient des exemples, des graphiques et une checklist à télécharger.",
      tenPage: "Guide de 10 pages",
      read: "Lire le guide : {name}",
      download: "Télécharger le PDF",
    },
    pdfLanguage: "en anglais",
    form: {
      name: "Nom",
      email: "E-mail",
      listing: "Lien vers votre fiche Amazon",
      message: "Message",
      messagePlaceholder: "Que vendez-vous, et que voulez-vous améliorer ?",
      sending: "Envoi en cours...",
      retry: "Réessayez, ou écrivez-nous à",
      privacyBefore: "Nous utilisons vos données uniquement pour vous répondre. Lisez notre",
      privacyLink: "note de confidentialité",
      talk: {
        button: "Envoyer le message",
        sentTitle: "Merci, nous avons bien reçu votre message.",
        sentText: "Nous vous répondrons à l’adresse e-mail indiquée.",
        error: "Nous n’avons pas pu envoyer votre message.",
      },
      review: {
        button: "Recevoir mon audit gratuit",
        sentTitle: "Merci, nous avons bien reçu votre fiche.",
        sentText: "Nous vous enverrons notre audit à l’adresse e-mail indiquée.",
        error: "Nous n’avons pas pu envoyer votre fiche.",
      },
    },
    listingCompare: {
      group: "Afficher la fiche d’exemple avant ou après optimisation",
      caption: "Un exemple rédigé pour illustrer l’idée, pas le résultat d’un client.",
      before: {
        label: "Avant",
        alt: "Photo de téléphone sombre et floue d’une planche à découper en bambou sur un plan de travail encombré",
        title:
          "Planche à Découper Bambou Cuisine Planche Bois Grande Planche Pour Cuisine Meilleure Qualité Plateau Fromage Cadeau",
        bullets: [
          "MATÉRIAU BAMBOU HAUTE QUALITÉ TRÈS BIEN",
          "Nombreux usages en cuisine",
          "La meilleure planche pour vous et votre famille",
        ],
      },
      after: {
        label: "Après",
        alt: "Photo nette et bien éclairée d’une planche à découper en bambou avec rigole, sur fond blanc",
        title: "Planche à découper en bambou avec rigole, grande, pour viande, pain et fromage",
        bullets: [
          "La rigole retient les jus et garde votre plan de travail propre pendant la découpe.",
          "Le bambou préserve le tranchant des couteaux.",
          "Lavage à la main, séchage à la verticale.",
        ],
      },
    },
    team: {
      label: "L’équipe Nautilo Studio",
      of: "sur",
      previous: "Personne précédente",
      next: "Personne suivante",
      scroll: "Membres de l’équipe",
      hint: "Choisissez une personne pour lire son profil.",
      members: {
        "Filippo Verace": {
          role: "Responsable SEO et Ads",
          summary:
            "Pilote la façon dont les acheteurs trouvent vos produits : les mots qu’ils recherchent, la position de votre fiche et les campagnes Sponsored Products qui les amènent.",
          focus: ["SEO Amazon", "Sponsored Products", "Recherche de mots-clés"],
          guide: "Lire le guide SEO Amazon",
        },
        "Maria Giraldo": {
          role: "Responsable optimisation des fiches",
          summary:
            "Pilote la façon dont votre fiche convainc les acheteurs qui arrivent : titres, puces, images et contenu A+ qui répondent à leurs questions avant l’achat.",
          focus: ["Titres et puces", "Images et contenu A+", "Tests A/B"],
          guide: "Lire le guide d’optimisation des fiches",
        },
        "Veronika Matkovska": {
          role: "Responsable analyse de données",
          summary:
            "Pilote les chiffres : vos rapports de ventes, de trafic et de conversion, transformés en une courte liste de ce qu’il faut corriger d’abord et de la façon de vérifier que ça a marché.",
          focus: ["Rapports commerciaux", "Conversion et ACOS", "Suivi hebdomadaire"],
          guide: "Lire le guide d’analyse de données",
        },
        "Carlo Ambrosini": {
          role: "Responsable automatisation IA",
          summary:
            "Pilote les agents IA qui vous libèrent du travail répétitif sur les fiches et les rapports, et conçoit les outils et le site avec lesquels nous travaillons.",
          focus: ["Agents IA", "Automatisation des processus", "Web et outils"],
          guide: "Lire le guide d’automatisation IA",
        },
      },
    },
  },

  meta: {
    services: {
      title: "Services marketing Amazon pour vendeurs | Nautilo Studio",
      description:
        "Quatre services marketing Amazon pour les vendeurs aux États-Unis : SEO, fiches produit, analyse de données et IA. Découvrez-les et demandez un audit gratuit.",
    },
    home: {
      title: "Agence marketing Amazon pour vendeurs | Nautilo Studio",
      description:
        "L’équipe marketing qui manque à votre boutique Amazon. Données et IA pour aider les vendeurs Amazon aux États-Unis à grandir et vendre plus. Audit offert.",
    },
    about: {
      title: "Qui sommes-nous | Nautilo Studio, marketing Amazon",
      description:
        "Nautilo Studio, ce sont quatre étudiants en master à TBS Education Barcelone qui créent l’équipe marketing qui manque aux vendeurs Amazon. Découvrez-nous.",
    },
    privacy: {
      title: "Note de confidentialité | Nautilo Studio",
      description: "Ce que Nautilo Studio fait des informations envoyées via nos formulaires.",
    },
  },

  footer: {
    services: "Services",
    tagline: "Analyser. Optimiser. Automatiser.",
    student: "Un projet étudiant à TBS Education Barcelone.",
    privacy: "Note de confidentialité",
  },

  reviewSteps: [
    "Vous nous envoyez le lien d’une fiche Amazon.",
    "Nous analysons son titre, ses puces, son contenu A+ et ses images.",
    "Nous vous écrivons ce que nous améliorerions en premier.",
  ],

  home: {
    title: "L’équipe marketing qui manque à votre boutique Amazon.",
    subtitle:
      "Données et IA pour aider les vendeurs Amazon aux États-Unis à grandir et à vendre plus.",
    getReview: "Audit gratuit de votre fiche",
    seeServices: "Voir nos services",
    notSure: "Vous ne savez pas de quoi vous avez besoin ?",
    talk: "Parlons-en",
    statement:
      "Gérer une boutique Amazon prend déjà assez de temps. Améliorer chaque fiche ne devrait pas reposer sur vous seul.",
    statementText:
      "Vous vendez déjà un bon produit sur Amazon. Les agences le font à votre place et les outils vous laissent seul. Nous, nous le faisons avec vous.",
    servicesHeading: "Laquelle de ces phrases ressemble à votre boutique ?",
    services: [
      {
        title: "Ads et SEO",
        problem: "« Les acheteurs ne trouvent pas mon produit. »",
        text: "Nous améliorons votre classement sur les mots-clés et gérons vos campagnes Sponsored Products, pour que plus d’acheteurs arrivent sur vos fiches.",
        alt: "Loupe appuyée contre un petit colis",
        guide: "Lire notre guide SEO Amazon",
      },
      {
        title: "Optimisation des fiches",
        problem: "« On regarde, mais on n’achète pas. »",
        text: "Nous retravaillons vos titres, puces, contenu A+ et images, pour que plus de visiteurs choisissent d’acheter.",
        alt: "Planche à découper en bambou avec une étiquette en papier vierge",
        guide: "Lire notre guide d’optimisation des fiches",
      },
      {
        title: "Analyse de données",
        problem: "« Je ne sais pas quels chiffres comptent. »",
        text: "Nous transformons vos données de ventes, de trafic et de conversion en prochaines étapes claires.",
        alt: "Colis en carton empilés en colonnes croissantes, comme un graphique en barres",
        guide: "Lire notre guide d’analyse de données",
      },
      {
        title: "Automatisation IA",
        problem: "« Les tâches répétitives mangent ma semaine. »",
        text: "Nous mettons en place des agents IA qui gèrent les tâches répétitives sur les fiches et les rapports.",
        alt: "Bras robotique blanc posant un colis au bout d’une rangée bien alignée",
        guide: "Lire notre guide d’automatisation IA",
      },
    ],
    howHeading: "Grandir chambre après chambre.",
    howText:
      "Le nautile ajoute une chambre à la fois, le long de la spirale d’or. Votre boutique peut grandir de la même façon.",
    steps: [
      {
        word: "Analyser.",
        text: "Nous lisons vos données de ventes, de trafic et de conversion et les transformons en prochaines étapes claires.",
      },
      {
        word: "Optimiser.",
        text: "Nous travaillons titres, puces, contenu A+ et images, puis mots-clés et campagnes Sponsored Products.",
      },
      {
        word: "Automatiser.",
        text: "Des agents IA prennent en charge les tâches répétitives sur les fiches et les rapports.",
      },
    ],
    reviewHeading: "Demandez un audit gratuit de votre fiche.",
    contactHeading: "Vous préférez en parler ? Parlez-nous de votre boutique.",
    contactOffer: "Réservez une consultation gratuite de 30 minutes.",
    contactText: "Dites-nous ce que vous vendez et ce que vous voulez améliorer. Nous répondons par e-mail.",
    contactInbox: "Vous préférez votre propre messagerie ? Écrivez à",
  },

  marquee: {
    title: "Pensé pour les vendeurs américains dirigés par leurs fondateurs, en",
    categories: [
      "Cuisine",
      "Maison",
      "Plein air",
      "Beauté",
      "Animaux",
      "Bébé",
      "Santé et bien-être",
      "Sport",
      "Jardin",
      "Jouets",
      "Café et thé",
      "Vêtements",
    ],
  },

  demo: {
    tag: "Exemple",
    thisWeek: "Cette semaine",
    metrics: [
      ["Sessions", "2 140"],
      ["Conversion", "9,5 %"],
      ["ACOS", "22 %"],
    ],
    before: "Avant",
    after: "Après",
    beforeTitle: "Planche à Découper Bambou Cuisine Planche Bois Grande Meilleure Qualité Cadeau",
    beforeText: "MATÉRIAU BAMBOU HAUTE QUALITÉ TRÈS BIEN",
    afterTitle: "Planche à découper en bambou avec rigole, grande, pour viande et fromage",
    afterText: "La rigole garde votre plan de travail propre.",
    summary: "Résumé du lundi",
    summaryLines: [
      "Les ventes de la planche à découper augmentent.",
      "Le lot de tasses a perdu l’Offre en vedette.",
      "Deux termes de recherche dépensent plus que votre marge.",
    ],
    approve: "Valider",
    edit: "Modifier",
    search: "gourde isotherme",
    otherBrand: "Autre marque",
    yourProduct: "Votre produit",
    topResult: "Premier résultat",
  },

  caseStudy: {
    label: "Étude de cas",
    heading: "D’un brouillon de 30 minutes à une fiche notée 88/100 en 8 minutes.",
    text: "Le vendeur nous a donné les faits. L’IA les a organisés en une fiche qui passe le contrôle des règles d’Amazon, prête pour la relecture finale du vendeur.",
    before: "Avant",
    beforeTitle: "Brouillon du vendeur",
    connector: "L’IA organise les faits que vous fournissez",
    after: "Après",
    afterTitle: "Fiche proposée",
    pending: "Brouillon · en attente de relecture",
    beforeListing: {
      title: "Gourde eau noire",
      copy: "Gourde 24 oz. Acier inoxydable. Bouchon à vis. Anthracite.",
      rows: [
        ["Score de la fiche", "41 / 100"],
        ["Termes de recherche couverts", "2 sur 9"],
        ["Temps de rédaction", "30 min"],
      ],
    },
    afterListing: {
      title: "Gourde en acier inoxydable de 24 oz avec bouchon à vis, anthracite",
      bullets: [
        "Contenance de 24 oz pour votre quotidien",
        "Corps en acier inoxydable, finition anthracite",
        "Bouchon à vis simple à ouvrir et à fermer",
      ],
      rows: [
        ["Score de la fiche", "88 / 100"],
        ["Termes de recherche couverts", "9 sur 9"],
        ["Respect du ton de la marque", "94 %"],
        ["Contrôle des règles Amazon", "Validé"],
        ["Temps avec IA + relecture", "8 min"],
      ],
    },
  },

  landing: {
    breadcrumb: "Fil d’Ariane",
    home: "Accueil",
    getReview: "Audit gratuit de votre fiche",
    downloadPdf: "Télécharger le guide PDF gratuit",
    talk: "Parlons-en",
    shortAnswer: "Réponse courte",
    pdfLabel: "Guide PDF gratuit · 10 pages",
    pdfText: "Téléchargez le guide complet, avec des exemples, des graphiques et une checklist.",
    caseLabel: "Étude de cas",
    caseText: "Comparez le brouillon d’un vendeur et la fiche que nous avons proposée.",
    faq: "Questions fréquentes",
    more: "Plus de Nautilo Studio",
    moreServices: "Nos services pour les vendeurs Amazon",
    moreHow: "Notre méthode",
    moreTalk: "Parlons-en",
    blogLabel: "Sur notre blog",
    blogText: "Des articles pratiques, étape par étape, pour les vendeurs Amazon, mis à jour quand Amazon change.",
    blogStart: "Commencez par :",
    blogButton: "Voir le blog",
    reviewHeading: "Vous voulez qu’on vérifie votre fiche ?",
    reviewText: "Envoyez-nous une fiche et nous vous dirons gratuitement quoi corriger en premier.",
  },

  about: {
    label: "À propos",
    title: "Quatre étudiants en master. Une équipe marketing pour votre boutique Amazon.",
    intro:
      "Nous nous sommes rencontrés à TBS Education à Barcelone, où nous préparons nos masters. Nautilo Studio est ce que nous avons construit ensemble : l’équipe marketing qui manque aux vendeurs Amazon aux États-Unis.",
    facts: ["4 fondateurs", "4 services", "Basés à Barcelone", "Pour les vendeurs Amazon aux États-Unis"],
    storyHeading: "Notre histoire",
    story: [
      {
        heading: "Ce que nous avons vu",
        text: "Des vendeurs américains avec un bon produit sur Amazon et personne pour le promouvoir. Les agences font le travail à leur place et gardent le savoir-faire. Les outils leur donnent des données et les laissent seuls.",
      },
      {
        heading: "Notre idée",
        text: "Réunir données, IA et travail concret, et le faire avec le vendeur, pas à sa place. Nous commençons par une fiche, montrons ce qui change et avançons à partir de là.",
      },
      {
        heading: "Pourquoi un nautile",
        text: "Le nautile grandit une chambre à la fois, le long de la spirale d’or. Nous aidons les boutiques à grandir de la même façon : une fiche, un mot-clé, un rapport à la fois.",
      },
    ],
    teamHeading: "L’équipe.",
    teamText:
      "Nous travaillons tous sur presque tout, mais chacun pilote un service, pour que vous sachiez toujours à qui parler.",
    reviewHeading: "Commencez par une fiche.",
    reviewText: "Envoyez-la-nous et nous vous dirons tous les quatre, gratuitement, quoi corriger en premier.",
  },

  thanks: {
    metaTitle: "Merci | Nautilo Studio",
    back: "Retour à l’accueil",
    review: {
      label: "Fiche reçue",
      title: "Merci. Nous avons bien reçu votre fiche.",
      text: "Nous allons analyser son titre, ses puces, son contenu A+ et ses images, puis vous écrire ce que nous améliorerions en premier. Surveillez votre boîte de réception, et vos spams au cas où.",
    },
    talk: {
      label: "Message reçu",
      title: "Merci. Nous avons bien reçu votre message.",
      text: "L’un de nous vous répondra à l’adresse e-mail indiquée. Surveillez votre boîte de réception, et vos spams au cas où.",
    },
    guidesHeading: "En attendant : {4} guides gratuits.",
    guidesIntro: "Un guide par service, avec des exemples, des graphiques et une checklist.",
  },

  blog: {
    metaTitle: "Blog vendeurs Amazon : guides SEO pratiques | Nautilo Studio",
    metaDescription: "Actualités et guides pratiques pour les vendeurs Amazon aux États-Unis : SEO, fiches, données et IA, à jour à chaque changement. Lisez nos articles et PDF.",
    label: "Blog",
    h1: "Le blog des vendeurs Amazon : ce qui change, et quoi faire.",
    intro: "Amazon change sans cesse le fonctionnement de sa recherche, ce que ses règles autorisent et les outils qu’il donne aux vendeurs dans Seller Central. Nous suivons ces changements pour vous et les transformons en articles courts et pratiques pour les vendeurs aux États-Unis : ce qui est nouveau, pourquoi c’est important et quoi modifier dans vos fiches.",
    introMore: "Ce blog est mis à jour en continu. De nouveaux articles paraissent au fil de l’actualité d’Amazon : ajoutez cette page à vos favoris et revenez souvent. Pour une vue d’ensemble, commencez par notre",
    introLink: "guide du SEO sur Amazon",
    tags: ["Mis à jour en continu", "L’actualité d’Amazon, expliquée", "Articles pratiques", "Guides PDF gratuits"],
    guidesHeading: "Guides PDF gratuits",
    guidesIntro: "Un guide de 10 pages pour chacun de nos services, avec des exemples, des graphiques et une checklist. Téléchargement gratuit.",
    pdfMeta: "PDF · 10 pages",
    articlesHeading: "Derniers articles",
    readPost: "Lire l’article sur",
    minRead: "min de lecture",
    photo: "Photo",
    by: "Par",
    updated: "Mis à jour le",
    contents: "Dans ce guide",
    sources: "Sources",
    nextStep: "Étape suivante",
  },
  servicesPage: {
    seoPhotoAlt: "Ordinateur portable affichant un tableau de bord SEO Amazon : positions des mots-clés et trafic organique",
    h1: "Services marketing Amazon pour les vendeurs aux États-Unis",
    intro:
      "Quatre services, un seul but : que plus de bons acheteurs trouvent votre produit et l’achètent. Choisissez le problème qui ressemble à votre boutique et ouvrez sa page.",
    closing: "Vous ne savez pas par où commencer ? Envoyez-nous une fiche, nous vous le dirons gratuitement.",
  },
  privacy: {
    back: "Retour à l’accueil",
    title: "Note de confidentialité",
    paragraphs: [
      "Nautilo Studio est un projet étudiant à TBS Education Barcelone, mené par Carlo Ambrosini, Maria Giraldo, Veronika Matkovska et Filippo Verace.",
      "Lorsque vous utilisez l’un de nos formulaires, nous recueillons votre nom, votre adresse e-mail et votre message ou le lien de votre fiche. Nous les utilisons uniquement pour vous répondre.",
      "Votre message est stocké dans notre base de données Supabase, hébergée dans l’Union européenne. Ce site ne dépose aucun cookie publicitaire.",
    ],
    contact: "Pour consulter ou supprimer vos données, écrivez à",
  },
};

export default fr;
