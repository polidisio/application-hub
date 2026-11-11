---
title: FAQ
order: 4
---

## ¿Por qué veo siempre una de solo tres citas?

La lista tiene hoy solo 3 citas, y se repiten en ciclo. Para ampliarla, consulta [Añadir citas](/apps/daily-quotes/docs/customise).

## ¿Puedo pedir otra cita o la de ayer?

No. No hay botón de "nueva cita", ni de copiar, compartir o ver el historial. La cita depende solo de la fecha de tu dispositivo.

## ¿Por qué no funcionan los menús y botones?

Son decoración de la estética WordPad. Ninguno responde al clic.

## ¿Cómo cambio el idioma?

No hay selector. La página usa el idioma de tu navegador: español si empieza por `es`, inglés en el resto de casos.

## Veo un panel negro abajo a la izquierda con "Modo depuración"

Es un panel de depuración que está activado en la web publicada. Muestra la fecha, si la cita ya se guardó hoy y dos botones: *Reset save* (borra la marca de guardado y recarga, por lo que se reenvía la cita a Notion) y *Clear console*. Puedes ignorarlo. **Revisar:** parece algo que no debería verse en producción.

## Me sale un aviso rojo "Error al guardar en Notion"

Falló el guardado de la cita en Notion (red o servidor). La cita se muestra igual. Pulsa *Reintentar* para recargar, o *Copiar error* si necesitas pasar el detalle al autor. Mientras no se guarde, se volverá a intentar en la siguiente carga.

## La cita no cambia a medianoche

Se usa la hora de tu dispositivo. Comprueba que su fecha y zona horaria son correctas y recarga la página.

## ¿Funciona sin conexión?

No: necesitas conexión para cargar la página. Una vez cargada, la cita se muestra aunque el guardado en Notion falle.

## ¿Qué datos guarda?

Solo la marca `quoteSavedDate` en `localStorage` de tu navegador. Consulta la [política de privacidad](/privacy).
