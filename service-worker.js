/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fe10d255985f7a440b1792ad2d57c9a3"
  },
  {
    "url": "assets/css/0.styles.4c1e8a3e.css",
    "revision": "0fcb0f25e4f8acf99646118b7c8517ca"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.ba78b343.js",
    "revision": "492d2d2bd3d6af6a9072e4f0d9316d12"
  },
  {
    "url": "assets/js/3.c98bd0ad.js",
    "revision": "9925d34f813eb70667596ce14365c1b7"
  },
  {
    "url": "assets/js/4.072dd054.js",
    "revision": "1bf4ae7329d35d0b1a9c4f14617ac564"
  },
  {
    "url": "assets/js/5.f348ca28.js",
    "revision": "a7297627e3ce367700750f8c2e8e7823"
  },
  {
    "url": "assets/js/6.6430ed58.js",
    "revision": "6855564851db6451ba8203739e96c0ca"
  },
  {
    "url": "assets/js/app.fa2038ef.js",
    "revision": "be897ebc261a50856bdae13053d69d95"
  },
  {
    "url": "index.html",
    "revision": "941b31cba03e89d33c6d41e366d6bdbb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
