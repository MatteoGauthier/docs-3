"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[52154],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,g=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91125:function(e,t,n){n.d(t,{Z:function(){return i}});n(59496);var r=n(45924),a="tabItem_rXKf",o=n(4637);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:n,children:t})}},6228:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(59496),a=n(45924),o=n(70632),i=n(5734),l=n(37401),u=n(80587),s=n(32131);function c(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,i.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,l._X)(u),(0,r.useCallback)((function(e){if(u){var t=new URLSearchParams(o.location.search);t.set(u,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[u,o])]}function g(e){var t,n,a,o,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,c=e.groupId,g=p(e),m=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:g})})),y=m[0],b=m[1],v=f({queryString:u,groupId:c}),k=v[0],h=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),x=w[0],O=w[1],T=function(){var e=null!=k?k:x;return d({value:e,tabValues:g})?e:null}();return(0,r.useLayoutEffect)((function(){T&&b(T)}),[T]),{selectedValue:y,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);b(e),h(e),O(e)}),[h,O,g]),tabValues:g}}var m=n(15800),y="tabList_p_G8",b="tabItem_prV4",v=n(4637);function k(e){var t=e.className,n=e.block,r=e.selectedValue,i=e.selectValue,l=e.tabValues,u=[],s=(0,o.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=u.indexOf(t),a=l[n].value;a!==r&&(s(t),i(a))},p=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=u.indexOf(e.currentTarget)+1;n=null!=(r=u[a])?r:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;n=null!=(o=u[i])?o:u[u.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return u.push(e)},onKeyDown:p,onClick:c},o,{className:(0,a.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function h(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function w(e){var t=g(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",y),children:[(0,v.jsx)(k,Object.assign({},e,t)),(0,v.jsx)(h,Object.assign({},e,t))]})}function x(e){var t=(0,m.Z)();return(0,v.jsx)(w,Object.assign({},e),String(t))}},29055:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var r=n(665),a=n(40151),o=(n(59496),n(49613)),i=n(91125),l=n(6228),u=["components"],s={},c="Rotate signing keys",p={unversionedId:"docs/tutorials/using-cli/rotate-signing-keys",id:"docs/tutorials/using-cli/rotate-signing-keys",title:"Rotate signing keys",description:"Added in v1.8.0",source:"@site/docs/docs/tutorials/using-cli/rotate-signing-keys.mdx",sourceDirName:"docs/tutorials/using-cli",slug:"/docs/tutorials/using-cli/rotate-signing-keys",permalink:"/next/docs/tutorials/using-cli/rotate-signing-keys",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/tutorials/using-cli/rotate-signing-keys.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Migrate configs from env",permalink:"/next/docs/tutorials/using-cli/migrate-from-env"},next:{title:"\ud83d\udd17 Integrate Logto in your application",permalink:"/next/docs/recipes/integrate-logto/"}},d={},f=[{value:"Rotate OIDC private signing keys",id:"rotate-oidc-private-signing-keys",level:2},{value:"Rotate OIDC cookie keys",id:"rotate-oidc-cookie-keys",level:2},{value:"What about the previous keys?",id:"what-about-the-previous-keys",level:2}],g={toc:f};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rotate-signing-keys"},"Rotate signing keys"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Added in v1.8.0")),(0,o.kt)("p",null,"Logto OIDC signing keys, as known as \u201cOIDC private keys\u201d and \u201cOIDC cookie keys\u201d, are the signing keys used to encrypt JWT tokens (access tokens and ID tokens) and browser cookies in Logto sign-in sessions."),(0,o.kt)("p",null,"Rotate your signing keys regularly can reduce the risks of potential key compromise. Logto recommends you to rotate your signing keys at least once a year."),(0,o.kt)("h2",{id:"rotate-oidc-private-signing-keys"},"Rotate OIDC private signing keys"),(0,o.kt)("p",null,"Use the CLI command below to generate a new OIDC private signing key. The new key will be automatically utilized after reboot."),(0,o.kt)("p",null,"Available options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--type    (Optional) The signing key algorithm for your JWT tokens.\n          Values are "rsa" or "ec". Defaults to "ec".\n')),(0,o.kt)(l.Z,{groupId:"cmd",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"logto db config rotate oidc.privateKeys --type rsa\n"))),(0,o.kt)(i.Z,{value:"Local",label:"local",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run cli db config rotate oidc.privateKeys -- --type rsa\n"))),(0,o.kt)(i.Z,{value:"npx",label:"npx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli db config rotate oidc.privateKeys -- --type rsa\n")))),(0,o.kt)("h2",{id:"rotate-oidc-cookie-keys"},"Rotate OIDC cookie keys"),(0,o.kt)("p",null,"Use the CLI command below to generate a new OIDC cookie key. The new key will be automatically utilized after reboot."),(0,o.kt)(l.Z,{groupId:"cmd",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"logto db config rotate oidc.cookieKeys\n"))),(0,o.kt)(i.Z,{value:"Local",label:"local",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run cli db config rotate oidc.cookieKeys\n"))),(0,o.kt)(i.Z,{value:"npx",label:"npx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli db config rotate oidc.cookieKeys\n")))),(0,o.kt)("h2",{id:"what-about-the-previous-keys"},"What about the previous keys?"),(0,o.kt)("p",null,"Logto key rotation commands will not delete your previous signing keys, and they will be kept in the database unless you manually delete them."),(0,o.kt)("p",null,"Also, be cautious when deleting your previous keys, as it may cause unexpected issues. It is recommended to keep both the new key and the previous key for a period of time (e.g. 2 weeks), until you are confident that all your users have migrated to the new key."))}m.isMDXComponent=!0}}]);