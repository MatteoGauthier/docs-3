"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[45701],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69834:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var o=n(665),r=n(40151),i=(n(59496),n(49613)),a=["components"],c={sidebar_label:"SMS connector",sidebar_position:2},s="Configure SMS Connector",l={unversionedId:"docs/recipes/configure-connectors/configure-sms-connector",id:"docs/recipes/configure-connectors/configure-sms-connector",title:"Configure SMS Connector",description:"Configuring an SMS connector allows you to send a one-time password (OTP) to the user's phone number. This passwordless authentication mechanism can be utilized in various scenarios, including sign-up, sign-in, forgot password, and link-account processes, to validate the user's identity. It streamlines user authentication and enhances security by minimizing the risk of password-related breaches.",source:"@site/docs/docs/recipes/configure-connectors/configure-sms-connector.md",sourceDirName:"docs/recipes/configure-connectors",slug:"/docs/recipes/configure-connectors/configure-sms-connector",permalink:"/next/docs/recipes/configure-connectors/configure-sms-connector",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/configure-connectors/configure-sms-connector.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"SMS connector",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Configure popular email service",permalink:"/next/docs/recipes/configure-connectors/email-connector/configure-popular-email-service"},next:{title:"Social connector",permalink:"/next/docs/recipes/configure-connectors/social-connector/"}},u={},p=[{value:"Configure steps",id:"configure-steps",level:2},{value:"Add a new SMS connector",id:"add-a-new-sms-connector",level:3},{value:"Change to another SMS connector",id:"change-to-another-sms-connector",level:3},{value:"SMS template",id:"sms-template",level:2},{value:"Related Readings",id:"related-readings",level:2}],d={toc:p};function g(e){var t=e.components,c=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-sms-connector"},"Configure SMS Connector"),(0,i.kt)("p",null,"Configuring an SMS connector allows you to send a one-time password (OTP) to the user's phone number. This passwordless authentication mechanism can be utilized in various scenarios, including sign-up, sign-in, forgot password, and link-account processes, to validate the user's identity. It streamlines user authentication and enhances security by minimizing the risk of password-related breaches."),(0,i.kt)("p",null,"Logto has some built-in SMS connectors which allow out-of-box usage:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-twilio-sms"},"Twilio SMS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-aliyun-sms"},"Aliyun SMS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-tencent-sms"},"Tencent SMS"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We're still working on more connectors! But If you don't see the connector you want, just let us know your needs in Discord or file a Feature Request on GitHub.\nFor those using the Logto Open-Source Version, we offer the flexibility to ",(0,i.kt)("a",{parentName:"p",href:"/next/docs/recipes/create-your-connector/"},"create your own connector")," to extend.")),(0,i.kt)("h2",{id:"configure-steps"},"Configure steps"),(0,i.kt)("p",null,"Navigate to \u201cConnector > Email and SMS connectors\u201d in Logto Console."),(0,i.kt)("h3",{id:"add-a-new-sms-connector"},"Add a new SMS connector"),(0,i.kt)("p",null,"To add a new SMS connector, click the \u201cSet up\u201d button, and select the desired SMS connector."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Select SMS connector",src:n(82412).Z,width:"2494",height:"1592"})),(0,i.kt)("p",null,"In the configuration process, follow the steps below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go through the README doc for each type connector on the left, then follow the instructions."),(0,i.kt)("li",{parentName:"ol"},"Fill out any required forms in the Parameter Configuration section on the right."),(0,i.kt)("li",{parentName:"ol"},"Customize the SMS template to fit your needs by editing the JSON code."),(0,i.kt)("li",{parentName:"ol"},"Test the configuration by sending an SMS verification code to your phone number using the \u201cGeneric\u201d template."),(0,i.kt)("li",{parentName:"ol"},'Click "Save and Done" to finish.')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configure SMS connector guideline",src:n(67138).Z,width:"3012",height:"2482"})),(0,i.kt)("h3",{id:"change-to-another-sms-connector"},"Change to another SMS connector"),(0,i.kt)("p",null,"If you wish to change the current SMS connector, simply access the connector details page and click the \u201cChange connector\u201d button of the \u201cMore\u201d menu in the top-right corner. Or you can delete the old connector first, then add a new SMS connector."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can bring ONLY ONE ",(0,i.kt)("em",{parentName:"p"},"SMS Connector")," alive."),(0,i.kt)("p",{parentName:"admonition"},"If you change the living SMS connector and save changes, the previous SMS connector will be disabled automatically. Also, the ",(0,i.kt)("em",{parentName:"p"},"config")," of past connectors will lose track. You may keep the old connectors' ",(0,i.kt)("em",{parentName:"p"},"config")," properly if you want to switch back to those connectors in the future.")),(0,i.kt)("h2",{id:"sms-template"},"SMS template"),(0,i.kt)("p",null,"Notice that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Logto provides four different templates for customizing SMS content, which are categorized based on their usage type: Register, SignIn, ForgotPassword, and Generic. It is highly recommended that you use different templates for various use cases, or it could trigger flow control, leading to a temporary outage of your service."),(0,i.kt)("li",{parentName:"ul"},"The verification code is valid for 10 minutes by default."),(0,i.kt)("li",{parentName:"ul"},"The verification code number sent to users uses the variate of {{code}}.")),(0,i.kt)("p",null,"There are some examples just for reference:\nFollow the README to compose the connector config JSON with little effort."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Usage"),(0,i.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,i.kt)("th",{parentName:"tr",align:null},"Template Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Register"),(0,i.kt)("td",{parentName:"tr",align:null},"Users create an account using their phone number and verify by entering the verification code."),(0,i.kt)("td",{parentName:"tr",align:null},"Your Logto sign-in verification code is {{code}}. The code will remain active for 10 minutes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SignIn"),(0,i.kt)("td",{parentName:"tr",align:null},"Users sign in using their phone number and verify by entering verification code instead of entering a password."),(0,i.kt)("td",{parentName:"tr",align:null},"Your Logto sign-up verification code is {{code}}. The code will remain active for 10 minutes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ForgotPassword"),(0,i.kt)("td",{parentName:"tr",align:null},"If users forget their password during sign-in, they can choose to verify their identity using their phone number."),(0,i.kt)("td",{parentName:"tr",align:null},"Your Logto password change verification code is {{code}}. The code will remain active for 10 minutes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Generic"),(0,i.kt)("td",{parentName:"tr",align:null},"This template can be used as a generic backup option for various scenarios, including linking a phone number to an existing account or testing connector configuration\u2026"),(0,i.kt)("td",{parentName:"tr",align:null},"Your Logto verification code is {{code}}. The code will remain active for 10 minutes.")))),(0,i.kt)("h2",{id:"related-readings"},"Related Readings"),(0,i.kt)("p",null,"You can check out ",(0,i.kt)("a",{parentName:"p",href:"/next/docs/tutorials/get-started/passwordless-sign-in-by-adding-connectors"},"how to enable SMS or email passcode sign-in")," as soon as you finish the setup."))}g.isMDXComponent=!0},82412:function(e,t,n){t.Z=n.p+"assets/images/configure-select-sms-connetor-50faccc4a99f941f354b092e31130e0b.png"},67138:function(e,t,n){t.Z=n.p+"assets/images/configure-sms-connector-guideline-627ee6287a65a064d2b661b7cee15d2a.png"}}]);