(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{25:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var r=n(30),a={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"},c=function(e){r.b.error(e,a)},o=function(e){r.b.warn(e,a)}},27:function(e,t,n){"use strict";var r=n(40),a=n.n(r),c=n(1);t.a=function(e){var t=e.title,n=void 0===t?"":t,r=e.children;return Object(c.jsxs)("div",{className:a.a.container,children:[n&&Object(c.jsx)("h2",{className:a.a.title,children:n}),r]})}},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return l}));var r=n(6),a=n(37),c=n(16),o=Object(a.a)({reducerPath:"contacts",baseQuery:Object(c.d)({baseUrl:"https://connections-api.herokuapp.com/contacts",prepareHeaders:function(e,t){var n=(0,t.getState)().auth.token;return n&&e.set("authorization","Bearer ".concat(n)),e}}),tagTypes:["contacts"],endpoints:function(e){return{getContacts:e.query({query:function(){return"/"},providesTags:function(e){return e?[].concat(Object(r.a)(e.map((function(e){return{type:"contacts",id:e.id}}))),["contacts"]):["contacts"]}}),addContact:e.mutation({query:function(e){return{url:"/",method:"POST",body:e}},invalidatesTags:["contacts"]}),deleteContact:e.mutation({query:function(e){return{url:"/".concat(e),method:"DELETE"}},invalidatesTags:function(e){return e?[{type:"contacts",id:e.id}]:["contacts"]}}),editContact:e.mutation({query:function(e){var t=e.contact,n=e.id;return{url:"/".concat(n),method:"PATCH",body:t}},invalidatesTags:function(e){return e?Object(r.a)(e.map((function(e){return{type:"contacts",id:e.id}}))):["contacts"]}})}}}),s=o.useGetContactsQuery,i=o.useAddContactMutation,u=o.useDeleteContactMutation,l=o.useEditContactMutation},40:function(e,t,n){e.exports={container:"Container_container__YdtW5",title:"Container_title__UrP9o"}},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){var t,n,r;return null!==(t=null===e||void 0===e||null===(n=e.auth)||void 0===n||null===(r=n.user)||void 0===r?void 0:r.name)&&void 0!==t?t:null},a=function(e){var t,n;return null!==(t=null===e||void 0===e||null===(n=e.auth)||void 0===n?void 0:n.token)&&void 0!==t?t:""}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(2),a=Object(r.createAction)("filter")},61:function(e,t,n){},62:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var r,a,c,o=n(0),s=n.n(o),i=n(26),u=n.n(i),l=n(12),d=n(20),b=(n(60),n(61),n(3)),j=(n(62),n(7)),p=n(41),O=n(13),h=n(5),f=n.n(h),m=n(37),g=n(16),x=Object(m.a)({reducerPath:"users",baseQuery:Object(g.d)({baseUrl:"https://connections-api.herokuapp.com/users",prepareHeaders:function(e,t){var n=(0,t.getState)().auth.token;return n&&e.set("authorization","Bearer ".concat(n)),e}}),tagTypes:["user"],endpoints:function(e){return{registerUser:e.mutation({queryFn:function(){var e=Object(O.a)(f.a.mark((function e(t,n,r,a){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({url:"/signup",method:"POST",body:t}).then((function(e){if(e.error)switch(e.error.status){case 400:return{error:{status:400,data:"Wrong email or passwird"}};case 404:return{error:{status:404,data:"Not found"}};case 500:return{error:{status:500,data:"Servers error"}};default:return e.error}return e})).catch((function(e){return e}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),invalidatesTags:["user"]}),loginUser:e.mutation({queryFn:function(){var e=Object(O.a)(f.a.mark((function e(t,n,r,a){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({url:"/login",method:"POST",body:t}).then((function(e){if(e.error)switch(e.error.status){case 400:return{error:{status:400,data:"Wrong email or passwird"}};case 404:return{error:{status:404,data:"Not found"}};default:return e.error}return e})).catch((function(e){return e}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),invalidatesTags:["user"]}),logoutUser:e.mutation({queryFn:function(){var e=Object(O.a)(f.a.mark((function e(t,n,r,a){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({url:"/logout",method:"POST"}).then((function(e){if(e.error)switch(e.error.status){case 400:return{error:{status:400,data:"Wrong email or passwird"}};case 404:return{error:{status:404,data:"Not found"}};default:return e.error}return e})).catch((function(e){return e}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}()})}}}),v=x.useRegisterUserMutation,y=x.useLoginUserMutation,w=x.useLogoutUserMutation,k=n(27),S=n(25),C=n(9),q=n(10),P=q.a.ul(r||(r=Object(C.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-left: auto;\n"]))),T=q.a.li(a||(a=Object(C.a)(["\n  padding: 20px 20px;\n  &:not(last-child) {\n    margin-right: 20px;\n  }\n"]))),E=q.a.div(c||(c=Object(C.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),F=n(1);function L(){var e=Object(l.e)(p.b),t=w(),n=Object(j.a)(t,2),r=n[0],a=n[1].error,c=Object(b.g)();return console.log(c),console.log(c.pathname),console.log(e),Object(o.useEffect)((function(){a&&Object(S.a)(a)}),[a]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(k.a,{children:Object(F.jsxs)(E,{children:[e&&!c.pathname.includes("add")&&Object(F.jsx)(d.b,{to:"".concat(c.pathname,"/add"),children:"Add contact"}),Object(F.jsx)(P,{children:e?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(T,{children:["Hello, ",e]}),Object(F.jsx)(T,{children:Object(F.jsx)(d.b,{to:"/",onClick:function(){r()},children:"LogOut"})})]}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(T,{children:Object(F.jsx)(d.b,{to:"register",children:"Register"})}),Object(F.jsx)(T,{children:Object(F.jsx)(d.b,{to:"login",children:"LogIn"})})]})})]})}),Object(F.jsx)(b.b,{})]})}var I,U,M,R,N,z,A=n(15),_=n(38),H=q.a.form(I||(I=Object(C.a)(["\n  width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n"]))),B=q.a.label(U||(U=Object(C.a)(["\n  position: relative;\n  display: block;\n  margin-bottom: 30px;\n  padding-top: 20px;\n"]))),W=q.a.input(M||(M=Object(C.a)(["\n  display: block;\n  padding: 4px 20px;\n  width: 100%;\n  border-style: none;\n  border-bottom-style: groove;\n  border-bottom: 3px solid wheat;\n  background: transparent;\n  outline: none;\n  color: white;\n"]))),J=q.a.span(R||(R=Object(C.a)(["\n  display: block;\n  position: absolute;\n  bottom: 8px;\n  left: 20px;\n  font-size: 18px;\n  transition: 250ms linear;\n\n  input:focus + &,\n  input:not(:placeholder-shown) + & {\n    bottom: 80%;\n  }\n"]))),Q=q.a.input(N||(N=Object(C.a)(["\n  padding: 10px;\n  border: 1px solid wheat;\n  border-radius: 10px;\n  background-color: transparent;\n  color: wheat;\n\n  &:not(:last-child) {\n    margin-right: 30px;\n  }\n\n  &:hover,\n  &:focus {\n    color: rgb(6, 255, 247);\n    border-color: rgb(6, 255, 247);\n  }\n"]))),D=q.a.span(z||(z=Object(C.a)(["\n  position: absolute;\n  top: 108%;\n  left: 20%;\n  color: rgb(242, 111, 111);\n  font-size: 14px;\n"])));function G(){var e,t,n,r,a=Object(o.useState)(null!==(e=localStorage.getItem("email"))&&void 0!==e?e:""),c=Object(j.a)(a,2),s=c[0],i=c[1],u=Object(o.useState)(""),l=Object(j.a)(u,2),d=l[0],p=l[1],O=Object(_.a)(),h=O.register,f=O.handleSubmit,m=O.formState.errors,g=Object(b.h)(),x=y(),v=Object(j.a)(x,2),w=(v[0],v[1]),k=w.isLoading,C=w.isSuccess,q=w.error,P=function(e){var t=e.target.value;switch(e.target.name){case"email":i(t),localStorage.setItem("email",t);break;case"password":p(t);break;default:return}};return Object(o.useEffect)((function(){q&&Object(S.a)(q.data)}),[q]),Object(o.useEffect)((function(){C&&(i(""),p(""),g("/contacts"))}),[C,g]),console.log("ERROR FORM",m),console.log(null===m||void 0===m||null===(t=m.password)||void 0===t?void 0:t.type),Object(F.jsxs)(F.Fragment,{children:[k&&Object(F.jsx)("h3",{children:"Loading...."}),Object(F.jsxs)(H,{onSubmit:f((function(e){console.log(JSON.stringify(e))})),children:[Object(F.jsxs)(B,{children:[Object(F.jsx)(W,Object(A.a)(Object(A.a)({type:"email"},h("email",{required:!0})),{},{onChange:P,value:s,placeholder:" "})),Object(F.jsx)(J,{children:"E-mail"}),"required"===(null===m||void 0===m||null===(n=m.email)||void 0===n?void 0:n.type)&&Object(F.jsx)(D,{children:"Email is required"})]}),Object(F.jsxs)(B,{children:[Object(F.jsx)(W,Object(A.a)(Object(A.a)({type:"password"},h("password",{required:!0})),{},{onChange:P,value:d,placeholder:" "})),Object(F.jsx)(J,{children:"Password"}),"required"===(null===m||void 0===m||null===(r=m.password)||void 0===r?void 0:r.type)&&Object(F.jsx)(D,{children:"Password is required"})]}),Object(F.jsx)(Q,{type:"button",onClick:function(){g("/")},value:"Cancel"}),Object(F.jsx)(Q,{type:"submit",value:"Log in"})]})]})}function Y(){return Object(F.jsxs)(k.a,{children:[Object(F.jsx)("h2",{children:"Form Login"}),Object(F.jsx)(G,{})]})}function K(){var e,t,n,r,a=Object(o.useState)(null!==(e=sessionStorage.getItem("name"))&&void 0!==e?e:""),c=Object(j.a)(a,2),s=c[0],i=c[1],u=Object(o.useState)(null!==(t=sessionStorage.getItem("email"))&&void 0!==t?t:""),l=Object(j.a)(u,2),d=l[0],p=l[1],h=Object(o.useState)(""),m=Object(j.a)(h,2),g=m[0],x=m[1],y=Object(_.a)(),w=y.register,k=y.handleSubmit,C=y.formState.errors,q=Object(b.h)(),P=v(),T=Object(j.a)(P,2),E=T[0],L=T[1],I=L.isLoading,U=L.error,M=L.isSuccess,R=function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E({name:s,email:d,password:g});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=e.target.value;switch(e.target.name){case"name":i(t),sessionStorage.setItem("name",t);break;case"email":p(t),sessionStorage.setItem("email",t);break;case"password":x(t);break;default:return}};return Object(o.useEffect)((function(){U&&Object(S.a)(U.data)}),[U]),Object(o.useEffect)((function(){M&&(i(""),p(""),x(""),sessionStorage.removeItem("name"),sessionStorage.removeItem("email"),q("/contacts"))}),[M]),Object(F.jsxs)(F.Fragment,{children:[I&&Object(F.jsx)("h3",{children:"Loading...."}),Object(F.jsxs)("form",{onSubmit:k(R),children:[Object(F.jsxs)("label",{children:["name",Object(F.jsx)("input",Object(A.a)(Object(A.a)({},w("name")),{},{value:s,onChange:N}))]}),Object(F.jsxs)("label",{children:["email",Object(F.jsx)("input",Object(A.a)(Object(A.a)({type:"email"},w("email",{required:!0})),{},{onChange:N,value:d})),"required"===(null===(n=C.email)||void 0===n?void 0:n.type)&&"Email is required"]}),Object(F.jsxs)("label",{children:["password",Object(F.jsx)("input",Object(A.a)(Object(A.a)({type:"password"},w("password",{required:!0})),{},{onChange:N,value:g})),"required"===(null===(r=C.password)||void 0===r?void 0:r.type)&&"Password is required"]}),Object(F.jsx)("button",{type:"button",onClick:function(){sessionStorage.removeItem("name"),sessionStorage.removeItem("email"),q("/")},children:"Cancel"}),Object(F.jsx)("button",{type:"submit",children:"Register"})]})]})}function V(){return Object(F.jsxs)(k.a,{children:[Object(F.jsx)("h2",{children:"Form Register"}),Object(F.jsx)(K,{})]})}var X=Object(o.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,102))}));function Z(){return Object(F.jsx)("div",{className:"App",children:Object(F.jsx)(o.Suspense,{fallback:Object(F.jsx)("p",{children:"Loading...."}),children:Object(F.jsxs)(b.e,{children:[Object(F.jsxs)(b.c,{path:"/",element:Object(F.jsx)(L,{}),children:[Object(F.jsx)(b.c,{path:"login",element:Object(F.jsx)(Y,{})}),Object(F.jsx)(b.c,{path:"register",element:Object(F.jsx)(V,{})}),Object(F.jsx)(b.c,{path:"contacts/*",element:Object(F.jsx)(X,{})})]}),Object(F.jsx)(b.c,{path:"*",element:Object(F.jsx)(b.a,{to:"/"})})]})})})}var $,ee=n(14),te=n(6),ne=n(2),re=n(49),ae=n(22),ce=n(48),oe=n.n(ce),se=(n(67),n(35)),ie=n(45),ue=Object(ne.createReducer)("",Object(ee.a)({},ie.a,(function(e,t){return t.payload}))),le=Object(ne.createSlice)({name:"auth",initialState:{token:null,user:null},extraReducers:function(e){e.addMatcher(x.endpoints.registerUser.matchFulfilled,(function(e,t){var n=t.payload;e.token=n.token,e.user=n.user})),e.addMatcher(x.endpoints.loginUser.matchFulfilled,(function(e,t){var n=t.payload;e.token=n.token,e.user=n.user})),e.addMatcher(x.endpoints.logoutUser.matchFulfilled,(function(e,t){t.payload;e.token=null,e.user=null}))}}),de={key:"root",storage:oe.a},be=Object(ae.g)(de,le.reducer),je=Object(ne.configureStore)({reducer:($={},Object(ee.a)($,x.reducerPath,x.reducer),Object(ee.a)($,se.a.reducerPath,se.a.reducer),Object(ee.a)($,le.name,be),Object(ee.a)($,"filter",ue),$),middleware:function(e){return[].concat(Object(te.a)(e({serializableCheck:{ignoredActions:[ae.a,ae.f,ae.b,ae.c,ae.d,ae.e]}})),[se.a.middleware,x.middleware])},devTools:!1});Object(re.setupListeners)(je.dispatch);var pe=Object(ae.h)(je),Oe=n(30),he=(n(70),n(50));u.a.render(Object(F.jsx)(s.a.StrictMode,{children:Object(F.jsx)(l.a,{store:je,children:Object(F.jsxs)(he.a,{loader:null,persistor:pe,children:[Object(F.jsx)(d.a,{children:Object(F.jsx)(Z,{})}),Object(F.jsx)(Oe.a,{})]})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.1b1aee6a.chunk.js.map