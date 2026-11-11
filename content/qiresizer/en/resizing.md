---
title: Adding images and sizes
order: 2
---

## Adding images

There are two ways, and you can mix them:

- **Drag and drop**: drop one or more files onto the drop area. The box highlights while you drag.
- **Browse Files**: opens a file picker that lets you select several at once (files only, not folders).

The area says *Supports PNG, JPG, and HEIC*, but in practice it accepts any file macOS recognises as an image. Non-image files are silently ignored when dropped, and dropped folders are not opened.

Once images are added, the area shows a counter (for example *4 images selected*) and two actions:

| Action | What it does |
|---|---|
| **Add** | Opens the picker to add more images. |
| **Clear** | Empties the whole list. You can't remove just one. |

Adding the same file twice counts once. There is no preview or list of names: you only see how many images there are.

## Choosing the size

Under **Dimensions**, the **Size** picker offers these values. QIResizer always uses the **width** as the main measure.

| Option | Width (px) | Height (px) |
|---|---|---|
| **480p** | 640 | 480 |
| **720p** | 1280 | 720 |
| **1080p** (default) | 1920 | 1080 |
| **Smartphone Classic** | 1242 | 2208 |
| **Smartphone Plus** | 1242 | 2688 |
| **Smartphone Pro** | 1290 | 2796 |
| **Tablet Pro** | 2048 | 2732 |
| **Desktop Standard** | 2560 | 1600 |
| **Desktop Pro** | 2880 | 1800 |
| **4K** | 3840 | 2160 |
| **Custom** | you type it | depends |

### Custom width

Choosing **Custom** shows a **Width** field (in px). It must be a number from 1 to 10000; otherwise you'll see *Enter 1-10000* and nothing is resized.

> The width is checked **after** you pick the destination folder. If the width is invalid, the message appears when you return to the window and you have to click **Resize Now** again.

### Lock Aspect Ratio

With **Lock Aspect Ratio** on (the default):

- The width is the one from the chosen option and the height is calculated to keep each image's proportions. The height in the table is **not used**.
- So 1080p means "1920 px wide", not "1920 × 1080".

With the checkbox off:

- **With a preset**: the image is fitted exactly to the width × height in the table. If the proportions differ, the image is distorted (stretched or squashed).
- **With Custom**: the width is what you typed and the height stays **the same as the original**, so the image is distorted unless it already has that width.

> QIResizer only scales: it doesn't crop or add borders. It also doesn't prevent enlarging: if you pick a size bigger than the original, the image is enlarged and loses sharpness.

Next: [Formats, quality and file names](/apps/qiresizer/docs/output).
