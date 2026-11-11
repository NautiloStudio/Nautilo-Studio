import { GuidePage, guideMetadata } from "@/content/guides";

const slug = "listing-optimization";

export function generateMetadata({ params }: PageProps<"/[lang]/services/listing-optimization">) {
  return guideMetadata(slug, params);
}

export default function Page({ params }: PageProps<"/[lang]/services/listing-optimization">) {
  return <GuidePage slug={slug} params={params} />;
}
