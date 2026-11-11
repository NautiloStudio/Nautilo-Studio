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
  question: "B2B SEO for Amazon sellers: how do you rank higher in Amazon search?",
  answer:
    "B2B SEO for Amazon sellers, or Amazon SEO, is how you get your product in front of shoppers who search for it: Amazon shows the products that best match a search and that shoppers are most likely to buy. Put the words shoppers type into your title, bullets and backend search terms, then make the listing convincing enough to sell. Those sales, with good listing quality, push the product higher over time.",
  description,
  image: {
    src: "/img/service-ads.jpg",
    alt: "Magnifying glass leaning against a small parcel",
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
      heading: "Amazon ranking factors: what decides where you rank?",
      body: (
        <ul>
          <li>
            <strong>Relevance.</strong> The search words appear in your title, bullets, description
            and backend search terms.
          </li>
          <li>
            <strong>Conversion.</strong> Shoppers click and buy. Images, price, reviews and the
            Featured Offer all play a part.
          </li>
          <li>
            <strong>Sales history.</strong> Products that sell steadily tend to keep their position.
          </li>
          <li>
            <strong>Listing quality.</strong> Amazon says{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              listing quality and account health can contribute to rankings
            </a>
            .
          </li>
        </ul>
      ),
    },
    {
      id: "find-keywords",
      heading: "Amazon keyword research: how do you find what shoppers search?",
      body: (
        <ul>
          <li>
            <strong>Amazon’s search bar.</strong> Type your product word and note what Amazon
            suggests.
          </li>
          <li>
            <strong>Product Opportunity Explorer.</strong> A free Seller Central tool with top
            search terms for a niche.
          </li>
          <li>
            <strong>Brand Analytics.</strong> For Brand Registry brands: which searches lead to
            clicks and sales.
          </li>
          <li>
            <strong>Search term report.</strong> The real searches that led shoppers to your
            Sponsored Products ads.
          </li>
        </ul>
      ),
    },
    {
      id: "where-to-put-keywords",
      heading: "Where should your Amazon keywords go?",
      body: (
        <ul>
          <li>
            <strong>Title.</strong> What the product is first. Amazon’s guide gives{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              a 200-character limit and recommends 60 or fewer
            </a>
            , and its{" "}
            <a href={TITLE_RULES} target="_blank" rel="noopener noreferrer">
              title rules
            </a>{" "}
            allow a word at most twice.
          </li>
          <li>
            <strong>Bullet points.</strong> One benefit each, with your secondary keywords where they
            read naturally.
          </li>
          <li>
            <strong>Description and A+ content.</strong> Materials, size, care and what’s in the box.
          </li>
          <li>
            <strong>Backend search terms.</strong> Synonyms and misspellings, with no repeats, brand
            names or ASINs. Check the{" "}
            <a href={SEARCH_TERMS_HELP} target="_blank" rel="noopener noreferrer">
              current length limit
            </a>
            , and see our step-by-step guide to{" "}
            <Link href="/blog/amazon-backend-keywords">filling in Amazon backend keywords</Link>.
          </li>
        </ul>
      ),
    },
    {
      id: "b2b-seo-service",
      heading: "Our B2B SEO service for Amazon sellers: what’s included",
      body: (
        <>
          <p>
            For a brand on Amazon, SEO is the B2B marketing that keeps bringing shoppers after the work is done. Our B2B SEO service covers four steps:
          </p>
          <ul>
            <li>
              <strong>Keyword research.</strong> The searches your buyers really type, from Amazon’s own tools.
            </li>
            <li>
              <strong>Title and bullets.</strong> Rewritten so the main keywords come first and still read well.
            </li>
            <li>
              <strong>Backend search terms.</strong> Synonyms and misspellings, within Amazon’s rules.
            </li>
            <li>
              <strong>Tracking.</strong> We check rank and sales after each change with our{" "}
              <Link href="/services/data-analysis">Amazon data analysis service</Link>.
            </li>
          </ul>
          <p>
            The work is done by our team in Barcelona. <Link href="/about">Meet the team behind Nautilo Studio</Link>.
          </p>
        </>
      ),
    },
    {
      id: "common-mistakes",
      heading: "What are the most common Amazon SEO mistakes?",
      body: (
        <>
          <ul>
            <li>
              <strong>Keyword stuffing.</strong> Hard to read, and it can break Amazon’s title rules.
            </li>
            <li>
              <strong>Competitor brand names.</strong> Using them in your listing or search terms is
              against Amazon’s rules.
            </li>
            <li>
              <strong>Forgetting phones.</strong> Long titles get cut off, so the key words go first.
            </li>
            <li>
              <strong>Changing everything at once.</strong> Then you can’t tell which change helped.
            </li>
          </ul>
          <p>
            Ranking brings shoppers in. Our{" "}
            <Link href="/services/listing-optimization">listing optimization guide</Link> covers turning
            those visits into sales, and our{" "}
            <Link href="/blog">blog for Amazon sellers</Link> has more step-by-step guides.
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
};

const copy: GuideCopy = { title, page };
export default copy;
