"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[54190],{49613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return n?i.createElement(m,s(s({ref:t},d),{},{components:n})):i.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var u=2;u<o;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},37547:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var i=n(665),a=n(40151),o=(n(59496),n(49613)),s=n(21267),r=["components"],l={slug:"design-for-seamless-sie-1",authors:["guamian","rany"],tags:["design","sign-in","ux"]},u="The design considerations for a seamless sign-in experience (First Chapter)",d={permalink:"/blog/design-for-seamless-sie-1",source:"@site/blog/2022-11-15-design-for-seamless-sie-1/index.mdx",title:"The design considerations for a seamless sign-in experience (First Chapter)",description:"We are thrilled to announce the release of the newest version of the Sign-in Experience, which includes more ways to sign-in and sign-up, as well as a framework that is easier to understand and more flexible to configure in the Admin Console. When compared to Sign-in Experience V1, this version's capability was expanded so that it could support a greater variety of flexible use cases. We hope that this will be able to assist developers in delivering a successful sign-in flow, which will also be appreciated by the end users.",date:"2022-11-15T00:00:00.000Z",formattedDate:"November 15, 2022",tags:[{label:"design",permalink:"/blog/tags/design"},{label:"sign-in",permalink:"/blog/tags/sign-in"},{label:"ux",permalink:"/blog/tags/ux"}],readingTime:15.065,hasTruncateMarker:!0,authors:[{name:"Guamian",title:"Product & Design at Silverhand",url:"https://github.com/fleuraly",imageURL:"https://github.com/fleuraly.png",key:"guamian"},{name:"Ran",title:"Product & Design at Silverhand",url:"https://github.com/Rany0101",imageURL:"https://github.com/Rany0101.png",key:"rany"}],frontMatter:{slug:"design-for-seamless-sie-1",authors:["guamian","rany"],tags:["design","sign-in","ux"]},prevItem:{title:"CIAM 101: Authentication, Identity, SSO",permalink:"/blog/ciam-101-intro-authn-sso"},nextItem:{title:"Logto x Hasura: How to use open-source auth + GraphQL solution to boost your project",permalink:"/blog/logto-x-hasura"}},c={authorsImageUrls:[void 0,void 0]},p=[{value:"Why do we design an end-to-end Sign-in Experience?",id:"why-do-we-design-an-end-to-end-sign-in-experience",level:2},{value:"Painpoints",id:"painpoints",level:3},{value:"Developer, Team (Builders)",id:"developer-team-builders",level:4},{value:"Business stakeholders",id:"business-stakeholders",level:4},{value:"End customers",id:"end-customers",level:4},{value:"Similar solutions in the market",id:"similar-solutions-in-the-market",level:4},{value:"Our solutions so far",id:"our-solutions-so-far",level:2},{value:"Modularize Sign-in Experience like LEGO blocks, atomic but scalable",id:"modularize-sign-in-experience-like-lego-blocks-atomic-but-scalable",level:2},{value:"Step 1: Define methods",id:"step-1-define-methods",level:3},{value:"Identifier",id:"identifier",level:4},{value:"Authentication Factor",id:"authentication-factor",level:4},{value:"Third-party connector",id:"third-party-connector",level:4},{value:"Personal information",id:"personal-information",level:4},{value:"Step 2: Design an ideal flow",id:"step-2-design-an-ideal-flow",level:3},{value:"Step 3: Guide by UX design strategies",id:"step-3-guide-by-ux-design-strategies",level:3},{value:"Step 4: Brand and look and feel",id:"step-4-brand-and-look-and-feel",level:3},{value:"Closing notes",id:"closing-notes",level:2}],h={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are thrilled to announce the release of the newest version of the Sign-in Experience, which includes more ways to sign-in and sign-up, as well as a framework that is easier to understand and more flexible to configure in the Admin Console. When compared to Sign-in Experience V1, this version's capability was expanded so that it could support a greater variety of flexible use cases. We hope that this will be able to assist developers in delivering a successful sign-in flow, which will also be appreciated by the end users."),(0,o.kt)("p",null,"In this article, we'll go over the history of Sign-in Experience, including its conception, design decisions, and product tradeoffs. You will also gain a better grasp of how to construct a successful and frictionless sign-in or sign-up experience."),(0,o.kt)("p",null,"If you're unfamiliar with Logto, let me back up a bit and define it, as well as the connection between Logto and the Sign-in Experience."),(0,o.kt)("p",null,"As an OIDC-based identity service, Logto is available as open source software allowing professionals, groups, and companies to set up the necessary sign-in and identity infrastructure in a matter of minutes."),(0,o.kt)("center",{style:{margin:"2rem"}},(0,o.kt)("div",null,(0,o.kt)("img",{src:s.Z,alt:"Architecture",width:"640"})),(0,o.kt)("div",null,(0,o.kt)("i",null,"Our portfolio and key components of Logto"))),(0,o.kt)("p",null,"Providing a straightforward sign-up process forms one of our top priorities. The sign-in process can be quickly customized by developers using the Admin Console without the need for any custom coding."),(0,o.kt)("h2",{id:"why-do-we-design-an-end-to-end-sign-in-experience"},"Why do we design an end-to-end Sign-in Experience?"),(0,o.kt)("p",null,"We saw a lot of challenges and problems in the market before we started Logto, and that's why we spent tonnes of time researching and talking to customers, developers, and businesses that were having trouble with their sign-up processes."),(0,o.kt)("h3",{id:"painpoints"},"Painpoints"),(0,o.kt)("h4",{id:"developer-team-builders"},"Developer, Team (Builders)"),(0,o.kt)("p",null,"Creating a smooth sign-up process is a mundane but intricate endeavor. Tasks like composing 0-1 front-end code and ensuring platform consistency is a challenging problem. Unfortunately, this problem is exacerbated for the early-stage startup or for individual developers because there is no professional design or product team to help them. If developers didn't have to deal with and manage the chore, they could put more effort into the main product and other impactful priorities."),(0,o.kt)("h4",{id:"business-stakeholders"},"Business stakeholders"),(0,o.kt)("p",null,"A self-serve Sign-up flow is a standard tactic for user acquisition. It takes into account the requirements of multiple disciplines and data growth. Building a Sign-in and sign-up process that has everyone happy requires a lot of back-and-forth because of all the decisions that need to be made."),(0,o.kt)("h4",{id:"end-customers"},"End customers"),(0,o.kt)("p",null,"Quick and smooth is the key and a single blocker can ruin the whole game. For example, multiple unnecessary accounts, blocked by terribly designed flow are definitely huge concerns for the end users. Security and privacy are seriously taken care of too. An untrusted flow or sign-in UI can prevent users from moving forwards and end up dropping off the product."),(0,o.kt)("h4",{id:"similar-solutions-in-the-market"},"Similar solutions in the market"),(0,o.kt)("p",null,"We're not naive; we know there are other open-source sign-in flow solutions out there. However,\nfew authentication and identification options are supported."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Their user interface lacks polish and personalization and neglects user experience and accessibility."),(0,o.kt)("li",{parentName:"ul"},'The latest trends, such as supporting localization and a "dark mode," are rarely implemented.'),(0,o.kt)("li",{parentName:"ul"},"There is a lack of end-user testing and verification of the entire process."),(0,o.kt)("li",{parentName:"ul"},"There are only a handful of industry-tested solutions, and they are prohibitively expensive, making them unattainable for most individuals, small teams, and startups.")),(0,o.kt)("p",null,"Furthermore, the final user experience between consumer-facing apps and B2B SaaS products is very different. Focusing on customer identity first and being business and industry-agnostic \u2014 taking on the Sign-in Experience happening in our daily lives, such as e-commerce, food delivery, and entertainment \u2014 is important to us because it will allow us to make an accessible product and build the strong foundation step by step. In the meantime, think ahead and keep exploring extensive user cases of sign-in for different verticals that can be simply applied to many types of businesses in the near future."),(0,o.kt)("p",null,"With that in mind, we aim to make this step so easy that even those with no prior experience with programming may set up a self-serve sign-up process. Logto V1 was released in July 2022 and has since had a lot of positive feedback from users all across the world, helping us reach 4.4k stars in just two months with limited promotional resources. This motivates us to keep going! It was important to us to make sure that our global audience could use our service, therefore we added support for additional sign-in methods in version 2. Compare Version 1 to Version 2 and see what we backed first."),(0,o.kt)("h2",{id:"our-solutions-so-far"},"Our solutions so far"),(0,o.kt)("center",{style:{margin:"2rem"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New sign-in experience preview",src:n(63610).Z,width:"2880",height:"2388"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Logto Sign-in Experience v2 Preview"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Compare v1 and v2",src:n(11198).Z,width:"2158",height:"1382"})),(0,o.kt)("p",null,"Now that you know what we brought to the table in V2, let's examine the road we took to get there and the backstory that led us here."),(0,o.kt)("h2",{id:"modularize-sign-in-experience-like-lego-blocks-atomic-but-scalable"},"Modularize Sign-in Experience like LEGO blocks, atomic but scalable"),(0,o.kt)("p",null,"Our difficulty as an open-source project is that Logto should be flexible enough to meet the needs of developers working on a wide range of products and with varying degrees of customization. That said, our product might inevitably become a complex monster devoid of special opinions if we aim to cover every possible circumstance."),(0,o.kt)("p",null,"Our strategic solution to the above is to base ourselves in the actual world while approaching Sign-in Experience as though it were a LEGO set\u2014individual pieces that may be combined to become something larger."),(0,o.kt)("p",null,"As a first step, we surveyed the login procedures of over a hundred apps in various industries and held one-on-one discussions with app creators and end users in the Logto Discord Community. We organized the product challenges into four pillars after considering many viewpoints; they are also the most common issues encountered by construction professionals."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Define methods"),(0,o.kt)("li",{parentName:"ul"},"Design an ideal flow"),(0,o.kt)("li",{parentName:"ul"},"Guided by UX strategies"),(0,o.kt)("li",{parentName:"ul"},"Customize the look and feel")),(0,o.kt)("p",null,"The market's validation of usage frequency and popularity was used to determine the priority of certain features under each pillar."),(0,o.kt)("p",null,"We seek to provide the best practices within the scope of fundamental functions (both universal and extensible), bridge the gap between scenarios, and make it easy for developers to grasp Admin Console's complicated logic in the critical 0-1 window. Whether a developer is highly experimental and has no ideas at all, or highly targeted and has a precise UI design in hand, Sign-in Experience may be configured seamlessly in any case."),(0,o.kt)("p",null,"So, let's take a closer look at these four cornerstones:"),(0,o.kt)("h3",{id:"step-1-define-methods"},"Step 1: Define methods"),(0,o.kt)("p",null,"We break down the example sign-in into four categories: identifier, authentication factor, third-party connector, and personal information. Components like these make up the sign-in process for thousands of users. The final user experience, however, varies widely depending on the specifics of each situation. There are benefits to each approach; developers should consider their needs before settling on one."),(0,o.kt)("h4",{id:"identifier"},"Identifier"),(0,o.kt)("p",null,"Let's first take a look at the popular identifiers and their pros and cons:"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Username")),(0,o.kt)("td",null,(0,o.kt)("p",null,"A user's username is frequently disclosed anonymously as a unique identifier. It is appropriate for social products such as content, games, instant messaging, and so on. It can be configured by the user or selected by the system."),(0,o.kt)("p",null,"When registering, a username can be used in conjunction with an email address or a phone number to offer users one more reminder information. A username is also a secure identifier that does not reveal too much personal information."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Email")),(0,o.kt)("td",null,(0,o.kt)("p",null,"In the long run, users can simply recall their email addresses, and there are no device restrictions for getting verification emails. Subscriptions or win-back campaigns can also be sent to users' email addresses for marketing objectives."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Phone")),(0,o.kt)("td",null,(0,o.kt)("p",null,"The use of a phone number as an identity is more mobile and accessible to the elderly. Its advantages include real-name authentication, timely interaction with the user, and access to the user's contacts list for connection."),(0,o.kt)("p",null,"However, there are issues like changing mobile phone numbers, using used numbers, leaking contact information, and requiring devices to be present while signing in or signing up."))))),(0,o.kt)("h4",{id:"authentication-factor"},"Authentication Factor"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Password")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Password sign-in is convenient, but users sometimes forget it. Low-complexity password is at risk of theft."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Email verification")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Email Verification Codes or Magic links are the most popular ways for verification. It has higher security but is cheaper than SMS."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"SMS")),(0,o.kt)("td",null,(0,o.kt)("p",null,"SMS is also more secure. The autofill feature of the keyboard facilitates mobile input. However, it may result in additional SMS charges."))))),(0,o.kt)("h4",{id:"third-party-connector"},"Third-party connector"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Social Connector")),(0,o.kt)("td",null,(0,o.kt)("p",null,"According to Google Account and Facebook data, implementing Social Sign-in can strengthen the acquisition funnel and raise registration rates. Users may sign in with a single click, synchronize personal information with a more convenient and confident sense, and avoid forgetting passwords or email addresses used to sign up."),(0,o.kt)("p",null,"The drawback is that third-party service quality and product life will limit the Sign-in Experience. If the social connector does not give trustworthy contact information, the user must provide the necessary contact information; otherwise, the user cannot be contacted."))))),(0,o.kt)("h4",{id:"personal-information"},"Personal information"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Personal information")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Contact information, name, gender, age, region, address, user preferences, and other personal information provided by users can be used for display, account recovery, personalized recommendations, product data analysis, and other purposes. It is a standard affiliate and business-neutral component of the sign-up process."))))),(0,o.kt)("h3",{id:"step-2-design-an-ideal-flow"},"Step 2: Design an ideal flow"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What does flow mean in Sign-in Experience\uff1f")),(0,o.kt)("p",null,'There is more to the Sign-in Experience than just the layout. The layout is simple, and a preview may be seen on the left while you work on it. In this context, "flow" refers to the entire sign-up process that a user would go through. We intend to handle the entire trip, which has traditionally been a difficult job for developers.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Atomized the flow")),(0,o.kt)("p",null,"Developers can utilize the Logto Sign-in Experience in a flexible manner by breaking down the full process into its component parts. With this mental modal, you will then develop a mindmap like below, which is all you need to consider when you design an end-to-end sign-in experience for your end customer."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Mind map",src:n(87095).Z,width:"2722",height:"1670"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Standardized the flow and guard by carefully considered product logic")),(0,o.kt)("p",null,"To establish the framework, we have to provide the best practice for each individual flow mentioned above. Those best practices were based on well-considered product logic, user-center design principles, and business objectives. We keep generality and inclusiveness at the same time."),(0,o.kt)("p",null,"A lot of Logto competitor treats the flow like an easy permutation and combination task but it is definitely not true. Let\u2019s talk about the constraints and laws between them:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Sign in \u2260 Create Account"))),(0,o.kt)("p",null,'Methods of sign-in and registration are neither equal nor inclusive. Some programs, for example, request "Email+Password+Email Verification code" when signing up but only support "Email+Password" as a sign-in method.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Mobile sign-in",src:n(12879).Z,width:"3600",height:"2040"})),(0,o.kt)("p",null,"In another case, requiring to enter a username when registering, but there is no option for Username sign-in."),(0,o.kt)("p",null,"Distinct scenarios have different goals, resulting in various product logic. We will not only examine the variety of logic but also delve deeper into why. In summary, the difference between creating an account and sign-in is listed below:"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("td",null),(0,o.kt)("td",null,(0,o.kt)("b",null,"Purpose")),(0,o.kt)("td",null,(0,o.kt)("b",null,"Flow")))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Create account")),(0,o.kt)("td",null,(0,o.kt)("p",null,"The purpose of creating an account is to ask consumers for identifying information while also acquiring users with the least amount of effort from a commercial standpoint."),(0,o.kt)("p",null,"There is a trade-off between doing the fewest steps and gathering more information from end users. Fewer steps indicate higher conversion rates, but they may result in low-quality targeted users and leads, which could harm future customer support and product growth."),(0,o.kt)("p",null,"Simultaneously, the registration rate might be increased.")),(0,o.kt)("td",null,(0,o.kt)("p",null,'Between various IDs, the logic is "and." Because this is a product requirement, consumers must fill all of them at the same time (some factors can be skipped).'),(0,o.kt)("p",null,'There is just one exception, "Phone or Email," because consumers validating two pieces of contact information at the same time is time-consuming and unneeded.'))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("b",null,"Sign in")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Sign-purpose is to allow users to access the product quickly, securely, and successfully.")),(0,o.kt)("td",null,(0,o.kt)("p",null,'Between various IDs, the logic is "or." That implies consumers can use whichever sign-in technique they like. The less complicated, the better. (Multi-factor authentication instances are excluded here)'))))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Sign in + Create an account \u2264 Profile"))),(0,o.kt)("p",null,"All sign-in and registration information is stored in a profile. However, don't feel rushed to obtain all of the information during registration. Allow users to register successfully first and then access user information incrementally in specified instances. The contact information that the user enters proactively in the Profile may be used in the sign-in procedures. As a result, sign-in methods may be more than just sign-up methods."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Restrictions between Sign-in, Registration, and Authentication Factors, for example:"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If password is used as an authentication factor \u2192 sign-in should support it as well, and all other identifiers must support password as well. We don't want consumers to complete pointless efforts or to disregard their security intentions while registering. The fact that a password is necessary for sign-up with a username but not for email or phone password sign-in makes no sense and confuses the user."),(0,o.kt)("li",{parentName:"ul"},"If users enabled multiple identifiers during registration, such as email or phone number, both of those identifiers must be available for sign-in. For example, if a person signs up using their email address but only founds phone number sign-in option, they will be unable to use the product in the end."),(0,o.kt)("li",{parentName:"ul"},"A password is necessary if the username is the only identifier used during registration. This is owing to the limitations and characteristics of using a username as an identifier.")),(0,o.kt)("h3",{id:"step-3-guide-by-ux-design-strategies"},"Step 3: Guide by UX design strategies"),(0,o.kt)("p",null,"Logto delivers flows that are governed by a few end-user-centered tactics to enable the finest end-user experience. You can get a sense of what we insist on in terms of UX design by looking at the examples below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Security first")),(0,o.kt)("p",{parentName:"li"},"Security is unquestionably crucial in terms of sign-in experience and user identity. We took this approach seriously and put it into action. For example, when a user wants to verify an email address, we only alert the user that the account already exists until the user enters the verification code and verifies. In this strategy, we prevent someone from hacking a list of emails that do not exist."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Mobile sign-in",src:n(72257).Z,width:"5400",height:"3060"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Anticipate user needs and avoid meaningless attempts")),(0,o.kt)("p",{parentName:"li"},"This is done to prevent pointless efforts at creating a successful outcome. The login process is convoluted and full of edge cases. When an account is found, for instance, the user is prompted to log in. When a person attempts to sign in and their account already does not exist, we will ask them if they would want to create an account."),(0,o.kt)("p",{parentName:"li"},"This foresight allows customers to get up and running with the product with minimal delay."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Mobile sign-in",src:n(4143).Z,width:"5400",height:"3060"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Consider account upgrades")),(0,o.kt)("p",{parentName:"li"},"Account upgrades may also result in a change in the sign-in or sign-up flow. This will also have an influence on our end-user engagement. This scenario should also be considered. For example, if the administrator makes some modifications and adds new sign-in methods in the admin dashboard, existing end users will be required to sign in to the app."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Mobile sign-in",src:n(6596).Z,width:"5400",height:"3060"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Making the choice easier for users")),(0,o.kt)("p",{parentName:"li"},"For example, we advise developers not to use too many social sign-in methods and if they are too many they will be hidden in another view because this would result in a poorer conversion. We don't include everything equally in the UI layout of the sign-in experience, but we do have a focus. This is to adhere to general design principles of usability and a better acquisition approach. At the same time, this is done to reduce users\u2019 cognitive load."))),(0,o.kt)("h3",{id:"step-4-brand-and-look-and-feel"},"Step 4: Brand and look and feel"),(0,o.kt)("p",null,"Last but not least, we provide users with lots of flexibility to customize their look and feel."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modification of Brand elements, such as the selection of theme color, the replacement of a logo image, changes to component settings, and the selection of standard layouts, can all be accomplished with just one click when working with developers."),(0,o.kt)("li",{parentName:"ul"},"Maintain as much uniformity as possible across all multi-end design plans in order to make it easier for developers to intuitively comprehend and adjust UI. Mobile and web, for instance, use layouts, processes, components, and styles that are equivalent to one another."),(0,o.kt)("li",{parentName:"ul"},"In comparison to more conventional business tools, we put in a lot of work to ensure that the design is elegant. We came up with the formulas for calculating the brand colors, the dark mode, the internationalization of languages, and the barrier-free strategy.")),(0,o.kt)("h2",{id:"closing-notes"},"Closing notes"),(0,o.kt)("p",null,"Thank you for spending time reading about our Logto Sign-in Experience. You might have the following questions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"How can this be accomplished with the least amount of work in Logto Admin Console?"),(0,o.kt)("li",{parentName:"ol"},"How does your configuration experience vary from existing market solutions? Why is it the greatest option for my company?"),(0,o.kt)("li",{parentName:"ol"},"How can the success of sign-ups be measured from a business standpoint? Have you thought about it yet?"),(0,o.kt)("li",{parentName:"ol"},"What is Logto\u2019s upcoming plan for supporting you and your product?")))}m.isMDXComponent=!0},21267:function(e,t,n){t.Z=n.p+"assets/images/architecture-65c09e8d0706b7221a824f9178da3aa0.png"},11198:function(e,t,n){t.Z=n.p+"assets/images/compare-v1-v2-e05a3f39b20df29379659ed74becbe1d.png"},87095:function(e,t,n){t.Z=n.p+"assets/images/mind-map-6cf4022c50c379a0a562756d9ff2705b.png"},72257:function(e,t,n){t.Z=n.p+"assets/images/mobile-sign-in-2-5d234179b74f90533ecba03d0c7bd86f.png"},4143:function(e,t,n){t.Z=n.p+"assets/images/mobile-sign-in-3-82d41c2d749f3c0881ce934964f5380e.png"},6596:function(e,t,n){t.Z=n.p+"assets/images/mobile-sign-in-4-46a09f3e07aca529316270f7104c9946.png"},12879:function(e,t,n){t.Z=n.p+"assets/images/mobile-sign-in-a22462848fc3adbe9e8a68c75b7fa238.png"},63610:function(e,t,n){t.Z=n.p+"assets/images/sie-preview-7a951b0edbaedf5c3eafae65b520d2db.png"}}]);