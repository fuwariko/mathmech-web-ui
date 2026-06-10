import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Bn1Ys6_W.js";import{i as n,n as r,r as i,t as a}from"./emotion-css.esm-BqXpwIft.js";import{n as o,t as s}from"./color-tokens-CBhvVmg4.js";var c,l,u,d,f,p,m,h,g,_=e((()=>{i(),o(),c=t(),l=({title:e,leftAccessory:t,rightAccessory:n,topLeft:i,topRight:a,children:o,backgroundColor:s=`mainBlue`,textColor:l=`lightGrey02`,filled:u=!0,contentMaxWidth:_=1024,contentPaddingX:v=32,sticky:y=!1,className:b,style:x})=>{let S=i??t,C=a??n,w=!!S||!!C,T=!!e||!!o;return(0,c.jsx)(`header`,{style:x,className:r(d(s,l,u,y),b),children:(0,c.jsxs)(`div`,{className:f(_,v),children:[w&&(0,c.jsxs)(`div`,{className:p,children:[(0,c.jsx)(`div`,{className:g(`left`),children:S}),(0,c.jsx)(`div`,{className:g(`right`),children:C})]}),T&&(0,c.jsxs)(`div`,{className:m,children:[e&&(0,c.jsx)(`h1`,{className:h,children:e}),o]})]})})},u=e=>typeof e==`number`?`${e}px`:e,d=(e,t,n,r)=>a`
  display: flex;

  width: 100%;
  height: max-content;

  flex-direction: column;
  align-items: center;

  gap: 40px;

  padding: 32px 0;

  position: relative;
  z-index: 2;

  background: ${n?s[e]:`transparent`};
  color: ${s[t]};

  box-sizing: border-box;

  ${r&&a`
    position: sticky;
    top: 0;
  `}
`,f=(e,t)=>a`
  width: 100%;
  max-width: ${u(e)};

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  padding: 0 ${u(t)};

  box-sizing: border-box;
`,p=a`
  display: flex;

  justify-content: space-between;

  gap: 30px;

  align-items: baseline;

  width: 100%;

  margin-bottom: 12px;
`,m=a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`,h=a`
  margin: 0;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 400;
`,g=e=>a`
  display: flex;

  flex: 1;

  ${e===`left`&&a`
    justify-content: flex-start;
  `}

  ${e===`right`&&a`
    justify-content: flex-end;
  `}
`,l.__docgenInfo={description:``,methods:[],displayName:`Header`,props:{title:{required:!1,tsType:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}]},description:`Заголовок`},leftAccessory:{required:!1,tsType:{name:`union`,raw:`ReactNode | string`,elements:[{name:`ReactNode`},{name:`string`}]},description:`Левый аксессуар`},rightAccessory:{required:!1,tsType:{name:`union`,raw:`ReactNode | string`,elements:[{name:`ReactNode`},{name:`string`}]},description:`Правый аксессуар`},topLeft:{required:!1,tsType:{name:`ReactNode`},description:`Контент в верхней строке слева`},topRight:{required:!1,tsType:{name:`ReactNode`},description:`Контент в верхней строке справа`},children:{required:!1,tsType:{name:`ReactNode`},description:`Контент под верхней строкой`},backgroundColor:{required:!1,tsType:{name:`unknown`},description:`Цвет фона`,defaultValue:{value:`'mainBlue'`,computed:!1}},textColor:{required:!1,tsType:{name:`unknown`},description:`Цвет текста`,defaultValue:{value:`'lightGrey02'`,computed:!1}},filled:{required:!1,tsType:{name:`boolean`},description:`Растягивать цвет фона на всю ширину`,defaultValue:{value:`true`,computed:!1}},contentMaxWidth:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Максимальная ширина внутреннего контента`,defaultValue:{value:`1024`,computed:!1}},contentPaddingX:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Горизонтальные отступы внутреннего контента`,defaultValue:{value:`32`,computed:!1}},sticky:{required:!1,tsType:{name:`boolean`},description:`sticky header`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}}})),v,y,b,x,S,C,w,T,E,D=e((()=>{i(),v=t(),y=a`
  background: linear-gradient(
    90deg,
    #e9e9e9 25%,
    #f6f6f6 37%,
    #e9e9e9 63%
  );

  background-size: 400% 100%;
  animation: ${n`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`} 1.2s ease-in-out infinite;
  border-radius: 8px;
`,b=({sticky:e=!1})=>(0,v.jsx)(`header`,{className:x(e),children:(0,v.jsxs)(`div`,{className:S,children:[(0,v.jsxs)(`div`,{className:C,children:[(0,v.jsx)(`div`,{className:w}),(0,v.jsx)(`div`,{className:T})]}),(0,v.jsx)(`div`,{className:E})]})}),x=e=>a`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  gap: 40px;
  padding: 32px 0;

  background: #ffffff;
  box-sizing: border-box;

  ${e&&a`
    position: sticky;
    top: 0;
    z-index: 2;
  `}
`,S=a`
  width: 100%;
  max-width: 1024px;

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  padding: 0 32px;
  box-sizing: border-box;
`,C=a`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 16px; /* 👈 ВАЖНО: было 12 → стало просторнее */
  gap: 16px; /* 👈 чтобы не липло */
`,w=a`
  width: 90px;
  height: 20px;
  ${y};
`,T=a`
  width: 140px;
  height: 20px;
  ${y};
`,E=a`
  width: 50%;
  height: 30px;
  ${y};
`,b.__docgenInfo={description:``,methods:[],displayName:`HeaderSkeleton`,props:{backgroundColor:{required:!1,tsType:{name:`unknown`},description:``},sticky:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}}));export{_ as i,D as n,l as r,b as t};