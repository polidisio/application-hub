---
title: Permissions and problems
order: 3
---

## Automation permission

The script controls the Music app with AppleScript. The first time, macOS may ask whether your terminal (or OpenClaw) can control "Music". Allow it.

If you declined, enable it in **System Settings → Privacy & Security → Automation**, and tick "Music" under the app you run the command from.

## The script does not report errors

This matters: the script discards `osascript` errors and always prints its success message. If you see "Reproduciendo" but nothing plays, the command probably failed. Check the result with `apple-music status`.

Commands have a 3-second limit; after that they are cut off silently.

## Check that `timeout` exists

The script calls the `timeout` command, which **does not ship with macOS** (it comes from GNU coreutils). Check whether you have it:

```bash
which timeout
```

If nothing is printed, commands will not run and you will see no error. With Homebrew you can install it:

```bash
brew install coreutils
```

This creates `gtimeout`; for `timeout` to exist you must add coreutils' `gnubin` folder to your PATH. This is a possible skill bug, not yet confirmed on your Mac.

## Known problems

| Symptom | Cause |
|---|---|
| `play "text"` says "Reproduciendo" but nothing plays | AppleScript search is unreliable; use `apple-music playlist` or open it in the app. |
| `play "song" artist "artist"` ignores the artist | Not implemented in the script. |
| `status` shows a strange duration or fails | Duration is computed with integer arithmetic and the app may return decimals. |
| `volume` changes the volume of the whole Mac | It uses the system volume. |
| `playlist` can't find the list | The name must match exactly; user playlists only. |
| Quotes in the text break the command | The text is inserted unescaped into the AppleScript; avoid double quotes. |
| `volume 250` | The range is not validated. Use 0 to 100. |
