---
title: Data and backups
order: 6
---

Your data is stored **only on your device** (plus the mirror on the Apple Watch). There's no iCloud sync and no automatic backup of its own: you rely on the normal iOS device backup.

## Data settings

In **Settings**:

- **Keep consumption records**: **Indefinitely** (default), **7 days**, **30 days**, **90 days** or **365 days**. Older entries are deleted automatically when the app opens. Drinks aren't deleted.
- **Import Drinks** and **Export to CSV** (see below).
- **Delete All Consumption History** (in the **Danger Zone**): deletes all consumptions after you confirm (**Delete All Data?**) and can't be undone. It keeps your drinks and settings.
- **Analytics**: the **Share anonymous usage** switch, off by default.
- **About**: the app **Version**.

## Export to CSV (full history)

**Settings → Export to CSV** opens the share sheet with **all** entries. Columns: `Date`, `Drink`, `Emoji`, `Quantity`, `Unit Price`, `Total`, `Notes`. It includes notes.

## Export your drinks (JSON)

The share button on the main screen exports a JSON with the **drink list**: name, emoji, base price, category, order and each drink's cumulative count. It doesn't include history or dates.

## Import drinks

**Settings → Import Drinks**, or open an exported `.json` file (via AirDrop or Files). You choose:

- **Merge:** updates drinks that already exist (by identifier) and, for each one, adds a consumption with the file's quantity at the base price and the current time.
- **Replace:** **deletes all your consumptions and drinks** and creates the file's with their quantities. Entries with no name or a negative price are skipped.

> Importing the same file twice with **Merge** doubles the counters. And the app shows no import errors: if the file isn't valid, nothing simply happens.
