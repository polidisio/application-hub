---
title: Primeros pasos
order: 1
---

NodusCli es un cliente SSH para iPhone y iPad. Abre una sesión de shell real en tu servidor (terminal `xterm-256color`), así que vim, htop, tmux y otras apps de terminal funcionan como en un ordenador. No hay cuentas ni registro: abres la app y empiezas.

## Requisitos

- iPhone o iPad con iOS/iPadOS 17.0 o posterior.
- Un servidor con SSH accesible desde tu dispositivo.
- Para servidores de tu casa u oficina, el permiso de **Red local** (ver [Solución de problemas](/apps/noduscli/docs/faq)).

> La interfaz de NodusCli está solo en inglés: no hay traducción al español. En este manual los nombres de botones y pantallas van tal como aparecen en la app (por ejemplo **Servers**, **Import private key…**).

## Primer arranque

No hay pantalla de bienvenida, ni petición de analíticas, ni inicio de sesión. Verás directamente la pantalla principal con dos secciones:

| Sección | Contenido |
|---|---|
| **Servers** | Tus servidores guardados. Vacía al principio: *Tap + to add a server*. |
| **SSH key** | Tu clave privada, si has importado una. |

Arriba a la izquierda hay un engranaje (ajustes) y arriba a la derecha un **+** (añadir servidor).

## Tu primera conexión

1. Pulsa **+**.
2. Rellena **Name**, **Host**, **Port**, **User** y, si no usas clave, **Password**. Pulsa **Save**.
3. Toca el servidor en la lista.
4. La primera vez aparece **Unknown host** con la huella SHA256 de la clave del servidor. Si es la correcta, pulsa **Trust and connect**.
5. Se abre la terminal a pantalla completa.

Más detalle en [Servidores](/apps/noduscli/docs/servers), [Claves SSH](/apps/noduscli/docs/ssh-keys) y [Seguridad de la conexión](/apps/noduscli/docs/host-keys).

## Qué no hace (todavía)

- No hay SFTP ni transferencia de archivos.
- No admite claves RSA ni claves protegidas con contraseña (passphrase).
- No sincroniza ni exporta tus servidores: todo queda en el dispositivo. Ver [Datos y privacidad](/apps/noduscli/docs/data-privacy).
