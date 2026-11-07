# Code Review Report: application-hub
Generated: 2026-11-08

# Code Review: application-hub

**Scope:** `src/app/page.tsx`, `layout.tsx`, `globals.css`, `hooks/`, `i18n/`, `privacy/**`, `components/**`, `src/data/apps.ts`
**Method:** full read of all listed files + `next build` + inspection of emitted CSS/HTML to confirm runtime behaviour.

> **Nota sobre la sección CRITICAL:** los tres hallazgos marcados CRITICAL de este informe fueron **verificados uno a uno contra el código concreto** (archivo y línea) antes de publicar este PR, tal y como exige el procedimiento de revisión nocturna. Cada referencia de línea de esta sección se comprobó contra el árbol de `main` (`672b9e8`). No hay hallazgos CRITICAL sin verificar en este informe.

---

## 1. CRITICAL (must fix)

### C1. Two different privacy policies make contradictory factual claims about analytics
**Files:** `src/app/i18n/translations.ts:17-51` (generic `privacy`) vs `src/app/i18n/translations.ts:52-93` (`privacyAnalytics`)

The generic policy states *"No usamos analytics"* / *"We do not use analytics"*, while `privacyAnalytics` states the opposite: *"utilizamos PostHog (posthog.com), un servicio de analytics"*. Both are published, in English and Spanish, from the same site.

**Verificado:** ES genérico, `src/app/i18n/translations.ts:28` → `"No usamos analytics"`. ES analytics, `src/app/i18n/translations.ts:59` → `"utilizamos PostHog (posthog.com), un servicio de analytics"`. EN genérico, `src/app/i18n/translations.ts:241` → `"We do not use analytics"`. EN analytics, `src/app/i18n/translations.ts:272` → `"we use PostHog"`. Ambas rutas (`/privacy` y `/privacy/mybartrack`|`/privacy/synctracers`) renderizan estos bloques a la vez.

This is a legal/compliance exposure, not a cosmetic one: a user reading `/privacy` is told no analytics exist, while `/privacy/mybartrack` and `/privacy/synctracers` say analytics are in use.

**Fix:** delete the generic `privacy` policy's analytics claims and make it a true umbrella policy (list the analytics-dependent apps, or link to the per-app policies). If the intent is "the generic policy applies only to apps without analytics", state that explicitly — e.g. *"Las apps que usan analítica tienen su propia política."*

---

### C2. The SyncTrackers privacy policy denies collecting health data while the app collects exactly that
**Files:** `src/app/privacy/synctracers/page.tsx:8` → `t.privacyAnalytics`; `src/app/i18n/translations.ts:69, 282`; `src/data/apps.ts:397, 410`

The policy lists under "NO recopilamos": *"Datos de salud reales"* / *"Actual health data"*. But SyncTrackers' own `howItWorks` says: *"Abre la app y concede permisos de HealthKit / La app lee automáticamente tus workouts de Apple Health"* (`apps.ts:410`), and its features list *"Lee workouts de Apple Health / HealthKit"* (`apps.ts:397`).

**Verificado:** `src/app/i18n/translations.ts:69` → `"Datos de salud reales"`, dentro del bloque `notCollectedTitle: "NO recopilamos:"` (línea 67) → `dataCollectedList` (línea 68). EN equivalente en `translations.ts:282` → `"Actual health data"`. `src/app/privacy/synctracers/page.tsx:8` → `<PrivacyView p={t.privacyAnalytics} />`. `src/data/apps.ts:397` → `"Lee workouts de Apple Health / HealthKit"`. `src/data/apps.ts:410` → `"Abre la app y concede permisos de HealthKit\n2. La app lee automáticamente tus workouts de Apple Health"`.

Either the workouts must be added to the "we DO collect" list, or the wording must be narrowed to a legally meaningful distinction (e.g. no health *records*/medical data, only workout samples). As written the policy is factually false about the app it governs.

**Fix:** write a dedicated `privacySyncTrackers` block listing HealthKit workout data as collected, and keep the "no medical/health records" claim only if that distinction is actually true in the app.

---

### C3. `MyBarTrack` privacy page shows a generic, incorrectly-attributed policy
**Files:** `src/app/privacy/mybartrack/page.tsx:8`, `src/app/privacy/synctracers/page.tsx:8` (both → `t.privacyAnalytics`), `src/app/i18n/translations.ts:53`

