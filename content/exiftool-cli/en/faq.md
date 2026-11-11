---
title: FAQ
order: 6
---

## I type `exiftool-cli` and get the help, not the menu

That is what the current code does. To open the menu use `exiftool-cli interactive`. See [Interactive mode](/apps/exiftool-cli/docs/interactive-mode).

## Do I need to install `exiftool` (Perl)?

No. It uses the Python libraries Pillow and piexif. The name is similar but they are different projects.

## Does it modify my original photos?

No: `remove` and `batch --remove` write **copies**. But the tool doesn't check that the destination differs from the source and doesn't ask before overwriting (except the interactive menu, which asks to confirm before removing). Always use a different name or folder. See the [Command reference](/apps/exiftool-cli/docs/commands).

## Is quality lost when removing EXIF?

JPEGs are saved again at quality 95, so they are not bit-identical, though they look the same to the eye. Other blocks such as the colour profile or XMP are likely lost too.

## `extract` shows nothing for my PNG

PNGs are not read: metadata is only extracted from JPEG and TIFF. You'll see `No EXIF metadata found`.

## Fields my photo has are missing

Only 18 specific fields are read. See [Export formats](/apps/exiftool-cli/docs/export-formats). XMP and IPTC metadata are not read either.

## `Unsupported format '.heic'`

Only `.jpg`, `.jpeg`, `.png`, `.tif` and `.tiff` are supported. Other formats (HEIC, RAW, GIF...) are rejected.

## `Unsupported output format` when exporting

The `-o` path must end in `.json` or `.csv`.

## Batch says `0 success` or processes nothing

Check the `--folder` path, that there are photos with a supported extension, and that you added `--recursive` if they are in subfolders.

## Does it work on Windows?

It isn't declared: the project lists macOS and Linux. The native AppleScript file picker is macOS-only.

## Are my photos or data sent anywhere?

No. The code makes no network connections: everything is processed on your machine. No accounts, no telemetry. General information in the [privacy policy](/privacy).

## Licence

MIT. Current version: 1.0.0. Code at [github.com/polidisio/exiftool-cli](https://github.com/polidisio/exiftool-cli).
