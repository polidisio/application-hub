"use client";

import PrivacyView from "@/app/components/PrivacyView";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function StreamAuraPrivacyPage() {
  const { t } = useTranslation();
  return <PrivacyView p={t.privacyStreamAura} />;
}
