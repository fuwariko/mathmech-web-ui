import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Bn1Ys6_W.js";import{i as n,n as r,r as i,t as a}from"./emotion-css.esm-BqXpwIft.js";var o,s,c,l,u,d,f=e((()=>{i(),o=t(),s=({header:e,content:t,footer:n,direction:i=`vertical`,borderRadius:a=15,className:s})=>(0,o.jsxs)(`div`,{className:r(c(i,a),s),children:[e&&(0,o.jsx)(`div`,{className:l,children:e}),t&&(0,o.jsx)(`div`,{className:u(i),children:t}),n&&(0,o.jsx)(`div`,{className:d,children:n})]}),c=(e,t)=>a`
  box-sizing: border-box;

  display: flex;

  flex-direction: ${e===`horizontal`?`row`:`column`};

  justify-content: space-between;

  gap: 16px;

  padding: 24px 20px 20px;

  border: 1px solid #d8d8d8;

  border-radius: ${t}px;

  background: #ffffff;

  min-width: 300px;

  width: fit-content;

  max-width: 100%;

  height: fit-content;
`,l=a`
  display: flex;
  align-items: center;
  width: 100%;
`,u=e=>a`
  display: flex;
  flex-direction: ${e===`horizontal`?`row`:`column`};
  gap: 12px;
  width: 100%;
`,d=a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  width: 100%;
`,s.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{header:{required:!1,tsType:{name:`ReactNode`},description:`Верхняя часть карточки`},content:{required:!1,tsType:{name:`ReactNode`},description:`Центральная часть карточки`},footer:{required:!1,tsType:{name:`ReactNode`},description:`Нижняя часть карточки`},direction:{required:!1,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:`Направление контента`,defaultValue:{value:`'vertical'`,computed:!1}},borderRadius:{required:!1,tsType:{name:`number`},description:`Скругление углов (px)`,defaultValue:{value:`15`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Дополнительный className`}}}})),p,m,h,g,_,v,y,b,x,S,C,w=e((()=>{i(),p=t(),m=a`
  background: linear-gradient(
    90deg,
    #eeeeee 25%,
    #f5f5f5 37%,
    #eeeeee 63%
  );

  background-size: 400% 100%;
  animation: ${n`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`} 1.2s ease-in-out infinite;
  border-radius: 8px;
`,h=({direction:e=`vertical`,borderRadius:t=15,hasHeader:n=!0,hasFooter:i=!0,className:a})=>(0,p.jsxs)(`div`,{className:r(g(e,t),a),children:[n&&(0,p.jsx)(`div`,{className:_}),(0,p.jsxs)(`div`,{className:v(),children:[(0,p.jsx)(`div`,{className:y}),(0,p.jsx)(`div`,{className:x}),(0,p.jsx)(`div`,{className:b})]}),i&&(0,p.jsxs)(`div`,{className:S,children:[(0,p.jsx)(`div`,{className:x}),(0,p.jsx)(`div`,{className:C})]})]}),g=(e,t)=>a`
  display: flex;

  flex-direction: ${e===`horizontal`?`row`:`column`};

  justify-content: space-between;

  gap: 16px;

  padding: 24px 20px 20px;

  border: 1px solid #e6e6e6;

  border-radius: ${t}px;

  background: #ffffff;

  min-width: 300px;
  width: fit-content;
  max-width: 100%;
`,_=a`
  width: 55%;
  height: 18px;
  ${m};
`,v=()=>a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`,y=a`
  width: 100%;
  height: 16px;
  ${m};
`,b=a`
  width: 80%;
  height: 14px;
  ${m};
`,x=a`
  width: 65%;
  height: 12px;
  ${m};
`,S=a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,C=a`
  width: 60px;
  height: 20px;
  ${m};
`,h.__docgenInfo={description:``,methods:[],displayName:`CardSkeleton`,props:{direction:{required:!1,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:``,defaultValue:{value:`'vertical'`,computed:!1}},borderRadius:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`15`,computed:!1}},hasHeader:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},hasFooter:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}}));export{f as i,w as n,s as r,h as t};