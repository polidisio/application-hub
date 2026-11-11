---
title: Primeros pasos
order: 1
---

FileSizer es una app para Mac que recorre una carpeta o un volumen y te enseña los archivos más grandes, para que decidas qué borrar y recuperes espacio. No necesita cuenta, no usa internet y no envía datos a ningún sitio.

## Requisitos

- Un Mac con macOS 13 (Ventura) o posterior.
- La app funciona dentro del *sandbox* de macOS: solo puede leer y modificar las carpetas que tú eliges.
- La interfaz está solo en inglés (no hay traducción al español). Esta guía usa los textos exactos que verás en pantalla.

> No hay pantalla de ajustes: el menú **FileSizer → Settings** abre una ventana vacía. Todas las opciones están en la barra lateral **Configuration**.

## Tu primer escaneo

1. Abre FileSizer. Verás la lista vacía con el mensaje *Configure your search and click Scan*.
2. En la barra lateral, bajo **Source**, pulsa la carpeta actual (o el botón **Select Directory** de la barra de herramientas) y elige la carpeta o el volumen que quieres revisar.
3. Ajusta el tamaño mínimo y los demás filtros (ver [Escanear y filtros](/apps/filesizer/docs/scanning)).
4. Pulsa **Scan** (o **⌘S**).
5. Cuando termine, la lista muestra los archivos ordenados de mayor a menor tamaño.

> Pulsa siempre **Select Directory** antes de la primera vez. La carpeta inicial es tu carpeta personal, pero por el *sandbox* la app no tiene permiso para leerla hasta que la elijas tú en el selector. Si no eliges nada, el escaneo puede terminar sin resultados y sin avisar.

## Un recorrido por la ventana

La ventana tiene tres columnas:

| Columna | Qué contiene |
|---|---|
| **Configuration** (izquierda) | Origen, filtros, extensiones, límite de resultados y botón **History**. |
| Lista (centro) | La tabla de archivos con las columnas **Name**, **Size** y **Modified**. El título muestra la carpeta (con `~` para tu carpeta personal) y debajo el estado: *Ready to scan*, *Scanning...*, *N files found* o *N of M files*. |
| Detalle (derecha) | Datos del archivo seleccionado y acciones. Sin selección verás *No Selection*. |

En la barra de herramientas: **Select Directory**, **Scan**, **Export** y el cuadro de búsqueda *Search files...*.

## Atajos de teclado

| Atajo | Acción |
|---|---|
| ⌘S | **Scan** |
| ⌘N | **New Scan** (menú Ver) |
| ⌘. | **Cancel Scan** (solo durante un escaneo) |
| ⌘E | **Export** |
| ⌘F | Enfocar el cuadro de búsqueda |
| Espacio | Vista previa (QuickLook) del archivo seleccionado |
| ⌘⌫ | **Move to Trash** del archivo seleccionado |
| Esc | Cierra la vista previa |

## Privacidad y permisos

- FileSizer no tiene código de red ni analíticas: nada sale de tu Mac.
- Solo accede a la carpeta que eliges en el selector y a los archivos de dentro. No pide *Acceso total al disco*.
- Al abrir la app por primera vez macOS te pide permiso para enviar notificaciones. Se usan para avisar al terminar un escaneo, al fallar o al mover archivos a la Papelera. Puedes denegarlo sin perder funciones.
- El historial se guarda en local, en la carpeta de datos de la app (ver [Historial](/apps/filesizer/docs/history)).

Más datos de privacidad de todas las apps en la [política de privacidad](/privacy).

## Siguientes pasos

- [Escanear y filtros](/apps/filesizer/docs/scanning)
- [Resultados y acciones sobre archivos](/apps/filesizer/docs/results)
- [Historial](/apps/filesizer/docs/history)
- [Exportar a CSV o JSON](/apps/filesizer/docs/export)
- [Preguntas frecuentes](/apps/filesizer/docs/faq)
