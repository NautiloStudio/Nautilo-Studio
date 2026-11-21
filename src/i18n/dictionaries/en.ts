// English copy for everything outside the four guide articles (those live in src/content/guides).
// The other languages copy this shape exactly; TypeScript flags any missing line.
// In headings, {4} marks a number that counts up when it scrolls into view.

const en = {
  // Sent to the browser: used by client components (menu, forms, gallery, team carousel).
  common: {
    skip: "Skip to content",
    loading: "Loading",
    reloading: "Reloading the page",
    header: {
      main: "Main",
      home: "Home",
      services: "Services",
      allServices: "All services",
      menu: "Menu",
      howWeWork: "How we work",
      aboutUs: "About us",
      blog: "Blog",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      guidesTitle: "Our service guides",
      freeReview: "Free listing review",
      backToTop: "Nautilo Studio, back to top",
      homepage: "Nautilo Studio homepage",
      language: "Language",
    },
    guides: {
      "listing-optimization": {
        menu: "SEO and listing optimisation",
        name: "SEO and listing optimisation",
        title: "Get found, then get chosen",
        text: "Keywords, titles, images, bullets and A+ content that rank your product and convince shoppers.",
      },
      "data-analysis": {
        menu: "Data analysis",
        name: "Data analysis",
        title: "Know which numbers to fix first",
        text: "The four numbers to track for every product and a weekly routine that takes minutes.",
      },
      "ai-automation": {
        menu: "AI automation",
        name: "AI automation",
        title: "Hand the repetitive work to AI",
        text: "Which tasks AI can take over, Amazon’s own tools and how to keep every decision yours.",
      },
    },
    gallery: {
      heading: "{3} free guides. {30} pages of ideas you can use today.",
      intro:
        "One guide for each service, with examples, charts and a checklist. Free to read and download.",
      moreHeading: "Keep reading: {2} more free guides.",
      moreIntro: "Each one comes with examples, charts and a checklist you can download.",
      tenPage: "10-page guide",
      read: "Read the guide: {name}",
      download: "Download PDF",
    },
    // Shown next to PDF links in languages other than English, since the PDFs are in English.
    pdfLanguage: "",
    // The short form before a PDF guide download (blog). Answers go to the leads table.
    guideForm: {
      title: "Get the free guide",
      intro: "Tell us a little about you and the download starts right away.",
      name: "Name",
      email: "Work email",
      company: "Company or brand",
      optional: "optional",
      role: "Your role",
      choose: "Choose one",
      roles: ["Founder or owner", "E-commerce or marketplace manager", "Marketing", "Agency or consultant", "Other"],
      amazon: "Do you sell on Amazon?",
      amazonOptions: ["Yes, in the US", "Yes, in other marketplaces", "Not yet"],
      consent: "Nautilo Studio may email me about this guide and its services. I can unsubscribe at any time.",
      submit: "Download the PDF",
      sending: "Preparing your guide...",
      error: "Something went wrong. Please try again.",
      done: "Thanks! Your download has started.",
      again: "Download it again",
      cancel: "Cancel",
    },
    form: {
      name: "Name",
      email: "Email",
      listing: "Amazon listing link",
      message: "Message",
      messagePlaceholder: "What do you sell, and what do you want to improve?",
      sending: "Sending...",
      retry: "Try again, or email us at",
      privacyBefore: "We only use your details to reply to you. Read our",
      privacyLink: "privacy note",
      talk: {
        button: "Send message",
        sentTitle: "Thanks, we have your message.",
        sentText: "We will reply to the email address you gave us.",
        error: "We could not send your message.",
      },
      review: {
        button: "Get my free review",
        sentTitle: "Thanks, we have your listing.",
        sentText: "We will email our review to the address you gave us.",
        error: "We could not send your listing.",
      },
    },
    listingCompare: {
      group: "Show the example listing before or after optimisation",
      caption: "An example we wrote to show the idea, not a client result.",
      before: {
        label: "Before",
        alt: "Dim, blurry phone photo of a bamboo cutting board on a cluttered kitchen counter",
        title:
          "Bamboo Cutting Board Kitchen Chopping Board Wood Large Board For Kitchen Best Quality Cheese Board Gift",
        bullets: [
          "HIGH QUALITY BAMBOO MATERIAL VERY GOOD",
          "Many uses for kitchen",
          "Best board for you and your family",
        ],
      },
      after: {
        label: "After",
        alt: "Sharp, evenly lit photo of a bamboo cutting board with a juice groove on a white background",
        title: "Bamboo Cutting Board with Juice Groove, Large, for Meat, Bread and Cheese",
        bullets: [
          "The juice groove keeps your counter clean while you carve.",
          "Bamboo is gentle on knife edges.",
          "Wash by hand and dry upright.",
        ],
      },
    },
    team: {
      label: "The Nautilo Studio team",
      of: "of",
      previous: "Previous person",
      next: "Next person",
      scroll: "Team members",
      hint: "Pick a person to read their profile.",
      members: {
        "Filippo Verace": {
          role: "Amazon SEO Lead",
          summary:
            "Leads how shoppers find your products: the words they search for, where those words go in your listing and how it ranks after each change.",
          focus: ["Amazon SEO", "Keyword research", "Backend search terms"],
          guide: "Read the SEO and listing optimisation guide",
        },
        "Maria Giraldo": {
          role: "Listing Optimisation Lead",
          summary:
            "Leads how your listing convinces the shoppers who arrive: titles, bullet points, images and A+ content that answer their questions before they buy.",
          focus: ["Titles and bullet points", "Images and A+ content", "A/B tests"],
          guide: "Read the SEO and listing optimisation guide",
        },
        "Veronika Matkovska": {
          role: "Data Analysis Lead",
          summary:
            "Leads the numbers: your sales, traffic and conversion reports, turned into a short list of what to fix first and how to tell if it worked.",
          focus: ["Business Reports", "Conversion and ACOS", "Weekly tracking"],
          guide: "Read the data analysis guide",
        },
        "Carlo Ambrosini": {
          role: "AI Automation Lead",
          summary:
            "Leads the AI agents that take repetitive listing and reporting work off your week, and builds the tools and website we work with.",
          focus: ["AI agents", "Workflow automation", "Web and tools"],
          guide: "Read the AI automation guide",
        },
      },
    },
  },

  // Rendered on the server only.
  meta: {
    services: {
      title: "Amazon Marketing Services for US Sellers | Nautilo Studio",
      description:
        "Three Amazon marketing services for US sellers: SEO and listing optimisation, data analysis and AI automation. See what each one does and get a free review.",
    },
    home: {
      title: "Amazon Marketing Agency for US Sellers | Nautilo Studio",
      description:
        "Nautilo Studio is an Amazon marketing agency for US sellers: a digital marketing company that uses data and AI to grow your sales. Get a free listing review.",
    },
    about: {
      title: "About Nautilo Studio | Amazon Marketing for US Sellers",
      description:
        "Nautilo Studio is four master's students at TBS Education in Barcelona, building the marketing team that US Amazon sellers don't have. Meet the whole team.",
    },
    privacy: {
      title: "Privacy Note: What We Do With Your Data | Nautilo Studio",
      description: "Nautilo Studio collects your name, email and message or listing link only to reply to you, keeps them in the EU and sets no ad cookies. Ask us to delete them.",
    },
  },

  footer: {
    services: "Services",
    tagline: "Analyse. Optimise. Automate.",
    student: "A student project at TBS Education Barcelona.",
    privacy: "Privacy note",
  },

  reviewSteps: [
    "You send us a link to one Amazon listing.",
    "We review its title, bullets, A+ content and images.",
    "We email you what we’d improve first.",
  ],

  home: {
    title: "The Amazon marketing agency your store doesn’t have.",
    subtitle: "A digital marketing company for US Amazon sellers, with data and AI to help you grow and convert more.",
    getReview: "Get a free listing review",
    seeServices: "See our services",
    notSure: "Not sure what you need?",
    talk: "Talk to us",
    statement:
      "Running an Amazon store takes enough time. Improving every listing shouldn’t be on you alone.",
    statementText:
      "You already sell a good product on Amazon. Most digital marketing firms do the work for you and tools leave you on your own, so we work on it with you.",
    // Home: free PDF guides and the latest blog posts (ResourcesSection).
    resources: {
      heading: "Free guides and articles for Amazon sellers.",
      intro: "Download a 10-page PDF guide, or read our latest articles on what changes on Amazon and what to do about it.",
      guidesLabel: "Free PDF guides",
      guideMeta: "PDF · 10 pages",
      guideCta: "Get the free PDF",
      blogLabel: "Latest from the blog",
      blogCta: "Read all articles",
    },
    servicesHeading: "Amazon marketing agency services: which sounds like your store?",
    services: [
      {
        title: "SEO and listing optimisation",
        problem: "“Shoppers can’t find my product, or they look but don’t buy.”",
        text: "We put the words your buyers search for into your listing, then rework titles, bullets, images and A+ content so more visitors buy.",
        alt: "Screen showing an optimised Amazon listing next to the search results where it ranks first and its keyword ranks",
        guide: "Read our SEO and listing optimisation guide",
      },
      {
        title: "Data analysis",
        problem: "“I don’t know which numbers matter.”",
        text: "We turn your sales, traffic and conversion data into clear next steps.",
        alt: "iMac showing an Amazon store analytics dashboard with sales, orders, conversion rate, ACOS, Featured Offer and ad campaigns",
        guide: "Read our data analysis guide",
      },
      {
        title: "Amazon marketing automation",
        problem: "“Repetitive work eats my week.”",
        text: "We set up AI agents that handle repetitive listing and reporting tasks for you.",
        alt: "Laptop with an Amazon seller dashboard and an AI chip linked to listing, search, report and settings icons",
        guide: "Read our AI automation guide",
      },
    ],
    howHeading: "Grow chamber by chamber.",
    howText:
      "A nautilus adds one chamber at a time along the golden spiral. Your store can grow the same way.",
    steps: [
      {
        word: "Analyse.",
        text: "We read your sales, traffic and conversion data and turn it into clear next steps.",
      },
      {
        word: "Optimise.",
        text: "We work on keywords, titles, bullets, A+ content and images, one change at a time.",
      },
      { word: "Automate.", text: "AI agents take over the repetitive listing and reporting tasks." },
    ],
    reviewHeading: "Get a free listing review.",
    contactHeading: "Prefer to talk? Tell us about your store.",
    contactOffer: "Book a free 30-minute consultancy session.",
    contactText: "Say what you sell and what you want to improve. We reply by email.",
    contactInbox: "Prefer your own inbox? Write to",
  },

  marquee: {
    title: "Built for founder-led US sellers in",
    categories: [
      "Kitchen",
      "Home",
      "Outdoor",
      "Beauty",
      "Pet",
      "Baby",
      "Health and wellness",
      "Sports",
      "Garden",
      "Toys",
      "Coffee and tea",
      "Apparel",
    ],
  },

  // The small looping example scenes. All numbers are examples.
  demo: {
    tag: "Example",
    thisWeek: "This week",
    metrics: [
      ["Sessions", "2,140"],
      ["Conversion", "9.5%"],
      ["ACOS", "22%"],
    ],
    before: "Before",
    after: "After",
    beforeTitle: "Bamboo Cutting Board Kitchen Chopping Board Wood Large Best Quality Gift",
    beforeText: "HIGH QUALITY BAMBOO MATERIAL VERY GOOD",
    afterTitle: "Bamboo Cutting Board with Juice Groove, Large, for Meat and Cheese",
    afterText: "The juice groove keeps your counter clean.",
    summary: "Monday summary",
    summaryLines: [
      "Sales up on the cutting board.",
      "Mug set lost the Featured Offer.",
      "Two search terms spend above your margin.",
    ],
    approve: "Approve",
    edit: "Edit",
    search: "insulated water bottle",
    otherBrand: "Other brand",
    yourProduct: "Your product",
    topResult: "Top result",
  },

  caseStudy: {
    label: "Case study",
    heading: "From a 30-minute draft to an 88/100 listing in 8 minutes.",
    text: "The brand gave us the facts. AI organised them into a listing that passes Amazon’s rules check, ready for the brand’s final review.",
    before: "Before",
    beforeTitle: "Brand draft",
    connector: "AI organises your supplied facts",
    after: "After",
    afterTitle: "Suggested listing",
    pending: "Draft · pending review",
    beforeListing: {
      title: "Water bottle black",
      copy: "24 oz bottle. Stainless steel. Screw lid. Charcoal.",
      rows: [
        ["Listing score", "41 / 100"],
        ["Search terms covered", "2 of 9"],
        ["Time to write", "30 min"],
      ],
    },
    afterListing: {
      title: "24 oz Stainless Steel Water Bottle with Screw-Top Lid, Charcoal",
      bullets: [
        "24 oz capacity for your daily routine",
        "Stainless-steel body in a charcoal finish",
        "Screw-top lid for straightforward opening and closing",
      ],
      rows: [
        ["Listing score", "88 / 100"],
        ["Search terms covered", "9 of 9"],
        ["Brand voice match", "94%"],
        ["Amazon rules check", "Passed"],
        ["Time with AI + review", "8 min"],
      ],
    },
  },

  landing: {
    // The box under the hero visual on service pages; it jumps to the free review form.
    quickWin: { title: "Improve your listing in 10 minutes!", text: "Send us one listing and get your first fixes, free." },
    breadcrumb: "Breadcrumb",
    home: "Home",
    getReview: "Get my free listing review",
    // Under the main button on service pages, as a short reassurance line.
    ctaNote: "Free · No commitment · First fixes by email",
    downloadPdf: "Download the free PDF guide",
    talk: "Talk to us",
    shortAnswer: "Short answer",
    pdfLabel: "Free PDF guide · 10 pages",
    pdfText: "Download the full guide, with examples, charts and a checklist.",
    caseLabel: "Case study",
    caseText: "See a brand’s draft next to the listing we suggested.",
    faq: "Frequently asked questions",
    more: "More from Nautilo Studio",
    moreServices: "Our services for Amazon sellers",
    moreHow: "How we work",
    moreTalk: "Talk to us",
    blogLabel: "From our blog",
    blogText: "Practical, step-by-step articles for Amazon sellers, updated as Amazon changes.",
    blogStart: "Start with:",
    blogButton: "Visit the blog",
    reviewHeading: "Want us to check your listing?",
    reviewText: "Send one listing and we’ll tell you, for free, what to fix first.",
  },

  about: {
    label: "About us",
    title: "Four master’s students. One marketing team for your Amazon store.",
    intro:
      "We met at TBS Education in Barcelona, where we are studying for our master’s degrees. Nautilo Studio is what we built together: the marketing team that US Amazon sellers don’t have.",
    facts: ["4 founders", "3 services", "Based in Barcelona", "Built for US Amazon sellers"],
    storyHeading: "Our story",
    story: [
      {
        heading: "What we saw",
        text: "US sellers with a good product on Amazon and no one to market it. Agencies do the work for them and keep the know-how. Tools hand them data and leave them alone.",
      },
      {
        heading: "Our idea",
        text: "Bring data, AI and hands-on work together, and do it with the seller, not for them. We start with one listing, show what changes and grow from there.",
      },
      {
        heading: "Why a nautilus",
        text: "A nautilus grows one chamber at a time along the golden spiral. We help stores grow the same way: one listing, one keyword, one report at a time.",
      },
    ],
    teamHeading: "Meet the team.",
    teamText:
      "We all work on almost everything, but each of us leads one service, so you always know who to talk to.",
    reviewHeading: "Start with one listing.",
    reviewText: "Send it to us and the four of us will tell you, for free, what to fix first.",
  },

  thanks: {
    metaTitle: "Thank you | Nautilo Studio",
    back: "Back to the homepage",
    review: {
      label: "Listing received",
      title: "Thanks. We have your listing.",
      text: "We’ll review its title, bullets, A+ content and images, and email you what we would improve first. Check your inbox, and your spam folder just in case.",
    },
    talk: {
      label: "Message received",
      title: "Thanks. We have your message.",
      text: "One of us will reply to the email address you gave us. Check your inbox, and your spam folder just in case.",
    },
    guidesHeading: "While you wait: {3} free guides.",
    guidesIntro: "One guide for each service, with examples, charts and a checklist.",
  },

  blog: {
    metaTitle: "Amazon Seller Blog: Practical SEO Guides | Nautilo Studio",
    metaDescription: "News and practical guides for US Amazon sellers on SEO, listings, data and AI, updated as Amazon changes. Read the latest posts and get our free PDF guides.",
    label: "Blog",
    h1: "The Amazon seller blog: what changed, and what to do about it.",
    intro: "Amazon keeps changing how search works, what its rules allow and which tools sellers get in Seller Central. We follow those changes for you and turn them into short, practical articles for US sellers: what is new, why it matters and what to change in your listings.",
    introMore: "This blog is updated continuously. New articles go up as new things happen on Amazon, so bookmark this page and check back. For the full picture, start with our",
    introLink: "SEO and listing optimisation guide",
    tags: ["Updated continuously", "Amazon news, explained", "How-to articles", "Free PDF guides"],
    guidesHeading: "Free PDF guides",
    guidesIntro: "One 10-page guide for each of our services, with examples, charts and a checklist. Free to download.",
    pdfMeta: "PDF · 10 pages",
    articlesHeading: "Latest articles",
    readPost: "Read the post on",
    minRead: "min read",
    photo: "Photo",
    by: "By",
    updated: "Updated",
    contents: "In this guide",
    sources: "Sources",
    nextStep: "Next step",
  },
  servicesPage: {
    seoPhotoAlt: "Laptop showing an Amazon SEO dashboard with keyword rankings and organic traffic",
    h1: "Amazon marketing services for US sellers",
    intro:
      "Four services, one goal: more of the right shoppers find your product and buy it. Pick the problem that sounds like your store and open its page.",
    closing: "Not sure where to start? Send us one listing and we’ll tell you, for free.",
  },
  privacy: {
    back: "Back to the homepage",
    title: "Privacy note",
    paragraphs: [
      "Nautilo Studio is a student project at TBS Education Barcelona, run by Carlo Ambrosini, Maria Giraldo, Veronika Matkovska and Filippo Verace.",
      "When you use one of our forms we collect your name, your email address and your message or listing link. We use them only to reply to you.",
      "When you download one of our PDF guides we also ask for your company, your role and whether you sell on Amazon. We use them to understand who reads our guides and, if you agree, to email you about the guide and our services.",
      "Your message is stored in our Supabase database, hosted in the European Union. This site sets no advertising cookies.",
    ],
    contact: "To see or delete your details, write to",
  },
};

export default en;
export type Dictionary = typeof en;
export type CommonDictionary = Dictionary["common"];
