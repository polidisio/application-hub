---
title: My library (NAS)
order: 5
---

**My library** is your collection of movies and series stored on a NAS or media server on your network. StreamAura reads the videos, cleans up their names and shows them in rows with posters, next to your IPTV playlists.

## Supported servers

| Type | What you need | Username and password |
|---|---|---|
| **DLNA / UPnP** | The address of the NAS Media Server. Port 8200 is used if you don't specify one. | No |
| **SMB (CIFS)** | Server and, if needed, username and password. | Yes (empty for guest) |
| **NFS** | Server. The NAS must allow connections from your device. | No |
| **WebDAV** | `http` or `https` address, with port and path if needed. | Yes (empty for guest) |
| **Jellyfin** | Your server address. Port 8096 is used if you don't specify one. | Yes |
| **Plex** | Your server address (port 32400 by default) and your plex.tv account. | Yes |

> The first time, the system asks for **local network** permission. Without it, StreamAura cannot find your NAS.

## Add a server

1. On **Sources**, tap **+** and choose **Add media server (NAS)** (or, from the **My library** menu, **Add server**).
2. On **Media server**, choose the **Type**.
3. Enter the **Name (optional)** and the address. A help text below explains what that type needs.
4. For SMB, WebDAV, Jellyfin and Plex, fill in **Username** and **Password**.
5. For SMB, NFS and WebDAV, tap **Choose folders** (see below).
6. Tap **Add server**.

Before saving, the app checks access: for DLNA it discovers the device, for Jellyfin and Plex it signs in, and for SMB, NFS and WebDAV it lists the first folder. If that fails you see the reason in red and nothing is saved.

### Specifics

- **Plex:** with two-step verification, add the code at the end of the password. If you leave the username empty, the password is treated as a *token*.
- **Jellyfin and Plex:** all your movies and series are imported. The app does not keep your password, only the session (token) in the Keychain. If the session expires you see *Incorrect username or password, or the session has expired. Add the server again.*
- **DLNA:** the app reads the server's video folder (the one called "Videos" at the root, or the first one available).

### Choose folders (SMB, NFS and WebDAV)

**Choose folders** opens a browser of the server so you can mark which ones to import videos from:

- Tap a folder's name to open it; **Up one level** goes back.
- Tick the circle next to a folder, or **Use this folder** for the current one. The chosen ones appear under **Selected (N)**.
- At the top you see how many videos the current folder holds directly, or *Choose the movies or series folder, or open a subfolder.*
- Hidden folders (starting with `.`, `@` or `#`) and `lost+found` are not shown.

Each chosen folder is added as a separate server, named "server · folder". If you choose none, the import starts from the root you typed.

## How import works

- StreamAura walks the folders and recognizes `mkv`, `mp4`, `m4v`, `avi`, `mov`, `ts`, `m2ts`, `mts`, `wmv`, `flv`, `webm`, `mpg`, `mpeg` and `divx` videos.
- Limits per server: up to **5000 videos**, and 400 folders for DLNA or 600 for SMB, NFS and WebDAV. Anything beyond those limits is not imported.
- Names are cleaned: `Movie.2019.1080p.BluRay.x264.mkv` becomes **Movie** with year 2019.
- It recognizes episodes with `S01E02` or `1x02` in the name, and also folders like `Show/Season 2/05 - Title.mkv` (accepts Season, Temporada, Series, Saison, Staffel, Temp, T and S).
- For Jellyfin and Plex, the data the server already has (title, year, season, episode and poster) is used.
- Posters the server doesn't provide are generated on your device from a video frame, gradually and in the background. No external service is used.
- **There is no automatic refresh.** Changes on your NAS show up when you tap **Refresh** or **Read again**.

## Use My library

The section appears at the top of **Sources** as soon as there is a server. It has up to three horizontal rows:

| Row | Content |
|---|---|
| **Continue watching** | Up to 20 unfinished videos from your library, most recent first. |
| **Movies** | Most recently added first. Tap one to play it (there is no detail page). The year is shown below. |
| **Series** | In alphabetical order, one card per series with *N seasons · M ep.*. Tap it to see the seasons and episodes. |

On a series page, the **Season N** selector switches seasons and each episode shows its number and title. When you play, the rest of the season's episodes are queued.

If the server hasn't returned anything yet you see *Reading the server library…*, *The server returned no videos.* or the last error.

### My library menu

The three-dot icon next to **My library** opens this menu:

| Action | What it does |
|---|---|
| **Refresh name** | Reads that server again. |
| **Delete name** | Asks for confirmation (*Its library will be removed from this device. The files on the server are not touched.*). |
| **Server status** | Opens the **Servers** sheet. |
| **Add server** | Opens **Media server**. |

### Server status

The **Servers** sheet lists each server with its type and address, and below it one of these states: **Reading…**, **Not read yet**, **N videos found** or the last error. **Read again** repeats the read. Swipe left on a server to **Delete** (on Apple TV, press and hold the center button). Close it with **Close**.

> Deleting from **Server status** **does not ask for confirmation**. Deleting a server also removes the watch progress of its library.

> A server can't be edited. To change the address or credentials, delete it and add it again.

## Common errors

| Message | What to do |
|---|---|
| The server took too long to respond. Check the address, the shared folder and the credentials. | Check that the NAS is on and on the same network, and re-check what you typed. |
| access denied or path does not exist | For SMB or NFS, check the share, the path and the permissions. |
| Incorrect username or password. | Check the username and password. |
| The server does not offer WebDAV at this address. / The path does not exist on the server. | Check the WebDAV address and path. |
| The device does not offer a media library (DLNA). | Turn on the NAS's DLNA media server. |
| This protocol is not available on this device. | SMB and NFS rely on the VLC engine. Update the app; if it persists, contact support. |
