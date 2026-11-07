import { GuidePage, guideMetadata } from "@/content/guides";

const slug = "ai-automation";

export function generateMetadata({ params }: PageProps<"/[lang]/ai-automation">) {
  return guideMetadata(slug, params);
}

export default function Page({ params }: PageProps<"/[lang]/ai-automation">) {
  return <GuidePage slug={slug} params={params} />;
}
