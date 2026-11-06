# Code Review Report: application-hub
Generated: 2026-11-07T00:38:41.257338

# Code Review: application-hub

Reviewed: `src/app/page.tsx`, `src/app/layout.tsx`, `src/data/apps.ts`, `src/app/components/Header.tsx`, `src/app/components/AppCard.tsx`, `src/app/components/AppModal.tsx`, `src/app/components/PrivacyView.tsx`, `src/app/hooks/useTranslation.tsx`, `src/app/i18n/translations.ts`, `src/app/privacy/page.tsx`, `src/app/privacy/noduscli/page.tsx`

> Note: two requested paths do not exist as given — the app catalog lives at `src/data/apps.ts` (not `src/app/data/apps.ts`), and `src/app/i18n/translations.ts` does exist as specified. All files were read in full.

## CRITICAL (must fix)

None found.

No injection risk was identified: all interpolated values are static, developer-authored literals rendered through JSX text nodes; there is no `dangerouslySetInnerHTML`, no `eval`, and no user/network input anywhere in the reviewed surface. External links correctly use `rel="noopener noreferrer"` (`AppModal.tsx:202`, `AppModal.tsx:216`).

## HIGH (should fix)

**1. `src/app/components/AppModal.tsx:31-43` — modal effect tears down and re-registers on every parent render**

`useEffect` depends on `handleClose`, which depends on `onClose`. In `src/app/page.tsx:93` `onClose` is an inline arrow (`onClose={() => setSelectedApp(null)}`), so it is a new function on every render of `Home`. Any re-render of the parent (locale switch, filter change, parent state update) therefore:
- runs the cleanup, which does `document.body.style.overflow = ""` (line 41) and immediately re-sets it to `"hidden"` (line 37) — a visible scroll/overflow flicker;
- cancels the `requestAnimationFrame` (line 39) that was scheduled to trigger the open animation at line 32, then re-schedules it — the entrance animation can replay or stall mid-way;
- removes and re-adds the `keydown` listener each cycle.

Fix: keep the close handler stable. Either wrap the parent's handler in `useCallback` in `page.tsx`, and/or drop `onClose` from the effect's dependency list by storing it in a ref:

```tsx
const onCloseRef = useRef(onClose);
onCloseRef.current = onClose;
const handleClose = useCallback(() => {
  setIsVisible(false);
  setTimeout(() => onCloseRef.current(), 200);
}, []);
```

**2. `src/app/components/AppModal.tsx:52-62` — dialog is not announced and focus is never managed**

The overlay is a plain `div` with no `role="dialog"`, no `aria-modal`, and no `aria-labelledby`/`aria-label`. Consequences:
- Screen readers get no "dialog" announcement and no accessible name (the visible `<h2>` at line 94 is not associated with it).
- Focus is never moved into the dialog on open, never trapped while open, and never restored to the triggering `AppCard` button on close. Keyboard users can Tab straight out of the modal into the page behind it, which is still visible in the DOM.
- The close button (lines 64-71) has no accessible name — it contains only an SVG with no `<title>` and no `aria-label`.

Fix: add `role="dialog" aria-modal="true" aria-labelledby="modal-title"` plus `id="modal-title"` on the `<h2>` (line 94); give the close button `aria-label={t.common.close}` (the string already exists in `translations.ts:13`/`translations.ts:226` but is never used); move focus to the dialog on open and restore it to the previously focused element on close.

**3. `src/app/layout.tsx:29` + `src/app/hooks/useTranslation.tsx:15-23` — document language is wrong for English users**

`<html lang="es">` is hardcoded, but the app switches to English at runtime. Screen readers will pronounce the entire English UI with Spanish phonetics, and the browser/assistive-technology translation prompt and hyphenation rules will be wrong. This affects every page, including both privacy routes.

Fix: make the root element's `lang` follow the locale. Since `layout.tsx` is a server component and the locale lives in client state, the standard fix is to render a small client component that sets `document.documentElement.lang` from the context, or to have the provider set it in its effect:

```tsx
useEffect(() => {
  document.documentElement.lang = locale;
}, [locale]);
```

