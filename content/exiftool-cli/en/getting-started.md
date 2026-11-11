---
title: Getting started
order: 1
---

exiftool-cli is a command-line tool to **view, export and remove the EXIF metadata** of your photos (camera, date, GPS, exposure). Everything runs locally on files on your disk.

## Requirements

- macOS or Linux (the platforms declared by the project).
- Python 3.9 or later.
- The Python dependencies (Pillow, piexif, click and colorama) are installed automatically. You do **not** need the Perl `exiftool` program: this tool doesn't use it.
- Supported formats: JPEG (`.jpg`, `.jpeg`), PNG (`.png`) and TIFF (`.tif`, `.tiff`). Extensions are matched case-insensitively.

## Installation

### With Homebrew (macOS)

```bash
brew install polidisio/tap/exiftool-cli
```

### With pip

```bash
pip install exiftool-cli
```

### From source

```bash
git clone https://github.com/polidisio/exiftool-cli.git
cd exiftool-cli
pip install -e .
```

Check that it works:

```bash
exiftool-cli --version
exiftool-cli --help
```

## Your first run

View a photo's metadata:

```bash
exiftool-cli extract photo.jpg
```

Save it to a file:

```bash
exiftool-cli export photo.jpg -o photo.json
```

Create a copy without metadata (the original is not touched):

```bash
exiftool-cli remove photo.jpg -o photo_clean.jpg
```

## Available commands

| Command | What it does |
|---|---|
| `extract` | Shows a photo's metadata as a table. |
| `export` | Saves a photo's metadata to JSON or CSV. |
| `remove` | Creates a copy of the photo without EXIF metadata. |
| `batch` | Applies the above to a whole folder. |
| `interactive` | Opens an interactive menu. |

> Running `exiftool-cli` with no arguments does **not** open the interactive menu: according to the code it shows the help. To open the menu use `exiftool-cli interactive`. See [Interactive mode](/apps/exiftool-cli/docs/interactive-mode).

## Next steps

- [Interactive mode](/apps/exiftool-cli/docs/interactive-mode)
- [Command reference](/apps/exiftool-cli/docs/commands)
- [Export formats](/apps/exiftool-cli/docs/export-formats)
- [Processing folders](/apps/exiftool-cli/docs/batch)
- [FAQ](/apps/exiftool-cli/docs/faq)
