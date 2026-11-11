---
title: Export to CSV or JSON
order: 5
---

You can save the results list to a file to open in Numbers/Excel (CSV) or process with scripts (JSON).

## How to export

1. Run a scan (the **Export** button is disabled when the list is empty).
2. Click **Export** in the toolbar (or **⌘E**). The **Export Results** sheet opens.
3. Choose **Export as CSV** or **Export as JSON**.
4. On success you see *CSV exported successfully!* (or *JSON exported successfully!*) and the file name next to *Saved to:*. Finder opens with the file selected.
5. Click **Close**.

## Where it's saved

In your **Downloads** folder, named `bigfiles_export_<number>.csv` or `.json`, where the number is the Unix time in seconds (so an earlier export is never overwritten). There is no dialog to pick another name or folder.

> What you see is what you export: if there's text in the search box, only the filtered files are written. With an empty filter, all scan results go out, in the table's current order.

> If the export fails the app shows no error: you just don't get the success message. Since FileSizer only has permission for the folders you choose, writing to Downloads may be blocked on some installs. See the [FAQ](/apps/filesizer/docs/faq).

## CSV format

A header row and one row per file, UTF-8 encoded:

| Column | Content |
|---|---|
| `Name` | File name, in quotes. |
| `Path` | Full path, in quotes. |
| `Size` | Size in bytes (number). |
| `Modified` | Date and time in the system's short format, in quotes. |
| `Extension` | Lowercase extension without a dot, in quotes. |

> Quotes inside a name are not escaped. A file with `"` in its name can break the columns.

## JSON format

A pretty-printed list of objects, one per file:

| Field | Content |
|---|---|
| `id` | Internal identifier (changes with every scan). |
| `path` | Full path. |
| `name` | File name. |
| `size` | Size in bytes. |
| `modifiedDate` | Modification date as a number: seconds since 1 January 2001 (UTC). |
| `extension_` | Lowercase extension without a dot. |

The `finderComment` field does not appear, because the scan doesn't read comments.
