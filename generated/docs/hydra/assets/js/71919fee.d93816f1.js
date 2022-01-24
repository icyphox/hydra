"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[47401],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91166:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"dependencies-environment",title:"Database Setup and Configuration"},s=void 0,p={unversionedId:"dependencies-environment",id:"version-v1.4/dependencies-environment",isDocsHomePage:!1,title:"Database Setup and Configuration",description:"ORY Hydra is built cloud native and implements",source:"@site/versioned_docs/version-v1.4/dependencies-environment.md",sourceDirName:".",slug:"/dependencies-environment",permalink:"/hydra/docs/v1.4/dependencies-environment",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.4/dependencies-environment.md",tags:[],version:"v1.4",lastUpdatedBy:"Anirudh Oppiliappan",lastUpdatedAt:1643030541,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"dependencies-environment",title:"Database Setup and Configuration"},sidebar:"version-v1.4/docs",previous:{title:"Installation and Setup",permalink:"/hydra/docs/v1.4/configure-deploy"},next:{title:"Preparing for Production",permalink:"/hydra/docs/v1.4/production"}},d=[{value:"SQL",id:"sql",children:[{value:"Configuration",id:"configuration",children:[{value:"MySQL",id:"mysql",children:[],level:4},{value:"PostgreSQL",id:"postgresql",children:[],level:4}],level:3}],level:2},{value:"Plugin",id:"plugin",children:[],level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ORY Hydra is built cloud native and implements\n",(0,i.kt)("a",{parentName:"p",href:"https://www.12factor.net/"},"12factor")," principles. The Docker Image is 5 MB light\nand versioned with\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/master/UPGRADE.md"},"verbose upgrade instructions"),"\nand\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/master/CHANGELOG.md"},"detailed changelogs"),".\nAuto-scaling, migrations, health checks, it all works with zero additional work\nrequired. It is possible to run ORY Hydra on any platform, including but not\nlimited to OSX, Linux, Windows, ARM, FreeBSD and more."),(0,i.kt)("p",null,"ORY Hydra has two operational modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'In-memory: This mode does not work with more than one instance ("cluster") and\nany state is lost after restarting the instance.'),(0,i.kt)("li",{parentName:"ul"},"SQL: This mode works with more than one instance and state is not lost after\nrestarts.")),(0,i.kt)("p",null,"No further dependencies are required for a production-ready instance."),(0,i.kt)("h2",{id:"sql"},"SQL"),(0,i.kt)("p",null,"The SQL adapter supports two DBMS: PostgreSQL 9.6+ and MySQL 5.7+. Please note\nthat older MySQL versions have issues with ORY Hydra's database schema. For more\ninformation ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/issues/377"},"go here"),"."),(0,i.kt)("p",null,"If you do run the SQL adapter, you must first create the database schema. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"hydra serve")," command does not do this automatically, instead you must run\n",(0,i.kt)("inlineCode",{parentName:"p"},"hydra migrate sql")," to create the schemas. The ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra migrate sql")," command also\nruns database migrations in case of an upgrade. Please follow the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/master/UPGRADE.md"},"upgrade instructions")," to\nsee when you need to run this command. Always create a backup before running\n",(0,i.kt)("inlineCode",{parentName:"p"},"hydra migrate sql"),"!"),(0,i.kt)("p",null,"Running SQL migrations in Docker is very easy, check out the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/master/quickstart-postgres.yml"},"docker-compose"),"\nexample to see how we did it!"),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Both MySQL and PostgreSQL adapters support the following settings. You can\nmodify these settings by appending query parameters to your DSN\n(",(0,i.kt)("inlineCode",{parentName:"p"},"postgres://user:pw@host:port/database?setting1=foo&setting2=bar"),"):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_conns")," sets the maximum number of open connections to the database.\nDefaults to the number of CPUs. Example\n",(0,i.kt)("inlineCode",{parentName:"li"},"postgres://user:pw@host:port/database?max_conns=10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_idle_conns")," sets the maximum number of connections in the idle connection\npool. Defaults to the number of CPUs. Example\n",(0,i.kt)("inlineCode",{parentName:"li"},"postgres://user:pw@host:port/database?max_idle_conns=5"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_conn_lifetime")," sets the maximum amount of time (",(0,i.kt)("inlineCode",{parentName:"li"},"ms"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"s"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"m"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"h"),") a\nconnection may be reused. Defaults to 0. Example\n",(0,i.kt)("inlineCode",{parentName:"li"},"postgres://user:pw@host:port/database?max_conn_lifetime=10s"),".")),(0,i.kt)("h4",{id:"mysql"},"MySQL"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"DSN Layout:\n",(0,i.kt)("inlineCode",{parentName:"p"},"mysql://user:pw@tcp(host:port)/database?someSetting=value&foo=bar"),".")),(0,i.kt)("p",null,"On top of the settings above, MySQL supports additional settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sql_notes"),", if set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", ignores MySQL notices. If left empty or set to\n",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", they will be treated as warnings. Example\n",(0,i.kt)("inlineCode",{parentName:"li"},"mysql://user:pw@tcp(host:port)/database?sql_notes=false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sql_mode")," sets the server-side strict mode. Read more about possible values\n",(0,i.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/5.7/en/sql-mode.html"},"here"),".")),(0,i.kt)("h4",{id:"postgresql"},"PostgreSQL"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"DSN Layout: ",(0,i.kt)("inlineCode",{parentName:"p"},"postgres://user:pw@host:port/database?someSetting=value&foo=bar"),".")),(0,i.kt)("p",null,"On top of the settings above, PostgreSQL supports additional settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sslmode")," sets whether or not to use SSL (default is require, this is not the\ndefault for libpq). Valid values for sslmode are: ",(0,i.kt)("em",{parentName:"li"}," ",(0,i.kt)("inlineCode",{parentName:"em"},"disable")," - No SSL "),(0,i.kt)("inlineCode",{parentName:"li"},"require")," - Always SSL (skip verification) ",(0,i.kt)("em",{parentName:"li"}," ",(0,i.kt)("inlineCode",{parentName:"em"},"verify-ca")," - Always SSL (verify\nthat the certificate presented by the server was signed by a trusted CA) "),(0,i.kt)("inlineCode",{parentName:"li"},"verify-full")," - Always SSL (verify that the certification presented by the\nserver was signed by a trusted CA and the server host name matches the one in\nthe certificate)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fallback_application_name")," - An application_name to fall back to if one isn't\nprovided."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connect_timeout")," - Maximum wait for connection, in seconds. Zero or not\nspecified means wait indefinitely."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sslcert")," - Cert file location. The file must contain PEM encoded data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sslkey")," - Key file location. The file must contain PEM encoded data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sslrootcert")," - The location of the root certificate file. The file must\ncontain PEM encoded data.")),(0,i.kt)("h2",{id:"plugin"},"Plugin"),(0,i.kt)("p",null,"It is possible to implement your own DBAL using Go Plugins."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We strongly discourage you from implementing your own DBAL. Special knowledge\nis required and internal interfaces will break without notice and migration\nguides. This can lead to serious security issues and vulnerabilities. USE AT\nYOUR OWN RISK.")),(0,i.kt)("p",null,"Your plugin must implement interface ",(0,i.kt)("inlineCode",{parentName:"p"},"github.com/ory/hydra/driver.Registry"),". You\ncan load the plugin as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dsn: plugin:///path/to/file.so\n")),(0,i.kt)("p",null,"We strongly discourage you from using this feature."))}m.isMDXComponent=!0}}]);