---
title: Mac and local API
order: 7
---

Synctrackers also exists as a native Mac app (macOS 14.0 or later).

## Differences on Mac

- Most Macs have no Apple Health, so workouts arrive **from your iPhone through iCloud**. Until data arrives, the Dashboard shows *HealthKit not connected* and Settings warns that Apple Health isn't available.
- There's no background sync and no search by type in the list.
- The ad-hoc export isn't available; use the [Vault](/apps/synctracers/docs/export-vault).
- There's a local API for agents.

## API for agents

On launch, the Mac app opens an HTTP server on port **8080** (if it stops, there's a **Start Local API** button in Settings). A Dashboard card shows whether it's active.

| Route | Returns |
|---|---|
| `/v1/health` | Service status. |
| `/v1/workouts` | List of workouts. Filters: `type`, `from`, `to`, `limit` (default 50, maximum 1000). |
| `/v1/workouts/latest` | The most recent. |
| `/v1/workouts/{uuid}` | One workout. |
| `/v1/summary` | Summary. |
| `/v1/export` | The whole history. |

> **Security warning:** the server has no authentication and listens on all network interfaces, not just your own machine. Any device on your local network can read your workouts. Don't use it on networks you don't control. It's a known limitation of the project.
