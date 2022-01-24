"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[30755],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),h=o,f=l["".concat(c,".").concat(h)]||l[h]||d[h]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(52263),o=n(13919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,s=void 0!==a&&a,c=i.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+p:p}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},68226:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=(n(44996),["components"]),s={id:"oauth2-token-introspection",title:"OAuth 2.0 Token Introspection"},c=void 0,u={unversionedId:"guides/oauth2-token-introspection",id:"version-v1.7/guides/oauth2-token-introspection",isDocsHomePage:!1,title:"OAuth 2.0 Token Introspection",description:"The Token Introspection extension defines a mechanism for resource servers to",source:"@site/versioned_docs/version-v1.7/guides/oauth2-token-introspection.mdx",sourceDirName:"guides",slug:"/guides/oauth2-token-introspection",permalink:"/hydra/docs/v1.7/guides/oauth2-token-introspection",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/guides/oauth2-token-introspection.mdx",tags:[],version:"v1.7",lastUpdatedBy:"Anirudh Oppiliappan",lastUpdatedAt:1643030541,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"oauth2-token-introspection",title:"OAuth 2.0 Token Introspection"},sidebar:"version-v1.7/docs",previous:{title:"Configuring Expiration",permalink:"/hydra/docs/v1.7/guides/token-expiration"},next:{title:"Mobile & Browser (Single-Page-App) with OAuth2",permalink:"/hydra/docs/v1.7/guides/oauth2-public-spa-mobile"}},p=[{value:"Examples",id:"examples",children:[{value:"NodeJS",id:"nodejs",children:[{value:"CURL",id:"curl",children:[],level:4}],level:3}],level:2}],d={toc:p};function l(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Token Introspection extension defines a mechanism for resource servers to\nobtain information about access tokens. With this spec, resource servers can\ncheck the validity of access tokens, and find out other information such as\nwhich user and which scopes are associated with the token."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Token Introspection is meant for first-party / internal use only. The endpoint\nshould not be exposed publicly."))),(0,i.kt)("p",null,"You can find more details on this endpoint in the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/"},"ORY Hydra API Docs"),". You can also use the CLI command\n",(0,i.kt)("inlineCode",{parentName:"p"},"hydra token introspect <token>"),"."),(0,i.kt)("p",null,"Another helpful resource is\n",(0,i.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/token-introspection-endpoint/"},"Token Introspection Endpoint"),"."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"nodejs"},"NodeJS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const token = 'the access token'\nconst body = qs.stringify({ token })\n\nfetch('http://ory-hydra/oauth2/introspect', {\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n      'Content-Length': body.length\n    },\n    method: 'POST', body\n}).then(body => {\n    if (!body.active) {\n        // Token is not active/valid\n    }\n\n    // token is active\n})\n")),(0,i.kt)("h4",{id:"curl"},"CURL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -X POST \\\n    -d 'token=<the-token>' \\\n    http://localhost:4445/oauth2/introspect\n")))}l.isMDXComponent=!0}}]);