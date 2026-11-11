---
title: Seguridad de la conexión
order: 4
---

NodusCli verifica la identidad del servidor como PuTTY: **confianza en el primer uso** (trust on first use). La primera vez tú confirmas la huella; después la app avisa si cambia.

## Primera conexión: Unknown host

Al conectar por primera vez a un `host:puerto` verás el aviso **Unknown host** con el texto *First connection to host:puerto* y la huella en formato `SHA256:…`.

| Botón | Efecto |
|---|---|
| **Trust and connect** | Guarda la huella y continúa. |
| **Cancel** | No guarda nada y cancela la conexión. |

Compara la huella con la del servidor (por ejemplo con `ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub` en el servidor) si quieres estar seguro.

## La clave cambió: HOST KEY CHANGED

Si la huella ya no coincide con la guardada, aparece **HOST KEY CHANGED** y el mensaje *The key of host:puerto differs from the one saved. Someone may be intercepting the connection.*

| Botón | Efecto |
|---|---|
| **Connect anyway** | Sustituye la huella guardada por la nueva y conecta. |
| **Cancel** | Cancela la conexión. |

> Un cambio legítimo ocurre al reinstalar el servidor o regenerar sus claves. Si no esperabas el cambio, pulsa **Cancel**: podría ser una interceptación.

## Detalles

- La huella se asocia a `host:puerto`: el mismo servidor con otro puerto cuenta como host distinto.
- Si guardas dos servidores con el mismo host y puerto, comparten la huella.
- No hay ninguna pantalla para ver o borrar las huellas guardadas. Se conservan mientras la app esté instalada.
- La ventana de confirmación admite una pregunta a la vez. Si dos pestañas piden confirmación a la vez, la primera puede quedar sin respuesta; abre las pestañas de una en una.
