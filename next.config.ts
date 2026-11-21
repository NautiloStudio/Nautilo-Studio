import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Service pages moved under /services/ (November 2026). Old links keep working with a permanent
  // redirect.
  async redirects() {
    // Amazon SEO merged into "SEO and listing optimisation" (November 2026): its old addresses go
    // straight to the merged page, with no redirect chain.
    const services = "listing-optimization|data-analysis|ai-automation";
    const merged = "/services/listing-optimization";
    return [
      { source: "/guides/nautilo-amazon-seo-guide.pdf", destination: "/guides/nautilo-listing-optimization-guide.pdf", permanent: true },
      { source: "/services/amazon-seo", destination: merged, permanent: true },
      { source: "/:lang(es|fr|de|it)/services/amazon-seo", destination: `/:lang${merged}`, permanent: true },
      { source: "/amazon-seo", destination: merged, permanent: true },
      { source: "/:lang(es|fr|de|it)/amazon-seo", destination: `/:lang${merged}`, permanent: true },
      { source: `/:slug(${services})`, destination: "/services/:slug", permanent: true },
      { source: `/:lang(es|fr|de|it)/:slug(${services})`, destination: "/:lang/services/:slug", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
