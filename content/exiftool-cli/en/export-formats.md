---
title: Export formats
order: 4
---

`export` (and `batch --export`) produce JSON or CSV with the same 18 fields that `extract` shows. This page describes those fields and the shape of each file.

## Fields that are read

| Field (JSON/CSV) | In the table | Notes |
|---|---|---|
| `camera_make` | Camera Make | Camera manufacturer. |
| `camera_model` | Camera Model | |
| `software` | Software | |
| `lens_make` | Lens Make | |
| `lens_model` | Lens Model | |
| `date_time` | Date/Time | Text as stored, e.g. `2024:03:15 10:30:00`. |
| `date_time_original` | Date Taken | Capture date. |
| `gps_latitude` | Latitude | Decimal degrees; negative in the south. |
| `gps_longitude` | Longitude | Decimal degrees; negative in the west. |
| `gps_altitude` | Altitude | Number (metres per EXIF). |
| `exposure_time` | Exposure | Text, e.g. `1/250`. |
| `f_number` | F-Number | |
| `iso` | ISO | Integer. |
| `focal_length` | Focal Length | |
| `image_width` | Width | Width as declared in the EXIF. |
| `image_height` | Height | Height as declared in the EXIF. |
| `orientation` | Orientation | EXIF number (1 to 8). |
| `color_space` | Color Space | Only `sRGB` or `Uncalibrated`. |

Only these fields are exported. It is not a full dump of every EXIF tag: everything else (flash, white balance, serial number, etc.) does not appear.

## JSON

One object per photo, indented with 2 spaces and with Unicode characters unescaped. Fields without a value are **omitted**.

```json
{
  "filename": "photo.jpg",
  "camera_make": "Canon",
  "camera_model": "EOS R5",
  "date_time_original": "2024:03:15 10:30:00",
  "gps_latitude": 40.5,
  "gps_longitude": -74.0,
  "exposure_time": "1/250",
  "f_number": 2.8,
  "iso": 400,
  "focal_length": 50.0
}
```

`filename` is the bare name, without a path. With `batch --export json` the file is a **list** of these objects.

## CSV

A fixed header with 19 columns, in this order:

```
filename,camera_make,camera_model,software,date_time,date_time_original,gps_latitude,gps_longitude,gps_altitude,exposure_time,f_number,iso,focal_length,image_width,image_height,orientation,color_space,lens_make,lens_model
```

One row per photo. Fields without a value are left **empty**. With `export` the file has the header and a single row; with `batch --export csv` it has one row per photo. UTF-8 encoding.

> If a photo has no EXIF (or is a PNG), the JSON contains only `filename` and the CSV row only has the name.

## Privacy of exported files

Exported files can include **exact GPS coordinates** and the capture date. Review them before sharing.
