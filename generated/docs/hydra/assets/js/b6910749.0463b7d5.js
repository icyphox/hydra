"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[55634],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(r),u=o,m=c["".concat(p,".").concat(u)]||c[u]||y[u]||i;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},71657:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={id:"hydra-keys-import",title:"hydra keys import",description:"hydra keys import Imports cryptographic keys of any format to the JSON Web Key Store"},p=void 0,l={unversionedId:"cli/hydra-keys-import",id:"version-v1.7/cli/hydra-keys-import",isDocsHomePage:!1,title:"hydra keys import",description:"hydra keys import Imports cryptographic keys of any format to the JSON Web Key Store",source:"@site/versioned_docs/version-v1.7/cli/hydra-keys-import.md",sourceDirName:"cli",slug:"/cli/hydra-keys-import",permalink:"/hydra/docs/v1.7/cli/hydra-keys-import",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/cli/hydra-keys-import.md",tags:[],version:"v1.7",lastUpdatedBy:"Anirudh Oppiliappan",lastUpdatedAt:1643030541,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"hydra-keys-import",title:"hydra keys import",description:"hydra keys import Imports cryptographic keys of any format to the JSON Web Key Store"},sidebar:"version-v1.7/docs",previous:{title:"hydra keys get",permalink:"/hydra/docs/v1.7/cli/hydra-keys-get"},next:{title:"hydra migrate",permalink:"/hydra/docs/v1.7/cli/hydra-migrate"}},d=[{value:"hydra keys import",id:"hydra-keys-import",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],y={toc:d};function c(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hydra-keys-import"},"hydra keys import"),(0,i.kt)("p",null,"Imports cryptographic keys of any format to the JSON Web Key Store"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"This command allows you to import cryptographic keys to the JSON Web Key Store."),(0,i.kt)("p",null,"Currently supported formats are raw JSON Web Keys or PEM/DER encoded data. If\nthe JSON Web Key Set exists already, the imported keys will be added to that\nset. Otherwise, a new set will be created."),(0,i.kt)("p",null,"Please be aware that importing a private key does not automatically import its\npublic key as well."),(0,i.kt)("p",null,"Examples: hydra keys import my-set ./path/to/jwk.json ./path/to/jwk-2.json hydra\nkeys import my-set ./path/to/rsa.key ./path/to/rsa.pub"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hydra keys import <set> <file-1> [<file-2> [<file-3 [<...>]]] [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -h, --help         help for import\n      --use string   Sets the "use" value of the JSON Web Key if not "use" value was defined by the key itself (default "sig")\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --access-token string    Set an access token to be used in the Authorization header, defaults to environment variable OAUTH2_ACCESS_TOKEN\n      --config string          Config file (default is $HOME/.hydra.yaml)\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_ADMIN_URL\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   fake tls termination by adding "X-Forwarded-Proto: https" to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unkown certificate authorities\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"hydra-keys"},"hydra keys")," - Manage JSON Web Keys")))}c.isMDXComponent=!0}}]);