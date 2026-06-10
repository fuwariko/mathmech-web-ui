import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Bn1Ys6_W.js";import{n,r}from"./iframe-Cvp2U6HM.js";import{n as i,r as a,t as o}from"./emotion-css.esm-BqXpwIft.js";var s,c,l,u=e((()=>{a(),n(),s=t(),c=({children:e,icon:t,disabled:n=!1,color:a,variant:o=`primary`,size:c=`small`,textColor:u,radius:d,onClick:f,className:p,style:m,...h})=>{let g=r(),_=!!t&&!e,v=h[`aria-label`]??(_?`Действие`:void 0);return(0,s.jsxs)(`button`,{...h,"aria-label":v,disabled:n,onClick:f,style:m,className:i(l.base(g,n,u),l.variant(g,o,a),l.size(g,c,_),l.radius(c,d),p),children:[t&&(0,s.jsx)(`span`,{className:l.icon,children:t}),e]})},l={base:(e,t,n)=>o`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: fit-content;
    border: none;
    cursor: ${t?`default`:`pointer`};
    color: ${n?e[n]:e.buttonColorText};
    font-weight: 500;
    opacity: ${t?.5:1};
    pointer-events: ${t?`none`:`auto`};
    transition:
      background-color 0.2s ease,
      opacity 0.2s ease,
      padding 0.2s ease,
      font-size 0.2s ease,
      transform 0.2s ease;

    &:hover {
      opacity: ${t?.5:.9};
    }

    &:active {
      transform: ${t?`none`:`scale(0.98)`};
    }
  `,variant:(e,t,n)=>o`
      background: ${n?e[n]:{primary:e.buttonColorPrimary,secondary:e.buttonColorSecondary,danger:e.buttonColorDanger}[t]};
    `,size:(e,t,n)=>({small:o`
        height: 44px;
        padding: ${n?e.buttonPaddingSx:`0 ${e.buttonPaddingMx}`};
        font-size: ${e.buttonFontSizeM};
      `,large:o`
        height: 72px;
        padding: ${n?e.buttonPaddingLx:`0 ${e.buttonPaddingLx}`};
        font-size: ${e.buttonFontSizeL};
      `})[t],radius:(e,t)=>o`
    border-radius: ${t??(e===`large`?`20px`:`16px`)};
  `,icon:o`
    display: inline-flex;
    align-items: center;
  `},c.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{children:{required:!1,tsType:{name:`ReactNode`},description:``},icon:{required:!1,tsType:{name:`ReactNode`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},color:{required:!1,tsType:{name:`AppTheme`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'danger'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'danger'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'large'`}]},description:``,defaultValue:{value:`'small'`,computed:!1}},textColor:{required:!1,tsType:{name:`AppTheme`},description:``},radius:{required:!1,tsType:{name:`string`},description:``},onClick:{required:!1,tsType:{name:`MouseEventHandler`,elements:[{name:`HTMLButtonElement`}],raw:`MouseEventHandler<HTMLButtonElement>`},description:``},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}},composes:[`ButtonHTMLAttributes`]}}));export{u as n,c as t};