---
title: Permisos de Apple Health
order: 2
---

## Qué lee la app

- **Entrenamientos** de cualquier tipo.
- **Frecuencia cardíaca**, para calcular la media de cada entrenamiento.

Nunca escribe en Apple Health. Las calorías y la distancia salen del propio entrenamiento, sin permisos adicionales.

## Cuándo se pide

La hoja de permisos de iOS aparece en la segunda página de la presentación. Después, la app vuelve a pedir autorización al arrancar y en cada sincronización; si ya la concediste, no verás nada.

También puedes pulsar **Conectar** en **Ajustes → Permisos** mientras el estado sea *No conectado*.

## Estados

| Estado | Significado |
|---|---|
| **Conectado** | La app ha pedido acceso. |
| **No conectado** | Aún no se ha pedido. |
| **Sin acceso** | Acceso denegado, con botón *Abrir Ajustes*. |
| **No disponible** | Este dispositivo no tiene Apple Health (iPad sin Salud, la mayoría de Macs, simulador). |
| **Error** | Falló la solicitud; Ajustes muestra el mensaje del sistema. |

> **Importante:** iOS no permite a las apps saber si has denegado la lectura. Si denegaste el acceso, la app seguirá mostrando **Conectado** y el panel aparecerá vacío. Si no ves entrenamientos y esperas verlos, revisa el permiso.

## Volver a conceder el acceso

En el iPhone: **Ajustes → Salud → Acceso a datos y dispositivos → Synctrackers** (o desde la app Salud: tu perfil → Apps → Synctrackers) y activa **Entrenamientos** y **Frecuencia cardíaca**.

## Teléfono bloqueado

Apple Health no se puede leer con el teléfono bloqueado. Si una sincronización en segundo plano ocurre en ese momento, se marca como fallida y se reintenta la próxima vez, sin perder nada.
