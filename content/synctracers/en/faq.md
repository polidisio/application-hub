---
title: FAQ
order: 9
---

## It says "Connected" but I see no workouts

That's expected if you denied access: iOS doesn't let the app detect it. Grant the permission in **Settings → Health → Data Access & Devices → Synctrackers**. See [Permissions](/apps/synctracers/docs/permissions). Also check that you have workouts in the Health app.

## A Strava or Garmin workout doesn't show up

Those apps sometimes write to Health late. Automatic sync looks back 30 days, so it will appear. If it's older, use **Sync Now (all)**.

## My old workouts have no heart rate

On a first sync with many workouts it isn't downloaded. Use **Download past workouts** (several times if you have many).

## I deleted a workout in Health and it's still in Synctrackers

Synctrackers doesn't sync deletions and doesn't let you delete workouts.

## A workout type shows as "Other"

Only 18 types have their own name. HIIT, cross training and others are grouped as **Other**.

## It doesn't sync with my other device

Check **iCloud** in Settings. Both devices need iCloud signed in with the same Apple ID. If iCloud isn't available, the app works locally without telling you.

## Background sync doesn't run

iOS decides when. The interval is only a minimum, and Apple Health can't be read while the phone is locked.

## Can I import a JSON?

There's no import. Data is recovered from Apple Health or iCloud.

## What data leaves my device?

Yours goes to your private iCloud (if you have it) and, only if you use the Vault, to your iCloud Drive. Only if you accept, anonymous usage counts are sent. On Mac, the local API exposes your workouts to your network (see [Mac and local API](/apps/synctracers/docs/mac-api)).
