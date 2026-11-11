---
title: Primeros pasos
order: 1
---

LLMBox es un cliente de chat para tu Mac que habla con un servidor de IA que ya tienes, como **Ollama**. La app no incluye ningún modelo ni ejecuta la IA: solo envía tus mensajes a tu servidor y muestra la respuesta. No hay cuentas ni registro.

## Requisitos

- Un Mac con macOS 14.0 o posterior. Es la plataforma principal; existe también una versión de iPhone/iPad (iOS 17.0 o posterior) con muchas limitaciones, descrita en [LLMBox en iPhone y iPad](/apps/llmbox/docs/ios).
- Un servidor **Ollama** accesible desde tu Mac, con al menos un modelo descargado.
- La interfaz está **solo en inglés**; no cambia con el idioma del sistema.

> LLMBox solo entiende la API propia de Ollama. No funciona con servidores que ofrecen únicamente la API compatible con OpenAI. Los detalles están en [Conectar con tu servidor](/apps/llmbox/docs/server-setup).

## Primer arranque

1. Abre LLMBox. Se abre una ventana de 1024 × 800 (mínimo 900 × 700) y aparece un icono de cerebro en la barra de menús.
2. La app intenta conectarse a la dirección guardada. La primera vez usa `http://192.168.1.172:11434`, una dirección de ejemplo que casi seguro no es la tuya, así que verás **Offline** en rojo.
3. Pulsa el engranaje de la esquina superior derecha para abrir **Settings**, escribe la URL de tu servidor en **AI Server URL** (por ejemplo `http://localhost:11434` si Ollama corre en el mismo Mac) y pulsa **Reconnect**.
4. Si la conexión funciona, el indicador pasa a **Online**, aparece el número de modelos y se selecciona automáticamente el primero de la lista. Pulsa **Done**.
5. Escribe en el campo **Ask anything...** y pulsa Enter.

## Recorrido por la ventana

| Zona | Qué hay |
|---|---|
| Barra lateral azul, **Chats** | Lista de tus conversaciones y el botón **+** para crear una nueva. |
| Cabecera | Título **LocalAI**, estado **Online** / **Offline**, tiempo de la última respuesta (por ejemplo `27.9s`) y el engranaje de **Settings**. |
| Centro | Los mensajes. Sin ninguna conversación seleccionada ves **Start a conversation**. |
| Parte inferior | Campo **Ask anything...** y botón de enviar (avión de papel). |

Tus mensajes salen a la derecha en azul; las respuestas, a la izquierda en gris, con la hora debajo.

## Qué no incluye (todavía)

Para evitar sorpresas, esto es lo que LLMBox **no** hace hoy:

- Un solo servidor: no hay lista de servidores ni perfiles.
- Sin autenticación (claves, tokens, cabeceras).
- Sin ajustes de modelo (temperatura, prompt de sistema, etc.).
- La respuesta no aparece palabra a palabra: llega entera al terminar.
- El modelo **no recuerda** lo hablado antes en la conversación.

Cada punto está explicado en [Conversar](/apps/llmbox/docs/chatting) y en [Conectar con tu servidor](/apps/llmbox/docs/server-setup). Qué sale de tu equipo: [Preguntas frecuentes](/apps/llmbox/docs/faq).
