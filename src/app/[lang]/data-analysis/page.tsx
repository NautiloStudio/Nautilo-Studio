import { GuidePage, guideMetadata } from "@/content/guides";

const slug = "data-analysis";

export function generateMetadata({ params }: PageProps<"/[lang]/data-analysis">) {
  return guideMetadata(slug, params);
}

export default function Page({ params }: PageProps<"/[lang]/data-analysis">) {
  return <GuidePage slug={slug} params={params} />;
}
