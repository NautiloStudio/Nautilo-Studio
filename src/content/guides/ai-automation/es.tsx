import type { GuideCopy } from "../types";

const SELLER_ASSISTANT =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-agentic-ai";
const WORKFLOWS =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-plugin-amazon-quick-claude";
const ENHANCE_MY_LISTING =
  "https://www.aboutamazon.com/news/innovation-at-amazon/amazon-generative-ai-seller-growth-shopping-experience";

const title = "Automatización con IA para vender en Amazon | Nautilo Studio";
const description =
  "La IA ahorra tiempo a los vendedores de Amazon en EE. UU. en fichas, inventario e informes. Qué automatizar y qué dejar en manos humanas. Revisión gratis.";

const page: GuideCopy["page"] = {
  slug: "ai-automation",
  breadcrumb: "Automatización con IA",
  question: "¿Cómo puede ayudar la automatización con IA a los vendedores de Amazon?",
  answer:
    "La automatización con IA se encarga del trabajo repetitivo, como redactar el contenido de las fichas, vigilar el inventario o resumir informes. Amazon ya ofrece herramientas para ello, como su Seller Assistant gratuito, que puede supervisar tu cuenta y actuar con tu aprobación. Las decisiones siguen siendo tuyas, así que la IA te ahorra tiempo sin sustituir tu criterio.",
  description,
  image: {
    src: "/img/service-ai.jpg",
    alt: "Brazo robótico blanco colocando un paquete al final de una fila ordenada",
    tile: "bg-graphite",
  },
  updated: "2026-11-07",
  facts: [
    { value: 4, label: "Tareas que la IA puede asumir" },
    { value: 3, label: "Herramientas de IA de Amazon para empezar" },
    { value: 0, suffix: " $", label: "Coste de Seller Assistant para vendedores en EE. UU." },
    { value: 1, label: "Automatización para empezar" },
  ],
  sections: [
    {
      id: "what-to-automate",
      heading: "¿Qué tareas de Amazon puede automatizar la IA?",
      body: (
        <ul>
          <li>
            <strong>Contenido de las fichas.</strong> La IA propone títulos, atributos y
            descripciones. Tú compruebas los datos y el tono de la marca.
          </li>
          <li>
            <strong>Inventario y salud de la cuenta.</strong> La IA señala el stock que se mueve
            despacio y los problemas de la cuenta. Tú decides qué arreglar.
          </li>
          <li>
            <strong>Ideas para anuncios.</strong> La IA genera ideas de anuncios para tus productos.
            Tú eliges cuáles se publican y fijas el presupuesto.
          </li>
          <li>
            <strong>Informes.</strong> La IA convierte los informes de ventas y tráfico en resúmenes
            breves. Tú decides qué significan los cambios.
          </li>
        </ul>
      ),
    },
    {
      id: "amazon-tools",
      heading: "¿Qué herramientas de IA ofrece ya Amazon?",
      body: (
        <ul>
          <li>
            <strong>
              <a href={SELLER_ASSISTANT} target="_blank" rel="noopener noreferrer">
                Seller Assistant
              </a>
              .
            </strong>{" "}
            Gratis para los vendedores de la tienda de EE. UU. Supervisa tu cuenta y puede actuar con
            tu permiso.
          </li>
          <li>
            <strong>
              <a href={WORKFLOWS} target="_blank" rel="noopener noreferrer">
                Workflows
              </a>
              .
            </strong>{" "}
            Automatizaciones personalizadas que siguen funcionando. Tú eliges entre recomendaciones y
            acciones.
          </li>
          <li>
            <strong>
              <a href={ENHANCE_MY_LISTING} target="_blank" rel="noopener noreferrer">
                Enhance My Listing
              </a>
              .
            </strong>{" "}
            Propone mejoras para tus fichas que puedes editar o rechazar. Comprueba si tu cuenta
            tiene acceso.
          </li>
        </ul>
      ),
    },
    {
      id: "keep-human",
      heading: "¿Qué debería quedar en manos humanas?",
      body: (
        <ul>
          <li>
            <strong>Afirmaciones sobre el producto.</strong> Todo lo que hable de seguridad,
            materiales o resultados necesita que lo revise una persona.
          </li>
          <li>
            <strong>Tu marca.</strong> Tu tono y lo que hace diferente a tu producto.
          </li>
          <li>
            <strong>Decisiones de dinero.</strong> Precios, presupuestos de anuncios y estrategia
            general.
          </li>
          <li>
            <strong>La aprobación final.</strong> Cualquier cambio en una ficha o una campaña
            activas.
          </li>
        </ul>
      ),
    },
    {
      id: "how-to-start",
      heading: "¿Cómo empezar con la automatización con IA?",
      body: (
        <ol>
          <li>Elige una tarea que repitas cada semana.</li>
          <li>Deja que la IA recomiende y revisa lo que sugiere antes de que cambie nada.</li>
          <li>Dale más trabajo solo cuando confíes en los resultados.</li>
        </ol>
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
