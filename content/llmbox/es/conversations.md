---
title: Conversaciones y exportación
order: 4
---

## Dónde se guardan

Las conversaciones se guardan solas, en cuanto envías o recibes un mensaje, en una base de datos SQLite local:

`~/Library/Application Support/LLMBox/localai.sqlite3`

No se sincronizan con iCloud ni con ningún otro servicio. La dirección del servidor y el modelo elegido se guardan aparte, en las preferencias de la app.

Al abrir LLMBox se selecciona automáticamente la conversación más reciente.

## La barra lateral Chats

- **+** crea una conversación nueva y vacía, y la selecciona.
- Las conversaciones se ordenan de más a menos reciente.
- Clic en una para abrirla.
- La que está abierta se marca con una barra blanca a la izquierda.

### Títulos

Una conversación nueva se llama "New Chat", pero en la lista se ve como los primeros 50 caracteres de tu primer mensaje (con "..." si es más largo). Para fijar un título propio, renómbrala.

### Renombrar y eliminar

Haz clic derecho sobre una conversación para ver el menú:

| Opción | Qué hace |
|---|---|
| **Rename** | Abre la hoja **Rename Chat** con el campo **Chat name** y los botones **Cancel** y **Save**. |
| **Delete** | Elimina la conversación y todos sus mensajes. |

> **Delete** no pide confirmación y no se puede deshacer. Si no tienes una copia exportada, los mensajes se pierden.

## Exportar

En **Settings**, el botón **Export Chats** guarda **todas** las conversaciones en un solo archivo.

1. Pulsa **Export Chats**.
2. En el cuadro de guardado, el nombre propuesto es `llmbox_export`. Elige carpeta y pulsa guardar.
3. Verás "Chats exported successfully!" durante dos segundos.

El archivo es JSON legible con, por cada conversación: id, título, fechas de creación y última modificación, y la lista de mensajes (id, rol `user`/`assistant`, texto y fecha). Las fechas son números (segundos desde el 1 de enero de 2001), no fechas escritas.

- No se puede exportar una sola conversación.
- No hay función de importar ni de restaurar.
- Si falla el guardado no aparece ningún aviso.

## Icono de la barra de menús

El icono de cerebro de la barra de menús abre un panel con:

| Elemento | Qué hace |
|---|---|
| **Recent Chats** | Hasta 5 conversaciones recientes; clic abre la ventana en esa conversación. Sin ninguna, ves "No recent chats". |
| **New Chat** | Crea una conversación nueva y muestra la ventana. A su lado se muestra ⌘N. |
| **Show Window** | Muestra la ventana principal. |
| **Quit** | Cierra la app. |

Cerrar la ventana no cierra la app: sigue activa en la barra de menús. Para volver a verla, usa **Show Window** o haz clic en su icono del Dock.

> La lista **Recent Chats** se carga al abrir la app y no se actualiza sola: las conversaciones nuevas no aparecen hasta reiniciar. Tampoco se ha comprobado que ⌘N funcione como atajo de teclado; usa el botón **New Chat**.
