import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Bn1Ys6_W.js";import{n,r}from"./iframe-Cvp2U6HM.js";import{n as i,r as a,t as o}from"./emotion-css.esm-BqXpwIft.js";import{m as s,o as c}from"./Icons-Dz2YVI0X.js";import{n as l,t as u}from"./InputText-DmbvM_oJ.js";import{n as d,t as f}from"./hint-BXSfgojk.js";var p,m,h,g=e((()=>{a(),n(),p=t(),m=({children:e,icon:t,disabled:n=!1,color:a,variant:o=`primary`,size:s=`small`,textColor:c,radius:l,onClick:u,className:d,style:f,...m})=>{let g=r(),_=!!t&&!e,v=m[`aria-label`]??(_?`Действие`:void 0);return(0,p.jsxs)(`button`,{...m,"aria-label":v,disabled:n,onClick:u,style:f,className:i(h.base(g,n,c),h.variant(g,o,a),h.size(g,s,_),h.radius(s,l),d),children:[t&&(0,p.jsx)(`span`,{className:h.icon,children:t}),e]})},h={base:(e,t,n)=>o`
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
  `},m.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{children:{required:!1,tsType:{name:`ReactNode`},description:``},icon:{required:!1,tsType:{name:`ReactNode`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},color:{required:!1,tsType:{name:`AppTheme`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'danger'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'danger'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'large'`}]},description:``,defaultValue:{value:`'small'`,computed:!1}},textColor:{required:!1,tsType:{name:`AppTheme`},description:``},radius:{required:!1,tsType:{name:`string`},description:``},onClick:{required:!1,tsType:{name:`MouseEventHandler`,elements:[{name:`HTMLButtonElement`}],raw:`MouseEventHandler<HTMLButtonElement>`},description:``},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}},composes:[`ButtonHTMLAttributes`]}})),_,v,y,b,x;e((()=>{d(),g(),s(),l(),_=t(),v={title:`UI/Hint`,parameters:{layout:`centered`}},y={render:()=>(0,_.jsx)(f,{content:`ошшмвыогтмшгывтрмгрт`,backgroundColor:`mainBlue`,position:`top`,children:(0,_.jsxs)(m,{color:`mainNavy`,children:[(0,_.jsx)(c,{width:24,height:24}),` Настройки`]})})},b={render:()=>(0,_.jsx)(f,{content:`олалалал`,position:`right`,children:(0,_.jsx)(u,{id:`1`,name:`email`,type:`email`,placeholder:`example@mail.ru`,label:`Почта`,isError:!0,errorMassage:`Некорректный домен`})})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Hint content='ошшмвыогтмшгывтрмгрт' backgroundColor="mainBlue" position="top">
      <Button color='mainNavy'>
        <FilterIcon width={24} height={24} /> Настройки
      </Button>
    </Hint>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Hint content='олалалал' position="right">
      <InputText id={"1"} name="email" type='email' placeholder={"example@mail.ru"} label={"Почта"} isError={true} errorMassage="Некорректный домен" />
    </Hint>
}`,...b.parameters?.docs?.source}}},x=[`OnButton`,`OnInput`]}))();export{y as OnButton,b as OnInput,x as __namedExportsOrder,v as default};