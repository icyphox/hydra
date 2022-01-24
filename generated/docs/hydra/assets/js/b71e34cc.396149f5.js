"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[66171],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},45634:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={id:"security-architecture",title:"Security Architecture"},c=void 0,l={unversionedId:"security-architecture",id:"version-v1.8/security-architecture",isDocsHomePage:!1,title:"Security Architecture",description:"Hydra is built with tough security in mind.",source:"@site/versioned_docs/version-v1.8/security-architecture.md",sourceDirName:".",slug:"/security-architecture",permalink:"/hydra/docs/v1.8/security-architecture",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/security-architecture.md",tags:[],version:"v1.8",lastUpdatedBy:"Anirudh Oppiliappan",lastUpdatedAt:1643030541,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"security-architecture",title:"Security Architecture"},sidebar:"version-v1.8/docs",previous:{title:"Benchmarks",permalink:"/hydra/docs/v1.8/benchmark"},next:{title:"FAQ",permalink:"/hydra/docs/v1.8/faq"}},u=[{value:"OAuth 2.0 Security Overview",id:"oauth-20-security-overview",children:[{value:"Advanced Token Validation (Datastore Security)",id:"advanced-token-validation-datastore-security",children:[],level:3}],level:2},{value:"Cryptography",id:"cryptography",children:[{value:"AES-GCM",id:"aes-gcm",children:[],level:3},{value:"RS256",id:"rs256",children:[],level:3},{value:"HMAC-SHA256",id:"hmac-sha256",children:[],level:3},{value:"BCrypt",id:"bcrypt",children:[],level:3}],level:2},{value:"How does Access Control work with Hydra?",id:"how-does-access-control-work-with-hydra",children:[],level:2}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hydra is built with tough security in mind."),(0,i.kt)("h2",{id:"oauth-20-security-overview"},"OAuth 2.0 Security Overview"),(0,i.kt)("p",null,"Hydra is an implementation of the security-first Fosite OAuth 2.0 SDK\n(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/fosite"},"https://github.com/ory/fosite"),"). Fosite\nrespects the\n",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6819#section-5.1.5.3"},"OAuth 2.0 Threat Model and Security Considerations"),"\nby the IETF, specifically:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No Cleartext Storage of Credentials"),(0,i.kt)("li",{parentName:"ul"},"Encryption of Credentials"),(0,i.kt)("li",{parentName:"ul"},"Use Short Expiration Time"),(0,i.kt)("li",{parentName:"ul"},"Limit Number of Usages or One-Time Usage"),(0,i.kt)("li",{parentName:"ul"},"Bind Token to Client id"),(0,i.kt)("li",{parentName:"ul"},"Automatic Revocation of Derived Tokens If Abuse Is Detected"),(0,i.kt)("li",{parentName:"ul"},'Binding of Refresh Token to "client_id"'),(0,i.kt)("li",{parentName:"ul"},"Refresh Token Rotation"),(0,i.kt)("li",{parentName:"ul"},"Revocation of Refresh Tokens"),(0,i.kt)("li",{parentName:"ul"},'Validate Pre-Registered "redirect_uri"'),(0,i.kt)("li",{parentName:"ul"},'Binding of Authorization "code" to "client_id"'),(0,i.kt)("li",{parentName:"ul"},'Binding of Authorization "code" to "redirect_uri"'),(0,i.kt)("li",{parentName:"ul"},"Opaque access tokens"),(0,i.kt)("li",{parentName:"ul"},"Opaque refresh tokens"),(0,i.kt)("li",{parentName:"ul"},"Ensure Confidentiality of Requests"),(0,i.kt)("li",{parentName:"ul"},"Use of Asymmetric Cryptography"),(0,i.kt)("li",{parentName:"ul"},"Enforcing random states: Without a random-looking state or OpenID Connect\nnonce the request will fail.")),(0,i.kt)("p",null,"Additionally these safeguards are implemented:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Advanced Token Validation: Tokens are laid out as\n","<","key",">",".","<","signature",">"," where ","<","signature",">"," is created using\nHMAC-SHA256 using a global secret.")),(0,i.kt)("h3",{id:"advanced-token-validation-datastore-security"},"Advanced Token Validation (Datastore Security)"),(0,i.kt)("p",null,"For a OAuth2 access token, refresh token or authorize code to be valid, one\nrequires both the key and the signature (formatted as\n","<","key",">",".","<","signature",">","). Only the signature is stored in the datastore\n(SQL), thus a compromised datastore will not allow an attacker to gain access to\nany valid authorize codes, access tokens, or refresh tokens."),(0,i.kt)("p",null,"Because HMAC-SHA256 is used, the System Secret is required to create valid\nkey-signature pairs, rendering an attacker unable to inject new codes or tokens\ninto a compromised datastore."),(0,i.kt)("h2",{id:"cryptography"},"Cryptography"),(0,i.kt)("p",null,"Hydra uses different cryptographic methods, this is an overview of all of them."),(0,i.kt)("h3",{id:"aes-gcm"},"AES-GCM"),(0,i.kt)("p",null,"AES-GCM is used to encrypt JWKs at rest using a key size of 256 bit which\nexceeds requirements by Lenstra, ECRYPT II, NIST, ANSSI, and BSI, see\n",(0,i.kt)("a",{parentName:"p",href:"https://www.keylength.com/en/compare/"},"https://www.keylength.com/en/compare/"),"."),(0,i.kt)("p",null,"GCM (Galois/Counter Mode) is an authenticated encryption algorithm designed to\nprovide both data authenticity (integrity) and confidentiality. GCM uses a nonce\n(\u201cIV\u201d) that has an upper limit of 2^32 nonces. If more nonces are used, there is\nrisk of repeats. This means that you risk collisions when storing more than 2^32\ndocuments authenticated with GCM. Because AES-GCM is only used to encrypt data\nat rest, this is might only impose a problem if"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"more than 2^32 documents are stored using AES-GCM"),(0,i.kt)("li",{parentName:"ol"},"an attacker gains access to the datastore where ",">"," 2^32 documents are\nstored"),(0,i.kt)("li",{parentName:"ol"},"the attacker is able to exploit repeats, for example by authenticating\nmalicious documents")),(0,i.kt)("h3",{id:"rs256"},"RS256"),(0,i.kt)("p",null,"RSASSA-PKCS1-v1_5 using SHA-256 (RS256) is used to sign JWTs. It\u2019s use is\nrecommended by the JWA specification, see\n",(0,i.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7518.txt"},"https://www.rfc-editor.org/rfc/rfc7518.txt")),(0,i.kt)("p",null,"The RSA Key size is 4096 bit long, exceeding the minimum requirement of 2048 bit\nby\n",(0,i.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7518.txt"},"https://www.rfc-editor.org/rfc/rfc7518.txt"),"."),(0,i.kt)("p",null,"Recommendations from NIST, ANSSI, IAD-NSA, BSI, Lenstra and others vary between\n1300 and 2048 bit key lengths for asymmetric cryptography based on discrete\nlogarithms (RSA). 4096 exceeds all recommendations for 2017 from all\nauthorities, see\n",(0,i.kt)("a",{parentName:"p",href:"https://www.keylength.com/en/compare/"},"https://www.keylength.com/en/compare/"),"."),(0,i.kt)("h3",{id:"hmac-sha256"},"HMAC-SHA256"),(0,i.kt)("p",null,"HMAC (FIPS 198) with SHA256 (FIPS 180-4) is used to sign access tokens,\nauthorize codes and refresh tokens. SHA-2 (with 256 bit) is encouraged by NIST,\nsee\n",(0,i.kt)("a",{parentName:"p",href:"http://csrc.nist.gov/groups/ST/hash/policy.html"},"http://csrc.nist.gov/groups/ST/hash/policy.html")),(0,i.kt)("h3",{id:"bcrypt"},"BCrypt"),(0,i.kt)("p",null,"BCrypt is used to hash client credentials at rest. It is not officially\nrecommended by NIST as it is not based on hashing primitives such as SHA-2, but\nrather on Blowfish. However, BCrypt is much stronger than any other (salted)\nhashing method for passwords, has wide adoption and is an official golang/x\nlibrary."),(0,i.kt)("p",null,"I recommend reading this thread on Security Stack Exchange on BCrypt, SCrypt and\nPBKDF2:\n",(0,i.kt)("a",{parentName:"p",href:"https://security.stackexchange.com/questions/4781/do-any-security-experts-recommend-bcrypt-for-password-storage"},"https://security.stackexchange.com/questions/4781/do-any-security-experts-recommend-bcrypt-for-password-storage")),(0,i.kt)("p",null,"Be aware that BCrypt causes very high CPU loads, depending on the Workload\nFactor. We strongly advise reducing the number of requests that use Basic\nAuthorization."),(0,i.kt)("h2",{id:"how-does-access-control-work-with-hydra"},"How does Access Control work with Hydra?"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"guides/oauth2-token-introspection"},"OAuth 2.0 Token Introspection"),"."))}p.isMDXComponent=!0}}]);