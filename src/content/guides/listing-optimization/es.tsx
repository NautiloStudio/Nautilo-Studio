import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const PRODUCT_LISTINGS = "https://sell.amazon.com/blog/amazon-product-listings";
const PRODUCT_PHOTOS = "https://sell.amazon.com/blog/product-photos";
const A_PLUS = "https://sell.amazon.com/tools/a-content";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const p = (path: string) => localePath("es", path);

const title = "Cómo optimizar tu ficha de Amazon | Nautilo Studio";
const description =
  "Cómo optimizar una ficha de Amazon para que más visitantes compren: título, viñetas, imágenes, contenido A+ y tests. Guía en PDF y revisión gratuita.";

const page: GuideCopy["page"] = {
  slug: "listing-optimization",
  breadcrumb: "Optimización de fichas",
  question: "¿Cómo se optimiza una ficha de Amazon para que compren más?",
  answer:
    "Optimizar una ficha consiste en mejorar el título, las viñetas, las imágenes y el contenido A+ para que quien llega a tu página decida comprar. Empieza por imágenes claras y un título que diga exactamente qué es el producto, y usa las viñetas para responder a las dudas que tiene el comprador antes de pedir. Prueba un cambio cada vez y quédate con la versión que vende más.",
  description,
  image: {
    src: "/img/service-listing.jpg",
    alt: "Tabla de cortar de bambú con una etiqueta de papel en blanco",
    tile: "bg-apricot",
  },
  updated: "2026-11-07",
  facts: [
    { value: 9, label: "Fotos que Amazon te deja subir" },
    { value: 85, suffix: " %", label: "Del encuadre que debería ocupar el producto" },
    { value: 5, label: "Viñetas por ficha" },
    {
      value: 8,
      prefix: "Hasta un ",
      suffix: " %",
      label: "Más ventas que Amazon atribuye al contenido A+ básico",
    },
  ],
  sections: [
    {
      id: "what-matters",
      heading: "¿Qué partes de una ficha de Amazon importan más?",
      body: (
        <ul>
          <li>
            <strong>Título.</strong> Di qué es el producto y después la marca y los detalles que
            comparan los compradores, como la talla o el color. Nuestra{" "}
            <Link href={p("/services/amazon-seo")}>guía de SEO en Amazon</Link> explica qué palabras usar.
          </li>
          <li>
            <strong>Imágenes.</strong> Amazon te deja{" "}
            <a href={PRODUCT_LISTINGS} target="_blank" rel="noopener noreferrer">
              subir hasta nueve fotos
            </a>
            . Sus consejos de fotografía recomiendan un fondo blanco y un producto que{" "}
            <a href={PRODUCT_PHOTOS} target="_blank" rel="noopener noreferrer">
              ocupe el 85 % o más del encuadre
            </a>
            .
          </li>
          <li>
            <strong>Viñetas.</strong> Tienes hasta cinco. Dale a cada una un solo beneficio y
            respáldalo con un dato que el comprador pueda comprobar.
          </li>
          <li>
            <strong>Contenido A+.</strong> Imágenes y texto extra bajo la ficha para las marcas del
            Registro de Marcas. Amazon afirma que{" "}
            <a href={A_PLUS} target="_blank" rel="noopener noreferrer">
              el contenido A+ básico puede aumentar las ventas hasta un 8 %
            </a>
            , según sus datos internos.
          </li>
        </ul>
      ),
    },
    {
      id: "signs",
      heading: "¿Cómo sabes que una ficha necesita trabajo?",
      body: (
        <>
          <p>
            Amazon pone un ejemplo sencillo:{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              una ficha con muchas visitas pero pocas ventas
            </a>{" "}
            puede necesitar mejores imágenes o descripciones.
          </p>
          <ul>
            <li>
              <strong>Muchas visitas, pocos pedidos.</strong> Te encuentran pero no les convences.
              Trabaja las imágenes, las viñetas y el contenido A+.
            </li>
            <li>
              <strong>Pocas visitas.</strong> Los compradores no encuentran la ficha. Empieza por el{" "}
              <Link href={p("/services/amazon-seo")}>SEO en Amazon</Link>.
            </li>
            <li>
              <strong>Siempre salen las mismas preguntas.</strong> Si las reseñas y las preguntas de
              los clientes repiten una duda, respóndela en las viñetas o en las imágenes.
            </li>
            <li>
              <strong>Devoluciones por «no es como se describe».</strong> La ficha promete algo que el
              producto no cumple. Corrige el texto antes de gastar más en tráfico.
            </li>
          </ul>
          <p>
            ¿No sabes qué números mirar? Nuestra{" "}
            <Link href={p("/services/data-analysis")}>guía de análisis de datos</Link> te los explica.
          </p>
        </>
      ),
    },
    {
      id: "testing",
      heading: "¿Cómo se prueba qué funciona?",
      body: (
        <ol>
          <li>Elige un elemento, como la imagen principal o el título. Cambia solo eso.</li>
          <li>
            Si tu marca está en el Registro de Marcas, usa{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              Gestionar tus experimentos
            </a>{" "}
            de Amazon para mostrar dos versiones a los compradores y comparar los resultados.
          </li>
          <li>Deja que la prueba dure lo suficiente para reunir pedidos reales, no solo unos días.</li>
          <li>Quédate con la versión ganadora y pasa al siguiente elemento.</li>
        </ol>
      ),
    },
    {
      id: "mistakes",
      heading: "¿Qué errores frenan la compra?",
      body: (
        <ul>
          <li>
            <strong>Imágenes borrosas u oscuras.</strong> El comprador no puede tocar el producto,
            así que las fotos tienen que hacer ese trabajo.
          </li>
          <li>
            <strong>Características sin beneficios.</strong> «Acero inoxidable» dice más si explicas
            que mantiene la bebida fría.
          </li>
          <li>
            <strong>Afirmaciones que no puedes demostrar.</strong> Provocan devoluciones y malas
            reseñas, y pueden incumplir las normas de Amazon.
          </li>
          <li>
            <strong>Detalles que no coinciden.</strong> El título, las viñetas y las imágenes deben
            describir la misma talla, el mismo color y el mismo contenido.
          </li>
        </ul>
      ),
    },
  ],
  faqs: [
    {
      question: "¿Cuántas imágenes debería tener una ficha de Amazon?",
      answer:
        "Amazon te deja subir hasta nueve fotos y dice que cuantas más, mejor. Empieza con una imagen principal limpia sobre fondo blanco y añade otros ángulos, el producto en uso y su tamaño.",
    },
    {
      question: "¿Vale la pena el contenido A+?",
      answer:
        "Normalmente sí, si puedes usarlo. Amazon afirma que el contenido A+ básico puede aumentar las ventas hasta un 8 %, según sus datos internos. Es gratis para las marcas que cumplen los requisitos del Registro de Marcas.",
    },
    {
      question: "¿Qué diferencia hay entre optimizar la ficha y el SEO en Amazon?",
      answer:
        "El SEO en Amazon ayuda a que los compradores encuentren tu ficha. La optimización ayuda a que quienes llegan decidan comprar. Necesitas las dos, y las ventas de una ficha mejor también apoyan tu posicionamiento.",
    },
    {
      question: "¿Puede Nautilo Studio revisar mi ficha?",
      answer:
        "Sí. Envíanos el enlace a una ficha de Amazon con el formulario de revisión gratuita de esta página y te escribiremos qué mejoraríamos primero.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
