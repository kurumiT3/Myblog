if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,d)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}})).then(e=>{const s=d(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/assets/css/0.styles.d373950f.css",revision:"7fa1d55c12d2a2b560c02cd0c7a7e30f"},{url:"/assets/data/404/index.json",revision:"7a3a8988d7fac93fb2edb7ca098f3b11"},{url:"/assets/data/about/index.json",revision:"39c755d400951b1f6a6fb65566452d7c"},{url:"/assets/data/archives/index.json",revision:"fac82fda4e60074ed8cb603c677021f8"},{url:"/assets/data/friends/index.json",revision:"39c755d400951b1f6a6fb65566452d7c"},{url:"/assets/data/index.json",revision:"80916e1da11c4cc8ee00a4c262297ed1"},{url:"/assets/data/life/new-start-with-gridsome/index.json",revision:"7cfd5cff140a6e4975a3f43833fdb6c4"},{url:"/assets/data/tag/aria/index.json",revision:"ed366b39ea7933830e99dc5ec80faf87"},{url:"/assets/data/tag/Blog/index.json",revision:"3e42226b596d5625950a09880fb5046b"},{url:"/assets/data/tag/flexget/index.json",revision:"c6b29902c7c6a6a730c5fd088f9465a8"},{url:"/assets/data/tag/GitHub Actions/index.json",revision:"07324e04258ad2ab871ee2bb8dd6abca"},{url:"/assets/data/tag/Gridsome/index.json",revision:"7bc98c5e8dd32c945fac878eee1f37b8"},{url:"/assets/data/tag/RSS/index.json",revision:"687caeb91a66dc563e3631b8dde0aff3"},{url:"/assets/data/tag/webdrivers/index.json",revision:"c073ee01341e58dc3379a6611a9e7286"},{url:"/assets/data/tag/定时任务/index.json",revision:"d587114a2eda7656bfb46c7159693f3f"},{url:"/assets/data/tech/auto-download-bangumi-with-aria2/index.json",revision:"c394ecf6d347f18d45a6a732e89e5755"},{url:"/assets/data/tech/modified-git-hub-actions-4-heu-checkin/index.json",revision:"ffdf886a306a36117515c96acfaea7f6"},{url:"/assets/data/watch/index.json",revision:"39c755d400951b1f6a6fb65566452d7c"},{url:"/assets/js/app.b2b0f661.js",revision:"52e196978532aecb9637bec804e4268b"},{url:"/assets/js/page--src--pages--404-vue.7414a1cb.js",revision:"4442fa2d23710982b1523925f33e8f09"},{url:"/assets/js/page--src--pages--about-vue.fe7530c1.js",revision:"d084fd3a441a5b2e69cdbe12b6191b4f"},{url:"/assets/js/page--src--pages--archives-vue.b33efc5e.js",revision:"e2c74e5251a2b59f8171561b424decc0"},{url:"/assets/js/page--src--pages--friends-vue.96d51f4c.js",revision:"7f933a1f113b05035ebbbc3ecf053daf"},{url:"/assets/js/page--src--pages--index-vue.80164fdb.js",revision:"21c05cb57d768fb1244fe9e5b80abad6"},{url:"/assets/js/page--src--pages--watch-vue.d8e6fde0.js",revision:"b209f84ca64eb226c48a52835cac8899"},{url:"/assets/js/page--src--templates--blog-post-vue.d2406d19.js",revision:"71d4fecde4a4610ba3678c5da1e9bd3c"},{url:"/assets/js/page--src--templates--tag-vue.0e5c1ddc.js",revision:"6539db082aca3a48186f14b182e916ca"},{url:"/manifest.json",revision:"5816292059769ae61717d6ff8fdfa23e"},{url:"/404",revision:"28f25f53f5ce5d7c39f9df9ad1964986"},{url:"/tech/modified-git-hub-actions-4-heu-checkin",revision:"9581aa84a4097ac3eeacb5a223afeb1e"},{url:"/life/new-start-with-gridsome",revision:"69c357196a0946e4b739f203565b332e"},{url:"/tech/auto-download-bangumi-with-aria2",revision:"61973da25695efc8033e8f9d94c1fd7c"},{url:"/tag/aria",revision:"3ffad03a37ef253cf38bd953d7e794e6"},{url:"/tag/flexget",revision:"7cda68b2e7014458560fb94117ccfb6c"},{url:"/tag/RSS",revision:"7d98a501e54534d7059705af21d2e4cc"},{url:"/tag/GitHub%20Actions",revision:"164e70d955941f5796e92ac0208452dc"},{url:"/tag/%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1",revision:"d44387f2d2cbc2b7931a7e16838d49a1"},{url:"/tag/webdrivers",revision:"3ae43b72173d80167c850e2879157177"},{url:"/tag/Gridsome",revision:"d25e61e1eedc2e237b8037fc6f135b6d"},{url:"/tag/Blog",revision:"df92b41d4142e571cdf53b6659d2f47d"},{url:"/watch",revision:"0a261f48ba3244e5d37dda83888ed553"},{url:"/friends",revision:"4f4f566c0d74393e1158a8f8d6e37c10"},{url:"/about",revision:"a7224db13f3a49096aa27c1876d1a947"},{url:"/archives",revision:"6dc779670bc86b280adac33a13404034"}],{})}));
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
