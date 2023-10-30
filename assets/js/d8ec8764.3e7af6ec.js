"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[4546],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,y=p["".concat(l,".").concat(f)]||p[f]||v[f]||a;return t?n.createElement(y,i(i({ref:r},u),{},{components:t})):n.createElement(y,i({ref:r},u))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},45818:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>v,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={title:"Security: Overview",sidebar_label:"Overview",hide_table_of_contents:!0,pagination_label:"Security"},i=void 0,c={unversionedId:"exercise-02-Security/Overview",id:"exercise-02-Security/Overview",title:"Security: Overview",description:"Purpose",source:"@site/labs/telework-201_vancouver/exercise-02-Security/0-Overview.md",sourceDirName:"exercise-02-Security",slug:"/exercise-02-Security/Overview",permalink:"/labs/telework-201_vancouver/exercise-02-Security/Overview",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Security: Overview",sidebar_label:"Overview",hide_table_of_contents:!0,pagination_label:"Security"},sidebar:"telework_201",previous:{title:"Data: Overview",permalink:"/labs/telework-201_vancouver/exercise-01-Data/Overview"},next:{title:"Restrict access from Admins",permalink:"/labs/telework-201_vancouver/exercise-02-Security/Restrict-access-from-Admins"}},l={},s=[{value:"Purpose",id:"purpose",level:2},{value:"Marc&#39;s Notes",id:"marcs-notes",level:2}],u={toc:s},p="wrapper";function v(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"Cool, we have built a fully funcitonnal Telework Case Management application. "),(0,o.kt)("p",null,"But before we can deploy the app, our manager asked us to make sure the application is secure. The app might contain sensitive data about employees such as personal address that not even ServiceNow administrators should be able to see."),(0,o.kt)("p",null,"In this exercise, we will learn techniques for securing our application to specific users and roles."),(0,o.kt)("h2",{id:"marcs-notes"},"Marc's Notes"),(0,o.kt)("p",null,"Discuss "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the new Access-analyzer")))}v.isMDXComponent=!0}}]);