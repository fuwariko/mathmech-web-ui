import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r,i,r as a}from"./iframe-D3lb2UIJ.js";import{n as o,t as s}from"./emotion-styled.browser.esm-BHLNlsSj.js";var c,l,u,d,f=t((()=>{s(),c=o.input`
    height: 48px;
    box-sizing: border-box;
    padding: 14px 16px;
    border-radius: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${e=>e.$textColor};
    background-color: ${e=>e.$backgroundColor};
    width: 100%;
    transition-property: color, background-color, border-color, background-image;
    transition-duration: .15s;
    transition-timing-function: ease-in-out;
    border: 1px solid var(--mm-mainGrey, #D3D3D3);

  &:focus {
    border-color: ${e=>e.$focusColor};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${e=>`color-mix(in srgb, ${e.$focusColor} 50%, transparent)`};
    outline: none;
  }

  /* некликабельное состояние */
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
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
`,l=o.label`
  display: flex;
  flex-direction: column;
  width: max-width;
`,u=o.span`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 6px;
  overflow-wrap: break-word;
  word-break: break-word;
  
  & span {
    color: ${e=>e.$errorColor};
  }
`,d=o.span`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.$errorColor};
  margin-top: 4px;
  overflow-wrap: break-word;
  word-break: break-word;
`})),p,m,h=t((()=>{e(n(),1),f(),a(),p=r(),m=({id:e,name:t,type:n=`text`,placeholder:r,label:a,color:o=`mainNavy`,disabled:s,required:f,value:m,onChange:h,isError:g,errorMassage:_,...v})=>{let y=i(),b=e=>{h&&h(e.target.value)};return(0,p.jsxs)(l,{title:a===void 0?`Строка ввода`:a,children:[a&&(0,p.jsxs)(u,{id:`text-description-${e}`,$errorColor:y.error,children:[a,f&&(0,p.jsx)(`span`,{"aria-hidden":!0,children:`*`})]}),(0,p.jsx)(c,{id:e,name:t,lang:`ru`,type:n,$focusColor:y[o],$errorColor:y.error,$textColor:y.textPrimary,$backgroundColor:y.backgroundPrimary,placeholder:r,value:m,onChange:b,required:f,disabled:s,isError:g,"aria-labelledby":a?`text-description-${e}`:void 0,"aria-required":f,"aria-invalid":g,"aria-describedby":g?`error-massage-${e}`:void 0,...v}),g&&(0,p.jsx)(d,{id:`error-massage-${e}`,role:`alert`,$errorColor:y.error,children:_})]})},m.__docgenInfo={description:``,methods:[],displayName:`InputText`,props:{id:{required:!1,tsType:{name:`string`},description:`Идентификатор для связи с другими элементами`},name:{required:!1,tsType:{name:`string`},description:`Поле для идентификации и группировки элементов в форме`},placeholder:{required:!1,tsType:{name:`string`},description:`Временный текст`},label:{required:!1,tsType:{name:`string`},description:`Текст-описание`},color:{required:!1,tsType:{name:`AppTheme`},description:`Цвет фокуса`,defaultValue:{value:`'mainNavy'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Заблокированное состояние`},required:{required:!1,tsType:{name:`boolean`},description:`Обязательность заполнения`},value:{required:!1,tsType:{name:`string`},description:`Текущее значение (controlled компонент)`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Отслеживание изменения состояния`},isError:{required:!1,tsType:{name:`boolean`},description:`Состояние ошибки`},errorMassage:{required:!1,tsType:{name:`string`},description:`Текст ошибки`},type:{defaultValue:{value:`'text'`,computed:!1},required:!1}},composes:[`Omit`]}}));export{h as n,m as t};