"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[34862],{58215:function(e,t,n){var o=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return m}});var o=n(87462),a=n(67294),r=n(72389),s=n(79443);var i=function(){var e=(0,a.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(89521),c=n(86010),u="tabItem_1uMI";function d(e){var t,n,o,r=e.lazy,s=e.block,d=e.defaultValue,m=e.values,p=e.groupId,h=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),k=y.tabGroupChoices,T=y.setTabGroupChoices,x=(0,a.useState)(b),w=x[0],N=x[1],C=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var Z=k[p];null!=Z&&Z!==w&&f.some((function(e){return e.value===Z}))&&N(Z)}var I=function(e){var t=e.currentTarget,n=C.indexOf(t),o=f[n].value;o!==w&&(E(t),N(o),null!=p&&T(p,o))},R=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=C.indexOf(e.currentTarget)+1;n=C[o]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":s},h)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":w===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:R,onFocus:I,onClick:I},null!=n?n:t)}))),r?(0,a.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,r.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}},79443:function(e,t,n){var o=(0,n(67294).createContext)(void 0);t.Z=o},52387:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(67294),a=n(83300),r=n.n(a),s=n(19055),i="container_2x1S",l=n(25108),c=function(e,t){if(!e)return 0;var n=t.findIndex((function(t){return t.indexOf(e)>-1}));return-1===n?0:n},u=function(e){var t=e.src,n=e.title,a=(0,o.useState)(""),u=a[0],d=a[1];(0,o.useEffect)((function(){var n,o,a;r()(t.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")).then((function(e){return e.text()})).then((n=e,o=n.startAt,a=n.endAt,function(e){var t=e.split("\n"),n=c(o,t);n>0&&(t=["// ..."].concat(t.slice(n,-1)));var r=c(a,t);return r>0&&(t=[].concat(t.slice(0,r+1),["// ..."])),t.join("\n")})).then(d).catch(l.error)}),[]);var m="language-"+function(e){var t=e.split(".").pop();switch(t){case"jsx":return"jsx";case"tsx":return"tsx";case"ts":return"typescript";case"go":return"go";case"yaml":case"yml":return"yaml";case"js":return"javascript";case"html":return"html";case"pug":return"pug";default:return t}}(t),p='title="'+(n||function(e){var t=e.match(new RegExp("https://github.com/[^/]+/[^/]+/blob/[^/]+/(.+)","i"))||[];return t.length>=2?t[1]:e}(t))+'"';return o.createElement("div",{className:i},o.createElement(s.Z,{metastring:p,className:m,children:u}))}},37233:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return v}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=n(26396),i=n(58215),l=n(52387),c=["components"],u={id:"consent",title:"Implementing the Consent Endpoint & UI",sidebar_label:"Consent Endpoint"},d=void 0,m={unversionedId:"guides/consent",id:"guides/consent",isDocsHomePage:!1,title:"Implementing the Consent Endpoint & UI",description:"Please read the Consent Flow Documentation first!",source:"@site/docs/guides/consent.mdx",sourceDirName:"guides",slug:"/guides/consent",permalink:"/hydra/docs/next/guides/consent",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/consent.mdx",tags:[],version:"current",lastUpdatedBy:"Anirudh Oppiliappan",lastUpdatedAt:1643030541,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"consent",title:"Implementing the Consent Endpoint & UI",sidebar_label:"Consent Endpoint"},sidebar:"docs",previous:{title:"Login Endpoint",permalink:"/hydra/docs/next/guides/login"},next:{title:"Logout Endpoint",permalink:"/hydra/docs/next/guides/logout"}},p=[{value:"Implementing the Consent HTML Form",id:"implementing-the-consent-html-form",children:[],level:2},{value:"Accepting the Consent Request",id:"accepting-the-consent-request",children:[],level:2},{value:"Rejecting the Consent Request",id:"rejecting-the-consent-request",children:[],level:2},{value:"Skipping Consent Screen",id:"skipping-consent-screen",children:[],level:2},{value:"Complete Endpoint",id:"complete-endpoint",children:[],level:2}],h={toc:p};function v(e){var t=e.components,u=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please read the ",(0,r.kt)("a",{parentName:"p",href:"/hydra/docs/next/concepts/consent"},"Consent Flow Documentation")," first!"))),(0,r.kt)("p",null,"In this document, you will learn how to implement the Consent Endpoint using our\nOry Hydra SDKs. The goal for this document is to have document this for multiple\nprogramming languages. If you are an expert in one of these languages, your help\nis highly appreciated in improving these docs!"),(0,r.kt)("p",null,"Code shown here is taken out of the Ory Hydra Login & Consent Node Reference\napplication which you can find on GitHub."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra-login-consent-node"},(0,r.kt)("img",{parentName:"a",src:"https://gh-card.dev/repos/ory/hydra-login-consent-node.svg",alt:"ory/hydra-login-consent-node - GitHub"}))),(0,r.kt)("h2",{id:"implementing-the-consent-html-form"},"Implementing the Consent HTML Form"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Consent HTML Form cannot be only a Single Page App (Client-side browser\napplication) or a Mobile App! There has to be a server-side component with\naccess to Ory Hydra's Admin Endpoint!"))),(0,r.kt)(s.Z,{defaultValue:"ui",values:[{label:"UI",value:"ui"},{label:"NodeJS",value:"node"},{label:"HTML Example",value:"html"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ui",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"OAuth2 Consent UI Screen",src:n(81293).Z}))),(0,r.kt)(i.Z,{value:"node",mdxType:"TabItem"},(0,r.kt)(l.Z,{src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"})),(0,r.kt)(i.Z,{value:"html",mdxType:"TabItem"},(0,r.kt)(l.Z,{src:"https://github.com/ory/hydra-login-consent-node/blob/master/views/consent.pug",mdxType:"CodeFromRemote"}))),(0,r.kt)("h2",{id:"accepting-the-consent-request"},"Accepting the Consent Request"),(0,r.kt)(s.Z,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"node",mdxType:"TabItem"},(0,r.kt)(l.Z,{startAt:"let grantScope = req.body.grant_scope",endAt:"// label:docs-accept-consent",src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"}))),(0,r.kt)("h2",{id:"rejecting-the-consent-request"},"Rejecting the Consent Request"),(0,r.kt)(s.Z,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"node",mdxType:"TabItem"},(0,r.kt)(l.Z,{startAt:"if (req.body.submit === 'Deny access') {",endAt:"// label:consent-deny-end",src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"}))),(0,r.kt)("h2",{id:"skipping-consent-screen"},"Skipping Consent Screen"),(0,r.kt)(s.Z,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"node",mdxType:"TabItem"},(0,r.kt)(l.Z,{startAt:"// This section processes consent requests and either shows the consent UI",endAt:"// The consent request has now either been accepted automatically",src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"}))),(0,r.kt)("h2",{id:"complete-endpoint"},"Complete Endpoint"),(0,r.kt)(s.Z,{defaultValue:"node",values:[{label:"NodeJS",value:"node"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"node",mdxType:"TabItem"},(0,r.kt)(l.Z,{src:"https://github.com/ory/hydra-login-consent-node/blob/master/src/routes/consent.ts",mdxType:"CodeFromRemote"}))))}v.isMDXComponent=!0},83300:function(e,t){var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},81293:function(e,t,n){t.Z=n.p+"assets/images/consent-endpoint-31856a0555a6a8438d4603692bdab5d2.png"}}]);