---
title: Listas IPTV y cuentas Xtream
order: 2
---

Una **fuente** es una lista IPTV (M3U/M3U8) o una cuenta Xtream Codes. Puedes tener varias a la vez; cada una aparece como una tarjeta en **Fuentes**.

## Añadir una fuente

1. En **Fuentes**, pulsa **+** y elige **Añadir lista IPTV** (o **Añadir fuente** si la pantalla está vacía).
2. En **Nueva fuente**, elige el **Tipo** en el selector superior.
3. Rellena los datos y pulsa **Añadir fuente**.

El campo **Nombre (opcional)** sirve para poner tu propio nombre. Si lo dejas vacío, la app usa el servidor de la dirección, el nombre del archivo o el servidor de la cuenta.

| Tipo | Qué rellenas |
|---|---|
| **Lista por URL** | La dirección web de la lista (`https://servidor/lista.m3u`). Debe ser `http` o `https`. |
| **Archivo M3U** | Pulsa **Elegir archivo** y selecciona un `.m3u` o `.m3u8` desde Archivos o iCloud Drive. |
| **Xtream Codes** | **Servidor o enlace get.php**, **Usuario** y **Contraseña**. |

> En Apple TV no existe el tipo **Archivo M3U** (el sistema no ofrece selector de archivos): solo **Lista por URL** y **Xtream Codes**.

### Cuentas Xtream

- Puedes escribir el servidor (con puerto si lo necesita) y tus credenciales, o pegar un enlace completo `get.php?username=…&password=…`: la app extrae servidor, usuario y contraseña y puedes dejar esos dos campos vacíos.
- Si escribes el servidor sin `http://` o `https://`, la app añade `http://`.
- Antes de guardar, la app comprueba la cuenta contra el servidor. Si algo falla, verás el motivo en rojo y la fuente no se añade (ver la tabla **Errores habituales** al final de esta página).
- Usuario y contraseña se guardan en el llavero de Apple, nunca en la base de datos de la app.

### Cuando una lista M3U es en realidad una cuenta Xtream

Si añades una lista por URL y la app detecta en sus direcciones de stream un usuario, una clave y un servidor Xtream válidos, aparece el diálogo **Se ha detectado una cuenta Xtream**:

| Opción | Resultado |
|---|---|
| **Usar como cuenta Xtream** | Se guarda como cuenta Xtream: tendrás fichas con sinopsis y el formato de directo adecuado. |
| **Mantener como lista M3U** | Se guarda como lista normal. |
| **Cancelar** | No se añade nada. |

> Algunos proveedores publican en la API menos contenido que en la lista. Si como cuenta Xtream te faltan canales, películas o series, elimina la fuente y vuelve a añadirla con **Mantener como lista M3U**.

## Qué pasa al importar

La importación se hace en segundo plano y no bloquea la app. Mientras dura, la tarjeta muestra una rueda y **Importando… N canales**. Al terminar muestra **N canales** (solo cuenta los canales de directo; películas y series se cuentan dentro de su sección).

- Las listas muy grandes (decenas de miles de entradas) se importan por lotes.
- Las entradas repetidas se descartan (mismo `tvg-id` y dirección, o misma dirección).
- Las líneas corruptas se ignoran sin parar la importación.
- En una lista M3U, las direcciones que contienen `/movie/` pasan a **Películas** y las que contienen `/series/` pasan a **Series**; el resto son canales de directo. Las series se agrupan por nombre si el título lleva `S01E02` o `1x02`; si no, cada título cuenta como una serie de temporada 1.
- En Xtream se importan canales, películas y series. Si el servidor falla solo con películas o series, el directo se importa igualmente y esas secciones no aparecen.
- La app no muestra guía de programación (EPG).

### Estados de la tarjeta

| Indicador | Significado |
|---|---|
| Rueda | Importando. |
| Triángulo naranja y mensaje | La importación falló. El texto dice por qué; si no hay detalle verás **Error al importar**. |
| Icono de pausa | La fuente está marcada como desactivada. |

## Gestionar una fuente

Mantén pulsada la tarjeta de una fuente (en Apple TV, mantén pulsado el botón central del mando) para abrir su menú:

| Acción | Qué hace |
|---|---|
| **Actualizar** | Vuelve a descargar y reimportar la fuente. |
| **Desactivar** / **Activar** | Alterna la marca de desactivada. |
| **Eliminar** | Pide confirmación con **¿Eliminar nombre?** y el aviso *Se borrarán sus canales y favoritos de este dispositivo.* |

> **No hay actualización automática.** Si tu proveedor cambia la lista, usa **Actualizar**. Al actualizar se conservan tus favoritos y tu progreso de visionado.

> **Desactivar solo pone el icono de pausa.** En esta versión la fuente desactivada sigue abriéndose y reproduciendo igual; no se oculta ni se salta al actualizar.

> **Los archivos M3U se copian dentro de la app.** **Actualizar** relee esa copia, no el archivo original. Si cambias el archivo, elimina la fuente y vuelve a añadirla.

> **No se puede editar una fuente.** Para cambiar el nombre, la dirección o las credenciales, elimínala y créala de nuevo. Al eliminarla se borran también su progreso de visionado, sus credenciales del llavero y la copia del archivo.

## Errores habituales

| Mensaje | Qué hacer |
|---|---|
| Introduce una dirección http o https válida. | Revisa la dirección; debe empezar por `http://` o `https://`. |
| Introduce usuario y contraseña. | Rellena ambos campos o pega un enlace `get.php` completo. |
| Usuario o contraseña incorrectos. | Revisa las credenciales de la cuenta Xtream. |
| La cuenta caducó el … / La cuenta no está activa (estado: …). | La cuenta no está vigente en tu proveedor. |
| No se pudo conectar con el servidor: … | Revisa el servidor y tu conexión. |
| El servidor respondió con error N. | El servidor rechazó la petición; prueba más tarde o revisa la dirección. |
| La respuesta del servidor no tiene el formato esperado. | La dirección no es un servidor Xtream. |
| No se pudo descargar la lista: … | No se pudo bajar la lista por URL. |
| El archivo es una playlist de vídeo (HLS), no una lista de canales. | La dirección `.m3u8` es un stream, no una lista. |
| La lista no contiene canales válidos. | El archivo está vacío o no es una lista M3U. |
| No se encuentra el archivo de la lista. | La copia local del archivo ya no existe; añádela de nuevo. En Apple TV el almacenamiento local puede purgarse. |
| Faltan las credenciales de la cuenta. | Las credenciales ya no están en el llavero; elimina la fuente y añádela de nuevo. |
