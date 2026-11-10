# Code Review Report: application-hub
Generated: 2026-11-10 (nightly review)

**Scope:** `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/globals.css`, `src/app/hooks/useTranslation.tsx`, `src/app/i18n/translations.ts`, `src/app/privacy/**` (6 páginas), `src/app/components/{Header,AppCard,AppModal,PrivacyView}.tsx`, `src/data/apps.ts`
**Método:** lectura completa de los ficheros listados contra el árbol de `main` (`5fd5fff`). Todos los hallazgos CRITICAL/HIGH de este informe han sido **verificados línea por línea** contra el código.
**Repo:** público.

---

## 1. CRITICAL

### C1. La cabecera anuncia "9 apps" cuando el catálogo tiene 14
**Ficheros:** `src/app/components/Header.tsx:63`

```tsx
9 apps &nbsp;·&nbsp; macOS &nbsp;·&nbsp; iOS &nbsp;·&nbsp; Web
```

**Verificado:** `grep -c "^    id:" src/data/apps.ts` → **14** entradas (7 `ios`, 4 `mac`, 3 `desarrollo`). El literal está hardcodeado en `Header.tsx:63` y no se traduce en el locale EN.
**Fix:** `import { apps } from "@/data/apps"` y renderizar `{apps.length} apps`.

> Nota de severidad: el modelo lo etiquetó como CRITICAL; en la práctica es un defecto visible de contenido, no de seguridad. Se mantiene como CRITICAL solo por coherencia con las noches anteriores, donde ya se reportó. *Duplica: PR #4 H1, PR #6 H2, PR #7, PR #10 H1.*

---

## 2. HIGH

### H1. La política de privacidad genérica contradice la política de analítica publicada en el mismo sitio
**Ficheros:** `src/app/i18n/translations.ts:24`, `:28` (ES genérica) / `:237`, `:241` (EN genérica) vs `:59`, `:101`, `:272`, `:314`

**Verificado:**
- `:24` → `"Nuestras aplicaciones NO recopilamos ningún dato personal del usuario."`; `:28` → `"No usamos analytics"`.
- `:237` → `"Our apps do NOT collect any personal user data."`; `:241` → `"We do not use analytics"`.
- `:59` / `:272` → `"utilizamos PostHog (posthog.com)"`; `:101` / `:314` → PostHog (TrackHobbies, analítica opcional).
- `src/app/privacy/page.tsx:8` → `<PrivacyView p={t.privacy} />` (la versión "no usamos analytics"), y `AppModal.tsx:226` la usa como destino por defecto de **toda app sin `privacyUrl`**.

**Impacto:** dos afirmaciones mutuamente excluyentes visibles para el usuario y para un auditor. Es el hallazgo de mayor riesgo legal (política de privacidad publicada).
**Fix:** convertir `t.privacy` en una umbrella policy real ("Algunas de nuestras aplicaciones usan analítica opcional…"), listar explícitamente cuáles, y dar `privacyUrl` a toda app cuyo comportamiento difiera de la línea base.
*Duplica: PR #9 C1, PR #10 C2.*

### H2. MyBarTrack se anuncia como "sin recopilación de datos" mientras su política dice que usa PostHog
**Ficheros:** `src/data/apps.ts:229` (ES) / `:237` (EN), `src/app/privacy/mybartrack/page.tsx:8`, `src/app/i18n/translations.ts:59` / `:272`, `src/data/apps.ts:304`

**Verificado:** `apps.ts:229` → `"Sin recopilación de datos personales"`; `apps.ts:237` → `"No personal data collection"`; `privacy/mybartrack/page.tsx:8` → `<PrivacyView p={t.privacyAnalytics} />`; `translations.ts:59` / `:272` → PostHog; `apps.ts:304` → `privacyUrl: "/privacy/mybartrack"`.
**Fix:** eliminar los bullets contradictorios y declarar la analítica opcional, o darle a la app su propio bloque de política.
*Duplica: PR #5 H4, PR #9 C3, PR #10 C1.*

### H3. La política de SyncTrackers omite el permiso de HealthKit que la app exige
**Ficheros:** `src/app/i18n/translations.ts:83` (ES) / `:296` (EN), `src/app/privacy/synctracers/page.tsx:8`, `src/data/apps.ts:397` / `:404`

**Verificado:** `:83` → `"Nuestras aplicaciones no requieren permisos especiales más allá del acceso básico…"`; `:296` → equivalente EN; `privacy/synctracers/page.tsx:8` → `<PrivacyView p={t.privacyAnalytics} />`; `apps.ts:397` → `"Lee workouts de Apple Health / HealthKit"`, `apps.ts:404` → `"Reads workouts from Apple Health / HealthKit"`.
Además, el bloque genérico afirma bajo **"NO recopilamos:"** (`:66` ES / `:279` EN) `"Datos de salud reales"` (`:69`) / `"Actual health data"` (`:282`) — para una app cuyo producto es leer workouts de HealthKit.
**Fix:** bloque propio `privacySyncTrackers` que declare el acceso de lectura de workouts de HealthKit/Apple Health y la sincronización privada por iCloud.
*Duplica: PR #9 C2, PR #10 C4.*

