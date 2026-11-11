---
title: La terminal
order: 5
---

Al conectar, la terminal ocupa toda la pantalla. Es un emulador `xterm-256color` real (SwiftTerm) con un shell interactivo: vim, htop, tmux y apps ncurses funcionan, con colores de 256 tonos. La salida de error y la normal se mezclan en pantalla, como en PuTTY.

## Barra superior

| Elemento | Qué hace |
|---|---|
| Pestañas (`usuario@host`) | Tócalas para cambiar de sesión. La activa va en negrita. |
| **×** de cada pestaña | Cierra esa sesión. |
| Lupa | Muestra u oculta la barra de búsqueda. |
| **+** | Abre otra sesión (ver abajo). |

Si hay muchas pestañas, la barra se desplaza en horizontal.

## Varias pestañas

Pulsa **+** y elige un servidor en la hoja **New tab** (**Cancel** la cierra). Cada pestaña es una conexión SSH independiente y todas siguen vivas mientras cambias entre ellas. Puedes abrir varias pestañas al mismo servidor.

Al cerrar la última pestaña vuelves a la lista de servidores. No hay botón para volver sin cerrarlas: cierra las pestañas con **×**.

## Buscar en el historial

1. Pulsa la lupa.
2. Escribe en **Search scrollback** y pulsa Intro (busca el siguiente resultado).
3. Usa las flechas arriba y abajo para ir al resultado anterior o siguiente.
4. Pulsa la lupa otra vez para cerrar la barra y quitar el resaltado.

Mientras buscas, el teclado es del campo de búsqueda; el terminal recupera el foco al cerrar la barra. La búsqueda actúa sobre la pestaña visible.

## Teclas especiales

Encima del teclado de iOS aparece la barra de teclas del emulador, con las teclas que faltan en un teclado táctil: Esc, Ctrl, Tab, flechas y teclas de función (F1–F12). Úsala, por ejemplo, para Ctrl+C o para salir de vim con Esc.

## Teclado, pantalla y enlaces

- El área del terminal se reduce cuando sale el teclado y el servidor recibe el nuevo tamaño, así que las apps de pantalla completa se redibujan bien. Al girar el dispositivo también se ajusta el tamaño. Se admiten vertical y horizontal (en iPad, también boca abajo).
- Si la app del servidor emite un enlace, al tocarlo se abre en el navegador.
- Si el servidor copia texto al portapapeles (secuencia OSC 52), se copia al portapapeles de iOS.
- Puedes usar un teclado físico.

> No hay ajustes dentro de la terminal. El tamaño de letra y los colores se cambian desde la pantalla principal (ver [Ajustes](/apps/noduscli/docs/settings)).

## Qué no hay

- No hay reconexión automática ni mensaje al perder la conexión: si el servidor o la red cortan la sesión, la pestaña simplemente se cierra.
- No hay copiar/pegar propio ni menús: se usa el comportamiento estándar de iOS y de SwiftTerm.
- No hay SFTP ni reenvío de puertos.
