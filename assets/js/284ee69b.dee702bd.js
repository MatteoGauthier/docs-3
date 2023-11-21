"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[79426],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},95917:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=n(665),i=n(40151),o=(n(59496),n(49613)),r=["components"],l={date:new Date("2023-02-26T00:00:00.000Z"),authors:"gao",tags:["release"]},s="Logto 2023 February Update (Extended)",u={permalink:"/blog/releases/2023-feb-extended",source:"@site/blog/releases/2023-feb-extended.md",title:"Logto 2023 February Update (Extended)",description:"While Logto Cloud is still under construction, we would like to introduce some new features to our foundation, Logto OSS. This will be the last version before general availability.",date:"2023-02-26T00:00:00.000Z",formattedDate:"February 26, 2023",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:5.61,hasTruncateMarker:!0,authors:[{name:"Gao",title:"Founder of Silverhand",url:"https://github.com/gao-sun",imageURL:"https://github.com/gao-sun.png",key:"gao"}],frontMatter:{date:"2023-02-26T00:00:00.000Z",authors:"gao",tags:["release"]},prevItem:{title:"Announcing Logto Cloud (Preview) and OSS General Availability",permalink:"/blog/announcing-logto-cloud-preview"},nextItem:{title:"Do you need to build your own auth for apps?",permalink:"/blog/do-you-need-to-build-auth"}},p={authorsImageUrls:[void 0]},d=[{value:"\ud83d\udca5 BREAKING CHANGES \ud83d\udca5",id:"-breaking-changes-",level:2},{value:"Decouple normal users and admins",id:"decouple-normal-users-and-admins",level:3},{value:"CORS policy",id:"cors-policy",level:3},{value:"\ud83d\udd10 Security update",id:"-security-update",level:2},{value:"\ud83e\uddd1\u200d\ud83d\ude80 Feature update",id:"-feature-update",level:2},{value:"\ud83d\udca1 Smart Input for Sign-in Experience",id:"-smart-input-for-sign-in-experience",level:3},{value:"\ud83c\udfa8 Customize CSS in Sign-in Experience",id:"-customize-css-in-sign-in-experience",level:3},{value:"\ud83d\udd17 Open standard connectors with better config interface",id:"-open-standard-connectors-with-better-config-interface",level:3},{value:"\ud83d\udcc4 New language",id:"-new-language",level:3},{value:"\ud83c\udf89 New Contributors",id:"-new-contributors",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"While Logto Cloud is still under construction, we would like to introduce some new features to our foundation, Logto OSS. This will be the last version before general availability.")),(0,o.kt)("p",null,"Notable updates include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Refactored infrastructure and enhanced security"),(0,o.kt)("li",{parentName:"ul"},"Smart Input and Customize CSS added to Sign-in Experience"),(0,o.kt)("li",{parentName:"ul"},"Open standard connectors (SAML, OIDC, and OAuth 2.0)"),(0,o.kt)("li",{parentName:"ul"},"New language support")),(0,o.kt)("p",null,"Let's take a look at what's inside!"),(0,o.kt)("h2",{id:"-breaking-changes-"},"\ud83d\udca5 BREAKING CHANGES \ud83d\udca5"),(0,o.kt)("h3",{id:"decouple-normal-users-and-admins"},"Decouple normal users and admins"),(0,o.kt)("p",null,"Logto was using a single port to serve both normal users and admins, as well as the web console. While we continuously maintain a high level of security, it\u2019ll still be great to decouple these components into two separate parts to keep data isolated and provide a flexible infrastructure."),(0,o.kt)("img",{width:"737",alt:"image",src:"https://user-images.githubusercontent.com/14722250/221365507-6f20a804-1059-4933-9b88-df1244ab900b.png"}),(0,o.kt)("p",null,"From this version, Logto now listens to two ports by default, one for normal users (",(0,o.kt)("inlineCode",{parentName:"p"},"3001"),"), and one for admins (",(0,o.kt)("inlineCode",{parentName:"p"},"3002"),")."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"\u203c\ufe0f Click to expand details")),(0,o.kt)("p",null,(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nothing changed for normal users. No adaption is needed."),(0,o.kt)("li",{parentName:"ul"},"For admin users:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The default Admin Console URL has been changed to ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3002/console"),"."),(0,o.kt)("li",{parentName:"ul"},"To change the admin port, set the environment variable ",(0,o.kt)("inlineCode",{parentName:"li"},"ADMIN_PORT"),". For instance, ",(0,o.kt)("inlineCode",{parentName:"li"},"ADMIN_PORT=3456"),"."),(0,o.kt)("li",{parentName:"ul"},"You can specify a custom endpoint for admins by setting the environment variable ",(0,o.kt)("inlineCode",{parentName:"li"},"ADMIN_ENDPOINT"),". For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"ADMIN_ENDPOINT=https://admin.your-domain.com"),"."),(0,o.kt)("li",{parentName:"ul"},"You can now completely disable admin endpoints by setting ",(0,o.kt)("inlineCode",{parentName:"li"},"ADMIN_DISABLE_LOCALHOST=1")," and leaving ",(0,o.kt)("inlineCode",{parentName:"li"},"ADMIN_ENDPOINT")," unset."),(0,o.kt)("li",{parentName:"ul"},"Admin Console and admin user data are not accessible via normal user endpoints, including ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ENDPOINT")," from the environment."),(0,o.kt)("li",{parentName:"ul"},"Admin Console no longer displays audit logs of admin users. However, these logs still exist in the database, and Logto still inserts admin user logs. There is just no convenient interface to inspect them."),(0,o.kt)("li",{parentName:"ul"},"Due to the data isolation, the numbers on the dashboard may slightly decrease (admins are excluded)."))),(0,o.kt)("li",{parentName:"ul"},"Resource Indicator for Logto Management API changed from ",(0,o.kt)("inlineCode",{parentName:"li"},"https://[your-tenant-id].logto.app/api")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"https://default.logto.app/api"),".")))),(0,o.kt)("p",null,"If you are upgrading from a previous version, simply run the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.logto.io/docs/tutorials/using-cli/database-alteration"},"database alteration command")," as usual, and we'll take care of the rest."),(0,o.kt)("admonition",{type:"success"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},(0,o.kt)("em",{parentName:"strong"},"DID YOU KNOW?"))),(0,o.kt)("p",{parentName:"admonition"},"Under the hood, we use the powerful Postgres feature Row-Level Security to isolate admin and user data.")),(0,o.kt)("h3",{id:"cors-policy"},"CORS policy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"ADMIN_ENDPOINT")," is not specified, ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:[admin-port]")," will be allowed to perform Cross-Origin Resource Sharing (CORS) in Logto."),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"ADMIN_ENDPOINT")," is specified, only requests from the origin of ",(0,o.kt)("inlineCode",{parentName:"li"},"ADMIN_ENDPOINT")," will be allowed.")),(0,o.kt)("h2",{id:"-security-update"},"\ud83d\udd10 Security update"),(0,o.kt)("p",null,"In previous versions, when registering or changing passwords, all new passwords were stored in plain text in the Audit Logs before being encrypted and inserted into the database."),(0,o.kt)("p",null,"In this version, we have updated the process to fully mask password fields before inserting them into the Audit Logs."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"For enhanced security and compliance, we strongly recommend removing all passwords from the Audit Logs or deleting all logs that include passwords.")),(0,o.kt)("p",null,"If you have any questions regarding this issue or the removal of data, please do not hesitate to contact us via email or Discord."),(0,o.kt)("h2",{id:"-feature-update"},"\ud83e\uddd1\u200d\ud83d\ude80 Feature update"),(0,o.kt)("h3",{id:"-smart-input-for-sign-in-experience"},"\ud83d\udca1 Smart Input for Sign-in Experience"),(0,o.kt)("p",null,"We have integrated the traditional input fields for username, phone number, and email into a single intelligent input box:"),(0,o.kt)("p",null,(0,o.kt)("video",{src:"https://user-images.githubusercontent.com/14722250/221401902-cc9bcd91-160c-4058-91ce-1e8a7bdfc842.mov"})),(0,o.kt)("p",null,"This advanced input box automatically identifies the type of characters you\u2019re entering, such as an ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," sign or consecutive numbers, and provides relevant error feedback."),(0,o.kt)("p",null,"By streamlining the sign-in process, users no longer need to waste time figuring out which button to click to switch their desired login method. This reduces the risk of errors and ensures a smoother sign-in experience."),(0,o.kt)("h3",{id:"-customize-css-in-sign-in-experience"},"\ud83c\udfa8 Customize CSS in Sign-in Experience"),(0,o.kt)("p",null,"We have put a lot of effort into improving the user sign-in experience and have provided a brand color option for the UI. However, we know that fine-tuning UI requirements can be unpredictable. While Logto is still exploring the best options for customization, we want to provide a programmatic method to unblock your development."),(0,o.kt)("p",null,"You can now use the Management API ",(0,o.kt)("inlineCode",{parentName:"p"},"PATCH /api/sign-in-exp")," with body ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "customCss": "arbitrary string" }')," to set customized CSS for the sign-in experience. You should see the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"customCss")," attached after ",(0,o.kt)("inlineCode",{parentName:"p"},"<title>")," of the page. If the style has a higher priority, it should be able to override."),(0,o.kt)("p",null,"For instance, if you want to give your sign-in page a feel of the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Night City")),", try this CSS:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Click to expand CSS and preview")),(0,o.kt)("p",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"@font-face { font-family: 'Rock Salt'; font-style: normal; font-weight: 400; font-display: swap; src: url(https://fonts.gstatic.com/s/rocksalt/v18/MwQ0bhv11fWD6QsAVOZrt0M6p7NGrQ.woff2) format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n@font-face { font-family: 'Share Tech'; font-style: normal; font-weight: 400; font-display: swap; src: url(https://fonts.gstatic.com/s/sharetech/v17/7cHtv4Uyi5K0OeZ7bohU8H0JmBUhfrE.woff2) format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n#app * { font-family: 'Share Tech'; letter-spacing: 0.5px; }\n#app > div[class$=viewBox] { background-image: url(https://silverhand.io/assets/v-in-nc.jpg); background-size: cover; }\n#app main[class$=main] { background-image: url(https://silverhand.io/assets/gentle-universe.png); background-size: cover; opacity: 0.98; min-height: initial; padding: 24px; padding-bottom: 72px; border-radius: 12px; }\n#app main[class$=main] img[class$=logo] { content: url(https://silverhand.io/assets/cyberpunk-2077.png); margin: -20px 0 -12px; height: 160px; }\n#app main[class$=main] div[class$=headline] { visibility: hidden; height: 60px; }\n#app main[class$=main] div[class$=headline]:before { content: 'Welcome to Night City'; visibility: visible; display: block; font-family: 'Rock Salt'; font-style: italic; line-height: 60px; font-size: 20px; color: rgba(245,250,255,0.6); padding: 0 20px; }\n#app form div[class$=inputField] > div { outline: none; border: none; border-radius: 4px; }\n#app form div[class$=inputField] > div > input, #app form div[class$=inputField] div[class$=countryCodeSelector] { background: initial; background-color: #453f67; font-family: 'Share Tech'; letter-spacing: 0.5px; font-size: 16px; font-weight: 600; }\n#app button { font-weight: 600; font-size: 16px; border-radius: 4px; }\n#app button[type=submit] { background: linear-gradient(270.84deg, #2FD6FB -24.55%, #6369FC 44.33%, #A741EB 119.2%), #5D34F2; }\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/14722250/221394786-4ae77638-8f35-4791-afae-8ab6a314dbf8.jpg",alt:"custom-css-preview"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'"We have a city to burn!"'))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Since Logto uses CSS Modules, you may see a hash value in the ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," property of DOM elements (e.g. a ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"vUugRG_container"),")."),(0,o.kt)("p",{parentName:"admonition"},"To override these, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"$=")," CSS selector to match elements that end with a specified value. In this case, it should be ",(0,o.kt)("inlineCode",{parentName:"p"},"div[class$=container]"),".")),(0,o.kt)("h3",{id:"-open-standard-connectors-with-better-config-interface"},"\ud83d\udd17 Open standard connectors with better config interface"),(0,o.kt)("p",null,"Logto now supports standard protocols (SAML, OIDC, and OAuth 2.0) for creating social connectors to integrate external identity providers. Each protocol can create multiple social connectors, giving you more control over your access needs."),(0,o.kt)("p",null,"Plus, we optimized the config interface for SAML connectors. Try it and let us know your feeling!"),(0,o.kt)("h3",{id:"-new-language"},"\ud83d\udcc4 New language"),(0,o.kt)("p",null,"Added Russian translation. (credit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/evist0"},"@evist0"),")"),(0,o.kt)("h2",{id:"-new-contributors"},"\ud83c\udf89 New Contributors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Alanimdeo"},"@Alanimdeo")," made their first contribution in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/pull/3064"},"#3064")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/gadkins"},"@gadkins")," made their first contribution in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/pull/3032"},"#3032")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/evist0"},"@evist0")," made their first contribution in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/pull/3158"},"#3158")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/muratgozel"},"@muratgozel")," made their first contribution in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/pull/3203"},"#3203"))),(0,o.kt)("p",null,"Thank you!"))}m.isMDXComponent=!0}}]);