### H4. Caracteres chinos corruptos en el manual en español de ThinkDeck Study
**Ficheros:** `src/data/apps.ts:140` y `:164`

**Verificado:** `grep -n "翻转" src/data/apps.ts` → exactamente dos coincidencias, líneas **140** y **164**. El texto EN equivalente (`apps.ts:141`, `:200`) está limpio ("flip the card").
**Fix:** sustituir por "y voltea" / "para voltear".
*Duplica: PR #5 H2, PR #10 C3. Ya corregido por el PR #3 (abierto) — su fix dice "para voltea" en `:164`, construcción incorrecta en español; ajustarla a "para voltear" al fusionar.*

### H5. El manual en inglés de MyBarTrack sigue usando el nombre antiguo "DrinkTrack"
**Ficheros:** `src/data/apps.ts:268`

**Verificado:** `apps.ts:268` → `"🎯 What is DrinkTrack?"` y `:269` → `"DrinkTrack is an app to track your daily beverage consumption…"`. El nombre del catálogo es `MyBarTrack` (`apps.ts:221`, slug `mybartrack`, `privacyUrl` en `:304`); el manual en español (`apps.ts:242`) sí dice "MyBarTrack".
**Fix:** "DrinkTrack" → "MyBarTrack" en `howToUseEn`.
*Duplica: PR #5 H5, PR #10 H3.*

### H6. El modal queda en blanco si una app tiene capturas pero no manual
**Ficheros:** `src/app/components/AppModal.tsx:23`, `:50`, `:171`

**Verificado:** `activeTab` se inicializa a `"manual"` (`:23`); `hasTabs = howToUse || (screenshots && screenshots.length > 0)` (`:50`); el botón "Manual" solo se renderiza si `howToUse` (`:171`), y el panel de manual requiere `activeTab === "manual" && howToUse` (`:174`). Si `howToUse` es `undefined` pero hay capturas, `hasTabs` es `true` pero el panel de "manual" no se pinta y `activeTab` nunca pasa a `"screenshots"` → zona vacía.
`howToUse` es opcional en el tipo `App` (`apps.ts:13`), así que cualquier app futura sin manual rompe en silencio. Hoy ninguna app del catálogo lo provoca.
**Fix:** `useState(howToUse ? "manual" : "screenshots")`.
*Duplica: PR #6 H1, PR #7 H1 (variante).*

---

## 3. MEDIUM

- **M1. `src/app/hooks/useTranslation.tsx:4` + `src/app/i18n/translations.ts` (final del fichero)** — `export type TranslationKeys = typeof translations.es;` no restringe `translations.en`: una clave que falte o esté mal escrita en EN compila limpio y renderiza `undefined` en runtime. **Fix:** `const en: TranslationKeys = {...}` o `satisfies TranslationKeys`.
- **M2. `src/app/page.tsx:9-15`** — las etiquetas de filtro (`"All"`, `"iOS"`, `"Mac"`, `"Dev"`, `"Games"`) están hardcodeadas en inglés y fuera del sistema i18n. Además el filtro `"Games"` mapea a la categoría `"juego"`, que **no tiene ninguna app** (`grep -c 'category: "juego"' src/data/apps.ts` → 0) → siempre muestra el estado vacío.
- **M3. `src/app/page.tsx:64`** — `"No apps in this category yet."` sin traducir.
- **M4. `src/app/page.tsx:86`** — el enlace `"Privacy Policy"` del pie no se traduce; `© 2026 Polidisio` fija el año.
- **M5. `src/app/components/AppCard.tsx:51`** — `{app.category === "desarrollo" ? "Dev" : app.category.toUpperCase()}` no está traducido, y `categoryLabels` (`src/data/apps.ts:1055-1060`) es solo-ES, por lo que `AppModal.tsx:99` renderiza "Juego"/"Desarrollo" **también en modo EN**. Además `toUpperCase()` produce `"JUEGO"`.
- **M6. `src/app/components/AppCard.tsx:7-12` y `AppModal.tsx:9-14`** — `categoryBadgeClass` duplicado, tipado como `Record<string, string>` → una categoría desconocida produce `class="undefined"` sin aviso del compilador.
- **M7. `src/app/layout.tsx:29`** — `<html lang="es">` hardcodeado pese a soportar EN (lectores de pantalla y buscadores reciben el idioma equivocado). `metadata.description` (`:16`) es solo-ES y las páginas `/privacy/*` no exportan metadata.
- **M8. `src/app/globals.css:23-25` vs `layout.tsx:6-9`** — se carga la webfont Inter y se aplica `inter.variable` → `--font-inter`, pero `body` usa `var(--font-body)` (stack del sistema): la fuente se descarga y nunca se renderiza.
- **M9. `src/app/globals.css:213`** — `.container` propio colisiona con la utility `container` de Tailwind v4 (`@import "tailwindcss"`): el ancho/padding depende del orden de capas. **Fix:** renombrar a `.shell`.
- **M10. `src/app/hooks/useTranslation.tsx:15-23`** — la elección manual ES/EN no se persiste; se detecta `navigator.language` una sola vez y se pierde en cada recarga (no hay `localStorage`).
- **M11. `src/app/hooks/useTranslation.tsx:17-23`** — el provider es un client component: el SSR emite siempre ES y el locale cambia tras la hidratación (flash de contenido y SEO siempre en español).
- **M12. `src/data/apps.ts:303`, `:337`** — los enlaces de App Store hardcodean el storefront español (`/es/app/...`) y se sirven a usuarios EN.
- **M13. `src/app/privacy/mybartrack/page.tsx:8` y `src/app/privacy/synctracers/page.tsx:8`** — dos apps distintas renderizan el mismo `t.privacyAnalytics`, cuyo título es genérico ("Política de Privacidad") y cuyo cuerpo dice "Nuestras aplicaciones…". Ninguna página menciona la app concreta.
- **M14. `src/app/components/PrivacyView.tsx:167`, `:173`** — `info@saraiba.eu` y `https://saraiba.eu` están en línea en el componente mientras las etiquetas (`p.contactEmail`, `p.contactWeb`) vienen del fichero de traducciones; el email además difiere de la marca "Polidisio" usada en el resto de la UI.

