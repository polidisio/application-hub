---
title: Preguntas frecuentes
order: 9
---

## ¿StreamAura incluye canales o listas?

No. Es un reproductor: tú añades tus propias fuentes (listas M3U/M3U8, cuentas Xtream Codes o tu NAS). La app no incluye, aloja ni recomienda contenido.

## No veo ninguna fuente / la pantalla está vacía

Es lo normal en el primer arranque. Pulsa **Añadir fuente** o **+**. Ver [Primeros pasos](/apps/streamaura/docs/getting-started).

## No puedo elegir un archivo M3U en Apple TV

En Apple TV solo están **Lista por URL** y **Xtream Codes**. Aloja la lista en una dirección web o añádela desde un iPhone o iPad.

## Mi lista se queda en «Importando…» o muestra un triángulo naranja

Mira el texto bajo el nombre: indica el motivo (ver la tabla de errores en [Listas IPTV y cuentas Xtream](/apps/streamaura/docs/iptv-sources)). Con listas muy grandes la importación puede tardar; el contador **Importando… N canales** sube mientras trabaja. Para reintentar, mantén pulsada la tarjeta y elige **Actualizar**.

## Mi proveedor cambió la lista y no veo los cambios

No hay actualización automática. Mantén pulsada la fuente y elige **Actualizar**. En una fuente de **Archivo M3U**, **Actualizar** relee la copia interna: elimínala y vuelve a añadir el archivo.

## Faltan canales, películas o series en mi cuenta Xtream

Algunos proveedores publican en su API menos contenido que en la lista M3U. Elimina la fuente y vuelve a añadirla como **Lista por URL**; si la app te ofrece **Se ha detectado una cuenta Xtream**, elige **Mantener como lista M3U**.

## No puedo editar una fuente o un servidor

Correcto: no se pueden editar. Elimínalo (mantén pulsado > **Eliminar**) y créalo de nuevo con los datos correctos.

## ¿Para qué sirve Desactivar?

Solo pone un icono de pausa en la tarjeta. En esta versión no oculta la fuente ni cambia su comportamiento.

## Solo veo 3000 canales o 600 películas

Las listas muestran como máximo 3000 canales y 600 películas o series a la vez. Usa la búsqueda para encontrar el resto.

## Un canal no se reproduce

Mensajes y acciones en [Reproductor](/apps/streamaura/docs/player). Prueba **Reintentar**, y si tu cuenta permite una sola conexión, comprueba que no esté en uso en otro dispositivo. También puedes cambiar el **Motor** en [Ajustes](/apps/streamaura/docs/settings).

## No tengo imagen en imagen ni AirPlay

Solo funcionan con el motor AVPlayer (HLS y MP4). Con VLC (TS, MKV, AVI, SMB, NFS) no están disponibles. Puedes probar con **Motor** en **AVPlayer (imagen en imagen, AirPlay)**, aunque los formatos que AVPlayer no entiende pasarán igualmente a VLC.

## No puedo cambiar de audio o subtítulos

El menú solo aparece cuando el contenido tiene pistas y solo con VLC. Para un MP4 reproducido con AVPlayer, pon **Motor** en **VLC (más formatos)**. En Apple TV desliza hacia arriba durante una película o episodio.

## Mi NAS no se encuentra o falla la lectura

Comprueba que dispositivo y NAS están en la misma red, que has concedido el permiso de **red local** y que la dirección, el recurso compartido y las credenciales son correctos. En NFS, el NAS debe permitir la conexión desde tu dispositivo. Mira el estado en **Estado de servidores**. Más en [Mi biblioteca (NAS)](/apps/streamaura/docs/my-library).

## Mi biblioteca muestra nombres raros o no agrupa una serie

Los nombres se deducen del archivo y de las carpetas. Usa nombres como `Serie S01E02.mkv` o `Serie/Temporada 2/05 - Título.mkv`. Después pulsa **Actualizar**.

## Jellyfin o Plex dicen que la sesión ha caducado

Elimina el servidor y añádelo otra vez con tu usuario y contraseña.

## ¿Se sincronizan mis fuentes y favoritos entre mis dispositivos?

No. No hay sincronización ni copia de seguridad propia. Ver [Datos y privacidad](/apps/streamaura/docs/data-privacy).

## ¿Hay guía de programación (EPG)?

No. La app no muestra la programación de los canales.

## ¿Recoge la app datos de uso?

No. Ver la [política de privacidad](/privacy/streamaura).
