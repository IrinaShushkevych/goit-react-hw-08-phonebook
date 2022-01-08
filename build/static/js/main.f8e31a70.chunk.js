(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={mainForm:"Phonebook_mainForm__206m_",label:"Phonebook_label__3Rxo6",input:"Phonebook_input__1-IIH",button:"Phonebook_button__21uSq"}},17:function(e,t,n){e.exports={itemText:"ContactItem_itemText__Kf2Rc",button:"ContactItem_button__2OxPx"}},20:function(e,t,n){e.exports={container:"Container_container__2ITx6",title:"Container_title__20N-x"}},21:function(e,t,n){e.exports={list:"Contacts_list__G3jTs",item:"Contacts_item__JsphL"}},22:function(e,t,n){e.exports={label:"Filter_label__1dbXs",input:"Filter_input__2k_xj"}},39:function(e,t,n){},40:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),s=n.n(r),o=n(4),i=(n(38),n(39),n(25)),l=n(6),u=Object(i.a)({reducerPath:"contacts",baseQuery:Object(l.d)({baseUrl:"https://61d437968df81200178a8b2f.mockapi.io/contacts/contacts"}),tagTypes:["contacts"],endpoints:function(e){return{getContacts:e.query({query:function(){return"/"},providesTags:["contacts"]}),addContact:e.mutation({query:function(e){return{url:"/",method:"POST",body:e}},invalidatesTags:["contacts"]}),deleteContact:e.mutation({query:function(e){return{url:"/".concat(e),method:"DELETE"}},invalidatesTags:["contacts"]})}}}),d=u.useGetContactsQuery,b=u.useAddContactMutation,j=u.useDeleteContactMutation,m=(n(40),n(20)),p=n.n(m),h=n(2);var O=function(e){var t=e.title,n=void 0===t?"":t,a=e.children;return Object(h.jsxs)("div",{className:p.a.container,children:[n&&Object(h.jsx)("h2",{className:p.a.title,children:n}),a]})},x=n(13),f=n(10),_=n.n(f);function v(){var e=Object(a.useState)(""),t=Object(x.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(x.a)(r,2),o=s[0],i=s[1],l=d().data,u=b(),j=Object(x.a)(u,1)[0];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{className:_.a.mainForm,onSubmit:function(e){e.preventDefault();var t={name:n,phone:o};0!==l.filter((function(e){return e.name===n})).length?alert("Contacts ".concat(n," already exist")):j(t),c(""),i("")},children:[Object(h.jsxs)("label",{htmlFor:"name",className:_.a.label,children:["Name",Object(h.jsx)("input",{type:"text",name:"name",className:_.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:n,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(e){c(e.target.value)}})]}),Object(h.jsxs)("label",{htmlFor:"number",className:_.a.label,children:["Phone",Object(h.jsx)("input",{type:"tel",name:"number",className:_.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:o,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(e){i(e.target.value)}})]}),Object(h.jsx)("button",{type:"submit",className:_.a.button,children:"Add contact"})]})})}var g,C=n(21),y=n.n(C),N=function(e){return e.filter},A=n(17),F=n.n(A),k=n(26),T=n(19),z=n(27),P=n.n(z),q=Object(T.css)(g||(g=Object(k.a)(["\n  display: block;\n  margin: 0px 6px;\n"])));var w=function(e){var t=e.size,n=void 0===t?50:t;return Object(h.jsx)(P.a,{color:"rgb(6, 255, 247)",loading:true,css:q,size:n})};function I(e){var t=e.id,n=e.name,a=e.number,c=j(),r=Object(x.a)(c,2),s=r[0],o=r[1].isLoading;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{className:F.a.itemText,children:n}),Object(h.jsx)("span",{className:F.a.itemText,children:a}),Object(h.jsxs)("button",{type:"button",className:F.a.button,"data-id":t,onClick:function(){s(t)},disabled:o,children:[o&&Object(h.jsx)(w,{size:15}),"Delete"]})]})}function S(){var e=d(),t=e.data,n=(e.error,e.isFetching,Object(o.e)(N));return Object(h.jsx)("ul",{className:y.a.list,children:t&&t.filter((function(e){return null===e||void 0===e?void 0:e.name.toUpperCase().includes(n.toUpperCase())})).map((function(e){return Object(h.jsx)("li",{className:y.a.item,children:Object(h.jsx)(I,{id:e.id,name:e.name,number:e.phone})},e.id)}))})}var Z=n(22),J=n.n(Z),M=n(1),D=Object(M.createAction)("filter");function E(){var e=Object(o.e)(N),t=Object(o.d)();return Object(h.jsxs)("label",{htmlFor:"name",className:J.a.label,children:["Find contact by name",Object(h.jsx)("input",{type:"text",name:"name",className:J.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:e,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onInput:function(e){var n;n=e.target.value,t(D(n))}})]})}function L(){var e=d().data;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(O,{title:"Phonebook",children:Object(h.jsx)(v,{})}),Object(h.jsxs)(O,{title:"Contacts",children:[e&&e.length>=2&&Object(h.jsx)(E,{}),Object(h.jsx)(S,{})]})]})}var B,R=n(9),U=n(30),G=n(29),Q=n(28),$=n.n(Q),H=Object(M.createReducer)("",Object(R.a)({},D,(function(e,t){return t.payload}))),K=Object(M.configureStore)({reducer:(B={},Object(R.a)(B,u.reducerPath,u.reducer),Object(R.a)(B,"filter",H),B),middleware:function(e){return[].concat(Object(U.a)(e()),[u.middleware,$.a])},devTools:!1});Object(G.setupListeners)(K.dispatch),s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(o.a,{store:K,children:Object(h.jsx)(L,{})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.f8e31a70.chunk.js.map