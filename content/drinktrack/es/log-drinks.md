---
title: Registrar bebidas
order: 2
---

## Registro rápido

Cada bebida tiene su tarjeta con el emoji, el nombre, la categoría y el coste acumulado de esa bebida.

- **+ (verde):** suma una consumición, al precio base de la bebida y con la fecha y hora de ahora.
- **− (rojo):** quita una unidad de la última entrada de esa bebida. Si esa entrada era de una sola unidad, se elimina. Está desactivado si el contador es 0.
- **Flecha de reinicio:** borra **todas** las entradas de esa bebida, no solo las de hoy, y **sin pedir confirmación**.

> **Total Hoy es acumulado.** El contador y el coste de la parte superior suman todo lo registrado desde el último reinicio. Solo bajan si pulsas la flecha de reinicio, borras entradas o usas el borrado automático de [Ajustes](/apps/drinktrack/docs/data). El widget y el Watch muestran las mismas cifras acumuladas.

## Añadir con el formulario

Pulsa **Añadir Consumición** (botón naranja inferior).

| Sección | Campo |
|---|---|
| **Bebida** | **Tipo**: el emoji y nombre de la bebida. |
| **Detalles** | **Cantidad** (entero, por defecto 1), **Precio unitario** (decimal; admite coma; por defecto, el precio de la bebida) y el **Total** calculado. |
| **Fecha y hora** | Un selector de fecha. |
| **Notas** | Texto opcional. |

**Guardar** solo se activa con cantidad y precio mayores que 0.

Dos detalles que conviene saber:

- La entrada se guarda siempre con la **fecha y hora del momento de guardar**: el selector de fecha no permite anotar consumos pasados.
- Al guardar, el precio que escribiste pasa a ser el **nuevo precio base** de esa bebida.

Las notas no se muestran después dentro de la app (en el historial solo aparece el icono 📝), pero sí se incluyen en la exportación a CSV.

## Gestionar tus bebidas

En el formulario de añadir, el botón **Gestionar** (centro de la barra superior) abre **Mis Productos**.

- **+** crea una bebida nueva (**Nuevo Producto**). Toca una fila para editarla (**Editar Producto**).
- Campos: **Nombre**, **Emoji** (toca el emoji para elegir otro; por defecto 📦), **Precio** y **Categoría** (*Alcohol* o *Sin alcohol*; por defecto, Alcohol). Para guardar hace falta un nombre y un precio mayor que 0.
- **Eliminar:** desliza una fila a la izquierda. Las bebidas de ejemplo piden confirmación (**¿Eliminar bebida por defecto?**); las tuyas no. Al eliminar una bebida se borra también todo su historial.

No hay botón para restaurar las bebidas de ejemplo: solo se vuelven a crear si la lista queda completamente vacía y reinicias la app.

## Corregir un error

No se pueden editar entradas ya guardadas. Para corregir, quita unidades con **−** o borra la entrada deslizándola en el [historial](/apps/drinktrack/docs/history-charts) (sin confirmación) y vuelve a añadirla.
