import{n as e}from"./chunk-BneVvdWh.js";import{a as t,i as n,r}from"./iframe-D3lb2UIJ.js";import{n as i,r as a,t as o}from"./emotion-css.esm-DZ62EKCi.js";import{f as s,i as c,l,m as u,n as d}from"./Icons-_Yn1YYY_.js";var f,p,m,h,g,_,v,y,b,x,S=e((()=>{a(),r(),u(),f=t(),p=({lable:e,variant:t,value:r,color:a,borderColor:o,icon:s,size:c,className:l,style:u})=>{let d=n(),p=c??d.badgeSizeDefault,h=t?v(t,r,p):void 0,g=e??h?.label??``,_=s===!1?void 0:typeof s==`boolean`||s===void 0?h?.icon:s;return(0,f.jsxs)(`span`,{style:u,className:i(y(m(d,h,a,o),p),l),children:[_&&(0,f.jsx)(`span`,{className:b,"aria-hidden":`true`,children:(0,f.jsx)(`span`,{className:x(h?.iconOffsetY),children:_})}),(0,f.jsx)(`span`,{children:g})]})},m=(e,t,n,r)=>({background:n?e[n]:e.badgeVariantBackground||t?.tone.background||e.lightBlue01,color:e.badgeVariantText||t?.tone.color||e.white,border:r?e[r]:e.badgeVariantBorder||t?.tone.border||`transparent`}),h=e=>e===`large`?24:16,g=e=>e===`large`?32:24,_=e=>e===`large`?32:24,v=(e,t,n=`medium`)=>{let r=h(n),i=g(n),a=_(n),o=t??20,u=t??`Предмет`;return{online:{label:`Онлайн`,tone:{background:`#EFC0C4`,color:`#890812`,border:`transparent`},icon:(0,f.jsx)(l,{size:r})},offline:{label:`Офлайн`,tone:{background:`#B2E0B9`,color:`#004F19`,border:`transparent`},icon:(0,f.jsx)(d,{size:a,strokeWidth:1}),iconOffsetY:`0.06em`},withTest:{label:`С тестовым`,tone:{background:`#F2D4BD`,color:`#994200`,border:`transparent`},icon:(0,f.jsx)(c,{size:r})},places:{label:`${o} мест`,tone:{background:`#ACC7FF`,color:`#0A255E`,border:`transparent`},icon:(0,f.jsx)(s,{size:i,strokeWidth:1}),iconOffsetY:`0.08em`},retake:{label:`Перезачёт`,tone:{background:`#C6C1DA`,color:`#3F3F3F`,border:`transparent`}},subject:{label:String(u),tone:{background:`#F2F2F2`,color:`#3F3F3F`,border:`transparent`}}}[e]},y=(e,t)=>o`
  display: inline-flex;
  box-sizing: border-box;

  align-items: center;
  justify-content: center;
  gap: ${t===`large`?`14px`:`6px`};

  font-size: ${t===`large`?`32px`:t===`small`?`11px`:`14px`};
      
  font-weight: 600;

  padding: ${t===`large`?`12px 28px`:t===`small`?`2px 10px`:`4px 14px`};

  border-radius: 50px;

  margin: 0 6px 0 0;

  text-wrap: none;

  min-width: 0;
  min-height: ${t===`large`?`64px`:t===`small`?`26px`:`36px`};
  line-height: 1;

  background: ${e.background};
  color: ${e.color};

  border: 2px solid ${e.border};
`,b=o`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
`,x=e=>o`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform: ${e?`translateY(${e})`:`none`};
`,p.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{lable:{required:!1,tsType:{name:`string`},description:`Текст внутри бейджа`},variant:{required:!1,tsType:{name:`union`,raw:`| 'online'
| 'offline'
| 'withTest'
| 'places'
| 'retake'
| 'subject'`,elements:[{name:`literal`,value:`'online'`},{name:`literal`,value:`'offline'`},{name:`literal`,value:`'withTest'`},{name:`literal`,value:`'places'`},{name:`literal`,value:`'retake'`},{name:`literal`,value:`'subject'`}]},description:`Заготовленный вариант`},value:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Значение для вариантов вроде "20 мест"`},color:{required:!1,tsType:{name:`AppTheme`},description:`Цвет фона`},borderColor:{required:!1,tsType:{name:`AppTheme`},description:`Цвет обводки`},icon:{required:!1,tsType:{name:`union`,raw:`boolean | ReactNode`,elements:[{name:`boolean`},{name:`ReactNode`}]},description:`Иконка`},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},description:`Размер`},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}}}));export{S as n,p as t};