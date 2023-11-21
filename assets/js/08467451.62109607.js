"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[2080],{49613:function(e,o,t){t.d(o,{Zo:function(){return u},kt:function(){return d}});var n=t(59496);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),l=function(e){var o=n.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):c(c({},o),e)),t},u=function(e){var o=l(e.components);return n.createElement(s.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return t?n.createElement(f,c(c({ref:o},u),{},{components:t})):n.createElement(f,c({ref:o},u))}));function d(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=m;var a={};for(var s in o)hasOwnProperty.call(o,s)&&(a[s]=o[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},44744:function(e,o,t){t.r(o),t.d(o,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var n=t(665),r=t(40151),i=(t(59496),t(49613)),c=["components"],a={sidebar_position:1,sidebar_label:"Email connector"},s="Configure Email Connector",l={unversionedId:"docs/recipes/configure-connectors/email-connector/README",id:"version-1.x/docs/recipes/configure-connectors/email-connector/README",title:"Configure Email Connector",description:"Configuring an Email connector allows you to send a one-time password (OTP) to the user's email address ( Magic link will be supported in the future ). Email connector usage is similar to SMS connector, which can be utilized in various scenarios, including sign-up, sign-in, forgot password, and link-account processes, to validate the user's identity.",source:"@site/versioned_docs/version-1.x/docs/recipes/configure-connectors/email-connector/README.md",sourceDirName:"docs/recipes/configure-connectors/email-connector",slug:"/docs/recipes/configure-connectors/email-connector/",permalink:"/docs/recipes/configure-connectors/email-connector/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/configure-connectors/email-connector/README.md",tags:[],version:"1.x",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Email connector"},sidebar:"docsSidebar",previous:{title:"\ud83e\ude9b Configure connectors",permalink:"/docs/recipes/configure-connectors/"},next:{title:"Configure Logto email service",permalink:"/docs/recipes/configure-connectors/email-connector/configure-logto-email-service"}},u={},p=[],m={toc:p};function d(e){var o=e.components,a=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-email-connector"},"Configure Email Connector"),(0,i.kt)("p",null,"Configuring an Email connector allows you to send a one-time password (OTP) to the user's email address ( Magic link will be supported in the future ). Email connector usage is similar to SMS connector, which can be utilized in various scenarios, including sign-up, sign-in, forgot password, and link-account processes, to validate the user's identity."),(0,i.kt)("p",null,"We provide Logto built-in email service for your online usage or onboarding. It is completely free to use and doesn\u2019t require any additional configuration. You just need to customize your basic brand information for email templates:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-logto-email"},"Logto email service"))),(0,i.kt)("p",null,"Alternatively, you have the option to connect with other email service providers that Logto offers out-of-box usage. With these providers, you can customize your email templates freely:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-aws-ses"},"AWS direct mail connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-sendgrid-email"},"SendGrid mail connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-smtp"},"SMTP connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-aliyun-dm"},"Aliyun direct mail connector"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add an Email connector on Logto cloud",src:t(56989).Z,width:"2880",height:"1300"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We're still working on more connectors! But If you don't see the connector you want, just let us know your needs in Discord or file a Feature Request on GitHub.\nFor those using the Logto Open-Source Version, we offer the flexibility to ",(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/create-your-connector/"},"create your own connector")," to extend.")))}d.isMDXComponent=!0},56989:function(e,o,t){o.Z=t.p+"assets/images/add-an-email-connector-in-logto-cloud-e7d5fb0aad5e8773f2d49a215a29f379.webp"}}]);