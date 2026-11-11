---
title: Scanning and filters
order: 2
---

All scan options are in the **Configuration** sidebar. Changes take effect the next time you click **Scan**.

## Sidebar options

| Section | Option | Default | Details |
|---|---|---|---|
| **Source** | Folder | Your home folder | Opens the folder picker. You can choose a whole volume. |
| **Filters** | **Min Size** | 100 MB | Slider from 1 to 1000 MB in steps of 1. Only files that size or larger are listed. |
| **Filters** | **Exclude system dirs** | On | Skips cache and developer folders (see below). |
| **Extensions** | **Add...** | Empty | Extensions to include. Empty = all types. |
| **Options** | **Result Limit** | 50 | Slider from 0 to 500 in steps of 10. At 0 it shows *None* (no limit). |

> Megabytes are decimal: 1 MB = 1,000,000 bytes, like Finder. A **Min Size** of 100 MB means 100,000,000 bytes.

## Filtering by extension

Type an extension in **Add...** and press Return (or click **+**). Dots, capitals and spaces don't matter: `.MP4` is saved as `mp4`. Each extension appears as a chip (for example `.mp4`); click its **x** to remove it. Duplicates are ignored.

If you add any, only files with those extensions are listed. Files with no extension are left out whenever a filter is set.

## What "Exclude system dirs" skips

When on, everything inside folders with these names is ignored:

`.git`, `node_modules`, `__pycache__`, `Caches`, `.cache`, `.npm`, `.pip`, `.cargo`, `vendor`, `.cocoapods`, `.swiftpm`, `Pods`, `.build`, `DerivedData`

as are files named `.DS_Store`, `.Spotlight-V100`, `.Trashes`, `.fseventsd`, `.TemporaryItems` and `.DocumentRevisions-V100`.

> The name is matched against **every part of the full path**, including the folders above the one you picked. If you scan a folder that sits inside one called `vendor` or `Caches`, you get no results. Turn **Exclude system dirs** off in that case.

You can't add your own excluded folders from the interface.

## What counts as a file

- Regular files only. Folders and aliases/symbolic links are not listed.
- Hidden files and folders (names starting with a dot) are always skipped, even with **Exclude system dirs** off.
- Packages (`.app`, Photos libraries, etc.) are treated as one item and not opened: their inner files don't appear.
- The size is the file's logical size, the same as Finder's "Size", not the space it actually uses on disk.

## While scanning

The scan runs in the background and the window stays responsive. The list is cleared when it starts, and a progress bar appears at the bottom with the text **Scanning: <file>**.

> The bar only updates every 100 files that match your filters. With fewer than 100 matches you won't see it, only the *Scanning...* status under the title.

To cancel, press **⌘.** or use the **Cancel Scan** menu item. There is no cancel button in the window.

> Cancelling discards partial results: the list ends up empty and nothing is saved to History. macOS may show a *Scan Error* notification saying *Scan was cancelled*; that is expected.

## Order and limit

The scan collects every file that passes the filters, sorts them by size (largest first) and keeps the first **Result Limit**. So with a limit of 50 you see the 50 biggest, not 50 random ones. Afterwards you can re-sort the list (see [Results](/apps/filesizer/docs/results)), but only among those files.

## Errors

- If the folder no longer exists the scan fails with *Directory not found: <path>*.
- If access is blocked it fails with *Access denied: <path>*.

> These errors are only announced with a system notification. The window shows nothing: if you denied notifications, the scan will look like it did nothing.
