import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,t as a}from"./color-tokens-CBhvVmg4.js";import{n as o,t as s}from"./emotion-styled.browser.esm-C2R1kT_i.js";var c,l=t((()=>{c=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50px" height="50px" fill-rule="nonzero"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M41.9375,8.625c-0.66406,0.02344 -1.27344,0.375 -1.625,0.9375l-18.8125,28.78125l-12.1875,-10.53125c-0.52344,-0.54297 -1.30859,-0.74609 -2.03125,-0.51953c-0.71875,0.22266 -1.25391,0.83203 -1.37891,1.57422c-0.125,0.74609 0.17578,1.49609 0.78516,1.94531l13.9375,12.0625c0.4375,0.37109 1.01563,0.53516 1.58203,0.45313c0.57031,-0.08594 1.07422,-0.41016 1.38672,-0.89062l20.09375,-30.6875c0.42969,-0.62891 0.46484,-1.44141 0.09375,-2.10547c-0.37109,-0.66016 -1.08594,-1.05469 -1.84375,-1.01953z"></path></g></g></svg>`})),u,d,f,p=t((()=>{s(),i(),l(),u=o.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + span {
    border-color: ${e=>a[e.color]};
    background-color: #fff;
  }

  &:checked + span::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 13px;
    height: 13px;
    background-image: url("data:image/svg+xml,${encodeURIComponent(c)}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  &:checked + span::before {
    content: '';
    width: 12px;
    height: 12px;
    background-color: ${e=>a[e.color]};
    border-radius: 5%;
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
  border: 1px solid #d3d3d3;
  border-radius: 5%;
  position: relative;
  transition: all 0.2s;
  margin: 0;
`})),m,h,g=t((()=>{e(n(),1),p(),m=r(),h=({name:e,value:t,id:n,label:r,color:i=`mainNavy`,reverse:a,checked:o,disabled:s,onChange:c,required:l,...p})=>(0,m.jsxs)(d,{title:t,children:[(0,m.jsx)(u,{type:`checkbox`,id:n,name:e,value:t,checked:o,disabled:s,onChange:e=>{c?.(e.target.value)},required:l,color:i,...p}),!a&&(0,m.jsx)(f,{}),r,a&&(0,m.jsx)(f,{})]}),h.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{name:{required:!1,tsType:{name:`string`},description:`Поле для идентификации и группировки элементов в форме`},value:{required:!1,tsType:{name:`string`},description:`Значение чекбокса, уходящее на сервер`},id:{required:!1,tsType:{name:`string`},description:`Идентификатор для связи с другими элементами`},label:{required:!1,tsType:{name:`string`},description:`Текст чекбокса`},color:{required:!1,tsType:{name:`unknown`},description:`Цвет чекбокса`,defaultValue:{value:`'mainNavy'`,computed:!1}},reverse:{required:!1,tsType:{name:`boolean`},description:`Положение текста, отосительно чекбокса`},checked:{required:!1,tsType:{name:`boolean`},description:`Состояние "Выбрано"/"Не выбрано"`},disabled:{required:!1,tsType:{name:`boolean`},description:`Заблокированное состояние`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Отслеживание изменения состояния`},required:{required:!1,tsType:{name:`boolean`},description:`Обязательность заполнения`}},composes:[`Omit`]}}));export{g as n,h as t};