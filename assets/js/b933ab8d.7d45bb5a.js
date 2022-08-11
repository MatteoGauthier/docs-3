"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[2566],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19406:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={sidebar_position:8},s="\ud83d\ude80 Deployment",p={unversionedId:"docs/recipes/deployment/README",id:"docs/recipes/deployment/README",title:"\ud83d\ude80 Deployment",description:"Environment Variables",source:"@site/docs/docs/recipes/deployment/README.md",sourceDirName:"docs/recipes/deployment",slug:"/docs/recipes/deployment/",permalink:"/docs/recipes/deployment/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/deployment/README.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docsSidebar",previous:{title:"\ud83c\udf10 Localization",permalink:"/docs/recipes/localization/"},next:{title:"\ud83d\udcf1 Applications",permalink:"/docs/references/applications/"}},c={},u=[{value:"Environment Variables",id:"environment-variables",level:2},{value:"Essentials",id:"essentials",level:3},{value:"HTTPS",id:"https",level:3},{value:"How can I upgrade Logto safely?",id:"how-can-i-upgrade-logto-safely",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-deployment"},"\ud83d\ude80 Deployment"),(0,a.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"We use a generated preset of environment variables in our demo (",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"), which you should replace with your own and maintain consistency across multiple Logto instances."),(0,a.kt)("p",null,"You can set env directly or put a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file inside the Logto project root. If you are testing with Docker, check out the image's generated ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/logto"),"."),(0,a.kt)("h3",{id:"essentials"},"Essentials"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DB_URL")," The ",(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6"},"Postgres DSN")," for Logto database."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PORT")," The port that Logto listens to. Default ",(0,a.kt)("inlineCode",{parentName:"li"},"3001"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ENDPOINT")," You may specify a URL with your custom domain for production (E.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"ENDPOINT=https://logto.domain.com"),"). This will affect the value of the ",(0,a.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier"},"OIDC issuer identifier")," and Admin Console Redirect URIs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OIDC_COOKIE_KEYS")," The comma-separated string list of the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys"},"signing cookie keys"),". Rotate regularly to keep safety. If you'd like to set multi keys, separate them with comma."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OIDC_PRIVATE_KEYS")," The comma-separated string list of the private key content for ",(0,a.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-core-1_0.html#Signing"},"OIDC JWT signing"),". If you'd like to set this in ",(0,a.kt)("inlineCode",{parentName:"li"},".env"),", you can leverage ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/motdotla/dotenv#multiline-values"},"multiline values")," support. If you'd like to set multi keys, separate them with comma.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How to set up ",(0,a.kt)("inlineCode",{parentName:"strong"},"OIDC_PRIVATE_KEYS")," correctly?")),(0,a.kt)("p",null,"The value format for ",(0,a.kt)("inlineCode",{parentName:"p"},"OIDC_PRIVATE_KEYS")," is as follows (You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"\\n")," to replace newline characters):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'OIDC_PRIVATE_KEYS="-----BEGIN RSA PRIVATE KEY-----\n...\nKh9NV...\n...\n-----END DSA PRIVATE KEY-----,\n-----BEGIN RSA PRIVATE KEY-----\n...\nnOlQ1nS...\n...\n-----END DSA PRIVATE KEY-----"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"I prefer using ",(0,a.kt)("inlineCode",{parentName:"strong"},".pem")," files for my OIDC private keys. What should I do?")),(0,a.kt)("p",null,"Just leave ",(0,a.kt)("inlineCode",{parentName:"p"},"OIDC_PRIVATE_KEYS")," empty, and set the path of your ",(0,a.kt)("inlineCode",{parentName:"p"},".pem")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"OIDC_PRIVATE_KEY_PATHS")," list. It has a default value of ",(0,a.kt)("inlineCode",{parentName:"p"},"'./oidc-private-key.pem'"),"."),(0,a.kt)("p",null,"You can set multi paths by separating them with comma. E.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"oidc-private-key1.pem, oidc-private-key-2.pem"),"."),(0,a.kt)("p",null,"For more details about environment variables, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/core/configuration"},"Configuration"),"."),(0,a.kt)("h3",{id:"https"},"HTTPS"),(0,a.kt)("p",null,"You may use Node.js to serve HTTPS directly or set up an HTTPS proxy/balancer in front of Node.js. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/core/configuration#enabling-https"},"Enabling HTTPS")," for details."),(0,a.kt)("h2",{id:"how-can-i-upgrade-logto-safely"},"How can I upgrade Logto safely?"),(0,a.kt)("p",null,"If we don't mention it in the changelog, you can feel free to upgrade Logto without changing your code or database schema. Our API follows ",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/"},"semver"),"."),(0,a.kt)("p",null,"We'll build a smooth database migration process and demonstrate it in our changelog if a schema change is inevitable. You'll be able to do that with chill."))}d.isMDXComponent=!0}}]);