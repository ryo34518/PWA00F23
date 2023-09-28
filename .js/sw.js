const PRECACHE = 'precache-v1;
const RUNTIME = 'runtime'

const PRECACHE_URLS = [
  'intex.html',
  './', //alias for index.html
  'css/style.css',
  'js/main.js',
  'images/hello-icon-128.png',
  'images/hello-icon-144.png',
  'images/hello-icon-152.png',
  'images/hello-icon-192.png',
  'images/hello-icon-192maskable.png',
  'images/hello-icon-256.png',
  'images/hello-icon-512.png',
  'favicon.ico',
  'sw.js'
    ];
//the install handler takes care of precaching resources we always need
self.addEventListener('install',function(event) {
  event.waitUntil(
    caches.open(PRECACHE).then(cache){
    return cache.addAll(PRECACHE_URLS);
  })
);
});
    
  
