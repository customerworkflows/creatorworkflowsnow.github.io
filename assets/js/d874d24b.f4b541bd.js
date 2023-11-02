"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[7871],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>w});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),v=o,w=u["".concat(s,".").concat(v)]||u[v]||f[v]||a;return t?n.createElement(w,i(i({ref:r},c),{},{components:t})):n.createElement(w,i({ref:r},c))}));function w(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=v;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},87398:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={title:"Flow: Overview",sidebar_label:"Overview",pagination_label:"Flow"},i=void 0,l={unversionedId:"exercise-04-Flow/Overview",id:"exercise-04-Flow/Overview",title:"Flow: Overview",description:"Purpose",source:"@site/labs/telework-201_vancouver/exercise-04-Flow/0-Overview.md",sourceDirName:"exercise-04-Flow",slug:"/exercise-04-Flow/Overview",permalink:"/labs/telework-201_vancouver/exercise-04-Flow/Overview",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Flow: Overview",sidebar_label:"Overview",pagination_label:"Flow"},sidebar:"telework_201",previous:{title:"Portal",permalink:"/labs/telework-201_vancouver/exercise-03-Portal/Overview"},next:{title:"Integration",permalink:"/labs/telework-201_vancouver/exercise-05-Integration/Overview"}},s={},p=[{value:"Purpose",id:"purpose",level:2},{value:"In this part of the exercise, we will:",id:"in-this-part-of-the-exercise-we-will",level:2}],c={toc:p},u="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"In this exercise, we will learn how to implemenent an integration using ",(0,o.kt)("strong",{parentName:"p"},"Spoke Generator")," and leverage it in our main flow to add straigh-through proccesing."),(0,o.kt)("p",null,"Amanda has learned the finance department has pre-certified employees for telework. In the case of transfers, requests for telework should be automatically approved. This data has not been transferred to the ServiceNow instance, but the finance department has published an OpenAPI that can be used to look-up employee data based on their email address."),(0,o.kt)("h2",{id:"in-this-part-of-the-exercise-we-will"},"In this part of the exercise, we will:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a re-usable integration to the finance department using ",(0,o.kt)("strong",{parentName:"li"},"Spoke Generator"),"."),(0,o.kt)("li",{parentName:"ul"},"Modify our Main Flow to by-pass manager approval if the employee was pre-certified for telework.")),(0,o.kt)("h1",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"})))}f.isMDXComponent=!0}}]);