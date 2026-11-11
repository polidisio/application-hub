---
title: Interactive mode
order: 2
---

Interactive mode is a text menu for people who'd rather not remember flags. Open it with:

```bash
exiftool-cli interactive
```

> Plain `exiftool-cli` shows the help, not the menu. An equivalent alternative: `python -m exiftool_cli` (with no arguments it opens the menu).

Press `Ctrl+C` to leave at any time.

## The menu

```
Main Menu
────────────────────────────────────────
  Selected: None

  [1] Select photos (file explorer)
  [2] Show EXIF preview
  [3] Export EXIF
  [4] Remove EXIF
  [0] Exit
```

Type the number and press Enter. `Selected` shows how many photos you have chosen. If you type an option that doesn't exist, the menu is shown again with no message.

| Option | What it does |
|---|---|
| `1` Select photos | Picks one or more photos. They are **added** to the ones already chosen (not replaced; there is no way to clear the selection except exiting and coming back). |
| `2` Show EXIF preview | Shows the metadata table for each selected photo. |
| `3` Export EXIF | Exports each selected photo to JSON or CSV. |
| `4` Remove EXIF | Creates metadata-free copies of the selected photos. |
| `0` Exit | Quits. |

## Choosing photos

How you pick depends on your system:

1. If Python has `tkinter`, a graphical file picker opens (several photos at once).
2. Otherwise, on macOS, the native picker opens through AppleScript (`osascript`).
3. In other cases (for example Linux without `tkinter`) you are asked to type **one file path** by hand, one at a time.

Photos in an unsupported format are skipped with a warning.

## Exporting (option 3)

1. Choose the format: `json` or `csv` (default `json`).
2. Answer `y` to pick the output folder with the file explorer (macOS only), or type it; press Enter to use the current folder (`./`).
3. One file is created per photo, named after the photo with a `.json` or `.csv` extension.

> If two selected photos share a name (from different folders), the second **overwrites** the first one's file, with no warning. There's also no warning if the file already existed.

## Removing metadata (option 4)

1. It asks `Keep GPS data?` (default no).
2. You pick the output folder as in export.
3. It asks for final confirmation: `Remove EXIF from N files?` (default no).
4. Each copy is named `<name>_clean<extension>` and the size change is shown.

Originals are not modified, because `_clean` is always added to the name. See the [Command reference](/apps/exiftool-cli/docs/commands) for what is and isn't preserved.
