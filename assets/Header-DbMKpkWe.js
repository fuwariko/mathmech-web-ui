import{n as e}from"./chunk-BneVvdWh.js";import{a as t,i as n,r}from"./iframe-D3lb2UIJ.js";import{n as i,r as a,t as o}from"./emotion-css.esm-DZ62EKCi.js";var s,c,l,u,d,f,p,m,h,g=e((()=>{a(),r(),s=t(),c=({title:e,leftAccessory:t,rightAccessory:r,topLeft:a,topRight:o,children:c,backgroundColor:l,textColor:g,filled:_=!0,contentMaxWidth:v=1024,contentPaddingX:y=32,sticky:b=!1,className:x,style:S})=>{let C=n(),w=a??t,T=o??r,E=!!w||!!T,D=!!e||!!c;return(0,s.jsx)(`header`,{style:S,className:i(u(l?C[l]:C.headerBackground,g?C[g]:C.headerText,_,b),x),children:(0,s.jsxs)(`div`,{className:d(v,y),children:[E&&(0,s.jsxs)(`div`,{className:f,children:[(0,s.jsx)(`div`,{className:h(`left`),children:w}),(0,s.jsx)(`div`,{className:h(`right`),children:T})]}),D&&(0,s.jsxs)(`div`,{className:p,children:[e&&(0,s.jsx)(`h1`,{className:m,children:e}),c]})]})})},l=e=>typeof e==`number`?`${e}px`:e,u=(e,t,n,r)=>o`
  display: flex;

  width: 100%;
  height: max-content;

  flex-direction: column;
  align-items: center;

  gap: 40px;

  padding: 32px 0;

  position: relative;
  z-index: 2;

  background: ${n?e:`transparent`};
  color: ${t};

  box-sizing: border-box;

  ${r&&o`
    position: sticky;
    top: 0;
  `}
`,d=(e,t)=>o`
  width: 100%;
  max-width: ${l(e)};

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  padding: 0 ${l(t)};

  box-sizing: border-box;
`,f=o`
  display: flex;

  justify-content: space-between;

  gap: 30px;

  align-items: baseline;

  width: 100%;

  margin-bottom: 12px;
`,p=o`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`,m=o`
  margin: 0;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 400;
`,h=e=>o`
  display: flex;

  flex: 1;

  ${e===`left`&&o`
    justify-content: flex-start;
  `}

  ${e===`right`&&o`
    justify-content: flex-end;
  `}
`,c.__docgenInfo={description:``,methods:[],displayName:`Header`,props:{title:{required:!1,tsType:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}]},description:`Заголовок`},leftAccessory:{required:!1,tsType:{name:`union`,raw:`ReactNode | string`,elements:[{name:`ReactNode`},{name:`string`}]},description:`Левый аксессуар`},rightAccessory:{required:!1,tsType:{name:`union`,raw:`ReactNode | string`,elements:[{name:`ReactNode`},{name:`string`}]},description:`Правый аксессуар`},topLeft:{required:!1,tsType:{name:`ReactNode`},description:`Контент в верхней строке слева`},topRight:{required:!1,tsType:{name:`ReactNode`},description:`Контент в верхней строке справа`},children:{required:!1,tsType:{name:`ReactNode`},description:`Контент под верхней строкой`},backgroundColor:{required:!1,tsType:{name:`AppTheme`},description:`Цвет фона`},textColor:{required:!1,tsType:{name:`AppTheme`},description:`Цвет текста`},filled:{required:!1,tsType:{name:`boolean`},description:`Растягивать цвет фона на всю ширину`,defaultValue:{value:`true`,computed:!1}},contentMaxWidth:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Максимальная ширина внутреннего контента`,defaultValue:{value:`1024`,computed:!1}},contentPaddingX:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Горизонтальные отступы внутреннего контента`,defaultValue:{value:`32`,computed:!1}},sticky:{required:!1,tsType:{name:`boolean`},description:`sticky header`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}}}));export{g as n,c as t};