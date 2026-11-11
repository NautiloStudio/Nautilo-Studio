import Link from "next/link";
import { SearchTermsFigure } from "@/components/BlogFigures";
import type { BlogPost } from "../types";
import { heroPhoto } from "./media";

const AMAZON_SEO_GUIDE = "https://sell.amazon.com/blog/amazon-seo";
const PRODUCT_LISTINGS = "https://sell.amazon.com/blog/amazon-product-listings";

const post: BlogPost = {
  slug: "amazon-backend-keywords",
  title: "Amazon Backend Keywords: How to Fill In Search Terms",
  description:
    "Amazon backend keywords explained: what to put in the search terms field, what to leave out and a worked example. Read it, then get a free listing review.",
  h1: "Amazon backend keywords: how to fill in your search terms",
  breadcrumb: "Amazon backend keywords",
  keyword: "amazon backend keywords",
  excerpt:
    "What goes in the hidden search terms field, what to leave out, and a worked example you can copy for your own listing.",
  published: "2026-11-10",
  updated: "2026-11-11",
  readMinutes: 9,
  author: { name: "Filippo Verace", role: "SEO & Ads Lead", href: "/about" },
  hero: { ...heroPhoto, alt: "Magnifying glass held over a laptop keyboard" },
  intro: (
    <>
      <p>
        <strong>Amazon backend keywords</strong> are the words you give Amazon in the search terms
        field of your listing. Shoppers never see them, but Amazon reads them when it decides which
        searches your product can appear for. Used well, they let you cover synonyms, alternate names
        and common misspellings without stuffing your title.
      </p>
      <p>
        This guide explains what the field is, why it still matters, how to find the right words and
        exactly how to write them, with a worked example at the end. If you are new to the topic,
        start with our page on <Link href="/services/amazon-seo">B2B SEO for Amazon sellers</Link>, which covers the bigger
        picture of how Amazon ranks products.
      </p>
    </>
  ),
  sections: [
    {
      id: "what-are-backend-keywords",
      heading: "What are Amazon backend keywords?",
      body: (
        <>
          <p>
            Every Amazon listing has visible text, such as the title, bullet points and description,
            and hidden fields that only Amazon reads. The search terms field is one of those hidden
            fields. Sellers usually call what goes in it backend keywords or backend search terms.
          </p>
          <p>
            Think of it as a short list of extra ways a shopper might describe your product. If
            someone searches for a word that is in your backend keywords, your product can be
            considered for that search, even though the word appears nowhere on the page.
          </p>
          <h3>Where to find the search terms field</h3>
          <p>
            In Seller Central, open the listing you want to edit and go to the keywords section of
            the product details. You will see a field called search terms. Changes there do not
            alter anything shoppers see, so it is a safe place to experiment.
          </p>
          <h3>How backend keywords differ from your title</h3>
          <p>
            Your title has to read well for a human: it is the first thing a shopper sees, and Amazon
            sets rules for its length and wording. Backend keywords have no reader, so they can be a
            plain list of words. That freedom is the point: the title carries your most important
            words, and the backend field picks up everything else.
          </p>
        </>
      ),
    },
    {
      id: "why-they-matter",
      heading: "Why Amazon backend keywords still matter",
      body: (
        <>
          <p>
            Some sellers assume the hidden field stopped working years ago. Amazon says otherwise:
            its own seller guide on search notes that{" "}
            <a href={AMAZON_SEO_GUIDE} target="_blank" rel="noopener noreferrer">
              back-end keywords can still help a product rank for specific searches
            </a>
            .
          </p>
          <p>
            Backend keywords will not lift a weak listing on their own. Amazon still weighs how
            relevant your product is, how often shoppers click and buy, and how well it sells over
            time. What the field does is widen the set of searches you can appear in at all. You
            cannot rank for a search you are not eligible for.
          </p>
          <p>
            That makes backend keywords one of the cheapest improvements you can make. They take
            minutes to write, cost nothing and do not change how your listing looks to shoppers.
          </p>
        </>
      ),
    },
    {
      id: "find-backend-keywords",
      heading: "How to find backend keywords for your product",
      body: (
        <>
          <p>
            Good backend keywords come from what shoppers actually type, not from what you call the
            product inside your business. Use more than one source, then keep only the words that
            are not already in your title and bullet points.
          </p>
          <h3>Start with Amazon’s search bar</h3>
          <p>
            Type your main product word into Amazon and note the suggestions that appear. They come
            from real searches, and they often reveal alternate names you had not thought of, such as
            “flask” for a water bottle or “chopping board” for a cutting board.
          </p>
          <h3>Use Product Opportunity Explorer</h3>
          <p>
            Product Opportunity Explorer in Seller Central shows top search terms and search volume
            trends for a niche. Look for terms close to your product that you have not used
            elsewhere in the listing.
          </p>
          <h3>Mine your Sponsored Products search term report</h3>
          <p>
            If you run Sponsored Products ads, the search term report lists the exact searches that
            led shoppers to your ads, including the ones that ended in a sale. Terms that convert but
            are missing from your listing are strong backend candidates.
          </p>
          <h3>Check Brand Analytics if your brand is registered</h3>
          <p>
            Brands in Brand Registry can use Brand Analytics. Its Search Query Performance dashboard
            shows which searches lead to impressions, clicks and purchases for your products, so you
            can see which terms already work and which you are missing.
          </p>
        </>
      ),
    },
    {
      id: "write-search-terms",
      heading: "How to write your Amazon search terms field",
      body: (
        <>
          <p>
            Once you have a list, writing the field is mostly about removing words. Aim for a clean
            line of unique terms that adds coverage your visible text does not already give you.
          </p>
          <h3>Use synonyms, alternate names and misspellings</h3>
          <p>
            Include other words for the same product, other ways to describe its use, and spellings
            shoppers commonly get wrong. Add abbreviations and units written differently, such as
            “oz” and “ounce”, only if you have not used them already.
          </p>
          <h3>Keep the format simple</h3>
          <p>
            Write in lowercase and separate words with spaces. Commas are not needed, and you do not
            have to repeat a word in every combination, because Amazon combines the words in your
            listing for you. Leave out filler words such as “a”, “the” and “for”.
          </p>
          <h3>Do not repeat words from your title</h3>
          <p>
            Every word you repeat takes space from a new one. If “stainless steel” is already in your
            title, it does nothing extra in the backend. Check each word against your title and
            bullet points before you keep it.
          </p>
          <h3>Stay within the length limit</h3>
          <p>
            Amazon caps the length of the search terms field, and it measures the limit in bytes
            rather than characters, so accented letters can count for more. The limit can change and
            can differ by store, so check the current figure for your marketplace in Seller Central
            and stay comfortably under it.
          </p>
        </>
      ),
    },
    {
      id: "what-to-leave-out",
      heading: "What to leave out of your backend search terms",
      body: (
        <>
          <p>
            Some words waste space, and some break Amazon’s rules. Keep all of these out of the field:
          </p>
          <ul>
            <li>
              <strong>Brand names.</strong> Neither your own nor anyone else’s. Competitor brand names
              in particular can get your listing into trouble.
            </li>
            <li>
              <strong>ASINs and product codes.</strong> They add nothing to how shoppers search.
            </li>
            <li>
              <strong>Subjective claims.</strong> Words like “best”, “amazing” or “top quality” describe
              opinions, not products.
            </li>
            <li>
              <strong>Temporary words.</strong> “New”, “on sale” or “limited offer” go out of date and
              do not describe the product.
            </li>
            <li>
              <strong>Repeats and padding.</strong> The same word twice, plurals of words you already
              used, or long strings of near-identical phrases.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "worked-example",
      heading: "A worked example: backend keywords for a water bottle",
      body: (
        <>
          <p>
            Say your title is “24 oz Stainless Steel Water Bottle with Screw-Top Lid, Charcoal”. The
            title already covers <em>24 oz</em>, <em>stainless steel</em>, <em>water bottle</em>,{" "}
            <em>screw-top lid</em> and <em>charcoal</em>. Your backend keywords should cover what is
            left. A first draft might look like this:
          </p>
          <SearchTermsFigure
            labels={{"title": "Already in the title", "field": "Search terms", "bytes": "bytes", "leftOut": "Left out on purpose"}}
            titleWords={["24 oz", "stainless steel", "water bottle", "screw-top lid", "charcoal"]}
            terms="insulated flask thermos canteen vacuum leakproof reusable travel gym hiking office kids bpa free metal tumbler ounce black grey gray"
            leftOut={["brand names", "best", "new", "stainless steel"]}
            caption="The worked example at a glance: the title already covers the first row, the search terms field adds new words, and the last row stays out."
          />
          <p>
            Notice what is not there: no brand names, no “best”, no repeats of the title, and both
            “grey” and “gray” so that shoppers who spell it either way can find you. Then run a quick
            check against your bullet points and remove anything they already say.
          </p>
          <p>
            For a deeper look at the visible side of the same listing, the title, bullets and images,
            read our <Link href="/services/listing-optimization">guide to Amazon listing optimization</Link>.
          </p>
        </>
      ),
    },
    {
      id: "check-results",
      heading: "How to check if your backend keywords work",
      body: (
        <>
          <p>
            Give a change a couple of weeks before you judge it, and change one thing at a time so you
            know what made the difference.
          </p>
          <ul>
            <li>
              <strong>Search for the term yourself.</strong> Look up a backend-only term on Amazon and
              see whether your product appears for it.
            </li>
            <li>
              <strong>Watch your sessions.</strong> Business Reports in Seller Central show whether more
              shoppers are reaching the listing.
            </li>
            <li>
              <strong>Use Search Query Performance.</strong> With Brand Registry, see whether the new
              terms bring impressions, clicks and purchases.
            </li>
          </ul>
          <p>
            Not sure which numbers to watch? Our{" "}
            <Link href="/services/data-analysis">guide to Amazon data analysis</Link> explains the four that
            matter most and where to find them.
          </p>
        </>
      ),
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes with Amazon backend keywords",
      body: (
        <>
          <p>
            Most problems come from trying to fit too much in. The most common mistakes are:
          </p>
          <ul>
            <li>
              <strong>Copying the title into the field.</strong> It feels thorough but adds nothing.
            </li>
            <li>
              <strong>Going over the length limit.</strong> Sellers often report that an overlong field
              may not be indexed as expected, so stay well under it.
            </li>
            <li>
              <strong>Filling it once and forgetting it.</strong> Search habits change. Review the field
              when you review the rest of the listing.
            </li>
            <li>
              <strong>Relying on it alone.</strong> Backend keywords widen your reach, but the listing
              still has to convince shoppers to buy. Amazon’s own advice on{" "}
              <a href={PRODUCT_LISTINGS} target="_blank" rel="noopener noreferrer">
                creating product listings
              </a>{" "}
              covers the visible parts too.
            </li>
          </ul>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: "Do Amazon backend keywords still work?",
      answer:
        "Yes. Amazon’s own seller guide says back-end keywords can still help a product rank for specific searches. They widen the searches you can appear in, while relevance, conversion and sales decide how high you rank.",
    },
    {
      question: "How many backend keywords should I use?",
      answer:
        "There is no set number. Use as many unique, relevant words as fit comfortably within the field’s length limit for your marketplace, and leave out anything already in your title or bullet points.",
    },
    {
      question: "Should I use commas between backend keywords?",
      answer:
        "No. Separate words with spaces and write in lowercase. Punctuation is not needed, and Amazon combines the words in your listing to match different searches.",
    },
    {
      question: "Can I put competitor brand names in backend keywords?",
      answer:
        "No. Leave all brand names out of the search terms field, including your own and especially your competitors’, to stay within Amazon’s rules.",
    },
    {
      question: "Can Nautilo Studio check my backend keywords?",
      answer:
        "Yes. Send us a link to one listing through our free listing review and we’ll tell you what we would change first, backend keywords included.",
    },
  ],
  sources: [
    {
      publisher: "Amazon (Sell on Amazon blog)",
      title: "Amazon SEO: 7 ways to improve your product’s search rankings",
      url: AMAZON_SEO_GUIDE,
    },
    {
      publisher: "Amazon (Sell on Amazon blog)",
      title: "How to create Amazon product listings",
      url: PRODUCT_LISTINGS,
    },
  ],
  cta: {
    text: "Backend keywords are one part of Amazon SEO. See how titles, bullets and sales fit together, or let us check your listing for free.",
    pillar: { href: "/services/amazon-seo", label: "See our B2B SEO service for Amazon sellers" },
    formHeading: "Want us to check your backend keywords?",
    formText: "Send one listing and we’ll tell you, for free, what we would change first.",
  },
};

export default post;
