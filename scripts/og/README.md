# OG image generator

Generates [`public/og.png`](../../public/og.png) — the Open Graph / social
share preview (1200×630) shown when the site URL is shared on
Facebook / Zalo / X / Messenger…

The image is **not drawn by hand**. It's built from real HTML/CSS
(`og.html`) and screenshotted with a headless Chromium browser, so it matches
the site's look (aurora gradients, glass cards, Be Vietnam Pro type). To change
the headline / colors / cards, edit `og.html` and re-run.

## Regenerate

Requirements: Node + a Chromium-based browser (Chrome or Edge) installed, and
`puppeteer-core` available.

PowerShell (Windows):

```powershell
# from my-app/
npm i -g puppeteer-core            # ad-hoc; not a project dependency
$env:BROWSER = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$env:SCALE = "1"                   # 1 = exact 1200x630 (shipped); 2 = retina
node scripts/og/shot.js scripts/og/og.html public/og.png
```

bash / macOS / Linux:

```bash
BROWSER="/usr/bin/google-chrome" SCALE=1 \
  node scripts/og/shot.js scripts/og/og.html public/og.png
```

## Notes

- `BROWSER` (required) — path to the Chrome/Edge executable.
- `SCALE` (optional, default `2`) — device scale factor. The shipped file is
  rendered at `SCALE=1` so its real pixel size (1200×630) matches the
  `width`/`height` declared in the page metadata.
- `og.html` loads **Be Vietnam Pro** from Google Fonts (needs network while
  rendering), falling back to `Segoe UI`.
- Wired into metadata via `openGraph.images` / `twitter.images` in
  `app/layout.tsx`, `app/blog/page.tsx`, and `app/blog/[slug]/page.tsx`.
