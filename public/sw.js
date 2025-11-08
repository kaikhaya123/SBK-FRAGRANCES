const CACHE_VERSION = 'v1';
const CACHE_NAMES = {
  static: `static-${CACHE_VERSION}`,
  dynamic: `dynamic-${CACHE_VERSION}`,
  images: `images-${CACHE_VERSION}`
};

const STATIC_ASSETS = [
  '/',
  '/about',
  '/shop',
  '/collections',
  '/philosophy',
  '/contact',
  '/offline.html',
  '/manifest.json'
];

const CACHE_STRATEGIES = {
  cacheFirst: async (request, cacheName) => {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    try {
      const networkResponse = await fetch(request);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    } catch (error) {
      return new Response('Network error happened', {
        status: 408,
        headers: { 'Content-Type': 'text/plain' },
      });
    }
  },
  networkFirst: async (request, cacheName) => {
    try {
      const networkResponse = await fetch(request);
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    } catch (error) {
      const cachedResponse = await caches.match(request);
      return cachedResponse || new Response('Network error happened', {
        status: 408,
        headers: { 'Content-Type': 'text/plain' },
      });
    }
  }
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAMES.static).then(cache => cache.addAll(STATIC_ASSETS)),
      self.skipWaiting()
    ])
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then(keys => Promise.all(
        keys.map(key => {
          const isOldCache = Object.values(CACHE_NAMES).every(name => key !== name);
          if (isOldCache) {
            return caches.delete(key);
          }
          return Promise.resolve();
        })
      ))
    ])
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // API calls
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(CACHE_STRATEGIES.networkFirst(request, CACHE_NAMES.dynamic));
    return;
  }

  // Static assets
  if (STATIC_ASSETS.includes(url.pathname)) {
    event.respondWith(CACHE_STRATEGIES.cacheFirst(request, CACHE_NAMES.static));
    return;
  }

  // Images
  if (request.destination === 'image') {
    event.respondWith(CACHE_STRATEGIES.cacheFirst(request, CACHE_NAMES.images));
    return;
  }

  // Default: network first
  event.respondWith(CACHE_STRATEGIES.networkFirst(request, CACHE_NAMES.dynamic));
});