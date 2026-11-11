---
title: Datos y sincronización
order: 6
---

## Dónde se guardan tus notas

Tus notas y carpetas se guardan en una base de datos local en el dispositivo (Core Data). Cada nota guarda título, texto, etiquetas, carpeta y fechas de creación y modificación. La app no necesita conexión para nada.

Tu elección de tema y de color de acento se guarda aparte, solo en ese dispositivo.

## Sincronización con iCloud

La app guarda sus datos con un contenedor de iCloud (CloudKit) de tu cuenta, de modo que tus notas se copian y llegan a tus otros dispositivos.

> **No hay un interruptor de iCloud dentro de la app.** La sincronización no se activa ni se desactiva desde Markdown Notes: depende de que el dispositivo tenga una cuenta de iCloud iniciada. Si prefieres no usar iCloud con esta app, hazlo en los ajustes de iOS (tu nombre → **iCloud**), donde puedes desactivarla para la app. La app no avisa cuando la sincronización falla ni muestra su estado.

Qué se sincroniza y qué no:

| Se sincroniza | No se sincroniza |
|---|---|
| Notas (título, texto, etiquetas, fecha). | Tema (Sistema/Claro/Oscuro). |
| Carpetas y a qué carpeta pertenece cada nota. | Color de acento. |
| Borrados. | |

Para sincronizar entre dispositivos:

1. Inicia sesión con la **misma cuenta de iCloud** en los dos dispositivos.
2. Comprueba en los ajustes de iOS que iCloud está activado para Markdown Notes.
3. Espera un poco: los cambios no son instantáneos y necesitan conexión. Sin red, los cambios esperan y se envían al volver.

Si editas la misma nota en dos dispositivos a la vez, se conserva el cambio más reciente de cada campo, sin aviso ni ventana de conflicto.

## Privacidad

La app no incluye analítica ni publicidad. Tus notas no se envían a servidores del desarrollador; con iCloud, viajan a tu cuenta de Apple. Consulta la [política de privacidad](/privacy).

## Cambiar de dispositivo

Con iCloud en ambos dispositivos, tus notas aparecen solas. Sin iCloud, no hay copia de seguridad ni restauración integradas: exporta tus notas a **Markdown** una a una ([Importar y exportar](/apps/markdown-notes/docs/import-export)) y vuelve a importarlas en el otro dispositivo.

> Si desinstalas la app sin iCloud, pierdes las notas. Con iCloud, vuelven al reinstalar e iniciar sesión.
