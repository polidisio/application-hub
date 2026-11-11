---
title: Settings and notifications
order: 3
---

Open the settings from the panel with **Settings...** (⌘,). They appear in a sheet titled **Settings**; close it with the **X** at the top or with **Close**. At the bottom you will see the app version (**Version 1.2**, for example).

## Available settings

| Setting | Values | Default |
|---|---|---|
| **Launch at login** | On / off | Off |
| **Low battery notification** (threshold) | 5% to 50%, in steps of 5 | 20% |
| **Reset notifications** | Button | — |

Settings are stored on your Mac and kept when you quit the app.

## Launch at login

With this option on, the app opens by itself when you log in ("The app will open automatically when you log in"). You can also manage it in System Settings → General → Login Items.

> If macOS rejects the change, the app shows no error: the switch may not reflect what actually happens. Check in System Settings.

## Low battery notification

The slider sets the percentage at which you get alerted. The text below confirms it: "You will be notified when battery drops below 20%".

### How the alert works

- Every time the app refreshes the battery, it compares each device with the threshold.
- If the level is **equal to or below** the threshold, you get a **"Low Battery"** notification reading "*Device name*: *N*% battery remaining", with the default sound.
- You get **one alert per device** while it stays low. The alert re-arms once the level goes more than 2 points above the threshold (for example, with a 20% threshold, at 23% or more after charging).
- Each device is alerted separately.

### Reset notifications

**Reset notifications** ("Force reset notifications for all devices") clears the memory of which devices have already alerted. If any is still below the threshold, you get the alert again on the next refresh. Handy for testing.

> The app does not remember alerts across restarts. If you relaunch it with a low battery, you get the alert again.

### Notification permission

The app asks for permission the first time it opens. If it is not granted, the settings show a yellow warning ("Enable notifications in System Settings to receive low battery alerts") and the slider is disabled. To enable them, go to System Settings → Notifications → MyMouseBattery and allow notifications.

> Any state other than "allowed" (for example, provisional quiet alerts) is treated as disabled.

## Quitting the app

Use **Quit** (⌘Q) in the panel. There is no other way to close it from within the app.
