---
title: Repetición espaciada
order: 5
---

ThinkDeck Study programa cada tarjeta con un algoritmo de la familia SM-2 (el de la mayoría de apps de flashcards). Esta página describe exactamente lo que hace la app.

## Datos que guarda cada tarjeta

Para cada tarjeta que valoras, la app guarda tres valores:

| Dato | Valor inicial | Significado |
|---|---|---|
| Repeticiones | 0 | Aciertos seguidos desde el último fallo. |
| Factor de facilidad | 2,5 | Cuánto crece el intervalo en cada acierto. Nunca baja de 1,3. |
| Intervalo | 0 | Días hasta la próxima revisión. |

## Qué pasa al valorar

Solo hay dos botones, y cada uno aplica una calidad interna fija:

| Botón | Intervalo nuevo | Repeticiones | Factor de facilidad |
|---|---|---|---|
| **Correctas** | Si llevaba 0 repeticiones: 1 día. Con 1: 6 días. Con 2 o más: intervalo anterior × factor de facilidad (se redondea hacia abajo). | +1 | No cambia. |
| **Incorrectas** | 1 día. | Vuelve a 0. | Baja 0,32 (con mínimo de 1,3). |

La próxima revisión se calcula como el momento actual más el intervalo en días.

### Ejemplo

Una tarjeta nueva que aciertas siempre, con el factor 2,5:

| Acierto n.º | Intervalo |
|---|---|
| 1 | 1 día |
| 2 | 6 días |
| 3 | 15 días |
| 4 | 37 días |
| 5 | 92 días |

Si fallas, el intervalo vuelve a 1 día, las repeticiones a 0 y el factor baja a 2,18. Los aciertos siguientes crecen más despacio (1, 6, 13, 28...).

## Cuándo «toca» una tarjeta

Una tarjeta toca si nunca la has valorado o si su fecha de próxima revisión ya pasó. El modo **Due Today** pone esas tarjetas primero. Ver [Estudiar](/apps/flashcard-study/docs/study).

## Nivel, precisión y dominio

Aparte del calendario de repasos, cada tarjeta tiene un **Nivel** de 0 a 10 que solo sirve para las estadísticas:

- Empieza en 0.
- **Correctas** suma 1 (máximo 10).
- **Incorrectas** resta 1, pero nunca baja de 1 una vez estudiada.
- Una tarjeta cuenta como **Mastered/Dominada** cuando su nivel es 6 o más.
- La **Precisión** es aciertos entre veces estudiada, en porcentaje.

> El nivel no influye en el calendario de repasos: este depende solo de las repeticiones, el factor de facilidad y el intervalo.

## Límites

- No hay límite diario de tarjetas nuevas ni de repasos.
- No hay recordatorios ni notificaciones: la app no te avisa de que toca estudiar.
- No se puede ajustar el factor inicial ni los intervalos.
- Las calidades «Difícil» y «Fácil» existen en el código pero no hay botones para usarlas.
