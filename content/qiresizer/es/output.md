---
title: Formatos, calidad y nombres
order: 3
---

## Formato de salida

En **Output Settings**, el selector **Format** ofrece tres formatos. Por defecto es **JPEG**.

| Formato | Extensión | Calidad | Cuándo usarlo |
|---|---|---|---|
| **JPEG** | `.jpg` | Ajustable | Fotos; ficheros pequeños. |
| **PNG** | `.png` | Sin pérdida (sin deslizador) | Capturas, gráficos, texto. |
| **HEIC** | `.heic` | Ajustable | Ficheros aún más pequeños, en el ecosistema Apple. |

Puedes convertir de un formato a otro: por ejemplo, de HEIC a JPEG para compartir con quien no abre HEIC.

### Calidad

El deslizador **Quality** solo aparece con JPEG y HEIC. Va del **10% al 100%** y por defecto está en **85%**. Menos calidad significa un archivo más pequeño y más artefactos visibles.

> El ajuste de calidad no se recuerda: al cerrar la app vuelve a 85%, y el formato a JPEG.

### Metadatos

Las imágenes se vuelven a dibujar y a codificar, así que el resultado **no conserva** los metadatos del original (como EXIF: cámara, fecha o ubicación GPS). Esto puede ser útil para compartir sin datos de ubicación, pero no lo consideres una garantía de privacidad sin comprobarlo.

## Nombres de los archivos

El nombre depende del campo **Custom Name** (opcional):

| Custom Name | Ejemplo de resultado |
|---|---|
| Vacío | `vacaciones_resized.jpg` (nombre original + `_resized`) |
| `viaje` | `viaje_1.jpg`, `viaje_2.jpg`, `viaje_3.jpg`… |

Con **Custom Name**, el número sigue el orden de la lista de imágenes. La extensión la marca el formato elegido.

## Carpeta de destino

La carpeta se elige cada vez que pulsas **Resize Now**, en un panel con el botón **Select Folder** (puedes crear una carpeta nueva desde ahí). La app no recuerda la última carpeta usada.

> Si en la carpeta de destino ya existe un archivo con el mismo nombre, **se sobrescribe sin preguntar**. Esto ocurre fácilmente al reutilizar un **Custom Name** o al procesar dos imágenes con el mismo nombre desde carpetas distintas (sin nombre personalizado, ambas dan el mismo `_resized`).

Siguiente: [Lotes, cancelación y estadísticas](/apps/qiresizer/docs/batch-and-results).
