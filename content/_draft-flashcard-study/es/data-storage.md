---
title: Datos y almacenamiento
order: 8
---

## Dónde se guardan tus datos

ThinkDeck Study funciona sin cuenta ni conexión. La app guarda tres archivos en la carpeta de documentos de la app, dentro de tu dispositivo:

| Archivo | Contenido |
|---|---|
| `decks.json` | Mazos y tarjetas. |
| `progress.json` | Programación de repasos (repeticiones, factor de facilidad, intervalo, próxima fecha). |
| `stats.json` | Estadísticas de tarjetas y mazos. |

La app no usa iCloud, no tiene sincronización entre dispositivos, no tiene servidores propios y no envía datos a ningún sitio. Tampoco incluye analítica ni publicidad. Si usas copia de seguridad del dispositivo (iCloud o Finder), esos archivos van incluidos como el resto de datos de la app. Consulta la [política de privacidad](/privacy).

## Los datos no se conservan entre sesiones

> **Limitación importante (a revisar):** al iniciar, la app recrea siempre los cuatro mazos de ejemplo (*Vocabulary*, *History*, *Science*, *Languages*) y sobrescribe `decks.json` con ellos. En la práctica, cada vez que cierras la app por completo y la vuelves a abrir:
>
> - Los mazos que hayas creado o importado desaparecen.
> - Las tarjetas que hayas añadido, editado o eliminado en los mazos de ejemplo vuelven a su estado original.
> - Las estadísticas y el calendario de repasos se pierden, porque están ligados a identificadores que cambian en cada arranque.

Mientras la app sigue abierta, todo funciona con normalidad y se guarda en los archivos. Si cambias de app y vuelves, normalmente sigue todo, pero si iOS cierra la app para liberar memoria, al volver verás los mazos de ejemplo.

Hasta que se corrija, usa la app para sesiones de estudio puntuales. Si importas un mazo, conserva siempre el archivo original para poder volver a importarlo.

## Eliminar tus datos

- Un mazo: mantenlo pulsado y elige **Eliminar** (sin confirmación).
- Todo: desinstala la app. Esto borra sus archivos del dispositivo.

No hay exportación ni restauración de copias desde la app.

## Idioma y aspecto

- El idioma sigue el de tu dispositivo (español, inglés, francés o alemán).
- La app siempre usa el tema claro.
