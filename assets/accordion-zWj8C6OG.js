import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,r as a,t as o}from"./emotion-css.esm-BqXpwIft.js";import{n as s,t as c}from"./color-tokens-CBhvVmg4.js";var l,u,d,f,p,m,h,g,_,v=t((()=>{a(),l=e(n(),1),s(),u=r(),d=({items:e,activeColor:t=`mainBlue`,multiple:n=!1,icon:r=`plusMinus`,iconPosition:a=`right`,className:o})=>{let[s,c]=(0,l.useState)([]),d=e=>{if(n){c(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]);return}c(t=>t.includes(e)?[]:[e])},v=(e,t)=>{switch(e){case`plusMinus`:return t?`−`:`+`;case`chevron`:return t?`⌄`:`›`;case`arrow`:return t?`↓`:`→`;case`chevronUpDown`:return t?`▲`:`▼`;case`dots`:return`•••`;case`dash`:return`—`;case`none`:return null;default:return null}},y=e=>(0,l.isValidElement)(r)||typeof r==`object`&&r?r:v(r,e);return(0,u.jsx)(`div`,{className:i(f,o),children:e.map(e=>{let n=s.includes(e.id),r=`accordion-trigger-${e.id}`,i=`accordion-panel-${e.id}`,o=(0,u.jsx)(`span`,{className:g,"aria-hidden":`true`,children:y(n)});return(0,u.jsxs)(`div`,{className:p,children:[(0,u.jsxs)(`button`,{type:`button`,id:r,disabled:e.disabled,"aria-expanded":n,"aria-controls":i,className:m(n,t),onClick:()=>d(e.id),children:[a===`left`&&o,(0,u.jsx)(`span`,{className:h,children:e.title}),a===`right`&&o]}),n&&(0,u.jsx)(`div`,{id:i,role:`region`,"aria-labelledby":r,className:_,children:e.content})]},e.id)})})},f=o`
  width: 520px;
  min-width: 520px;

  display: flex;
  flex-direction: column;
`,p=o`
  border-bottom: 1px solid
    rgba(0, 0, 0, 0.08);
`,m=(e,t)=>o`
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
`,h=o`
  flex: 1;

  overflow-wrap: break-word;
  word-break: break-word;
`,g=o`
  width: 20px;
  min-width: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  font-size: 18px;
  line-height: 1;
`,_=o`
  padding: 0 0 16px;

  font-size: 14px;
  line-height: 22px;

  color: rgba(0, 0, 0, 0.7);

  overflow-wrap: break-word;
  word-break: break-word;
`,d.__docgenInfo={description:``,methods:[],displayName:`Accordion`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`IAccordionItem`}],raw:`IAccordionItem[]`},description:`Элементы`},activeColor:{required:!1,tsType:{name:`unknown`},description:`Цвет активного`,defaultValue:{value:`'mainBlue'`,computed:!1}},multiple:{required:!1,tsType:{name:`boolean`},description:`Разрешить несколько открытых`,defaultValue:{value:`false`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`TAccordionIcon | ReactNode`,elements:[{name:`union`,raw:`| 'plusMinus'
| 'chevron'
| 'arrow'
| 'chevronUpDown'
| 'dots'
| 'dash'
| 'none'`,elements:[{name:`literal`,value:`'plusMinus'`},{name:`literal`,value:`'chevron'`},{name:`literal`,value:`'arrow'`},{name:`literal`,value:`'chevronUpDown'`},{name:`literal`,value:`'dots'`},{name:`literal`,value:`'dash'`},{name:`literal`,value:`'none'`}]},{name:`ReactNode`}]},description:`Встроенная иконка или собственная

icon="chevron"
icon={<ChevronIcon />}`,defaultValue:{value:`'plusMinus'`,computed:!1}},iconPosition:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Расположение иконки`,defaultValue:{value:`'right'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Дополнительный класс`}}}}));export{v as n,d as t};