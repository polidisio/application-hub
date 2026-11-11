---
title: Getting started
order: 1
---

FileSizer is a Mac app that scans a folder or a volume and lists the biggest files, so you can decide what to delete and get space back. It needs no account, uses no internet and sends no data anywhere.

## Requirements

- A Mac running macOS 13 (Ventura) or later.
- The app runs inside the macOS *sandbox*: it can only read and change the folders you pick.
- The interface is in English only (there is no Spanish translation).

> There is no settings screen: **FileSizer → Settings** opens an empty window. All options live in the **Configuration** sidebar.

## Your first scan

1. Open FileSizer. The list is empty and says *Configure your search and click Scan*.
2. In the sidebar, under **Source**, click the current folder (or the **Select Directory** toolbar button) and choose the folder or volume to review.
3. Adjust the minimum size and the other filters (see [Scanning and filters](/apps/filesizer/docs/scanning)).
4. Click **Scan** (or press **⌘S**).
5. When it finishes, the list shows the files from largest to smallest.

> Always click **Select Directory** the first time. The initial folder is your home folder, but because of the sandbox the app can't read it until you choose it in the picker. If you don't, the scan may end with no results and no warning.

## A tour of the window

The window has three columns:

| Column | What it holds |
|---|---|
| **Configuration** (left) | Source, filters, extensions, result limit and the **History** button. |
| List (middle) | The file table with **Name**, **Size** and **Modified** columns. The title shows the folder (`~` for your home folder) and below it the status: *Ready to scan*, *Scanning...*, *N files found* or *N of M files*. |
| Detail (right) | Info and actions for the selected file. With nothing selected you see *No Selection*. |

The toolbar has **Select Directory**, **Scan**, **Export** and a *Search files...* box.

## Keyboard shortcuts

| Shortcut | Action |
|---|---|
| ⌘S | **Scan** |
| ⌘N | **New Scan** (View menu) |
| ⌘. | **Cancel Scan** (only while scanning) |
| ⌘E | **Export** |
| ⌘F | Focus the search box |
| Space | Preview (QuickLook) the selected file |
| ⌘⌫ | **Move to Trash** the selected file |
| Esc | Close the preview |

## Privacy and permissions

- FileSizer has no networking code and no analytics: nothing leaves your Mac.
- It only accesses the folder you pick and the files inside it. It does not ask for *Full Disk Access*.
- The first time you open the app, macOS asks for permission to send notifications. They are used when a scan finishes or fails and when files are moved to the Trash. You can deny them and lose nothing else.
- History is stored locally in the app's data folder (see [History](/apps/filesizer/docs/history)).

Privacy details for all apps are in the [privacy policy](/privacy).

## Next steps

- [Scanning and filters](/apps/filesizer/docs/scanning)
- [Results and file actions](/apps/filesizer/docs/results)
- [History](/apps/filesizer/docs/history)
- [Export to CSV or JSON](/apps/filesizer/docs/export)
- [FAQ](/apps/filesizer/docs/faq)
