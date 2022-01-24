"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[63634],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21950:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"tracing",title:"Distributed Tracing"},s=void 0,c={unversionedId:"guides/tracing",id:"version-v1.9/guides/tracing",isDocsHomePage:!1,title:"Distributed Tracing",description:"Configuring Distributed Tracing (DT) will enable you to obtain a visualization",source:"@site/versioned_docs/version-v1.9/guides/tracing.mdx",sourceDirName:"guides",slug:"/guides/tracing",permalink:"/hydra/docs/v1.9/guides/tracing",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/guides/tracing.mdx",tags:[],version:"v1.9",lastUpdatedBy:"Anirudh Oppiliappan",lastUpdatedAt:1643030541,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"tracing",title:"Distributed Tracing"},sidebar:"version-v1.9/docs",previous:{title:"Preparing for Production",permalink:"/hydra/docs/v1.9/production"},next:{title:"Secrets and Key Rotation",permalink:"/hydra/docs/v1.9/guides/secrets-key-rotation"}},u=[{value:"What a Hydra trace includes",id:"what-a-hydra-trace-includes",children:[],level:3},{value:"Alright, how can I set this up locally?",id:"alright-how-can-i-set-this-up-locally",children:[],level:3},{value:"Tracing configurations",id:"tracing-configurations",children:[],level:3}],p={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Configuring Distributed Tracing (DT) will enable you to obtain a visualization\nof the call paths that take place in order to process a request made to Hydra.\nIt's yet another tool that you can use to aid you in profiling, debugging and\nultimately understanding your deployment of Hydra better. Hydra currently\nsupports the following tracing options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tracing backend(s): Jaeger, Elastic APM, Datadog - ",(0,i.kt)("em",{parentName:"li"},"Note: adding support for\nother\n",(0,i.kt)("a",{parentName:"em",href:"https://opentracing.io/docs/supported-tracers"},"opentracing compliant backends"),"\nis planned. To aid in priority, please\n",(0,i.kt)("a",{parentName:"em",href:"https://github.com/ory/hydra/issues"},"create an issue")," with your feature\nrequest.")),(0,i.kt)("li",{parentName:"ul"},"Following existing traces: If you have deployed Hydra behind a proxy that has\ninitiated a trace, Hydra will attempt to join that trace by examining the\nrequest headers for tracing context.")),(0,i.kt)("h3",{id:"what-a-hydra-trace-includes"},"What a Hydra trace includes"),(0,i.kt)("p",null,"In DT speak, a trace is comprised of one or more spans which are logical units\nof work. Each Hydra span is encapsulated with the following state:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A name"),(0,i.kt)("li",{parentName:"ul"},"A start time"),(0,i.kt)("li",{parentName:"ul"},"A finish time"),(0,i.kt)("li",{parentName:"ul"},"A set of zero or more tags")),(0,i.kt)("p",null,"Hydra currently creates the following spans:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Top level span (",(0,i.kt)("em",{parentName:"li"},"named after the request path"),") for the requested endpoint.\nSpan tags: - http method - http status code - error IFF status code >= 400"),(0,i.kt)("li",{parentName:"ul"},"Child span will be created if bcrypt (",(0,i.kt)("em",{parentName:"li"},"e.g. when the token endpoint is\ncalled"),") is called. Span tags: - bcrypt work factor"),(0,i.kt)("li",{parentName:"ul"},"All SQL database interactions. Spans/tags will vary depending on the database\ndriver used.")),(0,i.kt)("p",null,"This is still evolving and subject to change as tracing support continues to\nexpand in Hydra. If you see something that is missing/wrong, please create an\nissue."),(0,i.kt)("h3",{id:"alright-how-can-i-set-this-up-locally"},"Alright, how can I set this up locally?"),(0,i.kt)("p",null,"The\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/master/quickstart-tracing.yml"},"provided docker-compose file"),"\nin the project repository has tracing configuration which you can use to play\naround with - just uncomment the desired tracing provider. We will use Jaeger as\nan example."),(0,i.kt)("p",null,"Simply run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml \\\n    -f quickstart-tracing.yml \\\n    up --build\n")),(0,i.kt)("p",null,"Grab a coffee or stretch while you wait for everything to come up. You will then\nbe able to navigate to the Jaeger UI which you have exposed on port ",(0,i.kt)("inlineCode",{parentName:"p"},"16686")," at\nhttp://localhost:16686/search. You can now start making requests to Hydra and\ninspect traces!"),(0,i.kt)("p",null,"As an example, here is a trace created by making a bad request to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"POST /clients")," endpoint:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OpenTracing and OpenCensus exemplary trace in Jaeger UI",src:n(74505).Z})),(0,i.kt)("p",null,"At a glance, you are able to see that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The request failed"),(0,i.kt)("li",{parentName:"ul"},"The request took ~80ms"),(0,i.kt)("li",{parentName:"ul"},"It resulted in a 409"),(0,i.kt)("li",{parentName:"ul"},"The hash comparison to validate the client's credentials took a whopping 70ms.\nBcrypt is expensive!"),(0,i.kt)("li",{parentName:"ul"},"The various database operations performed")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: in order to see spans around database interactions, you must be using a\nSQL backend (i.e. MySQL or Postgres).")),(0,i.kt)("h3",{id:"tracing-configurations"},"Tracing configurations"),(0,i.kt)("p",null,"The CLI will provide you with the list of Hydra tracing configurations and their\nsupported values. Simply run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker exec -it hydra_hydra_1 hydra serve --help\n")),(0,i.kt)("p",null,"And read the section on ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG CONTROLS"),"."))}d.isMDXComponent=!0},74505:function(e,t,n){t.Z=n.p+"assets/images/sample_trace-0cd5d1302770f8483eef6909b17609e1.png"}}]);