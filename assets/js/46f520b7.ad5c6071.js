"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[5447],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,k=c["".concat(s,".").concat(g)]||c[g]||m[g]||o;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},28509:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"automation",title:"Create Flow in Flow Designer",hide_table_of_contents:!0,sidebar_label:"Create Automation",sidebar_position:3,draft:!1},i=void 0,l={unversionedId:"exercise_5-build/automation",id:"exercise_5-build/automation",title:"Create Flow in Flow Designer",description:"In this exercise, we'll tie our investigation process together with the Complaints Management module in CSM so we can wave bye-bye to those spreadsheets!",source:"@site/labs/complaint-vancouver/exercise_5-build/50-create_automation.md",sourceDirName:"exercise_5-build",slug:"/exercise_5-build/automation",permalink:"/labs/complaint-vancouver/exercise_5-build/automation",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"automation",title:"Create Flow in Flow Designer",hide_table_of_contents:!0,sidebar_label:"Create Automation",sidebar_position:3,draft:!1},sidebar:"labcomplaintvancouver",previous:{title:"Create Investigations Workspace",permalink:"/labs/complaint-vancouver/exercise_5-build/workspace"},next:{title:"Lab Review",permalink:"/labs/complaint-vancouver/review"}},s={},p=[],d={toc:p},c="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this exercise, we'll tie our investigation process together with the Complaints Management module in CSM so we can wave bye-bye to those spreadsheets!"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If you haven't done so already, close your workspace and go back to your App Engine Studio window. In the ",(0,r.kt)("strong",{parentName:"li"},"Logis and Automation")," section, click on ",(0,r.kt)("strong",{parentName:"li"},"Add"),(0,r.kt)("img",{src:a(3796).Z,width:"1319",height:"927"}))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"There are several options for automation when building an app as a low code developer on the ServiceNow platform, but today we will be focusing on workflow. So on this screen, choose ",(0,r.kt)("strong",{parentName:"li"},"Flow")," from the options\n",(0,r.kt)("img",{src:a(6595).Z,width:"1319",height:"927"}))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"To help you get started quickly, we've provided a set of common flows we see our customers building. In addition to that, we've built these flows with pre-existing integrations to collboration tools like Teams. We, however, will be starting from scratch. Click on ",(0,r.kt)("strong",{parentName:"li"},"Build from scratch"),(0,r.kt)("img",{src:a(53658).Z,width:"1081",height:"793"}))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the following values for your new flow:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Complaint Investigation Flow")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Workflow that gets triggered when a new complaint is received and requires investigation.")))),(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Continue"),"\n",(0,r.kt)("img",{src:a(30481).Z,width:"1081",height:"862"})))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Success! Your flow is ready")," screen, click ",(0,r.kt)("strong",{parentName:"li"},"Edit this flow"),(0,r.kt)("img",{src:a(39630).Z,width:"1081",height:"862"}))),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"This will open ",(0,r.kt)("strong",{parentName:"li"},"Flow Designer")," where we can define our trigger and our resultant actions in our workflow. Click ",(0,r.kt)("strong",{parentName:"li"},"Add a trigger"),(0,r.kt)("img",{src:a(18459).Z,width:"1043",height:"862"}))),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("strong",{parentName:"li"},"Created or Updated")," in the dropdown.\n",(0,r.kt)("img",{src:a(34791).Z,width:"1043",height:"862"}))),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To complete the trigger confguration, set the following values and click ",(0,r.kt)("strong",{parentName:"p"},"Done"),":"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Table"),(0,r.kt)("td",{parentName:"tr",align:null},"Complaint Case ","[sn_complaint_case]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Condition"),(0,r.kt)("td",{parentName:"tr",align:null},"Requires Investigation is True")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(14690).Z,width:"1072",height:"862"})))),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Now that we know when our flow is going to execute, let's tell it what we want it to do. Under ",(0,r.kt)("strong",{parentName:"li"},"Actions")," click the ",(0,r.kt)("strong",{parentName:"li"},"+ Add an Action, Flow Logic, or Subflow")," then click ",(0,r.kt)("strong",{parentName:"li"},"Action"),(0,r.kt)("img",{src:a(36951).Z,width:"1072",height:"857"}))),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Search Actions")," field, type ",(0,r.kt)("strong",{parentName:"li"},"Create Record")," and choose the ",(0,r.kt)("strong",{parentName:"li"},"Create Record")," option listed in the right column\n",(0,r.kt)("img",{src:a(1254).Z,width:"1072",height:"857"}))),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the Table field to our ",(0,r.kt)("strong",{parentName:"p"},"Complaint Investigation")," table we created in our first exercise in App Engine Studio. Then set the ",(0,r.kt)("strong",{parentName:"p"},"Fields")," as shown below then click ",(0,r.kt)("strong",{parentName:"p"},"Done")," when complete:"),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Values highlighted in bold below indicate we are dot walking to the fields we need in our workflow")),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parent"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Trigger - Record Created or Updated - Complaint Case Record"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subject"),(0,r.kt)("td",{parentName:"tr",align:null},"Investigation required for ",(0,r.kt)("strong",{parentName:"td"},"Trigger - Record Created or Updated - Complaint Case Record - Number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Trigger - Record Created or Updated - Complaint Case Record - Short Description"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contact"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Trigger - Record Created or Updated - Complaint Case Record - Contact"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Assignment Group"),(0,r.kt)("td",{parentName:"tr",align:null},"Complaints Investigation")))),(0,r.kt)("p",{parentName:"li"},"When you're finsihed, your action should look similar to this:\n",(0,r.kt)("img",{src:a(62867).Z,width:"1213",height:"858"})))),(0,r.kt)("ol",{start:12},(0,r.kt)("li",{parentName:"ol"},"Next, we want to make sure we indicate in the complaint case record that we have automatically created this investigation. This will ensure that anyone who looks at the case later will know we've taken action. Let's add a new action by clicking the ",(0,r.kt)("strong",{parentName:"li"},"+ Add an Action, Flow Logic, or Subflow")," button under the action we just created then click ",(0,r.kt)("strong",{parentName:"li"},"Action"),(0,r.kt)("img",{src:a(63636).Z,width:"1213",height:"858"}))),(0,r.kt)("ol",{start:13},(0,r.kt)("li",{parentName:"ol"},"This time we're looking for the ",(0,r.kt)("strong",{parentName:"li"},"Add Comment To Task")," action. In the Search field, type ",(0,r.kt)("strong",{parentName:"li"},"Add comment")," and select the option that appears under the ",(0,r.kt)("strong",{parentName:"li"},"Customer Serivice")," spoke\n",(0,r.kt)("img",{src:a(47702).Z,width:"1213",height:"858"}))),(0,r.kt)("ol",{start:14},(0,r.kt)("li",{parentName:"ol"},"Complete the action with the following values then click ",(0,r.kt)("strong",{parentName:"li"},"Done"),":",(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Values highlighted in bold below indicate we are dot walking to the fields we need in our workflow")),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Task ","[task]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Trigger - Record Created or Updated - Complaint Case Record"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Comment"),(0,r.kt)("td",{parentName:"tr",align:null},"Created investigation task: ",(0,r.kt)("strong",{parentName:"td"},"1 - Create Record - Complaint Investigation Record - Number"))))),"When you're finsihed, your action should look similar to this:\n",(0,r.kt)("img",{src:a(39851).Z,width:"1213",height:"858"}))),(0,r.kt)("ol",{start:15},(0,r.kt)("li",{parentName:"ol"},"Time to test! Save your flow and click the ",(0,r.kt)("strong",{parentName:"li"},"Test")," button at the top of the screen. When prompted, choose the complaint case we created earlier in our lab",(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Your complaint number may vary from the one reflected in the lab guide.")),(0,r.kt)("img",{src:a(40459).Z,width:"1131",height:"858"}))),(0,r.kt)("ol",{start:16},(0,r.kt)("li",{parentName:"ol"},"To view your test results, click the link on the pop-up\n",(0,r.kt)("img",{src:a(51387).Z,width:"1144",height:"858"}))),(0,r.kt)("ol",{start:17},(0,r.kt)("li",{parentName:"ol"},"Here you will be able to view any errors or resultant records that are created as part of your workflow. If you received errors, go back and take a look at your flow to ensure everything has been completed correctly. If it was successful, you should see ",(0,r.kt)("strong",{parentName:"li"},"Test Run - Completed")," at the top of your screen\n",(0,r.kt)("img",{src:a(5798).Z,width:"1144",height:"858"}))),(0,r.kt)("ol",{start:18},(0,r.kt)("li",{parentName:"ol"},"Finally, let's see what this looks like for Devon in her new Workspace. Go back to ",(0,r.kt)("strong",{parentName:"li"},"App Home")," and Preview the Workspace again.\n",(0,r.kt)("img",{src:a(62136).Z,width:"1144",height:"858"}))),(0,r.kt)("ol",{start:19},(0,r.kt)("li",{parentName:"ol"},"Notice there is now an unassigned Investigation for Devon awaiting her on the workspace homepage. Click on the ",(0,r.kt)("strong",{parentName:"li"},"1")," under ",(0,r.kt)("strong",{parentName:"li"},"Unassigned Investigations")," to view the list of investigations that are unnassigned\n",(0,r.kt)("img",{src:a(82354).Z,width:"1199",height:"846"}))),(0,r.kt)("ol",{start:20},(0,r.kt)("li",{parentName:"ol"},"Click on the record that appears in the list to view the newly created investigation record. Your screen should look very much like the screen below!\n",(0,r.kt)("img",{src:a(7770).Z,width:"1470",height:"969"}))),(0,r.kt)("p",null,"That's it! You've successfully created automation necessary to create a new investigation when a complaint cases requires investigation. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Next Steps for ",(0,r.kt)("strong",{parentName:"p"},"Devon"),":   "),(0,r.kt)("br",null),"In the real world, once Devon is happy with her app, she would submit the app for review and approval by the App Engine Administrators.",(0,r.kt)("br",null),(0,r.kt)("br",null),"For the purposes of our lab today, we will not cover those steps, however if you are interested in learning more about how we govern all aspects of application development in ServiceNow, please reach out to your Creator Workflows team."))}m.isMDXComponent=!0},3796:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-13-24-58-0bc1fcb7bb19a8c8a1fc76a60ce1b5f0.png"},6595:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-13-26-19-04f089189e1b08977a546f8a6503d191.png"},53658:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-13-29-39-0840be16967d31e687b9797ac0192c6b.png"},30481:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-13-31-39-928ade659d5626069d2bd061af33499c.png"},39630:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-13-35-15-2f2d0a3e5ab1ee08df871457e086000a.png"},18459:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-13-37-15-07ddca048bcf01ad398e9a8bb2a25e31.png"},34791:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-13-39-10-1aa729bf0b75bd8cb022a11ace086634.png"},14690:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-13-42-24-bfc5c05ba7c40efaa9eb6c084e036928.png"},36951:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-13-44-58-c0c9cd7c6d4f086ad2c3c27d8d43f896.png"},1254:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-13-47-12-497324ccd12678eb38dbe06098328645.png"},62867:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-14-02-06-6bc76b78d8ddc9f61415f99de27137f9.png"},47702:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-14-07-58-3b1ecbfcab62024e4864a79bb0ff2da1.png"},63636:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-14-09-28-570c92a56db7763818f0a860b0623aae.png"},39851:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-14-12-01-3846be731ebba2693a72d3d1ed7ae174.png"},40459:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-14-14-42-20df65987a968458790ed23faa5d3348.png"},51387:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-14-18-12-d17548a589ffae1809927db1b5ccb7ab.png"},5798:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-14-19-46-569107f93d9a3be08033184672e3c148.png"},62136:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-14-23-28-5f3f017bacfe1572bf803beba6d3c19c.png"},82354:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-14-26-05-f058786d045fdc94129b443437dee4ce.png"},7770:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2023-09-27-14-57-05-6dd89b9ebdfa4a8b0e9301a0561f70fc.png"}}]);