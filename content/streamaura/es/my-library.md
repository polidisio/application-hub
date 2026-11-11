---
title: Mi biblioteca (NAS)
order: 5
---

**Mi biblioteca** es tu colección de películas y series guardada en un NAS o servidor de medios de tu red. StreamAura lee los vídeos, limpia sus nombres y los muestra en filas con póster, junto a tus listas IPTV.

## Servidores compatibles

| Tipo | Qué necesitas | Usuario y contraseña |
|---|---|---|
| **DLNA / UPnP** | La dirección del Media Server del NAS. Si no indicas puerto se usa el 8200. | No |
| **SMB (CIFS)** | Servidor y, si hace falta, usuario y contraseña. | Sí (vacío para invitado) |
| **NFS** | Servidor. El NAS debe permitir la conexión desde tu dispositivo. | No |
| **WebDAV** | Dirección `http` o `https`, con puerto y ruta si hace falta. | Sí (vacío para invitado) |
| **Jellyfin** | Dirección de tu servidor. Si no indicas puerto se usa el 8096. | Sí |
| **Plex** | Dirección de tu servidor (puerto 32400 por defecto) y tu cuenta de plex.tv. | Sí |

> La primera vez, el sistema te pedirá permiso de **red local**. Sin él, StreamAura no puede encontrar tu NAS.

## Añadir un servidor

1. En **Fuentes**, pulsa **+** y elige **Añadir servidor de medios (NAS)** (o desde el menú de **Mi biblioteca**, **Añadir servidor**).
2. En **Servidor de medios**, elige el **Tipo**.
3. Escribe el **Nombre (opcional)** y la dirección. Debajo, un texto de ayuda explica lo que necesita ese tipo.
4. En SMB, WebDAV, Jellyfin y Plex, rellena **Usuario** y **Contraseña**.
5. En SMB, NFS y WebDAV, pulsa **Elegir carpetas** (ver más abajo).
6. Pulsa **Añadir servidor**.

Antes de guardar, la app comprueba el acceso: en DLNA descubre el dispositivo, en Jellyfin y Plex inicia sesión y en SMB, NFS y WebDAV lista la primera carpeta. Si falla, verás el motivo en rojo y no se guarda nada.

### Particularidades

- **Plex:** con verificación en dos pasos, añade el código al final de la contraseña. Si dejas el usuario vacío, la contraseña se trata como un *token*.
- **Jellyfin y Plex:** se importan todas tus películas y series. La app no guarda tu contraseña, solo la sesión (token) en el llavero. Si la sesión caduca verás *Usuario o contraseña incorrectos, o la sesión ha caducado. Vuelve a añadir el servidor.*
- **DLNA:** la app lee la carpeta de vídeo del servidor (la que se llama «Videos» en la raíz, o la primera que haya).

### Elegir carpetas (SMB, NFS y WebDAV)

**Elegir carpetas** abre un explorador del servidor para marcar de cuáles quieres importar vídeos:

- Toca el nombre de una carpeta para entrar en ella; **Subir un nivel** vuelve atrás.
- Marca el círculo junto a una carpeta, o **Usar esta carpeta** para la actual. Las elegidas aparecen en **Seleccionadas (N)**.
- Arriba verás cuántos vídeos tiene la carpeta actual directamente, o *Elige la carpeta de películas o series, o entra en una subcarpeta.*
- Las carpetas ocultas (que empiezan por `.`, `@` o `#`) y `lost+found` no se muestran.

Cada carpeta elegida se añade como un servidor independiente, con el nombre «servidor · carpeta». Si no eliges ninguna se importa desde la raíz que escribiste.

## Cómo se importa

