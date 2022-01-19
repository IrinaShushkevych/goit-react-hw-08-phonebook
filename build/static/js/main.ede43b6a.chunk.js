(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{23:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s}));var n=r(28),a={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"},c=function(e){n.b.error(e,a)},s=function(e){n.b.warn(e,a)}},25:function(e,t,r){"use strict";var n=r(40),a=r.n(n),c=r(1);t.a=function(e){var t=e.title,r=void 0===t?"":t,n=e.children;return Object(c.jsxs)("div",{className:a.a.container,children:[r&&Object(c.jsx)("h2",{className:a.a.title,children:r}),n]})}},33:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"e",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return l}));var n=r(6),a=r(37),c=r(14),s=Object(a.a)({reducerPath:"contacts",baseQuery:Object(c.d)({baseUrl:"https://connections-api.herokuapp.com/contacts",prepareHeaders:function(e,t){var r=(0,t.getState)().auth.token;return r&&e.set("authorization","Bearer ".concat(r)),e}}),tagTypes:["contacts"],endpoints:function(e){return{getContacts:e.query({query:function(){return"/"},providesTags:function(e){return e?[].concat(Object(n.a)(e.map((function(e){return{type:"contacts",id:e.id}}))),["contacts"]):["contacts"]}}),addContact:e.mutation({query:function(e){return{url:"/",method:"POST",body:e}},invalidatesTags:["contacts"]}),deleteContact:e.mutation({query:function(e){return{url:"/".concat(e),method:"DELETE"}},invalidatesTags:function(e){return e?[{type:"contacts",id:e.id}]:["contacts"]}}),editContact:e.mutation({query:function(e){var t=e.contact,r=e.id;return{url:"/".concat(r),method:"PATCH",body:t}},invalidatesTags:function(e){return e?Object(n.a)(e.map((function(e){return{type:"contacts",id:e.id}}))):["contacts"]}})}}}),o=s.useGetContactsQuery,i=s.useAddContactMutation,u=s.useDeleteContactMutation,l=s.useEditContactMutation},40:function(e,t,r){e.exports={container:"Container_container__YdtW5",title:"Container_title__UrP9o"}},41:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n=function(e){var t,r,n;return null!==(t=null===e||void 0===e||null===(r=e.auth)||void 0===r||null===(n=r.user)||void 0===n?void 0:n.name)&&void 0!==t?t:""},a=function(e){var t,r;return null!==(t=null===e||void 0===e||null===(r=e.auth)||void 0===r?void 0:r.token)&&void 0!==t?t:""}},45:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(2),a=Object(n.createAction)("filter")},61:function(e,t,r){},62:function(e,t,r){},71:function(e,t,r){"use strict";r.r(t);var n,a,c=r(0),s=r.n(c),o=r(24),i=r.n(o),u=r(11),l=r(18),d=(r(60),r(61),r(3)),j=(r(62),r(7)),b=r(41),O=r(9),h=r(4),f=r.n(h),p=r(37),m=r(14),g=Object(p.a)({reducerPath:"users",baseQuery:Object(m.d)({baseUrl:"https://connections-api.herokuapp.com/users",prepareHeaders:function(e,t){var r=(0,t.getState)().auth.token;return r&&e.set("authorization","Bearer ".concat(r)),e}}),tagTypes:["user"],endpoints:function(e){return{registerUser:e.mutation({queryFn:function(){var e=Object(O.a)(f.a.mark((function e(t,r,n,a){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({url:"/signup",method:"POST",body:t}).then((function(e){if(e.error)switch(e.error.status){case 400:return{error:{status:400,data:"Wrong email or passwird"}};case 404:return{error:{status:404,data:"Not found"}};case 500:return{error:{status:500,data:"Servers error"}};default:return e.error}return e})).catch((function(e){return e}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}(),invalidatesTags:["user"]}),loginUser:e.mutation({queryFn:function(){var e=Object(O.a)(f.a.mark((function e(t,r,n,a){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({url:"/login",method:"POST",body:t}).then((function(e){if(e.error)switch(e.error.status){case 400:return{error:{status:400,data:"Wrong email or passwird"}};case 404:return{error:{status:404,data:"Not found"}};default:return e.error}return e})).catch((function(e){return e}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}(),invalidatesTags:["user"]}),logoutUser:e.mutation({queryFn:function(){var e=Object(O.a)(f.a.mark((function e(t,r,n,a){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({url:"/logout",method:"POST"}).then((function(e){if(e.error)switch(e.error.status){case 400:return{error:{status:400,data:"Wrong email or passwird"}};case 404:return{error:{status:404,data:"Not found"}};default:return e.error}return e})).catch((function(e){return e}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}()})}}}),v=g.useRegisterUserMutation,x=g.useLoginUserMutation,y=g.useLogoutUserMutation,w=r(25),S=r(23),k=r(34),C=r(36),q=C.a.ul(n||(n=Object(k.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]))),T=C.a.li(a||(a=Object(k.a)(["\n  padding: 20px 20px;\n  &:not(last-child) {\n    margin-right: 20px;\n  }\n"]))),P=r(1);function F(){var e=Object(u.e)(b.b),t=y(),r=Object(j.a)(t,2),n=r[0],a=r[1].error;return Object(c.useEffect)((function(){a&&Object(S.a)(a)}),[a]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(w.a,{children:Object(P.jsx)(q,{children:e?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(T,{children:["Hello, ",e]}),Object(P.jsx)(T,{children:Object(P.jsx)(l.b,{to:"/",onClick:function(){n()},children:"LogOut"})})]}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(T,{children:Object(P.jsx)(l.b,{to:"register",children:"Register"})}),Object(P.jsx)(T,{children:Object(P.jsx)(l.b,{to:"login",children:"LogIn"})})]})})}),Object(P.jsx)(d.b,{})]})}var L=r(13),I=r(38);function U(){var e,t,r,n=Object(c.useState)(null!==(e=localStorage.getItem("email"))&&void 0!==e?e:""),a=Object(j.a)(n,2),s=a[0],o=a[1],i=Object(c.useState)(""),u=Object(j.a)(i,2),l=u[0],b=u[1],h=Object(I.a)(),p=h.register,m=h.handleSubmit,g=h.formState.errors,v=Object(d.h)(),y=x(),w=Object(j.a)(y,2),k=w[0],C=w[1],q=C.isLoading,T=C.isSuccess,F=C.error,U=function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k({email:"testtast4@gmail.com",password:"qwert-11"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.target.value;switch(e.target.name){case"email":o(t),localStorage.setItem("email",t);break;case"password":b(t);break;default:return}};return Object(c.useEffect)((function(){F&&Object(S.a)(F.data)}),[F]),Object(c.useEffect)((function(){T&&(o(""),b(""),v("/contacts"))}),[T,v]),Object(P.jsxs)(P.Fragment,{children:[q&&Object(P.jsx)("h3",{children:"Loading...."}),Object(P.jsxs)("form",{onSubmit:m(U),children:[Object(P.jsxs)("label",{children:["email",Object(P.jsx)("input",Object(L.a)(Object(L.a)({type:"email"},p("email",{required:!0})),{},{onChange:E,value:s})),"required"===(null===(t=g.email)||void 0===t?void 0:t.type)&&"Email is required"]}),Object(P.jsxs)("label",{children:["password",Object(P.jsx)("input",Object(L.a)(Object(L.a)({type:"password"},p("password",{required:!0})),{},{onChange:E,value:l})),"required"===(null===(r=g.password)||void 0===r?void 0:r.type)&&"Password is required"]}),Object(P.jsx)("button",{type:"button",onClick:function(){v("/")},children:"Cancel"}),Object(P.jsx)("button",{type:"submit",children:"Log in"})]})]})}function E(){return Object(P.jsxs)(w.a,{children:[Object(P.jsx)("h2",{children:"Form Login"}),Object(P.jsx)(U,{})]})}function M(){var e,t,r,n,a=Object(c.useState)(null!==(e=sessionStorage.getItem("name"))&&void 0!==e?e:""),s=Object(j.a)(a,2),o=s[0],i=s[1],u=Object(c.useState)(null!==(t=sessionStorage.getItem("email"))&&void 0!==t?t:""),l=Object(j.a)(u,2),b=l[0],h=l[1],p=Object(c.useState)(""),m=Object(j.a)(p,2),g=m[0],x=m[1],y=Object(I.a)(),w=y.register,k=y.handleSubmit,C=y.formState.errors,q=Object(d.h)(),T=v(),F=Object(j.a)(T,2),U=F[0],E=F[1].isLoading,M=function(){var e=Object(O.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{U({name:"TestTest8",email:"testtast8@gmail.com",password:"qwert-11"}),i(""),h(""),x(""),sessionStorage.removeItem("name"),sessionStorage.removeItem("email")}catch(t){Object(S.a)(t.message)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=e.target.value;switch(e.target.name){case"name":i(t),sessionStorage.setItem("name",t);break;case"email":h(t),sessionStorage.setItem("email",t);break;case"password":x(t);break;default:return}};return Object(P.jsxs)(P.Fragment,{children:[E&&Object(P.jsx)("h3",{children:"Loading...."}),Object(P.jsxs)("form",{onSubmit:k(M),children:[Object(P.jsxs)("label",{children:["name",Object(P.jsx)("input",Object(L.a)(Object(L.a)({},w("name")),{},{value:o,onChange:N}))]}),Object(P.jsxs)("label",{children:["email",Object(P.jsx)("input",Object(L.a)(Object(L.a)({type:"email"},w("email",{required:!0})),{},{onChange:N,value:b})),"required"===(null===(r=C.email)||void 0===r?void 0:r.type)&&"Email is required"]}),Object(P.jsxs)("label",{children:["password",Object(P.jsx)("input",Object(L.a)(Object(L.a)({type:"password"},w("password",{required:!0})),{},{onChange:N,value:g})),"required"===(null===(n=C.password)||void 0===n?void 0:n.type)&&"Password is required"]}),Object(P.jsx)("button",{type:"button",onClick:function(){sessionStorage.removeItem("name"),sessionStorage.removeItem("email"),q("/")},children:"Cancel"}),Object(P.jsx)("button",{type:"submit",children:"Register"})]})]})}function N(){return Object(P.jsxs)(w.a,{children:[Object(P.jsx)("h2",{children:"Form Register"}),Object(P.jsx)(M,{})]})}var R=Object(c.lazy)((function(){return Promise.all([r.e(3),r.e(4)]).then(r.bind(null,101))}));function _(){return Object(P.jsx)("div",{className:"App",children:Object(P.jsx)(c.Suspense,{fallback:Object(P.jsx)("p",{children:"Loading...."}),children:Object(P.jsxs)(d.e,{children:[Object(P.jsxs)(d.c,{path:"/",element:Object(P.jsx)(F,{}),children:[Object(P.jsx)(d.c,{path:"login",element:Object(P.jsx)(E,{})}),Object(P.jsx)(d.c,{path:"register",element:Object(P.jsx)(N,{})}),Object(P.jsx)(d.c,{path:"contacts",element:Object(P.jsx)(R,{})})]}),Object(P.jsx)(d.c,{path:"*",element:Object(P.jsx)(d.a,{to:"/"})})]})})})}var A,H=r(12),z=r(6),B=r(2),W=r(49),Q=r(20),D=r(48),J=r.n(D),G=(r(67),r(33)),Y=r(45),K=Object(B.createReducer)("",Object(H.a)({},Y.a,(function(e,t){return t.payload}))),V=Object(B.createSlice)({name:"auth",initialState:{token:null,user:null},extraReducers:function(e){e.addMatcher(g.endpoints.registerUser.matchFulfilled,(function(e,t){var r=t.payload;e.token=r.token,e.user=r.user})),e.addMatcher(g.endpoints.loginUser.matchFulfilled,(function(e,t){var r=t.payload;e.token=r.token,e.user=r.user})),e.addMatcher(g.endpoints.logoutUser.matchFulfilled,(function(e,t){t.payload;e.token=null,e.user=null}))}}),X={key:"root",storage:J.a},Z=Object(Q.g)(X,V.reducer),$=Object(B.configureStore)({reducer:(A={},Object(H.a)(A,g.reducerPath,g.reducer),Object(H.a)(A,G.a.reducerPath,G.a.reducer),Object(H.a)(A,V.name,Z),Object(H.a)(A,"filter",K),A),middleware:function(e){return[].concat(Object(z.a)(e({serializableCheck:{ignoredActions:[Q.a,Q.f,Q.b,Q.c,Q.d,Q.e]}})),[G.a.middleware,g.middleware,!1])},devTools:!1});Object(W.setupListeners)($.dispatch);var ee=Object(Q.h)($),te=r(28),re=(r(70),r(50));i.a.render(Object(P.jsx)(s.a.StrictMode,{children:Object(P.jsx)(u.a,{store:$,children:Object(P.jsxs)(re.a,{loader:null,persistor:ee,children:[Object(P.jsx)(l.a,{children:Object(P.jsx)(_,{})}),Object(P.jsx)(te.a,{})]})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.ede43b6a.chunk.js.map