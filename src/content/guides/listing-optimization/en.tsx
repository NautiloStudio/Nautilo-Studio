import Link from "next/link";
import ListingFieldMap from "@/components/ListingFieldMap";
import type { GuideCopy } from "../types";

const AMAZON_SEO_GUIDE = "https://sell.amazon.com/blog/amazon-seo";
const TITLE_RULES = "https://sellercentral.amazon.com/gp/help/external/GYTR6SYGFA5E3EQC";
const SEARCH_TERMS_HELP = "https://sellercentral.amazon.com/help/hub/reference/external/G23501";
const PRODUCT_LISTINGS = "https://sell.amazon.com/blog/amazon-product-listings";
const PRODUCT_PHOTOS = "https://sell.amazon.com/blog/product-photos";
const A_PLUS = "https://sell.amazon.com/tools/a-content";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";
const EXPERIMENTS = "https://sell.amazon.com/tools/manage-your-experiments";

const title = "Amazon SEO and Listing Optimisation | Nautilo Studio";
const description =
  "Amazon SEO and listing optimisation for US sellers: get found for the searches your buyers type, then chosen over the rest. Get a free listing review today.";

const page: GuideCopy["page"] = {
  slug: "listing-optimization",
  breadcrumb: "SEO and listing optimisation",
  question: "Amazon SEO and listing optimisation: get found, then get chosen",
  answer:
    "Amazon SEO gets your product shown when shoppers search. Listing optimisation makes them pick it once they see it. On Amazon both happen on the same page: the title, bullets, images, A+ content and backend search terms decide where you rank and whether shoppers buy. Put the words buyers type where Amazon reads them, make the listing convincing, then test one change at a time. The sales a better listing brings also help it rank.",
  description,
  image: {
    src: "/img/amazon-listing-optimization.jpg",
    alt: "Screen showing an optimised Amazon listing for a bamboo cutting board, tagged get chosen, next to Amazon search results where it ranks first and its organic keyword ranks, tagged get found",
    tile: "bg-apricot",
  },
  updated: "2026-11-20",
  author: { name: "Filippo Verace", role: "Amazon SEO Lead", href: "/about" },
  quickWin: {
    title: "Improve your listing",
    link: { href: "#title", text: "How to write the title" },
  },
  facts: [
    { value: 200, label: "Characters allowed in a title, per Amazon’s SEO guide" },
    { value: 60, label: "Characters Amazon recommends for a title" },
    { value: 9, label: "Photos Amazon lets you upload" },
    { value: 20, suffix: "%", label: "Top sales lift Amazon reports from optimised content" },
  ],
  sections: [
    {
      id: "found-then-chosen",
      heading: "How Amazon works for sellers: get found, then get chosen",
      body: (
        <>
          <p>
            Two things have to happen before a search turns into a sale. Amazon has to show your product for the words the shopper typed, and the shopper has to pick it over the other results on the page. The first is Amazon SEO. The second is listing optimisation. On Amazon they work on the same page, so we treat them as one job.
          </p>
          <p>
            Being found starts with relevance: if a search word appears nowhere in your title, bullets, description or backend search terms, the product rarely shows up for it. Being chosen depends on what the shopper sees next, from the main image and the title to price, reviews and the Featured Offer. The two feed each other. Amazon’s SEO guide says{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              listing quality and account health can contribute to search rankings
            </a>
            , and that better photos and prices can help a product move up in search results organically. A listing that sells climbs, and a listing that climbs gets seen by more buyers.
          </p>
          <ListingFieldMap
            caption="Your listing, field by field"
            labels={{ found: "Get found", chosen: "Get chosen" }}
            rows={[
              { field: "Title", text: "The words Amazon weighs most, and the first thing a shopper reads.", effect: "both" },
              { field: "Bullet points", text: "Secondary keywords for search, and the reasons to buy for the shopper.", effect: "both" },
              { field: "Backend search terms", text: "Synonyms and misspellings shoppers never see.", effect: "found" },
              { field: "Images", text: "The shop counter: shape, size and the product in use.", effect: "chosen" },
              { field: "A+ content", text: "Bigger images and comparisons below the listing.", effect: "chosen" },
            ]}
          />
          <blockquote>Relevance gets your product shown. Sales keep it there.</blockquote>
        </>
      ),
    },
    {
      id: "keyword-research",
      heading: "Amazon keyword research: the words your buyers type",
      body: (
        <>
          <p>
            Good keywords come from what shoppers actually type, not from guesses. The quickest start is Amazon’s own search bar: type your main product word and note the suggestions, because they come from real searches.
          </p>
          <p>
            Seller Central adds free data on top. Product Opportunity Explorer shows the top search terms in a niche. Brand Analytics shows which searches lead to clicks and sales for registered brands. If you already run Sponsored Products, their search term report lists the exact searches that brought shoppers to you. Sort what you find by how closely it describes your product, not only by volume: a precise search with fewer shoppers often sells better than a broad one.
          </p>
          <p>
            The list then feeds every field in the map above. The two or three most important searches go in the title, the next ones in the bullets, and the synonyms that fit nowhere else in the backend search terms.
          </p>
        </>
      ),
    },
    {
      id: "title",
      heading: "The Amazon title: where ranking and clicks meet",
      body: (
        <>
          <p>
            The title is the one field that works hard for both search and the shopper, which is why it is so easy to get wrong. Amazon allows{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              up to 200 characters and recommends 60 or fewer
            </a>
            , and its{" "}
            <a href={TITLE_RULES} target="_blank" rel="noopener noreferrer">
              title rules
            </a>{" "}
            allow the same word at most twice.
          </p>
          <p>
            A title stuffed with every keyword may match more searches, but it reads like a list and loses the click to a cleaner competitor. Phones cut long titles off, so what the product is has to come in the first few words, followed by the brand and the details shoppers compare, such as size, material or count. Write it for the shopper first, then check that your main searches are in it.
          </p>
        </>
      ),
    },
    {
      id: "images-bullets-a-plus",
      heading: "Images, bullets and A+ content: turning a visit into an order",
      body: (
        <>
          <p>
            Once a shopper opens your page, the rest of the listing has to answer the questions they would ask in a shop. Amazon lets you{" "}
            <a href={PRODUCT_LISTINGS} target="_blank" rel="noopener noreferrer">
              upload up to nine photos
            </a>
            , and its photo tips recommend a white background with the product{" "}
            <a href={PRODUCT_PHOTOS} target="_blank" rel="noopener noreferrer">
              filling 85% or more of the frame
            </a>
            . After the main image, show the product from other angles, in use and next to something that shows its size.
          </p>
          <p>
            The five bullet points give one benefit each, backed by a fact shoppers can check, and they are the natural home for the keywords that didn’t fit in the title. “Stainless steel” means more when you say it keeps drinks cold for a day. A+ content adds images and comparison charts below the listing for brands in Brand Registry, and Amazon says{" "}
            <a href={A_PLUS} target="_blank" rel="noopener noreferrer">
              basic A+ content can increase sales by up to 8%
            </a>
            , based on its internal data. The backend search terms hold the synonyms and misspellings, with no repeats, brand names or ASINs: check the{" "}
            <a href={SEARCH_TERMS_HELP} target="_blank" rel="noopener noreferrer">
              current length limit
            </a>{" "}
            and follow our guide to{" "}
            <Link href="/blog/amazon-backend-keywords">filling in Amazon backend keywords</Link>.
          </p>
        </>
      ),
    },
    {
      id: "warning-signs",
      heading: "Signs your listing is losing rankings, sales or both",
      body: (
        <>
          <p>
            Your numbers tell you which half of the job needs work. Few impressions and few visits mean shoppers aren’t finding you, so start with the keywords and the title. Many visits and few orders mean they find you but aren’t convinced. Amazon gives this example itself:{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              a listing with high views but low sales
            </a>{" "}
            may need better images or descriptions.
          </p>
          <p>
            Some signs point at both. Reviews and customer questions that repeat the same doubt mean the listing leaves it unanswered, and returns marked “not as described” mean the listing promises something the product doesn’t match. Fix the wording before you bring in more traffic.
          </p>
          <p>
            The usual mistakes come from the same places: keyword stuffing, competitor brand names (Amazon doesn’t allow them in the listing or the search terms), a title, bullets and images that describe different sizes or contents, and changing everything at once, so nobody can tell which change helped.
          </p>
        </>
      ),
    },
    {
      id: "seo-listing-service",
      heading: "What our Amazon SEO and listing optimisation service includes",
      figure: {
        src: "/img/amazon-listing-optimization.jpg",
        alt: "Screen showing an Amazon listing with five marked edits, the search results for bamboo cutting board and the keyword ranks before and after the update",
        width: 1600,
        height: 1000,
        caption: "Example listing with our changes marked, its search results and keyword ranks. Illustration with example data, not a client listing.",
      },
      body: (
        <>
          <p>
            We work one listing at a time and look at it twice: once as Amazon’s search does, once as a shopper does.
          </p>
          <p>
            First we research the searches your buyers really type, using Amazon’s own tools. Then we rewrite the title and bullets so the main keywords come first and every line still answers a buyer’s question, and we fill in the backend search terms within Amazon’s rules. Next we brief new images and A+ content where they would help most.
          </p>
          <p>
            Last, we test. If your brand is in Brand Registry, Amazon’s{" "}
            <a href={EXPERIMENTS} target="_blank" rel="noopener noreferrer">
              Manage Your Experiments
            </a>{" "}
            shows two versions of a title, image, bullets or A+ content to shoppers and compares the results; Amazon says optimised content can help increase sales by up to 20%. We change one thing at a time and track rank and sales with our{" "}
            <Link href="/services/data-analysis">Amazon data analysis service</Link>.
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
      question: "Why combine Amazon SEO and listing optimisation?",
      answer:
        "Because they work on the same fields and feed each other. Keywords bring shoppers to the listing, the listing turns them into orders, and those sales help the product rank.",
    },
    {
      question: "How long until changes show in rankings and sales?",
      answer:
        "Ranking follows sales, so judge a change over several weeks rather than a few days. Change one thing at a time so you know what made the difference.",
    },
    {
      question: "Do I need to pay for ads to rank on Amazon?",
      answer:
        "No. Amazon says Sponsored Products can help offers rise through search results, but a relevant, convincing listing comes first, and it makes every ad you run work harder. We focus on the listing and organic search, not on running ad campaigns.",
    },
    {
      question: "Can Nautilo Studio review my listing?",
      answer:
        "Yes. Send us one Amazon listing through the free review form on this page and we’ll email you what we would improve first, for search and for sales.",
    },
  ],
  proof: {
    label: "Proof from the market",
    heading: "Amazon search is where brands like you win or lose.",
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
  story: {
    label: "Our story",
    heading: "Why four students in Barcelona started an Amazon agency",
    steps: [
      {
        heading: "What we saw",
        text: "US brands that sell in many channels, with a good product on Amazon and no one to market it there. Agencies did the work for them and kept the know-how. Tools handed them data and left them alone.",
      },
      {
        heading: "Our idea",
        text: "Bring data, AI and hands-on work together, and do it with the brand, not for them. We start with one listing, show what changes and grow from there.",
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
      { label: "Amazon, Amazon SEO guide (Sell on Amazon)", href: AMAZON_SEO_GUIDE },
      { label: "Amazon Seller Central, product title requirements", href: TITLE_RULES },
      { label: "Amazon, product listings and photo tips (Sell on Amazon)", href: PRODUCT_PHOTOS },
      { label: "Amazon, A+ Content (Sell on Amazon)", href: A_PLUS },
      { label: "Amazon, Manage Your Experiments (Sell on Amazon)", href: EXPERIMENTS },
      { label: "Amazon Seller Central, search terms help", href: SEARCH_TERMS_HELP },
    ],
  },
};

const copy: GuideCopy = { title, page };
export default copy;