**4. `src/app/hooks/useTranslation.tsx:17-23` — locale is applied only after mount, causing a visible content flash and layout shift**

The provider initialises `locale` to `"es"` (line 15) on both server and client, then flips it in a `useEffect`. An English-browser visitor receives fully rendered Spanish HTML first, then the page swaps to English after hydration. On text-heavy pages (the modal, the privacy policies) this is a visible flash plus a layout shift, and it also means the server-rendered HTML and the first client render disagree with the user's actual language for an entire frame.

The `eslint-disable-next-line react-hooks/set-state-in-effect` on line 21 acknowledges the pattern rather than solving it.

Fix: detect the locale before first paint. Either read `navigator.language` in a lazy `useState` initialiser guarded by `typeof window !== "undefined"` and render the same fallback markup on the server, or store the preference in a cookie and read it in `layout.tsx`/`page.tsx` so the server can render the correct language directly.

**5. `src/data/apps.ts:140` and `src/data/apps.ts:164` — Chinese characters leaked into the Spanish copy**

```
howItWorks: "...Inicia una sesión de estudio y翻转 la tarjeta para ver la respuesta"
howToUse:   "...Toca la tarjeta para翻转 y ver la respuesta"
```

`翻转` ("flip") appears in two user-facing Spanish strings for the ThinkDeck Study app. This renders as garbled text in the modal's "Cómo funciona" and "Manual de Usuario" sections in the default (Spanish) locale.

Fix: replace with `voltea` / `girar` in both occurrences.

**6. `src/app/components/Header.tsx:63` — hardcoded app count is wrong**

`9 apps &nbsp;·&nbsp; macOS &nbsp;·&nbsp; iOS &nbsp;·&nbsp; Web` is a literal, but `src/data/apps.ts` contains 14 apps. The header under-reports the catalogue on every page load.

Fix: compute it, e.g. `const { t, locale, setLocale } = useTranslation(); ... {apps.length} apps`, or at minimum update the literal. Computing it also keeps the two from drifting again.

## MEDIUM (consider fixing)

**1. `src/app/components/AppModal.tsx:50, 142-177` — empty tab panel when an app has screenshots but no manual**

`hasTabs` is `howToUse || (screenshots && screenshots.length > 0)`, but `activeTab` is initialised to `"manual"` (line 23). When `howToUse` is absent and screenshots exist, the "Manual" button is not rendered (line 145) yet `activeTab === "manual"`, so lines 171-177 render nothing: the user sees an empty content area until they click "Screenshots". For an app with only screenshots and no manual (e.g. `synctracers` has a manual but `streamaura`/`noduscli` rely on `howToUse`; any future app without `howToUse` hits this).

Fix: initialise the tab from what is available, e.g. `useState(() => (app.howToUse ? "manual" : "screenshots"))`, or guard the panel with `activeTab === "manual" && howToUse` and fall back to screenshots.

**2. `src/app/hooks/useTranslation.tsx:28` — context value is not memoized**

`value={{ locale, setLocale, t }}` creates a new object on every render of the provider, so every consumer of `useTranslation` re-renders whenever the provider re-renders, even when nothing it consumes changed. `useTranslation` is used in `Header.tsx:7`, `AppCard.tsx:20`, `AppModal.tsx:24`, `privacy/page.tsx:7`, and `privacy/noduscli/page.tsx:7` — the latter two are route-level, so an unnecessary provider re-render re-renders whole privacy pages.

Fix: `const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);`

**3. `src/app/hooks/useTranslation.tsx:15-23` — the user's explicit locale choice is not persisted**

`setLocale` only updates React state. Any navigation that remounts the provider, or a full page reload, discards the choice and re-runs browser detection. Users on an English browser who explicitly select Spanish lose the setting on every reload.

Fix: persist to `localStorage` and read it in the provider's initializer, taking precedence over browser detection.

**4. `src/app/components/AppModal.tsx:26-29` — the close timeout is not cleared on unmount**

`setTimeout(onClose, 200)` is never stored or cleared. If the component unmounts within that window (e.g. the user selects a different app, or the route changes), `onClose` fires against a stale closure after unmount, calling the parent's `setSelectedApp` for an app that is no longer displayed.

