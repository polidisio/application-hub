---
title: Datos y copias
order: 6
---

Tus datos se guardan **solo en tu dispositivo** (más el reflejo en el Apple Watch). No hay sincronización con iCloud ni copia automática propia: dependes de la copia de seguridad normal de iOS.

## Ajustes de datos

En **Ajustes**:

- **Guardar consumiciones**: **Indefinidamente** (por defecto), **7 días**, **30 días**, **90 días** o **365 días**. Las entradas más antiguas se eliminan solas al abrir la app. Las bebidas no se borran.
- **Importar Bebidas** y **Exportar a CSV** (ver abajo).
- **Borrar Todo el Historial** (en la **Zona de Peligro**): elimina todas las consumiciones tras confirmar (**¿Borrar Todos los Datos?**) y no se puede deshacer. Conserva tus bebidas y ajustes.
- **Analíticas**: interruptor **Compartir uso anónimo**, desactivado por defecto.
- **Acerca de**: la **Versión** de la app.

## Exportar a CSV (historial completo)

**Ajustes → Exportar a CSV** abre la hoja de compartir con **todas** las entradas. Columnas: `Date`, `Drink`, `Emoji`, `Quantity`, `Unit Price`, `Total`, `Notes`. Incluye las notas.

## Exportar tus bebidas (JSON)

El botón de compartir de la pantalla principal exporta un JSON con la **lista de bebidas**: nombre, emoji, precio base, categoría, orden y la cantidad acumulada de cada una. No incluye el historial ni las fechas.

## Importar bebidas

**Ajustes → Importar Bebidas**, o abre un archivo `.json` exportado (por AirDrop o Archivos). Eliges:

- **Combinar:** actualiza las bebidas que ya existen (por identificador) y añade, para cada una, una consumición con la cantidad del archivo al precio base y a la hora actual.
- **Reemplazar:** **borra todas tus consumiciones y bebidas** y crea las del archivo con sus cantidades. Se saltan las entradas sin nombre o con precio negativo.

> Importar dos veces el mismo archivo con **Combinar** duplica los contadores. Y la app no muestra errores de importación: si el archivo no vale, simplemente no pasa nada.
