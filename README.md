# Folio

Open any PDF and read it like a book.

- **Two ways to show a PDF.** *Original PDF* keeps the real pages, charts and layout. *Reflowed text* pulls out the words so you choose the font, size, spacing and colors.
- **Five page turns.** Curl, Hard turn, Slide, Fade and Instant, with adjustable speed.
- **Fits the screen.** One page in portrait. A two-page spread in landscape. Rotate mid-book and it re-lays the book to the new shape and keeps your place.
- **Your colors.** Paper, Sepia, Mist, Dusk, Night or your own page, text and desk colors. Original PDF pages can be tinted to match.
- **A shelf.** Every PDF you open stays on the shelf with your page saved.
- **Zoom.** The magnifier opens the current page full size for small print and charts.
- **Works offline** once it has been opened one time.

## Privacy

Folio is only an app. Your PDFs are never uploaded. They are stored in the browser on the device you opened them on, so a book you open on your iPad won't appear on your iPhone. Don't put private PDFs inside this GitHub repository, because a GitHub Pages site is public.

## Put it online with GitHub Pages

1. On github.com, click **New repository**. Name it `folio`, set it to **Public**, and create it.
2. Click **uploading an existing file** (or **Add file → Upload files**). Select every file from this folder at once, then click **Commit changes**. All the files sit side by side, so this works from an iPad too.
3. Open **Settings → Pages**. Under *Branch*, pick `main` and `/ (root)`, then **Save**.
4. Wait a minute or two. Your app will be at `https://YOUR-USERNAME.github.io/folio/`.

## Add it to your iPhone or iPad

1. Open your Folio link in **Safari**.
2. Tap **Share**, then **Add to Home Screen**.
3. Open Folio from the new icon. It runs full screen like an app.

## Updating

Replace the changed files in the repository. The app keeps an offline copy, so the update shows up the **second** time you open it.

## What each file does

| File | Job |
| --- | --- |
| `index.html` | The whole app: shelf, reader, settings |
| `pdf.min.js`, `pdf.worker.min.js` | pdf.js, which reads and draws PDF pages |
| `page-flip.browser.js` | StPageFlip, which draws the Curl and Hard turn animations |
| `sw.js` | Keeps an offline copy of the app |
| `manifest.webmanifest`, `icon-*.png`, `apple-touch-icon.png` | Name and icon for the home screen |

## Credits

- [pdf.js](https://github.com/mozilla/pdf.js) by Mozilla, Apache License 2.0 (`LICENSE-pdfjs.txt`)
- [StPageFlip](https://github.com/Nodlik/StPageFlip) by Oleg Litovski, MIT License (`LICENSE-page-flip.txt`). The copy here has a few small fixes: its animation loop sleeps when the book is still (saves battery), a drag turns the page in the direction it started, a page dragged most of the way finishes turning, and a drag that can't turn no longer freezes taps.
