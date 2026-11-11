---
title: Preguntas frecuentes
order: 6
---

## Escribo `exiftool-cli` y sale la ayuda, no el menú

Es lo que hace el código actual. Para abrir el menú usa `exiftool-cli interactive`. Ver [Modo interactivo](/apps/exiftool-cli/docs/interactive-mode).

## ¿Necesito instalar `exiftool` (Perl)?

No. Usa las bibliotecas de Python Pillow y piexif. El nombre es parecido, pero son proyectos distintos.

## ¿Modifica mis fotos originales?

No: `remove` y `batch --remove` escriben **copias**. Pero no se comprueba que el destino sea distinto del origen ni se pide confirmación al sobrescribir (salvo en el menú interactivo, que pide confirmar antes de eliminar). Usa siempre un nombre o carpeta distintos. Ver [Referencia de comandos](/apps/exiftool-cli/docs/commands).

## ¿Se pierde calidad al eliminar el EXIF?

Los JPEG se vuelven a guardar con calidad 95, así que no son idénticos bit a bit, aunque a simple vista se ven igual. Es probable que también se pierdan otros bloques como el perfil de color o XMP.

## `extract` no muestra nada en mi PNG

Los PNG no se leen: solo se extraen metadatos de JPEG y TIFF. Verás `No EXIF metadata found`.

## Faltan campos que sí tiene mi foto

Solo se leen 18 campos concretos. Ver [Formatos de exportación](/apps/exiftool-cli/docs/export-formats). Tampoco se leen metadatos XMP ni IPTC.

## `Unsupported format '.heic'`

Solo se admiten `.jpg`, `.jpeg`, `.png`, `.tif` y `.tiff`. Otros formatos (HEIC, RAW, GIF...) se rechazan.

## `Unsupported output format` al exportar

La ruta de `-o` debe acabar en `.json` o `.csv`.

## En batch dice `0 success` o no procesa nada

Comprueba la ruta de `--folder`, que haya fotos con extensión admitida y que, si están en subcarpetas, hayas añadido `--recursive`.

## ¿Funciona en Windows?

No está declarado: el proyecto indica macOS y Linux. El selector nativo de archivos con AppleScript es solo de macOS.

## ¿Se envían mis fotos o datos a algún sitio?

No. El código no hace ninguna conexión de red: todo se procesa en tu equipo. No hay cuentas ni telemetría. Más información general en la [política de privacidad](/privacy).

## Licencia

MIT. Versión actual: 1.0.0. Código en [github.com/polidisio/exiftool-cli](https://github.com/polidisio/exiftool-cli).
