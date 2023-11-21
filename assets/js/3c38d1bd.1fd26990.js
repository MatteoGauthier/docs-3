"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[30916],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82598:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],s={sidebar_position:7.3},l="\ud83e\ude9d Webhooks",c={unversionedId:"docs/recipes/webhooks/README",id:"version-1.x/docs/recipes/webhooks/README",title:"\ud83e\ude9d Webhooks",description:"Added in v1.5.0",source:"@site/versioned_docs/version-1.x/docs/recipes/webhooks/README.md",sourceDirName:"docs/recipes/webhooks",slug:"/docs/recipes/webhooks/",permalink:"/docs/recipes/webhooks/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/webhooks/README.md",tags:[],version:"1.x",sidebarPosition:7.3,frontMatter:{sidebar_position:7.3},sidebar:"docsSidebar",previous:{title:"\ud83d\udcdc Inspect Audit Logs",permalink:"/docs/recipes/inspect-audit-logs/"},next:{title:"Configure Webhooks in Console",permalink:"/docs/recipes/webhooks/configure-webhooks-in-console"}},p={},u=[{value:"Why use Webhook?",id:"why-use-webhook",level:2},{value:"Terms",id:"terms",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-webhooks"},"\ud83e\ude9d Webhooks"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Added in v1.5.0")),(0,a.kt)("p",null,"Logto Webhook enables you to effortlessly receive real-time updates regarding specific events, such as user registration, sign-in, or password reset. You no longer need to continuously poll for updates."),(0,a.kt)("p",null,"When an event is triggered, Logto sends an HTTP request to the Endpoint URL you provide, containing detailed information about the event, such as user ID, username, email, and other relevant details (for more about the data included in the payload and header, refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/webhooks/webhook-request"},"Webhook Request"),"). Your application can process this request and take customized actions, like sending an email or updating a database."),(0,a.kt)("p",null,"We continuously add more events based on user needs. If you have specific requirements for your business, please let us know."),(0,a.kt)("h2",{id:"why-use-webhook"},"Why use Webhook?"),(0,a.kt)("p",null,"Webhooks offer real-time communication between applications, eliminating the need for polling and enabling immediate data updates. They simplify application integration and workflow automation without complex code or proprietary APIs."),(0,a.kt)("p",null,"Here are some examples of common usage scenarios for CIAM:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Send emails"),": Configure a webhook to send a welcome email to new users upon registration or notify administrators when a user logs in from a new device or location."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Send notifications"),": Configure a webhook to trigger a virtual assistant with your CRM system to provide real-time customer support when users sign up."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Perform additional API calls"),": Configure a webhook to verify user access by checking their email domain or IP address and then use the Logto Management API to assign appropriate roles with resource permissions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Data synchronization:")," Configure webhooks to keep the application updated about changes such as user account suspensions or deletions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Generate reports"),": Set up a webhook to receive user login activity data and leverage it to create reports on user engagement or usage patterns.")),(0,a.kt)("h2",{id:"terms"},"Terms"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Item"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Event"),(0,a.kt)("td",{parentName:"tr",align:"left"},"When a specific action is done, it will trigger a hook event with a specific type. E.g., Logto will emit a PostSignUp hook event when the user finished the sign-up process and created a new account.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Hook"),(0,a.kt)("td",{parentName:"tr",align:"left"},"A single or series of actions that hook to a specific event. Action can be calling API, executing code snippets, etc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Webhook"),(0,a.kt)("td",{parentName:"tr",align:"left"},"A subtype of hook that indicates calling an API with the event payload.",(0,a.kt)("br",null),"Say a developer wants to send a notification when user signs in via a new device, the developer can add a webhook that calls his security service API to the PostSignIn event.")))),(0,a.kt)("p",null,"Here's an example of enabling two web hooks for ",(0,a.kt)("inlineCode",{parentName:"p"},"PostSignIn")," event in Logto:"),(0,a.kt)("mermaid",{value:"graph LR\n  subgraph Logto\n    SF(Sign-in finished)\n    PS(Post sign-in)\n    WH2(Web hook 2)\n    WH1(Web hook 1)\n  end\n\n  subgraph Service 2\n    E2(Endpoint)\n  end\n\n  subgraph Service 1\n    E1(Endpoint)\n  end\n\n  SF --\x3e|Trigger| PS\n  PS --\x3e WH1\n  PS --\x3e WH2\n  WH1 ---\x3e|POST API call| E1\n  WH2 ---\x3e|POST API call| E2"}))}m.isMDXComponent=!0}}]);