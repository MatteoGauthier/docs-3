"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[65643],{49613:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return g}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=p(n),g=r,u=k["".concat(s,".").concat(g)]||k[g]||m[g]||l;return n?a.createElement(u,i(i({ref:e},d),{},{components:n})):a.createElement(u,i({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},76341:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var a=n(665),r=n(40151),l=(n(59496),n(49613)),i=["components"],o={},s="IdTokenClaims",p={unversionedId:"sdk/Kotlin/kotlin/io.logto.sdk.core.type/-id-token-claims/index",id:"version-1.x/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-id-token-claims/index",title:"IdTokenClaims",description:"data class IdTokenClaims(val iss String, val aud Long, val iat String?)",source:"@site/versioned_docs/version-1.x/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-id-token-claims/index.md",sourceDirName:"sdk/Kotlin/kotlin/io.logto.sdk.core.type/-id-token-claims",slug:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-id-token-claims/",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-id-token-claims/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-id-token-claims/index.md",tags:[],version:"1.x",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"CodeTokenResponse",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-code-token-response/"},next:{title:"OidcConfigResponse",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-oidc-config-response/"}},d={},m=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2}],k={toc:m};function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"idtokenclaims"},"IdTokenClaims"),(0,l.kt)("p",null,"data class IdTokenClaims(val iss: ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val sub: ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val aud: ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val exp: ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"),", val iat: ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"),", val atHash: ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"?)"),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IdTokenClaims"),(0,l.kt)("td",{parentName:"tr",align:null},"fun IdTokenClaims(iss: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", sub: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", aud: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", exp: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"),", iat: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"),", atHash: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"?)")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"val name: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"val username: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avatar"),(0,l.kt)("td",{parentName:"tr",align:null},"val avatar: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"atHash"),(0,l.kt)("td",{parentName:"tr",align:null},"val atHash: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"?")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aud"),(0,l.kt)("td",{parentName:"tr",align:null},"val aud: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exp"),(0,l.kt)("td",{parentName:"tr",align:null},"val exp: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"iat"),(0,l.kt)("td",{parentName:"tr",align:null},"val iat: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"iss"),(0,l.kt)("td",{parentName:"tr",align:null},"val iss: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sub"),(0,l.kt)("td",{parentName:"tr",align:null},"val sub: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))))))}g.isMDXComponent=!0}}]);