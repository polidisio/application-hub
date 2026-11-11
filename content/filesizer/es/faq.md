---
title: Preguntas frecuentes
order: 6
---

## El escaneo termina y no sale ningún archivo

Prueba por orden:

- Elige la carpeta con **Select Directory**: sin ese permiso, el *sandbox* impide leerla.
- Baja **Min Size** (el valor por defecto es 100 MB) o quita extensiones.
- Si escaneas dentro de una carpeta llamada `Caches`, `vendor`, `.git`, etc., desactiva **Exclude system dirs** (ver [Escanear y filtros](/apps/filesizer/docs/scanning)).
- Recuerda que los archivos ocultos y el interior de paquetes (`.app`, bibliotecas) no se listan.

## ¿Puedo escanear todo el disco?

Sí: elige el volumen con el selector. Los volúmenes grandes tardan más. FileSizer no pide *Acceso total al disco*, así que las zonas protegidas por macOS (por ejemplo partes de `~/Library`) pueden quedar fuera sin avisar.

## ¿Puedo mover o borrar varios archivos a la vez?

No. **Move to Trash** actúa sobre un archivo cada vez y siempre pide confirmación. Los archivos van a la Papelera, no se borran definitivamente.

## He movido un archivo a la Papelera y sigue en la lista

La app no muestra errores al mover. Comprueba en el Finder si el archivo realmente se movió (permisos, disco de solo lectura).

## No encuentro el archivo exportado

Se guarda en **Descargas** como `bigfiles_export_<número>.csv/json` y el Finder debería abrirse con él seleccionado. Si no aparece el mensaje de éxito, la exportación falló sin aviso. Prueba a escanear de nuevo y exportar otra vez; si persiste, es una limitación conocida de esta versión.

## El historial dice "0 files" en todo

Es así en la versión actual: el historial guarda los ajustes del escaneo, no la lista de archivos. Mira [Historial](/apps/filesizer/docs/history).

## No veo avisos de error ni de escaneo terminado

FileSizer los envía como notificaciones del sistema. Actívalas en Ajustes del Sistema → Notificaciones → FileSizer.

## ¿Se puede cambiar el idioma?

No. La interfaz está en inglés.

## ¿Se puede ordenar por otra cosa que no sea el tamaño al escanear?

El escaneo siempre recoge los archivos más grandes. Después puedes ordenar la tabla por **Name**, **Size** o **Modified**, pero solo entre los archivos encontrados (limitados por **Result Limit**).

## ¿Qué diferencia hay con "bigfiles"?

`bigfiles` es una herramienta de terminal en Python del mismo autor. FileSizer es la app nativa de Mac con interfaz gráfica y es independiente de ella.

## ¿Se envían mis datos a algún sitio?

No. Ver [Primeros pasos](/apps/filesizer/docs/getting-started) y la [política de privacidad](/privacy).
