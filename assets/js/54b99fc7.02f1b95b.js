"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[64822],{53071:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var n=s(11527),o=s(17279),i=s(17601);const r={sidebar_label:"Introduction"},c="Introduction",a={id:"quick-starts/README",title:"Introduction",description:"Welcome to Logto quick starts. This documentation contains useful guides for integrating Logto into your application.",source:"@site/docs/quick-starts/README.md",sourceDirName:"quick-starts",slug:"/quick-starts/",permalink:"/quick-starts/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/quick-starts/README.md",tags:[],version:"current",frontMatter:{sidebar_label:"Introduction"},sidebar:"quickStartSidebar",next:{title:"Android (Kotlin / Java)",permalink:"/quick-starts/android"}},l={},u=[];function d(t){const e={h1:"h1",hr:"hr",p:"p",...(0,o.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(e.p,{children:"Welcome to Logto quick starts. This documentation contains useful guides for integrating Logto into your application."}),"\n",(0,n.jsx)(e.p,{children:"Most of guides uses Logto official SDKs. Please don't hesitate to contact us if you have any questions."}),"\n",(0,n.jsx)(e.hr,{}),"\n","\n",(0,n.jsx)(i.Z,{path:"quick-starts"})]})}function p(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},17601:(t,e,s)=>{s.d(e,{Z:()=>h});var n=s(19348);const o=s.p+"assets/images/fallback-66ddf4fb49bcc69c4cd03185821c39e1.png",i="gallery_quUO",r="categoryLabel_e2Fz",c="list_pn7N",a="link_nE2A",l="logo_cMIT",u="title_bbn1",d="subtitle_ppeR";var p=s(11527);const m=t=>t?String(t):void 0,h=t=>{let{path:e}=t;const s=`/${e}/`,h=(0,n.V)();if(!h)return null;const f=h.items.reduce(((t,e)=>{if("link"!==e.type)return t;if(e.unlisted||e.href===s)return t;if("#"===e.href)return[...t,{label:e.label+(e.customProps?.additionalLabel?` ${String(e.customProps.additionalLabel)}`:""),description:m(e.customProps?.description),items:[]}];if(!e.href.startsWith(s))return t;const n=t.at(-1);return n?[...t.slice(0,-1),{...n,items:[...n.items,{label:e.label,href:e.href,logoFilename:m(e.customProps?.logoFilename),description:m(e.customProps?.description)}]}]:t}),[]);return(0,p.jsx)("section",{className:i,children:f.map((t=>(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{className:r,children:t.label}),(0,p.jsx)("section",{className:c,children:t.items.map((t=>(0,p.jsxs)("a",{href:t.href,className:a,title:t.description,children:[(0,p.jsx)("img",{className:l,alt:"Logo",src:`/img/logo/${t.logoFilename||`${t.href.slice(s.length)}.svg`}`,onError:t=>{let{currentTarget:e}=t;e.src=o}}),(0,p.jsx)("span",{className:u,children:t.label}),(0,p.jsx)("span",{className:d,children:t.description})]},t.href)))})]},t.label)))})}},17279:(t,e,s)=>{s.d(e,{Z:()=>c,a:()=>r});var n=s(50959);const o={},i=n.createContext(o);function r(t){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),n.createElement(i.Provider,{value:e},t.children)}}}]);