import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r,i,r as a}from"./iframe-D3lb2UIJ.js";import{n as o,r as s,t as c}from"./emotion-css.esm-DZ62EKCi.js";function l({children:e,content:t,position:n=`top`,backgroundColor:r=`hintBackground`,textColor:a=`lightGrey02`,borderColor:s=`darkGrey01`,borderWidth:c=0,borderRadius:l=10,offset:p=8,className:m}){let h=i(),g=(0,u.useId)();if(!(0,u.isValidElement)(e))throw Error(`Hint ожидает единственный ReactElement`);let _=`--hint-anchor-${g}`,v=()=>document.getElementById(g),y=e=>{let t=v();if(t)try{t.showPopover({source:e})}catch{}},b=()=>{let e=v();if(e)try{e.hidePopover()}catch{}},x=(e,t)=>n=>{e?.(n),t?.(n)},S=e;return(0,d.jsxs)(d.Fragment,{children:[(0,u.cloneElement)(S,{"aria-describedby":g,onMouseEnter:x(S.props.onMouseEnter,e=>y(e.currentTarget)),onMouseLeave:x(S.props.onMouseLeave,()=>b()),onFocus:x(S.props.onFocus,e=>y(e.currentTarget)),onBlur:x(S.props.onBlur,()=>b()),style:{...S.props.style,anchorName:_},className:o(S.props.className,m)}),(0,d.jsx)(`div`,{id:g,popover:`auto`,role:`tooltip`,style:{positionAnchor:_,background:h[r],color:h[a],border:`${c}px solid ${h[s]}`,borderRadius:l},className:f(n,p),children:t})]})}var u,d,f,p=t((()=>{s(),u=e(n(),1),a(),d=r(),f=(e,t)=>c`
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
`,l.__docgenInfo={description:``,methods:[],displayName:`Hint`,props:{children:{required:!0,tsType:{name:`ReactElement`},description:``},content:{required:!0,tsType:{name:`ReactNode`},description:``},position:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom' | 'left' | 'right'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}},backgroundColor:{required:!1,tsType:{name:`AppTheme`},description:``,defaultValue:{value:`'hintBackground'`,computed:!1}},textColor:{required:!1,tsType:{name:`AppTheme`},description:``,defaultValue:{value:`'lightGrey02'`,computed:!1}},borderColor:{required:!1,tsType:{name:`AppTheme`},description:``,defaultValue:{value:`'darkGrey01'`,computed:!1}},borderWidth:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},borderRadius:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`10`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},offset:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`8`,computed:!1}}}}}));export{p as n,l as t};