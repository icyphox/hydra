"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[27652],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(52263),a=n(13919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,s=void 0!==i&&i,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+p:p}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},63757:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(44996),s=["components"],l={id:"5min-tutorial",title:"5 Minute Tutorial"},c=void 0,p={unversionedId:"5min-tutorial",id:"version-v1.7/5min-tutorial",isDocsHomePage:!1,title:"5 Minute Tutorial",description:"This tutorial walks you through a quick setup of ORY Hydra, a PostgreSQL",source:"@site/versioned_docs/version-v1.7/5min-tutorial.mdx",sourceDirName:".",slug:"/5min-tutorial",permalink:"/hydra/docs/v1.7/5min-tutorial",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/5min-tutorial.mdx",tags:[],version:"v1.7",lastUpdatedBy:"Anirudh Oppiliappan",lastUpdatedAt:1643030541,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"5min-tutorial",title:"5 Minute Tutorial"},sidebar:"version-v1.7/docs",previous:{title:"Introduction",permalink:"/hydra/docs/v1.7/"},next:{title:"Installation",permalink:"/hydra/docs/v1.7/install"}},u=[],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial walks you through a quick setup of ORY Hydra, a PostgreSQL\ninstance and an exemplary User Login & Consent App based on Docker Compose. You\nneed to have the latest ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose"},"Docker Compose")," version installed."),(0,o.kt)("img",{alt:"OAuth2 Flow",src:(0,i.Z)("img/docs/oauth2-flow.gif")}),";",(0,o.kt)("p",null,"We will use the Docker Compose configuration in the ORY Hydra code base. Getting\nthe Hydra source code is easy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if you have Go 1.12+ installed: ",(0,o.kt)("inlineCode",{parentName:"li"},"go get -d github.com/ory/hydra")),(0,o.kt)("li",{parentName:"ul"},"if you have Git installed: ",(0,o.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/ory/hydra.git")),(0,o.kt)("li",{parentName:"ul"},"otherwise: download the\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory-am/hydra/archive/master.zip"},"Hydra source code"),". and\nextract it somewhere")),(0,o.kt)("p",null,"Change into the directory with the Hydra source code and run the following\ncommand to start the needed containers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml \\\n    -f quickstart-postgres.yml \\\n    up --build\nStarting hydra_postgresd_1\nStarting hydra_hydra_1\n[...]\n")),(0,o.kt)("p",null,"If you prefer to use MySQL as the database backend, run this command instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml \\\n    -f quickstart-mysql.yml \\\n    up --build\n")),(0,o.kt)("p",null,"This command makes Docker Compose start up a database server and a basic base\nORY Hydra server that uses this database. If you need more details on this,\nplease examine the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts/5-min-tutorial.sh")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose*.yml")," files."),(0,o.kt)("p",null,"You may also extend the command above to enable distributed tracing. The tracing\nUI is exposed at ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:16686/search"},"http://127.0.0.1:16686/search"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml \\\n    -f quickstart-postgres.yml \\\n    -f quickstart-tracing.yml \\\n    up --build\n")),(0,o.kt)("p",null,"Hydra provides an endpoint for Prometheus to scrape as a target. You can run the\nfollowing command to start the needed containers, and status of Hydra is exposed\nat targets page in Prometheus\n",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9090/targets"},"http://localhost:9090/targets"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"docker-compose -f quickstart.yml \\\n  -f quickstart-prometheus.yml \\\n  up --build\n")),(0,o.kt)("p",null,"Let's confirm that everything is working by creating an OAuth 2.0 Client."),(0,o.kt)("p",null,"Note: The following commands run Hydra inside Docker. If you have the ORY Hydra\nCLI installed locally, you can omit\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose -f quickstart.yml exec /hydra")," in front of each command."),(0,o.kt)("p",null,"The OAuth 2.0 client uses port ",(0,o.kt)("inlineCode",{parentName:"p"},"4444")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"4445"),". The former is ORY Hydra's\npublic endpoint, the latter its administrative endpoint. For more information\nhead over to ",(0,o.kt)("a",{parentName:"p",href:"production"},"Exposing Administrative and Public API Endpoints"),"."),(0,o.kt)("p",null,"Let's create the OAuth 2.0 Client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra clients create \\\n    --endpoint http://127.0.0.1:4445/ \\\n    --id my-client \\\n    --secret secret \\\n    -g client_credentials\n")),(0,o.kt)("p",null,"If you get an error message about a config file not being found, you can ignore\nit for now:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'Config file not found because "Config File ".hydra" Not Found in "[/]""\nOAuth2 client my-client\n')),(0,o.kt)("p",null,"Let's perform the client credentials grant:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra token client \\\n    --endpoint http://127.0.0.1:4444/ \\\n    --client-id my-client \\\n    --client-secret secret\n\nUDYMha9TwsMBejEvKfnDOXkhgkLsnmUNYVQDklT5bD8.ZNpuNRC85erbIYDjPqhMwTinlvQmNTk_UvttcLQxFJY\n")),(0,o.kt)("p",null,"Let's perform token introspection on that token. Make sure to copy the token you\njust got and not the dummy value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ docker-compose -f quickstart.yml exec hydra \\\n    hydra token introspect \\\n    --endpoint http://127.0.0.1:4445/ \\\n\nUDYMha9TwsMBejEvKfnDOXkhgkLsnmUNYVQDklT5bD8.ZNpuNRC85erbIYDjPqhMwTinlvQmNTk_UvttcLQxFJY\n\n{\n    "active": true,\n    "client_id": "my-client",\n    "exp": 1527078658,\n    "iat": 1527075058,\n    "iss": "http://127.0.0.1:4444/",\n    "sub": "my-client",\n    "token_type": "access_token"\n}\n')),(0,o.kt)("p",null,"Next, we will perform the OAuth 2.0 Authorization Code Grant. For that, we must\nfirst create a client that is capable of performing that grant:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra clients create \\\n    --endpoint http://127.0.0.1:4445 \\\n    --id auth-code-client \\\n    --secret secret \\\n    --grant-types authorization_code,refresh_token \\\n    --response-types code,id_token \\\n    --scope openid,offline \\\n    --callbacks http://127.0.0.1:5555/callback\n")),(0,o.kt)("p",null,"Note that you need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"--token-endpoint-auth-method none")," if your clients\nare public (such as SPA apps and native apps) because the public clients cannot\nprovide client secrets."),(0,o.kt)("p",null,"The following command starts a server that serves an example web application.\nThe application will perform the OAuth 2.0 Authorization Code Flow using ORY\nHydra. The web server runs on ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:5555"},"http://127.0.0.1:5555"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra token user \\\n    --client-id auth-code-client \\\n    --client-secret secret \\\n    --endpoint http://127.0.0.1:4444/ \\\n    --port 5555 \\\n    --scope openid,offline\n\nSetting up home route on http://127.0.0.1:4445/\nSetting up callback listener on http://127.0.0.1:4445/callback\nPress ctrl + c on Linux / Windows or cmd + c on OSX to end the process.\nIf your browser does not open automatically, navigate to:\n\n        http://127.0.0.1:5555/\n")),(0,o.kt)("p",null,"Open the URL ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:5555"},"http://127.0.0.1:5555"),", log in, and\nauthorize the application. Next, you should see at least an access token in the\nresponse. If you granted the ",(0,o.kt)("inlineCode",{parentName:"p"},"offline")," scope, you will also see a refresh token.\nIf you granted the ",(0,o.kt)("inlineCode",{parentName:"p"},"openid")," scope, you will get an ID Token as well."),(0,o.kt)("p",null,"Great! You installed Ory Hydra, connected the CLI, created a client and\ncompleted two authentication flows! Before you continue, clean up this set up in\norder to avoid conflicts with other tutorials from this guide:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml kill\n$ docker-compose -f quickstart.yml rm -f -v\n")))}m.isMDXComponent=!0}}]);