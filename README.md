# 台灣鐵道車種百科 (Taiwan Trains Wiki)

A static, single-page web encyclopedia of Taiwan's trains — 台鐵 (TRA), 高鐵 (THSR), 捷運 (MRT), 阿里山森林鐵路, and more. Browse by type, region, and era, with photos, illustrations, specs, routes, and fun facts for each train.

## Live site

Open `index.html` directly in a browser — no build step or server required.

## Structure

- `index.html` — page markup, styles, and rendering logic
- `data.js` — train records (name, model, operator, specs, routes, fun facts, tags)
- `illustrations.js` — inline SVG illustrations for each train
- `images/` — local photos referenced by some entries
- `TODO_new_trains.md` — trains still to be added
- `photo_notes.md` — notes on photo sources and licensing

## Adding a train

1. Append a new object to the `window.TRAIN_DATA` array in `data.js` (copy an existing entry as a template).
2. If adding an inline illustration, add a matching entry keyed by `id` in `illustrations.js`.
3. If using a local photo, drop it in `images/` and reference it via `photoUrl: "images/your_file.jpg"`.

Refresh the page — the new train appears automatically.
