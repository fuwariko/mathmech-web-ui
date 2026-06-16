import{n as e}from"./chunk-BneVvdWh.js";import{a as t,i as n,o as r,r as i}from"./iframe-D3lb2UIJ.js";import{i as a,r as o,t as s}from"./emotion-css.esm-DZ62EKCi.js";import{m as c}from"./Icons-_Yn1YYY_.js";import{_ as l,a as u,c as d,d as f,f as p,g as m,h,i as g,l as _,m as v,n as y,o as b,p as x,r as S,s as C,t as w,u as T,v as E}from"./ComponentSkeletons-BH-F-KJD.js";import{n as D,t as O}from"./CardSkeleton-D54Kyjqu.js";var k,A,j,M,N,P,F,I,L,R=e((()=>{o(),i(),k=t(),A=s`
  background: linear-gradient(
    90deg,
    #e9e9e9 25%,
    #f6f6f6 37%,
    #e9e9e9 63%
  );

  background-size: 400% 100%;
  animation: ${a`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`} 1.2s ease-in-out infinite;
  border-radius: 8px;
`,j=({backgroundColor:e=`backgroundPrimary`,sticky:t=!1})=>(0,k.jsx)(`header`,{className:M(t,n()[e]),children:(0,k.jsxs)(`div`,{className:N,children:[(0,k.jsxs)(`div`,{className:P,children:[(0,k.jsx)(`div`,{className:F}),(0,k.jsx)(`div`,{className:I})]}),(0,k.jsx)(`div`,{className:L})]})}),M=(e,t)=>s`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  gap: 40px;
  padding: 32px 0;

  background: ${t};
  box-sizing: border-box;

  ${e&&s`
    position: sticky;
    top: 0;
    z-index: 2;
  `}
`,N=s`
  width: 100%;
  max-width: 1024px;

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  padding: 0 32px;
  box-sizing: border-box;
`,P=s`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 16px; /* 👈 ВАЖНО: было 12 → стало просторнее */
  gap: 16px; /* 👈 чтобы не липло */
`,F=s`
  width: 90px;
  height: 20px;
  ${A};
`,I=s`
  width: 140px;
  height: 20px;
  ${A};
`,L=s`
  width: 50%;
  height: 30px;
  ${A};
`,j.__docgenInfo={description:``,methods:[],displayName:`HeaderSkeleton`,props:{backgroundColor:{required:!1,tsType:{name:`AppTheme`},description:``,defaultValue:{value:`'backgroundPrimary'`,computed:!1}},sticky:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),z,B=e((()=>{z={black:`#000000`,white:`#FFFFFF`,darkNavy01:`#2C416D`,darkNavy02:`#0A255E`,mainNavy:`#1E4391`,lightNavy01:`#6291F3`,lightNavy02:`#ACC7FF`,darkOrange01:`#AB4A00`,darkOrange02:`#994200`,mainOrange:`#C25400`,lightOrange01:`#D47C39`,lightOrange02:`#F2D4BD`,darkGreen01:`#006620`,darkGreen02:`#004F19`,mainGreen:`#00852A`,lightGreen01:`#00A31B`,lightGreen02:`#B2E0B9`,darkRed01:`#9F363D`,darkRed02:`#890812`,mainRed:`#D41926`,lightRed01:`#E3626B`,lightRed02:`#EFC0C4`,darkCrimson01:`#5A1A5B`,darkCrimson02:`#822183`,mainCrimson:`#A92CAB`,lightCrimson01:`#C947CB`,lightCrimson02:`#DC5ADE`,darkBlue01:`#0347BB`,darkBlue02:`#0756DC`,mainBlue:`#2B79FF`,lightBlue01:`#691B9F`,lightBlue02:`#B9D3FF`,darkPurple01:`#1E1769`,darkPurple02:`#3C3494`,mainPurple:`#5146CC`,lightPurple01:`#948DDE`,lightPurple02:`#B6B2E6`,darkGrey01:`#87859A`,darkGrey02:`#B7B6C3`,mainGrey:`#C6C1DA`,lightGrey01:`#E2D9FF`,lightGrey02:`#F2EFFD`},Object.fromEntries(Object.entries(z).map(([e,t])=>[e,`var(--mm-${e}, ${t})`]))})),V=e((()=>{})),H=e((()=>{D(),R(),E(),c(),B(),r(),V()})),U,W,G,K,q,J,Y;e((()=>{o(),H(),U=t(),W={title:`UI/Skeletons`,parameters:{layout:`fullscreen`}},G={render:()=>(0,U.jsxs)(`div`,{className:K,children:[(0,U.jsx)(j,{}),(0,U.jsxs)(`main`,{className:q,children:[(0,U.jsxs)(`section`,{className:J,children:[(0,U.jsx)(`h2`,{children:`Controls`}),(0,U.jsx)(y,{}),(0,U.jsx)(S,{}),(0,U.jsx)(d,{}),(0,U.jsx)(C,{}),(0,U.jsx)(m,{}),(0,U.jsx)(x,{}),(0,U.jsx)(_,{}),(0,U.jsx)(g,{}),(0,U.jsx)(T,{}),(0,U.jsx)(l,{})]}),(0,U.jsxs)(`section`,{className:J,children:[(0,U.jsx)(`h2`,{children:`Content`}),(0,U.jsx)(h,{}),(0,U.jsx)(p,{}),(0,U.jsx)(f,{}),(0,U.jsx)(v,{}),(0,U.jsx)(w,{})]}),(0,U.jsxs)(`section`,{className:J,children:[(0,U.jsx)(`h2`,{children:`Blocks`}),(0,U.jsx)(O,{}),(0,U.jsx)(u,{}),(0,U.jsx)(b,{})]})]})]})},K=s`
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 100vh;
  background: #ffffff;
`,q=s`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  width: min(1100px, 100%);
  margin: 0 auto;
  padding: 0 32px 48px;
  box-sizing: border-box;
`,J=s`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: #1e4391;
  }
`,G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},Y=[`All`]}))();export{G as All,Y as __namedExportsOrder,W as default};