Both routes render the *same* `privacyAnalytics` object, whose `title` is just *"Política de Privacidad"* — no app name. So `/privacy/mybartrack` shows a page titled "Privacy Policy" with no indication it is MyBarTrack's, and it tells the user PostHog analytics are used — while `src/data/apps.ts:229` advertises MyBarTrack's feature as *"Sin recopilación de datos personales"* / *"No personal data collection"* (`apps.ts:237`).

**Verificado:** `src/app/privacy/mybartrack/page.tsx:8` → `<PrivacyView p={t.privacyAnalytics} />` (idéntico a `synctracers/page.tsx:8`). `src/app/i18n/translations.ts:53` → `title: "Política de Privacidad"` (sin nombre de app). `src/app/i18n/translations.ts:59` → PostHog. `src/data/apps.ts:229` → `"Sin recopilación de datos personales"`; `src/data/apps.ts:237` → `"No personal data collection"`.

**Fix:** create per-app translation blocks (`privacyMyBarTrack`, `privacySyncTrackers`) with app-specific titles and accurate collection lists, matching the pattern already used for TrackHobbies / StreamAura / NodusCli.

---

## 2. HIGH (should fix)

### H1. Hardcoded app count contradicts the data file
**File:** `src/app/components/Header.tsx:63`

```
9 apps &nbsp;·&nbsp; macOS &nbsp;·&nbsp; iOS &nbsp;·&nbsp; Web
```

`src/data/apps.ts` contains **14** apps (7 `ios`, 4 `mac`, 3 `desarrollo`). The literal `9` is stale and will silently rot on the next app addition.

**Verificado:** `src/app/components/Header.tsx:63` → `9 apps &nbsp;·&nbsp; macOS &nbsp;·&nbsp; iOS &nbsp;·&nbsp; Web`. Recuento en `src/data/apps.ts`: 14 entradas `id:` (líneas 27, 114, 220, 307, 340, 365, 392, 471, 559, 645, 739, 837, 926, 1027); `category` → 7 `ios`, 4 `mac`, 3 `desarrollo`.

**Fix:** `{apps.length} apps` importing `apps` from `@/data/apps`. Also drop `"Web"` — there is no web category in the data (`daily-quotes` is a web page but is categorised `desarrollo`).

---

### H2. Chinese characters embedded in Spanish app copy
**File:** `src/data/apps.ts:140` and `src/data/apps.ts:164`

```
"3. Inicia una sesión de estudio y翻转 la tarjeta para ver la respuesta"
"- Toca la tarjeta para翻转 y ver la respuesta"
```

`翻转` (Chinese for "flip") is user-visible inside the ThinkDeck Study manual and how-it-works text, in both the ES and EN paths (the EN path at line 141 is clean, so only the ES variants are affected).

**Verificado:** `src/data/apps.ts:140` → `"3. Inicia una sesión de estudio y翻转 la tarjeta para ver la respuesta"`; `src/data/apps.ts:164` → `"- Toca la tarjeta para翻转 y ver la respuesta"`. La variante EN (`apps.ts:141`, `apps.ts:165`) está limpia.

**Fix:** replace with `y voltea` / `voltea`.

---

### H3. The Inter font is downloaded but never applied
**Files:** `src/app/layout.tsx:6-9, 30`; `src/app/globals.css:24, 38-45`

`layout.tsx` loads Inter via `next/font/google` and applies only `inter.variable` (which sets `--font-inter`) plus `font-sans`. Tailwind v4's `font-sans` maps to the built-in `--font-sans` (`ui-sans-serif, system-ui, …`), and `globals.css` `body { font-family: var(--font-body) }` is overridden by the `.font-sans` class (class beats element selector). Verified against the built CSS: **no `.font-inter` rule is emitted** and no element applies the variable.

Net effect: a webfont is fetched, hashed and preloaded on every page load while the site renders in the system sans stack. This is a pure performance and bundle cost.

**Fix:** either drop the `Inter` import entirely and rely on `--font-body`, or use it properly: `className={inter.className}` (or `${inter.variable} font-inter`) and set `--font-body: var(--font-inter), …`.

---

### H4. `<html lang>` is hardcoded to `es` and never follows the locale
**Files:** `src/app/layout.tsx:29`; `src/app/hooks/useTranslation.tsx:15-23`

`<html lang="es">` is static, but the app is fully bilingual with a client-side locale switch (`Header.tsx:16,26`). When the user picks EN, the document language stays `es`. Screen readers and search engines will mis-assess the content of every EN page.

**Verificado:** `src/app/layout.tsx:29` → `<html lang="es">`. `src/app/hooks/useTranslation.tsx:15` → `const [locale, setLocale] = useState<Locale>("es");` con el cambio hecho en un `useEffect` (líneas 17-23).

