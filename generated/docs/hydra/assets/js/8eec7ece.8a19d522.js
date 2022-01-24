"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[86954],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,y=f["".concat(a,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(y,s(s({ref:t},l),{},{components:n})):r.createElement(y,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return s}});var r=n(52263),o=n(13919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,s=i.forcePrependBaseUrl,u=void 0!==s&&s,a=i.absolute,c=void 0!==a&&a;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+l:l}(i,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},90237:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=(n(44996),["components"]),u={id:"ssl-https-tls",title:"SSL/TLS, HTTPS, Self-Signed Certificates"},a=void 0,c={unversionedId:"guides/ssl-https-tls",id:"version-v1.6/guides/ssl-https-tls",isDocsHomePage:!1,title:"SSL/TLS, HTTPS, Self-Signed Certificates",description:"If you want to run ORY Hydra using self-signed TLS certificates, you can do the",source:"@site/versioned_docs/version-v1.6/guides/ssl-https-tls.mdx",sourceDirName:"guides",slug:"/guides/ssl-https-tls",permalink:"/hydra/docs/v1.6/guides/ssl-https-tls",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.6/guides/ssl-https-tls.mdx",tags:[],version:"v1.6",lastUpdatedBy:"Anirudh Oppiliappan",lastUpdatedAt:1643030541,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"ssl-https-tls",title:"SSL/TLS, HTTPS, Self-Signed Certificates"},sidebar:"version-v1.6/docs",previous:{title:"Kubernetes Helm Chart",permalink:"/hydra/docs/v1.6/guides/kubernetes-helm-chart"},next:{title:"Configuring Cookies",permalink:"/hydra/docs/v1.6/guides/cookies"}},l=[],p={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you want to run ORY Hydra using self-signed TLS certificates, you can do the\nfollowing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ openssl genrsa -out key.pem 4096\n$ openssl req -new -x509 -sha256 -key key.pem -out cert.crt -days 365\n\n$ SERVE_TLS_CERT_BASE64=$(base64 -i cert.crt)\n$ SERVE_TLS_KEY_BASE64=$(base64 -i key.pem)\n\n# or\n\n$ SERVE_TLS_KEY_PATH=/path/to/key.pem\n$ SERVE_TLS_CERT_PATH=/path/to/cert.crt\n")),(0,i.kt)("p",null,"If you run Docker locally, you can then use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ docker run ... \\\n    -e SERVE_TLS_CERT_BASE64=$(SERVE_TLS_CERT_BASE64) \\\n    -e SERVE_TLS_KEY_BASE64=$(SERVE_TLS_KEY_BASE64) \\\n    ...\n")),(0,i.kt)("p",null,"or mount the files using ",(0,i.kt)("inlineCode",{parentName:"p"},"--mount")," and linking to the files."))}f.isMDXComponent=!0}}]);