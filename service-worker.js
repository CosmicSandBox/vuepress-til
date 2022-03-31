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

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1a0b209361537fc1ff3fc56f12e3525b"
  },
  {
    "url": "assets/css/0.styles.4919c6c6.css",
    "revision": "70e210bc1eb704bc140a139e5b2955cb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.77d623d1.js",
    "revision": "72fad40b96b550725717fb0a1a0529fd"
  },
  {
    "url": "assets/js/11.ed47a8a2.js",
    "revision": "fcedb551384050c04e75d9b1fc6320d8"
  },
  {
    "url": "assets/js/12.3da2786d.js",
    "revision": "5bdf3e1214729671cfb9f53e561eb919"
  },
  {
    "url": "assets/js/13.3a868d2c.js",
    "revision": "c562efc448217bdd9b5cc175debec01b"
  },
  {
    "url": "assets/js/14.aec8638f.js",
    "revision": "7b69ef732a2b093df5d01ab0d4d9b2ff"
  },
  {
    "url": "assets/js/15.7477933a.js",
    "revision": "87495b50950e9d9b19652522a3164a63"
  },
  {
    "url": "assets/js/16.04b785a2.js",
    "revision": "424cb211ebc1e78c1bb14e31aa4b4e49"
  },
  {
    "url": "assets/js/17.6b67c913.js",
    "revision": "47c067f380fb7f8096669f80462a2f3c"
  },
  {
    "url": "assets/js/18.56ae5e44.js",
    "revision": "2044a4ad8a4a79984c1bcc7db8fe4915"
  },
  {
    "url": "assets/js/2.229ffa8a.js",
    "revision": "b38832ed653b3836a5bbdf17e7a2e97e"
  },
  {
    "url": "assets/js/3.fdfad8be.js",
    "revision": "37ffb1d7d2041a62e84f3c189a5ee478"
  },
  {
    "url": "assets/js/4.169bf8bc.js",
    "revision": "3d812e0d0d9874b1627bbba7ecaf93c8"
  },
  {
    "url": "assets/js/5.a03455d7.js",
    "revision": "54cf5780d4873eac30849645832e50f7"
  },
  {
    "url": "assets/js/6.f4344879.js",
    "revision": "7e6f641756043f6033f1b1e01fccb6b1"
  },
  {
    "url": "assets/js/7.42838c95.js",
    "revision": "e36ad9285019cdf9b2ebdc16a74a0dae"
  },
  {
    "url": "assets/js/8.8c1a0e86.js",
    "revision": "7e24d868644552fcf44a3bb0bf1f29fa"
  },
  {
    "url": "assets/js/9.e8124ed9.js",
    "revision": "aa49ee63477331810b34af01567502d8"
  },
  {
    "url": "assets/js/app.201670ff.js",
    "revision": "b3df32e5f8ac2cb4fc0eb1242ae3f323"
  },
  {
    "url": "config/index.html",
    "revision": "92f7eb35860f1e014dfc8580f2f8154e"
  },
  {
    "url": "guide/index.html",
    "revision": "ef968a294509fc9f6afca15acae74d77"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "e1f8edee961332ab46e1840a09f41993"
  },
  {
    "url": "images/maskable_icon_x128.png",
    "revision": "3efb27691294b081f6b5e3de552cb181"
  },
  {
    "url": "images/maskable_icon_x192.png",
    "revision": "ef8082f2f2b13ed00faeccb9e290cf0c"
  },
  {
    "url": "images/maskable_icon_x384.png",
    "revision": "6cb38020d6542cea43ecf44a3b6a3dd2"
  },
  {
    "url": "images/maskable_icon_x48.png",
    "revision": "d305a1b17751d6d8001aec0382660b4b"
  },
  {
    "url": "images/maskable_icon_x512.png",
    "revision": "21cf4c794e0e46c4ae7ac7426c29174f"
  },
  {
    "url": "images/maskable_icon_x72.png",
    "revision": "660309aed4d8fdad541c46e28fd779f1"
  },
  {
    "url": "images/maskable_icon_x96.png",
    "revision": "1cc1731bb5da7da8631f4f59359677ad"
  },
  {
    "url": "images/maskable_icon.png",
    "revision": "21cf4c794e0e46c4ae7ac7426c29174f"
  },
  {
    "url": "index.html",
    "revision": "03fbb52cf1cea1b6641034a8feb86090"
  },
  {
    "url": "intro.html",
    "revision": "bae3fea0724452466a2a2c4d7974262b"
  },
  {
    "url": "javascript/javascript.html",
    "revision": "9801c16ea254e2e1300392a7334ee33d"
  },
  {
    "url": "python/python.html",
    "revision": "f7f2572a2c71a1a460a9d39b2a393f52"
  }
].concat(self.__precacheManifest || []);
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
