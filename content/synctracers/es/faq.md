---
title: Preguntas frecuentes
order: 9
---

## Dice «Conectado» pero no veo entrenamientos

Es el comportamiento esperado si denegaste el acceso: iOS no deja que la app lo detecte. Concede el permiso en **Ajustes → Salud → Acceso a datos y dispositivos → Synctrackers**. Ver [Permisos](/apps/synctracers/docs/permissions). Comprueba también que tienes entrenamientos en la app Salud.

## Un entrenamiento de Strava o Garmin no aparece

Esas apps a veces escriben en Salud con retraso. La sincronización automática mira 30 días atrás, así que aparecerá. Si es más antiguo, usa **Sincronizar ahora (todo)**.

## Mis entrenamientos antiguos no tienen frecuencia cardíaca

En una primera sincronización con muchos entrenamientos no se descarga. Usa **Descargar entrenamientos anteriores** (varias veces si tienes muchos).

## Borré un entrenamiento en Salud y sigue en Synctrackers

Synctrackers no sincroniza borrados y no permite borrar entrenamientos.

## Un tipo de entrenamiento sale como «Otro»

Solo 18 tipos tienen nombre propio. HIIT, entrenamiento cruzado y otros se agrupan en **Otro**.

## No sincroniza con mi otro dispositivo

Mira **iCloud** en Ajustes. Ambos dispositivos deben tener sesión de iCloud con el mismo Apple ID. Si iCloud no está disponible, la app funciona en local sin avisar.

## La sincronización en segundo plano no se ejecuta

iOS decide cuándo. El intervalo es solo un mínimo, y con el teléfono bloqueado Apple Health no se puede leer.

## ¿Puedo importar un JSON?

No hay importación. Los datos se recuperan de Apple Health o de iCloud.

## ¿Qué datos salen de mi dispositivo?

Los tuyos van a tu iCloud privado (si lo tienes) y, solo si activas el Vault, a tu iCloud Drive. Solo si aceptas, se envían recuentos de uso anónimos. En Mac, la API local expone tus entrenamientos a tu red (ver [Mac y API local](/apps/synctracers/docs/mac-api)).
