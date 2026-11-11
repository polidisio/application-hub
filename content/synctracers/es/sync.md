---
title: Sincronización con Apple Health
order: 4
---

## Cuándo sincroniza

- **Al abrir la app** (tras la presentación) y **al volver a primer plano**.
- **Tirando hacia abajo** en el Dashboard (iOS).
- Con el **botón de actualizar** de la pestaña Entrenamientos o el botón **Sincronizar ahora** del estado vacío.
- Desde **Ajustes → Sincronización**.
- **En segundo plano** (solo iOS): la app pide a iOS ejecutarse periódicamente. iOS decide cuándo, así que no está garantizado.

Las sincronizaciones automáticas se saltan si la última fue hace menos de 5 minutos. Las manuales (**Sincronizar ahora**) siempre se ejecutan. Solo puede haber una sincronización a la vez.

En Mac no hay sincronización en segundo plano.

## Qué periodo lee

| Caso | Periodo |
|---|---|
| Primera sincronización | El último año. |
| Sincronizaciones automáticas posteriores | Desde 30 días antes de la última hasta ahora. Así se recogen entrenamientos que Strava, Garmin u otras apps escriben con retraso. |
| **Sincronizar ahora (todo)** | Todo el historial. |
| **Sincronizar rango seleccionado** | El rango que elijas (ver abajo). |

### Sincronizar un rango

En **Ajustes → Sincronización**, activa **Filtrar por rango de fechas** y elige **Desde** (por defecto, hace un mes) y **Hasta** (por defecto, hoy). El botón pasa a **Sincronizar rango seleccionado** y solo trae los entrenamientos entre esas fechas. *Hasta* no puede ser anterior a *Desde* ni posterior a hoy.

## Sincronización en segundo plano (iOS)

En **Ajustes → Sincronización**:

- **Sincronización en background**: activada por defecto.
- **Intervalo**: de 1 a 24 horas, de hora en hora (por defecto, 6 h). Es el tiempo **mínimo** antes del siguiente intento, no una garantía.

## Qué se guarda por entrenamiento

Tipo, inicio y fin, duración, calorías, distancia, frecuencia cardíaca **media**, y la app o dispositivo de origen (por ejemplo Apple Watch o Strava). No se guardan rutas GPS, frecuencia cardíaca segundo a segundo, sueño, pasos ni ningún dato de salud que no sea un entrenamiento.

## Frecuencia cardíaca

Para no bloquear la app, en una primera sincronización con **20 o más** entrenamientos nuevos no se descarga la frecuencia cardíaca. Para completarla, pulsa **Descargar entrenamientos anteriores** en Ajustes → Sincronización.

> Pese al nombre, ese botón **no descarga entrenamientos**: solo añade la frecuencia cardíaca media a los que ya tienes. Procesa 200 por pulsación, de más recientes a más antiguos, con progreso y botón *Cancelar*. Con un historial largo, púlsalo varias veces.

## Duplicados y cambios

- Cada entrenamiento se identifica por su identificador de Apple Health; si ya lo tienes, no se vuelve a guardar.
- Si lo editas en Salud (duración, fechas, calorías, distancia, tipo u origen), se actualiza aquí en la siguiente sincronización dentro del periodo leído.
- Si dos dispositivos suben el mismo entrenamiento, la app elimina los duplicados.
- **Borrar un entrenamiento en Salud no lo borra en Synctrackers.** No hay sincronización de borrados.

## Qué verás en pantalla

- Un indicador *Sincronizando…* en el Dashboard y un spinner en los botones.
- **Último sync** en Ajustes, con la hora relativa. Solo se actualiza cuando la sincronización añadió algo nuevo.
- La app **no muestra mensajes de error de sincronización**. Si no aparecen entrenamientos, revisa los [permisos](/apps/synctracers/docs/permissions).
