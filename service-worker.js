if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/assets/css/0.styles.f33188ae.css",revision:"4f6d5db114a03f6cd282c97b5347ff6a"},{url:"/assets/js/app.46eb94c4.js",revision:"6de7f29b57b444e5b82a9b5c54ee5e83"},{url:"/assets/js/page--src--pages--404-vue.9aadb5a5.js",revision:"7698e0e62d968687ddbc0f229af9b158"},{url:"/assets/js/page--src--pages--about-vue.a11b1dc4.js",revision:"123dc658f2464b79fea83ded07da2468"},{url:"/assets/js/page--src--pages--archives-vue.ecb1ca36.js",revision:"501525595fd87e870910e9eabdde769b"},{url:"/assets/js/page--src--pages--friends-vue.8ab16a9c.js",revision:"c6e75dc2ef4154c294f50e93851f683c"},{url:"/assets/js/page--src--pages--index-vue.311fc53d.js",revision:"25d84e8981838193b5eea0b98630ffaa"},{url:"/assets/js/page--src--pages--watch-vue.2dfd5184.js",revision:"249f51a8006935ae77d799c818e2f06d"},{url:"/assets/js/page--src--templates--blog-post-vue.bd4bb51c.js",revision:"0998dea3a5f8f26266cc43f54dea87ad"},{url:"/assets/js/page--src--templates--category-vue.052ff8b9.js",revision:"40fdb97583e210dbe21e551feca7df72"},{url:"/assets/js/page--src--templates--tag-vue.e422becb.js",revision:"9c8c107fcdf03eb2073c20de044e6640"},{url:"/assets/js/vendors~page--src--pages--about-vue~page--src--pages--watch-vue~page--src--templates--blog-post-vue.46e4b402.js",revision:"bea87e7900f9f263f68d15f22d8d79c4"},{url:"/assets/static/aria-rss-bangumi.27ec4cf.128ec450120ff0928e23c48d995c622c.png",revision:"b9cf1720e19e5342aa5d5596b1f7741b"},{url:"/assets/static/aria-rss-bangumi.3778461.128ec450120ff0928e23c48d995c622c.png",revision:"c664cd501b16fc534b543f525a8b0143"},{url:"/assets/static/aria-rss-bangumi.a209973.128ec450120ff0928e23c48d995c622c.png",revision:"c664cd501b16fc534b543f525a8b0143"},{url:"/assets/static/aria-rss-bangumi.a67b0b2.128ec450120ff0928e23c48d995c622c.png",revision:"b9cf1720e19e5342aa5d5596b1f7741b"},{url:"/assets/static/auto-checkin-covid19.27ec4cf.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"47351c9f9f15d3cc0b05a058cb020767"},{url:"/assets/static/auto-checkin-covid19.3778461.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"dbebbe061a44d1bbdf6339012509036c"},{url:"/assets/static/auto-checkin-covid19.a209973.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"dbebbe061a44d1bbdf6339012509036c"},{url:"/assets/static/auto-checkin-covid19.a67b0b2.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"47351c9f9f15d3cc0b05a058cb020767"},{url:"/assets/static/favicon-120x120.png",revision:"f3cb8e831e14b2f60cd03cb23d80faa8"},{url:"/assets/static/favicon-128x128.png",revision:"330a0748188dd1cfbfc5d86e7dc80790"},{url:"/assets/static/favicon-144x144.png",revision:"45b19b6f4eed010993e3cfca76bc8805"},{url:"/assets/static/favicon-152x152.png",revision:"f1e69466e9350cf02f0762344e308752"},{url:"/assets/static/favicon-16x16.png",revision:"e38ef688ca026a55e93feb75bd34e365"},{url:"/assets/static/favicon-180x180.png",revision:"3ca358a9feb01eafadf6afde65a23e60"},{url:"/assets/static/favicon-192x192.png",revision:"71c94e2919878b13437664a08910c42d"},{url:"/assets/static/favicon-384x384.png",revision:"0344be76881be717595e00bfbe548716"},{url:"/assets/static/favicon-48x48.png",revision:"824202ad69c56daf0485c7ac1fbd0d3e"},{url:"/assets/static/favicon-512x512.png",revision:"a24456befb9f05a59525beb76729126b"},{url:"/assets/static/favicon-72x72.png",revision:"8c316db161364181210d32fd30f2a0ad"},{url:"/assets/static/favicon-96x96.png",revision:"e602f3a0c2712c81d4db91afb665eb5e"},{url:"/assets/static/favicon.ac8d93a.31c137b0500c19ff7232c36417527311.png",revision:"01bc41bf2547d604a419ff696238cb30"},{url:"/assets/static/favicon.ce0531f.31c137b0500c19ff7232c36417527311.png",revision:"58a9afe9a59c88cc9e88885ad8b48d03"},{url:"/assets/static/github-actions-checkin.27ec4cf.5d7dca422dbc10301e4b28618b71683f.png",revision:"0defd5d25fcc8e3a96b6bac0ca2c654f"},{url:"/assets/static/github-actions-checkin.3778461.5d7dca422dbc10301e4b28618b71683f.png",revision:"8bac66254047ac8e2c9da39e51ad2b5e"},{url:"/assets/static/github-actions-checkin.a209973.5d7dca422dbc10301e4b28618b71683f.png",revision:"8bac66254047ac8e2c9da39e51ad2b5e"},{url:"/assets/static/github-actions-checkin.a67b0b2.5d7dca422dbc10301e4b28618b71683f.png",revision:"0defd5d25fcc8e3a96b6bac0ca2c654f"},{url:"/assets/static/gridsome-artalk.27ec4cf.7111a5ea162c336715a3a8768910baf5.png",revision:"74149b980472aeec860c0e43547d9fbe"},{url:"/assets/static/gridsome-artalk.3778461.7111a5ea162c336715a3a8768910baf5.png",revision:"2e456bbf1ae720978bf0ca8b97b2ff4b"},{url:"/assets/static/gridsome-artalk.a209973.7111a5ea162c336715a3a8768910baf5.png",revision:"2e456bbf1ae720978bf0ca8b97b2ff4b"},{url:"/assets/static/gridsome-artalk.a67b0b2.7111a5ea162c336715a3a8768910baf5.png",revision:"74149b980472aeec860c0e43547d9fbe"},{url:"/assets/static/heu-autotask.82a2fbd.22a101484c9f4d4a1d03d2ac7783f0f0.png",revision:"571ce815c656d6e4227a90ba26bb2ba3"},{url:"/assets/static/heu-autotask.ae085b2.22a101484c9f4d4a1d03d2ac7783f0f0.png",revision:"e506cdf294661a797e5dc4fe596210f0"},{url:"/assets/static/heu-checkin1.82a2fbd.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"32957d9584ea096dd5e6ebb11b59d55d"},{url:"/assets/static/heu-checkin1.cbab2cf.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"6cce606e4182123ed3da2c7471eca41f"},{url:"/assets/static/heu-checkin1.eaff22a.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"2e35e2c967dd8ae72bbd6d3ad3bee786"},{url:"/assets/static/heu-checkin2.82a2fbd.a282637541e4f36d4a8e50f3a438dbec.png",revision:"a3b86c852d640badb07cf1580a54a7c0"},{url:"/assets/static/heu-checkin2.cbab2cf.a282637541e4f36d4a8e50f3a438dbec.png",revision:"acb1407dfc2bb5d3063c14d6fa2385ba"},{url:"/assets/static/heu-checkin2.eaff22a.a282637541e4f36d4a8e50f3a438dbec.png",revision:"a282637541e4f36d4a8e50f3a438dbec"},{url:"/assets/static/new-start.27ec4cf.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/assets/static/new-start.3778461.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/new-start.a209973.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/new-start.a67b0b2.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/assets/static/readme-update-posts.27ec4cf.f393ea57d8de7faf75fb828605c2dbee.png",revision:"e3b5734d520e757f080c661ac429221a"},{url:"/assets/static/readme-update-posts.3778461.f393ea57d8de7faf75fb828605c2dbee.png",revision:"6806cd96da506616ef9c365a66a4c02a"},{url:"/assets/static/readme-update-posts.a209973.f393ea57d8de7faf75fb828605c2dbee.png",revision:"6806cd96da506616ef9c365a66a4c02a"},{url:"/assets/static/readme-update-posts.a67b0b2.f393ea57d8de7faf75fb828605c2dbee.png",revision:"e3b5734d520e757f080c661ac429221a"},{url:"/assets/data/404/index.json",revision:"a6b2489069de27a5b5bac82f532b529d"},{url:"/assets/data/about/index.json",revision:"6ccfd3a9411167f50e4682faf7507bfe"},{url:"/assets/data/archives/index.json",revision:"b5c2f8733b6aff34f8fc794486743fb8"},{url:"/assets/data/category/code/index.json",revision:"c251eae0bcc886e39ed9b76859ad5f21"},{url:"/assets/data/category/life/index.json",revision:"278ec74fc202fea8a37fbf80580067f9"},{url:"/assets/data/category/tech/index.json",revision:"62f39fa891e42683910026d9d2411489"},{url:"/assets/data/code/heu-auto-checkin-covid19/index.json",revision:"5a3e1ad6c2b63081c4a3c8a4878c4950"},{url:"/assets/data/code/update-your-posts-in-readme/index.json",revision:"38aa01725b63ae5cc9d8ebfe37fc891b"},{url:"/assets/data/code/use-self-hosted-comment-system-in-gridsome/index.json",revision:"6cf9354c93e32fff7099d3b0f7d3a472"},{url:"/assets/data/friends/index.json",revision:"6ccfd3a9411167f50e4682faf7507bfe"},{url:"/assets/data/index.json",revision:"5bac957a0e6737b84d80c4030f4ac11d"},{url:"/assets/data/life/daily-impermanence/index.json",revision:"b593e97d0e429db0a27194f219bf85ef"},{url:"/assets/data/life/new-start-with-gridsome/index.json",revision:"2f0803a32cc01f50e60ca4d108abbc3b"},{url:"/assets/data/tag/Aria2/index.json",revision:"d1e44b3b91d9c12360297fdcda12f0a4"},{url:"/assets/data/tag/Artalk/index.json",revision:"d0881a120db8f41df1b0973125c6c6a1"},{url:"/assets/data/tag/COVID-19/index.json",revision:"7197f335eaf16fd50b044e83fd5a427a"},{url:"/assets/data/tag/cron/index.json",revision:"960bceba24745819dfb76448a8461b57"},{url:"/assets/data/tag/FlexGet/index.json",revision:"d1869c8b80ae934d058bd7e097558abc"},{url:"/assets/data/tag/GitHub Actions/index.json",revision:"5126768a47106c1cbb2888212613f6a1"},{url:"/assets/data/tag/Gridsome/index.json",revision:"e6914fa0b86c6b668de9f933218c3e23"},{url:"/assets/data/tag/Markdown/index.json",revision:"b2ae97fdf79d5d44657df2f605556d86"},{url:"/assets/data/tag/Python/index.json",revision:"ecde037972278f2af9e23ae93b54ca6a"},{url:"/assets/data/tag/RSS/index.json",revision:"ff51531e11934e8d247581ed5e8808c8"},{url:"/assets/data/tag/Vue.js/index.json",revision:"a600152d9fa8e77ee2a74ad2e8e4f43c"},{url:"/assets/data/tag/webdrivers/index.json",revision:"cd812f047fd12457d28cc639c2dff98f"},{url:"/assets/data/tag/手帐/index.json",revision:"d14ecc6ac3bb2de693d8c481510e57c6"},{url:"/assets/data/tech/auto-download-bangumi-with-aria2-rss/index.json",revision:"c35af33ae068e66cfedd26ff9bc6fbef"},{url:"/assets/data/tech/modified-github-actions-4-heu-checkin/index.json",revision:"0c28440ddb54e196f30d52176bd31e0b"},{url:"/assets/data/watch/index.json",revision:"6ccfd3a9411167f50e4682faf7507bfe"},{url:"/manifest.json",revision:"5816292059769ae61717d6ff8fdfa23e"},{url:"/404",revision:"28f25f53f5ce5d7c39f9df9ad1964986"},{url:"/tech/modified-github-actions-4-heu-checkin",revision:"aa27d2c88c09a380d7a1c47e08620b16"},{url:"/code/use-self-hosted-comment-system-in-gridsome",revision:"14b39b4736146dc2cd7734e47314c816"},{url:"/life/new-start-with-gridsome",revision:"69c357196a0946e4b739f203565b332e"},{url:"/code/update-your-posts-in-readme",revision:"2667e771d879156455616dcb9f160e22"},{url:"/tech/auto-download-bangumi-with-aria2-rss",revision:"91eb9e51d2e646da1436df33b5246be3"},{url:"/life/daily-impermanence",revision:"721fa46006355d2ec8370a431302d119"},{url:"/code/heu-auto-checkin-covid19",revision:"747ec4ff16c78f691172af0f4cbcf35f"},{url:"/tag/Aria2",revision:"2039d5c9da00ef35e377d7ff0c82996a"},{url:"/tag/FlexGet",revision:"1cdfd4b44efeef407a6c8c0186829bae"},{url:"/tag/RSS",revision:"7d98a501e54534d7059705af21d2e4cc"},{url:"/tag/%E6%89%8B%E5%B8%90",revision:"3899084d82128c017d1f3f6c60e96c5d"},{url:"/tag/COVID-19",revision:"2069cf6659c4b95b1be1033eb14ed705"},{url:"/tag/Python",revision:"ea7933fda08676e942fff6cbc374adda"},{url:"/tag/GitHub%20Actions",revision:"164e70d955941f5796e92ac0208452dc"},{url:"/tag/webdrivers",revision:"3ae43b72173d80167c850e2879157177"},{url:"/tag/cron",revision:"7a967abb22f0a0bd3cd7eb58a8d91823"},{url:"/tag/Gridsome",revision:"d25e61e1eedc2e237b8037fc6f135b6d"},{url:"/tag/Markdown",revision:"60307797bf2abbd6f9c1bfecb1268dca"},{url:"/tag/Vue.js",revision:"b45b8248dd795044d2bf037c4f0280e4"},{url:"/tag/Artalk",revision:"d6ec2e879387dae6b115907a71ce42ad"},{url:"/category/tech",revision:"3b7b35ee9528c22ad5f9168f573e5ccf"},{url:"/category/life",revision:"0c11c999e5d0dac54fe596d6d4cc03c9"},{url:"/category/code",revision:"c9b5e6d2780c362b6a5a2a1e17acce57"},{url:"/watch",revision:"0a261f48ba3244e5d37dda83888ed553"},{url:"/friends",revision:"4f4f566c0d74393e1158a8f8d6e37c10"},{url:"/about",revision:"a7224db13f3a49096aa27c1876d1a947"},{url:"/archives",revision:"6dc779670bc86b280adac33a13404034"}],{})}));
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
