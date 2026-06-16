import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r,i,r as a}from"./iframe-D3lb2UIJ.js";import{n as o,t as s}from"./emotion-styled.browser.esm-BHLNlsSj.js";var c,l,u,d=t((()=>{s(),c=o.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + span {
    border-color: ${e=>e.$color};
    background-color: ${e=>e.$backgroundColor};
  }
  &:checked + span::before {
    content: '';
    width: 9px;
    height: 9px;
    background-color: ${e=>e.$color};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:focus + span {
    box-shadow: 0 0 0 2px ${e=>`color-mix(in srgb, ${e.$color} 50%, transparent)`};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled + span {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,l=o.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  gap: 6px;

  &:has(input:disabled) {
    cursor: not-allowed;
  }
`,u=o.span`
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border: 1px solid var(--mm-mainGrey, #d3d3d3);
  border-radius: 50%;
  position: relative;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;
  margin: 0;
`})),f,p,m=t((()=>{e(n(),1),d(),a(),f=r(),p=({id:e,name:t,value:n,label:r,color:a=`mainNavy`,reverse:o,checked:s,disabled:d,onChange:p,required:m,...h})=>{let g=i();return(0,f.jsxs)(l,{title:n,children:[(0,f.jsx)(c,{id:e,type:`radio`,name:t,value:n,$color:g[a],$backgroundColor:g.backgroundPrimary,checked:s,disabled:d,onChange:e=>{p?.(e.target.value)},required:m,...h}),!o&&(0,f.jsx)(u,{}),r,o&&(0,f.jsx)(u,{})]})},p.__docgenInfo={description:``,methods:[],displayName:`Radio`,props:{name:{required:!0,tsType:{name:`string`},description:`Поле для идентификации и группировки элементов в форме`},value:{required:!0,tsType:{name:`string`},description:`Значение радио-кнопки`},id:{required:!1,tsType:{name:`string`},description:`Идентификатор для связи с другими элементами`},label:{required:!1,tsType:{name:`string`},description:`Текст радио-кнопки`},color:{required:!1,tsType:{name:`AppTheme`},description:`Цвет радио-кнопки`,defaultValue:{value:`'mainNavy'`,computed:!1}},reverse:{required:!1,tsType:{name:`boolean`},description:`Положение текста, относительно радио-кнопки`},checked:{required:!1,tsType:{name:`boolean`},description:`Состояние "Выбрано"/"Не выбрано"`},disabled:{required:!1,tsType:{name:`boolean`},description:`Заблокированное состояние`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Отслеживание изменения состояния`},required:{required:!1,tsType:{name:`boolean`},description:`Обязательность заполнения`}},composes:[`Omit`]}}));export{m as n,p as t};