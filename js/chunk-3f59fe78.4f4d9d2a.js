(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f59fe78"],{"039c":function(t,e,i){"use strict";i("0727")},"0727":function(t,e,i){},"159b":function(t,e,i){var o=i("da84"),n=i("fdbc"),c=i("17c2"),a=i("9112");for(var s in n){var r=o[s],u=r&&r.prototype;if(u&&u.forEach!==c)try{a(u,"forEach",c)}catch(l){u.forEach=c}}},"17c2":function(t,e,i){"use strict";var o=i("b727").forEach,n=i("a640"),c=i("ae40"),a=n("forEach"),s=c("forEach");t.exports=a&&s?[].forEach:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,i){"use strict";var o=i("23e7"),n=i("17c2");o({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"4e2d":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("header-menu"),i("router-view"),i("footer-info")],1)},n=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("div",{staticClass:"header_logo_box d-flex align-items-center justify-content-center"},[o("span",{staticClass:"openMenu",on:{click:t.openMenu}},[o("i",{staticClass:"fas fa-bars"})]),o("router-link",{staticClass:"header_logo",attrs:{to:"/"}},[o("img",{staticClass:"img-fluid",attrs:{src:i("9d64")}})])],1),o("nav",{ref:"menu",staticClass:"menu"},[o("span",{staticClass:"closeMenu",on:{click:t.closeMenu}},[o("i",{staticClass:"fas fa-times"})]),o("ul",{staticClass:"menuItems"},[o("li",[o("router-link",{staticClass:"menuItem",attrs:{to:"/"},nativeOn:{mouseover:function(e){t.Web="網頁設計"},mouseout:function(e){t.Web="Web"}}},[t._v(" "+t._s(t.Web)+" ")])],1),o("li",[o("router-link",{staticClass:"menuItem",attrs:{to:"/works"},nativeOn:{mouseover:function(e){t.Graphic="平面設計"},mouseout:function(e){t.Graphic="Graphic"}}},[t._v(" "+t._s(t.Graphic)+" ")])],1),o("li",[o("router-link",{staticClass:"menuItem",attrs:{to:"/about"},nativeOn:{mouseover:function(e){t.About="關於我"},mouseout:function(e){t.About="About"}}},[t._v(" "+t._s(t.About)+" ")])],1),t._m(0),t._m(1)])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("a",{staticClass:"menuItem",attrs:{href:"https://happy9990929.github.io/",target:"_blank"}},[t._v(" Blog ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("a",{staticClass:"menuItem",attrs:{href:"https://github.com/happy9990929",target:"_blank"}},[t._v("GitHub")])])}],s=(i("4160"),i("159b"),{data:function(){return{Web:"Web",Graphic:"Graphic",About:"About"}},methods:{openMenu:function(){this.$refs.menu.style.width="100%"},closeMenu:function(){this.$refs.menu.style.width=0}},mounted:function(){var t=this,e=document.querySelectorAll(".menuItem");e.forEach((function(e){e.addEventListener("click",(function(){t.closeMenu()}))}))}}),r=s,u=(i("039c"),i("2877")),l=Object(u["a"])(r,c,a,!1,null,"23592984",null),f=l.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"footer"},[t._m(0),i("div",{directives:[{name:"show",rawName:"v-show",value:t.gotopIcon,expression:"gotopIcon"}]},[i("div",{staticClass:"gotop",on:{click:t.scrollTop}},[t._m(1)])])])},h=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"footer_logo"},[o("img",{staticClass:"img-fluid",attrs:{src:i("9d64")}})]),o("p",{staticClass:"footer_contact"},[o("a",{attrs:{href:"mailto:lala9990929@gmail.com"}},[t._v("lala9990929@gmail.com")]),o("br")]),o("div",{staticClass:"footer_icon_box"},[o("a",{staticClass:"footer_icon",attrs:{href:"https://github.com/happy9990929",target:"_blank"}},[o("i",{staticClass:"fab fa-github"})]),o("a",{staticClass:"footer_icon",attrs:{href:"https://codepen.io/bobee",target:"_blank"}},[o("i",{staticClass:"fab fa-codepen"})]),o("a",{staticClass:"footer_icon",attrs:{href:"https://lala9990929.medium.com/",target:"_blank"}},[o("i",{staticClass:"fab fa-medium"})])]),o("div",{staticStyle:{"font-size":"12px","margin-top":"20px"}},[t._v("© E WEN")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[i("i",{staticClass:"fas fa-arrow-up"})])}],m={data:function(){return{gotopIcon:!1}},mounted:function(){window.addEventListener("scroll",this.gotop)},methods:{gotop:function(){var t=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;this.gotopIcon=t>100},scrollTop:function(){window.scrollTo({top:0,behavior:"smooth"})}},destroyed:function(){window.removeEventListener("scroll",this.gotop)}},b=m,p=(i("8e10"),Object(u["a"])(b,A,h,!1,null,"4fe14c9d",null)),d=p.exports,v={components:{headerMenu:f,footerInfo:d}},g=v,w=Object(u["a"])(g,o,n,!1,null,null,null);e["default"]=w.exports},"65f0":function(t,e,i){var o=i("861d"),n=i("e8b5"),c=i("b622"),a=c("species");t.exports=function(t,e){var i;return n(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!n(i.prototype)?o(i)&&(i=i[a],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},"8e10":function(t,e,i){"use strict";i("e662")},"9d64":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAABGCAYAAACXK+uFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFomlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTAxLTA4VDIxOjA2OjQwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wMS0wOFQyMzoyNDowNSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wMS0wOFQyMzoyNDowNSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MDA4YzYyMy02YTdl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"},a640:function(t,e,i){"use strict";var o=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&o((function(){i.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,i){var o=i("83ab"),n=i("d039"),c=i("5135"),a=Object.defineProperty,s={},r=function(t){throw t};t.exports=function(t,e){if(c(s,t))return s[t];e||(e={});var i=[][t],u=!!c(e,"ACCESSORS")&&e.ACCESSORS,l=c(e,0)?e[0]:r,f=c(e,1)?e[1]:void 0;return s[t]=!!i&&!n((function(){if(u&&!o)return!0;var t={length:-1};u?a(t,1,{enumerable:!0,get:r}):t[1]=1,i.call(t,l,f)}))}},b727:function(t,e,i){var o=i("0366"),n=i("44ad"),c=i("7b0b"),a=i("50c4"),s=i("65f0"),r=[].push,u=function(t){var e=1==t,i=2==t,u=3==t,l=4==t,f=6==t,A=5==t||f;return function(h,m,b,p){for(var d,v,g=c(h),w=n(g),M=o(m,b,3),S=a(w.length),G=0,I=p||s,E=e?I(h,S):i?I(h,0):void 0;S>G;G++)if((A||G in w)&&(d=w[G],v=M(d,G,g),t))if(e)E[G]=v;else if(v)switch(t){case 3:return!0;case 5:return d;case 6:return G;case 2:r.call(E,d)}else if(l)return!1;return f?-1:u||l?l:E}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},e662:function(t,e,i){},e8b5:function(t,e,i){var o=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-3f59fe78.4f4d9d2a.js.map