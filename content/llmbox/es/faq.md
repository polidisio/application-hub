---
title: Preguntas frecuentes
order: 6
---

## Veo "Offline" en rojo

La app no pudo leer `/api/tags` en la dirección guardada. Revisa por orden:

1. ¿Es correcta la URL en **Settings → AI Server URL**, con `http://` y el puerto? Recuerda que la dirección inicial (`http://192.168.1.172:11434`) es de ejemplo.
2. ¿Está Ollama en marcha? Abre la URL en un navegador: debería responder "Ollama is running".
3. Si Ollama está en otro equipo, ¿acepta conexiones de la red y el cortafuegos deja pasar el puerto 11434? Ver [Conectar con tu servidor](/apps/llmbox/docs/server-setup).
4. Pulsa **Reconnect**.
5. Si macOS pide permiso de acceso a la red local, acéptalo.

## Escribo y no recibo respuesta

La app no muestra errores, así que mira las causas más comunes:

| Causa | Qué hacer |
|---|---|
| No hay modelo elegido | **Settings → Model**. Sin modelo, el mensaje ni se envía. |
| El modelo ya no existe en el servidor | Elige otro en **Settings**. |
| El servidor se apagó o cambió de red | Comprueba Ollama y pulsa **Reconnect**. |
| El modelo es lento o está cargándose | Espera: puede tardar minutos. Pasados 5 minutos la petición se corta. |

## Las respuestas no aparecen palabra a palabra

Es así: la respuesta se muestra entera al terminar. Ver [Conversar](/apps/llmbox/docs/chatting).

## El modelo no recuerda lo que acabo de decir

Es una limitación actual: cada mensaje se envía solo, sin el historial. Escribe preguntas autocontenidas.

## "No models found"

Conectó con el servidor pero no tiene modelos, o la conexión falló. Pulsa la flecha circular. Si sigue igual, descarga un modelo en Ollama.

## Cambié la URL pero no se aplica

Hay que pulsar **Reconnect** antes de **Done**. Con **Done** a secas el cambio se descarta.

## ¿Puedo tener varios servidores?

No: hay una sola dirección. Para cambiar de servidor, cambia la URL y pulsa **Reconnect**.

## ¿Puedo usar LM Studio, llama.cpp u otro servidor?

Solo si imita la API de Ollama (`/api/tags` y `/api/generate`). La API compatible con OpenAI (`/v1/...`) no está soportada.

## ¿Puedo usar un servidor con clave?

No. LLMBox no envía claves ni cabeceras de autenticación.

## Borré una conversación sin querer

No se puede recuperar: no hay confirmación ni papelera. Exporta con **Export Chats** de vez en cuando.

## ¿Puedo recuperar o importar un export?

No hay importación. El archivo JSON sirve como copia legible.

## ¿Qué datos salen de mi equipo?

LLMBox solo se comunica con **la URL de tu servidor**: la lista de modelos y tus mensajes. El código no incluye analítica, cuentas ni otros servicios. Conversaciones y ajustes se quedan en tu equipo. Si tu servidor está en tu red local, tus datos no salen de ella; si pones un servidor remoto, los mensajes viajan hasta él (y por `http` van sin cifrar).

La app escribe en el registro del sistema el texto de las respuestas (mensajes de depuración). Es información local, pero tenlo en cuenta con contenido sensible. Política general de la web: [privacidad](/privacy).

## ¿En qué idiomas está?

Solo en inglés.
