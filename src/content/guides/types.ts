import type { LandingContent } from "@/components/LandingPage";

// One guide article in one language: the <title> plus everything on the page.
// page.description doubles as the meta description.
export type GuideCopy = { title: string; page: LandingContent };
