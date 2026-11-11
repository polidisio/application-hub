---
title: How it works
order: 2
---

## How the quote is chosen

The quote depends only on your device's date. The page computes the **day of the year** (1 January = 1) and takes the remainder of dividing it by the number of quotes in the list. There's no randomness: the same day always gives the same quote.

The list currently holds **3 quotes** per language, so they repeat on a 3-day cycle:

| Quote (EN) | Author |
|---|---|
| Knowledge is power. | Francis Bacon |
| I am what I am | Popeye |
| May the Force be with you | Yoda |

In Spanish they are the same three: *El conocimiento es poder.*, *Yo soy aquello que soy* and *Que la fuerza te acompañe*.

### Things to keep in mind

- The **local** date of your device is used, so the quote changes at your midnight.
- The cycle restarts every year: 1 January counts as day 1.
- Because the day of the year restarts each year and 365 isn't a multiple of 3, the quote for a given calendar date changes from one year to the next.

## What happens when the page loads

1. *Loading quote of the day...* appears.
2. After 0.5 s the quote, author and date are shown.
3. The page also tries to **save the quote of the day to a Notion database** (see below). The result appears in the status bar.

## Saving to Notion

Once a day, the first time you open the page in a browser, it sends the quote of the day (Spanish and English) and the date to its own server (`/api/save-quote`), which stores it in Notion. Nothing about you is sent: only the quote and the date.

To avoid repeating it, the browser remembers the last saved day in `localStorage` under the key `quoteSavedDate`. That is the only data the page stores in your browser.

| Status bar message | Meaning |
|---|---|
| Saving to Notion... | Sending the quote. |
| Saved to Notion ✓ | Saved successfully. |
| Saved to Notion ✓ (hoy) | Already saved today from this browser. |
| Error saving ❌ | Saving failed. A red notice with details also appears. |

A failed save doesn't stop you from seeing the quote.

## Privacy

The page uses no accounts and no cookies of its own. See the [privacy policy](/privacy).
