---
title: Referencia de comandos
order: 3
---

Forma general: `exiftool-cli <comando> [opciones]`. Opciones globales: `--version` y `--help` (también `exiftool-cli <comando> --help`).

## extract

Muestra los metadatos de una foto en una tabla.

```bash
exiftool-cli extract foto.jpg
```

Salida de ejemplo (los valores decimales salen con seis decimales si son menores que 100, y con dos si no):

```
──────────────────────────────────────────────────
  foto.jpg
──────────────────────────────────────────────────

Camera
────────────────────
  Camera Make        Canon
  Camera Model       EOS R5

Date/Time
────────────────────
  Date/Time          2024:03:15 10:30:00
  Date Taken         2024:03:15 10:30:00

GPS
────────────────────
  Latitude           40.500000
  Longitude          -74.000000
  Altitude           100.00

Exposure
────────────────────
  Exposure           1/250
  F-Number           2.800000
  ISO                400
  Focal Length       50.000000
```

Los campos aparecen agrupados en **Camera**, **Date/Time**, **GPS**, **Exposure** e **Image**; los que la foto no tiene se omiten. Si no hay ninguno: `No EXIF metadata found`. Qué campos se leen exactamente está en [Formatos de exportación](/apps/exiftool-cli/docs/export-formats).

> Solo se leen metadatos de JPEG y TIFF. En un PNG el comando funciona pero siempre dice `No EXIF metadata found`.

## export

Guarda los metadatos de **una** foto en un archivo. El formato se deduce de la extensión de `-o`.

```bash
exiftool-cli export foto.jpg -o foto.json
exiftool-cli export foto.jpg -o foto.csv
```

| Opción | Descripción |
|---|---|
| `-o`, `--output` | Ruta del archivo de salida (obligatoria). Debe acabar en `.json` o `.csv`. |

Si la extensión es otra, falla con `Unsupported output format '.txt'. Use .json or .csv`. Si el archivo existe, se **sobrescribe** sin preguntar. La carpeta de destino debe existir (este comando no la crea).

## remove

Crea una copia de la foto sin metadatos EXIF.

```bash
exiftool-cli remove foto.jpg -o foto_limpia.jpg
exiftool-cli remove foto.jpg --keep-gps -o foto_limpia.jpg
```

| Opción | Descripción |
|---|---|
| `-o`, `--output` | Ruta de la copia (obligatoria). Se crean las carpetas que falten. |
| `--keep-gps` | Conserva solo los datos GPS y elimina el resto del EXIF. |

Al terminar muestra `Removed EXIF from foto.jpg → foto_limpia.jpg` y la variación de tamaño. Con `--keep-gps` añade `GPS data preserved`.

> **No hay "modificar en el sitio" por diseño.** Siempre escribes una copia con `-o`. Pero la herramienta no comprueba que `-o` sea distinto de la foto original ni pregunta antes de sobrescribir: si pasas la misma ruta, el comportamiento no está garantizado. Usa siempre un nombre distinto.

### Qué ocurre con la imagen

La foto se **vuelve a codificar**, no se copia byte a byte:

- JPEG: se guarda de nuevo con calidad 95. Es casi igual a la vista, pero no es idéntica ni conserva el tamaño exacto (puede crecer o encoger).
- TIFF y PNG: se guardan de nuevo con Pillow.
- Es probable que otros bloques de metadatos que no son EXIF (por ejemplo perfil de color ICC, XMP o IPTC) no se copien, porque la herramienta solo vuelve a escribir un bloque EXIF vacío o con GPS. No está verificado en todos los casos.
- En PNG, la herramienta escribe igualmente un bloque EXIF vacío.

## batch

Procesa todas las fotos de una carpeta. Se explica en [Procesar carpetas](/apps/exiftool-cli/docs/batch).

## interactive

Abre el menú interactivo. Ver [Modo interactivo](/apps/exiftool-cli/docs/interactive-mode).

## Errores y códigos de salida

| Situación | Resultado |
|---|---|
| Todo correcto | Código `0`. |
| Archivo inexistente (`extract`, `export`, `remove`) | Código `2`, mensaje de la propia herramienta de línea de comandos (click). |
| Formato no admitido, archivo ilegible, salida inválida | Mensaje con `✗` en rojo y código `1`. |
| Uso incorrecto (falta `-o`, opción desconocida) | Código `2` (error de uso de click). |

Mensajes habituales: `Unsupported format '.gif'. Use: ...`, `Cannot read EXIF from foto.jpg: ...`, `Cannot save out.jpg: ...`.
