---
title: Películas y series
order: 4
---

Las películas y series de una fuente aparecen en las filas **Películas** y **Series** de su pantalla. Solo las verás si la fuente tiene ese contenido: una cuenta Xtream con catálogo, o una lista M3U cuyas direcciones contienen `/movie/` o `/series/` (ver [Listas IPTV y cuentas Xtream](/apps/streamaura/docs/iptv-sources)).

Lo que tienes en tu NAS está en otro sitio: ver [Mi biblioteca (NAS)](/apps/streamaura/docs/my-library).

## Explorar el catálogo

Al abrir **Películas** o **Series** verás:

| Fila | Contenido |
|---|---|
| **Favoritas** | Tus películas o series marcadas con el corazón. |
| **Todas** | Todo el catálogo de ese tipo. |
| Categorías | Una por cada categoría de la fuente, con su recuento. Las que no tienen nombre van a **Sin categoría**. |

Cada categoría es una rejilla de pósters ordenada alfabéticamente. El campo **Buscar películas** (o **Buscar series**) busca por nombre en todo el catálogo de la fuente.

> Cada rejilla muestra como máximo **600 resultados**. Si hay más verás *Se muestran los primeros 600 resultados. Usa la búsqueda para acotar.*

## Ficha de una película

Muestra el póster, el título, la puntuación y una línea con año, duración, género y categoría cuando se conocen. Debajo, la sinopsis, el **Director** y el **Reparto**.

- La sinopsis, el director, el reparto, la duración y el año solo los ofrecen las cuentas Xtream. En listas M3U la ficha es más básica.
- **Reproducir** empieza desde el principio. Si ya viste más de unos segundos y no la terminaste, el botón pasa a **Continuar desde m:ss** y aparece **Empezar de nuevo**.
- El corazón de la barra superior (**Añadir a favoritas** / **Quitar de favoritas**) la guarda en **Favoritas**.

## Ficha de una serie

Muestra el póster, la puntuación, la categoría y la sinopsis, y debajo las temporadas y los episodios.

- Si hay más de una temporada, un selector horizontal (**Temporada 1**, **Temporada 2**…) cambia la lista.
- Cada episodio muestra su número, su título (si no tiene, **Episodio N**), su duración, una barra de progreso si lo empezaste y una marca de verificación si lo terminaste.
- En cuentas Xtream los episodios se descargan al abrir la serie. Si falla verás **No se pudieron cargar los episodios** con el motivo y el botón **Reintentar**. En listas M3U los episodios ya vienen en el catálogo local.
- Al reproducir un episodio, la cola es el resto de episodios de esa temporada: puedes saltar al anterior o siguiente desde el reproductor. Al terminar uno no empieza el siguiente solo.

## Continuar viendo

La fila **Continuar viendo** de la pantalla de una fuente reúne las películas y episodios que empezaste y no terminaste, el más reciente primero.

- Toca uno para reanudarlo donde lo dejaste.
- Para sacarlo de la lista, mantén pulsado y elige **Quitar de la lista**.
- Si no hay nada pendiente verás **Nada pendiente** y *Lo que empieces a ver aparecerá aquí.*

### Cómo se guarda el progreso

- Solo se guarda en películas y episodios; los canales en directo no tienen progreso.
- Se guarda cada pocos segundos mientras reproduces y al cerrar el reproductor.
- Si has visto el 95 % o más, se considera terminado: sale de **Continuar viendo** y la próxima vez empieza desde cero.
- Solo se reanuda si estabas más allá de los 5 segundos.
- Puedes borrar todo el progreso en **Ajustes** (ver [Ajustes](/apps/streamaura/docs/settings)).
