"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[9099],{41432:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"set-up-azure-ad-in-the-azure-portal",children:"Set up Azure AD in the Azure Portal"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Visit the ",(0,o.jsx)(n.a,{href:"https://portal.azure.com/#home",children:"Azure Portal"})," and sign in with your Azure account. You need to have an active subscription to access Azure AD."]}),"\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Azure Active Directory"})," from the services they offer, and click the ",(0,o.jsx)(n.strong,{children:"App Registrations"})," from the left menu."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"New Registration"})," at the top and enter a description, select your ",(0,o.jsx)(n.strong,{children:"access type"})," and add your ",(0,o.jsx)(n.strong,{children:"Redirect URI"}),", which redirect the user to the application after logging in. In our case, this will be ",(0,o.jsx)(n.code,{children:"${your_logto_origin}/callback/${connector_id}"}),". e.g. ",(0,o.jsx)(n.code,{children:"https://logto.dev/callback/${connector_id}"}),". You need to select Web as Platform. The ",(0,o.jsx)(n.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page."]}),"\n",(0,o.jsxs)(n.li,{children:["If you select ",(0,o.jsx)(n.strong,{children:"Single Tenant"})," for access type then you need to enter ",(0,o.jsx)(n.strong,{children:"TenantID"}),", else you need to enter ",(0,o.jsx)(n.code,{children:"common"})," as Tenant ID."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"configure-your-client-secret",children:"Configure your client secret"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In your newly created project, click the ",(0,o.jsx)(n.strong,{children:"Certificates & Secrets"})," to get a client secret, and click the ",(0,o.jsx)(n.strong,{children:"New client secret"})," from the top."]}),"\n",(0,o.jsx)(n.li,{children:"Enter a description and an expiration."}),"\n",(0,o.jsxs)(n.li,{children:["This will only show your client secret once. Save the ",(0,o.jsx)(n.strong,{children:"value"})," to a secure location."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Add your App Registration's ",(0,o.jsx)(n.strong,{children:"Client ID"})," into logto json."]}),"\n",(0,o.jsxs)(n.li,{children:["Add your ",(0,o.jsx)(n.strong,{children:"Client Secret"})," into logto json."]}),"\n",(0,o.jsxs)(n.li,{children:["Add your App Registration's ",(0,o.jsx)(n.strong,{children:"Tenant ID"})," into logto json."]}),"\n",(0,o.jsxs)(n.li,{children:["Add your Microsoft ",(0,o.jsx)(n.strong,{children:"Login Url"}),' into logto json. This defaults to "',(0,o.jsx)(n.a,{href:"https://login.microsoftonline.com/",children:"https://login.microsoftonline.com/"}),"\" for many applications, but you can set your custom domain if you have one. (Don't forget the trailing slash)"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsonc",children:'{\n  "clientId": "<client-id>",\n  "clientSecret": "<client-secret>",\n  "tenantId": "<tenant-id>", // use "common" if you did\'t select **Single Tenant**\n  "cloudInstance": "https://login.microsoftonline.com/"\n}\n'})}),"\n",(0,o.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientId"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientSecret"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tenantId"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"cloudInstance"}),(0,o.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-web-app-sign-user-overview?tabs=nodejs",children:"Web app that signs in users"})})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},97351:function(e,n,t){t.d(n,{ZP:function(){return d}});var o=t(11527),i=t(17279),r=t(71971),s=t(34460),a=t(49736),c=t(13994);function l(e){const n={h3:"h3",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"add-logto-sdk-as-a-dependency",children:"Add Logto SDK as a dependency"}),"\n",(0,o.jsx)(r.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,o.jsx)(a.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"sign-in",children:"Sign in"}),"\n",(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsx)(c.ZP,{sdk:"Express"})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},55458:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(e){const n={img:"img",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Connector tab",src:t(10766).Z+"",width:"3352",height:"1226"})}),"\n",(0,o.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,o.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,o.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},32778:function(e,n,t){t.d(n,{ZP:function(){return a}});var o=t(11527),i=t(17279),r=t.p+"assets/images/create-application-modal-a9838383da54c969256d05557ca13639.png";function s(e){const n={h3:"h3",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Create application",src:t(95561).Z+"",width:"2368",height:"226"})}),"\n",(0,o.jsx)(n.p,{children:'Once the page is loaded, in the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab.'}),"\n",(0,o.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,o.jsxs)("p",{children:['In the opening modal, select the "',e.type,'" option as the application type.']}),"\n",(0,o.jsx)("img",{src:r,alt:"Create Application modal",width:"700"}),"\n",(0,o.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,o.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,o.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},81057:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(65266).Z+"",width:"3160",height:"1822"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Save changes",src:t(79120).Z+"",width:"2474",height:"188"})}),"\n",(0,o.jsx)(n.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},10444:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control."]})}),"\n",(0,o.jsxs)("p",{children:[(0,o.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with"," "]}),(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),(0,o.jsx)("span",{children:" and "}),(0,o.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:(0,o.jsx)(n.p,{children:"Logto"})}),(0,o.jsx)(n.p,{children:"."})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,o.jsx)(n.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:[(0,o.jsxs)(n.p,{children:["Basic knowledge of"," "]}),(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),(0,o.jsx)(n.p,{children:"."})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},69441:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(e){const n={p:"p",...(0,i.a)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',e.connector," connector should be available now."]})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},13994:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(e){const n={admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,o.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},93974:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(e){const n={p:"p",...(0,i.a)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},77322:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},connector:function(){return j},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return p},metadata:function(){return x},toc:function(){return A}});var o=t(11527),i=t(17279),r=t(10444),s=t(32778),a=t(55458),c=t(69441),l=t(81057),d=t(93974),u=t(97351),h=t(41432);const p={slug:"how-to-build-azure-ad-sign-in-with-express-and-logto",authors:"logto",tags:["authentication","azure-ad","express","js","social-sign-in","sign-in","login"],title:"How to build Azure AD sign-in with Express and Logto"},g=void 0,x={permalink:"/tutorial/how-to-build-azure-ad-sign-in-with-express-and-logto",source:"@site/tutorial/build-with-logto/generated-express-azure-ad.mdx",title:"How to build Azure AD sign-in with Express and Logto",description:"\x3c!--",date:"2023-12-18T03:43:29.825Z",formattedDate:"December 18, 2023",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"azure-ad",permalink:"/tutorial/tags/azure-ad"},{label:"express",permalink:"/tutorial/tags/express"},{label:"js",permalink:"/tutorial/tags/js"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.29,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-azure-ad-sign-in-with-express-and-logto",authors:"logto",tags:["authentication","azure-ad","express","js","social-sign-in","sign-in","login"],title:"How to build Azure AD sign-in with Express and Logto"},unlisted:!1,prevItem:{title:"How to build Apple sign-in with Express and Logto",permalink:"/tutorial/how-to-build-apple-sign-in-with-express-and-logto"},nextItem:{title:"How to build Discord sign-in with Express and Logto",permalink:"/tutorial/how-to-build-discord-sign-in-with-express-and-logto"}},f={authorsImageUrls:[void 0]},A=[{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},{value:"Add Azure AD connector",id:"add-azure-ad-connector",level:2},{value:"Set up Azure AD",id:"set-up-azure-ad",level:2},{value:"Save your configuraiton",id:"save-your-configuraiton",level:2},{value:"Enable Azure AD connector in Sign-in Experience",id:"enable-azure-ad-connector-in-sign-in-experience",level:2},{value:"Testing and Validation",id:"testing-and-validation",level:2},{value:"Further readings",id:"further-readings",level:2}],j="Azure AD";function m(e){const n={a:"a",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.ZP,{connector:j,sdk:"Express",link:"https://expressjs.com/"}),"\n",(0,o.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,o.jsx)(s.ZP,{type:"Traditional Web"}),"\n",(0,o.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,o.jsx)(u.ZP,{}),"\n",(0,o.jsx)(n.h2,{id:"add-azure-ad-connector",children:"Add Azure AD connector"}),"\n",(0,o.jsx)(a.ZP,{connector:j}),"\n",(0,o.jsx)(n.h2,{id:"set-up-azure-ad",children:"Set up Azure AD"}),"\n",(0,o.jsx)(h.ZP,{}),"\n",(0,o.jsx)(n.h2,{id:"save-your-configuraiton",children:"Save your configuraiton"}),"\n",(0,o.jsx)(c.ZP,{connector:j}),"\n",(0,o.jsx)(n.h2,{id:"enable-azure-ad-connector-in-sign-in-experience",children:"Enable Azure AD connector in Sign-in Experience"}),"\n",(0,o.jsx)(l.ZP,{connector:j}),"\n",(0,o.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,o.jsx)(d.ZP,{connector:j,sdk:"Express"}),"\n",(0,o.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,o.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,o.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,o.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function b(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},71971:function(e,n,t){t.d(n,{ZP:function(){return c}});var o=t(11527),i=t(17279),r=t(75268),s=t(67234);function a(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(r.Z,{value:"npm",label:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm i @logto/express cookie-parser express-session\n"})})}),(0,o.jsx)(r.Z,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn add @logto/express cookie-parser express-session\n"})})}),(0,o.jsx)(r.Z,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm add @logto/express cookie-parser express-session\n"})})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},34460:function(e,n,t){t.d(n,{ZP:function(){return l}});var o=t(11527),i=t(17279),r=t(75800),s=t(74976),a=t(58123);function c(e){const n={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.ZP,{}),"\n",(0,o.jsx)(n.h3,{id:"configure-sign-in-redirect-uri",children:"Configure sign-in redirect URI"}),"\n",(0,o.jsx)(s.ZP,{figureSrc:r.Z,redirectUri:"http://localhost:3000/logto/sign-in-callback"}),"\n",(0,o.jsx)(n.h3,{id:"prepare-logto-routes",children:"Prepare logto routes"}),"\n",(0,o.jsx)(n.p,{children:"Prepare routes to connect with Logto."}),"\n",(0,o.jsx)(n.p,{children:"Go back to your IDE/editor, use the following code to implement the API routes first:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { handleAuthRoutes } from '@logto/express';\n\napp.use(handleAuthRoutes(config));\n"})}),"\n",(0,o.jsx)(n.p,{children:"This will create 3 routes automatically:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/logto/sign-in"}),": Sign in with Logto."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/logto/sign-in-callback"}),": Handle sign-in callback."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/logto/sign-out"}),": Sign out from Logto."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"implement-sign-in",children:"Implement sign-in"}),"\n",(0,o.jsx)(n.p,{children:"We're almost there! Now, create a sign-in button to redirect to the sign-in route on user click."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"app.get('/', (req, res) => {\n  res.setHeader('content-type', 'text/html');\n  res.end(`<div><a href=\"/logto/sign-in\">Sign In</a></div>`);\n});\n"})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},49736:function(e,n,t){t.d(n,{ZP:function(){return c}});var o=t(11527),i=t(17279),r=t(7742),s=t(24510);function a(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsx)(r.ZP,{}),"\n",(0,o.jsx)(n.p,{children:"Import and initialize LogtoClient:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { LogtoExpressConfig } from '@logto/express';\n\nconst config: LogtoExpressConfig = {\n  appId: '<your-application-id>',\n  appSecret: '<your-application-secret>',\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  baseUrl: '<your-express-app-base-url>', // E.g. http://localhost:3000\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"prepare-required-middlewares",children:"Prepare required middlewares"}),"\n",(0,o.jsxs)(n.p,{children:["The SDK requires ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/express-session",children:"express-session"})," to be configured in prior."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import cookieParser from 'cookie-parser';\nimport session from 'express-session';\n\napp.use(cookieParser());\napp.use(\n  session({\n    secret: 'random_session_key',\n    cookie: { maxAge: 14 * 24 * 60 * 60 * 1000 }, // In miliseconds\n  })\n);\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},74976:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(e){const n={a:"a",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Let's switch to the Application details page of Admin Console in this section. Add a Redirect\nURI ",(0,o.jsx)("code",{children:e.redirectUri}),' and click "Save Changes".']})}),"\n",(0,o.jsx)("img",{alt:"Redirect URI in Admin Console",src:e.figureSrc,width:"600px"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://www.oauth.com/oauth2-servers/redirect-uris/",children:"Redirect URI"})," is an OAuth 2.0 concept which implies the location should redirect after authentication."]})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},7742:function(e,n,t){t.d(n,{ZP:function(){return a}});var o=t(11527),i=t(17279),r=t.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png";function s(e){const n={admonition:"admonition",...(0,i.a)(),...e.components};return(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)("p",{children:'You can find and copy "App Secret" from application details page in Admin Console:'}),(0,o.jsx)("img",{alt:"App Secret",src:r,width:"586px"}),(0,o.jsx)(n.admonition,{type:"tip"})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},24510:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(e){const n={admonition:"admonition",code:"code",p:"p",...(0,i.a)(),...e.components};return(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["In the following code snippets, we assume your app is running on ",(0,o.jsx)(n.code,{children:"http://localhost:3000"}),"."]})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},58123:function(e,n,t){t.d(n,{ZP:function(){return a}});var o=t(11527),i=t(17279),r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABbQAAADcCAMAAACf49d1AAAAqFBMVEUAAACHh4ff4+Pf39/g4+Pg4uKJiYng5OTg4uLg5OTf4uLg5OTf4uLf5OT////6+vrg4+MZHB10d3iIiIhvcXE2ODnh4uKMjY7Fxsby8vKpqap9f4Do6upSVFWFh4jZ2tonKiuWmJmbnZ3p6epSVVXU1NXIycmpqqumqKnHyclER0dgY2O3ubm3uLj39/e/wcHl5+evsbGOkJHs7u6Eh4jR0tK3uLnq6+sW6z8TAAAADnRSTlMAgCAQ75B/39/PYJ+gMFVY5VoAABVpSURBVHja7NoxasNAEEDRZWUh2YrRtAGfQSy40P1vllaFEmJCvFO8d4X5xTC7BQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgL8absv1EnRwuS63oSSjh9/SA0dv66GOBtLXUksieniRHjj6/x6GMSLac1vp4vPZImIsWejhJXrg6C091DliN5Gutj1iSrJc6aE/PfBTD/c5mpF0t7WY7iUBPaSgB77toc6xryTwSLFb6SELPXDewzDHYyWFPabuvwb0kIceOO1hjLaSROv/+qSHRPTASQ81wr0qjS2ilm70kI0eOOnhw8Eqk73raqWHbPTwxd65rcoJQ2G40N70AJF1IQQlQTeIBemgrfP+j9ZEl7qqtqEUajL+H3TvOWRmg//BeCw4+OE9VqRR8S37cOFeTPghNuAHcPDDJ+yxiosy+/TuOuCH2IAfwN4PX7LvCkTE9+zzu+uAH2IDfgB7P3zMtAIR8S37+O464IfYgB/A3g8fMgWiIvvw7jrgh+iAH8DODxlEiYwse3cd8EN0wA9AkmUQJToQUgA/AJR2QiCkAH4AKO2EQEgB/ABQ2gmBkAL4AaC0EwIhBfADQGknBEIK4AeA0k4IhBTADwClnRAIKYAfwD+VdlmWZ0+0bbrH+KYYXZZikJ5/MeoU7Ycxej+0ZG54DW30IdUniurx0T2s+oW86boxl4IeHMEeAgn7Af0Q5P+X9oOoVowlMsqju4ImWpblK9Eq0A+qlIMWCjfoSEXzMP40MzT85vrZu2U69pB6sewutxWL1W8hagxNmIY9IWCrLB6q7ibxS/kB/RDigtJW1RZSw4u+9IkszPQzD4nCg3aU5NBSFKZdRWEadStiD+mxtHMfUGOmn4sJejaIozsvbT3MQ24o8Wv5Af0Q4IrSLgsyWnk6ouciTm39W09e4Oei1G+evF/Wv5KWjMvzJso4DW3MLELl4u+xvfsD99oGij6kXNrSH/TU/kFLwimDH6SbYh795nGffEwPlGMgqsQQkKof0A8hLihtr0XPKz8jxeENouq3orSrAJSrHYbaigbRA6sDqlmU5Y/fbVUafUj3pV1tCj05ZyW3tyMXW7lWaNnMpuKZurlX8F7KD+iHEBeU9jQpstsvpV3IpGI2IIqMuciste7fYcBA5hdRSt8DdyL6kO7UtJPOTDXPe1p2AydSn5S2IaOFhx4KJOoH9EOAC0qbZ0tibjTKlZt2r4ZEGY+i1GS8uP1BlAqivPsLri/t3ikv32sm6Wu1UFp7UtpW9rQu3HiQqB/QDwGuKG2eCpVm23XFArAEQ0AUXjtKyimzPRV6J4rebf54K4zqTkQfUhZLTK7VLqKikSWytB/Tl8jvAIn6Af0Q4KLSVgMV9brgWqJ9aM9FqRrPozou18YP53BLUfLa5VqIoq0hutdJPdGHlMWSam8UVM8zp0Bpd7zTZHMUSNQP6IcAV5V2To7+NGI1UeiUHnOIsJmHFFQtohTG8FljfHDLeMjxVLci+pCelbZ8JkbQjBWlLTyE0n4JP6AfQlxU2qrjc3D/Yk0qF7Q+Trn4W3MWhSmemkVhhnsdG04gpIfSHtQGUT2NGAOl7TehUdov4Qf0Q4CLSpv3958GzlD1531W5XNZCcuQ1q2jJupYlK5xjLlelW489l6bPkmEdFfaNRXCJpPU+bJZ++Z4uOHhfdpGgUT9gH4IEEVpW86kiCknWcy2WJTTTGraKEQPIMUphHQnVsdPxWEhPlrEw09LO2c/sYdw9ki6fkA/BIiitLW8GKL1y5MnVzKPUpSeaH+YoW4nKiILUdIK6U4sKxvXUKHn/ZhvvyttZvAj73qBxEv5Af0QIIrS9iFr97eLYaFYJhbluL3EgTWbvhVESSukJ1dEdpvQT86leTsvbRHMQS8P76v2C/gB/RAgjtL2OTWj08C2azoffBDYtl6MwxVP+a/f1Ypv0hAlqZA6sR6WyfnuQK2TT1tvC7W6ofFv5l2xL22m9UO8h3qi4n67Jl/HD+iHAJGUtq5oweTbNg5j3nai7C62aFkjfquDKEmF9CttVOs93XZ3WX3KQW9npa17eZM3kKwf0A8BIint9XbJxVOfv8SiMIYGtWHIyCuYB4iSVEgPpa30c5beiOiVNRdyaw9ncjHNwIbB3aJS9gP6IUg0/91YaZvx7fgSJk23COme/OgGbcfQKVkahnlRP6AfVmIqbcAgpGADfgC/gNK+AQgpgB8ASjshEFIAPwCUdkIgpAB+ACjthEBIAfwAUNoJgZAC+AGgtBMCIQXwA0BpJwRCCuAHgNJOCIQU/GTvjlEbhqIgikaNyyD4+99rlPgXqQyqZh46Zwua+0gwtuwBR3sQkWIPONqDiBR7wNEeRKTYA472ICLFHnC0BxEp9oCjPYhIsQcc7UFEij3gaA8iUuwBR3sQkWIPONqDiBR7wNEeRKTYA472ICLFHvh0tKnzlWMPhW48Pnt4AA+l0I2mRPoANx6fPTzA9VC+qRKN1B7q2AP/OdqFApEe6yXSVvaAo10uEOla6yXSUvaAo10u8pfVValIO9kDjna5QKTvSkVayR5wtMsFIt2VirSRPeBol0tEuisVaSF7wNEuF4l0VyrSPvaAo10uE+mu1B7q2AOOdrlQpLtSe2hjDzja5c7zCFkXe2hjDzja5c5zhYi0kT3gaJcTKfaAoz1I7N/hl0gb2QOOdrnYB0+/kR720MYecLTLZSLdjdpDHXvA0S4XiXQ36ssUfewBR7tcItLdqK8tF7IHHO1ygUh3o34gqJE94GiXC0T6btRPcVayBxztcoFI/xr1o/ed7AFHu1zm9VKH10uVsgcc7XKR10sdXuTayh5wtMsFIr2ItJU94GiXEyn2gKM9iEixBxztQUSKPeBoDyLSH3bqgAYAAABBWP/W5GD7M6DoAac9YqToAac9YqToAac9YqToAac9YqToAac9YqToIfbKJjVCIIyCN3hQYP8OA8NgE1C8//WyMLMIDhi/GGK31lql0XrlxX9E2+dcZCBFLxsl6u9JxWvBNdIdKMVqWlTLtO6DzzlKijmnnR6l0rIRP4w2oM18QNB2vINJFgL0WuHpgLssfBnl4KkF5xrpNx86CNqBwfpiM7ikdqnMhwBhayi62aOoXxLncQcYtJVqFDpgtCdglAUH+NWuG6NdwqzB9P7+E490p2hHwMlCD2S1S2U+HCDaA1C277sSDhjtCHTW8T7SatfHECwLfxWlvD3emUe6U7TTw/o3vAFe7VKZDweIdg/47fuuhANGW/kekiz4biwrV9g/DbjX8W7L4515pDtFW9P95mUhdeOkhqnMhwNE23dj1BXtT/bNd1dOEIjib7AJCf+NCTGQJhK/9v0frQIHHKg1bdP0Xt07X9ZdHYpz5vyk6v1baH+ukGQx93lFvZlJ+efT+Vlxs374BND+3P7+r9CW6caC5kJ4K9PKSKkNLFSqyKT5Kla+DdAO++6QNswS9+RxPYXf12jxrFDVlfaWDrcpfx/SKLW85IQBTqIchw9dUmlopSbGhEq7cWg5izCeGvbwNimrFGNuz5R5W9bT9mJFQje99zIpoF1VbAWU05rKY1qZjVpF7BfXfD0quNXCQogsSumHV0r1/LywOI5q+KybJTfrhwZts0DeZusk4woZm84DtM8xgQEkF6vKqdMKc9Kh2kqbkMB64fNQFqN2/ua9v2/ROH8C7VwRxXIImb+6dlMxplJ5VvdSaAdHNnKoAbaiyxO4H1WHW5csqtz32zKCCxdX7PzBMaDpH0IiOA4Fcux4ainkSiblGUKnbfTWUg/I+O+m91YmBbQPFUNfnlDLnCtKYUsyiGlNFc8WBwrGaufYq+UV1fAW5ntoPwDatCFg6w2/LIXNcNVEoY28ERMYQDtWXw/phUbLxA2tcJBAwbat2abXhb9v8abgH0J7Dxe5YOXdOseYruX8vouwf7iZR8CyQttWZst9Q3A+Q7XOu47zuH8ICu08nIqCiQptt0uS84W5hrZjLo/H+O9CG6eWlPR0UumicQJtDDfzXIztNU7vnUwKaBMVTVceJ8tBK6PQ7jKcIablKXOaRK4nDkNhnbmENtXwQXGzfgC0pUvyKshLZYS/Y9VZdNCG8+aB2hgg5dTmiqJSe6pD+RHaArYlfp5Gfz8e2rlIqtR9QgFCoS1Pe3ENiw3athVftAV3b74t1Q11/H5AW2E4E1mFNnMB07DX0GYruOHM6T3tU2gLifWhpicj0n56zwvQ3jAL/CvD9N7JpAXaG2BtyuvWkh3XNg8SMxXC1rFWGFRUHaa1jDlkNmgzCwqoK2hTDcPrOXGLfuAt1iZnNMDBUmWEoyaqM2cdtAXBqhygzcQitX4F0iIeXtSA9wDtfUMHLY/ZiBN/P/metma1jL6SzqFUgOq+F+4KgPbS1tUWbB6fVKRDIl4fmO0B7fY3NsZhfJQXF4sraGMiaR6/D22NU6vMkZUI/gzaIA22xuk936QjtL9VFfU8L/nHidaLow961q41g0C7eByZgDavfRMvoE00fNZ727fohy5UUmue5eE1yAi/+6Kzpf6G/roZTQ8+wrq6eRRbknpRjNDGDolc+Hnw98Ohvbab2Orgl8hstMVS2L0UaKtj2RnblkGd6IvZoRNHEvHoRcG0LriG9kyA/LvQFuSKQk/G2u0E2qaqjtxhes83aQ9tquJwvfyWvcdReRImZehuHBTW4GoOaNehAvrvHNpUw2e9z3KLfuhCDfJARt0AWnSm/ob+WPIA5q6DNtxMvbdk0pDvI7Rd+523YZwh/jbWbg+H9kxckT8mendk6eiJO0rLUXPPSzS9yFMEwa2k0N4Olx8PItEF5buisXTQ5n8K7fHUptH2I7Q1AUjCDJ3eW0L7pbKK0UoUmkHsyFhEd3SBDIeMbqVVYmtuf1G3qy4Mhfb8Be2P74dWfWOn6L0QTUZJZCQG2ii0/YEJh4wDIKEazOGQOaUG1ugeRmjPbcW4IiUNk/39Hq/8/eQKk6s1FTR6EBIHppLlcBJj0IAaCCtYDi4rtClWsTlSUTMa4p9Ce8wcoU36ARP+gjZVcRQHBR3D4gm+lw3a1Mz6FNpyaKQvaHfx8f1Qq784hjiHdjOQptAWjEbooS1xPI2ZXuflCG1eTUvD5nZ8U2gXgKGY/AzaYm3vUjjGIm9hXl2EJSa1XKDQjti5fAi0l0tobwTa7h1X2hCwu+8lbVaRlUdFvMV0Bm1k8Jxhq2lTpviC9v36YYA2niMra+10sdI+hbbnLc6h3TWXoi0TfgHt2I2qs7/fFdobYxPqRJ+/LWkzlUxIIyp81/RuyFXopFcVh/6fh59Be4y/hXY8hbY6TsZa20N7ZItMM30vaP9g74xWoweBKPwG0oAax7AgEilk8fZ//0f7N3q6TlbTFrqFZuO5KXZrSJw53yY6NooXRy1olCgqPjPNQtFWuIXAUWNOe2xBu1KH9oP+BrTLwrxpQlsXf3sO7esWpzW00ZWJSts0oY11caaJ+/vVq0e4K7BWADuilqSs3qPkD1tr+DhpKbmnRtx3pziX4Nz6Rfz6V6B9RSq0oI0nLnRZGtBGkTrKYi4ng/bELhErsF5KXZaJGNajlLEJbftxI0V51VI+lOWQ6tA+SD5U0OaPor4FbW6gK4M2qviAiakFbd7Vp+QqySZ3oP1eah+klI/+Phe0V/e6fLWow0aUFNtcc+tsAXVdglTPiXJo56O41E89Hdr5Pp5wJTW0c174zTFuHTbQHnMxOCo9TwZtUxaYNUq5Jh5FSsNz/9w0QsFX9Au02bH1MnRoHyQfKmgzTGrXgDa2UcOLHNqEmezUlm1oA+yo5ebtYQfalDhfHt+o+Pv167S5K+CX+8DEXPSlp8RBQBtgD5nVyhKZmW8zBs1tENosLLpYPHDzrbU8GdrghDLayGEH2j7tBaH1YpRGBzn6Am1S6xFI+zT/czJop10MszfGTi4NEFgbhE7hzcOzGNImMb0OBYw0rj2uKD9iW03dvNz6d2gfJB8a0A75u5dGN7ShrV3CBXnHoJ1TS1lNqzWdbkAbmXM1pC2Si9TaFmRUG9q4BfTZz4P+xN9H0M+gjW1KpkQLGgWDtgClaRkgF6rSLyjw4Ew42PsvQNsPWWpuQpufVCwnqQBtfMtDC50O2ik2kAqPUYyb4VG6DgWPAV+I5EeSpkP7IPlQQRu71J1a/duGtrADxKdH0k/IRdGGtgiOeY+3lwradcJ6sePvo9xs/xjaI79Sk7F8MaJAG/5d0h+r/DnGvir5u4RtcLSXcjTYnvFcaONcLrpVPYKT4hcjaFJbaAstc2qNJM4HbZTr4fK3UayHpw5F3QOmRU2JnIzo0D5KPrSgTVPGaBQ70Mb3ups0gzbHRBBtaPPk+mhfUnuiJrQrP/N2+PC3ezFof1s6WqvFvoy1kUStEPFBS/5XPEgGp7orE23UXx3C5LM+l0mTtLHWhjqK3x8e9ND7M+dX0XWUfGjCIHwV/kjfxUSdfYG345ddDODE/X3Efwf59vZnX5E/znNZXf4nTqSjmvQ5svNs7w9Kx5hkfFTPh66NTgNtPwzzKV623U26kblPVL74qx97PnS9GrRTecZo/Ty81gxlN+lnwrr15L1061JG1+nzoes40P54g8XpmH12k5a6Eym6ej78Z++OiQCGYRgAMuhUdUivBFL+/EIiiy7/FCxpNUWjfT3jSzLfincSSrrP+GeS+7S7ywP1o30qJUUeMNpFlBR5wGgXUVLkAaNdREmRB4x2ESVFHjDaRZQUecBoF1FS5AGjXURJkQeMdhElRR4w2ou9u8lREAgCMNrhJyqjUFsTzmBIWHj/m812go7OrLqI712Br4puNuyIIUUPWNo7YkjRA5b2jhhS9IClvSOGFD1gae+IIUUPWNo7YkjRAy966DyUZKIr9eghHT2w6eEU00gitziVevSQjR7Y9nCOj/prbn7X+Cr16CEbPbDtYYh5JJE5hlKPHrLRA9se2s79J5Mpoi316CEZPfDYQx/rSBpr3duwHpLRA489NOFVmscU0ZR69JCMHnjWQx/LSBJL9KUiPSSjB5710B5dgLK4x6Et9eghGT3wvIfmGPeRBNY4NKU6PWShB37r4XKMxXer6qYlDpeSgB5S0AMvemiOEavHUtW0RopzlR5y0ANveugjYr7eRqqYrnNE9NW/X+ohBz3whx6ac1BT1yc5VukhBT3wvod2OJ+6oILu9DXkOVXp4Z/0wE+f0QMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHy3BwckAAAAAIL+v25HoAIAAAAAAAAAAAAAAAAAAMBPs3UgBs1yOSAAAAAASUVORK5CYII=";function s(e){const n={p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"The sign-in flow can be simplified as:"}),"\n",(0,o.jsx)("img",{alt:"Web sign-in flow",src:r,width:"700pt"})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},75268:function(e,n,t){t.d(n,{Z:function(){return s}});t(50959);var o=t(45924),i={tabItem:"tabItem_zBCg"},r=t(11527);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,s),hidden:t,children:n})}},67234:function(e,n,t){t.d(n,{Z:function(){return v}});var o=t(50959),i=t(45924),r=t(58748),s=t(28903),a=t(88137),c=t(70670),l=t(91391),d=t(47841);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:i}}=e;return{value:n,label:t,attributes:o,default:i}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[s,c]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[l,u]=g({queryString:t,groupId:i}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Nk)(t);return[i,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),A=(()=>{const e=l??x;return p({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{A&&c(A)}),[A]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=t(77691),A={tabList:"tabList_nHxI",tabItem:"tabItem_BSGW"},j=t(11527);function m(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),i=a[t].value;i!==o&&(l(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.Z)("tabs__item",A.tabItem,r?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,i.Z)("tabs-container",A.tabList),children:[(0,j.jsx)(m,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function v(e){const n=(0,f.Z)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(n))}},75800:function(e,n,t){n.Z=t.p+"assets/images/next-redirect-uri-3200717bb327c2d84cfe6173c9d8aef5.png"},10766:function(e,n,t){n.Z=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},95561:function(e,n,t){n.Z=t.p+"assets/images/create-application-8ace18547a152b97cea519666a0e7bbf.png"},79120:function(e,n,t){n.Z=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},65266:function(e,n,t){n.Z=t.p+"assets/images/sie-tab-8b47b6ad0a8bbc115fc6e2ee67ed1566.png"},17279:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var o=t(50959);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);