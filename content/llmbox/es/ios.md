---
title: LLMBox en iPhone y iPad
order: 5
---

El proyecto incluye una versión para iPhone y iPad (iOS/iPadOS 17.0 o posterior). Es una versión **mucho más limitada** que la de Mac y, tal como está, tiene un fallo grave: no se puede cambiar la dirección del servidor.

> En iPhone y iPad la dirección del servidor es siempre la que viene por defecto (`http://192.168.1.172:11434`) y la pantalla **Settings** no permite editarla. Solo es utilizable si tu servidor Ollama está justo en esa IP. Si no, no podrás conectar.

## Pestañas

| Pestaña | Contenido |
|---|---|
| **Chat** | Lista de conversaciones; al tocar una se abre el chat con el botón **Chats** para volver. |
| **Models** | Lista de modelos del servidor; toca uno para elegirlo (marca de verificación). |
| **Settings** | **AI Server** (campo desactivado con un botón **Edit** que no hace nada), **Model** (elección de modelo) y **Status** (**Connected** / **Disconnected**). |

## Qué sí funciona

- Escribir en **Type a message...** y enviar con la flecha hacia arriba o con Enter.
- Elegir modelo en **Models** o **Settings**.
- Borrar una conversación deslizando hacia la izquierda y pulsando **Delete** (sin confirmación).
- Mientras esperas aparece **Stop**.
- Las conversaciones se guardan en el propio dispositivo.

## Limitaciones frente a Mac

- No se puede editar la URL del servidor ni hay **Reconnect**: la conexión se comprueba solo al abrir la app.
- Sin renombrar conversaciones: en la lista todas aparecen como "New Chat".
- Sin exportación.
- Sin icono de barra de menús (no existe en iOS).
- La respuesta completa aparece también en un recuadro bajo el campo de texto y no se limpia al terminar; se reemplaza al enviar el mensaje siguiente.
- El botón **Stop** oculta el indicador, pero la petición puede seguir en curso y la respuesta añadirse más tarde.
- No hay texto de permiso de "red local" en la app. Si iOS bloquea el acceso a tu red, revisa **Ajustes → Privacidad y seguridad → Red local**.

Todo lo demás (no hay memoria de la conversación, sin streaming real, sin mensajes de error) funciona igual que en Mac: ver [Conversar](/apps/llmbox/docs/chatting).
