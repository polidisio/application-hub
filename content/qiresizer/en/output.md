---
title: Formats, quality and names
order: 3
---

## Output format

Under **Output Settings**, the **Format** picker offers three formats. The default is **JPEG**.

| Format | Extension | Quality | When to use it |
|---|---|---|---|
| **JPEG** | `.jpg` | Adjustable | Photos; small files. |
| **PNG** | `.png` | Lossless (no slider) | Screenshots, graphics, text. |
| **HEIC** | `.heic` | Adjustable | Even smaller files, within the Apple ecosystem. |

You can convert from one format to another: for example, HEIC to JPEG to share with someone who can't open HEIC.

### Quality

The **Quality** slider only appears with JPEG and HEIC. It runs from **10% to 100%** and defaults to **85%**. Lower quality means a smaller file and more visible artefacts.

> Quality isn't remembered: when you close the app it goes back to 85%, and the format to JPEG.

### Metadata

Images are redrawn and re-encoded, so the result **does not keep** the original's metadata (such as EXIF: camera, date or GPS location). That can help when sharing without location data, but don't treat it as a privacy guarantee without checking.

## File names

The name depends on the optional **Custom Name** field:

| Custom Name | Example result |
|---|---|
| Empty | `holiday_resized.jpg` (original name + `_resized`) |
| `trip` | `trip_1.jpg`, `trip_2.jpg`, `trip_3.jpg`... |

With **Custom Name**, the number follows the order of the image list. The extension comes from the chosen format.

## Destination folder

You choose the folder every time you click **Resize Now**, in a panel with a **Select Folder** button (you can create a new folder from there). The app doesn't remember the last folder used.

> If the destination folder already contains a file with the same name, it is **overwritten without asking**. This happens easily when you reuse a **Custom Name**, or when two images with the same name come from different folders (without a custom name, both produce the same `_resized` file).

Next: [Batches, cancelling and statistics](/apps/qiresizer/docs/batch-and-results).
