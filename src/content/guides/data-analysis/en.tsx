import Link from "next/link";
import type { GuideCopy } from "../types";

const BRAND_ANALYTICS = "https://sell.amazon.com/blog/brand-analytics";
const ACOS = "https://advertising.amazon.com/library/guides/acos-advertising-cost-of-sales";
const BOOST_LISTINGS = "https://sell.amazon.com/blog/how-to-boost-amazon-listings";

const title = "Marketing Analytics Agency for Amazon | Nautilo Studio";
const description =
  "Nautilo Studio is the marketing analytics agency for US Amazon sellers: we track the numbers that show where sales leak. Get a free listing review today.";

const page: GuideCopy["page"] = {
  slug: "data-analysis",
  breadcrumb: "Amazon data analysis",
  question: "Marketing analytics agency for Amazon: the numbers that matter",
  answer:
    "Amazon data analysis, the way a marketing analytics agency does it, starts with four numbers for each product: sessions, conversion rate, whether you hold the Featured Offer, and your advertising cost of sales (ACOS). Together they show whether a problem is about being found, being chosen or spending too much on ads. Check them every week, compare them with the week before, and change one thing at a time.",
  description,
  image: {
    src: "/img/amazon-data-analysis.jpg",
    alt: "iMac showing an Amazon store analytics dashboard with sales, orders, conversion rate, ACOS, Featured Offer and ad campaigns",
    tile: "bg-royal",
  },
  updated: "2026-11-16",
  author: { name: "Veronika Matkovska", role: "Data Analysis Lead", href: "/about" },
  quickWin: {
    label: "10-minute check",
    title: "Find where sales leak in 10 minutes",
    steps: ["Open Business Reports in Seller Central", "Note sessions and conversion rate for your top product", "Compare both with the week before"],
    link: { href: "#numbers", text: "The four numbers to track" },
  },
  facts: [
    { value: 4, label: "Numbers to track for every product" },
    { value: 50, suffix: "%", label: "ACOS in Amazon’s example: $50 spent, $100 earned" },
    { value: 1, label: "Day a week for your routine" },
    { value: 1, label: "Problem to fix each week" },
  ],
  sections: [
    {
      id: "numbers",
      heading: "Amazon data analysis: the four numbers that matter most",
      body: (
        <>
          <p>
            Seller Central is full of reports, but a marketing analytics agency starts with four numbers for each product. Sessions tell you how many shoppers visited the product page, so whether people can find you. Conversion rate is the share of those visits that turned into an order, so whether the listing convinces them.
          </p>
          <p>
            The Featured Offer is the offer next to the Buy Now button, and Amazon says price, availability and shipping play into{" "}
            <a href={BOOST_LISTINGS} target="_blank" rel="noopener noreferrer">
              winning the Featured Offer
            </a>
            , which can lead to large increases in sales. ACOS is ad spend divided by ad revenue, and Amazon Ads says your{" "}
            <a href={ACOS} target="_blank" rel="noopener noreferrer">
              ACOS needs to be lower than your profit margin
            </a>{" "}
            for ads to stay profitable.
          </p>
          <blockquote>Four numbers, checked every week, show you where sales leak.</blockquote>
        </>
      ),
    },
    {
      id: "what-they-mean",
      heading: "What the numbers tell a marketing analytics agency",
      body: (
        <>
          <p>
            Read together, the four numbers point to one problem at a time. Few sessions mean shoppers aren’t finding the product, so the keywords in your title, bullets and search terms come first. Many sessions with a low conversion rate mean shoppers arrive but don’t buy, and our{" "}
            <Link href="/services/listing-optimization">Amazon SEO and listing optimisation service</Link> is built for that case.
          </p>
          <p>
            If you lose the Featured Offer, check your price, stock and shipping against the other offers on the same product. If your ACOS is above your margin, ads are losing money: pause the search terms that spend without selling before you raise any budget.
          </p>
        </>
      ),
    },
    {
      id: "where-to-find",
      heading: "Where to find your Amazon data in Seller Central",
      body: (
        <>
          <p>
            Business Reports, under Reports in Seller Central, show sessions, page views and sales for each product. Brands in Brand Registry also get Brand Analytics, whose{" "}
            <a href={BRAND_ANALYTICS} target="_blank" rel="noopener noreferrer">
              Search Query Performance dashboard
            </a>{" "}
            shows impressions, clicks and cart adds for the searches that lead to your products. Advertising reports, in the campaign manager, show ad spend, sales, clicks and ACOS for each campaign and search term.
          </p>
          <p>
            Profit Analytics, also in Seller Central, shows what Amazon charges you for each product. Fees change every year, so read{" "}
            <Link href="/blog/amazon-fba-fees-2027">what changes in Amazon FBA fees for 2027</Link> before you plan prices. Then keep your own sheet, with one row per week and per product, to see trends that a single report hides.
          </p>
        </>
      ),
    },
    {
      id: "weekly-routine",
      heading: "A weekly Amazon reporting routine you can keep",
      body: (
        <>
          <p>
            Amazon data analysis works best as a habit. Pick one day a week and pull the same reports each time, then compare each number with the week before and the same week last month.
          </p>
          <p>
            Write down anything you changed, such as price, images or bids, and when. Then choose one problem to fix this week and check the result the next week. One fix at a time is slower on paper, but it is the only way to know what worked.
          </p>
        </>
      ),
    },
    {
      id: "analytics-service",
      heading: "What our marketing analytics agency does for Amazon sellers",
      figure: {
        src: "/img/amazon-data-analysis.jpg",
        alt: "iMac showing the weekly Amazon numbers a marketing analytics agency tracks: sales, conversion rate, ACOS, Featured Offer, sales by product and ad campaigns",
        width: 1600,
        height: 900,
        caption: "Example data, not a client’s numbers. Photo: Amy Hirschi, Unsplash.",
      },
      body: (
        <>
          <p>
            Think of it as a web analytics agency for your Amazon store: the same discipline, applied to the reports Amazon gives you. Our marketing analytics service follows four steps, one product at a time.
          </p>
          <p>
            First we pull the four numbers for each product and set up one sheet you can read in minutes. Then we find where sales leak, between being found, being chosen and ad spend. We agree on one fix for the week, and the next week we check whether it worked before moving on.
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
      question: "What is a good conversion rate on Amazon?",
      answer:
        "It depends on the category, the price and how shoppers reach you, so there is no single good number. Compare each product with its own history and with similar products in your store.",
    },
    {
      question: "How do you calculate ACOS?",
      answer:
        "Divide ad spend by ad revenue and multiply by 100. Amazon Ads gives the example of $50 spent on a campaign that earned $100, which is an ACOS of 50%.",
    },
    {
      question: "Do I need Brand Registry to analyze my data?",
      answer:
        "Not for the basics. Business Reports and advertising reports are in Seller Central and the campaign manager. Brand Analytics, with search query data, needs a brand in Brand Registry.",
    },
    {
      question: "Can Nautilo Studio analyze my numbers?",
      answer:
        "Yes. We work as a marketing analytics agency for Amazon sellers, and data analysis is one of our services. Send us a listing for a free review, or talk to us about the reports you want to understand.",
    },
  ],
};

const copy: GuideCopy = { title, page };
export default copy;
