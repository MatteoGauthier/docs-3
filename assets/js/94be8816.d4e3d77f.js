"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[99432],{49613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97626:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=r(665),o=r(40151),i=(r(59496),r(49613)),s=["components"],a={sidebar_label:"Set your terms",sidebar_position:3},c="Set your terms",u={unversionedId:"docs/recipes/customize-sie/set-you-terms",id:"docs/recipes/customize-sie/set-you-terms",title:"Set your terms",description:"When building an app, it's important to have a Terms of Use and Privacy Policy. These documents protect both the app developer and the user. The Terms of Use outline the rules and regulations for using the app, while the Privacy Policy explains how personal data is collected, stored, and used.",source:"@site/docs/docs/recipes/customize-sie/set-you-terms.md",sourceDirName:"docs/recipes/customize-sie",slug:"/docs/recipes/customize-sie/set-you-terms",permalink:"/next/docs/recipes/customize-sie/set-you-terms",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/customize-sie/set-you-terms.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Set your terms",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Custom CSS",permalink:"/next/docs/recipes/customize-sie/custom-css"},next:{title:"Localized language",permalink:"/next/docs/recipes/customize-sie/localized-language"}},l={},p=[],d={toc:p};function m(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"set-your-terms"},"Set your terms"),(0,i.kt)("p",null,"When building an app, it's important to have a Terms of Use and Privacy Policy. These documents protect both the app developer and the user. The Terms of Use outline the rules and regulations for using the app, while the Privacy Policy explains how personal data is collected, stored, and used."),(0,i.kt)("p",null,"To do this, you need to provide the relevant URLs to these documents, which will be displayed on the sign-in and sign-up pages. Logto will load it via an ",(0,i.kt)("inlineCode",{parentName:"p"},"<iframe>"),"."),(0,i.kt)("p",null,'If the input box is left empty, the app will skip the "agree on terms" flow, and the legal agreements won\'t be displayed on the sign-in or sign-up pages.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Set your terms",src:r(72603).Z,width:"1746",height:"720"})),(0,i.kt)("p",null,"In some regions, like the European Union, it's required to obtain explicit consent from users before collecting and using their personal data. To comply with these laws, in the default flow of Logto, users must confirm their agreement to the Terms of Use and Privacy Policy by clicking a checkbox or button when registering. The dialog for agreeing just appears when the user doesn't click the checkbox and continues, it\u2019s more seamless to register."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Terms of SIE flow",src:r(65138).Z,width:"2838",height:"1400"})),(0,i.kt)("p",null,'Besides, we will support the statement "By continuing, the user agrees to terms without additional action.\u201d in the feature.'))}m.isMDXComponent=!0},65138:function(e,t,r){t.Z=r.p+"assets/images/sie-terms-sie-flow-be589f266be9ce5c751606c8200c25f1.png"},72603:function(e,t,r){t.Z=r.p+"assets/images/sie-terms-7450590fce2b2c6e1634b2ed7c277c41.png"}}]);