/* Folio offline helper.
   Keeps a copy of the app on the device so it opens without internet.
   Your PDFs are never sent anywhere: they stay in this browser's own storage. */
const APP_CACHE = 'folio-app-v1';
const FONT_CACHE = 'folio-fonts';
const APP_FILES = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png',
  'lib/pdf.min.js',
  'lib/pdf.worker.min.js',
  'lib/page-flip.browser.js'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(APP_CACHE).then(c => c.addAll(APP_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('folio-app-') && k !== APP_CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // The app's own files: answer from the saved copy right away, and refresh that copy in the background.
  if (url.origin === self.location.origin) {
    event.respondWith((async () => {
      const cache = await caches.open(APP_CACHE);
      const saved = await cache.match(req, { ignoreSearch: true }) ||
        (req.mode === 'navigate' ? await cache.match('index.html') : undefined);
      const fresh = fetch(req).then(res => {
        if (res && res.ok) cache.put(req, res.clone());
        return res;
      }).catch(() => saved);
      if (saved) { event.waitUntil(fresh.catch(() => {})); return saved; }
      return fresh;
    })());
    return;
  }

  // Google Fonts: keep a copy after the first download so reading fonts work offline.
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith((async () => {
      const cache = await caches.open(FONT_CACHE);
      const saved = await cache.match(req);
      if (saved) return saved;
      try {
        const res = await fetch(req);
        if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
        return res;
      } catch (e) {
        return saved || Response.error();
      }
    })());
  }
});
