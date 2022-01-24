"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[36774],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,f=p["".concat(l,".").concat(h)]||p[h]||c[h]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93850:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"hydra-token-user",title:"hydra token user",description:"hydra token user An exemplary OAuth 2.0 Client performing the OAuth 2.0 Authorize Code Flow"},l=void 0,u={unversionedId:"cli/hydra-token-user",id:"cli/hydra-token-user",isDocsHomePage:!1,title:"hydra token user",description:"hydra token user An exemplary OAuth 2.0 Client performing the OAuth 2.0 Authorize Code Flow",source:"@site/docs/cli/hydra-token-user.md",sourceDirName:"cli",slug:"/cli/hydra-token-user",permalink:"/hydra/docs/next/cli/hydra-token-user",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/cli/hydra-token-user.md",tags:[],version:"current",lastUpdatedBy:"Anirudh Oppiliappan",lastUpdatedAt:1643030541,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"hydra-token-user",title:"hydra token user",description:"hydra token user An exemplary OAuth 2.0 Client performing the OAuth 2.0 Authorize Code Flow"},sidebar:"docs",previous:{title:"hydra token revoke",permalink:"/hydra/docs/next/cli/hydra-token-revoke"},next:{title:"hydra version",permalink:"/hydra/docs/next/cli/hydra-version"}},d=[{value:"hydra token user",id:"hydra-token-user",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],c={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hydra-token-user"},"hydra token user"),(0,i.kt)("p",null,"An exemplary OAuth 2.0 Client performing the OAuth 2.0 Authorize Code Flow"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Starts an exemplary web server that acts as an OAuth 2.0 Client performing the\nAuthorize Code Flow. This command will help you to see if Ory Hydra has been\nconfigured properly."),(0,i.kt)("p",null,"This command must not be used for anything else than manual testing or demo\npurposes. The server will terminate on error and success, unless if the\n--no-shutdown flag is provided."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hydra token user [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --audience strings       Request a specific OAuth 2.0 Access Token Audience\n      --auth-url endpoint      Usually it is enough to specify the endpoint flag, but if you want to force the authorization url, use this flag\n      --client-id string       Use the provided OAuth 2.0 Client ID, defaults to environment variable OAUTH2_CLIENT_ID\n      --client-secret string   Use the provided OAuth 2.0 Client Secret, defaults to environment variable OAUTH2_CLIENT_SECRET\n      --endpoint string        Set the URL where Ory Hydra is hosted, defaults to environment variable HYDRA_URL\n  -h, --help                   help for user\n      --https                  Sets up HTTPS for the endpoint using a self-signed certificate which is re-generated every time you start this command\n      --max-age int            Set the OpenID Connect max_age parameter\n      --no-open                Do not open the browser window automatically\n      --no-shutdown            Do not terminate on success/error. State and nonce will be regenerated when auth flow has completed (either due to an error or success).\n  -p, --port int               The port on which the server should run (default 4446)\n      --prompt strings         Set the OpenID Connect prompt parameter\n      --redirect string        Force a redirect url\n      --scope strings          Request OAuth2 scope (default [offline,openid])\n      --token-url endpoint     Usually it is enough to specify the endpoint flag, but if you want to force the token url, use this flag\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   fake tls termination by adding &#34;X-Forwarded-Proto: https&#34; to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unknown certificate authorities\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra-token"},"hydra token")," - Issue and Manage OAuth2 tokens")))}p.isMDXComponent=!0}}]);