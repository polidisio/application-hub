---
title: FAQ
order: 6
---

## The scan finishes and no files show up

Try, in order:

- Pick the folder with **Select Directory**: without it the sandbox blocks reading it.
- Lower **Min Size** (the default is 100 MB) or remove extensions.
- If you scan inside a folder named `Caches`, `vendor`, `.git`, etc., turn off **Exclude system dirs** (see [Scanning and filters](/apps/filesizer/docs/scanning)).
- Remember hidden files and the inside of packages (`.app`, libraries) aren't listed.

## Can I scan the whole disk?

Yes: pick the volume in the picker. Large volumes take longer. FileSizer doesn't ask for *Full Disk Access*, so areas protected by macOS (for example parts of `~/Library`) may be left out without warning.

## Can I move or delete several files at once?

No. **Move to Trash** works on one file at a time and always asks for confirmation. Files go to the Trash; they are not permanently deleted.

## I moved a file to the Trash and it's still in the list

The app shows no errors when moving. Check in Finder whether the file actually moved (permissions, read-only disk).

## I can't find the exported file

It's saved in **Downloads** as `bigfiles_export_<number>.csv/json`, and Finder should open with it selected. If you didn't see the success message, the export failed silently. Try scanning and exporting again; if it persists, it's a known limitation of this version.

## History says "0 files" everywhere

That's how the current version works: History saves the scan settings, not the file list. See [History](/apps/filesizer/docs/history).

## I don't see error or scan-complete alerts

FileSizer sends them as system notifications. Enable them in System Settings → Notifications → FileSizer.

## Can I change the language?

No. The interface is in English.

## Can I sort by something other than size when scanning?

The scan always collects the biggest files. Afterwards you can sort the table by **Name**, **Size** or **Modified**, but only among the files found (capped by **Result Limit**).

## How does it differ from "bigfiles"?

`bigfiles` is a Python command-line tool by the same author. FileSizer is the native Mac app with a graphical interface and is independent of it.

## Is my data sent anywhere?

No. See [Getting started](/apps/filesizer/docs/getting-started) and the [privacy policy](/privacy).
