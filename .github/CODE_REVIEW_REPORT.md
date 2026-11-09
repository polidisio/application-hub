# Code Review Report: application-hub
Generated: 2026-11-09T00:19:23+01:00

Public repo. CRITICAL findings below were verified line-by-line against main (672b9e8) before publication.

# Code Review: application-hub

**Scope:** `src/app/i18n/translations.ts`, `src/data/apps.ts`, `src/app/components/{Header,AppCard,AppModal,PrivacyView}.tsx`, `src/app/hooks/useTranslation.tsx`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/privacy/**` (6 páginas)
**Método:** lectura completa de los 16 ficheros listados contra el árbol de `main` (`672b9e8`).
**Repo:** público.

> **Nota sobre la sección CRITICAL:** los cuatro hallazgos marcados CRITICAL fueron **verificados uno a uno contra el código concreto** (fichero y línea) antes de publicar este PR, según el procedimiento de revisión nocturna. Cada referencia de esta sección se comprobó contra `main` (`672b9e8`); las líneas que el modelo original 신고 de forma incorrecta se han corregido aquí (se indican con `corregido`). No hay hallazgos CRITICAL sin verificar en este informe.

> **Aviso de duplicación:** el repositorio no ha recibido commits nuevos desde `672b9e8` (2026-11-02), por lo que este informe repite en gran medida lo ya reportado en los PR de revisión abiertos #4, #5, #6, #7, #8 y #9. Cada hallazgo de abajo indica a qué PR previo corresponde, para que puedas deduplicar y cerrar en bloque (no se ha cerrado ninguno: requiere tu OK).

---

## 1. CRITICAL (must fix)

### C1. MyBarTrack se anuncia como "sin recopilación de datos" mientras su política de privacidad dice que usa PostHog
**Ficheros:** `src/data/apps.ts:229` (ES) / `src/data/apps.ts:237` (EN), `src/app/privacy/mybartrack/page.tsx:8`, `src/app/i18n/translations.ts:59` / `:272`, `src/data/apps.ts:304` (`privacyUrl: "/privacy/mybartrack"`)

El catálogo lista como feature de MyBarTrack *"Sin recopilación de datos personales"* / *"No personal data collection"*. Su página de privacidad enlazada desde la tarjeta (`privacyUrl` en `apps.ts:304`) renderiza `t.privacyAnalytics`, cuyo `dataCollectedText` dice *"utilizamos PostHog (posthog.com), un servicio de analytics. Recopilamos de forma ANÓNIMA"* (ES `:59`) / *"we use PostHog (posthog.com), an analytics service"* (EN `:272`).

**Verificado:** `apps.ts:229` → `"Sin recopilación de datos personales"`; `apps.ts:237` → `"No personal data collection"`; `privacy/mybartrack/page.tsx:8` → `<PrivacyView p={t.privacyAnalytics} />`; `translations.ts:59` → PostHog; `translations.ts:272` → PostHog. (El modelo original señaló `apps.ts:236` para la versión EN: la línea correcta es **237**.)

**Impacto:** contradicción directa entre el copy de marketing y el documento legal que ve el usuario. Es el hallazgo más sensible de los tres porque toca cumplimiento normativo de un producto en la App Store.

**Fix:** decidir cuál es la verdad y hacer que ambas piezas coincidan. Si la app usa PostHog → eliminar los bullets "Sin recopilación de datos personales" / "No personal data collection" y añadir un bullet "analítica opcional" como tiene TrackHobbies. Si no usa analítica → bloque propio `privacyMyBarTrack` en vez de reutilizar `privacyAnalytics`.

*Duplica: PR #5 H4 y PR #9 C3.*

### C2. La política de privacidad genérica contradice las políticas por app publicadas en el mismo sitio
**Ficheros:** `src/app/i18n/translations.ts:24`, `:28` (ES genérica) / `:237`, `:241` (EN genérica) vs `:59`, `:101`, `:272`, `:314`

La política genérica `t.privacy` afirma *"Nuestras aplicaciones NO recopilan ningún dato personal del usuario."* (ES `:24`) y su lista incluye *"No usamos analytics"* (ES `:28`); la versión inglesa dice *"Our apps do NOT collect any personal user data."* (EN `:237`) y *"We do not use analytics"* (EN `:241`). Pero `privacyAnalytics` (ES `:59` / EN `:272`) y `privacyTrackHobbies` (ES `:101` / EN `:314`) sí describen uso de PostHog.

**Verificado:** `:24` → "Nuestras aplicaciones NO recopilan ningún dato personal del usuario."; `:28` → "No usamos analytics"; `:237` → "Our apps do NOT collect any personal user data."; `:241` → "We do not use analytics"; `:59`/`:272` → PostHog; `:101`/`:314` → PostHog. (El modelo original señaló `:37`/`:41` para la versión EN: **corregido**, esas líneas contienen `permissionsText`/`children` de la versión española; las líneas EN correctas son **237** y **241**.)

`t.privacy` se usa en `/privacy` (enlazado desde el pie, `page.tsx:86`) y como destino por defecto de cualquier app sin `privacyUrl` (`AppModal.tsx:226`). Quien audite el sitio ve dos afirmaciones mutuamente excluyentes.

**Fix:** reescribir `t.privacy` como una umbrella policy real: "Algunas de nuestras aplicaciones usan analítica opcional…", listar explícitamente cuáles, y dar `privacyUrl` a toda app cuyo comportamiento difiera de la línea base.

*Duplica: PR #9 C1.*

### C3. Caracteres chinos corruptos en el manual en español de ThinkDeck Study
**Ficheros:** `src/data/apps.ts:140` y `src/data/apps.ts:164`

`apps.ts:140` contiene *"3. Inicia una sesión de estudio y翻转 la tarjeta para ver la respuesta"* y `apps.ts:164` *"‑ Toca la tarjeta para翻转 y ver la respuesta"*. `翻转` ("voltear" en chino) aparece literalmente en el texto en español que se renderiza en el modal de la app.

**Verificado:** `grep -n "翻转" src/data/apps.ts` → exactamente dos coincidencias, líneas **140** y **164**. El texto inglés equivalente (`apps.ts:141`, `apps.ts:200`) está limpio y dice "flip the card".

**Fix:** sustituir por "y voltea" / "para voltear" (coherente con el EN). **Nota:** el PR #3 (abierto) ya corrige estas dos líneas — su fix dice *"para voltea"* en `:164`, que es una construcción gramaticalmente incorrecta en español; conviene ajustarla a *"para voltear"* al fusionar.

*Duplica: PR #5 H2; ya corregido por el PR #3 (abierto).*

### C4. La política de privacidad de SyncTrackers omite el permiso de HealthKit que la app exige
**Ficheros:** `src/app/i18n/translations.ts:83` (ES) / `:296` (EN), `src/app/privacy/synctracers/page.tsx:8`, `src/data/apps.ts:397` / `:410`

`privacyAnalytics.permissionsText` afirma *"Nuestras aplicaciones no requieren permisos especiales más allá del acceso básico necesario para su funcionamiento"* (ES `:83`) / *"Our apps do not require special permissions beyond basic access needed for functionality"* (EN `:296`). SyncTrackers, en cambio, **existe para leer datos de workouts de HealthKit**: `apps.ts:397` → *"Lee workouts de Apple Health / HealthKit"* y `apps.ts:410` → *"1. Abre la app y concede permisos de HealthKit"*. La política no menciona HealthKit en ningún punto.

**Verificado:** `:83` → texto `permissionsText` ES citado; `:296` → equivalente EN citado; `privacy/synctracers/page.tsx:8` → `<PrivacyView p={t.privacyAnalytics} />`; `apps.ts:397` y `apps.ts:410` citados arriba.

**Impacto:** es exactamente el tipo de omisión que una política de privacidad debe declarar. Se suma al hecho de que el mismo bloque afirma bajo "NO recopilamos" *"Datos de salud reales"* (`translations.ts:69`) / *"Actual health data"* (`translations.ts:282`) para una app cuyo producto es leer workouts.

**Fix:** bloque propio `privacySyncTrackers` cuyo `permissionsText` nombre el acceso de lectura de workouts de HealthKit/Apple Health y cuyo `dataCollectedText` describa la extracción local y la sincronización privada por iCloud, declarando explícitamente que ningún dato de entrenamiento llega a los servidores de Polidisio.

*Duplica: PR #9 C2.*

---

## 2. HIGH (should fix)

- **H1. El número de apps en la cabecera está hardcodeado y es incorrecto — 9 mostrado, 14 en el catálogo.** `src/app/components/Header.tsx:63` → `"9 apps · macOS · iOS · Web"`. `src/data/apps.ts` contiene 14 entradas (7 iOS, 4 Mac, 3 "desarrollo"). Verificado: 14 objetos con `id:` en `apps.ts`; conteo por `category:` → ios ×7, mac ×4, desarrollo ×3. Además la cadena no está localizada en ningún idioma. **Fix:** `{apps.length} apps · …`.
  *Duplica: PR #4 H1, PR #5 H1, PR #6 H2, PR #7 H1.*
- **H2. Los títulos de las políticas de MyBarTrack y SyncTrackers no nombran la app.** `translations.ts:53` → `title: "Política de Privacidad"` y `:266` → `title: "Privacy Policy"`, renderizados por `privacy/mybartrack/page.tsx:8` y `privacy/synctracers/page.tsx:8`. Las demás policies sí se autobrotan: `"Política de Privacidad · TrackHobbies"` (`:95`), `· StreamAura` (`:137`), `· NodusCli` (`:176`), y sus equivalentes EN. Ambas apps comparten además un documento idéntico, así que no hay forma de saber cuál es cuál. **Fix:** `title` por app, o un bloque base con spread.
- **H3. El manual en inglés de MyBarTrack sigue usando el nombre antiguo "DrinkTrack".** `src/data/apps.ts:268` → `"🎯 What is DrinkTrack?"` y `:269` → `"DrinkTrack is an app to track your daily beverage consumption…"`. El nombre del catálogo es `MyBarTrack` (`apps.ts:221`, slug `mybartrack` en `apps.ts:303`, `privacyUrl` en `:304`), y el manual en español (`apps.ts:242-243`) sí dice "MyBarTrack". **Fix:** sustituir "DrinkTrack" → "MyBarTrack" en `howToUseEn`.
  *Duplica: PR #5 H3.*
- **H4. `<html lang>` está hardcodeado a español mientras la UI cambia de idioma en cliente.** `src/app/layout.tsx:29` → `<html lang="es">`; `useTranslation.tsx:19` cambia a `en` para cualquier navegador no español tras el montaje. Los lectores de pantalla aplican reglas de pronunciación del español a texto inglés. **Fix:** `document.documentElement.lang = locale` en un efecto, o resolver el locale en servidor.
  *Duplica: PR #5 H5.*
- **H5. Cadenas de UI en inglés hardcodeadas en la página principal pese al toggle ES/EN.** `src/app/page.tsx:10` (`"All"`), `:13` (`"Dev"`), `:14` (`"Games"`), `:64` (*"No apps in this category yet."*), `:86` (*"Privacy Policy"*). El estado vacío está íntegramente en inglés en un sitio cuyo locale por defecto es español. **Fix:** mover a `translations.ts`.
- **H6. El modal no es accesible: sin `role`, sin etiquetado, sin gestión de foco.** `AppModal.tsx:53-56` — el overlay es un `div` con `onClick`, sin `role="dialog"` ni `aria-modal`; el botón de cierre (`:64-71`) es solo un SVG sin `aria-label`; el foco nunca entra en el modal, no se atrapa con Tab y no se devuelve a la tarjeta al cerrar. **Fix:** `role="dialog" aria-modal="true" aria-labelledby`, `aria-label` en el botón, mover/restore de foco y trampa de Tab.
  *Duplica: PR #4 H4.*
- **H7. El desmontaje diferido del modal puede llamar a un setter del padre tras el unmount.** `AppModal.tsx:26-29` — `setTimeout(onClose, 200)` dentro de `handleClose`, sin guardar ni limpiar el timer. Si el componente se desmonta dentro de esos 200 ms, el callback se ejecuta contra un árbol desmontado. Además el padre borra `selectedApp` 200 ms después de empezar el fundido, así que el fundido nunca se ve. **Fix:** guardar el id del timer en un ref y limpiarlo en el cleanup del efecto, o animar la salida y llamar a `onClose` en `onTransitionEnd`.
  *Duplica: PR #6 H1 (variante de reset de pestaña).*

---

## 3. MEDIUM (consider fixing)

- **M1. Las traducciones `en` nunca se tipan contra `es`.** `src/app/i18n/translations.ts:431` → `export type TranslationKeys = typeof translations.es;`. Una clave que falte en `en` compila limpio y sale como `undefined` en pantalla. **Fix:** `const en: typeof es = {...}`.
- **M2. El locale no se persiste y el primer pintado siempre es en español.** `useTranslation.tsx:15` (`useState<Locale>("es")`) y `:17-23` (detección tras el montaje). Dos consecuencias: flash de español para cada visitante anglófono y pérdida de la elección ES/EN al recargar. **Fix:** `localStorage` + inicializador `useState(() => ...)`.
- **M3. `categoryLabels` es solo-español y se usa dentro de la UI en inglés.** `src/data/apps.ts:1055-1060` (`desarrollo: "Desarrollo"`, `juego: "Juego"`), usado en `AppModal.tsx:99`. Además la insignia es inconsistente entre superficies: `AppCard.tsx:51` pone la categoría en mayúsculas cruda (`"IOS"`) mientras el modal usa `categoryLabels` (`"iOS"`). **Fix:** `categoryLabelsEn` y unificar ambas superficies.
- **M4. Los contadores de categoría se recalculan en cada render.** `src/app/page.tsx:51` → `apps.filter((a) => a.category === cat.id).length` dentro del JSX, para las 5 categorías en cada render. **Fix:** `useMemo`.
- **M5. La pestaña inicial del modal es "manual" aunque la app no tenga manual.** `AppModal.tsx:23` (`useState<"manual" | "screenshots">("manual")`) y `:50` (`hasTabs`), que es true si existe manual **o** capturas; `howToUse`/`howToUseEn` son opcionales (`apps.ts:13-14`). Una app con capturas y sin manual renderiza el cuerpo vacío. **Fix:** inicializar la pestaña desde las props.
- **M6. El texto alternativo de las capturas es solo-inglesero y no descriptivo.** `AppModal.tsx:185` → `alt={\`Screenshot ${index + 1}\`}`. **Fix:** localizar e incluir el nombre de la app.
- **M7. Todas las páginas de privacidad son client-only: no hay SSR ni metadata por ruta.** `src/app/privacy/page.tsx:1` y las 5 rutas por app — todas empiezan por `"use client"` (verificado). Ninguna puede exportar `metadata`, así que las 6 comparten el título raíz `"ApplicationHub - Mis Aplicaciones"` (`layout.tsx:13`). Para documentos enlazados desde la App Store es un problema de descubrimiento y de compartir enlace. **Fix:** componente servidor que exporte `metadata` + hijo cliente.
  *Duplica: PR #4 H5, PR #7 H3.*
- **M8. `PrivacyText` duplica a mano la forma de las traducciones.** `src/app/components/PrivacyView.tsx:5-13` — la interfaz repite clave por clave la forma de `translations`. Añadir un campo a una policy y olvidarlo en la interfaz da error de tipos; lo contrario (que la interfaz conserve un campo que ninguna policy tiene) falla en silencio. **Fix:** derivar el tipo de `translations`.

---

## 4. MINOR (nice to have)

- `src/data/apps.ts:6` — `nameEn?: string` está declarado en la interfaz `App` pero no se lee en ningún sitio (`AppCard.tsx:56` y `AppModal.tsx:95` siempre renderizan `app.name`).
- `src/data/apps.ts:1029-1030` — la descripción de `exiftool-cli` incluye la URL cruda, duplicando el campo `website` de `:1051`.
- `src/data/apps.ts:172` y `:176-177` — el manual en español de ThinkDeck incluye cadenas de UI en inglés ("Study", "All Cards", "Due Today", "Correct", "Incorrect"), y el inglés hace lo propio con "Statistics".
- `src/app/components/AppCard.tsx:9-12` y `src/app/components/AppModal.tsx:9-14` — el mapa `categoryBadgeClass` está duplicado literalmente en dos componentes.
- `src/app/components/AppModal.tsx:37` y `:41` — `document.body.style.overflow` se restaura a `""`, descartando cualquier valor previo inline.
- `src/app/components/AppModal.tsx:31-43` — el efecto depende de `handleClose`, que depende de `onClose`, que es una arrow inline en `page.tsx:93`: el listener se desmonta y recrea en cada render del padre.
- `src/app/components/AppModal.tsx:49` — `app.screenshotsEn ? app.screenshotsEn : app.screenshots` hace fallback silencioso a las capturas en español en la UI en inglés.
- `src/app/hooks/useTranslation.tsx:28` — el objeto del contexto se recrea en cada render del provider, re-renderizando todos los consumidores aunque el locale no haya cambiado.
- `src/app/layout.tsx:13-16` — el título y la descripción del metadata son solo-españoles y nunca localizados.
- `src/app/page.tsx:14` — la categoría "Games" mapea a `juego`, que tiene cero apps: el filtro siempre lleva al estado vacío.
- `src/app/components/PrivacyView.tsx:167-176` — email (`info@saraiba.eu`) y web (`https://saraiba.eu`) hardcodeados en el componente en vez de venir del payload de traducción.
  *Duplica: PR #7 H4.*

---

_(Informe completo en `.github/CODE_REVIEW_REPORT.md`.)_
