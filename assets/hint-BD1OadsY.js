import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-B6lWK8m9.js";import{n as i,r as a,t as o}from"./emotion-css.esm-nW0xTD3m.js";import{n as s,t as c}from"./color-tokens-BPpBLVR4.js";function l({children:e,content:t,position:n=`top`,backgroundColor:r=`darkGrey01`,textColor:a=`lightGrey02`,borderColor:o=`darkGrey01`,borderWidth:s=0,borderRadius:l=10,offset:p=8,className:m}){let h=(0,u.useId)();if(!(0,u.isValidElement)(e))throw Error(`Hint ожидает единственный ReactElement`);let g=`--hint-anchor-${h}`,_=()=>document.getElementById(h),v=e=>{let t=_();if(t)try{t.showPopover({source:e})}catch{}},y=()=>{let e=_();if(e)try{e.hidePopover()}catch{}},b=(e,t)=>n=>{e?.(n),t?.(n)};return(0,d.jsxs)(d.Fragment,{children:[(0,u.cloneElement)(e,{"aria-describedby":h,onMouseEnter:b(e.props.onMouseEnter,e=>v(e.currentTarget)),onMouseLeave:b(e.props.onMouseLeave,()=>y()),onFocus:b(e.props.onFocus,e=>v(e.currentTarget)),onBlur:b(e.props.onBlur,()=>y()),style:{...e.props.style,anchorName:g},className:i(e.props.className,m)}),(0,d.jsx)(`div`,{id:h,popover:`auto`,role:`tooltip`,style:{positionAnchor:g,background:c[r],color:c[a],border:`${s}px solid ${c[o]}`,borderRadius:l},className:f(n,p),children:t})]})}var u,d,f,p=t((()=>{a(),u=e(n(),1),s(),d=r(),f=(e,t)=>o`
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
`,l.__docgenInfo={description:``,methods:[],displayName:`Hint`,props:{children:{required:!0,tsType:{name:`ReactElement`},description:``},content:{required:!0,tsType:{name:`ReactNode`},description:``},position:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom' | 'left' | 'right'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}},backgroundColor:{required:!1,tsType:{name:`union`,raw:`keyof typeof allColors`,elements:[{name:`literal`,value:`darkNavy01`},{name:`literal`,value:`darkNavy02`},{name:`literal`,value:`mainNavy`},{name:`literal`,value:`lightNavy01`},{name:`literal`,value:`lightNavy02`},{name:`literal`,value:`darkOrange01`},{name:`literal`,value:`darkOrange02`},{name:`literal`,value:`mainOrange`},{name:`literal`,value:`lightOrange01`},{name:`literal`,value:`lightOrange02`},{name:`literal`,value:`darkGreen01`},{name:`literal`,value:`darkGreen02`},{name:`literal`,value:`mainGreen`},{name:`literal`,value:`lightGreen01`},{name:`literal`,value:`lightGreen02`},{name:`literal`,value:`darkRed01`},{name:`literal`,value:`darkRed02`},{name:`literal`,value:`mainRed`},{name:`literal`,value:`lightRed01`},{name:`literal`,value:`lightRed02`},{name:`literal`,value:`darkCrimson01`},{name:`literal`,value:`darkCrimson02`},{name:`literal`,value:`mainCrimson`},{name:`literal`,value:`lightCrimson01`},{name:`literal`,value:`lightCrimson02`},{name:`literal`,value:`darkBlue01`},{name:`literal`,value:`darkBlue02`},{name:`literal`,value:`mainBlue`},{name:`literal`,value:`lightBlue01`},{name:`literal`,value:`lightBlue02`},{name:`literal`,value:`darkPurple01`},{name:`literal`,value:`darkPurple02`},{name:`literal`,value:`mainPurple`},{name:`literal`,value:`lightPurple01`},{name:`literal`,value:`lightPurple02`},{name:`literal`,value:`darkGrey01`},{name:`literal`,value:`darkGrey02`},{name:`literal`,value:`mainGrey`},{name:`literal`,value:`lightGrey01`},{name:`literal`,value:`lightGrey02`}]},description:``,defaultValue:{value:`'darkGrey01'`,computed:!1}},textColor:{required:!1,tsType:{name:`union`,raw:`keyof typeof allColors`,elements:[{name:`literal`,value:`darkNavy01`},{name:`literal`,value:`darkNavy02`},{name:`literal`,value:`mainNavy`},{name:`literal`,value:`lightNavy01`},{name:`literal`,value:`lightNavy02`},{name:`literal`,value:`darkOrange01`},{name:`literal`,value:`darkOrange02`},{name:`literal`,value:`mainOrange`},{name:`literal`,value:`lightOrange01`},{name:`literal`,value:`lightOrange02`},{name:`literal`,value:`darkGreen01`},{name:`literal`,value:`darkGreen02`},{name:`literal`,value:`mainGreen`},{name:`literal`,value:`lightGreen01`},{name:`literal`,value:`lightGreen02`},{name:`literal`,value:`darkRed01`},{name:`literal`,value:`darkRed02`},{name:`literal`,value:`mainRed`},{name:`literal`,value:`lightRed01`},{name:`literal`,value:`lightRed02`},{name:`literal`,value:`darkCrimson01`},{name:`literal`,value:`darkCrimson02`},{name:`literal`,value:`mainCrimson`},{name:`literal`,value:`lightCrimson01`},{name:`literal`,value:`lightCrimson02`},{name:`literal`,value:`darkBlue01`},{name:`literal`,value:`darkBlue02`},{name:`literal`,value:`mainBlue`},{name:`literal`,value:`lightBlue01`},{name:`literal`,value:`lightBlue02`},{name:`literal`,value:`darkPurple01`},{name:`literal`,value:`darkPurple02`},{name:`literal`,value:`mainPurple`},{name:`literal`,value:`lightPurple01`},{name:`literal`,value:`lightPurple02`},{name:`literal`,value:`darkGrey01`},{name:`literal`,value:`darkGrey02`},{name:`literal`,value:`mainGrey`},{name:`literal`,value:`lightGrey01`},{name:`literal`,value:`lightGrey02`}]},description:``,defaultValue:{value:`'lightGrey02'`,computed:!1}},borderColor:{required:!1,tsType:{name:`union`,raw:`keyof typeof allColors`,elements:[{name:`literal`,value:`darkNavy01`},{name:`literal`,value:`darkNavy02`},{name:`literal`,value:`mainNavy`},{name:`literal`,value:`lightNavy01`},{name:`literal`,value:`lightNavy02`},{name:`literal`,value:`darkOrange01`},{name:`literal`,value:`darkOrange02`},{name:`literal`,value:`mainOrange`},{name:`literal`,value:`lightOrange01`},{name:`literal`,value:`lightOrange02`},{name:`literal`,value:`darkGreen01`},{name:`literal`,value:`darkGreen02`},{name:`literal`,value:`mainGreen`},{name:`literal`,value:`lightGreen01`},{name:`literal`,value:`lightGreen02`},{name:`literal`,value:`darkRed01`},{name:`literal`,value:`darkRed02`},{name:`literal`,value:`mainRed`},{name:`literal`,value:`lightRed01`},{name:`literal`,value:`lightRed02`},{name:`literal`,value:`darkCrimson01`},{name:`literal`,value:`darkCrimson02`},{name:`literal`,value:`mainCrimson`},{name:`literal`,value:`lightCrimson01`},{name:`literal`,value:`lightCrimson02`},{name:`literal`,value:`darkBlue01`},{name:`literal`,value:`darkBlue02`},{name:`literal`,value:`mainBlue`},{name:`literal`,value:`lightBlue01`},{name:`literal`,value:`lightBlue02`},{name:`literal`,value:`darkPurple01`},{name:`literal`,value:`darkPurple02`},{name:`literal`,value:`mainPurple`},{name:`literal`,value:`lightPurple01`},{name:`literal`,value:`lightPurple02`},{name:`literal`,value:`darkGrey01`},{name:`literal`,value:`darkGrey02`},{name:`literal`,value:`mainGrey`},{name:`literal`,value:`lightGrey01`},{name:`literal`,value:`lightGrey02`}]},description:``,defaultValue:{value:`'darkGrey01'`,computed:!1}},borderWidth:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},borderRadius:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`10`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},offset:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`8`,computed:!1}}}}}));export{p as n,l as t};