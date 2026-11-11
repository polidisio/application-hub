"use client";

import Link from "next/link";
import { App } from "@/data/apps";
import { useTranslation } from "@/app/hooks/useTranslation";
import AppIcon from "./AppIcon";

export default function AppCard({ app, hasDocs }: { app: App; hasDocs: boolean }) {
  const { t, locale } = useTranslation();
  const description = locale === "es" ? app.description : app.descriptionEn;

  return (
    <article className="group relative flex flex-col rounded-2xl border border-line bg-surface p-5 shadow-[var(--shadow)] transition-colors hover:border-accent">
      <div className="flex items-center gap-4">
        <AppIcon app={app} />
        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold leading-tight">
            <Link href={`/apps/${app.id}`} className="after:absolute after:inset-0 after:rounded-2xl">
              {app.name}
            </Link>
          </h2>
          <span className="badge mt-1">{t.ui.platform[app.category]}</span>
        </div>
      </div>
      <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted">{description}</p>
      <div className="relative z-10 mt-5 flex items-center gap-4 text-sm">
        <span className="font-medium text-accent group-hover:underline">{t.ui.details} →</span>
        {hasDocs && (
          <Link href={`/apps/${app.id}/docs`} className="ml-auto rounded-md bg-accent-soft px-2 py-0.5 font-medium text-accent hover:underline">
            {t.ui.manual}
          </Link>
        )}
        <Link href={app.privacyUrl ?? "/privacy"} className={`${hasDocs ? "" : "ml-auto "}text-subtle hover:text-fg`}>
          {t.ui.privacy}
        </Link>
      </div>
    </article>
  );
}
