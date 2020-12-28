(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{22:function(e,t,a){e.exports={videos:"video_list_videos__2mHnQ"}},3:function(e,t,a){e.exports={container:"video_item_container__15J4P",list:"video_item_list__17czU",grid:"video_item_grid__P8pjp",video:"video_item_video__RAqYo",metadata:"video_item_metadata__1k8jQ",thumbnail:"video_item_thumbnail__2bKnS",title:"video_item_title__3faOb",channel:"video_item_channel__1SM9y"}},30:function(e,t,a){},4:function(e,t,a){e.exports={header:"search_header_header__ZuQYS",logo:"search_header_logo__1Y0SU",input:"search_header_input__2L9qh",button:"search_header_button__1kqYq",buttonImg:"search_header_buttonImg__3ZatK"}},5:function(e,t,a){e.exports={app:"app_app__uZ8a-",content:"app_content__wFzw8",detail:"app_detail__2CzAH",list:"app_list__1Co11"}},50:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(2),c=a.n(i),s=a(21),r=a.n(s),o=(a(30),a(11)),l=a(5),u=a.n(l),d=a(4),p=a.n(d),h=function(e){var t=e.onSearch,a=Object(i.useRef)(),c=function(){var e=a.current.value;t(e)};return Object(n.jsxs)("header",{className:p.a.header,children:[Object(n.jsxs)("div",{className:p.a.logo,children:[Object(n.jsx)("img",{className:p.a.img,src:"/images/logo.png",alt:"logo"}),Object(n.jsx)("h1",{className:p.a.title,children:"Youtube"})]}),Object(n.jsx)("input",{ref:a,className:p.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&c()}}),Object(n.jsx)("button",{className:p.a.button,type:"submit",onClick:function(){c()},children:Object(n.jsx)("img",{className:p.a.buttonImg,src:"/images/search.png",alt:"search"})})]})},_=a(7),m=a.n(_),j=function(e){var t=e.video,a=e.video.snippet;return Object(n.jsxs)("section",{className:m.a.detail,children:[Object(n.jsx)("iframe",{className:m.a.video,type:"text/html",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(n.jsx)("h2",{children:a.title}),Object(n.jsx)("h3",{children:a.channelTitle}),Object(n.jsx)("pre",{className:m.a.description,children:a.description})]})},b=a(3),v=a.n(b),f=function(e){var t=e.video,a=e.video.snippet,i=e.onVideoClick,c="list"===e.display?v.a.list:v.a.grid;return Object(n.jsx)("li",{className:"".concat(v.a.container," ").concat(c),onClick:function(){return i(t)},children:Object(n.jsxs)("div",{className:v.a.video,children:[Object(n.jsx)("img",{className:v.a.thumbnail,src:a.thumbnails.medium.url,alt:"video thumbnail"}),Object(n.jsxs)("div",{className:v.a.metadata,children:[Object(n.jsx)("p",{className:v.a.title,children:a.title}),Object(n.jsx)("p",{className:v.a.channel,children:a.channelTitle})]})]})})},x=a(22),O=a.n(x),g=function(e){var t=e.videos,a=e.onVideoClick,i=e.display;return Object(n.jsx)("ul",{className:O.a.videos,children:t.map((function(e){return Object(n.jsx)(f,{video:e,onVideoClick:a,display:i},e.id)}))})},y=function(e){var t=e.youtube,a=Object(i.useState)([]),c=Object(o.a)(a,2),s=c[0],r=c[1],l=Object(i.useState)(null),d=Object(o.a)(l,2),p=d[0],_=d[1];return Object(i.useEffect)((function(){t.mostPopular().then((function(e){return r(e)}))}),[]),Object(n.jsxs)("div",{className:u.a.app,children:[Object(n.jsx)(h,{onSearch:function(e){t.search(e).then((function(e){r(e),_(null)}))}}),Object(n.jsxs)("section",{className:u.a.content,children:[p&&Object(n.jsx)("div",{className:u.a.detail,children:Object(n.jsx)(j,{video:p})}),Object(n.jsx)("div",{className:u.a.list,children:Object(n.jsx)(g,{videos:s,onVideoClick:function(e){_(e)},display:p?"list":"grid"})})]})]})},N=a(12),k=a(6),w=a.n(k),S=a(10),C=a(23),P=a(24),q=a(9),z=a.n(q),I=new(function(){function e(t){Object(C.a)(this,e),this.youtube=t}return Object(P.a)(e,[{key:"mostPopular",value:function(){var e=Object(S.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(S.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:25,type:"video",q:t}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())(z.a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:"AIzaSyDvPo-kSMpMxerD4BZUQtr5uHMfdqFz1T8"}}));r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(y,{youtube:I})}),document.getElementById("root"))},7:function(e,t,a){e.exports={detail:"video_detail_detail__2B56V",description:"video_detail_description__1pjz-"}}},[[50,1,2]]]);
//# sourceMappingURL=main.8fe61dd5.chunk.js.map