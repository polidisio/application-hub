---
title: Syncing with Apple Health
order: 4
---

## When it syncs

- **When you open the app** (after the introduction) and **when it returns to the foreground**.
- **Pulling down** on the Dashboard (iOS).
- With the **refresh button** on the Workouts tab or the **Sync Now** button in the empty state.
- From **Settings → Sync**.
- **In the background** (iOS only): the app asks iOS to run periodically. iOS decides when, so it isn't guaranteed.

Automatic syncs are skipped if the last one was less than 5 minutes ago. Manual ones (**Sync Now**) always run. Only one sync can run at a time.

On Mac there's no background sync.

## What period it reads

| Case | Period |
|---|---|
| First sync | The last year. |
| Later automatic syncs | From 30 days before the last one up to now. This catches workouts that Strava, Garmin or other apps write late. |
| **Sync Now (all)** | The whole history. |
| **Sync selected range** | The range you choose (see below). |

### Syncing a range

In **Settings → Sync**, turn on **Filter by date range** and choose **From** (default: a month ago) and **To** (default: today). The button becomes **Sync selected range** and only brings workouts between those dates. *To* can't be earlier than *From* or later than today.

## Background sync (iOS)

In **Settings → Sync**:

- **Background sync**: on by default.
- **Interval**: 1 to 24 hours, in one-hour steps (default 6 h). It's the **minimum** time before the next attempt, not a guarantee.

## What's stored per workout

Type, start and end, duration, calories, distance, **average** heart rate, and the originating app or device (for example Apple Watch or Strava). GPS routes, second-by-second heart rate, sleep, steps and any non-workout health data are not stored.

## Heart rate

To avoid blocking the app, a first sync with **20 or more** new workouts doesn't download heart rate. To fill it in, tap **Download past workouts** in Settings → Sync.

> Despite its name, that button **doesn't download workouts**: it only adds average heart rate to the ones you already have. It processes 200 per tap, newest to oldest, with progress and a *Cancel* button. With a long history, tap it several times.

## Duplicates and changes

- Each workout is identified by its Apple Health identifier; if you already have it, it isn't saved again.
- If you edit it in Health (duration, dates, calories, distance, type or source), it's updated here at the next sync within the period read.
- If two devices upload the same workout, the app removes the duplicates.
- **Deleting a workout in Health doesn't delete it in Synctrackers.** Deletions aren't synced.

## What you'll see on screen

- A *Syncing…* indicator on the Dashboard and a spinner in the buttons.
- **Last sync** in Settings, as a relative time. It only updates when the sync added something new.
- The app **doesn't show sync error messages**. If no workouts appear, check the [permissions](/apps/synctracers/docs/permissions).
