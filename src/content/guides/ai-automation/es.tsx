import Link from "next/link";
import { localePath } from "@/i18n/config";
import type { GuideCopy } from "../types";

const SELLER_ASSISTANT =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-agentic-ai";
const WORKFLOWS =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-plugin-amazon-quick-claude";
const ENHANCE_MY_LISTING =
  "https://www.aboutamazon.com/news/innovation-at-amazon/amazon-generative-ai-seller-growth-shopping-experience";

const p = (path: string) => localePath("es", path);

const title = "Automatización de marketing Amazon con IA | Nautilo Studio";
const description =
  "Automatización del marketing en Amazon con IA para vendedores en EE. UU.: fichas, inventario e informes, y tú apruebas cada cambio. Pide tu revisión gratis.";

const page: GuideCopy["page"] = {
  slug: "ai-automation",
  breadcrumb: "Automatización del marketing en Amazon",
  question: "Automatización del marketing en Amazon con IA: qué automatizar primero",
  answer:
    "La automatización del marketing en Amazon usa la IA para encargarse del trabajo repetitivo, como redactar el contenido de las fichas, vigilar el inventario o resumir informes. Amazon ya ofrece herramientas para ello, como su Seller Assistant gratuito, que puede supervisar tu cuenta y actuar con tu aprobación. Las decisiones siguen siendo tuyas, así que la IA te ahorra tiempo sin sustituir tu criterio.",
  description,
  image: {
    src: "/img/service-ai.jpg",
    alt: "Brazo robótico blanco colocando un paquete al final de una fila ordenada",
    tile: "bg-graphite",
  },
  updated: "2026-11-16",
  facts: [
    { value: 4, label: "Tareas que la IA puede asumir" },
    { value: 3, label: "Herramientas de IA de Amazon para empezar" },
    { value: 0, suffix: " $", label: "Coste de Seller Assistant para vendedores en EE. UU." },
    { value: 1, label: "Automatización para empezar" },
  ],
  sections: [
    {
      id: "what-to-automate",
      heading: "Automatización del marketing en Amazon: qué tareas puede asumir la IA",
      body: (
        <>
          <p>
            Gran parte del trabajo semanal en una tienda de Amazon se repite, y ahí es donde ayuda la automatización del marketing en Amazon. La IA puede sugerir títulos, atributos y descripciones, mientras tú compruebas los datos y el tono de marca. Puede generar ideas de anuncios para tus productos, mientras tú eliges cuáles se publican y fijas el presupuesto. Y puede convertir los informes de ventas y tráfico en resúmenes breves, mientras tú decides qué significan los cambios.
          </p>
          <p>
            La IA también puede avisarte del stock que rota poco y de los problemas de la cuenta, y tú decides qué arreglar. El nivel de stock importa más a partir de 2027, cuando cambian las tarifas de almacenamiento y de inventario bajo de Amazon: mira{" "}
            <Link href={p("/blog/amazon-fba-fees-2027")}>qué cambia en las tarifas de Amazon FBA para 2027</Link>.
          </p>
          <blockquote>Deja que la IA repita. Quédate tú con las decisiones.</blockquote>
        </>
      ),
    },
    {
      id: "amazon-tools",
      heading: "Las herramientas de IA que Amazon ya ofrece a los vendedores",
      body: (
        <>
          <p>
            No necesitas software externo para empezar. El{" "}
            <a href={SELLER_ASSISTANT} target="_blank" rel="noopener noreferrer">
              Seller Assistant
            </a>{" "}
            de Amazon es gratuito para los vendedores de la tienda de EE. UU.: supervisa tu cuenta y puede actuar con tu permiso. Sus{" "}
            <a href={WORKFLOWS} target="_blank" rel="noopener noreferrer">
              Workflows
            </a>{" "}
            son automatizaciones a medida que siguen funcionando, y tú eliges si solo recomiendan o también actúan.
          </p>
          <p>
            Para las fichas,{" "}
            <a href={ENHANCE_MY_LISTING} target="_blank" rel="noopener noreferrer">
              Enhance My Listing
            </a>{" "}
            de Amazon sugiere mejoras que puedes editar o rechazar. No todas las cuentas tienen aún acceso a todas las herramientas, así que comprueba qué hay disponible en la tuya antes de planificar con ellas.
          </p>
        </>
      ),
    },
    {
      id: "keep-human",
      heading: "Qué debe quedar en manos humanas",
      body: (
        <>
          <p>
            Algunas decisiones no deberían automatizarse nunca. Las afirmaciones sobre seguridad, materiales o resultados del producto necesitan que una persona las compruebe. Tu tono de marca, y lo que hace distinto a tu producto, deben salir de ti.
          </p>
          <p>
            Las decisiones de dinero también se quedan en manos humanas: precios, presupuestos de anuncios y estrategia general. Y cualquier cambio en una ficha o campaña activa necesita la aprobación final de alguien que conozca el negocio.
          </p>
        </>
      ),
    },
    {
      id: "how-to-start",
      heading: "Cómo empezar con la automatización del marketing en Amazon",
      body: (
        <>
          <p>
            Empieza con poco. Elige una tarea que repitas cada semana, deja que la IA recomiende y revisa lo que sugiere antes de que cambie nada. Dale más trabajo solo cuando te fíes de los resultados.
          </p>
          <p>
            Los informes suelen ser la primera tarea más fácil, porque un resumen equivocado no cuesta nada hasta que alguien actúa con él. Para saber qué números deberían mostrar tus informes, lee nuestra{" "}
            <Link href={p("/services/data-analysis")}>guía de analítica de marketing para vendedores de Amazon</Link>.
          </p>
        </>
      ),
    },
    {
      id: "automation-service",
      heading: "Qué hace nuestro servicio de automatización del marketing en Amazon",
      figure: {
        src: "/img/service-ai.jpg",
        alt: "Brazo robótico blanco colocando un paquete al final de una fila ordenada, una imagen de la automatización del marketing en Amazon que asume el trabajo repetitivo",
        width: 1536,
        height: 1024,
        caption: "La automatización asume lo repetitivo, las personas deciden. Ilustración, no es la configuración de un cliente.",
      },
      body: (
        <>
          <p>
            Piensa en ello como automatización con IA para vendedores de Amazon, configurada tarea a tarea. Nuestro servicio de automatización del marketing en Amazon sigue cuatro pasos.
          </p>
          <p>
            Primero hacemos la lista de las tareas que repites cada semana y del tiempo que te lleva cada una. Después elegimos una y la configuramos con las herramientas que Amazon ya ofrece, en modo solo recomendación. Revisamos los resultados contigo cada semana y, solo cuando te fías de ellos, dejamos que la automatización actúe o pasamos a la siguiente tarea.
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
      question: "¿Seller Assistant de Amazon es gratis?",
      answer:
        "Sí. Amazon dice que Seller Assistant es gratuito y está disponible para todos los vendedores de la tienda de EE. UU.",
    },
    {
      question: "¿Puede la IA escribir toda mi ficha de Amazon?",
      answer:
        "La IA puede redactar casi toda la ficha, pero conviene que revises el resultado. Enhance My Listing de Amazon permite revisar, personalizar o rechazar cada sugerencia.",
    },
    {
      question: "¿La IA cambiará mi cuenta sin preguntar?",
      answer:
        "Amazon dice que los vendedores revisan y aprueban las acciones de Seller Assistant antes de que se ejecuten, y que cada acción queda registrada.",
    },
    {
      question: "¿Puede Nautilo Studio ayudarme a configurarlo?",
      answer:
        "Sí. La automatización con IA es uno de nuestros servicios. Envíanos una ficha para una revisión gratuita o cuéntanos qué tareas quieres automatizar.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
