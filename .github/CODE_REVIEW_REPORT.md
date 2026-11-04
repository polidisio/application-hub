# Code Review Report: application-hub
Generated: 2026-11-05T00:08:32.366155

I've read all source files. Here's my report.

---

# Code Review: application-hub

Stack: Next.js 16 (App Router), React 19, Tailwind v4, TypeScript. Small static site — 14 app entries,6 privacy pages, no API routes, no auth, no DB. **No XSS/injection surface** — everything is static local data rendered through React (no `dangerouslySetInnerHTML`, no user input, no network calls). `next/link` external links correctly use `rel="noopener noreferrer"`.

The code is generally clean. Below are real defects, roughly in severity order.

---

## 1. CRITICAL

**None.** No exploitable vulnerabilities or data-loss bugs found. The issues below are correctness/UX/legal-accuracy defects.

---

## 2. HIGH

### H1 — Modal opens with a blank content area when switching between apps
`src/app/components/AppModal.tsx:23, 50, 171–192`

`activeTab` is component state initialized to `"manual"`, but `AppModal` is unmounted/remounted per app (via `{selectedApp && <AppModal .../>}` in `page.tsx:92`) — yet the state *persists across apps* because React reuses the same component instance when switching `app` prop... actually more precisely: the modal for app A is closed (`setSelectedApp(null)`) and reopened, remounting `AppModal` with `activeTab` reset to `"manual"`. But if the user opens app A (has screenshots), clicks the **Screenshots** tab, then closes and opens app B (no screenshots), the sequence is: app A modal unmounts → app B mounts fresh → `activeTab = "manual"`. The bug fires when the *same* instance handles two apps.

The concrete, reproducible path: `activeTab === "screenshots"` while `screenshots` is empty. Then the "Manual" button renders with **inactive** styling (line 361-363, since `activeTab !== "manual"`), and both content blocks are skipped (line 171 requires `activeTab === "manual"`, line 179 requires `screenshots.length > 0`). The user sees an empty region with a greyed-out "Manual" tab.

**Fix:** reset the tab when the app changes, and always fall back to an available tab:
```tsx
useEffect(() => setActiveTab("manual"), [app.id]);
// and
const effectiveTab = screenshots?.length ? activeTab : "manual";
```
Also initialize `activeTab` from what's actually available (`useState(hasScreenshots ? "screenshots" : "manual")`) so a screenshots-only app doesn't open on an empty Manual panel.

### H2 — App count in the header is wrong (hardcoded)
`src/app/components/Header.tsx:63`

```
9 apps  ·  macOS  ·  iOS  ·  Web
```
`src/data/apps.ts` contains **14** apps (ids at lines 27, 114, 220, 307, 340, 365, 392, 471, 559, 645, 739, 837, 926, 1027). The header advertises 9. `SPEC.md` also still says "All 9 apps" — the spec drifted with the data.

**Fix:** `const appCount = apps.length;` and interpolate. Same for the `SPEC.md` checklist.

### H3 — The generic privacy policy contradicts the per-app policies
`src/app/i18n/translations.ts:24, 28` (ES) / `:240, 244` (EN) vs `:59` and `:101`

The default policy at `/privacy` states:
> "Nuestras aplicaciones NO recopilan n