const pwrscript = "pwrscript-v1"
/*
const assets = [
  "/",
  "/index.html",
  "/static/css/clock.css",
  "/static/css/navbutton.css",
  "/static/css/search.css",
  "/static/js/background.js",
  "/static/js/clock.js",
  "/static/js/navbutton.js",
  "/static/js/offlinedetect.js",
  "/static/js/redirect.js",
  "/static/js/search.js",
  "/static/img/background0.gif",
  "/static/img/background1.gif",
  "/static/img/background2.gif",
  "/static/img/moon.png",
  "/static/img/sun.png",
  "/static/img/pwrscript.png",
]
*/

const assets = [

]

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(pwrscript).then(cache => {
      cache.addAll(assets)
    })
  )
})