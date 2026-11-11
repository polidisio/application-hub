---
title: Añadir citas
order: 3
---

Daily Quotes no tiene panel de administración ni formulario: las citas están escritas **dentro del código** de la página. Para añadir o cambiar citas hay que editar el código fuente y volver a publicar el sitio.

## Dónde están las citas

Todo está en el archivo `notion.js`, que carga `index.html`. Las citas aparecen en **dos sitios** y hay que mantenerlos a la vez:

| Lugar | Para qué se usa |
|---|---|
| `fallbackQuotes` | Lo que **ves en pantalla** (una lista por idioma). |
| `getBothQuotes()` (`esQuotes` y `enQuotes`) | Lo que se **guarda en Notion**. |

Cada cita es un objeto con dos campos:

```js
{ text: "El conocimiento es poder.", author: "Francis Bacon" }
```

## Pasos

1. Añade la cita nueva al final de la lista en español y de la lista en inglés de `fallbackQuotes`.
2. Haz lo mismo en `esQuotes` y `enQuotes` dentro de `getBothQuotes()`.
3. Mantén **el mismo orden y el mismo número de citas** en español e inglés: el día elige la posición con un resto, y las dos listas deben corresponderse.
4. Publica los cambios. El sitio se despliega en Vercel.

El ciclo se alarga solo: con 10 citas, la cita cambia cada día durante 10 días y vuelve a empezar.

## Limitaciones

- Si olvidas actualizar una de las dos copias (pantalla o Notion), lo mostrado y lo guardado no coincidirán.
- Añadir citas cambia cuál toca cada día, incluidas las fechas ya pasadas.
- No hay forma de fijar una cita para una fecha concreta.
