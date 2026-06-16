import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r,i,r as a}from"./iframe-D3lb2UIJ.js";import{n as o,r as s,t as c}from"./emotion-css.esm-DZ62EKCi.js";var l,u,d,f,p,m,h,g,_,v=t((()=>{s(),l=e(n(),1),a(),u=r(),d=({items:e,activeColor:t,multiple:n=!1,icon:r=`plusMinus`,iconPosition:a=`right`,className:s})=>{let c=i(),[d,v]=(0,l.useState)([]),y=t?c[t]:c.accordionActiveText||c.globalBlue,b=c.accordionText||c.textPrimary,x=c.accordionContentText||c.textSecondary,S=c.accordionBackground||`transparent`,C=c.accordionBorder||`rgba(0, 0, 0, 0.08)`,w=e=>{if(n){v(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]);return}v(t=>t.includes(e)?[]:[e])},T=(e,t)=>{switch(e){case`plusMinus`:return t?`−`:`+`;case`chevron`:return t?`⌄`:`›`;case`arrow`:return t?`↓`:`→`;case`chevronUpDown`:return t?`▲`:`▼`;case`dots`:return`•••`;case`dash`:return`—`;case`none`:return null;default:return null}},E=e=>(0,l.isValidElement)(r)||typeof r==`object`&&r?r:T(r,e);return(0,u.jsx)(`div`,{className:o(f,s),children:e.map(e=>{let t=d.includes(e.id),n=`accordion-trigger-${e.id}`,r=`accordion-panel-${e.id}`,i=(0,u.jsx)(`span`,{className:g(c.accordionIconSize),"aria-hidden":`true`,children:E(t)});return(0,u.jsxs)(`div`,{className:p(S,C),children:[(0,u.jsxs)(`button`,{type:`button`,id:n,disabled:e.disabled,"aria-expanded":t,"aria-controls":r,className:m(t,y,b,c.accordionFontSize,c.accordionPaddingY),onClick:()=>w(e.id),children:[a===`left`&&i,(0,u.jsx)(`span`,{className:h,children:e.title}),a===`right`&&i]}),t&&(0,u.jsx)(`div`,{id:r,role:`region`,"aria-labelledby":n,className:_(x,c.accordionContentFontSize,c.accordionPaddingY),children:e.content})]},e.id)})})},f=c`
  width: 520px;
  min-width: 520px;

  display: flex;
  flex-direction: column;
`,p=(e,t)=>c`
  background: ${e};
  border-bottom: 1px solid ${t};
`,m=(e,t,n,r,i)=>c`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 12px;

  border: none;
  background: transparent;

  padding: ${i} 16px;

  cursor: pointer;

  text-align: left;

  font-size: ${r};
  font-weight: 600;

  color: ${e?t:n};

  transition: color 0.2s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,h=c`
  flex: 1;

  overflow-wrap: break-word;
  word-break: break-word;
`,g=e=>c`
  width: ${e};
  min-width: ${e};

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  font-size: ${e};
  line-height: 1;
`,_=(e,t,n)=>c`
  padding: 0 16px ${n};

  font-size: ${t};
  line-height: 22px;

  color: ${e};

  overflow-wrap: break-word;
  word-break: break-word;
`,d.__docgenInfo={description:``,methods:[],displayName:`Accordion`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`IAccordionItem`}],raw:`IAccordionItem[]`},description:`Элементы`},activeColor:{required:!1,tsType:{name:`AppTheme`},description:`Цвет активного`},multiple:{required:!1,tsType:{name:`boolean`},description:`Разрешить несколько открытых`,defaultValue:{value:`false`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`TAccordionIcon | ReactNode`,elements:[{name:`union`,raw:`| 'plusMinus'
| 'chevron'
| 'arrow'
| 'chevronUpDown'
| 'dots'
| 'dash'
| 'none'`,elements:[{name:`literal`,value:`'plusMinus'`},{name:`literal`,value:`'chevron'`},{name:`literal`,value:`'arrow'`},{name:`literal`,value:`'chevronUpDown'`},{name:`literal`,value:`'dots'`},{name:`literal`,value:`'dash'`},{name:`literal`,value:`'none'`}]},{name:`ReactNode`}]},description:`Встроенная иконка или собственная

icon="chevron"
icon={<ChevronIcon />}`,defaultValue:{value:`'plusMinus'`,computed:!1}},iconPosition:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Расположение иконки`,defaultValue:{value:`'right'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Дополнительный класс`}}}}));export{v as n,d as t};