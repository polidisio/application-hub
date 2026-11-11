---
title: Troubleshooting and FAQ
order: 8
---

## I see "connection failed" in the terminal

Connection failures are printed inside the terminal, which stays open. Close the tab with **×** and fix the problem. Common causes:

| Message | What to do |
|---|---|
| `authFailed` with *server offers: password=… publicKey=…; tried key=… password=…; password empty=…* | Authentication failed. Read the detail: which methods the server accepts, which ones the app tried, and whether the password was empty. Check the user, the password, or that the public key is in `authorized_keys`. |
| `password empty=true` | No password is saved for that server and no key was used. Edit the server and add the password, or import a key. |
| `No route to host` (with a Local Network note) | Almost always the **Local Network** permission. Turn it on in iOS Settings > NodusCli > Local Network. |
| Connection refused or timeout | Check the host, the port, and that the SSH server is running and reachable from your network. |
| `connectionClosed` | The server closed the connection during sign-in. |
| `rejected` | You tapped **Cancel** on the host key alert. |

The messages are technical and in English: they are the raw network error text.

## It asks for the server key every time

The fingerprint is saved per `host:port` when you tap **Trust and connect**. If it asks again, it changed (**HOST KEY CHANGED**) or you're using a different address/port for the same server (for example IP instead of name).

## I can't import my key

See the table in [SSH keys](/apps/noduscli/docs/ssh-keys). The most common cases: an RSA key, a key with a passphrase, or an ECDSA key in OpenSSH format. An ed25519 key without a passphrase always works.

## The key file doesn't show in the picker

The picker accepts any file type. Make sure the file is in Files or iCloud Drive and is downloaded.

## I need to change the key

Tap **Remove key** and import the new one. The key is a single one shared by all servers.

## I want a different key per server

Not possible: there's one global key. Passwords, on the other hand, are per server.

## The tab closed by itself

The session ended: you typed `exit`, the server disconnected you, or the network dropped. There's no notice and no reconnect; open the server again.

## Does it work with Mosh or SFTP?

No. NodusCli is an SSH client with an interactive shell.

## Can I move my servers to another iPhone?

There's no export or sync. You'll need to add them again and re-import the key. See [Data and privacy](/apps/noduscli/docs/data-privacy).

## What data is sent?

None to us: there are no analytics. Only the SSH connection to your server is opened. Details in the [privacy policy](/privacy/noduscli).
