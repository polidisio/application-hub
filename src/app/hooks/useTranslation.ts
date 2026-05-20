"use client";

import { useState, useEffect } from "react";
import { translations, Locale, TranslationKeys } from "../i18n/translations";

export function useTranslation() {
  const [locale, _setLocale] = useState<Locale>("es");

  useEffect(() => {
    const browserLang = navigator.language || "en";
    const detectedLocale: Locale = browserLang.startsWith("es") ? "es" : "en";
    _setLocale(detectedLocale);
  }, []);

  const t: TranslationKeys = translations[locale];

  const setLocale = (newLocale: Locale) => {
    _setLocale(newLocale);
  };

  return { locale, t, setLocale };
}
