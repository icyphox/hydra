"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[62520],{13919:function(e,t,n){function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return o}})},44996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return l}});var i=n(52263),o=n(13919);function a(){var e=(0,i.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,l=a.forcePrependBaseUrl,s=void 0!==l&&l,r=a.absolute,c=void 0!==r&&r;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(a,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},59079:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(67294),o=n(57273),a="graph_1lrJ",l="pointer_3d8u",s="overlay_2fuY",r="visible_2Z3U",c="backdrop_2z5L",d=n(94184),I=n.n(d);o.Z.initialize({startOnLoad:!0,logLevel:"fatal",securityLevel:"strict",arrowMarkerAbsolute:!1,theme:"neutral",flowchart:{useMaxWidth:!0,htmlLabels:!0,rankSpacing:65,nodeSpacing:30,curve:"basis"},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0}});var u=function(e){var t,n=e.chart,d=(0,i.useState)(!1),u=d[0],m=d[1],h=(0,i.useState)(void 0),p=h[0],b=h[1],g=(0,i.useState)("mermaid-"+Math.random().toString(36).substr(2,-1))[0],k=function(){return m(!u)};return(0,i.useEffect)((function(){o.Z.render(g,n,(function(e){b(e)}))}),[]),i.createElement(i.Fragment,null,i.createElement("div",{onClick:k,className:I()(a,l),dangerouslySetInnerHTML:{__html:p}}),i.createElement("div",{onClick:k,className:I()(s,l,a,(t={},t[r]=u,t))},i.createElement("div",{onClick:function(e){return e.stopPropagation()},className:I()(c,a),dangerouslySetInnerHTML:{__html:p}})))}},28169:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return r},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),l=(n(44996),n(59079),n(26396),n(58215),["components"]),s={id:"logout",title:"Logout Flow"},r=void 0,c={unversionedId:"concepts/logout",id:"version-v1.8/concepts/logout",isDocsHomePage:!1,title:"Logout Flow",description:"ORY Hydra implements",source:"@site/versioned_docs/version-v1.8/concepts/logout.mdx",sourceDirName:"concepts",slug:"/concepts/logout",permalink:"/hydra/docs/v1.8/concepts/logout",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/concepts/logout.mdx",tags:[],version:"v1.8",lastUpdatedBy:"Anirudh Oppiliappan",lastUpdatedAt:1643030541,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"logout",title:"Logout Flow"},sidebar:"version-v1.8/docs",previous:{title:"Consent Flow",permalink:"/hydra/docs/v1.8/concepts/consent"},next:{title:"JSON Web Key Sets",permalink:"/hydra/docs/v1.8/jwks"}},d=[{value:"Logout Flow",id:"logout-flow",children:[{value:"Logout Provider Example (NodeJS Pseudo-code)",id:"logout-provider-example-nodejs-pseudo-code",children:[],level:4}],level:3},{value:"OpenID Connect Front-Channel Logout 1.0",id:"openid-connect-front-channel-logout-10",children:[],level:3},{value:"OpenID Connect Back-Channel Logout 1.0",id:"openid-connect-back-channel-logout-10",children:[],level:3}],I={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},I,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ORY Hydra implements\n",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-rpinitiated-1_0.html"},"OpenID Connect RP-Initiated Logout 1.0"),"\nand supports\n",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-frontchannel-1_0.html"},"OpenID Connect Front-Channel Logout 1.0"),"\nand\n",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-backchannel-1_0.html"},"OpenID Connect Back-Channel Logout 1.0"),"\nflows."),(0,a.kt)("p",null,"A logout request may be initiated by the OpenID Provider (OP - ",(0,a.kt)("strong",{parentName:"p"},"you"),") or by\nthe Relying Party (RP - the OAuth2 Client). Both requests follow the same\npattern as user login and user consent. Before the logout is completed, the user\nis redirected to the ",(0,a.kt)("strong",{parentName:"p"},"Logout UI")," (similar to Login UI and Consent UI) to\nconfirm the logout request."),(0,a.kt)("p",null,"A logout request can provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"id_token_hint")," and may optionally define ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"post_logout_redirect_uri"),". Because of that there are several possible\npathways for executing this flow, explained in the following diagram:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gICAgSVtHRVQgL29hdXRoMi9zZXNzaW9uL2xvZ291dF0tLT58IHxSUElbSGFzIGlkX3Rva2VuX2hpbnQqXTtcbiAgICBJW0dFVCAvb2F1dGgyL3Nlc3Npb24vbG9nb3V0XS0tPnwgfE9QSVtEb2VzIG5vdCBoYXZlIGlkX3Rva2VuX2hpbnQqXVxuT1BJLS0-fGhhcyBzdGF0ZSp8RVtFcnJvcl1cbk9QSS0tPnxoYXMgcG9zdF9sb2dvdXRfdXJpKnxFW0Vycm9yXVxuT1BJLS0-fGhhcyB2YWxpZCBzZXNzaW9uIGNvb2tpZSoqfExVSVtMb2dvdXQgVUkgd2l0aCA_bG9nb3V0X2NoYWxsZW5nZT0uLi5dXG5PUEktLT58bm8gc2Vzc2lvbiBjb29raWUqKnxFbmRbUmV0dXJuIHRvIHBvc3RfbG9nb3V0X3VybCoqKl1cblJQSS0tPnxoYXMgYWN0aXZlIHNlc3Npb24qKnxMVUlcblJQSS0tPnxubyBhY3RpdmUgc2Vzc2lvbioqfFJQSTJcbkxVSS0tPnx2ZXJpZnkgbG9nb3V0IHJlcXVlc3R8TFVJXG5MVUktLT58cmVkaXJlY3Qgd2l0aCBsb2dvdXRfdmVyaWZpZXIqfFJQSTJbIC9vYXV0aDIvc2Vzc2lvbnMvbG9nb3V0P2xvZ291dF92ZXJpZmllcj0uLi5dXG5SUEkyLS0-fGV4ZWN1dGUgZnJvbnQvYmFja2NoYW5uZWwgbG9nb3V0LCByZXZva2UgY29va2llfFJQSTJcblJQSTItLT58UmVkaXJlY3QgdG98RW5kIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQiLCJ0aGVtZVZhcmlhYmxlcyI6eyJiYWNrZ3JvdW5kIjoid2hpdGUiLCJwcmltYXJ5Q29sb3IiOiIjRUNFQ0ZGIiwic2Vjb25kYXJ5Q29sb3IiOiIjZmZmZmRlIiwidGVydGlhcnlDb2xvciI6ImhzbCg4MCwgMTAwJSwgOTYuMjc0NTA5ODAzOSUpIiwicHJpbWFyeUJvcmRlckNvbG9yIjoiaHNsKDI0MCwgNjAlLCA4Ni4yNzQ1MDk4MDM5JSkiLCJzZWNvbmRhcnlCb3JkZXJDb2xvciI6ImhzbCg2MCwgNjAlLCA4My41Mjk0MTE3NjQ3JSkiLCJ0ZXJ0aWFyeUJvcmRlckNvbG9yIjoiaHNsKDgwLCA2MCUsIDg2LjI3NDUwOTgwMzklKSIsInByaW1hcnlUZXh0Q29sb3IiOiIjMTMxMzAwIiwic2Vjb25kYXJ5VGV4dENvbG9yIjoiIzAwMDAyMSIsInRlcnRpYXJ5VGV4dENvbG9yIjoicmdiKDkuNTAwMDAwMDAwMSwgOS41MDAwMDAwMDAxLCA5LjUwMDAwMDAwMDEpIiwibGluZUNvbG9yIjoiIzMzMzMzMyIsInRleHRDb2xvciI6IiMzMzMiLCJtYWluQmtnIjoiI0VDRUNGRiIsInNlY29uZEJrZyI6IiNmZmZmZGUiLCJib3JkZXIxIjoiIzkzNzBEQiIsImJvcmRlcjIiOiIjYWFhYTMzIiwiYXJyb3doZWFkQ29sb3IiOiIjMzMzMzMzIiwiZm9udEZhbWlseSI6IlwidHJlYnVjaGV0IG1zXCIsIHZlcmRhbmEsIGFyaWFsIiwiZm9udFNpemUiOiIxNnB4IiwibGFiZWxCYWNrZ3JvdW5kIjoiI2U4ZThlOCIsIm5vZGVCa2ciOiIjRUNFQ0ZGIiwibm9kZUJvcmRlciI6IiM5MzcwREIiLCJjbHVzdGVyQmtnIjoiI2ZmZmZkZSIsImNsdXN0ZXJCb3JkZXIiOiIjYWFhYTMzIiwiZGVmYXVsdExpbmtDb2xvciI6IiMzMzMzMzMiLCJ0aXRsZUNvbG9yIjoiIzMzMyIsImVkZ2VMYWJlbEJhY2tncm91bmQiOiIjZThlOGU4IiwiYWN0b3JCb3JkZXIiOiJoc2woMjU5LjYyNjE2ODIyNDMsIDU5Ljc3NjUzNjMxMjglLCA4Ny45MDE5NjA3ODQzJSkiLCJhY3RvckJrZyI6IiNFQ0VDRkYiLCJhY3RvclRleHRDb2xvciI6ImJsYWNrIiwiYWN0b3JMaW5lQ29sb3IiOiJncmV5Iiwic2lnbmFsQ29sb3IiOiIjMzMzIiwic2lnbmFsVGV4dENvbG9yIjoiIzMzMyIsImxhYmVsQm94QmtnQ29sb3IiOiIjRUNFQ0ZGIiwibGFiZWxCb3hCb3JkZXJDb2xvciI6ImhzbCgyNTkuNjI2MTY4MjI0MywgNTkuNzc2NTM2MzEyOCUsIDg3LjkwMTk2MDc4NDMlKSIsImxhYmVsVGV4dENvbG9yIjoiYmxhY2siLCJsb29wVGV4dENvbG9yIjoiYmxhY2siLCJub3RlQm9yZGVyQ29sb3IiOiIjYWFhYTMzIiwibm90ZUJrZ0NvbG9yIjoiI2ZmZjVhZCIsIm5vdGVUZXh0Q29sb3IiOiJibGFjayIsImFjdGl2YXRpb25Cb3JkZXJDb2xvciI6IiM2NjYiLCJhY3RpdmF0aW9uQmtnQ29sb3IiOiIjZjRmNGY0Iiwic2VxdWVuY2VOdW1iZXJDb2xvciI6IndoaXRlIiwic2VjdGlvbkJrZ0NvbG9yIjoicmdiYSgxMDIsIDEwMiwgMjU1LCAwLjQ5KSIsImFsdFNlY3Rpb25Ca2dDb2xvciI6IndoaXRlIiwic2VjdGlvbkJrZ0NvbG9yMiI6IiNmZmY0MDAiLCJ0YXNrQm9yZGVyQ29sb3IiOiIjNTM0ZmJjIiwidGFza0JrZ0NvbG9yIjoiIzhhOTBkZCIsInRhc2tUZXh0TGlnaHRDb2xvciI6IndoaXRlIiwidGFza1RleHRDb2xvciI6IndoaXRlIiwidGFza1RleHREYXJrQ29sb3IiOiJibGFjayIsInRhc2tUZXh0T3V0c2lkZUNvbG9yIjoiYmxhY2siLCJ0YXNrVGV4dENsaWNrYWJsZUNvbG9yIjoiIzAwMzE2MyIsImFjdGl2ZVRhc2tCb3JkZXJDb2xvciI6IiM1MzRmYmMiLCJhY3RpdmVUYXNrQmtnQ29sb3IiOiIjYmZjN2ZmIiwiZ3JpZENvbG9yIjoibGlnaHRncmV5IiwiZG9uZVRhc2tCa2dDb2xvciI6ImxpZ2h0Z3JleSIsImRvbmVUYXNrQm9yZGVyQ29sb3IiOiJncmV5IiwiY3JpdEJvcmRlckNvbG9yIjoiI2ZmODg4OCIsImNyaXRCa2dDb2xvciI6InJlZCIsInRvZGF5TGluZUNvbG9yIjoicmVkIiwibGFiZWxDb2xvciI6ImJsYWNrIiwiZXJyb3JCa2dDb2xvciI6IiM1NTIyMjIiLCJlcnJvclRleHRDb2xvciI6IiM1NTIyMjIiLCJjbGFzc1RleHQiOiIjMTMxMzAwIiwiZmlsbFR5cGUwIjoiI0VDRUNGRiIsImZpbGxUeXBlMSI6IiNmZmZmZGUiLCJmaWxsVHlwZTIiOiJoc2woMzA0LCAxMDAlLCA5Ni4yNzQ1MDk4MDM5JSkiLCJmaWxsVHlwZTMiOiJoc2woMTI0LCAxMDAlLCA5My41Mjk0MTE3NjQ3JSkiLCJmaWxsVHlwZTQiOiJoc2woMTc2LCAxMDAlLCA5Ni4yNzQ1MDk4MDM5JSkiLCJmaWxsVHlwZTUiOiJoc2woLTQsIDEwMCUsIDkzLjUyOTQxMTc2NDclKSIsImZpbGxUeXBlNiI6ImhzbCg4LCAxMDAlLCA5Ni4yNzQ1MDk4MDM5JSkiLCJmaWxsVHlwZTciOiJoc2woMTg4LCAxMDAlLCA5My41Mjk0MTE3NjQ3JSkifX0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9"},(0,a.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gICAgSVtHRVQgL29hdXRoMi9zZXNzaW9uL2xvZ291dF0tLT58IHxSUElbSGFzIGlkX3Rva2VuX2hpbnQqXTtcbiAgICBJW0dFVCAvb2F1dGgyL3Nlc3Npb24vbG9nb3V0XS0tPnwgfE9QSVtEb2VzIG5vdCBoYXZlIGlkX3Rva2VuX2hpbnQqXVxuT1BJLS0-fGhhcyBzdGF0ZSp8RVtFcnJvcl1cbk9QSS0tPnxoYXMgcG9zdF9sb2dvdXRfdXJpKnxFW0Vycm9yXVxuT1BJLS0-fGhhcyB2YWxpZCBzZXNzaW9uIGNvb2tpZSoqfExVSVtMb2dvdXQgVUkgd2l0aCA_bG9nb3V0X2NoYWxsZW5nZT0uLi5dXG5PUEktLT58bm8gc2Vzc2lvbiBjb29raWUqKnxFbmRbUmV0dXJuIHRvIHBvc3RfbG9nb3V0X3VybCoqKl1cblJQSS0tPnxoYXMgYWN0aXZlIHNlc3Npb24qKnxMVUlcblJQSS0tPnxubyBhY3RpdmUgc2Vzc2lvbioqfFJQSTJcbkxVSS0tPnx2ZXJpZnkgbG9nb3V0IHJlcXVlc3R8TFVJXG5MVUktLT58cmVkaXJlY3Qgd2l0aCBsb2dvdXRfdmVyaWZpZXIqfFJQSTJbIC9vYXV0aDIvc2Vzc2lvbnMvbG9nb3V0P2xvZ291dF92ZXJpZmllcj0uLi5dXG5SUEkyLS0-fGV4ZWN1dGUgZnJvbnQvYmFja2NoYW5uZWwgbG9nb3V0LCByZXZva2UgY29va2llfFJQSTJcblJQSTItLT58UmVkaXJlY3QgdG98RW5kIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQiLCJ0aGVtZVZhcmlhYmxlcyI6eyJiYWNrZ3JvdW5kIjoid2hpdGUiLCJwcmltYXJ5Q29sb3IiOiIjRUNFQ0ZGIiwic2Vjb25kYXJ5Q29sb3IiOiIjZmZmZmRlIiwidGVydGlhcnlDb2xvciI6ImhzbCg4MCwgMTAwJSwgOTYuMjc0NTA5ODAzOSUpIiwicHJpbWFyeUJvcmRlckNvbG9yIjoiaHNsKDI0MCwgNjAlLCA4Ni4yNzQ1MDk4MDM5JSkiLCJzZWNvbmRhcnlCb3JkZXJDb2xvciI6ImhzbCg2MCwgNjAlLCA4My41Mjk0MTE3NjQ3JSkiLCJ0ZXJ0aWFyeUJvcmRlckNvbG9yIjoiaHNsKDgwLCA2MCUsIDg2LjI3NDUwOTgwMzklKSIsInByaW1hcnlUZXh0Q29sb3IiOiIjMTMxMzAwIiwic2Vjb25kYXJ5VGV4dENvbG9yIjoiIzAwMDAyMSIsInRlcnRpYXJ5VGV4dENvbG9yIjoicmdiKDkuNTAwMDAwMDAwMSwgOS41MDAwMDAwMDAxLCA5LjUwMDAwMDAwMDEpIiwibGluZUNvbG9yIjoiIzMzMzMzMyIsInRleHRDb2xvciI6IiMzMzMiLCJtYWluQmtnIjoiI0VDRUNGRiIsInNlY29uZEJrZyI6IiNmZmZmZGUiLCJib3JkZXIxIjoiIzkzNzBEQiIsImJvcmRlcjIiOiIjYWFhYTMzIiwiYXJyb3doZWFkQ29sb3IiOiIjMzMzMzMzIiwiZm9udEZhbWlseSI6IlwidHJlYnVjaGV0IG1zXCIsIHZlcmRhbmEsIGFyaWFsIiwiZm9udFNpemUiOiIxNnB4IiwibGFiZWxCYWNrZ3JvdW5kIjoiI2U4ZThlOCIsIm5vZGVCa2ciOiIjRUNFQ0ZGIiwibm9kZUJvcmRlciI6IiM5MzcwREIiLCJjbHVzdGVyQmtnIjoiI2ZmZmZkZSIsImNsdXN0ZXJCb3JkZXIiOiIjYWFhYTMzIiwiZGVmYXVsdExpbmtDb2xvciI6IiMzMzMzMzMiLCJ0aXRsZUNvbG9yIjoiIzMzMyIsImVkZ2VMYWJlbEJhY2tncm91bmQiOiIjZThlOGU4IiwiYWN0b3JCb3JkZXIiOiJoc2woMjU5LjYyNjE2ODIyNDMsIDU5Ljc3NjUzNjMxMjglLCA4Ny45MDE5NjA3ODQzJSkiLCJhY3RvckJrZyI6IiNFQ0VDRkYiLCJhY3RvclRleHRDb2xvciI6ImJsYWNrIiwiYWN0b3JMaW5lQ29sb3IiOiJncmV5Iiwic2lnbmFsQ29sb3IiOiIjMzMzIiwic2lnbmFsVGV4dENvbG9yIjoiIzMzMyIsImxhYmVsQm94QmtnQ29sb3IiOiIjRUNFQ0ZGIiwibGFiZWxCb3hCb3JkZXJDb2xvciI6ImhzbCgyNTkuNjI2MTY4MjI0MywgNTkuNzc2NTM2MzEyOCUsIDg3LjkwMTk2MDc4NDMlKSIsImxhYmVsVGV4dENvbG9yIjoiYmxhY2siLCJsb29wVGV4dENvbG9yIjoiYmxhY2siLCJub3RlQm9yZGVyQ29sb3IiOiIjYWFhYTMzIiwibm90ZUJrZ0NvbG9yIjoiI2ZmZjVhZCIsIm5vdGVUZXh0Q29sb3IiOiJibGFjayIsImFjdGl2YXRpb25Cb3JkZXJDb2xvciI6IiM2NjYiLCJhY3RpdmF0aW9uQmtnQ29sb3IiOiIjZjRmNGY0Iiwic2VxdWVuY2VOdW1iZXJDb2xvciI6IndoaXRlIiwic2VjdGlvbkJrZ0NvbG9yIjoicmdiYSgxMDIsIDEwMiwgMjU1LCAwLjQ5KSIsImFsdFNlY3Rpb25Ca2dDb2xvciI6IndoaXRlIiwic2VjdGlvbkJrZ0NvbG9yMiI6IiNmZmY0MDAiLCJ0YXNrQm9yZGVyQ29sb3IiOiIjNTM0ZmJjIiwidGFza0JrZ0NvbG9yIjoiIzhhOTBkZCIsInRhc2tUZXh0TGlnaHRDb2xvciI6IndoaXRlIiwidGFza1RleHRDb2xvciI6IndoaXRlIiwidGFza1RleHREYXJrQ29sb3IiOiJibGFjayIsInRhc2tUZXh0T3V0c2lkZUNvbG9yIjoiYmxhY2siLCJ0YXNrVGV4dENsaWNrYWJsZUNvbG9yIjoiIzAwMzE2MyIsImFjdGl2ZVRhc2tCb3JkZXJDb2xvciI6IiM1MzRmYmMiLCJhY3RpdmVUYXNrQmtnQ29sb3IiOiIjYmZjN2ZmIiwiZ3JpZENvbG9yIjoibGlnaHRncmV5IiwiZG9uZVRhc2tCa2dDb2xvciI6ImxpZ2h0Z3JleSIsImRvbmVUYXNrQm9yZGVyQ29sb3IiOiJncmV5IiwiY3JpdEJvcmRlckNvbG9yIjoiI2ZmODg4OCIsImNyaXRCa2dDb2xvciI6InJlZCIsInRvZGF5TGluZUNvbG9yIjoicmVkIiwibGFiZWxDb2xvciI6ImJsYWNrIiwiZXJyb3JCa2dDb2xvciI6IiM1NTIyMjIiLCJlcnJvclRleHRDb2xvciI6IiM1NTIyMjIiLCJjbGFzc1RleHQiOiIjMTMxMzAwIiwiZmlsbFR5cGUwIjoiI0VDRUNGRiIsImZpbGxUeXBlMSI6IiNmZmZmZGUiLCJmaWxsVHlwZTIiOiJoc2woMzA0LCAxMDAlLCA5Ni4yNzQ1MDk4MDM5JSkiLCJmaWxsVHlwZTMiOiJoc2woMTI0LCAxMDAlLCA5My41Mjk0MTE3NjQ3JSkiLCJmaWxsVHlwZTQiOiJoc2woMTc2LCAxMDAlLCA5Ni4yNzQ1MDk4MDM5JSkiLCJmaWxsVHlwZTUiOiJoc2woLTQsIDEwMCUsIDkzLjUyOTQxMTc2NDclKSIsImZpbGxUeXBlNiI6ImhzbCg4LCAxMDAlLCA5Ni4yNzQ1MDk4MDM5JSkiLCJmaWxsVHlwZTciOiJoc2woMTg4LCAxMDAlLCA5My41Mjk0MTE3NjQ3JSkifX0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:"User Logout"}))),(0,a.kt)("p",null,"Legend:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*"),": This is a query parameter, for example\n",(0,a.kt)("inlineCode",{parentName:"li"},"/oauth2/sessions/logout?id_token_hint=...")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"**"),' Here, an "active session" implies that there has been at least one login\nrequest completed with ',(0,a.kt)("inlineCode",{parentName:"li"},"remember: true")," for that user. If that's not the case,\nthe system \"does not know\" what to do (because there has never been a session\nissued that was remembered - hence it's not possible to forget it)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"***"),': Here, the "valid session cookies" implies that the browser has a valid\nauthentication cookie when calling ',(0,a.kt)("inlineCode",{parentName:"li"},"/oauth2/sessions/logout"),". If you have\nproblems at this step, check if there is a cookie\n",(0,a.kt)("inlineCode",{parentName:"li"},"oauth2_authentication_session")," for the domain ORY Hydra is running at. ",(0,a.kt)("strong",{parentName:"li"},"Do\nnot mix up IP (e.g. ",(0,a.kt)("inlineCode",{parentName:"strong"},"127.0.0.1"),", ",(0,a.kt)("inlineCode",{parentName:"strong"},"192.168.1.1"),") addresses and FQDNs (e.g.\n",(0,a.kt)("inlineCode",{parentName:"strong"},"localhost"),", ",(0,a.kt)("inlineCode",{parentName:"strong"},"google.com"),").")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"****"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"post_logout_redirect")," defaults to the configuration value of\n",(0,a.kt)("inlineCode",{parentName:"li"},"urls.post_logout_redirect"),". If a ",(0,a.kt)("inlineCode",{parentName:"li"},"post_logout_redirect_uri")," was set and that\nURL is in the array of the OAuth2 Client's ",(0,a.kt)("inlineCode",{parentName:"li"},"urls.post_logout_redirect"),", the\nbrowser will be redirected there instead.")),(0,a.kt)("h3",{id:"logout-flow"},"Logout Flow"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgVXNlciBBZ2VudC0-Pk9SWSBIeWRyYTogQ2FsbHMgbG9nb3V0IGVuZHBvaW50XG4gICAgT1JZIEh5ZHJhLS0-Pk9SWSBIeWRyYTogVmFsaWRhdGVzIGxvZ291dCBlbmRwb2ludFxuICAgIE9SWSBIeWRyYS0-PkxvZ291dCBQcm92aWRlcjogUmVkaXJlY3RzIGVuZCB1c2VyIHdpdGggbG9nb3V0IGNoYWxsZW5nZVxuICAgIExvZ291dCBQcm92aWRlci0tPk9SWSBIeWRyYTogRmV0Y2hlcyBsb2dvdXQgcmVxdWVzdCBpbmZvXG4gICAgTG9nb3V0IFByb3ZpZGVyLS0-PkxvZ291dCBQcm92aWRlcjogQWNxdWlyZXMgdXNlciBjb25zZW50IGZvciBsb2dvdXQgKG9wdGlvbmFsKVxuICAgIExvZ291dCBQcm92aWRlci0tPk9SWSBIeWRyYTogSW5mb3JtcyB0aGF0IGxvZ291dCByZXF1ZXN0IGlzIGdyYW50ZWRcbiAgICBMb2dvdXQgUHJvdmlkZXItPj5PUlkgSHlkcmE6IFJlZGlyZWN0cyBlbmQgdXNlciB0byByZWRpcmVjdCB1cmwgd2l0aCBsb2dvdXQgY2hhbGxlbmdlXG4gICAgT1JZIEh5ZHJhLS0-Pk9SWSBIeWRyYTogUGVyZm9ybXMgbG9nb3V0IHJvdXRpbmVzXG4gICAgT1JZIEh5ZHJhLS0-VXNlciBBZ2VudDogUmVkaXJlY3RzIHRvIHNwZWNpZmllZCByZWRpcmVjdCB1cmwiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ"},(0,a.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgVXNlciBBZ2VudC0-Pk9SWSBIeWRyYTogQ2FsbHMgbG9nb3V0IGVuZHBvaW50XG4gICAgT1JZIEh5ZHJhLS0-Pk9SWSBIeWRyYTogVmFsaWRhdGVzIGxvZ291dCBlbmRwb2ludFxuICAgIE9SWSBIeWRyYS0-PkxvZ291dCBQcm92aWRlcjogUmVkaXJlY3RzIGVuZCB1c2VyIHdpdGggbG9nb3V0IGNoYWxsZW5nZVxuICAgIExvZ291dCBQcm92aWRlci0tPk9SWSBIeWRyYTogRmV0Y2hlcyBsb2dvdXQgcmVxdWVzdCBpbmZvXG4gICAgTG9nb3V0IFByb3ZpZGVyLS0-PkxvZ291dCBQcm92aWRlcjogQWNxdWlyZXMgdXNlciBjb25zZW50IGZvciBsb2dvdXQgKG9wdGlvbmFsKVxuICAgIExvZ291dCBQcm92aWRlci0tPk9SWSBIeWRyYTogSW5mb3JtcyB0aGF0IGxvZ291dCByZXF1ZXN0IGlzIGdyYW50ZWRcbiAgICBMb2dvdXQgUHJvdmlkZXItPj5PUlkgSHlkcmE6IFJlZGlyZWN0cyBlbmQgdXNlciB0byByZWRpcmVjdCB1cmwgd2l0aCBsb2dvdXQgY2hhbGxlbmdlXG4gICAgT1JZIEh5ZHJhLS0-Pk9SWSBIeWRyYTogUGVyZm9ybXMgbG9nb3V0IHJvdXRpbmVzXG4gICAgT1JZIEh5ZHJhLS0-VXNlciBBZ2VudDogUmVkaXJlY3RzIHRvIHNwZWNpZmllZCByZWRpcmVjdCB1cmwiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ",alt:"User Logout Flow Diagram"}))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A user-agent (browser) requests the logout endpoint\n(",(0,a.kt)("inlineCode",{parentName:"li"},"/oauth2/sessions/logout"),"). If the URL query contains an ID Token issued by\nORY Hydra as the ",(0,a.kt)("inlineCode",{parentName:"li"},"id_token_hint"),"\n(",(0,a.kt)("inlineCode",{parentName:"li"},"/oauth2/sessions/logout?id_token_hint=..."),") then:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The URL query MAY contain key ",(0,a.kt)("inlineCode",{parentName:"li"},"post_logout_redirect_uri")," indicating where\nthe user agent should be redirected after the logout completed\nsuccessfully. Each OAuth 2.0 Client can whitelist a list of URIs that can\nbe used as the value using the ",(0,a.kt)("inlineCode",{parentName:"li"},"post_logout_redirect_uris")," metadata field:\n",(0,a.kt)("inlineCode",{parentName:"li"},"/oauth2/sessions/logout?id_token_hint=...&post_logout_redirect_uri=https://i-must-be-whitelisted/")),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"post_logout_redirect_uri")," is set, the URL query SHOULD contain a\n",(0,a.kt)("inlineCode",{parentName:"li"},"state")," value. On successful redirection, this state value will be appended\nto the ",(0,a.kt)("inlineCode",{parentName:"li"},"post_logout_redirect_uri"),". The functionality is equal to the\n",(0,a.kt)("inlineCode",{parentName:"li"},"state")," parameter when performing OAuth2 flows."))),(0,a.kt)("li",{parentName:"ol"},"The user-agent is redirected to the logout provider URL (configuration item\n",(0,a.kt)("inlineCode",{parentName:"li"},"urls.logout"),") and contains a challenge:\n",(0,a.kt)("inlineCode",{parentName:"li"},"https://my-logout-provider/logout?challenge=...")),(0,a.kt)("li",{parentName:"ol"},"The logout provider uses the ",(0,a.kt)("inlineCode",{parentName:"li"},"challenge")," query parameter to fetch metadata\nabout the request. The logout provider may choose to show a UI where the user\nhas to accept the logout request. Alternatively, the logout provider MAY\nchoose to silently accept the logout request."),(0,a.kt)("li",{parentName:"ol"},"To accept the logout request, the logout provider makes a ",(0,a.kt)("inlineCode",{parentName:"li"},"PUT")," call to\n",(0,a.kt)("inlineCode",{parentName:"li"},"/oauth2/auth/requests/logout/accept?challenge=..."),". No request body is\nrequired."),(0,a.kt)("li",{parentName:"ol"},"The response contains a ",(0,a.kt)("inlineCode",{parentName:"li"},"redirect_to")," value where the logout provider\nredirects the user back to."),(0,a.kt)("li",{parentName:"ol"},"ORY Hydra performs OpenID Connect Front- and Back-Channel logout."),(0,a.kt)("li",{parentName:"ol"},"The user agent is being redirected to a specified redirect URL. This may\neither be the default redirect URL set by ",(0,a.kt)("inlineCode",{parentName:"li"},"urls.post_logout_redirect")," or to\nthe value specified by query parameter ",(0,a.kt)("inlineCode",{parentName:"li"},"post_logout_redirect_uri"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This endpoint does not remove any Access/Refresh Tokens.")),(0,a.kt)("h4",{id:"logout-provider-example-nodejs-pseudo-code"},"Logout Provider Example (NodeJS Pseudo-code)"),(0,a.kt)("p",null,"Following step 1 from the flow above, the user-agent is redirected to the logout\nprovider (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"https://my-logout-provider/logout?challenge=..."),"). Next, the\nlogout provider fetches information about the logout request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-node"},"// This is node-js pseudo code and will not work if you copy it 1:1\n\nchallenge = req.url.query.logout_challenge\n\nfetch(\n  'https://hydra/oauth2/auth/requests/logout?' +\n    querystring.stringify({ logout_challenge: challenge })\n)\n  .then(function (response) {\n    return response.json()\n  })\n  .then(function (response) {\n    // ...\n  })\n")),(0,a.kt)("p",null,"The server response is a JSON object with the following keys:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    // The user for whom the logout was request.\n    "subject": "user-id",\n\n    // The login session ID that was requested to log out.\n    "sid": "abc..",\n\n    // The original request URL.\n    "request_url": "https://hydra/oauth2/sessions/logout?id_token_hint=...",\n\n    // True if the request did not include a id_token_hint. False otherwise.\n    "rp_initiated": true|false\n}\n')),(0,a.kt)("p",null,"Next, the logout provider should decide if the end-user should perform a UI\naction such as confirming the logout request. It is RECOMMENDED to request\nlogout confirmation from the end-user when ",(0,a.kt)("inlineCode",{parentName:"p"},"rp_initiated")," is set to true."),(0,a.kt)("p",null,"When the logout provider decides to accept the logout request, the flow is\ncompleted as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-node"},"fetch(\n  'https://hydra/oauth2/auth/requests/logout/accept?' +\n    querystring.stringify({ logout_challenge: challenge }),\n  {\n    method: 'PUT'\n  }\n)\n  .then(function (response) {\n    return response.json()\n  })\n  .then(function (response) {\n    // The response will contain a `redirect_to` key which contains the URL where the user's user agent must be redirected to next.\n    res.redirect(response.redirect_to)\n  })\n")),(0,a.kt)("p",null,"You can also reject a logout request (e.g. if the user chose to not log out):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-node"},"fetch(\n  'https://hydra/oauth2/auth/requests/logout/reject?' +\n    querystring.stringify({ logout_challenge: challenge }),\n  {\n    method: 'PUT'\n  }\n).then(function (response) {\n  // Now you can do whatever you want - redirect the user back to your home page or whatever comes to mind.\n})\n")),(0,a.kt)("p",null,"If the logout request was granted and the user agent redirected back to ORY\nHydra, all OpenID Connect Front-/Back-channel logout flows (if set) will be\nperformed and the user will be redirect back to his/her final destination."),(0,a.kt)("h3",{id:"openid-connect-front-channel-logout-10"},(0,a.kt)("a",{parentName:"h3",href:"https://openid.net/specs/openid-connect-frontchannel-1_0.html"},"OpenID Connect Front-Channel Logout 1.0")),(0,a.kt)("p",null,"In summary\n(",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-frontchannel-1_0.html"},"read the spec"),")\nthis feature allows an OAuth 2.0 Client to register fields\n",(0,a.kt)("inlineCode",{parentName:"p"},"frontchannel_logout_uri")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"frontchannel_logout_session_required"),"."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"frontchannel_logout_uri")," is set to a valid URL (the host, port, path must\nall match those of one of the Redirect URIs), ORY Hydra will redirect the\nuser-agent (typically browser) to that URL after a logout occurred. This allows\nthe OAuth 2.0 Client Application to log out the end-user in its own system as\nwell - for example by deleting a Cookie or otherwise invalidating the user\nsession."),(0,a.kt)("p",null,"ORY Hydra always appends query parameters values ",(0,a.kt)("inlineCode",{parentName:"p"},"iss")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"sid")," to the\nFront-Channel Logout URI, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://rp.example.org/frontchannel_logout\n  ?iss=https://server.example.com\n  &sid=08a5019c-17e1-4977-8f42-65a12843ea02\n")),(0,a.kt)("p",null,"Each OpenID Connect ID Token is issued with a ",(0,a.kt)("inlineCode",{parentName:"p"},"sid")," claim that will match the\n",(0,a.kt)("inlineCode",{parentName:"p"},"sid")," value from the Front-Channel Logout URI."),(0,a.kt)("p",null,"ORY Hydra will automatically execute the required HTTP Redirects to make this\nwork. No extra work is required."),(0,a.kt)("h3",{id:"openid-connect-back-channel-logout-10"},(0,a.kt)("a",{parentName:"h3",href:"https://openid.net/specs/openid-connect-backchannel-1_0.html"},"OpenID Connect Back-Channel Logout 1.0")),(0,a.kt)("p",null,"In summary\n(",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-backchannel-1_0.html"},"read the spec"),")\nthis feature allows an OAuth 2.0 Client to register fields\n",(0,a.kt)("inlineCode",{parentName:"p"},"backchannel_logout_uri")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"backchannel_logout_session_required"),"."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"backchannel_logout_uri")," is set to a valid URL, a HTTP Post request with\nContent-Type ",(0,a.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"logout_token")," will be\nmade to that URL when a end-user logs out. The ",(0,a.kt)("inlineCode",{parentName:"p"},"logout_token")," is a JWT signed\nwith the same key that is used to sign OpenID Connect ID Tokens. You should thus\nvalidate the ",(0,a.kt)("inlineCode",{parentName:"p"},"logout_token")," using the ID Token Public Key (can be fetched from\n",(0,a.kt)("inlineCode",{parentName:"p"},"/.well-known/jwks.json"),"). The ",(0,a.kt)("inlineCode",{parentName:"p"},"logout_token")," contains the following claims:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"iss")," - Issuer Identifier, as specified in Section 2 of ","[OpenID.Core]","."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"aud")," - Audience(s), as specified in Section 2 of ","[OpenID.Core]","."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"iat")," - Issued at time, as specified in Section 2 of ","[OpenID.Core]","."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jti")," - Unique identifier for the token, as specified in Section 9 of\n","[OpenID.Core]","."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"events")," - Claim whose value is a JSON object containing the member name\n",(0,a.kt)("a",{parentName:"li",href:"http://schemas.openid.net/event/backchannel-logout"},"http://schemas.openid.net/event/backchannel-logout"),". This declares that the JWT\nis a Logout Token. The corresponding member value MUST be a JSON object and\nSHOULD be the empty JSON object {}."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sid")," - Session ID - String identifier for a Session. This represents a\nSession of a User Agent or device for a logged-in End-User at an RP. Different\nsid values are used to identify distinct sessions at an OP. The sid value need\nonly be unique in the context of a particular issuer. Its contents are opaque\nto the RP. Its syntax is the same as an OAuth 2.0 Client Identifier.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "iss": "https://server.example.com",\n  "aud": "s6BhdRkqt3",\n  "iat": 1471566154,\n  "jti": "bWJq",\n  "sid": "08a5019c-17e1-4977-8f42-65a12843ea02",\n  "events": {\n     "http://schemas.openid.net/event/backchannel-logout": {}\n   }\n}\n')),(0,a.kt)("p",null,"An exemplary Back-Channel Logout Request looks as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"POST /backchannel_logout HTTP/1.1\nHost: rp.example.org\nContent-Type: application/x-www-form-urlencoded\n\nlogout_token=eyJhbGci ... .eyJpc3Mi ... .T3BlbklE ...\n")),(0,a.kt)("p",null,"The Logout Token must be validated as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Validate the Logout Token signature in the same way that an ID Token signature\nis validated, with the following refinements."),(0,a.kt)("li",{parentName:"ul"},"Validate the iss, aud, and iat Claims in the same way they are validated in ID\nTokens."),(0,a.kt)("li",{parentName:"ul"},"Verify that the Logout Token contains a sid Claim."),(0,a.kt)("li",{parentName:"ul"},"Verify that the Logout Token contains an events Claim whose value is JSON\nobject containing the member name\n",(0,a.kt)("a",{parentName:"li",href:"http://schemas.openid.net/event/backchannel-logout"},"http://schemas.openid.net/event/backchannel-logout"),"."),(0,a.kt)("li",{parentName:"ul"},"Verify that the Logout Token does not contain a nonce Claim."),(0,a.kt)("li",{parentName:"ul"},"Optionally verify that another Logout Token with the same jti value has not\nbeen recently received.")),(0,a.kt)("p",null,"The endpoint then returns a HTTP 200 OK response. Cache-Control headers should\nbe set to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Cache-Control: no-cache, no-store\nPragma: no-cache\n")),(0,a.kt)("p",null,"Because the OpenID Connect Back-Channel Logout Flow is not executed using the\nuser-agent (e.g. Browser) but from ORY Hydra directly, the session cookie of the\nend-user will not be available to the OAuth 2.0 Client and the session has to be\ninvalidated by some other means (e.g. by blacklisting the session ID)."))}u.isMDXComponent=!0}}]);