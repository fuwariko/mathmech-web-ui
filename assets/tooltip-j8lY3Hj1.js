import{n as e}from"./chunk-BneVvdWh.js";import{a as t,i as n,r}from"./iframe-D3lb2UIJ.js";import{r as i,t as a}from"./emotion-css.esm-DZ62EKCi.js";import{n as o,t as s}from"./hint-DStuSlGo.js";var c,l,u,d,f=e((()=>{i(),r(),o(),c=t(),l=({content:e,position:t=`top`,color:r=`darkGrey01`,icon:i=`info`,children:a,className:o})=>{let l=n();return(0,c.jsx)(s,{content:e,position:t,backgroundColor:r,className:o,children:a??(0,c.jsx)(`div`,{className:d(l[r],l.white),children:u(i)})})},u=e=>{switch(e){case`warning`:return`!`;case`question`:return`?`;default:return`i`}},d=(e,t)=>a`
  width: 18px;
  height: 18px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  font-size: 12px;
  font-weight: 600;
  line-height: 1;

  color: ${t};
  background: ${e};

  cursor: default;
  user-select: none;

  transition:
    transform 0.15s ease,
    opacity 0.15s ease;

  &:hover {
    transform: scale(1.08);
    opacity: 0.9;
  }
`,l.__docgenInfo={description:``,methods:[],displayName:`Tooltip`,props:{content:{required:!0,tsType:{name:`ReactNode`},description:`Контент тултипа`},position:{required:!1,tsType:{name:`union`,raw:`| 'top'
| 'bottom'
| 'left'
| 'right'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Позиция`,defaultValue:{value:`'top'`,computed:!1}},color:{required:!1,tsType:{name:`AppTheme`},description:`Цвет`,defaultValue:{value:`'darkGrey01'`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`| 'info'
| 'warning'
| 'question'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'question'`}]},description:`Иконка`,defaultValue:{value:`'info'`,computed:!1}},children:{required:!1,tsType:{name:`ReactElement`},description:`Кастомный триггер`},className:{required:!1,tsType:{name:`string`},description:``}}}}));export{f as n,l as t};