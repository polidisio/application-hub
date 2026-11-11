---
title: Sintaxis Markdown
order: 3
---

Esta página es una chuleta de lo que puedes escribir. La app genera la vista previa y las exportaciones HTML/PDF con un motor Markdown básico (Ink), así que no todo el Markdown "extendido" de otras apps funciona. Dentro de la app tienes la misma chuleta resumida: botón `?` de la barra de formato, **Ayuda Markdown**.

## Texto y encabezados

| Escribes | Resultado |
|---|---|
| `# Título` | Título grande (nivel 1). |
| `## Título` | Título mediano (nivel 2). |
| `### Título` | Título pequeño (nivel 3). |
| `**texto**` | **Negrita**. |
| `*texto*` | *Cursiva*. |
| `[texto](url)` | Enlace. |
| `![alt](url)` | Imagen (por dirección web). |
| `> cita` | Cita. |
| `---` | Línea horizontal. |

Los niveles 4 a 6 (`####` a `######`) también se reconocen en el texto, pero el resaltado de colores y la vista previa están pensados para los tres primeros.

## Listas

| Escribes | Resultado |
|---|---|
| `- elemento` | Lista sin orden (también vale `*` o `+`). |
| `1. elemento` | Lista ordenada. |

## Código

| Escribes | Resultado |
|---|---|
| `` `código` `` | Código en línea. |
| Tres acentos graves, el código y otros tres | Bloque de código. |

El bloque de código se muestra en tipografía monoespaciada con fondo gris. **No hay coloreado por lenguaje** en la vista previa ni en las exportaciones.

## Tablas

Puedes usar tablas con barras verticales. La vista previa las dibuja con bordes.

```
| Columna A | Columna B |
|---|---|
| 1 | 2 |
```

## Lo que no se formatea

> **Ayuda Markdown** muestra `~~tachado~~` y `- [ ] tarea` como ejemplos, pero el motor de la app no los convierte en formato propio: en la vista previa pueden aparecer tal cual, como texto con los símbolos. Compruébalo con tu propia nota antes de depender de ello.

- No hay ecuaciones, diagramas ni notas al pie.
- Las imágenes se cargan desde una dirección web (`https://...`). No puedes insertar fotos de tu carrete dentro de la nota.
- Si pegas HTML, se conserva en la vista previa.

## Consejos

- Deja una línea en blanco entre párrafos, y antes y después de listas, tablas y bloques de código.
- Los colores del editor te avisan: si un `**negrita**` no sale naranja, probablemente falta cerrar el par de asteriscos.
- Pega siempre texto sin formato; la app descarta el formato enriquecido al pegar en **Texto editable**.
