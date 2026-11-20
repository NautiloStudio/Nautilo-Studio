import Link from "next/link";
import type { GuideCopy } from "../types";

const AMAZON_SEO_GUIDE = "https://sell.amazon.com/blog/amazon-seo";
const TITLE_RULES = "https://sellercentral.amazon.com/gp/help/external/GYTR6SYGFA5E3EQC";
const SEARCH_TERMS_HELP = "https://sellercentral.amazon.com/help/hub/reference/external/G23501";

const title = "B2B SEO for Amazon Sellers: Rank Higher | Nautilo Studio";
const description =
  "Nautilo Studio is the B2B SEO agency for US Amazon sellers: we find what shoppers search and put it where Amazon reads it. Get a free listing review today.";

const page: GuideCopy["page"] = {
  slug: "amazon-seo",
  breadcrumb: "B2B SEO for Amazon",
  question: "B2B SEO for Amazon sellers: how to rank higher",
  answer:
    "B2B SEO for Amazon sellers, or Amazon SEO, is how you get your product in front of shoppers who search for it: Amazon shows the products that best match a search and that shoppers are most likely to buy. Put the words shoppers type into your title, bullets and backend search terms, then make the listing convincing enough to sell. Those sales, with good listing quality, push the product higher over time.",
  description,
  image: {
    src: "/img/amazon-seo-dashboard.webp",
    alt: "Laptop showing an Amazon SEO dashboard with keyword rankings and organic traffic",
    tile: "bg-cyan",
  },
  updated: "2026-11-11",
  author: { name: "Filippo Verace", role: "SEO & Ads Lead", href: "/about" },
  facts: [
    { value: 200, label: "Characters allowed in a title, per Amazon’s SEO guide" },
    { value: 60, label: "Characters Amazon recommends for a title" },
    { value: 2, suffix: "×", label: "Most times a word may appear in a title" },
    { value: 4, label: "Places to find real search terms" },
  ],
  sections: [
    {
      id: "how-ranking-works",
      heading: "Amazon SEO ranking factors: what decides where you rank",
      body: (
        <>
          <p>
            When a shopper searches, Amazon has to choose which products to show first. It picks the listings that best match the words typed and that the shopper is most likely to buy. That is why B2B SEO for Amazon sellers starts with relevance and ends with sales.
          </p>
          <p>
            Relevance comes from your title, bullet points, description and backend search terms: if a search word appears in none of them, the product rarely shows up for it. Conversion comes next. Shoppers click and buy when the images, price, reviews and Featured Offer convince them, and products that sell steadily tend to keep their position. Amazon also says{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              listing quality and account health can contribute to rankings
            </a>
            , so a clean, complete listing matters as much as the right words.
          </p>
          <blockquote>Relevance gets your product shown. Sales keep it there.</blockquote>
        </>
      ),
    },
    {
      id: "find-keywords",
      heading: "Amazon keyword research: finding the words your buyers type",
      body: (
        <>
          <p>
            Good keywords come from what shoppers actually type, not from guesses. The quickest start is Amazon’s own search bar: type your main product word and note the suggestions, because they come from real searches.
          </p>
          <p>
            Seller Central adds free data on top. Product Opportunity Explorer shows the top search terms in a niche. Brand Analytics shows which searches lead to clicks and sales for registered brands. The search term report of your Sponsored Products ads lists the exact searches that brought shoppers to you. Together they give you four sources of real search terms, and a clear list of what to target first.
          </p>
        </>
      ),
    },
    {
      id: "where-to-put-keywords",
      heading: "Where your Amazon keywords go: title, bullets and search terms",
      body: (
        <>
          <p>
            Your title carries the most weight, so it should say what the product is in the first few words. Amazon’s guide gives{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              a 200-character limit and recommends 60 or fewer
            </a>
            , and its{" "}
            <a href={TITLE_RULES} target="_blank" rel="noopener noreferrer">
              title rules
            </a>{" "}
            allow the same word at most twice.
          </p>
          <p>
            Bullet points explain one benefit each and are the natural home for your secondary keywords. The description and A+ content cover materials, size, care and what is in the box. The backend search terms hold the synonyms and misspellings that fit nowhere else, with no repeats, brand names or ASINs. Check the{" "}
            <a href={SEARCH_TERMS_HELP} target="_blank" rel="noopener noreferrer">
              current length limit
            </a>
            , then follow our step-by-step guide to{" "}
            <Link href="/blog/amazon-backend-keywords">filling in Amazon backend keywords</Link>.
          </p>
        </>
      ),
    },
    {
      id: "common-mistakes",
      heading: "Amazon SEO mistakes that cost you rankings",
      body: (
        <>
          <p>
            The most common mistake is keyword stuffing: a title packed with every possible term is hard to read and can break Amazon’s title rules. Close behind is using competitor brand names, which Amazon does not allow in the listing or in the search terms.
          </p>
          <p>
            Two quieter mistakes hurt too. Long titles get cut off on phones, so the key words have to come first. And changing everything at once makes it impossible to tell which change helped. Ranking brings shoppers in, and our{" "}
            <Link href="/services/listing-optimization">listing optimization guide</Link> covers turning those visits into sales.
          </p>
        </>
      ),
    },
    {
      id: "b2b-seo-service",
      heading: "What our B2B SEO agency does for Amazon sellers",
      figure: {
        src: "/img/amazon-seo-dashboard.webp",
        alt: "Laptop showing an Amazon B2B SEO and advertising dashboard: keyword rankings, organic traffic and ACOS by ad campaign",
        width: 1600,
        height: 899,
        caption: "The kind of dashboard we track rank and sales with. Example numbers, not a client result.",
      },
      body: (
        <>
          <p>
            Think of it as SEO B2B marketing for your Amazon brand: once the work is done, it keeps bringing shoppers in. Our B2B SEO service follows four steps, one listing at a time.
          </p>
          <p>
            First we research the searches your buyers really type, using Amazon’s own tools. Then we rewrite your title and bullets so the main keywords come first and still read well, and we fill in the backend search terms with synonyms and misspellings, within Amazon’s rules. Finally we check rank and sales after each change with our Amazon data analysis service.
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
      question: "Is Amazon SEO different from Google SEO?",
      answer:
        "Yes. Google ranks pages that answer a question, while Amazon ranks products shoppers are likely to buy. On Amazon, conversion and sales history matter much more.",
    },
    {
      question: "How long does Amazon SEO take to work?",
      answer:
        "Ranking follows sales, so judge a change over several weeks rather than a few days, and change one thing at a time.",
    },
    {
      question: "Do I need to pay for ads to rank on Amazon?",
      answer:
        "No, but they can help. Amazon says Sponsored Products ads can help offers rise through search results, and their sales add to your product’s history.",
    },
    {
      question: "Can Nautilo Studio check my listing?",
      answer:
        "Yes. Send us one Amazon listing through the free review form on this page and we’ll email you what we would improve first.",
    },
  ],
  proof: {
    label: "Proof from the market",
    heading: "Amazon search is where vendors like you win or lose.",
    items: [
      {
        value: "More than half",
        text: "of US consumers start their online product searches on Amazon, so that is where your product has to be found.",
        source: 1,
      },
      {
        value: "60%+",
        text: "of sales in the Amazon store come from independent sellers, most of them small and medium-sized businesses.",
        source: 2,
      },
      {
        value: "11,000+",
        text: "US-based independent sellers grew their sales by more than 10× in 2025.",
        source: 2,
      },
    ],
    note: "Figures published by Jungle Scout and Amazon. They describe the market, not Nautilo Studio clients.",
  },
  caseStudy: {
    label: "Case study · published by Amazon Ads",
    heading: "How an agency helped Bold Care grow ad sales by 69% in a crowded category",
    intro:
      "Bold Care, a men’s health and wellness brand founded in 2019, sells in a category full of established names. It worked with Adbrew, an Amazon Ads partner agency, and the work won Adbrew a Challenger Brand Partner Award.",
    steps: [
      {
        heading: "The challenge",
        text: "Bold Care had a low share of voice on high-intent searches and needed new customers, but its advertising cost of sales (ACOS) was too high to get there on its budget.",
      },
      {
        heading: "The approach",
        text: "The agency found the products most likely to win new customers, gave each one its own ACOS target, defended Bold Care’s brand searches and moved bids to the hours when shoppers bought most.",
      },
      {
        heading: "The result",
        text: "More visibility on generic searches, more new customers and more sales, while every advertising dollar worked harder.",
      },
    ],
    results: [
      { value: "+69.1%", label: "Growth in ad-attributed sales" },
      { value: "76.3%", label: "Of customers from ads were new to the brand" },
      { value: "+20%", label: "Share of voice on generic keywords" },
      { value: "−17%", label: "Advertising cost of sales (ACOS)" },
    ],
    quote: {
      text: "Adbrew’s insights helped boost our visibility, efficiency, ad-attributed sales, and new-to-brand growth.",
      by: "Akshay Punjabi, Growth, Bold Care",
    },
    takeaway:
      "The lesson for your store: win the generic searches your buyers type and spend only where they buy. That is where our B2B SEO service starts, on organic search and on Sponsored Products.",
    note: "Bold Care is not a Nautilo Studio client. Results reported by Amazon Ads for Bold Care, India, 2024–2025.",
    source: 3,
  },
  story: {
    label: "Our story",
    heading: "Why four students in Barcelona started an Amazon agency",
    steps: [
      {
        heading: "What we saw",
        text: "US vendors with a good product on Amazon and no one to market it. Agencies did the work for them and kept the know-how. Tools handed them data and left them alone.",
      },
      {
        heading: "Our idea",
        text: "Bring data, AI and hands-on work together, and do it with the vendor, not for them. We start with one listing, show what changes and grow from there.",
      },
      {
        heading: "Why a nautilus",
        text: "A nautilus grows one chamber at a time along the golden spiral. We help stores grow the same way: one listing, one keyword, one report at a time.",
      },
    ],
    link: { href: "/about", text: "Meet the four of us behind Nautilo Studio" },
  },
  sources: {
    heading: "Sources",
    items: [
      { label: "Jungle Scout, Consumer Trends Report Q1 2024 (survey of 1,000 US consumers, February 2024)", href: "https://www.junglescout.com/resources/reports/consumer-trends-2024-q1/" },
      { label: "Amazon, Amazon selling stats (Sell on Amazon)", href: "https://sell.amazon.com/blog/amazon-stats" },
      { label: "Amazon Ads, “Adbrew helps Bold Care grow sales with Amazon Ads” (case study)", href: "https://advertising.amazon.com/library/case-studies/bold-care-adbrew" },
      { label: "Amazon, Amazon SEO guide (Sell on Amazon)", href: AMAZON_SEO_GUIDE },
      { label: "Amazon Seller Central, product title requirements", href: TITLE_RULES },
      { label: "Amazon Seller Central, search terms help", href: SEARCH_TERMS_HELP },
    ],
  },
};

const copy: GuideCopy = { title, page };
export default copy;
