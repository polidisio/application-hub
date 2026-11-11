---
title: Player
order: 6
---

The player opens full screen when you tap a channel, movie or episode. The controls hide on their own after 4 seconds; tap the screen to show or hide them.

## Controls on iPhone and iPad

| Control | What it does |
|---|---|
| **X** (top left) | Closes the player. |
| Title | The channel name (with its number if it has one) and, below it, the group; for movies and series, the category or the episode. |
| Captions bubble icon | The **Audio and subtitles** menu (see below). |
| **Picture in picture** | Plays in a floating window. Only with the AVPlayer engine. |
| AirPlay icon | Choose an AirPlay destination. |
| **Skip back 10 seconds** / **Skip forward 10 seconds** | Movies and episodes only. |
| **Previous channel** / **Next channel** | For live TV, when the list has more than one channel. For movies and series they are called **Previous episode** and **Next episode**. |
| **Pause** / **Play** | Pauses or resumes. |
| Progress bar | Movies and episodes only: drag to jump to another point; shows current and total time. |

> Channel switching wraps around: after the last channel in the list you go back to the first.

### Gestures

- **Tap** the screen: shows or hides the controls.
- **Swipe up** on live TV: next channel. **Swipe down**: previous channel. On movies and episodes this gesture does nothing.

## Controls on Apple TV

The on-screen controls are informational only; you use the remote:

| Remote | Live TV | Movie or episode |
|---|---|---|
| **Left** / **Right** | — | Skip back / forward 10 seconds. |
| **Up** | Previous channel. | Opens **Audio and subtitles** (if there are tracks). |
| **Down** | Next channel. | — |
| **Play/Pause** | Pauses or resumes. | Pauses or resumes. |
| **Menu** | Closes the player. | Closes the player. |

## Audio and subtitles

If the content has several audio or subtitle tracks (for example an MKV), you can choose them:

- On iPhone and iPad, with the **Audio and subtitles** menu. Its sections are **Audio** (only if there is more than one track) and **Subtitles**, with the **Off** option. The active track has a checkmark.
- On Apple TV, by swiping up during a movie or episode, which opens the **Audio and subtitles** sheet.
- If a track has no name it appears as **Track N**.

> The track menu only appears when the content has tracks available, and it only works with the **VLC** engine. With AVPlayer (HLS and MP4 by default) the menu is not offered. If you need to choose tracks in an MP4, set **Engine** to **VLC (more formats)** in [Settings](/apps/streamaura/docs/settings).

## Playback engines

StreamAura includes two engines and picks one based on the format:

| Engine | What for | Limitations |
|---|---|---|
| **AVPlayer** | HLS (`m3u8`) and MP4. | Supports picture in picture and AirPlay. Does not play raw TS, MKV or AVI. |
| **VLC** | Raw TS, MKV, AVI and other formats; SMB and NFS; addresses without an extension. | No picture in picture or video AirPlay. |

With **Automatic** (the default), the app uses AVPlayer for HLS and MP4 and VLC for the rest, and switches to the other engine on its own if the first fails. SMB and NFS libraries, and WebDAV addresses with a username, always use VLC. You can force the engine in [Settings](/apps/streamaura/docs/settings).

## Loading, retries and errors

- While loading you see a spinner and the content name. Each attempt waits up to 15 seconds.
- If it fails, the app retries up to three times with growing pauses and tries the other engine. If a live stream drops midway, it tries to reconnect up to three times.
- If it still doesn't work, you see an orange triangle, the name, the reason and a **Try again** button. For Xtream accounts it adds: *Check that the account is not playing on another device: some allow only one connection.*

| Message | Meaning |
|---|---|
| The channel is taking too long to respond. | The server didn't answer in time. |
| This channel could not be played. / The stream could not be played. | The stream could not be opened. |
| Playback was interrupted. | Playback dropped. |
| The channel address is not valid. | The stored address can't be used. |
| The account credentials are missing. | The Xtream account credentials are no longer in the Keychain. |
| Playback cannot be started. | No engine is available; tap **Close**. |

> On a movie's detail page, some formats (MKV, AVI, TS…) show the note *MKV format: not supported yet.* even though VLC can usually play them. It's a leftover text: tap **Play** anyway.
