import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,r as a,t as o}from"./styled-components.browser.esm--CeN3I0W.js";import{n as s,t as c}from"./open-CP-2x76Y.js";var l,u,d,f,p,m,h,g,_=t((()=>{a(),l=i.div`
  position: relative;
  width: 100%;
  display: grid;
  gap: 6px;
  border: none;
`,u=i.label`
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 6px;
  overflow-wrap: break-word;
  word-break: break-word;

  & span {
    color: #D41926;
  }; 
`,d=i.button`
  width: 100%;
  height: 48px;
  padding: 14px 16px;
  border: 1px solid #D3D3D3;
  border-radius: 10px;
  background: #fff;
  color: #222;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    border-color: #1E4391;
  }
  
  &:focus-visible {
    box-shadow: 0 0 0 2px #1e429179;
    outline: none;
  }

  ${({isError:e})=>e&&`
    border-color: #D41926;
    
    &:focus {
      border-color: #D41926;
    }
      
    &:focus-visible {
      box-shadow: 0 0 0 2px #d41925b0;
    }
  `}
`,f=i.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${e=>e.$isPlaceholder&&o`
      color: #222;
    `}
`,p=i.div`
  height: 12px;
  width: 12px;
  margin-bottom: 3px;
  ${e=>e.$isOpen&&o`
      transform: rotate(180deg);
      margin-bottom: 0;
      margin-top: 3px;
    `}
`,m=i.ul`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  z-index: 10;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.12);
  max-height: 195px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
    &::-webkit-scrollbar-thumb {
    background-clip: content-box;
    border: 2px solid transparent;
    background-color: #d3d3d3;
    border-radius: 10px;
  }
`,h=i.li`
  width: 100%;
  border: 0;
  background: transparent;
  color: #000;
  text-align: left;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
  min-height: 48px;
  height: 100%;
  background-color: #fff;
  border: 1px solid transparent;
  border-bottom: 1px solid #CAD1E1;
  padding: 13px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  

    ${e=>e.$active&&o`
      background: #eff6ff;
      border: 1px solid #1E4391;
    `}

  ${e=>e.$selected&&o`
      font-weight: 600;
    `}

  &:disabled {
    color: #9ca3af;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`,g=i.div`
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  color: #D41926;
  top: 90px;
  overflow-wrap: break-word;
  word-break: break-word;
`})),v,y,b,x=t((()=>{v=e(n(),1),_(),c(),y=r(),b=({id:e,name:t,label:n,placeholder:r=`Выберите значение`,options:i,value:a,defaultValue:o,disabled:c,required:_,isError:b,errorMessage:x,className:S,onChange:C})=>{let w=`${e??t??`select`}-listbox`,T=`${e??t??`select`}-label`,E=`${e??t??`select`}-error`,D=a!==void 0,[O,k]=(0,v.useState)(o??``),[A,j]=(0,v.useState)(!1),[M,N]=(0,v.useState)(0),P=(0,v.useRef)(null),F=D?a:O,I=(0,v.useMemo)(()=>i.find(e=>e.value===F),[F,i]),L=I?i.findIndex(e=>e.value===I.value):0,R=L>=0?L:0,z=e=>{e.disabled||(D||k(e.value),C?.(e.value,e),j(!1),P.current?.focus())},B=e=>{if(!c)switch(e.key){case`ArrowDown`:e.preventDefault(),A||N(R),j(!0),N(e=>e+1>=i.length?0:e+1);break;case`ArrowUp`:e.preventDefault(),A||N(R),j(!0),N(e=>e-1<0?i.length-1:e-1);break;case`Enter`:case` `:if(e.preventDefault(),A){let e=i[M];e&&z(e)}else N(R),j(!0);break;case`Escape`:e.preventDefault(),j(!1);break;case`Tab`:j(!1);break;default:break}};return(0,y.jsxs)(l,{className:S,children:[n&&(0,y.jsxs)(u,{id:T,htmlFor:e,children:[n,_&&(0,y.jsx)(`span`,{"aria-hidden":`true`,children:`*`})]}),(0,y.jsxs)(d,{isError:b,ref:P,id:e,type:`button`,role:`combobox`,"aria-labelledby":n?T:void 0,"aria-controls":w,"aria-expanded":A,"aria-haspopup":`listbox`,"aria-required":_?!0:void 0,"aria-invalid":b||void 0,"aria-describedby":b?E:void 0,"aria-activedescendant":A?`${w}-option-${i[M]?.value}`:void 0,disabled:c,onClick:()=>{c||(A||N(R),j(e=>!e))},onKeyDown:B,children:[(0,y.jsx)(f,{$isPlaceholder:!I,children:I?.label??r}),(0,y.jsx)(p,{$isOpen:A,"aria-hidden":!0,children:(0,y.jsx)(`img`,{src:s,alt:``})})]}),(0,y.jsx)(`input`,{type:`hidden`,name:t,value:F}),A&&(0,y.jsx)(m,{id:w,role:`listbox`,"aria-labelledby":n?T:void 0,children:i.map((e,t)=>{let n=e.value===F,r=t===M;return(0,y.jsx)(h,{tabIndex:-1,id:`${w}-option-${e.value}`,role:`option`,"aria-selected":M===t,"aria-disabled":e.disabled||void 0,$active:r,$selected:n,onMouseEnter:()=>N(t),onClick:()=>z(e),children:e.label},e.value)})}),b&&x&&(0,y.jsx)(g,{id:E,role:`alert`,children:x})]})},b.__docgenInfo={description:``,methods:[],displayName:`Select`,props:{id:{required:!1,tsType:{name:`string`},description:``},name:{required:!1,tsType:{name:`string`},description:``},label:{required:!1,tsType:{name:`string`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Выберите значение'`,computed:!1}},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  value: string;
  label: string;
  disabled?: boolean;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`SelectOption[]`},description:``},value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},isError:{required:!1,tsType:{name:`boolean`},description:``},errorMessage:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string, option: SelectOption) => void`,signature:{arguments:[{type:{name:`string`},name:`value`},{type:{name:`signature`,type:`object`,raw:`{
  value: string;
  label: string;
  disabled?: boolean;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}},name:`option`}],return:{name:`void`}}},description:``}}}}));export{x as n,b as t};