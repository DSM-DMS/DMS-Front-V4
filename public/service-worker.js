const CACHE_NAME = 'dms-cache-v1';
const urlsToCache = ['/'];

self.addEventListener('activate', function(event) {
  const currentCacheList = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(keyList) {
      Promise.all(
        keyList.map(key => {
          if (!currentCacheList.includes(key)) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.responsdWith(
    caches.match(event.request).then(function(response) {
      return response || event.request;
    }),
  );
});
