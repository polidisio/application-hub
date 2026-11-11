---
title: The terminal
order: 5
---

Once connected, the terminal fills the screen. It's a real `xterm-256color` emulator (SwiftTerm) running an interactive shell: vim, htop, tmux and ncurses apps work, with 256 colors. Standard output and error are mixed on screen, as in PuTTY.

## Top bar

| Element | What it does |
|---|---|
| Tabs (`user@host`) | Tap to switch session. The active one is bold. |
| **×** on each tab | Closes that session. |
| Magnifying glass | Shows or hides the search bar. |
| **+** | Opens another session (see below). |

With many tabs, the bar scrolls horizontally.

## Multiple tabs

Tap **+** and pick a server in the **New tab** sheet (**Cancel** closes it). Each tab is an independent SSH connection and all stay alive while you switch between them. You can open several tabs to the same server.

Closing the last tab returns you to the server list. There is no button to go back without closing them: close the tabs with **×**.

## Searching the scrollback

1. Tap the magnifying glass.
2. Type in **Search scrollback** and press Return (finds the next match).
3. Use the up and down arrows for the previous or next match.
4. Tap the magnifying glass again to close the bar and clear the highlight.

While searching, the keyboard belongs to the search field; the terminal regains focus when you close the bar. Search acts on the visible tab.

## Special keys

Above the iOS keyboard you get the emulator's key bar, with the keys a touch keyboard lacks: Esc, Ctrl, Tab, arrows and function keys (F1–F12). Use it for Ctrl+C or to leave vim with Esc, for example.

## Keyboard, screen and links

- The terminal area shrinks when the keyboard appears and the server is told the new size, so full-screen apps redraw correctly. Rotating the device also resizes it. Portrait and landscape are supported (upside-down too on iPad).
- If an app on the server prints a link, tapping it opens it in the browser.
- If the server copies text to the clipboard (OSC 52 sequence), it lands in the iOS clipboard.
- You can use a hardware keyboard.

> There are no settings inside the terminal. Font size and colors are changed from the main screen (see [Settings](/apps/noduscli/docs/settings)).

## What's missing

- No automatic reconnect and no message when the connection drops: if the server or network ends the session, the tab simply closes.
- No custom copy/paste or menus: standard iOS and SwiftTerm behavior applies.
- No SFTP or port forwarding.
