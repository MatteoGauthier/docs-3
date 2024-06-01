"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5995],{64605:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(86070),o=t(25710),a=t(6251);const s={sidebar_position:1},r="\ud83d\uddc2\ufe0f Tenants",l={id:"docs/references/tenants/README",title:"\ud83d\uddc2\ufe0f Tenants",description:"A tenant is an isolated environment where you can manage user identities, applications, and all other Logto resources.",source:"@site/docs/docs/references/tenants/README.md",sourceDirName:"docs/references/tenants",slug:"/docs/references/tenants/",permalink:"/docs/references/tenants/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/tenants/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83d\udd04 Migrate to Logto",permalink:"/docs/recipes/migrations/"},next:{title:"\ud83d\udcc4 OpenID Connect",permalink:"/docs/references/openid-connect/"}},c={},d=[{value:"Do I need more than one production tenant?",id:"do-i-need-more-than-one-production-tenant",level:2},{value:"I have multiple enterprise customers",id:"i-have-multiple-enterprise-customers",level:3},{value:"I would like to build a SaaS application with multi-tenancy",id:"i-would-like-to-build-a-saas-application-with-multi-tenancy",level:3},{value:"I have multiple applications",id:"i-have-multiple-applications",level:3},{value:"Tenant region",id:"tenant-region",level:2},{value:"Tenant types",id:"tenant-types",level:2},{value:"Development",id:"development",level:3},{value:"Production",id:"production",level:3},{value:"Limitations of development tenants",id:"limitations-of-development-tenants",level:2}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\ufe0f-tenants",children:"\ud83d\uddc2\ufe0f Tenants"}),"\n",(0,i.jsx)(a.A,{cloud:!0,oss:!1}),"\n",(0,i.jsx)(n.p,{children:"A tenant is an isolated environment where you can manage user identities, applications, and all other Logto resources."}),"\n",(0,i.jsx)(n.h2,{id:"do-i-need-more-than-one-production-tenant",children:"Do I need more than one production tenant?"}),"\n",(0,i.jsx)(n.p,{children:"Usually, the answer is no. Logto is designed to support multiple applications and environments within a single tenant. In most cases, you only need one production tenant for all your applications."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:'Your business may have the concept of "tenants", but it may differ from the Logto tenant. In this page, "tenant" and "tenants" refer to the Logto tenant.'})}),"\n",(0,i.jsx)(n.h3,{id:"i-have-multiple-enterprise-customers",children:"I have multiple enterprise customers"}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.a,{href:"/docs/recipes/organizations/",children:"organizations"})," with ",(0,i.jsx)(n.a,{href:"/docs/recipes/single-sign-on/",children:"enterprise SSO"})," to manage multiple enterprise customers within a single tenant. Since enterprise SSO is used, you can assign different organizations according to the enterprise connector that the user signs in with."]}),"\n",(0,i.jsx)(n.mermaid,{value:"graph LR\n    subgraph Logto tenant\n        subgraph EC[Enterprise connectors]\n            EC1[Enterprise connector 1]\n            EC2[Enterprise connector 2]\n            EC3[Enterprise connector 3]\n        end\n        subgraph Users\n            U1[User 1]\n            U2[User 2]\n            U3[User 3]\n            U4[User 4]\n            U5[User 5]\n        end\n        subgraph Organizations\n            O1[Organization 1]\n            O2[Organization 2]\n            O3[Organization 3]\n        end\n\n        EC1 --- U1 --\x3e|member of| O1\n        EC1 --- U2 --\x3e|member of| O1\n        EC2 --- U3 --\x3e|member of| O2\n        EC2 --- U4 --\x3e|member of| O2\n        EC3 --- U5 --\x3e|member of| O3\n    end"}),"\n",(0,i.jsxs)(n.p,{children:["To automatically assign users to the correct organization, you can use ",(0,i.jsx)(n.a,{href:"/docs/recipes/webhooks/",children:"webhooks"})," to listen for user creation events and assign the user to the correct organization based on the enterprise connector."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:['We are planning to provide the "just-in-time provisioning" feature to automatically assign users to the correct organization based on the enterprise connector. Upvote this feature on our ',(0,i.jsx)(n.a,{href:"https://logto.productlane.com/roadmap",children:"roadmap"})," if you are interested."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"i-would-like-to-build-a-saas-application-with-multi-tenancy",children:"I would like to build a SaaS application with multi-tenancy"}),"\n",(0,i.jsxs)(n.p,{children:['If you are building a SaaS application with the concept of "workspace" or "organization" for each customer, you can use ',(0,i.jsx)(n.a,{href:"/docs/recipes/organizations/",children:"organizations"})," to manage each customer's workspace within a single tenant."]}),"\n",(0,i.jsx)(n.mermaid,{value:"graph LR\n    subgraph Logto tenant\n        subgraph Users\n            U1[User 1]\n            U2[User 2]\n            U3[User 3]\n            U4[User 4]\n            U5[User 5]\n        end\n        subgraph Organizations\n            O1[Organization 1]\n            O2[Organization 2]\n            O3[Organization 3]\n        end\n\n        U1 --\x3e O1\n        U2 --\x3e O1\n        U2 --\x3e O2\n        U3 --\x3e O2\n        U3 --\x3e O3\n        U4 --\x3e O2\n        U5 --\x3e O3\n    end"}),"\n",(0,i.jsx)(n.p,{children:"In this case, a user can be a member of multiple organizations. For example, a user can have a personal workspace and join the company's workspace."}),"\n",(0,i.jsx)(n.h3,{id:"i-have-multiple-applications",children:"I have multiple applications"}),"\n",(0,i.jsxs)(n.p,{children:["With Logto, you can manage multiple applications within a single tenant regardless of the application's type (web, mobile, desktop, etc.). Since Logto follows the ",(0,i.jsx)(n.a,{href:"https://openid.net/connect/",children:"OpenID Connect"})," and ",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749",children:"OAuth 2.0"})," standards, you can integrate Logto with any application even if there's no Logto official SDK."]}),"\n",(0,i.jsx)(n.h2,{id:"tenant-region",children:"Tenant region"}),"\n",(0,i.jsx)(n.p,{children:"When you create a tenant, you can choose the region where the tenant data is stored. It cannot be changed after the tenant is created. Here are the available regions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"EU (Amsterdam, Netherlands)"}),"\n",(0,i.jsx)(n.li,{children:"US (Arizona, United States)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Usually, you should choose the region closest to your customers to minimize latency and improve performance."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Logto leverages the global edge network to deliver the best performance and availability for your applications. The request routing is optimized to ensure that your users are always connected with the best-performing option."})}),"\n",(0,i.jsx)(n.h2,{id:"tenant-types",children:"Tenant types"}),"\n",(0,i.jsx)(n.p,{children:"There are two types of tenants in Logto Cloud: development and production. With this tenant differentiation, you can better manage your projects across different environments for efficiency and, at the same time, enjoy the full value of Logto."}),"\n",(0,i.jsx)(n.p,{children:"Please be aware that you can only specify your tenant types during creation; the tenant type cannot be edited once it's created."}),"\n",(0,i.jsx)(n.h3,{id:"development",children:"Development"}),"\n",(0,i.jsxs)(n.p,{children:["The development tenant (dev tenant) is primarily intended for testing purposes and should not be utilized in a production environment. These tenants allow access to premium and paid features available in paid plans, free of charge and without requiring a subscription. However, there are certain ",(0,i.jsx)(n.a,{href:"#limitations-of-development-tenants",children:"limitations"})," that apply to development tenants."]}),"\n",(0,i.jsx)(n.h3,{id:"production",children:"Production"}),"\n",(0,i.jsx)(n.p,{children:"The production tenant is where end-users access the live app and you might need a paid subscription. You can subscribe to the Free plan or Pro plan to create a production tenant."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Each Logto Cloud account can join up to 10 Free plan tenants."})}),"\n",(0,i.jsx)(n.h2,{id:"limitations-of-development-tenants",children:"Limitations of development tenants"}),"\n",(0,i.jsx)(n.p,{children:"While you can use paid features for free in development tenants, there are a few limitations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Each Logto Cloud account can join up to 10 development tenants."}),"\n",(0,i.jsx)(n.li,{children:"A banner appears during the sign-in experience, indicating that the tenant is in development mode."}),"\n",(0,i.jsx)(n.li,{children:"Development tenants may have quota limits on specific features. These limits are explained on the feature details page, if applicable."}),"\n",(0,i.jsx)(n.li,{children:"Logto may update the development tenant's quota limits, and we will try our best to notify you in advance."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},6251:(e,n,t)=>{t.d(n,{A:()=>s});const i="availability_kRMk";var o=t(86070);const a=e=>"comingSoon"===e?"coming soon-blue":"boolean"==typeof e?e?"\u2713 available-4EA254":"not applicable-78767F":`since v${e.major}.${e.minor}-4EA254`,s=e=>{let{cloud:n,oss:t}=e;return(0,o.jsxs)("div",{className:i,children:[(0,o.jsx)("img",{alt:"Cloud availability",src:`https://img.shields.io/badge/Cloud-${a(n)}`}),(0,o.jsx)("img",{alt:"OSS availability",src:`https://img.shields.io/badge/OSS-${a(t)}`})]})}},25710:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(30758);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);