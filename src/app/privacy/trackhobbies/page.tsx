"use client";

import PrivacyView from "@/app/components/PrivacyView";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function TrackHobbiesPrivacyPage() {
  const { t } = useTranslation();
  return <PrivacyView p={t.privacyTrackHobbies} />;
}
