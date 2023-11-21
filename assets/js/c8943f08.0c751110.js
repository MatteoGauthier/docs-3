"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[76665],{49613:function(e,t,r){r.d(t,{Zo:function(){return a},kt:function(){return g}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},a=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),f=l(r),g=o,d=f["".concat(u,".").concat(g)]||f[g]||p[g]||i;return r?n.createElement(d,s(s({ref:t},a),{},{components:r})):n.createElement(d,s({ref:t},a))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},14432:function(e,t,r){r.r(t),r.d(t,{assets:function(){return a},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(665),o=r(40151),i=(r(59496),r(49613)),s=["components"],c={},u=void 0,l={unversionedId:"sdk/Swift/Logto/Structs/LogtoCore.UserInfoResponse",id:"sdk/Swift/Logto/Structs/LogtoCore.UserInfoResponse",title:"LogtoCore.UserInfoResponse",description:"STRUCT",source:"@site/docs/sdk/Swift/Logto/Structs/LogtoCore.UserInfoResponse.md",sourceDirName:"sdk/Swift/Logto/Structs",slug:"/sdk/Swift/Logto/Structs/LogtoCore.UserInfoResponse",permalink:"/next/sdk/Swift/Logto/Structs/LogtoCore.UserInfoResponse",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Swift/Logto/Structs/LogtoCore.UserInfoResponse.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"LogtoCore.RefreshTokenTokenResponse",permalink:"/next/sdk/Swift/Logto/Structs/LogtoCore.RefreshTokenTokenResponse"},next:{title:"NetworkSession",permalink:"/next/sdk/Swift/Logto/Protocols/NetworkSession"}},a={},p=[],f={toc:p};function g(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"STRUCT")),(0,i.kt)("h1",{id:"logtocoreuserinforesponse"},(0,i.kt)("inlineCode",{parentName:"h1"},"LogtoCore.UserInfoResponse")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"struct UserInfoResponse: UserInfoProtocol {\n    public let sub: String\n    public let name: String?\n    public let picture: String?\n    public let username: String?\n    public let email: String?\n    public let emailVerified: Bool?\n    public let phoneNumber: String?\n    public let phoneNumberVerified: Bool?\n    public let customData: JsonObject?\n    public let identities: JsonObject?\n}\n")))}g.isMDXComponent=!0}}]);