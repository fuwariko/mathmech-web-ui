import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{d as i,m as a,u as o}from"./Icons-Dz2YVI0X.js";import{n as s,t as c}from"./emotion-styled.browser.esm-C2R1kT_i.js";var l,u,d,f,p,m=t((()=>{c(),l=s.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`,u=s.fieldset`
  display: flex;
  justify-content: center;
  gap: 6px;
  padding: 0;
  border: none;
  margin: 0 0 10px 0;

  ${({isError:e})=>e?`
        border: 2px solid #D41926;
      `:``}
`,d=s.input`
  position: absolute;
  cursor: pointer;
  opacity: 0;

  &:focus + div span {
    opacity: 1;
    transform: scale(1);
  }
`,s.span`
  position: absolute;
  inset: -8px;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 165, 0, 0.6) 0%,
    rgba(255, 165, 0, 0.3) 40%,
    rgba(255, 165, 0, 0) 70%
  );
  opacity: 0;
  transform: scale(0.6);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  z-index: -1;
  }
`,f=s.div`
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    height: auto;
    align-items: center;
    cursor: pointer;

  & svg {
    display: block;
  }
`,p=s.span`
  font-family: 'Montserrat', sans-serif;
  color: #D41926;
  font-weight: bolder;
  font-size: 24px;
`})),h,g,_=t((()=>{h=e=>Math.min(5,Math.max(0,Math.round(e))),g=(e,t,n=null)=>e<=h(n??t)})),v,y,b,x=t((()=>{v=e(n(),1),m(),a(),_(),y=r(),b=({rating:e,setRating:t,activeColor:n=`#C25400`,inactiveColor:r=`#D9D9D9`,hoverColor:a=`#FFB26B`,isError:s,isMobile:c,name:m,ariaLabel:h=`Оценка`,className:_})=>{let[b,x]=(0,v.useState)(null),S=(0,v.useId)(),C=m??`rating-${S}`,w=c?24:48,T=t=>g(t,e,b)?b===null?n:a:r;return(0,y.jsxs)(l,{children:[(0,y.jsx)(u,{role:`radiogroup`,"aria-label":h,"aria-invalid":s||void 0,"aria-describedby":s?`${C}-error`:void 0,isError:s,className:_,children:[1,2,3,4,5].map(n=>{let r=g(n,e,b),a=T(n);return(0,y.jsxs)(`label`,{onMouseEnter:()=>x(n),onMouseLeave:()=>x(null),children:[(0,y.jsx)(d,{type:`radio`,name:C,value:n,checked:n===e,"aria-label":`${n} из 5`,onChange:()=>t(n)}),(0,y.jsx)(f,{$isMobile:c,children:r?(0,y.jsx)(o,{size:w,color:a}):(0,y.jsx)(i,{size:w,color:a})})]},n)})}),s&&(0,y.jsx)(p,{role:`alert`,id:`${C}-error`,children:`Поставьте оценку`})]})},b.__docgenInfo={description:``,methods:[],displayName:`RadioStars`,props:{rating:{required:!0,tsType:{name:`number`},description:``},setRating:{required:!0,tsType:{name:`ReactDispatch`,raw:`React.Dispatch<React.SetStateAction<number>>`,elements:[{name:`ReactSetStateAction`,raw:`React.SetStateAction<number>`,elements:[{name:`number`}]}]},description:``},activeColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'#C25400'`,computed:!1}},inactiveColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'#D9D9D9'`,computed:!1}},hoverColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'#FFB26B'`,computed:!1}},isError:{required:!1,tsType:{name:`boolean`},description:``},isMobile:{required:!1,tsType:{name:`boolean`},description:``},name:{required:!1,tsType:{name:`string`},description:``},ariaLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Оценка'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}}));export{x as n,b as t};