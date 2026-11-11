---
title: FAQ
order: 4
---

## Does it work on Windows or Linux?

No. It is macOS only: it uses AppleScript and the Music app.

## Do I need an Apple Music subscription?

`SKILL.md` says it works with a subscription. Nothing is documented for local-only songs. Not verified.

## Is my data sent anywhere?

Not by the script: it only runs `osascript` on your Mac and makes no network requests and uses no keys. More in [Privacy](/privacy).

## How do I stop the music completely?

There is no `stop`. Use `apple-music pause`.

## Can I change the message language?

No: the texts are written in Spanish inside the script.

## It says "Reproduciendo" but nothing plays?

See [Permissions and problems](/apps/apple-music-cli/docs/troubleshooting): the script hides errors.

## Where are all the commands?

In the [command reference](/apps/apple-music-cli/docs/commands) or with `apple-music help`.

## How do I report a bug?

Open an issue on [GitHub](https://github.com/polidisio/apple-music-cli).
