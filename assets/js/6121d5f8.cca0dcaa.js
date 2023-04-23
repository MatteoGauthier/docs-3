"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[85956],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var o=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(c,".").concat(g)]||d[g]||s[g]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77517:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[{value:"Set up a project in the Kakao Devlopers Console",id:"set-up-a-project-in-the-kakao-devlopers-console",level:3},{value:"Configure Kakao Login",id:"configure-kakao-login",level:3},{value:"Activate Kakao Login",id:"activate-kakao-login",level:4},{value:"Privacy Setting",id:"privacy-setting",level:4},{value:"Security Setting (Optional)",id:"security-setting-optional",level:4},{value:"Configure Logto",id:"configure-logto",level:3},{value:"Config types",id:"config-types",level:4},{value:"clientId",id:"clientid",level:4},{value:"clientSeceret",id:"clientseceret",level:4}]};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"set-up-a-project-in-the-kakao-devlopers-console"},"Set up a project in the Kakao Devlopers Console"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Visit the ",(0,i.kt)("a",{parentName:"li",href:"https://developers.kakao.com/console/app"},"Kakao Developers Console")," and sign in with your Kakao account."),(0,i.kt)("li",{parentName:"ul"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Add an application")," to create new project or choose exist project.")),(0,i.kt)("h3",{id:"configure-kakao-login"},"Configure Kakao Login"),(0,i.kt)("h4",{id:"activate-kakao-login"},"Activate Kakao Login"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Product Settings -> Kakao Login")," from the menu."),(0,i.kt)("li",{parentName:"ul"},"Turn on ",(0,i.kt)("inlineCode",{parentName:"li"},"Kakao Login Activation")),(0,i.kt)("li",{parentName:"ul"},"Add below URL into ",(0,i.kt)("inlineCode",{parentName:"li"},"Redirect URI"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http(s)://YOUR_URL/callback/${connector_id}")," (The ",(0,i.kt)("inlineCode",{parentName:"li"},"connector_id")," can be found on the top bar of the Logto Admin Console connector details page.)"),(0,i.kt)("li",{parentName:"ul"},"(Please replace ",(0,i.kt)("inlineCode",{parentName:"li"},"YOUR_URL")," with your ",(0,i.kt)("inlineCode",{parentName:"li"},"Logto")," URL, and choose ",(0,i.kt)("inlineCode",{parentName:"li"},"http")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"https")," on your situation.)")))),(0,i.kt)("h4",{id:"privacy-setting"},"Privacy Setting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Product Settings -> Kakao Login -> Consent Item")," from the menu."),(0,i.kt)("li",{parentName:"ul"},"Change state of ",(0,i.kt)("inlineCode",{parentName:"li"},"Nickname"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Profile image"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"Email")," to ",(0,i.kt)("strong",{parentName:"li"},"Required consent")," (You might not able to change ",(0,i.kt)("inlineCode",{parentName:"li"},"Email")," to ",(0,i.kt)("strong",{parentName:"li"},"Required consent")," because of your project setting.)")),(0,i.kt)("h4",{id:"security-setting-optional"},"Security Setting (Optional)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Product Settings -> Kakao Login -> Security")," from the menu."),(0,i.kt)("li",{parentName:"ul"},"Click the ",(0,i.kt)("inlineCode",{parentName:"li"},"Client secret code")," to generate secret code."),(0,i.kt)("li",{parentName:"ul"},"Change ",(0,i.kt)("inlineCode",{parentName:"li"},"Activation state")," to Enable. (If you enable it, ",(0,i.kt)("inlineCode",{parentName:"li"},"secret code")," is necessary.)")),(0,i.kt)("h3",{id:"configure-logto"},"Configure Logto"),(0,i.kt)("h4",{id:"config-types"},"Config types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clientId"),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clientSecret"),(0,i.kt)("td",{parentName:"tr",align:null},"string?")))),(0,i.kt)("h4",{id:"clientid"},"clientId"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"clientId")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"REST API key")," of your project.\n(You can find it from ",(0,i.kt)("inlineCode",{parentName:"p"},"summary")," of your project from Kakao developers console.)"),(0,i.kt)("h4",{id:"clientseceret"},"clientSeceret"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"clientSecret")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"Secret Code")," of your project.\n(Please check ",(0,i.kt)("a",{parentName:"p",href:"#security-setting-optional"},"Security Setting (Optional)"),")"))}c.isMDXComponent=!0},95307:function(e,t,n){n.d(t,{ZP:function(){return k}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n(29210),l=n(98279),c=n(97490),u=n(5847),p=n(16310),s=n(52005),d=n(49837),g=["components"],m={toc:[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:2},{value:"Init LogtoClient",id:"init-logtoclient",level:2},{value:"Sign in",id:"sign-in",level:2},{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3},{value:"Sign in",id:"sign-in-1",level:3}]};function k(e){var t=e.components,n=(0,a.Z)(e,g);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,i.kt)(r.ZP,{mdxType:"AddSdk"}),(0,i.kt)("h2",{id:"init-logtoclient"},"Init LogtoClient"),(0,i.kt)(u.ZP,{mdxType:"InitClient"}),(0,i.kt)("h2",{id:"sign-in"},"Sign in"),(0,i.kt)("h3",{id:"configure-redirect-uri"},"Configure Redirect URI"),(0,i.kt)(l.ZP,{mdxType:"ConfigAndroidRedirectUri"}),(0,i.kt)(s.ZP,{figureSrc:p.Z,redirectUri:"io.logto.android://io.logto.sample/callback",mdxType:"ConfigureRedirectUri"}),(0,i.kt)("h3",{id:"sign-in-1"},"Sign in"),(0,i.kt)(c.ZP,{mdxType:"ImplementSignIn"}),(0,i.kt)(d.ZP,{sdk:"Android",mdxType:"TestYourIntegration"}))}k.isMDXComponent=!0},84869:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function c(e){var t=e.components,c=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connector tab",src:n(23455).Z,width:"3352",height:"1226"})),(0,i.kt)("p",null,'In the openning modal, select "',c.connector,'" and click "Next".'),(0,i.kt)("p",null,"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."),(0,i.kt)("p",null,"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."))}c.isMDXComponent=!0},84028:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n.p+"assets/images/create-application-modal-a9838383da54c969256d05557ca13639.png",l=["components"],c={toc:[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}]};function u(e){var t=e.components,u=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},c,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In you browser, open a new tab and enter the link of Logto Admin Console."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create application",src:n(67612).Z,width:"2368",height:"226"})),(0,i.kt)("p",null,'Once the page is loaded, in the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab.'),(0,i.kt)("h3",{id:"choose-your-application-type"},"Choose your application type"),(0,i.kt)("p",null,'In the opening modal, select the "',u.type,'" option as the application type.'),(0,i.kt)("img",{src:r,alt:"Create Application modal",width:"700"}),(0,i.kt)("h3",{id:"enter-application-name"},"Enter application name"),(0,i.kt)("p",null,'Enter the application name, e.g., "Bookstore," and click "Create Application."'),(0,i.kt)("p",null,"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."))}u.isMDXComponent=!0},66816:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function c(e){var t=e.components,c=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sign-in Experience tab",src:n(74673).Z,width:"3160",height:"1822"})),(0,i.kt)("p",null,'Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',c.connector," ","sign-in, which may increase your conversion rate."),(0,i.kt)("p",null,'In the "Social sign-in" section, add "Add Social Connector" and choose "',c.connector,'". Then you should be able to see a button with text "Continue with ',c.connector,'" in the preview section.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Save changes",src:n(89913).Z,width:"2474",height:"188"})),(0,i.kt)("p",null,'Finally, click "Save Changes" on the bottom right corner.'))}c.isMDXComponent=!0},23074:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"For our new friends",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://logto.io"},"Logto")," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control.")),(0,i.kt)("p",null,"In this article, we will go through the steps to quickly build the ",n.connector," sign-in experience (user authentication) with"," ",(0,i.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),(0,i.kt)("span",null," and "),(0,i.kt)("a",{href:"https://logto.io",target:"_blank",rel:"noopener"},"Logto"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prerequisites")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A running Logto instance. Check out the ",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/"},"get started page")," if you don't have one."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",null,"Basic knowledge of"," ",(0,i.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",null,"A usable ",n.connector," account."))))}c.isMDXComponent=!0},22719:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Double check you have filled out necessary values in the Logto connector configuration area. Click "Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."))}c.isMDXComponent=!0},49837:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Test your integration",type:"info"},(0,i.kt)("p",null,"Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button, the page should be redirected to a Logto sign-in page, and you should be able to create a new account by entering username and password and complete the sign-in process.')))}c.isMDXComponent=!0},10309:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"))}c.isMDXComponent=!0},66836:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},connector:function(){return b},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return y}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n(23074),l=n(84028),c=n(84869),u=n(22719),p=n(66816),s=n(10309),d=n(95307),g=n(77517),m=["components"],k={slug:"how-to-build-kakao-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","kakao","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Kakao sign-in with Android and Logto"},h=void 0,f={permalink:"/tutorial/how-to-build-kakao-sign-in-with-android-and-logto",source:"@site/tutorial/build-with-logto/generated-android-kakao.mdx",title:"How to build Kakao sign-in with Android and Logto",description:"\x3c!--",date:"2023-04-23T04:26:30.425Z",formattedDate:"April 23, 2023",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"kakao",permalink:"/tutorial/tags/kakao"},{label:"android",permalink:"/tutorial/tags/android"},{label:"kotlin/java",permalink:"/tutorial/tags/kotlin-java"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.275,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-kakao-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","kakao","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Kakao sign-in with Android and Logto"},prevItem:{title:"How to build Facebook sign-in with Android and Logto",permalink:"/tutorial/how-to-build-facebook-sign-in-with-android-and-logto"},nextItem:{title:"How to build Naver sign-in with Android and Logto",permalink:"/tutorial/how-to-build-naver-sign-in-with-android-and-logto"}},v={authorsImageUrls:[void 0]},y=[{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},{value:"Add Kakao connector",id:"add-kakao-connector",level:2},{value:"Set up Kakao login",id:"set-up-kakao-login",level:2},{value:"Save your configuraiton",id:"save-your-configuraiton",level:2},{value:"Enable Kakao connector in Sign-in Experience",id:"enable-kakao-connector-in-sign-in-experience",level:2},{value:"Testing and Validation",id:"testing-and-validation",level:2},{value:"Further readings",id:"further-readings",level:2}],b="Kakao",C={toc:y,connector:b};function w(e){var t=e.components,n=(0,a.Z)(e,m);return(0,i.kt)("wrapper",(0,o.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.ZP,{connector:b,sdk:"Android",link:"https://developer.android.com/",mdxType:"Intro"}),(0,i.kt)("h2",{id:"create-an-application-in-logto"},"Create an application in Logto"),(0,i.kt)(l.ZP,{type:"Native App",mdxType:"CreateApplication"}),(0,i.kt)("h2",{id:"integrate-logto-sdk"},"Integrate Logto SDK"),(0,i.kt)(d.ZP,{mdxType:"IntegrateSdk"}),(0,i.kt)("h2",{id:"add-kakao-connector"},"Add Kakao connector"),(0,i.kt)(c.ZP,{connector:b,mdxType:"AddConnector"}),(0,i.kt)("h2",{id:"set-up-kakao-login"},"Set up Kakao login"),(0,i.kt)(g.ZP,{mdxType:"ConnectorGuide"}),(0,i.kt)("h2",{id:"save-your-configuraiton"},"Save your configuraiton"),(0,i.kt)(u.ZP,{connector:b,mdxType:"SaveYourConfiguration"}),(0,i.kt)("h2",{id:"enable-kakao-connector-in-sign-in-experience"},"Enable Kakao connector in Sign-in Experience"),(0,i.kt)(p.ZP,{connector:b,mdxType:"EnableSocialConnector"}),(0,i.kt)("h2",{id:"testing-and-validation"},"Testing and Validation"),(0,i.kt)(s.ZP,{connector:b,sdk:"Android",mdxType:"TestingAndValidation"}),(0,i.kt)("h2",{id:"further-readings"},"Further readings"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/"},"\u2694\ufe0f Protect your API")," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,i.kt)("br",null),"\nLearn more about identifying who's who and keeping your API secure."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/"},"\ud83e\uddd1\u200d\ud83d\ude80 Manage users")," We know you care about user management and activities, as we also do.",(0,i.kt)("br",null),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/customize-sie/localized-language"},"\ud83c\udf10 Localization")," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,i.kt)("br",null),"\nYou can change current language phrases or add a new language without friction."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/blog/tags/ciam"},"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series")," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."))}w.isMDXComponent=!0},44693:function(e,t,n){n.d(t,{Z:function(){return r}});n(59496);var o=n(45924),a="tabItem_f4_5",i=n(4637);function r(e){var t=e.children,n=e.hidden,r=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a,r),hidden:n,children:t})}},52967:function(e,t,n){n.d(t,{Z:function(){return w}});var o=n(59496),a=n(45924),i=n(5734),r=n(89274),l=n(61037),c=n(18833);function u(e){return function(e){var t,n;return null!=(t=null==(n=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:u(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function s(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,i.k6)(),c=function(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:n,groupId:a});return[(0,r._X)(c),(0,o.useCallback)((function(e){if(c){var t=new URLSearchParams(l.location.search);t.set(c,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[c,l])]}function g(e){var t,n,a,i,r=e.defaultValue,l=e.queryString,u=void 0!==l&&l,g=e.groupId,m=p(e),k=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!s({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=o.find((function(e){return e.default})))?t:o[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:m})})),h=k[0],f=k[1],v=d({queryString:u,groupId:g}),y=v[0],b=v[1],C=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:g}.groupId),n=(0,c.Nk)(t),a=n[0],i=n[1],[a,(0,o.useCallback)((function(e){t&&i.set(e)}),[t,i])]),w=C[0],N=C[1],T=function(){var e=null!=y?y:w;return s({value:e,tabValues:m})?e:null}();return(0,o.useLayoutEffect)((function(){T&&f(T)}),[T]),{selectedValue:h,selectValue:(0,o.useCallback)((function(e){if(!s({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);f(e),b(e),N(e)}),[b,N,m]),tabValues:m}}var m=n(72216),k=n(48350),h="tabList_P5Xc",f="tabItem_oHQM",v=n(4637);function y(e){var t=e.className,n=e.block,o=e.selectedValue,i=e.selectValue,r=e.tabValues,l=[],c=(0,m.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),a=r[n].value;a!==o&&(c(t),i(a))},p=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var o,a=l.indexOf(e.currentTarget)+1;n=null!=(o=l[a])?o:l[0];break;case"ArrowLeft":var i,r=l.indexOf(e.currentTarget)-1;n=null!=(i=l[r])?i:l[l.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:r.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:function(e){return l.push(e)},onKeyDown:p,onClick:u},i,{className:(0,a.Z)("tabs__item",f,null==i?void 0:i.className,{"tabs__item--active":o===t}),children:null!=n?n:t}),t)}))})}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var r=i.find((function(e){return e.props.value===a}));return r?(0,o.cloneElement)(r,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function C(e){var t=g(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",h),children:[(0,v.jsx)(y,Object.assign({},e,t)),(0,v.jsx)(b,Object.assign({},e,t))]})}function w(e){var t=(0,k.Z)();return(0,v.jsx)(C,Object.assign({},e),String(t))}},29210:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n(44693),l=n(52967),c=["components"],u={toc:[]};function p(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The minimum supported Android API level of Logto Andorid SDK is level 24.")),(0,i.kt)("p",null,"Add the ",(0,i.kt)("inlineCode",{parentName:"p"},"mavenCentral()")," repository to your Gradle project build file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"repositories {\n    mavenCentral()\n}\n")),(0,i.kt)("p",null,"Add Logto Android SDK to your dependencies:"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation("io.logto.sdk:android:1.0.0-alpha.0")\n}\n'))),(0,i.kt)(r.Z,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'io.logto.sdk:android:1.0.0-alpha.0'\n}\n")))))}p.isMDXComponent=!0},98279:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In Android, the Redirect URI follows the pattern: ",(0,i.kt)("inlineCode",{parentName:"p"},"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"LOGTO_REDIRECT_SCHEME")," should be a custom scheme in the reverse domain format.",(0,i.kt)("br",{parentName:"p"}),"\n","The ",(0,i.kt)("inlineCode",{parentName:"p"},"YOUR_APP_PACKAGE")," is your app package name.")),(0,i.kt)("p",null,"Assuming you treat ",(0,i.kt)("inlineCode",{parentName:"p"},"io.logto.android")," as the custom ",(0,i.kt)("inlineCode",{parentName:"p"},"LOGTO_REDIRECT_SCHEME"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"io.logto.sample")," is your app package name, the Redirect URI should be ",(0,i.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback"),"."),(0,i.kt)("p",null,"Now you can configure the Redirect URI in the admin console (Take ",(0,i.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback")," as an example)."))}c.isMDXComponent=!0},97490:function(e,t,n){n.d(t,{ZP:function(){return f}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n(44693),l=n(52967),c=n(22909),u=["components"],p={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'logtoClient.signIn(this, "<your-redirect-uri>", logtoException -> {\n    // User signed in successfully if `logtoException` is null.\n});\n')))}s.isMDXComponent=!0;var d=["components"],g={toc:[]};function m(e){var t=e.components,n=(0,a.Z)(e,d);return(0,i.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'logtoClient.signIn(this, "<your-redirect-uri>") { logtoException: LogtoException? ->\n    // User signed in successfully if `logtoException` is null.\n}\n')))}m.isMDXComponent=!0;var k=["components"],h={toc:[]};function f(e){var t=e.components,n=(0,a.Z)(e,k);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c.ZP,{calling:".signIn(context, redirectUri, completion)",mdxType:"SignInNote"}),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)(m,{mdxType:"KotlinSignInCode"})),(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(s,{mdxType:"JavaSignInCode"}))),(0,i.kt)("p",null,"After signing in successfully, ",(0,i.kt)("inlineCode",{parentName:"p"},"logtoClient.isAuthenticated")," will be ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."))}f.isMDXComponent=!0},5847:function(e,t,n){n.d(t,{ZP:function(){return h}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n(44693),l=n(52967),c=["components"],u={toc:[]};function p(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import io.logto.sdk.android.LogtoClient;\nimport io.logto.sdk.android.type.LogtoConfig;\nimport io.logto.sdk.core.constant.PromptValue;\n\npublic class MainActivity extends AppCompatActivity {\n\n    private LogtoClient logtoClient;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        // ...\n        LogtoConfig logtoConfig = new LogtoConfig(\n            "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            "<your-app-id>",\n            null,\n            null,\n            true,\n            PromptValue.CONSENT\n        );\n\n        logtoClient = new LogtoClient(logtoConfig, getApplication());\n    }\n}\n')))}p.isMDXComponent=!0;var s=["components"],d={toc:[]};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\nimport io.logto.sdk.core.constant.PromptValue\n\nclass MainActivity : AppCompatActivity() {\n\n    private lateinit var logtoClient: LogtoClient\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        // ...\n        val logtoConfig = LogtoConfig(\n            endpoint = "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            appId = "<your-app-id>",\n            scopes = null,\n            resources = null,\n            usingPersistStorage = true,\n            prompt = PromptValue.CONSENT,\n        )\n\n        logtoClient = LogtoClient(logtoConfig, application)\n    }\n}\n')))}g.isMDXComponent=!0;var m=["components"],k={toc:[]};function h(e){var t=e.components,n=(0,a.Z)(e,m);return(0,i.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Ensure the Application object has been initialized before creating a LogtoClient.")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)(g,{mdxType:"KotlinSetupCode"})),(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(p,{mdxType:"JavaSetupCode"}))))}h.isMDXComponent=!0},52005:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,i.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,i.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}c.isMDXComponent=!0},22909:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",null,"Before calling ",(0,i.kt)("code",null,n.calling),", make sure you have correctly configured Redirect URI in Admin Console.")))}c.isMDXComponent=!0},16310:function(e,t,n){t.Z=n.p+"assets/images/android-redirect-uri-ac35116d71d63d3bf964651207e82085.png"},23455:function(e,t,n){t.Z=n.p+"assets/images/connector-tab-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},67612:function(e,t,n){t.Z=n.p+"assets/images/create-application-8ace18547a152b97cea519666a0e7bbf.png"},89913:function(e,t,n){t.Z=n.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},74673:function(e,t,n){t.Z=n.p+"assets/images/sie-tab-8b47b6ad0a8bbc115fc6e2ee67ed1566.png"}}]);