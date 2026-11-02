# Code Review Report: application-hub
Generated: 2026-11-03T00:08:12.101758

I've read all 15 source files in `src/`. Here's the report.

---

# Code Review: application-hub

**Scope:** 15 source files (~2,280 LOC) — Next.js 16 / React 19 App Router, static data-driven catalog site.
**Overall:** No critical security vulnerabilities. The app has no auth, no user input, no server actions, and no `dangerouslySetInnerHTML`; external links correctly use `rel="noopener noreferrer"`. The issues below are correctness, i18n, and maintainability problems.

---

## 1. CRITICAL issues

**None.** No exploitable vulnerabilities or data-loss bugs found.

---

## 2. HIGH issues

### H1. Header displays a stale, hardcoded app count ("9 apps")
- **File:** `src/app/components/Header.tsx:63`
- **Description:** The status line hardcodes `9 apps`, but `src/data/apps.ts` contains **14** apps. The count is also not translated (stays English in ES locale).
- **Fix:** Import `apps` and render `{apps.length} apps` / `{apps.length} aplicaciones`. Move the whole status string into `translations.ts`.

### H2. "Games" category filter is permanently empty
- **Files:** `src/app/page.tsx:14`, `src/data/apps.ts:1`, `src/data/apps.ts:1055-1060`
- **Description:** `Category` includes `"juego"`, but **no app** uses it (counts are 7 ios / 4 mac / 3 desarrollo). The filter button renders a "0" badge and clicking it shows the "No apps in this category yet" empty state. `categoryLabels.juego` is likewise dead.
- **Fix:** Either remove `"juego"` from the `Category` union, `categoryLabels`, and the `categories` array in `page.tsx`; or add games. Dead enum member + dead UI path.

### H3. Category filter labels and badges are not localized
- **Files:** `src/app/page.tsx:9-15`, `src/app/components/AppCard.tsx:51`
- **Description:** The filter labels `"All"`, `"Dev"`, `"Games"` are hardcoded English and never switch to Spanish. `AppCard` additionally hardcodes `"Dev"` for the `desarrollo` category in *both* locales.
- **Fix:** Move the category label set into `translations.ts` (e.g. `t.categories.all`, `t.categories.desarrollo`) and use `categoryLabels` (already existing in `apps.ts:1055`) consistently instead of the ad-hoc ternary.

### H4. Modal is not keyboard-accessible (no focus management)
- **File:** `src/app/components/AppModal.tsx:52-71`
- **Description:** The modal has no `role="dialog"`, no `aria-modal="true"`, no `aria-labelledby` pointing at the `<h2>`, and the close button has no accessible name (icon-only). Focus is never moved into the modal nor trapped, so Tab navigates behind the overlay, and focus is not restored to the triggering card on close.
- **Fix:** Add `role="dialog" aria-modal="true" aria-labelledby="app-modal-title"`, give the close button `aria-label={t.common.close}` (the string already exists in `translations.ts:13` but is unused), and move focus to the modal container on open / restore it on close.

### H5. Privacy pages render without page-specific metadata
- **Files:** `src/app/privacy/*/page.tsx` (all 6)
- **Description:** Each privacy route is a `"use client"` component, so it **cannot export `metadata`**. Every privacy page therefore inherits the root title `"ApplicationHub - Mis Aplicaciones"` instead of its own — bad for SEO and for browser history/bookmarks.
- **Fix:** Split each route into a server component that exports `metadata` and renders a small client child, e.g. `page.tsx` (server) → `<PrivacyClient />` (client, reads the translation from context).

### H6. `html lang` is hardcoded to `"es"` and never updated
- **File:** `src/app/layout.tsx:29`
- **Description:** `<html lang="es">` is static. When the user switches to EN, the document still declares `lang="es"` — screen readers mispronounce English content, and search engines mis-index it.
- **Fix:** Put the `lang` attribute on a client component that renders the `<html>` element (a common Next.js pattern), driven by `locale`.

---

## 3. MEDIUM issues

### M1. Locale choice is not persisted across navigation
- **Files:** `src/app/hooks/useTranslation.tsx:14-23`
- **Description:** `locale` is derived from `navigator.language` on every mount and discarded on navigation. Clicking "EN" then following the "Privacy Policy" link resets the user back to their browser language.
- **Fix:** Persist to `localStorage` and read it in the mount effect (with the `navigator.language` value as fallback).

