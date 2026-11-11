---
title: Movies and series
order: 4
---

A source's movies and series appear in the **Movies** and **Series** rows of its screen. You only see them if the source has that content: an Xtream account with a catalog, or an M3U playlist whose addresses contain `/movie/` or `/series/` (see [IPTV playlists and Xtream accounts](/apps/streamaura/docs/iptv-sources)).

What you keep on your NAS lives elsewhere: see [My library (NAS)](/apps/streamaura/docs/my-library).

## Browse the catalog

Opening **Movies** or **Series** shows:

| Row | Content |
|---|---|
| **Favorites** | Your movies or series marked with the heart. |
| **All** | The whole catalog of that type. |
| Categories | One per source category, with its count. Unnamed ones go to **Uncategorized**. |

Each category is a poster grid sorted alphabetically. The **Search movies** (or **Search series**) field searches by name across the source's whole catalog.

> Each grid shows at most **600 results**. If there are more you see *Showing the first 600 results. Use search to narrow down.*

## Movie detail page

It shows the poster, the title, the rating and a line with year, duration, genre and category when known. Below it: the synopsis, the **Director** and the **Cast**.

- The synopsis, director, cast, duration and year come only from Xtream accounts. With M3U playlists the page is more basic.
- **Play** starts from the beginning. If you've watched more than a few seconds and haven't finished, the button becomes **Resume from m:ss** and **Start over** appears.
- The heart in the top bar (**Add to favorites** / **Remove from favorites**) saves it in **Favorites**.

## Series detail page

It shows the poster, rating, category and synopsis, and below it the seasons and episodes.

- If there is more than one season, a horizontal selector (**Season 1**, **Season 2**…) switches the list.
- Each episode shows its number, its title (if it has none, **Episode N**), its duration, a progress bar if you started it and a checkmark if you finished it.
- With Xtream accounts, episodes are downloaded when you open the series. If that fails you see **Episodes could not be loaded** with the reason and a **Try again** button. With M3U playlists the episodes are already in the local catalog.
- When you play an episode, the queue is the rest of that season's episodes: you can jump to the previous or next one from the player. The next episode does not start by itself when one ends.

## Continue watching

The **Continue watching** row on a source's screen gathers the movies and episodes you started and haven't finished, most recent first.

- Tap one to resume where you left off.
- To remove it from the list, press and hold and choose **Remove from list**.
- If nothing is pending you see **Nothing pending** and *What you start watching will appear here.*

### How progress is saved

- It is saved for movies and episodes only; live channels have no progress.
- It is saved every few seconds while you play and when you close the player.
- Once you've watched 95% or more, it counts as finished: it leaves **Continue watching** and next time starts from the beginning.
- It only resumes if you were past 5 seconds.
- You can clear all progress in **Settings** (see [Settings](/apps/streamaura/docs/settings)).
