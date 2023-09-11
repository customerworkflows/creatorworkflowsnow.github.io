"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[1891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>A,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},A=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,A=l(e,["components","mdxType","originalType","parentName"]),c=s(n),g=o,d=c["".concat(p,".").concat(g)]||c[g]||m[g]||r;return n?a.createElement(d,i(i({ref:t},A),{},{components:n})):a.createElement(d,i({ref:t},A))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={id:"deployment-approval",title:"8. Deployment Approval",sidebar_position:8},i="Exercise: Approve and Deploy Sydney's App",l={unversionedId:"simulation/deployment-approval",id:"simulation/deployment-approval",title:"8. Deployment Approval",description:"Estimated Time to Complete: 15 minutes",source:"@site/labs/collaborate/simulation/8-deployment-approval.md",sourceDirName:"simulation",slug:"/simulation/deployment-approval",permalink:"/labs/collaborate/simulation/deployment-approval",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"deployment-approval",title:"8. Deployment Approval",sidebar_position:8},sidebar:"labaemc",previous:{title:"7. Deployment Request",permalink:"/labs/collaborate/simulation/deployment-request"},next:{title:"Lab Complete",permalink:"/labs/collaborate/simulation/lab-complete"}},p={},s=[{value:"Estimated Time to Complete: 15 minutes",id:"estimated-time-to-complete-15-minutes",level:5},{value:"Overview",id:"overview",level:2},{value:"Instructions",id:"instructions",level:2},{value:"<strong><em>How can Jayne confirm if the app actually deployed?</em></strong>",id:"how-can-jayne-confirm-if-the-app-actually-deployed",level:2},{value:"Lessons Learned",id:"lessons-learned",level:2}],A={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},A,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"exercise-approve-and-deploy-sydneys-app"},"Exercise: Approve and Deploy Sydney's App"),(0,o.kt)("h5",{id:"estimated-time-to-complete-15-minutes"},"Estimated Time to Complete: 15 minutes"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"When Sydney submitted the Deployment Request in App Engine Studio, it triggered an email to Jayne prompting her to take action."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"SUBJECT:")," Deployment Request DEP0010002 Approval Request"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"relative",src:n(7214).Z,width:"574",height:"331"}))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You should still have a browser tab for ",(0,o.kt)("strong",{parentName:"p"},"Prod")," opened to App Engine Management Center in which you are impersonating Jayne. "),(0,o.kt)("p",{parentName:"admonition"},"If not, follow these quick instructions to be sure:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Click the avatar in the top-right, then click ",(0,o.kt)("strong",{parentName:"li"},"Impersonate another user"),"."),(0,o.kt)("li",{parentName:"ol"},"Type ",(0,o.kt)("strong",{parentName:"li"},"Jayne Nigel")," and click ",(0,o.kt)("strong",{parentName:"li"},"Jayne Nigel"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Impersonate user"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"All")," >> type ",(0,o.kt)("strong",{parentName:"li"},"app engine management")," >> click ",(0,o.kt)("strong",{parentName:"li"},"App Engine Management Center"),".")),(0,o.kt)("p",{parentName:"admonition"},"This will open AEMC in a new browser tab.")),(0,o.kt)("h2",{id:"instructions"},"Instructions"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("blockquote",{parentName:"admonition"},(0,o.kt)("p",{parentName:"blockquote"},"This section is to be completed in your ",(0,o.kt)("strong",{parentName:"p"},"Production")," instance where AEMC is running. That is your controller instance. "))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"1")," above ",(0,o.kt)("strong",{parentName:"li"},"Deployment"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"relative",src:n(9782).Z,width:"476",height:"159"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"DEP")," ticket to open Sydney's Deployment Request. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"relative",src:n(8865).Z,width:"532",height:"224"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Approve")," in the top-right of the page. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"relative",src:n(8099).Z,width:"352",height:"177"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"relative",src:n(1076).Z,width:"567",height:"62"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"To check the status of the Deployment... Click the related list ",(0,o.kt)("strong",{parentName:"li"},"Deployment Environment R.."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"relative",src:n(6439).Z,width:"659",height:"140"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Occasionally click the ",(0,o.kt)("strong",{parentName:"li"},"Refresh")," button to check on the progress. Once the app is deployed to the Prod environment a record will appear here. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"relative",src:n(5511).Z,width:"808",height:"172"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This is a good point to go take a five minute break or stretch. It can take several minutes or more for the app to deploy to the next environment.")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Eventually, you will see a record appear for your deployment. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"relative",src:n(1699).Z,width:"502",height:"166"})),(0,o.kt)("p",null,"If ",(0,o.kt)("strong",{parentName:"p"},"Has Error")," is ",(0,o.kt)("strong",{parentName:"p"},"false"),", then the app deployed successfully to the next environment. "),(0,o.kt)("h2",{id:"how-can-jayne-confirm-if-the-app-actually-deployed"},(0,o.kt)("strong",{parentName:"h2"},(0,o.kt)("em",{parentName:"strong"},"How can Jayne confirm if the app actually deployed?"))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"As part of the automated setup for your lab instance, Jayne was granted the role ",(0,o.kt)("inlineCode",{parentName:"p"},"sn_appclient.app_client_company_installer"),"."),(0,o.kt)("p",{parentName:"admonition"},"This is a base Platform role that has existed for many years that allows a non-admin user to view apps in My Company Applications."),(0,o.kt)("p",{parentName:"admonition"},"For more information see ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.servicenow.com/csh?topicname=delegated_deployment_user_roles.html&version=latest"},"Product Docs: Instance-specific deployment user roles")))),(0,o.kt)("ol",{start:17},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"All")," >> type 'My Company Applications' >> Click ",(0,o.kt)("strong",{parentName:"li"},"My Company Applications"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"relative",src:n(5346).Z,width:"321",height:"294"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"My Company Applications shows you the applications that have been published to your company's App Repo as well as what is installed on your current instance. "),(0,o.kt)("p",{parentName:"admonition"},"For more information see ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.servicenow.com/csh?topicname=app-repo.html&version=latest"},"Product docs: ServiceNow application repository")))),(0,o.kt)("ol",{start:20},(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Installed")," tab.\n",(0,o.kt)("em",{parentName:"li"},"If the app does not appear in the list, then give it a few minutes to refresh.  There is an icon in the top-right that will stop spinning when the page is done loading."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"relative",src:n(8427).Z,width:"999",height:"245"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"relative",src:n(2713).Z,width:"925",height:"373"})),(0,o.kt)("h2",{id:"lessons-learned"},"Lessons Learned"),(0,o.kt)("p",null,"You have made it!! You deployed an app with the click of a button!"),(0,o.kt)("p",null,"That completes the App Engine Governance Lab!"))}m.isMDXComponent=!0},8099:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-07-11-16-56-47-3147d14967356bdb6d49438c03c4fc90.png"},1076:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjcAAAA+CAYAAADXuDpPAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACN6ADAAQAAAABAAAAPgAAAABBQcWlAAAdOUlEQVR4Ae2dB3xO5xfHTyJCqBmtGkWMxCpSatSeFVuMCopW1eqgtJRSVRSltWdLlBq1ovYstWqPWqX9E7UVsYtI/uf3vHlubt68S8QbjXM+n/ve9dznPs/33uT+3nPOc18Pf/8K0SQmBISAEBACQkAICIFkQsAzmfRDuiEEhIAQEAJCQAgIAUVAxI3cCEJACAgBISAEhECyIiDiJlldTumMEBACQkAICAEhIOJG7gEhIASEgBAQAkIgWRHwevTexM8/jo569FrkCCEgBISAEBACQkAI2CLgYdP14mGrqM1tLoobi6CBiPHwjF+57UbYPJ9sFAJCQAgIASEgBITAIxOIjopmDaIPi69F9B7MnYibuKLGUml8z42Hh+OTmE8oy0JACAgBISAEhIAQcEQgOtqG1ohxrlhEjt5vW384EDfRpD01EDUp02WgArWaUIZCJSnaJ72jNsk+ISAEhIAQEAJCQAgkGgGPuzfoxh/76Piq+fTg5nVVb6zIiS9w7IibWGFDFM3CJiOV+XAQFfHLRnkyelNGHzuHJVo3pCIhIASEgBAQAkJACFgIRNzNQKf8slKmgOK0Y/RnLHAiVJqMPYFjRK9iAcYVNgg5BdRuqoRNiWxpRNjEgpIlISAEhIAQEAJCwA0E4FSBBoGTpXC9ELKkwyAHx0NFmeCIMZsNcaOThvkgFjaIe6ULCFQeG/OBsiwEhIAQEAJCQAgIAXcSQPQoTb6iSpuYBY51Gwxxs2LFLNq8eTHvj41dQdisWvUj59hkEI+NNTlZFwJCQAgIASEgBNxKAB4caBLtfNEnt7ySJtZ74zl8+Gdq38mT4eTrm4nq16/B6xavTcWKpdU2fbDMhYAQEAJCQAgIASGQ1ATgfIHAsee98axfvyY991waGj8uVLl5QkIaqzbjwFatmqhtSd0JOb8QEAJCQAgIASEgBDQBLWqgVbSZXyjsiQIlSxanI0ePU0TEDSpSxJ8TdCyjoYoVK8TbLEOu9MEyFwJCQAgIASEgBIRA0hLgwU8xukYLHctLhi0bVc6Nv7+fauPy5evI09OTghvXpqCgquTllYLWr9+StO2XswsBISAEhIAQEAJCwIoARI1F2Fjt4FUOS7Wl2bORSEw0efJMFYZq1qwutWjRUC1PD52n9smHEBACQkAICAEhIASeHgLw0sCDExua0m3zXLBgKuXOlVOtX7kSQeHhZyhfvjwUEJCfzp27SJcvXdFlZS4EhIAQEAJCQAgIgaeegOeZM+c43+aE0dC5c5eocFSKFJ4UFraSR4bHDg03CsmCEBACQkAICAEhIASSikCMNrHhtFEt8nz33U/iNO2nn5bQw4cPlZtnzpwl5Gn11r84hWVFCAgBISAEhIAQEAJuJmCtTaxzb7zOnr2gmmT5kUyiyMgoKlUqSG1D5rHxlj83N1xOJwSEgBAQAkJACAgBuwTgvbFy3WgtI9rFLjXZIQSEgBAQAkJACPwXCYi4+S9eNWmzEBACQkAICAEhYJeAiBu7aGSHEBACQkAICAEh8F8kYHkVcRK0fOevG2jPll8o/M8/KPzEMcpdoCDlzh9AJStUpdKVqiVBi5LnKa9evkRnw/9H6TNmUnyTZy+lV0JACAgBISAEYgm43XNz++YNGtGnGy2cPpEKlShFnXoPpDmbD6o51rEd+1EusexGxDUKqVhMTaMH9Eqsav8T9ezctJaGdH+XFs+YGq+9UVFR9DAy0uGEMufCT9Hm1cvo/r178eqQDY4J/LZhNf159HfHhRJp760b19V1unzxXCLVKNU8LoELZ07H/O3cf9yq5HghIAQegYBbPTcQLO83q0NBzVtRzyGj4jQzj39BwlSlTkOaP20ivdesNo2bv4rSpksfp1xCVrZvWGUc9tv6lfRWt97Kk2FsfEYXZowdTmsWzHbY+yZvd6YMmbPQtBFfUvEyFcg7VSqH5Z+VnXhdwrEDe5RAx0+W2LNJwwZQtXrBlL/Qy/aKJNr2a1cu04RBfajHkNH0fNbsiVavVJRwAicOH1TXpGCJV+SaJByjHCkEHpmAW8XNxCH9lLBpxg9MR6b3T/yqfzwR5Og4e/vWL12odqXLlJluXrtKEDuvB4fYK/7MbK9Ysw7lL1jU6O/M8SMotU8aavZ2F2Nb7gIB9Mfv+411WbAQuHTuDA368B2aunwzPZc+g2ARAkJACDyTBDpPWk09Gpam/Nky2ez/n+ev0cglO2lip9dt7n9SG90mbpBjc/nCOer51eh4fUHICKEps0Hg9HqrGeG4x8nB+evYIfr7z+MEYdOlz5c07OOutGbRvDjiJuLqFerf+U0KfK0SlShbgRZNm0R/Hjmo8n9COnWjHLn9yJUy11k49evUmgoHluI216Afxn1N9//9lyYsWkv//nuXls4Opd93b6fTf51QZcpWrUWVXq9P/1w8TwM/aE+p06ShPt9MpoyZfBUKhBm+5JDS3Vs3aeCEH9iD4ktrw36iPVs3KsFRoGgxql43mMpWi71pIERW/jSLdmxcQ1lfyk2+z2c1Y42znL9wMcKkLWzmd5Q2fXqq+Ho9vUnNRdzEwaFWIG7EhIAQEALPOgEIm2Fzt1KvFuXjCRwIG73P3ZzcJm52bd5AQc1a2+yftbDRhVAexz2OuPl15VJVXcVa9ahoybKUKk1aziH5H0H05IvxWkRxiOEyP6wQojGHaZDwfOnCWRo0aTa5Ugb5K6hnE6blYeq8EFXYPu6L3iqBWvdt39ZNhOkei5+aDZspYQMRtmvTeqrZqLkqtnvLRjp9/Cj5F3+FMvpmoUUzJtP878arfdlz56VDO7eriX/KncpWqUnItfiqZ2e6d+e2KnOHRdHFv8P1KR97fuzgHlq9cA6zO0zZc/lR07c60SssCLWF/3WcVsybyQLuN/JKmZJeLlWWWnbuTmmfS6eLxJn36dCSGoS0peOHDtCG5Yvp1UrVqWvfQeSsHvBc/MNU2rl5PV06d5YKMZ/8hV+mQ3t20edjv1fCdAzz7j5wBPkFFDbO2a9ja3qlQmVq/GYHtQ3icVHoZDq0b6eq5+VSZahZ+66UK28Btf/C2b/pBw7dHdm3W4XjEJYL6fABn3cd/bpqmSozdmBvSpnSm2oFt6Bir5YzzmVeuMfC9seJ37LgZJF79w4Flq1Ib33Uh1Kn9lHFkJezYsGPSvTiOlcJakSN3myv9uEH4VbO/5E2rgxTIj2XfyGq1/zNeALUfL5rV/+h8V/2oQO7tlEaZl+BPXRN2nUyfj3XWb9R167Nv9CmFWF0aO9OypozF99fNahhq/Z8q3kS2rt2yXzFauGMSXTi0EGb94O5TVh21E9dZ+suH9HsKaPVfQ3hHdS8Nb1WvbaqypUy29atpFWL5lDrLj1p1oQRdILF/tDp8ylXPn/FEV8McP/CIxlYpiLVb9mO/z4f0qftm1P5mkEU3LZjnGaP7NtNhcaRG+gKN+SmbWRuR5gbrlVO/jsREwLJmQA8NhA2WsRoD45Z2Oht7uRgP1kgkVtxmkdF5eHRULYMnhtbhvI4LqEGb8mmVT+rw8tWfV09cCFyYFr0qBXTR6uuPWjWL3up35hpaisEx+H9O00liFwp81J+f+o+eBT1Gj5OPdQglCCs+o6aSqFrd1KLjt1UnchlwT/N6vWbqPUt61YY59q63rKMnI0LZ8INYTPku7k0clYYDf5ujiq7mD0usIXTJylh48eibQznK00K20CVghqqfYnxETpqqGpnty+GM0sv+rrXe8rrhLrPhp+kz7u0pZs3IqjTpwPpvX5D+dodp8HdOxKSkm3ZudMnCTkpx/gB9Eb796hCjSCX6pnJHjEkngcUDaRPR0xkgVWZFnw/gS6ePa1O8+D+fSUy7/PcbH+f+ovDktfUpn9ZAMKLd2DnNmrED+0B40IpXYZM7MFro0QiCg39uIu6Np/zvdD76/GU5YUX6fbtm+TnX5he8sun6inH9xXEwwvZ7Oe4bPh5AT249y915Adk/ZB2fO8tobmTLDln8BCCQenKNVRfXq1Yjebxw33bekue2I5N62gmC6w6TVvTN7OXUoMWbQm5NY4M91TegCJ8Db6iAkWK00LOYVs6J1Qd4kq/ISK+6fMhZWPP32ejplBzDlMumTWN5k4Zo+q4yblzeHhPGNyXqrIQw/2QMpV3nPvBun3O+qnr/LZ/T1Vn98Hfkgf/vt3YAZ8YYVFXyty+fUsJmlH9e1C+QkVZRPalLC9mp5njRiiO2V7Ko0RvHh6dCc7fjxzEwtVb5U7hi8NdPl4b2rybPce4v1zhtv2XNSq/Bnlpvfm+fIOF8lHOyxITAsmdgFngQNQktbABb7d5bpS44YThRzEkGD+OuNnLng94MTJxaCZ/YUtuSTkO4awLm6dET0jnbsa3Z92uGuw1SeHlpcJGgeUrK+/KhfBwyp3XXxchV8p07TvYGHq9dY1FpBR/9TX2HpVR9QQ1a0VzJ1secKd4KDzEV+i3X9HxA3vpysULqg3wzMBK8wNv3/bNahkCCd+mMWmDdwdCDt+gYXjYPs//0GF+zBAP08SwLybMMOpNxV6Hge+/rb4FZ8majdYwU1jXz4YYnprOfQZRj9YN6NzpU5QzT16bTUiT9jnqP3oqe67Sqv3TRw9Vc3v1YEg7vEeV6zam9j36qrIBL5dQnriDMbxsnshq44Fd25WHp//YaerBht3v9OxHu1mEHtyxnSrVrq+8XkVfKaO+5cNjAcGgDdcMXEtVrOo056YqC9d23T5VhxbhkOXebZtpP4sqGLwToast11mt8wMZoUd4i+CxuPC3RbAVZO/Ui+xBgeBwZhBRVeo2UsXgTTpxmD1jyxZRg5ZvsTfHcb+rN2hCc78bRwVLvEqt2Iuirc17H6swa0jHD/Um6jf6O7v3g1EoZsFZP3V5iFXdRyRhdw2uQTtYNOAaa3OlTMPWbxuh5xsRERyqncl/t28Y90zxMuUpVarUtPTHadS4bQeq2bg5rV/yE21Zu8LwnK5e/JMKZ5dkcbObPT4QO/buF3Bb/MMU9b+m13CLdxXtbdHxA5o4yHKf6vbLXAgkRwJmgYP+2QpTubPfbhM3udgLc+r4MTUiytUOojyOS6jpROI7/G0M38JhkQ8eqDlED8TPa+wtsGfp0mdUuy5zaMqe2SsDV762kycs3qc8/rF9wbc7eFhOcnjsDHsUIHpKV65JGLq9a8sGdv+nUIfD8+LDAuDc36fUOto9e8I3umpjfu/OHRVuwwa/gELG9sRcSJU6jVEdwmKwW9evq/nR/buVkPy4TbBax0dkpIW1I3GDcJoWNjjGWT1XL19EMR65VV7NYz8e7dfrj7O3CDZ2oEV06HqQcH6Wr0dKb29q1OZdCuMH1t5tmzg3qh4LnoaUPXceXdTlOZK0zebHIZGTx4+YN6nh9hfY84R7DffGTX59Aaxs1Zq0Yv5M6h5SjyC2y1cP4m21lPiNU4FpxTrBGaJ6DYdqEAJ11m8IAYQyMXUJrmnUir8h3HvXI64a28z3QzbOS4Pp+8EoZLWA1wrY6qculjZdBr1ImZ9/gZ7PnlOFKY2NvOBKmXLVLKEsHPfXH4fU4cVKv6bm+gPCD+Lmr6OHVVi38CulaTlEEIeJI678Q1vY69uSBR6+7DjjdpfDjfDy1rIaqOBBj3Zf6rbJXAgIgccj4F5xg9DUI3hvTnH5hIobvF8CrnMY/ikf3LE1HimIH0fi5s8jlveTvJA9R7xj9QZXymTNkZOO7d9FFzk/RJt6fwyHZWB62G6loAZK3OzYuJ7FjeWfYuWYsFLOGDGBcNfw6Qt0NXHm8Oqgr9Y/JBan0BNagQBD2waOn2GcAfki+KVWs3gxduqFmJ+t16vO6tm77VdV1Ns7lT4kQXOftBZP0ZcTZ/LD0pIThPbCvGNyYd7o8B6VYfG1k0NDyKNYMut7GsCJ3WYvQoJObjoIeT0IxVxj0YbwR1arew3emjFzl3MS+SYe5beaxnGOz5a1yzncGesdMFVncxFhTxgEm7N+P3hwX5WtzbkuCKtoU9cyRYp4nk6939lD3Fk/dT3mOc6JHKWUnL9lz+yXiS8qrLfoXxHW1z2oaSsayeG4w/x/4/ghi/itzGE3mDNuCFvBvFOnVnP5EALPGgFzKAp9t87BcTcPT3edELkEK+fPeqTToTyOS4htWbNcHYYRQxiua576fDtF7YP4gQgy263rEWr1PH9zReIx7KV8sR4XrLtSBuW0FYgZkXSQQxH6QXOUw09KiHAhxP9hxfmbJQQKhBDahnAawhEwLQrx7fDEYYvowvZT7BXSfchX0BI2QeKqfkHfsQP7UOyJW6GXA9U311ucjwExgwlCxaGwsdEqZ/XkiAlv/fF73H7pa4Iq08S8G+n86VPGGbTHTm/IxwnIMNRjbi/anIIf4trysJel+TtdaeSPS9S12csiIzENI9Tu8QN89LwV/CLLL6gxe4uyZstpJP/iXGhfeQ41YqQhcrX2c4gSyeL2zCLRLHvxPp497HlCmAmhNWf9RpIzPIp7tmw0uBjXMkb02Tuvo+2u9NNyfGzrT3OCOjxp+YtY5+S5Uia2NfkCLCFpJLqbTYcx83MoEBZYrqL6m1sXNp9WceizesPm/D6sjGqfM254Hxf+Xg9aneNmzP8TVYl8CIFkSsAsbBCeMoeosC8pzG2eG4x4Qo4CXtCn32OjO2xrtBTKIW8koSOldA4IRp5Yu+kRAoK7GyObIIKqxSTzoj19OoRQ4eKl1FBqrOOhEFC0OOEtx9pcKaPLYl66cnVawe5uiKUOdSuqOiFgYPgH6pv1RbWMEUYYObVsTqhaRxxfvyAua45cnGfSSI3C6t+pFRUtXY4i70cqIYS+jJqzjEfQ1FeiCDkpv+/eQQ+jHibqaCnVKDsfVTgHZtWiufRVj85U9402nMxZhNuymzau/pl6DxtHmbI8b+fIuJud1YN7ogDnX6xZPI9S8bfkQnytfl29VI1Ew8MFloNHqEAkIok2o68vJz9708LQKYaYRBlcY9Qz5euBdJ6TtUuWr8q5QSfVMPqm/BoCJKPOGD2ME7IbcK5NYQ6X7VHH5+V+wbSHZSsngGfImJkFsL96ZYDa+QgfkewpQQjk2qVLdIsTW/FgRW6HLycvwzauWEKXzp+lGvWbqvWjfN9AsGMUlD1DwrUPv1YgHecnoT6I6Aat31LFnfUb4b7gNh2UB2PYJ105/+QNSp8pE21bu1LxQaJsQsxZP3WdU4YNoOB27/IIpiiaOf5rdR0r84s9zeZKGXN5CBSEixCa8+MRTBBLJ/84QqsXz6UKPMBA56ch/IR7dxbzg9Vs1MyoxhVu8LIijDmV7ynkvZ1gz+8cHiUnJgSSMwFrYaP7ahY4SZF/4zZxgw535vfM4M3DcA/jAWLPIGwgBvCG4oQavvHhAVe+VvycGrij63BCLx5eEEFVeTSStpf88hvCpkyVWtTuo0/VKCu9H3N7ZbSb21wWy+kyZORRJ1NpxpjhtH/HFiVI8IDCSBtrDhVq1TXETfkadYyqUHeHnv35m2Rm+o0TLHWyMUROuw96KxGEtzvDW4F/2hBSeHi37vyRelCxK8CoK6ELOlRmPl73GeETjDiaw0nSU4cPUEXQxyY8tNaRsDF7SXCQK/V8+PlwmjDkMzVCCte4Ggur8swNSbgwiMSPh47l4dCfqhFRGI4f3PZd9iTF5r5AGH3CZUI5gXnpnBmqLpSrUqcR+RcLpGj2eEBA4KcrYDhP0/ZdWGxXV+uFA8sogYkkcOzDCDG8D8mWWffRXAajp9BuJF6jHrwGIIiHel+9ZMktQt7J0tnTaXHoJHUYvCq9WCw6sqosgsd80Ut5PZAbhQTjQB7GDnPWb5RBkvT7A4bTsrk/qBFQ2IZ7qWWn7lg0zNH9YBSKWXDWT13eh5n3fSdEreKLRZ+Rk42wrStl9G1u3bY2H3yiXlC5iMUHvtRACOO+wasKzFaZxSzEDc6N37rT5gq3Ju06EnLCMDoOUwn2BEEMDuXXM4gJgeRKAC/osydetMBJipf4efj7V1A+3ugozo/gPA/8c9AxaKx7UjS9+uUsahvomyjXBj/BgDcV48V1tfk9Nnn4Gy9CLkgePsVu6FUcisLoGwihxPjpBVcajR+XxKgM2PS1O9Q8BSf0IkdBmytldFlHc7BFcqa9d784Ota8D+Et6xCK3o/3wNxnj4CPVSKr3v+k5xiKjbAYHgiPY87qwQgxvGMG4mHS0M8JYT+8MNFsSJDVoQXzdvMy2oqcCVveEOxDaAGjtLSQMx/r6DqYyzlbxjlwv2tPnXV5DFH2cJDzYl0e67c5dOXoPnPUb10fEmW9wZi9Golh9vqJ9+ZgCPvkpb9ym5+jB5yMrt8DpM/rShld1tEcLPG3k1Bzxs3ZfZvQ88pxQkAIWAjM2HeFdvVrTVHsKoF2geH/M9ImtZZJnP9YlvO59Il/4MgdwJuH8YI+DNHEcG8kDmMK5peNJTQU5VIDXChk/U/V1iGulLF1HC6AoweOrWNsbbMOtZnL4EHkk0gPI3O9ri6bRaGrx9gq56weV66BM2GD80JQ2BI2el8G9ujYM0fXwd4xtrbDu+fIEvIwdnafOeq3bktiC2Rn/cR5cf86E1OulNF9sJ4nhKW5DmfcnN235rpkWQgIgSdDwGvbtjDlqcG3EUywSP7mjwnrD3jo9JDY/NVEawUETFKLGN2Z1D4+PGrKEgKCx8aWuVLG1nGyzT0EECp8GDPM3z1nlLMkJoHMWV6gYpzvk8LL9t8fzuVKmcRsk9QlBITA00tgcdj3aiQlvmx48RciTDCsY/K4cuUKR0qilZDRc4ywMIubwQe9Ey0s9fSikpYJASEgBISAEBACTzsBhKX6FrsfR9wgPUGJGo6OKMGDD4gaGOaWuFW02ol17BcTAkJACAgBISAEhMDTQsAsZLAMcQP9ggnrXvgwixuEovROLXaels5IO4SAEBACQkAICAEhoHWKFjl6Xc+9sAAzz1FYixy9XVAKASEgBISAEBACQuBpIABtoiezwNHb4nlu0GgdjtLzp6Ej0gYhIASEgBAQAkJACIAABI2tCeIG2216bjQ6rYBY7uhNMhcCQkAICAEhIASEQJISiNUnlmbodT236bnRagiHYJnooeVo+RQCQkAICAEhIASEQBIT0DrFeg5xg202PTda+aDtWBYTAkJACAgBISAEhMDTQkBrE61XrOcibp6WKyXtEAJCQAgIASEgBFwi4FTcwH1jHgqOWrWbB+PG9VuLXTqbFBICQkAICAEhIASEwBMmAHGjX9ynNQvm2K7Wn/D5pXohIASEgBAQAkJACLiVgMOwlFZAbm2RnEwICAEhIASEgBAQAg4IaC8NdIqtyVNvtC6o1x3ULbuEgBAQAkJACAgBIZAkBLQDRusY83q8H46y/skFiBxfH0+KuBuZJI2XkwoBISAEhIAQEAJCAASgRaBJoE20QdTo3GG9zfDcaMWjPTaY6+Wivp50KuK+PkbmQkAICAEhIASEgBBwOwFokaK+lh/JNOsU87LSM7Zahh3mqUJ2L7p48z7tP39HPDi2gMk2ISAEhIAQEAJC4IkRgMcGGgRapEL22F8A11rF+sQePNSbvTnRyqWDOYZ+Y3r48CFFRkaqCctX7zygLeei6Mi1aLpyN8q6HlkXAkJACAgBISAEhMATIYBQVOFMHixsPClzmpRqGLiXlxdhMg8J12JHiRu0RL/PBkJGixstcMxz836zKMIyKhUTAkJACAgBISAEhEBCCGgtYYgU1hVavGCOSQsaPTfvxzkRovLSJ0dFEDXmClEAB1mbLqM9PZjDsF0vWx8j60JACAgBISAEhIAQsEfArCGwDA2i51qPWAsa7NcT9AfKwdR7brQgQQGYrgzLEDwojDKoFIZ1bMc286R2yocQEAJCQAgIASEgBBJIQIsVPYfmwDI0CJb1unlZl9WnNDw3egPmKKTnZs+N3g5BYy1u1AH8gX1iQkAICAEhIASEgBB4FAJaY+AYLVYw12JGh5+wjmVdXs/N5/o/AZgSnfKU7UkAAAAASUVORK5CYII="},7214:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-07-11-22-07-39-b405021e1a56c652c19e692db6277902.png"},9782:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-07-11-22-12-55-7c1d9156753df48188d2837d0f67178d.png"},8865:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-07-11-22-15-03-3b61beac29f711f1cd6df6bf85b6ba90.png"},6439:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-07-11-22-17-50-4f72f8cd56292b7c6e77d459894d7405.png"},5511:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-07-11-22-18-45-05362c01e60fe649156b341ad4ef98d9.png"},1699:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-07-11-22-20-02-4c750fbcf67c974f8136ffac37eebeef.png"},5346:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-07-11-22-22-05-175c3c5be55c0f5d4ece4d85fd3626ec.png"},8427:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-07-11-22-23-47-d697ec80b75dcf135de38a375f2af0fc.png"},2713:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-07-12-08-29-21-cad4230c33b4fcf0d57bcf6fafc87646.png"}}]);