---
title: Ajustes y notificaciones
order: 3
---

Abre los ajustes desde el panel con **Configuración...** (⌘,). Se muestran en una hoja con el título **Configuración**; ciérrala con la **X** de arriba o con **Cerrar**. Al final aparece la versión de la app (**Versión 1.2**, por ejemplo).

## Ajustes disponibles

| Ajuste | Valores | Por defecto |
|---|---|---|
| **Iniciar al arrancar el sistema** | Activado / desactivado | Desactivado |
| **Notificación de batería baja** (umbral) | 5 % a 50 %, de 5 en 5 | 20 % |
| **Reiniciar notificaciones** | Botón | — |

Los ajustes se guardan en tu Mac y se conservan al cerrar la app.

## Iniciar al arrancar el sistema

Con esta opción activada, la app se abre sola cuando inicias sesión («La aplicación se abrirá automáticamente al iniciar sesión»). También puedes gestionarlo en Ajustes del Sistema → General → Ítems de inicio.

> Si macOS rechaza el cambio, la app no muestra ningún error: el interruptor puede no reflejar lo que ocurre de verdad. Compruébalo en Ajustes del Sistema.

## Notificación de batería baja

El control deslizante fija el porcentaje a partir del cual te avisa. El texto de debajo lo confirma: «Se notificará cuando la batería baje del 20 %».

### Cómo funciona el aviso

- Cada vez que la app actualiza la batería, compara cada dispositivo con el umbral.
- Si el nivel es **igual o inferior** al umbral, recibes una notificación **«Batería Baja»** con el texto «*Nombre del dispositivo*: *N* % de batería restante», con el sonido predeterminado.
- Solo recibes **un aviso por dispositivo** mientras esté por debajo. El aviso se vuelve a activar cuando el nivel supera el umbral en más de 2 puntos (por ejemplo, con umbral 20 %, al llegar a 23 % o más tras cargar).
- Cada dispositivo se avisa por separado.

### Reiniciar notificaciones

**Reiniciar notificaciones** («Fuerza el reinicio de las notificaciones para todos los dispositivos») borra el recuerdo de qué dispositivos ya avisaron. Si alguno sigue por debajo del umbral, volverás a recibir el aviso en la siguiente actualización. Es útil para probarlo.

> La app no recuerda los avisos al cerrarse. Si la reinicias con la batería ya baja, recibirás el aviso otra vez.

### Permiso de notificaciones

La app pide permiso al abrirse por primera vez. Si no lo tienes concedido, en los ajustes verás un aviso amarillo («Activa las notificaciones en Preferencias del Sistema para recibir alertas de batería baja») y el control deslizante queda desactivado. Para activarlas, ve a Ajustes del Sistema → Notificaciones → MyMouseBattery y permite las notificaciones.

> Cualquier estado distinto de «permitido» (por ejemplo, avisos silenciosos provisionales) se trata como desactivado.

## Cerrar la app

Usa **Salir** (⌘Q) en el panel. No hay otra forma de cerrarla desde la propia app.
