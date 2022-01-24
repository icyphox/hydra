"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[36105],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13919:function(e,t,n){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return r}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var o=n(52263),r=n(13919);function i(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var i=void 0===o?{}:o,a=i.forcePrependBaseUrl,s=void 0!==a&&a,l=i.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},27458:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=n(44996),s=["components"],l={id:"csrf",title:"Common CSRF Pitfalls"},u=void 0,c={unversionedId:"debug/csrf",id:"version-v1.6/debug/csrf",isDocsHomePage:!1,title:"Common CSRF Pitfalls",description:"Because ORY Hydra is not just an API, but instead talks to your users' browsers",source:"@site/versioned_docs/version-v1.6/debug/csrf.mdx",sourceDirName:"debug",slug:"/debug/csrf",permalink:"/hydra/docs/v1.6/debug/csrf",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.6/debug/csrf.mdx",tags:[],version:"v1.6",lastUpdatedBy:"Anirudh Oppiliappan",lastUpdatedAt:1643030541,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"csrf",title:"Common CSRF Pitfalls"},sidebar:"version-v1.6/docs",previous:{title:"Common Problem Solutions",permalink:"/hydra/docs/v1.6/debug"},next:{title:"Wrong Token Endpoint Auth Method",permalink:"/hydra/docs/v1.6/debug/token-endpoint-auth-method"}},d=[{value:"Common Pitfalls",id:"common-pitfalls",children:[{value:"ORY Hydra Running Over HTTP Without dev-mode Enabled",id:"ory-hydra-running-over-http-without-dev-mode-enabled",children:[],level:3},{value:"Mixing up <code>127.0.0.1</code> and <code>localhost</code>",id:"mixing-up-127001-and-localhost",children:[],level:3},{value:"Reverse Proxy / Load Balancers",id:"reverse-proxy--load-balancers",children:[],level:3},{value:"Running Flows in Separate Browsers or Browser Windows",id:"running-flows-in-separate-browsers-or-browser-windows",children:[],level:3},{value:"Running Multiple OAuth2 Flows Simultaneously",id:"running-multiple-oauth2-flows-simultaneously",children:[],level:3},{value:"Cookie Same-Site Mode",id:"cookie-same-site-mode",children:[],level:3},{value:"Using AJAX to call <code>/oauth2/auth</code>",id:"using-ajax-to-call-oauth2auth",children:[],level:3}],level:2}],p={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Because ORY Hydra is not just an API, but instead talks to your users' browsers\ndirectly, several security measures have been implemented in ORY Kratos. One of\nthem is protection against CSRF:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"CSRF is an attack that tricks the victim into submitting a malicious request.\nIt inherits the identity and privileges of the victim to perform an undesired\nfunction on the victim\u2019s behalf. For most sites, browser requests\nautomatically include any credentials associated with the site, such as the\nuser\u2019s session cookie, IP address, Windows domain credentials, and so forth.\nTherefore, if the user is currently authenticated to the site, the site will\nhave no way to distinguish between the forged request sent by the victim and a\nlegitimate request sent by the victim."),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://owasp.org/www-community/attacks/csrf"},"Source"))),(0,i.kt)("h2",{id:"common-pitfalls"},"Common Pitfalls"),(0,i.kt)("p",null,"Sometimes, cookies and CSRF just wont work - all requests end up with a 401\nUnauthorized or 400 Bad Request. Here are some common causes and easy fixes if\nthat happens to you!"),(0,i.kt)("p",null,"Before starting to debug cookie and CSRF issues, make sure to check out the\nChrome Developer Tools (or any comparable technology) Cookies tabs in the\nApplication tab"),(0,i.kt)("img",{alt:"Google Chrome Developer Tools - Application Tab - Cookies",src:(0,a.Z)("img/docs/csrf_app_tab.png")}),(0,i.kt)("p",null,"as well as the network tab - look for ",(0,i.kt)("inlineCode",{parentName:"p"},"Cookie")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Set-Cookie")," HTTP Headers:"),(0,i.kt)("img",{alt:"Google Chrome Developer Tools - Network Tab - Cookies",src:(0,a.Z)("img/docs/csrf_network_tab.png")}),(0,i.kt)("h3",{id:"ory-hydra-running-over-http-without-dev-mode-enabled"},"ORY Hydra Running Over HTTP Without dev-mode Enabled"),(0,i.kt)("p",null,"You are running ORY Hydra via HTTP but are missing the ",(0,i.kt)("inlineCode",{parentName:"p"},"--dangerous-force-http")," CLI flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ hydra serve all -c path/to/config.yml --dangerous-force-http\n")),(0,i.kt)("h3",{id:"mixing-up-127001-and-localhost"},"Mixing up ",(0,i.kt)("inlineCode",{parentName:"h3"},"127.0.0.1")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"localhost")),(0,i.kt)("p",null,"Use either ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," (and in general IPs) or ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," (and in general hostnames)\nconsistently throughout your flow because cookies from an IP are not available to the\nhostname and vice-versa."),(0,i.kt)("h3",{id:"reverse-proxy--load-balancers"},"Reverse Proxy / Load Balancers"),(0,i.kt)("p",null,"You are running ORY Hydra behind a Reverse Proxy (e.g. Load Balancer) that\nstrips the Cookie header. If the reverse proxy supports path rewrites that\nmight also cause issues!"),(0,i.kt)("h3",{id:"running-flows-in-separate-browsers-or-browser-windows"},"Running Flows in Separate Browsers or Browser Windows"),(0,i.kt)("p",null,'You are running the OAuth2 flow in separate browsers, or in a browser with\nincognito mode. The Brave browser is also known for notoriously discarding\ncookies when used in "No-Tracking" mode.'),(0,i.kt)("h3",{id:"running-multiple-oauth2-flows-simultaneously"},"Running Multiple OAuth2 Flows Simultaneously"),(0,i.kt)("p",null,"You are trying to do two OAuth2 flows at the same time in the same Browser."),(0,i.kt)("h3",{id:"cookie-same-site-mode"},"Cookie Same-Site Mode"),(0,i.kt)("p",null,"You have changed the Cookie SameSite behavior. If this is the default value\n(you did not change it), this should not be an issue."),(0,i.kt)("h3",{id:"using-ajax-to-call-oauth2auth"},"Using AJAX to call ",(0,i.kt)("inlineCode",{parentName:"h3"},"/oauth2/auth")),(0,i.kt)("p",null,"You ",(0,i.kt)("strong",{parentName:"p"},"cannot")," call ",(0,i.kt)("inlineCode",{parentName:"p"},"/oauth2/auth")," using an AJAX request. It is not allowed and\nnot possible with OAuth2. This endpoint can only be accessed using a normal\nbrowser request by clicking a link or redirecting the end-user's browser\nto that endpoint."))}h.isMDXComponent=!0}}]);