### M2. Flash of wrong-language content on every page load
- **File:** `src/app/hooks/useTranslation.tsx:17-23`
- **Description:** `locale` starts as `"es"` for both server and client render, then flips in a post-mount effect. English-speaking visitors see Spanish content flash and re-render.
- **Fix:** Read `localStorage`/`navigator.language` in a lazy `useState` initializer and suppress SSR for this subtree, or render the locale-dependent parts only after mount.

### M3. `document.body.style.overflow` clobbers any pre-existing value
- **File:** `src/app/components/AppModal.tsx:37,41`
- **Description:** The cleanup resets overflow to `""` rather than restoring the previous value.
- **Fix:** Capture `const previous = document.body.style.overflow` before setting it, and restore that in the cleanup.

### M4. Modal effect re-subscribes on every parent render
- **File:** `src/app/components/AppModal.tsx:26-43`, `src/app/page.tsx:93`
- **Description:** `handleClose` depends on `onClose`, and `onClose` is an inline arrow in `page.tsx:93`, so its identity changes on every `Home` render. The effect therefore tears down and re-registers the keydown listener, the RAF, and the body-overflow lock on each parent render.
- **Fix:** Wrap `onClose` in `useCallback` in `page.tsx` (or drop `onClose` from `handleClose`'s deps by using a ref).

### M5. `categoryBadgeClass` is duplicated across two components
- **Files:** `src/app/components/AppCard.tsx:7-12`, `src/app/components/AppModal.tsx:9-14`
- **Description:** Identical copy-pasted map. It also maps `juego → "badge badge-mac"`, but no `.badge-juego` CSS rule exists in `globals.css` (only `badge-ios`, `badge-mac`, `badge-desarrollo`).
- **Fix:** Extract to a shared module (e.g. `src/app/components/categoryStyles.ts`) and remove or define the `juego` entry.

### M6. Badge text is inconsistent between card and modal
- **Files:** `src/app/components/AppCard.tsx:51` vs `src/app/components/AppModal.tsx:99`
- **Description:** The card renders `app.category.toUpperCase()` (e.g. `DESARROLLO`, `JUEGO`); the modal renders `categoryLabels[app.category]` (e.g. `Desarrollo`, `Juego`). The same app shows two different labels depending on the view.
- **Fix:** Use `categoryLabels` in both (or a locale-aware label map for both).

### M7. `nameEn` is declared but never used
- **File:** `src/data/apps.ts:6`
- **Description:** `nameEn?: string` exists on the `App` interface but no component reads it — dead field, or an unfinished bilingual feature.
- **Fix:** Remove it, or use it in `AppCard`/`AppModal` the way `description`/`descriptionEn` are used.

### M8. Unused translation keys
- **File:** `src/app/i18n/translations.ts:12,225`
- **Description:** `common.viewMore` and `common.close` are never referenced anywhere in `src/` (`close` would be the natural fix for H4).
- **Fix:** Use `close` for the modal's accessible label; delete `viewMore` or wire it up.

### M9. `en` translations are not structurally enforced against `es`
- **File:** `src/app/i18n/translations.ts:1,430-431`
- **Description:** `TranslationKeys = typeof translations.es` types the context as the Spanish shape, but `translations.en` is never checked against it. A key added to `es` and forgotten in `en` would only fail at the union-type level in `useTranslation`, not as a clear per-locale error.
- **Fix:** Type the object as `{ es: TranslationKeys; en: TranslationKeys }` with `TranslationKeys` defined first, so a missing key is a direct compile error.

### M10. `MyBarTrack` and `SyncTrackers` privacy pages are identical and app-agnostic
- **Files:** `src/app/privacy/mybartrack/page.tsx:8`, `src/app/privacy/synctracers/page.tsx:8`
- **Description:** Both render `t.privacyAnalytics`, whose `title` is just `"Política de Privacidad"` with no app name, and whose body never mentions MyBarTrack or SyncTrackers. Given the site markets a per-app privacy stance, these read as boilerplate.
- **Fix:** Give each app its own translation block with a distinct title and app-specific disclosure, following the `privacyStreamAura` / `privacyNodusCli` pattern.

### M11. `src/data/apps.ts` and `src/app/i18n/translations.ts` are marked `"use client"`
- **Files:** `src/data/apps.ts:1`, `src/app/i18n/translations.ts:1`
- **Description:** Both are pure data modules with no hooks or handlers. The directive is unnecessary and pushes the entire 1,060-line dataset (~50 KB of text) into the client bundle for every page that touches it, with no benefit.
- **Fix:** Remove `"use client"` from both. They remain importable by client components without the directive.

---

## 4. MINOR suggestions

### N1. Filter counts recompute filters on every render
- **File:** `src/app/page.tsx:51` — `apps.filter((a) => a.category === cat.id).length` runs inside the JSX map, once per category, per render.
- **Fix:** Precompute a `counts` record with `useMemo` alongside `filteredApps`.

### N2. `setTimeout(onClose, 200)` is never cleared on unmount
- **File:** `src/app/components/AppModal.tsx:26-29`
- **Description:** If the component unmounts within the 200 ms window (e.g. navigation), the timer still fires `onClose` on a stale closure.
- **Fix:** Store the timeout id and clear it in the effect cleanup.

### N3. Backdrop click handler on a plain `<div>`
- **File:** `src/app/components/AppModal.tsx:53-56`
- **Description:** `onClick` on a non-interactive `div` triggers `jsx-a11y/click-events-have-key-events` and `no-static-element-interactions` in `eslint-config-next`. The Escape handler partly covers it, but the linter will still flag it.
- **Fix:** Add `role="presentation"` (or `role="dialog"` on the inner panel and move the handler to a labelled backdrop element).

### N4. `howToUse` text contains a non-standard CJK codepoint
- **File:** `src/data/apps.ts:140,164` — `翻转` uses U+2F8F4 (CJK Compatibility Ideograph) instead of the standard `翻` (U+7FF0).
- **Fix:** Replace with the standard characters `翻转`.

### N5. Icon/heading markup inside a `<button>`
- **File:** `src/app/components/AppCard.tsx:24-71`
- **Description:** The card is a `<button>` containing an `<h3>` heading and a decorative arrow SVG without `aria-hidden="true"`. The heading inside a button is discouraged for document outline semantics.
- **Fix:** Make the card a `<div>`/`article>` with the heading outside, and use a real `<button>` or link overlay for the click target; mark the arrow SVG `aria-hidden`.

### N6. Images with spaces and non-ASCII characters in filenames
- **Files:** `src/data/apps.ts:295-298` (drinktrack), `src/data/apps.ts:1019-1023` (qiresizer)
- **Description:** Paths like `/images/qiresizer/Captura de pantalla 2026-05-20 a las 13.21.18.png` work today because the default loader URL-encodes the `src`, but they are fragile across CDN/proxy configurations and awkward to reference from code.
- **Fix:** Rename the assets to kebab-case ASCII (`captura-2026-05-20-13-21-18.png`) and update the data file.

### N7. `categoryLabels` is Spanish-only but used for the EN locale
- **File:** `src/data/apps.ts:1055-1060`
- **Description:** In EN, the modal badge shows `Desarrollo` (Spanish) and `Juego`.
- **Fix:** Move the labels into `translations.ts` per locale, or add `categoryLabelsEn`.

### N8. `PrivacyView` hardcodes the contact email and website
- **File:** `src/app/components/PrivacyView.tsx:167,173`
- **Description:** `info@saraiba.eu` and `https://saraiba.eu` are inline in the component while `contactEmail`/`contactWeb` in the `PrivacyText` interface are only *labels*. A different address per locale/app isn't possible.
- **Fix:** Add `contactEmailValue`/`contactWebValue` to the interface and pass the values in the translations.

### N9. No `not-found.tsx` or `error.tsx` boundary
- **Files:** `src/app/` (root)
- **Description:** An unknown `/privacy/<slug>` currently hits Next's default error page. With a fixed set of routes this is low risk, but a `not-found.tsx` would be cheap insurance.
- **Fix:** Add a minimal `src/app/not-found.tsx`.

### N10. `next.config.ts` is an empty stub
- **File:** `next.config.ts:3-5`
- **Description:** The `/* config options here */` placeholder remains. No `images` config, no security headers, no `poweredByHeader: false`.
- **Fix:** Add at minimum `poweredByHeader: false` and a basic `headers()` block with `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options`.

---

## Summary table

| Severity | Count |
|---|---|
| CRITICAL | 0 |
| HIGH | 6 |
| MEDIUM | 11 |
| MINOR | 10 |

**Top three to fix first:** H1 (wrong app count in the header), H2 (dead "Games" category), and the i18n group H3 + M1 + M2 (the ES/EN switching is visibly broken across navigation and hardcoded in the filter UI).