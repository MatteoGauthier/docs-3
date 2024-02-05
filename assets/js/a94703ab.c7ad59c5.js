"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[94368],{77516:function(e,t,n){n.r(t),n.d(t,{default:function(){return be}});var a=n(50959),o=n(45924),i=n(47331),s=n(48010),l=n(21590),r=n(11149),c=n(22116),d=n(47312),u=n(40248);var m={backToTopButton:"backToTopButton_cEIs",backToTopButtonShow:"backToTopButtonShow_c42y"},b=n(11527);function h(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:s,cancelScroll:l}=(0,d.Ct)();return(0,d.RF)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:a>=s?(l(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.S)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,b.jsx)("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",s.k.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=n(99870),x=n(28903),f=n(1507),v=n(18812),j=n(66281);function _(e){return(0,b.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,b.jsxs)("g",{fill:"#7a7a7a",children:[(0,b.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}var k={collapseSidebarButton:"collapseSidebarButton_WP9t",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_vdwM"};function g(e){let{onClick:t}=e;return(0,b.jsx)("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",k.collapseSidebarButton),onClick:t,children:(0,b.jsx)(_,{className:k.collapseSidebarButtonIcon})})}var C=n(54021),S=n(33354);const I=Symbol("EmptyContext"),N=a.createContext(I);function T(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,b.jsx)(N.Provider,{value:i,children:t})}var B=n(71596),Z=n(71464),y=n(48486),L=n(80122);function A(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,b.jsx)("button",{"aria-label":t?(0,c.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:a})}function w(e){let{item:t,onItemClick:n,activePath:i,level:r,index:c,...d}=e;const{items:u,label:m,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,v.L)(),j=function(e){const t=(0,L.Z)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.LM)(e):void 0),[e,t])}(t),_=(0,l._F)(t,i),k=(0,Z.Mg)(x,i),{collapsed:g,setCollapsed:C}=(0,B.u)({initialState:()=>!!h&&(!_&&t.collapsed)}),{expandedItem:T,setExpandedItem:w}=function(){const e=(0,a.useContext)(N);if(e===I)throw new S.i6("DocSidebarItemsExpandedStateProvider");return e}(),E=function(e){void 0===e&&(e=!g),w(e?null:c),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,S.D9)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:_,collapsed:g,updateCollapsed:E}),(0,a.useEffect)((()=>{h&&null!=T&&T!==c&&f&&C(!0)}),[h,T,c,C,f]),(0,b.jsxs)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemCategory,s.k.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":g},p),children:[(0,b.jsxs)("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k}),children:[(0,b.jsx)(y.Z,{className:(0,o.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":_}),onClick:h?e=>{n?.(t),x?E(!1):(e.preventDefault(),E())}:()=>{n?.(t)},"aria-current":k?"page":void 0,"aria-expanded":h?!g:void 0,href:h?j??"#":j,...d,children:m}),x&&h&&(0,b.jsx)(A,{collapsed:g,categoryLabel:m,onClick:e=>{e.preventDefault(),E()}})]}),(0,b.jsx)(B.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:g,children:(0,b.jsx)(V,{items:u,tabIndex:g?-1:0,onItemClick:n,activePath:i,level:r+1})})]})}var E=n(33382),H=n(49141),P={menuExternalLink:"menuExternalLink_OPt9"};function R(e){let{item:t,onItemClick:n,activePath:a,level:i,index:r,...c}=e;const{href:d,label:u,className:m,autoAddBaseUrl:h}=t,p=(0,l._F)(t,a),x=(0,E.Z)(d);return(0,b.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),children:(0,b.jsxs)(y.Z,{className:(0,o.Z)("menu__link",!x&&P.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...c,children:[u,!x&&(0,b.jsx)(H.Z,{})]})},u)}var M={menuHtmlItem:"menuHtmlItem_vNdR"};function W(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:l,className:r}=t;return(0,b.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(n),l&&[M.menuHtmlItem,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:i}},a)}function F(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,b.jsx)(w,{item:t,...n});case"html":return(0,b.jsx)(W,{item:t,...n});default:return(0,b.jsx)(R,{item:t,...n})}}function D(e){let{items:t,...n}=e;const a=(0,l.f)(t,n.activePath);return(0,b.jsx)(T,{children:a.map(((e,t)=>(0,b.jsx)(F,{item:e,index:t,...n},t)))})}var V=(0,a.memo)(D),U={menu:"menu_NoRy",menuWithAnnouncementBar:"menuWithAnnouncementBar_ENR8"};function z(e){let{path:t,sidebar:n,className:i}=e;const l=function(){const{isActive:e}=(0,C.nT)(),[t,n]=(0,a.useState)(e);return(0,d.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,b.jsx)("nav",{"aria-label":(0,c.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",U.menu,l&&U.menuWithAnnouncementBar,i),children:(0,b.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(V,{items:n,activePath:t,level:1})})})}var Y="sidebar_hTUp",K="sidebarWithHideableNavbar_NTdb",O="sidebarHidden_P10i",X="sidebarLogo_W5PA";function G(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,v.L)();return(0,b.jsxs)("div",{className:(0,o.Z)(Y,s&&K,i&&O),children:[s&&(0,b.jsx)(j.Z,{tabIndex:-1,className:X}),(0,b.jsx)(z,{path:t,sidebar:n}),l&&(0,b.jsx)(g,{onClick:a})]})}var Q=a.memo(G),q=n(289),J=n(66010);const $=e=>{let{sidebar:t,path:n}=e;const a=(0,J.e)();return(0,b.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(V,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ee(e){return(0,b.jsx)(q.Zo,{component:$,props:e})}var te=a.memo(ee);function ne(e){const t=(0,f.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,b.jsxs)(b.Fragment,{children:[n&&(0,b.jsx)(Q,{...e}),a&&(0,b.jsx)(te,{...e})]})}var ae={expandButton:"expandButton__ERZ",expandButtonIcon:"expandButtonIcon_LkjP"};function oe(e){let{toggleSidebar:t}=e;return(0,b.jsx)("div",{className:ae.expandButton,title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,b.jsx)(_,{className:ae.expandButtonIcon})})}var ie={docSidebarContainer:"docSidebarContainer_ckPr",docSidebarContainerHidden:"docSidebarContainerHidden_dNSB",sidebarViewport:"sidebarViewport_PuXb"};function se(e){let{children:t}=e;const n=(0,r.V)();return(0,b.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function le(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:l}=(0,x.TH)(),[r,c]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{r&&c(!1),!r&&(0,p.n)()&&c(!0),i((e=>!e))}),[i,r]);return(0,b.jsx)("aside",{className:(0,o.Z)(s.k.docs.docSidebarContainer,ie.docSidebarContainer,n&&ie.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ie.docSidebarContainer)&&n&&c(!0)},children:(0,b.jsx)(se,{children:(0,b.jsxs)("div",{className:(0,o.Z)(ie.sidebarViewport,r&&ie.sidebarViewportHidden),children:[(0,b.jsx)(ne,{sidebar:t,path:l,onCollapse:d,isHidden:r}),r&&(0,b.jsx)(oe,{toggleSidebar:d})]})})})}var re={docMainContainer:"docMainContainer_DSus",docMainContainerEnhanced:"docMainContainerEnhanced_CW9h",docItemWrapperEnhanced:"docItemWrapperEnhanced_sFF_"};function ce(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,r.V)();return(0,b.jsx)("main",{className:(0,o.Z)(re.docMainContainer,(t||!a)&&re.docMainContainerEnhanced),children:(0,b.jsx)("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",re.docItemWrapper,t&&re.docItemWrapperEnhanced),children:n})})}var de={docRoot:"docRoot_nKQX",docsWrapper:"docsWrapper_sLBs"};function ue(e){let{children:t}=e;const n=(0,r.V)(),[o,i]=(0,a.useState)(!1);return(0,b.jsxs)("div",{className:de.docsWrapper,children:[(0,b.jsx)(h,{}),(0,b.jsxs)("div",{className:de.docRoot,children:[n&&(0,b.jsx)(le,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,b.jsx)(ce,{hiddenSidebarContainer:o,children:t})]})]})}var me=n(56787);function be(e){const t=(0,l.SN)(e);if(!t)return(0,b.jsx)(me.Z,{});const{docElement:n,sidebarName:a,sidebarItems:c}=t;return(0,b.jsx)(i.FG,{className:(0,o.Z)(s.k.page.docsDocPage),children:(0,b.jsx)(r.b,{name:a,items:c,children:(0,b.jsx)(ue,{children:n})})})}},56787:function(e,t,n){n.d(t,{Z:function(){return l}});n(50959);var a=n(45924),o=n(22116),i=n(87495),s=n(11527);function l(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.Z)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.Z,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);