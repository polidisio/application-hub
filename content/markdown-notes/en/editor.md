---
title: The editor
order: 2
---

Tap a note in the list to open it. At the top you have the title, the mode selector and two buttons; below, the tags, the formatting bar and the text.

## Header

| Element | What it does |
|---|---|
| **Title** field | The note's name. It is independent of the `#` headings in the text. |
| **Edit / Editable Text / Split** selector | Changes the edit mode (see below). |
| ⋯ button | Opens a menu with **Tags** and **Export**. |
| Gear button | Opens [Settings](/apps/markdown-notes/docs/settings). |

## Edit modes

| Mode | What you see |
|---|---|
| **Edit** | Only the Markdown text, in colour. Includes the formatting bar and counters. |
| **Editable Text** | Only the formatted view, and **you can type directly in it**. |
| **Split** | Markdown text on the left, formatted view on the right. Includes the formatting bar. |

### Edit

Text is shown in a monospaced font with syntax highlighting: headings in blue, bold in orange, italic in purple, code in green, links in teal, lists and quotes in grey. Highlighting is visual only and does not change your text.

At the bottom you get the number of **words**, **characters**, and the last-modified date. Words are counted by splitting on spaces, so line breaks without a space can make the total lower than the real one.

### Editable Text

Shows the note already formatted and lets you edit it. When you stop typing (half a second), the app converts what you see back to Markdown and saves it.

> That conversion is approximate. Numbered lists become dash lists, and tables, strikethrough or other elements may lose their formatting or end up as plain text. If your note uses advanced syntax, edit in **Edit** or **Split** and use **Editable Text** only for small text fixes. Pasting always pastes plain text.

### Split

The most comfortable mode for writing and checking the result. The right-hand view is also editable, with the same approximate conversion as above. On an iPhone in portrait each half is very narrow; rotating the device helps.

## Formatting bar

It appears in **Edit** and **Split** modes. Swipe sideways to see all of it.

| Button | Inserts |
|---|---|
| **B** | `**text**` around the selection. |
| *I* | `*text*` around the selection. |
| **H** | `# ` at the start of the current line. |
| List | A new line with `- `. |
| `< >` | Inline code with backticks. |
| Braces `{}` | A code block with three backticks. |
| Link | `[selection](url)`. |
| Photo | `![selection](url)`. |
| Quote | A new line with `> `. |
| `?` | Opens **Markdown Help**, a syntax cheat sheet. |

If text is selected, the buttons wrap it; if not, they insert the empty marks at the cursor. Then replace `url` with the real address.

> The **H** button does not cycle through levels: it always adds `# `. Pressing it repeatedly repeats the prefix. For `##` or `###` type the symbols by hand.

## Quick preview from the list

Each row in the list has an eye icon. It opens the formatted note in a sheet with a **Cerrar** button (shown in Spanish). It is for reading without opening the editor. Changes you make there are not saved.

## Saving

The note saves on every change to the title or text, and its modified date is updated. That is why the list always shows the note you touched most recently first.

> Links in the preview open inside the preview itself, with no button to go back. If you tap one by mistake, close and reopen the note.
