---
title: Add quotes
order: 3
---

Daily Quotes has no admin panel or form: the quotes are written **inside the page's code**. To add or change quotes you edit the source and republish the site.

## Where the quotes live

Everything is in the `notion.js` file, loaded by `index.html`. The quotes appear in **two places**, and you must keep both in sync:

| Place | What it's used for |
|---|---|
| `fallbackQuotes` | What you **see on screen** (one list per language). |
| `getBothQuotes()` (`esQuotes` and `enQuotes`) | What is **saved to Notion**. |

Each quote is an object with two fields:

```js
{ text: "Knowledge is power.", author: "Francis Bacon" }
```

## Steps

1. Add the new quote at the end of the Spanish list and the English list of `fallbackQuotes`.
2. Do the same in `esQuotes` and `enQuotes` inside `getBothQuotes()`.
3. Keep **the same order and the same number of quotes** in Spanish and English: the day picks a position using a remainder, and both lists must line up.
4. Publish the changes. The site is deployed on Vercel.

The cycle grows on its own: with 10 quotes, the quote changes daily for 10 days and then starts over.

## Limitations

- If you forget to update one of the two copies (screen or Notion), what's shown and what's saved won't match.
- Adding quotes changes which one falls on each day, including past dates.
- You can't pin a quote to a specific date.
