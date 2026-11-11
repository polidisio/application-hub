---
title: Resultados y acciones
order: 3
---

Al terminar un escaneo, la columna central muestra una tabla con los archivos encontrados y la columna derecha el detalle del que selecciones.

## La lista de resultados

| Columna | Contenido |
|---|---|
| **Name** | Icono, nombre del archivo y debajo su ruta completa. |
| **Size** | Tamaño (por ejemplo `1,2 GB`) y una barrita que indica su tamaño relativo respecto al mayor de la lista. |
| **Modified** | Fecha y hora de última modificación. |

Pulsa el encabezado de una columna para ordenar por ella; púlsalo otra vez para invertir el orden. Al terminar el escaneo la lista está ordenada por **Size**, de mayor a menor.

## Buscar dentro de los resultados

El cuadro *Search files...* de la barra de herramientas (⌘F) filtra al instante por nombre **o** ruta, sin distinguir mayúsculas. El estado bajo el título pasa a *N of M files*. Si nada coincide ves *No files match your filter*.

> La búsqueda solo filtra lo ya escaneado; no vuelve a recorrer el disco. Además, la exportación incluye únicamente lo que ves con el filtro aplicado (ver [Exportar](/apps/filesizer/docs/export)).

## Panel de detalle

Al seleccionar un archivo, el panel derecho muestra:

- Icono, nombre y extensión en mayúsculas.
- **Metadata**: **Size**, **Modified** y **Path**.
- **Finder Comment**: el comentario del Finder del archivo.
- Botones **Reveal in Finder**, **QuickLook** y **Move to Trash**.

## Acciones sobre un archivo

Puedes usarlas con clic derecho sobre la fila (menú contextual) o desde el panel de detalle.

| Acción | Qué hace |
|---|---|
| **Reveal in Finder** | Abre el Finder con el archivo seleccionado. |
| **QuickLook** | Abre la vista previa de macOS. También con la barra espaciadora; Esc la cierra. |
| **Move to Trash** | Mueve el archivo a la Papelera (⌘⌫). |

### Mover a la Papelera

Primero aparece la pregunta **Move to Trash?** con el nombre del archivo; confirma con **Move to Trash** o cancela con **Cancel**. El archivo no se borra definitivamente: puedes recuperarlo desde la Papelera del Finder hasta que la vacíes. Al confirmar, desaparece de la lista y macOS puede mostrar la notificación *Files Removed*.

> Solo se mueve un archivo cada vez; no hay selección múltiple.
>
> Si macOS no deja mover el archivo (permisos, volumen de solo lectura, etc.), la app no muestra ningún error: la fila sigue en la lista. Comprueba en el Finder.
>
> El espacio no se libera hasta que vacíes la Papelera.

### Comentario del Finder

En **Finder Comment** verás *No comment* hasta que pulses **Edit**: entonces se carga el comentario actual del archivo en un cuadro de texto. Escribe y pulsa **Save**. Si guardas el cuadro vacío, se elimina el comentario.

> Esta función es la menos fiable de la app. Guarda el texto directamente en los metadatos del archivo con una herramienta del sistema (`xattr`) y puede no funcionar dentro del *sandbox*; la app no avisa si falla. Comprueba el resultado en el Finder (Obtener información). Al cambiar de archivo pulsa **Edit** de nuevo para cargar su comentario.

## Más sobre el resultado

- [Historial](/apps/filesizer/docs/history) para repetir un escaneo.
- [Exportar a CSV o JSON](/apps/filesizer/docs/export).
