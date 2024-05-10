"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[13509],{4890:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var t=s(11527),i=s(17279);const n={sidebar_position:1},c="Configure custom domain in Console",r={id:"docs/recipes/custom-domain/configure-custom-domain-in-console",title:"Configure custom domain in Console",description:"To add a new custom domain in the Logto Console, follow these steps:",source:"@site/docs/docs/recipes/custom-domain/configure-custom-domain-in-console.md",sourceDirName:"docs/recipes/custom-domain",slug:"/docs/recipes/custom-domain/configure-custom-domain-in-console",permalink:"/docs/recipes/custom-domain/configure-custom-domain-in-console",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/custom-domain/configure-custom-domain-in-console.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83c\udf0d Custom domain",permalink:"/docs/recipes/custom-domain/"},next:{title:"Use custom domain",permalink:"/docs/recipes/custom-domain/use-custom-domain"}},a={},d=[{value:"Troubleshooting SSL Certificate Issues",id:"troubleshooting-ssl-certificate-issues",level:2}];function u(e){const o={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"configure-custom-domain-in-console",children:"Configure custom domain in Console"}),"\n",(0,t.jsx)(o.p,{children:"To add a new custom domain in the Logto Console, follow these steps:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsx)(o.li,{children:'Navigate to the "Settings" and go to the \u201cDomains\u201d tab.'}),"\n",(0,t.jsxs)(o.li,{children:["In \u201cCustom Domain\u201d section, enter your domain name and click \u201cadd domain\u201d. ",(0,t.jsx)(o.img,{alt:"Add domain",src:s(70304).Z+"",width:"2880",height:"1026"})]}),"\n",(0,t.jsxs)(o.li,{children:["Copy the CNAME value in the table, and go to your domain\u2019s DNS provider to add record. ",(0,t.jsx)(o.img,{alt:"Verify",src:s(90252).Z+"",width:"2880",height:"1212"})]}),"\n",(0,t.jsxs)(o.li,{children:["Wait for the verification and SSL process.","\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsx)(o.li,{children:"We will auto-verify your records every 10 seconds until the custom domain is added. Just ensure that the entered domain name or DNS Records are accurate."}),"\n",(0,t.jsx)(o.li,{children:"Verification typically takes a few minutes but can take up to 24 hours, depending on the DNS provider. Feel free to navigate away during the process."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"troubleshooting-ssl-certificate-issues",children:"Troubleshooting SSL Certificate Issues"}),"\n",(0,t.jsx)(o.p,{children:"If you encounter SSL certificate issues when setting up your custom domain, it may be related to CAA records in your DNS configuration. CAA records specify which Certificate Authorities (CAs) are authorized to issue certificates for your domain."}),"\n",(0,t.jsxs)(o.p,{children:["To troubleshoot and resolve SSL certificate issues related to CAA records, refer to ",(0,t.jsx)(o.a,{href:"https://developers.cloudflare.com/ssl/edge-certificates/caa-records/",children:"Cloudflare's documentation"})," on CAA Records."]})]})}function l(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},70304:(e,o,s)=>{s.d(o,{Z:()=>t});const t=s.p+"assets/images/add-domain-0f758d4b843a4bdabeccf57123b8af0c.webp"},90252:(e,o,s)=>{s.d(o,{Z:()=>t});const t=s.p+"assets/images/verify-77ee788fa3f390dc7648e0de01407410.webp"},17279:(e,o,s)=>{s.d(o,{Z:()=>r,a:()=>c});var t=s(50959);const i={},n=t.createContext(i);function c(e){const o=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);