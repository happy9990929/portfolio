(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18bc6d28"],{"07bd":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"wrapper"},[r("div",{staticClass:"product_content animate__animated animate__fadeIn"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"product_title"},[t._v(t._s(t.project.title))]),r("ul",{staticClass:"imgs_box"},[t.project.image01?r("li",[r("img",{staticClass:"img-fluid",attrs:{src:"/images/project/"+t.project.image01}})]):t._e(),t.project.image02?r("li",[r("img",{staticClass:"img-fluid",attrs:{src:"/images/project/"+t.project.image02}})]):t._e(),t.project.image03?r("li",[r("img",{staticClass:"img-fluid",attrs:{src:"/images/project/"+t.project.image03}})]):t._e(),t.project.image04?r("li",[r("img",{staticClass:"img-fluid",attrs:{src:"/images/project/"+t.project.image04}})]):t._e()]),t.project.demo?r("a",{staticClass:"demo",attrs:{href:t.project.demo,target:"_blank"}},[t._v("網站範例")]):t._e(),r("div",{staticClass:"moreBox"},[r("router-link",{staticClass:"more",attrs:{to:"/"}},[t._v("查看更多")])],1)])]),r("div",{staticClass:"arrow next",on:{click:t.nextPage}},[r("i",{staticClass:"fas fa-long-arrow-alt-right"})]),r("div",{staticClass:"arrow prev",on:{click:t.prevPage}},[r("i",{staticClass:"fas fa-long-arrow-alt-left"})])])},a=[],s=(r("4160"),r("159b"),{data:function(){return{projects:[],project:[],idx:0,next:0,prev:0}},created:function(){this.getProjects()},methods:{getProjects:function(){var t=this,e=this.$loading.show();this.$http.get("/data/db.json").then((function(r){t.projects=r.data.projects,r.data.projects.forEach((function(r,i){r.id===t.$route.params.id&&(e.hide(),t.project=r,t.idx=i)}))})).catch((function(t){console.log(t)}))},nextPage:function(){var t=this.projects.length;this.next=this.idx+1,this.next!==t&&(this.$router.push("/project/".concat(this.projects[this.next].id)),this.getProjects())},prevPage:function(){this.prev=this.idx-1,this.prev>=0&&(this.$router.push("/project/".concat(this.projects[this.prev].id)),this.getProjects())}}}),c=s,o=(r("8527"),r("2877")),n=Object(o["a"])(c,i,a,!1,null,"0241e1d9",null);e["default"]=n.exports},"159b":function(t,e,r){var i=r("da84"),a=r("fdbc"),s=r("17c2"),c=r("9112");for(var o in a){var n=i[o],u=n&&n.prototype;if(u&&u.forEach!==s)try{c(u,"forEach",s)}catch(f){u.forEach=s}}},"17c2":function(t,e,r){"use strict";var i=r("b727").forEach,a=r("a640"),s=r("ae40"),c=a("forEach"),o=s("forEach");t.exports=c&&o?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"1f42":function(t,e,r){},4160:function(t,e,r){"use strict";var i=r("23e7"),a=r("17c2");i({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"65f0":function(t,e,r){var i=r("861d"),a=r("e8b5"),s=r("b622"),c=s("species");t.exports=function(t,e){var r;return a(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?i(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},8527:function(t,e,r){"use strict";r("1f42")},a640:function(t,e,r){"use strict";var i=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&i((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var i=r("83ab"),a=r("d039"),s=r("5135"),c=Object.defineProperty,o={},n=function(t){throw t};t.exports=function(t,e){if(s(o,t))return o[t];e||(e={});var r=[][t],u=!!s(e,"ACCESSORS")&&e.ACCESSORS,f=s(e,0)?e[0]:n,l=s(e,1)?e[1]:void 0;return o[t]=!!r&&!a((function(){if(u&&!i)return!0;var t={length:-1};u?c(t,1,{enumerable:!0,get:n}):t[1]=1,r.call(t,f,l)}))}},b727:function(t,e,r){var i=r("0366"),a=r("44ad"),s=r("7b0b"),c=r("50c4"),o=r("65f0"),n=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,f=4==t,l=6==t,p=5==t||l;return function(d,h,g,m){for(var v,j,C=s(d),L=a(C),S=i(h,g,3),b=c(L.length),x=0,_=m||o,y=e?_(d,b):r?_(d,0):void 0;b>x;x++)if((p||x in L)&&(v=L[x],j=S(v,x,C),t))if(e)y[x]=j;else if(j)switch(t){case 3:return!0;case 5:return v;case 6:return x;case 2:n.call(y,v)}else if(f)return!1;return l?-1:u||f?f:y}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},e8b5:function(t,e,r){var i=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-18bc6d28.fbb0304f.js.map