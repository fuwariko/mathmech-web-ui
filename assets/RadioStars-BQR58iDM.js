import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-B6lWK8m9.js";import{c as i,f as a,l as o}from"./Icons-B9j9ZF3b.js";import{n as s,t as c}from"./emotion-styled.browser.esm-CJX6AVeg.js";var l,u,d,f,p,m=t((()=>{c(),l=s.section`
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
    aria-hidden="true";

  & img {
    width: 60px;
    height: 60px;
    alt="Звезда";
    role="none";
    ${({$isMobile:e})=>e?`
        width: 50px;
        height: 50px;
      `:``}
  }
`,p=s.span`
  font-family: 'Montserrat', sans-serif;
  color: #D41926;
  font-weight: bolder;
  font-size: 24px;
`})),h,g,_,v=t((()=>{h=e(n(),1),m(),a(),g=r(),_=({rating:e,setRating:t,activeColor:n=`#C25400`,inactiveColor:r=`#D9D9D9`,hoverColor:a=`#FFB26B`,isError:s,isMobile:c,className:m})=>{let[_,v]=(0,h.useState)(null),y=c?24:48,b=t=>t<=(_??e)?_===null?n:a:r;return(0,g.jsxs)(l,{children:[(0,g.jsx)(u,{role:`radiogroup`,isError:s,className:m,children:[1,2,3,4,5].map(n=>{let r=n<=(_??e),a=b(n);return(0,g.jsxs)(`label`,{onMouseEnter:()=>v(n),onMouseLeave:()=>v(null),children:[(0,g.jsx)(d,{type:`radio`,name:`rating`,value:n,checked:n===e,onChange:()=>t(n)}),(0,g.jsx)(f,{$isMobile:c,children:r?(0,g.jsx)(i,{size:y,color:a}):(0,g.jsx)(o,{size:y,color:a})})]},n)})}),s&&(0,g.jsx)(p,{role:`alert`,id:`error-label`,children:`Поставьте оценку`})]})},_.__docgenInfo={description:``,methods:[],displayName:`RadioStars`,props:{rating:{required:!0,tsType:{name:`number`},description:``},setRating:{required:!0,tsType:{name:`ReactDispatch`,raw:`React.Dispatch<React.SetStateAction<number>>`,elements:[{name:`ReactSetStateAction`,raw:`React.SetStateAction<number>`,elements:[{name:`number`}]}]},description:``},activeColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'#C25400'`,computed:!1}},inactiveColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'#D9D9D9'`,computed:!1}},hoverColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'#FFB26B'`,computed:!1}},isError:{required:!1,tsType:{name:`boolean`},description:``},isMobile:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}}));export{v as n,_ as t};