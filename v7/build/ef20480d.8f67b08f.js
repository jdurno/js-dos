(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(89)),i=(r(91),{id:"multiple-layers",title:"Multiple layers"}),c={unversionedId:"multiple-layers",id:"multiple-layers",isDocsHomePage:!1,title:"Multiple layers",description:"Layer is a conjunction of Mapper, Gestures and Buttons. Look the video how it works in real game.",source:"@site/docs/multiple-layers.md",slug:"/multiple-layers",permalink:"/v7/build/docs/multiple-layers",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/multiple-layers.md",version:"current",sidebar:"someSidebar",previous:{title:"Buttons",permalink:"/v7/build/docs/buttons"},next:{title:"Contributing in client-side features",permalink:"/v7/build/docs/contributing-emulators-ui"}},u=[],s={rightToc:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Layer is a conjunction of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"mapper"}),"Mapper"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"gestures"}),"Gestures")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"buttons"}),"Buttons"),". Look the video how it works in real game."),Object(o.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/iEaRErl76jM?start=35",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(o.b)("p",null,"Layer information are stored inside ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"configuration#jsdosjsdosjson"}),"jsdos.json")," file and generated with Dos.Zone ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"game-studio"}),"game studio"),"."),Object(o.b)("p",null,"Often one layer is enough for a game, but sometimes the game has a complex UI that requires changing layers between scenes. In that case you can attach multiple layers to the game and then switch between them when needed."),Object(o.b)("p",null,"Golden Axe one such game, take a look how it works."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html",metastring:'title="examples/ui-layers.html"',title:'"examples/ui-layers.html"'}),"{}\n")))}l.isMDXComponent=!0},89:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,m=p["".concat(i,".").concat(f)]||p[f]||b[f]||o;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},90:function(e,t,r){"use strict";var n=r(0),a=r(20);t.a=function(){const e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},91:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(90),a=r(92);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},92:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))}}]);