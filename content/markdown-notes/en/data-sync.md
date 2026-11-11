---
title: Data and sync
order: 6
---

## Where your notes are stored

Your notes and folders are stored in a local database on the device (Core Data). Each note keeps its title, text, tags, folder, and creation and modification dates. The app needs no connection for anything.

Your theme and accent colour choice is stored separately, on that device only.

## iCloud sync

The app stores its data with an iCloud (CloudKit) container in your account, so your notes are copied and reach your other devices.

> **There is no iCloud switch inside the app.** Sync is not turned on or off from Markdown Notes: it depends on the device being signed in to iCloud. If you would rather not use iCloud with this app, do it in iOS settings (your name → **iCloud**), where you can turn it off for the app. The app does not warn you when sync fails or show its status.

What syncs and what does not:

| Syncs | Does not sync |
|---|---|
| Notes (title, text, tags, date). | Theme (System/Light/Dark). |
| Folders and which folder each note belongs to. | Accent colour. |
| Deletions. | |

To sync between devices:

1. Sign in with the **same iCloud account** on both devices.
2. Check in iOS settings that iCloud is on for Markdown Notes.
3. Wait a bit: changes are not instant and need a connection. Offline, changes wait and are sent when you are back online.

If you edit the same note on two devices at once, the most recent change to each field is kept, with no warning or conflict dialog.

## Privacy

The app includes no analytics or ads. Your notes are not sent to the developer's servers; with iCloud they travel to your Apple account. See the [privacy policy](/privacy).

## Changing devices

With iCloud on both devices, your notes appear on their own. Without iCloud there is no built-in backup or restore: export your notes to **Markdown** one by one ([Import and export](/apps/markdown-notes/docs/import-export)) and import them on the other device.

> If you uninstall the app without iCloud, you lose the notes. With iCloud, they come back when you reinstall and sign in.
