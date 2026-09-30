"use client";

import PrivacyView from "@/app/components/PrivacyView";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function SyncTrackersPrivacyPage() {
  const { t } = useTranslation();
  return <PrivacyView p={t.privacySyncTrackers} />;
}