Fix: keep the timer id in a ref and clear it in the effect's cleanup.

**5. `src/app/i18n/translations.ts:17-51` / `230-264` vs `52-93` / `265-306` — contradictory privacy claims**

The generic policy (`privacy`, line 24 and237) states "Nuestras aplicaciones NO recopilan ningún dato personal" / "We do not use analytics", while `privacyAnalytics` (line 59, 272) documents PostHog analytics collection. Both are reachable content in the same translation bundle, and the generic policy is the one served at `/privacy`, the link published in the site footer (`src/app/page.tsx:85`). These are legally inconsistent statements about the same product family.

Fix: reconcile the two policies so `/privacy` reflects the apps that actually use PostHog, or scope the no-analytics statement to the specific apps that do not collect data.

**6. `src/app/i18n/translations.ts:52-93, 265-306` — `privacyAnalytics` is defined but never rendered**

No reviewed page references `t.privacyAnalytics`; `privacy/page.tsx:8` renders `t.privacy`. This is dead content in the bundle (and reinforces issue5 — a privacy policy exists for analytics that is unreachable).

Fix: route it from a page (e.g. `/privacy/analytics`) or remove it.

**7. `src/app/components/AppModal.tsx:5` — `next/image` used with `fill` but no `sizes` prop**

`Image` with `fill` at lines 183-188 and 81-86 lacks `sizes`. The browser cannot infer the rendered size, so Next.js will generate an overly large `srcset` and the browser may download a much higher-resolution asset than the ~200px-wide slot requires. This applies to every screenshot in every modal.

Fix: add an appropriate `sizes` attribute, e.g. `sizes="(max-width: 768px) 45vw, 300px"`.

**8. `src/app/components/Header.tsx:15-34` and `src/app/page.tsx:39-54` — toggle buttons do not expose their state**

Neither the ES/EN toggle nor the category filter buttons expose a pressed/selected state to assistive technology. The active state is conveyed purely by CSS classes (`bg-white/10 text-white`), so a screen-reader user cannot tell which category is active or which locale is selected.

Fix: add `aria-pressed={locale === "es"}` to the locale buttons and `aria-pressed={activeCategory === cat.id}` to the category buttons; wrap the category list in `role="group"` with an `aria-label`.

**9. `src/app/page.tsx:9-15` — the "Games" category contains no apps**

`{ id: "juego", label: "Games" }` maps to `Category` value `"juego"`, but no entry in `src/data/apps.ts` uses that category. The button therefore always renders with a `0` count (line 51) and always leads to the empty state at lines 62-65.

Fix: remove the category until an app uses it, or add a games app.

## MINOR (nice to have)

**1. `src/app/page.tsx:51` — category counts re-filter the full array on every render**

`apps.filter((a) => a.category === cat.id).length` is evaluated inside the render for each of the four categories, on every render of `Home` — an O(categories × apps) scan plus four array allocations per render.

Fix: compute a count map once with `useMemo` alongside `filteredApps`.

**2. `src/app/page.tsx:72` and `93` — inline arrow handlers allocate new functions each render**

`onClick={() => setSelectedApp(app)}` and `onClose={() => setSelectedApp(null)}` create new closures on every render, defeating `React.memo` on child components and triggering the effect churn described in HIGH issue 1.

Fix: `useCallback` on both.

**3. `src/app/components/AppCard.tsx:19` — `AppCard` is not memoized**

Every locale change re-renders all14 cards even though only the description and CTA label changed.

Fix: wrap in `React.memo` (the `app` prop is a stable reference from the static `apps` array; move the `onClick` closure behind `useCallback` in `page.tsx` so memo actually holds).

**4. `src/app/components/AppModal.tsx:116, 181` — index used as React key**

`key={index}` on the features and screenshots lists. If the `apps` data is reordered or an entry is inserted, React will reuse the wrong DOM nodes.

Fix: use a stable identifier — for features, the feature string itself; for screenshots, the image path.

**5. `src/app/components/PrivacyView.tsx:173` — external link opens in the same tab without `rel`**

