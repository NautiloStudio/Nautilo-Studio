import type { Dictionary } from "./en";

// German copy uses the formal "Sie", as is usual for B2B. Numbers use a non-breaking space before %.
const de: Dictionary = {
  common: {
    skip: "Zum Inhalt springen",
    loading: "Wird geladen",
    reloading: "Seite wird neu geladen",
    header: {
      main: "Hauptmenü",
      home: "Start",
      services: "Leistungen",
      menu: "Menü",
      howWeWork: "So arbeiten wir",
      aboutUs: "Über uns",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
      guidesTitle: "Unsere Leitfäden",
      freeReview: "Gratis-Check",
      backToTop: "Nautilo Studio, nach oben",
      homepage: "Startseite von Nautilo Studio",
      language: "Sprache",
    },
    guides: {
      "amazon-seo": {
        menu: "SEO",
        name: "Amazon-SEO",
        title: "Von mehr Käufern auf Amazon gefunden werden",
        text: "Wie die Amazon-Suche funktioniert, wohin Ihre Keywords gehören und wie Sie in den Ergebnissen aufsteigen.",
      },
      "listing-optimization": {
        menu: "Listing-Optimierung",
        name: "Listing-Optimierung",
        title: "Mehr Besuche in Bestellungen verwandeln",
        text: "Titel, Bilder, Bullet Points und A+ Content, die Käufer überzeugen, und wie Sie sie testen.",
      },
      "data-analysis": {
        menu: "Datenanalyse",
        name: "Datenanalyse",
        title: "Wissen, welche Zahlen Sie zuerst angehen",
        text: "Die vier Kennzahlen für jedes Produkt und eine Wochenroutine, die nur Minuten dauert.",
      },
      "ai-automation": {
        menu: "KI-Automatisierung",
        name: "KI-Automatisierung",
        title: "Wiederkehrende Arbeit an die KI abgeben",
        text: "Welche Aufgaben KI übernehmen kann, die Tools von Amazon und wie jede Entscheidung bei Ihnen bleibt.",
      },
    },
    gallery: {
      heading: "{4} kostenlose Leitfäden. {40} Seiten Ideen, die Sie sofort nutzen können.",
      intro:
        "Ein Leitfaden pro Leistung, mit Beispielen, Diagrammen und einer Checkliste. Kostenlos zum Lesen und Herunterladen.",
      moreHeading: "Weiterlesen: {3} weitere kostenlose Leitfäden.",
      moreIntro: "Jeder enthält Beispiele, Diagramme und eine Checkliste zum Herunterladen.",
      tenPage: "Leitfaden mit 10 Seiten",
      read: "Leitfaden lesen",
      download: "PDF herunterladen",
    },
    pdfLanguage: "auf Englisch",
    form: {
      name: "Name",
      email: "E-Mail",
      listing: "Link zu Ihrem Amazon-Listing",
      message: "Nachricht",
      messagePlaceholder: "Was verkaufen Sie, und was möchten Sie verbessern?",
      sending: "Wird gesendet...",
      retry: "Versuchen Sie es noch einmal oder schreiben Sie uns an",
      privacyBefore: "Wir nutzen Ihre Daten nur, um Ihnen zu antworten. Lesen Sie unseren",
      privacyLink: "Datenschutzhinweis",
      talk: {
        button: "Nachricht senden",
        sentTitle: "Danke, wir haben Ihre Nachricht erhalten.",
        sentText: "Wir antworten an die angegebene E-Mail-Adresse.",
        error: "Ihre Nachricht konnte nicht gesendet werden.",
      },
      review: {
        button: "Kostenlosen Check anfordern",
        sentTitle: "Danke, wir haben Ihr Listing erhalten.",
        sentText: "Wir senden unseren Check an die angegebene E-Mail-Adresse.",
        error: "Ihr Listing konnte nicht gesendet werden.",
      },
    },
    listingCompare: {
      group: "Beispiel-Listing vor oder nach der Optimierung anzeigen",
      caption: "Ein Beispiel, das wir zur Veranschaulichung geschrieben haben, kein Kundenergebnis.",
      before: {
        label: "Vorher",
        alt: "Dunkles, unscharfes Handyfoto eines Bambus-Schneidebretts auf einer unaufgeräumten Arbeitsplatte",
        title:
          "Bambus Schneidebrett Küche Hackbrett Holz Groß Brett Für Küche Beste Qualität Käsebrett Geschenk",
        bullets: [
          "HOCHWERTIGES BAMBUS MATERIAL SEHR GUT",
          "Viele Einsatzmöglichkeiten in der Küche",
          "Das beste Brett für Sie und Ihre Familie",
        ],
      },
      after: {
        label: "Nachher",
        alt: "Scharfes, gleichmäßig ausgeleuchtetes Foto eines Bambus-Schneidebretts mit Saftrille auf weißem Hintergrund",
        title: "Bambus-Schneidebrett mit Saftrille, groß, für Fleisch, Brot und Käse",
        bullets: [
          "Die Saftrille hält die Arbeitsplatte beim Schneiden sauber.",
          "Bambus schont die Messerklingen.",
          "Von Hand spülen und aufrecht trocknen.",
        ],
      },
    },
    team: {
      label: "Das Team von Nautilo Studio",
      of: "von",
      previous: "Vorherige Person",
      next: "Nächste Person",
      scroll: "Teammitglieder",
      hint: "Wählen Sie eine Person, um ihr Profil zu lesen.",
      members: {
        "Filippo Verace": {
          role: "Lead SEO & Ads",
          summary:
            "Verantwortet, wie Käufer Ihre Produkte finden: die Suchbegriffe, die Position Ihres Listings und die Sponsored-Products-Kampagnen, die sie zu Ihnen bringen.",
          focus: ["Amazon-SEO", "Sponsored Products", "Keyword-Recherche"],
          guide: "Leitfaden Amazon-SEO lesen",
        },
        "Maria Giraldo": {
          role: "Lead Listing-Optimierung",
          summary:
            "Verantwortet, wie Ihr Listing die Besucher überzeugt: Titel, Bullet Points, Bilder und A+ Content, die ihre Fragen vor dem Kauf beantworten.",
          focus: ["Titel und Bullet Points", "Bilder und A+ Content", "A/B-Tests"],
          guide: "Leitfaden Listing-Optimierung lesen",
        },
        "Veronika Matkovska": {
          role: "Lead Datenanalyse",
          summary:
            "Verantwortet die Zahlen: Ihre Berichte zu Umsatz, Traffic und Conversion, übersetzt in eine kurze Liste, was zuerst zu tun ist und woran Sie den Erfolg erkennen.",
          focus: ["Geschäftsberichte", "Conversion und ACOS", "Wöchentliches Tracking"],
          guide: "Leitfaden Datenanalyse lesen",
        },
        "Carlo Ambrosini": {
          role: "Lead KI-Automatisierung",
          summary:
            "Verantwortet die KI-Agenten, die Ihnen wiederkehrende Arbeit an Listings und Berichten abnehmen, und baut die Tools und die Website, mit denen wir arbeiten.",
          focus: ["KI-Agenten", "Workflow-Automatisierung", "Web und Tools"],
          guide: "Leitfaden KI-Automatisierung lesen",
        },
      },
    },
  },

  meta: {
    home: {
      title: "Amazon-Marketingagentur für Händler | Nautilo Studio",
      description:
        "Das Marketingteam, das Ihrem Amazon-Shop fehlt. Daten und KI, damit Amazon-Händler in den USA wachsen und mehr verkaufen. Jetzt kostenloser Listing-Check.",
    },
    about: {
      title: "Über Nautilo Studio | Amazon-Marketing für Händler",
      description:
        "Nautilo Studio sind vier Masterstudierende der TBS Education in Barcelona. Wir bauen das Marketingteam, das Amazon-Händlern fehlt. Lernen Sie uns kennen.",
    },
    privacy: {
      title: "Datenschutzhinweis | Nautilo Studio",
      description: "Was Nautilo Studio mit den Daten macht, die Sie über unsere Formulare senden.",
    },
  },

  footer: {
    tagline: "Analysieren. Optimieren. Automatisieren.",
    student: "Ein Studierendenprojekt an der TBS Education Barcelona.",
    privacy: "Datenschutzhinweis",
  },

  reviewSteps: [
    "Sie schicken uns den Link zu einem Amazon-Listing.",
    "Wir prüfen Titel, Bullet Points, A+ Content und Bilder.",
    "Wir schreiben Ihnen, was wir zuerst verbessern würden.",
  ],

  home: {
    title: "Das Marketingteam, das Ihrem Amazon-Shop fehlt.",
    subtitle: "Daten und KI, damit Amazon-Händler in den USA wachsen und mehr verkaufen.",
    getReview: "Kostenloser Listing-Check",
    seeServices: "Unsere Leistungen",
    notSure: "Nicht sicher, was Sie brauchen?",
    talk: "Sprechen Sie mit uns",
    statement:
      "Ein Amazon-Shop kostet genug Zeit. Jedes Listing zu verbessern, sollte nicht allein an Ihnen hängen.",
    statementText:
      "Sie verkaufen bereits ein gutes Produkt auf Amazon. Agenturen machen es für Sie, Tools lassen Sie allein. Wir arbeiten mit Ihnen daran.",
    servicesHeading: "Welcher dieser Sätze passt zu Ihrem Shop?",
    services: [
      {
        title: "Ads & SEO",
        problem: "„Käufer finden mein Produkt nicht.“",
        text: "Wir verbessern Ihr Keyword-Ranking und betreuen Sponsored-Products-Kampagnen, damit mehr Käufer Ihre Listings erreichen.",
        alt: "Lupe, an ein kleines Paket gelehnt",
        guide: "Unseren Leitfaden Amazon-SEO lesen",
      },
      {
        title: "Listing-Optimierung",
        problem: "„Viele schauen, wenige kaufen.“",
        text: "Wir überarbeiten Titel, Bullet Points, A+ Content und Bilder, damit sich mehr Besucher für den Kauf entscheiden.",
        alt: "Bambus-Schneidebrett mit leerem Papieranhänger",
        guide: "Unseren Leitfaden Listing-Optimierung lesen",
      },
      {
        title: "Datenanalyse",
        problem: "„Ich weiß nicht, welche Zahlen zählen.“",
        text: "Wir machen aus Ihren Umsatz-, Traffic- und Conversion-Daten klare nächste Schritte.",
        alt: "Kartons, in steigenden Säulen gestapelt wie ein Balkendiagramm",
        guide: "Unseren Leitfaden Datenanalyse lesen",
      },
      {
        title: "KI-Automatisierung",
        problem: "„Routinearbeit frisst meine Woche.“",
        text: "Wir richten KI-Agenten ein, die wiederkehrende Aufgaben bei Listings und Berichten erledigen.",
        alt: "Weißer Roboterarm, der ein Paket ans Ende einer ordentlichen Reihe stellt",
        guide: "Unseren Leitfaden KI-Automatisierung lesen",
      },
    ],
    howHeading: "Wachsen, Kammer für Kammer.",
    howText:
      "Ein Nautilus baut eine Kammer nach der anderen, entlang der goldenen Spirale. Ihr Shop kann genauso wachsen.",
    steps: [
      {
        word: "Analysieren.",
        text: "Wir lesen Ihre Umsatz-, Traffic- und Conversion-Daten und machen daraus klare nächste Schritte.",
      },
      {
        word: "Optimieren.",
        text: "Wir arbeiten an Titeln, Bullet Points, A+ Content und Bildern, danach an Keywords und Sponsored-Products-Kampagnen.",
      },
      {
        word: "Automatisieren.",
        text: "KI-Agenten übernehmen die wiederkehrenden Aufgaben bei Listings und Berichten.",
      },
    ],
    reviewHeading: "Fordern Sie einen kostenlosen Listing-Check an.",
    contactHeading: "Lieber reden? Erzählen Sie uns von Ihrem Shop.",
    contactOffer: "Buchen Sie eine kostenlose 30-minütige Beratung.",
    contactText:
      "Sagen Sie uns, was Sie verkaufen und was Sie verbessern möchten. Wir antworten per E-Mail.",
    contactInbox: "Lieber aus Ihrem eigenen Postfach? Schreiben Sie an",
  },

  marquee: {
    title: "Für gründergeführte US-Händler in den Bereichen",
    categories: [
      "Küche",
      "Wohnen",
      "Outdoor",
      "Beauty",
      "Haustier",
      "Baby",
      "Gesundheit und Wellness",
      "Sport",
      "Garten",
      "Spielzeug",
      "Kaffee und Tee",
      "Bekleidung",
    ],
    placeholder: "Platz für Logos von Partnern und Tools, sobald wir welche haben.",
  },

  demo: {
    tag: "Beispiel",
    thisWeek: "Diese Woche",
    metrics: [
      ["Sitzungen", "2.140"],
      ["Conversion", "9,5 %"],
      ["ACOS", "22 %"],
    ],
    before: "Vorher",
    after: "Nachher",
    beforeTitle: "Bambus Schneidebrett Küche Hackbrett Holz Groß Beste Qualität Geschenk",
    beforeText: "HOCHWERTIGES BAMBUS MATERIAL SEHR GUT",
    afterTitle: "Bambus-Schneidebrett mit Saftrille, groß, für Fleisch und Käse",
    afterText: "Die Saftrille hält die Arbeitsplatte sauber.",
    summary: "Zusammenfassung am Montag",
    summaryLines: [
      "Mehr Umsatz mit dem Schneidebrett.",
      "Das Tassen-Set hat das Empfohlene Angebot verloren.",
      "Zwei Suchbegriffe kosten mehr als Ihre Marge.",
    ],
    approve: "Freigeben",
    edit: "Bearbeiten",
    search: "isolierte trinkflasche",
    otherBrand: "Andere Marke",
    yourProduct: "Ihr Produkt",
    topResult: "Top-Ergebnis",
  },

  caseStudy: {
    label: "Fallbeispiel",
    heading: "Vom 30-Minuten-Entwurf zum Listing mit 88/100 in 8 Minuten.",
    text: "Der Händler hat uns die Fakten gegeben. Die KI hat daraus ein Listing gemacht, das die Regelprüfung von Amazon besteht, bereit für die finale Freigabe durch den Händler.",
    before: "Vorher",
    beforeTitle: "Entwurf des Händlers",
    connector: "Die KI ordnet Ihre Fakten",
    after: "Nachher",
    afterTitle: "Vorgeschlagenes Listing",
    pending: "Entwurf · Prüfung ausstehend",
    beforeListing: {
      title: "Trinkflasche schwarz",
      copy: "Flasche 24 oz. Edelstahl. Schraubdeckel. Anthrazit.",
      rows: [
        ["Listing-Score", "41 / 100"],
        ["Abgedeckte Suchbegriffe", "2 von 9"],
        ["Zeit zum Schreiben", "30 Min."],
      ],
    },
    afterListing: {
      title: "Edelstahl-Trinkflasche, 24 oz, mit Schraubdeckel, Anthrazit",
      bullets: [
        "24 oz Fassungsvermögen für Ihren Alltag",
        "Edelstahlkörper in Anthrazit",
        "Schraubdeckel zum einfachen Öffnen und Schließen",
      ],
      rows: [
        ["Listing-Score", "88 / 100"],
        ["Abgedeckte Suchbegriffe", "9 von 9"],
        ["Passung zur Markenstimme", "94 %"],
        ["Amazon-Regelprüfung", "Bestanden"],
        ["Zeit mit KI + Prüfung", "8 Min."],
      ],
    },
  },

  landing: {
    breadcrumb: "Brotkrumennavigation",
    home: "Start",
    getReview: "Kostenloser Listing-Check",
    downloadPdf: "Kostenlosen PDF-Leitfaden herunterladen",
    talk: "Sprechen Sie mit uns",
    shortAnswer: "Kurze Antwort",
    pdfLabel: "Kostenloser PDF-Leitfaden · 10 Seiten",
    pdfText: "Laden Sie den vollständigen Leitfaden herunter, mit Beispielen, Diagrammen und einer Checkliste.",
    caseLabel: "Fallbeispiel",
    caseText: "Sehen Sie den Entwurf eines Händlers neben dem Listing, das wir vorgeschlagen haben.",
    faq: "Häufige Fragen",
    more: "Mehr von Nautilo Studio",
    moreServices: "Unsere Leistungen für Amazon-Händler",
    moreHow: "So arbeiten wir",
    moreTalk: "Sprechen Sie mit uns",
    reviewHeading: "Sollen wir Ihr Listing prüfen?",
    reviewText: "Schicken Sie uns ein Listing, und wir sagen Ihnen kostenlos, was Sie zuerst verbessern sollten.",
  },

  about: {
    label: "Über uns",
    title: "Vier Masterstudierende. Ein Marketingteam für Ihren Amazon-Shop.",
    intro:
      "Wir haben uns an der TBS Education in Barcelona kennengelernt, wo wir unseren Master machen. Nautilo Studio haben wir gemeinsam aufgebaut: das Marketingteam, das Amazon-Händlern in den USA fehlt.",
    facts: ["4 Gründer", "4 Leistungen", "Sitz in Barcelona", "Für Amazon-Händler in den USA"],
    storyHeading: "Unsere Geschichte",
    story: [
      {
        heading: "Was wir gesehen haben",
        text: "US-Händler mit einem guten Produkt auf Amazon und niemandem, der es vermarktet. Agenturen erledigen die Arbeit für sie und behalten das Wissen. Tools liefern Daten und lassen sie allein.",
      },
      {
        heading: "Unsere Idee",
        text: "Daten, KI und praktische Arbeit verbinden, und zwar mit dem Händler, nicht für ihn. Wir beginnen mit einem Listing, zeigen, was sich ändert, und wachsen von dort aus.",
      },
      {
        heading: "Warum ein Nautilus",
        text: "Ein Nautilus wächst Kammer für Kammer entlang der goldenen Spirale. Wir helfen Shops, genauso zu wachsen: ein Listing, ein Keyword, ein Bericht nach dem anderen.",
      },
    ],
    teamHeading: "Unser Team.",
    teamText:
      "Wir arbeiten alle an fast allem, aber jede und jeder von uns leitet eine Leistung. So wissen Sie immer, wen Sie ansprechen.",
    reviewHeading: "Starten Sie mit einem Listing.",
    reviewText: "Schicken Sie es uns, und wir vier sagen Ihnen kostenlos, was Sie zuerst verbessern sollten.",
  },

  thanks: {
    metaTitle: "Danke | Nautilo Studio",
    back: "Zurück zur Startseite",
    review: {
      label: "Listing erhalten",
      title: "Danke. Wir haben Ihr Listing erhalten.",
      text: "Wir prüfen Titel, Bullet Points, A+ Content und Bilder und schreiben Ihnen, was wir zuerst verbessern würden. Schauen Sie in Ihr Postfach und sicherheitshalber auch in den Spam-Ordner.",
    },
    talk: {
      label: "Nachricht erhalten",
      title: "Danke. Wir haben Ihre Nachricht erhalten.",
      text: "Eine oder einer von uns antwortet an die angegebene E-Mail-Adresse. Schauen Sie in Ihr Postfach und sicherheitshalber auch in den Spam-Ordner.",
    },
    guidesHeading: "In der Zwischenzeit: {4} kostenlose Leitfäden.",
    guidesIntro: "Ein Leitfaden pro Leistung, mit Beispielen, Diagrammen und einer Checkliste.",
  },

  privacy: {
    back: "Zurück zur Startseite",
    title: "Datenschutzhinweis",
    paragraphs: [
      "Nautilo Studio ist ein Studierendenprojekt an der TBS Education Barcelona von Carlo Ambrosini, Maria Giraldo, Veronika Matkovska und Filippo Verace.",
      "Wenn Sie eines unserer Formulare nutzen, erfassen wir Ihren Namen, Ihre E-Mail-Adresse und Ihre Nachricht oder Ihren Listing-Link. Wir verwenden sie nur, um Ihnen zu antworten.",
      "Ihre Nachricht wird in unserer Supabase-Datenbank gespeichert, die in der Europäischen Union gehostet wird. Diese Website setzt keine Werbe-Cookies.",
    ],
    contact: "Um Ihre Daten einzusehen oder zu löschen, schreiben Sie an",
  },
};

export default de;
