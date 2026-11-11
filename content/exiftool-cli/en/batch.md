---
title: Processing folders
order: 5
---

`batch` applies one or more operations to every supported photo (`.jpg`, `.jpeg`, `.png`, `.tif`, `.tiff`) in a folder.

```bash
exiftool-cli batch --folder ./photos --extract
```

## Options

| Option | Description |
|---|---|
| `-f`, `--folder` | Folder with the photos (required). |
| `-o`, `--output` | Output folder. Defaults to the input folder itself. Created if missing. |
| `--extract` | Shows the metadata table for each photo. |
| `--export json\|csv` | Writes a single file with the metadata of all photos. |
| `--remove` | Creates a metadata-free copy of each photo. |
| `--keep-gps` | With `--remove`, keeps the GPS data. Does nothing without `--remove`. |
| `-r`, `--recursive` | Includes subfolders. |

You must give at least one of `--extract`, `--export` or `--remove` (otherwise: `Specify at least one operation: --remove, --extract, or --export`, exit code 1). You can combine them in one run.

## Examples

```bash
# View the metadata of every photo
exiftool-cli batch -f ./photos --extract

# Export everything to one CSV
exiftool-cli batch -f ./photos --export csv -o ./reports

# Clean with subfolders, copies in another folder, keeping GPS
exiftool-cli batch -f ./photos -r --remove --keep-gps -o ./clean
```

## Where results go

- `--remove`: each copy is named `<name>_clean<extension>`. Without `-o`, it lands **next to the original**.
- `--export`: a single `exif_export.json` or `exif_export.csv` file, in the `-o` folder or, if you don't give one, in the input folder.

> Be careful when repeating a run without `-o`: the `_clean` copies are already in the folder and are treated as new photos, so `photo_clean_clean.jpg` files get created and `--export` includes them. Use `-o` pointing to another folder.

> With `-o` and `--recursive`, copies from all subfolders go into **one flat folder**. If two photos share a name in different subfolders, the last one silently overwrites the earlier one. The same goes for `--export`: it only stores the file name, not the subfolder.

## Progress and result

It prints `Processing N files...`, a progress bar and, at the end:

```
Completed: 12 success, 1 skipped, 0 failed
```

- **skipped**: the photo couldn't be read for EXIF (`Skipped name: ...`).
- **failed**: an unexpected error on that photo.

A failure on one photo does not stop the rest. The exit code is `0` even if some photos were skipped or failed; check the final summary. If the folder has no supported photos, it warns (`No supported images found in ...`) and exits with `0`.

> With `--extract` the tables are printed mixed with the progress bar, so the output is messy. For a tidy report, use `--export`.
