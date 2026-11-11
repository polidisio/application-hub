---
title: Añadir imágenes y tamaños
order: 2
---

## Añadir imágenes

Hay dos formas, y puedes combinarlas:

- **Arrastrar y soltar**: suelta uno o varios archivos sobre el área de drop. Mientras arrastras, el recuadro se resalta.
- **Browse Files**: abre un selector de archivos que permite elegir varios a la vez (solo archivos, no carpetas).

El área dice *Supports PNG, JPG, and HEIC*, pero en la práctica acepta cualquier archivo que macOS reconozca como imagen. Lo que no sea una imagen se ignora sin avisar al arrastrarlo, y las carpetas arrastradas no se abren.

Cuando ya hay imágenes, el área muestra el contador (por ejemplo *4 images selected*) y dos acciones:

| Acción | Qué hace |
|---|---|
| **Add** | Abre el selector para añadir más imágenes. |
| **Clear** | Vacía la lista entera. No hay forma de quitar solo una. |

Si añades el mismo archivo dos veces, solo cuenta una. No hay vista previa ni lista de nombres: solo ves cuántas imágenes hay.

## Elegir el tamaño

En **Dimensions**, el selector **Size** ofrece estos valores. QIResizer usa siempre el **ancho** como medida principal.

| Opción | Ancho (px) | Alto (px) |
|---|---|---|
| **480p** | 640 | 480 |
| **720p** | 1280 | 720 |
| **1080p** (por defecto) | 1920 | 1080 |
| **Smartphone Classic** | 1242 | 2208 |
| **Smartphone Plus** | 1242 | 2688 |
| **Smartphone Pro** | 1290 | 2796 |
| **Tablet Pro** | 2048 | 2732 |
| **Desktop Standard** | 2560 | 1600 |
| **Desktop Pro** | 2880 | 1800 |
| **4K** | 3840 | 2160 |
| **Custom** | tú lo escribes | según el caso |

### Ancho personalizado

Al elegir **Custom** aparece un campo **Width** (en px). Debe ser un número entre 1 y 10000; si no, verás *Enter 1-10000* y no se redimensiona nada.

> La comprobación del ancho se hace **después** de elegir la carpeta de destino. Si el ancho no es válido, el aviso aparece al volver a la ventana y tendrás que pulsar **Resize Now** otra vez.

### Lock Aspect Ratio

Con **Lock Aspect Ratio** activada (por defecto):

- El ancho será el de la opción elegida y el alto se calcula para mantener la proporción de cada imagen. El alto de la tabla **no se usa**.
- Así, 1080p significa "1920 px de ancho", no "1920 × 1080".

Con la casilla desactivada:

- **Con un preset**: la imagen se ajusta exactamente al ancho × alto de la tabla. Si la proporción no coincide, la imagen se deforma (se estira o se aplasta).
- **Con Custom**: el ancho es el que escribas y el alto se queda **igual que el original**, así que la imagen se deforma salvo que ya tenga ese ancho.

> QIResizer no recorta ni añade bandas: solo escala. Tampoco evita ampliar: si eliges un tamaño mayor que el original, la imagen se amplía y pierde nitidez.

Siguiente: [Formatos, calidad y nombres de archivo](/apps/qiresizer/docs/output).
