import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r}from"./iframe-D3lb2UIJ.js";import{n as i,r as a,t as o}from"./styled-components.browser.esm-attkugRX.js";import{n as s,t as c}from"./open-DEl7si_N.js";import{i as l,n as u,r as d}from"./checkSelect-BQ2B27e0.js";var f,p,m,h,g,_,v,y,b,x,S,C=t((()=>{a(),f=i.div`
  position: relative;
  width: 100%;
  display: grid;
  gap: 6px;
  border: none;
`,p=i.label`
  color: var(--mm-textPrimary, #000);
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 6px;
  overflow-wrap: break-word;
  word-break: break-word;

  & span {
    color: var(--mm-error, #D41926);
  }; 
`,m=i.button`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  width: 100%;
  height: 48px;
  padding: 8px 16px;
  border: 1px solid var(--mm-mainGrey, #D3D3D3);
  border-radius: 10px;
  background: var(--mm-backgroundPrimary, #fff);
  color: var(--mm-textPrimary, #222);
  font-size: 14px;
  justify-content: space-between;
  cursor: pointer;

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    border-color: var(--mm-globalBlue, #1E4391);
  }
  
  &:focus-visible {
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--mm-globalBlue, #1E4391) 50%, transparent);
    outline: none;
  }

  ${({isError:e})=>e&&`
    border-color: var(--mm-error, #D41926);
    
    &:focus {
      border-color: var(--mm-error, #D41926);
    }
      
    &:focus-visible {
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--mm-error, #D41926) 70%, transparent);
    }
  `}
`,h=i.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${e=>e.$isPlaceholder&&o`
      color: var(--mm-textSecondary, #222);
    `}
`,g=i.div`
  height: 12px;
  width: 12px;
  margin-bottom: 3px;
  ${e=>e.$isOpen&&o`
      transform: rotate(180deg);
      margin-bottom: 0;
      margin-top: 3px;
    `}
`,_=i.ul`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  z-index: 10;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--mm-mainGrey, #cbd5e1);
  border-radius: 10px;
  background: var(--mm-backgroundPrimary, #fff);
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
    background-color: var(--mm-mainGrey, #d3d3d3);
    border-radius: 10px;
  }
`,v=i.li`
  display: flex;
  z-index: 1;
  width: 100%;
  border: 0;
  background: transparent;
  color: var(--mm-textPrimary, #000);
  text-align: left;
  cursor: pointer;
  box-sizing: border-box;
  min-height: 48px;
  height: 100%;
  background-color: var(--mm-backgroundPrimary, #fff);
  border: 1px solid transparent;
  border-bottom: 1px solid var(--mm-mainGrey, #CAD1E1);
  padding: 13px 16px;
  padding-left: 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  & img {
    margin-right: 8px;
  }

  ${e=>e.$active&&o`
      background: var(--mm-backgroundSecondary, #eff6ff);
      border: 1px solid var(--mm-globalBlue, #1E4391);
    `}

  ${e=>e.$selected&&o`
      font-weight: 600;
      padding-left: 16px;
    `}

  &:disabled {
    color: var(--mm-textTertiary, #9ca3af);
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid var(--mm-globalBlue, #1E4391);
    outline-offset: 2px;
  }
`,y=i.div`
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  color: var(--mm-error, #D41926);
  top: 90px;
  overflow-wrap: break-word;
  word-break: break-word;
`,b=i.ul`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  max-width: 100%;
  gap: 4px;
  padding: 0;
  margin: 0;

  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 7px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: content-box;
    border: 2px solid transparent;
    background-color: var(--mm-mainGrey, #d3d3d3);
    border-radius: 10px;
  }
`,x=i.li`
  gap: 10px;
  color: var(--mm-textPrimary, #222);
  display: flex;
  font-weight: 400;
  font-size: 12px;
  line-height: 16.8px;
  background-color: var(--mm-lightBlue02, #e7f2ff);
  padding: 8px 12px;
  margin: 2px;
  height: 33px;
  border-radius: 8px;
  box-sizing: border-box;
  
  &:focus-visible {
    outline: 1px solid var(--mm-globalBlue, #1E4391);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--mm-globalBlue, #1E4391) 50%, transparent);
    outline-offset: 1px;
  }
`,S=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  padding: 1px;
  font-size: 12px;
  line-height: 1;
  transition: background 0.2s;
  background: transparent;

  &[disabled] {
    cursor: not-allowed;
  }

  &:hover {
    background: color-mix(in srgb, var(--mm-globalBlue, #1E4391) 8%, transparent);
  }

  &[disabled]:hover {
    background: transparent;
  }

  &:focus-visible {
    outline: 1px solid var(--mm-globalBlue, #1E4391);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--mm-globalBlue, #1E4391) 50%, transparent);
    outline-offset: 1px;
  }

  img {
    width: 10px;
    height: 10px;
  }
`})),w,T,E,D=t((()=>{w=e(n(),1),C(),c(),d(),u(),T=r(),E=({id:e,name:t,label:n,placeholder:r=`Выберите значения`,options:i,value:a,defaultValue:o=[],disabled:c,required:u,isError:d,errorMessage:C,className:E,onChange:D})=>{let O=`${e??t??`multiselect`}-listbox`,k=`${e??t??`multiselect`}-label`,A=`${e??t??`multiselect`}-error`,j=a!==void 0,[M,N]=(0,w.useState)(o),[P,F]=(0,w.useState)(!1),[I,L]=(0,w.useState)(0),R=(0,w.useRef)(null),z=j?a:M,B=(0,w.useMemo)(()=>i.filter(e=>z.includes(e.value)),[z,i]),V=e=>{if(e.disabled)return;let t=z.includes(e.value),n;n=t?z.filter(t=>t!==e.value):[...z,e.value],j||N(n);let r=i.filter(e=>n.includes(e.value));D?.(n,r),R.current?.focus()},H=(e,t)=>{t.stopPropagation(),t.preventDefault();let n=z.filter(t=>t!==e);j||N(n);let r=i.filter(e=>n.includes(e.value));D?.(n,r),R.current?.focus()},U=B.length>0?i.findIndex(e=>e.value===B[B.length-1].value):0,W=U>=0?U:0,G=e=>{if(!c)switch(e.key){case`ArrowDown`:e.preventDefault(),P||L(W),F(!0),L(e=>e+1>=i.length?0:e+1);break;case`ArrowUp`:e.preventDefault(),P||L(W),F(!0),L(e=>e-1<0?i.length-1:e-1);break;case`Enter`:case` `:if(e.preventDefault(),P){let e=i[I];e&&V(e)}else L(W),F(!0);break;case`Escape`:e.preventDefault(),F(!1);break;case`Tab`:F(!1);break;case`Backspace`:if(z.length>0&&!P){e.preventDefault();let t=z.slice(0,-1);j||N(t);let n=i.filter(e=>t.includes(e.value));D?.(t,n)}break;default:break}};return(0,T.jsxs)(f,{className:E,children:[n&&(0,T.jsxs)(p,{id:k,htmlFor:e,children:[n,u&&(0,T.jsx)(`span`,{"aria-hidden":`true`,children:`*`})]}),(0,T.jsxs)(m,{isError:d,ref:R,id:e,type:`button`,role:`combobox`,"aria-required":u?!0:void 0,"aria-labelledby":n?k:void 0,"aria-controls":O,"aria-expanded":P,"aria-haspopup":`listbox`,"aria-invalid":d||void 0,"aria-describedby":d?A:void 0,"aria-activedescendant":P?`${O}-option-${i[I]?.value}`:void 0,disabled:c,onClick:()=>{c||(P||L(W),F(e=>!e))},onKeyDown:G,children:[(0,T.jsx)(b,{children:B.length===0?(0,T.jsx)(h,{$isPlaceholder:!0,children:r}):B.map(e=>(0,T.jsxs)(x,{tabIndex:0,role:`option`,"aria-selected":`true`,"aria-label":e.label,onKeyDown:t=>{(t.key===`Backspace`||t.key===`Delete`)&&(t.preventDefault(),H(e.value,t))},children:[e.label,(0,T.jsx)(S,{type:`button`,onClick:t=>H(e.value,t),tabIndex:-1,disabled:c,"aria-label":`Удалить ${e.label}`,children:(0,T.jsx)(`img`,{src:l,alt:``,"aria-hidden":!0})})]},e.value))}),(0,T.jsx)(g,{"aria-hidden":!0,$isOpen:P,children:(0,T.jsx)(`img`,{src:s,alt:``})})]}),(0,T.jsx)(`input`,{type:`hidden`,name:t,value:JSON.stringify(z)}),P&&(0,T.jsx)(_,{id:O,role:`listbox`,"aria-labelledby":n?k:void 0,"aria-multiselectable":`true`,children:i.map((e,t)=>{let n=z.includes(e.value),r=t===I;return(0,T.jsxs)(v,{tabIndex:-1,id:`${O}-option-${e.value}`,role:`option`,"aria-selected":n,"aria-disabled":e.disabled||void 0,$active:r,$selected:n,onMouseEnter:()=>L(t),onClick:()=>V(e),children:[n&&(0,T.jsx)(`img`,{src:`data:image/svg+xml,%3csvg%20width='16'%20height='14'%20viewBox='0%200%2016%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%209.02476C1%209.02476%203.72017%2011.7289%206.18442%2012.9653C7.74622%2013.7489%2015%201%2015%201'%20stroke='%231F4492'%20stroke-width='2'%20stroke-miterlimit='16'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e`,alt:``,"aria-hidden":!0}),e.label]},e.value)})}),d&&C&&(0,T.jsx)(y,{id:A,role:`alert`,children:C})]})},E.__docgenInfo={description:``,methods:[],displayName:`MultiSelect`,props:{id:{required:!1,tsType:{name:`string`},description:``},name:{required:!1,tsType:{name:`string`},description:``},label:{required:!1,tsType:{name:`string`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Выберите значения'`,computed:!1}},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  value: string;
  label: string;
  disabled?: boolean;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`MultiselectOption[]`},description:``},value:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},defaultValue:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``,defaultValue:{value:`[]`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},isError:{required:!1,tsType:{name:`boolean`},description:``},errorMessage:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string[], options: MultiselectOption[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`value`},{type:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  value: string;
  label: string;
  disabled?: boolean;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`MultiselectOption[]`},name:`options`}],return:{name:`void`}}},description:``}}}}));export{D as n,E as t};