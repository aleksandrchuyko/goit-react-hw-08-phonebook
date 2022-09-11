"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[481],{481:function(e,a,n){n.r(a),n.d(a,{default:function(){return ae}});var r=n(885),t=n(2791),s=n(3855),c=n(3360),i=n(4036),o=n(184),d=function(e){var a=e.contacts,n=e.onSubmit,d=(0,t.useState)(""),l=(0,r.Z)(d,2),u=l[0],m=l[1],f=(0,t.useState)(""),v=(0,r.Z)(f,2),b=v[0],h=v[1],x=function(e){switch(e.currentTarget.name){case"name":m(e.currentTarget.value);break;case"number":h(e.currentTarget.value);break;default:return}};return(0,o.jsx)(i.Box,{children:(0,o.jsxs)(s.Z,{onSubmit:function(e){if(e.preventDefault(),a.find((function(e){return e.name===u})))return window.alert("".concat(u," is already in contacts!")),!1;n({name:u,number:b}),m(""),h("")},children:[(0,o.jsxs)(s.Z.Group,{className:"mb-2",controlId:"formBasicEmail",children:[(0,o.jsx)(s.Z.Label,{children:"Email address"}),(0,o.jsx)(s.Z.Control,{type:"text",name:"name",value:u,onChange:x,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,o.jsxs)(s.Z.Group,{className:"mb-2",controlId:"formBasicPassword",children:[(0,o.jsx)(s.Z.Label,{children:"Password"}),(0,o.jsx)(s.Z.Control,{type:"tel",name:"number",value:b,onChange:x,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaceSs, dashes, parentheses and can start with +",required:!0})]}),(0,o.jsx)(c.Z,{variant:"primary",type:"submit",children:"Add contact"})]})})},l=n(5582),u=function(e){var a=e.id,n=e.name,t=e.number,s=(e.onDeleteContact,(0,l.MG)()),i=(0,r.Z)(s,2),d=i[0],u=i[1].isLoading;return(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{className:"mb-2",children:[(0,o.jsxs)("b",{children:[n,":"]})," ",t]}),(0,o.jsx)(c.Z,{variant:"outline-secondary",size:"sm",type:"button",disabled:u,onClick:function(){d(a)},children:"Delete"})]})},m=n(7022),f=n(1413),v=n(5987),b=n(1694),h=n.n(b),x=(n(2391),n(239)),Z=n(7503),p=n(162),j=n(9007),g=n(4787),C=n(8633),y=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],N=t.forwardRef((function(e,a){var n=e.bsPrefix,t=e.active,s=e.disabled,c=e.eventKey,i=e.className,d=e.variant,l=e.action,u=e.as,m=(0,v.Z)(e,y);n=(0,p.vE)(n,"list-group-item");var b=(0,g.v)((0,f.Z)({key:(0,C.h)(c,m.href),active:t},m)),x=(0,r.Z)(b,2),Z=x[0],N=x[1],w=(0,j.Z)((function(e){if(s)return e.preventDefault(),void e.stopPropagation();Z.onClick(e)}));s&&void 0===m.tabIndex&&(m.tabIndex=-1,m["aria-disabled"]=!0);var P=u||(l?m.href?"a":"button":"div");return(0,o.jsx)(P,(0,f.Z)((0,f.Z)((0,f.Z)({ref:a},m),Z),{},{onClick:w,className:h()(i,n,N.isActive&&"active",s&&"disabled",d&&"".concat(n,"-").concat(d),l&&"".concat(n,"-action"))}))}));N.displayName="ListGroupItem";var w=N,P=["className","bsPrefix","variant","horizontal","numbered","as"],k=t.forwardRef((function(e,a){var n,r=(0,x.Ch)(e,{activeKey:"onSelect"}),t=r.className,s=r.bsPrefix,c=r.variant,i=r.horizontal,d=r.numbered,l=r.as,u=void 0===l?"div":l,m=(0,v.Z)(r,P),b=(0,p.vE)(s,"list-group");return i&&(n=!0===i?"horizontal":"horizontal-".concat(i)),(0,o.jsx)(Z.Z,(0,f.Z)((0,f.Z)({ref:a},m),{},{as:u,className:h()(t,b,c&&"".concat(b,"-").concat(c),n&&"".concat(b,"-").concat(n),d&&"".concat(b,"-numbered"))}))}));k.displayName="ListGroup";var I=Object.assign(k,{Item:w}),z=function(e){var a=e.contacts;e.onDeleteContact;return(0,o.jsx)(m.Z,{children:(0,o.jsx)(I,{variant:"flush",children:a.map((function(e){return(0,o.jsx)(I.Item,{children:(0,o.jsx)(u,{id:e.id,name:e.name,number:e.number})},e.id)}))})})},B=function(e){var a=e.name,n=e.onChange;return(0,o.jsx)(i.Box,{children:(0,o.jsx)(s.Z,{children:(0,o.jsxs)(s.Z.Group,{className:"mb-2",controlId:"formBasicName",children:[(0,o.jsx)(s.Z.Label,{children:"Search"}),(0,o.jsx)(s.Z.Control,{type:"text",name:"find",value:a,onChange:n})]})})})},L=n(5048),S=n(6058),T=n(6543),A=(0,T.Z)("card-group"),E=n(7472),G=["bsPrefix","className","variant","as"],D=t.forwardRef((function(e,a){var n=e.bsPrefix,r=e.className,t=e.variant,s=e.as,c=void 0===s?"img":s,i=(0,v.Z)(e,G),d=(0,p.vE)(n,"card-img");return(0,o.jsx)(c,(0,f.Z)({ref:a,className:h()(t?"".concat(d,"-").concat(t):d,r)},i))}));D.displayName="CardImg";var O=D,R=n(6040),K=["bsPrefix","className","as"],M=t.forwardRef((function(e,a){var n=e.bsPrefix,r=e.className,s=e.as,c=void 0===s?"div":s,i=(0,v.Z)(e,K),d=(0,p.vE)(n,"card-header"),l=(0,t.useMemo)((function(){return{cardHeaderBsPrefix:d}}),[d]);return(0,o.jsx)(R.Z.Provider,{value:l,children:(0,o.jsx)(c,(0,f.Z)((0,f.Z)({ref:a},i),{},{className:h()(r,d)}))})}));M.displayName="CardHeader";var _=M,H=["bsPrefix","className","bg","text","border","body","children","as"],q=(0,E.Z)("h5"),F=(0,E.Z)("h6"),J=(0,T.Z)("card-body"),Y=(0,T.Z)("card-title",{Component:q}),$=(0,T.Z)("card-subtitle",{Component:F}),Q=(0,T.Z)("card-link",{Component:"a"}),U=(0,T.Z)("card-text",{Component:"p"}),V=(0,T.Z)("card-footer"),W=(0,T.Z)("card-img-overlay"),X=t.forwardRef((function(e,a){var n=e.bsPrefix,r=e.className,t=e.bg,s=e.text,c=e.border,i=e.body,d=e.children,l=e.as,u=void 0===l?"div":l,m=(0,v.Z)(e,H),b=(0,p.vE)(n,"card");return(0,o.jsx)(u,(0,f.Z)((0,f.Z)({ref:a},m),{},{className:h()(r,b,t&&"bg-".concat(t),s&&"text-".concat(s),c&&"border-".concat(c)),children:i?(0,o.jsx)(J,{children:d}):d}))}));X.displayName="Card",X.defaultProps={body:!1};var ee=Object.assign(X,{Img:O,Title:Y,Subtitle:$,Body:J,Link:Q,Text:U,Header:_,Footer:V,ImgOverlay:W}),ae=function(){var e=(0,L.I0)(),a=(0,L.v9)(S.zK),n=(0,l.bC)("",{refetchOnMountOrArgChange:!0}),t=n.data,s=n.isLoading,c=n.isSuccess,i=(0,l.Tn)(),u=(0,r.Z)(i,1)[0],f=a.trim()?t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})):t;return(0,o.jsx)(m.Z,{className:"mt-2",children:!s&&c&&(0,o.jsxs)(A,{children:[(0,o.jsx)(ee,{children:(0,o.jsxs)(ee.Body,{children:[(0,o.jsx)(ee.Title,{children:"New contact"}),(0,o.jsx)(d,{contacts:t,onSubmit:function(e){var a=e.name,n=e.number;u({name:a,number:n})}})]})}),(0,o.jsx)(ee,{children:(0,o.jsxs)(ee.Body,{children:[(0,o.jsx)(ee.Title,{children:"Your contacts"}),(0,o.jsx)(B,{name:a,onChange:function(a){e((0,S.Tv)(a.target.value))}}),(0,o.jsx)(z,{contacts:f})]})})]})})}}}]);
//# sourceMappingURL=481.f7f7f36c.chunk.js.map