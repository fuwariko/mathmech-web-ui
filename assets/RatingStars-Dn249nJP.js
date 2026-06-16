import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r,i,r as a}from"./iframe-D3lb2UIJ.js";import{n as o,t as s}from"./emotion-styled.browser.esm-BHLNlsSj.js";var c,l,u,d=t((()=>{s(),c=o.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`,l=o.div`
  display: flex;
  flex-wrap: nowrap;
`,u=o.div`
  position: relative;
  display: inline-flex;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  align-items: center;
  justify-content: center;
`,o.span`
  position: absolute;
  inset: 0;
  display: inline-flex;
  overflow: hidden;
  width: ${e=>e.fillPercent}%;
  pointer-events: none;
`})),f,p,m,h,g,_=t((()=>{f=24,p=16,m=(e,t)=>t===void 0?e?p:f:Math.max(1,t),h=m,g=(e,t)=>{let n=Math.min(5,Math.max(0,e));return Math.min(1,Math.max(0,n-(t-1)))*100}})),v,y,b,x,S,C=t((()=>{v=e(n(),1),d(),a(),_(),y=r(),b=`M12 3.5L14.7 8.9L20.5 9.7L16.2 13.8L17.3 19.5L12 16.6L6.7 19.5L7.8 13.8L3.5 9.7L9.3 8.9L12 3.5Z`,x=({rating:e,isSmall:t,size:n,ariaHidden:r})=>{let a=i(),o=h(t,n);return(0,y.jsx)(c,{children:(0,y.jsx)(l,{"aria-label":r?void 0:`Оценка ${e} из 5`,role:r?void 0:`img`,"aria-hidden":r,children:[1,2,3,4,5].map(t=>(0,y.jsx)(u,{size:o,children:(0,y.jsx)(S,{size:o,color:a.lightOrange01,fillPercent:g(e,t)})},t))})})},S=({size:e,color:t,fillPercent:n})=>{let r=v.useId(),i=24*n/100;return(0,y.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,focusable:`false`,children:[(0,y.jsx)(`defs`,{children:(0,y.jsx)(`clipPath`,{id:r,children:(0,y.jsx)(`rect`,{x:`0`,y:`0`,width:i,height:`24`})})}),(0,y.jsx)(`path`,{d:b,fill:t,stroke:`none`,clipPath:`url(#${r})`}),(0,y.jsx)(`path`,{d:b,fill:`none`,stroke:t,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]})},x.__docgenInfo={description:``,methods:[],displayName:`RatingStars`,props:{rating:{required:!0,tsType:{name:`number`},description:`Оценка`},isSmall:{required:!1,tsType:{name:`boolean`},description:`Размер звезд`},size:{required:!1,tsType:{name:`number`},description:`Размер звезд в px`},ariaHidden:{required:!1,tsType:{name:`boolean`},description:`Видимость для скринридера`}}}}));export{C as n,x as t};