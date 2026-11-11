---
title: Chatting
order: 3
---

## Sending a message

1. Select a conversation in the sidebar or create one with the **+** button in **Chats**. If none is selected and you send a message, the app creates one.
2. Type in the **Ask anything...** field.
3. Press Enter or click the send button (paper plane). The button is disabled when the field is empty or while you are waiting for a reply.

Your message appears instantly on the right. While the model works you see three animated dots; when it finishes, the reply appears on the left and the header shows how long it took (for example `27.9s`).

> With no model selected, sending does nothing. Pick one in **Settings** (see [Connecting to your server](/apps/llmbox/docs/server-setup)).

## How replies arrive

- **There is no real streaming.** The app waits for the server to finish the whole reply and then shows it at once. With big models or slow machines you may see only the dots for a long time (the example in the screenshot took almost 28 seconds).
- **Time limit:** if the server does not answer within 5 minutes, the request is cut off.
- **There is no button to stop** a reply on macOS.
- Replies are shown as **plain text**: Markdown and code blocks are not rendered.

## Conversation memory

> Important: each message is sent to the model **on its own**, without the previous ones. The model does not remember what you said earlier in the same conversation, even though the history is visible on screen.

So write each question so it stands alone (for example "Summarize this text: ..." with the text included) instead of "and what about the second point?".

## No system prompts or parameters

There is no field for a system prompt, temperature or other parameters: the model answers with its default configuration in Ollama.

## What you see when something fails

The app **shows no error messages**. If the server does not respond or returns an error, the dots disappear, your message stays on screen and no reply comes. See the [FAQ](/apps/llmbox/docs/faq) for common causes.

## Actions on messages

On macOS there are no buttons to copy, edit, delete or regenerate a message. To remove content, delete the whole conversation (see [Conversations and export](/apps/llmbox/docs/conversations)).
