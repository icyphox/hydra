"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[62349],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return f}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,y=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?t.createElement(y,a(a({ref:r},l),{},{components:n})):t.createElement(y,a({ref:r},l))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},17288:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"scaling-hydra",title:"Scaling ORY Hydra"},c=void 0,u={unversionedId:"guides/scaling-hydra",id:"version-v1.10/guides/scaling-hydra",isDocsHomePage:!1,title:"Scaling ORY Hydra",description:"ORY Hydra is running in high-scale production environments that do millions of",source:"@site/versioned_docs/version-v1.10/guides/scaling-hydra.mdx",sourceDirName:"guides",slug:"/guides/scaling-hydra",permalink:"/hydra/docs/guides/scaling-hydra",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/guides/scaling-hydra.mdx",tags:[],version:"v1.10",lastUpdatedBy:"Anirudh Oppiliappan",lastUpdatedAt:1643030541,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"scaling-hydra",title:"Scaling ORY Hydra"},sidebar:"version-v1.10/docs",previous:{title:"Configuring Cookies",permalink:"/hydra/docs/guides/cookies"},next:{title:"Setting up Cross-origin resource sharing (CORS)",permalink:"/hydra/docs/guides/cors"}},l=[],d={toc:l};function p(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ORY Hydra is running in high-scale production environments that do millions of\nrequests per day. To scale ORY Hydra, simply spin up another VM / Docker\nContainer / Pod of ORY Hydra with the same configuration. There is no need for\ncomplex key/value stores or message queues to serve high traffic environments!"),(0,i.kt)("p",null,"If you use multiple SQL instances make use of HAProxy or similar technology to\ndo\n",(0,i.kt)("a",{parentName:"p",href:"https://severalnines.com/resources/database-management-tutorials/mysql-load-balancing-haproxy-tutorial"},"SQL Load Balancing"),"."))}p.isMDXComponent=!0}}]);