(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08c59335"],{"07bd":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"wrapper"},[i("div",{staticClass:"product_content animate__animated animate__fadeIn"},[i("div",{staticClass:"container"},[i("div",{staticClass:"content_box"},[i("h1",{staticClass:"product_title"},[t._v(t._s(t.project.title))]),i("p",{staticClass:"d-flex"},[i("span",[t._v("使用技術：")]),i("span",{staticClass:"content_text"},[t._v(t._s(t.project.skill))])]),i("p",{staticClass:"d-flex"},[i("span",[t._v("內容介紹：")]),i("span",{staticClass:"content_text"},[t._v(t._s(t.project.content))])])]),i("ul",{staticClass:"imgs_box"},[t.project.image01?i("li",[i("img",{staticClass:"img-fluid",attrs:{src:t.publicPath+"images/project/"+t.project.image01}})]):t._e(),t.project.image02?i("li",[i("img",{staticClass:"img-fluid",attrs:{src:t.publicPath+"images/project/"+t.project.image02}})]):t._e(),t.project.image03?i("li",[i("img",{staticClass:"img-fluid",attrs:{src:t.publicPath+"images/project/"+t.project.image03}})]):t._e(),t.project.image04?i("li",[i("img",{staticClass:"img-fluid",attrs:{src:t.publicPath+"images/project/"+t.project.image04}})]):t._e()]),t.project.demo?i("a",{staticClass:"demo",attrs:{href:t.project.demo,target:"_blank"}},[t._v("網站範例")]):t._e(),i("div",{staticClass:"moreBox"},[i("router-link",{staticClass:"more",attrs:{to:"/"}},[t._v("查看更多")])],1)])]),i("div",{staticClass:"arrow next",on:{click:t.nextPage}},[i("i",{staticClass:"fas fa-long-arrow-alt-right"})]),i("div",{staticClass:"arrow prev",on:{click:t.prevPage}},[i("i",{staticClass:"fas fa-long-arrow-alt-left"})])])},a=[],s=(i("4160"),i("159b"),{data:function(){return{publicPath:"/portfolio/",projects:[],project:[],idx:0,next:0,prev:0}},created:function(){this.getProjects()},methods:{getProjects:function(){var t=this,e=this.$loading.show();this.$http.get("".concat(this.publicPath,"data/db.json")).then((function(i){t.projects=i.data.projects,i.data.projects.forEach((function(i,r){i.id===t.$route.params.id&&(e.hide(),t.project=i,t.idx=r)}))})).catch((function(t){console.log(t)}))},nextPage:function(){var t=this.projects.length;this.next=this.idx+1,this.next!==t&&(this.$router.push("/project/".concat(this.projects[this.next].id)),this.getProjects())},prevPage:function(){this.prev=this.idx-1,this.prev>=0&&(this.$router.push("/project/".concat(this.projects[this.prev].id)),this.getProjects())}}}),c=s,o=(i("e3eb"),i("2877")),n=Object(o["a"])(c,r,a,!1,null,"8f9548aa",null);e["default"]=n.exports},"159b":function(t,e,i){var r=i("da84"),a=i("fdbc"),s=i("17c2"),c=i("9112");for(var o in a){var n=r[o],l=n&&n.prototype;if(l&&l.forEach!==s)try{c(l,"forEach",s)}catch(u){l.forEach=s}}},"17c2":function(t,e,i){"use strict";var r=i("b727").forEach,a=i("a640"),s=i("ae40"),c=a("forEach"),o=s("forEach");t.exports=c&&o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,i){"use strict";var r=i("23e7"),a=i("17c2");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"65f0":function(t,e,i){var r=i("861d"),a=i("e8b5"),s=i("b622"),c=s("species");t.exports=function(t,e){var i;return a(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!a(i.prototype)?r(i)&&(i=i[c],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},"6c84":function(t,e,i){},a640:function(t,e,i){"use strict";var r=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&r((function(){i.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,i){var r=i("83ab"),a=i("d039"),s=i("5135"),c=Object.defineProperty,o={},n=function(t){throw t};t.exports=function(t,e){if(s(o,t))return o[t];e||(e={});var i=[][t],l=!!s(e,"ACCESSORS")&&e.ACCESSORS,u=s(e,0)?e[0]:n,f=s(e,1)?e[1]:void 0;return o[t]=!!i&&!a((function(){if(l&&!r)return!0;var t={length:-1};l?c(t,1,{enumerable:!0,get:n}):t[1]=1,i.call(t,u,f)}))}},b727:function(t,e,i){var r=i("0366"),a=i("44ad"),s=i("7b0b"),c=i("50c4"),o=i("65f0"),n=[].push,l=function(t){var e=1==t,i=2==t,l=3==t,u=4==t,f=6==t,p=5==t||f;return function(h,d,g,v){for(var m,j,b=s(h),C=a(b),x=r(d,g,3),_=c(C.length),L=0,S=v||o,P=e?S(h,_):i?S(h,0):void 0;_>L;L++)if((p||L in C)&&(m=C[L],j=x(m,L,b),t))if(e)P[L]=j;else if(j)switch(t){case 3:return!0;case 5:return m;case 6:return L;case 2:n.call(P,m)}else if(u)return!1;return f?-1:l||u?u:P}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},e3eb:function(t,e,i){"use strict";i("6c84")},e8b5:function(t,e,i){var r=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-08c59335.4c63ba48.js.map