const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/static/css/2.e7e691be.chunk.css",
  "/static/css/2.e7e691be.chunk.css.map",
  "/static/css/main.c8b6c579.chunk.css",
  "/static/css/main.c8b6c579.chunk.css.map",
  "/static/js/2.ce8e2d59.chunk.js",
  "/static/js/2.ce8e2d59.chunk.js.LICENSE.txt",
  "/static/js/2.ce8e2d59.chunk.js.map",
  "/static/js/main.421d2a58.chunk.js",
  "/static/js/main.421d2a58.chunk.js.map",
  "/static/js/runtime-main.76992631.js",
  "/static/js/runtime-main.76992631.js.map",
  "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js",
];

const PRECACHE = "inspecto-cache-v1";
const RUNTIME = "runtime";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then((cache) => cache.addAll(FILES_TO_CACHE))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener("activate", (event) => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return cacheNames.filter(
          (cacheName) => !currentCaches.includes(cacheName)
        );
      })
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => {
            return caches.delete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then((cache) => {
          return fetch(event.request).then((response) => {
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});
