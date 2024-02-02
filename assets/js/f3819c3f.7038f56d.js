"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[49921],{41432:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h3,{id:"set-up-azure-ad-in-the-azure-portal",children:"Set up Azure AD in the Azure Portal"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Visit the ",(0,i.jsx)(e.a,{href:"https://portal.azure.com/#home",children:"Azure Portal"})," and sign in with your Azure account. You need to have an active subscription to access Azure AD."]}),"\n",(0,i.jsxs)(e.li,{children:["Click the ",(0,i.jsx)(e.strong,{children:"Azure Active Directory"})," from the services they offer, and click the ",(0,i.jsx)(e.strong,{children:"App Registrations"})," from the left menu."]}),"\n",(0,i.jsxs)(e.li,{children:["Click ",(0,i.jsx)(e.strong,{children:"New Registration"})," at the top and enter a description, select your ",(0,i.jsx)(e.strong,{children:"access type"})," and add your ",(0,i.jsx)(e.strong,{children:"Redirect URI"}),", which redirect the user to the application after logging in. In our case, this will be ",(0,i.jsx)(e.code,{children:"${your_logto_origin}/callback/${connector_id}"}),". e.g. ",(0,i.jsx)(e.code,{children:"https://logto.dev/callback/${connector_id}"}),". You need to select Web as Platform. The ",(0,i.jsx)(e.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page."]}),"\n",(0,i.jsxs)(e.li,{children:["If you select ",(0,i.jsx)(e.strong,{children:"Single Tenant"})," for access type then you need to enter ",(0,i.jsx)(e.strong,{children:"TenantID"}),", else you need to enter ",(0,i.jsx)(e.code,{children:"common"})," as Tenant ID."]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"configure-your-client-secret",children:"Configure your client secret"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["In your newly created project, click the ",(0,i.jsx)(e.strong,{children:"Certificates & Secrets"})," to get a client secret, and click the ",(0,i.jsx)(e.strong,{children:"New client secret"})," from the top."]}),"\n",(0,i.jsx)(e.li,{children:"Enter a description and an expiration."}),"\n",(0,i.jsxs)(e.li,{children:["This will only show your client secret once. Save the ",(0,i.jsx)(e.strong,{children:"value"})," to a secure location."]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Add your App Registration's ",(0,i.jsx)(e.strong,{children:"Client ID"})," into logto json."]}),"\n",(0,i.jsxs)(e.li,{children:["Add your ",(0,i.jsx)(e.strong,{children:"Client Secret"})," into logto json."]}),"\n",(0,i.jsxs)(e.li,{children:["Add your App Registration's ",(0,i.jsx)(e.strong,{children:"Tenant ID"})," into logto json."]}),"\n",(0,i.jsxs)(e.li,{children:["Add your Microsoft ",(0,i.jsx)(e.strong,{children:"Login Url"}),' into logto json. This defaults to "',(0,i.jsx)(e.a,{href:"https://login.microsoftonline.com/",children:"https://login.microsoftonline.com/"}),"\" for many applications, but you can set your custom domain if you have one. (Don't forget the trailing slash)"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsonc",children:'{\n  "clientId": "<client-id>",\n  "clientSecret": "<client-secret>",\n  "tenantId": "<tenant-id>", // use "common" if you did\'t select **Single Tenant**\n  "cloudInstance": "https://login.microsoftonline.com/"\n}\n'})}),"\n",(0,i.jsx)(e.h4,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Name"}),(0,i.jsx)(e.th,{children:"Type"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"clientId"}),(0,i.jsx)(e.td,{children:"string"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"clientSecret"}),(0,i.jsx)(e.td,{children:"string"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"tenantId"}),(0,i.jsx)(e.td,{children:"string"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"cloudInstance"}),(0,i.jsx)(e.td,{children:"string"})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"references",children:"References"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-web-app-sign-user-overview?tabs=nodejs",children:"Web app that signs in users"})})]})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},38645:function(n,e,t){t.d(e,{ZP:function(){return d}});var i=t(11527),o=t(17279),r=t(53063),s=t(90695),c=t(85978),a=t(13994);function l(n){const e={h3:"h3",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h3,{id:"add-logto-sdk-as-a-dependency",children:"Add Logto SDK as a dependency"}),"\n",(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(e.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(e.h3,{id:"sign-in",children:"Sign in"}),"\n",(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(a.ZP,{sdk:"flutter"})]})}function d(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},55458:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={img:"img",p:"p",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Connector tab",src:t(10766).Z+"",width:"3352",height:"1226"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',n.connector,'" and click "Next".']}),"\n",(0,i.jsx)(e.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(e.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},32778:function(n,e,t){t.d(e,{ZP:function(){return c}});var i=t(11527),o=t(17279),r=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png";function s(n){const e={code:"code",h3:"h3",img:"img",p:"p",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Get Started",src:t(50554).Z+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(e.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(e.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(e.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Framework List",src:t(3108).Z+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(e.p,{children:['In the opening modal, scroll to the "',n.type,'" section or filter all the available "\n',n.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(e.p,{children:["Click the"," ","\n",n.framework.split("or").map((n=>`"${n.trim()}"`)).join(" or ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(e.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:r,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(e.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,i.jsx)(e.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(s,{...n})}):s(n)}},81057:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={admonition:"admonition",img:"img",p:"p",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Sign-in Experience tab",src:t(65266).Z+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(e.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',n.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(e.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',n.connector,'". Then\nyou should be able to see a button with text "Continue with ',n.connector,'" in the preview\nsection.']})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Save changes",src:t(79120).Z+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(e.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},10444:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"https://logto.io",children:"Logto"})," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control."]})}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsxs)(e.p,{children:["In this article, we will go through the steps to quickly build the ",n.connector," sign-in\nexperience (user authentication) with"," "]}),(0,i.jsx)("a",{href:n.link,target:"_blank",rel:"noopener",children:n.sdk}),(0,i.jsx)("span",{children:" and "}),(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:(0,i.jsx)(e.p,{children:"Logto"})}),(0,i.jsx)(e.p,{children:"."})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(e.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)("span",{children:[(0,i.jsxs)(e.p,{children:["Basic knowledge of"," "]}),(0,i.jsx)("a",{href:n.link,target:"_blank",rel:"noopener",children:n.sdk}),(0,i.jsx)(e.p,{children:"."})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",n.connector," account."]}),"\n"]}),"\n"]})]})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},69441:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={p:"p",...(0,o.a)(),...n.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(e.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."]})})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},13994:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={admonition:"admonition",p:"p",...(0,o.a)(),...n.components};return(0,i.jsx)(e.admonition,{title:"Test your integration",type:"info",children:(0,i.jsx)("p",{children:(0,i.jsxs)(e.p,{children:["Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},93974:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={p:"p",...(0,o.a)(),...n.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(e.p,{children:["Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"]})})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},52786:function(n,e,t){t.r(e),t.d(e,{assets:function(){return f},connector:function(){return A},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return p},metadata:function(){return j},toc:function(){return x}});var i=t(11527),o=t(17279),r=t(10444),s=t(32778),c=t(55458),a=t(69441),l=t(81057),d=t(93974),u=t(38645),h=t(41432);const p={slug:"how-to-build-azure-ad-sign-in-with-flutter-and-logto",authors:"logto",tags:["authentication","azure-ad","flutter","dart","social-sign-in","sign-in","login"],title:"How to build Azure AD sign-in with Flutter and Logto"},g=void 0,j={permalink:"/tutorial/how-to-build-azure-ad-sign-in-with-flutter-and-logto",source:"@site/tutorial/build-with-logto/generated-flutter-azure-ad.mdx",title:"How to build Azure AD sign-in with Flutter and Logto",description:"\x3c!--",date:"2024-02-02T05:17:53.000Z",formattedDate:"February 2, 2024",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"azure-ad",permalink:"/tutorial/tags/azure-ad"},{label:"flutter",permalink:"/tutorial/tags/flutter"},{label:"dart",permalink:"/tutorial/tags/dart"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.295,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-azure-ad-sign-in-with-flutter-and-logto",authors:"logto",tags:["authentication","azure-ad","flutter","dart","social-sign-in","sign-in","login"],title:"How to build Azure AD sign-in with Flutter and Logto"},unlisted:!1,prevItem:{title:"How to build AWS SES Email passwordless sign-in with Flutter and Logto",permalink:"/tutorial/how-to-build-aws-ses-sign-in-with-flutter-and-logto"},nextItem:{title:"How to build Discord sign-in with Flutter and Logto",permalink:"/tutorial/how-to-build-discord-sign-in-with-flutter-and-logto"}},f={authorsImageUrls:[void 0]},x=[{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},{value:"Add Azure AD connector",id:"add-azure-ad-connector",level:2},{value:"Set up Azure AD",id:"set-up-azure-ad",level:2},{value:"Save your configuraiton",id:"save-your-configuraiton",level:2},{value:"Enable Azure AD connector in Sign-in Experience",id:"enable-azure-ad-connector-in-sign-in-experience",level:2},{value:"Testing and Validation",id:"testing-and-validation",level:2},{value:"Further readings",id:"further-readings",level:2}],A="Azure AD";function m(n){const e={a:"a",h2:"h2",p:"p",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{connector:A,sdk:"Flutter",link:"https://flutter.dev/"}),"\n",(0,i.jsx)(e.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,i.jsx)(s.ZP,{type:"Native App",framework:"Flutter"}),"\n",(0,i.jsx)(e.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,i.jsx)(u.ZP,{}),"\n",(0,i.jsx)(e.h2,{id:"add-azure-ad-connector",children:"Add Azure AD connector"}),"\n",(0,i.jsx)(c.ZP,{connector:A}),"\n",(0,i.jsx)(e.h2,{id:"set-up-azure-ad",children:"Set up Azure AD"}),"\n",(0,i.jsx)(h.ZP,{}),"\n",(0,i.jsx)(e.h2,{id:"save-your-configuraiton",children:"Save your configuraiton"}),"\n",(0,i.jsx)(a.ZP,{connector:A}),"\n",(0,i.jsx)(e.h2,{id:"enable-azure-ad-connector-in-sign-in-experience",children:"Enable Azure AD connector in Sign-in Experience"}),"\n",(0,i.jsx)(l.ZP,{connector:A}),"\n",(0,i.jsx)(e.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,i.jsx)(d.ZP,{connector:A,sdk:"Flutter"}),"\n",(0,i.jsx)(e.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,i.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,i.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,i.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function b(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(m,{...n})}):m(n)}},33437:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={a:"a",p:"p",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:(0,i.jsxs)(e.p,{children:["Let's switch to the Application details page of Admin Console in this section. Add a Redirect\nURI ",(0,i.jsx)("code",{children:n.redirectUri}),' and click "Save Changes".']})}),"\n",(0,i.jsx)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"https://www.oauth.com/oauth2-servers/redirect-uris/",children:"Redirect URI"})," is an OAuth 2.0 concept which implies the location should redirect after authentication."]})]})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},38256:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={admonition:"admonition",p:"p",...(0,o.a)(),...n.components};return(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)("p",{children:(0,i.jsxs)(e.p,{children:["Before calling ",(0,i.jsx)("code",{children:n.calling}),", make sure you have correctly configured Redirect URI\nin Admin Console."]})})})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},53063:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["Our flutter SDK package is published on ",(0,i.jsx)(e.a,{href:"https://pub.dev/packages/logto_dart_sdk",children:"pub.dev"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"flutter pub get logto_dart_sdk\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Or you may directly get your own copy of the SDK from ",(0,i.jsx)(e.a,{href:"https://github.com/logto-io/dart",children:"github"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/logto-io/dart\n"})})]})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},90695:function(n,e,t){t.d(e,{ZP:function(){return l}});var i=t(11527),o=t(17279),r=t(84482),s=t(33437),c=t(38256);function a(n){const e={code:"code",h3:"h3",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h3,{id:"configure-redirect-uri",children:"Configure Redirect URI"}),"\n",(0,i.jsx)(s.ZP,{figureSrc:r.Z,redirectUri:"io.logto://callback"}),"\n",(0,i.jsx)(c.ZP,{calling:".signIn(redirectUri)"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",children:"void signIn() async {\n  await logtoClient.signIn(redirectUri);\n}\n"})})]})}function l(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},85978:function(n,e,t){t.d(e,{ZP:function(){return s}});var i=t(11527),o=t(17279);function r(n){const e={code:"code",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",children:"import 'package:logto_dart_sdk/logto_dart_sdk.dart';\nimport 'package:http/http.dart' as http;\n\n// ...\nlate LogtoClient logtoClient;\n\n// LogtoConfig\nfinal logtoConfig = const LogtoConfig(\n  endpoint: \"<your-logto-endpoint>\", // E.g. http://localhost:3001\n  appId: \"<your-app-id>\"\n  ...\n);\n\nvoid _init() async  {\n  logtoClient = LogtoClient(\n    config: logtoConfig,\n    httpClient: http.Client(), // Optional http client\n  );\n}\n\n"})})}function s(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},84482:function(n,e){e.Z="data:image/png;base64,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"},10766:function(n,e,t){e.Z=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},3108:function(n,e,t){e.Z=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},50554:function(n,e,t){e.Z=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},79120:function(n,e,t){e.Z=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},65266:function(n,e,t){e.Z=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},17279:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return s}});var i=t(50959);const o={},r=i.createContext(o);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);