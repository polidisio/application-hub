---
title: El editor
order: 2
---

Toca una nota de la lista para abrirla. Arriba tienes el título, el selector de modo y dos botones; debajo, las etiquetas, la barra de formato y el texto.

## Cabecera

| Elemento | Qué hace |
|---|---|
| Campo **Título** | Nombre de la nota. Es independiente de los encabezados `#` del texto. |
| Selector **Editar / Texto editable / Dividir** | Cambia el modo de edición (ver abajo). |
| Botón ⋯ | Abre un menú con **Etiquetas** y **Exportar**. |
| Botón de engranaje | Abre los [Ajustes](/apps/markdown-notes/docs/settings). |

## Modos de edición

| Modo | Qué ves |
|---|---|
| **Editar** | Solo el texto en Markdown, con colores. Incluye barra de formato y contador. |
| **Texto editable** | Solo la vista formateada, y **puedes escribir directamente en ella**. |
| **Dividir** | Texto Markdown a la izquierda y vista formateada a la derecha. Incluye la barra de formato. |

### Editar

El texto se muestra en tipografía monoespaciada y con resaltado de sintaxis: encabezados en azul, negrita en naranja, cursiva en morado, código en verde, enlaces en turquesa, listas y citas en gris. El resaltado es solo visual y no cambia tu texto.

Al pie se muestra el número de **palabras**, de **caracteres** y la fecha de la última modificación. Las palabras se cuentan separando por espacios, así que los saltos de línea sin espacio pueden hacer que el total salga más bajo de lo real.

### Texto editable

Muestra la nota ya formateada y la deja editable. Cuando dejas de escribir (medio segundo), la app convierte lo que ves de vuelta a Markdown y lo guarda.

> Esa conversión es aproximada. Las listas numeradas pasan a listas con guiones, y las tablas, el tachado u otros elementos pueden perder su formato o quedar como texto plano. Si tu nota usa sintaxis avanzada, edita en el modo **Editar** o **Dividir** y usa **Texto editable** solo para retoques de texto. Al pegar, siempre se pega como texto sin formato.

### Dividir

Es el modo más cómodo para escribir y comprobar el resultado. La vista de la derecha también es editable, con la misma conversión aproximada de arriba. En un iPhone en vertical cada mitad queda muy estrecha; girar el dispositivo ayuda.

## Barra de formato

Aparece en los modos **Editar** y **Dividir**. Desliza hacia los lados para verla entera.

| Botón | Inserta |
|---|---|
| **B** | `**texto**` alrededor de la selección. |
| *I* | `*texto*` alrededor de la selección. |
| **H** | `# ` al inicio de la línea actual. |
| Lista | Una nueva línea con `- `. |
| `< >` | Código en línea con acentos graves. |
| Llaves `{}` | Un bloque de código con tres acentos graves. |
| Enlace | `[selección](url)`. |
| Foto | `![selección](url)`. |
| Cita | Una nueva línea con `> `. |
| `?` | Abre **Ayuda Markdown**, una chuleta de sintaxis. |

Si tienes texto seleccionado, los botones lo envuelven; si no, insertan la marca vacía en la posición del cursor. Después sustituye `url` por la dirección real.

> El botón **H** no alterna entre niveles: siempre añade `# `. Pulsarlo varias veces repite el prefijo. Para `##` o `###` escribe los símbolos a mano.

## Vista previa rápida desde la lista

En cada fila de la lista hay un icono de ojo. Abre la nota formateada en una hoja con el botón **Cerrar**. Sirve para leer sin entrar en el editor. Los cambios que hagas ahí no se guardan.

## Guardado

La nota se guarda en cada cambio de título o de texto, y se actualiza su fecha de modificación. Por eso la lista siempre muestra primero la nota que has tocado más recientemente.

> Los enlaces de la vista previa se abren dentro de la propia vista, sin botón para volver. Si tocas uno por error, cierra y reabre la nota.
