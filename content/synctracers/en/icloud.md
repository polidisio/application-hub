---
title: iCloud and multiple devices
order: 5
---

## How it works

Your workouts are stored in a local database and mirrored to your **private iCloud database** (CloudKit). There are no Synctrackers servers: data goes from your device to your iCloud.

To sync between devices you need:

- iCloud signed in and **the same Apple ID on all of them**.
- An internet connection (offline, changes wait and sync when it returns).

Apple Health itself isn't synced through this: each device reads its own Apple Health and uploads its records. Duplicates are removed by workout identifier. Conflicts are resolved by iCloud.

> **Mac:** most Macs have no Apple Health. On a Mac, workouts arrive from your iPhone through iCloud.

## iCloud status

In **Settings → Sync**:

| Message | Meaning |
|---|---|
| iCloud: waiting for first sync | No activity yet. |
| iCloud: syncing… | A sync is in progress. |
| iCloud: synced … ago | The last sync finished fine. |
| iCloud: sync error | The last one failed; below you'll see the system text (orange icon). |

> If iCloud isn't available on your device (not signed in or no permissions), the app **keeps working locally without telling you** and the line stays on *waiting for first sync*.

## Vault copies in iCloud Drive

Separately from CloudKit, the Vault's monthly JSON files are copied to **iCloud Drive** (*Synctrackers* folder). This is covered in [Export and Vault](/apps/synctracers/docs/export-vault).
