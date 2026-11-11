---
title: Cómo funciona
order: 2
---

## Cómo se elige la cita

La cita depende solo de la fecha de tu dispositivo. La página calcula el **día del año** (1 de enero = 1) y toma el resto de dividirlo entre el número de citas de la lista. No hay azar: el mismo día siempre sale la misma cita.

Ahora mismo la lista tiene **3 citas** por idioma, así que se repiten en ciclo de 3 días:

| Cita (ES) | Autor |
|---|---|
| El conocimiento es poder. | Francis Bacon |
| Yo soy aquello que soy | Popeye |
| Que la fuerza te acompañe | Yoda |

En inglés son las mismas tres: *Knowledge is power.*, *I am what I am* y *May the Force be with you*.

### Cosas a tener en cuenta

- Se usa la fecha **local** de tu dispositivo, así que el cambio de cita ocurre a tu medianoche.
- Al cambiar de año el ciclo se reinicia: el 1 de enero cuenta como día 1.
- Como el día del año se reinicia cada año y 365 no es múltiplo de 3, la cita de una misma fecha cambia de un año a otro.

## Qué pasa al cargar la página

1. Aparece *Cargando cita del día...* (o *Loading quote of the day...*).
2. A los 0,5 s se muestra la cita, el autor y la fecha.
3. La página intenta además **guardar la cita del día en una base de datos de Notion** (ver más abajo). El resultado aparece en la barra de estado.

## Guardado en Notion

Una vez al día, la primera vez que abres la página en un navegador, esta envía la cita del día (en español e inglés) y la fecha a su propio servidor (`/api/save-quote`), que la guarda en Notion. No se envía nada tuyo: solo la cita y la fecha.

Para no repetirlo, el navegador recuerda el último día guardado en `localStorage` con la clave `quoteSavedDate`. Es el único dato que la página guarda en tu navegador.

| Mensaje en la barra de estado | Significado |
|---|---|
| Guardando en Notion... | Enviando la cita. |
| Guardado en Notion ✓ | Guardada correctamente. |
| Guardado en Notion ✓ (hoy) | Ya se había guardado hoy desde este navegador. |
| Error al guardar ❌ | Falló el guardado. Además aparece un aviso rojo con el detalle. |

Un fallo de guardado no impide ver la cita.

## Privacidad

La página no usa cuentas ni cookies propias. Consulta la [política de privacidad](/privacy).
