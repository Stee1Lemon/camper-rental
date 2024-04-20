"use strict";(self.webpackChunkcamper_rental=self.webpackChunkcamper_rental||[]).push([[601],{6601:(n,e,i)=>{i.r(e),i.d(e,{default:()=>te});var t,o,r=i(7457),l=i(5043),a=i(7528),s=i(197);const d=s.default.div(t||(t=(0,a.A)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 50;\n"]))),c=s.default.div(o||(o=(0,a.A)(["\n  background-color: white;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  z-index: 91;\n  width: fit-content;\n  height: fit-content;\n  border-radius: 10px;\n  overflow-y: auto;\n  overflow-x: hidden;\n"])));var x=i(579);const h=n=>{let{children:e,isOpen:i,onClose:t}=n;const o=n=>{let{key:e}=n;if("Escape"===e)t()};return(0,l.useEffect)((()=>(i&&(document.body.style.overflow="hidden",document.addEventListener("keydown",o)),()=>{document.body.style.overflow="unset",document.removeEventListener("keydown",o)}))),(0,x.jsx)(x.Fragment,{children:i?(0,x.jsxs)("div",{className:"overlay",children:[(0,x.jsx)(d,{onClick:t}),(0,x.jsx)(c,{children:e})]}):null})};var p,m,u,g;const j=s.default.form(p||(p=(0,a.A)(["\n  box-sizing: border-box;\n  width: 448px;\n  height: 532px;\n  padding: 24px;\n  border: 1px solid var(--border-color);\n  border-radius: 10px;\n\n  h3 {\n    margin-bottom: 8px;\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 1.2;\n    color: var(--first-color);\n  }\n\n  p {\n    margin-bottom: 24px;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 1.5;\n    color: var(--second-color);\n  }\n"]))),v=s.default.div(m||(m=(0,a.A)(["\n  position: relative;\n  margin-bottom: 24px;\n  display: flex;\n  gap: 14px;\n  flex-direction: column;\n"]))),f=s.default.textarea(u||(u=(0,a.A)(["\n  font-weight: 400;\n  color: var(--first-color);\n\n  border-radius: 10px;\n  padding: 18px;\n  width: 400px;\n  height: 114px;\n  box-sizing: border-box;\n  background: var(--sixth-color);\n  border: none;\n  overflow-y: auto;\n  overflow-x: hidden;\n  resize: none;\n\n  &::placeholder {\n    color: var(--placeholder-color);\n  }\n  &:focus {\n    outline: none;\n  }\n"]))),b=s.default.span(g||(g=(0,a.A)(["\n  position: absolute;\n  font-weight: 400;\n  font-size: 14px;\n  color: var(--third-color);\n  bottom: 5px;\n  right: 5px;\n"])));var w=i(1899),y=i.n(w),A=(i(5116),i(3280)),C=i(3892);const k=()=>{const n=(0,A.Ik)({name:(0,A.Yj)().required(),email:(0,A.Yj)().email().required(),date:(0,A.p6)().required(),comment:(0,A.Yj)()}),e=(0,C.Wx)({initialValues:{name:"",email:"",date:"",comment:""},validationSchema:n,onSubmit:async n=>{console.log(n)}});return(0,x.jsxs)(j,{onSubmit:e.handleSubmit,children:[(0,x.jsx)("h3",{children:"Book your campervan now"}),(0,x.jsx)("p",{children:"Stay connected! We are always ready to help you."}),(0,x.jsxs)(v,{children:[(0,x.jsx)(r.pd,{type:"text",name:"name",placeholder:"Name",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.name,style:{border:e.errors.name&&e.touched.name?"1px solid var(--third-color)":null}}),(0,x.jsx)(r.pd,{type:"email",name:"email",placeholder:"Email",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email,style:{border:e.errors.email&&e.touched.email?"1px solid var(--third-color)":null}}),(0,x.jsx)(y(),{selected:e.values.date,onChange:n=>e.setFieldValue("date",n),placeholderText:"Booking date",dateFormat:"dd-MM-yyyy",minDate:new Date,customInput:(0,x.jsx)(r.pd,{name:"date",value:e.values.date,onChange:e.handleChange,onBlur:e.handleBlur,readOnly:!0,style:{border:e.errors.name&&e.touched.name?"1px solid var(--third-color)":null}})}),(0,x.jsx)(f,{type:"text",name:"comment",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.comment,placeholder:"Comment"}),Object.keys(e.errors).length>0&&e.touched?(0,x.jsx)(b,{children:"Name, email, date is required"}):null]}),(0,x.jsx)(r.$n,{type:"submit",children:"Send"})]})};var z,q,S,F,B=i(2086);const L=s.default.div(z||(z=(0,a.A)(["\n  width: 430px;\n"]))),V=s.default.div(q||(q=(0,a.A)(["\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  width: 430px;\n  margin-bottom: 44px;\n"]))),N=s.default.p(S||(S=(0,a.A)(["\n  margin-bottom: 24px;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.2;\n  color: var(--first-color);\n"]))),$=s.default.ul(F||(F=(0,a.A)(["\n  width: 430px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-color);\n\n  li {\n    display: flex;\n    justify-content: space-between;\n  }\n  p {\n    font-size: 18px;\n    line-height: 1.33;\n    color: var(--first-color);\n  }\n"]))),D=()=>(0,x.jsxs)(L,{children:[(0,x.jsxs)(V,{children:[(0,x.jsx)(B.A,{icon:"adults",category:"2 adults"}),(0,x.jsx)(B.A,{icon:"automatic",category:"Automatic"}),(0,x.jsx)(B.A,{icon:"ac",category:"AC"}),(0,x.jsx)(B.A,{icon:"petrol",category:"Petrol"}),(0,x.jsx)(B.A,{icon:"bad",category:"1 beds"}),(0,x.jsx)(B.A,{icon:"automatic",category:"Automatic"})]}),(0,x.jsx)(N,{children:"Vehicle details"}),(0,x.jsxs)($,{children:[(0,x.jsxs)("li",{children:[(0,x.jsx)("p",{children:"Form"}),(0,x.jsx)("p",{children:"Panel truck"})]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("p",{children:"Length"}),(0,x.jsx)("p",{children:"5.4 m"})]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("p",{children:"Width"}),(0,x.jsx)("p",{children:"2.01 m"})]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("p",{children:"Height"}),(0,x.jsx)("p",{children:"2.05 m"})]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("p",{children:"Tank"}),(0,x.jsx)("p",{children:"132"})]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("p",{children:"Consumption"}),(0,x.jsx)("p",{children:"12.41/100km"})]})]})]});var E,K,M,O,W;const I=s.default.div(E||(E=(0,a.A)(["\n  width: 430px;\n"]))),R=s.default.div(K||(K=(0,a.A)(["\n  margin-bottom: 24px;\n"]))),T=s.default.div(M||(M=(0,a.A)(["\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n\n  p {\n    font-family: 600;\n    font-size: 18px;\n    line-height: 1.33;\n  }\n"]))),U=s.default.div(O||(O=(0,a.A)(["\n  min-width: 60px;\n  max-width: 60px;\n  min-height: 60px;\n  max-height: 60px;\n  border-radius: 60px;\n  background-color: gray;\n"]))),Y=s.default.div(W||(W=(0,a.A)(["\n  display: flex;\n  gap: 4px;\n  align-items: center;\n\n  p {\n    font-weight: 400;\n    font-size: 16px;\n  }\n"])));var H,P=i(8481);const _=s.default.div(H||(H=(0,a.A)(["\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n  border: none;\n  background-color: transparent;\n  svg {\n    width: ",";\n    height: ",";\n  }\n"])),(n=>n.$width),(n=>n.$height)),G=n=>{let{icon:e,width:i="20px",height:t="20px"}=n;return(0,x.jsx)(_,{$width:i,$height:t,children:(0,x.jsx)("svg",{children:(0,x.jsx)("use",{href:"".concat(P.A,"#icon-").concat(e)})})})},J=()=>(0,x.jsxs)(I,{children:[(0,x.jsxs)(R,{children:[(0,x.jsxs)(T,{children:[(0,x.jsx)(U,{children:(0,x.jsx)("img",{src:"",alt:"some"})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{children:"Name"}),(0,x.jsxs)(Y,{children:[(0,x.jsx)(G,{icon:"star",width:"16px",height:"16px"}),(0,x.jsx)("p",{children:"3"})]})]})]}),(0,x.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sed illum. Commodi dolores officia iure debitis asperiores, cumque ut, tenetur magnam temporibus mollitia eaque modi exercitationem veniam esse, sit accusantium!"})]}),(0,x.jsxs)(R,{children:[(0,x.jsxs)(T,{children:[(0,x.jsx)(U,{children:(0,x.jsx)("img",{src:"",alt:"some"})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{children:"Name"}),(0,x.jsxs)(Y,{children:[(0,x.jsx)(G,{icon:"star",width:"16px",height:"16px"}),(0,x.jsx)("p",{children:"3"})]})]})]}),(0,x.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sed illum. Commodi dolores officia iure debitis asperiores, cumque ut, tenetur magnam temporibus mollitia eaque modi exercitationem veniam esse, sit accusantium!"})]})]});var Q,X,Z,nn,en,tn,on,rn=i(1708);const ln=s.default.div(Q||(Q=(0,a.A)(["\n  box-sizing: border-box;\n  margin-bottom: 24px;\n  display: flex;\n  gap: 24px;\n  width: 888px;\n  height: 358px;\n  padding: 24px;\n  border-radius: 20px;\n  border: 1px solid var(--border-color);\n"]))),an=s.default.div(X||(X=(0,a.A)(["\n  min-width: 290px;\n  max-width: 290px;\n  min-height: 310px;\n  max-height: 310px;\n"]))),sn=s.default.div(Z||(Z=(0,a.A)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n\n  h3 {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 1.25;\n    color: var(--first-color);\n  }\n\n  div {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n  }\n\n  p {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 1.25;\n  }\n"]))),dn=((0,s.default)(rn.A)(nn||(nn=(0,a.A)([""]))),s.default.div(en||(en=(0,a.A)(["\n  display: flex;\n  gap: 16px;\n  margin-bottom: 24px;\n\n  p {\n    margin-left: 4px;\n    display: inline-block;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 1.5;\n  }\n"])))),cn=s.default.div(tn||(tn=(0,a.A)(["\n  width: 526px;\n  margin-bottom: 24px;\n\n  p {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 1.5;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n"]))),xn=s.default.div(on||(on=(0,a.A)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 24px;\n"])));var hn,pn,mn,un,gn,jn,vn,fn;const bn=s.default.div(hn||(hn=(0,a.A)(["\n  box-sizing: border-box;\n  width: 982px;\n  max-height: 720px;\n  height: auto;\n  padding: 40px;\n  overflow-y: auto;\n  overflow-x: hidden;\n"]))),wn=s.default.div(pn||(pn=(0,a.A)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n\n  h3 {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 1.25;\n    color: var(--first-color);\n  }\n"]))),yn=(0,s.default)(dn)(mn||(mn=(0,a.A)(["\n  margin-bottom: 16px;\n"]))),An=s.default.p(un||(un=(0,a.A)(["\n  margin-bottom: 24px;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.25;\n  color: var(--first-color);\n"]))),Cn=s.default.div(gn||(gn=(0,a.A)(["\n  display: flex;\n  gap: 16px;\n  margin-bottom: 24px;\n\n  div {\n    min-width: 290px;\n    max-width: 290px;\n    min-height: 310px;\n    max-height: 310px;\n  }\n"]))),kn=s.default.p(jn||(jn=(0,a.A)(["\n  margin-bottom: 44px;\n\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n"]))),zn=s.default.div(vn||(vn=(0,a.A)(["\n  width: 902px;\n  padding-bottom: 24px;\n  margin-bottom: 24px;\n  border-bottom: 1px solid var(--border-color);\n\n  input {\n    appearance: none;\n  }\n\n  label {\n    margin-right: 40px;\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 1.2;\n    color: var(--first-color);\n  }\n"]))),qn=s.default.div(fn||(fn=(0,a.A)(["\n  display: flex;\n  gap: 24px;\n"])));var Sn=i(4359);const Fn=n=>{let{onClose:e}=n;const[i,t]=(0,l.useState)("features"),o=n=>{t(n.target.value)};return(0,x.jsxs)(bn,{children:[(0,x.jsxs)(wn,{children:[(0,x.jsx)("h3",{children:"Mavericks"}),(0,x.jsx)(Sn.A,{onClose:e})]}),(0,x.jsxs)("div",{children:[(0,x.jsxs)(yn,{children:[(0,x.jsxs)("div",{children:[(0,x.jsx)(G,{icon:"star",width:"16px",height:"16px"}),(0,x.jsx)("p",{children:"4.4(2 Reviews)"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(G,{icon:"location",width:"16px",height:"16px"}),(0,x.jsx)("p",{children:"Kyive, Ukraine"})]})]}),(0,x.jsx)(An,{children:"\u20ac8000.00"})]}),(0,x.jsxs)(Cn,{children:[(0,x.jsx)("div",{children:(0,x.jsx)("img",{src:"",alt:"some img"})}),(0,x.jsx)("div",{children:(0,x.jsx)("img",{src:"",alt:"some img"})}),(0,x.jsx)("div",{children:(0,x.jsx)("img",{src:"",alt:"some img"})})]}),(0,x.jsx)(kn,{children:"Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate magnam commodi ratione, similique error placeat nobis natus voluptates facilis fugit? Libero modi amet laudantium vel voluptatem dignissimos nobis veniam dolore?"}),(0,x.jsxs)(zn,{children:[(0,x.jsxs)("label",{children:[(0,x.jsx)("input",{type:"radio",name:"additional-info",value:"features",onChange:o,checked:"features"===i}),"Features"]}),(0,x.jsxs)("label",{children:[(0,x.jsx)("input",{type:"radio",name:"additional-info",value:"reviews",onChange:o,checked:"reviews"===i}),"Reviews"]})]}),(0,x.jsxs)(qn,{children:["features"===i&&(0,x.jsx)(D,{}),"reviews"===i&&(0,x.jsx)(J,{}),(0,x.jsx)(k,{})]})]})};var Bn;const Ln=s.default.button(Bn||(Bn=(0,a.A)(["\n  border: none;\n  background-color: transparent;\n  svg {\n    width: 24px;\n    height: 24px;\n  }\n"]))),Vn=n=>{let{isFavorite:e}=n;return(0,x.jsx)(Ln,{children:(0,x.jsx)("svg",{children:(0,x.jsx)("use",{href:"".concat(P.A,e?"#icon-favorite":"#icon-no-favorite")})})})},Nn=()=>{const[n,e]=(0,l.useState)(!1);return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(ln,{children:[(0,x.jsx)(an,{children:(0,x.jsx)("img",{src:"",alt:"test vehicle"})}),(0,x.jsxs)("div",{children:[(0,x.jsxs)(sn,{children:[(0,x.jsx)("h3",{children:"Mavericks"}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{children:"\u20ac8000.00"}),(0,x.jsx)(Vn,{isFavorite:!1})]})]}),(0,x.jsxs)(dn,{children:[(0,x.jsxs)("div",{children:[(0,x.jsx)(G,{icon:"star",width:"16px",height:"16px"}),(0,x.jsx)("p",{children:"4.4(2 Reviews)"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(G,{icon:"location",width:"16px",height:"16px"}),(0,x.jsx)("p",{children:"Kyive, Ukraine"})]})]}),(0,x.jsx)(cn,{children:(0,x.jsx)("p",{children:"Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, asperiores! Culpa, doloremque beatae exercitationem dolore neque iure accusantium obcaecati consectetur?"})}),(0,x.jsxs)(xn,{children:[(0,x.jsx)(B.A,{icon:"adults",category:"2 adults"}),(0,x.jsx)(B.A,{icon:"automatic",category:"automatic"}),(0,x.jsx)(B.A,{icon:"petrol",category:"petrol"}),(0,x.jsx)(B.A,{icon:"petrol",category:"petrol"}),(0,x.jsx)(B.A,{icon:"petrol",category:"petrol"}),(0,x.jsx)(B.A,{icon:"petrol",category:"petrol"})]}),(0,x.jsx)(r.$n,{onClick:()=>e(!n),children:"Show more"}),(0,x.jsx)(h,{isOpen:n,onClose:()=>e(!n),children:(0,x.jsx)(Fn,{onClose:()=>e(!n)})})]})]})})};var $n,Dn,En;const Kn=s.default.input($n||($n=(0,a.A)(["\n  appearance: none;\n"]))),Mn=s.default.label(Dn||(Dn=(0,a.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  box-sizing: border-box;\n  min-width: 95px;\n  max-width: 120px;\n  height: 95px;\n  padding: 17px 17px;\n  border-radius: 10px;\n  border: 1px solid var(--border-color);\n\n  cursor: pointer;\n\n  ",":checked + & {\n    border: 2px solid var(--third-color);\n  }\n"])),Kn),On=s.default.div(En||(En=(0,a.A)(["\n  width: 32px;\n  height: 32px;\n\n  svg {\n    width: 32px;\n    height: 32px;\n  }\n"]))),Wn=n=>{let{checked:e,name:i,value:t,icon:o,onChange:r}=n;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Kn,{type:"checkbox",checked:e,name:i,value:t,onChange:r}),(0,x.jsxs)(Mn,{onClick:()=>{r(e)},children:[(0,x.jsx)(On,{children:(0,x.jsx)("svg",{children:(0,x.jsx)("use",{xlinkHref:"".concat(P.A,"#icon-").concat(o)})})}),t]})]})};var In,Rn,Tn,Un,Yn;const Hn=s.default.p(In||(In=(0,a.A)(["\n  line-height: 1.5;\n  box-sizing: border-box;\n  margin: 0;\n  color: var(--second-color);\n"]))),Pn=(0,s.default)(r.pd)(Rn||(Rn=(0,a.A)(["\n  margin-top: 8px;\n  margin-bottom: 32px;\n"]))),_n=s.default.p(Tn||(Tn=(0,a.A)(["\n  margin-top: 14px;\n  margin-bottom: 24px;\n\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.2;\n  color: var(--first-color);\n"]))),Gn=s.default.div(Un||(Un=(0,a.A)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding-top: 24px;\n  max-width: 360px;\n  border-top: 1px solid var(--second-color);\n"]))),Jn=(0,s.default)(r.$n)(Yn||(Yn=(0,a.A)(["\n  margin-top: 64px;\n"]))),Qn=()=>{const n=n=>{console.log(n)};return(0,x.jsxs)("form",{children:[(0,x.jsx)(Hn,{children:"Location"}),(0,x.jsx)(Pn,{type:"text",placeholder:"Kyiv, Ukraine"}),(0,x.jsx)(Hn,{children:"Filters"}),(0,x.jsx)(_n,{children:"Vehicle equipment"}),(0,x.jsxs)(Gn,{children:[(0,x.jsx)(Wn,{name:"equipment",value:"AC",icon:"ac",onChange:n}),(0,x.jsx)(Wn,{name:"equipment",value:"Automatic",icon:"automatic"}),(0,x.jsx)(Wn,{name:"equipment",value:"Kitchen",icon:"kitchen",onChange:n}),(0,x.jsx)(Wn,{name:"equipment",value:"TV",icon:"tv",onChange:n}),(0,x.jsx)(Wn,{name:"equipment",value:"Shower/WC",icon:"shower",onChange:n})]}),(0,x.jsx)(_n,{children:"Vehicle type"}),(0,x.jsxs)(Gn,{children:[(0,x.jsx)(Wn,{name:"vehicle-type",value:"Van",icon:"van",onChange:n}),(0,x.jsx)(Wn,{name:"vehicle-type",value:"Fully Integrated",icon:"fully-integrated",onChange:n}),(0,x.jsx)(Wn,{name:"vehicle-type",value:"Alcove",icon:"alcove",onChange:n})]}),(0,x.jsx)(Jn,{type:"submit",onClick:n=>{n.preventDefault(),console.log(n)},children:"Search"})]})};var Xn,Zn;const ne=s.default.div(Xn||(Xn=(0,a.A)(["\n  display: flex;\n  gap: 64px;\n"]))),ee=s.default.div(Zn||(Zn=(0,a.A)(["\n"]))),ie=()=>(0,x.jsxs)(r.mc,{children:[(0,x.jsx)("h2",{children:"Catalog"}),(0,x.jsxs)(ne,{children:[(0,x.jsx)(Qn,{}),(0,x.jsxs)(ee,{children:[(0,x.jsx)(Nn,{}),(0,x.jsx)(Nn,{})]})]}),(0,x.jsx)("button",{children:"Load more"})]}),te=()=>(0,x.jsx)("section",{children:(0,x.jsx)(ie,{})})}}]);
//# sourceMappingURL=601.f737f235.chunk.js.map