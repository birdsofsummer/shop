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

importScripts("workbox-v4.3.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.0"});

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
    "url": "api/a.json",
    "revision": "b4df6f90a8b629e6945d2c841edb82da"
  },
  {
    "url": "api/area.json",
    "revision": "90c7dd17c5a333a98c0e8cf573f13a83"
  },
  {
    "url": "api/area1.json",
    "revision": "5022d1e4310ce53907d1bbab00fdfe48"
  },
  {
    "url": "api/colors.json",
    "revision": "d32013877849fb68571696a92898537f"
  },
  {
    "url": "api/latest_order.json",
    "revision": "dc6377d6fa9fbe5ab03ca831952a34cd"
  },
  {
    "url": "api/myorders.json",
    "revision": "cad96e0caef0824d657c37b70572682e"
  },
  {
    "url": "api/order_detail.json",
    "revision": "356c70ddced2cf6a9b01ec4814f8b4cc"
  },
  {
    "url": "api/order.json",
    "revision": "7262525257bb5e183822a5ae21da6eb8"
  },
  {
    "url": "api/product.json",
    "revision": "69cde7a37d897c3c49e82a62c4684296"
  },
  {
    "url": "api/recommend.json",
    "revision": "abcc0427b2f702f1f6f6bcb16861f888"
  },
  {
    "url": "api/sizes.json",
    "revision": "99e3df56c7b5700d1a5a2e1f0408e267"
  },
  {
    "url": "css/app.f4625fba.css",
    "revision": "1c89156d92ac8fa2482b37f7549f5348"
  },
  {
    "url": "css/chunk-007517be.f612a848.css",
    "revision": "b1c8231bc41ce9fbb00668fc8affa5c5"
  },
  {
    "url": "css/chunk-06aa8e40.f612a848.css",
    "revision": "b1c8231bc41ce9fbb00668fc8affa5c5"
  },
  {
    "url": "css/chunk-09dd7246.78551efb.css",
    "revision": "72b58965964ec7ab6388d1c9a8a88e46"
  },
  {
    "url": "css/chunk-1abd51a2.9a5a4251.css",
    "revision": "e0c4f499f6a47953cebc7c5d4c367761"
  },
  {
    "url": "css/chunk-36c45b81.c7580464.css",
    "revision": "f753a20caaa978694f9788a1f457dbeb"
  },
  {
    "url": "css/chunk-525581c1.78551efb.css",
    "revision": "91e430b974a1169675be87913199ab85"
  },
  {
    "url": "css/chunk-5babdab2.9e93c246.css",
    "revision": "35398aa3e523900a5da4339aa9cb0d92"
  },
  {
    "url": "css/chunk-65ed867c.586605c3.css",
    "revision": "91e430b974a1169675be87913199ab85"
  },
  {
    "url": "css/chunk-7e5ca392.39182da7.css",
    "revision": "7c0587d4ee9c34f6e3b3e410b073bb79"
  },
  {
    "url": "css/chunk-7ead4a54.746e40c0.css",
    "revision": "c5d848001e1e08d4affedc06a4b51a91"
  },
  {
    "url": "css/chunk-8491d6ec.dae6fc4c.css",
    "revision": "8132274f49b9e9b9501e650383249ba5"
  },
  {
    "url": "css/chunk-8a51f736.2c4aa80a.css",
    "revision": "71f8f48f10b5568495dc6da308019bbd"
  },
  {
    "url": "css/chunk-a8a70f30.1a29073f.css",
    "revision": "e3ace314846ecfc170ad9eebd74cf60e"
  },
  {
    "url": "css/chunk-cc2a5a3e.0bdc1459.css",
    "revision": "4a1fb9160d6e5e702afff20eeea29cce"
  },
  {
    "url": "css/chunk-e096a1aa.974f51d5.css",
    "revision": "f12de96b4d4c421555e41c1d36f9f064"
  },
  {
    "url": "css/chunk-e9e79e02.59ced95b.css",
    "revision": "b6117c17af3e1a994daff707bd37f89d"
  },
  {
    "url": "css/chunk-vendors.a087a0c8.css",
    "revision": "6ed515447f01823b2d37f5ffd3b2b765"
  },
  {
    "url": "favicon.ico",
    "revision": "510f72e58bd1625b8848ee51549be526"
  },
  {
    "url": "fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "fonts/MaterialIcons-Regular.586090b3.ttf",
    "revision": "586090b38a233ce0201fb221eb117a36"
  },
  {
    "url": "fonts/MaterialIcons-Regular.9219a80f.woff",
    "revision": "9219a80f0478e0bfdee5f4c753ce8535"
  },
  {
    "url": "fonts/MaterialIcons-Regular.b661c28b.eot",
    "revision": "b661c28b0f28606a96722ad2d9588b70"
  },
  {
    "url": "fonts/MaterialIcons-Regular.bca3a187.woff2",
    "revision": "bca3a1873ac988faff0817eca96b2d86"
  },
  {
    "url": "icon.css",
    "revision": "98b862304dd93af66e5e1d007472f081"
  },
  {
    "url": "icon1.css",
    "revision": "5524d32616359e8acf47273bd27ad415"
  },
  {
    "url": "img/1.jpg",
    "revision": "cad3b65290c5fee89f0236cfe12c36d9"
  },
  {
    "url": "img/10.jpg",
    "revision": "c0ff7d99267d32609e5c83df696853f4"
  },
  {
    "url": "img/11.jpg",
    "revision": "137029b610e69ba097c61d2aba5c11b9"
  },
  {
    "url": "img/12.jpg",
    "revision": "73edd8556f2408a23eae83868d0b0efb"
  },
  {
    "url": "img/13.jpg",
    "revision": "91cec5e48651f8c59dd708d1e40eb307"
  },
  {
    "url": "img/14.jpg",
    "revision": "85a3701b59149afda447c30113fbc806"
  },
  {
    "url": "img/15.jpg",
    "revision": "f4cd9a3261baa03bba279a87e5d8f1a7"
  },
  {
    "url": "img/16.jpg",
    "revision": "cba5b6aa901fda797f6a202d5534ad16"
  },
  {
    "url": "img/17.jpg",
    "revision": "25c8368392aceb53bd654c513ceefc67"
  },
  {
    "url": "img/18.jpg",
    "revision": "74a918a24db23b95175bad2acdf965f5"
  },
  {
    "url": "img/19.jpg",
    "revision": "f4cd9a3261baa03bba279a87e5d8f1a7"
  },
  {
    "url": "img/2.jpg",
    "revision": "c51aefdcfac5359b72de815fcbbde1d4"
  },
  {
    "url": "img/20.jpg",
    "revision": "542c640d63f5d4c2276dd5ad738b8f71"
  },
  {
    "url": "img/21.jpg",
    "revision": "d4dde4606ab4d8158b501e5c02396e03"
  },
  {
    "url": "img/22.jpg",
    "revision": "7f8c26a6507fcaf2b42162f916316539"
  },
  {
    "url": "img/23.jpg",
    "revision": "a6ece082ea350176924756db80944198"
  },
  {
    "url": "img/24.jpg",
    "revision": "e137af2f877c8703d5f2fb834379e27d"
  },
  {
    "url": "img/3.jpg",
    "revision": "5534da240e9f84fa7d539423aa08f9b5"
  },
  {
    "url": "img/4.jpg",
    "revision": "693e9b67fab5131f2a834e5c341557da"
  },
  {
    "url": "img/5.jpg",
    "revision": "097cbe0ff5325810af009a26a4e39917"
  },
  {
    "url": "img/6.jpg",
    "revision": "e6a699f86e0195036eec426aabbbf555"
  },
  {
    "url": "img/7.jpg",
    "revision": "f33d051f2b25c11bb27abd9533d4c043"
  },
  {
    "url": "img/8.jpg",
    "revision": "c3e37ca4756293296809244c6e5ca46e"
  },
  {
    "url": "img/9.jpg",
    "revision": "394b033b0601f9c4a1b6bb0e24a9f680"
  },
  {
    "url": "img/cloud-bg-new.png",
    "revision": "6a56eee37e6c22b52a1be0bf117f5e9f"
  },
  {
    "url": "img/sina.png",
    "revision": "115c191f36952c60866175def65d46a1"
  },
  {
    "url": "img/top-banner-bg-mini.jpg",
    "revision": "dbfc571c6d19dff36fb772e0f2a0a2e8"
  },
  {
    "url": "index.html",
    "revision": "bd36c525dfc9df429bece429cc6b6c03"
  },
  {
    "url": "js/app.a7ec293d.js",
    "revision": "05b5b149e2926451531ae0736c8f8d97"
  },
  {
    "url": "js/chunk-007517be.89013d9c.js",
    "revision": "ba0388b69792e88cae9860196fffae00"
  },
  {
    "url": "js/chunk-0076f6e3.063cb5f8.js",
    "revision": "d5c56dd4f51b4c2209870e214345952a"
  },
  {
    "url": "js/chunk-06aa8e40.9563edef.js",
    "revision": "64dab11ac6062e5d2c52999558b71eb3"
  },
  {
    "url": "js/chunk-09dd7246.498b2783.js",
    "revision": "7c156e5a445e1ce93c034aa7a914bc31"
  },
  {
    "url": "js/chunk-1abd51a2.7a9e6613.js",
    "revision": "e97374436bcabecb27385e0304adab8d"
  },
  {
    "url": "js/chunk-2d23718d.69ee306b.js",
    "revision": "ae248129292a5b70c5ee3d06227a7e55"
  },
  {
    "url": "js/chunk-36c45b81.7eee74c7.js",
    "revision": "c983c90793b19b30b27c73a1cc19240b"
  },
  {
    "url": "js/chunk-525581c1.6a00ace8.js",
    "revision": "63ea251b8dbe40f2288e10954e16a508"
  },
  {
    "url": "js/chunk-5babdab2.a7472c2e.js",
    "revision": "9439d38b37b4c7ea351a2a4c935617f9"
  },
  {
    "url": "js/chunk-65ed867c.494193d7.js",
    "revision": "65e401b796ec4540e2e01e0aa2540773"
  },
  {
    "url": "js/chunk-7e5ca392.6289266e.js",
    "revision": "fc07e6ea4cfcfa3c8edfc144540d1868"
  },
  {
    "url": "js/chunk-7ead4a54.9b119540.js",
    "revision": "3f31bdf9c60ecdada89b803eba5be79a"
  },
  {
    "url": "js/chunk-8491d6ec.c372adf2.js",
    "revision": "3eee093b7b0dfdf9094334c6a5766f5e"
  },
  {
    "url": "js/chunk-8a51f736.06daf485.js",
    "revision": "c6d20a1f09b59289f7bee85610b527b8"
  },
  {
    "url": "js/chunk-a8a70f30.27f6174e.js",
    "revision": "9c0187f15298689e0f33110ad3d4119b"
  },
  {
    "url": "js/chunk-cc2a5a3e.055ecb3c.js",
    "revision": "0a0fe9c6706e5cc923089729dd0b806a"
  },
  {
    "url": "js/chunk-e096a1aa.de0b2ccc.js",
    "revision": "ced1ac3b68f6126ccedffa309d4461a6"
  },
  {
    "url": "js/chunk-e9e79e02.88043b68.js",
    "revision": "68f87053fb2c0814c4e2cc7b8e298718"
  },
  {
    "url": "js/chunk-vendors.10d8fdb2.js",
    "revision": "b5fe1dc6e27b56a965198139b7039265"
  },
  {
    "url": "KFOkCnqEu92Fr1MmgVxIIzc.ttf",
    "revision": "cd3190dc44e510178aec3cc7e75da7b8"
  },
  {
    "url": "KFOlCnqEu92Fr1MmEU9fBBc9.ttf",
    "revision": "4d88404f733741eaacfda2e318840a98"
  },
  {
    "url": "KFOlCnqEu92Fr1MmSU5fBBc9.ttf",
    "revision": "ab2789c48bf32d301cc7bb16677fb703"
  },
  {
    "url": "KFOlCnqEu92Fr1MmWUlfBBc9.ttf",
    "revision": "cae5027f600d2a0d88ac309655618e31"
  },
  {
    "url": "KFOlCnqEu92Fr1MmYUtfBBc9.ttf",
    "revision": "4d99b85fa964307056c1410f78f51439"
  },
  {
    "url": "KFOmCnqEu92Fr1Mu4mxP.ttf",
    "revision": "372d0cc3288fe8e97df49742baefce90"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();
