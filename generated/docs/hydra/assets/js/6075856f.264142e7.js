"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[10650],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55614:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"cookies",title:"Configuring Cookies"},c=void 0,u={unversionedId:"guides/cookies",id:"version-v1.7/guides/cookies",isDocsHomePage:!1,title:"Configuring Cookies",description:"By default, cookies sent by the Hydra Public endpoints are set without",source:"@site/versioned_docs/version-v1.7/guides/cookies.mdx",sourceDirName:"guides",slug:"/guides/cookies",permalink:"/hydra/docs/v1.7/guides/cookies",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/guides/cookies.mdx",tags:[],version:"v1.7",lastUpdatedBy:"Anirudh Oppiliappan",lastUpdatedAt:1643030541,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"cookies",title:"Configuring Cookies"},sidebar:"version-v1.7/docs",previous:{title:"SSL/TLS, HTTPS, Self-Signed Certificates",permalink:"/hydra/docs/v1.7/guides/ssl-https-tls"},next:{title:"Scaling ORY Hydra",permalink:"/hydra/docs/v1.7/guides/scaling-hydra"}},p=[],l={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default, cookies sent by the Hydra Public endpoints are set without\nexplicitly specifying a SameSite mode. If you wish for these cookies to be set\nwith a mode you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"serve.cookies.same_site_mode")," setting. Possible\nvalues are ",(0,i.kt)("inlineCode",{parentName:"p"},"Strict"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Lax")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,i.kt)("p",null,"If you wish to embed requests to hydra on a third party site (for example an\niframe that periodically polls to check session status) you will need to set the\nmode to ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,i.kt)("p",null,"Some\n",(0,i.kt)("a",{parentName:"p",href:"https://www.chromium.org/updates/same-site/incompatible-clients"},"browser versions"),"\nreject cookies using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Same-Site=None")," attribute. Hydra implements a\n",(0,i.kt)("a",{parentName:"p",href:"https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients"},"workaround"),"\nthat can be enabled by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"serve.cookies.same_site_legacy_workaround")," to\n",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". This workaround is disabled by default, and only takes effect when\n",(0,i.kt)("inlineCode",{parentName:"p"},"serve.cookies.same_site_mode")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),"."))}d.isMDXComponent=!0}}]);