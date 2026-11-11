---
title: Data and privacy
order: 8
---

StreamAura has no servers of its own, no accounts and no ads. Everything you set up is stored on your device. The full policy is on the [privacy page](/privacy/streamaura).

## What is stored and where

| Data | Where |
|---|---|
| Sources, channels, movies, series and favorites | The app's local database, on your device. |
| Watch progress | Local database. |
| Passwords for Xtream, SMB and WebDAV accounts, and Jellyfin and Plex sessions | Apple Keychain, never in the database or in logs. |
| M3U files you add | A copy inside the app. |
| Logos, posters and thumbnails | Cache on the device (see [Settings](/apps/streamaura/docs/settings)). |
| Chosen engine and buffer | App preferences. |

The app stores the addresses of your playlists and servers, but Xtream playback addresses do not carry your username and password: they are built at play time using the credentials in the Keychain.

## Analytics and accounts

- There is no analytics: the app doesn't ask for consent because it doesn't collect usage data.
- There is no sign-up or sign-in to StreamAura. The only sign-ins are to your own servers (Xtream, Jellyfin, Plex, SMB, WebDAV).
- The app only connects to the addresses you add.

## No sync and no backup

- **There is no iCloud sync** and no sync between devices. Your sources, favorites and progress belong to each device.
- **There is no export or import** of your data. On another device you will have to add your sources again.
- If the app cannot open its database, you see an orange notice on **Sources**: **The database could not be opened. Data will not be saved.** The app works in a temporary mode: what you add is lost when you close it. Restart the device or update the app.

## Delete your data

- **A source:** press and hold its card and choose **Delete**. It removes its channels, favorites, progress, credentials and the file copy.
- **A library server:** **My library** menu > **Delete name**. The files on your NAS are not touched.
- **All progress:** **Settings** > **Clear watch progress**.
- **Cached images:** **Settings** > **Clear image cache**.
- **Everything:** uninstall the app.

> On Apple TV the system may purge local storage when space runs low. If that happens, add your sources again.
