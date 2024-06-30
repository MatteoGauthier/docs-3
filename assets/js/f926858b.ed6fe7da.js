"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[49191],{67314:(e,n,i)=>{i.d(n,{ZP:()=>a,d$:()=>r});var t=i(11527),o=i(17279);const r=[{value:"Enable Sign in with Apple for your app",id:"enable-sign-in-with-apple-for-your-app",level:3},{value:"Create an identifier",id:"create-an-identifier",level:3},{value:"Enable Sign in with Apple for your identifier",id:"enable-sign-in-with-apple-for-your-identifier",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3}];function s(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,t.jsx)(n.strong,{children:"Note"})]}),"\n",(0,t.jsx)(n.p,{children:"Apple sign-in is required for AppStore if you have other social sign-in methods in your app.\nHaving Apple sign-in on Android devices is great if you also provide an Android app."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You need to enroll ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/programs/",children:"Apple Developer Program"})," before continuing."]}),"\n",(0,t.jsx)(n.h3,{id:"enable-sign-in-with-apple-for-your-app",children:"Enable Sign in with Apple for your app"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,t.jsx)(n.strong,{children:"Caution"})]}),"\n",(0,t.jsx)(n.p,{children:"Even if you want to implement Sign in with Apple on a web app only, you still need to have an existing app that embraces the AppStore ecosystem (i.e., have a valid App ID)."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can do it via Xcode -> Project settings -> Signing & Capabilities, or visit ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/account/resources/identifiers/list/bundleId",children:"Certificates, Identifiers & Profiles"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Enable Sign in with Apple",src:i(857).Z+"",width:"1220",height:"398"})}),"\n",(0,t.jsxs)(n.p,{children:['See the "Enable an App ID" section in ',(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/sign_in_with_apple/configuring_your_environment_for_sign_in_with_apple",children:"Apple official docs"})," for more info."]}),"\n",(0,t.jsx)(n.h3,{id:"create-an-identifier",children:"Create an identifier"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Visit ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/account/resources/identifiers/list/serviceId",children:"Certificates, Identifiers & Profiles"}),', then click the "+" button next to "Identifier".']}),"\n",(0,t.jsx)(n.li,{children:'In the "Register a new identifier" page, choose "Services IDs" and click "Continue".'}),"\n",(0,t.jsxs)(n.li,{children:['Fill out "Description" and "Identifier" (E.g., ',(0,t.jsx)(n.code,{children:"Logto Test"})," and ",(0,t.jsx)(n.code,{children:"io.logto.test"}),'), then click "Continue".']}),"\n",(0,t.jsx)(n.li,{children:'Double-check the info and click "Register".'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"enable-sign-in-with-apple-for-your-identifier",children:"Enable Sign in with Apple for your identifier"}),"\n",(0,t.jsx)(n.p,{children:'Click the identifier you just created. Check "Sign in with Apple" on the details page and click "Configure".'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Enable Sign in with Apple",src:i(99550).Z+"",width:"1170",height:"186"})}),"\n",(0,t.jsx)(n.p,{children:"In the opening modal, select the App ID you just enabled Sign in with Apple."}),"\n",(0,t.jsxs)(n.p,{children:["Enter the domain of your Logto instance without protocol and port, e.g., ",(0,t.jsx)(n.code,{children:"your.logto.domain"}),'; then enter the "Return URL" (i.e., Redirect URI), which is the Logto URL with ',(0,t.jsx)(n.code,{children:"/callback/${connector_id}"}),", e.g., ",(0,t.jsx)(n.code,{children:"https://your.logto.domain/callback/apple-universal"}),". You can get the randomly generated ",(0,t.jsx)(n.code,{children:"connector_id"})," after creating Apple connector in Admin Console."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"domain-and-url",src:i(16872).Z+"",width:"988",height:"668"})}),"\n",(0,t.jsx)(n.p,{children:'Click "Next" then "Done" to close the modal. Click "Continue" on the top-right corner, then click "Save" to save your configuration.'}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,t.jsx)(n.strong,{children:"Caution"})]}),"\n",(0,t.jsxs)(n.p,{children:["Apple does NOT allow Return URLs with HTTP protocol and ",(0,t.jsx)(n.code,{children:"localhost"})," domain."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to test locally, you need to edit ",(0,t.jsx)(n.code,{children:"/etc/hosts"})," file to map localhost to a custom domain and set up a local HTTPS environment. ",(0,t.jsx)(n.a,{href:"https://github.com/FiloSottile/mkcert",children:"mkcert"})," can help you for setting up local HTTPS."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,t.jsxs)(n.p,{children:["You need to use the identifier that fills in the ",(0,t.jsx)(n.a,{href:"#create-an-identifier",children:"Create an identifier"})," section to compose the JSON:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "clientId": "io.logto.test"\n}\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,t.jsx)(n.strong,{children:"Note"})]}),"\n",(0,t.jsxs)(n.p,{children:["This connector doesn't support customizing ",(0,t.jsx)(n.code,{children:"scope"})," (e.g., name, email) yet since Apple requires ",(0,t.jsx)(n.code,{children:"form_post"})," response mode when ",(0,t.jsx)(n.code,{children:"scope"})," is not empty, which is incompatible with the current connector design."]}),"\n",(0,t.jsx)(n.p,{children:"We'll figure out this later."}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},86269:(e,n,i)=>{i.d(n,{ZP:()=>h,d$:()=>d});var t=i(11527),o=i(17279),r=i(20492),s=i(81301),a=i(72226),c=i(55257),l=i(94842);const d=[...r.d$,{value:"Installation",id:"installation",level:3},...s.d$,...a.d$,{value:"Update Razor pages",id:"update-razor-pages",level:3},...c.d$,...l.d$];function p(e){const n={h3:"h3",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.ZP,{}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(s.ZP,{}),"\n",(0,t.jsx)(a.ZP,{}),"\n",(0,t.jsx)(n.h3,{id:"update-razor-pages",children:"Update Razor pages"}),"\n",(0,t.jsx)(c.ZP,{}),"\n",(0,t.jsx)(l.ZP,{sdk:".NET Core (Blazor Server)"})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},12665:(e,n,i)=>{i.d(n,{ZP:()=>a,d$:()=>r});var t=i(11527),o=i(17279);const r=[];function s(e){const n={img:"img",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social connectors". From there, click "Add social connector".'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Connector tab",src:i(88065).Z+"",width:"3352",height:"1226"})}),"\n",(0,t.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,t.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,t.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},80710:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>s});var t=i(11527),o=i(17279);const r=i.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",s=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Get Started",src:i(57794).Z+"",width:"2354",height:"588"})}),"\n",(0,t.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,t.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,t.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Framework List",src:i(43477).Z+"",width:"3626",height:"2804"})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,t.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:r,alt:"Create Application modal",width:"700"})}),"\n",(0,t.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create application."'}),"\n",(0,t.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},31877:(e,n,i)=>{i.d(n,{ZP:()=>a,d$:()=>r});var t=i(11527),o=i(17279);const r=[];function s(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'Switch to the "Sign-in experience" tab, then click the "Sign-up and sign-in" tab.'}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sign-in Experience tab",src:i(68150).Z+"",width:"3502",height:"1794"})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Save changes",src:i(75877).Z+"",width:"2474",height:"188"})}),"\n",(0,t.jsx)(n.p,{children:'Finally, click "Save changes" on the bottom right corner.'})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},87593:(e,n,i)=>{i.d(n,{ZP:()=>a,d$:()=>r});var t=i(11527),o=i(17279);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:["\n","\n",(0,t.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,t.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,t.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,t.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,t.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,t.jsx)(n.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)("span",{children:["Basic knowledge of ",(0,t.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},80386:(e,n,i)=>{i.d(n,{ZP:()=>a,d$:()=>r});var t=i(11527),o=i(17279);const r=[];function s(e){const n={p:"p",...(0,o.a)(),...e.components};return(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save changes") and the ',e.connector," connector should be available now."]})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},94842:(e,n,i)=>{i.d(n,{ZP:()=>a,d$:()=>r});var t=i(11527),o=i(17279);const r=[];function s(e){const n={admonition:"admonition",p:"p",...(0,o.a)(),...e.components};return(0,t.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,t.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},23095:(e,n,i)=>{i.d(n,{ZP:()=>a,d$:()=>r});var t=i(11527),o=i(17279);const r=[];function s(e){const n={p:"p",...(0,o.a)(),...e.components};return(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},14883:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>m,connector:()=>j,contentTitle:()=>g,default:()=>w,frontMatter:()=>u,metadata:()=>x,toc:()=>f});var t=i(11527),o=i(17279),r=i(87593),s=i(80710),a=i(12665),c=i(80386),l=i(31877),d=i(23095),p=i(86269),h=i(67314);const u={slug:"how-to-build-apple-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","apple","dotnet-core-blazor-webassembly","c#","social-sign-in","sign-in","login"],title:"How to build Apple sign-in with .NET Core (Blazor WebAssembly) and Logto"},g=void 0,x={permalink:"/tutorial/how-to-build-apple-sign-in-with-dotnet-core-blazor-webassembly-and-logto",source:"@site/tutorial/build-with-logto/generated-dotnet-core-blazor-webassembly-apple.mdx",title:"How to build Apple sign-in with .NET Core (Blazor WebAssembly) and Logto",description:"\x3c!--",date:"2024-06-30T13:48:08.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"apple",permalink:"/tutorial/tags/apple"},{inline:!0,label:"dotnet-core-blazor-webassembly",permalink:"/tutorial/tags/dotnet-core-blazor-webassembly"},{inline:!0,label:"c#",permalink:"/tutorial/tags/c"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.33,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-apple-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","apple","dotnet-core-blazor-webassembly","c#","social-sign-in","sign-in","login"],title:"How to build Apple sign-in with .NET Core (Blazor WebAssembly) and Logto"},unlisted:!1,prevItem:{title:"How to build Twilio SMS passwordless sign-in with .NET Core (Blazor Server) and Logto",permalink:"/tutorial/how-to-build-twilio-sign-in-with-dotnet-core-blazor-server-and-logto"},nextItem:{title:"How to build AWS SES Email passwordless sign-in with .NET Core (Blazor WebAssembly) and Logto",permalink:"/tutorial/how-to-build-aws-ses-sign-in-with-dotnet-core-blazor-webassembly-and-logto"}},m={authorsImageUrls:[void 0]},j="Apple",f=[...r.d$,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...s.d$,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...p.d$,{value:"Add Apple connector",id:"add-apple-connector",level:2},...a.d$,{value:"Set up Apple Sign-in",id:"set-up-apple-sign-in",level:2},...h.d$,{value:"Save your configuration",id:"save-your-configuration",level:2},...c.d$,{value:"Enable Apple connector in Sign-in Experience",id:"enable-apple-connector-in-sign-in-experience",level:2},...l.d$,{value:"Testing and Validation",id:"testing-and-validation",level:2},...d.d$,{value:"Further readings",id:"further-readings",level:2}];function b(e){const n={a:"a",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.ZP,{connector:j,sdk:".NET Core (Blazor WebAssembly)",link:"https://learn.microsoft.com/en-us/aspnet/core/blazor/hosting-models#blazor-webassembly"}),"\n",(0,t.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,t.jsx)(s.ZP,{type:"Single page app",framework:".NET Core (Blazor WebAssembly)"}),"\n",(0,t.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,t.jsx)(p.ZP,{}),"\n",(0,t.jsx)(n.h2,{id:"add-apple-connector",children:"Add Apple connector"}),"\n",(0,t.jsx)(a.ZP,{connector:j}),"\n",(0,t.jsx)(n.h2,{id:"set-up-apple-sign-in",children:"Set up Apple Sign-in"}),"\n",(0,t.jsx)(h.ZP,{}),"\n",(0,t.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,t.jsx)(c.ZP,{connector:j}),"\n",(0,t.jsx)(n.h2,{id:"enable-apple-connector-in-sign-in-experience",children:"Enable Apple connector in Sign-in Experience"}),"\n",(0,t.jsx)(l.ZP,{connector:j}),"\n",(0,t.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,t.jsx)(d.ZP,{connector:j,sdk:".NET Core (Blazor WebAssembly)"}),"\n",(0,t.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,t.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,t.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,t.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function w(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},20492:(e,n,i)=>{i.d(n,{ZP:()=>a,d$:()=>r});var t=i(11527),o=i(17279);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The following demonstration is built on .NET Core 8.0 and ",(0,t.jsx)(n.a,{href:"https://github.com/WildGums/Blorc.OpenIdConnect",children:"Blorc.OpenIdConnect"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The .NET Core sample projects are available in the ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},81301:(e,n,i)=>{i.d(n,{ZP:()=>a,d$:()=>r});var t=i(11527),o=i(17279);const r=[];function s(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Add the NuGet package to your project:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dotnet add package Blorc.OpenIdConnect\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},72226:(e,n,i)=>{i.d(n,{ZP:()=>a,d$:()=>r});var t=i(11527),o=i(17279);const r=[{value:"Add script references",id:"add-script-references",level:3},{value:"Register services",id:"register-services",level:3},{value:"Configure application",id:"configure-application",level:3}];function s(e){const n={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"add-script-references",children:"Add script references"}),"\n",(0,t.jsxs)(n.p,{children:["Include ",(0,t.jsx)(n.code,{children:"Blorc.Core/injector.js"})," the ",(0,t.jsx)(n.code,{children:"index.html"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<head>\n  \x3c!-- ... --\x3e\n  <script src="_content/Blorc.Core/injector.js"><\/script>\n  \x3c!-- ... --\x3e\n</head>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"register-services",children:"Register services"}),"\n",(0,t.jsxs)(n.p,{children:["Add the following code to the ",(0,t.jsx)(n.code,{children:"Program.cs"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'using Blorc.OpenIdConnect;\nusing Blorc.Services;\n\nbuilder.Services.AddBlorcCore();\nbuilder.Services.AddAuthorizationCore();\nbuilder.Services.AddBlorcOpenIdConnect(\n    options =>\n    {\n        builder.Configuration.Bind("IdentityServer", options);\n    });\n\nvar webAssemblyHost = builder.Build();\n\nawait webAssemblyHost\n    .ConfigureDocumentAsync(async documentService =>\n    {\n        await documentService.InjectBlorcCoreJsAsync();\n        await documentService.InjectOpenIdConnectAsync();\n    });\n\nawait webAssemblyHost.RunAsync();\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["There's no need to use the ",(0,t.jsx)(n.code,{children:"Microsoft.AspNetCore.Components.WebAssembly.Authentication"})," package. The ",(0,t.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package will take care of the authentication process."]})}),"\n",(0,t.jsx)(n.h3,{id:"configure-application",children:"Configure application"}),"\n",(0,t.jsxs)(n.p,{children:["Add the following code to the ",(0,t.jsx)(n.code,{children:"appsettings.json"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json5",children:"{\n  // ...\n  IdentityServer: {\n    Authority: 'https://<your-logto-endpoint>/oidc',\n    ClientId: '<your-logto-app-id>',\n    PostLogoutRedirectUri: '<your-app-url>',\n    RedirectUri: '<your-app-url>',\n    ResponseType: 'code',\n    Scope: 'openid profile', // Add more scopes if needed\n  },\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Remember to add the ",(0,t.jsx)(n.code,{children:"RedirectUri"})," and ",(0,t.jsx)(n.code,{children:"PostLogoutRedirectUri"})," to the list of allowed redirect URIs in the Logto application settings. They are both the URL of your WASM application."]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},55257:(e,n,i)=>{i.d(n,{ZP:()=>a,d$:()=>r});var t=i(11527),o=i(17279);const r=[{value:"Add <code>AuthorizeView</code> component",id:"add-authorizeview-component",level:3},{value:"Set up authentication",id:"set-up-authentication",level:3},{value:"Display user information",id:"display-user-information",level:3}];function s(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h3,{id:"add-authorizeview-component",children:["Add ",(0,t.jsx)(n.code,{children:"AuthorizeView"})," component"]}),"\n",(0,t.jsxs)(n.p,{children:["In the Razor pages that require authentication, add the ",(0,t.jsx)(n.code,{children:"AuthorizeView"})," component. Let's assume it's the ",(0,t.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cshtml",children:'@using Microsoft.AspNetCore.Components.Authorization\n@page "/"\n\n<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        <button @onclick="OnLogoutButtonClickAsync">\n            Sign out\n        </button>\n    </Authorized>\n    <NotAuthorized>\n        @* Unauthenticated view *@\n        <button @onclick="OnLoginButtonClickAsync">\n            Sign in\n        </button>\n    </NotAuthorized>\n</AuthorizeView>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"set-up-authentication",children:"Set up authentication"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"Home.razor.cs"})," file (create it if it doesn't exist), add the following code:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"using Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Components;\nusing Microsoft.AspNetCore.Components.Web;\nusing Blorc.OpenIdConnect;\nusing Microsoft.AspNetCore.Components.Authorization;\n\n[Authorize]\npublic partial class Home : ComponentBase\n{\n    [Inject]\n    public required IUserManager UserManager { get; set; }\n\n    public User<Profile>? User { get; set; }\n\n    [CascadingParameter]\n    protected Task<AuthenticationState>? AuthenticationStateTask { get; set; }\n\n    protected override async Task OnInitializedAsync()\n    {\n        User = await UserManager.GetUserAsync<User<Profile>>(AuthenticationStateTask!);\n    }\n\n    private async Task OnLoginButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignInRedirectAsync();\n    }\n\n    private async Task OnLogoutButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignOutRedirectAsync();\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Once the user is authenticated, the ",(0,t.jsx)(n.code,{children:"User"})," property will be populated with the user information."]}),"\n",(0,t.jsx)(n.h3,{id:"display-user-information",children:"Display user information"}),"\n",(0,t.jsxs)(n.p,{children:["Here are some examples of how to display user information in the ",(0,t.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cshtml",children:'<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        @* ... *@\n        <p>You are signed in as @(@User?.Profile?.Name ?? "(unknown name)").</p>\n    </Authorized>\n    @* ... *@\n</AuthorizeView>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For more properties and claims, check the ",(0,t.jsx)(n.code,{children:"User"})," and ",(0,t.jsx)(n.code,{children:"Profile"})," classes in the ",(0,t.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package."]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},88065:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},16872:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/domain-and-url-f8f432e8a15c2c1cdf9e59b1a2b72049.png"},857:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/enable-sign-in-with-apple-in-xcode-26680889a51468c3671f3011fd44b5f1.png"},99550:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/enable-sign-in-with-apple-42664e79db1a8966b1fc626a4bb67269.png"},43477:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},57794:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},75877:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},68150:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},17279:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var t=i(50959);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);