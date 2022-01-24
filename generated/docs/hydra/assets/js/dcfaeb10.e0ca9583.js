"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[68700],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,h=d["".concat(c,".").concat(f)]||d[f]||l[f]||i;return t?r.createElement(h,a(a({ref:n},u),{},{components:t})):r.createElement(h,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61103:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],p={id:"php",title:"PHP"},c=void 0,s={unversionedId:"sdk/php",id:"version-v1.10/sdk/php",isDocsHomePage:!1,title:"PHP",description:"Please note that the PHP SDK is autogenerated and developer experience is not",source:"@site/versioned_docs/version-v1.10/sdk/php.md",sourceDirName:"sdk",slug:"/sdk/php",permalink:"/hydra/docs/sdk/php",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.10/sdk/php.md",tags:[],version:"v1.10",lastUpdatedBy:"Anirudh Oppiliappan",lastUpdatedAt:1643030541,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"php",title:"PHP"},sidebar:"version-v1.10/docs",previous:{title:"JavaScript",permalink:"/hydra/docs/sdk/js"},next:{title:"Milestones and Roadmap",permalink:"/hydra/docs/milestones"}},u=[{value:"Configuration",id:"configuration",children:[{value:"Basic configuration",id:"basic-configuration",children:[],level:4}],level:3},{value:"API Usage",id:"api-usage",children:[],level:3},{value:"API Docs",id:"api-docs",children:[],level:3}],l={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please note that the PHP SDK is autogenerated and developer experience is not\ngreat.")),(0,i.kt)("p",null,"To install the PHP SDK using ",(0,i.kt)("a",{parentName:"p",href:"https://getcomposer.org"},"Composer"),", run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"composer require ory/hydra-client\n")),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("h4",{id:"basic-configuration"},"Basic configuration"),(0,i.kt)("p",null,"Below is a basic configuration that demonstrates how to set the admin and public\nhost. Please note that you need to set the host everytime you want to switch\nbetween the admin and public host."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n\nrequire_once __DIR__ . "/vendor/autoload.php";\n\nuse HydraSDK\\Configuration;\nuse HydraSDK\\Api\\AdminApi;\nuse HydraSDK\\Api\\PublicApi;\n\n$config = new Configuration();\n// Configure Admin API\n$config->getDefaultConfiguration()->setHost("http://localhost:4445");\n$adminApi = new AdminApi();\n\n// Configure Public API\n$config->getDefaultConfiguration()->setHost("http://localhost:4444");\n$publicApi = new PublicApi();\n')),(0,i.kt)("h3",{id:"api-usage"},"API Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\nuse HydraSDK\\ApiException;\nuse HydraSDK\\Configuration;\nuse HydraSDK\\Api\\AdminApi;\nuse HydraSDK\\Api\\PublicApi;\n\ntry {\n  $config = new Configuration();\n  // Configure Admin API\n  $config->getDefaultConfiguration()->setHost(\"http://localhost:4445\");\n  $adminApi = new AdminApi();\n\n  // List OAuth2 Clients (Admin API)\n  $clients = $adminApi->listOAuth2Clients();\n  print_r($clients);\n\n  // Configure Public API\n  $config->getDefaultConfiguration()->setHost(\"http://localhost:4444\");\n  $publicApi = new PublicApi();\n\n  // Discover OpenID Connect Configuration (Public API)\n  $connect = $publicApi->discoverOpenIDConfiguration();\n  print_r($connect);\n} catch (ApiException $e) {\n  echo 'Exception occurred: ', $e->getMessage(), PHP_EOL;\n}\n?>\n")),(0,i.kt)("h3",{id:"api-docs"},"API Docs"),(0,i.kt)("p",null,"API docs are available\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/master/sdk/php/swagger/README.md"},"here"),".\nPlease note that those docs are generated and may introduce bugs if code\nexamples are used 1:1."))}d.isMDXComponent=!0}}]);