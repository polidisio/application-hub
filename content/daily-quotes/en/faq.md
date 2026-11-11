---
title: FAQ
order: 4
---

## Why do I only ever see one of three quotes?

The list has only 3 quotes today, repeating in a cycle. To extend it, see [Add quotes](/apps/daily-quotes/docs/customise).

## Can I get another quote, or yesterday's?

No. There's no "new quote" button, no copy or share, and no history. The quote depends only on your device's date.

## Why don't the menus and buttons work?

They're WordPad-style decoration. None of them respond to clicks.

## How do I change the language?

There's no switch. The page uses your browser's language: Spanish if it starts with `es`, English otherwise.

## I see a black box at the bottom left saying "Debug mode"

It's a debug panel that is switched on in the published site. It shows the date, whether the quote was already saved today, and two buttons: *Reset save* (clears the saved flag and reloads, so the quote is sent to Notion again) and *Clear console*. You can ignore it. **To review:** it looks like something that shouldn't show in production.

## A red "Error saving to Notion" notice appears

Saving the quote to Notion failed (network or server). The quote still shows. Click *Reintentar* to reload, or *Copiar error* if you need to pass the details to the author. Until it saves, it will be retried on the next load. (These notices are in Spanish only.)

## The quote doesn't change at midnight

Your device's clock is used. Check that its date and time zone are correct and reload the page.

## Does it work offline?

No: you need a connection to load the page. Once loaded, the quote shows even if saving to Notion fails.

## What data does it store?

Only the `quoteSavedDate` flag in your browser's `localStorage`. See the [privacy policy](/privacy).
