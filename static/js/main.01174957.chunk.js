(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),i=c.n(a),n=c(16),l=c.n(n),o=(c(23),c(9)),r=c(2),d=[{name:"e-Commerce",description:"",last_updated:"",status:"in construction",link:"/ecommrcehome"},{name:"Entertainment",description:"",last_updated:"",status:"in construction",link:""},{name:"Messaging",description:"",last_updated:"",status:"in construction",link:""},{name:"Speech Recognition",description:"",last_updated:"",status:"in construction",link:""},{name:"Todolist",description:"",last_updated:"",status:"in construction",link:"/todolist"},{name:"School Website",description:"",last_updated:"",status:"in construction",link:""}],j=(c(24),c.p+"static/media/lap.c206978e.jpg");c(25);var b=function(e){var t=Object(a.useRef)(null),c=Object(a.useRef)(null);return Object(a.useEffect)((function(){})),Object(s.jsxs)("nav",{children:[Object(s.jsxs)("div",{className:"brand",ref:c,style:{color:"chocolate"},children:["Kenny code",Object(s.jsxs)("div",{className:"position-absolute",onClick:function(){"inline"===t.current.style.display?t.current.style.display="none":t.current.style.display="inline"},style:{right:"2%",top:"0"},children:[" ",Object(s.jsx)("i",{className:"fa fa-bars"})," "]})]}),Object(s.jsxs)("div",{className:"links",ref:t,children:[Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("i",{className:"fa fa-github"})}),Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("i",{className:"fa fa-twitter"})}),Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("i",{className:"fa fa-whatsapp"})}),Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("i",{className:"fa fa-instagram"})})]})]})},u=c(10);c(26);var h=function(e){var t=Object(a.useState)([{value:"",bool:void 0,clicked:!1},{value:"",bool:void 0,clicked:!1},{value:"",bool:void 0,clicked:!1},{value:"",bool:void 0,clicked:!1},{value:"",bool:void 0,clicked:!1},{value:"",bool:void 0,clicked:!1},{value:"",bool:void 0,clicked:!1},{value:"",bool:void 0,clicked:!1},{value:"",bool:void 0,clicked:!1}]),c=Object(u.a)(t,2),i=c[0],n=c[1],l=Object(a.useState)(!0),o=Object(u.a)(l,2),r=o[0],d=o[1],j=Object(a.useState)(!1),b=Object(u.a)(j,2),h=b[0],x=b[1];return Object(s.jsxs)("div",{className:"h-auto w-100 p-2 bg-light text-dark",style:{width:"200px"},children:["Play Tic Tac Toe",Object(s.jsxs)("div",{className:"k-row",style:{flexWrap:"wrap",display:h?"flex":"none",height:"200px",width:"200px"},children:[i.map((function(e,t){var c=e.value;e.bool;return Object(s.jsx)("div",{className:"boxes text-dark text-center",onClick:function(){!function(e){var t=i,c=t[e];c.clicked||(r?(d(!1),c.value="X"):(d(!0),c.value="O"),c.bool=r,c.clicked=!0),n(t)}(t)},style:{flex:"33.33%",height:"40px",width:"40px"},children:c},t)}))," ",Object(s.jsx)("br",{}),r?"Player 1  X":"Player 2  O"]})," ",Object(s.jsx)("br",{}),Object(s.jsxs)("button",{className:"btn border text-dark",onClick:function(){x(!h)},children:[h?"End":"Start"," game"]})]})};var x=function(e){var t=Object(a.useRef)(null);return Object(s.jsxs)("section",{className:"W-100 bg-white",ref:t,children:[Object(s.jsx)("div",{className:"design"}),Object(s.jsxs)("header",{className:"w-100 ",children:[Object(s.jsx)(b,{}),Object(s.jsxs)("div",{className:"k-row w-100 mx-0 block",children:[Object(s.jsxs)("div",{className:"left col-lg-6 text-center",style:{},children:[Object(s.jsx)("b",{className:"h2",children:"Web Developer "}),Object(s.jsx)("h5",{children:"React and Nodejs Skilled"}),Object(s.jsxs)("div",{className:"btns center",children:[Object(s.jsx)("a",{href:"https://wa.link/rhfeu4",children:Object(s.jsx)("button",{className:"btn rounded-pill border mx-2 text-white",style:{backgroundImage:"inherit"},children:"Book me"})}),Object(s.jsx)("a",{href:"https://wa.link/rhfeu4",children:Object(s.jsx)("button",{className:"btn rounded-pill border mx-2 text-white",style:{backgroundImage:"inherit"},children:"Tutorial"})})]})]}),Object(s.jsx)("div",{className:"right center col-lg-6 p-1",style:{height:"auto"},children:Object(s.jsx)(h,{len:t})})]}),Object(s.jsx)("a",{href:"#projects",className:"d-sm",children:Object(s.jsx)("button",{className:"btn position-absolute",style:{left:"49%",bottom:"0"},children:Object(s.jsx)("i",{className:"fa fa-arrow-down",style:{color:"wheat"}})})})]}),Object(s.jsx)("div",{className:"body bg-light",style:{zIndex:"100"},id:"projects",children:Object(s.jsxs)("div",{className:"main pb-3",children:[Object(s.jsx)("h3",{className:"py-1 position-relative text-white",style:{zIndex:"100"},children:"  Here are some of my works"}),Object(s.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:d.map((function(e,t){var c=e.name,a=(e.description,e.last_updated,e.status),i=e.link;return Object(s.jsx)(o.b,{to:i,className:"col-lg-4 col-sm-6",color:"black",children:Object(s.jsx)("div",{className:"text-right border rounded my-1 p-3 k-cus pro bg-white h-50px mr-1 position-relative",style:{fontSize:"15px",height:"200px",backgroundImage:"url(".concat(j,")")},children:Object(s.jsxs)("div",{className:"project",children:["Project ",t," : ",c," ",Object(s.jsx)("br",{}),"--",a]})})},t)}))})]})}),Object(s.jsx)("div",{className:"position-relative bg-light",children:Object(s.jsx)("div",{className:"svg "})}),Object(s.jsx)("footer",{className:"w-100 center",children:"\xa9 copyright 2021"})]})};c(32),c(33);var m=function(){return Object(s.jsx)(o.a,{basename:"/kenny",children:Object(s.jsx)(r.c,{children:Object(s.jsx)(r.a,{exact:!0,path:"/",component:x})})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),i(e),n(e)}))};l.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),p()}},[[34,1,2]]]);
//# sourceMappingURL=main.01174957.chunk.js.map