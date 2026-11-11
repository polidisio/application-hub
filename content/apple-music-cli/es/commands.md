---
title: Comandos
order: 2
---

## Sintaxis general

```bash
apple-music <comando> [argumentos]
```

Cualquier comando desconocido, o ninguno, muestra "Usa 'apple-music help' para ver comandos".

## Reproducción

| Comando | Qué hace | Mensaje |
|---|---|---|
| `apple-music play` | Reanuda la reproducción. | ▶️ Reproduciendo |
| `apple-music pause` | Pausa. | ⏸️ Pausado |
| `apple-music toggle` | Pausa si está sonando; si no, reproduce. | ⏸️ Pausado / ▶️ Reproduciendo |
| `apple-music next` | Pasa a la siguiente canción y muestra la información de la nueva. | Info de la pista |
| `apple-music prev` o `previous` | Vuelve a la canción anterior y muestra su información. | Info de la pista |

`next` y `prev` esperan 1 segundo antes de leer la pista, para que la app cambie.

No existe un comando `stop`.

## Información de la pista

| Comando | Qué devuelve |
|---|---|
| `apple-music status` | Cuatro líneas: título (🎵), artista (👤), álbum (💿) y duración (⏱️) en `min:seg`. |
| `apple-music current` | Solo el título. |
| `apple-music artist` | Solo el artista. |

Si no hay canción, `status` muestra "No hay canción reproduciéndose" y `current` y `artist` no muestran nada.

## Volumen

| Comando | Qué hace |
|---|---|
| `apple-music volume up` | Sube 10 puntos (máximo 100). |
| `apple-music volume down` | Baja 10 puntos (mínimo 0). |
| `apple-music volume 50` | Fija el volumen en un valor (0-100). |
| `apple-music volume` | Muestra el volumen actual. |

Importante: el script cambia el **volumen de salida del sistema** (`set volume output volume`), no un volumen propio de la app Música.

## Buscar y reproducir

```bash
apple-music play "Dark soundtrack"
```

Busca el texto y reproduce el primer resultado. Escribe el texto entre comillas. Esta función es poco fiable: mira [Permisos y problemas](/apps/apple-music-cli/docs/troubleshooting).

La sintaxis `play "canción" artist "artista"` aparece en `SKILL.md`, pero el script **no la implementa**: solo lee el primer argumento y ignora el resto.

## Playlists

```bash
apple-music playlist "Mi Playlist"
```

Reproduce una playlist de usuario por su nombre exacto. Sin nombre, muestra "Usage: apple-music playlist <nombre>".

## Ayuda

```bash
apple-music help
```

También valen `--help` y `-h`.
