---
title: Ajustes
order: 7
---

Abre **Ajustes** con el icono de engranaje de la pantalla **Fuentes**. Tiene tres secciones. Los cambios se aplican al momento y se guardan en el dispositivo; no hay botón de guardar.

## Reproducción

| Ajuste | Opciones | Para qué sirve |
|---|---|---|
| **Motor** | **Automático** (por defecto), **AVPlayer (imagen en imagen, AirPlay)**, **VLC (más formatos)** | Elige el motor que se prueba primero. Con **Automático**, AVPlayer reproduce HLS y MP4 y VLC el resto. Si el motor elegido falla, la app prueba con el otro. Ver [Reproductor](/apps/streamaura/docs/player). |
| **Búfer de red de VLC** | 0,8 s, **1,5 s** (por defecto), 3,0 s, 5,0 s | Cuánto contenido precarga VLC. Un búfer mayor reduce los cortes en conexiones lentas, pero retrasa el inicio. Solo afecta al motor VLC. |

> Las bibliotecas SMB y NFS y las direcciones WebDAV con usuario se reproducen siempre con VLC, elijas el motor que elijas.

## Almacenamiento

| Elemento | Qué hace |
|---|---|
| **Caché de imágenes** | Muestra cuánto ocupan en disco los logos y pósters descargados. |
| **Borrar caché de imágenes** | Vacía esa caché. Las imágenes se vuelven a descargar cuando hacen falta. |
| **Borrar progreso de visionado** | Pide confirmación (**¿Borrar el progreso de todo lo que has visto?**, botones **Borrar progreso** y **Cancelar**) y borra el progreso de **todas** las películas y episodios, de todas las fuentes y de tu biblioteca. Vacía **Continuar viendo**. |

La caché de imágenes se limita sola a unos 300 MB: al abrir la app se borran las imágenes más antiguas si se supera ese tamaño.
## Acerca de

| Elemento | Qué muestra |
|---|---|
| **Versión** | Versión y compilación de la app, p. ej. `1.0 (2)`. |
| **Avisos legales** | Dos textos: **VLCKit** (la app usa VLCKit y libVLC de VideoLAN bajo licencia LGPL 2.1 o posterior, con enlaces a **Código fuente de VLCKit** y **Licencia LGPL 2.1**) y **Contenido** (StreamAura es un reproductor y no incluye ni proporciona canales, listas ni cuentas). |

## Lo que no hay en Ajustes

No existen ajustes de idioma (se usa el del dispositivo), de tema (siempre oscuro), de control parental, de sincronización ni de analítica. Las fuentes y los servidores se gestionan desde **Fuentes**, no desde aquí.
