(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),i=c.n(a),l=c(16),n=c.n(l),o=(c(23),c(9)),r=c(2),d=[{name:"e-Commerce",description:"",last_updated:"",status:"in construction",link:"/ecommrcehome"},{name:"Entertainment",description:"",last_updated:"",status:"in construction",link:""},{name:"Messaging",description:"",last_updated:"",status:"in construction",link:""},{name:"Speech Recognition",description:"",last_updated:"",status:"in construction",link:""},{name:"Todolist",description:"",last_updated:"",status:"in construction",link:"/todolist"},{name:"School Website",description:"",last_updated:"",status:"in construction",link:""}];c(24);var j=function(e){return Object(s.jsxs)("nav",{className:"h-50px d-flex position-relative w-100",children:[Object(s.jsx)("div",{className:"brand",style:{color:"chocolate"},children:"Kenny code "}),Object(s.jsxs)("div",{className:"links position-absolute",children:[Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("i",{className:"fa fa-facebook",style:{font:"24px"}})}),Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("i",{className:"fa fa-twitter",style:{font:"24px"}})}),Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("i",{className:"fa fa-whatsapp",style:{font:"24px"}})}),Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("i",{className:"fa fa-instagram",style:{font:"24px"}})})]})]})},b=c(10);var h=function(e){var t=Object(a.useState)([{value:"",bool:void 0,clicked:!1},{value:"",bool:void 0,clicked:!1},{value:"",bool:void 0,clicked:!1},{value:"",bool:void 0,clicked:!1},{value:"",bool:void 0,clicked:!1},{value:"",bool:void 0,clicked:!1},{value:"",bool:void 0,clicked:!1},{value:"",bool:void 0,clicked:!1},{value:"",bool:void 0,clicked:!1}]),c=Object(b.a)(t,2),i=c[0],l=c[1],n=Object(a.useState)(!0),o=Object(b.a)(n,2),r=o[0],d=o[1],j=Object(a.useState)(!1),h=Object(b.a)(j,2),u=h[0],x=h[1];return Object(s.jsxs)("div",{className:"h-100",style:{width:"200px"},children:[r?"Player 1  X":"Player 2  O",Object(s.jsx)("div",{className:"k-row",style:{flexWrap:"wrap",display:u?"flex":"none"},children:i.map((function(e,t){var c=e.value;e.bool;return Object(s.jsx)("div",{className:" border bg-primary",onClick:function(){!function(e){var t=i,c=t[e];c.clicked||(r?(d(!1),c.value="X"):(d(!0),c.value="O"),c.bool=r,c.clicked=!0),l(t)}(t)},style:{flex:"33.33%",height:"40px",width:"40px"},children:c})}))}),Object(s.jsx)("button",{className:"btn border m-2",style:{display:u?"none":"block"},onClick:function(){x(!0)},children:"Start game"})]})};var u=function(e){var t=Object(a.useRef)(null);return Object(s.jsxs)("section",{className:"W-100 bg-white",ref:t,children:[Object(s.jsxs)("header",{className:"w-100  bg-light",children:[Object(s.jsx)(j,{}),Object(s.jsxs)("div",{className:"position-relative k-row w-100 mx-0",style:{top:"10%"},children:[Object(s.jsx)("div",{className:"col-lg-6 center",children:Object(s.jsxs)("div",{className:"text-white",children:[Object(s.jsx)("b",{className:"h2",style:{font:"60px cursive"},children:"Web Developer "}),Object(s.jsx)("h5",{children:"React and Nodejs Skilled"}),"Hi there, my name is Salaudeen Kehinde Taofeek. ",Object(s.jsx)("br",{}),"I'm a Full Stack Web developer ",Object(s.jsx)("br",{}),"with  2 years of experience ",Object(s.jsx)("br",{}),"adaptable to any other language",Object(s.jsx)("button",{className:"btn rounded-pill border text-white px-3 bookme",style:{left:"20%",backgroundImage:"inherit"},children:"Book me"})]})}),Object(s.jsx)("div",{className:"col-lg-6 m-auto center",style:{height:"300px"},children:Object(s.jsx)(h,{len:t})})]}),Object(s.jsx)("a",{href:"#projects",children:Object(s.jsx)("button",{className:"btn position-absolute",style:{left:"49%",bottom:"2%"},children:Object(s.jsx)("i",{className:"fa fa-arrow-down",style:{color:"wheat"}})})})]}),Object(s.jsx)("div",{class:"contain",children:Object(s.jsx)("svg",{viewBox:"0 0 500 500",preserveAspectRatio:"xMinYMin meet",children:Object(s.jsx)("path",{d:"M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z",style:{stroke:"none",fill:"#29cfcb"}})})}),Object(s.jsx)("div",{className:"bg-light",style:{zIndex:"100"},id:"projects",children:Object(s.jsxs)("div",{className:"main pb-3",children:[Object(s.jsx)("h3",{className:"py-1 position-relative text-white",style:{zIndex:"100"},children:"  Here are some of my works"}),Object(s.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:d.map((function(e,t){var c=e.name,a=(e.description,e.last_updated,e.status),i=e.link;return Object(s.jsx)(o.b,{to:i,className:"col-lg-4 col-sm-6",color:"black",children:Object(s.jsx)("div",{className:"border rounded my-1 p-3 k-cus pro bg-white h-50px mr-1 position-relative",style:{fontSize:"15px",height:"200px"},children:Object(s.jsxs)("div",{className:"project",children:["Project ",t," : ",c," ",Object(s.jsx)("br",{}),"--",a]})})},t)}))})]})}),Object(s.jsx)("footer",{className:"w-100 center",children:"Hope you like it"})]})};c(30),c(31);var x=function(){return Object(s.jsx)(o.a,{children:Object(s.jsx)(r.c,{children:Object(s.jsx)(r.a,{exact:!0,path:"/",component:u})})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,l=t.getTTFB;c(e),s(e),a(e),i(e),l(e)}))};n.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),p()}},[[32,1,2]]]);
//# sourceMappingURL=main.2e829bd6.chunk.js.map