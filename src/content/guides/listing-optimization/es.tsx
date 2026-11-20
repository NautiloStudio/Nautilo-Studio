import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const PRODUCT_LISTINGS = "https://sell.amazon.com/blog/amazon-product-listings";
const PRODUCT_PHOTOS = "https://sell.amazon.com/blog/product-photos";
const A_PLUS = "https://sell.amazon.com/tools/a-content";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const p = (path: string) => localePath("es", path);

const title = "Agencia de optimización de conversión | Nautilo Studio";
const description =
  "Nautilo Studio es la agencia de optimización de la tasa de conversión para vendedores de Amazon en EE. UU.: títulos, imágenes y A+ que venden. Revisión gratis.";

const page: GuideCopy["page"] = {
  slug: "listing-optimization",
  breadcrumb: "Optimización de fichas de Amazon",
  question: "Agencia de optimización de la tasa de conversión en Amazon: de visitas a ventas",
  answer:
    "La optimización de fichas de Amazon, el trabajo de una agencia de optimización de la tasa de conversión, consiste en mejorar el título, las viñetas, las imágenes y el contenido A+ para que quien llega a tu página decida comprar. Empieza por imágenes claras y un título que diga exactamente qué es el producto, y usa las viñetas para responder a las dudas que tiene el comprador antes de pedir. Prueba un cambio cada vez y quédate con la versión que vende más.",
  description,
  image: {
    src: "/img/amazon-listing-optimization.jpg",
    alt: "iMac con la página de producto de Amazon de una tabla de cortar de bambú, con el título, la imagen principal, las viñetas y el contenido A+ editados y marcados",
    tile: "bg-apricot",
  },
  updated: "2026-11-16",
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
      heading: "Optimización de fichas de Amazon: lo que hace comprar",
      body: (
        <>
          <p>
            Cuando un comprador llega a tu página de producto, cuatro cosas deciden si compra: el título, las imágenes, las viñetas y el contenido A+. Una agencia de optimización de la tasa de conversión trabaja en las cuatro, porque cada una responde a una pregunta distinta del comprador.
          </p>
          <p>
            El título dice qué es el producto y después la marca y los detalles que se comparan, como la talla o el color. Las imágenes hacen el trabajo de un mostrador: Amazon te deja{" "}
            <a href={PRODUCT_LISTINGS} target="_blank" rel="noopener noreferrer">
              subir hasta nueve fotos
            </a>
            , y sus consejos recomiendan fondo blanco y un producto que{" "}
            <a href={PRODUCT_PHOTOS} target="_blank" rel="noopener noreferrer">
              ocupe el 85 % o más del encuadre
            </a>
            . Las cinco viñetas dan un beneficio cada una, respaldado por un dato comprobable. El contenido A+ añade imágenes y texto bajo la ficha para las marcas en Brand Registry, y Amazon dice que{" "}
            <a href={A_PLUS} target="_blank" rel="noopener noreferrer">
              el contenido A+ básico puede aumentar las ventas hasta un 8 %
            </a>
            , según sus datos internos.
          </p>
          <blockquote>El comprador no puede tocar tu producto. Tu ficha tiene que hacerlo por él.</blockquote>
        </>
      ),
    },
    {
      id: "signs",
      heading: "Optimización de la conversión: señales de que tu ficha necesita trabajo",
      body: (
        <>
          <p>
            Amazon pone un ejemplo sencillo:{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              una ficha con muchas visitas y pocas ventas
            </a>{" "}
            puede necesitar mejores imágenes o descripciones. Muchas visitas y pocos pedidos significan que te encuentran pero no les convences, así que imágenes, viñetas y contenido A+ van primero.
          </p>
          <p>
            Pocas visitas indican otro problema: no encuentran la ficha, y nuestro{" "}
            <Link href={p("/services/amazon-seo")}>servicio de SEO B2B para vendedores de Amazon</Link> es el mejor punto de partida. Hay dos señales más. Si las reseñas y las preguntas repiten la misma duda, respóndela en las viñetas o en las imágenes. Y las devoluciones por “no coincide con la descripción” indican que la ficha promete algo que el producto no cumple: corrige el texto antes de gastar más en tráfico.
          </p>
        </>
      ),
    },
    {
      id: "testing",
      heading: "Cómo prueba una agencia de optimización de la conversión lo que funciona",
      body: (
        <>
          <p>
            Una buena optimización de la tasa de conversión cambia una sola cosa cada vez. Elige un elemento, como la imagen principal o el título, y cambia solo ese, para saber qué marcó la diferencia.
          </p>
          <p>
            Si tu marca está en Brand Registry,{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              Manage Your Experiments
            </a>{" "}
            de Amazon muestra dos versiones a los compradores y compara los resultados. Deja que la prueba dure lo suficiente para reunir pedidos reales, no solo unos días; quédate con la versión ganadora y pasa al siguiente elemento.
          </p>
        </>
      ),
    },
    {
      id: "mistakes",
      heading: "Errores en las fichas de Amazon que frenan la compra",
      body: (
        <>
          <p>
            Las imágenes borrosas u oscuras son el error más común: el comprador no puede tocar el producto, así que las fotos tienen que hacerlo. Justo detrás están las características sin beneficios. “Acero inoxidable” dice más si explicas que mantiene la bebida fría.
          </p>
          <p>
            Las afirmaciones que no puedes demostrar traen devoluciones y malas reseñas, y pueden incumplir las normas de Amazon. Los detalles que no cuadran también restan: título, viñetas e imágenes deben describir la misma talla, color y contenido. Las palabras que buscan los compradores van en el texto visible y en los términos de búsqueda ocultos, y nuestra guía paso a paso para{" "}
            <Link href={p("/blog/amazon-backend-keywords")}>rellenar las palabras clave ocultas de Amazon</Link> explica lo segundo.
          </p>
        </>
      ),
    },
    {
      id: "cro-service",
      heading: "Qué hace nuestra agencia de optimización de la conversión por los vendedores de Amazon",
      figure: {
        src: "/img/amazon-listing-optimization.jpg",
        alt: "iMac con una ficha de Amazon y cinco cambios marcados en título, imagen principal, viñetas, contenido A+ y términos de búsqueda: el trabajo de una agencia de optimización de la conversión",
        width: 1600,
        height: 1000,
        caption: "Ficha de ejemplo con nuestros cinco cambios marcados. Ilustración, no es una ficha de cliente.",
      },
      body: (
        <>
          <p>
            Piensa en ello como optimización de fichas de Amazon con una prueba detrás de cada cambio. Nuestro servicio de optimización de la tasa de conversión sigue cuatro pasos, ficha a ficha.
          </p>
          <p>
            Primero leemos tu ficha como lo haría un comprador y anotamos lo que falta o no está claro. Después reescribimos el título y las viñetas para que cada una responda a una pregunta del comprador, y preparamos el encargo de nuevas imágenes y contenido A+ donde más ayuden. Por último probamos un cambio cada vez y nos quedamos con la versión que vende más.
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
