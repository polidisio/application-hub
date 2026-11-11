"use client";

import { useState } from "react";
import Link from "next/link";
import { App } from "@/data/apps";
import type { DocPage } from "@/lib/docs";
import { useTranslation } from "@/app/hooks/useTranslation";
import SiteHeader from "./SiteHeader";
import AppIcon from "./AppIcon";
import Markdown from "./Markdown";

interface Props { app: App; page: string; docs: { es: DocPage[]; en: DocPage[] } }

export default function DocsView({ app, page, docs }: Props) {
  const { t, locale } = useTranslation();
  const [filter, setFilter] = useState("");
  const base = `/apps/${app.id}/docs`;

  const list = docs[locale].length ? docs[locale] : docs.es.length ? docs.es : docs.en;
  const pages = list.length ? list : docs.es;
  const inLocale = docs[locale].some((p) => p.slug === page);
  const current = inLocale ? docs[locale].find((p) => p.slug === page)! : docs.es.find((p) => p.slug === page) ?? docs.en.find((p) => p.slug === page)!;
  const idx = pages.findIndex((p) => p.slug === page);
  const prev = pages[idx - 1];
  const next = pages[idx + 1];
  const shown = pages.filter((p) => p.title.toLowerCase().includes(filter.toLowerCase()));

  const nav = (
    <nav aria-label={t.ui.pages} className="space-y-1">
      {shown.map((p) => (
        <Link
          key={p.slug}
          href={`${base}/${p.slug}`}
          aria-current={p.slug === page ? "page" : undefined}
          className={`block rounded-lg px-3 py-1.5 text-sm ${p.slug === page ? "bg-accent-soft font-medium text-accent" : "text-muted hover:text-fg"}`}
        >
          {p.title}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      <SiteHeader />
      <div className="container pb-20">
        <div className="flex items-center gap-2 py-5 text-sm text-muted">
          <Link href="/" className="hover:text-fg">{t.ui.apps}</Link>
          <span aria-hidden>/</span>
          <Link href={`/apps/${app.id}`} className="flex items-center gap-2 hover:text-fg">
            <AppIcon app={app} size={20} />
            {app.name}
          </Link>
        </div>

        <details className="mb-6 rounded-xl border border-line bg-surface lg:hidden">
          <summary className="cursor-pointer px-4 py-3 text-sm font-medium">{current.title} · {t.ui.pages}</summary>
          <div className="border-t border-line p-2">{nav}</div>
        </details>

        <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] xl:grid-cols-[14rem_minmax(0,1fr)_13rem]">
          <aside className="hidden lg:block">
            <div className="sticky top-20 space-y-3">
              <input
                type="search"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder={t.ui.searchDocs}
                aria-label={t.ui.searchDocs}
                className="w-full rounded-lg border border-line bg-surface px-3 py-1.5 text-sm placeholder:text-subtle"
              />
              {nav}
            </div>
          </aside>

          <article className="min-w-0">
            {!inLocale && (
              <p className="mb-6 rounded-lg border border-line bg-surface-2 px-4 py-2 text-sm text-muted">{t.ui.notTranslated}</p>
            )}
            <h1 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">{current.title}</h1>
            <Markdown>{current.body}</Markdown>

            <div className="mt-14 grid grid-cols-2 gap-3 border-t border-line pt-6 text-sm">
              {prev ? (
                <Link href={`${base}/${prev.slug}`} className="rounded-xl border border-line p-4 hover:border-accent">
                  <span className="text-subtle">← {t.ui.prev}</span>
                  <span className="mt-1 block font-medium">{prev.title}</span>
                </Link>
              ) : <span />}
              {next && (
                <Link href={`${base}/${next.slug}`} className="rounded-xl border border-line p-4 text-right hover:border-accent">
                  <span className="text-subtle">{t.ui.next} →</span>
                  <span className="mt-1 block font-medium">{next.title}</span>
                </Link>
              )}
            </div>
          </article>

          {current.toc.length > 0 && (
            <aside className="hidden xl:block">
              <div className="sticky top-20 text-sm">
                <p className="mb-3 font-medium">{t.ui.onThisPage}</p>
                <ul className="space-y-2 border-l border-line">
                  {current.toc.map((h) => (
                    <li key={h.id} style={{ paddingLeft: h.level === 3 ? "1.5rem" : "0.75rem" }}>
                      <a href={`#${h.id}`} className="text-muted hover:text-accent">{h.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </div>
      </div>
    </>
  );
}
