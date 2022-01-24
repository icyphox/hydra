"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[26446],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),g=l,h=p["".concat(s,".").concat(g)]||p[g]||u[g]||r;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87823:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var o=n(87462),l=n(63366),r=(n(67294),n(3905)),a=["components"],i={id:"login-consent-flow",title:"Hydra's User Login and Consent Flow",sidebar_label:"Hydra workflow"},s=void 0,c={unversionedId:"login-consent-flow",id:"version-v1.9/login-consent-flow",isDocsHomePage:!1,title:"Hydra's User Login and Consent Flow",description:"ORY Hydra uses a User Login and Consent Flow to include third-party user",source:"@site/versioned_docs/version-v1.9/login-consent-flow.md",sourceDirName:".",slug:"/login-consent-flow",permalink:"/hydra/docs/v1.9/login-consent-flow",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/login-consent-flow.md",tags:[],version:"v1.9",lastUpdatedBy:"Anirudh Oppiliappan",lastUpdatedAt:1643030541,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"login-consent-flow",title:"Hydra's User Login and Consent Flow",sidebar_label:"Hydra workflow"}},d=[{value:"The flow steps",id:"the-flow-steps",children:[{value:"The flow from a user&#39;s point of view",id:"the-flow-from-a-users-point-of-view",children:[],level:3},{value:"The flow from a network perspective",id:"the-flow-from-a-network-perspective",children:[],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,l.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ORY Hydra uses a ",(0,r.kt)("strong",{parentName:"p"},"User Login and Consent Flow")," to include third-party user\nmanagement (implemented by you) into the OAuth 2.0 and OpenID Connect\nauthorization flow. An incoming authorization request is redirected to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"the ",(0,r.kt)("strong",{parentName:"li"},"Login Provider"),": authenticates the user by validating his or her\ncredentials (login)"),(0,r.kt)("li",{parentName:"ol"},"the ",(0,r.kt)("strong",{parentName:"li"},"Consent Provider"),': allows to select the OAuth 2.0 scopes that should\nbe granted to the requesting application ("Do you want to allow foobar-app\naccess to all your personal messages and images?")')),(0,r.kt)("p",null,"You implement the Login and Consent providers in the technology stack of your\nchoice."),(0,r.kt)("h2",{id:"the-flow-steps"},"The flow steps"),(0,r.kt)("p",null,"The flow itself works as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The OAuth 2.0 Client initiates an Authorize Code, Hybrid, or Implicit flow.\nThe user's user agent is redirect to\n",(0,r.kt)("inlineCode",{parentName:"li"},"http://hydra/oauth2/auth?client_id=...&..."),"."),(0,r.kt)("li",{parentName:"ol"},'ORY Hydra, if unable to authenticate the user (= no session cookie exists),\nredirects the user\'s user agent to the Login Provider URL. The application\n"sitting" at that URL is implemented by you and typically shows a login user\ninterface ("Please enter your username and password"). The URL the user is\nredirect to looks similar to\n',(0,r.kt)("inlineCode",{parentName:"li"},"http://login-service/login?login_challenge=1234..."),"."),(0,r.kt)("li",{parentName:"ol"},"The Login Provider, once the user has successfully logged in, tells ORY Hydra\nsome information about who the user is (e.g. the user's ID) and also that the\nlogin attempt was successful. This is done using a REST request which\nincludes another redirect URL along the lines of\n",(0,r.kt)("inlineCode",{parentName:"li"},"http://hydra/oauth2/auth?client_id=...&...&login_verifier=4321"),"."),(0,r.kt)("li",{parentName:"ol"},"The user's user agent follows the redirect and lands back at ORY Hydra. Next,\nORY Hydra redirects the user's user agent to the Consent Provider, hosted\nat - for example - ",(0,r.kt)("inlineCode",{parentName:"li"},"http://consent-service/consent?consent_challenge=4567...")),(0,r.kt)("li",{parentName:"ol"},'The Consent Provider shows a user interface which asks the user if he/she\nwould like to grant the OAuth 2.0 Client the requested permissions ("OAuth\n2.0 Scope"). You\'ve probably seen this screen around, which is usually\nsomething similar to: ',(0,r.kt)("em",{parentName:"li"},'"Would you like to grant Facebook Image Backup access\nto all your private and public images?"'),"."),(0,r.kt)("li",{parentName:"ol"},"The Consent Provider makes another REST request to ORY Hydra to let it know\nwhich permissions the user authorized, and if the user authorized the request\nat all. The user can usually choose to not grant an application any access to\nhis/her personal data. In the response of that REST request, a redirect URL\nis included along the lines of\n",(0,r.kt)("inlineCode",{parentName:"li"},"http://hydra/oauth2/auth?client_id=...&...&consent_verifier=7654..."),"."),(0,r.kt)("li",{parentName:"ol"},"The user's user agent follows that redirect."),(0,r.kt)("li",{parentName:"ol"},"Now, the user has successfully authenticated and authorized the application.\nNext, ORY Hydra will run some checks and if everything works out, issue\naccess, refresh, and ID tokens.")),(0,r.kt)("p",null,"This flow allows you to take full control of the behaviour of your login system\n(e.g. 2FA, passwordless, ...) and consent screen. A well-documented reference\nimplementation for both the Login and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra-login-consent-node"},"Consent Provider is available on GitHub"),"."),(0,r.kt)("h3",{id:"the-flow-from-a-users-point-of-view"},"The flow from a user's point of view"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/txUmfORzu8Y",frameborder:"0",allowfullscreen:!0}),(0,r.kt)("h3",{id:"the-flow-from-a-network-perspective"},"The flow from a network perspective"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgT0F1dGgyIENsaWVudC0-Pk9SWSBIeWRyYTogSW5pdGlhdGVzIE9BdXRoMiBBdXRob3JpemUgQ29kZSBvciBJbXBsaWNpdCBGbG93XG4gICAgT1JZIEh5ZHJhLS0-Pk9SWSBIeWRyYTogTm8gZW5kIHVzZXIgc2Vzc2lvbiBhdmFpbGFibGUgKG5vdCBhdXRoZW50aWNhdGVkKVxuICAgIE9SWSBIeWRyYS0-PkxvZ2luIFByb3ZpZGVyOiBSZWRpcmVjdHMgZW5kIHVzZXIgd2l0aCBsb2dpbiBjaGFsbGVuZ2VcbiAgICBMb2dpbiBQcm92aWRlci0tPk9SWSBIeWRyYTogRmV0Y2hlcyBsb2dpbiBpbmZvXG4gICAgTG9naW4gUHJvdmlkZXItLT4-TG9naW4gUHJvdmlkZXI6IEF1dGhlbnRpY2F0ZXMgdXNlciB3aXRoIGNyZWRlbnRpYWxzXG4gICAgTG9naW4gUHJvdmlkZXItLT5PUlkgSHlkcmE6IFRyYW5zbWl0cyBsb2dpbiBpbmZvIGFuZCByZWNlaXZlcyByZWRpcmVjdCB1cmwgd2l0aCBsb2dpbiB2ZXJpZmllclxuICAgIExvZ2luIFByb3ZpZGVyLT4-T1JZIEh5ZHJhOiBSZWRpcmVjdHMgZW5kIHVzZXIgdG8gcmVkaXJlY3QgdXJsIHdpdGggbG9naW4gdmVyaWZpZXJcbiAgICBPUlkgSHlkcmEtLT4-T1JZIEh5ZHJhOiBGaXJzdCB0aW1lIHRoYXQgY2xpZW50IGFza3MgdXNlciBmb3IgcGVybWlzc2lvbnNcbiAgICBPUlkgSHlkcmEtPj5Db25zZW50IFByb3ZpZGVyOiBSZWRpcmVjdHMgZW5kIHVzZXIgd2l0aCBjb25zZW50IGNoYWxsZW5nZVxuICAgIENvbnNlbnQgUHJvdmlkZXItLT5PUlkgSHlkcmE6IEZldGNoZXMgY29uc2VudCBpbmZvICh3aGljaCB1c2VyLCB3aGF0IGFwcCwgd2hhdCBzY29wZXMpXG4gICAgQ29uc2VudCBQcm92aWRlci0tPj5Db25zZW50IFByb3ZpZGVyOiBBc2tzIGZvciBlbmQgdXNlcidzIHBlcm1pc3Npb24gdG8gZ3JhbnQgYXBwbGljYXRpb24gYWNjZXNzXG4gICAgQ29uc2VudCBQcm92aWRlci0tPk9SWSBIeWRyYTogVHJhbnNtaXRzIGNvbnNlbnQgcmVzdWx0IGFuZCByZWNlaXZlcyByZWRpcmVjdCB1cmwgd2l0aCBjb25zZW50IHZlcmlmaWVyXG4gICAgQ29uc2VudCBQcm92aWRlci0-Pk9SWSBIeWRyYTogUmVkaXJlY3RzIHRvIHJlZGlyZWN0IHVybCB3aXRoIGNvbnNlbnQgdmVyaWZpZXJcbiAgICBPUlkgSHlkcmEtLT4-T1JZIEh5ZHJhOiBWZXJpZmllcyBncmFudFxuICAgIE9SWSBIeWRyYS0-Pk9BdXRoMiBDbGllbnQ6IFRyYW5zbWl0cyBhdXRob3JpemF0aW9uIGNvZGUvdG9rZW4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ"},(0,r.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgT0F1dGgyIENsaWVudC0-Pk9SWSBIeWRyYTogSW5pdGlhdGVzIE9BdXRoMiBBdXRob3JpemUgQ29kZSBvciBJbXBsaWNpdCBGbG93XG4gICAgT1JZIEh5ZHJhLS0-Pk9SWSBIeWRyYTogTm8gZW5kIHVzZXIgc2Vzc2lvbiBhdmFpbGFibGUgKG5vdCBhdXRoZW50aWNhdGVkKVxuICAgIE9SWSBIeWRyYS0-PkxvZ2luIFByb3ZpZGVyOiBSZWRpcmVjdHMgZW5kIHVzZXIgd2l0aCBsb2dpbiBjaGFsbGVuZ2VcbiAgICBMb2dpbiBQcm92aWRlci0tPk9SWSBIeWRyYTogRmV0Y2hlcyBsb2dpbiBpbmZvXG4gICAgTG9naW4gUHJvdmlkZXItLT4-TG9naW4gUHJvdmlkZXI6IEF1dGhlbnRpY2F0ZXMgdXNlciB3aXRoIGNyZWRlbnRpYWxzXG4gICAgTG9naW4gUHJvdmlkZXItLT5PUlkgSHlkcmE6IFRyYW5zbWl0cyBsb2dpbiBpbmZvIGFuZCByZWNlaXZlcyByZWRpcmVjdCB1cmwgd2l0aCBsb2dpbiB2ZXJpZmllclxuICAgIExvZ2luIFByb3ZpZGVyLT4-T1JZIEh5ZHJhOiBSZWRpcmVjdHMgZW5kIHVzZXIgdG8gcmVkaXJlY3QgdXJsIHdpdGggbG9naW4gdmVyaWZpZXJcbiAgICBPUlkgSHlkcmEtLT4-T1JZIEh5ZHJhOiBGaXJzdCB0aW1lIHRoYXQgY2xpZW50IGFza3MgdXNlciBmb3IgcGVybWlzc2lvbnNcbiAgICBPUlkgSHlkcmEtPj5Db25zZW50IFByb3ZpZGVyOiBSZWRpcmVjdHMgZW5kIHVzZXIgd2l0aCBjb25zZW50IGNoYWxsZW5nZVxuICAgIENvbnNlbnQgUHJvdmlkZXItLT5PUlkgSHlkcmE6IEZldGNoZXMgY29uc2VudCBpbmZvICh3aGljaCB1c2VyLCB3aGF0IGFwcCwgd2hhdCBzY29wZXMpXG4gICAgQ29uc2VudCBQcm92aWRlci0tPj5Db25zZW50IFByb3ZpZGVyOiBBc2tzIGZvciBlbmQgdXNlcidzIHBlcm1pc3Npb24gdG8gZ3JhbnQgYXBwbGljYXRpb24gYWNjZXNzXG4gICAgQ29uc2VudCBQcm92aWRlci0tPk9SWSBIeWRyYTogVHJhbnNtaXRzIGNvbnNlbnQgcmVzdWx0IGFuZCByZWNlaXZlcyByZWRpcmVjdCB1cmwgd2l0aCBjb25zZW50IHZlcmlmaWVyXG4gICAgQ29uc2VudCBQcm92aWRlci0-Pk9SWSBIeWRyYTogUmVkaXJlY3RzIHRvIHJlZGlyZWN0IHVybCB3aXRoIGNvbnNlbnQgdmVyaWZpZXJcbiAgICBPUlkgSHlkcmEtLT4-T1JZIEh5ZHJhOiBWZXJpZmllcyBncmFudFxuICAgIE9SWSBIeWRyYS0-Pk9BdXRoMiBDbGllbnQ6IFRyYW5zbWl0cyBhdXRob3JpemF0aW9uIGNvZGUvdG9rZW4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ",alt:"ORY Hydra User Login and Consent Flow"}))))}p.isMDXComponent=!0}}]);