---
title: Servers
order: 2
---

Saved servers appear in the **Servers** section of the main screen. Tapping one opens the connection.

## Adding a server

Tap **+** (top right). The **New server** form has these fields:

| Field | Notes |
|---|---|
| **Name** | A free label. If left empty, the host is used as the name. |
| **Host** | DNS name or IP address. |
| **Port** | 22 by default. |
| **User** | Username on the server. |
| **Password (optional with key)** | Optional if you use a [private key](/apps/noduscli/docs/ssh-keys). |

**Save** is only enabled when **Host** and **User** are filled in. **Cancel** discards the form.

## Editing and deleting

Swipe a row to the left:

- **Edit** (blue) opens the **Edit server** form.
- **Delete** (red) removes the server and its saved password.

> **Delete** acts immediately, with no confirmation and no undo. If you want to keep the password, write it down first.

To remove only a server's password, edit it and clear the **Password** field: saving deletes it from the Keychain.

## Connecting

Tap the server. The app waits a moment for the screen to settle and opens the terminal with a fresh session.

- If the connection fails, the error is printed inside the terminal itself (it starts with `connection failed:`) and the tab stays open; close it with the **×**.
- If the server ends the session (for example with `exit`), the tab closes by itself. When the last one closes, you're back at the server list.

> Tapping a server in the list **replaces** any open tabs with a single new session. To keep several servers open at once, use the **+** inside the terminal (see [The terminal](/apps/noduscli/docs/terminal)).

## How it authenticates

The app tries the private key first (if you imported one and the server accepts public-key auth) and then the password (if you saved one and the server accepts passwords). Each method is tried once. The key is the same for every server. See [SSH keys](/apps/noduscli/docs/ssh-keys).
