/* eslint-disable no-restricted-globals */
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/static/css/main.c8b6c579.chunk.css",
  "/static/js/main.421d2a58.chunk.js",
  "/static/js/main.421d2a58.chunk.js.map",
  "/static/js/runtime-main.76992631.js",
  "/static/js/runtime-main.76992631.js.map",
  "/static/css/2.e7e691be.chunk.css",
  "/static/js/2.ce8e2d59.chunk.js",
  "/static/js/2.ce8e2d59.chunk.js.map",
  "/static/css/2.e7e691be.chunk.css.map",
  "/static/css/main.c8b6c579.chunk.css.map",
  "/static/js/2.ce8e2d59.chunk.js.LICENSE.txt"
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
