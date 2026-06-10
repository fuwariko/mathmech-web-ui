import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,t as a}from"./color-tokens-CBhvVmg4.js";import{n as o,t as s}from"./emotion-styled.browser.esm-C2R1kT_i.js";var c,l,u,d=t((()=>{s(),i(),c=o.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + span {
    border-color: ${e=>a[e.color]};
    background-color: #fff;
  }
  &:checked + span::before {
    content: '';
    width: 9px;
    height: 9px;
    background-color: ${e=>a[e.color]};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:focus + span {
    box-shadow: 0 0 0 2px ${e=>`color-mix(in srgb, ${a[e.color]} 50%, transparent)`};
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
  border: 1px solid #d3d3d3;
  border-radius: 50%;
  position: relative;
  transition: all 0.2s;
  margin: 0;
`})),f,p,m=t((()=>{e(n(),1),d(),f=r(),p=({id:e,name:t,value:n,label:r,color:i=`mainNavy`,reverse:a,checked:o,disabled:s,onChange:d,required:p,...m})=>(0,f.jsxs)(l,{title:n,children:[(0,f.jsx)(c,{id:e,type:`radio`,name:t,value:n,color:i,checked:o,disabled:s,onChange:e=>{d?.(e.target.value)},required:p,...m}),!a&&(0,f.jsx)(u,{}),r,a&&(0,f.jsx)(u,{})]}),p.__docgenInfo={description:``,methods:[],displayName:`Radio`,props:{name:{required:!0,tsType:{name:`string`},description:`Поле для идентификации и группировки элементов в форме`},value:{required:!0,tsType:{name:`string`},description:`Значение радио-кнопки`},id:{required:!1,tsType:{name:`string`},description:`Идентификатор для связи с другими элементами`},label:{required:!1,tsType:{name:`string`},description:`Текст радио-кнопки`},color:{required:!1,tsType:{name:`unknown`},description:`Цвет радио-кнопки`,defaultValue:{value:`'mainNavy'`,computed:!1}},reverse:{required:!1,tsType:{name:`boolean`},description:`Положение текста, относительно радио-кнопки`},checked:{required:!1,tsType:{name:`boolean`},description:`Состояние "Выбрано"/"Не выбрано"`},disabled:{required:!1,tsType:{name:`boolean`},description:`Заблокированное состояние`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Отслеживание изменения состояния`},required:{required:!1,tsType:{name:`boolean`},description:`Обязательность заполнения`}},composes:[`Omit`]}}));export{m as n,p as t};