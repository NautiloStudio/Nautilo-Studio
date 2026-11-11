import Link from "next/link";
import { localePath } from "@/i18n/config";
import { SearchTermsFigure } from "@/components/BlogFigures";
import type { BlogPost } from "../types";
import { heroPhoto } from "./media";

const AMAZON_SEO_GUIDE = "https://sell.amazon.com/blog/amazon-seo";
const PRODUCT_LISTINGS = "https://sell.amazon.com/blog/amazon-product-listings";
const p = (path: string) => localePath("es", path);

const post: BlogPost = {
  slug: "amazon-backend-keywords",
  title: "Palabras clave backend de Amazon: cómo rellenarlas bien",
  description:
    "Palabras clave backend de Amazon: qué poner en el campo de términos de búsqueda, qué dejar fuera y un ejemplo resuelto. Léelo y pide una revisión gratis.",
  h1: "Palabras clave backend de Amazon: cómo rellenar tus términos de búsqueda",
  breadcrumb: "Palabras clave backend",
  keyword: "palabras clave backend amazon",
  excerpt:
    "Qué va en el campo oculto de términos de búsqueda, qué dejar fuera y un ejemplo resuelto que puedes copiar para tu ficha.",
  published: "2026-11-10",
  updated: "2026-11-10",
  readMinutes: 9,
  hero: { ...heroPhoto, alt: "Lupa sobre el teclado de un portátil" },
  intro: (
    <>
      <p>
        Las <strong>palabras clave backend de Amazon</strong> son las palabras que das a Amazon en el
        campo de términos de búsqueda de tu ficha. Los compradores nunca las ven, pero Amazon las lee
        cuando decide en qué búsquedas puede aparecer tu producto. Bien usadas, te permiten cubrir
        sinónimos, otros nombres y errores ortográficos frecuentes sin saturar el título.
      </p>
      <p>
        Esta guía explica qué es ese campo, por qué sigue importando, cómo encontrar las palabras
        adecuadas y cómo escribirlas, con un ejemplo resuelto al final. Si el tema es nuevo para ti,
        empieza por nuestra <Link href={p("/amazon-seo")}>guía de SEO en Amazon</Link>, que explica
        cómo ordena Amazon los productos.
      </p>
    </>
  ),
  sections: [
    {
      id: "what-are-backend-keywords",
      heading: "¿Qué son las palabras clave backend de Amazon?",
      body: (
        <>
          <p>
            Toda ficha de Amazon tiene texto visible, como el título, las viñetas y la descripción, y
            campos ocultos que solo lee Amazon. El campo de términos de búsqueda es uno de ellos. Los
            vendedores suelen llamar a lo que va dentro palabras clave backend o términos de búsqueda
            backend.
          </p>
          <p>
            Piensa en él como una lista corta de otras formas en que un comprador podría describir tu
            producto. Si alguien busca una palabra que está en tus palabras clave backend, tu producto
            puede tenerse en cuenta para esa búsqueda, aunque la palabra no aparezca en la página.
          </p>
          <h3>Dónde está el campo de términos de búsqueda</h3>
          <p>
            En Seller Central, abre la ficha que quieres editar y ve a la sección de palabras clave de
            los detalles del producto. Verás un campo llamado términos de búsqueda. Lo que cambies ahí
            no altera nada de lo que ven los compradores, así que es un lugar seguro para probar.
          </p>
          <h3>En qué se diferencian del título</h3>
          <p>
            El título tiene que leerse bien: es lo primero que ve el comprador, y Amazon fija normas
            sobre su longitud y su redacción. Las palabras clave backend no tienen lector, así que
            pueden ser una simple lista de palabras. Esa libertad es la clave: el título lleva tus
            palabras más importantes y el campo backend recoge todo lo demás.
          </p>
        </>
      ),
    },
    {
      id: "why-they-matter",
      heading: "Por qué las palabras clave backend siguen importando",
      body: (
        <>
          <p>
            Algunos vendedores creen que el campo oculto dejó de funcionar hace años. Amazon dice lo
            contrario: su propia guía para vendedores sobre la búsqueda indica que{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              las palabras clave backend aún pueden ayudar a posicionar un producto en búsquedas
              concretas
            </a>
            .
          </p>
          <p>
            Por sí solas no harán subir una ficha floja. Amazon sigue valorando lo relevante que es tu
            producto, con qué frecuencia los compradores hacen clic y compran, y cómo se vende con el
            tiempo. Lo que hace este campo es ampliar el conjunto de búsquedas en las que puedes
            aparecer. No puedes posicionarte en una búsqueda para la que no eres elegible.
          </p>
          <p>
            Por eso son una de las mejoras más baratas que puedes hacer: se escriben en minutos, no
            cuestan nada y no cambian cómo ven tu ficha los compradores.
          </p>
        </>
      ),
    },
    {
      id: "find-backend-keywords",
      heading: "Cómo encontrar palabras clave backend para tu producto",
      body: (
        <>
          <p>
            Las buenas palabras clave backend salen de lo que los compradores escriben de verdad, no
            de cómo llamas al producto dentro de tu empresa. Usa más de una fuente y quédate solo con
            las palabras que aún no están en el título ni en las viñetas.
          </p>
          <h3>Empieza por la barra de búsqueda de Amazon</h3>
          <p>
            Escribe la palabra principal de tu producto en Amazon y anota las sugerencias que
            aparecen. Vienen de búsquedas reales y a menudo revelan otros nombres en los que no habías
            pensado, como “flask” para una botella de agua o “chopping board” para una tabla de cortar.
          </p>
          <h3>Usa Product Opportunity Explorer</h3>
          <p>
            Product Opportunity Explorer, en Seller Central, muestra los principales términos de
            búsqueda y la evolución del volumen en un nicho. Busca términos cercanos a tu producto que
            no hayas usado en otra parte de la ficha.
          </p>
          <h3>Revisa el informe de términos de búsqueda de Sponsored Products</h3>
          <p>
            Si haces anuncios de Sponsored Products, el informe de términos de búsqueda muestra las
            búsquedas exactas que llevaron a los compradores a tus anuncios, incluidas las que
            terminaron en venta. Los términos que convierten pero faltan en tu ficha son buenos
            candidatos para el backend.
          </p>
          <h3>Consulta Brand Analytics si tu marca está registrada</h3>
          <p>
            Las marcas del Registro de Marcas pueden usar Brand Analytics. Su panel Search Query
            Performance muestra qué búsquedas generan impresiones, clics y compras de tus productos,
            para que veas qué términos ya funcionan y cuáles te faltan.
          </p>
        </>
      ),
    },
    {
      id: "write-search-terms",
      heading: "Cómo escribir el campo de términos de búsqueda",
      body: (
        <>
          <p>
            Cuando tengas la lista, escribir el campo consiste sobre todo en quitar palabras. El
            objetivo es una línea limpia de términos únicos que añada lo que tu texto visible no cubre.
          </p>
          <h3>Usa sinónimos, otros nombres y errores ortográficos</h3>
          <p>
            Incluye otras palabras para el mismo producto, otras formas de describir su uso y las
            faltas que los compradores cometen a menudo. Añade abreviaturas y unidades escritas de otra
            manera, como “oz” y “ounce”, solo si no las has usado ya.
          </p>
          <h3>Mantén un formato sencillo</h3>
          <p>
            Escribe en minúsculas y separa las palabras con espacios. No hacen falta comas ni repetir
            una palabra en cada combinación, porque Amazon combina las palabras de tu ficha por ti.
            Deja fuera palabras de relleno como “a”, “the” o “for”.
          </p>
          <h3>No repitas palabras del título</h3>
          <p>
            Cada palabra repetida quita espacio a una nueva. Si “stainless steel” ya está en el título,
            no aporta nada en el backend. Comprueba cada palabra con el título y las viñetas antes de
            dejarla.
          </p>
          <h3>Respeta el límite de longitud</h3>
          <p>
            Amazon limita la longitud del campo y la mide en bytes, no en caracteres, así que las
            letras con tilde pueden contar más. El límite puede cambiar y variar según la tienda, así
            que consulta la cifra actual de tu marketplace en Seller Central y quédate holgadamente por
            debajo.
          </p>
        </>
      ),
    },
    {
      id: "what-to-leave-out",
      heading: "Qué dejar fuera de tus términos de búsqueda backend",
      body: (
        <>
          <p>Algunas palabras desperdician espacio y otras incumplen las normas de Amazon. Deja fuera:</p>
          <ul>
            <li>
              <strong>Nombres de marca.</strong> Ni la tuya ni la de otros. Los nombres de marcas de
              la competencia, en especial, pueden causarte problemas.
            </li>
            <li>
              <strong>ASIN y códigos de producto.</strong> No aportan nada a cómo buscan los
              compradores.
            </li>
            <li>
              <strong>Afirmaciones subjetivas.</strong> Palabras como “best”, “amazing” o “top
              quality” describen opiniones, no productos.
            </li>
            <li>
              <strong>Palabras temporales.</strong> “New”, “on sale” o “limited offer” caducan y no
              describen el producto.
            </li>
            <li>
              <strong>Repeticiones y relleno.</strong> La misma palabra dos veces, plurales de palabras
              ya usadas o largas cadenas de frases casi idénticas.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "worked-example",
      heading: "Un ejemplo resuelto: palabras clave backend para una botella de agua",
      body: (
        <>
          <p>
            Como la ficha es para la tienda de EE. UU., el ejemplo está en inglés. Supón que tu título
            es “24 oz Stainless Steel Water Bottle with Screw-Top Lid, Charcoal”. El título ya cubre{" "}
            <em>24 oz</em>, <em>stainless steel</em>, <em>water bottle</em>, <em>screw-top lid</em> y{" "}
            <em>charcoal</em>. Tus palabras clave backend deben cubrir el resto. Un primer borrador
            podría ser:
          </p>
          <SearchTermsFigure
            labels={{"title": "Ya está en el título", "field": "Search terms", "bytes": "bytes", "leftOut": "Fuera a propósito"}}
            titleWords={["24 oz", "stainless steel", "water bottle", "screw-top lid", "charcoal"]}
            terms="insulated flask thermos canteen vacuum leakproof reusable travel gym hiking office kids bpa free metal tumbler ounce black grey gray"
            leftOut={["marcas", "best", "new", "stainless steel"]}
            caption="El ejemplo de un vistazo: el título ya cubre la primera fila, el campo search terms añade palabras nuevas y la última fila se queda fuera."
          />
          <p>
            Fíjate en lo que no está: ni marcas, ni “best”, ni repeticiones del título, y aparecen
            “grey” y “gray” para que te encuentren quienes lo escriben de cualquiera de las dos formas.
            Después compáralo con tus viñetas y quita lo que ya digan.
          </p>
          <p>
            Para mejorar la parte visible de la misma ficha, el título, las viñetas y las imágenes, lee
            nuestra <Link href={p("/listing-optimization")}>guía de optimización de fichas de Amazon</Link>.
          </p>
        </>
      ),
    },
    {
      id: "check-results",
      heading: "Cómo comprobar si tus palabras clave backend funcionan",
      body: (
        <>
          <p>
            Deja pasar un par de semanas antes de juzgar un cambio y cambia una sola cosa cada vez,
            para saber qué ha marcado la diferencia.
          </p>
          <ul>
            <li>
              <strong>Busca el término tú mismo.</strong> Busca en Amazon un término que solo esté en
              el backend y mira si aparece tu producto.
            </li>
            <li>
              <strong>Vigila tus sesiones.</strong> Los informes empresariales de Seller Central
              muestran si llegan más compradores a la ficha.
            </li>
            <li>
              <strong>Usa Search Query Performance.</strong> Con el Registro de Marcas, comprueba si
              los nuevos términos traen impresiones, clics y compras.
            </li>
          </ul>
          <p>
            ¿No sabes qué cifras mirar? Nuestra{" "}
            <Link href={p("/data-analysis")}>guía de análisis de datos en Amazon</Link> explica las
            cuatro que más importan y dónde encontrarlas.
          </p>
        </>
      ),
    },
    {
      id: "common-mistakes",
      heading: "Errores comunes con las palabras clave backend de Amazon",
      body: (
        <>
          <p>
            La mayoría de los problemas vienen de querer meter demasiado. Los errores más comunes son:
          </p>
          <ul>
            <li>
              <strong>Copiar el título en el campo.</strong> Parece minucioso, pero no añade nada.
            </li>
            <li>
              <strong>Pasarse del límite de longitud.</strong> Muchos vendedores cuentan que un campo
              demasiado largo puede no indexarse como se espera, así que quédate muy por debajo.
            </li>
            <li>
              <strong>Rellenarlo una vez y olvidarlo.</strong> Los hábitos de búsqueda cambian. Revisa
              el campo cuando revises el resto de la ficha.
            </li>
            <li>
              <strong>Confiar solo en él.</strong> Las palabras clave backend amplían tu alcance, pero
              la ficha sigue teniendo que convencer al comprador. Los consejos de Amazon para{" "}
              <a href={PRODUCT_LISTINGS} target="_blank" rel="noopener noreferrer">
                crear fichas de producto
              </a>{" "}
              cubren también la parte visible.
            </li>
          </ul>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: "¿Siguen funcionando las palabras clave backend de Amazon?",
      answer:
        "Sí. La propia guía de Amazon para vendedores dice que las palabras clave backend aún pueden ayudar a posicionar un producto en búsquedas concretas. Amplían las búsquedas en las que puedes aparecer; la relevancia, la conversión y las ventas deciden lo alto que llegas.",
    },
    {
      question: "¿Cuántas palabras clave backend debo usar?",
      answer:
        "No hay un número fijo. Usa tantas palabras únicas y relevantes como quepan con holgura en el límite de longitud de tu marketplace, y deja fuera lo que ya esté en el título o en las viñetas.",
    },
    {
      question: "¿Debo separar las palabras clave backend con comas?",
      answer:
        "No. Sepáralas con espacios y escribe en minúsculas. La puntuación no hace falta y Amazon combina las palabras de tu ficha para encajar con distintas búsquedas.",
    },
    {
      question: "¿Puedo poner marcas de la competencia en las palabras clave backend?",
      answer:
        "No. Deja fuera del campo todos los nombres de marca, incluida la tuya y sobre todo las de la competencia, para cumplir las normas de Amazon.",
    },
    {
      question: "¿Puede Nautilo Studio revisar mis palabras clave backend?",
      answer:
        "Sí. Envíanos el enlace de una ficha con nuestra revisión gratuita y te diremos qué cambiaríamos primero, palabras clave backend incluidas.",
    },
  ],
  sources: [
    {
      publisher: "Amazon (blog Sell on Amazon)",
      title: "Amazon SEO: 7 ways to improve your product’s search rankings",
      url: AMAZON_SEO_GUIDE,
    },
    {
      publisher: "Amazon (blog Sell on Amazon)",
      title: "How to create Amazon product listings",
      url: PRODUCT_LISTINGS,
    },
  ],
  cta: {
    text: "Las palabras clave backend son una parte del SEO en Amazon. Mira cómo encajan título, viñetas y ventas, o deja que revisemos tu ficha gratis.",
    pillar: { href: "/amazon-seo", label: "Leer nuestra guía de SEO en Amazon" },
    formHeading: "¿Quieres que revisemos tus palabras clave backend?",
    formText: "Envíanos una ficha y te diremos, gratis, qué cambiaríamos primero.",
  },
};

export default post;
