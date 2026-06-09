import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-B6lWK8m9.js";import{c as i,f as a,l as o}from"./Icons-B9j9ZF3b.js";import{n as s,t as c}from"./emotion-styled.browser.esm-CJX6AVeg.js";var l,u,d,f=t((()=>{c(),s.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`,l=s.div`
  position: absolute;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  font-size: 35px;
   width: ${e=>e.rating*(e.isSmall?15:35)}px;
`,u=s.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  width: 175px;
  height: auto;
  overflow: hidden;
`,d=s.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  height: auto;
  align-items: center;
`,s.img`
  width: ${e=>e.isSmall?15:35}px;
  height: ${e=>e.isSmall?15:35}px;
  object-fit: cover;
`})),p,m,h=t((()=>{e(n(),1),f(),a(),p=r(),m=({rating:e,isSmall:t,ariaHidden:n})=>{let r=t?16:24;return(0,p.jsxs)(`div`,{"aria-label":n?void 0:`Оценка ${e}`,role:n?void 0:`img`,"aria-hidden":n,children:[(0,p.jsx)(l,{rating:e,isSmall:t,children:[1,2,3,4,5].map(e=>(0,p.jsx)(d,{children:(0,p.jsx)(i,{size:r})},e))}),(0,p.jsx)(u,{children:[1,2,3,4,5].map(e=>(0,p.jsx)(d,{children:(0,p.jsx)(o,{size:r})},e))})]})},m.__docgenInfo={description:``,methods:[],displayName:`RatingStars`,props:{rating:{required:!0,tsType:{name:`number`},description:`Оценка`},isSmall:{required:!1,tsType:{name:`boolean`},description:`Размер звезд`},ariaHidden:{required:!1,tsType:{name:`boolean`},description:`Видимость для скринридера`}}}})),g,_,v;t((()=>{h(),g={title:`FORMS/RatingStars`,component:m,parameters:{layout:`centered`},tags:[`autodocs`]},_={args:{rating:1}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    rating: 1
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`]}))();export{_ as Default,v as __namedExportsOrder,g as default};