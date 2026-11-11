---
title: Logging drinks
order: 2
---

## Quick log

Each drink has a card with its emoji, name, category and that drink's running cost.

- **+ (green):** adds one drink at the drink's base price, with the current date and time.
- **− (red):** removes one unit from that drink's latest entry. If that entry was a single unit, it's deleted. Disabled when the counter is 0.
- **Reset arrow:** deletes **all** entries of that drink, not just today's, and **without asking for confirmation**.

> **Today's Total is cumulative.** The counter and cost at the top add up everything logged since the last reset. They only go down if you tap the reset arrow, delete entries or use the automatic deletion in [Settings](/apps/drinktrack/docs/data). The widget and the Watch show the same cumulative figures.

## Adding with the form

Tap **Add Drink** (orange bottom button).

| Section | Field |
|---|---|
| **Drink** | **Type**: the drink's emoji and name. |
| **Details** | **Quantity** (integer, default 1), **Unit Price** (decimal; comma accepted; defaults to the drink's price) and the calculated **Total**. |
| **Date and Time** | A date picker. |
| **Notes** | Optional text. |

**Save** only enables when quantity and price are above 0.

Two things worth knowing:

- The entry is always saved with the **date and time of the moment you save**: the date picker can't be used to log past drinks.
- When you save, the price you typed becomes that drink's **new base price**.

Notes aren't shown again inside the app (History only shows a 📝 icon), but they are included in the CSV export.

## Managing your drinks

In the add form, the **Manage** button (centre of the top bar) opens **My Products**.

- **+** creates a new drink (**New Product**). Tap a row to edit it (**Edit Product**).
- Fields: **Name**, **Emoji** (tap the emoji to pick another; default 📦), **Price** and **Category** (*Alcohol* or *Non-Alcoholic*; default Alcohol). Saving needs a name and a price above 0.
- **Delete:** swipe a row left. The example drinks ask for confirmation (**Delete Default Drink?**); yours don't. Deleting a drink also deletes all of its history.

There's no button to restore the example drinks: they're only recreated if the list ends up completely empty and you restart the app.

## Fixing a mistake

Saved entries can't be edited. To fix one, remove units with **−** or delete the entry by swiping it in [History](/apps/drinktrack/docs/history-charts) (no confirmation), then add it again.
