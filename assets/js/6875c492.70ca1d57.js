"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[48610],{2948:function(e,t,n){n.d(t,{Z:function(){return r}});n(50959);var a=n(22116),s=n(7663),i=n(11527);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(s.Z,{permalink:n,title:(0,i.jsx)(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(s.Z,{permalink:r,title:(0,i.jsx)(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},44168:function(e,t,n){n.d(t,{Z:function(){return r}});n(50959);var a=n(64106),s=n(76337),i=n(11527);function r(e){let{items:t,component:n=s.Z}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(a.n,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},98952:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});n(50959);var a=n(45924),s=n(22116),i=n(1303),r=n(47331),l=n(48010),o=n(48486),c=n(35144),d=n(2948),u=n(84624),h=n(44168),g=n(91503),p=n(87495),m=n(11527);function x(e){const t=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function f(e){let{tag:t}=e;const n=x(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.d,{title:n}),(0,m.jsx)(u.Z,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:n,sidebar:a,listMetadata:i}=e;const r=x(t);return(0,m.jsxs)(c.Z,{sidebar:a,children:[t.unlisted&&(0,m.jsx)(g.Z,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.Z,{as:"h1",children:r}),(0,m.jsx)(o.Z,{href:t.allTagsPath,children:(0,m.jsx)(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(h.Z,{items:n}),(0,m.jsx)(d.Z,{metadata:i})]})}function b(e){return(0,m.jsxs)(r.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogTagPostListPage),children:[(0,m.jsx)(f,{...e}),(0,m.jsx)(j,{...e})]})}},91503:function(e,t,n){n.d(t,{Z:function(){return g}});n(50959);var a=n(45924),s=n(22116),i=n(49881),r=n(11527);function l(){return(0,r.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(48010),u=n(99917);function h(e){let{className:t}=e;return(0,r.jsx)(u.Z,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,a.Z)(t,d.k.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function g(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(h,{...e})]})}},93949:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(27495),s=n(48486),i=n(64106),r=n(99917),l=n(5341),o=n(50959),c="title_xvU1",d="listTitle_ozbw",u=n(11527);const h=e=>{let{className:t}=e;const{metadata:n,isBlogPostPage:a}=(0,i.C)(),{permalink:h,title:g}=n,p=a?"h1":"h2",m=window.location.pathname.startsWith("/blog"),x=(0,o.useCallback)((()=>{const e=new URL(a?window.location.pathname.replace(/^\/blog/,""):"/","https://blog.logto.io"),t=new URLSearchParams(window.location.search);for(const[n,a]of t.entries())e.searchParams.append(n,a);return e.pathname.endsWith("/")||(e.pathname+="/"),e}),[a]);return(0,o.useEffect)((()=>{if(!m)return;for(const t of document.head.querySelectorAll("link"))["canonical","alternate"].includes(t.getAttribute("rel")??"")&&t.remove();const e=document.createElement("link");e.setAttribute("rel","canonical"),e.href=x().href,document.head.append(e)}),[x,m]),(0,u.jsxs)(u.Fragment,{children:[m&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(r.Z,{type:"tip",children:["Logto Blog has been moved to the new place!"," ",(0,u.jsx)("a",{href:x().href,children:"Click here"})," to see this article in the new blog."]}),(0,u.jsx)("hr",{})]}),(0,u.jsx)(p,{className:(0,l.W)(c,!a&&d,t),itemProp:"headline",children:a?g:(0,u.jsx)(s.Z,{itemProp:"url",to:h,children:g})})]})};var g=()=>(0,u.jsx)(a.Z,{children:()=>(0,u.jsx)(h,{})})}}]);