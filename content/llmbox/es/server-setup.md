---
title: Conectar con tu servidor
order: 2
---

Todo lo relativo al servidor y al modelo se configura en **Settings** (el engranaje de la cabecera). LLMBox guarda en tu Mac la dirección y el modelo elegido y los recuerda en el siguiente arranque.

## Servidores compatibles

LLMBox usa la API nativa de **Ollama**: pide la lista de modelos a `/api/tags` y envía los mensajes a `/api/generate`.

| Servidor | ¿Funciona? |
|---|---|
| Ollama | Sí. |
| Servidores con API compatible con OpenAI (`/v1/...`) que no imitan la API de Ollama | No. |
| Otros servidores que sí imitan `/api/tags` y `/api/generate` | Debería, pero no está probado. |

> Aunque la ficha de la app menciona Gemma o Qwen, esos son **modelos** que puedes ejecutar dentro de Ollama, no servidores distintos.

No hay campo para claves ni tokens, así que no puedes usar un servidor que exija autenticación.

## Poner la dirección del servidor

1. Abre **Settings** con el engranaje.
2. En **AI Server URL** escribe la dirección completa, con `http://` o `https://` y el puerto. Debajo se lee "Enter the URL of your AI server".
3. Pulsa **Reconnect**.
4. Pulsa **Done**.

Ejemplos:

| Dónde corre Ollama | URL |
|---|---|
| En el mismo Mac | `http://localhost:11434` |
| En otro equipo de tu red | `http://192.168.1.50:11434` (usa la IP de ese equipo) |

- Escribe la URL **sin barra final** y sin ruta (`/api/...`): la app añade ella el resto.
- Sin `http://` delante, la app no puede usar la dirección.
- Se admite `http` (sin cifrar), porque los servidores locales rara vez tienen certificado. Con `https` hace falta un certificado válido.

> La dirección solo se guarda al pulsar **Reconnect**. Si cierras con **Done** sin haberlo pulsado, el cambio se descarta. Reconnect guarda la URL aunque la conexión falle.

### El servidor en otro equipo

Por defecto Ollama solo escucha en el propio equipo. Para usarlo desde otro Mac tienes que configurar Ollama (no LLMBox) para que acepte conexiones de la red, por ejemplo con la variable de entorno `OLLAMA_HOST=0.0.0.0`, y permitir el puerto 11434 en el cortafuegos. Consulta la documentación de Ollama.

## Estado de la conexión

La cabecera muestra un punto y un texto:

| Indicador | Significa |
|---|---|
| Verde, **Online** | La última comprobación (`/api/tags`) tuvo éxito. |
| Rojo, **Offline** | Esa comprobación falló: dirección errónea, servidor apagado o sin red. |

El estado se comprueba **solo** al abrir la app, al abrir la ventana y al pulsar **Reconnect**. No se actualiza mientras chateas: si el servidor se cae después, seguirá en **Online**.

## Elegir modelo

Al conectar, la app lee los modelos instalados en el servidor.

- En **Settings** aparece, bajo **Model**, el contador (por ejemplo "2 models") y un menú desplegable con los nombres, como `gemma4:e2b`.
- Si la app no tenía modelo guardado, elige el primero de la lista.
- Tu elección se recuerda entre arranques y se usa para todas las conversaciones. No se puede fijar un modelo distinto por conversación; para cambiar, vuelve a **Settings**.
- Si no hay modelos, verás "No models found" y un botón de flecha circular para reintentar. Descarga un modelo en Ollama (por ejemplo `ollama pull <modelo>`) y reintenta.

> LLMBox no comprueba que el modelo guardado siga existiendo. Si lo borras del servidor, los envíos fallarán sin mensaje; elige otro modelo en **Settings**.
