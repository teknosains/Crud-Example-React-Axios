(this["webpackJsonplearn-react-crud"]=this["webpackJsonplearn-react-crud"]||[]).push([[0],{27:function(e,t,r){},48:function(e,t,r){"use strict";r.r(t);var n=r(19),c=r.n(n),s=(r(27),r(4)),a=r.n(s),i=r(3),d=r.n(i),o=r(6),u=r(21),j=r(22),l=r(2),b=r(20),h=r.n(b),O=r(0);function p(e,t){switch(t.type){case"LOAD_DATA":return Object(l.a)(Object(l.a)({},e),{},{users:[],isLoading:!0});case"DATA_LOADED":return Object(l.a)(Object(l.a)({},e),{},{users:t.users,isLoading:!1});case"ADD_USER":return Object(l.a)(Object(l.a)({},e),{},{isAddUser:!0});case"CANCEL_ADD_USER":return Object(l.a)(Object(l.a)({},e),{},{isAddUser:!1});case"SAVE_ADD_USER":var r=Object(j.a)(e.users);return r.push(t.newUser),Object(l.a)(Object(l.a)({},e),{},{isAddUser:!1,users:r});default:return e}}var f=function(e){console.log("render home");var t=Object(s.useReducer)(p,{users:[],isLoading:!1,isError:!1,isAddUser:!1,newUser:{}}),r=Object(u.a)(t,2),n=r[0],c=r[1],a=function(){var e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"LOAD_DATA"}),e.next=3,h.a.get("https://fakestoreapi.com/users?limit=5");case 3:(t=e.sent).data.length&&c({type:"DATA_LOADED",users:t.data});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(o.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("fake addd"),t=Math.floor(100*Math.random()),r={id:t,username:"Username".concat(t),email:"".concat(t,"@gmail.com"),phone:"081223".concat(t)},c({type:"SAVE_ADD_USER",newUser:r});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert("Fake update");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(o.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert("Fake delete");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("fieldset",{style:{width:700,marginLeft:300,marginTop:100},children:[Object(O.jsx)("legend",{children:"Welcome, "}),Object(O.jsx)("button",{onClick:a,children:n.isLoading?"Loading":"Load Data"}),Object(O.jsx)("button",{style:{float:"right",backgroundColor:"green",borderColor:"green"},onClick:function(){return c({type:"ADD_USER"})},children:"Add User"}),Object(O.jsx)("hr",{}),n.isAddUser&&Object(O.jsxs)("form",{style:{border:"1px solid #ddd",padding:10},children:[Object(O.jsx)("h5",{children:Object(O.jsx)("i",{children:"Data random will be added..."})}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{onClick:i,children:"Save"}),Object(O.jsx)("button",{style:{marginLeft:20,backgroundColor:"red",borderColor:"red"},onClick:function(){return c({type:"CANCEL_ADD_USER"})},children:"Cancel"}),Object(O.jsx)("br",{})]}),Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"User ID"}),Object(O.jsx)("th",{children:"Username"}),Object(O.jsx)("th",{children:"Email"}),Object(O.jsx)("th",{children:"Phone"}),Object(O.jsx)("th",{children:"Action"})]})}),Object(O.jsx)("tbody",{children:n.users.length>0&&n.users.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.id}),Object(O.jsx)("td",{children:e.username}),Object(O.jsx)("td",{children:e.email}),Object(O.jsx)("td",{children:e.phone}),Object(O.jsxs)("td",{children:[Object(O.jsx)("a",{href:"#!",onClick:j,children:"Edit"}),"\xa0|\xa0",Object(O.jsx)("a",{href:"#!",onClick:function(){return l(e.id)},children:"Delete"})]})]},e.id)}))})]})]})},x=function(){return Object(O.jsx)(a.a.Fragment,{children:Object(O.jsx)(f,{})})};c.a.render(Object(O.jsx)(x,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.d48d922c.chunk.js.map