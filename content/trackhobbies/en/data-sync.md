---
title: Data, iCloud and backups
order: 7
---

Your lists, notes and reviews are yours: they live on your device and in your private iCloud. There are no TrackHobbies servers holding your content.

## iCloud sync

- It uses your private iCloud database (CloudKit). You need to be signed in to iCloud.
- There's no switch to turn it off.
- Offline, changes are stored on the device and iCloud syncs them when the network returns (standard CloudKit behaviour).
- If you delete a title, the deletion also syncs to your other devices.
- Conflicts are resolved by iCloud, not by the app.

### iCloud status

In **Stats**, under the analytics switch, the first line shows one of these states:

| Status | Meaning |
|---|---|
| **iCloud active** | All good. |
| **No iCloud account** | You're not signed in: the app works locally, without syncing. |
| **iCloud restricted** | Device restrictions prevent using it. |
| **iCloud temporarily unavailable** | A temporary problem. |
| **Couldn't check iCloud** | The status couldn't be queried. |

The second line shows the **Last sync** with the time and a word in parentheses: *import* (data received from another device), *export* (data sent) or *setup*. If none has happened yet you'll see *No syncs yet*. If something fails you'll see **iCloud error: code** in red, with a technical text you can select and copy.

## Exporting to CSV

Tap the share icon in each tab's bar. It exports **all** items of that type (not just the filtered ones) through the iOS share sheet. The file is named `trackhobbies_book.csv`, `trackhobbies_series.csv` or `trackhobbies_game.csv`. The button is disabled when the list is empty.

Columns, in this order: `type`, `title`, `author_or_creator`, `external_id`, `rating`, `status`, `pages`, `current_page`, `season`, `episode`, `total_seasons`, `total_episodes`, `hours`, `start_date`, `end_date`, `review`, `image_url`, `summary`. Fields are quoted; an empty field means "no value". Status is written as its code (`wishlist`, `not_started`, `in_progress`, `completed`, `archived`) and dates as `YYYY-MM-DD`. The reading percentage isn't exported to CSV.

## Importing a TrackHobbies CSV

Tap the import icon in the tab and pick the file. In **Series** and **Games** only CSVs exported from TrackHobbies are accepted; otherwise you'll see *The file is not a CSV exported from TrackHobbies.* A TrackHobbies CSV can contain any type and is added to the whole library, whichever tab you open it from. Imported items get their last-updated date set to the time of import.

## Importing from Goodreads

Books tab only.

1. Export your library from Goodreads (the *My Books* CSV).
2. In **Books** tap the **Import Goodreads CSV** icon and pick the file.
3. In the **Import from Goodreads** sheet you'll see *Import N books* and the **Find covers and descriptions** option (on by default), which looks each book up by title and author in Google Books.
4. Tap **Import**. A bar shows progress.

**What gets imported:**

| Goodreads | TrackHobbies |
|---|---|
| Title (without the series suffix, e.g. "(Series, #1)") | Title |
| Author | Author |
| ISBN13, or ISBN | Identifier |
| My Rating (0 = unrated) | Rating |
| Number of Pages | Total pages |
| Date Read | End date |
| My Review | Comment |

Shelves become statuses: `read` → **Completed**, `currently-reading` → **In progress**, `to-read` → **Wishlist**, any other → **Not started**. The start date and the current page are not imported, not even for books you're reading.

**Duplicates:** it compares the normalised title and the author against your library and within the file itself. Re-importing the same file adds nothing. When it finishes you'll see *Added: N. Skipped (already existed): M.*

**Covers and descriptions:** with the option on, one search is made per book, one after another, so large libraries take a while. It sets the cover from the best match and fills the summary, pages and author only if they were empty. It requires a similar title and the author's surname; if nothing fits, it skips the book. If the service rate-limits the requests, it stops enriching but still imports the rest. With the option off there are no covers or summaries.

## Backup (JSON)

In **Stats → Backup**:

- **Export backup (JSON)** opens the share sheet. The file is named `trackhobbies_backup_YYYY-MM-DD.json` and includes **all** fields and types, also uploaded covers and the reading percentage. It's disabled when the library is empty.
- **Restore backup** opens the file picker. **Restoring only adds what is missing: nothing is deleted or overwritten.** When it finishes you'll see *Added: N. Skipped (already existed): M.*

An item counts as already existing if its identifier matches, or the combination of type, title and external id does. That's why restoring can't be used to undo edits.

If the backup comes from a newer version of the app you'll see *The backup comes from a newer version of TrackHobbies. Update the app.* If the file isn't a backup, *The file is not a TrackHobbies backup.*

## Credits

Book, series and game data comes from Google Books, TVmaze and IGDB. The **Credits** screen links to each source.
