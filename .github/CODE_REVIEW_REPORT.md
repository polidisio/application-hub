# Code Review Report: application-hub
Generated: 2026-11-11 (nightly review)

**Scope:** `src/app/i18n/translations.ts`, `src/data/apps.ts`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/hooks/useTranslation.tsx`, `src/app/components/{Header,AppCard,AppModal,PrivacyView}.tsx`, `src/app/privacy/**` (6 páginas)
**Método:** lectura completa de los ficheros listados contra el árbol de `main` (`f4d4ddd`). Todos los hallazgos CRITICAL/HIGH de este informe han sido **verificados línea por línea** contra el código (repo público → verificación obligatoria antes de publicar).
**Repo:** público.
**Nota de severidad:** los hallazgos C1–C4 son los mismos bugs ya reportados en PR #9 (C1–C4), PR #10 (C1–C4) y PR #11 (H1–H3). Esta noche el modelo los degradó a HIGH; se **restituye la severidad** de las noches anteriores al confirmarlos de nuevo contra el código. Los hallazgos de contenido (texto corrupto, nombres, contadores) se mantienen en HIGH por ser defectos visibles, no vulnerabilidades.

**Resumen:** 4 CRITICAL · 5 HIGH · 8 MEDIUM · 15 MINOR

---

## 1. CRITICAL

### C1. La política de privacidad de SyncTrackers afirma que NO se recogen datos de salud mientras la app lee workouts de HealthKit
**Ficheros:** `src/app/privacy/synctracers/page.tsx:8`, `src/app/i18n/translations.ts:69` (ES) / `:282` (EN), `src/data/apps.ts:394`, `:397`, `:404`

**Verificado:**
- `src/app/privacy/synctracers/page.tsx:8` → `<PrivacyView p={t.privacyAnalytics} />` (el bloque compartido).
- `translations.ts:66` ES → `notCollectedTitle: "NO recopilamos:"`; `:69` → `"Datos de salud reales"`. EN: `:279` → `"We do NOT collect:"`; `:282` → `"Actual health data"`.
- `apps.ts:394` → `"App local-first que extrae datos de entrenamiento de Apple Health y los sincroniza entre tus dispositivos."`; `:397` → `"Lee workouts de Apple Health / HealthKit"`; `:404` → `"Reads workouts from Apple Health / HealthKit"`.

**Impacto:** la política publicada dice literalmente lo contrario de lo que hace la app. Es el caso más grave de la serie: unastatements de privacidad falsa para la única app que lee datos de salud, y además la app **sí** expone esos datos a un tercero (Apple/iCloud).
**Fix:** bloque de traducción propio `privacySyncTrackers` (ES + EN) que declare explícitamente la lectura de workouts de HealthKit con permiso del usuario, el almacenamiento local (SQLite/SwiftData) y la sincronización privada por iCloud; eliminarlo de cualquier lista de "no recopilamos". Apuntar `synctracers/page.tsx:8` a ese bloque.
*Duplica: PR #9 C2, PR #10 C4, PR #11 H3.*

### C2. La declaración genérica de permisos contradice el requisito de HealthKit de SyncTrackers
**Ficheros:** `src/app/i18n/translations.ts:83` (ES) / `:296` (EN), `src/app/privacy/synctracers/page.tsx:8`, `src/data/apps.ts:397` / `:404`

**Verificado:**
- `translations.ts:83` → `"Nuestras aplicaciones no requieren permisos especiales más allá del acceso básico necesario para su funcionamiento."`
- `translations.ts:296` → `"Our apps do not require special permissions beyond basic access needed for functionality."`
- El mismo bloque `privacyAnalytics` se usa en `/privacy/synctracers` (`:8`) y `/privacy/mybartrack` (`:8`).

**Fix:** `permissionsText` específico para SyncTrackers que describa el entitlement de HealthKit, el acceso de solo lectura y cómo revocarlo en Ajustes.
*Duplica: PR #9 C2, PR #10 C4, PR #11 H3.*

### C3. MyBarTrack se anuncia como "sin recopilación de datos personales" mientras su política dice que usa PostHog
**Ficheros:** `src/data/apps.ts:228` / `:229` (ES) y `:236` / `:237` (EN), `src/app/privacy/mybartrack/page.tsx:8`, `src/app/i18n/translations.ts:59` / `:272`

**Verificado:**
- `apps.ts:228` → `"Datos almacenados exclusivamente en tu dispositivo"`; `:229` → `"Sin recopilación de datos personales"`.
- `apps.ts:236` → `"Data stored exclusively on your device"`; `:237` → `"No personal data collection"`.
- `privacy/mybartrack/page.tsx:8` → `<PrivacyView p={t.privacyAnalytics} />`.
- `translations.ts:59` → `"...utilizamos PostHog (posthog.com), un servicio de analytics..."`; `:272` → equivalente EN.

**Impacto:** dos afirmaciones mutuamente excluyentes en el mismo producto publicado.
**Fix:** o se elimina la analítica del bloque de MyBarTrack, o se corrige `apps.ts:228-229` / `:236-237` para declarar la analítica opcional.
*Duplica: PR #5 H4, PR #9 C3, PR #10 C1, PR #11 H2.*

### C4. La política genérica `/privacy` contradice las políticas de analítica del mismo sitio y es el fallback de casi todas las apps
**Ficheros:** `src/app/privacy/page.tsx:8`, `src/app/i18n/translations.ts:24`, `:28` (ES) / `:237`, `:241` (EN), `src/app/components/AppModal.tsx:226`

**Verificado:**
- `translations.ts:24` → `"Nuestras aplicaciones NO recopilamos ningún dato personal del usuario."`; `:28` → `"No usamos analytics"`.
- `translations.ts:237` → `"Our apps do NOT collect any personal user data."`; `:241` → `"We do not use analytics"`.
- `privacy/page.tsx:8` → `<PrivacyView p={t.privacy} />`.
- `AppModal.tsx:226` → `href={app.privacyUrl ?? "/privacy"}` → **toda app sin `privacyUrl` cae en la política genérica**. Solo 5 apps tienen política propia (`apps.ts:304` mybartrack, `:468` synctracers, `:556` trackhobbies, `:642` streamaura, `:736` noduscli); las otras 9 (incluida Markdown Notes, que sincroniza por iCloud, y LLMBox, que envía los prompts a un servidor AI) heredan la afirmación de que nada sale del dispositivo.

**Fix:** convertir `t.privacy` en una umbrella policy honesta ("Algunas apps usan analítica opcional y anónima; otras no recopilan nada"), listar explícitamente cuáles, y dar `privacyUrl` o una sección de revelan a toda app cuyo comportamiento difiera de la línea base.
*Duplica: PR #9 C1, PR #10 C2, PR #11 H1.*

---

## 2. HIGH

### H1. Las páginas de privacidad por app muestran un título genérico sin el nombre de la app
**Ficheros:** `src/app/i18n/translations.ts:53` (ES) / `:266` (EN)

**Verificado:** `:53` → `title: "Política de Privacidad"`; `:266` → `title: "Privacy Policy"`. Los bloques por app sí llevan sufijo: `:95` `"Política de Privacidad · TrackHobbies"`, `:137` `"· StreamAura"`, `:176` `"· NodusCli"`. El bloque compartido, usado por `/privacy/mybartrack` y `/privacy/synctracers`, no.
**Fix:** dividir `privacyAnalytics` en dos bloques (o parametrizar el título por app).
*Duplica: PR #8 H1.*

### H2. Caracteres chinos corruptos en el manual en español de ThinkDeck Study
**Ficheros:** `src/data/apps.ts:140` y `:164`

**Verificado:** `grep -n "翻转" src/data/apps.ts` → exactamente dos coincidencias, líneas **140** y **164** (`"3. Inicia una sesión de estudio y翻转 la tarjeta para ver la respuesta"` y `"- Toca la tarjeta para翻转 y ver la respuesta"`). El manual EN equivalente (`apps.ts:141`, `:200`) está limpio ("flip the card").
**Fix:** "y voltea la tarjeta" / "para voltear y ver la respuesta".
*Duplica: PR #5 H2, PR #10 C3, PR #11 H4. Ya cubierto por el PR #3 (abierto).*

### H3. El manual en inglés de MyBarTrack sigue usando el nombre antiguo "DrinkTrack"
**Ficheros:** `src/data/apps.ts:268` / `:269`

**Verificado:** `:268` → `"🎯 What is DrinkTrack?"`; `:269` → `"DrinkTrack is an app to track your daily beverage consumption..."`. El catálogo es `id: "drinktrack"` (`:220`) / `name: "MyBarTrack"` (`:221`), `appStore` apunta a `/app/mybartrack/` (`:303`), `privacyUrl: "/privacy/mybartrack"` (`:304`) y el manual ES (`:242`) dice "MyBarTrack".
**Fix:** "DrinkTrack" → "MyBarTrack" en `howToUseEn`.
*Duplica: PR #5 H5, PR #10 H3, PR #11 H5.*

### H4. Las etiquetas de categoría están hardcodeadas en español y difieren entre la tarjeta y el modal
**Ficheros:** `src/app/components/AppModal.tsx:99`, `src/app/components/AppCard.tsx:50`, `src/data/apps.ts:1055-1060`

**Verificado:**
- `apps.ts:1055-1060` → `categoryLabels: Record<Category, string> = { ios: "iOS", mac: "Mac", juego: "Juego", desarrollo: "Desarrollo" }` (español, sin variante EN).
- `AppModal.tsx:99` → `{categoryLabels[app.category]}`.
- `AppCard.tsx:50` → `{app.category === "desarrollo" ? "Dev" : app.category.toUpperCase()}` → produce `IOS`, `MAC`, `JUEGO`.
- La misma app muestra un badge distinto en la rejilla y en el modal, y en locale EN el modal sigue en español.
**Fix:** helper único locale-aware compartido por `AppCard` y `AppModal`. `categoryBadgeClass` está duplicado verbatim en `Header.tsx:9-14`, `AppCard.tsx:7-12` y `AppModal.tsx:9-14`.
*Duplica: PR #10 H6, PR #11 H6.*

### H5. La cabecera anuncia "9 apps" cuando el catálogo tiene 14
**Ficheros:** `src/app/components/Header.tsx:63`

**Verificado:** `Header.tsx:63` → `9 apps &nbsp;·&nbsp; macOS &nbsp;·&nbsp; iOS &nbsp;·&nbsp; Web` (literal hardcodeado, en inglés). `grep -c "^    id: \"" src/data/apps.ts` → **14** entradas (7 `ios`, 4 `mac`, 3 `desarrollo`). Los contadores del filtro (`page.tsx:50-52`) sí se calculan del catálogo → la cabecera contradice la barra de filtros contigua.
**Fix:** `import { apps } from "@/data/apps"` y renderizar `{apps.length}`, con la cadena completa en `translations.ts`.
*Duplica: PR #4 H1, PR #6 H2, PR #7, PR #10 H1, PR #11 C1.*

---

## 3. MEDIUM

- **`src/app/layout.tsx:29`** — `<html lang="es">` hardcodeado aunque la app tiene selector de idioma en runtime (`Header.tsx:15-34`); los lectores de pantalla pronuncian el contenido inglés con fonética española. Verificado línea 29.
- **`src/app/hooks/useTranslation.tsx:15-23`** — `useState<Locale>("es")` se sobrescribe en mount con `navigator.language` y **no se persiste**: quien elige EN vuelve a ES en la siguiente recarga; además hay flash de ES→EN en la primera visita.
- **`src/app/components/AppModal.tsx:226`** — `app.privacyUrl ?? "/privacy"`: 9 de las 14 apps caen en la política genérica (ver C4). Markdown Notes sincroniza por iCloud y LLMBox envía los prompts a un servidor AI de tu red (`apps.ts:839`, `:857`, `:860`), sin mención en la política genérica.
- **`src/app/components/AppModal.tsx:52-71`** — el overlay es un `div` con `onClick`: sin `role="dialog"`, sin `aria-modal`, sin `aria-labelledby` (el `<h2>` está en `:94`), el botón de cerrar (`:64-71`) es un SVG sin `aria-label`, sin trampa de foco ni restauración de foco al cerrar.
- **`src/app/components/PrivacyView.tsx:5-13`** — la interfaz `PrivacyText` (21 campos) es una copia manual de `t.privacy*`; nada obliga a `translations.en` a cumplirla (solo `translations.es` tipa `TranslationKeys`), así que el bloque EN puede divergir en silencio.
- **`src/app/privacy/**/page.tsx`** — todas son `"use client"` sin `export const metadata`, así que cada política hereda `"%s | ApplicationHub"` y el `description` por defecto está hardcodeado en español (`layout.tsx:11-21`) — justo en las páginas que se envían a revisión de App Store.
- **`src/app/page.tsx:50-52`** — `apps.filter((a) => a.category === cat.id).length` dentro del cuerpo del render: 4 pasadas completas sobre el catálogo en cada render.
- **`src/data/apps.ts:1` + `page.tsx:14` + `apps.ts:1059`** — la categoría `"juego"` existe en el tipo, tiene etiqueta y el filtro "Games" se renderiza, pero **ninguna app la usa** (`grep -c 'category: "juego"'` → 0): filtro siempre vacío con contador 0.

---

## 4. MINOR

- **`src/data/apps.ts:6`** — `nameEn?` está declarado en la interfaz `App` pero no se puebla ni se lee en ningún sitio.
- **`src/data/apps.ts:269`** — la descripción EN de MyBarTrack ("track your daily beverage consumption") no menciona el alcohol, que la ES sí menciona (`:222`).
- **`src/data/apps.ts:1029-1030`** — la descripción de exiftool-cli incrusta una URL cruda ("…TIFF. https://github.com/polidisio/exiftool-cli") en el cuerpo del texto.
- **`src/data/apps.ts:53-108` y siguientes** — los manuales `howToUse`/`howToUseEn` (~1-2 KB por app, 14 apps) se descargan siempre aunque el usuario no abra esa app; se podrían cargar bajo demanda al abrir el modal.
- **`src/app/components/AppModal.tsx:28`** — `setTimeout(onClose, 200)` nunca se limpia: si el modal se desmonta antes, el callback dispara sobre un componente desmontado.
- **`src/app/components/AppModal.tsx:199-224`** — URLs externas renderizadas con `next/link` + `target="_blank"`; para destinos externos corresponde un `<a>` plano (`Link` intenta navegación/prefetch del cliente).
- **`src/app/components/AppModal.tsx:185`** — `alt={`Screenshot ${index + 1}`}` en inglés hardcodeado y no descriptivo; debería incluir el nombre de la app.
- **`src/app/components/AppModal.tsx:181`** — las capturas usan el índice del array como `key` de React; usar la ruta del fichero.
- **`src/app/components/PrivacyView.tsx:167`, `:173`** — email (`info@saraiba.eu`) y sitio (`https://saraiba.eu`) hardcodeados en el componente mientras sus *etiquetas* sí se traducen.
- **`src/app/components/PrivacyView.tsx:167-175`** — los `<a>` no llevan `rel="noopener noreferrer"` (irrelevante para `mailto:`, inconsistente con `AppModal.tsx:202`).
- **`src/app/page.tsx:86`** — el enlace del pie "Privacy Policy" está hardcodeado en inglés en el locale ES; debería venir de `t.common.privacyPolicy`.
- **`src/app/i18n/translations.ts:18-51`** — la política genérica no tiene `notCollectedTitle`, así que la sección 02 muestra una lista con ✕ rojo sin encabezado que explique que la lista significa "no recopilamos".
- **`src/app/i18n/translations.ts:20`, `:55`, `:97`, `:142`, `:181`, `:233`, `:268`, `:310`, `:353`, `:391`** — las fechas "última actualización" son literales duplicados por locale y divergen entre sí (la genérica sigue en "16 de febrero de 2026" mientras las otras dicen septiembre/noviembre de 2026).
- **`src/app/hooks/useTranslation.tsx:25`** — el objeto `t` completo va en el contexto: todo consumidor se re-renderiza al cambiar de locale y el bundle completo de traducciones se envía a todas las rutas.
- **`src/data/apps.ts`** — el emoji `icon: "📝"` se reutiliza para `markdown-notes` y `daily-quotes`; `daily-quotes` merece uno propio.

---

## 5. Resumen

**A corregir ya:** C1–C4 (las cuatro afirmaciones de privacidad publicadas que no se corresponden con el comportamiento real de las apps).
**A corregir:** H2–H5 (texto corrupto visible en el manual ES, nombre antiguo en el manual EN, etiquetas de categoría incoherentes, contador de apps falso en la cabecera).
**Concentración del riesgo:** H5 + H6 + H7 de las noches anteriores (sincronización de compose, escáner de secretos, verificación de backup) siguen sin resolverse; y ninguna de las 4 apps con datos sensibles (SyncTrackers, Markdown Notes, LLMBox, MyBarTrack) tiene una política de privacidad propia y veraz.
