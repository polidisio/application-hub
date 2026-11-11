---
title: Data and privacy
order: 7
---

NodusCli has no accounts, ads or analytics, and it doesn't talk to any server of its own. The only thing that leaves the device is the SSH connection you open, to the server you choose. The full policy is in [Privacy](/privacy/noduscli).

## Where everything is stored

| Data | Where |
|---|---|
| Server list (name, host, port, user) | App preferences, on the device. |
| Server passwords | Apple Keychain, one per server. |
| SSH private key | Apple Keychain. |
| Server key fingerprints | App preferences. |
| Font size and colors | App preferences. |

Passwords and the key are stored so they're readable only while the device is unlocked and never leave this device. Your session content isn't saved: terminal scrollback only lives while the tab is open.

## Backup, sync and export

> NodusCli has no iCloud sync, no export/import of the server list and no backup of its own. If you switch iPhones you'll have to add your servers again and re-import the key.

Since passwords and the key are stored "this device only", they don't travel in a restore to another device either. Server names may come back with an iOS backup, but without their passwords.

Uninstalling the app loses the servers, fingerprints and settings.

## Permissions

- **Local Network**: iOS asks for it the first time you connect to an address on your network (for example `192.168.x.x`). The text you see is *NodusCli needs local network access to connect to SSH servers on your network.* If you declined, turn it on in iOS Settings > NodusCli > Local Network.
- The app doesn't ask for photos, contacts, location or camera access. To import a key it uses the iOS file picker, which only grants access to the file you pick.

## Encryption

The app uses encryption (SSH) only for the connection to your server and is declared as not using non-exempt encryption in its export configuration.
