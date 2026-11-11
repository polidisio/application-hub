---
title: Datos y privacidad
order: 7
---

NodusCli no tiene cuentas, publicidad ni analíticas, y no habla con ningún servidor propio. Lo único que sale del dispositivo es la conexión SSH que tú abres, hacia el servidor que tú eliges. La política completa está en [Privacidad](/privacy/noduscli).

## Dónde se guarda cada cosa

| Dato | Dónde |
|---|---|
| Lista de servidores (nombre, host, puerto, usuario) | Preferencias de la app, en el dispositivo. |
| Contraseñas de los servidores | Llavero de Apple, una por servidor. |
| Clave privada SSH | Llavero de Apple. |
| Huellas de claves de servidor | Preferencias de la app. |
| Tamaño de letra y colores | Preferencias de la app. |

Las contraseñas y la clave se guardan con acceso solo cuando el dispositivo está desbloqueado y sin salir de este dispositivo. El contenido de tus sesiones no se guarda: el historial de la terminal solo vive mientras la pestaña está abierta.

## Copia de seguridad, sincronización y exportación

> NodusCli no tiene sincronización con iCloud, ni exportar/importar la lista de servidores, ni copia de seguridad propia. Si cambias de iPhone tendrás que volver a añadir los servidores y reimportar la clave.

Como las contraseñas y la clave se guardan "solo en este dispositivo", tampoco viajan en una restauración a otro dispositivo. Los nombres de servidor sí pueden volver con una copia de seguridad de iOS, pero sin sus contraseñas.

Al desinstalar la app se pierden los servidores, las huellas y los ajustes.

## Permisos

- **Red local**: iOS la pide la primera vez que te conectas a una dirección de tu red (por ejemplo `192.168.x.x`). El texto que ves es *NodusCli needs local network access to connect to SSH servers on your network.* Si la rechazas, actívala en Ajustes de iOS > NodusCli > Red local.
- La app no pide acceso a fotos, contactos, ubicación ni cámara. Para importar una clave usa el selector de archivos de iOS, que solo da acceso al archivo que eliges.

## Cifrado

La app usa cifrado (SSH) solo para la conexión con tu servidor y está declarada sin cifrado no exento en su configuración de exportación.
