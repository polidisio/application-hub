---
title: Settings
order: 7
---

Open **Settings** with the gear icon on the **Sources** screen. It has three sections. Changes apply immediately and are stored on the device; there is no save button.

## Playback

| Setting | Options | What it is for |
|---|---|---|
| **Engine** | **Automatic** (default), **AVPlayer (picture in picture, AirPlay)**, **VLC (more formats)** | Chooses which engine is tried first. With **Automatic**, AVPlayer plays HLS and MP4 and VLC the rest. If the chosen engine fails, the app tries the other. See [Player](/apps/streamaura/docs/player). |
| **VLC network buffer** | 0.8 s, **1.5 s** (default), 3.0 s, 5.0 s | How much content VLC preloads. A larger buffer reduces interruptions on slow connections but delays playback start. It only affects the VLC engine. |

> SMB and NFS libraries and WebDAV addresses with a username always play with VLC, whichever engine you choose.

## Storage

| Item | What it does |
|---|---|
| **Image cache** | Shows how much disk space the downloaded logos and posters use. |
| **Clear image cache** | Empties that cache. Images are downloaded again when needed. |
| **Clear watch progress** | Asks for confirmation (**Clear the progress of everything you've watched?**, buttons **Clear progress** and **Cancel**) and deletes the progress of **all** movies and episodes, across all sources and your library. It empties **Continue watching**. |

The image cache limits itself to about 300 MB: when the app opens, the oldest images are removed if it goes over that size.

## About

| Item | What it shows |
|---|---|
| **Version** | The app version and build, e.g. `1.0 (2)`. |
| **Legal notices** | Two texts: **VLCKit** (the app uses VideoLAN's VLCKit and libVLC under the LGPL 2.1 or later license, with links to **VLCKit source code** and **LGPL 2.1 license**) and **Content** (StreamAura is a player and does not include or provide channels, playlists or accounts). |

## What isn't in Settings

There are no settings for language (the device language is used), theme (always dark), parental control, sync or analytics. Sources and servers are managed from **Sources**, not from here.
