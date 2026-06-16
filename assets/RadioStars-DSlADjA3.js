import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r}from"./iframe-D3lb2UIJ.js";import{d as i,m as a,u as o}from"./Icons-_Yn1YYY_.js";import{n as s,t as c}from"./emotion-styled.browser.esm-BHLNlsSj.js";var l,u,d,f,p,m,h=t((()=>{c(),l=s.section`
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
`,f=s.span`
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
`,p=s.div`
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
`,m=s.span`
  font-family: 'Montserrat', sans-serif;
  color: #D41926;
  font-weight: bolder;
  font-size: 24px;
`})),g,_,v=t((()=>{e(n(),1),h(),a(),g=r(),_=({name:e=`rating`,rating:t,setRating:n,isError:r,isMobile:a,className:s})=>{let c=a?24:48,h=e=>{n(e)};return(0,g.jsxs)(l,{children:[(0,g.jsx)(u,{role:`radiogroup`,"aria-labelledby":r?`error-label`:void 0,isError:r,className:s,children:[1,2,3,4,5].map(n=>(0,g.jsxs)(`label`,{title:n.toString(),children:[(0,g.jsx)(d,{name:e,value:n,id:`${n}-star`,type:`radio`,onChange:()=>h(n),"aria-label":`Оценка ${n}`,"aria-checked":n===t?`true`:`false`}),n<=t?(0,g.jsxs)(p,{$isMobile:a,children:[(0,g.jsx)(f,{}),(0,g.jsx)(o,{size:c,color:`#FFB26B`,"aria-hidden":`true`})]}):(0,g.jsxs)(p,{$isMobile:a,children:[(0,g.jsx)(f,{}),(0,g.jsx)(i,{size:c,color:`#FFB26B`,"aria-hidden":`true`})]})]}))}),r&&(0,g.jsx)(m,{role:`alert`,id:`error-label`,children:`Поставьте оценку`})]})},_.__docgenInfo={description:``,methods:[],displayName:`RadioStars`,props:{name:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"rating"`,computed:!1}},rating:{required:!0,tsType:{name:`number`},description:``},setRating:{required:!0,tsType:{name:`ReactDispatch`,raw:`React.Dispatch<React.SetStateAction<number>>`,elements:[{name:`ReactSetStateAction`,raw:`React.SetStateAction<number>`,elements:[{name:`number`}]}]},description:``},isError:{required:!1,tsType:{name:`boolean`},description:``},isMobile:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}}));export{v as n,_ as t};