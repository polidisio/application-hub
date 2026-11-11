---
title: Mac y API local
order: 7
---

Synctrackers también existe como app nativa de Mac (macOS 14.0 o posterior).

## Diferencias en Mac

- La mayoría de los Mac no tienen Apple Health, así que los entrenamientos llegan **desde tu iPhone por iCloud**. Mientras no haya datos, el Dashboard mostrará *HealthKit no conectado* y Ajustes avisará de que Apple Health no está disponible.
- No hay sincronización en segundo plano ni búsqueda por tipo en la lista.
- La exportación puntual no está disponible; usa el [Vault](/apps/synctracers/docs/export-vault).
- Existe una API local para agentes.

## API para agentes

Al arrancar, la app de Mac abre un servidor HTTP en el puerto **8080** (si se detiene, hay un botón **Iniciar API local** en Ajustes). Una tarjeta del Dashboard indica si está activa.

| Ruta | Devuelve |
|---|---|
| `/v1/health` | Estado del servicio. |
| `/v1/workouts` | Lista de entrenamientos. Filtros: `type`, `from`, `to`, `limit` (por defecto 50, máximo 1000). |
| `/v1/workouts/latest` | El más reciente. |
| `/v1/workouts/{uuid}` | Un entrenamiento. |
| `/v1/summary` | Resumen. |
| `/v1/export` | Todo el historial. |

> **Aviso de seguridad:** el servidor no tiene autenticación y escucha en todas las interfaces de red, no solo en tu propio equipo. Cualquier dispositivo de tu red local puede leer tus entrenamientos. No lo uses en redes que no controles. Es una limitación conocida del proyecto.
