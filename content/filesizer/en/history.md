---
title: History
order: 4
---

FileSizer remembers the settings of your scans so you can repeat them with one click.

## What is saved

Every time a scan finishes with **at least one file**, an entry is added to History. What's saved is the scan's **settings** (folder, minimum size, extensions, limit, **Exclude system dirs** and the search text), **not the file list**. Cancelled, failed or empty scans are not saved.

The data lives in a local database (`history.sqlite3`, in the app's data folder inside the sandbox). It does not sync with iCloud or other Macs.

## Opening History

Click **History** at the bottom of the sidebar. The **Scan History** sheet opens with the newest scans first. Each row shows the folder, the date and three figures: files, total size and minimum size (for example *50 MB+*).

> Saved entries always show *0 files* and *Zero KB* as the total, because History doesn't keep the file list. Recognise a scan by its folder, date and minimum size (*N MB+*).

When empty you see *No scan history*.

## Repeating a scan

Click a row, or right-click → **Use This Profile**. The sheet closes and the settings are loaded into the sidebar.

> Loading a profile **does not start the scan**: click **Scan** (⌘S) to run it. Your current search text is also replaced with the entry's.

## Deleting

- Right-click a row → **Delete** (only that one).
- **Clear All** (top right) empties the whole history.

> **Clear All** asks for no confirmation and can't be undone. It doesn't touch any file on your disk, only the history.
