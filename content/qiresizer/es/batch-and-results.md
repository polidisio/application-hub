---
title: Lotes y estadísticas
order: 4
---

## Procesar un lote

Todas las imágenes de la lista se procesan una detrás de otra con los mismos ajustes (tamaño, formato, calidad y nombre). Durante el proceso, el pie de la ventana muestra:

- **Resizing images...** con el porcentaje.
- Una barra de progreso.
- El botón **Cancel**.

Los controles de la ventana siguen visibles, pero **Resize Now** desaparece hasta que termina.

### Cancelar

**Cancel** detiene el lote antes de la siguiente imagen. Las que ya se habían guardado se quedan en la carpeta; la que está en curso termina.

> Si cancelas después de haber procesado al menos una imagen, la app trata el lote como terminado: vacía la lista, incluidas las imágenes que no se llegaron a procesar. Tendrás que volver a añadirlas.

## Al terminar

- Si todo salió bien, la lista de imágenes se vacía para que puedas empezar otro lote.
- Abajo se muestran las **estadísticas** (ver más abajo).

### Errores

Si alguna imagen falla, aparece un aviso rojo, por ejemplo *Error processing foto.jpg: Could not load image*. Se muestra solo el **primer** error y desaparece a los 5 segundos. Las imágenes que sí se procesaron quedan guardadas, y la lista **no** se vacía, así que si vuelves a pulsar **Resize Now** se reprocesarán todas.

Los mensajes de error aparecen en inglés. Los más probables:

| Mensaje | Significado |
|---|---|
| *Could not load image* | El archivo no se pudo abrir como imagen (dañado o formato no compatible). |
| *Failed to create bitmap representation* / *Failed to generate image data* | No se pudo codificar el resultado. |
| Mensaje del sistema (por ejemplo, sin permiso o disco lleno) | Falló la escritura en la carpeta de destino. |

## Estadísticas de ahorro

Tras procesar, el pie muestra:

- **Saved N% in total size**: el porcentaje de ahorro sobre el total del lote.
- Debajo, el tamaño total antes y después (por ejemplo `12,4 MB → 3,1 MB`).

Los números cuentan el lote entero, no cada imagen por separado, y siguen visibles hasta que lances otro lote.

> Si el resultado pesa más que el original (por ejemplo, al ampliar una imagen o al convertir a PNG), el porcentaje sale negativo. Y si alguna imagen falló, cuenta como 0 bytes y el ahorro mostrado sale más alto de lo real.

Siguiente: [Tema y ajustes](/apps/qiresizer/docs/settings).
