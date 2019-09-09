const CACHE_NAME = 'dms-cache-v1';
const urlsToCache = ['CACHE-FILES'];

this.addEventListener('activate', event => {
  const currentCacheList = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keyList => {
      Promise.all(
        keyList.map(key => {
          if (!currentCacheList.includes(key)) {
            return caches.delete(key);
          }
          return null;
        }),
      );
    }),
  );
});

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    }),
  );
});

this.addEventListener('fetch', event => {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    }),
  );
});
