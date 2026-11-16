import Link from "next/link";
import type { GuideCopy } from "../types";

const PRODUCT_LISTINGS = "https://sell.amazon.com/blog/amazon-product-listings";
const PRODUCT_PHOTOS = "https://sell.amazon.com/blog/product-photos";
const A_PLUS = "https://sell.amazon.com/tools/a-content";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const title = "Amazon Conversion Rate Optimization Agency | Nautilo Studio";
const description =
  "Nautilo Studio is the conversion rate optimization agency for US Amazon sellers: better titles, images and A+ content so more visitors buy. Free listing review.";

const page: GuideCopy["page"] = {
  slug: "listing-optimization",
  breadcrumb: "Amazon listing optimization",
  question: "Amazon conversion rate optimization agency: how to turn visits into sales",
  answer:
    "Amazon listing optimization, the work of a conversion rate optimization agency, means improving your title, bullet points, images and A+ content so that shoppers who land on your page choose to buy. Start with clear images and a title that says exactly what the product is, then use your bullet points to answer the questions buyers have before they order. Test one change at a time and keep the version that sells better.",
  description,
  image: {
    src: "/img/amazon-listing-optimization.jpg",
    alt: "iMac on an office desk showing an Amazon product page for a bamboo cutting board, with the edited title, main image, bullets, A+ content and new image set marked",
    tile: "bg-apricot",
  },
  updated: "2026-11-16",
  author: { name: "Maria Giraldo", role: "Listing Optimisation Lead", href: "/about" },
  facts: [
    { value: 9, label: "Photos Amazon lets you upload" },
    { value: 85, suffix: "%", label: "Of the frame the product should fill" },
    { value: 5, label: "Bullet points per listing" },
    { value: 8, prefix: "Up to ", suffix: "%", label: "More sales Amazon reports for basic A+ content" },
  ],
  sections: [
    {
      id: "what-matters",
      heading: "Amazon listing optimization: the parts that make shoppers buy",
      body: (
        <>
          <p>
            Once a shopper lands on your product page, four things decide whether they buy: the title, the images, the bullet points and the A+ content. A conversion rate optimization agency works on all four, because each one answers a different question the shopper has.
          </p>
          <p>
            The title says what the product is, then the brand and the details shoppers compare, such as size or colour. Images do the job a shop counter would do: Amazon lets you{" "}
            <a href={PRODUCT_LISTINGS} target="_blank" rel="noopener noreferrer">
              upload up to nine photos
            </a>
            , and its photo tips recommend a white background with the product{" "}
            <a href={PRODUCT_PHOTOS} target="_blank" rel="noopener noreferrer">
              filling 85% or more of the frame
            </a>
            . The five bullet points give one benefit each, backed by a fact shoppers can check. A+ content adds images and text below the listing for brands in Brand Registry, and Amazon says{" "}
            <a href={A_PLUS} target="_blank" rel="noopener noreferrer">
              basic A+ content can increase sales by up to 8%
            </a>
            , based on its internal data.
          </p>
          <blockquote>Shoppers can’t touch your product. Your listing has to do it for them.</blockquote>
        </>
      ),
    },
    {
      id: "signs",
      heading: "Conversion rate optimization: signs your listing needs work",
      body: (
        <>
          <p>
            Amazon gives a simple example:{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              a listing with high views but low sales
            </a>{" "}
            may need better images or descriptions. Many visits and few orders mean shoppers find you but aren’t convinced, so the images, bullet points and A+ content come first.
          </p>
          <p>
            Few visits point to a different problem: shoppers aren’t finding the listing at all, and our{" "}
            <Link href="/services/amazon-seo">B2B SEO service for Amazon sellers</Link> is the better place to start. Two more signs are worth watching. If reviews and customer questions keep repeating the same doubt, answer it in your bullets or images. And returns marked “not as described” mean the listing promises something the product doesn’t match, so fix the wording before you spend more on traffic.
          </p>
        </>
      ),
    },
    {
      id: "testing",
      heading: "How a conversion rate optimization agency tests what works",
      body: (
        <>
          <p>
            Good conversion rate optimization changes one thing at a time. Pick one element, such as the main image or the title, and change only that, so you know what made the difference.
          </p>
          <p>
            If your brand is in Brand Registry, Amazon’s{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              Manage Your Experiments
            </a>{" "}
            shows two versions to shoppers and compares the results. Let the test run long enough to collect real orders, not just a few days, then keep the winning version and move on to the next element.
          </p>
        </>
      ),
    },
    {
      id: "mistakes",
      heading: "Amazon listing mistakes that stop shoppers from buying",
      body: (
        <>
          <p>
            Blurry or dark images are the most common mistake: shoppers can’t touch the product, so the photos have to do that job. Close behind are features without benefits. “Stainless steel” means more when you say it keeps drinks cold.
          </p>
          <p>
            Claims you can’t back up lead to returns and bad reviews, and can break Amazon’s rules. Details that don’t match hurt too: the title, bullets and images should all describe the same size, colour and contents. The words shoppers search for belong in the visible text and in the hidden search terms, and our step-by-step guide to{" "}
            <Link href="/blog/amazon-backend-keywords">filling in Amazon backend keywords</Link> covers the second.
          </p>
        </>
      ),
    },
    {
      id: "cro-service",
      heading: "What our conversion rate optimization agency does for Amazon sellers",
      figure: {
        src: "/img/amazon-listing-optimization.jpg",
        alt: "iMac on an office desk showing an Amazon listing with five marked edits to the title, main image, bullets, A+ content and search terms: the work of a conversion rate optimization agency",
        width: 2400,
        height: 1350,
        caption: "Example listing with our five changes marked on the page. Illustration, not a client listing. Photo: Carl Heyerdahl, Unsplash.",
      },
      body: (
        <>
          <p>
            Think of it as Amazon listing optimization with a test behind every change. Our conversion rate optimization service follows four steps, one listing at a time.
          </p>
          <p>
            First we read your listing the way a shopper does and list what is missing or unclear. Then we rewrite the title and bullet points so each one answers a buyer’s question, and we brief new images and A+ content where they would help most. Finally we test one change at a time and keep the version that sells better.
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
      question: "How many images should an Amazon listing have?",
      answer:
        "Amazon lets you upload up to nine photos and says the more, the better. Start with a clean white-background main image, then add angles, the product in use and its size.",
    },
    {
      question: "Is A+ content worth it?",
      answer:
        "Usually, if you can use it. Amazon says basic A+ content can increase sales by up to 8%, based on its internal data. It is free for eligible brands in Brand Registry.",
    },
    {
      question: "What is the difference between listing optimization and Amazon SEO?",
      answer:
        "Amazon SEO helps shoppers find your listing. Listing optimization helps the shoppers who arrive decide to buy. You need both, and the sales from a better listing also support your ranking.",
    },
    {
      question: "Can Nautilo Studio review my listing?",
      answer:
        "Yes. As a conversion rate optimization agency for Amazon sellers, we start with one listing. Send us a link to it through the free review form on this page and we’ll email you what we would improve first.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