- StreamAura recorre las carpetas y reconoce los vídeos `mkv`, `mp4`, `m4v`, `avi`, `mov`, `ts`, `m2ts`, `mts`, `wmv`, `flv`, `webm`, `mpg`, `mpeg` y `divx`.
- Límites por servidor: hasta **5000 vídeos**, y 400 carpetas en DLNA o 600 en SMB, NFS y WebDAV. Lo que exceda esos límites no se importa.
- Los nombres se limpian: `Pelicula.2019.1080p.BluRay.x264.mkv` pasa a **Pelicula** con año 2019.
- Reconoce episodios con `S01E02` o `1x02` en el nombre, y también carpetas del tipo `Serie/Temporada 2/05 - Título.mkv` (acepta Season, Temporada, Series, Saison, Staffel, Temp, T y S).
- En Jellyfin y Plex se usan los datos que ya tiene el servidor (título, año, temporada, episodio y póster).
- Los pósters que no da el servidor se generan en tu dispositivo a partir de un fotograma del vídeo, poco a poco y en segundo plano. No se usa ningún servicio externo.
- **No hay actualización automática.** Los cambios de tu NAS se ven al pulsar **Actualizar** o **Volver a leer**.

## Usar Mi biblioteca

La sección aparece arriba de **Fuentes** en cuanto hay un servidor. Tiene hasta tres filas horizontales:

| Fila | Contenido |
|---|---|
| **Continuar viendo** | Hasta 20 vídeos de tu biblioteca sin terminar, el más reciente primero. |
| **Películas** | Las añadidas más recientemente primero. Toca una para reproducirla (no hay ficha de detalle). Muestra el año debajo. |
| **Series** | Por orden alfabético, una tarjeta por serie con *N temp. · M ep.*. Al tocarla ves las temporadas y episodios. |

En la ficha de una serie, el selector **Temporada N** cambia de temporada y cada episodio muestra su número y su título. Al reproducir, el resto de episodios de la temporada queda en cola.

Si el servidor aún no ha devuelto nada verás *Leyendo la biblioteca del servidor…*, *El servidor no devolvió vídeos.* o el último error.

### Menú de Mi biblioteca

El icono de tres puntos junto a **Mi biblioteca** abre este menú:

| Acción | Qué hace |
|---|---|
| **Actualizar nombre** | Vuelve a leer ese servidor. |
| **Eliminar nombre** | Pide confirmación (*Se borrará su biblioteca de este dispositivo. Los archivos del servidor no se tocan.*). |
| **Estado de servidores** | Abre la hoja **Servidores**. |
| **Añadir servidor** | Abre **Servidor de medios**. |

### Estado de servidores

La hoja **Servidores** lista cada servidor con su tipo y dirección, y debajo uno de estos estados: **Leyendo…**, **Sin leer todavía**, **N vídeos encontrados** o el último error. **Volver a leer** repite la lectura. Desliza hacia la izquierda sobre un servidor para **Eliminar** (en Apple TV, mantén pulsado el botón central). Ciérrala con **Cerrar**.

> Eliminar desde **Estado de servidores** **no pide confirmación**. Eliminar un servidor borra también el progreso de visionado de su biblioteca.

> No se puede editar un servidor. Para cambiar la dirección o las credenciales, elimínalo y añádelo de nuevo.

## Errores habituales

| Mensaje | Qué hacer |
|---|---|
| El servidor tardó demasiado en responder. Revisa la dirección, el recurso compartido y las credenciales. | Comprueba que el NAS está encendido y en la misma red, y los datos escritos. |
| acceso denegado o ruta inexistente | En SMB o NFS, revisa el recurso compartido, la ruta y los permisos. |
| Usuario o contraseña incorrectos. | Revisa el usuario y la contraseña. |
| El servidor no ofrece WebDAV en esta dirección. / La ruta no existe en el servidor. | Revisa la dirección y la ruta de WebDAV. |
| El dispositivo no ofrece una biblioteca de medios (DLNA). | Activa el servidor de medios DLNA del NAS. |
| Este protocolo no está disponible en este dispositivo. | SMB y NFS dependen del motor VLC. Actualiza la app; si persiste, escribe al soporte. |
