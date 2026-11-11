---
title: Export and Vault
order: 6
---

There are three ways to get your data out: the ad-hoc export, the Vault (automatic monthly copies) and, on Mac only, the local API.

## Ad-hoc export (iOS only)

**Settings → Export and Share JSON**. It opens the **Filter Export** sheet:

- **Date Range** (*From* / *To*): filters by start date. "To" is the start of that day, so later workouts that same day are left out.
- **Workout Types**: Running, Cycling, Walking, Swimming, Hiking, Yoga and Other. With none selected, all are included. The names are in English in both languages, and other types (strength, dance…) are only exported with no type filter or inside *Other*.
- **Summary only (no details)**: exports just the totals, without the list.

Tap **Export** and choose where to save it with the share sheet (Files, AirDrop, mail…). The file is named `synctrackers_<number>.json` (or `synctrackers_resumen_<number>.json`). If it fails, no error is shown: the sheet simply doesn't appear.

On Mac this button does nothing; use the Vault.

## Vault: monthly copies

The **Local Vault** keeps one JSON file per month and updates itself after any sync that adds or changes workouts. Months are grouped by the device's time zone.

- **Where:** on your device, inside *Application Support/SyncSalud/Vault* (it's excluded from device backups), and a mirror in **iCloud Drive → Synctrackers** while you're signed in. If the mirror fails, the app retries up to 3 times and shows the error in orange.
- **Status:** *Local + iCloud Drive* or *Local only (no iCloud)*, **Last Update** and a summary (months saved, workouts, size, latest month).
- **Show all months** / **Hide months**: expands the list.
- **Refresh Now**: regenerates the Vault manually.
- **iOS:** tap a month to share its file. With **Edit** you can select several and tap **Share N**.
- **Mac:** **Open in Finder** shows the Vault folder.
- **Auto-refresh in background**: off by default; it only schedules an iOS background task. The Vault is rewritten after every sync anyway, even with it off.

## JSON format

The same format for the ad-hoc export and the Vault:

```json
{
  "exportedAt": "2026-03-01T10:00:00Z",
  "source": "Synctrackers",
  "version": "1.0",
  "month": "2026-02",
  "summary": {
    "totalWorkouts": 12,
    "totalCalories": 5400,
    "totalDuration": 38000,
    "totalDistance": 61000,
    "dateRange": { "from": "…", "to": "…" }
  },
  "workouts": [
    {
      "id": "…",
      "type": "running",
      "startDate": "…",
      "endDate": "…",
      "duration": 2700,
      "source": "Apple Watch",
      "calories": 420,
      "distance": 7200,
      "distanceUnit": "meters",
      "avgHeartRate": 152
    }
  ]
}
```

- `duration` in seconds, `distance` in metres, `calories` in kcal, dates in ISO 8601.
- `type` is the technical English name (`running`, `stair_climbing`…), not the translated one.
- `month` only appears in Vault files; `workouts` is omitted if you export only the summary.
- `calories`, `distance` and `avgHeartRate` only appear when they exist.

## Import

The app has **no import**. To recover data, sync again from Apple Health or let iCloud restore it.
