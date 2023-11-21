"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[39299],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,s(s({ref:t},p),{},{components:n})):o.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3466:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var o=n(665),i=n(40151),r=(n(59496),n(49613)),s=["components"],a={sidebar_label:"Custom CSS",sidebar_position:3},c="Custom CSS",l={unversionedId:"docs/recipes/customize-sie/custom-css",id:"version-1.x/docs/recipes/customize-sie/custom-css",title:"Custom CSS",description:"Logto continually enhances the user sign-in experience and has added a brand color option to the UI. However, we know that fine-tuning UI requirements can be unpredictable. While Logto is still exploring the best options for customization, we want to provide a programmatic method to unblock your development.",source:"@site/versioned_docs/version-1.x/docs/recipes/customize-sie/custom-css.md",sourceDirName:"docs/recipes/customize-sie",slug:"/docs/recipes/customize-sie/custom-css",permalink:"/docs/recipes/customize-sie/custom-css",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/customize-sie/custom-css.md",tags:[],version:"1.x",sidebarPosition:3,frontMatter:{sidebar_label:"Custom CSS",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Match your brand",permalink:"/docs/recipes/customize-sie/match-your-brand"},next:{title:"Set your terms",permalink:"/docs/recipes/customize-sie/set-you-terms"}},p={},u=[{value:"Custom CSS in Logto Console",id:"custom-css-in-logto-console",level:2},{value:"Examples",id:"examples",level:2},{value:"Custom CSS by Management API",id:"custom-css-by-management-api",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-css"},"Custom CSS"),(0,r.kt)("p",null,"Logto continually enhances the user sign-in experience and has added a brand color option to the UI. However, we know that fine-tuning UI requirements can be unpredictable. While Logto is still exploring the best options for customization, we want to provide a programmatic method to unblock your development."),(0,r.kt)("h2",{id:"custom-css-in-logto-console"},"Custom CSS in Logto Console"),(0,r.kt)("p",null,'Go to "Sign-in Experience > Brand > Custom CSS in the Logto Console.'),(0,r.kt)("p",null,"Editing CSS code in the left editor, it will render lively in the right preview modal immediately. Please note, the code editor only supports the CSS code so far. Not HTML or Javascript."),(0,r.kt)("p",null,"After saving changes, don\u2019t forget to click the \u201cLive Preview\u201d button to check the changes on all pages."),(0,r.kt)("p",null,'To view the componentized interface design for Logto, you can either navigate to "Logto/packages/ui/src" on GitHub or open the browser\u2019s "Inspect Elements" tool on the Logto Live preview page.'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"For instance, if you want to give your sign-in page a feel of the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Night City"))," for web view, try this CSS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"@font-face {\n  font-family: 'Rock Salt';\n  font-style: normal;\n  font-weight: normal;\n  font-display: swap;\n  src: url('https://fonts.gstatic.com/s/rocksalt/v18/MwQ0bhv11fWD6QsAVOZrt0M6p7NGrQ.woff2') format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F,\n    U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: 'Share Tech';\n  font-style: normal;\n  font-weight: normal;\n  font-display: swap;\n  src: url('https://fonts.gstatic.com/s/sharetech/v17/7cHtv4Uyi5K0OeZ7bohU8H0JmBUhfrE.woff2') format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F,\n    U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n#app * {\n  font-family: 'Share Tech';\n  letter-spacing: 0.5px;\n}\n\n#app > div[class$='viewBox'] {\n  background-image: url('https://silverhand.io/assets/v-in-nc.jpg');\n  background-size: cover;\n}\n\n#app main[class$='main'] {\n  background-image: url('https://silverhand.io/assets/gentle-universe.png');\n  background-size: cover;\n  opacity: 98%;\n  min-height: initial;\n  padding: 24px;\n  padding-bottom: 72px;\n  border-radius: 12px;\n}\n\n#app main[class$='main'] img[class$='logo'] {\n  content: url('https://silverhand.io/assets/cyberpunk-2077.png');\n  margin: -20px 0 -12px;\n  height: 160px;\n}\n\n#app main[class$='main'] div[class$='headline'] {\n  visibility: hidden;\n  height: 60px;\n}\n\n#app main[class$='main'] div[class$='headline']::before {\n  content: 'Welcome to Night City';\n  visibility: visible;\n  display: block;\n  font-family: 'Rock Salt';\n  font-style: italic;\n  line-height: 60px;\n  font-size: 20px;\n  color: rgba(245, 250, 255, 60%);\n  padding: 0 20px;\n}\n\n#app form div[class$='inputField'] > div {\n  outline: none;\n  border: none;\n  border-radius: 4px;\n}\n\n#app form div[class$='inputField'] > div > input,\n#app form div[class$='inputField'] div[class$='countryCodeSelector'] {\n  background: initial;\n  background-color: #453f67;\n  font-family: 'Share Tech';\n  letter-spacing: 0.5px;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n#app button {\n  font-weight: 600;\n  font-size: 16px;\n  border-radius: 4px;\n}\n\n#app button[type='submit'] {\n  background: linear-gradient(270.84deg, #2fd6fb -24.55%, #6369fc 44.33%, #a741eb 119.2%), #5d34f2;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SIE Custom CSS example",src:n(73222).Z,width:"2560",height:"1600"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Since Logto uses CSS Modules, you may see a hash value in the ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," property of DOM elements (e.g., a ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"vUugRG_container"),"). To override these, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"$=")," CSS selector to match elements that end with a specified value. In this case, it should be ",(0,r.kt)("inlineCode",{parentName:"p"},"div[class$=container]"),".")),(0,r.kt)("h2",{id:"custom-css-by-management-api"},"Custom CSS by Management API"),(0,r.kt)("p",null,"You also can use the Management API ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH /api/sign-in-exp")," with body ",(0,r.kt)("inlineCode",{parentName:"p"},'{ "customCss": "arbitrary string" }')," to set customized CSS for the sign-in experience. You should see the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"customCss")," attached after ",(0,r.kt)("inlineCode",{parentName:"p"},"<title>")," of the page. If the style has a higher priority, it should be able to override."))}m.isMDXComponent=!0},73222:function(e,t,n){t.Z=n.p+"assets/images/sie-custom-css-example-b3cada0841752b34d590232de2fec42d.jpeg"}}]);