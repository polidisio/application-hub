---
title: Conversations and export
order: 4
---

## Where they are stored

Conversations save themselves as soon as you send or receive a message, in a local SQLite database:

`~/Library/Application Support/LLMBox/localai.sqlite3`

They do not sync with iCloud or any other service. The server address and the chosen model are stored separately, in the app's preferences.

When LLMBox opens, the most recent conversation is selected automatically.

## The Chats sidebar

- **+** creates a new empty conversation and selects it.
- Conversations are ordered from most to least recent.
- Click one to open it.
- The open one is marked with a white bar on its left.

### Titles

A new conversation is called "New Chat", but in the list it shows as the first 50 characters of your first message (with "..." if longer). To set your own title, rename it.

### Rename and delete

Right-click a conversation to see the menu:

| Option | What it does |
|---|---|
| **Rename** | Opens the **Rename Chat** sheet with the **Chat name** field and the **Cancel** and **Save** buttons. |
| **Delete** | Deletes the conversation and all its messages. |

> **Delete** asks for no confirmation and cannot be undone. Without an exported copy, the messages are lost.

## Export

In **Settings**, the **Export Chats** button saves **all** conversations into a single file.

1. Click **Export Chats**.
2. In the save dialog the suggested name is `llmbox_export`. Choose a folder and save.
3. You will see "Chats exported successfully!" for two seconds.

The file is readable JSON with, for each conversation: id, title, creation and last-modified dates, and the list of messages (id, role `user`/`assistant`, text and date). Dates are numbers (seconds since 1 January 2001), not written-out dates.

- You cannot export a single conversation.
- There is no import or restore function.
- If saving fails, no warning appears.

## Menu bar icon

The brain icon in the menu bar opens a panel with:

| Item | What it does |
|---|---|
| **Recent Chats** | Up to 5 recent conversations; click opens the window on that conversation. With none, you see "No recent chats". |
| **New Chat** | Creates a new conversation and shows the window. ⌘N is displayed next to it. |
| **Show Window** | Shows the main window. |
| **Quit** | Quits the app. |

Closing the window does not quit the app: it stays active in the menu bar. To see the window again, use **Show Window** or click its Dock icon.

> The **Recent Chats** list loads when the app opens and does not refresh by itself: new conversations do not appear until you restart. It has also not been verified that ⌘N works as a keyboard shortcut; use the **New Chat** button.
