"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { App } from "@/data/apps";
import { useTranslation } from "@/app/hooks/useTranslation";
import SiteHeader from "./SiteHeader";
import AppIcon from "./AppIcon";

function BookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

export default function AppDetail({ app, hasDocs }: { app: App; hasDocs: boolean }) {
  const { t, locale } = useTranslation();
  const es = locale === "es";
  const dialog = useRef<HTMLDialogElement>(null);
  const [shot, setShot] = useState(0);

  const description = es ? app.description : app.descriptionEn;
  const features = es ? app.features : app.featuresEn;
  const steps = (es ? app.howItWorks : app.howItWorksEn).split("\n").map((s) => s.replace(/^\d+\.\s*/, ""));
  const shots = (!es && app.screenshotsEn) || app.screenshots || [];

  const open = (i: number) => {
    setShot(i);
    dialog.current?.showModal();
  };

  return (
    <>
      <SiteHeader />
      <main className="container pb-20">
        <Link href="/" className="mt-6 inline-block text-sm text-muted hover:text-fg">← {t.ui.back}</Link>

        <section className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center">
          <AppIcon app={app} size={96} />
          <div>
            <span className="badge">{t.ui.platform[app.category]}</span>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{app.name}</h1>
            <p className="mt-2 max-w-2xl text-muted">{description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {hasDocs && <Link href={`/apps/${app.id}/docs`} className="btn btn-accent"><BookIcon />{t.ui.userManual}</Link>}
              {app.appStore && <a href={app.appStore} target="_blank" rel="noopener noreferrer" className="btn btn-accent">{t.ui.appStore}</a>}
              {app.website && <a href={app.website} target="_blank" rel="noopener noreferrer" className="btn">{t.ui.website}</a>}
              <Link href={app.privacyUrl ?? "/privacy"} className="btn">{t.ui.privacyPolicy}</Link>
            </div>
          </div>
        </section>

        {hasDocs && (
          <Link
            href={`/apps/${app.id}/docs`}
            className="group flex items-center gap-4 rounded-2xl border border-accent bg-accent-soft p-5 transition-transform hover:-translate-y-0.5"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-on-accent"><BookIcon size={24} /></span>
            <span className="min-w-0 flex-1">
              <span className="block text-lg font-semibold">{t.ui.userManual}</span>
              <span className="block text-sm text-muted">{t.ui.manualDesc}</span>
            </span>
            <span className="hidden shrink-0 font-medium text-accent sm:block">{t.ui.readManual} →</span>
          </Link>
        )}

        {shots.length > 0 && (
          <section className="py-6">
            <h2 className="mb-4 text-xl font-semibold">{t.ui.screenshots}</h2>
            <div className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
              {shots.map((src, i) => (
                <button key={src} onClick={() => open(i)} className="relative aspect-[9/19.5] w-44 shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-surface-2 sm:w-52">
                  <Image src={src} alt={`${app.name} ${i + 1}`} fill sizes="208px" className="object-cover" />
                </button>
              ))}
            </div>
          </section>
        )}

        <div className="grid gap-10 py-6 md:grid-cols-2">
          <section>
            <h2 className="mb-4 text-xl font-semibold">{t.ui.features}</h2>
            <ul className="space-y-2.5 text-muted">
              {features.map((f) => (
                <li key={f} className="flex gap-3"><span className="mt-0.5 text-ok" aria-hidden>✓</span>{f}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-semibold">{t.ui.howItWorks}</h2>
            <ol className="space-y-3 text-muted">
              {steps.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-medium text-accent">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </section>
        </div>
      </main>

      <dialog ref={dialog} onClick={(e) => e.target === dialog.current && dialog.current?.close()} className="m-auto max-h-[92vh] max-w-[92vw] bg-transparent p-0 backdrop:bg-black/70">
        {shots[shot] && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={shots[shot]} alt={`${app.name} ${shot + 1}`} className="max-h-[92vh] max-w-[92vw] rounded-2xl object-contain" />
        )}
      </dialog>
    </>
  );
}
