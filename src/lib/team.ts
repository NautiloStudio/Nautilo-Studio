// The four people behind Nautilo Studio, in the same order as the services on the homepage.
// Photos live in /public/team/: 640x800 JPGs, cut out and placed on the person's tile colour.
export type TeamMember = {
  name: string;
  role: string;
  summary: string;
  focus: string[];
  guide: { href: string; label: string };
  linkedin: string;
  photo?: string;
  tile: string; // background colour behind the photo, matching the service tile on the homepage
  // Framing, so every face sits at the same height and size: CSS object-position and a zoom factor.
  frame?: { position: string; zoom: number };
};

export const team: TeamMember[] = [
  {
    name: "Filippo Verace",
    role: "SEO & Ads Lead",
    summary:
      "Leads how shoppers find your products: the words they search for, where your listing ranks and the Sponsored Products campaigns that bring them in.",
    focus: ["Amazon SEO", "Sponsored Products", "Keyword research"],
    guide: { href: "/services/amazon-seo", label: "Read the Amazon SEO guide" },
    linkedin: "https://www.linkedin.com/in/filippoverace/",
    photo: "/team/filippo.jpg",
    frame: { position: "50% 28%", zoom: 1 },
    tile: "bg-cyan",
  },
  {
    name: "Maria Giraldo",
    role: "Listing Optimisation Lead",
    summary:
      "Leads how your listing convinces the shoppers who arrive: titles, bullet points, images and A+ content that answer their questions before they buy.",
    focus: ["Titles and bullet points", "Images and A+ content", "A/B tests"],
    guide: { href: "/services/listing-optimization", label: "Read the listing optimisation guide" },
    linkedin: "https://www.linkedin.com/in/maria-giraldo/",
    photo: "/team/maria.jpg",
    frame: { position: "50% 26%", zoom: 1.16 },
    tile: "bg-apricot",
  },
  {
    name: "Veronika Matkovska",
    role: "Data Analysis Lead",
    summary:
      "Leads the numbers: your sales, traffic and conversion reports, turned into a short list of what to fix first and how to tell if it worked.",
    focus: ["Business Reports", "Conversion and ACOS", "Weekly tracking"],
    guide: { href: "/services/data-analysis", label: "Read the data analysis guide" },
    linkedin: "https://www.linkedin.com/in/veronika-matkovska-b5955a173/",
    photo: "/team/veronika.jpg",
    frame: { position: "50% 30%", zoom: 1.06 },
    tile: "bg-royal",
  },
  {
    name: "Carlo Ambrosini",
    role: "AI Automation Lead",
    summary:
      "Leads the AI agents that take repetitive listing and reporting work off your week, and builds the tools and website we work with.",
    focus: ["AI agents", "Workflow automation", "Web and tools"],
    guide: { href: "/services/ai-automation", label: "Read the AI automation guide" },
    linkedin: "https://www.linkedin.com/in/carloambrosini/",
    photo: "/team/carlo.jpg",
    frame: { position: "50% 28%", zoom: 1.04 },
    tile: "bg-graphite",
  },
];
