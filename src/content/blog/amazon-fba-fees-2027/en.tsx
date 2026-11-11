import Link from "next/link";
import { BlogPhotoFigure, FeeChangeFigure } from "@/components/BlogFigures";
import type { BlogPost } from "../types";
import { calculatorPhoto, heroPhoto } from "./media";

// Amazon's own announcement (November 5, 2026) and the most detailed independent breakdown of it.
const AMAZON_2027 = "https://sellingpartners.aboutamazon.com/update-to-us-referral-and-fulfillment-by-amazon-fees-for-2027";
const AMAZON_2026 = "https://sellingpartners.aboutamazon.com/update-to-u-s-referral-and-fulfillment-by-amazon-fees-for-2026";
const PPC_LAND = "https://ppc.land/amazon-sellers-face-average-0-19-fba-fee-rise-from-january-15-2027/";

const post: BlogPost = {
  slug: "amazon-fba-fees-2027",
  title: "Amazon FBA Fees 2027: 5 Key Changes and How to Prepare",
  description:
    "Amazon FBA fees 2027: the 5 changes US sellers face from January 15, the key dates and how to check your margins per product. Read it, then get a free review.",
  h1: "Amazon FBA fees 2027: 5 key changes and how to protect your margins",
  breadcrumb: "Amazon FBA fees 2027",
  keyword: "amazon fba fees 2027",
  excerpt:
    "Amazon announced its 2027 US fees on November 5. Here is what changes, when, and how to check what it means for each of your products.",
  published: "2026-11-11",
  updated: "2026-11-11",
  readMinutes: 8,
  hero: { ...heroPhoto, alt: "Warehouse aisle with tall shelves full of cardboard boxes" },
  intro: (
    <>
      <p>
        <strong>Amazon FBA fees 2027</strong> are now public. On November 5, 2026, Amazon told US
        sellers that its fulfillment fees will rise by about $0.19 per unit sold on average, with most
        changes starting on January 15, 2027. An average hides a lot: Amazon says fees will go up for
        some products and down for others, and storage and low-inventory rules change too.
      </p>
      <p>
        This article sums up the five changes that matter most, the dates to put in your calendar and
        how to check, product by product, what they do to your margins. If you are new to reading your
        numbers, our <Link href="/data-analysis">guide to Amazon data analysis</Link> explains which
        reports to start with.
      </p>
    </>
  ),
  sections: [
    {
      id: "what-changes",
      heading: "What changes in Amazon FBA fees for 2027?",
      body: (
        <>
          <p>
            Amazon’s announcement, signed by its vice president of Fulfillment by Amazon, covers
            fulfillment, storage, low-inventory and promotion fees. Most fulfillment changes start on
            January 15, 2027, the day after the 2026 holiday peak fees end. Storage and the
            low-inventory-level fee follow on February 1, 2027.
          </p>
          <p>
            Amazon’s stated aim is to make each fee match more closely what it costs to fulfil that
            product. In practice, that means two sellers can read the same announcement and see very
            different bills. The only way to know your own impact is to check product by product, which
            we cover further down.
          </p>
        </>
      ),
    },
    {
      id: "five-changes",
      heading: "The 5 key changes for US sellers",
      body: (
        <>
          <h3>1. Fulfillment fees rise by $0.19 per unit on average</h3>
          <p>
            From January 15, 2027, the pick, pack and ship fee goes up by about $0.19 per unit on
            average. The increase is not spread evenly. According to the detailed breakdown by PPC Land,
            standard-size items priced between $10 and $50 and above $50 see the largest average
            increases, while some large items get cheaper. Amazon’s own examples include a phone case
            under $10 going from $2.49 to $2.72 per unit.
          </p>
          <p>
            Fees keep using three price bands: under $10, $10 to $50, and above $50. Items priced at
            exactly $10 or $50 pay the $10 to $50 rate.
          </p>

          <FeeChangeFigure
            lang="en"
            before={{ label: "2026", value: 2.49 }}
            after={{ label: "2027", value: 2.72 }}
            labels={{ title: "Amazon’s example: the FBA fee for a phone case under $10", perUnit: "per unit" }}
            caption="Fee per unit before and after January 15, 2027. Source: Amazon."
          />

          <h3>2. Fewer products get Low-Price FBA rates</h3>
          <p>
            Until January 14, 2027, items under $10 get the cheaper Low-Price FBA rates automatically.
            From January 15, five fee categories lose them and move to the $10 to $50 rates:
            Automotive and Powersports, Compact Appliances, Musical Instruments and AV Production,
            Media (books, DVDs, music, software and video) and Computers. If you sell cheap items in
            these categories, this is likely the biggest change for you.
          </p>

          <h3>3. New tiers and handling fees for large items</h3>
          <p>
            Bulky and oversize products get more size tiers, so fees follow size more closely. Two new
            handling fees appear: one for flat products, such as boards and panels, and one for items
            with a very long side. The old overmax handling fee ends. Some heavy items will pay less,
            others more, so large-item sellers should recheck every product’s size tier.
          </p>

          <h3>4. One age-based storage fee from February 1</h3>
          <p>
            Amazon drops the storage utilization surcharge and folds the aged inventory surcharge into
            the monthly storage fee, as a single rate based on how long stock has been in its
            warehouses. Amazon says inventory that sells within six months will pay flat or lower fees,
            and aged inventory will pay more. Slow sellers become more expensive to keep.
          </p>

          <h3>5. A new test for the low-inventory-level fee</h3>
          <p>
            Also from February 1, the low-inventory-level fee applies only when stock falls below 28
            days of supply. Amazon will measure it on actual shipments in the four weeks before and
            after each check, instead of trailing 30- and 90-day sales. Keeping at least four weeks of
            stock in Amazon’s warehouses avoids the fee.
          </p>
        </>
      ),
    },
    {
      id: "what-stays-the-same",
      heading: "What stays the same",
      body: (
        <ul>
          <li>
            <strong>The fuel and logistics surcharge.</strong> Amazon says the 3.5% surcharge
            introduced in 2026 remains unchanged.
          </li>
          <li>
            <strong>Most referral fees.</strong> The changes reported are a new rate for 3D printers,
            in effect since November 5, 2026, and a promotional 10% rate for Amazon Renewed products
            until October 18, 2027.
          </li>
          <li>
            <strong>The inbound placement fee rate card.</strong> PPC Land reports no change to the
            rates, although standard-size inbound locations are being consolidated.
          </li>
        </ul>
      ),
    },
    {
      id: "key-dates",
      heading: "Key dates for Amazon FBA fees 2027",
      body: (
        <ul>
          <li>
            <strong>November 5, 2026:</strong> Amazon announces the 2027 fees. The 3D printer referral
            rate starts.
          </li>
          <li>
            <strong>January 14, 2027:</strong> the 2026 holiday peak fee period ends, and so do
            Low-Price FBA rates for the five categories above.
          </li>
          <li>
            <strong>January 15, 2027:</strong> new fulfillment fees, size tiers and handling fees.
          </li>
          <li>
            <strong>February 1, 2027:</strong> the age-based storage fee and the new
            low-inventory-level fee test.
          </li>
        </ul>
      ),
    },
    {
      id: "check-your-margins",
      heading: "How to check what the 2027 fees mean for your margins",
      body: (
        <>
          <BlogPhotoFigure photo={{ ...calculatorPhoto, alt: "Calculator on printed charts next to a laptop on a desk" }} label="Photo" />
          <p>
            Amazon has built two tools for this. Use them before January 15, while you still have time
            to change prices or stock.
          </p>
          <ul>
            <li>
              <strong>Fee Change Comparison dashboard.</strong> In Profit Analytics, in Seller Central.
              It shows how the changes affect your account and each product.
            </li>
            <li>
              <strong>Revenue Calculator.</strong> Lets you model a product’s fees and profit under
              different prices.
            </li>
          </ul>
          <h3>A simple routine, product by product</h3>
          <ul>
            <li>List your products with their price band, size tier and monthly units sold.</li>
            <li>For each one, note the 2026 and 2027 fulfillment fee and the difference.</li>
            <li>Multiply the difference by units sold to see the cost per month.</li>
            <li>Sort by that cost: the top of the list is where to act first.</li>
          </ul>
          <h3>An illustrative example</h3>
          <p>
            Take Amazon’s phone case example: the fee rises from $2.49 to $2.72, so $0.23 more per
            unit. If a product like that sold 2,000 units a month, a volume we use only to illustrate
            the math, the change would cost $460 a month, or $5,520 a year. On a cheap item with thin
            margins, that can be the difference between profit and loss.
          </p>
        </>
      ),
    },
    {
      id: "before-january-15",
      heading: "What to do before January 15",
      body: (
        <>
          <ul>
            <li>
              <strong>Recheck prices near the band limits.</strong> A product priced just above $10 or
              $50 now pays a different rate than one just below. See what a small price change would do
              to both the fee and your sales before you move.
            </li>
            <li>
              <strong>Clear aged stock before February 1.</strong> With the new age-based storage fee,
              old inventory costs more. Consider promotions or removals for slow sellers.
            </li>
            <li>
              <strong>Plan for 28 days of supply.</strong> Set replenishment so your best sellers do
              not fall below four weeks of stock.
            </li>
            <li>
              <strong>Recheck large items.</strong> With new tiers and handling fees, a product’s
              packaging and dimensions matter more than before.
            </li>
          </ul>
          <p>
            Fees are only one part of profit. To see how sessions, conversion and advertising fit in,
            read our <Link href="/data-analysis">guide to the Amazon numbers that matter</Link>.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: "When do the Amazon FBA fees for 2027 start?",
      answer:
        "Most fulfillment fee changes start on January 15, 2027. The new age-based storage fee and the new low-inventory-level fee test start on February 1, 2027. Fees are set when a unit ships, not when it is ordered.",
    },
    {
      question: "How much do Amazon FBA fees increase in 2027?",
      answer:
        "Amazon says the fulfillment fee rises by about $0.19 per unit sold on average. Some products pay more and others pay less, depending on size tier and price band, so check your own products in the Fee Change Comparison dashboard.",
    },
    {
      question: "Does the fuel and logistics surcharge change in 2027?",
      answer: "No. Amazon says the 3.5% fuel and logistics surcharge remains unchanged.",
    },
    {
      question: "How do I avoid the low-inventory-level fee in 2027?",
      answer:
        "From February 1, 2027, the fee applies only when your stock falls below 28 days of supply. Keeping at least four weeks of stock for each product in Amazon’s warehouses avoids it.",
    },
    {
      question: "Can Nautilo Studio help me check my margins?",
      answer:
        "Yes. Data analysis is one of our services. Send us one listing through our free review and we’ll tell you what we would look at first.",
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
      title: "Update to US referral and Fulfillment by Amazon fees for 2026",
      url: AMAZON_2026,
    },
  ],
  cta: {
    text: "New fees change the math on every product. See which numbers to watch each week, or let us take a free look at one of your listings.",
    pillar: { href: "/data-analysis", label: "Read our Amazon data analysis guide" },
    formHeading: "Not sure what the 2027 fees mean for you?",
    formText: "Send one listing and we’ll tell you, for free, what we would check first.",
  },
};

export default post;
