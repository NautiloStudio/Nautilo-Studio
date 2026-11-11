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
  question: "SEO B2B para vendedores de Amazon: ¿cómo se sube en las búsquedas?",
  answer:
    "El SEO B2B para vendedores de Amazon, o SEO en Amazon, es cómo pones tu producto delante de quien lo busca. Amazon muestra los productos que mejor responden a una búsqueda y que los compradores tienen más probabilidades de comprar. Pon las palabras que escriben los compradores en tu título, tus viñetas y tus términos de búsqueda ocultos, y haz que la ficha convenza lo suficiente para vender. Esas ventas, junto con una ficha de calidad, hacen subir el producto con el tiempo.",
  description,
  image: {
    src: "/img/service-ads.jpg",
    alt: "Lupa apoyada en un paquete pequeño",
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
      heading: "¿Cómo decide Amazon tu posición?",
      body: (
        <ul>
          <li>
            <strong>Relevancia.</strong> Las palabras de la búsqueda aparecen en tu título, viñetas,
            descripción y términos de búsqueda ocultos.
          </li>
          <li>
            <strong>Conversión.</strong> Los compradores hacen clic y compran. Influyen las imágenes,
            el precio, las reseñas y la Oferta destacada.
          </li>
          <li>
            <strong>Historial de ventas.</strong> Los productos que venden de forma constante suelen
            mantener su posición.
          </li>
          <li>
            <strong>Calidad de la ficha.</strong> Amazon explica que{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              la calidad de la ficha y la salud de la cuenta pueden influir en el posicionamiento
            </a>
            .
          </li>
        </ul>
      ),
    },
    {
      id: "find-keywords",
      heading: "¿Cómo encuentras las palabras que usan los compradores?",
      body: (
        <ul>
          <li>
            <strong>La barra de búsqueda de Amazon.</strong> Escribe el nombre de tu producto y anota
            lo que Amazon sugiere.
          </li>
          <li>
            <strong>Product Opportunity Explorer.</strong> Una herramienta gratuita de Seller Central
            con los términos de búsqueda principales de cada nicho.
          </li>
          <li>
            <strong>Brand Analytics.</strong> Para marcas en el Registro de Marcas: qué búsquedas
            generan clics y ventas.
          </li>
          <li>
            <strong>Informe de términos de búsqueda.</strong> Las búsquedas reales que llevaron a los
            compradores a tus anuncios de Sponsored Products.
          </li>
        </ul>
      ),
    },
    {
      id: "where-to-put-keywords",
      heading: "¿Dónde deben ir tus palabras clave?",
      body: (
        <ul>
          <li>
            <strong>Título.</strong> Primero, qué es el producto. La guía de Amazon fija{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              un límite de 200 caracteres y recomienda 60 o menos
            </a>
            , y sus{" "}
            <a href={TITLE_RULES} target="_blank" rel="noopener noreferrer">
              normas para títulos
            </a>{" "}
            permiten repetir una palabra dos veces como máximo.
          </li>
          <li>
            <strong>Viñetas.</strong> Un beneficio en cada una, con tus palabras clave secundarias
            donde suenen naturales.
          </li>
          <li>
            <strong>Descripción y contenido A+.</strong> Materiales, medidas, cuidados y qué incluye
            la caja.
          </li>
          <li>
            <strong>Términos de búsqueda ocultos.</strong> Sinónimos y errores ortográficos, sin
            repeticiones, nombres de marca ni ASIN. Consulta el{" "}
            <a href={SEARCH_TERMS_HELP} target="_blank" rel="noopener noreferrer">
              límite de longitud actual
            </a>
            , y lee nuestra guía paso a paso para{" "}
            <Link href={p("/blog/amazon-backend-keywords")}>rellenar las palabras clave ocultas de Amazon</Link>.
          </li>
        </ul>
      ),
    },
    {
      id: "b2b-seo-service",
      heading: "Nuestro servicio de SEO B2B para vendedores de Amazon: qué incluye",
      body: (
        <>
          <p>
            Para una marca en Amazon, el SEO es el marketing B2B que sigue trayendo compradores cuando el trabajo ya está hecho. Nuestro servicio de SEO B2B incluye cuatro pasos:
          </p>
          <ul>
            <li>
              <strong>Investigación de palabras clave.</strong> Las búsquedas que de verdad escriben tus compradores, con las herramientas de Amazon.
            </li>
            <li>
              <strong>Título y viñetas.</strong> Reescritos para que las palabras clave principales vayan primero y se lean bien.
            </li>
            <li>
              <strong>Términos de búsqueda ocultos.</strong> Sinónimos y errores ortográficos, dentro de las reglas de Amazon.
            </li>
            <li>
              <strong>Seguimiento.</strong> Revisamos posición y ventas tras cada cambio con nuestro{" "}
              <Link href={p("/services/data-analysis")}>servicio de análisis de datos de Amazon</Link>.
            </li>
          </ul>
          <p>
            Lo hace nuestro equipo en Barcelona. <Link href={p("/about")}>Conoce al equipo de Nautilo Studio</Link>.
          </p>
        </>
      ),
    },
    {
      id: "common-mistakes",
      heading: "¿Cuáles son los errores más comunes?",
      body: (
        <>
          <ul>
            <li>
              <strong>Llenar el título de palabras clave.</strong> Se lee mal y puede incumplir las
              normas de títulos de Amazon.
            </li>
            <li>
              <strong>Marcas de la competencia.</strong> Usarlas en tu ficha o en tus términos de
              búsqueda va contra las normas de Amazon.
            </li>
            <li>
              <strong>Olvidarse del móvil.</strong> Los títulos largos se cortan, así que las palabras
              clave van primero.
            </li>
            <li>
              <strong>Cambiarlo todo a la vez.</strong> Así no sabes qué cambio ha funcionado.
            </li>
          </ul>
          <p>
            El posicionamiento trae compradores. Nuestra{" "}
            <Link href={p("/services/listing-optimization")}>guía de optimización de fichas</Link> explica
            cómo convertir esas visitas en ventas, y en nuestro{" "}
            <Link href={p("/blog")}>blog para vendedores de Amazon</Link> encontrarás más guías paso a paso.
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
