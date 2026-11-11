---
title: Solución de problemas y FAQ
order: 8
---

## Veo "connection failed" en la terminal

Los fallos de conexión se escriben dentro de la terminal, que sigue abierta. Cierra la pestaña con **×** y corrige el problema. Causas habituales:

| Mensaje | Qué hacer |
|---|---|
| `authFailed` con *server offers: password=… publicKey=…; tried key=… password=…; password empty=…* | La autenticación falló. Lee el detalle: qué métodos admite el servidor, cuáles probó la app y si la contraseña estaba vacía. Revisa usuario, contraseña o que la clave pública esté en `authorized_keys`. |
| `password empty=true` | No hay contraseña guardada para ese servidor y no se usó clave. Edita el servidor y añade la contraseña, o importa una clave. |
| `No route to host` (con un aviso sobre Red local) | Es casi siempre el permiso de **Red local**. Actívalo en Ajustes de iOS > NodusCli > Red local. |
| Conexión rechazada o *timeout* | Revisa host, puerto y que el servidor SSH esté en marcha y accesible desde tu red. |
| `connectionClosed` | El servidor cerró la conexión durante el acceso. |
| `rejected` | Pulsaste **Cancel** en el aviso de clave del servidor. |

Los mensajes son técnicos y están en inglés: son el texto del error de red tal cual.

## Me pide la clave del servidor cada vez

La huella se guarda por `host:puerto` al pulsar **Trust and connect**. Si vuelve a preguntar es porque cambió (**HOST KEY CHANGED**) o porque usas otra dirección/puerto para el mismo servidor (por ejemplo IP en vez de nombre).

## No consigo importar mi clave

Mira la tabla de [Claves SSH](/apps/noduscli/docs/ssh-keys). Los casos más frecuentes: clave RSA, clave con passphrase o clave ECDSA en formato OpenSSH. Una clave ed25519 sin passphrase siempre funciona.

## El archivo de clave no se ve en el selector

El selector acepta cualquier tipo de archivo. Asegúrate de que el archivo está en Archivos o en iCloud Drive y de que está descargado.

## Tengo que cambiar de clave

Pulsa **Remove key** y importa la nueva. La clave es única para todos los servidores.

## Quiero usar una clave distinta por servidor

No es posible: hay una sola clave global. La contraseña, en cambio, es por servidor.

## Se me cerró la pestaña sola

La sesión terminó: escribiste `exit`, el servidor te desconectó o se cortó la red. No hay aviso ni reconexión; abre el servidor de nuevo.

## ¿Funciona con Mosh o SFTP?

No. NodusCli es un cliente SSH con shell interactivo.

## ¿Puedo pasar mis servidores a otro iPhone?

No hay exportación ni sincronización. Tendrás que añadirlos de nuevo y reimportar la clave. Ver [Datos y privacidad](/apps/noduscli/docs/data-privacy).

## ¿Qué datos se envían?

Ninguno a nosotros: no hay analíticas. Solo se abre la conexión SSH a tu servidor. Detalles en la [política de privacidad](/privacy/noduscli).
