---
title: Datos, iCloud y copias
order: 7
---

Tus listas, notas y reseñas son tuyas: se guardan en tu dispositivo y en tu iCloud privado. No hay servidores de TrackHobbies con tu contenido.

## Sincronización con iCloud

- Usa tu base de datos privada de iCloud (CloudKit). Necesitas haber iniciado sesión en iCloud.
- No hay interruptor para desactivarla.
- Sin conexión, los cambios se guardan en el dispositivo y iCloud los sincroniza cuando vuelve la red (comportamiento normal de CloudKit).
- Si eliminas un título, la eliminación también se sincroniza con tus otros dispositivos.
- Los conflictos los resuelve iCloud, no la app.

### Estado de iCloud

En **Stats**, bajo el interruptor de analítica, verás la primera línea con uno de estos estados:

| Estado | Significado |
|---|---|
| **iCloud activo** | Todo en orden. |
| **Sin cuenta de iCloud** | No has iniciado sesión: la app funciona en local, sin sincronizar. |
| **iCloud restringido** | Restricciones del dispositivo impiden usarlo. |
| **iCloud no disponible ahora** | Problema temporal. |
| **No se pudo comprobar iCloud** | No se pudo consultar el estado. |

La segunda línea indica la **Última sincronización** con la hora y una palabra entre paréntesis: *import* (datos recibidos de otro dispositivo), *export* (datos enviados) o *setup*. Si todavía no ha ocurrido ninguna verás *Sin sincronizaciones todavía*. Si hay un fallo verás **Error de iCloud: código** en rojo, con un texto técnico que puedes seleccionar y copiar.

## Exportar a CSV

Pulsa el icono de compartir en la barra de cada pestaña. Exporta **todos** los elementos de ese tipo (no solo los filtrados) con la hoja de compartir de iOS. El archivo se llama `trackhobbies_book.csv`, `trackhobbies_series.csv` o `trackhobbies_game.csv`. El botón está desactivado si la lista está vacía.

Columnas, en este orden: `type`, `title`, `author_or_creator`, `external_id`, `rating`, `status`, `pages`, `current_page`, `season`, `episode`, `total_seasons`, `total_episodes`, `hours`, `start_date`, `end_date`, `review`, `image_url`, `summary`. Los campos van entre comillas; un campo vacío significa «sin valor». El estado se escribe con su código (`wishlist`, `not_started`, `in_progress`, `completed`, `archived`) y las fechas como `AAAA-MM-DD`. El porcentaje de lectura no se exporta a CSV.

## Importar un CSV de TrackHobbies

Pulsa el icono de importar de la pestaña y elige el archivo. En **Series** y **Juegos** solo se admiten CSV exportados desde TrackHobbies; si no, verás *El archivo no es un CSV exportado desde TrackHobbies*. Un CSV de TrackHobbies puede contener cualquier tipo y se añade a toda la biblioteca, desde la pestaña que lo abras. La fecha de última actualización de los importados se pone en el momento de importar.

## Importar desde Goodreads

Solo en la pestaña **Libros**.

1. Exporta tu biblioteca desde Goodreads (el CSV de *My Books*).
2. En **Libros** pulsa el icono **Importar CSV de Goodreads** y elige el archivo.
3. En la hoja **Importar desde Goodreads** verás *Importar N libros* y la opción **Buscar portadas y descripciones** (activada por defecto), que consulta cada libro por título y autor en Google Books.
4. Pulsa **Importar**. Una barra muestra el progreso.

**Qué se importa:**

| Goodreads | TrackHobbies |
|---|---|
| Título (sin el sufijo de serie, p. ej. «(Serie, #1)») | Título |
| Autor | Autor |
| ISBN13, o ISBN | Identificador |
| My Rating (0 = sin nota) | Nota |
| Number of Pages | Total de páginas |
| Date Read | Fecha de fin |
| My Review | Comentario |

Las estanterías se convierten en estados: `read` → **Completado**, `currently-reading` → **En progreso**, `to-read` → **Pendiente**, cualquier otra → **Sin empezar**. No se importa la fecha de inicio ni la página actual, ni siquiera de los libros que estás leyendo.

**Duplicados:** compara el título normalizado y el autor con tu biblioteca y dentro del propio archivo. Volver a importar el mismo archivo no añade nada. Al terminar verás *Añadidos: N. Omitidos (ya existían): M.*

**Portadas y descripciones:** con la opción activada se hace una búsqueda por libro, una tras otra, así que bibliotecas grandes tardan. Pone la portada del mejor resultado y rellena resumen, páginas y autor solo si estaban vacíos. Exige título parecido y apellido del autor; si nada encaja, lo salta. Si el servicio limita las peticiones, deja de enriquecer pero importa el resto. Sin la opción no habrá portadas ni resúmenes.

## Copia de seguridad (JSON)

En **Stats → Copia de seguridad**:

- **Exportar copia (JSON)** abre la hoja de compartir. El archivo se llama `trackhobbies_backup_AAAA-MM-DD.json` e incluye **todos** los campos y tipos, también las portadas subidas y el porcentaje de lectura. Está desactivado si la biblioteca está vacía.
- **Restaurar copia** abre el selector de archivos. **Solo añade lo que falta: no borra ni sobrescribe nada.** Al terminar verás *Añadidos: N. Omitidos (ya existían): M.*

Un elemento se considera ya existente si coincide su identificador o la combinación de tipo, título e identificador externo. Por eso restaurar no sirve para deshacer ediciones.

Si la copia es de una versión más nueva de la app, verás *La copia es de una versión más nueva de TrackHobbies. Actualiza la app.* Si el archivo no es una copia, *El archivo no es una copia de seguridad de TrackHobbies.*

## Créditos

Los datos de libros, series y juegos proceden de Google Books, TVmaze e IGDB. La pantalla **Créditos** enlaza a cada fuente.
