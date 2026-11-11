---
title: Escanear y filtros
order: 2
---

Todas las opciones de escaneo están en la barra lateral **Configuration**. Los cambios se aplican la próxima vez que pulses **Scan**.

## Opciones de la barra lateral

| Sección | Opción | Valor por defecto | Detalle |
|---|---|---|---|
| **Source** | Carpeta | Tu carpeta personal | Abre el selector de carpetas. Puedes elegir un volumen entero. |
| **Filters** | **Min Size** | 100 MB | Deslizador de 1 a 1000 MB, de 1 en 1. Solo se listan archivos de ese tamaño o más. |
| **Filters** | **Exclude system dirs** | Activado | Salta carpetas de caché y desarrollo (ver abajo). |
| **Extensions** | **Add...** | Vacío | Lista de extensiones a incluir. Vacío = todos los tipos. |
| **Options** | **Result Limit** | 50 | Deslizador de 0 a 500, de 10 en 10. En 0 muestra *None* (sin límite). |

> Los megabytes son decimales: 1 MB = 1.000.000 bytes, igual que el Finder. **Min Size** 100 MB equivale a 100.000.000 bytes.

## Filtrar por extensión

Escribe una extensión en **Add...** y pulsa Intro (o el botón **+**). Da igual si la escribes con punto, con mayúsculas o con espacios: `.MP4` se guarda como `mp4`. Cada extensión aparece como una etiqueta (por ejemplo `.mp4`); pulsa la **x** de la etiqueta para quitarla. No se repiten extensiones.

Si añades alguna, solo se listan archivos con esas extensiones. Los archivos sin extensión no entran cuando hay filtro.

## Qué excluye "Exclude system dirs"

Con la opción activada, se ignora todo lo que esté dentro de carpetas con estos nombres:

`.git`, `node_modules`, `__pycache__`, `Caches`, `.cache`, `.npm`, `.pip`, `.cargo`, `vendor`, `.cocoapods`, `.swiftpm`, `Pods`, `.build`, `DerivedData`

y los archivos llamados `.DS_Store`, `.Spotlight-V100`, `.Trashes`, `.fseventsd`, `.TemporaryItems` y `.DocumentRevisions-V100`.

> El nombre se compara con **cada tramo de la ruta completa**, incluidas las carpetas que están por encima de la que elegiste. Si escaneas una carpeta que está dentro de otra llamada `vendor` o `Caches`, no saldrá ningún resultado. Desactiva **Exclude system dirs** en ese caso.

No puedes añadir tus propias carpetas a excluir desde la interfaz.

## Qué cuenta como archivo

- Solo archivos normales. Las carpetas y los alias/enlaces simbólicos no aparecen.
- Los archivos y carpetas ocultos (los que empiezan por punto) se saltan siempre, aunque desactives **Exclude system dirs**.
- Los paquetes (`.app`, bibliotecas de Fotos, etc.) cuentan como una unidad y no se entra en ellos: sus archivos internos no aparecen.
- El tamaño es el tamaño lógico del archivo, el mismo que muestra el Finder en "Tamaño", no el espacio realmente ocupado en disco.

## Durante el escaneo

El escaneo corre en segundo plano y la ventana sigue respondiendo. Al empezar, la lista se vacía. Abajo aparece una barra de progreso con el texto **Scanning: <archivo>**.

> La barra solo se actualiza cada 100 archivos que cumplan tus filtros. Si hay menos de 100 coincidencias no verás la barra, solo el estado *Scanning...* bajo el título.

Para cancelar usa **⌘.** o el menú **Cancel Scan**. No hay botón de cancelar en la ventana.

> Al cancelar se descartan los resultados parciales: la lista queda vacía y no se guarda nada en el historial. Es normal que macOS muestre la notificación *Scan Error* con el texto *Scan was cancelled*.

## Orden y límite

El escaneo recoge todos los archivos que cumplen los filtros, los ordena por tamaño (mayor primero) y se queda con los primeros **Result Limit**. Por eso con límite 50 ves los 50 mayores, no 50 al azar. Después puedes reordenar la lista (ver [Resultados](/apps/filesizer/docs/results)), pero solo entre esos archivos.

## Errores

- Si la carpeta ya no existe, el escaneo falla con *Directory not found: <ruta>*.
- Si no hay acceso, falla con *Access denied: <ruta>*.

> Estos errores solo se anuncian con una notificación del sistema. La ventana no muestra ningún aviso: si denegaste las notificaciones, el escaneo parecerá no hacer nada.
