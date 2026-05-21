# Code Review Report: application-hub

**Date:** 2026-05-22  
**Review Method:** Automated Claude Code analysis  
**Repository:** polidisio/application-hub  
**Branch:** code-review/application-hub-20260522

---

## Summary

| Severity | Count |
|----------|-------|
| CRITICAL | 0 |
| HIGH | 2 |
| MEDIUM | 4 |
| MINOR | 4 |

**Overall: Clean codebase — no critical bugs or security vulnerabilities.**

---

## HIGH Issues

### 1. Unused `nameEn` field in App interface
- **File:** `src/data/apps.ts:6`
- **Description:** `nameEn?: string` is defined in the `App` interface but never displayed in `AppCard` or `AppModal`. Either dead code or missing bilingual feature.
- **Fix:** If English names are meant to display based on locale, update components. Otherwise remove the field.

### 2. Duplicate `categoryBadgeClass` across components
- **Files:** `src/app/components/AppCard.tsx:7-12`, `src/app/components/AppModal.tsx:9-14`
- **Description:** Identical static object is copy-pasted in two files. Also `juego` maps to `"badge badge-mac"` (likely typo — should be `"badge badge-juego"`).
- **Fix:** Extract to shared constant file (`src/app/components/categoryStyles.ts`) and fix the `juego` mapping.

---

## MEDIUM Issues

### 3. Missing `useCallback` for `handleEscape` in AppModal
- **File:** `src/app/components/AppModal.tsx:28-31`
- **Description:** `handleEscape` is recreated on every render. Works correctly due to useEffect re-registering, but idiomatic pattern is `useCallback`.
- **Fix:** Wrap in `useCallback` with `onClose` as dependency.

### 4. Hardcoded date in privacy page
- **File:** `src/app/privacy/page.tsx:52`
- **Description:** `"16 de febrero de 2026"` / `"16 February 2026"` is hardcoded inline.
- **Fix:** Add a `lastUpdateDate` key to translations and reference it dynamically.

### 5. `useEffect` in `useTranslation` has empty deps with no comment
- **File:** `src/app/hooks/useTranslation.tsx:17-21`
- **Description:** Locale detection runs once on mount (`[]` deps) — intentional, but no comment explains why lint warning is suppressed.
- **Fix:** Add `// eslint-disable-next-line` or a clarifying comment.

### 6. `howToUse` content has flipped character encoding
- **File:** `src/data/apps.ts:162`
- **Description:** `"翻转"` contains U+2F8F4 (flipped variant) instead of standard `翻` (U+7FF0).
- **Fix:** Replace with correct `翻转` using standard characters.

---

## MINOR Suggestions

### 7. `next.config.ts` is empty
- No custom configuration. Fine for now, but populate when adding image domains, redirects, or security headers.

### 8. No test suite
- No testing framework (Jest, Vitest, Playwright). Low priority for a portfolio site.

### 9. `layout.tsx` hardcodes `lang="es"`
- **File:** `src/app/layout.tsx:29`
- **Description:** HTML lang attribute always Spanish regardless of active locale — affects SEO and screen readers.
- **Fix:** Pass locale to layout and set `lang={locale}`.

### 10. `juego` category uses `badge-mac` CSS class
- **Files:** `AppCard.tsx:10`, `AppModal.tsx:12`
- **Description:** Category `juego` uses `badge-mac` class. May be intentional (shared styles) but worth confirming.
- **Fix:** Confirm with designer or create `badge-juego` style.

---

## Security & Dependency Notes

- **next@16.1.6, react@19.2.3** — Cutting-edge versions, no known security issues.
- **External links** use `target="_blank"` with `rel="noopener noreferrer"` correctly.
- **`mailto:` link** (`info@saraiba.eu`) hardcoded as intended.
- **No security scanning** (`npm audit`) configured — recommend adding to CI.
