/* ============================================================
   DERS DEFTERİ — SERVICE WORKER
   Strateji: cache-first (uygulama tamamen offline çalışır)
   Sürüm değişince eski cache'ler otomatik silinir.
   ============================================================ */

const CACHE_VERSION = "dd-v1";
const CACHE_STATIC  = CACHE_VERSION + "-static";   // uygulama dosyaları
const CACHE_CDN     = CACHE_VERSION + "-cdn";      // font + MathJax (harici)

/* Uygulamanın kendi dosyaları — kurulumda tamamı indirilir */
const PRECACHE = [
  "./",
  "./index.html",
  "./course.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./data/_ayarlar.js",
  "./data/EE3061.js",
  "./data/EE3012.js",
  "./data/EE3014.js",
  "./data/EE3016.js",
  "./data/STAT2056.js",
  "./data/MATH2055.js",
  "./data/MSE2051.js"
];

/* Offline çalışması için önbelleğe alınan harici kaynaklar */
const CDN_HOSTS = [
  "fonts.googleapis.com",
  "fonts.gstatic.com",
  "cdn.jsdelivr.net"
];

/* ---------- Kurulum: statik dosyaları önbelleğe al ---------- */
self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_STATIC);
    // Tek bir dosya 404 verirse kurulum tamamen çökmesin diye tek tek ekliyoruz
    await Promise.all(PRECACHE.map(url =>
      cache.add(new Request(url, { cache: "reload" })).catch(err =>
        console.warn("[SW] önbelleğe alınamadı:", url, err))
    ));
    self.skipWaiting();
  })());
});

/* ---------- Etkinleşme: eski sürüm cache'lerini temizle ---------- */
self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.filter(k => !k.startsWith(CACHE_VERSION)).map(k => caches.delete(k))
    );
    await self.clients.claim();
  })());
});

/* ---------- İstekler ---------- */
self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // YouTube gibi gömülü içerikler: SW'ye hiç uğramasın
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  // 1) Harici kaynaklar (font / MathJax): cache-first, sonra ağdan alıp sakla
  if (CDN_HOSTS.includes(url.hostname)) {
    event.respondWith(cacheFirst(req, CACHE_CDN));
    return;
  }

  // Kendi origin'imiz dışındaki diğer her şey (YouTube embed vb.) doğrudan ağa
  if (url.origin !== self.location.origin) return;

  // 2) Sayfa gezinmeleri: cache-first (course.html?ders=EE3061 → sorgu yok sayılır)
  if (req.mode === "navigate") {
    event.respondWith((async () => {
      const cached = await caches.match(req, { ignoreSearch: true });
      if (cached) return cached;
      try {
        const res = await fetch(req);
        if (res && res.ok) (await caches.open(CACHE_STATIC)).put(req, res.clone());
        return res;
      } catch {
        return (await caches.match("./index.html")) ||
               new Response("Çevrimdışısın ve bu sayfa önbellekte yok.", {
                 status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" }
               });
      }
    })());
    return;
  }

  // 3) Diğer kendi dosyalarımız: cache-first
  event.respondWith(cacheFirst(req, CACHE_STATIC));
});

/* Cache-first yardımcı: önbellekte varsa ver, yoksa ağdan al ve sakla */
async function cacheFirst(req, cacheName) {
  const cached = await caches.match(req);
  if (cached) return cached;
  try {
    const res = await fetch(req);
    // opaque (no-cors) yanıtlar da saklanabilir — offline font/MathJax için gerekli
    if (res && (res.ok || res.type === "opaque")) {
      const cache = await caches.open(cacheName);
      cache.put(req, res.clone());
    }
    return res;
  } catch (err) {
    const fallback = await caches.match(req, { ignoreSearch: true });
    if (fallback) return fallback;
    throw err;
  }
}

/* Sayfadan "hemen güncelle" mesajı gelirse bekleyen SW devreye girsin */
self.addEventListener("message", e => {
  if (e.data === "skipWaiting") self.skipWaiting();
});
