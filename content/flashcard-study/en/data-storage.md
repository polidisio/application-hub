---
title: Data and storage
order: 8
---

## Where your data lives

ThinkDeck Study works without an account or a connection. The app saves three files in its documents folder, inside your device:

| File | Contents |
|---|---|
| `decks.json` | Decks and cards. |
| `progress.json` | Review schedule (repetitions, ease factor, interval, next date). |
| `stats.json` | Card and deck statistics. |

The app doesn't use iCloud, has no sync between devices, has no servers of its own and sends no data anywhere. It doesn't include analytics or ads either. If you use device backup (iCloud or Finder), those files are included like the rest of the app's data. See the [privacy policy](/privacy).

## Data is not kept between launches

> **Important limitation:** at startup, the app always recreates the four sample decks (*Vocabulary*, *History*, *Science*, *Languages*) and overwrites `decks.json` with them. In practice, every time you fully close the app and reopen it:
>
> - Decks you created or imported are gone.
> - Cards you added, edited or deleted in the sample decks return to their original state.
> - Statistics and the review schedule are lost, because they are tied to identifiers that change on every launch.

While the app stays open, everything works normally and is written to the files. If you switch apps and come back, it usually all remains, but if iOS closes the app to free memory, you'll see the sample decks when you return.

Until this is fixed, use the app for one-off study sessions. If you import a deck, always keep the original file so you can import it again.

## Deleting your data

- One deck: press and hold it and choose **Delete** (no confirmation).
- Everything: uninstall the app. This removes its files from the device.

There is no export or backup restore inside the app.

## Language and appearance

- The language follows your device (Spanish, English, French or German).
- The app always uses the light theme.
