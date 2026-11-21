import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const BRAND_ANALYTICS = "https://sell.amazon.com/blog/brand-analytics";
const ACOS = "https://advertising.amazon.com/library/guides/acos-advertising-cost-of-sales";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const p = (path: string) => localePath("es", path);

const title = "Agencia de analítica de marketing Amazon | Nautilo Studio";
const description =
  "Nautilo Studio, agencia de analítica de marketing para vendedores de Amazon en EE. UU.: vemos los números que muestran dónde pierdes ventas. Revisión gratis.";

const page: GuideCopy["page"] = {
  slug: "data-analysis",
  breadcrumb: "Análisis de datos de Amazon",
  question: "Agencia de analítica de marketing para Amazon: los números que importan",
  answer:
    "El análisis de datos de Amazon, tal como lo hace una agencia de analítica de marketing, empieza por cuatro números en cada producto: sesiones, tasa de conversión, si tienes la Oferta destacada y tu coste publicitario de ventas (ACOS). Juntos te dicen si el problema está en que te encuentren, en que te elijan o en que gastas demasiado en anuncios. Revísalos cada semana, compáralos con la semana anterior y cambia una sola cosa cada vez.",
  description,
  image: {
    src: "/img/amazon-data-analysis.jpg",
    alt: "iMac con un panel de analítica de una tienda de Amazon: ventas, pedidos, tasa de conversión, ACOS, Oferta destacada y campañas publicitarias",
    tile: "bg-royal",
  },
  updated: "2026-11-16",
  quickWin: {
    label: "Revisión de 10 minutos",
    title: "Descubre dónde se pierden ventas en 10 minutos",
    steps: ["Abre los Informes de negocio en Seller Central", "Apunta las sesiones y la tasa de conversión de tu producto principal", "Compáralas con la semana anterior"],
    link: { href: "#numbers", text: "Los cuatro números que seguir" },
  },
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
      heading: "Análisis de datos de Amazon: los cuatro números que más importan",
      body: (
        <>
          <p>
            Seller Central está lleno de informes, pero una agencia de analítica de marketing empieza por cuatro números en cada producto. Las sesiones dicen cuántos compradores visitaron la página, es decir, si te encuentran. La tasa de conversión es la parte de esas visitas que acabó en pedido, es decir, si la ficha convence.
          </p>
          <p>
            La Oferta destacada es la oferta junto al botón Comprar ya, y Amazon dice que precio, disponibilidad y envío influyen en{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              ganar la Oferta destacada
            </a>
            , lo que puede aumentar mucho las ventas. El ACOS es el gasto en anuncios dividido entre los ingresos por anuncios, y Amazon Ads dice que tu{" "}
            <a href={ACOS} target="_blank" rel="noopener noreferrer">
              ACOS tiene que ser menor que tu margen de beneficio
            </a>{" "}
            para que los anuncios sean rentables.
          </p>
          <blockquote>Cuatro números, revisados cada semana, te enseñan dónde se pierden ventas.</blockquote>
        </>
      ),
    },
    {
      id: "what-they-mean",
      heading: "Qué le dicen los números a una agencia de analítica de marketing",
      body: (
        <>
          <p>
            Leídos juntos, los cuatro números señalan un problema cada vez. Pocas sesiones significan que no encuentran el producto, así que primero van las palabras clave del título, las viñetas y los términos de búsqueda. Muchas sesiones con baja conversión significan que llegan pero no compran, y nuestro{" "}
            <Link href={p("/services/listing-optimization")}>servicio de SEO y optimización de fichas de Amazon</Link> está pensado para ese caso.
          </p>
          <p>
            Si pierdes la Oferta destacada, compara tu precio, stock y envío con las demás ofertas del mismo producto. Si tu ACOS supera tu margen, los anuncios pierden dinero: pausa los términos de búsqueda que gastan sin vender antes de subir ningún presupuesto.
          </p>
        </>
      ),
    },
    {
      id: "where-to-find",
      heading: "Dónde encontrar tus datos de Amazon en Seller Central",
      body: (
        <>
          <p>
            Los Informes de negocio, en Informes de Seller Central, muestran sesiones, páginas vistas y ventas de cada producto. Las marcas en Brand Registry tienen además Brand Analytics, cuyo{" "}
            <a href={BRAND_ANALYTICS} target="_blank" rel="noopener noreferrer">
              panel Search Query Performance
            </a>{" "}
            muestra impresiones, clics y añadidos al carrito de las búsquedas que llevan a tus productos. Los informes de publicidad, en el administrador de campañas, muestran gasto, ventas, clics y ACOS por campaña y término de búsqueda.
          </p>
          <p>
            Profit Analytics, también en Seller Central, muestra lo que Amazon te cobra por cada producto. Las tarifas cambian cada año, así que lee{" "}
            <Link href={p("/blog/amazon-fba-fees-2027")}>qué cambia en las tarifas de Amazon FBA para 2027</Link> antes de fijar precios. Y lleva tu propia hoja, con una fila por semana y por producto, para ver tendencias que un solo informe esconde.
          </p>
        </>
      ),
    },
    {
      id: "weekly-routine",
      heading: "Una rutina semanal de informes de Amazon que puedas mantener",
      body: (
        <>
          <p>
            El análisis de datos de Amazon funciona mejor como hábito. Elige un día a la semana y saca siempre los mismos informes; luego compara cada número con la semana anterior y con la misma semana del mes pasado.
          </p>
          <p>
            Apunta todo lo que cambies, como precio, imágenes o pujas, y cuándo. Después elige un problema que arreglar esta semana y comprueba el resultado la siguiente. Un arreglo cada vez parece más lento, pero es la única forma de saber qué funcionó.
          </p>
        </>
      ),
    },
    {
      id: "analytics-service",
      heading: "Qué hace nuestra agencia de analítica de marketing por los vendedores de Amazon",
      figure: {
        src: "/img/amazon-data-analysis.jpg",
        alt: "iMac con los números semanales de Amazon que sigue una agencia de analítica de marketing: ventas, conversión, ACOS, Oferta destacada, ventas por producto y campañas publicitarias",
        width: 1600,
        height: 900,
        caption: "Datos de ejemplo, no son números de clientes. Foto: Amy Hirschi, Unsplash.",
      },
      body: (
        <>
          <p>
            Piensa en ello como una agencia de analítica web para tu tienda de Amazon: la misma disciplina, aplicada a los informes que te da Amazon. Nuestro servicio de analítica de marketing sigue cuatro pasos, producto a producto.
          </p>
          <p>
            Primero sacamos los cuatro números de cada producto y preparamos una hoja que puedas leer en minutos. Después vemos dónde se pierden ventas: en que te encuentren, en que te elijan o en el gasto en anuncios. Acordamos un arreglo para la semana y, a la siguiente, comprobamos si funcionó antes de seguir.
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
