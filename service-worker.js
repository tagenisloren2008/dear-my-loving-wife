
/* =====================================
   DEAR, MY LOVING WIFE
   PROGRESSIVE WEB APP
   SERVICE WORKER
===================================== */

const CACHE_NAME = "dear-my-loving-wife-v1";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json"
];

// INSTALL SERVICE WORKER
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});

// ACTIVATE SERVICE WORKER
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );

    self.clients.claim();
});

// HANDLE WEBSITE REQUESTS
self.addEventListener("fetch", (event) => {
    const request = event.request;

    if (request.method !== "GET") {
        return;
    }

    const url = new URL(request.url);

    // Only handle requests from this website
    if (url.origin !== self.location.origin) {
        return;
    }

    event.respondWith(
        caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(request).then((networkResponse) => {
                if (
                    networkResponse &&
                    networkResponse.status === 200
                ) {
                    const responseCopy = networkResponse.clone();

                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(request, responseCopy);
                    });
                }

                return networkResponse;
            }).catch(() => {
                // Show the saved homepage when offline
                if (request.mode === "navigate") {
                    return caches.match("./index.html");
                }
            });
        })
    );
});