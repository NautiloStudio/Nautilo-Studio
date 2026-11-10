import type { BlogPost } from "./types";
import amazonBackendKeywords from "./amazon-backend-keywords";

// Every blog post, newest first. The blog is English only, at /blog and /blog/<slug>.
export const posts: BlogPost[] = [amazonBackendKeywords];

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);
