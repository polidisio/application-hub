---
title: Primeros pasos
order: 1
---

exiftool-cli es una herramienta de línea de comandos para **ver, exportar y eliminar los metadatos EXIF** de tus fotos (cámara, fecha, GPS, exposición). Todo se hace en local, sobre archivos de tu disco.

## Requisitos

- macOS o Linux (son las plataformas declaradas en el proyecto).
- Python 3.9 o posterior.
- Las dependencias de Python (Pillow, piexif, click y colorama) se instalan solas. **No necesitas** el programa `exiftool` de Perl: esta herramienta no lo usa.
- Formatos admitidos: JPEG (`.jpg`, `.jpeg`), PNG (`.png`) y TIFF (`.tif`, `.tiff`). Las extensiones se comprueban sin distinguir mayúsculas.

## Instalación

### Con Homebrew (macOS)

```bash
brew install polidisio/tap/exiftool-cli
```

### Con pip

```bash
pip install exiftool-cli
```

### Desde el código fuente

```bash
git clone https://github.com/polidisio/exiftool-cli.git
cd exiftool-cli
pip install -e .
```

Comprueba que funciona:

```bash
exiftool-cli --version
exiftool-cli --help
```

## Tu primer uso

Ver los metadatos de una foto:

```bash
exiftool-cli extract foto.jpg
```

Guardarlos en un archivo:

```bash
exiftool-cli export foto.jpg -o foto.json
```

Crear una copia sin metadatos (el original no se toca):

```bash
exiftool-cli remove foto.jpg -o foto_limpia.jpg
```

## Comandos disponibles

| Comando | Para qué sirve |
|---|---|
| `extract` | Muestra los metadatos de una foto en una tabla. |
| `export` | Guarda los metadatos de una foto en JSON o CSV. |
| `remove` | Crea una copia de la foto sin metadatos EXIF. |
| `batch` | Aplica lo anterior a una carpeta entera. |
| `interactive` | Abre un menú interactivo. |

> Escribir `exiftool-cli` sin argumentos **no** abre el menú interactivo: según el código, muestra la ayuda. Para abrir el menú usa `exiftool-cli interactive`. Lo explica la página [Modo interactivo](/apps/exiftool-cli/docs/interactive-mode).

## Siguientes pasos

- [Modo interactivo](/apps/exiftool-cli/docs/interactive-mode)
- [Referencia de comandos](/apps/exiftool-cli/docs/commands)
- [Formatos de exportación](/apps/exiftool-cli/docs/export-formats)
- [Procesar carpetas](/apps/exiftool-cli/docs/batch)
- [Preguntas frecuentes](/apps/exiftool-cli/docs/faq)
