---
title: Servidores
order: 2
---

Los servidores guardados aparecen en la sección **Servers** de la pantalla principal. Tocar uno abre la conexión.

## Añadir un servidor

Pulsa **+** (arriba a la derecha). El formulario **New server** tiene estos campos:

| Campo | Notas |
|---|---|
| **Name** | Etiqueta libre. Si lo dejas vacío se usa el host como nombre. |
| **Host** | Nombre DNS o dirección IP. |
| **Port** | Por defecto 22. |
| **User** | Usuario en el servidor. |
| **Password (optional with key)** | Opcional si usas una [clave privada](/apps/noduscli/docs/ssh-keys). |

**Save** solo se activa cuando **Host** y **User** no están vacíos. **Cancel** descarta el formulario.

## Editar y borrar

Desliza una fila hacia la izquierda:

- **Edit** (azul) abre el formulario **Edit server**.
- **Delete** (rojo) elimina el servidor y su contraseña guardada.

> **Delete** borra al instante, sin pedir confirmación ni poder deshacerlo. Si quieres conservar la contraseña, anótala antes.

Para quitar solo la contraseña de un servidor, edítalo y vacía el campo **Password**: al guardar se borra del llavero.

## Conectar

Toca el servidor. La app espera un instante a que la pantalla esté lista y abre la terminal con una sesión nueva.

- Si la conexión falla, el error se escribe dentro de la propia terminal (empieza por `connection failed:`) y la pestaña sigue abierta; ciérrala con la **×**.
- Si el servidor cierra la sesión (por ejemplo con `exit`), la pestaña se cierra sola. Al cerrarse la última, vuelves a la lista de servidores.

> Tocar un servidor en la lista **sustituye** las pestañas abiertas por una sola sesión nueva. Para tener varios servidores abiertos a la vez, usa el **+** dentro de la terminal (ver [La terminal](/apps/noduscli/docs/terminal)).

## Cómo se autentica

La app prueba primero la clave privada (si importaste una y el servidor admite clave pública) y después la contraseña (si guardaste una y el servidor admite contraseña). Cada método se intenta una vez. La clave es la misma para todos los servidores. Ver [Claves SSH](/apps/noduscli/docs/ssh-keys).
