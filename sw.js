self.addEventListener('install',e=>e.waitUntil(caches.open('sbory-v1').then(c=>c.addAll(['./','./index.html','./app.js','./styles.css','./manifest.webmanifest']))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request))));
