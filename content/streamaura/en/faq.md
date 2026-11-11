---
title: FAQ
order: 9
---

## Does StreamAura include channels or playlists?

No. It's a player: you add your own sources (M3U/M3U8 playlists, Xtream Codes accounts or your NAS). The app does not include, host or recommend content.

## I don't see any source / the screen is empty

That's normal on first launch. Tap **Add source** or **+**. See [Getting started](/apps/streamaura/docs/getting-started).

## I can't pick an M3U file on Apple TV

On Apple TV only **Playlist from URL** and **Xtream Codes** are available. Host the playlist at a web address or add it from an iPhone or iPad.

## My playlist is stuck on "Importing…" or shows an orange triangle

Read the text under the name: it gives the reason (see the errors table in [IPTV playlists and Xtream accounts](/apps/streamaura/docs/iptv-sources)). With very large playlists the import can take a while; the **Importing… N channels** counter rises while it works. To retry, press and hold the card and choose **Refresh**.

## My provider changed the playlist and I don't see the changes

There is no automatic refresh. Press and hold the source and choose **Refresh**. For an **M3U file** source, **Refresh** re-reads the internal copy: delete it and add the file again.

## Channels, movies or series are missing from my Xtream account

Some providers publish less content in their API than in the M3U playlist. Delete the source and add it again as **Playlist from URL**; if the app offers **An Xtream account was detected**, choose **Keep as M3U playlist**.

## I can't edit a source or a server

Right: they can't be edited. Delete it (press and hold > **Delete**) and create it again with the right details.

## What does Turn off do?

It only puts a pause icon on the card. In this version it doesn't hide the source or change its behavior.

## I only see 3000 channels or 600 movies

Lists show at most 3000 channels and 600 movies or series at a time. Use search to find the rest.

## A channel won't play

Messages and actions are in [Player](/apps/streamaura/docs/player). Try **Try again**, and if your account allows a single connection, check it isn't in use on another device. You can also change the **Engine** in [Settings](/apps/streamaura/docs/settings).

## I don't have picture in picture or AirPlay

They only work with the AVPlayer engine (HLS and MP4). With VLC (TS, MKV, AVI, SMB, NFS) they are not available. You can try setting **Engine** to **AVPlayer (picture in picture, AirPlay)**, although formats AVPlayer doesn't understand will still fall back to VLC.

## I can't change audio or subtitles

The menu only appears when the content has tracks, and only with VLC. For an MP4 played with AVPlayer, set **Engine** to **VLC (more formats)**. On Apple TV, swipe up during a movie or episode.

## My NAS isn't found or reading fails

Check that the device and NAS are on the same network, that you granted **local network** permission, and that the address, shared folder and credentials are correct. For NFS, the NAS must allow connections from your device. Look at **Server status**. More in [My library (NAS)](/apps/streamaura/docs/my-library).

## My library shows odd names or doesn't group a series

Names are worked out from the file and its folders. Use names like `Show S01E02.mkv` or `Show/Season 2/05 - Title.mkv`. Then tap **Refresh**.

## Jellyfin or Plex say the session has expired

Delete the server and add it again with your username and password.

## Do my sources and favorites sync between my devices?

No. There is no sync or built-in backup. See [Data and privacy](/apps/streamaura/docs/data-privacy).

## Is there a program guide (EPG)?

No. The app doesn't show channel schedules.

## Does the app collect usage data?

No. See the [privacy policy](/privacy/streamaura).
