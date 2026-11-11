import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const AMAZON_SEO_GUIDE = "https://sell.amazon.com/blog/amazon-seo";
const TITLE_RULES = "https://sellercentral.amazon.com/gp/help/external/GYTR6SYGFA5E3EQC";
const SEARCH_TERMS_HELP = "https://sellercentral.amazon.com/help/hub/reference/external/G23501";

const p = (path: string) => localePath("es", path);

const title = "SEO B2B para vendedores de Amazon: sube más | Nautilo Studio";
const description =
  "Nautilo Studio, agencia SEO B2B para vendedores de Amazon en EE. UU.: encontramos lo que buscan tus clientes y lo ponemos donde Amazon lo lee. Pide tu revisión.";

const page: GuideCopy["page"] = {
  slug: "amazon-seo",
  breadcrumb: "SEO B2B para Amazon",
  question: "SEO B2B para vendedores de Amazon: cómo posicionar mejor",
  answer:
    "El SEO B2B para vendedores de Amazon, o SEO en Amazon, es cómo pones tu producto delante de quien lo busca. Amazon muestra los productos que mejor responden a una búsqueda y que los compradores tienen más probabilidades de comprar. Pon las palabras que escriben los compradores en tu título, tus viñetas y tus términos de búsqueda ocultos, y haz que la ficha convenza lo suficiente para vender. Esas ventas, junto con una ficha de calidad, hacen subir el producto con el tiempo.",
  description,
  image: {
    src: "/img/amazon-seo-dashboard.webp",
    alt: "Portátil con un panel de SEO en Amazon: posiciones de palabras clave y tráfico orgánico",
    tile: "bg-cyan",
  },
  updated: "2026-11-11",
  facts: [
    { value: 200, label: "Caracteres como límite del título en la guía SEO de Amazon" },
    { value: 60, label: "Caracteres que Amazon recomienda para el título" },
    { value: 2, suffix: "×", label: "Veces como máximo que una palabra puede aparecer en el título" },
    { value: 4, label: "Lugares donde encontrar búsquedas reales" },
  ],
  sections: [
    {
      id: "how-ranking-works",
      heading: "Factores de ranking del SEO en Amazon: qué decide tu posición",
      body: (
        <>
          <p>
            Cuando un comprador busca, Amazon tiene que elegir qué productos mostrar primero. Elige las fichas que mejor responden a las palabras escritas y que el comprador tiene más probabilidades de comprar. Por eso el SEO B2B para vendedores de Amazon empieza por la relevancia y termina en las ventas.
          </p>
          <p>
            La relevancia sale de tu título, tus viñetas, tu descripción y tus términos de búsqueda ocultos: si una palabra no aparece en ninguno, el producto casi nunca sale para esa búsqueda. Después viene la conversión. Los compradores hacen clic y compran cuando les convencen las imágenes, el precio, las reseñas y la oferta destacada, y los productos que venden de forma constante suelen mantener su posición. Amazon también dice que{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              la calidad de la ficha y la salud de la cuenta pueden influir en el ranking
            </a>
            , así que una ficha limpia y completa importa tanto como las palabras correctas.
          </p>
          <blockquote>La relevancia hace que tu producto aparezca. Las ventas lo mantienen arriba.</blockquote>
        </>
      ),
    },
    {
      id: "find-keywords",
      heading: "Búsqueda de palabras clave en Amazon: lo que escriben tus compradores",
      body: (
        <>
          <p>
            Las buenas palabras clave salen de lo que los compradores escriben de verdad, no de suposiciones. El inicio más rápido es la barra de búsqueda de Amazon: escribe la palabra principal de tu producto y apunta las sugerencias, porque vienen de búsquedas reales.
          </p>
          <p>
            Seller Central añade datos gratis. Product Opportunity Explorer muestra los principales términos de búsqueda de un nicho. Brand Analytics muestra qué búsquedas llevan a clics y ventas en las marcas registradas. El informe de términos de búsqueda de tus anuncios Sponsored Products recoge las búsquedas exactas que te trajeron compradores. Juntas son cuatro fuentes de búsquedas reales y una lista clara de por dónde empezar.
          </p>
        </>
      ),
    },
    {
      id: "where-to-put-keywords",
      heading: "Dónde van tus palabras clave de Amazon: título, viñetas y términos ocultos",
      body: (
        <>
          <p>
            El título es lo que más pesa, así que debe decir qué es el producto en las primeras palabras. La guía de Amazon fija{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              un límite de 200 caracteres y recomienda 60 o menos
            </a>
            , y sus{" "}
            <a href={TITLE_RULES} target="_blank" rel="noopener noreferrer">
              reglas para títulos
            </a>{" "}
            permiten repetir una palabra como máximo dos veces.
          </p>
          <p>
            Cada viñeta explica un beneficio y es el sitio natural para tus palabras clave secundarias. La descripción y el contenido A+ cubren materiales, tamaño, cuidados y qué incluye la caja. Los términos de búsqueda ocultos recogen sinónimos y errores ortográficos que no caben en otro sitio, sin repeticiones, marcas ni ASIN. Comprueba el{" "}
            <a href={SEARCH_TERMS_HELP} target="_blank" rel="noopener noreferrer">
              límite de longitud actual
            </a>
             y sigue nuestra guía paso a paso para{" "}
            <Link href={p("/blog/amazon-backend-keywords")}>rellenar las palabras clave ocultas de Amazon</Link>.
          </p>
        </>
      ),
    },
    {
      id: "common-mistakes",
      heading: "Errores de SEO en Amazon que te cuestan posiciones",
      body: (
        <>
          <p>
            El error más común es llenar el título de palabras clave: un título con todos los términos posibles se lee mal y puede incumplir las reglas de Amazon. Le sigue usar marcas de la competencia, que Amazon no permite ni en la ficha ni en los términos de búsqueda.
          </p>
          <p>
            Hay dos errores más discretos que también restan. Los títulos largos se cortan en el móvil, así que las palabras clave deben ir primero. Y cambiarlo todo a la vez impide saber qué cambio funcionó. El ranking trae compradores, y nuestra{" "}
            <Link href={p("/services/listing-optimization")}>guía de optimización de fichas</Link> explica cómo convertir esas visitas en ventas.
          </p>
        </>
      ),
    },
    {
      id: "b2b-seo-service",
      heading: "Qué hace nuestra agencia de SEO B2B por los vendedores de Amazon",
      figure: {
        src: "/img/amazon-seo-dashboard.webp",
        alt: "Portátil con un panel de SEO B2B y publicidad en Amazon: posiciones de palabras clave, tráfico orgánico y ACOS por campaña",
        width: 1600,
        height: 899,
        caption: "El tipo de panel con el que seguimos posición y ventas. Cifras de ejemplo, no resultados de un cliente.",
      },
      body: (
        <>
          <p>
            Piensa en ello como marketing B2B con SEO para tu marca en Amazon: una vez hecho el trabajo, sigue trayendo compradores. Nuestro servicio de SEO B2B sigue cuatro pasos, ficha por ficha.
          </p>
          <p>
            Primero investigamos las búsquedas que de verdad escriben tus compradores, con las herramientas de Amazon. Después reescribimos tu título y tus viñetas para que las palabras clave principales vayan primero y se lean bien, y rellenamos los términos de búsqueda ocultos con sinónimos y errores ortográficos, dentro de las reglas de Amazon. Por último revisamos posición y ventas tras cada cambio con nuestro servicio de análisis de datos de Amazon.
          </p>
          <p>
            Lo hace nuestro equipo en Barcelona. <Link href={p("/about")}>Conoce al equipo de Nautilo Studio</Link>.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: "¿El SEO en Amazon es diferente del SEO en Google?",
      answer:
        "Sí. Google posiciona páginas que responden a una pregunta, mientras que Amazon posiciona productos que los compradores probablemente comprarán. En Amazon, la conversión y el historial de ventas pesan mucho más.",
    },
    {
      question: "¿Cuánto tarda en notarse el SEO en Amazon?",
      answer:
        "El posicionamiento sigue a las ventas, así que evalúa cada cambio a lo largo de varias semanas, no de unos pocos días, y cambia una sola cosa cada vez.",
    },
    {
      question: "¿Hace falta pagar anuncios para posicionarse en Amazon?",
      answer:
        "No, pero ayudan. Amazon explica que los anuncios de Sponsored Products pueden ayudar a que las ofertas suban en los resultados, y sus ventas se suman al historial de tu producto.",
    },
    {
      question: "¿Puede Nautilo Studio revisar mi ficha?",
      answer:
        "Sí. Envíanos una ficha de Amazon con el formulario de revisión gratuita de esta página y te escribiremos qué mejoraríamos primero.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
