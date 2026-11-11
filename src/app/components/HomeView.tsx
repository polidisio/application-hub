"use client";

import { useMemo, useState } from "react";
import SiteHeader from "./SiteHeader";
import AppCard from "./AppCard";
import { apps, Category } from "@/data/apps";
import { useTranslation } from "@/app/hooks/useTranslation";

const categories: Category[] = ["ios", "mac", "desarrollo", "juego"];

export default function HomeView({ docSlugs }: { docSlugs: string[] }) {
  const { t, locale } = useTranslation();
  const [category, setCategory] = useState<Category | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return apps.filter((a) => {
      if (category !== "all" && a.category !== category) return false;
      if (!q) return true;
      const text = `${a.name} ${locale === "es" ? a.description : a.descriptionEn}`.toLowerCase();
      return text.includes(q);
    });
  }, [category, query, locale]);

  const chip = (active: boolean) =>
    `shrink-0 rounded-full border px-3.5 py-1.5 text-sm ${
      active ? "border-accent bg-accent-soft text-accent" : "border-line text-muted hover:text-fg"
    }`;

  return (
    <>
      <SiteHeader />
      <main className="container pb-20">
        <section className="py-10 sm:py-14">
          <h1 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{t.ui.heroTitle}</h1>
          <p className="mt-3 max-w-xl text-muted">{t.header.subtitle}</p>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.ui.search}
            aria-label={t.ui.search}
            className="mt-6 w-full max-w-md rounded-xl border border-line bg-surface px-4 py-2.5 text-sm placeholder:text-subtle"
          />
          <div className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
            <button onClick={() => setCategory("all")} className={chip(category === "all")}>
              {t.ui.all} <span className="text-subtle">{apps.length}</span>
            </button>
            {categories.map((c) => {
              const n = apps.filter((a) => a.category === c).length;
              return n === 0 ? null : (
                <button key={c} onClick={() => setCategory(c)} className={chip(category === c)}>
                  {t.ui.platform[c]} <span className="text-subtle">{n}</span>
                </button>
              );
            })}
          </div>
        </section>

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-subtle">{t.ui.empty}</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((app) => (
              <AppCard key={app.id} app={app} hasDocs={docSlugs.includes(app.id)} />
            ))}
          </div>
        )}
      </main>
      <footer className="border-t border-line py-8 text-sm text-subtle">
        <div className="container">© 2026 Polidisio</div>
      </footer>
    </>
  );
}
