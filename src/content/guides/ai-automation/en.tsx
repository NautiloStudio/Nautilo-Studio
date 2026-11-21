import Link from "next/link";
import type { GuideCopy } from "../types";

const SELLER_ASSISTANT =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-agentic-ai";
const WORKFLOWS =
  "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-plugin-amazon-quick-claude";
const ENHANCE_MY_LISTING =
  "https://www.aboutamazon.com/news/innovation-at-amazon/amazon-generative-ai-seller-growth-shopping-experience";

const title = "Amazon Marketing Automation with AI | Nautilo Studio";
const description =
  "Amazon marketing automation with AI for US sellers: listings, inventory and reports handled for you, with you approving each change. Get a free listing review.";

const page: GuideCopy["page"] = {
  slug: "ai-automation",
  breadcrumb: "Amazon marketing automation",
  question: "Amazon marketing automation with AI: what to automate first",
  answer:
    "Amazon marketing automation uses AI to take over repetitive work like drafting listing content, watching inventory and summarizing reports. Amazon now offers tools for this, including its free Seller Assistant, which can monitor your account and act with your approval. You still make the decisions, so AI saves you time without replacing your judgment.",
  description,
  image: {
    src: "/img/amazon-ai-automation.jpg",
    alt: "Laptop with an Amazon seller dashboard and an AI chip linked to listing, search, report and settings icons",
    tile: "bg-graphite",
  },
  updated: "2026-11-16",
  author: { name: "Carlo Ambrosini", role: "AI Automation Lead", href: "/about" },
  facts: [
    { value: 4, label: "Tasks AI can take over" },
    { value: 3, label: "Amazon AI tools to start with" },
    { value: 0, prefix: "$", label: "Cost of Seller Assistant for US sellers" },
    { value: 1, label: "Automation to start with" },
  ],
  sections: [
    {
      id: "what-to-automate",
      heading: "Amazon marketing automation: which tasks AI can take over",
      body: (
        <>
          <p>
            Most of the weekly work on an Amazon store repeats itself, and that is where Amazon marketing automation helps. AI can suggest titles, attributes and descriptions, while you check the facts and the brand voice. It can generate ad ideas for your products, while you choose what runs and set the budget. And it can turn sales and traffic reports into short summaries, while you decide what the changes mean.
          </p>
          <p>
            AI can also flag slow-moving stock and account issues, and you decide what to fix. Stock levels matter more from 2027, when Amazon’s low-inventory and storage fees change: see{" "}
            <Link href="/blog/amazon-fba-fees-2027">what changes in Amazon FBA fees for 2027</Link>.
          </p>
          <blockquote>Let AI do the repeating. Keep the deciding.</blockquote>
        </>
      ),
    },
    {
      id: "amazon-tools",
      heading: "The AI tools Amazon already offers sellers",
      body: (
        <>
          <p>
            You don’t need outside software to start. Amazon’s{" "}
            <a href={SELLER_ASSISTANT} target="_blank" rel="noopener noreferrer">
              Seller Assistant
            </a>{" "}
            is free for sellers in the US store: it monitors your account and can act with your permission. Its{" "}
            <a href={WORKFLOWS} target="_blank" rel="noopener noreferrer">
              Workflows
            </a>{" "}
            are custom automations that keep running, and you choose whether they only recommend or also act.
          </p>
          <p>
            For listings, Amazon’s{" "}
            <a href={ENHANCE_MY_LISTING} target="_blank" rel="noopener noreferrer">
              Enhance My Listing
            </a>{" "}
            suggests improvements you can edit or decline. Not every account has access to every tool yet, so check what is available in yours before you plan around it.
          </p>
        </>
      ),
    },
    {
      id: "keep-human",
      heading: "What should stay in human hands",
      body: (
        <>
          <p>
            Some decisions should never be automated. Product claims about safety, materials or results need a person to check them. Your brand voice, and what makes your product different, should come from you.
          </p>
          <p>
            Money decisions stay human too: pricing, ad budgets and overall strategy. And any change to a live listing or campaign needs a final approval from someone who knows the business.
          </p>
        </>
      ),
    },
    {
      id: "how-to-start",
      heading: "How to start with Amazon marketing automation",
      body: (
        <>
          <p>
            Start small. Pick one task you repeat every week, let AI recommend, and review what it suggests before anything changes. Give it more to do only once you trust the results.
          </p>
          <p>
            Reporting is often the easiest first task, because a wrong summary costs nothing until someone acts on it. To know which numbers your reports should show, read our{" "}
            <Link href="/services/data-analysis">marketing analytics guide for Amazon sellers</Link>.
          </p>
        </>
      ),
    },
    {
      id: "automation-service",
      heading: "What our Amazon marketing automation service does for sellers",
      figure: {
        src: "/img/amazon-ai-automation.jpg",
        alt: "Laptop with an Amazon seller dashboard linked to an AI chip that handles listings, search, reports and settings: Amazon marketing automation at work",
        width: 1600,
        height: 899,
        caption: "Automation takes the repeating work, people keep the decisions. Illustration, not a client setup.",
      },
      body: (
        <>
          <p>
            Think of it as AI automation for Amazon sellers, set up one task at a time. Our Amazon marketing automation service follows four steps.
          </p>
          <p>
            First we list the tasks you repeat every week and how long each one takes. Then we pick one and set it up with the tools Amazon already offers, in recommend-only mode. We review the results with you every week, and only when you trust them do we let the automation act or move on to the next task.
          </p>
          <p>
            The work is done by our team in Barcelona. <Link href="/about">Meet the team behind Nautilo Studio</Link>.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: "Is Amazon’s Seller Assistant free?",
      answer: "Yes. Amazon says Seller Assistant is free and available to all sellers in the US store.",
    },
    {
      question: "Can AI write my whole Amazon listing?",
      answer:
        "AI can draft most of it, but you should still check the result. Amazon’s Enhance My Listing lets sellers review, customize or decline each suggestion.",
    },
    {
      question: "Will AI change my account without asking?",
      answer:
        "Amazon says sellers review and approve Seller Assistant’s actions before they’re carried out, and every action is logged.",
    },
    {
      question: "Can Nautilo Studio help me set this up?",
      answer:
        "Yes. Amazon marketing automation is one of the services we offer as an Amazon marketing agency. Send us a listing for a free review, or talk to us about the tasks you want to automate.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
