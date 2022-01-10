(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{18:function(t,e,n){t.exports={itemText:"ContactItem_itemText__Kf2Rc",button:"ContactItem_button__2OxPx",input:"ContactItem_input__CqfNY"}},20:function(t,e,n){t.exports={mainForm:"Phonebook_mainForm__206m_",label:"Phonebook_label__3Rxo6",input:"Phonebook_input__1-IIH",button:"Phonebook_button__21uSq"}},38:function(t,e,n){t.exports={container:"Container_container__2ITx6",title:"Container_title__20N-x"}},39:function(t,e,n){t.exports={list:"Contacts_list__G3jTs",item:"Contacts_item__JsphL"}},40:function(t,e,n){t.exports={label:"Filter_label__1dbXs",input:"Filter_input__2k_xj"}},63:function(t,e,n){},64:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),s=n(21),o=n.n(s),r=n(7),i=(n(62),n(63),n(14)),u=n(45),l=n(12),d=Object(u.a)({reducerPath:"contacts",baseQuery:Object(l.d)({baseUrl:"https://61d437968df81200178a8b2f.mockapi.io/contacts/contacts"}),tagTypes:["contacts"],endpoints:function(t){return{getContacts:t.query({query:function(){return"/"},providesTags:function(t){return t?[].concat(Object(i.a)(t.map((function(t){return{type:"contacts",id:t.id}}))),["contacts"]):["contacts"]}}),addContact:t.mutation({query:function(t){return{url:"/",method:"POST",body:t}},invalidatesTags:["contacts"]}),deleteContact:t.mutation({query:function(t){return{url:"/".concat(t),method:"DELETE"}},invalidatesTags:function(t){return t?[{type:"contacts",id:t.id}]:["contacts"]}}),editContact:t.mutation({query:function(t){return{url:"/".concat(t.id),method:"PUT",body:t}},invalidatesTags:function(t){return t?Object(i.a)(t.map((function(t){return{type:"contacts",id:t.id}}))):["contacts"]}})}}}),b=d.useGetContactsQuery,j=d.useAddContactMutation,m=d.useDeleteContactMutation,p=d.useEditContactMutation,h=(n(64),n(38)),O=n.n(h),f=n(2);var x=function(t){var e=t.title,n=void 0===e?"":e,a=t.children;return Object(f.jsxs)("div",{className:O.a.container,children:[n&&Object(f.jsx)("h2",{className:O.a.title,children:n}),a]})},g=n(10),v=n(24),_={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"},C=function(t){v.b.error(t,_)},y=n(20),N=n.n(y);function z(){var t=Object(a.useState)(""),e=Object(g.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)(""),o=Object(g.a)(s,2),r=o[0],i=o[1],u=b().data,l=j(),d=Object(g.a)(l,2),m=d[0],p=d[1].error;Object(a.useEffect)((function(){p&&C("".concat(p.status," ").concat(p.data.msg))}),[p]);return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{className:N.a.mainForm,onSubmit:function(t){t.preventDefault();var e={name:n,phone:r};0!==u.filter((function(t){return t.name===n})).length?alert("Contacts ".concat(n," already exist")):m(e),c(""),i("")},children:[Object(f.jsxs)("label",{htmlFor:"name",className:N.a.label,children:["Name",Object(f.jsx)("input",{type:"text",name:"name",className:N.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:n,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(t){c(t.target.value)}})]}),Object(f.jsxs)("label",{htmlFor:"number",className:N.a.label,children:["Phone",Object(f.jsx)("input",{type:"tel",name:"number",className:N.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:r,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(t){i(t.target.value)}})]}),Object(f.jsx)("button",{type:"submit",className:N.a.button,children:"Add contact"})]})})}var A,k=n(39),F=n.n(k),T=function(t){return t.filter},P=n(51),S=n.n(P),q=n(48),E=n.n(q),Z=n(49),w=n.n(Z),I=n(50),M=n.n(I),J=n(18),B=n.n(J),L=n(46),U=n(19),D=n(47),R=n.n(D),$=Object(U.css)(A||(A=Object(L.a)(["\n  display: block;\n  margin: 0px 6px;\n"])));var G=function(t){var e=t.size,n=void 0===e?50:e;return Object(f.jsx)(R.a,{color:"rgb(6, 255, 247)",loading:true,css:$,size:n})};function H(t){var e=t.id,n=t.nameContact,c=t.numberContact,s=Object(a.useState)(!1),o=Object(g.a)(s,2),r=o[0],i=o[1],u=Object(a.useState)(n),l=Object(g.a)(u,2),d=l[0],b=l[1],j=Object(a.useState)(c),h=Object(g.a)(j,2),O=h[0],x=h[1],v=m(),_=Object(g.a)(v,2),y=_[0],N=_[1],z=N.isLoading,A=N.error,k=p(),F=Object(g.a)(k,2),T=F[0],P=F[1].error;Object(a.useEffect)((function(){A&&C("".concat(A.status," ").concat(A.data.msg))}),[A]),Object(a.useEffect)((function(){P&&(C("".concat(P.status," ").concat(P.data.msg)),b(n),x(c))}),[P]);var q=function(t){t?T({id:e,name:d,phone:O}):(b(n),x(c)),i(!1)};return Object(f.jsxs)(f.Fragment,{children:[r?Object(f.jsx)("input",{type:"text",name:"name",className:B.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:d,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(t){b(t.target.value)}}):Object(f.jsx)("span",{className:B.a.itemText,children:d}),r?Object(f.jsx)("input",{type:"tel",name:"number",className:B.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:O,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(t){x(t.target.value)}}):Object(f.jsx)("span",{className:B.a.itemText,children:O}),!r&&Object(f.jsx)("button",{type:"button",className:B.a.button,"data-id":e,onClick:function(){i(!0)},disabled:z,children:Object(f.jsx)(E.a,{fontSize:"small"})}),r&&Object(f.jsx)("button",{type:"button",className:B.a.button,"data-id":e,onClick:function(){q(!0)},disabled:z,children:Object(f.jsx)(w.a,{fontSize:"small"})}),r&&Object(f.jsx)("button",{type:"button",className:B.a.button,"data-id":e,onClick:function(){q(!1)},disabled:z,children:Object(f.jsx)(M.a,{fontSize:"small"})}),Object(f.jsxs)("button",{type:"button",className:B.a.button,"data-id":e,onClick:function(){y(e)},disabled:z,children:[z&&Object(f.jsx)(G,{size:15}),Object(f.jsx)(S.a,{fontSize:"small"})]})]})}function Q(){var t=b(),e=t.data,n=t.error,c=t.isFetching;Object(a.useEffect)((function(){n&&C("".concat(n.status," ").concat(n.data))}),[n]);var s=Object(r.e)(T);return Object(f.jsxs)("ul",{className:F.a.list,children:[c&&Object(f.jsx)(G,{}),e&&e.filter((function(t){return null===t||void 0===t?void 0:t.name.toUpperCase().includes(s.toUpperCase())})).map((function(t){return Object(f.jsx)("li",{className:F.a.item,children:Object(f.jsx)(H,{id:t.id,nameContact:t.name,numberContact:t.phone})},t.id)}))]})}var K=n(40),X=n.n(K),Y=n(1),V=Object(Y.createAction)("filter");function W(){var t=Object(r.e)(T),e=Object(r.d)();return Object(f.jsxs)("label",{htmlFor:"name",className:X.a.label,children:["Find contact by name",Object(f.jsx)("input",{type:"text",name:"name",className:X.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:t,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onInput:function(t){var n;n=t.target.value,e(V(n))}})]})}function tt(){var t=b().data;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(x,{title:"Phonebook",children:Object(f.jsx)(z,{})}),Object(f.jsxs)(x,{title:"Contacts",children:[t&&t.length>=2&&Object(f.jsx)(W,{}),Object(f.jsx)(Q,{})]})]})}var et,nt=n(8),at=n(53),ct=n(52),st=n.n(ct),ot=Object(Y.createReducer)("",Object(nt.a)({},V,(function(t,e){return e.payload}))),rt=Object(Y.configureStore)({reducer:(et={},Object(nt.a)(et,d.reducerPath,d.reducer),Object(nt.a)(et,"filter",ot),et),middleware:function(t){return[].concat(Object(i.a)(t()),[d.middleware,st.a])},devTools:!1});Object(at.setupListeners)(rt.dispatch);n(72);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsxs)(r.a,{store:rt,children:[Object(f.jsx)(tt,{}),Object(f.jsx)(v.a,{})]})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.e6db8be8.chunk.js.map