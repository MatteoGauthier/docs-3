"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[67714],{49613:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return d}});var n=o(59496);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=h(o),d=r,b=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return o?n.createElement(b,i(i({ref:t},c),{},{components:o})):n.createElement(b,i({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var h=2;h<a;h++)i[h]=o[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},17267:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return h},toc:function(){return u}});var n=o(665),r=o(40151),a=(o(59496),o(49613)),i=["components"],s={sidebar_label:"Configure Webhooks in Console",sidebar_position:1},l="Configure Webhooks in Console",h={unversionedId:"docs/recipes/webhooks/configure-webhooks-in-console",id:"docs/recipes/webhooks/configure-webhooks-in-console",title:"Configure Webhooks in Console",description:"Added in v1.5.0",source:"@site/docs/docs/recipes/webhooks/configure-webhooks-in-console.md",sourceDirName:"docs/recipes/webhooks",slug:"/docs/recipes/webhooks/configure-webhooks-in-console",permalink:"/next/docs/recipes/webhooks/configure-webhooks-in-console",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/webhooks/configure-webhooks-in-console.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Configure Webhooks in Console",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83e\ude9d Webhooks",permalink:"/next/docs/recipes/webhooks/"},next:{title:"Management API",permalink:"/next/docs/recipes/webhooks/management-api"}},c={},u=[{value:"Create a webhook",id:"create-a-webhook",level:2},{value:"Secure webhook",id:"secure-webhook",level:2},{value:"Test webhook",id:"test-webhook",level:2},{value:"Monitor webhook health",id:"monitor-webhook-health",level:2}],p={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configure-webhooks-in-console"},"Configure Webhooks in Console"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Added in v1.5.0")),(0,a.kt)("p",null,"Configure webhooks in Logto Console to achieve seamless integration and receive real-time event notifications for your application. Enjoy easy configuration, enhanced security, and convenient health monitoring options."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Alternatively, you also can choose ",(0,a.kt)("a",{parentName:"p",href:"/next/docs/recipes/webhooks/management-api"},"management API")," to build a webhook.")),(0,a.kt)("h2",{id:"create-a-webhook"},"Create a webhook"),(0,a.kt)("p",null,"Firstly, create a webhook endpoint that will be called by the Logto Agent. This endpoint should be implemented on your server and capable of receiving HTTP requests."),(0,a.kt)("p",null,"To create a new webhook in the Logto Console, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Navigate to the "Webhook" tab and click on the "Create Webhook" button.'),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Event"),"\nIn the modal that appears, select the desired events that will trigger this webhook. It is recommended to choose a smaller number of events that meet your requirements to avoid overwhelming the server reception. You can change the selected events at any time after creating the webhook."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Name"),"\nProvide a name for the webhook. This name is for your own reference to define the usage scenario."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Endpoint URL"),'\nEnter the Endpoint URL, which is the URL of your server that will receive the webhook POST requests when the event occurs. For security reasons, the URL must be publicly accessible via HTTPS and should not be a local host URL. Your server should respond to the Logto webhook requests with an HTTP 200 ("OK") response.'),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Disable / Reactive"),'\nBy default, the webhook is activated immediately after creation. If you want to suspend the webhook temporarily, you can disable or reactivate it using the "Three-Dots" menu located in the top-right corner of the header after creating it.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create a webhook",src:o(20585).Z,width:"2000",height:"1120"})),(0,a.kt)("h2",{id:"secure-webhook"},"Secure webhook"),(0,a.kt)("p",null,"After creating a new webhook, you have options to enhance its security:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Signing Key"),"\nLogto generates a unique hash signature, known as the Signing Key, for each webhook. You can include this key as a request header in your endpoint implementation. Verifying the signing key ensures that the webhook payload originates from Logto and has not been tampered with by unauthorized sources. Read ",(0,a.kt)("a",{parentName:"li",href:"/next/docs/recipes/webhooks/securing-your-webhooks"},"Securing your webhooks")," to learn more about the code."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Custom Header"),"\nYou have the option to include custom headers in the webhook payload to provide additional context or metadata. This feature allows you to add relevant information that can assist in processing the webhook data effectively.")),(0,a.kt)("p",null,"By utilizing the Signing Key and considering the inclusion of Custom Headers, you can enhance the security of your webhooks and ensure the integrity and authenticity of the received payloads."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Webhook settings",src:o(51363).Z,width:"2880",height:"2188"})),(0,a.kt)("h2",{id:"test-webhook"},"Test webhook"),(0,a.kt)("p",null,'To test the connection between Logto and your services, simply click the "Send test payload" button. Logto will then send a sample payload for each selected event to your endpoint URL. These test requests contain anonymous data and are not logged in the recent request history.'),(0,a.kt)("p",null,"This test ensures that your webhook is properly set up to receive and process payloads from Logto. It allows you to validate the integration before deploying the webhook in a live environment."),(0,a.kt)("h2",{id:"monitor-webhook-health"},"Monitor webhook health"),(0,a.kt)("p",null,"Logto provides convenient tools to monitor the health status of your webhooks and investigate any potential issues in detail:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Health Status"),(0,a.kt)("br",{parentName:"p"}),"\n","The webhook list in Logto displays the health status of each webhook, including the success rate and total number of requests made in the past 24 hours. This information gives you an overview of the webhook's performance."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Webhook list",src:o(11084).Z,width:"2880",height:"796"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Independent Request Logs"),(0,a.kt)("br",{parentName:"p"}),"\n",'In the "Recent Requests" section of each webhook, you can access the request logs for the past 24 hours. Each request is logged individually, allowing you to view the details of each request and investigate any potential errors or anomalies.'),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Webhook logs",src:o(14232).Z,width:"2880",height:"1874"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Auto-Retry"),(0,a.kt)("br",{parentName:"p"}),"\n","In the event of a failed delivery (when the webhook response status is greater than or equal to 500), Logto automatically retries the delivery up to three times. Rest assured that multiple retries of the same request will only generate a single log entry, avoiding unnecessary duplication."))),(0,a.kt)("p",null,"By leveraging these monitoring features, you can effectively track the health of your webhooks, examine request logs, and ensure the reliability and performance of your webhook integrations."))}d.isMDXComponent=!0},20585:function(e,t,o){t.Z=o.p+"assets/images/add-webhook-482721c35cf6e7a02c7bb8adb2a2f50e.webp"},11084:function(e,t,o){t.Z=o.p+"assets/images/list-webhook-7223320c1688e5db6244085d04929649.webp"},14232:function(e,t,o){t.Z=o.p+"assets/images/webhook-logs-7a8d08aef2f7902e02f135b631953c00.webp"},51363:function(e,t,o){t.Z=o.p+"assets/images/webhook-settings-4b324e2717e6e10783c37e644e9de3b2.webp"}}]);