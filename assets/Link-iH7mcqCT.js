import{n as e}from"./chunk-BneVvdWh.js";import{a as t,i as n,r}from"./iframe-D3lb2UIJ.js";import{n as i,r as a,t as o}from"./emotion-css.esm-DZ62EKCi.js";var s,c,l,u,d=e((()=>{a(),r(),s=t(),c=({children:e,variant:t=`text`,underline:r=t===`text`?`always`:`none`,size:a=`medium`,color:o=`mainNavy`,textColor:c,radius:d,leftIcon:f,rightIcon:p,external:m=!1,disabled:h=!1,className:g,style:_,target:v,rel:y,href:b,onClick:x,...S})=>{let C=n(),w=m?`_blank`:v,T=m?Array.from(new Set([...y?.split(` `)??[],`noreferrer`,`noopener`])).join(` `):y;return(0,s.jsxs)(`a`,{...S,href:h?void 0:b,target:w,rel:T,"aria-disabled":h||void 0,tabIndex:h?-1:S.tabIndex,onClick:e=>{if(h){e.preventDefault();return}x?.(e)},style:_,className:i(l({variant:t,underline:r,size:a,background:C[o],textColor:c?C[c]:t===`button`?C.white:C[o],radius:d,disabled:h}),g),children:[f&&(0,s.jsx)(`span`,{"aria-hidden":`true`,className:u,children:f}),(0,s.jsx)(`span`,{children:e}),p&&(0,s.jsx)(`span`,{"aria-hidden":`true`,className:u,children:p})]})},l=({variant:e,underline:t,size:n,background:r,textColor:i,radius:a,disabled:s})=>o`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: fit-content;
  box-sizing: border-box;
  color: ${i};
  font-size: ${n===`large`?`16px`:n===`small`?`13px`:`14px`};
  font-weight: 500;
  line-height: 1.2;
  cursor: ${s?`default`:`pointer`};
  opacity: ${s?.55:1};
  pointer-events: ${s?`none`:`auto`};
  transition:
    opacity 0.2s ease,
    text-decoration-color 0.2s ease;

  ${e===`button`?o`
        min-height: ${n===`large`?`72px`:n===`small`?`36px`:`44px`};
        padding: ${n===`large`?`0 24px`:n===`small`?`0 14px`:`0 16px`};
        border-radius: ${a??(n===`large`?`20px`:`16px`)};
        background: ${r};
        text-decoration: none;
      `:o`
        padding: 0;
        background: transparent;
        text-decoration-line: ${t===`none`?`none`:`underline`};
        text-decoration-color: ${t===`hover`?`transparent`:`currentColor`};
        text-underline-offset: 0.2em;
      `}

  &:hover {
    opacity: ${s?.55:.9};
    ${t===`hover`?`text-decoration-color: currentColor;`:``}
  }

  &:active {
    transform: none;
  }
`,u=o`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
`,c.__docgenInfo={description:``,methods:[],displayName:`Link`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'text' | 'button'`,elements:[{name:`literal`,value:`'text'`},{name:`literal`,value:`'button'`}]},description:``,defaultValue:{value:`'text'`,computed:!1}},underline:{required:!1,tsType:{name:`union`,raw:`'always' | 'hover' | 'none'`,elements:[{name:`literal`,value:`'always'`},{name:`literal`,value:`'hover'`},{name:`literal`,value:`'none'`}]},description:``,defaultValue:{value:`variant === 'text' ? 'always' : 'none'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},description:``,defaultValue:{value:`'medium'`,computed:!1}},color:{required:!1,tsType:{name:`AppTheme`},description:``,defaultValue:{value:`'mainNavy'`,computed:!1}},textColor:{required:!1,tsType:{name:`AppTheme`},description:``},radius:{required:!1,tsType:{name:`string`},description:``},leftIcon:{required:!1,tsType:{name:`ReactNode`},description:``},rightIcon:{required:!1,tsType:{name:`ReactNode`},description:``},external:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}},composes:[`Omit`]}}));export{d as n,c as t};