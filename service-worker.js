if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}})).then(e=>{const s=c(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/404.html",revision:"67a83de8584fce807a4827a059ffc682"},{url:"/404/index.html",revision:"67a83de8584fce807a4827a059ffc682"},{url:"/about/index.html",revision:"3cf41e96fb4e0a5cdd73bc5cebde6ba1"},{url:"/archives/index.html",revision:"c7ba7c3691b620e3f75580bfcd1e0a8f"},{url:"/assets/css/0.styles.2d135b40.css",revision:"e80803133f771a05ad6fba0b92714237"},{url:"/assets/data/404/index.json",revision:"131292cb4504deffe3ad7251848d87c6"},{url:"/assets/data/about/index.json",revision:"bcdd5c312eafdd459b09dc9106592f7f"},{url:"/assets/data/archives/index.json",revision:"43b30e7f348c33ead81a1328c659d630"},{url:"/assets/data/friends/index.json",revision:"bcdd5c312eafdd459b09dc9106592f7f"},{url:"/assets/data/index.json",revision:"9d0a7517480f4db986c2c4768a8f2e2a"},{url:"/assets/data/life/new-start-with-gridsome/index.json",revision:"4bf88b3b510e6b42f965aa5d444891cd"},{url:"/assets/data/tag/Blog/index.json",revision:"5756d6647f2cd9e537bd74e722bbe090"},{url:"/assets/data/tag/Gridsome/index.json",revision:"73374f1bf5bb10e5d26ddf46f57cf20f"},{url:"/assets/js/app.e261951d.js",revision:"edf9f4f9e57c8e4d8872e00cb39d88f3"},{url:"/assets/js/page--src--pages--404-vue.5847f826.js",revision:"8111a13199202ee8f620745796b4fc52"},{url:"/assets/js/page--src--pages--about-vue.484d4106.js",revision:"aa915854d28122b627d6bfc7456f6248"},{url:"/assets/js/page--src--pages--archives-vue.b63c60d2.js",revision:"175ef8b0c10ab3158f8a8e6f5a0b01f8"},{url:"/assets/js/page--src--pages--friends-vue.33e9ad01.js",revision:"036c106fd68ca47258d01d9b8cc4e004"},{url:"/assets/js/page--src--pages--index-vue.35b04652.js",revision:"e3e9b70bbb10b4b4bd54b2a158512849"},{url:"/assets/js/page--src--templates--blog-post-vue.04649f0b.js",revision:"d08ff55b9ed6c191c133c976f48701f0"},{url:"/assets/js/page--src--templates--tag-vue.f5d26bca.js",revision:"01930b0d216e062bfb2e8eb9153f7754"},{url:"/assets/static/404.44e9eff.0bc97a81b234628e05fec80dcdf3e3a4.svg",revision:"0bc97a81b234628e05fec80dcdf3e3a4"},{url:"/assets/static/404.74ecd2d.0bc97a81b234628e05fec80dcdf3e3a4.svg",revision:"0bc97a81b234628e05fec80dcdf3e3a4"},{url:"/assets/static/404.f70b8a6.0bc97a81b234628e05fec80dcdf3e3a4.svg",revision:"0bc97a81b234628e05fec80dcdf3e3a4"},{url:"/assets/static/favicon-120x120.png",revision:"f3cb8e831e14b2f60cd03cb23d80faa8"},{url:"/assets/static/favicon-128x128.png",revision:"330a0748188dd1cfbfc5d86e7dc80790"},{url:"/assets/static/favicon-144x144.png",revision:"45b19b6f4eed010993e3cfca76bc8805"},{url:"/assets/static/favicon-152x152.png",revision:"f1e69466e9350cf02f0762344e308752"},{url:"/assets/static/favicon-16x16.png",revision:"e38ef688ca026a55e93feb75bd34e365"},{url:"/assets/static/favicon-180x180.png",revision:"3ca358a9feb01eafadf6afde65a23e60"},{url:"/assets/static/favicon-192x192.png",revision:"71c94e2919878b13437664a08910c42d"},{url:"/assets/static/favicon-384x384.png",revision:"0344be76881be717595e00bfbe548716"},{url:"/assets/static/favicon-48x48.png",revision:"824202ad69c56daf0485c7ac1fbd0d3e"},{url:"/assets/static/favicon-512x512.png",revision:"a24456befb9f05a59525beb76729126b"},{url:"/assets/static/favicon-72x72.png",revision:"8c316db161364181210d32fd30f2a0ad"},{url:"/assets/static/favicon-96x96.png",revision:"e602f3a0c2712c81d4db91afb665eb5e"},{url:"/assets/static/favicon.ac8d93a.31c137b0500c19ff7232c36417527311.png",revision:"01bc41bf2547d604a419ff696238cb30"},{url:"/assets/static/favicon.ce0531f.31c137b0500c19ff7232c36417527311.png",revision:"58a9afe9a59c88cc9e88885ad8b48d03"},{url:"/assets/static/newstart.27ec4cf.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/assets/static/newstart.3778461.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/newstart.a209973.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/newstart.a67b0b2.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/friends/index.html",revision:"58205862582569487f8704d652a86ffd"},{url:"/index.html",revision:"d9c3517c312b3e7fbaab9c898faa1b29"},{url:"/life/new-start-with-gridsome/index.html",revision:"bebb20b4c73d42ed2c1ec29c523fc034"},{url:"/manifest.json",revision:"1042d2468addc72778ddf8e629199ae3"},{url:"/tag/Blog/index.html",revision:"d9a6866ac605456a4a872239831e31de"},{url:"/tag/Gridsome/index.html",revision:"73dcad21a350ac88d334234e7b607b2a"},{url:"/404",revision:"28f25f53f5ce5d7c39f9df9ad1964986"},{url:"/life/new-start-with-gridsome",revision:"69c357196a0946e4b739f203565b332e"},{url:"/tag/Gridsome",revision:"d25e61e1eedc2e237b8037fc6f135b6d"},{url:"/tag/Blog",revision:"df92b41d4142e571cdf53b6659d2f47d"},{url:"/friends",revision:"4f4f566c0d74393e1158a8f8d6e37c10"},{url:"/about",revision:"a7224db13f3a49096aa27c1876d1a947"},{url:"/archives",revision:"6dc779670bc86b280adac33a13404034"}],{})}));
//# sourceMappingURL=service-worker.js.map

addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'SKIP_WAITING') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
