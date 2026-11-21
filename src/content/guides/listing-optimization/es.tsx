import Link from "next/link";
import ListingFieldMap from "@/components/ListingFieldMap";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const AMAZON_SEO_GUIDE = "https://sell.amazon.com/blog/amazon-seo";
const TITLE_RULES = "https://sellercentral.amazon.com/gp/help/external/GYTR6SYGFA5E3EQC";
const SEARCH_TERMS_HELP = "https://sellercentral.amazon.com/help/hub/reference/external/G23501";
const PRODUCT_LISTINGS = "https://sell.amazon.com/blog/amazon-product-listings";
const PRODUCT_PHOTOS = "https://sell.amazon.com/blog/product-photos";
const A_PLUS = "https://sell.amazon.com/tools/a-content";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";
const EXPERIMENTS = "https://sell.amazon.com/tools/manage-your-experiments";

const p = (path: string) => localePath("es", path);
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const title = "SEO en Amazon y optimización de fichas | Nautilo Studio";
const description =
  "SEO en Amazon y optimización de fichas para vendedores en EE. UU.: que te encuentren por lo que buscan tus clientes y te elijan. Pide tu revisión gratis hoy.";

const page: GuideCopy["page"] = {
  slug: "listing-optimization",
  breadcrumb: "SEO y optimización de fichas",
  question: "SEO en Amazon y optimización de fichas: que te encuentren y te elijan",
  answer:
    "El SEO en Amazon hace que tu producto aparezca cuando los compradores buscan. La optimización de fichas hace que lo elijan cuando lo ven. En Amazon las dos cosas pasan en la misma página: el título, las viñetas, las imágenes, el contenido A+ y los términos de búsqueda ocultos deciden dónde apareces y si te compran. Pon las palabras que buscan tus clientes donde Amazon las lee, haz la ficha convincente y prueba un cambio cada vez. Las ventas que trae una ficha mejor también la ayudan a subir.",
  description,
  image: {
    src: "/img/amazon-listing-optimization.jpg",
    alt: "Pantalla con una ficha de Amazon optimizada de una tabla de cortar de bambú, marcada como «elegir», junto a los resultados de búsqueda donde aparece en primer lugar y su posición por palabra clave, marcados como «encontrar»",
    tile: "bg-apricot",
  },
  updated: "2026-11-20",
  quickWin: {
    title: "Mejora tu ficha",
    link: { href: "#title", text: "Cómo escribir el título" },
  },
  facts: [
    { value: 200, label: "Caracteres permitidos en un título, según la guía SEO de Amazon" },
    { value: 60, label: "Caracteres que Amazon recomienda para un título" },
    { value: 9, label: "Fotos que Amazon te deja subir" },
    { value: 20, suffix: " %", label: "Aumento máximo de ventas que Amazon atribuye al contenido optimizado" },
  ],
  sections: [
    {
      id: "found-then-chosen",
      heading: "Cómo funciona Amazon para los vendedores: que te encuentren y te elijan",
      body: (
        <>
          <p>Antes de que una búsqueda se convierta en una venta tienen que pasar dos cosas. Amazon tiene que mostrar tu producto para las palabras que escribió el comprador, y el comprador tiene que elegirlo entre los demás resultados de la página. Lo primero es el SEO en Amazon. Lo segundo, la optimización de fichas. En Amazon las dos trabajan sobre la misma página, así que las tratamos como un solo trabajo.</p>
          <p>
            {"Que te encuentren empieza por la relevancia: si una palabra de búsqueda no aparece en el título, las viñetas, la descripción ni los términos de búsqueda ocultos, el producto casi nunca sale para ella. Que te elijan depende de lo que el comprador ve después: la imagen principal, el título, el precio, las reseñas y la Featured Offer. Las dos cosas se alimentan entre sí. La guía SEO de Amazon dice que "}
            <a href={AMAZON_SEO_GUIDE} {...ext}>la calidad de la ficha y la salud de la cuenta pueden contribuir al posicionamiento</a>
            {", y que mejores fotos y precios pueden ayudar a un producto a subir en los resultados de forma orgánica. Una ficha que vende sube, y una ficha que sube la ven más compradores."}
          </p>
          <ListingFieldMap
            caption={"Tu ficha, campo por campo"}
            labels={{ found: "Encontrar", chosen: "Elegir" }}
            rows={[
              { field: "Título", text: "Las palabras que Amazon más pesa y lo primero que lee el comprador.", effect: "both" },
              { field: "Viñetas", text: "Palabras clave secundarias para la búsqueda y motivos de compra para el comprador.", effect: "both" },
              { field: "Términos de búsqueda", text: "Sinónimos y errores de escritura que el comprador nunca ve.", effect: "found" },
              { field: "Imágenes", text: "El mostrador de la tienda: forma, tamaño y el producto en uso.", effect: "chosen" },
              { field: "Contenido A+", text: "Imágenes más grandes y comparativas debajo de la ficha.", effect: "chosen" },
            ]}
          />
          <blockquote>La relevancia hace que te muestren. Las ventas hacen que sigas ahí.</blockquote>
        </>
      ),
    },
    {
      id: "keyword-research",
      heading: "Investigación de palabras clave en Amazon: lo que escriben tus compradores",
      body: (
        <>
          <p>Las buenas palabras clave salen de lo que los compradores escriben de verdad, no de suposiciones. Lo más rápido es la barra de búsqueda de Amazon: escribe la palabra principal de tu producto y apunta las sugerencias, porque vienen de búsquedas reales.</p>
          <p>Seller Central añade datos gratuitos. Product Opportunity Explorer muestra los términos más buscados de un nicho. Brand Analytics muestra qué búsquedas llevan a clics y ventas en las marcas registradas. Si ya haces Sponsored Products, su informe de términos de búsqueda lista las búsquedas exactas que te trajeron compradores. Ordena lo que encuentres por lo bien que describe tu producto, no solo por volumen: una búsqueda precisa con menos compradores suele vender más que una amplia.</p>
          <p>Esa lista alimenta luego cada campo del mapa de arriba. Las dos o tres búsquedas más importantes van en el título, las siguientes en las viñetas y los sinónimos que no caben en ningún otro sitio en los términos de búsqueda ocultos.</p>
        </>
      ),
    },
    {
      id: "title",
      heading: "El título en Amazon: donde se juntan el posicionamiento y los clics",
      body: (
        <>
          <p>
            {"El título es el único campo que trabaja a fondo para la búsqueda y para el comprador, y por eso es tan fácil equivocarse. Amazon permite "}
            <a href={AMAZON_SEO_GUIDE} {...ext}>hasta 200 caracteres y recomienda 60 o menos</a>
            {", y sus "}
            <a href={TITLE_RULES} {...ext}>normas para títulos</a>
            {" permiten la misma palabra como máximo dos veces."}
          </p>
          <p>Un título lleno de palabras clave puede coincidir con más búsquedas, pero se lee como una lista y pierde el clic frente a un competidor más claro. Los móviles cortan los títulos largos, así que lo que es el producto tiene que ir en las primeras palabras, seguido de la marca y los datos que el comprador compara, como tamaño, material o cantidad. Escríbelo primero para el comprador y luego comprueba que tus búsquedas principales están dentro.</p>
        </>
      ),
    },
    {
      id: "images-bullets-a-plus",
      heading: "Imágenes, viñetas y contenido A+: convertir una visita en un pedido",
      body: (
        <>
          <p>
            {"Cuando un comprador abre tu página, el resto de la ficha tiene que responder a las preguntas que haría en una tienda. Amazon te deja "}
            <a href={PRODUCT_LISTINGS} {...ext}>subir hasta nueve fotos</a>
            {", y sus consejos de fotografía recomiendan un fondo blanco con el producto "}
            <a href={PRODUCT_PHOTOS} {...ext}>ocupando el 85 % o más del encuadre</a>
            {". Después de la imagen principal, muestra el producto desde otros ángulos, en uso y junto a algo que deje ver su tamaño."}
          </p>
          <p>
            {"Las cinco viñetas dan un beneficio cada una, respaldado por un dato que el comprador puede comprobar, y son el sitio natural para las palabras clave que no cupieron en el título. «Acero inoxidable» dice más si añades que mantiene la bebida fría todo el día. El contenido A+ añade imágenes y tablas comparativas debajo de la ficha para las marcas en Brand Registry, y Amazon dice que "}
            <a href={A_PLUS} {...ext}>el contenido A+ básico puede aumentar las ventas hasta un 8 %</a>
            {", según sus datos internos. Los términos de búsqueda ocultos recogen sinónimos y errores de escritura, sin repeticiones, marcas ni ASIN: consulta el "}
            <a href={SEARCH_TERMS_HELP} {...ext}>límite de longitud actual</a>
            {" y sigue nuestra guía para "}
            <Link href={p("/blog/amazon-backend-keywords")}>rellenar las palabras clave ocultas de Amazon</Link>.
          </p>
        </>
      ),
    },
    {
      id: "warning-signs",
      heading: "Señales de que tu ficha pierde posiciones, ventas o las dos cosas",
      body: (
        <>
          <p>
            {"Tus números te dicen qué mitad del trabajo necesita atención. Pocas impresiones y pocas visitas significan que no te encuentran: empieza por las palabras clave y el título. Muchas visitas y pocos pedidos significan que te encuentran pero no les convences. Amazon pone este mismo ejemplo: "}
            <a href={BOOST_LISTINGS} {...ext}>una ficha con muchas visitas y pocas ventas</a>
            {" puede necesitar mejores imágenes o descripciones."}
          </p>
          <p>Algunas señales apuntan a las dos cosas. Reseñas y preguntas que repiten la misma duda indican que la ficha no la resuelve, y las devoluciones por «no coincide con la descripción» indican que la ficha promete algo que el producto no cumple. Corrige el texto antes de traer más tráfico.</p>
          <p>Los errores habituales salen de los mismos sitios: llenar el título de palabras clave, usar marcas de la competencia (Amazon no lo permite ni en la ficha ni en los términos de búsqueda), un título, unas viñetas y unas imágenes que describen tamaños o contenidos distintos, y cambiarlo todo a la vez, de modo que nadie sabe qué cambio ayudó.</p>
        </>
      ),
    },
    {
      id: "seo-listing-service",
      heading: "Qué incluye nuestro servicio de SEO en Amazon y optimización de fichas",
      figure: {
        src: "/img/amazon-listing-optimization.jpg",
        alt: "Pantalla con una ficha de Amazon con cinco cambios marcados, los resultados de búsqueda de «bamboo cutting board» y las posiciones por palabra clave antes y después",
        width: 1600,
        height: 1000,
        caption: "Ficha de ejemplo con nuestros cambios marcados, sus resultados de búsqueda y posiciones. Ilustración con datos de ejemplo, no es la ficha de un cliente.",
      },
      body: (
        <>
          <p>Trabajamos una ficha cada vez y la miramos dos veces: una como la mira el buscador de Amazon y otra como la mira un comprador.</p>
          <p>Primero investigamos lo que de verdad buscan tus compradores con las herramientas de Amazon. Después reescribimos el título y las viñetas para que las palabras clave principales vayan delante y cada línea siga respondiendo a una duda del comprador, y rellenamos los términos de búsqueda ocultos dentro de las normas de Amazon. Luego preparamos el briefing de las nuevas imágenes y del contenido A+ donde más ayuden.</p>
          <p>
            {"Por último, probamos. Si tu marca está en Brand Registry, "}
            <a href={EXPERIMENTS} {...ext}>Manage Your Experiments</a>
            {" de Amazon muestra dos versiones de un título, una imagen, las viñetas o el contenido A+ a los compradores y compara los resultados; Amazon dice que el contenido optimizado puede ayudar a aumentar las ventas hasta un 20 %. Cambiamos una cosa cada vez y seguimos posiciones y ventas con nuestro "}
            <Link href={p("/services/data-analysis")}>servicio de análisis de datos de Amazon</Link>.
          </p>
          <p>
            {"El trabajo lo hace nuestro equipo en Barcelona. "}
            <Link href={p("/about")}>Conoce al equipo de Nautilo Studio</Link>.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: "¿Por qué combinar el SEO en Amazon y la optimización de fichas?",
      answer:
        "Porque trabajan sobre los mismos campos y se alimentan entre sí. Las palabras clave traen compradores a la ficha, la ficha los convierte en pedidos y esas ventas ayudan al producto a posicionarse.",
    },
    {
      question: "¿Cuánto tardan los cambios en notarse en posiciones y ventas?",
      answer:
        "El posicionamiento sigue a las ventas, así que valora un cambio en varias semanas, no en unos días. Cambia una cosa cada vez para saber qué marcó la diferencia.",
    },
    {
      question: "¿Tengo que pagar anuncios para posicionarme en Amazon?",
      answer:
        "No. Amazon dice que Sponsored Products puede ayudar a que las ofertas suban en los resultados, pero primero va una ficha relevante y convincente, que además hace rendir mejor cualquier anuncio. Nosotros nos centramos en la ficha y la búsqueda orgánica, no en gestionar campañas de anuncios.",
    },
    {
      question: "¿Puede Nautilo Studio revisar mi ficha?",
      answer:
        "Sí. Envíanos una ficha de Amazon con el formulario de revisión gratuita de esta página y te diremos por email qué mejoraríamos primero, para la búsqueda y para las ventas.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
