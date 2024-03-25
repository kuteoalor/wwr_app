'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7861fdf36a9227f825bd486a335855f6",
".git/config": "4892f74f69c65736dc11661546e3dd20",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "667bd1d11397df6a7fe7606542afef1c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "720d6155c064396f4d7fc2763e43df28",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c5a4adbbc90439c956cdfb8490a6a158",
".git/logs/refs/heads/main": "d079df2f79f3f8170173648cd0d332c9",
".git/logs/refs/remotes/origin/main": "ad9b6394f997e50dfd77681a17c5e637",
".git/objects/0f/7f2bb72f799838b4443515168ff525cc30ca23": "161873f6f3453049b61730f488cf67dd",
".git/objects/12/5fe7f4beb42f89018e70699d3f4421ab501d47": "8f952d1b6f618a54d4b6341279b2e307",
".git/objects/13/aedf30c168b8b05d9c46df080608ad5b483293": "00cad79e8981d323444175f5f42a4c03",
".git/objects/14/b2386b76bc20cdcd679150f6ec7184db6d0dd0": "292583f48b6c3a6c43ef0f7206c046fd",
".git/objects/17/64a11eb3826979e0f96b112a9e3cf6df5c2aac": "9d87914e01c600dd23b07a6d7ad54ef3",
".git/objects/1a/064d3310853d720c10b8de2a3c9aa57f3faba6": "54757c271f663d277f9bc1b099360efd",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/8b497870afd7508033f664935a099b7bebdf20": "9224d87f6f52f07446aaf45b612498b3",
".git/objects/2f/b3f86a75e7dcbbe6e0fd499b11a8149e9df9ce": "e1f3dbedcfb8663a066a34a76420f544",
".git/objects/34/0e018b5bdc2c2d9f21c8ca8030c011684dc442": "de1b1f22cdae6bada03b49c0038c0793",
".git/objects/3e/5c2e4614c3b9a50dc2c9d733346d9932331a74": "26631025a0891f89c4c369524706402b",
".git/objects/3f/cfd164d35cb1db03d69d02f5dc92b53d648daf": "735bca9592cd614793ca25badbfe3c39",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/66dedfb03622d8cc7b508cc4c906bcaa0905b1": "2b3513609af878993ecf405dbfe13c56",
".git/objects/4a/d3fdaa6b673d1af6a0296d6a19fda9a7708f36": "5fd98a825887451142e2ff5dbce5ac60",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/2239279c6e8cc8b265ce670019824aecd07b3a": "ec26619aa0bff8f3280d9388d3b475ed",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/a0c2365c0a0186466ef5699d5042fe8414b84e": "0a0ac99db94855cdf493b78ed426fd1d",
".git/objects/56/b356e62b1d4abd2f5ea8662299800920715a6b": "99006625d48bb99058f648a29f5a7d4b",
".git/objects/58/f95a730d1d80564c46b4ae3e5788f3903e9fe4": "c1445a757d6c3b0bc0d35100915aa486",
".git/objects/59/6deb67e0763b26f5e41e5e0e56378f55ad5324": "6b07c95b34abcf97accb78bab225051e",
".git/objects/5e/6d134b4b5690395afccc6fe1e441914d0d3ba0": "efd25c23ad53cacab9c87c64193b81fb",
".git/objects/60/39b16e94c6bde2957c8c53d0cc4b2540d0e001": "4b6ce61779a2f59754fb3c6c71bfdcee",
".git/objects/62/b1550d4f2feabad8c36adc77526c1a731f5c76": "41afa412b04500ef3f6322c2e55287e7",
".git/objects/69/2e6e296a80529ba126ef880fcd6d78d413e2f3": "1902e56508690a944a2570dd1cf88eff",
".git/objects/6b/2cace738b334109fb65f941cc8f457d0ebcefa": "b12cb077d711715d2a82545f6dbce685",
".git/objects/6c/fff6a6ebf6403dca4240b7f645abafee43eab8": "4a1f68786275a0a27320c6bfa869dcdc",
".git/objects/6f/be93e6d26f88ae4574fccdda6d6a5f84fbd1eb": "b61f4dda089b63f0a2e394277734dd81",
".git/objects/6f/cc928736a4eda95c7cf1a600543875cbe6fde2": "b3c5fc198712b69610c71628784cdee5",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/73/8968d66d77b9e27209d21c8e6e2625f529a065": "9c5e4a1fedf3d034d050908c5506e1de",
".git/objects/75/b833370b60945436cd12691596ce832ec59633": "5860baaab22ceb7784cef3e499c84759",
".git/objects/7b/903159b0c47a6c56d9d23773fd2c7510282ebd": "e9bb5459d925f550c769634a3abe1765",
".git/objects/7e/4413e954f52ed1b25a99a75b2263081c8e4ca1": "7ea1fcd0165130994adabc092a2a6334",
".git/objects/7e/69c8826cbbbf44c6df435197083cd3ea6f4c4a": "ba3d6e4ea7c13a582f72ae8cbe256317",
".git/objects/85/5a6eb32d0441ed330bcb8b2224e2e6a28b9a06": "73072215dc7333b5761ed2fef3e2e287",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/446ab8a12ee587e0d749421aede82cc60031c5": "877c8401e9e3a14f5afbd20b2a2b782e",
".git/objects/98/765a165174732d0fd2a9ce9e7a70fd54da658e": "cb3338acdbc551fb27517ee3e8a5c608",
".git/objects/9d/403c0b171f53533dec247adbf72b9e0092faa6": "f8fe76534da712d156dc32e6e6dbead1",
".git/objects/9f/fc485be1009b934e3aead81ccf3983fe1d3d87": "0cd7aa473f8c1b0825eda876a9b7f59d",
".git/objects/a3/5cdd8789e3f942ce968872404669262d3156a8": "1f2dbd3ad1c1e1d9b059c8f85c68f64a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/6bfe7316b671e9a0643e365032102f3fb211ea": "9cd6d4f25e7827b24e855a1bab2d1205",
".git/objects/c0/9a4f3edd86bf49324a861132224e171f103615": "3256fca6a7be00ffb41d372a81d3536a",
".git/objects/c0/de7fe44d312545f6324f32e09fb9191487de7e": "9c9f411ec05f6f5aa7f2acd969ec0162",
".git/objects/c6/d46d146238948c5a100b3a308277ec2120a2b4": "7b2f16e8d9642d7629e6f7491877beea",
".git/objects/cc/1bb28f989379def72791d080ad29a7ba399674": "4b107db43a68b813844d7711bdd1dfe6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/de/c4af2d74add586627d254acb28f17fb1b76f91": "33a10e89f6fb953f6f3d185b8689688e",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ea/9553023f7ddea2c7ec02110e5a1e74d35e6255": "8632d4e6a8e0674d1b1e989c4822009d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/4965816a78b8ce29d631da204a3f189d40716b": "980dca873623d6cca69948adecb4e90c",
".git/ORIG_HEAD": "a131255df8050b075b4dc8c541b072b1",
".git/refs/heads/main": "a84ef6166c154f653fef25aa79a9ae25",
".git/refs/remotes/origin/main": "a84ef6166c154f653fef25aa79a9ae25",
"assets/asset/images/apple.png": "8043fa84c8b9aaf42ed0f67c4fdf75be",
"assets/asset/images/byceps.png": "90bc5bf45c1dca4fb62a1e7b86b6d5a1",
"assets/asset/images/google.png": "1d94cfe2ce6b5f05f74684ac04af8467",
"assets/asset/images/guest.png": "e1643eb72126edb03c5fb3f9ea45fdca",
"assets/asset/images/preview.png": "af2d8c63b15e9eb008c61e74f3222a5d",
"assets/asset/images/protein.png": "0d5c9bb760eba29a0c52928f671a831f",
"assets/asset/images/wwr.png": "67997d5c83586d4ea026077d6522790e",
"assets/AssetManifest.bin": "9391581c9e1600e2d046898c0296f239",
"assets/AssetManifest.bin.json": "5bafb4a107c4d069d3432121de8757aa",
"assets/AssetManifest.json": "30a44b579ed192ac7064396e77278dfb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "acb4a92b7029f2a1e28b0de648ad8686",
"assets/NOTICES": "431e96e5cc15a0b999a3b0a272166247",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "ebec2180c8fd2244c0b887fe4abd79a5",
"canvaskit/canvaskit.wasm": "b730404c3182c77feae53f97aeab7247",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "85af9a3ce602e02632c701fa742320cb",
"canvaskit/chromium/canvaskit.wasm": "e85c2054a44abc8e393f58b32c1a4a8e",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "4ff83c62a0243119b7245316356685e7",
"canvaskit/skwasm.wasm": "0a5c4a5d97a16304b3e4d1a4c4a24b9c",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5f33f9a689e644367a2bcbc0e37df29a",
"/": "5f33f9a689e644367a2bcbc0e37df29a",
"main.dart.js": "e84456d1620e53ede4ede2b8b2c04cfa",
"manifest.json": "0fecbce0492be8b983b13bddbb98364d",
"splash/img/dark-1x.png": "24dbb9c467c33872a22d261c62fea318",
"splash/img/dark-2x.png": "2ee264807dd757ea2d1dcdbb6f10d3c9",
"splash/img/dark-3x.png": "03a90e7d704eeff0c5e4c4538b1dd15c",
"splash/img/dark-4x.png": "d438ae2ccf127eaf3bc2846b1aca5aab",
"splash/img/light-1x.png": "24dbb9c467c33872a22d261c62fea318",
"splash/img/light-2x.png": "2ee264807dd757ea2d1dcdbb6f10d3c9",
"splash/img/light-3x.png": "03a90e7d704eeff0c5e4c4538b1dd15c",
"splash/img/light-4x.png": "d438ae2ccf127eaf3bc2846b1aca5aab",
"version.json": "cf2c8866ad695d1c963bcaa91a157ce6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
