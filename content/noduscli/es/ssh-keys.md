---
title: Claves SSH
order: 3
---

Además de la contraseña, puedes entrar con una clave privada. NodusCli guarda **una sola clave** y la usa con todos tus servidores.

## Formatos admitidos

| Formato | ¿Admitido? |
|---|---|
| OpenSSH ed25519 (`BEGIN OPENSSH PRIVATE KEY`), sin passphrase | Sí |
| ECDSA P-256, P-384 o P-521 en PEM, sin passphrase | Sí |
| ECDSA en formato OpenSSH (`BEGIN OPENSSH PRIVATE KEY`) | No |
| RSA | No |
| Cualquier clave protegida con passphrase | No |
| PuTTY `.ppk` | No |

> Las claves ECDSA que genera `ssh-keygen` por defecto usan el formato OpenSSH, que la app rechaza (*Key type … not supported. Use ed25519.*). Para ECDSA hace falta una clave en PEM. Lo más sencillo es generar una ed25519: `ssh-keygen -t ed25519`.

## Importar una clave

1. En la pantalla principal, sección **SSH key**, pulsa **Import private key…**.
2. Elige el archivo de la clave privada en el selector de archivos de iOS (puede estar en Archivos, iCloud Drive, etc.).
3. La app valida la clave **antes** de guardarla. Si es válida, la sección pasa a mostrar **Key stored in Keychain**.

Si algo falla verás el aviso **Cannot import key** con el motivo y la clave no se guarda:

| Mensaje | Qué hacer |
|---|---|
| *RSA keys are not supported. Use ed25519 or ECDSA.* | Genera una clave ed25519. |
| *.ppk not supported. Export with puttygen…* | En PuTTYgen: Conversions > Export OpenSSH key (new format). |
| *Passphrase-protected keys are not supported yet…* | Quita la passphrase: `ssh-keygen -p -N "" -f <clave>`. |
| *Key type … not supported. Use ed25519.* | Es una clave OpenSSH que no es ed25519. Usa ed25519 o exporta la ECDSA en PEM. |
| *Unrecognized private key format.* | El archivo no es una clave privada compatible. |
| *Corrupt key.* | El archivo está dañado o incompleto. |

> Quitar la passphrase deja la clave sin protección en el archivo original. Hazlo solo en una copia y bórrala después de importarla.

## Usar la clave en el servidor

Copia la clave **pública** (`.pub`) al `~/.ssh/authorized_keys` del servidor. En el formulario del servidor puedes dejar **Password** vacío. Si el servidor no admite clave pública y no hay contraseña guardada, el intento falla (ver [Solución de problemas](/apps/noduscli/docs/faq)).

## Quitar la clave

En **SSH key**, pulsa **Remove key**. Se borra del llavero al momento, sin confirmación. Para cambiarla, quítala e importa otra: no se puede importar una segunda mientras haya una guardada.

## Dónde se guarda

Solo en el llavero de Apple, accesible únicamente con el dispositivo desbloqueado y sin salir de este dispositivo. Nunca en preferencias ni en iCloud. Ver [Datos y privacidad](/apps/noduscli/docs/data-privacy).
