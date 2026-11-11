---
title: Connecting to your server
order: 2
---

Everything about the server and the model is set in **Settings** (the gear in the header). LLMBox stores the address and the chosen model on your Mac and remembers them on the next launch.

## Supported servers

LLMBox uses **Ollama**'s native API: it asks `/api/tags` for the model list and sends messages to `/api/generate`.

| Server | Works? |
|---|---|
| Ollama | Yes. |
| Servers with an OpenAI-compatible API (`/v1/...`) that do not mimic Ollama's API | No. |
| Other servers that do mimic `/api/tags` and `/api/generate` | Should, but untested. |

> Although the app's description mentions Gemma or Qwen, those are **models** you can run inside Ollama, not different servers.

There is no field for keys or tokens, so you cannot use a server that requires authentication.

## Setting the server address

1. Open **Settings** with the gear.
2. In **AI Server URL**, type the full address, including `http://` or `https://` and the port. Below it reads "Enter the URL of your AI server".
3. Click **Reconnect**.
4. Click **Done**.

Examples:

| Where Ollama runs | URL |
|---|---|
| On the same Mac | `http://localhost:11434` |
| On another computer on your network | `http://192.168.1.50:11434` (use that computer's IP) |

- Type the URL **without a trailing slash** and without a path (`/api/...`): the app appends the rest.
- Without `http://` in front, the app cannot use the address.
- Plain `http` is allowed, since local servers rarely have a certificate. With `https` you need a valid certificate.

> The address is only saved when you click **Reconnect**. If you close with **Done** without having clicked it, the change is discarded. Reconnect saves the URL even if the connection fails.

### Server on another computer

By default Ollama only listens on its own machine. To use it from another Mac you must configure Ollama (not LLMBox) to accept network connections, for example with the environment variable `OLLAMA_HOST=0.0.0.0`, and allow port 11434 in the firewall. See Ollama's documentation.

## Connection status

The header shows a dot and a label:

| Indicator | Meaning |
|---|---|
| Green, **Online** | The last check (`/api/tags`) succeeded. |
| Red, **Offline** | That check failed: wrong address, server off or no network. |

The status is checked **only** when the app opens, when the window opens and when you click **Reconnect**. It is not refreshed while you chat: if the server goes down later, it still says **Online**.

## Choosing a model

When it connects, the app reads the models installed on the server.

- In **Settings**, under **Model**, you see the counter (for example "2 models") and a dropdown with the names, such as `gemma4:e2b`.
- If the app had no saved model, it picks the first one in the list.
- Your choice is remembered between launches and used for every conversation. You cannot set a different model per conversation; to change it, go back to **Settings**.
- If there are no models you will see "No models found" and a circular-arrow button to retry. Download a model in Ollama (for example `ollama pull <model>`) and retry.

> LLMBox does not check that the saved model still exists. If you delete it from the server, sends will fail without a message; pick another model in **Settings**.
