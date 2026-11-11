---
title: Conversar
order: 3
---

## Enviar un mensaje

1. Selecciona una conversación en la barra lateral o crea una con el botón **+** de **Chats**. Si no hay ninguna seleccionada y envías un mensaje, la app crea una sola.
2. Escribe en el campo **Ask anything...**.
3. Pulsa Enter o el botón de enviar (avión de papel). El botón está desactivado si el campo está vacío o si ya esperas una respuesta.

Tu mensaje aparece al instante a la derecha. Mientras el modelo trabaja ves tres puntos animados; cuando termina, la respuesta aparece a la izquierda y, en la cabecera, cuánto tardó (por ejemplo `27.9s`).

> Sin un modelo elegido, el envío no hace nada. Elige uno en **Settings** (ver [Conectar con tu servidor](/apps/llmbox/docs/server-setup)).

## Cómo llegan las respuestas

- **No hay streaming real.** La app espera a que el servidor termine la respuesta completa y entonces la muestra de golpe. Con modelos grandes o equipos lentos puede pasar mucho rato (el ejemplo de la captura tardó casi 28 segundos) viendo solo los puntos.
- **Tiempo máximo:** si el servidor no responde en 5 minutos, la petición se corta.
- **No hay botón para parar** una respuesta en macOS.
- Las respuestas se muestran como **texto plano**: no se interpretan Markdown ni bloques de código.

## Memoria de la conversación

> Importante: cada mensaje se envía al modelo **solo**, sin los anteriores. El modelo no recuerda lo que dijiste antes en la misma conversación, aunque el historial se vea en pantalla.

Por eso conviene escribir cada pregunta de forma autocontenida (por ejemplo, "Resume este texto: ..." con el texto incluido) en lugar de "y qué pasa con el segundo punto?".

## Sin prompts de sistema ni parámetros

No existe ningún campo para el prompt de sistema, la temperatura u otros parámetros: el modelo responde con su configuración por defecto en Ollama.

## Qué ves cuando algo falla

La app **no muestra mensajes de error**. Si el servidor no responde o devuelve un error, el indicador de puntos desaparece, tu mensaje queda en pantalla y no llega respuesta. Mira [Preguntas frecuentes](/apps/llmbox/docs/faq) para las causas habituales.

## Acciones sobre los mensajes

En macOS no hay botones para copiar, editar, borrar ni regenerar un mensaje. Para quitar contenido, elimina la conversación entera (ver [Conversaciones y exportación](/apps/llmbox/docs/conversations)).