---

## 4. MINOR

- **N1. `src/app/components/AppModal.tsx:22-43`, `:64`** — sin `role="dialog"`, `aria-modal`, `aria-labelledby`, sin gestión/trampa de foco ni nombre accesible en el botón de cierre (solo SVG).
- **N2. `src/app/components/AppModal.tsx:28`** — el `setTimeout(onClose, 200)` nunca se limpia: si el modal se desmonta antes, el timer dispara sobre un árbol desmontado.
- **N3. `src/app/components/AppModal.tsx:26-43`** — `handleClose` depende de `onClose`, que en `page.tsx:93` es una arrow inline: la identidad cambia en cada render y el efecto se re-registra (posible parpadeo del fade).
- **N4. `src/app/page.tsx:49-52`** — los contadores por categoría se recalculan en cada render (4 pasadas O(n) sobre el JSX); trivial con `useMemo`.
- **N5. `src/app/page.tsx:10`** — `"All"` hardcodeado aunque existe el namespace `common` (`translations.ts:6`).
- **N6. `src/data/apps.ts:6`** — `nameEn?: string` se declara pero ningún componente lo lee; o se usa o se elimina.
- **N7. `src/data/apps.ts:1029`** — una URL cruda embebida en la prosa de `description`/`descriptionEn` (el campo `website` ya la cubre).
- **N8. `src/app/page.tsx:35`** — la barra de filtros sticky (`top-0 z-20`) tapa los anclajes internos; añadir `scroll-mt`/`scroll-padding-top` en `html`.
- **N9. `src/app/globals.css:119-121`** — no hay regla `.badge-juego`; `categoryBadgeClass` mapea `juego` → `badge badge-mac` (púrpura), color engañoso.
- **N10. `src/app/globals.css:82-88`, `:61-66`** — `blur(24px)` en el overlay del modal + `blur(16px)` en cada glass card: coste GPU alto en dispositivos modestos y Safari móvil.

---

## 5. Resumen

Sin superficies de inyección, XSS ni enlaces inseguros: no hay `dangerouslySetInnerHTML`, ni `eval`, ni entrada de red o de usuario en el código revisado; los enlaces externos usan `rel="noopener noreferrer"`.

Los tres temas dominantes son: (a) **valores hardcodeados que han derivado del fichero de datos** ("9 apps" vs 14, filtro "Games" sin apps, categoría "Juego" sin regla CSS), (b) **fugas de i18n** — el sistema de locale cubre el copy de privacidad pero no las etiquetas de categoría, los badges, el pie, el estado vacío ni `<html lang>`, y el bundle `en` no se contrasta tipadamente contra `es`, de modo que la deriva es invisible al compilador, y (c) **defectos de copy ya en producción**: los caracteres chinos del manual ES de ThinkDeck y las políticas de privacidad contradictorias.

Prioridad sugerida: H1, H2, H3 (cumplimiento normativo) → H4, H5, H6 → M1, M2, M5.

---

*Nota: este repositorio no tiene commits de código desde el 2026-11-02 (`672b9e8`), por lo que la mayor parte de los hallazgos ya estaban cubiertos por los PR #4–#10. Se mantienen las referencias de duplicado para facilitar la deduplicación. No se ha cerrado ningún PR previo.*
