---
title: Command reference
order: 3
---

General form: `exiftool-cli <command> [options]`. Global options: `--version` and `--help` (also `exiftool-cli <command> --help`).

## extract

Shows a photo's metadata as a table.

```bash
exiftool-cli extract photo.jpg
```

Sample output (decimal values print with six decimals if they are below 100, and with two otherwise):

```
──────────────────────────────────────────────────
  photo.jpg
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

Fields are grouped into **Camera**, **Date/Time**, **GPS**, **Exposure** and **Image**; fields the photo doesn't have are left out. If there are none: `No EXIF metadata found`. Exactly which fields are read is listed in [Export formats](/apps/exiftool-cli/docs/export-formats).

> Metadata is only read from JPEG and TIFF. On a PNG the command runs but always says `No EXIF metadata found`.

## export

Saves the metadata of **one** photo to a file. The format comes from the extension of `-o`.

```bash
exiftool-cli export photo.jpg -o photo.json
exiftool-cli export photo.jpg -o photo.csv
```

| Option | Description |
|---|---|
| `-o`, `--output` | Output file path (required). Must end in `.json` or `.csv`. |

Any other extension fails with `Unsupported output format '.txt'. Use .json or .csv`. An existing file is **overwritten** without asking. The destination folder must already exist (this command does not create it).

## remove

Creates a copy of the photo without EXIF metadata.

```bash
exiftool-cli remove photo.jpg -o photo_clean.jpg
exiftool-cli remove photo.jpg --keep-gps -o photo_clean.jpg
```

| Option | Description |
|---|---|
| `-o`, `--output` | Path of the copy (required). Missing folders are created. |
| `--keep-gps` | Keeps only the GPS data and removes the rest of the EXIF. |

When done it prints `Removed EXIF from photo.jpg → photo_clean.jpg` and the size change. With `--keep-gps` it adds `GPS data preserved`.

> **There is no in-place mode by design.** You always write a copy with `-o`. But the tool does not check that `-o` differs from the original, and it never asks before overwriting: if you pass the same path the behaviour is not guaranteed. Always use a different name.

### What happens to the image

The photo is **re-encoded**, not copied byte for byte:

- JPEG: saved again at quality 95. It looks nearly identical, but it is not the same file and the size can grow or shrink.
- TIFF and PNG: saved again with Pillow.
- Other non-EXIF metadata blocks (for example ICC colour profile, XMP or IPTC) are likely not carried over, since the tool only writes back an empty EXIF block (or one with GPS). Not verified in every case.
- For PNG the tool still writes an empty EXIF block.

## batch

Processes every photo in a folder. See [Processing folders](/apps/exiftool-cli/docs/batch).

## interactive

Opens the interactive menu. See [Interactive mode](/apps/exiftool-cli/docs/interactive-mode).

## Errors and exit codes

| Situation | Result |
|---|---|
| Everything fine | Exit code `0`. |
| Missing file (`extract`, `export`, `remove`) | Exit code `2`, with the command-line framework's (click) own message. |
| Unsupported format, unreadable file, bad output | Red `✗` message and exit code `1`. |
| Wrong usage (missing `-o`, unknown option) | Exit code `2` (click usage error). |

Common messages: `Unsupported format '.gif'. Use: ...`, `Cannot read EXIF from photo.jpg: ...`, `Cannot save out.jpg: ...`.
