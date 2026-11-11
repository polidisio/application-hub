---
title: Exportar y Vault
order: 6
---

Hay tres formas de sacar tus datos: la exportación puntual, el Vault (copias mensuales automáticas) y, solo en Mac, la API local.

## Exportación puntual (solo iOS)

**Ajustes → Exportar y compartir JSON**. Abre la hoja **Filtrar exportación**:

- **Rango de fechas** (*Desde* / *Hasta*): filtra por la fecha de inicio. «Hasta» es el comienzo de ese día, así que los entrenamientos posteriores de ese mismo día quedan fuera.
- **Tipos de entrenamiento**: Running, Cycling, Walking, Swimming, Hiking, Yoga y Other. Con ninguno marcado se incluyen todos. Los nombres están en inglés en ambos idiomas, y otros tipos (fuerza, baile…) solo se exportan sin filtro de tipo o dentro de *Other*.
- **Solo resumen (sin detalles)**: exporta únicamente los totales, sin la lista.

Pulsa **Exportar** y elige dónde guardarlo con la hoja de compartir (Archivos, AirDrop, correo…). El archivo se llama `synctrackers_<número>.json` (o `synctrackers_resumen_<número>.json`). Si falla, no se muestra ningún error: simplemente no aparece la hoja.

En Mac este botón no hace nada; usa el Vault.

## Vault: copias mensuales

El **Vault local** guarda un archivo JSON por mes y se actualiza solo después de cualquier sincronización que añada o cambie entrenamientos. Los meses se agrupan según la zona horaria del dispositivo.

- **Dónde:** en tu dispositivo, dentro de *Application Support/SyncSalud/Vault* (no entra en las copias de seguridad del dispositivo), y un espejo en **iCloud Drive → Synctrackers** mientras tengas sesión. Si el espejo falla, la app lo reintenta hasta 3 veces y muestra el error en naranja.
- **Estado:** *Local + iCloud Drive* o *Solo local (sin iCloud)*, **Última actualización** y un resumen (meses guardados, entrenamientos, tamaño, último mes).
- **Ver todos los meses** / **Ocultar meses**: despliega la lista.
- **Refrescar ahora**: regenera el Vault manualmente.
- **iOS:** toca un mes para compartir su archivo. Con **Editar** puedes marcar varios y pulsar **Compartir N**.
- **Mac:** **Abrir en Finder** muestra la carpeta del Vault.
- **Refrescar automáticamente en background**: desactivado por defecto; solo programa una tarea de iOS en segundo plano. El Vault se reescribe igualmente tras cada sincronización, aunque esté desactivado.

## Formato JSON

Mismo formato en la exportación puntual y en el Vault:

```json
{
  "exportedAt": "2026-03-01T10:00:00Z",
  "source": "Synctrackers",
  "version": "1.0",
  "month": "2026-02",
  "summary": {
    "totalWorkouts": 12,
    "totalCalories": 5400,
    "totalDuration": 38000,
    "totalDistance": 61000,
    "dateRange": { "from": "…", "to": "…" }
  },
  "workouts": [
    {
      "id": "…",
      "type": "running",
      "startDate": "…",
      "endDate": "…",
      "duration": 2700,
      "source": "Apple Watch",
      "calories": 420,
      "distance": 7200,
      "distanceUnit": "meters",
      "avgHeartRate": 152
    }
  ]
}
```

- `duration` en segundos, `distance` en metros, `calories` en kcal, fechas en ISO 8601.
- `type` es el nombre técnico en inglés (`running`, `stair_climbing`…), no el nombre traducido.
- `month` solo aparece en los archivos del Vault; `workouts` se omite si exportas solo el resumen.
- `calories`, `distance` y `avgHeartRate` solo aparecen si existen.

## Importar

La app **no tiene importación**. Para recuperar datos, vuelve a sincronizar desde Apple Health o deja que iCloud los restaure.
