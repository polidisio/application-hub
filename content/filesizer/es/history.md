---
title: Historial
order: 4
---

FileSizer recuerda los ajustes de tus escaneos para que puedas repetirlos con un clic.

## Qué se guarda

Cada vez que un escaneo termina con **al menos un archivo**, se añade una entrada al historial. Se guardan **los ajustes** del escaneo (carpeta, tamaño mínimo, extensiones, límite, **Exclude system dirs** y el texto de búsqueda), **no la lista de archivos**. Los escaneos cancelados, con error o sin resultados no se guardan.

Los datos están en una base de datos local (`history.sqlite3`, en la carpeta de datos de la app dentro del *sandbox*). No se sincronizan con iCloud ni con otros Macs.

## Abrir el historial

Pulsa **History** al final de la barra lateral. Se abre la hoja **Scan History**, con los escaneos más recientes primero. Cada fila muestra la carpeta, la fecha y tres datos: archivos, tamaño total y tamaño mínimo (por ejemplo *50 MB+*).

> Las entradas guardadas muestran siempre *0 files* y *Zero KB* como total, porque el historial no conserva la lista de archivos. Úsalas para reconocer el escaneo por carpeta, fecha y tamaño mínimo (*N MB+*).

Si no hay nada, verás *No scan history*.

## Repetir un escaneo

Pulsa una fila, o clic derecho → **Use This Profile**. La hoja se cierra y los ajustes se cargan en la barra lateral.

> Cargar un perfil **no lanza el escaneo**: pulsa **Scan** (⌘S) para ejecutarlo. Si tu texto de búsqueda actual es distinto, también se sustituye por el de la entrada.

## Borrar

- Clic derecho sobre una fila → **Delete** (borra solo esa).
- **Clear All** (arriba a la derecha) vacía todo el historial.

> **Clear All** no pide confirmación y no se puede deshacer. No toca ningún archivo de tu disco, solo el historial.
