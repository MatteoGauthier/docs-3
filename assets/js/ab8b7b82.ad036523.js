"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[85756],{25175:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>s});var i=t(11527),o=t(17279);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In this guide, we assume you have basic knowledge of Logto Connectors. If you don't, check out the ",(0,i.jsx)(n.a,{href:"/docs/recipes/configure-connectors/",children:"Configure connectors"})," guide to get started."]}),"\n"]})})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},92376:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var i=t(11527),o=t(17279),s=t(25175);const r={slug:"/integrations/github",sidebar_label:"GitHub",sidebar_custom_props:{description:"GitHub is an online community for software development and version control."}},c="Github connector",a={id:"integrations/social/github/README",title:"README",description:"The official Logto connector for GitHub social sign-in.",source:"@site/docs/integrations/social/github/README.mdx",sourceDirName:"integrations/social/github",slug:"/integrations/github",permalink:"/integrations/github",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/integrations/social/github/README.mdx",tags:[],version:"current",frontMatter:{slug:"/integrations/github",sidebar_label:"GitHub",sidebar_custom_props:{description:"GitHub is an online community for software development and version control."}},sidebar:"integrationsSidebar",previous:{title:"Feishu",permalink:"/integrations/feishu-web"},next:{title:"Google",permalink:"/integrations/google"}},l={},h=[...s.d$,{value:"Get started",id:"get-started",level:2},{value:"Sign in with GitHub account",id:"sign-in-with-github-account",level:2},{value:"Create and configure OAuth app",id:"create-and-configure-oauth-app",level:2},{value:"Managing OAuth apps",id:"managing-oauth-apps",level:2},{value:"Configure your connector",id:"configure-your-connector",level:2},{value:"Config types",id:"config-types",level:3},{value:"Test GitHub connector",id:"test-github-connector",level:2},{value:"Reference",id:"reference",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(n.h1,{id:"github-connector",children:"Github connector"}),"\n",(0,i.jsx)(n.p,{children:"The official Logto connector for GitHub social sign-in."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Table of contents"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#github-connector",children:"Github connector"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#get-started",children:"Get started"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#sign-in-with-github-account",children:"Sign in with GitHub account"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#create-and-configure-oauth-app",children:"Create and configure OAuth app"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#managing-oauth-apps",children:"Managing OAuth apps"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#configure-your-connector",children:"Configure your connector"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#config-types",children:"Config types"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#test-github-connector",children:"Test GitHub connector"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#reference",children:"Reference"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,i.jsx)(n.p,{children:"The GitHub connector enables end-users to sign in to your application using their own GitHub accounts via GitHub OAuth 2.0 authentication protocol."}),"\n",(0,i.jsx)(n.h2,{id:"sign-in-with-github-account",children:"Sign in with GitHub account"}),"\n",(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://github.com/",children:"GitHub website"})," and sign in with your GitHub account. You may register a new account if you don't have one."]}),"\n",(0,i.jsx)(n.h2,{id:"create-and-configure-oauth-app",children:"Create and configure OAuth app"}),"\n",(0,i.jsxs)(n.p,{children:["Follow the ",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app",children:"creating an OAuth App"})," guide, and register a new application."]}),"\n",(0,i.jsxs)(n.p,{children:["Name your new OAuth application in ",(0,i.jsx)(n.strong,{children:"Application name"})," and fill up ",(0,i.jsx)(n.strong,{children:"Homepage URL"})," of the app.\nYou can leave ",(0,i.jsx)(n.strong,{children:"Application description"})," field blank and customize ",(0,i.jsx)(n.strong,{children:"Authorization callback URL"})," as ",(0,i.jsx)(n.code,{children:"${your_logto_origin}/callback/${connector_id}"}),". The ",(0,i.jsx)(n.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'Note: If you encounter the error message "The redirect_uri MUST match the registered callback URL for this application." when logging in, try aligning the Authorization Callback URL of your GitHub OAuth App and your Logto App\'s redirect URL (of course, including the protocol) to resolve the issue.'}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["We suggest not to check the box before ",(0,i.jsx)(n.strong,{children:"Enable Device Flow"}),", or users who sign in with GitHub on mobile devices must confirm the initial sign-in action in the GitHub app. Many GitHub users do not install the GitHub mobile app on their phones, which could block the sign-in flow. Please ignore our suggestion if you are expecting end-users to confirm their sign-in flow. See details of ",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow",children:"device flow"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"managing-oauth-apps",children:"Managing OAuth apps"}),"\n",(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://github.com/settings/developers",children:"OAuth Apps page"})," and you can add, edit or delete existing OAuth apps.\nYou can also find ",(0,i.jsx)(n.code,{children:"Client ID"})," and generate ",(0,i.jsx)(n.code,{children:"Client secrets"})," in OAuth app detail pages."]}),"\n",(0,i.jsx)(n.h2,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,i.jsxs)(n.p,{children:["Fill out the ",(0,i.jsx)(n.code,{children:"clientId"})," and ",(0,i.jsx)(n.code,{children:"clientSecret"})," field with ",(0,i.jsx)(n.em,{children:"Client ID"})," and ",(0,i.jsx)(n.em,{children:"Client Secret"})," you've got from OAuth app detail pages mentioned in the previous section."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"scope"})," is a space-delimited list of ",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps",children:"scopes"}),". If not provided, scope defaults to be ",(0,i.jsx)(n.code,{children:"read:user"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientId"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientSecret"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scope"}),(0,i.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"test-github-connector",children:"Test GitHub connector"}),"\n",(0,i.jsxs)(n.p,{children:["That's it. The GitHub connector should be available now. Don't forget to ",(0,i.jsx)(n.a,{href:"https://docs.logto.io/docs/recipes/configure-connectors/social-connector/enable-social-sign-in/",children:"Enable connector in sign-in experience"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.github.com/en/developers/apps/getting-started-with-apps/about-apps",children:"GitHub - Developers - Apps"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app",children:"GitHub - Developers - Apps - Creating an OAuth App"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},17279:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(50959);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);