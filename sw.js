/*! Needleworks (c) 2026 4Gables. All rights reserved. Proprietary, see LICENSE. https://4gables.com/needleworks/ */
// Offline, installable, and one release at a time. Every file of a release is listed here with its SHA-256
// (`node tests/sw.test.mjs --write` fills them in; CI fails when one is stale). Installing fetches each file past the
// browser's own cache and keeps it only if it is this release's: until every one is, the release already running goes
// on serving the page, whole. The page's files then come from that one set, never the network, so a page never runs
// one release's module beside another's (2026-10-31: a new ui.js with the last pieces.js, while the host still handed
// out old copies for ten minutes, drew the bookmark squashed). A new release waits until the page is reloaded (the
// page offers it: "Reload") or every tab is closed; it never takes over a page that is open, whose workers and fonts
// load later.
// A picture or design shared to the installed app arrives as a POST to ./?share and is handed to the page through a
// cache.
// (`SET`: a fingerprint of the list below, written with the hashes. It is part of the cache's name, so a release whose
// files changed can never install into the cache the running one is serving from, version number bumped or not.)
const SET = "25ea3446bf41";
const CACHE = `needleworks-p49-${SET}`, SHARED = "needleworks-shared";
const FILES = {
  "index.html": "72f14c9869ffdfed1ad470f9bfb34d628f53af15b4b24e351dd394ce0d7c57d8",
  "manifest.webmanifest": "82f627e1def5254866cf364a55a1c2a85e2c3dd61abeeb890829362969fcfb63",
  "css/app.css": "1c7d8c982f85243b3f2e3c6cd910a7b1601d1b2c9362adfa518f114061165938",
  "privacy.html": "5a9f17142d9b3ba6c50f1f089bb35202f983be839ac3268cebd0c09ab30eb8aa",
  "js/along.js": "5877433450bc9b2e8c474a46829e506b62a16b805fee20dc6bd68284239e4c7c",
  "js/api.js": "7a8e36458de961d0ea0fb87a4d041848dea4a4d831f103a3dbe960530f3fa912",
  "js/app.js": "d678906ebc5226e0853ea187acddf97924f3cc4bce936234677dc9b6201c8e93",
  "js/artwords.js": "41c08b6a95918621f461dbb9a2eff08f808618b252c160d7316ce6da82c06751",
  "js/checkup.js": "c6429ff76bf84b41de061aa727031e63ff8de2b7120b09834f2e0998dbd87766",
  "js/common.js": "06ad65797e7434f27724001cb1fdd63970506ac785d36041d279c82a6fc42c4c",
  "js/core/areas.js": "0e5729ec0ae789f426adc49ecc1f2d3e9a21b8c47dd3cc06639f8e9db49801e4",
  "js/core/brandcharts.js": "85f4772a2de19ab56691d984a8aad930b2c427cd34498c70f66933c6f09199be",
  "js/core/brands.js": "cb0a36b5fe3128de55654bdd350bdc86508f11fb089eb822bd73b7a26eba1c59",
  "js/core/colour.js": "ceb89ab0511bd2c9673945b2c90f71565ffd0a934bc5b299dab1279fc9758da2",
  "js/core/density.js": "fc507b2818e7cdb700d52d88ac328a784b89ddac6f609fcc469b95c4805a237e",
  "js/core/fonts.js": "eff92c64949a5983d3d2ae4804ff6cbf7ca1a6547998767f276c8d07b9cd26f9",
  "js/core/formats-out.js": "6c340ec9036e5a7efc78ced8b6a7e3d9af9dd8e8773d230c8120302da33e333c",
  "js/core/formats.js": "6c635b29d843e7eb112ad773f92f79b26ea0ad17769889104b271faa2915b76e",
  "js/core/glyphs.js": "1aa94c2a28d8343fa6837d8f0591e325a9128063bfce81d968bf592feda6cbf3",
  "js/core/grid.js": "c213a2103ab299554d805123c3172f7a2aa2a5283c894154aa8dda76008167cb",
  "js/core/limits.js": "65e92548afe9e1278a38f87324de126048c83713e30c4eb6cdf66bd3dc8ced39",
  "js/core/machines.js": "afd9fe6fc812a0b03d903fc54a374b3246ac27539c9cff7d5ea546ed9e81c135",
  "js/core/picprep.js": "66d84de80b018aa3b1d5dcf440c668ca9650d75cbf82816a8c4cd506678e6bc8",
  "js/core/threads.js": "2f843722671915cef7d2aad9344f171040e59d2cf70aa43b139da9dd4229fc1f",
  "js/core/turn.js": "6b2c99d6192fef78e95e488126776194a368a0e89b1bd48009f2123ce7394081",
  "js/core/typed.js": "bca3a62351d99bff324c3012869f3910ec697bdc744906cf74a18f013df99e38",
  "js/engine.js": "2837be697ddb7d072dbd443af9a47908c30754cce755332610ca36fe8d943438",
  "js/focus.js": "a6526a6b42e5283aa7d6ff51fada31c98c001cf4240fd430d20c82c753e537be",
  "js/gate.js": "938788b4ff6f1ef97b0ded2d32c29c9dcada1159df4d91c5e0c96eb4bb48bcef",
  "js/jobs.js": "1309a0a2ad6edd8d872c0e7af21e48da0041406b1f901d8a95c3af157a6d6617",
  "js/onitem.js": "e8f881bc81209ff19ee6a80c75afa0abb9a2f120077228d9370b5c864e054f6d",
  "js/opened.js": "c0e40a9c5328d974ba46d62d25fcd49ce8308ef1b33f16ff829bef5fd225dc71",
  "js/picture.js": "3a83bfec598bf043fb21133276ce05e5cc8c3ecbf9b243d253fea3772eacca81",
  "js/quality.js": "884c358c4f924c97f158c52722b18add1dd5f44e97d848a59743b52be068e4ee",
  "js/remote-doctor.js": "6d020d6b9fac3b75ac9099a3f4b9cbd39b430d010112e1cb16da128d228db8f7",
  "js/remote-picture.js": "2e11a1b7a2d22e285576f8ccc3b05b903a1fb603df2b7cf285c4485848d67543",
  "js/remote-worker.js": "4a5f0b8a153cc8e9066638f3c27c3822fed7277c3979f1c15fc4a6af00774cf9",
  "js/render.js": "d4dea231700c46bc70c82d24e1db88abe84dd0929343cd1329d6629ff1b2e1cf",
  "js/sheet.js": "27290ea9399e4d587c9a7ed5889603026a51bc0e5edc675c35d6bd2691de4678",
  "js/state.js": "3e294bba527f0066248fe15e75fd5b208f7c14e75d2e1a1d42b26d1b379bfe6c",
  "js/threadui.js": "8ceabd64367deaaa390dd1b99ff44ae7f6ee9a461d188c77e9c35263747af525",
  "js/wire.js": "425d2623b9bb3f28d35c109996c01d8ddf7f540c92f359ba3dcf1c9a6e57298f",
  "js/words.js": "32351ae8626fa69c73fbb07762152d451d8c812b98a9172210705a9fa2fc6ac4",
  "js/zip.js": "d3d529808cf0618975057f7a71bf6044059204da36a7ffc62d4679f627c6fcb3",
  "fonts/AlexBrush-Regular.woff2": "13355627e1cffe5334a3a7da592245ddce6766c71d2f31ee646bfb3542bdd768",
  "fonts/AlfaSlabOne-Regular.woff2": "121634140fc8d44b897aae51bc84d680a8605deb429b8fe147182bbc409aa83d",
  "fonts/Allura-Regular.woff2": "bb5da9592936eb819f6a487c6b865e2dbd4db4232333871a188ea11e1f114f91",
  "fonts/Cookie-Regular.woff2": "fd1100a94bb07178a21b24fc7561fcd1f51774492ba8a2e730cb5b72b56ad961",
  "fonts/Corinthia-Regular.woff2": "d1d3e154249bffde5764f6e3731fbe8166a44333e31c0eec5c578018cd4b7903",
  "fonts/Ephesis-Regular.woff2": "9b39111f6575e3c42ff80fdfc40be3521ae4609ce35f4ed2ddd135a945d37ea3",
  "fonts/Graduate-Regular.woff2": "285b1411d52908f48f328de6ace3944b65cf03d0d07885e52c687a5bcd2292f6",
  "fonts/GreatVibes-Regular.woff2": "9bf9dae316cddd16d9570266b598990cfc006139d0ba03d917cdc42db4bd2c1f",
  "fonts/Italianno-Regular.woff2": "5781eee363d24e677593173e91fd13144ac8cbd7f532b3f065fd2227dfbd0234",
  "fonts/JosefinSans-SemiBold.woff2": "2b0bde659880d12482100afe2df3a562021723d052bdb78105c280e5175370df",
  "fonts/LilitaOne-Regular.woff2": "59eab2e6dd52a13fc75c1a13fa9f25ebee85b70d2dbc6db3daaa2d1db2ff7a67",
  "fonts/MeowScript-Regular.woff2": "6474877a65e2abfb9ccb2d340f4b18388a40757a601f7e08b535d767973986db",
  "fonts/MsMadi-Regular.woff2": "2c1e1005cc16e15249f5c57946444544e070887074fd0c47445e543569539e00",
  "fonts/Parisienne-Regular.woff2": "bee4e3a50b562be2ff9d3fd3479046176b95022adf083a1ad0261f029a1736d6",
  "fonts/Poppins-SemiBold.woff2": "53748661c28ed6adb3bc673ac2ad1351a3943c1b153dea3e6c97b00f1cf83518",
  "fonts/Quicksand-SemiBold.woff2": "e1aae18db74960291963ac48c289937d16a6d738a33ed9e60bd238d7d93e2be4",
  "fonts/RougeScript-Regular.woff2": "a1f1bd5aec6038a803a13b0e6e57c057786400df7e6aa49392677185962d8a31",
  "fonts/Sacramento-Regular.woff2": "299d61f6171d04bf3ffc19f45cf015ca50301d34df5425b5643cfe86c5742029",
  "fonts/Satisfy-Regular.woff2": "693c536670f722fc975f38664c4b87315e5b3b784e01200fe309ecaed9c090e3",
  "fonts/Yellowtail-Regular.woff2": "4be14e2b33416b292c558bbb36b6ca50ee7a44dab395fd475a7d45830c99b6f8",
  "fonts/ZillaSlab-SemiBold.woff2": "b7e8f316b83ba8889baf7a9993fb5805c845a04d985a08b3df483efddf9a99aa",
  "assets/icon-192.png": "19ae131e0ea47270a4cd0eefdac045f1811f7b3b25966a08d27e3c94b3262c76",
  "assets/icon-512.png": "343d901ae82aef47b3c8313c36ad8c6c79609e8aa60d96ea983336fd170e863a",
  "assets/sample-flower.png": "ecacd191496defa4bd71af6d3570c7b67c30714002eaf1749f1a9d7eb2a52d00",
};
const hex = (buf) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await Promise.all(Object.entries(FILES).map(async ([f, want]) => {
      const res = await fetch(new Request(f, { cache: "reload" }));
      if (!res.ok) throw new Error(`${f}: ${res.status}`);
      const buf = await res.clone().arrayBuffer();
      // (the host can still be handing out another release's copy of a file: not installed, tried again at the next visit)
      if (hex(await crypto.subtle.digest("SHA-256", buf)) !== want) throw new Error(`${f} isn't this release's yet`);
      await c.put(f, res);
      if (f === "index.html") await c.put("./", new Response(buf, { headers: { "content-type": "text/html; charset=utf-8" } }));
    }));
    // (the very first install has nothing to wait behind: it starts serving at once)
    if (!self.registration.active) await self.skipWaiting();
  })());
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE && k !== SHARED).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// the page's "Reload" for a new release: take over, and the page reloads when it has
self.addEventListener("message", (e) => { if (e.data === "activate") self.skipWaiting(); });
self.addEventListener("fetch", (e) => {
  const req = e.request, url = new URL(req.url);
  if (req.method === "POST" && url.searchParams.has("share") && url.origin === location.origin) {
    e.respondWith((async () => {
      const f = (await req.formData()).get("file");
      if (f) await (await caches.open(SHARED)).put("shared", new Response(f, { headers: { "x-name": encodeURIComponent(f.name || "shared"), "content-type": f.type || "application/octet-stream" } }));
      return Response.redirect("./?shared", 303);
    })());
    return;
  }
  if (req.method !== "GET") return;
  if (url.origin === location.origin) {
    // this release's copy; anything that isn't part of it (a test page) comes from the network
    e.respondWith((async () => (await (await caches.open(CACHE)).match(req, { ignoreSearch: true })) || fetch(req))());
    return;
  }
  // the Google fonts the page uses for its text: the network first, but on weak Wi-Fi by the machine a fetch can hang
  // for a long time, so after 3 s the cached copy is served and the fetch keeps going to refresh it
  if (!/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) return;
  const cached = () => caches.match(req);
  const net = fetch(req).then(async (res) => {
    if (res.ok || res.type === "opaque") await (await caches.open(CACHE)).put(req, res.clone());
    return res;
  });
  e.waitUntil(net.catch(() => {}));
  e.respondWith((async () => {
    try {
      const first = await Promise.race([net, new Promise((r) => setTimeout(r, 3000, "slow"))]);
      return first !== "slow" ? first : (await cached()) || (await net);
    } catch (err) {
      return (await cached()) || Promise.reject(err);
    }
  })());
});
