"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[654],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},g="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,i=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),g=p(n),m=r,k=g["".concat(i,".").concat(m)]||g[m]||u[m]||s;return n?a.createElement(k,l(l({ref:e},c),{},{components:n})):a.createElement(k,l({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[g]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34226:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={id:"exercise-5-2-bonus-exercise-2",title:"Create a workflow",hide_table_of_contents:!0},l="Add Flow and Approval",o={unversionedId:"exercise-5-2-bonus-exercise-2",id:"exercise-5-2-bonus-exercise-2",title:"Create a workflow",description:"Utilizing Record Producers on an Employee Center Portal allows consumers (employees) to connect with a departmnet and to access the services the department provides. Workspaces provide a Dept-specific view for service fulfillment for department users.",source:"@site/labs/deptsvc/exercise-5-2-bonus-exercise-2.md",sourceDirName:".",slug:"/exercise-5-2-bonus-exercise-2",permalink:"/labs/deptsvc/exercise-5-2-bonus-exercise-2",draft:!1,tags:[],version:"current",frontMatter:{id:"exercise-5-2-bonus-exercise-2",title:"Create a workflow",hide_table_of_contents:!0},sidebar:"deptsvc",previous:{title:"Add dynamic behaviors",permalink:"/labs/deptsvc/exercise-5-1-bonus-exercise-1"},next:{title:"Lab Review",permalink:"/labs/deptsvc/lab-review"}},i={},p=[],c={toc:p},g="wrapper";function u(t){let{components:e,...s}=t;return(0,r.kt)(g,(0,a.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"add-flow-and-approval"},"Add Flow and Approval"),(0,r.kt)("p",null,"Utilizing Record Producers on an Employee Center Portal allows consumers (employees) to connect with a departmnet and to access the services the department provides. Workspaces provide a Dept-specific view for service fulfillment for department users."),(0,r.kt)("p",null,"Now we will utilize Flow Designer to build a workflow to standardize the way that the department processes requests. We will configure the workflow to execute whenever a Dept Request is submitted. This workflow will request an approval from a Group of Users designated as Dept Request Approvers."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Exit App Engine Studio and return the platform.",(0,r.kt)("br",null),"\nSelect ",(0,r.kt)("strong",{parentName:"li"},"All"),".",(0,r.kt)("br",null),"\nType ",(0,r.kt)("strong",{parentName:"li"},"sys_user_group.list")," in the ",(0,r.kt)("strong",{parentName:"li"},"Filter Navigator")," textbox and press the Enter key.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus 2 Image 1",src:n(92413).Z,width:"662",height:"270"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"Groups")," list view will load displaying the existing Groups.",(0,r.kt)("br",null),"\nSelect the ",(0,r.kt)("strong",{parentName:"li"},"New")," option in the upper right.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 2",src:n(53797).Z,width:"896",height:"252"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("strong",{parentName:"li"},"Dept Request Approvers")," in the ",(0,r.kt)("strong",{parentName:"li"},"Name")," field.",(0,r.kt)("br",null),"\nRight-click in the gray bar at the top of the form view and select ",(0,r.kt)("strong",{parentName:"li"},"Save"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 3",src:n(16301).Z,width:"1872",height:"338"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"Group Members")," tab.\nSelect the ",(0,r.kt)("strong",{parentName:"li"},"Edit")," button to add members.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 4",src:n(48693).Z,width:"2012",height:"570"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Search for Users on the left side of the slush bucket. Use the ",(0,r.kt)("strong",{parentName:"li"},"[>]")," button to select add the User to the group. Add:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Andrew Och"),(0,r.kt)("li",{parentName:"ul"},"Beth Anglin"),(0,r.kt)("li",{parentName:"ul"},"Luke Wilson",(0,r.kt)("br",null),"\nSelect ",(0,r.kt)("strong",{parentName:"li"},"Save"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 5",src:n(33939).Z,width:"1034",height:"834"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Repeat the steps to add a Role to the Group. This will grant access to the Dept Request Approvers members.",(0,r.kt)("br",null),"\nSelect the ",(0,r.kt)("strong",{parentName:"li"},"Roles")," tab.",(0,r.kt)("br",null),"\nAdd the user role for the Dept Services app. (Your role will have a slightly different prefix)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 6",src:n(74766).Z,width:"1446",height:"1032"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Return to the Dept Services app in App Engine Studio.",(0,r.kt)("br",null),"\nSelect the ",(0,r.kt)("strong",{parentName:"li"},"Logic and automation")," tab.",(0,r.kt)("br",null),"\nSelect the ",(0,r.kt)("strong",{parentName:"li"},"(+) Add")," option next to the ",(0,r.kt)("strong",{parentName:"li"},"Logic and Automation")," header.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 7",src:n(93843).Z,width:"1712",height:"518"})),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Flow")," when the next screen appears.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 8",src:n(29839).Z,width:"1886",height:"724"})),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Build from scratch"),", you will not be using a flow template in the Dept Services app.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 9",src:n(23253).Z,width:"1950",height:"1008"})),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("strong",{parentName:"li"},"Dept Request Created")," in the ",(0,r.kt)("strong",{parentName:"li"},"Name")," field",(0,r.kt)("br",null),"\nSelect ",(0,r.kt)("strong",{parentName:"li"},"Show advanced options"),(0,r.kt)("br",null),"\nChange ",(0,r.kt)("strong",{parentName:"li"},"Run")," as to ",(0,r.kt)("strong",{parentName:"li"},"System User"),(0,r.kt)("br",null),"\nSelect ",(0,r.kt)("strong",{parentName:"li"},"Continue"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 10",src:n(10745).Z,width:"1120",height:"1236"})),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Edit this flow")," once the flow is ready")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 11",src:n(31271).Z,width:"998",height:"370"})),(0,r.kt)("ol",{start:12},(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"(+) Add a trigger"),". Set the ",(0,r.kt)("strong",{parentName:"li"},"Trigger")," to ",(0,r.kt)("strong",{parentName:"li"},"Created"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 12",src:n(54600).Z,width:"794",height:"336"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 13",src:n(53280).Z,width:"1384",height:"812"})),(0,r.kt)("ol",{start:13},(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("strong",{parentName:"li"},"Table")," to ",(0,r.kt)("strong",{parentName:"li"},"Dept Request"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 14",src:n(55202).Z,width:"1736",height:"516"})),(0,r.kt)("ol",{start:14},(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"(+) Add an Action, Flow Logic, or Subflow."),(0,r.kt)("br",null),"\nSearch for ",(0,r.kt)("strong",{parentName:"li"},"ask for"),(0,r.kt)("br",null),"\nSelect ",(0,r.kt)("strong",{parentName:"li"},"Ask For Approval")," ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 15",src:n(98107).Z,width:"782",height:"246"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 16",src:n(38213).Z,width:"1192",height:"918"})),(0,r.kt)("ol",{start:15},(0,r.kt)("li",{parentName:"ol"},"Drag the ",(0,r.kt)("strong",{parentName:"li"},"Dept Request Record")," Data Pill from the right ",(0,r.kt)("strong",{parentName:"li"},"Data")," pane to the ",(0,r.kt)("strong",{parentName:"li"},"Record field"),".",(0,r.kt)("br",null),"\nSet ",(0,r.kt)("strong",{parentName:"li"},"Approve")," to ",(0,r.kt)("strong",{parentName:"li"},"Approve or Reject"),(0,r.kt)("br",null),"\nSet ",(0,r.kt)("strong",{parentName:"li"},"Choose approval rule")," to ",(0,r.kt)("strong",{parentName:"li"},"Anyone approves or rejects"),(0,r.kt)("br",null),"\nSelect the middle Group button to assign the approval to open the group selector popup",(0,r.kt)("br",null),"\nType ",(0,r.kt)("strong",{parentName:"li"},"dept")," and select ",(0,r.kt)("strong",{parentName:"li"},"Dept Request Approvers"),", the group created in a previous step",(0,r.kt)("br",null),"\nSelect ",(0,r.kt)("strong",{parentName:"li"},"Done")," to save your changes")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 17",src:n(94290).Z,width:"1992",height:"980"})),(0,r.kt)("ol",{start:16},(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"(+)")," directly below the Ask for Approval action",(0,r.kt)("br",null),"\nSelect ",(0,r.kt)("strong",{parentName:"li"},"Flow Logic"),"\nSelect If when the popup appears")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 18",src:n(80926).Z,width:"1036",height:"884"})),(0,r.kt)("ol",{start:19},(0,r.kt)("li",{parentName:"ol"},"Drag the ",(0,r.kt)("strong",{parentName:"li"},"Approval State")," Data Pill from the right ",(0,r.kt)("strong",{parentName:"li"},"Data")," pane and drop on ",(0,r.kt)("strong",{parentName:"li"},"Drag and drop data pill in"),"\nAccpet the default ",(0,r.kt)("strong",{parentName:"li"},"is")," value",(0,r.kt)("br",null),"\nSet the ",(0,r.kt)("strong",{parentName:"li"},"Select a choice")," to Approved",(0,r.kt)("br",null),"\nSelect ",(0,r.kt)("strong",{parentName:"li"},"Done"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 19",src:n(21431).Z,width:"2146",height:"430"})),(0,r.kt)("ol",{start:20},(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"(+)")," option below the If action that we just added. Make sure to select the ",(0,r.kt)("strong",{parentName:"li"},"(x)")," that is indented. This will ensure that it the action only will only run if the Dept Request is approved",(0,r.kt)("br",null),"\nSelect ",(0,r.kt)("strong",{parentName:"li"},"Action")," and search for ",(0,r.kt)("strong",{parentName:"li"},"update record")," in the popup",(0,r.kt)("br",null),"\nSelect the ",(0,r.kt)("strong",{parentName:"li"},"Update Record")," action")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 20",src:n(63407).Z,width:"1194",height:"802"})),(0,r.kt)("ol",{start:21},(0,r.kt)("li",{parentName:"ol"},"Drag the Dept Request record from the right ",(0,r.kt)("strong",{parentName:"li"},"Data")," pane and drag to the ",(0,r.kt)("strong",{parentName:"li"},"Record field"),(0,r.kt)("br",null),"\nSelect ",(0,r.kt)("strong",{parentName:"li"},"+")," Add field value. Set the field to ",(0,r.kt)("strong",{parentName:"li"},"State"),(0,r.kt)("br",null),"\nSet the value to ",(0,r.kt)("strong",{parentName:"li"},"Work in Progress"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 21",src:n(75683).Z,width:"1766",height:"492"})),(0,r.kt)("ol",{start:22},(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Activate")," in the upper right to set the flow as ",(0,r.kt)("strong",{parentName:"li"},"Active"),(0,r.kt)("br",null))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 22",src:n(67258).Z,width:"814",height:"244"})),(0,r.kt)("p",null,"Confirm by selecting Activate again when prompted",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 23",src:n(66807).Z,width:"1066",height:"588"})),(0,r.kt)("ol",{start:23},(0,r.kt)("li",{parentName:"ol"},"Return to the ",(0,r.kt)("strong",{parentName:"li"},"App Home")," tab",(0,r.kt)("br",null),"\nSelect the ",(0,r.kt)("strong",{parentName:"li"},"ellipsis(...)")," for the Dept Request table",(0,r.kt)("br",null),"\nSelect ",(0,r.kt)("strong",{parentName:"li"},"Edit"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 24",src:n(49184).Z,width:"2324",height:"418"})),(0,r.kt)("ol",{start:24},(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Preview")," in the upper right when the Dept Request tab opens")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 25",src:n(58227).Z,width:"836",height:"190"})),(0,r.kt)("ol",{start:25},(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"New")," button in the upper right once the Preview opens")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 26",src:n(17301).Z,width:"1046",height:"208"})),(0,r.kt)("ol",{start:26},(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"hamburger (three stacked lines)")," button in the upper left",(0,r.kt)("br",null),"\nSelect ",(0,r.kt)("strong",{parentName:"li"},"Configure >"),(0,r.kt)("br",null),"\nSelected ",(0,r.kt)("strong",{parentName:"li"},"Related Lists"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 27",src:n(5253).Z,width:"942",height:"996"})),(0,r.kt)("ol",{start:27},(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Approvers"),(0,r.kt)("br",null),"\nSelect ",(0,r.kt)("strong",{parentName:"li"},"Group approval->Parent"),(0,r.kt)("br",null),"\nSelect ",(0,r.kt)("strong",{parentName:"li"},"Save"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 28",src:n(59801).Z,width:"1648",height:"776"})),(0,r.kt)("ol",{start:28},(0,r.kt)("li",{parentName:"ol"},"Return to the platform tab",(0,r.kt)("br",null),"\nSearch for and click ",(0,r.kt)("strong",{parentName:"li"},"Employee Center"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 29",src:n(9100).Z,width:"1254",height:"654"})),(0,r.kt)("ol",{start:29},(0,r.kt)("li",{parentName:"ol"},"Search for ",(0,r.kt)("strong",{parentName:"li"},"Dept Requests"))),(0,r.kt)("ol",{start:30},(0,r.kt)("li",{parentName:"ol"},"Fill out the required fields and click ",(0,r.kt)("strong",{parentName:"li"},"Submit"))),(0,r.kt)("ol",{start:31},(0,r.kt)("li",{parentName:"ol"},"Notice how the ",(0,r.kt)("strong",{parentName:"li"},"State")," is ",(0,r.kt)("strong",{parentName:"li"},"Open")," when the confirmation screen opens. Leave this tab open.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 32",src:n(25557).Z,width:"592",height:"206"})),(0,r.kt)("ol",{start:32},(0,r.kt)("li",{parentName:"ol"},"Return to App Engine Studio and select ",(0,r.kt)("strong",{parentName:"li"},"PREVIEW")," to open up the Workspace in the Experience section.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 33",src:n(79929).Z,width:"1712",height:"174"})),(0,r.kt)("ol",{start:33},(0,r.kt)("li",{parentName:"ol"},"The Workspace will open in a new tab",(0,r.kt)("br",null),"\nSelect the ",(0,r.kt)("strong",{parentName:"li"},"List")," button in the upper left",(0,r.kt)("br",null),"\nSelect ",(0,r.kt)("strong",{parentName:"li"},"Open")," in the Dept Request section",(0,r.kt)("br",null),"\nSelect the newest Dept Request. It will have the largest number.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 34",src:n(17906).Z,width:"1822",height:"1136"})),(0,r.kt)("ol",{start:34},(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"Approvers (3"),")",(0,r.kt)("strong",{parentName:"li"}," tab",(0,r.kt)("br",null),"\nSelect "),"Requested** to open the first approval request")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 35",src:n(94117).Z,width:"896",height:"856"})),(0,r.kt)("ol",{start:35},(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("strong",{parentName:"li"},"State")," field to ",(0,r.kt)("strong",{parentName:"li"},"Approved"),(0,r.kt)("br",null),"\nSelect ",(0,r.kt)("strong",{parentName:"li"},"Save")," in the upper right")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 36",src:n(86702).Z,width:"1886",height:"768"})),(0,r.kt)("ol",{start:36},(0,r.kt)("li",{parentName:"ol"},"Return to the browser tab where the confirmation screen is displayed in Employee Center",(0,r.kt)("br",null),"\nObserve how the ",(0,r.kt)("strong",{parentName:"li"},"State")," has changed to ",(0,r.kt)("strong",{parentName:"li"},"Work in Progress"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonus Image 37",src:n(49482).Z,width:"834",height:"208"})))}u.isMDXComponent=!0},92413:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_1-57974c4bb0b1bd44899e97169ee4d049.png"},10745:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_10-84adfc2e3b3cef1234b2b66650c8c02b.png"},31271:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_11-2fe051ba039269e71984b57702aa611e.png"},54600:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_12-63ab1c1fa041bafb7dee08737e6570e0.png"},53280:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_13-4d44ca635ec4a77d97df40b82ab7ae10.png"},55202:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_14-cb45b2c626f4272db3ccd12a5d10c6dd.png"},98107:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_15-78bd8368930b135340b9f5e025a343dd.png"},38213:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_16-d4df17a15a7657c03dd12e6a5f7ad8ac.png"},94290:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_17-da44521e7d68c06f998962a722f8aef0.png"},80926:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_18-21e6d62ed6677f37e37a3ab742363fd5.png"},21431:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_19-2a2b389781f27b90a899f0b2631c179d.png"},53797:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_2-873351a4f5bc0f6cec5a5d72fb894830.png"},63407:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_20-6ded8ca3dd55b7f9147f2668348b04ab.png"},75683:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_21-d08c066cf6398b3d0a59ca37897154ac.png"},67258:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_22-d6d1d3b085deff68e0b236350660e573.png"},66807:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_23-a0f241f6f0fae74205ed58eb526b59f5.png"},49184:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_24-e3b54515caae5187a3539d0f2a6d009b.png"},58227:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_25-86fba674c5d6c8642b42af68dd3ebaf6.png"},17301:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_26-fcf778ef2907b2592242d3152d957408.png"},5253:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_27-3145ddcf5c9a88aef86a371147f052cb.png"},59801:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_28-ee1709b53e6bf355da6602819def1fa8.png"},9100:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_29-06691b6d02ea1095f76e26a89bd4c853.png"},16301:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_3-7c172480a87316a0aa04d79de5110e68.png"},25557:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_32-e6c98ab0ee43f287d8cc71c831d0e143.png"},79929:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_33-d1feb3914f1d2ee3cb403dd5eb911d98.png"},17906:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_34-55f0fee37b38662720763d44c9a49ed5.png"},94117:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_35-7d4fcfe918f9c8e5ecd08f6f1601ee30.png"},86702:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_36-0ed1d3b2923b8085f49832c5d64983c1.png"},49482:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_37-653277716c34e6ec9d679418cb665886.png"},48693:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_4-be3c388c4b322bca46c9d13f919c898d.png"},33939:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_5-1a86b1450907b67b2137820b41efea03.png"},74766:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_6-687bcd4ff57d52f9f304b16e03846439.png"},93843:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_7-dbe4cc7a49babfc6bd991cbe43823522.png"},29839:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_8-f4e255582c8c9363ff51ea6c2ca7b2b4.png"},23253:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/bonus2_9-2ea935560f40d92ec4f7865f026f131d.png"}}]);