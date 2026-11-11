---
title: Results and file actions
order: 3
---

When a scan finishes, the middle column shows a table of the files found and the right column shows details for the one you select.

## The results list

| Column | Content |
|---|---|
| **Name** | Icon, file name and, below it, the full path. |
| **Size** | Size (for example `1.2 GB`) and a small bar showing its size relative to the largest in the list. |
| **Modified** | Date and time of last modification. |

Click a column header to sort by it; click again to reverse. After a scan the list is sorted by **Size**, largest first.

## Searching within results

The *Search files...* box in the toolbar (⌘F) filters instantly by name **or** path, ignoring case. The status under the title becomes *N of M files*. If nothing matches you see *No files match your filter*.

> Search only filters what was already scanned; it doesn't rescan the disk. Export also includes only what you see with the filter applied (see [Export](/apps/filesizer/docs/export)).

## Detail panel

Select a file and the right panel shows:

- Icon, name and the extension in capitals.
- **Metadata**: **Size**, **Modified** and **Path**.
- **Finder Comment**: the file's Finder comment.
- **Reveal in Finder**, **QuickLook** and **Move to Trash** buttons.

## File actions

Use them by right-clicking a row (context menu) or from the detail panel.

| Action | What it does |
|---|---|
| **Reveal in Finder** | Opens Finder with the file selected. |
| **QuickLook** | Opens the macOS preview. Also with the space bar; Esc closes it. |
| **Move to Trash** | Moves the file to the Trash (⌘⌫). |

### Moving to the Trash

First you get the **Move to Trash?** question with the file name; confirm with **Move to Trash** or back out with **Cancel**. The file is not permanently deleted: you can restore it from the Finder Trash until you empty it. After confirming it disappears from the list and macOS may show a *Files Removed* notification.

> Only one file at a time; there is no multiple selection.
>
> If macOS refuses to move the file (permissions, read-only volume, etc.), the app shows no error: the row stays in the list. Check in Finder.
>
> Space is not freed until you empty the Trash.

### Finder comment

Under **Finder Comment** you see *No comment* until you click **Edit**: that loads the file's current comment into a text box. Type and click **Save**. Saving an empty box removes the comment.

> This is the least reliable feature. It writes the text straight into the file's metadata with a system tool (`xattr`), which may not work inside the sandbox, and the app doesn't warn you if it fails. Check the result in Finder (Get Info). When you switch files, click **Edit** again to load that file's comment.

## Related

- [History](/apps/filesizer/docs/history) to repeat a scan.
- [Export to CSV or JSON](/apps/filesizer/docs/export).
