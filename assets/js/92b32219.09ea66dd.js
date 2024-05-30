"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[1753],{53787:(e,n,t)=>{t.d(n,{Ay:()=>i,RM:()=>r});var o=t(86070),s=t(25710);const r=[];function a(e){const n={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:['This guide assumes you have created an Application of type "',e.type,'" in Admin\nConsole.']})})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},55916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>w,default:()=>T,frontMatter:()=>A,metadata:()=>v,toc:()=>I});var o=t(86070),s=t(25710),r=t(97841),a=t(32314);const i=t.p+"assets/images/api-identifier-ee920efff60f2af5efc6c726244393c1.png";var c=t(53787);function l(e){const n={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Using the requested access token with the built-in Logto Management API resource ",(0,o.jsx)(n.code,{children:"https://[your-tenant-id].logto.app/api"})," to get all applications in Logto:"]}),"\n",(0,o.jsxs)(a.A,{children:[(0,o.jsx)(r.A,{value:"Node.js",label:"Node.js",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const logtoEndpoint = 'https://your.logto.endpoint'; // Replace with your Logto endpoint\nconst accessToken = 'eyJhb...2g'; // Access Token\n\nconst fetchLogtoApplications = async () => {\n  return await fetch(`${logtoEndpoint}/api/applications`, {\n    method: 'GET',\n    headers: {\n      Authorization: `Bearer ${accessToken}`,\n    },\n  });\n};\n"})})}),(0,o.jsx)(r.A,{value:"cURL",label:"cURL",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl --location \\\n  --request GET 'https://your.logto.endpoint/api/applications' \\ # Replace with your Logto endpoint\n  --header 'Authorization: Bearer eyJhbG...2g' # Access Token\n"})})})]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}function u(e){const n={code:"code",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["You may notice the token response has a ",(0,o.jsx)(n.code,{children:"token_type"})," field, which it's fixed to ",(0,o.jsx)(n.code,{children:"Bearer"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Thus you should put the access token in the ",(0,o.jsx)(n.code,{children:"Authorization"})," field of HTTP headers with the Bearer format (",(0,o.jsx)(n.code,{children:"Bearer YOUR_TOKEN"}),") when you're interacting with your API resource server."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}const p=t.p+"assets/images/app-id-secret-af29845d7768be05909995293bef45d9.png";function g(e){const n={a:"a",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["M2M app makes a ",(0,o.jsx)(n.code,{children:"POST"})," request to the token endpoint to fetch an access token by adding the following parameters using the ",(0,o.jsx)(n.code,{children:"application/x-www-form-urlencoded"})," format in the HTTP request entity-body:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"grant_type"}),": Must be set to ",(0,o.jsx)(n.code,{children:"client_credentials"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"resource"}),": The resource you want to access"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"scope"}),": The scope of the access request"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"And you also need to include your M2M app's credentials in the request header for the token endpoint to authenticate your M2M app."}),"\n",(0,o.jsxs)(n.p,{children:["This is achieved by including the app's credentials in the ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization#basic_authentication",children:"Basic authentication"})," form in the request ",(0,o.jsx)(n.code,{children:"Authorization"})," header, where username is the App ID, and password is the App Secret."]}),"\n",(0,o.jsx)(n.p,{children:"You can find the App ID and App Secret from your M2M app's details page:"}),"\n",(0,o.jsx)("img",{alt:"App ID and App Secret",src:p,width:"600px"})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}const x=t.p+"assets/images/logto-management-api-4994334ef32791d9ebc6c9aa298c9ecd.png";function f(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Logto provides a built-in \u201cLogto Management API\u201d resource, it\u2019s a readonly resource with the ",(0,o.jsx)(n.code,{children:"all"})," permission to access Logto Management API, you can see it from your API resource list.\nThe resource API indicator is in the pattern of ",(0,o.jsx)(n.code,{children:"https://{your-tenant-id}.logto.app/api"})," , and this will be your resource value used in the access token request body."]}),"\n",(0,o.jsx)("img",{alt:"Logto Management API details",src:x,width:"600px"}),"\n",(0,o.jsxs)(n.p,{children:["Before accessing Logto Management API, make sure your M2M app has been assigned with M2M roles that include the ",(0,o.jsx)(n.code,{children:"all"})," permission from this built-in \u201cLogto Management API\u201d resource."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Logto also provides a pre-configured \u201cLogto Management API access\u201d M2M role for new created tenants, which the Logto Management API resource\u2019s all permission has already assigned to. You can use it directly without manually setting permissions. This pre-configured role can also be edited and deleted as needed."})}),"\n",(0,o.jsx)(n.p,{children:"Now, compose all we have and send the request:"}),"\n",(0,o.jsxs)(a.A,{children:[(0,o.jsx)(r.A,{value:"Node.js",label:"Node.js",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const logtoEndpoint = 'https://your.logto.endpoint'; // Replace with your Logto endpoint\nconst tokenEndpoint = `${logtoEndpoint}/oidc/token`;\nconst applicationId = 'your-application-id';\nconst applicationSecret = 'your-application-secret';\nconst tenantId = 'your-tenant-id';\n\nconst fetchAccessToken = async () => {\n  return await fetch(tokenEndpoint, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n      Authorization: `Basic ${Buffer.from(`${applicationId}:${applicationSecret}`).toString(\n        'base64'\n      )}`,\n    },\n    body: new URLSearchParams({\n      grant_type: 'client_credentials',\n      resource: `https://${tenantId}.logto.app/api`,\n      scope: 'all',\n    }).toString(),\n  });\n};\n"})})}),(0,o.jsx)(r.A,{value:"cURL",label:"cURL",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl --location \\\n  --request POST 'https://your.logto.endpoint' \\ # Replace with your Logto endpoint\n  --header 'Authorization: Basic ${your_auth_string}' \\\n  --header 'Content-Type: application/x-www-form-urlencoded' \\\n  --data-urlencode 'grant_type=client_credentials' \\\n  --data-urlencode 'resource=https://${tenantId}.logto.app/api' \\\n  --data-urlencode 'scope=all'\n"})})})]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["For Logto Cloud users: when you\u2019re interacting with Logto Management API, you can not use custom domain, use the default Logto endpoint ",(0,o.jsx)(n.code,{children:"https://{your_tenant_id}.logto.app/oidc/token"})," to grant access tokens."]})})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}function y(e){const n={admonition:"admonition",code:"code",p:"p",...(0,s.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Logto does not currently support the M2M app to represent a user. The ",(0,o.jsx)(n.code,{children:"sub"})," in the access token payload will be the App ID."]})})}function b(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(y,{...e})}):y(e)}const A={slug:"/quick-starts/m2m",sidebar_label:"Machine-to-machine",sidebar_custom_props:{description:"Enables direct communication between machines."}},w="Machine-to-machine: Auth with Logto",v={id:"quick-starts/generic/machine-to-machine/README",title:"Machine-to-machine: Auth with Logto",description:"The tutorial video is available on our YouTube channel.",source:"@site/docs/quick-starts/generic/machine-to-machine/README.mdx",sourceDirName:"quick-starts/generic/machine-to-machine",slug:"/quick-starts/m2m",permalink:"/quick-starts/m2m",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/quick-starts/generic/machine-to-machine/README.mdx",tags:[],version:"current",frontMatter:{slug:"/quick-starts/m2m",sidebar_label:"Machine-to-machine",sidebar_custom_props:{description:"Enables direct communication between machines."}},sidebar:"quickStartSidebar",previous:{title:"WordPress",permalink:"/quick-starts/wordpress"},next:{title:"Traditional web",permalink:"/quick-starts/traditional-web"}},k={},I=[...c.RM,{value:"Intro",id:"intro",level:2},{value:"Fetch an access token",id:"fetch-an-access-token",level:2},{value:"Basics about access token request",id:"basics-about-access-token-request",level:3},{value:"Request an access token",id:"request-an-access-token",level:3},{value:"Access token response",id:"access-token-response",level:3},{value:"Access resource using access token",id:"access-resource-using-access-token",level:2},{value:"Authentication",id:"authentication",level:2}];function M(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"machine-to-machine-auth-with-logto",children:"Machine-to-machine: Auth with Logto"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The tutorial video is available on our ",(0,o.jsx)(n.a,{href:"https://youtu.be/Zla-dlHZM8c",children:"YouTube channel"}),"."]})}),"\n",(0,o.jsx)(c.Ay,{type:"Machine-to-machine"}),"\n",(0,o.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,o.jsx)(n.p,{children:"Machine-to-machine (M2M) is a common practice to authenticate if you have an app (not user) that needs to directly talk to resources (usually, using M2M app doesn't need user interactions, so it has no UI). E.g., an API service that updates users' custom data in Logto, a statistic service that pulls daily orders, etc."}),"\n",(0,o.jsx)(n.p,{children:"Since Logto uses RBAC as its access control policy, assigning M2M roles to M2M apps is necessary for protecting your API which needs direct service talk."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["To learn our current RBAC and the difference between user role and M2M role, see ",(0,o.jsx)(n.a,{href:"/docs/recipes/rbac/manage-permissions-and-roles/",children:"Manage permissions and roles"})," to learn more"]})}),"\n",(0,o.jsx)(n.p,{children:"There are two common use cases of using machine-to-machine apps in Logto:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Accessing Logto Management API"}),": In this case, you need to assign a M2M role that include the ",(0,o.jsx)(n.code,{children:"all"})," permission from the built-in Logto Management API to your M2M app."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Accessing your API resource"}),": In this case, you need to assign M2M roles that include permissions from your API resources to your M2M app."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Now, let\u2019s walk through the end-to-end process. For clarity, we will separate the steps for accessing Logto Management API and other API resources. And we assume you have already created an M2M app in Logto."}),"\n",(0,o.jsx)(n.h2,{id:"fetch-an-access-token",children:"Fetch an access token"}),"\n",(0,o.jsx)(n.h3,{id:"basics-about-access-token-request",children:"Basics about access token request"}),"\n",(0,o.jsx)(m,{}),"\n",(0,o.jsx)(n.p,{children:"An example of the access token request is:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"POST /oidc/token HTTP/1.1\nHost: your.logto.endpoint\nAuthorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=client_credentials\nresource=https://shopping.api\nscope=read:products write:products\n"})}),"\n",(0,o.jsx)(n.h3,{id:"request-an-access-token",children:"Request an access token"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["In the following demonstration, replace ",(0,o.jsx)(n.code,{children:"https://your.logto.endpoint"})," with the Logto endpoint you are targeting. For Logto Cloud, it will be ",(0,o.jsx)(n.code,{children:"https://{your-tenant-id}.logto.app"}),"."]})}),"\n",(0,o.jsxs)(a.A,{children:[(0,o.jsx)(r.A,{value:"Logto Management API",label:"For Logto Management API",children:(0,o.jsx)(j,{})}),(0,o.jsxs)(r.A,{value:"API resource",label:"For your API resource",children:[(0,o.jsxs)(n.p,{children:["In your API Resource list, find the API identifier that the app needs to access. If you haven't added the API Resource in Logto or don't know what API Resource is, see ",(0,o.jsx)(n.a,{href:"/docs/references/resources",children:"API Resource"}),"."]}),(0,o.jsx)("img",{alt:"API identifier",src:i,width:"600px",style:{paddingBottom:"12px"}}),(0,o.jsxs)(n.p,{children:["Assume that we have ",(0,o.jsx)(n.code,{children:"read:products"})," and ",(0,o.jsx)(n.code,{children:"write:products"})," permissions under this \u201cOnline Shopping\u201d API resource."]}),(0,o.jsx)(n.p,{children:"Before accessing your API resource, make sure your M2M app has been assigned with M2M roles that include permissions from your API resource."}),(0,o.jsx)(n.p,{children:"Now, compose all we have and send the request:"}),(0,o.jsxs)(a.A,{children:[(0,o.jsx)(r.A,{value:"Node.js",label:"Node.js",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const logtoEndpoint = 'https://your.logto.endpoint';\nconst tokenEndpoint = `${logtoEndpoint}/oidc/token`;\nconst applicationId = 'your-application-id';\nconst applicationSecret = 'your-application-secret';\n\nconst fetchAccessToken = async () => {\n  return await fetch(tokenEndpoint, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n      Authorization: `Basic ${Buffer.from(`${applicationId}:${applicationSecret}`).toString(\n        'base64'\n      )}`,\n    },\n    body: new URLSearchParams({\n      grant_type: 'client_credentials',\n      resource: 'https://shopping.api',\n      scope: 'read:products write:products',\n    }).toString(),\n  });\n};\n"})})}),(0,o.jsx)(r.A,{value:"cURL",label:"cURL",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl --location \\\n  --request POST 'https://your.logto.endpoint/oidc/token' \\\n  --header 'Authorization: Basic ${your_auth_string}' \\\n  --header 'Content-Type: application/x-www-form-urlencoded' \\\n  --data-urlencode 'grant_type=client_credentials' \\\n  --data-urlencode 'resource=https://shopping.api' \\\n  --data-urlencode 'scope=read:products write:products'\n"})})})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"access-token-response",children:"Access token response"}),"\n",(0,o.jsx)(n.p,{children:"A successful access response body would be like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "access_token": "eyJhbG...2g", // Use this token for accessing the Logto Management API\n  "expires_in": 3600, // Token expiration in seconds\n  "token_type": "Bearer", // Auth type for your request when using the access token\n  "scope": "all" // scope `all` for Logto Management API\n}\n'})}),"\n",(0,o.jsx)(b,{}),"\n",(0,o.jsx)(n.h2,{id:"access-resource-using-access-token",children:"Access resource using access token"}),"\n",(0,o.jsx)(h,{}),"\n",(0,o.jsxs)(a.A,{children:[(0,o.jsx)(r.A,{value:"Logto Management API",label:"Interact with Logto Management API",children:(0,o.jsx)(d,{})}),(0,o.jsxs)(r.A,{value:"Your API resource",label:"Interact with your API resource",children:[(0,o.jsxs)(n.p,{children:["Using the requested access token with the API resource ",(0,o.jsx)(n.code,{children:"https://shopping.api"})," to get all products in the shopping API:"]}),(0,o.jsxs)(a.A,{children:[(0,o.jsx)(r.A,{value:"Node.js",label:"Node.js",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const apiEndpoint = 'https://your.api.endpoint';\nconst accessToken = 'eyJhb...2g'; // Access Token\n\nconst fetchProducts = async () => {\n  return await fetch(`${apiEndpoint}/products`, {\n    method: 'GET',\n    headers: {\n      Authorization: `Bearer ${accessToken}`,\n    },\n  });\n};\n"})})}),(0,o.jsx)(r.A,{value:"cURL",label:"cURL",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"curl --location \\\n  --request GET 'https://your.api.endpoint/products' \\\n  --header 'Authorization: Bearer eyJhbG...2 # Access Token\n"})})})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,o.jsxs)(n.p,{children:["If you are protecting your own API Resources other than Logto Management API, remember to implement the authentication for your resource. See ",(0,o.jsx)(n.a,{href:"/docs/recipes/protect-your-api#validate-the-api-requests-authorization-token",children:"Protect your API"})," for details."]})]})}function T(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(M,{...e})}):M(e)}},97841:(e,n,t)=>{t.d(n,{A:()=>a});t(30758);var o=t(13526);const s={tabItem:"tabItem_lwfp"};var r=t(86070);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.A)(s.tabItem,a),hidden:t,children:n})}},32314:(e,n,t)=>{t.d(n,{A:()=>w});var o=t(30758),s=t(13526),r=t(40210),a=t(25557),i=t(65229),c=t(80071),l=t(61004),d=t(58648);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:s}}=e;return{value:n,label:t,attributes:o,default:s}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[a,c]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[l,u]=g({queryString:t,groupId:s}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(t);return[s,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),f=(()=>{const e=l??m;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{f&&c(f)}),[f]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=t(13071);const f={tabList:"tabList_U1rg",tabItem:"tabItem_Y2sf"};var j=t(86070);function y(e){let{className:n,block:t,selectedValue:o,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),s=i[t].value;s!==o&&(l(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function A(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,j.jsx)(y,{...n,...e}),(0,j.jsx)(b,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,j.jsx)(A,{...e,children:u(e.children)},String(n))}},25710:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(30758);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);