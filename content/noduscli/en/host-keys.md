---
title: Connection security
order: 4
---

NodusCli verifies the server's identity like PuTTY does: **trust on first use**. The first time, you confirm the fingerprint; afterwards the app warns you if it changes.

## First connection: Unknown host

The first time you connect to a `host:port` you'll see the **Unknown host** alert with the text *First connection to host:port* and the fingerprint in `SHA256:…` format.

| Button | Effect |
|---|---|
| **Trust and connect** | Saves the fingerprint and continues. |
| **Cancel** | Saves nothing and cancels the connection. |

Compare the fingerprint with the server's (for example with `ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub` on the server) if you want to be sure.

## The key changed: HOST KEY CHANGED

If the fingerprint no longer matches the saved one, **HOST KEY CHANGED** appears with the message *The key of host:port differs from the one saved. Someone may be intercepting the connection.*

| Button | Effect |
|---|---|
| **Connect anyway** | Replaces the saved fingerprint with the new one and connects. |
| **Cancel** | Cancels the connection. |

> A legitimate change happens when the server is reinstalled or its keys are regenerated. If you didn't expect it, tap **Cancel**: it could be interception.

## Details

- The fingerprint is tied to `host:port`: the same server on another port counts as a different host.
- Two saved servers with the same host and port share the fingerprint.
- There is no screen to view or delete saved fingerprints. They're kept as long as the app is installed.
- The confirmation alert handles one question at a time. If two tabs ask at once, the first may be left unanswered; open tabs one at a time.
