---
title: Importar mazos
order: 7
---

Puedes crear un mazo a partir de un archivo **CSV** o **Excel (.xlsx)**. Siempre se crea un mazo nuevo; no se puede añadir tarjetas a un mazo existente.

## Preparar el archivo

Cada fila es una tarjeta: la **primera columna** es el frente (pregunta) y la **segunda** el reverso (respuesta). Se ignoran las demás columnas.

| front | back |
|---|---|
| Hello | Hola |
| Thank you | Gracias |

- Si la primera fila contiene «front» o «question» (en CSV) o «front» en su primera celda (en Excel), se toma como cabecera y se omite.
- Las filas con el frente o el reverso vacío se omiten.

### CSV

- Debe estar codificado en **UTF-8**.
- El separador se detecta por la primera línea: coma, punto y coma o tabulador.
- Puedes envolver los textos entre comillas dobles para incluir el separador dentro del texto.
- Cada tarjeta debe ocupar una sola línea: no se admiten saltos de línea dentro de una celda.
- Se quitan las comillas simples y dobles al principio y al final de cada texto.

### Excel (.xlsx)

- Solo se lee la **primera hoja**.
- Funciona bien con celdas de texto simple. Evita formatos enriquecidos dentro de una celda y celdas vacías entre el frente y el reverso, porque pueden desplazar las columnas.

## Importar

1. En **Mis Mazos** toca el botón de importar (flecha hacia abajo, arriba a la izquierda).
2. Escribe el **Nombre del Mazo**.
3. Elige el formato en el menú: **CSV** o **Excel**.
4. Toca **Seleccionar Archivo** y elige el archivo.
5. Revisa la vista previa: verás cuántas tarjetas están listas y las tres primeras.
6. Toca **Import**. El botón está desactivado sin nombre o sin tarjetas.

El mazo se crea en color azul, que no se puede cambiar después.

> Varias etiquetas de esta pantalla se muestran en inglés (por ejemplo **Import**, **Preview**, **No cards loaded**).

## Errores frecuentes

| Mensaje | Qué hacer |
|---|---|
| No cards found | El archivo no tiene filas con dos columnas con texto. Revisa el formato. |
| No cards found. Ensure Excel has 'front' and 'back' columns. | Igual, para un archivo Excel. |
| Cannot find sheet in Excel file | El archivo no es un .xlsx válido o no tiene hoja 1. |
| Un error del sistema al leer el archivo | Comprueba que el archivo es UTF-8 (CSV) y que el formato elegido coincide con el archivo. |

## Lo que no hay

- No hay exportación de mazos ni copia de seguridad.
- No se importan imágenes ni audio, ni mazos de otras apps (por ejemplo, Anki).
