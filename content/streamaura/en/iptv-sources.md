---
title: IPTV playlists and Xtream accounts
order: 2
---

A **source** is an IPTV playlist (M3U/M3U8) or an Xtream Codes account. You can have several at once; each appears as a card on **Sources**.

## Add a source

1. On **Sources**, tap **+** and choose **Add IPTV playlist** (or **Add source** if the screen is empty).
2. On **New source**, pick the **Type** in the segmented control at the top.
3. Fill in the details and tap **Add source**.

**Name (optional)** lets you set your own name. If you leave it empty, the app uses the host of the address, the file name, or the account's server.

| Type | What you fill in |
|---|---|
| **Playlist from URL** | The web address of the playlist (`https://server/playlist.m3u`). It must be `http` or `https`. |
| **M3U file** | Tap **Choose file** and pick an `.m3u` or `.m3u8` from Files or iCloud Drive. |
| **Xtream Codes** | **Server or get.php link**, **Username** and **Password**. |

> On Apple TV the **M3U file** type does not exist (the system has no file picker): only **Playlist from URL** and **Xtream Codes** are available.

### Xtream accounts

- You can type the server (with a port if needed) and your credentials, or paste a full `get.php?username=…&password=…` link: the app extracts server, username and password, and you can leave those two fields empty.
- If you type the server without `http://` or `https://`, the app adds `http://`.
- Before saving, the app checks the account against the server. If anything fails you see the reason in red and the source is not added (see the **Common errors** table at the end of this page).
- Username and password are stored in the Apple Keychain, never in the app's database.

### When an M3U playlist is really an Xtream account

If you add a playlist by URL and the app finds a valid Xtream username, password and server in its stream addresses, the **An Xtream account was detected** dialog appears:

| Option | Result |
|---|---|
| **Use as Xtream account** | Saved as an Xtream account: you get detail pages with synopses and the right live format. |
| **Keep as M3U playlist** | Saved as a plain playlist. |
| **Cancel** | Nothing is added. |

> Some providers publish less content in their API than in the playlist. If, as an Xtream account, channels, movies or series are missing, delete the source and add it again with **Keep as M3U playlist**.

## What happens on import

Import runs in the background and doesn't block the app. While it runs, the card shows a spinner and **Importing… N channels**. When done it shows **N channels** (this counts live channels only; movies and series are counted inside their own sections).

- Very large playlists (tens of thousands of entries) are imported in batches.
- Repeated entries are dropped (same `tvg-id` and address, or same address).
- Corrupt lines are skipped without stopping the import.
- In an M3U playlist, addresses containing `/movie/` go to **Movies** and those containing `/series/` go to **Series**; everything else is a live channel. Series are grouped by name when the title has `S01E02` or `1x02`; otherwise each title counts as a one-season series.
- For Xtream, channels, movies and series are imported. If the server fails only for movies or series, live TV is still imported and those sections don't appear.
- The app has no program guide (EPG).

### Card states

| Indicator | Meaning |
|---|---|
| Spinner | Importing. |
| Orange triangle and message | The import failed. The text says why; if there are no details you see **Import failed**. |
| Pause icon | The source is marked as deactivated. |

## Manage a source

Press and hold a source card (on Apple TV, press and hold the center button of the remote) to open its menu:

| Action | What it does |
|---|---|
| **Refresh** | Downloads and re-imports the source. |
| **Turn off** / **Turn on** | Toggles the deactivated mark. |
| **Delete** | Asks for confirmation with **Delete name?** and the note *Its channels and favorites will be removed from this device.* |

> **There is no automatic refresh.** If your provider changes the playlist, use **Refresh**. Refreshing keeps your favorites and your watch progress.

> **Turn off only shows a pause icon.** In this version a deactivated source still opens and plays exactly as before; it isn't hidden or skipped when refreshing.

> **M3U files are copied into the app.** **Refresh** re-reads that copy, not the original file. If you change the file, delete the source and add it again.

> **A source can't be edited.** To change the name, address or credentials, delete it and create it again. Deleting also removes its watch progress, its Keychain credentials and the file copy.

## Common errors

| Message | What to do |
|---|---|
| Enter a valid http or https address. | Check the address; it must start with `http://` or `https://`. |
| Enter a username and password. | Fill in both fields or paste a complete `get.php` link. |
| Incorrect username or password. | Check the Xtream account credentials. |
| The account expired on … / The account is not active (status: …). | The account is not valid with your provider. |
| Could not connect to the server: … | Check the server and your connection. |
| The server responded with error N. | The server rejected the request; try later or check the address. |
| The server response is not in the expected format. | The address is not an Xtream server. |
| Could not download the playlist: … | The playlist by URL could not be downloaded. |
| The file is a video playlist (HLS), not a channel list. | The `.m3u8` address is a stream, not a playlist. |
| The playlist contains no valid channels. | The file is empty or not an M3U playlist. |
| The playlist file cannot be found. | The local copy no longer exists; add it again. On Apple TV, local storage can be purged. |
| The account credentials are missing. | The credentials are no longer in the Keychain; delete the source and add it again. |
