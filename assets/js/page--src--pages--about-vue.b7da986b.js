(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{A6W1:function(t,a,e){"use strict";var s={props:["showTitle"]},n=(e("ArLL"),e("KHd+")),r=e("Kw5r"),i=r.a.config.optionMergeStrategies.computed,o={metadata:{siteName:"Monstx's Blog"}},l=function(t){var a=t.options;a.__staticData?a.__staticData.data=o:(a.__staticData=r.a.observable({data:o}),a.computed=i({$static:function(){return a.__staticData.data}},a.computed))},c=Object(n.a)(s,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"author"},[a("g-link",{staticClass:"logo",attrs:{to:"/"}},[a("g-image",{staticClass:"author__image",attrs:{alt:"Author image",src:"https://blog.monsterx.cn/assets/static/favicon-180x180.png",width:"180",height:"180",blur:"5"}})],1),this.showTitle?a("h1",{staticClass:"author__site-title"},[this._v("\n    "+this._s(this.$static.metadata.siteName)+"\n  ")]):this._e(),a("p",{staticClass:"author__intro"},[this._v("\n    阿巴阿巴，歪比巴布 (づ￣ 3￣)づ\n  ")]),a("p",{staticClass:"author__links"},[a("g-link",{staticStyle:{color:"#F5A623"},attrs:{href:"//blog.monsterx.cn/feed.xml",target:"_blank"}},[a("font-awesome",{attrs:{icon:["fas","rss"]}})],1),a("g-link",{staticStyle:{color:"var(--title-color)"},attrs:{to:"/archives"}},[a("font-awesome",{attrs:{icon:["fas","archive"]}})],1),a("g-link",{staticStyle:{color:"#06a878"},attrs:{to:"/watch"}},[a("font-awesome",{attrs:{icon:["fas","dragon"]}})],1),a("g-link",{staticStyle:{color:"#ff0000"},attrs:{to:"/friends"}},[a("font-awesome",{attrs:{icon:["fas","heart"]}})],1),a("g-link",{attrs:{to:"/about"}},[a("font-awesome",{attrs:{icon:["fas","id-badge"]}})],1)],1)],1)}),[],!1,null,null,null);"function"==typeof l&&l(c);a.a=c.exports},AO8t:function(t,a,e){},ArLL:function(t,a,e){"use strict";var s=e("AO8t");e.n(s).a},Kh8E:function(t,a,e){},hJ2f:function(t,a,e){"use strict";var s=e("Kh8E");e.n(s).a},odGf:function(t,a,e){"use strict";e.r(a);e("NTXR");var s={components:{Author:e("A6W1").a},metaInfo:function(){return{title:"己",meta:[{name:"关于这个站点的一些情报"}]}},data:function(){return{scrolledDist:0}},methods:{handleScroll:function(){this.scrolledDist=window.scrollY}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},mounted:function(){new(e("n4qq"))({el:"#LetsArtalk",placeholder:"说点什么 (づ￣ 3￣)づ",defaultAvatar:"mp",maxNested:2,pageKey:"https://blog.monsterx.cn/about/",serverUrl:"https://lab.monsterx.cn/ArtalkServer",readMore:{pageSize:10,autoLoad:!0}})}},n=(e("hJ2f"),e("KHd+")),r=Object(n.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),e("div",{staticClass:"post content-box"},[e("div",{staticClass:"post__content"},[e("div",{staticClass:"md-content"},[t._m(1),t._m(2),e("p",[t._v("\n          按照推荐程度，欢迎通过下面方式联系我。直接留言亦可，交友不必如此复杂。\n        ")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),e("p"),e("br"),e("div",{staticClass:"admonition admonition-important"},[e("div",{staticClass:"admonition-heading"},[e("h5",[e("div",{staticClass:"admonition-icon"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}})])]),t._v("\n              版权\n            ")])]),t._m(8)])])])]),e("div",{staticClass:"artalk-cards"},[e("details",{staticClass:"admonition admonition-warning"},[e("summary",[e("div",{staticClass:"admonition-icon"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}})])]),t._v("\n        Comment on Monstx's Blog")]),t._m(9)]),e("div",{attrs:{id:"LetsArtalk"}})]),e("transition",{attrs:{name:"fade"}},[t.scrolledDist>400?e("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#app"},expression:"{ el: '#app' }"}],attrs:{id:"back-to-top"}},[e("font-awesome",{attrs:{id:"back-to-top-icon",icon:["fas","arrow-up"]}})],1):t._e()]),e("Author",{staticClass:"post-author"})],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"post-title"},[a("h1",{staticClass:"post-title__text"},[this._v("\n      己\n    ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{staticStyle:{"margin-top":"0"},attrs:{id:"关于这个站长的一些情报"}},[a("a",{attrs:{href:"#关于这个站长的一些情报"}}),this._v("关于这个站长的一些情报\n        ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[e("span",[t._v("坐标")]),t._v("合肥 / 哈尔滨 "),e("br"),e("span",[t._v("爱好")]),t._v("烧烤 / 动漫 / Marvel DC Disney / 博客写作 / 代码\n          "),e("br"),e("span",[t._v("入门")]),t._v("Clang / JavaScript / PHP "),e("br"),e("span",[t._v("想学")]),t._v("Cpp / Python / Vue.js / React.js "),e("br"),e("span",[t._v("习惯")]),t._v("VSCode / 4 spaces / Windows / Linux "),e("br"),e("span",[t._v("人格")]),t._v("ISFP-A Adventurer 冒险家 / 实用主义属性\n          平等・人权・社会主义 / 前网络话痨\n        ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",{attrs:{align:"center"}},[t._v("Key")]),e("th",{attrs:{align:"center"}},[t._v("Value")]),e("th",{attrs:{align:"center"}},[t._v("Key")]),e("th",{attrs:{align:"center"}},[t._v("Value")])])]),e("tbody",[e("tr",[e("td",{attrs:{align:"center"}},[e("strong",[t._v("Email")])]),e("td",{attrs:{align:"left"}},[e("a",{attrs:{href:"mailto:monsterxcn@gmail.com",target:"_blank"}},[t._v("monsterxcn AT gmail.com")])]),e("td",{attrs:{align:"center"}},[e("strong",[t._v("Telegram")])]),e("td",{attrs:{align:"left"}},[e("a",{attrs:{href:"https://t.me/monsterxcn",target:"_blank"}},[t._v("@monsterxcn")])])]),e("tr",[e("td",{attrs:{align:"center"}},[e("strong",[t._v("QQ")])]),e("td",{attrs:{align:"left"}},[e("a",{attrs:{href:"https://wpa.qq.com/msgrd?v=3&uin=38877256&site=qq&menu=yes",target:"_blank"}},[t._v("38877256")])]),e("td",{attrs:{align:"center"}},[t._v("WeChat")]),e("td",{attrs:{align:"left"}},[t._v("@mocurio")])]),e("tr",[e("td",{attrs:{align:"center"}},[t._v("Twitter")]),e("td",{attrs:{align:"left"}},[e("a",{attrs:{href:"https://twitter.com/mo_curio",target:"_blank"}},[t._v("@mo_curio")])]),e("td",{attrs:{align:"center"}},[t._v("Steam")]),e("td",{attrs:{align:"left"}},[e("a",{attrs:{href:"https://steamcommunity.com/id/monsterxcn",target:"_blank"}},[t._v("@呆一斯 ki dæ 哟")])])]),e("tr",[e("td",{attrs:{align:"center"}},[t._v("Bilibili")]),e("td",{attrs:{align:"left"}},[e("a",{attrs:{href:"https://space.bilibili.com/358575230",target:"_blank"}},[t._v("@初夏阳光12138")])]),e("td",{attrs:{align:"center"}},[t._v("WeiBo")]),e("td",{attrs:{align:"left"}},[e("a",{attrs:{href:"https://weibo.com/u/3978619198",target:"_blank"}},[t._v("@小怪兽MonsterX")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"关于这个博客的一些情报"}},[a("a",{attrs:{href:"#关于这个博客的一些情报"}}),this._v("关于这个博客的一些情报\n        ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",{staticClass:"language-text"},[this._v("WordPress -> Typecho -> Hexo -> Gridsome")]),a("br"),a("code",{staticClass:"language-text"},[this._v("2014 -> 2017 -> 2019 -> 2020")]),a("br"),a("code",{staticClass:"language-text"},[this._v("moc­coo.cn -> mocurio.com -> monsterx.cn")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("\n          当前由\n          "),e("a",{attrs:{href:"http://gridsome.org/",target:"_blank"}},[t._v("Gridsome")]),t._v("\n          驱动，使用\n          "),e("a",{attrs:{href:"https://github.com/gridsome/gridsome-starter-blog",target:"_blank"}},[t._v("@gridsome/gridsome-starter-blog")]),t._v("\n          主题，参考\n          "),e("a",{attrs:{href:"https://blog.spencerwoo.com/",target:"_blank"}},[t._v("@Spencer's Blog")]),t._v("\n          和\n          "),e("a",{attrs:{href:"https://blog.jalenchuh.cn/",target:"_blank"}},[t._v("@Jalen's Blog")]),t._v("\n          进行了一丁点修改\n          "),e("s",[t._v("，代码开源于 GitHub\n            "),e("a",{attrs:{href:"https://github.com/monsterxcn/myBlog",target:"_blank"}},[t._v("@monsterxcn/myBlog")])]),t._v("\n          。\n        ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h4",[t._v("History")]),e("p",[e("span",[t._v("2018 Oct.01")]),t._v("New Start (Typecho + Material)")]),e("p",[e("span",[t._v("2018 Oct.17")]),t._v("工信部备案")]),e("p",[e("span",[t._v("2018 Nov.03")]),t._v("公安机关备案")]),e("p",[e("span",[t._v("2018 Nov.10")]),t._v("TLS v1.0 No, TLS v1.3 Yes")]),e("p",[e("span",[t._v("2019 Apr.29")]),t._v("图片全部迁移至服务器")]),e("p",[e("span",[t._v("2019 May.22")]),t._v("AMP & MIP 支持")]),e("p",[e("span",[t._v("2019 May.14")]),t._v("Material v3.3.1，色调 #757575 更新为\n            #0099FF\n          ")]),e("p",[e("span",[t._v("2019 Aug.20")]),t._v("Material No, VOID Yes")]),e("p",[e("span",[t._v("2019 Aug.25")]),t._v("静态资源迁移至阿里云 OSS")]),e("p",[e("span",[t._v("2020 Mar.17")]),t._v("TLS v1.1 No, HTTP/3 QUIC Yes")]),e("p",[e("span",[t._v("2020 Mar.18")]),t._v("域名解析中国境外境内分离，Cloudflare and\n            Aliyun CDN\n          ")]),e("p",[e("span",[t._v("2020 Mar.21")]),t._v("JPG PNG No, Webp Yes")]),e("p",[e("span",[t._v("2020 May.21")]),t._v("VOID No, myVOID Yes")]),e("p",[e("span",[t._v("2020 Aug.15")]),t._v("Typecho No, Gridsome Yes")]),e("p",[e("span",[t._v("2020 Aug.19")]),t._v("规范 Markdown 源文件书写格式")]),e("p",[e("span",[t._v("Keep moving...")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"admonition-content"},[this._v("\n            若无特殊声明，作品默认基于\n            "),a("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh",target:"_blank"}},[this._v("CC BY-NC-SA 4.0")]),this._v("\n            协议许可，请注意遵守协议规定。 "),a("br"),this._v("\n            作品引用图片小部分来自网络，可能存在版权问题。如发现相关争议请及时联系站长处理！\n          ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("\n        评论发表后 UA 信息、IP\n        地址会被记录，分别用于评论区展示和垃圾评论拦截。"),a("br"),this._v("\n        无特殊原因评论不会被删除，你应该懂得如何发表适当的言论并对其负责。\n      ")])}],!1,null,null,null);a.default=r.exports}}]);