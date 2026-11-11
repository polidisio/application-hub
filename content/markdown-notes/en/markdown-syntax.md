---
title: Markdown syntax
order: 3
---

This page is a cheat sheet of what you can write. The app builds the preview and the HTML/PDF exports with a basic Markdown engine (Ink), so not all "extended" Markdown from other apps works. Inside the app you have the same cheat sheet in short form: the `?` button on the formatting bar, **Markdown Help**.

## Text and headings

| You type | Result |
|---|---|
| `# Title` | Large title (level 1). |
| `## Title` | Medium title (level 2). |
| `### Title` | Small title (level 3). |
| `**text**` | **Bold**. |
| `*text*` | *Italic*. |
| `[text](url)` | Link. |
| `![alt](url)` | Image (by web address). |
| `> quote` | Quote. |
| `---` | Horizontal line. |

Levels 4 to 6 (`####` to `######`) are also recognised in the text, but the colour highlighting and the preview are designed around the first three.

## Lists

| You type | Result |
|---|---|
| `- item` | Unordered list (`*` or `+` also work). |
| `1. item` | Ordered list. |

## Code

| You type | Result |
|---|---|
| `` `code` `` | Inline code. |
| Three backticks, the code, three backticks | Code block. |

Code blocks are shown in a monospaced font on a grey background. There is **no per-language colouring** in the preview or in exports.

## Tables

You can use tables with vertical bars. The preview draws them with borders.

```
| Column A | Column B |
|---|---|
| 1 | 2 |
```

## What is not formatted

> **Markdown Help** lists `~~strikethrough~~` and `- [ ] task` as examples, but the app's engine does not turn them into their own formatting: in the preview they may appear as is, as text with the symbols. Test it on your own note before relying on it.

- There are no equations, diagrams or footnotes.
- Images load from a web address (`https://...`). You cannot insert photos from your camera roll into a note.
- If you paste HTML, it is kept in the preview.

## Tips

- Leave a blank line between paragraphs, and before and after lists, tables and code blocks.
- Editor colours help: if a `**bold**` does not turn orange, the pair of asterisks is probably not closed.
- Always paste plain text; the app drops rich formatting when pasting in **Editable Text**.
