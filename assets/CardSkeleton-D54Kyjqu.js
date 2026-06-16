import{n as e}from"./chunk-BneVvdWh.js";import{a as t,i as n,r}from"./iframe-D3lb2UIJ.js";import{i,n as a,r as o,t as s}from"./emotion-css.esm-DZ62EKCi.js";var c,l,u,d,f,p,m=e((()=>{o(),r(),c=t(),l=({header:e,content:t,footer:r,direction:i=`vertical`,borderRadius:o=15,className:s})=>{let l=n();return(0,c.jsxs)(`div`,{className:a(u(i,o,l.backgroundPrimary,l.surfacePrimary,l.surfaceText,l.mainGrey),s),children:[e&&(0,c.jsx)(`div`,{className:d,children:e}),t&&(0,c.jsx)(`div`,{className:f(i),children:t}),r&&(0,c.jsx)(`div`,{className:p,children:r})]})},u=(e,t,n,r,i,a)=>s`
  box-sizing: border-box;

  display: flex;

  flex-direction: ${e===`horizontal`?`row`:`column`};

  justify-content: space-between;

  gap: 16px;

  padding: 24px 20px 20px;

  border: 1px solid ${a};

  border-radius: ${t}px;

  background: ${r||n};

  color: ${i};

  min-width: 300px;

  width: fit-content;

  max-width: 100%;

  height: fit-content;
`,d=s`
  display: flex;
  align-items: center;
  width: 100%;
`,f=e=>s`
  display: flex;
  flex-direction: ${e===`horizontal`?`row`:`column`};
  gap: 12px;
  width: 100%;
`,p=s`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  width: 100%;
`,l.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{header:{required:!1,tsType:{name:`ReactNode`},description:`Верхняя часть карточки`},content:{required:!1,tsType:{name:`ReactNode`},description:`Центральная часть карточки`},footer:{required:!1,tsType:{name:`ReactNode`},description:`Нижняя часть карточки`},direction:{required:!1,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:`Направление контента`,defaultValue:{value:`'vertical'`,computed:!1}},borderRadius:{required:!1,tsType:{name:`number`},description:`Скругление углов (px)`,defaultValue:{value:`15`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Дополнительный className`}}}})),h,g,_,v,y,b,x,S,C,w,T,E=e((()=>{o(),h=t(),g=s`
  background: linear-gradient(
    90deg,
    #eeeeee 25%,
    #f5f5f5 37%,
    #eeeeee 63%
  );

  background-size: 400% 100%;
  animation: ${i`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`} 1.2s ease-in-out infinite;
  border-radius: 8px;
`,_=({direction:e=`vertical`,borderRadius:t=15,hasHeader:n=!0,hasFooter:r=!0,className:i})=>(0,h.jsxs)(`div`,{className:a(v(e,t),i),children:[n&&(0,h.jsx)(`div`,{className:y}),(0,h.jsxs)(`div`,{className:b(),children:[(0,h.jsx)(`div`,{className:x}),(0,h.jsx)(`div`,{className:C}),(0,h.jsx)(`div`,{className:S})]}),r&&(0,h.jsxs)(`div`,{className:w,children:[(0,h.jsx)(`div`,{className:C}),(0,h.jsx)(`div`,{className:T})]})]}),v=(e,t)=>s`
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
`,y=s`
  width: 55%;
  height: 18px;
  ${g};
`,b=()=>s`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`,x=s`
  width: 100%;
  height: 16px;
  ${g};
`,S=s`
  width: 80%;
  height: 14px;
  ${g};
`,C=s`
  width: 65%;
  height: 12px;
  ${g};
`,w=s`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,T=s`
  width: 60px;
  height: 20px;
  ${g};
`,_.__docgenInfo={description:``,methods:[],displayName:`CardSkeleton`,props:{direction:{required:!1,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:``,defaultValue:{value:`'vertical'`,computed:!1}},borderRadius:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`15`,computed:!1}},hasHeader:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},hasFooter:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}}));export{m as i,E as n,l as r,_ as t};