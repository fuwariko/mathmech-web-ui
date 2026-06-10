import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Bn1Ys6_W.js";import{n,r,t as i}from"./emotion-css.esm-BqXpwIft.js";import{n as a,t as o}from"./color-tokens-CBhvVmg4.js";import{f as s,i as c,l,m as u,n as d}from"./Icons-Dz2YVI0X.js";var f,p,m,h,g,_,v,y=e((()=>{r(),a(),u(),f=t(),p=({lable:e,label:t,variant:r,value:i,color:a,borderColor:o,icon:s,size:c=`medium`,className:l,style:u})=>{let d=r?g(r,i,c):void 0,p=t??e??d?.label??``,h=s===!1?void 0:typeof s==`boolean`||s===void 0?d?.icon:s;return(0,f.jsxs)(`span`,{style:u,className:n(_(m(d,a,o),c),l),children:[h&&(0,f.jsx)(`span`,{className:v,"aria-hidden":`true`,children:h}),(0,f.jsx)(`span`,{children:p})]})},m=(e,t,n)=>({background:t?o[t]:e?.tone.background??o.lightBlue01,color:e?.tone.color??`#ffffff`,border:n?o[n]:e?.tone.border??`transparent`}),h=e=>e===`large`?24:16,g=(e,t,n=`medium`)=>{let r=h(n);return{online:{label:`Онлайн`,tone:{background:o.mainGreen,color:`#ffffff`,border:`transparent`},icon:(0,f.jsx)(l,{size:r})},offline:{label:`Офлайн`,tone:{background:`transparent`,color:o.darkGreen01,border:o.darkGreen01},icon:(0,f.jsx)(d,{size:r})},withTest:{label:`С тестовым`,tone:{background:o.lightOrange01,color:`#ffffff`,border:`transparent`},icon:(0,f.jsx)(c,{size:r})},places:{label:`${t??20} мест`,tone:{background:o.lightNavy01,color:`#ffffff`,border:`transparent`},icon:(0,f.jsx)(s,{size:r})},retake:{label:`Перезачёт`,tone:{background:o.mainGrey,color:`#4d4d4d`,border:`transparent`}},subject:{label:String(t??`Математика`),tone:{background:`transparent`,color:`#4d4d4d`,border:`#4d4d4d`}}}[e]},_=(e,t)=>i`
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

  text-wrap: nowrap;

  min-width: 0;
  min-height: ${t===`large`?`64px`:t===`small`?`26px`:`36px`};
  line-height: 1;

  background: ${e.background};
  color: ${e.color};

  border: 2px solid ${e.border};
`,v=i`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
`,p.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{lable:{required:!1,tsType:{name:`string`},description:`Текст внутри бейджа`},label:{required:!1,tsType:{name:`string`},description:`Текст внутри бейджа`},variant:{required:!1,tsType:{name:`union`,raw:`| 'online'
| 'offline'
| 'withTest'
| 'places'
| 'retake'
| 'subject'`,elements:[{name:`literal`,value:`'online'`},{name:`literal`,value:`'offline'`},{name:`literal`,value:`'withTest'`},{name:`literal`,value:`'places'`},{name:`literal`,value:`'retake'`},{name:`literal`,value:`'subject'`}]},description:`Заготовленный вариант`},value:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Значение для вариантов вроде "20 мест"`},color:{required:!1,tsType:{name:`unknown`},description:`Цвет фона`},borderColor:{required:!1,tsType:{name:`unknown`},description:`Цвет обводки`},icon:{required:!1,tsType:{name:`union`,raw:`boolean | ReactNode`,elements:[{name:`boolean`},{name:`ReactNode`}]},description:`Иконка`},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},description:`Размер`,defaultValue:{value:`'medium'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}}}));export{y as n,p as t};