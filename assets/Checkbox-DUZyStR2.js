import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r,i,r as a}from"./iframe-D3lb2UIJ.js";import{n as o,t as s}from"./emotion-styled.browser.esm-BHLNlsSj.js";import{n as c,t as l}from"./check--xeZXLAC.js";var u,d,f,p=t((()=>{s(),c(),u=o.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + span {
    border-color: ${e=>e.$color};
    background-color: ${e=>e.$backgroundColor};
  }

  &:checked + span::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 13px;
    height: 13px;
    background-image: url("data:image/svg+xml,${encodeURIComponent(l)}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  &:checked + span::before {
    content: '';
    width: 12px;
    height: 12px;
    background-color: ${e=>e.$color};
    border-radius: 5%;
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
`,d=o.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  gap: 6px;

  &:has(input:disabled) {
    cursor: not-allowed;
  }
`,f=o.span`
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border: 1px solid var(--mm-mainGrey, #d3d3d3);
  border-radius: 5%;
  position: relative;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;
  margin: 0;
`})),m,h,g=t((()=>{e(n(),1),p(),a(),m=r(),h=({name:e,value:t,id:n,label:r,color:a=`mainNavy`,reverse:o,checked:s,disabled:c,onChange:l,required:p,...h})=>{let g=i();return(0,m.jsxs)(d,{title:t,children:[(0,m.jsx)(u,{type:`checkbox`,id:n,name:e,value:t,checked:s,disabled:c,onChange:e=>{l?.(e.target.value)},required:p,$color:g[a],$backgroundColor:g.backgroundPrimary,...h}),!o&&(0,m.jsx)(f,{}),r,o&&(0,m.jsx)(f,{})]})},h.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{name:{required:!1,tsType:{name:`string`},description:`Поле для идентификации и группировки элементов в форме`},value:{required:!1,tsType:{name:`string`},description:`Значение чекбокса, уходящее на сервер`},id:{required:!1,tsType:{name:`string`},description:`Идентификатор для связи с другими элементами`},label:{required:!1,tsType:{name:`string`},description:`Текст чекбокса`},color:{required:!1,tsType:{name:`AppTheme`},description:`Цвет чекбокса`,defaultValue:{value:`'mainNavy'`,computed:!1}},reverse:{required:!1,tsType:{name:`boolean`},description:`Положение текста, отосительно чекбокса`},checked:{required:!1,tsType:{name:`boolean`},description:`Состояние "Выбрано"/"Не выбрано"`},disabled:{required:!1,tsType:{name:`boolean`},description:`Заблокированное состояние`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Отслеживание изменения состояния`},required:{required:!1,tsType:{name:`boolean`},description:`Обязательность заполнения`}},composes:[`Omit`]}}));export{g as n,h as t};