"use client";

import NautilusLoader from "@/components/NautilusLoader";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Loading() {
  const { t } = useLocale();
  return (
    <div className="flex min-h-[70vh] flex-1 items-center justify-center" role="status">
      <NautilusLoader spinning label={t.loading} className="h-16 w-16" />
    </div>
  );
}
