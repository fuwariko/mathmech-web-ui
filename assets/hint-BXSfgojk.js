import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,r as a,t as o}from"./emotion-css.esm-BqXpwIft.js";import{n as s,t as c}from"./color-tokens-CBhvVmg4.js";function l({children:e,content:t,position:n=`top`,backgroundColor:r=`darkGrey01`,textColor:a=`lightGrey02`,borderColor:o=`darkGrey01`,borderWidth:s=0,borderRadius:l=10,offset:p=8,className:m}){let h=(0,u.useId)();if(!(0,u.isValidElement)(e))throw Error(`Hint ожидает единственный ReactElement`);let g=`--hint-anchor-${h}`,_=()=>document.getElementById(h),v=e=>{let t=_();if(t)try{t.showPopover({source:e})}catch{}},y=()=>{let e=_();if(e)try{e.hidePopover()}catch{}},b=(e,t)=>n=>{e?.(n),t?.(n)},x=e;return(0,d.jsxs)(d.Fragment,{children:[(0,u.cloneElement)(x,{"aria-describedby":h,onMouseEnter:b(x.props.onMouseEnter,e=>v(e.currentTarget)),onMouseLeave:b(x.props.onMouseLeave,()=>y()),onFocus:b(x.props.onFocus,e=>v(e.currentTarget)),onBlur:b(x.props.onBlur,()=>y()),style:{...x.props.style,anchorName:g},className:i(x.props.className,m)}),(0,d.jsx)(`div`,{id:h,popover:`auto`,role:`tooltip`,style:{positionAnchor:g,background:c[r],color:c[a],border:`${s}px solid ${c[o]}`,borderRadius:l},className:f(n,p),children:t})]})}var u,d,f,p=t((()=>{a(),u=e(n(),1),s(),d=r(),f=(e,t)=>o`
  position: fixed;
  margin: 4px;
  padding: 8px 12px;

  min-width: max-content;
  max-width: 320px;

  box-sizing: border-box;

  font-size: 12px;
  line-height: 16px;

  z-index: 9999;
  pointer-events: none;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);

  position-area: ${e};

  opacity: 0;
  transition: opacity 0.18s ease, transform 0.18s ease;

  ${e===`top`&&`
    margin-bottom: ${t};
  `}

  ${e===`bottom`&&`
    margin-top: ${t};
  `}

  ${e===`left`&&`
    margin-right: ${t};
  `}

  ${e===`right`&&`
    margin-left: ${t};
  `}

  &:popover-open {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  &::backdrop {
    background: transparent;
  }
`,l.__docgenInfo={description:``,methods:[],displayName:`Hint`,props:{children:{required:!0,tsType:{name:`ReactElement`},description:``},content:{required:!0,tsType:{name:`ReactNode`},description:``},position:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom' | 'left' | 'right'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}},backgroundColor:{required:!1,tsType:{name:`unknown`},description:``,defaultValue:{value:`'darkGrey01'`,computed:!1}},textColor:{required:!1,tsType:{name:`unknown`},description:``,defaultValue:{value:`'lightGrey02'`,computed:!1}},borderColor:{required:!1,tsType:{name:`unknown`},description:``,defaultValue:{value:`'darkGrey01'`,computed:!1}},borderWidth:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},borderRadius:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`10`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},offset:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`8`,computed:!1}}}}}));export{p as n,l as t};