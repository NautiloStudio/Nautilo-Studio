import { GuidePage, guideMetadata } from "@/content/guides";

const slug = "amazon-seo";

export function generateMetadata({ params }: PageProps<"/[lang]/services/amazon-seo">) {
  return guideMetadata(slug, params);
}

export default function Page({ params }: PageProps<"/[lang]/services/amazon-seo">) {
  return <GuidePage slug={slug} params={params} />;
}
