"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[54938],{49613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},797:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var i=n(665),a=n(40151),o=(n(59496),n(49613)),r=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'Don\'t forget to click "Save changes" to make your customization go live.')))}l.isMDXComponent=!0;var u=["components"],d={sidebar_label:"Configure sign-in methods",sidebar_position:1},c="Configure sign-in methods",p={unversionedId:"docs/recipes/customize-sie/configure-sign-in-methods",id:"docs/recipes/customize-sie/configure-sign-in-methods",title:"Configure sign-in methods",description:"Join forces with the Console to set up an end-to-end sign-in experience for your customers.",source:"@site/docs/docs/recipes/customize-sie/configure-sign-in-methods.mdx",sourceDirName:"docs/recipes/customize-sie",slug:"/docs/recipes/customize-sie/configure-sign-in-methods",permalink:"/next/docs/recipes/customize-sie/configure-sign-in-methods",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/customize-sie/configure-sign-in-methods.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Configure sign-in methods",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83c\udfa8 Customize sign-in experience",permalink:"/next/docs/recipes/customize-sie/"},next:{title:"Match your brand",permalink:"/next/docs/recipes/customize-sie/match-your-brand"}},h={},m=[{value:"Sign-up method",id:"sign-up-method",level:2},{value:"Sign-up identifier",id:"sign-up-identifier",level:3},{value:"Sign-up authentication",id:"sign-up-authentication",level:3},{value:"Sign-in method",id:"sign-in-method",level:2},{value:"Sign-in identifier and authentication",id:"sign-in-identifier-and-authentication",level:3},{value:"Social sign-in",id:"social-sign-in",level:2},{value:"Forget password",id:"forget-password",level:2},{value:"Disable User Registration",id:"disable-user-registration",level:2}],g={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,i.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-sign-in-methods"},"Configure sign-in methods"),(0,o.kt)(l,{mdxType:"SaveChanges"}),(0,o.kt)("p",null,"Join forces with the Console to set up an end-to-end sign-in experience for your customers."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sign-in Experience dashboard",src:n(99611).Z,width:"2906",height:"2188"})),(0,o.kt)("h2",{id:"sign-up-method"},"Sign-up method"),(0,o.kt)("h3",{id:"sign-up-identifier"},"Sign-up identifier"),(0,o.kt)("p",null,"The sign-up identification is the handle used to identify who you are and what information is required to register for the product. It is required information for account creation and must be included in the sign-in process. We offer four types of identifiers in the Sign-in Experience configuration,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Email address"),(0,o.kt)("li",{parentName:"ul"},"Phone number"),(0,o.kt)("li",{parentName:"ul"},"Username"),(0,o.kt)("li",{parentName:"ul"},"Email or Phone")),(0,o.kt)("p",null,'End users can create an account and access the product using any of these four methods. Furthermore, we support "none," which is appropriate for social-only account creation. In this instance, the only way to establish an account and sign in to the product is through social sign-in.'),(0,o.kt)("h3",{id:"sign-up-authentication"},"Sign-up authentication"),(0,o.kt)("p",null,"We require not just identifiers, but also authentication factors to specify the sign-up. By associating authentication factors with identifiers, you will lay a solid foundation for a successful and frictionless sign-up flow.\nWe presently support end-user authentication as follows,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Verification code (password-less)"),(0,o.kt)("li",{parentName:"ul"},"Password")),(0,o.kt)("p",null,"However, the verification criteria cannot be combined in any isolated way with the identifiers given above. There are several restrictions to allow for real-world conditions."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"If you identifier is\u2026"),(0,o.kt)("th",{parentName:"tr",align:null},"Password"),(0,o.kt)("th",{parentName:"tr",align:null},"Verification code (password-less)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Username"),(0,o.kt)("td",{parentName:"tr",align:null},"Required"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"N/A"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Email address"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Phone"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Email or Phone"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"N/A")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"N/A"))))),(0,o.kt)("p",null,"For example, if you sign up with your email address, you must authenticate your account. We do not currently support unverified email at sign-up, but it will be added soon."),(0,o.kt)("p",null,"Another example: if you choose username as your sign-up identifier, you must also choose password as one of your authentication factors."),(0,o.kt)("p",null,'The checkboxes here form a "and" logic, which indicates that your sign-up procedure will include all of the ticked options as needed steps.'),(0,o.kt)("p",null,"Here are two examples:"),(0,o.kt)("p",null,"Sign-up method: Email address. Sign-up authentication: Password & Verification code."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Set sign-up methods 01",src:n(49397).Z,width:"3036",height:"1292"})),(0,o.kt)("p",null,"Sign-up method: Email address or phone number. Sign-up authentication: Verification code."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Set sign-up methods 02",src:n(88180).Z,width:"3036",height:"1300"})),(0,o.kt)("h2",{id:"sign-in-method"},"Sign-in method"),(0,o.kt)("h3",{id:"sign-in-identifier-and-authentication"},"Sign-in identifier and authentication"),(0,o.kt)("p",null,"As previously stated, users may enter and complete additional information as they explore and utilize the product. Some of them should be accepted as ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"sign-in methods")),". That is why sign-in procedures differ from ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"sign-up methods")),'. Sign-in identifiers are the same as sign-up identifiers, except they form a "or" logic, which means users can use any of them to sign in.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Username"),(0,o.kt)("li",{parentName:"ul"},"Phone number"),(0,o.kt)("li",{parentName:"ul"},"Email address")),(0,o.kt)("p",null,"You can add as many as you like and then drag and drop to determine who is at the top of the layout."),(0,o.kt)("p",null,"In terms of authentication factors, you can activate either a password or a verification code for each identifier in your sign-in flow. Your sign-up identities and authentication factors also limited the capability. Here are some broad guidelines for creating a successful user flow for your consideration:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If password is used as an authentication factor in sign-up\u2192 sign-in should also support it, and all other identifiers should as well. We don't want end users to waste time registering or neglecting their security intents. The requirement of a password for username sign-up but not for email/phone password sign-in makes no sense and confuses the user.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you simply use your username as your identifier during sign-up, you will need to create a password. This is because of the constraints and limitations of a username as a form of identification.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In order to sign in, at least two of the sign-in choices that users choose when they registered must be active. If a user signs up with their email address but can only sign in with their phone number, they will be unable to utilize the product.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the username is the only identification used during registration, a password is required. Because of the restrictions and peculiarities of utilizing a username as an identification, this is the case.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'If you choose "email", "phone number", or "phone number or email address" as sign-up identifiers, you must verify those identifiers at sign-up, and if you do not choose password as the sign-up authentication factor, you must activate verification code at sign-in. After selecting a password, the sign-in password must be enabled, and the verification code at sign-in can be unchecked.'))),(0,o.kt)("p",null,"Although these guidelines may initially appear daunting, they quickly begin to feel like second nature as you experiment with them on your own. The hidden reasoning will save you from making mistakes that will have a detrimental effect on your user acquisition funnel."),(0,o.kt)("p",null,"Here are two examples:"),(0,o.kt)("p",null,"Sign-in identifier: Email address. Sign-in authentication: Password."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Set sign-in methods 01",src:n(91347).Z,width:"3036",height:"1316"})),(0,o.kt)("p",null,"Sign-in identifier: Email address / Phone number. Sign-in authentication: Password / Verification code."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Set sign-in methods 02",src:n(81585).Z,width:"3036",height:"1300"})),(0,o.kt)("h2",{id:"social-sign-in"},"Social sign-in"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Social sign-in")," is a method of logging into third-party services using credentials from your existing social networking profiles. Signing up and logging in is simplified and hastened by using social sign-in due to the use of already established, trusted identifiers."),(0,o.kt)("p",null,"Your user may be requested to supply additional information when joining up with social accounts, depending on the sign-up identifiers you selected."),(0,o.kt)("p",null,'For example, if you choose "email address" as the sign-up identifier, the social sign-up flow will also request users to fill out a new one, or link an existing account, depending on whether the account exists. But for faster sign-in, if the social account carries an unregistered \u201ctrusted email\u201d which is verified by trusted third-party social identity providers, like Gmail, GitHub, etc., the email address will be automatically filled in the user\u2019s profile.'),(0,o.kt)("p",null,"You can also use drag and drop to change the order of how it appears on the UI, and if you add a lot of social sign-in, which we don't encourage, it will be hidden in the collapsed view."),(0,o.kt)("h2",{id:"forget-password"},"Forget password"),(0,o.kt)("p",null,"When you configure the Email or SMS connector, the forget password feature is automatically enabled. Passwords can be reset using a verified email address or phone number."),(0,o.kt)("p",null,"You cannot currently use the old password when creating a new one. The restriction occurs only once."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Forgot your password",src:n(23919).Z,width:"3036",height:"1292"})),(0,o.kt)("h2",{id:"disable-user-registration"},"Disable User Registration"),(0,o.kt)("p",null,"In some circumstances, account creation must be restricted. Navigate to Sign-in Experience > Other > Advanced Settings. Turn the toggle off, and you're done. The account creation button will disappear from the sample page, and you will be unable to establish an account through social media."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Enable user register",src:n(11914).Z,width:"1620",height:"708"})))}f.isMDXComponent=!0},99611:function(e,t,n){t.Z=n.p+"assets/images/sie-set-configure-method-96ac12c9fe6e9aa754c58081159d47ce.png"},23919:function(e,t,n){t.Z=n.p+"assets/images/sie-set-forgot-password-6871569c041b9aa31198e55585a2399f.png"},11914:function(e,t,n){t.Z=n.p+"assets/images/sie-set-other-enable-user-registration-b5fcd481a21ee76a59bcc2ca2d0a9352.png"},91347:function(e,t,n){t.Z=n.p+"assets/images/sie-set-sign-in-method-one-0084c5ced3d6b9e4bedef37b4cf88b42.png"},81585:function(e,t,n){t.Z=n.p+"assets/images/sie-set-sign-in-method-two-a6902c405d92a919cf0f2d65bcbba531.png"},49397:function(e,t,n){t.Z=n.p+"assets/images/sie-set-sign-up-method-one-3207c67e7912bdcb417edcd02db8e952.png"},88180:function(e,t,n){t.Z=n.p+"assets/images/sie-set-sign-up-method-two-7619546d6e4f1239b571b0420f490dfe.png"}}]);