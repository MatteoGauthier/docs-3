"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6050],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),v=u(r),d=o,f=v["".concat(p,".").concat(d)]||v[d]||l[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=v;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},67742:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var n=r(665),o=r(40151),a=(r(59496),r(49613)),i=["components"],c={},p=void 0,u={unversionedId:"sdk/JavaScript/vue/variables/variable.createLogto",id:"version-1.x/sdk/JavaScript/vue/variables/variable.createLogto",title:"variable.createLogto",description:"const createLogto: LogtoVuePlugin",source:"@site/versioned_docs/version-1.x/sdk/JavaScript/vue/variables/variable.createLogto.md",sourceDirName:"sdk/JavaScript/vue/variables",slug:"/sdk/JavaScript/vue/variables/variable.createLogto",permalink:"/sdk/JavaScript/vue/variables/variable.createLogto",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/sdk/JavaScript/vue/variables/variable.createLogto.md",tags:[],version:"1.x",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"type-alias.UserInfoResponse",permalink:"/sdk/JavaScript/vue/type-aliases/type-alias.UserInfoResponse"},next:{title:"@logto/remix",permalink:"/sdk/JavaScript/remix/"}},s={},l=[{value:"Source",id:"source",level:2}],v={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"const")," ",(0,a.kt)("strong",{parentName:"p"},"createLogto"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"LogtoVuePlugin"))),(0,a.kt)("p",null,"Creates the Logto Vue plugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createApp } from 'vue';\nimport { createLogto } from '@logto/vue';\n\nconst app = createApp(App);\nconst app.use(createLogto, {\n  appId: '<your-app-id>',\n  endpoint: '<your-oidc-endpoint-domain>',\n});\n\napp.mount('#app');\n")),(0,a.kt)("p",null,"Use this in your Vue root component to register the plugin"),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/logto-io/js/blob/54d7193/packages/vue/src/index.ts#L62"},"src/index.ts:62")))}d.isMDXComponent=!0}}]);