import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-B6lWK8m9.js";import{n as i,r as a,t as o}from"./emotion-css.esm-nW0xTD3m.js";import{n as s,t as c}from"./color-tokens-BPpBLVR4.js";import{d as l,f as u}from"./Icons-B9j9ZF3b.js";var d,f,p,m,h,g,_,v,y,b=t((()=>{a(),d=e(n(),1),s(),f=r(),p=({items:e,activeColor:t=`mainBlue`,multiple:n=!1,icon:r=`plusMinus`,iconPosition:a=`right`,className:o})=>{let[s,c]=(0,d.useState)([]),l=e=>{if(n){c(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]);return}c(t=>t.includes(e)?[]:[e])},u=(e,t)=>{switch(e){case`plusMinus`:return t?`−`:`+`;case`chevron`:return t?`⌄`:`›`;case`arrow`:return t?`↓`:`→`;case`chevronUpDown`:return t?`▲`:`▼`;case`dots`:return`•••`;case`dash`:return`—`;case`none`:return null;default:return null}},p=e=>(0,d.isValidElement)(r)||typeof r==`object`&&r?r:u(r,e);return(0,f.jsx)(`div`,{className:i(m,o),children:e.map(e=>{let n=s.includes(e.id),r=(0,f.jsx)(`span`,{className:v,children:p(n)});return(0,f.jsxs)(`div`,{className:h,children:[(0,f.jsxs)(`button`,{type:`button`,disabled:e.disabled,className:g(n,t),onClick:()=>l(e.id),children:[a===`left`&&r,(0,f.jsx)(`span`,{className:_,children:e.title}),a===`right`&&r]}),n&&(0,f.jsx)(`div`,{className:y,children:e.content})]},e.id)})})},m=o`
  width: 520px;
  min-width: 520px;

  display: flex;
  flex-direction: column;
`,h=o`
  border-bottom: 1px solid
    rgba(0, 0, 0, 0.08);
`,g=(e,t)=>o`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 12px;

  border: none;
  background: transparent;

  padding: 16px 0;

  cursor: pointer;

  text-align: left;

  font-size: 15px;
  font-weight: 600;

  color: ${e?c[t]:`#111`};

  transition: color 0.2s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,_=o`
  flex: 1;

  overflow-wrap: break-word;
  word-break: break-word;
`,v=o`
  width: 20px;
  min-width: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  font-size: 18px;
  line-height: 1;
`,y=o`
  padding: 0 0 16px;

  font-size: 14px;
  line-height: 22px;

  color: rgba(0, 0, 0, 0.7);

  overflow-wrap: break-word;
  word-break: break-word;
`,p.__docgenInfo={description:``,methods:[],displayName:`Accordion`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`IAccordionItem`}],raw:`IAccordionItem[]`},description:`Элементы`},activeColor:{required:!1,tsType:{name:`union`,raw:`keyof typeof allColors`,elements:[{name:`literal`,value:`darkNavy01`},{name:`literal`,value:`darkNavy02`},{name:`literal`,value:`mainNavy`},{name:`literal`,value:`lightNavy01`},{name:`literal`,value:`lightNavy02`},{name:`literal`,value:`darkOrange01`},{name:`literal`,value:`darkOrange02`},{name:`literal`,value:`mainOrange`},{name:`literal`,value:`lightOrange01`},{name:`literal`,value:`lightOrange02`},{name:`literal`,value:`darkGreen01`},{name:`literal`,value:`darkGreen02`},{name:`literal`,value:`mainGreen`},{name:`literal`,value:`lightGreen01`},{name:`literal`,value:`lightGreen02`},{name:`literal`,value:`darkRed01`},{name:`literal`,value:`darkRed02`},{name:`literal`,value:`mainRed`},{name:`literal`,value:`lightRed01`},{name:`literal`,value:`lightRed02`},{name:`literal`,value:`darkCrimson01`},{name:`literal`,value:`darkCrimson02`},{name:`literal`,value:`mainCrimson`},{name:`literal`,value:`lightCrimson01`},{name:`literal`,value:`lightCrimson02`},{name:`literal`,value:`darkBlue01`},{name:`literal`,value:`darkBlue02`},{name:`literal`,value:`mainBlue`},{name:`literal`,value:`lightBlue01`},{name:`literal`,value:`lightBlue02`},{name:`literal`,value:`darkPurple01`},{name:`literal`,value:`darkPurple02`},{name:`literal`,value:`mainPurple`},{name:`literal`,value:`lightPurple01`},{name:`literal`,value:`lightPurple02`},{name:`literal`,value:`darkGrey01`},{name:`literal`,value:`darkGrey02`},{name:`literal`,value:`mainGrey`},{name:`literal`,value:`lightGrey01`},{name:`literal`,value:`lightGrey02`}]},description:`Цвет активного`,defaultValue:{value:`'mainBlue'`,computed:!1}},multiple:{required:!1,tsType:{name:`boolean`},description:`Разрешить несколько открытых`,defaultValue:{value:`false`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`TAccordionIcon | ReactNode`,elements:[{name:`union`,raw:`| 'plusMinus'
| 'chevron'
| 'arrow'
| 'chevronUpDown'
| 'dots'
| 'dash'
| 'none'`,elements:[{name:`literal`,value:`'plusMinus'`},{name:`literal`,value:`'chevron'`},{name:`literal`,value:`'arrow'`},{name:`literal`,value:`'chevronUpDown'`},{name:`literal`,value:`'dots'`},{name:`literal`,value:`'dash'`},{name:`literal`,value:`'none'`}]},{name:`ReactNode`}]},description:`Встроенная иконка или собственная

icon="chevron"
icon={<ChevronIcon />}`,defaultValue:{value:`'plusMinus'`,computed:!1}},iconPosition:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Расположение иконки`,defaultValue:{value:`'right'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Дополнительный класс`}}}})),x,S,C,w,T;t((()=>{b(),u(),x=r(),S={title:`UI/Accordion`,component:p,parameters:{layout:`centered`},tags:[`autodocs`],render:e=>{let{icon:t,...n}=e;return(0,x.jsx)(p,{...n,icon:t===`custom`?(0,x.jsx)(l,{}):t})},args:{activeColor:`mainBlue`,multiple:!1,icon:`plusMinus`,iconPosition:`right`,items:[{id:`1`,title:`Что такое Accordion?`,content:(0,x.jsx)(`div`,{children:`Accordion используется для скрытия контента.`})},{id:`2`,title:`Как это работает?`,content:(0,x.jsx)(`div`,{children:`По нажатию открывается нужный блок.`})},{id:`3`,title:`Можно ли кастомизировать?`,content:(0,x.jsx)(`div`,{children:`Да, стили полностью кастомизируются.`})}]},argTypes:{multiple:{control:`boolean`},iconPosition:{control:`select`,options:[`left`,`right`]},icon:{control:`select`,options:[`plusMinus`,`chevron`,`arrow`,`chevronUpDown`,`dots`,`dash`,`none`,`custom`]}}},C={},w={args:{multiple:!0}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`Multiple`]}))();export{C as Default,w as Multiple,T as __namedExportsOrder,S as default};