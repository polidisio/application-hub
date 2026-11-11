---
title: Getting started
order: 1
---

NodusCli is an SSH client for iPhone and iPad. It opens a real shell session on your server (an `xterm-256color` terminal), so vim, htop, tmux and other terminal apps work as on a computer. There are no accounts or sign-up: open the app and start.

## Requirements

- An iPhone or iPad running iOS/iPadOS 17.0 or later.
- A server with SSH reachable from your device.
- For servers at home or at the office, the **Local Network** permission (see [Troubleshooting](/apps/noduscli/docs/faq)).

> The NodusCli interface is English only. This manual uses the labels exactly as they appear in the app (for example **Servers**, **Import private key…**).

## First launch

There is no welcome screen, no analytics prompt and no sign-in. You land on the main screen, which has two sections:

| Section | Contents |
|---|---|
| **Servers** | Your saved servers. Empty at first: *Tap + to add a server*. |
| **SSH key** | Your private key, if you imported one. |

The top-left gear opens settings and the top-right **+** adds a server.

## Your first connection

1. Tap **+**.
2. Fill in **Name**, **Host**, **Port**, **User** and, if you don't use a key, **Password**. Tap **Save**.
3. Tap the server in the list.
4. The first time, **Unknown host** appears with the SHA256 fingerprint of the server's key. If it's the right one, tap **Trust and connect**.
5. The terminal opens full screen.

More detail in [Servers](/apps/noduscli/docs/servers), [SSH keys](/apps/noduscli/docs/ssh-keys) and [Connection security](/apps/noduscli/docs/host-keys).

## What it doesn't do (yet)

- No SFTP or file transfer.
- No RSA keys and no passphrase-protected keys.
- No sync or export of your servers: everything stays on the device. See [Data and privacy](/apps/noduscli/docs/data-privacy).
