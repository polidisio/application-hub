---
title: Exportar a CSV o JSON
order: 5
---

Puedes guardar la lista de resultados en un archivo para abrirla en Numbers/Excel (CSV) o procesarla con scripts (JSON).

## Cómo exportar

1. Haz un escaneo (el botón **Export** está desactivado si la lista está vacía).
2. Pulsa **Export** en la barra de herramientas (o **⌘E**). Se abre la hoja **Export Results**.
3. Elige **Export as CSV** o **Export as JSON**.
4. Si sale bien, aparece el mensaje *CSV exported successfully!* (o *JSON exported successfully!*) y el nombre del archivo junto a *Saved to:*. El Finder se abre con el archivo seleccionado.
5. Pulsa **Close**.

## Dónde se guarda

En tu carpeta **Descargas**, con el nombre `bigfiles_export_<número>.csv` o `.json`, donde el número es la hora en segundos Unix (así nunca se sobrescribe un export anterior). No hay diálogo para elegir otro nombre o carpeta.

> Se exporta lo que ves en ese momento: si tienes texto en el cuadro de búsqueda, solo salen los archivos filtrados. Con el filtro vacío salen todos los resultados del escaneo, en el orden actual de la tabla.

> Si la exportación falla, la app no muestra ningún error: simplemente no aparece el mensaje de éxito. Dado que FileSizer solo tiene permiso sobre las carpetas que eliges, es posible que la escritura en Descargas esté bloqueada en algunas instalaciones. Ver [Preguntas frecuentes](/apps/filesizer/docs/faq).

## Formato CSV

Una cabecera y una fila por archivo, con codificación UTF-8:

| Columna | Contenido |
|---|---|
| `Name` | Nombre del archivo, entre comillas. |
| `Path` | Ruta completa, entre comillas. |
| `Size` | Tamaño en bytes (número). |
| `Modified` | Fecha y hora en formato corto del sistema, entre comillas. |
| `Extension` | Extensión en minúsculas, sin punto, entre comillas. |

> Las comillas dentro de un nombre no se escapan. Un archivo con `"` en el nombre puede desordenar las columnas.

## Formato JSON

Una lista (con sangrado legible) de objetos, uno por archivo:

| Campo | Contenido |
|---|---|
| `id` | Identificador interno (cambia en cada escaneo). |
| `path` | Ruta completa. |
| `name` | Nombre del archivo. |
| `size` | Tamaño en bytes. |
| `modifiedDate` | Fecha de modificación como número: segundos desde el 1 de enero de 2001 (UTC). |
| `extension_` | Extensión en minúsculas, sin punto. |

El campo `finderComment` no aparece, porque el escaneo no lee comentarios.
