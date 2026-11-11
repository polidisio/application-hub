---
title: Getting started
order: 1
---

LLMBox is a chat client for your Mac that talks to an AI server you already have, such as **Ollama**. The app ships no model and does not run the AI itself: it only sends your messages to your server and shows the reply. There are no accounts and no sign-up.

## Requirements

- A Mac with macOS 14.0 or later. This is the main platform. An iPhone/iPad version (iOS 17.0 or later) also exists, with many limitations, described in [LLMBox on iPhone and iPad](/apps/llmbox/docs/ios).
- An **Ollama** server your Mac can reach, with at least one model downloaded.
- The interface is **English only**; it does not follow the system language.

> LLMBox only understands Ollama's own API. It does not work with servers that offer only the OpenAI-compatible API. Details are in [Connecting to your server](/apps/llmbox/docs/server-setup).

## First launch

1. Open LLMBox. A 1024 x 800 window opens (minimum 900 x 700) and a brain icon appears in the menu bar.
2. The app tries to connect to the saved address. On first run it uses `http://192.168.1.172:11434`, a sample address that is almost certainly not yours, so you will see a red **Offline**.
3. Click the gear in the top right corner to open **Settings**, type your server URL in **AI Server URL** (for example `http://localhost:11434` if Ollama runs on the same Mac) and click **Reconnect**.
4. If the connection works, the indicator turns to **Online**, the number of models appears and the first model in the list is selected automatically. Click **Done**.
5. Type in the **Ask anything...** field and press Enter.

## Tour of the window

| Area | What is there |
|---|---|
| Blue sidebar, **Chats** | Your conversations and the **+** button to create a new one. |
| Header | The **LocalAI** title, **Online** / **Offline** status, the time of the last reply (for example `27.9s`) and the **Settings** gear. |
| Center | The messages. With no conversation selected you see **Start a conversation**. |
| Bottom | The **Ask anything...** field and the send button (paper plane). |

Your messages appear on the right in blue; replies appear on the left in gray, with the time below.

## What it does not include (yet)

To avoid surprises, this is what LLMBox does **not** do today:

- One server only: there is no server list or profiles.
- No authentication (keys, tokens, headers).
- No model settings (temperature, system prompt, etc.).
- The reply does not appear word by word: it arrives whole when finished.
- The model **does not remember** what was said earlier in the conversation.

Each point is explained in [Chatting](/apps/llmbox/docs/chatting) and [Connecting to your server](/apps/llmbox/docs/server-setup). What leaves your computer: [FAQ](/apps/llmbox/docs/faq).
