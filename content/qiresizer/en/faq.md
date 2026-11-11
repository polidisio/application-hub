---
title: FAQ
order: 6
---

## My photos come out distorted

**Lock Aspect Ratio** is off. With it off, presets force a fixed width × height and **Custom** keeps the original height. Turn it on so the height is calculated for you. See [Adding images and sizes](/apps/qiresizer/docs/resizing).

## I chose 1080p and the image isn't 1920 × 1080

That's expected: with **Lock Aspect Ratio** on, 1080p means 1920 px **wide** and the height follows your image's proportions.

## Nothing happens when I click Resize Now

The button is disabled (grey) until there is at least one image in the list. If you use **Custom**, check that **Width** holds a number from 1 to 10000 (*Enter 1-10000*).

## I clicked Resize Now and can't find my files

They're saved in the folder you chose in the **Select Folder** panel, not next to the original. Look for files ending in `_resized` (or your **Custom Name** followed by `_1`, `_2`...).

## Files got overwritten

The app doesn't warn if a file with that name already exists: it replaces it. Use an empty destination folder or a different **Custom Name** each time.

## I want to remove a single image from the list

You can't. Use **Clear** and add back the ones you want.

## I can't drag in a folder

Folders aren't opened when dropped. Open the folder in Finder, select the images and drag those, or use **Browse Files**.

## Is my photos' location data lost?

Output files don't keep the original's metadata, including location. Still, check a result before sharing if it matters.

## My PNG came out bigger

It can. PNG is lossless and has no quality setting; a photo as PNG weighs much more than as JPEG or HEIC. For photos, pick JPEG or HEIC.

## Is the app available in Spanish?

No. The interface and error messages are English only.

## Is anything sent to the internet?

No. Everything is processed on your Mac, with no analytics. Details in the [privacy policy](/privacy).