**Fix:** drive `lang` from the same locale state. Because the provider is client-side, the cleanest fix is to lift the locale into a cookie/localStorage read on the server and set `<html lang={locale}>` server-side — that also fixes H5 (below).

---

### H5. English users see a Spanish flash before the locale is detected
**File:** `src/app/hooks/useTranslation.tsx:15-23`

The provider initialises `locale` to `"es"` and only switches to the browser language inside a `useEffect` after hydration. An English visitor gets a full render of Spanish content, then a re-render in English. Every page also renders `lang="es"` during that window (H4).

**Fix:** read the persisted/browser locale during initialisation (server-side via cookie, or `useState` lazy initialiser guarded for the server) so the first paint is already correct, and remove the `setState`-in-effect pattern (the `eslint-disable react-hooks/set-state-in-effect` on line 21 is a symptom of this).

---

### H6. Landscape macOS screenshots are force-cropped into portrait frames
**File:** `src/app/components/AppModal.tsx:182`

```jsx
<div className="relative aspect-[9/19.5] rounded-2xl overflow-hidden bg-white/5 border border-white/8">
  <Image src={screenshot} fill className="object-cover" />
```

The 9:19.5 portrait frame suits iPhone screenshots, but FilesSizer (`apps.ts:829`), LLMBox (`apps.ts:919`) and QIResizer (`apps.ts:1018`) are macOS apps whose screenshots are desktop landscape. `object-cover` will crop them to a narrow vertical slice, cutting off most of each image.

**Fix:** store per-app screenshot dimensions (or an orientation flag) in `apps.ts` and use `aspect-auto`/`h-auto` with `object-contain` for landscape captures, e.g. add `screenshotAspect?: "9/19.5" | "16/10"`.

---

### H7. The generic policy renders "we do NOT collect X" items as if they were collected
**Files:** `src/app/components/PrivacyView.tsx:98-109`; `src/app/i18n/translations.ts:25-31, 238-244`

`PrivacyView` always renders `p.dataCollectedList` under a red **✕** icon. In the generic `privacy` block that list contains *"No recopilamos cookies"* / *"We do not use cookies"* — so the page renders, under the heading "Datos que recopilamos", a list of things that are *not* collected, each with a red cross.

**Verificado:** `src/app/components/PrivacyView.tsx:95` → `{p.notCollectedTitle && (...)}` y `:98-109` → `<ul>` con `p.dataCollectedList.map(...)` y un icono SVG de "X" (ruta `M18 6 6 18` / `m6 6 12 12`) en rojo (`text-red-400`). El bloque genérico `translations.ts:25-31` usa `dataCollectedList` con entradas negativas ("No recopilamos…") mientras `privacyAnalytics` usa `collectedList` (línea 60) para lo positivo.

**Fix:** split the generic policy's list into a `notCollectedTitle` + a genuine negative list, or reuse the `collectedList`/`notCollectedTitle` structure the other policies already use.

---

## 3. MEDIUM (consider fixing)

### M1. Category labels and filter bar are hardcoded English and duplicated
**Files:** `src/app/page.tsx:9-15`; `src/app/components/AppModal.tsx:99`; `src/app/components/AppCard.tsx:51`; `src/data/apps.ts:1055-1060`

Three independent sources of category naming:
- `page.tsx` filter bar: `"All"`, `"iOS"`, `"Mac"`, `"Dev"`, `"Games"` — English only, not translated.
- `AppCard.tsx:51`: `app.category === "desarrollo" ? "Dev" : app.category.toUpperCase()` → renders `"JUEGO"`, `"IOS"`, `"MAC"`, `"DEV"`.
- `AppModal.tsx:99`: `categoryLabels[app.category]` → `"iOS"`, `"Mac"`, `"Juego"`, `"Desarrollo"` — Spanish, in both locales.

The same app shows "DEV" on the card and "Desarrollo" in the modal, in English mode. The `categoryLabels` export in `apps.ts` is Spanish-only and cannot be localised.

**Fix:** move category labels into `i18n/translations.ts` under a `categories` key, delete `categoryLabels` from `apps.ts`, and use one source for both the filter bar and the badges.

---

### M2. The "Games" filter is always empty
**Files:** `src/app/page.tsx:13`; `src/data/apps.ts:1`

`Category` includes `"juego"` and the filter bar exposes a "Games" button, but **no app** has `category: "juego"` (all 14 are `ios`/`mac`/`desarrollo`). The button always renders a `0` badge and always leads to the empty state.

