"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[51251],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return n?o.createElement(g,r(r({ref:t},u),{},{components:n})):o.createElement(g,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6850:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[{value:"Enable Sign in with Apple for your app",id:"enable-sign-in-with-apple-for-your-app",level:3},{value:"Create an identifier",id:"create-an-identifier",level:3},{value:"Enable Sign in with Apple for your identifier",id:"enable-sign-in-with-apple-for-your-identifier",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3}]};function p(e){var t=e.components,p=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Note")),(0,a.kt)("p",{parentName:"blockquote"},"Apple sign-in is required for AppStore if you have other social sign-in methods in your app.\nHaving Apple sign-in on Android devices is great if you also provide an Android app.")),(0,a.kt)("p",null,"You need to enroll ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/programs/"},"Apple Developer Program")," before continuing."),(0,a.kt)("h3",{id:"enable-sign-in-with-apple-for-your-app"},"Enable Sign in with Apple for your app"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Caution")),(0,a.kt)("p",{parentName:"blockquote"},"Even if you want to implement Sign in with Apple on a web app only, you still need to have an existing app that embraces the AppStore ecosystem (i.e., have a valid App ID).")),(0,a.kt)("p",null,"You can do it via Xcode -> Project settings -> Signing & Capabilities, or visit ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/account/resources/identifiers/list/bundleId"},"Certificates, Identifiers & Profiles"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Enable Sign in with Apple",src:n(77952).Z,width:"1220",height:"398"})),(0,a.kt)("p",null,'See the "Enable an App ID" section in ',(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/sign_in_with_apple/configuring_your_environment_for_sign_in_with_apple"},"Apple official docs")," for more info."),(0,a.kt)("h3",{id:"create-an-identifier"},"Create an identifier"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Visit ",(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/account/resources/identifiers/list/serviceId"},"Certificates, Identifiers & Profiles"),', then click the "+" button next to "Identifier".'),(0,a.kt)("li",{parentName:"ol"},'In the "Register a new identifier" page, choose "Services IDs" and click "Continue".'),(0,a.kt)("li",{parentName:"ol"},'Fill out "Description" and "Identifier" (E.g., ',(0,a.kt)("inlineCode",{parentName:"li"},"Logto Test")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"io.logto.test"),'), then click "Continue".'),(0,a.kt)("li",{parentName:"ol"},'Double-check the info and click "Register".')),(0,a.kt)("h3",{id:"enable-sign-in-with-apple-for-your-identifier"},"Enable Sign in with Apple for your identifier"),(0,a.kt)("p",null,'Click the identifier you just created. Check "Sign in with Apple" on the details page and click "Configure".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Enable Sign in with Apple",src:n(82736).Z,width:"1170",height:"186"})),(0,a.kt)("p",null,"In the opening modal, select the App ID you just enabled Sign in with Apple."),(0,a.kt)("p",null,"Enter the domain of your Logto instance without protocol and port, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"your.logto.domain"),'; then enter the "Return URL" (i.e., Redirect URI), which is the Logto URL with ',(0,a.kt)("inlineCode",{parentName:"p"},"/callback/${connector_id}"),", e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"https://your.logto.domain/callback/apple-universal"),". You can get the randomly generated ",(0,a.kt)("inlineCode",{parentName:"p"},"connector_id")," after creating Apple connector in Admin Console."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"domain-and-url",src:n(20836).Z,width:"988",height:"668"})),(0,a.kt)("p",null,'Click "Next" then "Done" to close the modal. Click "Continue" on the top-right corner, then click "Save" to save your configuration.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Caution")),(0,a.kt)("p",{parentName:"blockquote"},"Apple does NOT allow Return URLs with HTTP protocol and ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," domain."),(0,a.kt)("p",{parentName:"blockquote"},"If you want to test locally, you need to edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," file to map localhost to a custom domain and set up a local HTTPS environment. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FiloSottile/mkcert"},"mkcert")," can help you for setting up local HTTPS.")),(0,a.kt)("h3",{id:"compose-the-connector-json"},"Compose the connector JSON"),(0,a.kt)("p",null,"You need to use the identifier that fills in the ",(0,a.kt)("a",{parentName:"p",href:"#create-an-identifier"},"Create an identifier")," section to compose the JSON:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clientId": "io.logto.test"\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Note")),(0,a.kt)("p",{parentName:"blockquote"},"This connector doesn't support customizing ",(0,a.kt)("inlineCode",{parentName:"p"},"scope")," (e.g., name, email) yet since Apple requires ",(0,a.kt)("inlineCode",{parentName:"p"},"form_post")," response mode when ",(0,a.kt)("inlineCode",{parentName:"p"},"scope")," is not empty, which is incompatible with the current connector design."),(0,a.kt)("p",{parentName:"blockquote"},"We'll figure out this later.")))}p.isMDXComponent=!0},11420:function(e,t,n){n.d(t,{ZP:function(){return h}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n(1432),l=n(56165),p=n(75529),c=n(71628),u=n(84751),s=n(40510),d=n(9107),m=["components"],g={toc:[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:2},{value:"Init LogtoClient",id:"init-logtoclient",level:2},{value:"Sign in",id:"sign-in",level:2},{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3},{value:"Sign in",id:"sign-in-1",level:3}]};function h(e){var t=e.components,n=(0,i.Z)(e,m);return(0,a.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,a.kt)(r.ZP,{mdxType:"AddSdk"}),(0,a.kt)("h2",{id:"init-logtoclient"},"Init LogtoClient"),(0,a.kt)(c.ZP,{mdxType:"InitClient"}),(0,a.kt)("h2",{id:"sign-in"},"Sign in"),(0,a.kt)("h3",{id:"configure-redirect-uri"},"Configure Redirect URI"),(0,a.kt)(l.ZP,{mdxType:"ConfigAndroidRedirectUri"}),(0,a.kt)(s.ZP,{figureSrc:u.Z,redirectUri:"io.logto.android://io.logto.sample/callback",mdxType:"ConfigureRedirectUri"}),(0,a.kt)("h3",{id:"sign-in-1"},"Sign in"),(0,a.kt)(p.ZP,{mdxType:"ImplementSignIn"}),(0,a.kt)(d.ZP,{sdk:"Android",mdxType:"TestYourIntegration"}))}h.isMDXComponent=!0},74832:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(e){var t=e.components,p=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connector tab",src:n(43157).Z,width:"3352",height:"1226"})),(0,a.kt)("p",null,'In the openning modal, select "',p.connector,'" and click "Next".'),(0,a.kt)("p",null,"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."),(0,a.kt)("p",null,"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."))}p.isMDXComponent=!0},18397:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n.p+"assets/images/create-application-modal-a9838383da54c969256d05557ca13639.png",l=["components"],p={toc:[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}]};function c(e){var t=e.components,c=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In you browser, open a new tab and enter the link of Logto Admin Console."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create application",src:n(81601).Z,width:"2368",height:"226"})),(0,a.kt)("p",null,'Once the page is loaded, in the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab.'),(0,a.kt)("h3",{id:"choose-your-application-type"},"Choose your application type"),(0,a.kt)("p",null,'In the opening modal, select the "',c.type,'" option as the application type.'),(0,a.kt)("img",{src:r,alt:"Create Application modal",width:"700"}),(0,a.kt)("h3",{id:"enter-application-name"},"Enter application name"),(0,a.kt)("p",null,'Enter the application name, e.g., "Bookstore," and click "Create Application."'),(0,a.kt)("p",null,"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."))}c.isMDXComponent=!0},46064:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(e){var t=e.components,p=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sign-in Experience tab",src:n(26109).Z,width:"3160",height:"1822"})),(0,a.kt)("p",null,'Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',p.connector," ","sign-in, which may increase your conversion rate."),(0,a.kt)("p",null,'In the "Social sign-in" section, add "Add Social Connector" and choose "',p.connector,'". Then you should be able to see a button with text "Continue with ',p.connector,'" in the preview section.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Save changes",src:n(53225).Z,width:"2474",height:"188"})),(0,a.kt)("p",null,'Finally, click "Save Changes" on the bottom right corner.'))}p.isMDXComponent=!0},80485:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"For our new friends",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://logto.io"},"Logto")," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control.")),(0,a.kt)("p",null,"In this article, we will go through the steps to quickly build the ",n.connector," sign-in experience (user authentication) with"," ",(0,a.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),(0,a.kt)("span",null," and "),(0,a.kt)("a",{href:"https://logto.io",target:"_blank",rel:"noopener"},"Logto"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prerequisites")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A running Logto instance. Check out the ",(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/"},"get started page")," if you don't have one."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",null,"Basic knowledge of"," ",(0,a.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",null,"A usable ",n.connector," account."))))}p.isMDXComponent=!0},76358:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Double check you have filled out necessary values in the Logto connector configuration area. Click "Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."))}p.isMDXComponent=!0},9107:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Test your integration",type:"info"},(0,a.kt)("p",null,"Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button, the page should be redirected to a Logto sign-in page, and you should be able to create a new account by entering username and password and complete the sign-in process.')))}p.isMDXComponent=!0},19008:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"))}p.isMDXComponent=!0},39783:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},connector:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=(n(80485),n(18397),n(74832),n(76358),n(46064),n(19008),n(11420),n(6850),["components"]),l={slug:"how-to-build-apple-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","apple","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Apple sign-in with Android and Logto"},p=void 0,c={permalink:"/tutorial/how-to-build-apple-sign-in-with-android-and-logto",source:"@site/tutorial/build-with-logto/generated-android-apple.mdx",title:"How to build Apple sign-in with Android and Logto",description:"\x3c!--",date:"2023-11-21T07:59:23.492Z",formattedDate:"November 21, 2023",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"apple",permalink:"/tutorial/tags/apple"},{label:"android",permalink:"/tutorial/tags/android"},{label:"kotlin/java",permalink:"/tutorial/tags/kotlin-java"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.275,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-apple-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","apple","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Apple sign-in with Android and Logto"},prevItem:{title:"How to build SendGrid Email passwordless sign-in with Vanilla JS and Logto",permalink:"/tutorial/how-to-build-sendgrid-sign-in-with-vanilla-js-and-logto"},nextItem:{title:"How to build Azure AD sign-in with Android and Logto",permalink:"/tutorial/how-to-build-azure-ad-sign-in-with-android-and-logto"}},u={authorsImageUrls:[void 0]},s=[],d="Apple",m={toc:s,connector:d};function g(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}))}g.isMDXComponent=!0},91125:function(e,t,n){n.d(t,{Z:function(){return r}});n(59496);var o=n(45924),i="tabItem_rXKf",a=n(4637);function r(e){var t=e.children,n=e.hidden,r=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n,children:t})}},6228:function(e,t,n){n.d(t,{Z:function(){return C}});var o=n(59496),i=n(45924),a=n(70632),r=n(5734),l=n(37401),p=n(80587),c=n(32131);function u(e){return function(e){var t,n;return null!=(t=null==(n=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function s(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:u(n);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,i=e.groupId,a=(0,r.k6)(),p=function(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:n,groupId:i});return[(0,l._X)(p),(0,o.useCallback)((function(e){if(p){var t=new URLSearchParams(a.location.search);t.set(p,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[p,a])]}function g(e){var t,n,i,a,r=e.defaultValue,l=e.queryString,p=void 0!==l&&l,u=e.groupId,g=s(e),h=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var i=null!=(t=o.find((function(e){return e.default})))?t:o[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:r,tabValues:g})})),f=h[0],k=h[1],v=m({queryString:p,groupId:u}),b=v[0],y=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),i=n[0],a=n[1],[i,(0,o.useCallback)((function(e){t&&a.set(e)}),[t,a])]),C=w[0],N=w[1],T=function(){var e=null!=b?b:C;return d({value:e,tabValues:g})?e:null}();return(0,o.useLayoutEffect)((function(){T&&k(T)}),[T]),{selectedValue:f,selectValue:(0,o.useCallback)((function(e){if(!d({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),N(e)}),[y,N,g]),tabValues:g}}var h=n(15800),f="tabList_p_G8",k="tabItem_prV4",v=n(4637);function b(e){var t=e.className,n=e.block,o=e.selectedValue,r=e.selectValue,l=e.tabValues,p=[],c=(0,a.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=p.indexOf(t),i=l[n].value;i!==o&&(c(t),r(i))},s=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var o,i=p.indexOf(e.currentTarget)+1;n=null!=(o=p[i])?o:p[0];break;case"ArrowLeft":var a,r=p.indexOf(e.currentTarget)-1;n=null!=(a=p[r])?a:p[p.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,a=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:function(e){return p.push(e)},onKeyDown:s,onClick:u},a,{className:(0,i.Z)("tabs__item",k,null==a?void 0:a.className,{"tabs__item--active":o===t}),children:null!=n?n:t}),t)}))})}function y(e){var t=e.lazy,n=e.children,i=e.selectedValue,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var r=a.find((function(e){return e.props.value===i}));return r?(0,o.cloneElement)(r,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==i})}))})}function w(e){var t=g(e);return(0,v.jsxs)("div",{className:(0,i.Z)("tabs-container",f),children:[(0,v.jsx)(b,Object.assign({},e,t)),(0,v.jsx)(y,Object.assign({},e,t))]})}function C(e){var t=(0,h.Z)();return(0,v.jsx)(w,Object.assign({},e),String(t))}},1432:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n(91125),l=n(6228),p=["components"],c={toc:[]};function u(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The minimum supported Android API level of Logto Andorid SDK is level 24.")),(0,a.kt)("p",null,"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"mavenCentral()")," repository to your Gradle project build file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"repositories {\n    mavenCentral()\n}\n")),(0,a.kt)("p",null,"Add Logto Android SDK to your dependencies:"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation("io.logto.sdk:android:1.0.0-alpha.0")\n}\n'))),(0,a.kt)(r.Z,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'io.logto.sdk:android:1.0.0-alpha.0'\n}\n")))))}u.isMDXComponent=!0},56165:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In Android, the Redirect URI follows the pattern: ",(0,a.kt)("inlineCode",{parentName:"p"},"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"LOGTO_REDIRECT_SCHEME")," should be a custom scheme in the reverse domain format.",(0,a.kt)("br",{parentName:"p"}),"\n","The ",(0,a.kt)("inlineCode",{parentName:"p"},"YOUR_APP_PACKAGE")," is your app package name.")),(0,a.kt)("p",null,"Assuming you treat ",(0,a.kt)("inlineCode",{parentName:"p"},"io.logto.android")," as the custom ",(0,a.kt)("inlineCode",{parentName:"p"},"LOGTO_REDIRECT_SCHEME"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"io.logto.sample")," is your app package name, the Redirect URI should be ",(0,a.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback"),"."),(0,a.kt)("p",null,"Now you can configure the Redirect URI in the admin console (Take ",(0,a.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback")," as an example)."))}p.isMDXComponent=!0},75529:function(e,t,n){n.d(t,{ZP:function(){return k}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n(91125),l=n(6228),p=n(35998),c=["components"],u={toc:[]};function s(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'logtoClient.signIn(this, "<your-redirect-uri>", logtoException -> {\n    // User signed in successfully if `logtoException` is null.\n});\n')))}s.isMDXComponent=!0;var d=["components"],m={toc:[]};function g(e){var t=e.components,n=(0,i.Z)(e,d);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'logtoClient.signIn(this, "<your-redirect-uri>") { logtoException: LogtoException? ->\n    // User signed in successfully if `logtoException` is null.\n}\n')))}g.isMDXComponent=!0;var h=["components"],f={toc:[]};function k(e){var t=e.components,n=(0,i.Z)(e,h);return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(p.ZP,{calling:".signIn(context, redirectUri, completion)",mdxType:"SignInNote"}),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)(g,{mdxType:"KotlinSignInCode"})),(0,a.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(s,{mdxType:"JavaSignInCode"}))),(0,a.kt)("p",null,"After signing in successfully, ",(0,a.kt)("inlineCode",{parentName:"p"},"logtoClient.isAuthenticated")," will be ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."))}k.isMDXComponent=!0},71628:function(e,t,n){n.d(t,{ZP:function(){return f}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n(91125),l=n(6228),p=["components"],c={toc:[]};function u(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import io.logto.sdk.android.LogtoClient;\nimport io.logto.sdk.android.type.LogtoConfig;\nimport io.logto.sdk.core.constant.PromptValue;\n\npublic class MainActivity extends AppCompatActivity {\n\n    private LogtoClient logtoClient;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        // ...\n        LogtoConfig logtoConfig = new LogtoConfig(\n            "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            "<your-app-id>",\n            null,\n            null,\n            true,\n            PromptValue.CONSENT\n        );\n\n        logtoClient = new LogtoClient(logtoConfig, getApplication());\n    }\n}\n')))}u.isMDXComponent=!0;var s=["components"],d={toc:[]};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\nimport io.logto.sdk.core.constant.PromptValue\n\nclass MainActivity : AppCompatActivity() {\n\n    private lateinit var logtoClient: LogtoClient\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        // ...\n        val logtoConfig = LogtoConfig(\n            endpoint = "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            appId = "<your-app-id>",\n            scopes = null,\n            resources = null,\n            usingPersistStorage = true,\n            prompt = PromptValue.CONSENT,\n        )\n\n        logtoClient = LogtoClient(logtoConfig, application)\n    }\n}\n')))}m.isMDXComponent=!0;var g=["components"],h={toc:[]};function f(e){var t=e.components,n=(0,i.Z)(e,g);return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Ensure the Application object has been initialized before creating a LogtoClient.")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)(m,{mdxType:"KotlinSetupCode"})),(0,a.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(u,{mdxType:"JavaSetupCode"}))))}f.isMDXComponent=!0},40510:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,a.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,a.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}p.isMDXComponent=!0},35998:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,"Before calling ",(0,a.kt)("code",null,n.calling),", make sure you have correctly configured Redirect URI in Admin Console.")))}p.isMDXComponent=!0},84751:function(e,t,n){t.Z=n.p+"assets/images/android-redirect-uri-ac35116d71d63d3bf964651207e82085.png"},43157:function(e,t,n){t.Z=n.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},81601:function(e,t,n){t.Z=n.p+"assets/images/create-application-8ace18547a152b97cea519666a0e7bbf.png"},20836:function(e,t,n){t.Z=n.p+"assets/images/domain-and-url-f8f432e8a15c2c1cdf9e59b1a2b72049.png"},77952:function(e,t,n){t.Z=n.p+"assets/images/enable-sign-in-with-apple-in-xcode-26680889a51468c3671f3011fd44b5f1.png"},82736:function(e,t,n){t.Z=n.p+"assets/images/enable-sign-in-with-apple-42664e79db1a8966b1fc626a4bb67269.png"},53225:function(e,t,n){t.Z=n.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},26109:function(e,t,n){t.Z=n.p+"assets/images/sie-tab-8b47b6ad0a8bbc115fc6e2ee67ed1566.png"}}]);