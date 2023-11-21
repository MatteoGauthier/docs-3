"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[4754],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var o=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,k=d["".concat(c,".").concat(g)]||d[g]||s[g]||a;return n?o.createElement(k,r(r({ref:t},u),{},{components:n})):o.createElement(k,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3967:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[{value:"Register a developer application",id:"register-a-developer-application",level:3},{value:"Configure Logto",id:"configure-logto",level:3},{value:"Config types",id:"config-types",level:4},{value:"clientId",id:"clientid",level:4},{value:"clientSecret",id:"clientsecret",level:4}]};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"register-a-developer-application"},"Register a developer application"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Visit ",(0,a.kt)("a",{parentName:"li",href:"https://discord.com/developers/applications"},"Discord Developer Portal")," and sign in with your Discord account."),(0,a.kt)("li",{parentName:"ul"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"New Application")," button to create an application, choose a name for it (Ex: LogtoAuth), tick the box and click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"OAuth2")," page and click ",(0,a.kt)("strong",{parentName:"li"},"Reset Secret")),(0,a.kt)("li",{parentName:"ul"},"Take note of the ",(0,a.kt)("strong",{parentName:"li"},"CLIENT ID")," and ",(0,a.kt)("strong",{parentName:"li"},"CLIENT SECRET")," fields"),(0,a.kt)("li",{parentName:"ul"},"Add the valid redirects (Ex: ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"http://auth.mycompany.io/callback/${connector_id}")),"). The ",(0,a.kt)("inlineCode",{parentName:"li"},"connector_id")," can be found on the top bar of the Logto Admin Console connector details page.")),(0,a.kt)("h3",{id:"configure-logto"},"Configure Logto"),(0,a.kt)("h4",{id:"config-types"},"Config types"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clientId"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clientSecret"),(0,a.kt)("td",{parentName:"tr",align:null},"string")))),(0,a.kt)("h4",{id:"clientid"},"clientId"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," is the ",(0,a.kt)("inlineCode",{parentName:"p"},"CLIENT ID")," field we saved earlier.\n(You can find it in the Oauth2 Page in Discord Developer Portal.)"),(0,a.kt)("h4",{id:"clientsecret"},"clientSecret"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"clientSecret")," is the ",(0,a.kt)("inlineCode",{parentName:"p"},"CLIENT SECRET")," we saved earlier.\n(If you've lost it you need to click ",(0,a.kt)("strong",{parentName:"p"},"Reset Secret"),")"))}c.isMDXComponent=!0},38713:function(e,t,n){n.d(t,{ZP:function(){return d}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n(68363),l=n(99383),c=n(61110),p=n(9107),u=["components"],s={toc:[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:3},{value:"Init LogtoClient",id:"init-logtoclient",level:3},{value:"Sign in",id:"sign-in",level:3}]};function d(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,a.kt)(r.ZP,{mdxType:"AddSdk"}),(0,a.kt)("h3",{id:"init-logtoclient"},"Init LogtoClient"),(0,a.kt)(c.ZP,{mdxType:"InitClient"}),(0,a.kt)("h3",{id:"sign-in"},"Sign in"),(0,a.kt)(l.ZP,{mdxType:"ImplementSignIn"}),(0,a.kt)(p.ZP,{sdk:"flutter",mdxType:"TestYourIntegration"}))}d.isMDXComponent=!0},74832:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function c(e){var t=e.components,c=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connector tab",src:n(43157).Z,width:"3352",height:"1226"})),(0,a.kt)("p",null,'In the openning modal, select "',c.connector,'" and click "Next".'),(0,a.kt)("p",null,"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."),(0,a.kt)("p",null,"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."))}c.isMDXComponent=!0},18397:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n.p+"assets/images/create-application-modal-a9838383da54c969256d05557ca13639.png",l=["components"],c={toc:[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}]};function p(e){var t=e.components,p=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In you browser, open a new tab and enter the link of Logto Admin Console."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create application",src:n(81601).Z,width:"2368",height:"226"})),(0,a.kt)("p",null,'Once the page is loaded, in the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab.'),(0,a.kt)("h3",{id:"choose-your-application-type"},"Choose your application type"),(0,a.kt)("p",null,'In the opening modal, select the "',p.type,'" option as the application type.'),(0,a.kt)("img",{src:r,alt:"Create Application modal",width:"700"}),(0,a.kt)("h3",{id:"enter-application-name"},"Enter application name"),(0,a.kt)("p",null,'Enter the application name, e.g., "Bookstore," and click "Create Application."'),(0,a.kt)("p",null,"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."))}p.isMDXComponent=!0},46064:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function c(e){var t=e.components,c=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sign-in Experience tab",src:n(26109).Z,width:"3160",height:"1822"})),(0,a.kt)("p",null,'Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',c.connector," ","sign-in, which may increase your conversion rate."),(0,a.kt)("p",null,'In the "Social sign-in" section, add "Add Social Connector" and choose "',c.connector,'". Then you should be able to see a button with text "Continue with ',c.connector,'" in the preview section.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Save changes",src:n(53225).Z,width:"2474",height:"188"})),(0,a.kt)("p",null,'Finally, click "Save Changes" on the bottom right corner.'))}c.isMDXComponent=!0},80485:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"For our new friends",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://logto.io"},"Logto")," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control.")),(0,a.kt)("p",null,"In this article, we will go through the steps to quickly build the ",n.connector," sign-in experience (user authentication) with"," ",(0,a.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),(0,a.kt)("span",null," and "),(0,a.kt)("a",{href:"https://logto.io",target:"_blank",rel:"noopener"},"Logto"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prerequisites")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A running Logto instance. Check out the ",(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/"},"get started page")," if you don't have one."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",null,"Basic knowledge of"," ",(0,a.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",null,"A usable ",n.connector," account."))))}c.isMDXComponent=!0},76358:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Double check you have filled out necessary values in the Logto connector configuration area. Click "Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."))}c.isMDXComponent=!0},9107:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Test your integration",type:"info"},(0,a.kt)("p",null,"Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button, the page should be redirected to a Logto sign-in page, and you should be able to create a new account by entering username and password and complete the sign-in process.')))}c.isMDXComponent=!0},19008:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"))}c.isMDXComponent=!0},54114:function(e,t,n){n.r(t),n.d(t,{assets:function(){return A},connector:function(){return y},contentTitle:function(){return h},default:function(){return C},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return v}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n(80485),l=n(18397),c=n(74832),p=n(76358),u=n(46064),s=n(19008),d=n(38713),g=n(3967),k=["components"],m={slug:"how-to-build-discord-sign-in-with-flutter-and-logto",authors:"logto",tags:["authentication","discord","flutter","dart","social-sign-in","sign-in","login"],title:"How to build Discord sign-in with Flutter and Logto"},h=void 0,f={permalink:"/tutorial/how-to-build-discord-sign-in-with-flutter-and-logto",source:"@site/tutorial/build-with-logto/generated-flutter-discord.mdx",title:"How to build Discord sign-in with Flutter and Logto",description:"\x3c!--",date:"2023-11-21T07:59:23.492Z",formattedDate:"November 21, 2023",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"discord",permalink:"/tutorial/tags/discord"},{label:"flutter",permalink:"/tutorial/tags/flutter"},{label:"dart",permalink:"/tutorial/tags/dart"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.28,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-discord-sign-in-with-flutter-and-logto",authors:"logto",tags:["authentication","discord","flutter","dart","social-sign-in","sign-in","login"],title:"How to build Discord sign-in with Flutter and Logto"},prevItem:{title:"How to build Azure AD sign-in with Flutter and Logto",permalink:"/tutorial/how-to-build-azure-ad-sign-in-with-flutter-and-logto"},nextItem:{title:"How to build Facebook sign-in with Flutter and Logto",permalink:"/tutorial/how-to-build-facebook-sign-in-with-flutter-and-logto"}},A={authorsImageUrls:[void 0]},v=[{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},{value:"Add Discord connector",id:"add-discord-connector",level:2},{value:"Set up Discord OAuth app",id:"set-up-discord-oauth-app",level:2},{value:"Save your configuraiton",id:"save-your-configuraiton",level:2},{value:"Enable Discord connector in Sign-in Experience",id:"enable-discord-connector-in-sign-in-experience",level:2},{value:"Testing and Validation",id:"testing-and-validation",level:2},{value:"Further readings",id:"further-readings",level:2}],y="Discord",b={toc:v,connector:y};function C(e){var t=e.components,n=(0,i.Z)(e,k);return(0,a.kt)("wrapper",(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.ZP,{connector:y,sdk:"Flutter",link:"https://flutter.dev/",mdxType:"Intro"}),(0,a.kt)("h2",{id:"create-an-application-in-logto"},"Create an application in Logto"),(0,a.kt)(l.ZP,{type:"Native App",mdxType:"CreateApplication"}),(0,a.kt)("h2",{id:"integrate-logto-sdk"},"Integrate Logto SDK"),(0,a.kt)(d.ZP,{mdxType:"IntegrateSdk"}),(0,a.kt)("h2",{id:"add-discord-connector"},"Add Discord connector"),(0,a.kt)(c.ZP,{connector:y,mdxType:"AddSocialConnector"}),(0,a.kt)("h2",{id:"set-up-discord-oauth-app"},"Set up Discord OAuth app"),(0,a.kt)(g.ZP,{mdxType:"ConnectorGuide"}),(0,a.kt)("h2",{id:"save-your-configuraiton"},"Save your configuraiton"),(0,a.kt)(p.ZP,{connector:y,mdxType:"SaveYourConfiguration"}),(0,a.kt)("h2",{id:"enable-discord-connector-in-sign-in-experience"},"Enable Discord connector in Sign-in Experience"),(0,a.kt)(u.ZP,{connector:y,mdxType:"EnableSocialConnector"}),(0,a.kt)("h2",{id:"testing-and-validation"},"Testing and Validation"),(0,a.kt)(s.ZP,{connector:y,sdk:"Flutter",mdxType:"TestingAndValidation"}),(0,a.kt)("h2",{id:"further-readings"},"Further readings"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/"},"\u2694\ufe0f Protect your API")," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,a.kt)("br",null),"\nLearn more about identifying who's who and keeping your API secure."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/"},"\ud83e\uddd1\u200d\ud83d\ude80 Manage users")," We know you care about user management and activities, as we also do.",(0,a.kt)("br",null),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/customize-sie/localized-language"},"\ud83c\udf10 Localization")," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,a.kt)("br",null),"\nYou can change current language phrases or add a new language without friction."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/blog/tags/ciam"},"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series")," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."))}C.isMDXComponent=!0},68363:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Our flutter SDK package is published on ",(0,a.kt)("a",{parentName:"p",href:"https://pub.dev/packages/logto_dart_sdk"},"pub.dev"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"flutter pub get logto_dart_sdk\n")),(0,a.kt)("p",null,"Or you may directly get your own copy of the SDK from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/logto-io/dart"},"github")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/logto-io/dart\n")))}c.isMDXComponent=!0},99383:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n(6502),l=n(40510),c=n(35998),p=["components"],u={toc:[{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3}]};function s(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"configure-redirect-uri"},"Configure Redirect URI"),(0,a.kt)(l.ZP,{figureSrc:r.Z,redirectUri:"io.logto://callback",mdxType:"ConfigureRedirectUri"}),(0,a.kt)(c.ZP,{calling:".signIn(redirectUri)",mdxType:"SignInNote"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"void signIn() async {\n  await logtoClient.signIn(redirectUri);\n}\n")))}s.isMDXComponent=!0},61110:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:logto_dart_sdk/logto_dart_sdk.dart';\nimport 'package:http/http.dart' as http;\n\n// ...\nlate LogtoClient logtoClient;\n\n// LogtoConfig\nfinal logtoConfig = const LogtoConfig(\n  endpoint: \"<your-logto-endpoint>\", // E.g. http://localhost:3001\n  appId: \"<your-app-id>\"\n  ...\n);\n\nvoid _init() async  {\n  logtoClient = LogtoClient(\n    config: logtoConfig,\n    httpClient: http.Client(), // Optional http client\n  );\n}\n\n")))}c.isMDXComponent=!0},40510:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,a.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,a.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}c.isMDXComponent=!0},35998:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,"Before calling ",(0,a.kt)("code",null,n.calling),", make sure you have correctly configured Redirect URI in Admin Console.")))}c.isMDXComponent=!0},6502:function(e,t){t.Z="data:image/png;base64,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"},43157:function(e,t,n){t.Z=n.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},81601:function(e,t,n){t.Z=n.p+"assets/images/create-application-8ace18547a152b97cea519666a0e7bbf.png"},53225:function(e,t,n){t.Z=n.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},26109:function(e,t,n){t.Z=n.p+"assets/images/sie-tab-8b47b6ad0a8bbc115fc6e2ee67ed1566.png"}}]);