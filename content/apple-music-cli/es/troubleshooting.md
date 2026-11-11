---
title: Permisos y problemas
order: 3
---

## Permiso de automatización

El script controla la app Música con AppleScript. La primera vez, macOS puede preguntar si permites que tu terminal (u OpenClaw) controle "Música". Acepta.

Si lo rechazaste, actívalo en **Ajustes del Sistema → Privacidad y seguridad → Automatización**, y marca "Música" bajo la app desde la que ejecutas el comando.

## El script no avisa de los errores

Esto es importante: el script descarta los errores de `osascript` y siempre imprime su mensaje de éxito. Si ves "Reproduciendo" pero no suena nada, el comando probablemente falló. Comprueba el resultado con `apple-music status`.

Los comandos tienen un límite de 3 segundos; pasado ese tiempo se cortan sin mensaje.

## Comprobar que `timeout` existe

El script llama al comando `timeout`, que **no viene con macOS** (es de GNU coreutils). Comprueba si lo tienes:

```bash
which timeout
```

Si no aparece nada, los comandos no se ejecutan y no verás ningún error. Con Homebrew puedes instalarlo:

```bash
brew install coreutils
```

Esto crea `gtimeout`; para que exista `timeout` hay que añadir al PATH la carpeta `gnubin` de coreutils. Es un posible fallo del skill, pendiente de confirmar en tu Mac.

## Problemas conocidos

| Síntoma | Causa |
|---|---|
| `play "texto"` dice "Reproduciendo" y no suena nada | La búsqueda por AppleScript no es fiable; usa `apple-music playlist` o ábrela en la app. |
| `play "canción" artist "artista"` ignora el artista | No está implementado en el script. |
| `status` muestra la duración rara o falla | La duración se calcula con aritmética entera y la app puede devolver decimales. |
| `volume` cambia el volumen de todo el Mac | Usa el volumen del sistema. |
| `playlist` no encuentra la lista | Debe coincidir exactamente con el nombre; solo vale para playlists de usuario. |
| Comillas en el texto rompen el comando | El texto se inserta sin escapar en el AppleScript; evita las comillas dobles. |
| `volume 250` | No se valida el rango. Usa valores de 0 a 100. |
