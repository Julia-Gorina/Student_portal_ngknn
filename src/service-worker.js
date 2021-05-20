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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/precache-manifest.9ee457171a7d99bd4b5c2ed150d9906a.js"
);

workbox.core.setCacheNameDetails({prefix: "ngknn"});




///////////////////////////////////////////

// const staticCacheName = 's-app-v3'
// const dynamicCacheName = 'd-app-v3'
//
// const assetUrls = [
//   'index.html',
//   '/js/app.js',
//   '/css/styles.css',
//   'offline.html'
// ]
//
// self.addEventListener('install', async event => {
//   const cache = await caches.open(staticCacheName)
//   await cache.addAll(assetUrls)
// })
//
// self.addEventListener('activate', async event => {
//   const cacheNames = await caches.keys()
//   await Promise.all(
//       cacheNames
//           .filter(name => name !== staticCacheName)
//           .filter(name => name !== dynamicCacheName)
//           .map(name => caches.delete(name))
//   )
// })
//
// self.addEventListener('fetch', event => {
//   const {request} = event
//
//   const url = new URL(request.url)
//   if (url.origin === location.origin) {
//     event.respondWith(cacheFirst(request))
//   } else {
//     event.respondWith(networkFirst(request))
//   }
// })
//
//
// async function cacheFirst(request) {
//   const cached = await caches.match(request)
//   return cached ?? await fetch(request)
// }
//
// async function networkFirst(request) {
//   const cache = await caches.open(dynamicCacheName)
//   try {
//     const response = await fetch(request)
//     await cache.put(request, response.clone())
//     return response
//   } catch (e) {
//     const cached = await cache.match(request)
//     return cached ?? await caches.match('/offline.html')
//   }
// }


//////////////////////////


// const staticCacheName ='s-app-v3'
// const assetUrls = [
//     'index.html'
// ]
// self.addEventListener('install',event=>{
//   event.waitUntil(caches.open(staticCacheName).then(cache=>cache.addAll([assetUrls]))
//   )
// });
//
// self.addEventListener('fetch',event=>{
//   console.log('fetch', event.request.url)
//
//   event.respondWith(cacheFirst(event.request))
//
// })
//
// async function cacheFirst(request){
//   const cached = await caches.match(request)
//   return cached ?? fetch(request)
// }

// self.addEventListener('message', (event) => {
//   if (event.data && event.data.type === 'SKIP_WAITING') {
//     self.skipWaiting();
//   }
//   const cacheNames= await caches.keys()
//   await Promise.all(cacheNames.filter(name => name !== staticCacheName)
//   .map(name => caches.delete(name))
//   )
// });



/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
