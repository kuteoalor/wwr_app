'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c3771918518c5df8a7ce208e74acf147",
".git/config": "3faba5586d994ebd4dff14830aac8204",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a34485a354aaa3e9383f2012a1dd46bc",
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
".git/index": "7e6ac92829d9679596f01a3a8fef334b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7b9b9e28bd73762830f7db1a8678334b",
".git/logs/refs/heads/main": "a592589e44254131f42ac49baee7c4cb",
".git/logs/refs/remotes/origin/main": "34e721d46104d0f417ac07feefa8fa8c",
".git/objects/05/9ad8b900cdb581059f562bc8428774e7b7e388": "a416689639972e90f1a5649bee7f9e89",
".git/objects/07/17d016228485cd7dd9c73ece5d40b0620eb7cd": "8f46ac4500f188f0cebd5e7ba521a92f",
".git/objects/09/f3a335f1a3b9a74022915ca5bfba70d914cb95": "551db1da8601ce8197b80aa6f09be290",
".git/objects/0c/a296cc7193c99160b73fb645d3e32787d31d2a": "e910ebb98dcfc5a81379252da0ce80a0",
".git/objects/10/4395d750acc4fe63266e6ee448c67869648815": "cb754fb290e38a5a1f6314844baed137",
".git/objects/11/f73b6d76f4906258aa94e05e6de0ca57317e39": "4b7f45fab126f9e4be5a92a1d5a4b92a",
".git/objects/14/205248697564b3d75a11a01fc71b534fde5380": "61071df399e57525c60507449fcbc2a6",
".git/objects/19/f13945da0078d4f13ee48477d66468b3fed37c": "3856c9c0a60cd2ccaa31fa988929013a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/1923ee8120eaebba12a1bcdec139e13e889ae6": "d784dd426a25f0c0fa30cddaa8e25150",
".git/objects/22/26d9fc04e245559e270f5b3facaa4819d68dc5": "2c081493e4947019bab8e319ed0f830e",
".git/objects/25/95359e68119498e723c9c886a51cb366646334": "dc75f42354d7de47c0980e5df761a88d",
".git/objects/26/5ce33f64c121385f2992ec400f50948279a5d6": "cb61d91c210bc576afdb6a015842cfce",
".git/objects/27/373f3ccb9874ca68149b8fbe5602b1b7b97fd5": "351e48edcac6b5b1d4b5eb2f5b2bde62",
".git/objects/27/5db7bb1abd17daf4001c2bfc893b3f73430bf1": "466d66e133ba4d524adeb346a5c0eb72",
".git/objects/2c/d3dd0777c119d3a8362a711fefd387f54577c8": "ecc20a305d5d16d77908346030f32390",
".git/objects/2f/2e8271489c603a2ce5aabdecd61331114a8657": "f092f9c1417724f7728dee190077a2a3",
".git/objects/2f/b3f86a75e7dcbbe6e0fd499b11a8149e9df9ce": "e1f3dbedcfb8663a066a34a76420f544",
".git/objects/30/4e2d526d39563266fa5d1e31832954a9d45337": "1ee1ec6ddcabc0f0ccf9b82df6b0bf2a",
".git/objects/30/a340ff5d73109d7f713413c2629fc76e03c0d3": "498c246c71ad0f0287b8dd2725068a18",
".git/objects/34/d81f8a710785ebfb7e6567ff3224a2600291c7": "17bc0bc3c3f1e5b9c0bff40cee61400d",
".git/objects/35/c82f5956ba1e2e63ec5dcfd7eb276a9f0a919d": "aa9c21a21b6a633ef372c0511fe0d4ed",
".git/objects/36/3f19d0ffb9305b3c1deed4f57a575e3b66ed1f": "d5e9814b2adb4b1ddff72a38cb76c872",
".git/objects/3d/7c334e44ad9d97c22dbb6d510c340af29f6ce1": "dfc70dcf1aaf15be9cf54606316a550c",
".git/objects/3e/7392518a5edfa2ce126bb2121bcecea2b1ac4d": "16c1bd7907aaa40c30d17072b8250e09",
".git/objects/3f/20ee21b8cb5d26ac9409f471cea723d3d4de50": "5d62d8489afc1f014c2b7716a30be959",
".git/objects/3f/3d82463ed3f2aa1ea082b654e4cb8ab0171168": "2e1b1b135daea789b328efc16dec633f",
".git/objects/41/60c86be5fc679d3b035a7428b36bac2a58b0fb": "bde0e3857404fac95db81f765afe5a35",
".git/objects/41/9c30e3851ac21147146c274a922f45c5112fc6": "948a0f9b720af0fd64cfb50f221f73ac",
".git/objects/43/05e4b6a4b180a65383575b6f6a9070a9918e21": "3aadb4cf7dbd84fe525615470b7e5ac0",
".git/objects/43/56f2ab2cef0eaab305e6001fd3f7caa51c71f9": "e63b0cb64cb5dfe8d6f604e8e982aae1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/ed7f40ef7aad7f6cb3f75dfd54c2a28e68e740": "da483c9e1192bf0feab1cf15a8caf39d",
".git/objects/4f/2ce0cfc6fc82803721ccd68e51bf5b18b6229f": "c9e171629d00bf25524701996a6949e6",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/fd49c2cd90b3dd416a45da8c44d1f65a5e7e0e": "39deb4475ec1eca7a80b3b75383837d6",
".git/objects/55/2e3d7e706019b0c574005641306216d8d570b4": "1bc78dc950f9c6a25725494baefb6a0d",
".git/objects/55/f6b6f0c230b2a5aefd9d3958ae1d7b43162860": "2e4a37adfbf028c8ff1b0d36e4ffa750",
".git/objects/55/ffc8fada11517790a341d773e26c8aace8c682": "3a7d4eda5e70379e2556b3983da4d563",
".git/objects/58/88048c31fb4b7d187d7a36f861be0ff2cd1b73": "b5f166e92a7cf7fa2808fc986c9064c5",
".git/objects/5a/58f6ccaa76969ce006fcf9daf89a86da26d36f": "6c654b90f8dd15b069d9119ca8387aa0",
".git/objects/5f/6d3d2ebd85860c1c42544f1716d51dfd3f8ec7": "9a01ce4d5aac25d0eaf3216885fa05f3",
".git/objects/60/4e54f953ff1d78c6ebe8c8d3e474fc6c0570b7": "14e4b61fc4b3e3df1009c9ad0405d191",
".git/objects/60/53b44dd0fa32eca424f05df086cd29ff167ba8": "f9a4600e63b3fe5ce8bbf02e9dbb6e5b",
".git/objects/61/54124fb7ce2acd1aa3d39c708bc9ce56bc60df": "a0ef4fb722e954228dc3b1ac12f9b310",
".git/objects/61/8451a32fcc6deb1dd1456654673ca655ba8753": "a5435abc2b1b1bd5caf6450a22738bfb",
".git/objects/63/23189e91ba076e6dec25d543b158f4d243b491": "2c6f41a7ed46e9c3879ec859542d565e",
".git/objects/65/1916b266ebe228a3618d15df452f496f867924": "5eecd98b37b53a7bb081aa18e6e32195",
".git/objects/66/74be2652929983b7eb73322cb0712bcff7f6ae": "f61eb7a8c2a53e2a78f22468f9aed3d2",
".git/objects/6f/3940928ade565ad97b33b5e20fd896f0f3fa78": "592ca6a3f4c67862aabf41946421ea6c",
".git/objects/72/f445b766e7691360ba97d35bcad2ed9412ed3a": "f86476de9c6424efd1b73b3f5963c5fd",
".git/objects/75/b833370b60945436cd12691596ce832ec59633": "5860baaab22ceb7784cef3e499c84759",
".git/objects/80/3855eae543a059656c24640245c89ef35b2f92": "347914aef421eeef8220fe4c9a43f939",
".git/objects/80/9d26041fbdcae1d1a5f72e221b1d2588918582": "2895010c8df8c9c69d0fc06172398605",
".git/objects/80/b2e708ab8e79373af83735c60f137bfc653a12": "8a9870db95a440d6b3b52beaaffe0239",
".git/objects/82/23638949a4ae4550e1e012139bd6722b311ae0": "a87c9b485a2fb0a9dcbfa3354714b949",
".git/objects/85/c4ede7a438417c4a94fa9c3e4a6ab2f3b54d1a": "51dd2e93822c17e94ff442cf4369fbc3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/c08243a7c3501092f5c0c6e5d14e07ecbb514f": "3d4deb5f115fa05c0d135d622c83cad6",
".git/objects/8a/07879de983f8f36973cac78b08e73f4b3d2630": "38377ded5ce7816a98c64d0af8837f56",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/7b49892eb8881b84613c403fd3d1d5900e9e2a": "0fbee21ed0dafe90cb7a12372eb88fb5",
".git/objects/8d/4fcba918caf0313ddaa35ab89fd4b4ebfb5984": "59e6766062fabf64ee9ebd0e3139ecac",
".git/objects/8d/de45714ee36d1023b207be837d6b02ae8ab751": "9d2f5574cac95f48fce77c42f792470a",
".git/objects/8f/2d9438f2d97ccb45f40465a40be647ab2cc5d9": "108df7f8b0d347b5e52d33c4ea652a38",
".git/objects/91/f6654dd8c02a45a8e3888367e599997b5a0037": "e7e2f87c7fb4b7cc93de00a09e0e119b",
".git/objects/9b/0bc529ac94cf35ecf4172c31501831e6c15abc": "7f7a17eeb2de41993fed8f5b71feb02a",
".git/objects/9e/95e626cd816a59b809ef9e9016384897d813a3": "1c64461403d171df6266a75b71f61bd0",
".git/objects/9e/c36926a55eacd5bdbc7a94b7258e73507aa69a": "68dada694c133051d279ae5f60d01836",
".git/objects/9f/1807dcfd448f3967575621a6cae9c77983ce82": "7cfd6555d35b1faa634d99f99cd771af",
".git/objects/a2/c40e8f122303e1e98f32803007d65824e2af2e": "e8a496f2ca4d4467919538b2896a2c08",
".git/objects/a4/a1b7d4b33ac8f5b0e8ac6b7a89bb3907751dea": "4cd9d707a8f39d3cd0ddd01a305f9be7",
".git/objects/a9/7ccadc04c5156b2183211c159cab076e46c6b4": "5c162907d5cfbc4decb46620197292f9",
".git/objects/b5/54853e435b69ea3135648069bfe30106b6cf57": "2c10244bcdbe94ebeb94593c1666ae0b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/b0bcd2147f8904a6342f58e03ad8091138ff2f": "887a936733414ad2cfddceee0ad4cb64",
".git/objects/bc/2847eb188c8230c20932141e36218f4de53f22": "42130edfb7d83e7e7469e0f58fe5c7d7",
".git/objects/bd/08b2c88307365512d6d01a3219e62fb735984d": "eacd8362c3a60662303acb01f45e6325",
".git/objects/be/9f72a6f5dd97f88916b1d324a1e49037b3dc0d": "b2e01d6c27792e087c32b3c0e081a8a5",
".git/objects/c0/9a4f3edd86bf49324a861132224e171f103615": "3256fca6a7be00ffb41d372a81d3536a",
".git/objects/c8/e7a00b6f1a68fabf3171bf47353a50c7577ae4": "6ee7dc1f932d82cc3a3e5e23c816cbfc",
".git/objects/cd/975ad2427719cc100d8894430b49ad9c030088": "c39d6e85d2dfc7d051c672c279260e78",
".git/objects/d1/844eff02dedb4f3a6fb0a99e502d03ce80ef43": "7a3d992b81e88f518cc9fc659715e675",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/1ff589b96931efe5b61e01821faaa97ba8182d": "387941dd3ba75eaa29141b1adeffbfdd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/c639206e03e7ad0113997a1804c8ffa2c23210": "6e725e1c4f441438865f5593982a5c31",
".git/objects/d8/e3c6185b2101eabadfa87fdff93adefa835276": "53b8833f49a18ae7401924c9f94864c1",
".git/objects/d9/3876be59a8e816207373e80f00ef1c8a165fe1": "c4095159d73ab9e61c45c8ec6322b124",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/ac1c51e487e64b82437fd3b5e1e544a365fd8a": "52afda001ed6817541292b54c4ab0b96",
".git/objects/e1/e930335f0a1826e641108abde00dbae2ee710e": "730b69a3d482a8d592319901061c4432",
".git/objects/e3/9bdd8e43920a49bec680e57d0e6078df14e3b1": "070ac6f21b2d70c6cea3ce0daaa2794c",
".git/objects/e3/e6344c3e5fc989d67751211be27b5ce9faa39a": "83da337107d4a6f833debb9c28d8e013",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/1f7aa5bf675b90a5af4f14663fb3d378c63b99": "f7f2599b15ea53d858ca410661cae809",
".git/objects/eb/39b8aeaf36f58230583ca1da812b04fbac17df": "5dfdf2acf6073e436f447219db101b57",
".git/objects/eb/9b300121fcf59016396e089c1a723064c105b1": "29cf4afe02a77d1ac4763b7179392f0e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/da086089274ae1b9e2ab463eab7ba6fbdfb254": "3469da151eebf1e9aa4f65bc75dd7fc4",
".git/objects/ef/acc47a40997489412d427e5614f47095d39aab": "2537a0a13f7546aed9cf034e9afe5088",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/5a98e75693a7907817e5cba803fae26e929313": "690be489fda51f7ffe7690538fda46f2",
".git/objects/f3/f7a0a4b859bc04ef5a7134c6a80becefd40e9f": "d953ed1b4c5ee0e18747ae0923dd52ab",
".git/objects/f9/29df84fabffe797c7fced188d149e9ff345070": "0c83685f36da380217b13636b60f2637",
".git/ORIG_HEAD": "0c4e3b0151927edb1922c27d87d33360",
".git/refs/heads/main": "7036f02a7a61e085a6f5ce373a19d7d5",
".git/refs/remotes/origin/main": "7036f02a7a61e085a6f5ce373a19d7d5",
"assets/asset/images/J.png": "54dbc1f55d8214c1331a8da0351dd956",
"assets/AssetManifest.bin": "3ec8a4315119d0a06a9ad9a669f572cf",
"assets/AssetManifest.bin.json": "87a7498ec9a06843b21403902a2ce919",
"assets/AssetManifest.json": "e92632e9a3e6babef4bf0ba33b478670",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "acb4a92b7029f2a1e28b0de648ad8686",
"assets/NOTICES": "981ee75f67b722672863b1b796877594",
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
"index.html": "308ce447805e696887c6b1b1b2a37a26",
"/": "308ce447805e696887c6b1b1b2a37a26",
"main.dart.js": "33cb4d892b96e11b8dac8e85138147b9",
"manifest.json": "0fecbce0492be8b983b13bddbb98364d",
"splash/img/dark-1x.png": "54fac5b8bb391c79773d9456aa874247",
"splash/img/dark-2x.png": "f3d92557524628d9d58a8b52846beae4",
"splash/img/dark-3x.png": "e548715e1a7fcd84a1c43448049be4ef",
"splash/img/dark-4x.png": "8c96f05f7aadcd5bb8c76c9825488d9c",
"splash/img/light-1x.png": "54fac5b8bb391c79773d9456aa874247",
"splash/img/light-2x.png": "f3d92557524628d9d58a8b52846beae4",
"splash/img/light-3x.png": "e548715e1a7fcd84a1c43448049be4ef",
"splash/img/light-4x.png": "8c96f05f7aadcd5bb8c76c9825488d9c",
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
