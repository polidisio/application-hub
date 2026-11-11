---
title: Procesar carpetas
order: 5
---

`batch` aplica una o varias operaciones a todas las fotos admitidas (`.jpg`, `.jpeg`, `.png`, `.tif`, `.tiff`) de una carpeta.

```bash
exiftool-cli batch --folder ./fotos --extract
```

## Opciones

| Opción | Descripción |
|---|---|
| `-f`, `--folder` | Carpeta con las fotos (obligatoria). |
| `-o`, `--output` | Carpeta de salida. Por defecto, la propia carpeta de entrada. Se crea si no existe. |
| `--extract` | Muestra la tabla de metadatos de cada foto. |
| `--export json\|csv` | Genera un único archivo con los metadatos de todas las fotos. |
| `--remove` | Crea una copia sin metadatos de cada foto. |
| `--keep-gps` | Con `--remove`, conserva los datos GPS. Sin `--remove` no hace nada. |
| `-r`, `--recursive` | Incluye subcarpetas. |

Debes indicar al menos una de `--extract`, `--export` o `--remove` (si no: `Specify at least one operation: --remove, --extract, or --export`, código 1). Puedes combinarlas en una sola ejecución.

## Ejemplos

```bash
# Ver los metadatos de todas las fotos
exiftool-cli batch -f ./fotos --extract

# Exportar todo a un CSV
exiftool-cli batch -f ./fotos --export csv -o ./informes

# Limpiar con subcarpetas, copias en otra carpeta, conservando el GPS
exiftool-cli batch -f ./fotos -r --remove --keep-gps -o ./limpias
```

## Dónde se guardan los resultados

- `--remove`: cada copia se llama `<nombre>_clean<extensión>`. Sin `-o`, queda **junto al original**.
- `--export`: un único archivo `exif_export.json` o `exif_export.csv`, en la carpeta de `-o` o, si no la das, en la carpeta de entrada.

> Cuidado al repetir una ejecución sin `-o`: las copias `_clean` ya están en la carpeta y se tratan como fotos nuevas, así que se generan `foto_clean_clean.jpg` y el `--export` las incluye. Usa `-o` hacia otra carpeta.

> Con `-o` y `--recursive`, las copias de todas las subcarpetas van a **una sola carpeta plana**. Si dos fotos tienen el mismo nombre en subcarpetas distintas, la última sobrescribe a la anterior sin aviso. Lo mismo para `--export`: solo guarda el nombre de archivo, sin la subcarpeta.

## Progreso y resultado

Se muestra `Processing N files...`, una barra de progreso y al final:

```
Completed: 12 success, 1 skipped, 0 failed
```

- **skipped**: la foto no se pudo leer como EXIF (`Skipped nombre: ...`).
- **failed**: error inesperado en esa foto.

Un fallo en una foto no detiene el resto. El código de salida es `0` aunque haya fotos saltadas o fallidas; mira el resumen final. Si la carpeta no tiene fotos admitidas, avisa (`No supported images found in ...`) y sale con `0`.

> Con `--extract` las tablas se imprimen mezcladas con la barra de progreso, por lo que la salida es poco limpia. Para un informe ordenado, usa `--export`.
