---
title: Primeros pasos
order: 1
---

## Qué es

Apple Music CLI es un skill de OpenClaw: un script de shell (`apple-music.sh`) que controla la app **Música** de tu Mac mediante AppleScript. Con comandos como `apple-music play` o `apple-music next` manejas la reproducción sin abrir la ventana de la app.

## Requisitos

- macOS (el skill se declara solo para `darwin`).
- La app Música (Apple Music) instalada.
- OpenClaw, para instalar el skill.

No hay que instalar nada más: el script usa `osascript`, que ya viene con macOS.

## Instalación

```bash
openclaw skills add https://github.com/polidisio/apple-music-cli
```

El código está en [github.com/polidisio/apple-music-cli](https://github.com/polidisio/apple-music-cli) (licencia MIT) y contiene tres archivos: `README.md`, `SKILL.md` y `apple-music.sh`.

## Primer uso

```bash
apple-music help
apple-music status
apple-music play
```

- `help` muestra la lista de comandos.
- `status` muestra la canción actual.
- `play` reanuda la reproducción.

La primera vez que se controla la app, macOS puede pedirte permiso de automatización. Mira [Permisos y problemas](/apps/apple-music-cli/docs/troubleshooting).

## Qué hace falta saber antes de empezar

- Todos los mensajes del script salen en español, con emojis.
- El script **siempre** imprime un mensaje de éxito (por ejemplo "Reproduciendo"), aunque el comando no haya funcionado. Mira [Permisos y problemas](/apps/apple-music-cli/docs/troubleshooting).
- Todo es local: no hay cuenta, red ni claves. Mira [Privacidad](/privacy).

## Siguientes pasos

- [Referencia de comandos](/apps/apple-music-cli/docs/commands)
- [Permisos y problemas](/apps/apple-music-cli/docs/troubleshooting)
- [Preguntas frecuentes](/apps/apple-music-cli/docs/faq)
