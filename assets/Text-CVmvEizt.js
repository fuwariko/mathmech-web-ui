import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r,i,r as a}from"./iframe-D3lb2UIJ.js";import{n as o,r as s,t as c}from"./emotion-css.esm-DZ62EKCi.js";var l,u,d,f,p,m=t((()=>{s(),e(n(),1),a(),l=r(),u={h1:{size:40,lineHeight:1.25,weight:700},h2:{size:36,lineHeight:1.35,weight:600},h3:{size:24,lineHeight:1.45,weight:600},h4:{size:22,lineHeight:1.5,weight:500},h5:{size:21,lineHeight:1.5,weight:500},h6:{size:20,lineHeight:1.5,weight:500},paragraph:{size:18,lineHeight:1.55,weight:400},small:{size:16,lineHeight:1.55,weight:400},xsmall:{size:14,lineHeight:1.6,weight:400}},d=({children:e,variant:t=`paragraph`,as:n=`p`,size:r,weight:a,italic:s=!1,color:c,align:d=`left`,className:m})=>{let h=i(),g=u[t],_=p(t),v=c?h[c]:_?h.mainNavy:t===`paragraph`?h.textParagraph:h.textPrimary;return(0,l.jsx)(n,{className:o(f({size:r??g.size,lineHeight:g.lineHeight,weight:a??g.weight,italic:s,color:v,align:d,isHeading:_}),m),children:e})},f=({size:e,lineHeight:t,weight:n,italic:r,color:i,align:a,isHeading:o})=>c`
  margin: ${o?`4px 0`:`0`};
  padding: 0;

  font-size: ${e}px;
  line-height: ${t};
  font-weight: ${n};
  font-style: ${r?`italic`:`normal`};

  color: ${i};

  text-align: ${a};

  overflow-wrap: break-word;
  word-break: break-word;
`,p=e=>e===`h1`||e===`h2`||e===`h3`||e===`h4`||e===`h5`||e===`h6`,d.__docgenInfo={description:``,methods:[],displayName:`Text`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`Контент`},variant:{required:!1,tsType:{name:`union`,raw:`| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'paragraph'
| 'small'
| 'xsmall'`,elements:[{name:`literal`,value:`'h1'`},{name:`literal`,value:`'h2'`},{name:`literal`,value:`'h3'`},{name:`literal`,value:`'h4'`},{name:`literal`,value:`'h5'`},{name:`literal`,value:`'h6'`},{name:`literal`,value:`'paragraph'`},{name:`literal`,value:`'small'`},{name:`literal`,value:`'xsmall'`}]},description:`Готовый вариант`,defaultValue:{value:`'paragraph'`,computed:!1}},as:{required:!1,tsType:{name:`ElementType`},description:`HTML тег`,defaultValue:{value:`'p'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`| 14
| 16
| 18
| 20
| 21
| 22
| 24
| 28
| 32
| 36
| 40`,elements:[{name:`literal`,value:`14`},{name:`literal`,value:`16`},{name:`literal`,value:`18`},{name:`literal`,value:`20`},{name:`literal`,value:`21`},{name:`literal`,value:`22`},{name:`literal`,value:`24`},{name:`literal`,value:`28`},{name:`literal`,value:`32`},{name:`literal`,value:`36`},{name:`literal`,value:`40`}]},description:`Размер`},weight:{required:!1,tsType:{name:`union`,raw:`| 400
| 500
| 600
| 700`,elements:[{name:`literal`,value:`400`},{name:`literal`,value:`500`},{name:`literal`,value:`600`},{name:`literal`,value:`700`}]},description:`Жирность`},italic:{required:!1,tsType:{name:`boolean`},description:`Курсив`,defaultValue:{value:`false`,computed:!1}},color:{required:!1,tsType:{name:`AppTheme`},description:`Цвет`},align:{required:!1,tsType:{name:`CSSProperties['textAlign']`,raw:`CSSProperties['textAlign']`},description:`Выравнивание`,defaultValue:{value:`'left'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Дополнительный класс`}}}}));export{m as n,d as t};