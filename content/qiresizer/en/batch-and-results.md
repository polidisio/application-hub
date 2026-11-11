---
title: Batches and statistics
order: 4
---

## Processing a batch

All images in the list are processed one after another with the same settings (size, format, quality and name). While it works, the footer shows:

- **Resizing images...** with the percentage.
- A progress bar.
- The **Cancel** button.

**Resize Now** is hidden until the batch finishes.

### Cancelling

**Cancel** stops the batch before the next image. Images already saved stay in the folder; the one in progress finishes.

> If you cancel after at least one image has been processed, the app treats the batch as finished: it empties the list, including the images that were never processed. You'll need to add them again.

## When it finishes

- If everything went well, the image list is emptied so you can start another batch.
- The **statistics** appear at the bottom (see below).

### Errors

If an image fails, a red notice appears, for example *Error processing photo.jpg: Could not load image*. Only the **first** error is shown, and it disappears after 5 seconds. Images that did process are saved, and the list is **not** emptied, so clicking **Resize Now** again reprocesses all of them.

The most likely messages:

| Message | Meaning |
|---|---|
| *Could not load image* | The file couldn't be opened as an image (damaged or unsupported). |
| *Failed to create bitmap representation* / *Failed to generate image data* | The result couldn't be encoded. |
| A system message (for example no permission or disk full) | Writing to the destination folder failed. |

## Space-saving statistics

After processing, the footer shows:

- **Saved N% in total size**: the percentage saved over the whole batch.
- Below it, the total size before and after (for example `12.4 MB → 3.1 MB`).

The numbers cover the whole batch, not each image, and stay visible until you start another batch.

> If the result is bigger than the original (for example when enlarging an image or converting to PNG), the percentage goes negative. And if an image failed, it counts as 0 bytes, so the saving shown is higher than the real one.

Next: [Theme and settings](/apps/qiresizer/docs/settings).
