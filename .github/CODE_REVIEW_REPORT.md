# Code Review Report: application-hub
Generated: 2026-11-04T00:12:35.552096

I've read all17 source files (well within the 20-file limit) and cross-checked data, i18n, CSS utilities, and asset paths. Here's the report.

---

# Code Review: application-hub

**Scope:** `src/` (17 files: 8 app routes, 4 components, 1 hook, 1 i18n module, 1 data module, 1 global CSS). Next.js 16 / React 19 / Tailwind v4, fully static, no backend.

**Overall:** The code is clean and idiomatic. No critical security vulnerabilities — there is no user input, no `dangerouslySetInnerHTML`, no auth, no API routes, no external data fetching, and external links correctly use `rel="noopener noreferrer"`. The issues below are mostly correctness of displayed content, i18n consistency, accessibility, and a couple of real bugs.

---

## 1. CRITICAL (must fix)

None. No exploitable vulnerability or data-loss defect found.

---

## 2. HIGH (should fix)

### H1 — Visible wrong character count in the header
`src/app/components/Header.tsx:63`
```tsx
9 apps &nbsp;·&nbsp; macOS &nbsp;·&nbsp; iOS &nbsp;·&nbsp; Web
```
The dataset contains **14** apps (`src/data/apps.ts`, 14 `id:` entries). The number is hardcoded and already stale.
**Fix:** derive it — `apps.length` — or remove the count entirely.

### H2 — Corrupted text (Chinese characters) in the Spanish/English ThinkDeck copy
`src/data/apps.ts:140` and `src/data/apps.ts:164`
```
3. Inicia una sesión de estudio y翻转 la tarjeta para ver la respuesta
- Toca la tarjeta para翻转 y ver la respuesta
```
`翻转` means "flip" in Chinese — clearly a bad IME substitution for "girar"/"flip". User-visible in the app modal.
**Fix:** replace with "girar" (ES) and "flip" (EN) respectively.

### H3 — App name mismatch in the MyBarTrack English manual
`src/data/apps.ts:268-269`
```ts
howToUseEn: `🎯 What is DrinkTrack?
DrinkTrack is an app to track your daily beverage consumption...
```
The app is named **MyBarTrack** everywhere else (`name` at line 221, the ES manual at 242-243, the icon `/icons/DrinkTrack.jpg`). The EN manual shows a product name users can't find in the store.
**Fix:** replace `DrinkTrack` → `MyBarTrack` in `howToUseEn`.

### H4 — MyBarTrack's feature list contradicts its own privacy policy (legal inconsistency)
- `src/data/apps.ts:228-229` (shown to users in the app modal):
  - "Datos almacenados exclusivamente en tu dispositivo"
  - "Sin recopilación de datos personales"
- `src/app/privacy/mybartrack/page.tsx:8` serves `t.privacyAnalytics`, whose `dataCollectedText` states the app **uses PostHog analytics** and collects anonymous usage events.

These cannot both be true. A privacy policy that contradicts the in-app claim is a store-review / GDPR exposure, not just a copy bug.
**Fix:** decide which is true. If PostHog is used, drop the "Sin recopilación de datos personales" feature bullet and state the analytics disclosure in the modal; if not, give MyBarTrack its own policy page instead of reusing `privacyAnalytics`.

### H5 — `<html lang>` is hardcoded to Spanish while the UI switches to English
`src/app/layout.t