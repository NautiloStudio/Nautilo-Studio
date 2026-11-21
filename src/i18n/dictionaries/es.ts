import type { Dictionary } from "./en";

const es: Dictionary = {
  common: {
    skip: "Ir al contenido",
    loading: "Cargando",
    reloading: "Recargando la página",
    header: {
      main: "Principal",
      home: "Inicio",
      services: "Servicios",
      allServices: "Todos los servicios",
      menu: "Menú",
      howWeWork: "Cómo trabajamos",
      aboutUs: "Quiénes somos",
      blog: "Blog",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      guidesTitle: "Nuestras guías de servicios",
      freeReview: "Revisión gratis",
      backToTop: "Nautilo Studio, volver arriba",
      homepage: "Página de inicio de Nautilo Studio",
      language: "Idioma",
    },
    guides: {
      "listing-optimization": {
        menu: "SEO y optimización de fichas",
        name: "SEO y optimización de fichas",
        title: "Que te encuentren y te elijan",
        text: "Palabras clave, títulos, imágenes, viñetas y contenido A+ para posicionar tu producto y convencer al comprador.",
      },
      "data-analysis": {
        menu: "Análisis de datos",
        name: "Análisis de datos",
        title: "Sabe qué números arreglar primero",
        text: "Los cuatro números que hay que seguir en cada producto y una rutina semanal de pocos minutos.",
      },
      "ai-automation": {
        menu: "Automatización con IA",
        name: "Automatización con IA",
        title: "Deja el trabajo repetitivo a la IA",
        text: "Qué tareas puede asumir la IA, las herramientas de Amazon y cómo seguir tomando tú cada decisión.",
      },
    },
    gallery: {
      heading: "{3} guías gratuitas. {30} páginas de ideas que puedes usar hoy.",
      intro:
        "Una guía por servicio, con ejemplos, gráficos y una lista de comprobación. Gratis para leer y descargar.",
      moreHeading: "Sigue leyendo: {2} guías gratuitas más.",
      moreIntro: "Cada una incluye ejemplos, gráficos y una lista de comprobación descargable.",
      tenPage: "Guía de 10 páginas",
      read: "Leer la guía: {name}",
      download: "Descargar PDF",
    },
    pdfLanguage: "en inglés",
    // The short form before a PDF guide download (blog). Answers go to the leads table.
    guideForm: {
      title: "Consigue la guía gratis",
      intro: "Cuéntanos un poco sobre ti y la descarga empieza enseguida.",
      name: "Nombre",
      email: "Email de trabajo",
      company: "Empresa o marca",
      optional: "opcional",
      role: "Tu puesto",
      choose: "Elige una opción",
      roles: ["Fundador o propietario", "Responsable de e-commerce o marketplaces", "Marketing", "Agencia o consultor", "Otro"],
      amazon: "¿Vendes en Amazon?",
      amazonOptions: ["Sí, en EE. UU.", "Sí, en otros marketplaces", "Todavía no"],
      consent: "Nautilo Studio puede escribirme sobre esta guía y sus servicios. Puedo darme de baja cuando quiera.",
      submit: "Descargar el PDF",
      sending: "Preparando tu guía...",
      error: "Algo ha fallado. Inténtalo de nuevo.",
      done: "¡Gracias! La descarga ha empezado.",
      again: "Descargarla otra vez",
      cancel: "Cancelar",
    },
    form: {
      name: "Nombre",
      email: "Correo electrónico",
      listing: "Enlace a tu ficha de Amazon",
      message: "Mensaje",
      messagePlaceholder: "¿Qué vendes y qué quieres mejorar?",
      sending: "Enviando...",
      retry: "Inténtalo de nuevo o escríbenos a",
      privacyBefore: "Solo usamos tus datos para responderte. Lee nuestra",
      privacyLink: "nota de privacidad",
      talk: {
        button: "Enviar mensaje",
        sentTitle: "Gracias, hemos recibido tu mensaje.",
        sentText: "Te responderemos al correo que nos has indicado.",
        error: "No hemos podido enviar tu mensaje.",
      },
      review: {
        button: "Quiero mi revisión gratis",
        sentTitle: "Gracias, hemos recibido tu ficha.",
        sentText: "Te enviaremos la revisión al correo que nos has indicado.",
        error: "No hemos podido enviar tu ficha.",
      },
    },
    listingCompare: {
      group: "Ver la ficha de ejemplo antes o después de optimizarla",
      caption: "Un ejemplo que escribimos para mostrar la idea, no el resultado de un cliente.",
      before: {
        label: "Antes",
        alt: "Foto de móvil oscura y borrosa de una tabla de cortar de bambú en una encimera desordenada",
        title:
          "Tabla de Cortar Bambú Cocina Tabla Madera Grande Tabla Para Cocina Mejor Calidad Tabla de Quesos Regalo",
        bullets: [
          "MATERIAL DE BAMBÚ DE ALTA CALIDAD MUY BUENO",
          "Muchos usos para la cocina",
          "La mejor tabla para ti y tu familia",
        ],
      },
      after: {
        label: "Después",
        alt: "Foto nítida y bien iluminada de una tabla de cortar de bambú con canal para jugos sobre fondo blanco",
        title: "Tabla de cortar de bambú con canal para jugos, grande, para carne, pan y queso",
        bullets: [
          "El canal recoge los jugos y mantiene limpia la encimera mientras cortas.",
          "El bambú cuida el filo de los cuchillos.",
          "Lavar a mano y secar en vertical.",
        ],
      },
    },
    team: {
      label: "El equipo de Nautilo Studio",
      of: "de",
      previous: "Persona anterior",
      next: "Persona siguiente",
      scroll: "Miembros del equipo",
      hint: "Elige a una persona para leer su perfil.",
      members: {
        "Filippo Verace": {
          role: "Responsable de SEO en Amazon",
          summary:
            "Se encarga de cómo te encuentran los compradores: las palabras que buscan, dónde van en tu ficha y cómo cambia su posición tras cada cambio.",
          focus: ["SEO en Amazon", "Búsqueda de palabras clave", "Términos de búsqueda"],
          guide: "Leer la guía de SEO y optimización de fichas",
        },
        "Maria Giraldo": {
          role: "Responsable de optimización de fichas",
          summary:
            "Se encarga de que tu ficha convenza a quien llega: títulos, viñetas, imágenes y contenido A+ que responden a sus dudas antes de comprar.",
          focus: ["Títulos y viñetas", "Imágenes y contenido A+", "Tests A/B"],
          guide: "Leer la guía de SEO y optimización de fichas",
        },
        "Veronika Matkovska": {
          role: "Responsable de análisis de datos",
          summary:
            "Se encarga de los números: tus informes de ventas, tráfico y conversión, convertidos en una lista corta de qué arreglar primero y cómo saber si ha funcionado.",
          focus: ["Informes empresariales", "Conversión y ACOS", "Seguimiento semanal"],
          guide: "Leer la guía de análisis de datos",
        },
        "Carlo Ambrosini": {
          role: "Responsable de automatización con IA",
          summary:
            "Se encarga de los agentes de IA que te quitan de encima el trabajo repetitivo de fichas e informes, y crea las herramientas y la web con las que trabajamos.",
          focus: ["Agentes de IA", "Automatización de procesos", "Web y herramientas"],
          guide: "Leer la guía de automatización con IA",
        },
      },
    },
  },

  meta: {
    services: {
      title: "Servicios de marketing en Amazon en EE. UU. | Nautilo Studio",
      description:
        "Tres servicios de marketing en Amazon para vendedores en EE. UU.: SEO y fichas, análisis de datos y automatización con IA. Conócelos y pide tu revisión gratis.",
    },
    home: {
      title: "Agencia de marketing Amazon para marcas | Nautilo Studio",
      description:
        "El equipo de marketing que le falta a tu tienda de Amazon. Datos e IA para que los vendedores de Amazon en EE. UU. crezcan y vendan más. Revisión gratis.",
    },
    about: {
      title: "Quiénes somos | Nautilo Studio, marketing en Amazon",
      description:
        "Nautilo Studio son cuatro estudiantes de máster de TBS Education en Barcelona que crean el equipo de marketing que les falta a los vendedores de Amazon.",
    },
    privacy: {
      title: "Privacidad: qué hacemos con tus datos | Nautilo Studio",
      description: "Nautilo Studio recoge tu nombre, email y mensaje o enlace solo para responderte, los guarda en la UE y no usa cookies publicitarias. Pide que los borremos.",
    },
  },

  footer: {
    services: "Servicios",
    tagline: "Analiza. Optimiza. Automatiza.",
    student: "Un proyecto de estudiantes de TBS Education Barcelona.",
    privacy: "Nota de privacidad",
  },

  reviewSteps: [
    "Nos envías el enlace a una ficha de Amazon.",
    "Revisamos su título, viñetas, contenido A+ e imágenes.",
    "Te escribimos qué mejoraríamos primero.",
  ],

  home: {
    title: "El equipo de marketing que le falta a tu tienda de Amazon.",
    subtitle: "Datos e IA para que los vendedores de Amazon en EE. UU. crezcan y vendan más.",
    getReview: "Revisión gratis de tu ficha",
    seeServices: "Ver nuestros servicios",
    notSure: "¿No sabes qué necesitas?",
    talk: "Habla con nosotros",
    statement:
      "Llevar una tienda en Amazon ya te quita bastante tiempo. Mejorar cada ficha no debería depender solo de ti.",
    statementText:
      "Ya vendes un buen producto en Amazon. Las agencias lo hacen por ti y las herramientas te dejan solo, así que nosotros trabajamos contigo.",
    // Home: free PDF guides and the latest blog posts (ResourcesSection).
    resources: {
      heading: "Guías y artículos gratis para vendedores de Amazon.",
      intro: "Descarga una guía en PDF de 10 páginas o lee nuestros últimos artículos sobre lo que cambia en Amazon y qué hacer al respecto.",
      guidesLabel: "Guías PDF gratis",
      guideMeta: "PDF · 10 páginas",
      guideCta: "Consigue el PDF gratis",
      blogLabel: "Lo último del blog",
      blogCta: "Leer todos los artículos",
    },
    servicesHeading: "¿Cuál de estas frases describe tu tienda?",
    services: [
      {
        title: "SEO y optimización de fichas",
        problem: "«No encuentran mi producto, o miran pero no compran».",
        text: "Ponemos en tu ficha las palabras que buscan tus compradores y rehacemos títulos, viñetas, imágenes y contenido A+ para que más visitantes compren.",
        alt: "Pantalla con una ficha de Amazon optimizada junto a los resultados de búsqueda donde aparece en primer lugar y su posición por palabra clave",
        guide: "Leer nuestra guía de SEO y optimización de fichas",
      },
      {
        title: "Análisis de datos",
        problem: "«No sé qué números importan».",
        text: "Convertimos tus datos de ventas, tráfico y conversión en próximos pasos claros.",
        alt: "iMac con un panel de analítica de una tienda de Amazon: ventas, pedidos, tasa de conversión, ACOS, Oferta destacada y campañas publicitarias",
        guide: "Leer nuestra guía de análisis de datos",
      },
      {
        title: "Automatización con IA",
        problem: "«El trabajo repetitivo se come mi semana».",
        text: "Configuramos agentes de IA que se encargan de las tareas repetitivas de fichas e informes.",
        alt: "Portátil con un panel de vendedor de Amazon y un chip de IA conectado a iconos de fichas, búsqueda, informes y ajustes",
        guide: "Leer nuestra guía de automatización con IA",
      },
    ],
    howHeading: "Crece cámara a cámara.",
    howText:
      "El nautilo añade una cámara cada vez, siguiendo la espiral áurea. Tu tienda puede crecer de la misma forma.",
    steps: [
      {
        word: "Analiza.",
        text: "Leemos tus datos de ventas, tráfico y conversión y los convertimos en próximos pasos claros.",
      },
      {
        word: "Optimiza.",
        text: "Trabajamos palabras clave, títulos, viñetas, contenido A+ e imágenes, un cambio cada vez.",
      },
      {
        word: "Automatiza.",
        text: "Los agentes de IA se encargan de las tareas repetitivas de fichas e informes.",
      },
    ],
    reviewHeading: "Pide una revisión gratis de tu ficha.",
    contactHeading: "¿Prefieres hablar? Cuéntanos sobre tu tienda.",
    contactOffer: "Reserva una consultoría gratuita de 30 minutos.",
    contactText: "Dinos qué vendes y qué quieres mejorar. Te respondemos por correo.",
    contactInbox: "¿Prefieres tu propio correo? Escríbenos a",
  },

  marquee: {
    title: "Pensado para vendedores de EE. UU. dirigidos por sus fundadores en",
    categories: [
      "Cocina",
      "Hogar",
      "Aire libre",
      "Belleza",
      "Mascotas",
      "Bebé",
      "Salud y bienestar",
      "Deportes",
      "Jardín",
      "Juguetes",
      "Café y té",
      "Ropa",
    ],
  },

  demo: {
    tag: "Ejemplo",
    thisWeek: "Esta semana",
    metrics: [
      ["Sesiones", "2.140"],
      ["Conversión", "9,5 %"],
      ["ACOS", "22 %"],
    ],
    before: "Antes",
    after: "Después",
    beforeTitle: "Tabla de Cortar Bambú Cocina Tabla Madera Grande Mejor Calidad Regalo",
    beforeText: "MATERIAL DE BAMBÚ DE ALTA CALIDAD MUY BUENO",
    afterTitle: "Tabla de cortar de bambú con canal para jugos, grande, para carne y queso",
    afterText: "El canal para jugos mantiene limpia la encimera.",
    summary: "Resumen del lunes",
    summaryLines: [
      "Suben las ventas de la tabla de cortar.",
      "El set de tazas ha perdido la Oferta destacada.",
      "Dos términos de búsqueda gastan más que tu margen.",
    ],
    approve: "Aprobar",
    edit: "Editar",
    search: "botella de agua térmica",
    otherBrand: "Otra marca",
    yourProduct: "Tu producto",
    topResult: "Primer resultado",
  },

  caseStudy: {
    label: "Caso práctico",
    heading: "De un borrador de 30 minutos a una ficha de 88/100 en 8 minutos.",
    text: "El vendedor nos dio los datos. La IA los ordenó en una ficha que pasa la revisión de normas de Amazon, lista para la revisión final del vendedor.",
    before: "Antes",
    beforeTitle: "Borrador del vendedor",
    connector: "La IA ordena los datos que nos das",
    after: "Después",
    afterTitle: "Ficha sugerida",
    pending: "Borrador · pendiente de revisión",
    beforeListing: {
      title: "Botella agua negra",
      copy: "Botella 24 oz. Acero inoxidable. Tapón de rosca. Carbón.",
      rows: [
        ["Puntuación de la ficha", "41 / 100"],
        ["Términos de búsqueda cubiertos", "2 de 9"],
        ["Tiempo de redacción", "30 min"],
      ],
    },
    afterListing: {
      title: "Botella de agua de acero inoxidable de 24 oz con tapón de rosca, color carbón",
      bullets: [
        "Capacidad de 24 oz para tu día a día",
        "Cuerpo de acero inoxidable con acabado color carbón",
        "Tapón de rosca fácil de abrir y cerrar",
      ],
      rows: [
        ["Puntuación de la ficha", "88 / 100"],
        ["Términos de búsqueda cubiertos", "9 de 9"],
        ["Coincidencia con el tono de marca", "94 %"],
        ["Revisión de normas de Amazon", "Superada"],
        ["Tiempo con IA + revisión", "8 min"],
      ],
    },
  },

  landing: {
    // The box under the hero visual on service pages; it jumps to the free review form.
    quickWin: { title: "¡Mejora tu ficha en 10 minutos!", text: "Envíanos una ficha y recibe tus primeras mejoras gratis." },
    breadcrumb: "Ruta de navegación",
    home: "Inicio",
    getReview: "Revisión gratis de tu ficha",
    downloadPdf: "Descargar la guía gratuita en PDF",
    talk: "Habla con nosotros",
    shortAnswer: "Respuesta corta",
    pdfLabel: "Guía gratuita en PDF · 10 páginas",
    pdfText: "Descarga la guía completa, con ejemplos, gráficos y una lista de comprobación.",
    caseLabel: "Caso práctico",
    caseText: "Mira el borrador de un vendedor junto a la ficha que le sugerimos.",
    faq: "Preguntas frecuentes",
    more: "Más de Nautilo Studio",
    moreServices: "Nuestros servicios para vendedores de Amazon",
    moreHow: "Cómo trabajamos",
    moreTalk: "Habla con nosotros",
    blogLabel: "Desde nuestro blog",
    blogText: "Artículos prácticos, paso a paso, para vendedores de Amazon, actualizados cuando Amazon cambia.",
    blogStart: "Empieza por:",
    blogButton: "Ir al blog",
    reviewHeading: "¿Quieres que revisemos tu ficha?",
    reviewText: "Envíanos una ficha y te diremos gratis qué arreglar primero.",
  },

  about: {
    label: "Quiénes somos",
    title: "Cuatro estudiantes de máster. Un equipo de marketing para tu tienda de Amazon.",
    intro:
      "Nos conocimos en TBS Education en Barcelona, donde estudiamos nuestros másteres. Nautilo Studio es lo que hemos creado juntos: el equipo de marketing que les falta a los vendedores de Amazon en EE. UU.",
    facts: ["4 fundadores", "3 servicios", "Con sede en Barcelona", "Para vendedores de Amazon en EE. UU."],
    storyHeading: "Nuestra historia",
    story: [
      {
        heading: "Lo que vimos",
        text: "Vendedores en EE. UU. con un buen producto en Amazon y nadie que lo promocione. Las agencias hacen el trabajo por ellos y se quedan con el conocimiento. Las herramientas les dan datos y los dejan solos.",
      },
      {
        heading: "Nuestra idea",
        text: "Unir datos, IA y trabajo práctico, y hacerlo con el vendedor, no por él. Empezamos con una ficha, mostramos qué cambia y crecemos desde ahí.",
      },
      {
        heading: "Por qué un nautilo",
        text: "El nautilo crece una cámara cada vez, siguiendo la espiral áurea. Ayudamos a las tiendas a crecer igual: una ficha, una palabra clave, un informe cada vez.",
      },
    ],
    teamHeading: "Conoce al equipo.",
    teamText:
      "Todos trabajamos en casi todo, pero cada uno lidera un servicio, para que siempre sepas con quién hablar.",
    reviewHeading: "Empieza con una ficha.",
    reviewText: "Envíanosla y los cuatro te diremos gratis qué arreglar primero.",
  },

  thanks: {
    metaTitle: "Gracias | Nautilo Studio",
    back: "Volver a la página de inicio",
    review: {
      label: "Ficha recibida",
      title: "Gracias. Hemos recibido tu ficha.",
      text: "Revisaremos su título, viñetas, contenido A+ e imágenes, y te escribiremos qué mejoraríamos primero. Mira tu bandeja de entrada y, por si acaso, la carpeta de spam.",
    },
    talk: {
      label: "Mensaje recibido",
      title: "Gracias. Hemos recibido tu mensaje.",
      text: "Uno de nosotros te responderá al correo que nos has indicado. Mira tu bandeja de entrada y, por si acaso, la carpeta de spam.",
    },
    guidesHeading: "Mientras tanto: {3} guías gratuitas.",
    guidesIntro: "Una guía por servicio, con ejemplos, gráficos y una lista de comprobación.",
  },

  blog: {
    metaTitle: "Blog para vendedores de Amazon: guías SEO | Nautilo Studio",
    metaDescription: "Noticias y guías prácticas para vendedores de Amazon en EE. UU. sobre SEO, fichas, datos e IA, al día con cada cambio. Lee los artículos y las guías PDF.",
    label: "Blog",
    h1: "El blog para vendedores de Amazon: qué ha cambiado y qué hacer.",
    intro: "Amazon cambia sin parar cómo funciona su buscador, qué permiten sus normas y qué herramientas da a los vendedores en Seller Central. Seguimos esos cambios por ti y los convertimos en artículos breves y prácticos para vendedores en EE. UU.: qué hay de nuevo, por qué importa y qué cambiar en tus fichas.",
    introMore: "Este blog se actualiza de forma continua. Publicamos nuevos artículos a medida que pasan cosas en Amazon, así que guarda esta página y vuelve pronto. Para tener la visión completa, empieza por nuestra",
    introLink: "guía de SEO y optimización de fichas",
    tags: ["Actualizado de forma continua", "Noticias de Amazon, explicadas", "Artículos prácticos", "Guías PDF gratis"],
    guidesHeading: "Guías PDF gratis",
    guidesIntro: "Una guía de 10 páginas para cada uno de nuestros servicios, con ejemplos, gráficos y una lista de comprobación. Descarga gratuita.",
    pdfMeta: "PDF · 10 páginas",
    articlesHeading: "Últimos artículos",
    readPost: "Leer el artículo sobre",
    minRead: "min de lectura",
    photo: "Foto",
    by: "Por",
    updated: "Actualizado",
    contents: "En esta guía",
    sources: "Fuentes",
    nextStep: "Siguiente paso",
  },
  servicesPage: {
    seoPhotoAlt: "Portátil con un panel de SEO en Amazon: posiciones de palabras clave y tráfico orgánico",
    h1: "Servicios de marketing en Amazon para vendedores en EE. UU.",
    intro:
      "Cuatro servicios, un objetivo: que más compradores adecuados encuentren tu producto y lo compren. Elige el problema que se parece al de tu tienda y abre su página.",
    closing: "¿No sabes por dónde empezar? Envíanos una ficha y te lo decimos gratis.",
  },
  privacy: {
    back: "Volver a la página de inicio",
    title: "Nota de privacidad",
    paragraphs: [
      "Nautilo Studio es un proyecto de estudiantes de TBS Education Barcelona, a cargo de Carlo Ambrosini, Maria Giraldo, Veronika Matkovska y Filippo Verace.",
      "Cuando usas uno de nuestros formularios, recogemos tu nombre, tu correo electrónico y tu mensaje o el enlace a tu ficha. Solo los usamos para responderte.",
      "Cuando descargas una de nuestras guías en PDF te pedimos también tu empresa, tu puesto y si vendes en Amazon. Los usamos para entender quién lee nuestras guías y, si lo aceptas, para escribirte sobre la guía y nuestros servicios.",
      "Tu mensaje se guarda en nuestra base de datos de Supabase, alojada en la Unión Europea. Esta web no usa cookies publicitarias.",
    ],
    contact: "Para ver o borrar tus datos, escribe a",
  },
};

export default es;
