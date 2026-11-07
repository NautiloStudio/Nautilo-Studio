import { GuidePage, guideMetadata } from "@/content/guides";

const slug = "listing-optimization";

export function generateMetadata({ params }: PageProps<"/[lang]/listing-optimization">) {
  return guideMetadata(slug, params);
}

export default function Page({ params }: PageProps<"/[lang]/listing-optimization">) {
  return <GuidePage slug={slug} params={params} />;
}
