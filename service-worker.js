if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,r,d)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=d(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/assets/css/0.styles.44d99833.css",revision:"447c957ce3c9ff613a5a0a0ac7f2783d"},{url:"/assets/data/404/index.json",revision:"ed1b9353fe1d9a627119342e281f860e"},{url:"/assets/data/about/index.json",revision:"293ad9fc708996303bb2c826375322f6"},{url:"/assets/data/archives/index.json",revision:"f386b8dce87338b3c8ca4eb23b00e4fd"},{url:"/assets/data/friends/index.json",revision:"293ad9fc708996303bb2c826375322f6"},{url:"/assets/data/index.json",revision:"dfa14543f868740baa9c442f26a7e294"},{url:"/assets/data/life/new-start-with-gridsome/index.json",revision:"2291d1da70cd2ac25a6bce415de135e2"},{url:"/assets/data/tag/aria/index.json",revision:"c8db401af7d4c6e0ba8634792d5457fa"},{url:"/assets/data/tag/Blog/index.json",revision:"b8b32771b4fad10b19f5a289f219ae4a"},{url:"/assets/data/tag/flexget/index.json",revision:"2e4f0207e83c1f04c95982e7bb5cb04d"},{url:"/assets/data/tag/Gridsome/index.json",revision:"53e04546c65273915e42dd35b1d46d3d"},{url:"/assets/data/tag/RSS/index.json",revision:"7003eae8353f1d8c53d8257b6e6da424"},{url:"/assets/data/tech/auto-download-bangumi-with-aria2/index.json",revision:"abd28b1d18002f1554dc352e1242f36b"},{url:"/assets/js/app.9db5d5cd.js",revision:"4ddd8de1b4dd46e63e177da64b956641"},{url:"/assets/js/page--src--pages--404-vue.7414a1cb.js",revision:"4442fa2d23710982b1523925f33e8f09"},{url:"/assets/js/page--src--pages--about-vue.b34d8ff1.js",revision:"b630c7509cceabf83186107b52ce4832"},{url:"/assets/js/page--src--pages--archives-vue.546fbefe.js",revision:"f151e5d1bcb856395aefd83edb4e7622"},{url:"/assets/js/page--src--pages--friends-vue.0274f460.js",revision:"e023ee75390e0fbaf04e7b687d4c5a77"},{url:"/assets/js/page--src--pages--index-vue.df1d4692.js",revision:"1ae8a8648e6bd2e80286bf52323c2b2b"},{url:"/assets/js/page--src--templates--blog-post-vue.16b59aec.js",revision:"75d3a04b99f5eaffb9d917405185a191"},{url:"/assets/js/page--src--templates--tag-vue.e33f60fc.js",revision:"8db95c835f4188c5014729045daab3c1"},{url:"/manifest.json",revision:"5816292059769ae61717d6ff8fdfa23e"},{url:"/404",revision:"28f25f53f5ce5d7c39f9df9ad1964986"},{url:"/life/new-start-with-gridsome",revision:"69c357196a0946e4b739f203565b332e"},{url:"/tech/auto-download-bangumi-with-aria2",revision:"61973da25695efc8033e8f9d94c1fd7c"},{url:"/tag/aria",revision:"3ffad03a37ef253cf38bd953d7e794e6"},{url:"/tag/flexget",revision:"7cda68b2e7014458560fb94117ccfb6c"},{url:"/tag/RSS",revision:"7d98a501e54534d7059705af21d2e4cc"},{url:"/tag/Gridsome",revision:"d25e61e1eedc2e237b8037fc6f135b6d"},{url:"/tag/Blog",revision:"df92b41d4142e571cdf53b6659d2f47d"},{url:"/friends",revision:"4f4f566c0d74393e1158a8f8d6e37c10"},{url:"/about",revision:"a7224db13f3a49096aa27c1876d1a947"},{url:"/archives",revision:"6dc779670bc86b280adac33a13404034"}],{})}));
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