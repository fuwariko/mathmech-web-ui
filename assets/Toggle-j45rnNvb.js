import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r,i,r as a}from"./iframe-D3lb2UIJ.js";import{n as o,t as s}from"./emotion-styled.browser.esm-BHLNlsSj.js";var c,l,u,d=t((()=>{s(),c=o.label`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;

  &:has(input:disabled) {
    cursor: not-allowed;
  }
`,l=o.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  overflow: hidden;

  &:checked + span {
    background-color: ${e=>e.$color};
    border-color: ${e=>e.$color};
  }

  & + span::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${e=>e.$color};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all .2s ease-in-out;
  }

  &:checked + span::after {
    transform: translateX(26px);
    background-color: ${e=>e.$backgroundColor};
  }

  &:focus-visible + span {
    box-shadow: 0 0 0 2px ${e=>`color-mix(in srgb, ${e.$color} 50%, transparent)`};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled + span {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,u=o.span`
  display: inline-flex;
  position: relative;
  margin: 2px 0;
  width: 54px;
  height: 26px;
  border-radius: 16px;
  border: 1px solid ${e=>e.$color};
  background-color: transparent;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;
`})),f,p,m=t((()=>{e(n(),1),d(),a(),f=r(),p=({id:e,name:t,value:n,label:r,color:a=`mainNavy`,onChange:o,checked:s,reverse:d,disabled:p,required:m})=>{let h=i(),g=e=>{o?.(e.target.value)};return(0,f.jsxs)(c,{title:r===void 0?`Переключатель`:r,children:[d&&(0,f.jsx)(`span`,{id:`label-id-${e}`,children:r}),(0,f.jsx)(l,{type:`checkbox`,id:e,$color:h[a],$backgroundColor:h.backgroundPrimary,name:t,role:`switch`,checked:s,"aria-labelledby":`label-id-${e}`,value:n,onChange:g,disabled:p,required:m}),(0,f.jsx)(u,{$color:h[a]}),!d&&(0,f.jsx)(`span`,{id:`label-id-${e}`,children:r})]})},p.__docgenInfo={description:``,methods:[],displayName:`Toggle`,props:{id:{required:!1,tsType:{name:`string`},description:`Идентификатор для связи с другими элементами`},name:{required:!1,tsType:{name:`string`},description:`Поле для идентификации и группировки элементов в форме`},value:{required:!1,tsType:{name:`string`},description:`Значение тоггла, уходящее на сервер`},label:{required:!1,tsType:{name:`string`},description:`Текст тоггла`},color:{required:!1,tsType:{name:`AppTheme`},description:`Цвет тоггла`,defaultValue:{value:`'mainNavy'`,computed:!1}},checked:{required:!1,tsType:{name:`boolean`},description:`Состояние "Выбрано"/"Не выбрано"`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Отслеживание изменения состояния`},reverse:{required:!1,tsType:{name:`boolean`},description:`Положение текста, отосительно тоггла`},disabled:{required:!1,tsType:{name:`boolean`},description:`Заблокированное состояние`},required:{required:!1,tsType:{name:`boolean`},description:`Обязательность заполнения`}}}}));export{m as n,p as t};