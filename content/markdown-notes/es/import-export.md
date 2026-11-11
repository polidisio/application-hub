---
title: Importar y exportar
order: 5
---

## Importar una nota

1. En la barra lateral, pulsa ⋯ → **Importar nota**.
2. Elige un archivo en el selector de archivos.
3. La nota se crea y se abre en el editor. Si tenías una carpeta seleccionada, entra en ella.

Solo se puede importar **un archivo cada vez**, y solo de tipo `.md`, `.markdown` o `.txt`. El título se decide así:

| Archivo | Título | Texto |
|---|---|---|
| `.md` / `.markdown` | Si la primera línea empieza por `# `, ese texto es el título y se quita del cuerpo. Si no, el título es *Sin título*. | El resto del archivo. |
| `.txt` | La primera línea no vacía. | Las líneas siguientes. |

> Si el archivo no se puede leer como texto UTF-8 o tiene otra extensión, **no ocurre nada y no se muestra ningún error**. Si importar desde Archivos o iCloud Drive no hace nada, copia primero el archivo a **En mi iPhone** e inténtalo de nuevo.

## Exportar una nota

1. Abre la nota y pulsa ⋯ → **Exportar**.
2. En **Formato de exportación**, elige un formato (por defecto **PDF**).
3. Pulsa **Exportar**. Se abre la hoja de compartir de iOS para guardarlo en Archivos, enviarlo por AirDrop, correo, etc.

El archivo se llama como la nota, con los espacios cambiados por guiones bajos.

| Formato | Qué genera | Estado |
|---|---|---|
| **PDF** | Página con el título y la nota formateada. | Funciona. Ver aviso abajo. |
| **HTML** | Página web autocontenida con estilos básicos. | Funciona. |
| **DOCX** | Un archivo `.docx`. | **No funciona de verdad**: ver aviso abajo. |
| **Markdown** | Archivo `.md` con el título como `# Título` seguido del texto. | Funciona. |
| **Texto** | Archivo `.txt` con el título subrayado con `=` y la nota sin formato. | Funciona. |
| **Markdown + HTML** | Un `.zip` con el `.md` y el `.html`. | Poco fiable: ver aviso abajo. |
| **Markdown + Texto** | Un `.zip` con el `.md` y el `.txt`. | Poco fiable: ver aviso abajo. |

> **DOCX:** la versión actual no convierte tu nota. Genera un archivo mínimo con el texto fijo "Convertido desde Markdown" que Word y otras apps no abren como documento válido. No lo uses; exporta a **PDF** o **HTML**.

> **ZIP:** los formatos **Markdown + HTML** y **Markdown + Texto** generan un `.zip` construido a mano que puede salir dañado y no abrirse. Si no se abre, exporta cada formato por separado.

> **PDF:** el PDF puede incluir una primera página en blanco, y el texto se pinta con el estilo básico de la app (sin color de código). Revisa el resultado antes de enviarlo.

El HTML exportado declara el idioma como español (`lang="es"`) sea cual sea el idioma de tu nota.

## Exportar todas las notas

En ⋯ → **Exportar todas** hay una hoja con el selector de formato y el botón **Exportar todas las notas**.

> **No funciona todavía.** El botón recorre las notas y cierra la hoja, pero **no genera ni comparte ningún archivo**, y el formato elegido se ignora. Para hacer una copia de seguridad, usa por ahora la exportación nota a nota o confía en [iCloud](/apps/markdown-notes/docs/data-sync).

## Consejo de copia de seguridad

No hay una función de copia de seguridad dentro de la app. Tus notas viven en la base de datos de la app y, si lo tienes, en tu iCloud. Para guardar una nota importante fuera de la app, exporta a **Markdown**: es el formato más fiable y se puede volver a importar con **Importar nota**.
