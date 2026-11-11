---
title: Formatos de exportación
order: 4
---

`export` (y `batch --export`) generan JSON o CSV con los mismos 18 campos que muestra `extract`. Esta página describe esos campos y la forma de cada archivo.

## Campos que se leen

| Campo (JSON/CSV) | En la tabla | Notas |
|---|---|---|
| `camera_make` | Camera Make | Fabricante de la cámara. |
| `camera_model` | Camera Model | |
| `software` | Software | |
| `lens_make` | Lens Make | |
| `lens_model` | Lens Model | |
| `date_time` | Date/Time | Texto tal cual, p. ej. `2024:03:15 10:30:00`. |
| `date_time_original` | Date Taken | Fecha de captura. |
| `gps_latitude` | Latitude | Grados decimales; negativo al sur. |
| `gps_longitude` | Longitude | Grados decimales; negativo al oeste. |
| `gps_altitude` | Altitude | Número (metros según el EXIF). |
| `exposure_time` | Exposure | Texto, p. ej. `1/250`. |
| `f_number` | F-Number | |
| `iso` | ISO | Entero. |
| `focal_length` | Focal Length | |
| `image_width` | Width | Ancho declarado en el EXIF. |
| `image_height` | Height | Alto declarado en el EXIF. |
| `orientation` | Orientation | Número EXIF (1 a 8). |
| `color_space` | Color Space | Solo `sRGB` o `Uncalibrated`. |

Solo se exportan estos campos. No es un volcado completo de todas las etiquetas EXIF: el resto (flash, balance de blancos, número de serie, etc.) no aparece.

## JSON

Un objeto por foto, con sangría de 2 espacios y caracteres Unicode sin escapar. Los campos sin valor **se omiten**.

```json
{
  "filename": "foto.jpg",
  "camera_make": "Canon",
  "camera_model": "EOS R5",
  "date_time_original": "2024:03:15 10:30:00",
  "gps_latitude": 40.5,
  "gps_longitude": -74.0,
  "exposure_time": "1/250",
  "f_number": 2.8,
  "iso": 400,
  "focal_length": 50.0
}
```

`filename` es solo el nombre, sin ruta. En `batch --export json` el archivo es una **lista** de estos objetos.

## CSV

Cabecera fija con 19 columnas, en este orden:

```
filename,camera_make,camera_model,software,date_time,date_time_original,gps_latitude,gps_longitude,gps_altitude,exposure_time,f_number,iso,focal_length,image_width,image_height,orientation,color_space,lens_make,lens_model
```

Una fila por foto. Los campos sin valor quedan **vacíos**. Con `export` el archivo tiene la cabecera y una sola fila; con `batch --export csv` tiene una fila por cada foto. Codificación UTF-8.

> Si una foto no tiene EXIF (o es PNG), el JSON contiene solo `filename` y la fila CSV solo tiene el nombre.

## Privacidad de lo exportado

Los archivos exportados pueden incluir **coordenadas GPS exactas** y fecha de captura. Revísalos antes de compartirlos.
