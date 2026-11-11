---
title: Importing decks
order: 7
---

You can create a deck from a **CSV** or **Excel (.xlsx)** file. It always creates a new deck; you can't add cards to an existing deck.

## Preparing the file

Each row is a card: the **first column** is the front (question) and the **second** is the back (answer). Other columns are ignored.

| front | back |
|---|---|
| Hello | Hola |
| Thank you | Gracias |

- If the first row contains "front" or "question" (CSV) or "front" in its first cell (Excel), it is treated as a header and skipped.
- Rows with an empty front or back are skipped.

### CSV

- It must be encoded as **UTF-8**.
- The separator is detected from the first line: comma, semicolon or tab.
- You can wrap texts in double quotes to include the separator inside the text.
- Each card must fit on one line: line breaks inside a cell are not supported.
- Single and double quotes at the start and end of each text are removed.

### Excel (.xlsx)

- Only the **first sheet** is read.
- It works well with plain text cells. Avoid rich formatting inside a cell and empty cells between the front and the back, because they can shift the columns.

## Importing

1. On **My Decks**, tap the import button (down arrow, top left).
2. Type the **Deck Name**.
3. Choose the format in the menu: **CSV** or **Excel**.
4. Tap **Select File** and pick the file.
5. Check the preview: you'll see how many cards are ready and the first three.
6. Tap **Import**. The button is disabled without a name or without cards.

The deck is created in blue, which can't be changed afterwards.

> Some labels on this screen appear in English only (for example **Import**, **Preview**, **No cards loaded**).

## Common errors

| Message | What to do |
|---|---|
| No cards found | The file has no rows with two text columns. Check the format. |
| No cards found. Ensure Excel has 'front' and 'back' columns. | Same, for an Excel file. |
| Cannot find sheet in Excel file | The file isn't a valid .xlsx or has no sheet 1. |
| A system error while reading the file | Check the file is UTF-8 (CSV) and that the chosen format matches the file. |

## What's not there

- There is no deck export and no backup.
- Images and audio are not imported, nor are decks from other apps (for example, Anki).