**Verificado:** `grep -c 'category: "juego"' src/data/apps.ts` → **0**; reparto real 7 `ios` / 4 `mac` / 3 `desarrollo`.

**Fix:** remove the `juego` category from `Category`, the filter bar, and `categoryLabels` (and the `juego` entry in `categoryBadgeClass` in both components), or add a game app.

---

### M3. Untranslated user-facing strings in `page.tsx`
**File:** `src/app/page.tsx:64, 86`

`"No apps in this category yet."` and `"Privacy Policy"` are hardcoded English inside an otherwise fully localised page. When the locale is `es`, these remain English.

**Fix:** add `common.emptyCategory` and `common.privacyPolicy` (the latter already exists in `translations.ts:11` / `:224`) and use them.

---

### M4. Plain `<a>` for internal navigation causes a full reload and resets the locale
**File:** `src/app/page.tsx:85`

`<a href="/privacy">` triggers a hard navigation in the App Router, discarding the client-side locale state and re-running the browser-detection effect (H5). The rest of the codebase correctly uses `next/link` (`AppModal.tsx:199,213,225`; `PrivacyView.tsx:30`).

**Fix:** `import Link from "next/link"` and use `<Link href="/privacy">`.

---

### M5. English locale falls back to Spanish screenshots
**File:** `src/app/components/AppModal.tsx:49`

```jsx
const screenshots = locale === "en" && app.screenshotsEn ? app.screenshotsEn : app.screenshots;
```

Only StreamAura defines `screenshotsEn` (`apps.ts:633`). TrackHobbies (`apps.ts:545`) and MyBarTrack (`apps.ts:294`) screenshots are captured with a Spanish UI, so EN users see Spanish screenshots with no indication.

**Fix:** add `screenshotsEn` for TrackHobbies and MyBarTrack, or note in the data file that the screenshots are locale-specific.

---

### M6. The modal's effect re-subscribes on every parent render, briefly unlocking body scroll
**Files:** `src/app/components/AppModal.tsx:26-43`; `src/app/page.tsx:93`

`handleClose` is a `useCallback` depending on `onClose`, and `page.tsx:93` passes an inline arrow `() => setSelectedApp(null)` — a new identity on every `Home` render. The effect therefore tears down and re-runs, which sets `document.body.style.overflow = ""` (line 41) and immediately back to `"hidden"` (line 37). The scrollbar disappears and reappears on each render, causing a visible layout shift of the whole page (no `scrollbar-gutter: stable`).

**Fix:** wrap the `onClose` prop in `useCallback` in `page.tsx`, or store `onClose` in a ref inside `AppModal` so the effect depends only on stable values.

---

### M7. `setTimeout` in the close handler is never cleared
**File:** `src/app/components/AppModal.tsx:26-29`

`setTimeout(onClose, 200)` is not tracked or cleared. If the modal unmounts within those 200 ms (or the user clicks the backdrop and then Escape), `onClose` fires multiple times, and a pending timer can fire after unmount.

**Fix:** store the timeout id in a ref and clear it in the effect cleanup; guard the callback with an `isClosing` flag.

---

### M8. `scrollbar-none` is a no-op class
**Files:** `src/app/page.tsx:37`; `src/app/globals.css:174-177`

`scrollbar-none` is not a Tailwind v4 core utility (it comes from the `tailwind-scrollbar` plugin, which is not installed). Verified in the built CSS: the only scrollbar rules emitted are `scrollbar`, `scrollbar-thumb`, `scrollbar-track` — there is no `.scrollbar-none` rule. The category bar's `overflow-x-auto` therefore shows the global 6px scrollbar defined in `globals.css:174-177`.

**Fix:** either add the plugin, or hide the scrollbar locally in `globals.css`:
```css
.scrollbar-none { scrollbar-width: none; }
.scrollbar-none::-webkit-scrollbar { display: none; }
```

---

### M9. No per-page metadata — every route shares one title
**Files:** `src/app/layout.tsx:11-21`; all files in `src/app/privacy/**`

`layout.tsx` defines a title template (`"%s | ApplicationHub"`), but no page exports `metadata` — the page files are all `"use client"`, which cannot export metadata. Verified in the build output: `index.html`, `privacy.html` and every privacy route emit the identical `<title>ApplicationHub - Mis Aplicaciones</title>`.

For a set of public legal pages this is a meaningful SEO loss — six pages competing on one title.

