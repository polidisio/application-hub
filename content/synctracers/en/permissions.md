---
title: Apple Health permissions
order: 2
---

## What the app reads

- **Workouts** of any type.
- **Heart rate**, to calculate each workout's average.

It never writes to Apple Health. Calories and distance come from the workout itself, with no extra permissions.

## When it asks

The iOS permission sheet appears on the second page of the introduction. After that, the app asks for authorisation again at launch and on every sync; if you already granted it, you won't see anything.

You can also tap **Connect** in **Settings → Permissions** while the status is *Not Connected*.

## Statuses

| Status | Meaning |
|---|---|
| **Connected** | The app has requested access. |
| **Not Connected** | Not requested yet. |
| **No Access** | Access denied, with an *Open Settings* button. |
| **Not Available** | This device has no Apple Health (iPad without Health, most Macs, simulator). |
| **Error** | The request failed; Settings shows the system message. |

> **Important:** iOS doesn't let apps know whether you denied read access. If you denied it, the app will keep showing **Connected** and the dashboard will look empty. If you don't see workouts you expect to, check the permission.

## Granting access again

On iPhone: **Settings → Health → Data Access & Devices → Synctrackers** (or in the Health app: your profile → Apps → Synctrackers) and turn on **Workouts** and **Heart Rate**.

## Locked phone

Apple Health can't be read while the phone is locked. If a background sync happens then, it's marked as failed and retried next time, with nothing lost.
