"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/app/hooks/useTranslation";
import type { Locale } from "@/app/i18n/translations";

const locales: Locale[] = ["es", "en"];

export default function SiteHeader() {
  const { t, locale, setLocale } = useTranslation();
  const [light, setLight] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLight(document.documentElement.dataset.theme === "light");
  }, []);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    if (next) document.documentElement.dataset.theme = "light";
    else delete document.documentElement.dataset.theme;
    try { localStorage.setItem("theme", next ? "light" : "dark"); } catch {}
  };

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/85 backdrop-blur">
      <div className="container flex h-14 items-center gap-4 sm:gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-semibold">
          <Image src="/ApplicationHub.png" alt="" width={24} height={24} className="rounded-md" />
          <span className="hidden min-[440px]:inline">ApplicationHub</span>
        </Link>
        <nav className="flex flex-1 items-center gap-4 text-sm text-muted">
          <Link href="/" className="hover:text-fg">{t.ui.apps}</Link>
          <Link href="/privacy" className="hover:text-fg">{t.ui.privacy}</Link>
        </nav>
        <button
          onClick={toggleTheme}
          aria-label={light ? "Dark theme" : "Light theme"}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-line text-muted hover:text-fg"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            {light ? (
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            ) : (
              <>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </>
            )}
          </svg>
        </button>
        <div role="group" aria-label="Language" className="flex rounded-lg border border-line p-0.5 text-xs font-medium">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => setLocale(l)}
              aria-pressed={locale === l}
              className={`rounded-md px-2.5 py-1 ${locale === l ? "bg-accent-soft text-accent" : "text-muted hover:text-fg"}`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
