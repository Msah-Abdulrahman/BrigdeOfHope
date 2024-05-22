import{g as U,d as W,s as N,e as fe,_ as b,h as Z,r as p,i as V,u as ge,k as ee,j as e,l as O,m as $,n as G,o as Q,p as je,q as oe,t as Ce,T as S,b as D,M as ve,P as q,c as J,f as te,B as _,a as ke,I as se,W as ye}from"./index-067569fd.js";import{d as Pe,c as ne,a as re,g as we,r as Se,u as Ie,b as Fe,s as Re,e as Be}from"./firebase-c7337e73.js";import{f as Y,G as ae,F as ze,S as $e,A as Le,a as qe,l as le,I as Te,R as Me,M as A}from"./image-resize.min-53fcf8d9.js";import{S as B,C as Ne,I as Ae,a as Oe}from"./InputAdornment-d57b6fa1.js";import{L as De}from"./Link-4bd04e80.js";import{C as Ee}from"./Container-ea537773.js";function _e(o){return U("PrivateSwitchBase",o)}W("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const He=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Ue=o=>{const{classes:t,checked:s,disabled:c,edge:r}=o,n={root:["root",s&&"checked",c&&"disabled",r&&`edge${$(r)}`],input:["input"]};return G(n,_e,t)},We=N(fe)(({ownerState:o})=>b({padding:9,borderRadius:"50%"},o.edge==="start"&&{marginLeft:o.size==="small"?-3:-12},o.edge==="end"&&{marginRight:o.size==="small"?-3:-12})),Ve=N("input",{shouldForwardProp:Z})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Ge=p.forwardRef(function(t,s){const{autoFocus:c,checked:r,checkedIcon:n,className:d,defaultChecked:u,disabled:a,disableFocusRipple:l=!1,edge:x=!1,icon:j,id:f,inputProps:v,inputRef:P,name:k,onBlur:m,onChange:g,onFocus:h,readOnly:L,required:i=!1,tabIndex:y,type:C,value:I}=t,F=V(t,He),[z,pe]=ge({controlled:r,default:!!u,name:"SwitchBase",state:"checked"}),R=ee(),he=w=>{h&&h(w),R&&R.onFocus&&R.onFocus(w)},me=w=>{m&&m(w),R&&R.onBlur&&R.onBlur(w)},be=w=>{if(w.nativeEvent.defaultPrevented)return;const X=w.target.checked;pe(X),g&&g(w,X)};let T=a;R&&typeof T>"u"&&(T=R.disabled);const xe=C==="checkbox"||C==="radio",E=b({},t,{checked:z,disabled:T,disableFocusRipple:l,edge:x}),K=Ue(E);return e.jsxs(We,b({component:"span",className:O(K.root,d),centerRipple:!0,focusRipple:!l,disabled:T,tabIndex:null,role:void 0,onFocus:he,onBlur:me,ownerState:E,ref:s},F,{children:[e.jsx(Ve,b({autoFocus:c,checked:r,defaultChecked:u,className:K.input,disabled:T,id:xe?f:void 0,name:k,onChange:be,readOnly:L,ref:P,required:i,ownerState:E,tabIndex:y,type:C},C==="checkbox"&&I===void 0?{}:{value:I},v)),z?n:j]}))}),Qe=Ge,Je=Q(e.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Ke=Q(e.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Xe=Q(e.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Ye(o){return U("MuiCheckbox",o)}const Ze=W("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),H=Ze,eo=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],oo=o=>{const{classes:t,indeterminate:s,color:c,size:r}=o,n={root:["root",s&&"indeterminate",`color${$(c)}`,`size${$(r)}`]},d=G(n,Ye,t);return b({},t,d)},to=N(Qe,{shouldForwardProp:o=>Z(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,s.indeterminate&&t.indeterminate,t[`size${$(s.size)}`],s.color!=="default"&&t[`color${$(s.color)}`]]}})(({theme:o,ownerState:t})=>b({color:(o.vars||o).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${t.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[t.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:je(t.color==="default"?o.palette.action.active:o.palette[t.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${H.checked}, &.${H.indeterminate}`]:{color:(o.vars||o).palette[t.color].main},[`&.${H.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),so=e.jsx(Ke,{}),no=e.jsx(Je,{}),ro=e.jsx(Xe,{}),ao=p.forwardRef(function(t,s){var c,r;const n=oe({props:t,name:"MuiCheckbox"}),{checkedIcon:d=so,color:u="primary",icon:a=no,indeterminate:l=!1,indeterminateIcon:x=ro,inputProps:j,size:f="medium",className:v}=n,P=V(n,eo),k=l?x:a,m=l?x:d,g=b({},n,{color:u,indeterminate:l,size:f}),h=oo(g);return e.jsx(to,b({type:"checkbox",inputProps:b({"data-indeterminate":l},j),icon:p.cloneElement(k,{fontSize:(c=k.props.fontSize)!=null?c:f}),checkedIcon:p.cloneElement(m,{fontSize:(r=m.props.fontSize)!=null?r:f}),ownerState:g,ref:s,className:O(h.root,v)},P,{classes:h}))}),lo=ao;function co(o){return U("MuiFormControlLabel",o)}const io=W("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),M=io,uo=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],po=o=>{const{classes:t,disabled:s,labelPlacement:c,error:r,required:n}=o,d={root:["root",s&&"disabled",`labelPlacement${$(c)}`,r&&"error",n&&"required"],label:["label",s&&"disabled"],asterisk:["asterisk",r&&"error"]};return G(d,co,t)},ho=N("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[{[`& .${M.label}`]:t.label},t.root,t[`labelPlacement${$(s.labelPlacement)}`]]}})(({theme:o,ownerState:t})=>b({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${M.disabled}`]:{cursor:"default"}},t.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},t.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},t.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${M.label}`]:{[`&.${M.disabled}`]:{color:(o.vars||o).palette.text.disabled}}})),mo=N("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(o,t)=>t.asterisk})(({theme:o})=>({[`&.${M.error}`]:{color:(o.vars||o).palette.error.main}})),bo=p.forwardRef(function(t,s){var c,r;const n=oe({props:t,name:"MuiFormControlLabel"}),{className:d,componentsProps:u={},control:a,disabled:l,disableTypography:x,label:j,labelPlacement:f="end",required:v,slotProps:P={}}=n,k=V(n,uo),m=ee(),g=(c=l??a.props.disabled)!=null?c:m==null?void 0:m.disabled,h=v??a.props.required,L={disabled:g,required:h};["checked","name","onChange","value","inputRef"].forEach(z=>{typeof a.props[z]>"u"&&typeof n[z]<"u"&&(L[z]=n[z])});const i=Ce({props:n,muiFormControl:m,states:["error"]}),y=b({},n,{disabled:g,labelPlacement:f,required:h,error:i.error}),C=po(y),I=(r=P.typography)!=null?r:u.typography;let F=j;return F!=null&&F.type!==S&&!x&&(F=e.jsx(S,b({component:"span"},I,{className:O(C.label,I==null?void 0:I.className),children:F}))),e.jsxs(ho,b({className:O(C.root,d),ownerState:y,ref:s},k,{children:[p.cloneElement(a,L),h?e.jsxs(B,{display:"block",children:[F,e.jsxs(mo,{ownerState:y,"aria-hidden":!0,className:C.asterisk,children:[" ","*"]})]}):F]}))}),xo=bo;ce.propTypes={options:q.array,onSort:q.func};function ce({options:o,onSort:t}){return e.jsx(D,{select:!0,size:"small",value:"latest",onChange:t,children:o.map(s=>e.jsx(ve,{value:s.value,children:s.label},s.value))})}function ie({project:o,index:t}){const{cover:s,content:c,title:r,raisedAmount:n,goalAmount:d,createdAt:u}=o,a=t===0,l=t===1||t===2,[x,j]=p.useState(!1),f=()=>{j(!0)},v=e.jsx(De,{color:"inherit",variant:"subtitle2",underline:"hover",sx:{height:44,overflow:"hidden",WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical",...a&&{typography:"h5",height:60},...(a||l)&&{color:"common.white"}},children:e.jsx(S,{onClick:f,children:r})}),P=e.jsxs(B,{direction:"row",flexWrap:"wrap",spacing:1.5,justifyContent:"flex-end",sx:{mt:3,color:"text.disabled"},children:[e.jsx(J,{variant:"contained",color:"inherit",size:"small",sx:{mt:1,bgcolor:"#e74c3c"},children:"Donate"}),e.jsxs(B,{direction:"column",sx:{...(a||l)&&{opacity:.48,color:"common.white"}},children:[e.jsx(S,{variant:"caption",children:"Raised:"}),e.jsx(S,{variant:"caption",children:"Target:"})]}),e.jsxs(B,{direction:"column",sx:{...(a||l)&&{opacity:.48,color:"common.white"}},children:[e.jsxs(S,{variant:"caption",children:[" ",Y(n)]}),e.jsx(S,{variant:"caption",children:Y(d)})]})]}),k=e.jsx(_,{component:"img",alt:r,src:s,sx:{top:0,width:1,height:1,objectFit:"cover",position:"absolute"}}),m=e.jsx(S,{variant:"caption",component:"div",sx:{mb:2,color:"text.disabled",...(a||l)&&{opacity:.48,color:"common.white"}},children:te(u)}),g=e.jsx($e,{color:"paper",src:"/assets/icons/shape-avatar.svg",sx:{width:80,height:36,zIndex:9,bottom:-15,position:"absolute",color:"background.paper",...(a||l)&&{display:"none"}}});return e.jsxs(ae,{xs:12,sm:a?12:6,md:a?6:3,children:[e.jsxs(Ne,{children:[e.jsxs(_,{sx:{position:"relative",pt:"calc(100% * 3 / 4)",...(a||l)&&{pt:"calc(100% * 4 / 3)","&:after":{top:0,content:"''",width:"100%",height:"100%",position:"absolute",bgcolor:h=>ke(h.palette.grey[900],.72)}},...a&&{pt:{xs:"calc(100% * 4 / 3)",sm:"calc(100% * 3 / 4.66)"}}},children:[g,k]}),e.jsxs(_,{sx:{p:h=>h.spacing(4,3,3,3),...(a||l)&&{width:1,bottom:0,position:"absolute"}},children:[m,v,P]})]}),e.jsx(ze,{open:x,onClose:()=>j(!1),richText:c,title:r})]})}ie.propTypes={project:q.object.isRequired,index:q.number};de.propTypes={projects:q.array.isRequired};function de({projects:o}){return e.jsx(Le,{sx:{width:280},autoHighlight:!0,popupIcon:null,slotProps:{paper:{sx:{width:320,[`& .${qe.option}`]:{typography:"body2"}}}},options:o,getOptionLabel:t=>t.title,isOptionEqualToValue:(t,s)=>t.id===s.id,renderInput:t=>e.jsx(D,{...t,placeholder:"Search articles...",InputProps:{...t.InputProps,startAdornment:e.jsx(Ae,{position:"start",children:e.jsx(se,{icon:"eva:search-fill",sx:{ml:1,width:20,height:20,color:"text.disabled"}})})}})})}le.Quill.register("modules/imageResize",Te);const ue=({onClose:o})=>{const[t,s]=p.useState(""),[c,r]=p.useState(""),[n,d]=p.useState(null),[u,a]=p.useState(!1),[l,x]=p.useState(!1),[j,f]=p.useState(""),v={height:"300px",width:"100%",overflow:"auto"},P=i=>{r(i)},k=i=>{const y=i.target.files[0];y&&d(y)},m=i=>{x(i.target.checked),i.target.checked||f("")},g=async()=>{a(!0);try{if(!n){alert("Please select an image"),a(!1);return}const i=Pe(ne(re,"projects")),y=we(),C=Se(y,`posts/${n.name}`);await Ie(C,n);const I=await Fe(C);await Re(i,{id:i.id,cover:I,title:t,content:c,createdAt:te(new Date),raisedAmount:0,goalAmount:j}),console.log("Product added with ID:",i.id),o()}catch(i){console.error("Error adding product:",i)}finally{a(!1)}},h={toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image","video"],["clean"]],clipboard:{matchVisual:!1},imageResize:{parchment:le.Quill.import("parchment"),modules:["Resize","DisplaySize"]}},L=["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","video"];return e.jsx("form",{children:e.jsxs(B,{spacing:2,children:[e.jsx(D,{label:"Title",value:t,onChange:i=>s(i.target.value),fullWidth:!0,required:!0}),e.jsx(xo,{control:e.jsx(lo,{checked:l,onChange:m}),label:"This project requires funding"}),l&&e.jsx(D,{label:"Goal Amount",type:"number",value:j,onChange:i=>f(i.target.value),fullWidth:!0,required:!0}),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          @media (min-width: 768px) {
            .quill-wrapper {
              height: 400px; // Larger height on larger screens
            }
          }
        `}),e.jsx("div",{className:"quill-wrapper",style:v,children:e.jsx(Me,{theme:"snow",value:c,onChange:P,modules:h,formats:L,bounds:".quill-wrapper",placeholder:"Write here",required:!0})})]}),e.jsxs(B,{direction:"row",spacing:2,style:{marginTop:"20px"},children:[e.jsx("input",{id:"file-input",type:"file",accept:"image/*",onChange:k,required:!0}),e.jsx(J,{onClick:g,variant:"contained",color:"primary",disabled:u,children:u?e.jsx(Oe,{size:24}):"Add Project"})]})]})})};ue.propTypes={onClose:q.func.isRequired};const fo=ue;function go(){const[o,t]=p.useState(!1),s=()=>t(!0),c=()=>t(!1),[r,n]=p.useState([]);return p.useEffect(()=>{(async()=>{try{const u=ne(re,"projects"),l=(await Be(u)).docs.map(x=>x.data());n(l)}catch(u){console.error("Error fetching projects:",u)}})()},[]),e.jsxs("section",{children:[e.jsx("span",{style:{margin:"80px"}}),e.jsxs(Ee,{children:[e.jsxs(B,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[e.jsx(S,{variant:"h4",children:"Projects"}),e.jsx(J,{variant:"contained",sx:{mt:1,bgcolor:"#e74c3c"},startIcon:e.jsx(se,{icon:"eva:plus-fill"}),onClick:s,children:"New Project"})]}),e.jsxs(B,{mb:5,direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(de,{projects:r}),e.jsx(ce,{options:[{value:"latest",label:"Latest"},{value:"popular",label:"Popular"},{value:"oldest",label:"Oldest"}]})]}),e.jsx(ae,{container:!0,spacing:3,children:r.map((d,u)=>e.jsx(ie,{project:d,index:u},d.id))})]}),e.jsxs(A,{show:o,onHide:c,children:[e.jsx(A.Header,{closeButton:!0,children:e.jsx(A.Title,{children:"Add New Project"})}),e.jsx(A.Body,{children:e.jsx(fo,{onClose:c})})]})]})}function wo(){return e.jsxs(e.Fragment,{children:[e.jsx(ye,{children:e.jsx("title",{children:" Projects | Bridge Of Hope "})}),e.jsx(go,{})]})}export{wo as default};