import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-B6lWK8m9.js";import{n as i,t as a}from"./color-tokens-BPpBLVR4.js";import{n as o,t as s}from"./emotion-styled.browser.esm-CJX6AVeg.js";var c,l,u,d,f=t((()=>{s(),i(),c=o.textarea`
    box-sizing: border-box;
    border-radius: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #222;
    background-color: #fff;
    width: 100%;
    transition-property: color, background-color, border-color, background-image;
    transition-duration: .15s;
    transition-timing-function: ease-in-out;
    border: 1px solid #D3D3D3;

    resize: vertical;
    min-height: 48px;
    padding: 14px 16px 12px;

  &:focus {
    border-color: ${e=>a[e.color]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${e=>a[e.color]+`80`};
    outline: none;
  }

  /* некликабельное состояние */
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({isError:e})=>e&&`
    border-color: ${a.mainRed};
    
    &:focus {
      border-color: ${a.mainRed};
    }
      
    &:focus-visible {
      box-shadow: 0 0 0 2px ${a.mainRed+`b0`};
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
    color: ${a.mainRed};
  }
`,d=o.span`
  font-size: 14px;
  font-weight: 600;
  color: ${a.mainRed};
  margin-top: 4px;
  overflow-wrap: break-word;
  word-break: break-word;
`})),p,m,h=t((()=>{e(n(),1),f(),p=r(),m=({id:e,name:t,placeholder:n,label:r,color:i=`mainNavy`,disabled:a,required:o,value:s,onChange:f,isError:m,errorMassage:h,className:g,..._})=>{let v=e=>{f&&f(e.target.value)};return(0,p.jsxs)(l,{title:r===void 0?`Поле ввода`:r,className:g,children:[r&&(0,p.jsxs)(u,{id:`text-description-${e}`,children:[r,o&&(0,p.jsx)(`span`,{"aria-hidden":!0,children:`*`})]}),(0,p.jsx)(c,{id:e,name:t,color:i,placeholder:n,required:o,value:s,onChange:v,disabled:a,isError:m,"aria-labelledby":r?`text-description-${e}`:void 0,"aria-required":o,"aria-invalid":m,"aria-describedby":m?`error-massage-${e}`:void 0,..._}),m&&(0,p.jsx)(d,{id:`error-massage-${e}`,role:`alert`,children:h})]})},m.__docgenInfo={description:``,methods:[],displayName:`Textarea`,props:{id:{required:!1,tsType:{name:`string`},description:`Идентификатор для связи с другими элементами`},name:{required:!1,tsType:{name:`string`},description:`Поле для идентификации и группировки элементов в форме`},placeholder:{required:!1,tsType:{name:`string`},description:`Временный текст`},label:{required:!1,tsType:{name:`string`},description:`Текст-описание`},color:{required:!1,tsType:{name:`union`,raw:`keyof typeof allColors`,elements:[{name:`literal`,value:`darkNavy01`},{name:`literal`,value:`darkNavy02`},{name:`literal`,value:`mainNavy`},{name:`literal`,value:`lightNavy01`},{name:`literal`,value:`lightNavy02`},{name:`literal`,value:`darkOrange01`},{name:`literal`,value:`darkOrange02`},{name:`literal`,value:`mainOrange`},{name:`literal`,value:`lightOrange01`},{name:`literal`,value:`lightOrange02`},{name:`literal`,value:`darkGreen01`},{name:`literal`,value:`darkGreen02`},{name:`literal`,value:`mainGreen`},{name:`literal`,value:`lightGreen01`},{name:`literal`,value:`lightGreen02`},{name:`literal`,value:`darkRed01`},{name:`literal`,value:`darkRed02`},{name:`literal`,value:`mainRed`},{name:`literal`,value:`lightRed01`},{name:`literal`,value:`lightRed02`},{name:`literal`,value:`darkCrimson01`},{name:`literal`,value:`darkCrimson02`},{name:`literal`,value:`mainCrimson`},{name:`literal`,value:`lightCrimson01`},{name:`literal`,value:`lightCrimson02`},{name:`literal`,value:`darkBlue01`},{name:`literal`,value:`darkBlue02`},{name:`literal`,value:`mainBlue`},{name:`literal`,value:`lightBlue01`},{name:`literal`,value:`lightBlue02`},{name:`literal`,value:`darkPurple01`},{name:`literal`,value:`darkPurple02`},{name:`literal`,value:`mainPurple`},{name:`literal`,value:`lightPurple01`},{name:`literal`,value:`lightPurple02`},{name:`literal`,value:`darkGrey01`},{name:`literal`,value:`darkGrey02`},{name:`literal`,value:`mainGrey`},{name:`literal`,value:`lightGrey01`},{name:`literal`,value:`lightGrey02`}]},description:`Цвет фокуса`,defaultValue:{value:`'mainNavy'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Заблокированное состояние`},required:{required:!1,tsType:{name:`boolean`},description:`Обязательность заполнения`},value:{required:!1,tsType:{name:`string`},description:`Текущее значение (controlled компонент)`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Отслеживание изменения состояния`},isError:{required:!1,tsType:{name:`boolean`},description:`Состояние ошибки`},errorMassage:{required:!1,tsType:{name:`string`},description:`Текст ошибки`},className:{required:!1,tsType:{name:`string`},description:`Дополнительные стили`}},composes:[`Omit`]}}));export{h as n,m as t};