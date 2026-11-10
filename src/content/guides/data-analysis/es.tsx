import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const BRAND_ANALYTICS = "https://sell.amazon.com/blog/brand-analytics";
const ACOS = "https://advertising.amazon.com/library/guides/acos-advertising-cost-of-sales";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const p = (path: string) => localePath("es", path);

const title = "Análisis de datos en Amazon: qué números | Nautilo Studio";
const description =
  "Los números de Amazon que los vendedores en EE. UU. deberían seguir cada semana, qué te dice cada uno y dónde verlo en Seller Central. Revisión gratis.";

const page: GuideCopy["page"] = {
  slug: "data-analysis",
  breadcrumb: "Análisis de datos",
  question: "¿Qué números de Amazon deberían seguir los vendedores?",
  answer:
    "Empieza por cuatro números en cada producto: sesiones, tasa de conversión, si tienes la Oferta destacada y tu coste publicitario de ventas (ACOS). Juntos te dicen si el problema está en que te encuentren, en que te elijan o en que gastas demasiado en anuncios. Revísalos cada semana, compáralos con la semana anterior y cambia una sola cosa cada vez.",
  description,
  image: {
    src: "/img/service-data.jpg",
    alt: "Paquetes de cartón apilados en columnas crecientes, como un gráfico de barras",
    tile: "bg-royal",
  },
  updated: "2026-11-07",
  facts: [
    { value: 4, label: "Números que seguir en cada producto" },
    {
      value: 50,
      suffix: " %",
      label: "ACOS del ejemplo de Amazon: 50 $ gastados, 100 $ ingresados",
    },
    { value: 1, label: "Día a la semana para tu rutina" },
    { value: 1, label: "Problema que arreglar cada semana" },
  ],
  sections: [
    {
      id: "numbers",
      heading: "¿Qué números importan más?",
      body: (
        <ul>
          <li>
            <strong>Sesiones.</strong> Cuántos compradores visitaron la página de tu producto. Te
            dice si la gente te encuentra.
          </li>
          <li>
            <strong>Tasa de conversión.</strong> La parte de esas visitas que acabó en pedido. Te
            dice si la ficha convence.
          </li>
          <li>
            <strong>Oferta destacada.</strong> La oferta junto al botón de compra. Amazon explica que
            el precio, la disponibilidad y el envío influyen en{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              ganar la Oferta destacada
            </a>
            , lo que puede traer grandes aumentos de ventas.
          </li>
          <li>
            <strong>ACOS.</strong> Gasto en anuncios dividido entre los ingresos por anuncios. Amazon
            Ads explica que tu{" "}
            <a href={ACOS} target="_blank" rel="noopener noreferrer">
              ACOS tiene que ser menor que tu margen de beneficio
            </a>{" "}
            para que los anuncios sean rentables.
          </li>
        </ul>
      ),
    },
    {
      id: "what-they-mean",
      heading: "¿Qué te dicen los números?",
      body: (
        <ul>
          <li>
            <strong>Pocas sesiones.</strong> Los compradores no encuentran el producto. Revisa tus
            palabras clave con nuestra <Link href={p("/amazon-seo")}>guía de SEO en Amazon</Link>.
          </li>
          <li>
            <strong>Muchas sesiones, poca conversión.</strong> Los compradores llegan pero no
            compran. Trabaja la ficha con nuestra{" "}
            <Link href={p("/listing-optimization")}>guía de optimización de fichas</Link>.
          </li>
          <li>
            <strong>Oferta destacada perdida.</strong> Compara tu precio, tu stock y tu envío con las
            demás ofertas del mismo producto.
          </li>
          <li>
            <strong>ACOS por encima de tu margen.</strong> Los anuncios pierden dinero. Pausa los
            términos de búsqueda que gastan sin vender antes de subir ningún presupuesto.
          </li>
        </ul>
      ),
    },
    {
      id: "where-to-find",
      heading: "¿Dónde encuentras estos datos?",
      body: (
        <ul>
          <li>
            <strong>Informes empresariales.</strong> En Seller Central, en Informes. Muestran
            sesiones, páginas vistas y ventas de cada producto.
          </li>
          <li>
            <strong>Brand Analytics.</strong> Para marcas del Registro de Marcas. Su{" "}
            <a href={BRAND_ANALYTICS} target="_blank" rel="noopener noreferrer">
              panel de rendimiento de consultas de búsqueda
            </a>{" "}
            muestra impresiones, clics y añadidos al carrito de las búsquedas que llevan a tus
            productos.
          </li>
          <li>
            <strong>Informes de publicidad.</strong> En el administrador de campañas. Muestran
            gasto, ventas, clics y ACOS de cada campaña y término de búsqueda.
          </li>
          <li>
            <strong>Tu propia hoja de cálculo.</strong> Una fila por semana y por producto, para ver
            tendencias que un solo informe esconde.
          </li>
        </ul>
      ),
    },
    {
      id: "weekly-routine",
      heading: "¿Cómo se crea una rutina semanal?",
      body: (
        <ol>
          <li>Elige un día a la semana y descarga siempre los mismos informes.</li>
          <li>Compara cada número con la semana anterior y con la misma semana del mes pasado.</li>
          <li>Apunta lo que cambiaste, como el precio, las imágenes o las pujas, y cuándo.</li>
          <li>Elige un problema que arreglar esta semana. Comprueba el resultado la siguiente.</li>
        </ol>
      ),
    },
  ],
  faqs: [
    {
      question: "¿Cuál es una buena tasa de conversión en Amazon?",
      answer:
        "Depende de la categoría, del precio y de cómo llegan los compradores, así que no hay una única cifra buena. Compara cada producto con su propio historial y con productos parecidos de tu tienda.",
    },
    {
      question: "¿Cómo se calcula el ACOS?",
      answer:
        "Divide el gasto en anuncios entre los ingresos por anuncios y multiplica por 100. Amazon Ads pone el ejemplo de 50 $ gastados en una campaña que ingresó 100 $, lo que da un ACOS del 50 %.",
    },
    {
      question: "¿Necesito el Registro de Marcas para analizar mis datos?",
      answer:
        "Para lo básico, no. Los informes empresariales y los de publicidad están en Seller Central y en el administrador de campañas. Brand Analytics, con datos de búsquedas, requiere una marca en el Registro de Marcas.",
    },
    {
      question: "¿Puede Nautilo Studio analizar mis números?",
      answer:
        "Sí. El análisis de datos es uno de nuestros servicios. Envíanos una ficha para una revisión gratuita o cuéntanos qué informes quieres entender.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
