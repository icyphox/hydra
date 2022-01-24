"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[93423],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(52263),o=n(13919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,l=void 0!==a&&a,c=i.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},7790:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=(n(44996),["components"]),l={id:"oauth2-clients",title:"Creating OAuth 2.0 Clients"},c=void 0,u={unversionedId:"guides/oauth2-clients",id:"version-v1.8/guides/oauth2-clients",isDocsHomePage:!1,title:"Creating OAuth 2.0 Clients",description:"You can manage OAuth 2.0 clients using the cli or the HTTP REST API:",source:"@site/versioned_docs/version-v1.8/guides/oauth2-clients.mdx",sourceDirName:"guides",slug:"/guides/oauth2-clients",permalink:"/hydra/docs/v1.8/guides/oauth2-clients",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/guides/oauth2-clients.mdx",tags:[],version:"v1.8",lastUpdatedBy:"Anirudh Oppiliappan",lastUpdatedAt:1643030541,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"oauth2-clients",title:"Creating OAuth 2.0 Clients"},sidebar:"version-v1.8/docs",previous:{title:"Advanced OAuth2 and OpenID Connect Flows",permalink:"/hydra/docs/v1.8/advanced"},next:{title:"Using Common OAuth2 and OpenID Connect Flows",permalink:"/hydra/docs/v1.8/guides/common-oauth2-openid-connect-flows"}},s=[{value:"Authorize Code Flow with Refresh Token",id:"authorize-code-flow-with-refresh-token",children:[],level:2},{value:"Client Credentials Flow",id:"client-credentials-flow",children:[],level:2}],d={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can manage ",(0,i.kt)("em",{parentName:"p"},"OAuth 2.0 clients")," using the cli or the HTTP REST API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CLI:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"hydra help clients")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"REST:")," Read the ",(0,i.kt)("a",{parentName:"li",href:"../reference/api"},"API Docs"))),(0,i.kt)("h2",{id:"authorize-code-flow-with-refresh-token"},"Authorize Code Flow with Refresh Token"),(0,i.kt)("p",null,"The following command creates an OAuth 2.0 Client capable of executing the\nAuthorize Code Flow, requesting ID and Refresh Tokens and performing the OAuth\n2.0 Refresh Grant:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"hydra clients create \\\n    --endpoint http://ory-hydra:4445 \\\n    --id client-id \\\n    --secret client-secret \\\n    --grant-types authorization_code,refresh_token \\\n    --response-types code \\\n    --scope openid,offline \\\n    --callbacks http://my-app.com/callback,http://my-other-app.com/callback\n")),(0,i.kt)("p",null,"The OAuth 2.0 Client will be allowed to use values ",(0,i.kt)("inlineCode",{parentName:"p"},"http://my-app.com/callback"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"http://my-other-app.com/callback")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect_url"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It is expected that the OAuth 2.0 Client sends its credentials using HTTP\nBasic Authorization.")),(0,i.kt)("p",null,"If you wish to send credentials in the POST Body, add the following flag to the\ncommand above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    --token-endpoint-auth-method client_secret_post \\\n")),(0,i.kt)("p",null,"The same can be achieved by setting\n",(0,i.kt)("inlineCode",{parentName:"p"},'"token_endpoint_auth_method": "client_secret_post"')," in the request body of\n",(0,i.kt)("inlineCode",{parentName:"p"},"POST /clients")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT /clients/<id>"),"."),(0,i.kt)("h2",{id:"client-credentials-flow"},"Client Credentials Flow"),(0,i.kt)("p",null,"A client only capable of performing the Client Credentials Flow can be created\nas follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hydra clients create \\\n    --endpoint http://ory-hydra:4445 \\\n    --id my-client \\\n    --secret secret \\\n    -g client_credentials\n")))}p.isMDXComponent=!0}}]);