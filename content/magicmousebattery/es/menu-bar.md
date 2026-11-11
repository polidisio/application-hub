---
title: La barra de menú y el panel
order: 2
---

## El icono de la barra de menú

El icono muestra **un solo dispositivo: el que tiene menos batería**. Si tienes ratón y teclado, verás el más bajo de los dos. A la derecha del icono aparece el porcentaje.

| Nivel más bajo | Icono | Color |
|---|---|---|
| Más de 75 % | Batería llena | Normal |
| 51 – 75 % | Batería 3/4 | Normal |
| 26 – 50 % | Batería 1/2 | Normal (amarillo por debajo de 30 %) |
| 11 – 25 % | Batería 1/4 | Normal (amarillo por debajo de 30 %) |
| 10 % o menos | Batería vacía | Rojo (menos de 15 %) |

Los colores dependen del nivel: **amarillo** por debajo del 30 % y **rojo** por debajo del 15 %. Estos límites son fijos y no tienen relación con el umbral de notificación.

Si la app no detecta ningún dispositivo, el icono pasa a un círculo gris con un signo de interrogación y no muestra porcentaje.

## El panel

Haz clic en el icono para abrir el panel. Se cierra al hacer clic fuera de él. Cada dispositivo ocupa una fila con:

- Un icono de tipo (ratón, teclado o trackpad).
- El nombre del dispositivo, tal como lo registra macOS (por ejemplo, el nombre que le diste en Bluetooth).
- Una barra de batería y el porcentaje. La barra y el icono son verdes, amarillos (menos de 30 %) o rojos (menos de 15 %).
- Un botón con un icono de gráfica (**Ver historial de batería**). Mira [Historial de batería](/apps/magicmousebattery/docs/history).

Debajo de los dispositivos verás el texto «Battery Status» y dos botones:

| Botón | Qué hace | Atajo |
|---|---|---|
| **Configuración...** | Abre los ajustes | ⌘, |
| **Salir** | Cierra la app | ⌘Q |

> Los atajos solo funcionan mientras el panel está abierto. El texto «Battery Status» aparece siempre en inglés, también con el Mac en español.

## Qué dispositivos detecta

La app lee el nivel de batería de los dispositivos que macOS tiene conectados y que informan de él. Reconoce el tipo por el nombre del dispositivo:

| Si el nombre contiene | Se muestra como |
|---|---|
| «mouse» | Ratón |
| «keyboard» | Teclado |
| «trackpad» | Trackpad |
| Otra cosa | Dispositivo desconocido (icono de interrogación) |

Un dispositivo apagado, desconectado o fuera de alcance **desaparece de la lista**: la app no recuerda su último nivel.

## Cuándo se actualiza

| Situación | Frecuencia |
|---|---|
| Al abrir el panel | Se actualiza al instante |
| Panel abierto | Cada 60 segundos |
| Panel cerrado | Cada 5 minutos |

No hay botón de actualizar ni forma de cambiar estos intervalos.

> Si cierras el panel haciendo clic fuera, la app puede seguir comprobando cada 60 segundos hasta que lo abras y lo cierres de nuevo con el icono.
