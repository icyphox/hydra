"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[30847],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(t),h=a,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||l;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},37626:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),o=["components"],i={id:"install",title:"Installation"},s=void 0,u={unversionedId:"install",id:"version-v1.10/install",isDocsHomePage:!1,title:"Installation",description:"Installing ORY Hydra on any system is straight forward. We provide pre-built",source:"@site/versioned_docs/version-v1.10/install.md",sourceDirName:".",slug:"/install",permalink:"/hydra/docs/install",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/install.md",tags:[],version:"v1.10",lastUpdatedBy:"Anirudh Oppiliappan",lastUpdatedAt:1643030541,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"install",title:"Installation"},sidebar:"version-v1.10/docs",previous:{title:"5 Minute Tutorial",permalink:"/hydra/docs/5min-tutorial"},next:{title:"Contribution Guidelines",permalink:"/hydra/docs/contributing"}},d=[{value:"Docker",id:"docker",children:[],level:2},{value:"macOS",id:"macos",children:[],level:2},{value:"Linux",id:"linux",children:[],level:2},{value:"Windows",id:"windows",children:[],level:2},{value:"Kubernetes",id:"kubernetes",children:[],level:2},{value:"Download Binaries",id:"download-binaries",children:[],level:2},{value:"Building from Source",id:"building-from-source",children:[],level:2}],c={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Installing ORY Hydra on any system is straight forward. We provide pre-built\nbinaries, Docker Images and support various package managers."),(0,l.kt)("h2",{id:"docker"},"Docker"),(0,l.kt)("p",null,"We recommend using Docker to run ORY Hydra:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker pull oryd/hydra:v1.10.6\n$ docker run --rm -it oryd/hydra:v1.10.6 help\n")),(0,l.kt)("h2",{id:"macos"},"macOS"),(0,l.kt)("p",null,"You can install ORY Hydra using ",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew")," on macOS:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew tap ory/hydra\n$ brew install ory/hydra/hydra\n$ hydra help\n")),(0,l.kt)("h2",{id:"linux"},"Linux"),(0,l.kt)("p",null,"On linux, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"bash <(curl ...)")," to fetch the latest stable binary\nusing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ bash <(curl https://raw.githubusercontent.com/ory/hydra/v1.9.0/install.sh) -b . v1.9.0\n$ ./hydra help\n")),(0,l.kt)("p",null,"You may want to move ORY Hydra to your ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo mv ./hydra /usr/local/bin/\n$ hydra help\n")),(0,l.kt)("h2",{id:"windows"},"Windows"),(0,l.kt)("p",null,"You can install ORY Hydra using ",(0,l.kt)("a",{parentName:"p",href:"https://scoop.sh"},"scoop")," on Windows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"> scoop bucket add ory-hydra https://github.com/ory/scoop-hydra.git\n> scoop install hydra\n> hydra help\n")),(0,l.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,l.kt)("p",null,"Please head over to the ",(0,l.kt)("a",{parentName:"p",href:"guides/kubernetes-helm-chart"},"Kubernetes Helm Chart"),"\ndocumentation."),(0,l.kt)("h2",{id:"download-binaries"},"Download Binaries"),(0,l.kt)("p",null,"You can download the client and server binaries on our\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/releases"},"Github releases")," page. There is\ncurrently no installer available. You have to add the Hydra binary to the PATH\nin your environment yourself, for example by putting it into ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," or\nsomething comparable."),(0,l.kt)("p",null,"Once installed, you should be able to run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ hydra help\n")),(0,l.kt)("h2",{id:"building-from-source"},"Building from Source"),(0,l.kt)("p",null,"If you wish to compile ORY Hydra yourself, you need to install and set up\n",(0,l.kt)("a",{parentName:"p",href:"https://golang.org/"},"Go 1.15+")," and add ",(0,l.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")," to your ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,l.kt)("p",null,"The following commands will check out the latest release tag of ORY Hydra,\ncompile it, and set up flags so that ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra version")," works as expected. Please\nnote that this will only work in a Bash-like shell."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/ory/hydra.git\n$ cd hydra\n$ GO111MODULE=on make install-stable\n$ $(go env GOPATH)/bin/hydra help\n")))}p.isMDXComponent=!0}}]);