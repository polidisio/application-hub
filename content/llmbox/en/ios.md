---
title: LLMBox on iPhone and iPad
order: 5
---

The project includes an iPhone and iPad version (iOS/iPadOS 17.0 or later). It is **far more limited** than the Mac version and, as it stands, has a serious flaw: you cannot change the server address.

> On iPhone and iPad the server address is always the default one (`http://192.168.1.172:11434`) and the **Settings** screen does not let you edit it. It is only usable if your Ollama server happens to be at that exact IP. Otherwise you will not be able to connect.

## Tabs

| Tab | Contents |
|---|---|
| **Chat** | List of conversations; tapping one opens the chat, with a **Chats** button to go back. |
| **Models** | Models on the server; tap one to select it (checkmark). |
| **Settings** | **AI Server** (a disabled field with an **Edit** button that does nothing), **Model** (model choice) and **Status** (**Connected** / **Disconnected**). |

## What works

- Typing in **Type a message...** and sending with the up arrow or Enter.
- Choosing a model in **Models** or **Settings**.
- Deleting a conversation by swiping left and tapping **Delete** (no confirmation).
- A **Stop** button appears while you wait.
- Conversations are saved on the device itself.

## Limitations compared with Mac

- You cannot edit the server URL and there is no **Reconnect**: the connection is checked only when the app opens.
- No renaming: every conversation shows as "New Chat" in the list.
- No export.
- No menu bar icon (it does not exist on iOS).
- The full reply also appears in a box under the text field and is not cleared when done; it is replaced when you send the next message.
- **Stop** hides the indicator, but the request may keep running and the reply may be added later.
- The app has no "local network" permission text. If iOS blocks access to your network, check **Settings → Privacy & Security → Local Network**.

Everything else (no conversation memory, no real streaming, no error messages) works the same as on Mac: see [Chatting](/apps/llmbox/docs/chatting).
