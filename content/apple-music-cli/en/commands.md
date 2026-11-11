---
title: Commands
order: 2
---

## General syntax

```bash
apple-music <command> [arguments]
```

An unknown command, or none, prints "Usa 'apple-music help' para ver comandos" (use `apple-music help` to see commands).

## Playback

| Command | What it does | Message |
|---|---|---|
| `apple-music play` | Resumes playback. | ▶️ Reproduciendo |
| `apple-music pause` | Pauses. | ⏸️ Pausado |
| `apple-music toggle` | Pauses if playing; otherwise plays. | ⏸️ Pausado / ▶️ Reproduciendo |
| `apple-music next` | Skips to the next track and shows the new track's info. | Track info |
| `apple-music prev` or `previous` | Goes back one track and shows its info. | Track info |

`next` and `prev` wait 1 second before reading the track, so the app can switch.

There is no `stop` command.

## Track info

| Command | What it returns |
|---|---|
| `apple-music status` | Four lines: title (🎵), artist (👤), album (💿) and duration (⏱️) as `min:sec`. |
| `apple-music current` | Title only. |
| `apple-music artist` | Artist only. |

With no track, `status` prints "No hay canción reproduciéndose" (no song playing); `current` and `artist` print nothing.

## Volume

| Command | What it does |
|---|---|
| `apple-music volume up` | Raises by 10 points (max 100). |
| `apple-music volume down` | Lowers by 10 points (min 0). |
| `apple-music volume 50` | Sets the volume to a value (0-100). |
| `apple-music volume` | Shows the current volume. |

Note: the script changes the **system output volume** (`set volume output volume`), not a Music-specific volume.

## Search and play

```bash
apple-music play "Dark soundtrack"
```

Searches for the text and plays the first result. Put the text in quotes. This feature is unreliable: see [Permissions and problems](/apps/apple-music-cli/docs/troubleshooting).

The `play "song" artist "artist"` syntax appears in `SKILL.md`, but the script **does not implement it**: it only reads the first argument and ignores the rest.

## Playlists

```bash
apple-music playlist "My Playlist"
```

Plays a user playlist by its exact name. Without a name it prints "Usage: apple-music playlist <nombre>".

## Help

```bash
apple-music help
```

`--help` and `-h` also work.
