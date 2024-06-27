'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "56486e1376ab287e3773565022bd8003",
"assets/AssetManifest.bin.json": "704c460097d5fecb3eead90eab0fad22",
"assets/AssetManifest.json": "e2c0d79fc0d21ec1c98637060b5e7052",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a0d1979fe275c6227c4b6119a0fa17df",
"assets/images/all/jacket.png": "c66e21d5e57f54300da35f98716f3366",
"assets/images/all/miband.jpg": "0ecdd40739cebec24a653edd1de2f67c",
"assets/images/all/sweet.png": "57f911e582e324e3051fa9480246aaf6",
"assets/images/all/wireless.png": "3afc4d6125e07ef9b604224294213b8d",
"assets/images/all.png": "cc783fe9c0ebdf04c8f69206aa1ba54d",
"assets/images/beauty/face%2520care.png": "cba1a9fb6bc058345e3aa52ed7d04e69",
"assets/images/beauty/perfume.png": "863a26cb6013bafa5233e8f4f4fbab0d",
"assets/images/beauty.png": "2478ef550e13c9e155c961e5d57cbd90",
"assets/images/icon.png": "9612cbb7690ac422115cdceb8446bcdb",
"assets/images/image1.png": "fb7aac6adc9cdfadb1e4de1fc129236f",
"assets/images/jewelry/earrings.png": "fe701c0bca35017003268ff0548bc957",
"assets/images/jewelry/jewelry-box.png": "3d203fa303294be7f6a82b0366338af1",
"assets/images/jewelry/necklace-jewellery.png": "48f664dfdb62bf4be010f64f1be4682e",
"assets/images/jewelry/wedding%2520ring.png": "cc3dedfd637c0f18ec6e6cc22a349c59",
"assets/images/jewelry.png": "03074683376a47d423a24dfc18852f1a",
"assets/images/men%2520fashion/man%2520jacket.png": "193ad1ae0f50ef0690e26d5fe7585bc5",
"assets/images/men%2520fashion/pants.png": "5c8d035d74efe8d84b47d84cbf44a7e9",
"assets/images/men%2520fashion/shert.png": "74a198278ad775827fde3fe90baef384",
"assets/images/men%2520fashion/t-shirt.png": "a27211dd65203967f0389d0eb726ec62",
"assets/images/men%2520fashion/watch.png": "2c7dab3bc8ef12a27098bfdfae39f505",
"assets/images/men.png": "1e894d1cd604767b98bba0e35c243ff1",
"assets/images/profile3.png": "f50cff92f29993c12e733ea4912b4f42",
"assets/images/shoes/Air%2520Jordan.png": "73115a6ab55eb172920ee0c9b517caeb",
"assets/images/shoes/New%2520Balance%2520990.png": "0858945f084f1fc17e4caef6fffa005d",
"assets/images/shoes/sports%2520shoes.png": "c3bfae1916d7676a2599c61aa57a7684",
"assets/images/shoes/vans%2520old%2520skool.png": "75abc193f894c0b8f1df8d5b8c08b49f",
"assets/images/shoes/white%2520sneaker.png": "b239f0ccdc41b26d1614157d46fe880a",
"assets/images/shoes/women-shoes.png": "bb444ab42c5720334927f760fa4dbfa6",
"assets/images/shoes.png": "c4b3d0079a5dc3a1f7a2d59413adfaac",
"assets/images/slider.jpg": "f8e64812ba0f3f3e163b990cd437be00",
"assets/images/slider3.png": "d3ffb2a947d89525f812f27e3677e4dd",
"assets/images/women%2520fashion/kurta.png": "1183d760790163550b763baa93ba2538",
"assets/images/women%2520fashion/lehenga.png": "f3862d2804e209ec1394a87910690b9b",
"assets/images/women%2520fashion/pants.png": "be05886bec932d344b624abbb00cbac0",
"assets/images/women%2520fashion/t-shert.png": "467cd6cfe7206fd60f6d9effb1922c96",
"assets/NOTICES": "7c3be6554e279bb2deffc24ac8681ba6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "be8dfeec334def065c848c09637902cc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c00fc72562cc9c9fecbb95a16b1ea90a",
"/": "c00fc72562cc9c9fecbb95a16b1ea90a",
"main.dart.js": "55e2828781a690f3f91a4a00c6f38636",
"manifest.json": "3e43b75d08b770a7176c6d2d775fd228",
"version.json": "8d2bb6a2a4638c9cca8cdac1c110b24b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
