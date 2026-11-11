import type { BlogPost } from "./types";
import amazonBackendKeywords from "./amazon-backend-keywords";
import amazonFbaFees2027 from "./amazon-fba-fees-2027";

// Every blog post, newest first. The blog is English only, at /blog and /blog/<slug>.
export const posts: BlogPost[] = [amazonFbaFees2027, amazonBackendKeywords];

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);
