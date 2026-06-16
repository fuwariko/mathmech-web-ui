import{n as e}from"./chunk-BneVvdWh.js";import{a as t,i as n,r}from"./iframe-D3lb2UIJ.js";import{n as i,r as a,t as o}from"./emotion-css.esm-DZ62EKCi.js";var s,c,l,u=e((()=>{a(),r(),s=t(),c=({children:e,icon:t,disabled:r=!1,color:a,borderColor:o,variant:c=`primary`,size:u,textColor:d,radius:f,bareIcon:p=!1,onClick:m,className:h,style:g,..._})=>{let v=n(),y=!!t&&!e,b=y&&p,x=_[`aria-label`]??(y?`Действие`:void 0),S=u??v.buttonSizeDefault;return(0,s.jsxs)(`button`,{..._,"aria-label":x,disabled:r,onClick:m,style:g,className:i(l.base(v,r,d,b),l.variant(v,c,a,o,b),l.size(v,S,y,b),l.radius(S,f),h),children:[t&&(0,s.jsx)(`span`,{className:l.icon,children:t}),e]})},l={base:(e,t,n,r)=>o`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: fit-content;
    box-sizing: border-box;
    border: 1px solid transparent;
    cursor: ${t?`default`:`pointer`};
    color: ${n?e[n]:r?e.textPrimary:e.buttonColorText};
    font-weight: 500;
    opacity: ${t?.5:1};
    pointer-events: ${t?`none`:`auto`};
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease,
      color 0.2s ease,
      opacity 0.2s ease,
      transform 0.2s ease;

    &:hover {
      opacity: ${t?.5:.9};
    }

    &:active {
      transform: none;
    }
  `,variant:(e,t,n,r,i)=>i?o`
        background: transparent;
        border-color: transparent;
      `:o`
      background: ${n?e[n]:{primary:e.buttonColorPrimary,secondary:e.buttonColorSecondary,danger:e.buttonColorDanger}[t]};
      border-color: ${r?e[r]:`transparent`};
    `,size:(e,t,n,r)=>r?o`
        height: auto;
        min-width: 0;
        padding: 0;
        font-size: ${t===`large`?e.buttonFontSizeL:e.buttonFontSizeM};
        line-height: 1;
      `:{small:o`
        height: ${e.buttonHeightS};
        padding: ${n?e.buttonPaddingSx:`0 ${e.buttonPaddingMx}`};
        font-size: ${e.buttonFontSizeM};
      `,large:o`
        height: ${e.buttonHeightL};
        padding: ${n?e.buttonPaddingLx:`0 ${e.buttonPaddingLx}`};
        font-size: ${e.buttonFontSizeL};
      `}[t],radius:(e,t)=>o`
    border-radius: ${t??(e===`large`?`20px`:`16px`)};
  `,icon:o`
    display: inline-flex;
    align-items: center;
  `},c.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{children:{required:!1,tsType:{name:`ReactNode`},description:``},icon:{required:!1,tsType:{name:`ReactNode`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},color:{required:!1,tsType:{name:`AppTheme`},description:``},borderColor:{required:!1,tsType:{name:`AppTheme`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'danger'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'danger'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'large'`}]},description:``},textColor:{required:!1,tsType:{name:`AppTheme`},description:``},radius:{required:!1,tsType:{name:`string`},description:``},bareIcon:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClick:{required:!1,tsType:{name:`MouseEventHandler`,elements:[{name:`HTMLButtonElement`}],raw:`MouseEventHandler<HTMLButtonElement>`},description:``},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}},composes:[`ButtonHTMLAttributes`]}}));export{u as n,c as t};