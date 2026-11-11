---
title: Import and export
order: 5
---

## Importing a note

1. In the sidebar, tap ⋯ → **Import note**.
2. Pick a file in the file picker.
3. The note is created and opens in the editor. If a folder was selected, it goes into it.

You can only import **one file at a time**, and only `.md`, `.markdown` or `.txt`. The title is decided like this:

| File | Title | Text |
|---|---|---|
| `.md` / `.markdown` | If the first line starts with `# `, that text is the title and is removed from the body. Otherwise the title is *Sin título* (Spanish, always). | The rest of the file. |
| `.txt` | The first non-empty line. | The following lines. |

> If the file cannot be read as UTF-8 text or has another extension, **nothing happens and no error is shown**. If importing from Files or iCloud Drive does nothing, copy the file to **On My iPhone** first and try again.

## Exporting a note

1. Open the note and tap ⋯ → **Export**.
2. Under **Export Format**, pick a format (**PDF** is the default).
3. Tap **Export**. The iOS share sheet opens so you can save to Files, AirDrop it, email it, etc.

The file is named after the note, with spaces replaced by underscores.

| Format | What it produces | Status |
|---|---|---|
| **PDF** | A page with the title and the formatted note. | Works. See warning below. |
| **HTML** | A self-contained web page with basic styles. | Works. |
| **DOCX** | A `.docx` file. | **Does not really work**: see warning below. |
| **Markdown** | `.md` file with the title as `# Title` followed by the text. | Works. |
| **Texto** | `.txt` file with the title underlined with `=` and the note unformatted. | Works. |
| **Markdown + HTML** | A `.zip` with the `.md` and the `.html`. | Unreliable: see warning below. |
| **Markdown + Texto** | A `.zip` with the `.md` and the `.txt`. | Unreliable: see warning below. |

The format names are shown as listed (the text format is called **Texto** even in English).

> **DOCX:** the current version does not convert your note. It produces a minimal file with the fixed text "Convertido desde Markdown" that Word and other apps do not open as a valid document. Do not use it; export to **PDF** or **HTML**.

> **ZIP:** the **Markdown + HTML** and **Markdown + Texto** formats produce a hand-built `.zip` that may come out corrupted and fail to open. If it does not open, export each format separately.

> **PDF:** the PDF may include a blank first page, and text is drawn with the app's basic style (no code colouring). Check the result before sending it.

Exported HTML declares the language as Spanish (`lang="es"`) whatever the language of your note.

## Exporting all notes

Under ⋯ → **Export all** there is a sheet with the format selector and the **Export all notes** button.

> **It does not work yet.** The button walks through the notes and closes the sheet, but it **does not generate or share any file**, and the chosen format is ignored. For a backup, use per-note export for now or rely on [iCloud](/apps/markdown-notes/docs/data-sync).

## Backup tip

There is no backup feature inside the app. Your notes live in the app's database and, if enabled, in your iCloud. To keep an important note outside the app, export to **Markdown**: it is the most reliable format and can be brought back with **Import note**.
