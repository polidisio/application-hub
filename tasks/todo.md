# Modernización ApplicationHub + wiki de manuales

## Decisiones (confirmadas por Jose)
- Rutas: `/apps/[slug]` (ficha) + `/apps/[slug]/docs/[page]` (manual/wiki). `/privacy/*` **no se toca** (URLs y texto idénticos).
- Contenido: Markdown en `content/<slug>/<es|en>/*.md` con frontmatter (`title`, `order`).
- Alcance 1ª entrega: rediseño + motor wiki + manual completo de 3 pilotos: TrackHobbies, SyncTrackers, DrinkTrack (leyendo su código real en ~/Projects). Resto migra `howToUse` actual a 1 página "Guía" y se amplía por fases.
- Diseño: tema claro/oscuro automático (prefers-color-scheme), editorial, acento violeta actual, buscador + filtros plataforma.
- Se mantiene: bilingüe ES/EN con `useTranslation` (detección navegador + toggle), `PrivacyView`, claves `privacy*` de `translations.ts`.

## Pasos
1. **Base de diseño**: tokens claro/oscuro en `globals.css`, tipografía legible, quitar glass/float excesivo, `layout.tsx` (lang dinámico, metadata). Header sticky compacto (logo, buscar, ES/EN, nav Apps/Privacidad).
2. **Home**: hero corto, buscador (nombre/descr.) + filtros iOS/Mac/Dev/Juegos, grid de cards (icono grande, categoría, descr., enlaces Manual/Privacidad). Card enlaza a `/apps/[slug]` (se elimina `AppModal`).
3. **Ficha `/apps/[slug]`**: cabecera con icono + botones (App Store/Web/Manual/Privacidad), galería de capturas con lightbox nativo (`<dialog>`), funciones, cómo funciona. `generateStaticParams` desde `apps.ts`.
4. **Motor wiki**: `src/lib/docs.ts` (lee `content/`, ordena por `order`, devuelve es+en), render markdown (dep nueva: `react-markdown` + `remark-gfm`; sin MDX), `/apps/[slug]/docs/[page]`: sidebar de páginas, TOC por headings, anterior/siguiente, buscador sobre títulos, fallback a ES si falta página en EN (aviso). Responsive: sidebar → menú desplegable en móvil.
5. **Migración**: `howToUse`/`howToUseEn` de las 14 apps → `content/<slug>/<lang>/guia.md` (script one-shot, luego borrar campos de `apps.ts`).
6. **Manuales piloto** (es+en, 5-8 páginas c/u: intro, instalación/primeros pasos, funciones, sincronización/datos, ajustes, FAQ/solución de problemas, privacidad): TrackHobbies, SyncTrackers, DrinkTrack. Fuente: código + metadatos en ~/Projects/{TrackHobbies,SyncSalud,DrinkTrack}.
7. **Verificar**: `npm run lint && npm run build`, `/privacy/*` sin diff de texto, revisión visual móvil/tablet/escritorio claro+oscuro, enlaces internos, SSG de todas las rutas.
8. **Docs**: actualizar `CLAUDE.md` (estructura, cómo añadir una app/manual) y README breve.

## Fuera de alcance (por ahora)
Manuales completos del resto de apps, búsqueda full-text, i18n por URL (`/es`, `/en`) — el idioma sigue siendo por selector.
