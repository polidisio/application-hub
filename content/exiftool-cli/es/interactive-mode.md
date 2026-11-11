---
title: Modo interactivo
order: 2
---

El modo interactivo es un menú de texto para quien prefiere no recordar flags. Se abre con:

```bash
exiftool-cli interactive
```

> Con el comando `exiftool-cli` a secas verás la ayuda, no el menú. Alternativa equivalente: `python -m exiftool_cli` (sin argumentos abre el menú).

Para salir antes de tiempo, pulsa `Ctrl+C`.

## El menú

```
Main Menu
────────────────────────────────────────
  Selected: None

  [1] Select photos (file explorer)
  [2] Show EXIF preview
  [3] Export EXIF
  [4] Remove EXIF
  [0] Exit
```

Escribe el número y pulsa Intro. `Selected` indica cuántas fotos tienes elegidas. Si escribes una opción que no existe, el menú se vuelve a mostrar sin mensaje.

| Opción | Qué hace |
|---|---|
| `1` Select photos | Elige una o varias fotos. **Se añaden** a las ya elegidas (no se reemplazan; no hay opción para vaciar la selección salvo salir y volver a entrar). |
| `2` Show EXIF preview | Muestra la tabla de metadatos de cada foto seleccionada. |
| `3` Export EXIF | Exporta cada foto seleccionada a JSON o CSV. |
| `4` Remove EXIF | Crea copias sin metadatos de las fotos seleccionadas. |
| `0` Exit | Sale. |

## Elegir fotos

Cómo se eligen depende del sistema:

1. Si Python tiene `tkinter`, se abre un selector de archivos gráfico (varias fotos a la vez).
2. Si no, y estás en macOS, se abre el selector nativo mediante AppleScript (`osascript`).
3. En otros casos (por ejemplo Linux sin `tkinter`) se te pide **una ruta de archivo** escrita a mano, de una en una.

Las fotos con formato no admitido se saltan con un aviso.

## Exportar (opción 3)

1. Elige el formato: `json` o `csv` (por defecto `json`).
2. Responde `y` si quieres elegir la carpeta de salida con el explorador (solo macOS) o escríbela a mano; si pulsas Intro se usa la carpeta actual (`./`).
3. Se crea un archivo por foto, con el nombre de la foto y la extensión `.json` o `.csv`.

> Si dos fotos seleccionadas tienen el mismo nombre (de carpetas distintas), la segunda **sobrescribe** el archivo de la primera, sin aviso. Tampoco se avisa si el archivo ya existía.

## Eliminar metadatos (opción 4)

1. Te pregunta `Keep GPS data?` (por defecto no).
2. Eliges la carpeta de salida igual que al exportar.
3. Te pide confirmación final: `Remove EXIF from N files?` (por defecto no).
4. Cada copia se llama `<nombre>_clean<extensión>` y se muestra el cambio de tamaño.

Los originales no se modifican, porque siempre se añade `_clean` al nombre. Ver [Referencia de comandos](/apps/exiftool-cli/docs/commands) para el detalle de lo que se conserva.
