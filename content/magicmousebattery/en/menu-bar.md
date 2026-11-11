---
title: The menu bar and the panel
order: 2
---

## The menu-bar icon

The icon shows **one device: the one with the lowest battery**. If you have a mouse and a keyboard, you see whichever is lower. The percentage appears next to the icon.

| Lowest level | Icon | Color |
|---|---|---|
| Above 75% | Full battery | Normal |
| 51 – 75% | 3/4 battery | Normal |
| 26 – 50% | 1/2 battery | Normal (yellow below 30%) |
| 11 – 25% | 1/4 battery | Normal (yellow below 30%) |
| 10% or less | Empty battery | Red (below 15%) |

Colors depend on the level: **yellow** below 30% and **red** below 15%. These limits are fixed and unrelated to the notification threshold.

If the app detects no device, the icon becomes a gray circle with a question mark and shows no percentage.

## The panel

Click the icon to open the panel. It closes when you click outside it. Each device gets a row with:

- A type icon (mouse, keyboard or trackpad).
- The device name, as macOS registers it (for example, the name you gave it in Bluetooth).
- A battery bar and the percentage. The bar and icon are green, yellow (below 30%) or red (below 15%).
- A chart-icon button (**View battery history**). See [Battery history](/apps/magicmousebattery/docs/history).

Below the devices you will see the text "Battery Status" and two buttons:

| Button | What it does | Shortcut |
|---|---|---|
| **Settings...** | Opens the settings | ⌘, |
| **Quit** | Closes the app | ⌘Q |

> The shortcuts only work while the panel is open.

## Which devices it detects

The app reads the battery level of devices that macOS has connected and that report one. It recognizes the type from the device name:

| If the name contains | Shown as |
|---|---|
| "mouse" | Mouse |
| "keyboard" | Keyboard |
| "trackpad" | Trackpad |
| Anything else | Unknown device (question-mark icon) |

A device that is off, disconnected or out of range **disappears from the list**: the app does not remember its last level.

## When it updates

| Situation | Frequency |
|---|---|
| When you open the panel | Refreshes immediately |
| Panel open | Every 60 seconds |
| Panel closed | Every 5 minutes |

There is no refresh button and no way to change these intervals.

> If you close the panel by clicking outside it, the app may keep checking every 60 seconds until you open and close it again with the icon.
