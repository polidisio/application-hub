---
title: FAQ
order: 6
---

## I see a red "Offline"

The app could not read `/api/tags` at the saved address. Check in order:

1. Is the URL in **Settings → AI Server URL** correct, with `http://` and the port? Remember the initial address (`http://192.168.1.172:11434`) is only a sample.
2. Is Ollama running? Open the URL in a browser: it should answer "Ollama is running".
3. If Ollama is on another computer, does it accept network connections and does the firewall allow port 11434? See [Connecting to your server](/apps/llmbox/docs/server-setup).
4. Click **Reconnect**.
5. If macOS asks for local network access, allow it.

## I type and get no reply

The app shows no errors, so check the most common causes:

| Cause | What to do |
|---|---|
| No model selected | **Settings → Model**. Without a model, the message is not even sent. |
| The model no longer exists on the server | Pick another in **Settings**. |
| The server went off or changed network | Check Ollama and click **Reconnect**. |
| The model is slow or still loading | Wait: it can take minutes. After 5 minutes the request is cut off. |

## Replies do not appear word by word

That is how it works: the reply is shown whole when finished. See [Chatting](/apps/llmbox/docs/chatting).

## The model does not remember what I just said

This is a current limitation: each message is sent on its own, without the history. Write stand-alone questions.

## "No models found"

It connected to the server but it has no models, or the connection failed. Click the circular arrow. If nothing changes, download a model in Ollama.

## I changed the URL but it is not applied

You must click **Reconnect** before **Done**. With **Done** alone the change is discarded.

## Can I have several servers?

No: there is a single address. To switch servers, change the URL and click **Reconnect**.

## Can I use LM Studio, llama.cpp or another server?

Only if it mimics Ollama's API (`/api/tags` and `/api/generate`). The OpenAI-compatible API (`/v1/...`) is not supported.

## Can I use a server that needs a key?

No. LLMBox sends no keys or authentication headers.

## I deleted a conversation by accident

It cannot be recovered: there is no confirmation and no trash. Use **Export Chats** from time to time.

## Can I restore or import an export?

There is no import. The JSON file works as a readable backup.

## What data leaves my computer?

LLMBox only talks to **your server's URL**: the model list and your messages. The code includes no analytics, accounts or other services. Conversations and settings stay on your computer. If your server is on your local network, your data does not leave it; if you point to a remote server, messages travel to it (and over `http` they are unencrypted).

The app writes the text of replies to the system log (debug messages). It is local information, but keep it in mind with sensitive content. The website's general policy: [privacy](/privacy).

## Which languages is it in?

English only.
