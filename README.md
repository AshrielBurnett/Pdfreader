# Folio

Open any PDF and read it like a book.

- **Two ways to show a PDF.** *Original PDF* keeps the real pages, charts and layout. *Reflowed text* pulls out the words so you choose the font, size, spacing and colors.
- **Five page turns.** Curl, Hard turn, Slide, Fade and Instant, with adjustable speed.
- **Fits the screen.** One page in portrait. A two-page spread in landscape. Rotate mid-book and it re-lays the book to the new shape and keeps your place.
- **Your colors.** Paper, Sepia, Mist, Dusk, Night or your own page, text and desk colors. Original PDF pages can be tinted to match.
- **A shelf.** Every PDF you open stays on the shelf with your page saved.
- **Zoom.** The magnifier opens the current page full size for small print and charts.
- **Read aloud.** The headphones button reads the book from the page you're on and turns pages as it goes. In Reflowed text it highlights the sentence and the word being read, and you can tap any sentence to jump there. In Original PDF the sentence shows in the top bar. Pick a voice in Reading settings:
  - *This device · free*: your phone's or tablet's built-in voices, offline. Download a Premium or Enhanced voice (Settings → Accessibility → Spoken Content → Voices) for the most natural sound.
  - *Natural · OpenAI*: a narrator voice from OpenAI (`gpt-4o-mini-tts`) that follows tone and punctuation, using your own API key. About US$0.015 per minute of listening.
- **Learning mode** (built on Justin Sung's ideas about unlearning passive reading habits):
  - *Pause to summarise.* When you turn forward, Folio stops you and asks what you just read, in your own words, with an optional analogy and connection to your goal. You can save, skip, or go back and read it again. Pages you've already processed don't pause twice. Choose every page, every 2 or 3 pages, or off.
  - *Goal and scripts.* When you start a session, Folio shows your goal for the book, your if–then scripts and the drill you set last time.
  - *Highlights with a reason.* The highlighter (bottom left) picks whole sentences. A highlight only saves with a note on why it matters, marked as a key idea, a connection or a question. In Reflowed text you tap sentences on the page and tap a highlight to see its note. In Original PDF you pick sentences from the page's text, and a badge shows how many highlights are on the page.
  - *Notebook.* The book icon shows your goal, summaries and highlights in book order, plus your sessions. "Test yourself" blurs your answers so you can recall first. Copy or Share exports everything as text.
  - *Reflection.* When you leave the book, Folio asks where the old habit showed up, what worked better, and one thing to drill next time.
  - Progress counts what you processed (summaries, analogies, connections, highlights), not pages turned.
- **Works offline** once it has been opened one time.

## Privacy

Folio is only an app. Your PDFs are never uploaded. They are stored in the browser on the device you opened them on, so a book you open on your iPad won't appear on your iPhone. Don't put private PDFs inside this GitHub repository, because a GitHub Pages site is public.

Your learning notes (goal, summaries, highlights, reflections) are saved in the same browser storage as your books, on that device only. Removing a book from the shelf keeps its notes, so they come back if you open the same PDF again.

Read aloud with device voices happens entirely on your device. With the OpenAI voice, the text being read is sent to OpenAI to make the audio. Your OpenAI key is saved only in the browser on that device and is never part of this repository. Never paste the key into any file here.

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
- [StPageFlip](https://github.com/Nodlik/StPageFlip) by Oleg Litovski, MIT License (`LICENSE-page-flip.txt`). The copy here has a few small fixes: its animation loop sleeps when the book is still (saves battery), going back a page works in portrait, a drag turns the page the way your finger moves (right = back, left = forward), a drag of about a quarter page finishes the turn, and a drag that can't turn no longer freezes taps.
