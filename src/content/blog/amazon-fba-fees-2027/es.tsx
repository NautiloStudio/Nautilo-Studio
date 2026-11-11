import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { BlogPost } from "../types";

const AMAZON_2027 = "https://sellingpartners.aboutamazon.com/update-to-us-referral-and-fulfillment-by-amazon-fees-for-2027";
const AMAZON_2026 = "https://sellingpartners.aboutamazon.com/update-to-u-s-referral-and-fulfillment-by-amazon-fees-for-2026";
const PPC_LAND = "https://ppc.land/amazon-sellers-face-average-0-19-fba-fee-rise-from-january-15-2027/";
const p = (path: string) => localePath("es", path);

const post: BlogPost = {
  slug: "amazon-fba-fees-2027",
  title: "Tarifas de Amazon FBA 2027: 5 cambios clave y qué hacer",
  description:
    "Tarifas de Amazon FBA 2027: los 5 cambios en EE. UU. desde el 15 de enero, las fechas clave y cómo revisar tus márgenes. Léelo y pide una revisión gratis.",
  h1: "Tarifas de Amazon FBA 2027: 5 cambios clave y cómo proteger tus márgenes",
  breadcrumb: "Tarifas de Amazon FBA 2027",
  keyword: "tarifas amazon fba 2027",
  excerpt:
    "Amazon anunció sus tarifas de 2027 en EE. UU. el 5 de noviembre. Qué cambia, cuándo y cómo ver lo que supone para cada uno de tus productos.",
  published: "2026-11-11",
  updated: "2026-11-11",
  readMinutes: 8,
  intro: (
    <>
      <p>
        Las <strong>tarifas de Amazon FBA 2027</strong> ya son públicas. El 5 de noviembre de 2026,
        Amazon comunicó a los vendedores de EE. UU. que sus tarifas de logística subirán de media unos
        0,19 $ por unidad vendida, y que la mayoría de los cambios empiezan el 15 de enero de 2027. Una
        media esconde mucho: Amazon dice que las tarifas subirán para unos productos y bajarán para
        otros, y que también cambian las reglas de almacenamiento y de inventario bajo.
      </p>
      <p>
        Este artículo resume los cinco cambios que más importan, las fechas que debes apuntar y cómo
        comprobar, producto por producto, qué hacen con tus márgenes. Si leer tus cifras es nuevo para
        ti, nuestra <Link href={p("/data-analysis")}>guía de análisis de datos en Amazon</Link> explica
        por qué informes empezar.
      </p>
    </>
  ),
  sections: [
    {
      id: "what-changes",
      heading: "¿Qué cambia en las tarifas de Amazon FBA para 2027?",
      body: (
        <>
          <p>
            El anuncio de Amazon, firmado por su vicepresidente de Logística de Amazon (FBA), cubre las
            tarifas de logística, almacenamiento, inventario bajo y promociones. La mayoría de los
            cambios de logística empiezan el 15 de enero de 2027, el día después de que terminen las
            tarifas de temporada alta de 2026. El almacenamiento y la tarifa por inventario bajo llegan
            el 1 de febrero de 2027.
          </p>
          <p>
            El objetivo declarado de Amazon es que cada tarifa refleje mejor lo que le cuesta gestionar
            ese producto. En la práctica, dos vendedores pueden leer el mismo anuncio y recibir
            facturas muy distintas. La única forma de conocer tu impacto es revisarlo producto por
            producto, como explicamos más abajo.
          </p>
        </>
      ),
    },
    {
      id: "five-changes",
      heading: "Los 5 cambios clave para vendedores en EE. UU.",
      body: (
        <>
          <h3>1. La tarifa de logística sube 0,19 $ por unidad de media</h3>
          <p>
            Desde el 15 de enero de 2027, la tarifa de preparación y envío sube de media unos 0,19 $
            por unidad. La subida no es igual para todos. Según el análisis detallado de PPC Land, los
            artículos de tamaño estándar con precio entre 10 y 50 $ y por encima de 50 $ son los que más
            suben de media, mientras que algunos artículos grandes salen más baratos. Entre los
            ejemplos de Amazon hay una funda de móvil de menos de 10 $ que pasa de 2,49 $ a 2,72 $ por
            unidad.
          </p>
          <p>
            Las tarifas siguen usando tres tramos de precio: menos de 10 $, de 10 a 50 $ y más de 50 $.
            Los artículos que cuestan exactamente 10 $ o 50 $ pagan la tarifa de 10 a 50 $.
          </p>

          <h3>2. Menos productos con tarifas Low-Price FBA</h3>
          <p>
            Hasta el 14 de enero de 2027, los artículos de menos de 10 $ reciben automáticamente las
            tarifas reducidas de Low-Price FBA. Desde el 15 de enero, cinco categorías de tarifas las
            pierden y pasan a las tarifas de 10 a 50 $: Automoción y deportes de motor, Electrodomésticos
            compactos, Instrumentos musicales y producción audiovisual, Medios (libros, DVD, música,
            software y vídeo) y Ordenadores. Si vendes artículos baratos en estas categorías,
            probablemente sea el cambio que más te afecta.
          </p>

          <h3>3. Nuevos tramos y tarifas de manipulación para artículos grandes</h3>
          <p>
            Los productos voluminosos y sobredimensionados tienen más tramos de tamaño, para que la
            tarifa siga mejor al tamaño. Aparecen dos tarifas de manipulación nuevas: una para
            productos planos, como tableros y paneles, y otra para artículos con un lado muy largo.
            Desaparece la antigua tarifa por exceso de tamaño máximo. Algunos artículos pesados pagarán
            menos y otros más, así que quien vende artículos grandes debe revisar el tramo de cada
            producto.
          </p>

          <h3>4. Una tarifa de almacenamiento según la antigüedad desde el 1 de febrero</h3>
          <p>
            Amazon elimina el recargo por uso de almacenamiento e integra el recargo por inventario
            antiguo en la tarifa mensual de almacenamiento, como una única tarifa según el tiempo que
            el stock lleva en sus almacenes. Amazon dice que el inventario que se vende en menos de seis
            meses pagará igual o menos, y el inventario antiguo pagará más. Los productos lentos salen
            más caros de mantener.
          </p>

          <h3>5. Un nuevo criterio para la tarifa por inventario bajo</h3>
          <p>
            También desde el 1 de febrero, la tarifa por inventario bajo solo se aplica cuando el stock
            baja de 28 días de suministro. Amazon la medirá con los envíos reales de las cuatro semanas
            antes y después de cada control, en lugar de las ventas de los últimos 30 y 90 días. Tener
            al menos cuatro semanas de stock en los almacenes de Amazon evita la tarifa.
          </p>
        </>
      ),
    },
    {
      id: "what-stays-the-same",
      heading: "Lo que no cambia",
      body: (
        <ul>
          <li>
            <strong>El recargo por combustible y logística.</strong> Amazon dice que el recargo del
            3,5 % introducido en 2026 se mantiene sin cambios.
          </li>
          <li>
            <strong>La mayoría de las tarifas por referencia.</strong> Los cambios publicados son una
            nueva tarifa para impresoras 3D, vigente desde el 5 de noviembre de 2026, y una tarifa
            promocional del 10 % para productos Amazon Renewed hasta el 18 de octubre de 2027.
          </li>
          <li>
            <strong>Las tarifas de colocación de entrada.</strong> PPC Land no informa de cambios en
            los importes, aunque los centros de entrada de tamaño estándar se están concentrando.
          </li>
        </ul>
      ),
    },
    {
      id: "key-dates",
      heading: "Fechas clave de las tarifas de Amazon FBA 2027",
      body: (
        <ul>
          <li>
            <strong>5 de noviembre de 2026:</strong> Amazon anuncia las tarifas de 2027. Empieza la
            tarifa por referencia de las impresoras 3D.
          </li>
          <li>
            <strong>14 de enero de 2027:</strong> terminan la temporada alta de 2026 y las tarifas
            Low-Price FBA para las cinco categorías citadas.
          </li>
          <li>
            <strong>15 de enero de 2027:</strong> nuevas tarifas de logística, tramos de tamaño y
            tarifas de manipulación.
          </li>
          <li>
            <strong>1 de febrero de 2027:</strong> la tarifa de almacenamiento según la antigüedad y el
            nuevo criterio de inventario bajo.
          </li>
        </ul>
      ),
    },
    {
      id: "check-your-margins",
      heading: "Cómo ver lo que las tarifas de 2027 suponen para tus márgenes",
      body: (
        <>
          <p>
            Amazon ha creado dos herramientas para esto. Úsalas antes del 15 de enero, mientras aún
            tienes tiempo de cambiar precios o stock.
          </p>
          <ul>
            <li>
              <strong>Panel Fee Change Comparison.</strong> En Profit Analytics, dentro de Seller
              Central. Muestra cómo afectan los cambios a tu cuenta y a cada producto.
            </li>
            <li>
              <strong>Revenue Calculator.</strong> Permite simular las tarifas y el beneficio de un
              producto con distintos precios.
            </li>
          </ul>
          <h3>Una rutina sencilla, producto por producto</h3>
          <ul>
            <li>Haz una lista de tus productos con su tramo de precio, su tramo de tamaño y las unidades vendidas al mes.</li>
            <li>Para cada uno, anota la tarifa de logística de 2026 y la de 2027, y la diferencia.</li>
            <li>Multiplica la diferencia por las unidades vendidas para ver el coste al mes.</li>
            <li>Ordena por ese coste: lo primero de la lista es donde actuar antes.</li>
          </ul>
          <h3>Un ejemplo ilustrativo</h3>
          <p>
            Toma el ejemplo de Amazon de la funda de móvil: la tarifa pasa de 2,49 $ a 2,72 $, es decir,
            0,23 $ más por unidad. Si un producto así vendiera 2.000 unidades al mes, un volumen que
            usamos solo para ilustrar el cálculo, el cambio costaría 460 $ al mes, o 5.520 $ al año. En
            un artículo barato con poco margen, eso puede marcar la diferencia entre ganar y perder.
          </p>
        </>
      ),
    },
    {
      id: "before-january-15",
      heading: "Qué hacer antes del 15 de enero",
      body: (
        <>
          <ul>
            <li>
              <strong>Revisa los precios cerca de los límites de tramo.</strong> Un producto justo por
              encima de 10 $ o de 50 $ paga ahora una tarifa distinta que uno justo por debajo. Mira qué
              haría un pequeño cambio de precio con la tarifa y con tus ventas antes de moverte.
            </li>
            <li>
              <strong>Libera el stock antiguo antes del 1 de febrero.</strong> Con la nueva tarifa según
              la antigüedad, el inventario viejo cuesta más. Valora promociones o retiradas para los
              productos lentos.
            </li>
            <li>
              <strong>Planifica 28 días de suministro.</strong> Ajusta la reposición para que tus
              productos más vendidos no bajen de cuatro semanas de stock.
            </li>
            <li>
              <strong>Revisa los artículos grandes.</strong> Con los nuevos tramos y tarifas de
              manipulación, el embalaje y las medidas del producto importan más que antes.
            </li>
          </ul>
          <p>
            Las tarifas son solo una parte del beneficio. Para ver cómo encajan sesiones, conversión y
            publicidad, lee nuestra{" "}
            <Link href={p("/data-analysis")}>guía de las cifras de Amazon que importan</Link>.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: "¿Cuándo empiezan las tarifas de Amazon FBA de 2027?",
      answer:
        "La mayoría de los cambios en la tarifa de logística empiezan el 15 de enero de 2027. La nueva tarifa de almacenamiento según la antigüedad y el nuevo criterio de inventario bajo empiezan el 1 de febrero de 2027. La tarifa se fija cuando la unidad se envía, no cuando se pide.",
    },
    {
      question: "¿Cuánto suben las tarifas de Amazon FBA en 2027?",
      answer:
        "Amazon dice que la tarifa de logística sube de media unos 0,19 $ por unidad vendida. Algunos productos pagan más y otros menos según su tramo de tamaño y de precio, así que revisa los tuyos en el panel Fee Change Comparison.",
    },
    {
      question: "¿Cambia el recargo por combustible y logística en 2027?",
      answer: "No. Amazon dice que el recargo por combustible y logística del 3,5 % se mantiene sin cambios.",
    },
    {
      question: "¿Cómo evito la tarifa por inventario bajo en 2027?",
      answer:
        "Desde el 1 de febrero de 2027, la tarifa solo se aplica cuando tu stock baja de 28 días de suministro. Mantener al menos cuatro semanas de stock de cada producto en los almacenes de Amazon la evita.",
    },
    {
      question: "¿Puede Nautilo Studio ayudarme a revisar mis márgenes?",
      answer:
        "Sí. El análisis de datos es uno de nuestros servicios. Envíanos una ficha con nuestra revisión gratuita y te diremos qué miraríamos primero.",
    },
  ],
  sources: [
    {
      publisher: "Amazon Selling Partners",
      title: "Update to US referral and Fulfillment by Amazon fees for 2027",
      url: AMAZON_2027,
    },
    {
      publisher: "PPC Land",
      title: "Amazon sellers face average $0.19 FBA fee rise from January 15, 2027",
      url: PPC_LAND,
    },
    {
      publisher: "Amazon Selling Partners",
      title: "Update to U.S. referral and Fulfillment by Amazon fees for 2026",
      url: AMAZON_2026,
    },
  ],
  cta: {
    text: "Las nuevas tarifas cambian las cuentas de cada producto. Mira qué cifras vigilar cada semana o deja que echemos un vistazo gratis a una de tus fichas.",
    pillar: { href: "/data-analysis", label: "Leer nuestra guía de análisis de datos" },
    formHeading: "¿No sabes qué suponen para ti las tarifas de 2027?",
    formText: "Envíanos una ficha y te diremos, gratis, qué revisaríamos primero.",
  },
};

export default post;
