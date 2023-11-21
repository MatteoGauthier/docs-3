"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[46829],{49613:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return f}});var n=o(59496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(o),f=r,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return o?n.createElement(m,c(c({ref:t},u),{},{components:o})):n.createElement(m,c({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=o[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7971:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var n=o(665),r=o(40151),a=(o(59496),o(49613)),c=["components"],i={sidebar_label:"Custom social connector with standard protocol",sidebar_position:2},s="Custom Social Connector with Standard Protocols",l={unversionedId:"docs/recipes/configure-connectors/social-connector/custom-social-connector-with-standard-protocols",id:"version-1.x/docs/recipes/configure-connectors/social-connector/custom-social-connector-with-standard-protocols",title:"Custom Social Connector with Standard Protocols",description:"Logto supports standard connectors such as OAuth2.0, OIDC, and SAML, which are widely used for authentication and authorization in many applications and services. With these standard protocols, you can easily configure your specific social connectors to connect external identity providers.",source:"@site/versioned_docs/version-1.x/docs/recipes/configure-connectors/social-connector/custom-social-connector-with-standard-protocols.md",sourceDirName:"docs/recipes/configure-connectors/social-connector",slug:"/docs/recipes/configure-connectors/social-connector/custom-social-connector-with-standard-protocols",permalink:"/docs/recipes/configure-connectors/social-connector/custom-social-connector-with-standard-protocols",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/configure-connectors/social-connector/custom-social-connector-with-standard-protocols.md",tags:[],version:"1.x",sidebarPosition:2,frontMatter:{sidebar_label:"Custom social connector with standard protocol",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Configure popular social connector",permalink:"/docs/recipes/configure-connectors/social-connector/configure-popular-social-connector"},next:{title:"\ud83e\uddd1\u200d\ud83d\udd2c Create your connector",permalink:"/docs/recipes/create-your-connector/"}},u={},d=[{value:"Configure steps",id:"configure-steps",level:2},{value:"Related Readings",id:"related-readings",level:2}],p={toc:d};function f(e){var t=e.components,i=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-social-connector-with-standard-protocols"},"Custom Social Connector with Standard Protocols"),(0,a.kt)("p",null,"Logto supports standard connectors such as OAuth2.0, OIDC, and SAML, which are widely used for authentication and authorization in many applications and services. With these standard protocols, you can easily configure your specific social connectors to connect external identity providers."),(0,a.kt)("p",null,"Follow the README to compose the connector config with little effort."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-oauth2"},"OAuth 2.0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-oidc"},"OIDC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-saml"},"SAML"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We highly recommend using Logto's preinstalled social connectors, including Google, Apple, Facebook, GitHub, Discord, Wechat, Alipay, Kakao, Naver, and Microsoft Azure AD, as they are simple to configure and highly stable.\nOur standard connectors can meet most custom requirements, but if you need a specific connector beyond these, feel free to contact us. For those using the Logto Open-Source Version, you can even ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/create-your-connector/"},"Write your connector"),".")),(0,a.kt)("h2",{id:"configure-steps"},"Configure steps"),(0,a.kt)("p",null,"To add a new standard connector in Logto Console, navigate to \u201c",(0,a.kt)("strong",{parentName:"p"},"Connector > Social connectors"),"\u201d and click the \u201c",(0,a.kt)("strong",{parentName:"p"},"Add Social Connector"),"\u201d button. Then Select the desired social connector type in the Modal that appears and click the \u201c",(0,a.kt)("strong",{parentName:"p"},"Next"),"\u201d button."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Each standard connector can create multiple social connectors!")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add OIDC connector",src:o(63989).Z,width:"2502",height:"1510"})),(0,a.kt)("p",null,"When customizing a standard connector, you will need to configure more general settings, such as the social sign-in button name and logo, and the IdP name."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Name for social sign-in button"),': The name of the connector button will be displayed as "Continue with {{name}}." Be mindful of the naming length in case it gets too long.'),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Logo for social sign-in button"),": Logto also supports adding different logo images for light and dark modes, with the dark mode logo taking effect after enabling Dark Mode in the Sign-in Experience tab of the Console."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Identity provider (IdP) name"),": IdP name is a unique identifier for each social connector and cannot be changed after it's built.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},'When configuring a new Standard connector with a new Identity Provider, you just need to enter a unique "IdP name" that hasn\'t been used before. This will allow you to distinguish the new social connector from others that have been created.'),(0,a.kt)("li",{parentName:"ol"},"If you need to replace an existing social connector with the same identity provider, you must delete the old one and create a new one with the same \u201cIdP name\u201d."),(0,a.kt)("li",{parentName:"ol"},"You can learn more about usage cases of IdP name by visiting the \u201c",(0,a.kt)("a",{parentName:"li",href:"/docs/references/connectors/"},"Recipe: IdP name"),"\u201d."))),(0,a.kt)("li",{parentName:"ol"},"Standard Connector also can choose how to \u201c",(0,a.kt)("strong",{parentName:"li"},"sync user profiles"),"\u201d (such as avatars and usernames). The default setting is to only sync at registration. Still, you can also choose to always sync at each sign-in, but be careful that this may overwrite customized information in your application at user each social sign-in."),(0,a.kt)("li",{parentName:"ol"},"Finally, note that different standard connectors require different configuration parameters. You can refer to the left ",(0,a.kt)("strong",{parentName:"li"},"README")," for guidance on filling out the forms.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Configure OIDC connector",src:o(98147).Z,width:"2506",height:"2562"})),(0,a.kt)("h2",{id:"related-readings"},"Related Readings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"See ",(0,a.kt)("a",{parentName:"li",href:"/docs/recipes/customize-sie/configure-sign-in-methods"},"Configure sign-in method")," by adding connectors to bring your social connector into use.")))}f.isMDXComponent=!0},63989:function(e,t,o){t.Z=o.p+"assets/images/configure-add-oidc-connector-5baf749af33d0a075f0fc678d87f6043.png"},98147:function(e,t,o){t.Z=o.p+"assets/images/configure-oidc-connector-1b13b7f3290ccd1346945196595126e6.png"}}]);