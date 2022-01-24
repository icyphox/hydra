"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[94810],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4499:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],l={id:"production",title:"Preparing for Production"},s=void 0,u={unversionedId:"production",id:"version-v1.10/production",isDocsHomePage:!1,title:"Preparing for Production",description:"This document summarizes things you will find useful when going to production.",source:"@site/versioned_docs/version-v1.10/production.md",sourceDirName:".",slug:"/production",permalink:"/hydra/docs/production",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/production.md",tags:[],version:"v1.10",lastUpdatedBy:"Anirudh Oppiliappan",lastUpdatedAt:1643030541,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"production",title:"Preparing for Production"},sidebar:"version-v1.10/docs",previous:{title:"Database Setup and Configuration",permalink:"/hydra/docs/dependencies-environment"},next:{title:"Distributed Tracing",permalink:"/hydra/docs/guides/tracing"}},d=[{value:"ORY Hydra behind an API Gateway",id:"ory-hydra-behind-an-api-gateway",children:[{value:"TLS Termination",id:"tls-termination",children:[],level:3},{value:"Routing",id:"routing",children:[],level:3}],level:2},{value:"Exposing Administrative and Public API Endpoints",id:"exposing-administrative-and-public-api-endpoints",children:[{value:"Binding to different interfaces or UNIX sockets",id:"binding-to-different-interfaces-or-unix-sockets",children:[],level:3}],level:2}],p={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document summarizes things you will find useful when going to production."),(0,r.kt)("h2",{id:"ory-hydra-behind-an-api-gateway"},"ORY Hydra behind an API Gateway"),(0,r.kt)("p",null,"Although ORY Hydra implements all Go best practices around running public-facing\nproduction http servers, we discourage running ORY Hydra facing the public net\ndirectly. We strongly recommend running ORY Hydra behind an API gateway or a\nload balancer. It is common to terminate TLS on the edge (gateway / load\nbalancer) and use certificates provided by your infrastructure provider (e.g.\nAWS CA) for last mile security."),(0,r.kt)("h3",{id:"tls-termination"},"TLS Termination"),(0,r.kt)("p",null,"You may also choose to set Hydra to HTTPS mode without actually accepting TLS\nconnections. In that case, all Hydra URLs are prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"https://"),", but the\nserver is actually accepting http. This makes sense if you don't want last mile\nsecurity using TLS, and trust your network to properly handle internal traffic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"serve:\n  tls:\n    allow_termination_from:\n      - 127.0.0.1/32\n")),(0,r.kt)("p",null,"With TLS termination enabled, ORY Hydra discards all requests unless:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The request is coming from a trusted IP address set by\n",(0,r.kt)("inlineCode",{parentName:"li"},"serve.tls.allow_termination_from")," and the header ",(0,r.kt)("inlineCode",{parentName:"li"},"X-Forwarded-Proto")," is set\nto ",(0,r.kt)("inlineCode",{parentName:"li"},"https"),"."),(0,r.kt)("li",{parentName:"ul"},"The request goes to ",(0,r.kt)("inlineCode",{parentName:"li"},"/health/alive"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"/health/ready")," which does not require\nTLS termination and that is used to check the health of an instance.")),(0,r.kt)("p",null,"When TLS Termination is enabled, you do not need to provide a TLS Certificate\nand Private Key."),(0,r.kt)("p",null,"If you are unable to properly set up TLS Termination, you may want to set the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--dangerous-force-http")," flag. But please be aware that we discourage you from\ndoing so and that you should know what you're doing."),(0,r.kt)("h3",{id:"routing"},"Routing"),(0,r.kt)("p",null,"It is common to use a router, or API gateway, to route subdomains or paths to a\nspecific service. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"https://myservice.com/hydra/")," is routed to\n",(0,r.kt)("inlineCode",{parentName:"p"},"http://10.0.1.213:3912/")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.1.213")," is the host running ORY Hydra. To\ncompute the values for the consent challenge, ORY Hydra uses the host and path\nheaders from the HTTP request. Therefore, it is important to set up your API\nGateway in such a way, that it passes the public host (in this case\n",(0,r.kt)("inlineCode",{parentName:"p"},"myservice.com"),") and the path without any prefix (in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra/"),"). If you\nuse the Mashape Kong API gateway, you can achieve this by setting\n",(0,r.kt)("inlineCode",{parentName:"p"},"strip_request_path=true")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"preserve_host=true.")),(0,r.kt)("h2",{id:"exposing-administrative-and-public-api-endpoints"},"Exposing Administrative and Public API Endpoints"),(0,r.kt)("p",null,"ORY Hydra serves APIs via two ports:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Public port (default 4444)"),(0,r.kt)("li",{parentName:"ul"},"Administrative port (default 4445)")),(0,r.kt)("p",null,"The public port can and should be exposed to public internet traffic. That port\nhandles requests to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/.well-known/jwks.json")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/.well-known/openid-configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/oauth2/auth")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/oauth2/token")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/oauth2/revoke")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/oauth2/fallbacks/consent")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/oauth2/fallbacks/error")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/oauth2/sessions/logout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/userinfo"))),(0,r.kt)("p",null,"The administrative port should not be exposed to public internet traffic. If you\nwant to expose certain endpoints, such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"/clients")," endpoint for OpenID\nConnect Dynamic Client Registry, you can do so but you need to properly secure\nthese endpoints with an API Gateway or Authorization Proxy. Administrative\nendpoints include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All ",(0,r.kt)("inlineCode",{parentName:"li"},"/clients")," endpoints."),(0,r.kt)("li",{parentName:"ul"},"All ",(0,r.kt)("inlineCode",{parentName:"li"},"/keys")," endpoints."),(0,r.kt)("li",{parentName:"ul"},"All ",(0,r.kt)("inlineCode",{parentName:"li"},"/health"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"/metrics"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"/version")," endpoints."),(0,r.kt)("li",{parentName:"ul"},"All ",(0,r.kt)("inlineCode",{parentName:"li"},"/oauth2/auth/requests")," endpoints."),(0,r.kt)("li",{parentName:"ul"},"Endpoint ",(0,r.kt)("inlineCode",{parentName:"li"},"/oauth2/introspect"),"."),(0,r.kt)("li",{parentName:"ul"},"Endpoint ",(0,r.kt)("inlineCode",{parentName:"li"},"/oauth2/flush"),".")),(0,r.kt)("p",null,"None of the administrative endpoints have any built-in access control. You can\ndo simple ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," or Postman requests to talk to them."),(0,r.kt)("p",null,"The Token Introspection endpoint requires authentication. But since there is no\naccess control, any valid authentication enables the endpoint to be used. If you\nneed to access this endpoint in production, you should configure your API\nGateway or Application Proxy to restrict which clients have access to the\nendpoint."),(0,r.kt)("p",null,"We generally advise to run ORY Hydra with ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra serve all")," which listens on\nboth ports in one process. Please be aware that the ",(0,r.kt)("inlineCode",{parentName:"p"},"memory")," backend will not\nwork in this mode."),(0,r.kt)("h3",{id:"binding-to-different-interfaces-or-unix-sockets"},"Binding to different interfaces or UNIX sockets"),(0,r.kt)("p",null,"ORY Hydra will bind public and administrative APIs ports to all interfaces."),(0,r.kt)("p",null,"The interfaces or UNIX sockets used may be specified via environment variables\n",(0,r.kt)("inlineCode",{parentName:"p"},"PUBLIC_HOST")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ADMIN_HOST"),". Interfaces may be specified as TCP address or as\nUNIX socket (giving the absolute path to the socket file prefixed by ",(0,r.kt)("inlineCode",{parentName:"p"},"unix:"),")\nlike:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PUBLIC_HOST=127.0.0.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'ADMIN_HOST="unix:/var/run/hydra/admin_socket"'))),(0,r.kt)("p",null,"ORY Hydra will try to create the socket file during startup and the socket will\nbe writeable by the user running ORY Hydra. The owner, group and mode of the\nsocket can be modified:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"serve:\n  admin:\n    host: unix:/var/run/hydra/admin_socket\n    socket:\n      owner: hydra\n      group: hydra-admin-api\n      mode: 770\n")))}c.isMDXComponent=!0}}]);