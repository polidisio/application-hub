---
title: Datos y privacidad
order: 8
---

StreamAura no tiene servidores propios, cuentas ni publicidad. Todo lo que configuras se guarda en tu dispositivo. La política completa está en la [página de privacidad](/privacy/streamaura).

## Qué se guarda y dónde

| Dato | Dónde |
|---|---|
| Fuentes, canales, películas, series y favoritos | Base de datos local de la app, en tu dispositivo. |
| Progreso de visionado | Base de datos local. |
| Contraseñas de cuentas Xtream, SMB, WebDAV y sesiones de Jellyfin y Plex | Llavero de Apple (Keychain), nunca en la base de datos ni en los registros. |
| Archivos M3U que añades | Una copia dentro de la app. |
| Logos, pósters y miniaturas | Caché en el dispositivo (ver [Ajustes](/apps/streamaura/docs/settings)). |
| Motor y búfer elegidos | Preferencias de la app. |

La app guarda las direcciones de tus listas y servidores, pero las direcciones de reproducción de Xtream no llevan tu usuario y contraseña: se construyen al reproducir con las credenciales del llavero.

## Analítica y cuentas

- No hay analítica: la app no te pide consentimiento porque no recoge datos de uso.
- No hay registro ni inicio de sesión en StreamAura. Los únicos inicios de sesión son los de tus propios servidores (Xtream, Jellyfin, Plex, SMB, WebDAV).
- La app solo se conecta a las direcciones que tú añades.

## Sin sincronización ni copia

- **No hay sincronización con iCloud** ni entre dispositivos. Tus fuentes, favoritos y progreso son de cada dispositivo.
- **No hay exportar ni importar** copias de tus datos. En otro dispositivo tendrás que volver a añadir tus fuentes.
- Si la app no puede abrir su base de datos, verás en **Fuentes** el aviso naranja **No se pudo abrir la base de datos. Los datos no se guardarán.** La app trabaja en modo temporal: lo que añadas se perderá al cerrarla. Reinicia el dispositivo o actualiza la app.

## Borrar tus datos

- **Una fuente:** mantén pulsada su tarjeta y elige **Eliminar**. Borra sus canales, favoritos, progreso, credenciales y la copia del archivo.
- **Un servidor de la biblioteca:** menú de **Mi biblioteca** > **Eliminar nombre**. Los archivos de tu NAS no se tocan.
- **Todo el progreso:** **Ajustes** > **Borrar progreso de visionado**.
- **Imágenes en caché:** **Ajustes** > **Borrar caché de imágenes**.
- **Todo:** desinstala la app.

> En Apple TV el almacenamiento local puede ser purgado por el sistema cuando falta espacio. Si pasa, vuelve a añadir tus fuentes.