**Fix:** make each privacy route a server component that renders a small client child, and export `metadata` from the server component.

---

### M10. `categoryBadgeClass` is typed `Record<string, string>`
**Files:** `src/app/components/AppCard.tsx:7-12`; `src/app/components/AppModal.tsx:9-14`

The map is keyed by `string`, so a typo or a new `Category` value would not be caught by TypeScript and would silently render `class="undefined"`. The map is also duplicated verbatim in two files, and `juego` is mapped to `badge-mac` (violet) with no `.badge-juego` rule in `globals.css`.

**Fix:** type it `Record<Category, string>`, extract it to a single shared module, and remove the `juego` entry (see M2).

---

## 4. MINOR (nice to have)

- **`src/data/apps.ts:6, 268`** — `nameEn?: string` is declared on the `App` interface but no app defines it and no component reads it. Dead field. Also `howToUseEn` for MyBarTrack opens *"What is DrinkTrack?"* / *"DrinkTrack is an app…"* while the app is named **MyBarTrack** (`apps.ts:221`) — a stale name that is user-visible in the EN manual.
- **`src/data/apps.ts:1029-1030`** — the `exiftool-cli` description embeds a raw URL (`https://github.com/polidisio/exiftool-cli`) in the description text, unlike every other app which uses the `website` field. The URL is duplicated between the ES and EN descriptions.
- **`src/app/components/AppModal.tsx:117, 182, 199`** — `key={index}` used for feature and screenshot lists. Acceptable for static, order-stable data, but keys based on content would be safer if items are ever reordered.
- **`src/app/components/PrivacyView.tsx:167, 173`** — the contact values `info@saraiba.eu` and `https://saraiba.eu` are hardcoded in the component while only the labels (`p.contactEmail`, `p.contactWeb`) come from the translation object. The actual addresses cannot be changed per-policy or per-locale. Consider moving them into the translation data.
- **`src/app/page.tsx:51`** — `apps.filter((a) => a.category === cat.id).length` recomputes a full array scan per category on every render. With 14 apps this is negligible, but a single `useMemo`'d count map would scale better and pair naturally with the existing `useMemo` on line 21.
- **`src/app/globals.css:19-20, 23-25`** — `:root` custom properties (`--glass-bg`, `--font-display`, `--font-body`, `--font-mono`, …) sit outside the `@theme inline` block, so they are invisible to Tailwind's theme utilities and cannot be used as e.g. `bg-glass-bg`. Moving them into `@theme` would make them available as utility classes.
- **`src/app/globals.css:174-177`** — the global `::-webkit-scrollbar` rule (6px, custom thumb) also applies to the modal's scroll container (`AppModal.tsx:58`, `overflow-y-auto`), where a default scrollbar would look more natural.
- **`src/app/hooks/useTranslation.tsx:19`** — `browserLang.startsWith("es")` maps every non-Spanish locale to English, so `fr`, `de` and `pt` users get English with no indication that a Spanish version exists. Acceptable for a two-locale site, but worth documenting.
- **Locale choice is not persisted** — a user who manually selects EN has their choice overridden by browser detection on the next full page load (e.g. after M4's `<a href>` navigation). Storing the preference in a cookie or `localStorage` would fix this and also enable H4/H5.

---

## Summary

The codebase is clean and idiomatic — TypeScript is well typed, the build is clean, ESLint reports nothing, all referenced assets exist on disk, and the component split (`AppCard` / `AppModal` / `Header` / `PrivacyView`) is sensible with a consistent `apps.ts` → `i18n` data flow.

The substantive problems are **not** in the code structure but in the **content layer**:

1. **The privacy policies contradict each other and the app data** (C1, C2, C3, H7) — one says no analytics, another says PostHog, a third says no health data for an app that reads HealthKit, and MyBarTrack's own marketing copy says "no personal data collection" while its policy page describes analytics. These are the issues I would fix first; they are user-visible legal text, and the contradictions are between documents that ship together.
2. **A hardcoded `9 apps` against 14 real apps** (H1) — a one-line fix that removes a class of drift entirely.
3. **Chinese characters in Spanish copy** (H2) — a one-line fix.
4. **Inter loaded but never applied** (H3) — a wasted webfont on every page load.
5. **Locale/`lang` handling** (H4, H5) — `lang="es"` on a bilingual site, with a hydration flash.

Everything else is polish: category labels duplicated across three files (M1), an empty "Games" filter (M2), untranslated strings (M3), and a handful of React lifecycle details in the modal (M6, M7, M8).
