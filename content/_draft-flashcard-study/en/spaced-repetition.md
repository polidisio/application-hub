---
title: Spaced repetition
order: 5
---

ThinkDeck Study schedules each card with an algorithm from the SM-2 family (the one most flashcard apps use). This page describes exactly what the app does.

## Data stored for each card

For each card you rate, the app stores three values:

| Value | Initial | Meaning |
|---|---|---|
| Repetitions | 0 | Correct answers in a row since the last miss. |
| Ease factor | 2.5 | How much the interval grows on each hit. It never drops below 1.3. |
| Interval | 0 | Days until the next review. |

## What happens when you rate

There are only two buttons, and each applies a fixed internal quality:

| Button | New interval | Repetitions | Ease factor |
|---|---|---|---|
| **Correct** | With 0 repetitions: 1 day. With 1: 6 days. With 2 or more: previous interval × ease factor (rounded down). | +1 | Unchanged. |
| **Incorrect** | 1 day. | Back to 0. | Drops by 0.32 (minimum 1.3). |

The next review is the current moment plus the interval in days.

### Example

A new card you always get right, with the factor at 2.5:

| Hit no. | Interval |
|---|---|
| 1 | 1 day |
| 2 | 6 days |
| 3 | 15 days |
| 4 | 37 days |
| 5 | 92 days |

If you miss, the interval goes back to 1 day, repetitions to 0, and the factor drops to 2.18. The following hits grow more slowly (1, 6, 13, 28...).

## When a card is "due"

A card is due if you've never rated it or if its next review date has passed. **Due Today** mode puts those cards first. See [Studying](/apps/flashcard-study/docs/study).

## Level, precision and mastery

Apart from the review schedule, each card has a **Level** from 0 to 10 that is only used for statistics:

- It starts at 0.
- **Correct** adds 1 (maximum 10).
- **Incorrect** subtracts 1, but never goes below 1 once studied.
- A card counts as **Mastered** when its level is 6 or higher.
- **Precision** is hits divided by times studied, as a percentage.

> The level doesn't affect the review schedule: that depends only on repetitions, ease factor and interval.

## Limits

- There is no daily limit on new cards or reviews.
- There are no reminders or notifications: the app doesn't tell you when it's time to study.
- You can't adjust the initial factor or the intervals.
- "Hard" and "Easy" qualities exist in the code, but there are no buttons to use them.
