---
title: Getting started
order: 1
---

## What it is

Apple Music CLI is an OpenClaw skill: a shell script (`apple-music.sh`) that controls the **Music** app on your Mac through AppleScript. Commands like `apple-music play` or `apple-music next` let you control playback without opening the app window.

## Requirements

- macOS (the skill is declared for `darwin` only).
- The Music (Apple Music) app installed.
- OpenClaw, to install the skill.

Nothing else to install: the script uses `osascript`, which ships with macOS.

## Installation

```bash
openclaw skills add https://github.com/polidisio/apple-music-cli
```

The code lives at [github.com/polidisio/apple-music-cli](https://github.com/polidisio/apple-music-cli) (MIT license) and has three files: `README.md`, `SKILL.md` and `apple-music.sh`.

## First use

```bash
apple-music help
apple-music status
apple-music play
```

- `help` lists the commands.
- `status` shows the current track.
- `play` resumes playback.

The first time the app is controlled, macOS may ask for automation permission. See [Permissions and problems](/apps/apple-music-cli/docs/troubleshooting).

## Know this before you start

- All script messages are in Spanish, with emojis.
- The script **always** prints a success message (for example "Reproduciendo"), even if the command did not work. See [Permissions and problems](/apps/apple-music-cli/docs/troubleshooting).
- Everything is local: no account, network or keys. See [Privacy](/privacy).

## Next steps

- [Command reference](/apps/apple-music-cli/docs/commands)
- [Permissions and problems](/apps/apple-music-cli/docs/troubleshooting)
- [FAQ](/apps/apple-music-cli/docs/faq)
