---
title: Reproductor
order: 6
---

El reproductor se abre a pantalla completa al tocar un canal, película o episodio. Los controles se ocultan solos a los 4 segundos; toca la pantalla para mostrarlos u ocultarlos.

## Controles en iPhone y iPad

| Control | Qué hace |
|---|---|
| **X** (arriba a la izquierda) | Cierra el reproductor. |
| Título | Nombre del canal (con su número si lo tiene) y, debajo, el grupo; en películas y series, la categoría o el episodio. |
| Icono de burbuja con subtítulos | Menú **Audio y subtítulos** (ver más abajo). |
| **Imagen en imagen** | Reproduce en una ventana flotante. Solo con el motor AVPlayer. |
| Icono de AirPlay | Elige un destino AirPlay. |
| **Retroceder 10 segundos** / **Avanzar 10 segundos** | Solo en películas y episodios. |
| **Canal anterior** / **Canal siguiente** | En directo, cuando hay más de un canal en la lista. En películas y series se llaman **Episodio anterior** y **Episodio siguiente**. |
| **Pausar** / **Reproducir** | Pausa o reanuda. |
| Barra de progreso | Solo en películas y episodios: arrastra para saltar a otro punto; muestra el tiempo actual y el total. |

> El cambio de canal da la vuelta: tras el último canal de la lista vuelves al primero.

### Gestos

- **Tocar** la pantalla: muestra u oculta los controles.
- **Deslizar hacia arriba** en directo: canal siguiente. **Deslizar hacia abajo**: canal anterior. En películas y episodios este gesto no hace nada.

## Controles en Apple TV

Los controles en pantalla son solo informativos; se manejan con el mando:

| Mando | En directo | En película o episodio |
|---|---|---|
| **Izquierda** / **Derecha** | — | Retroceder / avanzar 10 segundos. |
| **Arriba** | Canal anterior. | Abre **Audio y subtítulos** (si hay pistas). |
| **Abajo** | Canal siguiente. | — |
| **Reproducir/Pausa** | Pausa o reanuda. | Pausa o reanuda. |
| **Menú** | Cierra el reproductor. | Cierra el reproductor. |

## Audio y subtítulos

Si el contenido tiene varias pistas de audio o subtítulos (por ejemplo, un MKV), podrás elegirlas:

- En iPhone y iPad, con el menú **Audio y subtítulos**. Las secciones son **Audio** (solo si hay más de una pista) y **Subtítulos**, con la opción **Desactivados**. La pista activa lleva una marca.
- En Apple TV, deslizando hacia arriba en películas y episodios, que abre la hoja **Audio y subtítulos**.
- Si una pista no tiene nombre, aparece como **Pista N**.

> El menú de pistas solo aparece cuando el contenido tiene pistas disponibles, y solo funciona con el motor **VLC**. Con AVPlayer (HLS y MP4 por defecto) no se ofrece este menú. Si necesitas elegir pistas en un MP4, pon **Motor** en **VLC (más formatos)** en [Ajustes](/apps/streamaura/docs/settings).

## Motores de reproducción

StreamAura incluye dos motores y elige uno según el formato:

| Motor | Para qué | Limitaciones |
|---|---|---|
| **AVPlayer** | HLS (`m3u8`) y MP4. | Admite imagen en imagen y AirPlay. No reproduce TS crudo, MKV ni AVI. |
| **VLC** | TS crudo, MKV, AVI y otros formatos; SMB y NFS; direcciones sin extensión. | Sin imagen en imagen ni AirPlay de vídeo. |

En **Automático** (el valor por defecto) la app usa AVPlayer para HLS y MP4 y VLC para el resto, y cambia sola al otro motor si el primero falla. Las bibliotecas SMB y NFS, y las direcciones WebDAV con usuario, siempre usan VLC. Puedes forzar el motor en [Ajustes](/apps/streamaura/docs/settings).

## Carga, reintentos y errores

- Mientras carga ves una rueda y el nombre del contenido. Cada intento espera hasta 15 segundos.
- Si falla, la app reintenta hasta tres veces con pausas crecientes y prueba con el otro motor. Si el directo se corta a mitad, intenta reconectar hasta tres veces.
- Si sigue sin funcionar, ves un triángulo naranja, el nombre, el motivo y el botón **Reintentar**. En cuentas Xtream se añade: *Comprueba que la cuenta no esté reproduciendo en otro dispositivo: algunas permiten una sola conexión.*

| Mensaje | Significado |
|---|---|
| El canal tarda demasiado en responder. | El servidor no contestó a tiempo. |
| No se pudo reproducir este canal. / No se pudo reproducir el stream. | El stream no se pudo abrir. |
| Se interrumpió la reproducción. | La reproducción se cortó. |
| La dirección del canal no es válida. | La dirección guardada no es utilizable. |
| Faltan las credenciales de la cuenta. | Las credenciales de la cuenta Xtream ya no están en el llavero. |
| No se puede iniciar la reproducción. | No hay motor disponible; pulsa **Cerrar**. |

> En la ficha de una película, algunos formatos (MKV, AVI, TS…) muestran el aviso *Formato MKV: todavía no es compatible.* aunque VLC suele poder reproducirlos. Es un texto heredado: pulsa **Reproducir** igualmente.
