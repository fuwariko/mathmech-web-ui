import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Bn1Ys6_W.js";import{i as n,r,t as i}from"./emotion-css.esm-BqXpwIft.js";import{n as a}from"./color-tokens-CBhvVmg4.js";import{_ as o,a as s,c,d as l,f as u,g as d,h as f,i as p,l as m,m as h,n as g,o as _,p as v,r as y,s as b,t as x,u as S,v as C}from"./ComponentSkeletons-0oETlvfY.js";import{m as w}from"./Icons-Dz2YVI0X.js";import{n as T,t as E}from"./CardSkeleton-Du9bRi6H.js";var D,O,k,A,j,M,N,P,F,I=e((()=>{r(),D=t(),O=i`
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
`,k=({sticky:e=!1})=>(0,D.jsx)(`header`,{className:A(e),children:(0,D.jsxs)(`div`,{className:j,children:[(0,D.jsxs)(`div`,{className:M,children:[(0,D.jsx)(`div`,{className:N}),(0,D.jsx)(`div`,{className:P})]}),(0,D.jsx)(`div`,{className:F})]})}),A=e=>i`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  gap: 40px;
  padding: 32px 0;

  background: #ffffff;
  box-sizing: border-box;

  ${e&&i`
    position: sticky;
    top: 0;
    z-index: 2;
  `}
`,j=i`
  width: 100%;
  max-width: 1024px;

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  padding: 0 32px;
  box-sizing: border-box;
`,M=i`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 16px; /* 👈 ВАЖНО: было 12 → стало просторнее */
  gap: 16px; /* 👈 чтобы не липло */
`,N=i`
  width: 90px;
  height: 20px;
  ${O};
`,P=i`
  width: 140px;
  height: 20px;
  ${O};
`,F=i`
  width: 50%;
  height: 30px;
  ${O};
`,k.__docgenInfo={description:``,methods:[],displayName:`HeaderSkeleton`,props:{backgroundColor:{required:!1,tsType:{name:`unknown`},description:``},sticky:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),L=e((()=>{})),R=e((()=>{})),z=e((()=>{T(),I(),C(),w(),a(),L(),R()})),B,V,H,U,W,G,K;e((()=>{r(),z(),B=t(),V={title:`UI/Skeletons`,parameters:{layout:`fullscreen`}},H={render:()=>(0,B.jsxs)(`div`,{className:U,children:[(0,B.jsx)(k,{}),(0,B.jsxs)(`main`,{className:W,children:[(0,B.jsxs)(`section`,{className:G,children:[(0,B.jsx)(`h2`,{children:`Controls`}),(0,B.jsx)(g,{}),(0,B.jsx)(y,{}),(0,B.jsx)(c,{}),(0,B.jsx)(b,{}),(0,B.jsx)(d,{}),(0,B.jsx)(v,{}),(0,B.jsx)(m,{}),(0,B.jsx)(p,{}),(0,B.jsx)(S,{}),(0,B.jsx)(o,{})]}),(0,B.jsxs)(`section`,{className:G,children:[(0,B.jsx)(`h2`,{children:`Content`}),(0,B.jsx)(f,{}),(0,B.jsx)(u,{}),(0,B.jsx)(l,{}),(0,B.jsx)(h,{}),(0,B.jsx)(x,{})]}),(0,B.jsxs)(`section`,{className:G,children:[(0,B.jsx)(`h2`,{children:`Blocks`}),(0,B.jsx)(E,{}),(0,B.jsx)(s,{}),(0,B.jsx)(_,{})]})]})]})},U=i`
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 100vh;
  background: #ffffff;
`,W=i`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  width: min(1100px, 100%);
  margin: 0 auto;
  padding: 0 32px 48px;
  box-sizing: border-box;
`,G=i`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: #1e4391;
  }
`,H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <div className={pageStyles}>
      <HeaderSkeleton />

      <main className={gridStyles}>
        <section className={sectionStyles}>
          <h2>Controls</h2>
          <BadgeSkeleton />
          <ButtonSkeleton />
          <LinkSkeleton />
          <InputTextSkeleton />
          <TextareaSkeleton />
          <SelectSkeleton />
          <MultiselectSkeleton />
          <CheckboxSkeleton />
          <RadioSkeleton />
          <ToggleSkeleton />
        </section>

        <section className={sectionStyles}>
          <h2>Content</h2>
          <TextSkeleton />
          <RatingStarsSkeleton />
          <RadioStarsSkeleton />
          <TabsSkeleton />
          <AccordionSkeleton />
        </section>

        <section className={sectionStyles}>
          <h2>Blocks</h2>
          <CardSkeleton />
          <DialogSkeleton />
          <FooterSkeleton />
        </section>
      </main>
    </div>
}`,...H.parameters?.docs?.source}}},K=[`All`]}))();export{H as All,K as __namedExportsOrder,V as default};