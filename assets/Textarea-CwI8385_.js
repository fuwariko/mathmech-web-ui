import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r,i,r as a}from"./iframe-D3lb2UIJ.js";import{n as o,t as s}from"./emotion-styled.browser.esm-BHLNlsSj.js";var c,l,u,d,f=t((()=>{s(),c=o.textarea`
    box-sizing: border-box;
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

    resize: vertical;
    min-height: 48px;
    padding: 14px 16px 12px;

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
`})),p,m,h=t((()=>{e(n(),1),f(),a(),p=r(),m=({id:e,name:t,placeholder:n,label:r,color:a=`mainNavy`,disabled:o,required:s,value:f,onChange:m,isError:h,errorMassage:g,className:_,...v})=>{let y=i(),b=e=>{m&&m(e.target.value)};return(0,p.jsxs)(l,{title:r===void 0?`Поле ввода`:r,className:_,children:[r&&(0,p.jsxs)(u,{id:`text-description-${e}`,$errorColor:y.error,children:[r,s&&(0,p.jsx)(`span`,{"aria-hidden":!0,children:`*`})]}),(0,p.jsx)(c,{id:e,name:t,$focusColor:y[a],$errorColor:y.error,$textColor:y.textPrimary,$backgroundColor:y.backgroundPrimary,placeholder:n,required:s,value:f,onChange:b,disabled:o,isError:h,"aria-labelledby":r?`text-description-${e}`:void 0,"aria-required":s,"aria-invalid":h,"aria-describedby":h?`error-massage-${e}`:void 0,...v}),h&&(0,p.jsx)(d,{id:`error-massage-${e}`,role:`alert`,$errorColor:y.error,children:g})]})},m.__docgenInfo={description:``,methods:[],displayName:`Textarea`,props:{id:{required:!1,tsType:{name:`string`},description:`Идентификатор для связи с другими элементами`},name:{required:!1,tsType:{name:`string`},description:`Поле для идентификации и группировки элементов в форме`},placeholder:{required:!1,tsType:{name:`string`},description:`Временный текст`},label:{required:!1,tsType:{name:`string`},description:`Текст-описание`},color:{required:!1,tsType:{name:`AppTheme`},description:`Цвет фокуса`,defaultValue:{value:`'mainNavy'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Заблокированное состояние`},required:{required:!1,tsType:{name:`boolean`},description:`Обязательность заполнения`},value:{required:!1,tsType:{name:`string`},description:`Текущее значение (controlled компонент)`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Отслеживание изменения состояния`},isError:{required:!1,tsType:{name:`boolean`},description:`Состояние ошибки`},errorMassage:{required:!1,tsType:{name:`string`},description:`Текст ошибки`},className:{required:!1,tsType:{name:`string`},description:`Дополнительные стили`}},composes:[`Omit`]}}));export{h as n,m as t};