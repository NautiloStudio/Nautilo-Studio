import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Service pages moved under /services/ (November 2026). Old links keep working with a permanent
  // redirect.
  async redirects() {
    const services = "amazon-seo|listing-optimization|data-analysis|ai-automation";
    return [
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