`https://saraiba.eu` is a plain anchor with no `target`/`rel`. The `mailto:` link at line 167 is fine. Consider `target="_blank" rel="noopener noreferrer"` for consistency with `AppModal.tsx`.

**6. `src/app/components/PrivacyView.tsx:6-13` — the `PrivacyText` interface misnames two of its fields**

`collectedList` is the list of data that *is* collected anonymously, while `dataCollectedList` is the list of data that is *not* collected (see `translations.ts:60-65` vs `67-72`). The names are near-inverses of their meaning, which is a persistent source of mistakes when adding new policies.

Fix: rename to `anonymousCollectedList` and `notCollectedList`.

**7. `src/app/components/PrivacyView.tsx:167-168` — contact email and website are hardcoded in the component**

The `PrivacyText` interface carries `contactEmail` and `contactWeb` as *labels* ("Email", "Web") but the actual addresses are literals in the JSX. Every policy therefore points at the same address regardless of the app, and adding a per-app contact requires editing the component.

Fix: add `contactEmailValue` / `contactWebValue` to the interface and render those.

**8. `src/app/privacy/page.tsx` and `src/app/privacy/noduscli/page.tsx` — no route-specific metadata**

Both pages export only a default component. The layout's title template (`layout.tsx:12-15`) therefore yields "ApplicationHub - Mis Aplicaciones" for the privacy pages rather than "Política de Privacidad · NodusCli | ApplicationHub". This affects the browser tab, the SERP title, and social previews.

Fix: export a `metadata` object with a `title` from each page.

**9. `src/data/apps.ts:6` — `nameEn` is declared but never used**

The `App` interface declares `nameEn?: string`, but no app in the file sets it and no component reads it (`AppCard.tsx:56` and `AppModal.tsx:95` both render `app.name` unconditionally).

Fix: remove the field, or implement the localized name it was intended for.

**10. `src/data/apps.ts:268` — the English manual uses the wrong product name**

`howToUseEn` for `drinktrack` opens with "What is DrinkTrack?" while the app's `name` (line 221) is "MyBarTrack". The Spanish version (line 243) correctly says "MyBarTrack".

Fix: change `DrinkTrack` to `MyBarTrack` in the English string.

**11. `src/data/apps.ts:1029-1030` — a raw URL is embedded in the description text**

The `exiftool-cli` description duplicates the repository URL that is already exposed via `website` (line 1051), cluttering the card and the modal.

Fix: remove the trailing URL from both `description` and `descriptionEn`.

**12. `src/app/components/AppModal.tsx:181-192` — screenshot images have no descriptive alt text**

`alt={`Screenshot ${index + 1}`}` is a placeholder rather than a description, and the images are content-bearing (they show app UI) yet are announced only as "Screenshot 1", "Screenshot 2".

Fix: add a `screenshotAlt` field per screenshot, or derive a meaningful label from the app name and index (e.g. `${app.name} — screen ${index + 1}`).

**13. `src/app/hooks/useTranslation.tsx:18` — dead fallback and coarse locale matching**

`navigator.language || "en"` is unreachable as a fallback (`navigator.language` is always a non-empty string in browsers). More importantly, `browserLang.startsWith("es")` maps only `es*` to Spanish; `ca`, `gl`, `eu`, `ast` and `pt` all fall through to English.

Fix: drop the dead fallback; broaden the match to `es|ca|gl|eu|ast` if those locales should read Spanish.

**14. `src/app/layout.tsx:16` — page description is Spanish-only**

`description: "Portfolio de mis aplicaciones iOS, Mac, juegos y desarrollos"` is static, while the UI is bilingual. The `title.default` likewise hardcodes "Mis Aplicaciones".

Fix: this requires either static per-locale metadata or an `alternates`/dynamic setup; at minimum consider keeping the metadata neutral so it is not wrong in one of the two locales.

**15. `src/app/page.tsx:85` — internal link uses a raw anchor**

`<a href="/privacy">` triggers a full page reload; the project already uses `next/link` elsewhere (`AppModal.tsx:199`, `PrivacyView.tsx:30`).

Fix: `import Link from "next/link"` and use `<Link href="/privacy">`.