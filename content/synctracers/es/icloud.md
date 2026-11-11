---
title: iCloud y varios dispositivos
order: 5
---

## Cómo funciona

Tus entrenamientos se guardan en una base de datos local y se reflejan en tu **base de datos privada de iCloud** (CloudKit). No hay servidores de Synctrackers: los datos van de tu dispositivo a tu iCloud.

Para sincronizar entre dispositivos necesitas:

- Sesión de iCloud iniciada y **el mismo Apple ID en todos**.
- Conexión a internet (sin red, los cambios esperan y se sincronizan al volver).

Apple Health en sí no se sincroniza por aquí: cada dispositivo lee su propio Apple Health y sube sus registros. Los duplicados se eliminan por identificador de entrenamiento. Los conflictos los resuelve iCloud.

> **Mac:** la mayoría de los Mac no tienen Apple Health. En un Mac, los entrenamientos llegan desde tu iPhone por iCloud.

## Estado de iCloud

En **Ajustes → Sincronización**:

| Mensaje | Significado |
|---|---|
| iCloud: esperando primer sync | Aún no ha habido actividad. |
| iCloud: sincronizando… | Hay una sincronización en marcha. |
| iCloud: sincronizado hace… | La última sincronización terminó bien. |
| iCloud: error de sync | Falló la última; debajo verás el texto del sistema (icono naranja). |

> Si iCloud no está disponible en tu dispositivo (sin sesión o sin permisos), la app **sigue funcionando en local sin avisar** y la línea se queda en *esperando primer sync*.

## Copia de los archivos del Vault en iCloud Drive

Aparte de CloudKit, los archivos JSON mensuales del Vault se copian a **iCloud Drive** (carpeta *Synctrackers*). Se explica en [Exportar y Vault](/apps/synctracers/docs/export-vault).
