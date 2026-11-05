# Code Review Report: application-hub
Generated: 2026-11-06T00:07:34.454734

I reviewed all source files (18 files, ~2,400 lines). Here are my findings.

---

# Code Review: application-hub

**Scope:** `src/`, `eslint.config.mjs`, `next.config.ts`, `postcss.config.mjs`. Node modules not installed, so lint/typecheck could not be executed — findings are from static reading (corroborated with a script for data/asset consistency).

## 1. CRITICAL issues

None. No XSS vectors (`dangerouslySetInnerHTML` is never used; all content is static strings), no auth/secrets/DB surface, no external data fetching, and external links correctly use `rel="noopener noreferrer"`. The app is a static catalog with no server-side attack surface.

## 2. HIGH issues

**H1. Header displays a hardcoded, wrong app count** — `src/app/components/Header.tsx:63`
```
9 apps &nbsp;·&nbsp; macOS &nbsp;·&nbsp; iOS &nbsp;·&nbsp; Web
```
`src/data/apps.ts` actually contains **14** apps (7 ios, 4 mac, 3 desarrollo). The stat is stale and will never self-update.
**Fix:** `const total = apps.length;` and interpolate, or drop the count from the static string.

**H2. A filter tab for a category that contains zero apps** — `src/app/page.tsx:9-15` + `src/data/apps.ts`
`Category` includes `"juego"`, the filter row renders a "Games" button, and `categoryLabels` maps it — but **no app has `category: "juego"`**. Clicking "Games" shows the empty state with a "Games 0" badge. Either the category is dead or apps are missing.
**Fix:** remove `"juego"` from `Category`/filters/labels, or add the missing app.

**H3. Privacy policy pages have no SEO metadata and render no server HTML** — `src/app/privacy/*/page.tsx` (all 6 files)
Every privacy route is `"use client"` and exports no `metadata`, so all six pages inherit the root title `"ApplicationHub - Mis Aplicaciones"`. Search engines and link previews see an unstyled empty shell (content only exists after hydration). Next.js also disallows exporting route-segment config such as `metadata` from a `"use client"` module.
**Fix:** convert the privacy routes to server components that statically render the `es` text and export `export const metadata = { title: ... }` per route; keep the client provider for the locale toggle.

**H4. Privacy policy contact details are hardcoded to an unrelated domain** — `src/app/components/PrivacyView.tsx:167-176`
The contact block renders `info@saraiba.eu` / `https://saraiba.eu` literally, ignoring the `p.contactEmail` / `p.contactWeb` fields (which misleadingly hold the *labels* "Email"/"Web"). Meanwhile every app in `src/data/apps.ts` links to `github.com/polidisio/*`, and the site is "Polidisio". A privacy policy naming a third party's domain is a real legal/credibility problem, and it is silently untranslatable.
**Fix:** rename the fields to `contactEmailLabel`/`contactWebLabel` and add `contactEmailValue`/`contactWebValue` per translation block, then render the values.

_(Informe completo en `.github/CODE_REVIEW_REPORT.md`.)_
