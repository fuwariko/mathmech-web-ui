import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B6lWK8m9.js";import{i as n,r,t as i}from"./emotion-css.esm-nW0xTD3m.js";import{n as a,t as o}from"./color-tokens-BPpBLVR4.js";import{f as s,n as c}from"./Icons-B9j9ZF3b.js";import{n as l,t as u}from"./Button-DMviSlsf.js";var d,f,p,m,h,g,_=e((()=>{r(),a(),d=t(),f=({title:e,leftAccessory:t,rightAccessory:n,backgroundColor:r=`mainBlue`,textColor:i=`lightGrey02`,sticky:a=!1})=>(0,d.jsx)(`header`,{className:p(r,i,a),children:(0,d.jsxs)(`div`,{className:m,children:[(0,d.jsxs)(`div`,{className:h,children:[(0,d.jsx)(`div`,{className:g(`left`),children:t}),(0,d.jsx)(`div`,{className:g(`right`),children:n})]}),(0,d.jsx)(`h1`,{children:e})]})}),p=(e,t,n)=>i`
  display: flex;

  width: 100%;
  height: max-content;

  flex-direction: column;
  align-items: center;

  gap: 40px;

  padding: 32px 0;

  position: relative;
  z-index: 2;

  background: ${o[e]};
  color: ${o[t]};

  box-sizing: border-box;

  ${n&&i`
    position: sticky;
    top: 0;
  `}
`,m=i`
  width: 100%;
  max-width: 1024px;

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  padding: 0 32px;

  box-sizing: border-box;
`,h=i`
  display: flex;

  justify-content: space-between;

  gap: 30px;

  align-items: baseline;

  width: 100%;

  margin-bottom: 12px;
`,g=e=>i`
  display: flex;

  flex: 1;

  ${e===`left`&&i`
    justify-content: flex-start;
  `}

  ${e===`right`&&i`
    justify-content: flex-end;
  `}
`,f.__docgenInfo={description:``,methods:[],displayName:`Header`,props:{title:{required:!0,tsType:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}]},description:`Заголовок`},leftAccessory:{required:!1,tsType:{name:`union`,raw:`ReactNode | string`,elements:[{name:`ReactNode`},{name:`string`}]},description:`Левый аксессуар`},rightAccessory:{required:!1,tsType:{name:`union`,raw:`ReactNode | string`,elements:[{name:`ReactNode`},{name:`string`}]},description:`Правый аксессуар`},backgroundColor:{required:!1,tsType:{name:`union`,raw:`keyof typeof allColors`,elements:[{name:`literal`,value:`darkNavy01`},{name:`literal`,value:`darkNavy02`},{name:`literal`,value:`mainNavy`},{name:`literal`,value:`lightNavy01`},{name:`literal`,value:`lightNavy02`},{name:`literal`,value:`darkOrange01`},{name:`literal`,value:`darkOrange02`},{name:`literal`,value:`mainOrange`},{name:`literal`,value:`lightOrange01`},{name:`literal`,value:`lightOrange02`},{name:`literal`,value:`darkGreen01`},{name:`literal`,value:`darkGreen02`},{name:`literal`,value:`mainGreen`},{name:`literal`,value:`lightGreen01`},{name:`literal`,value:`lightGreen02`},{name:`literal`,value:`darkRed01`},{name:`literal`,value:`darkRed02`},{name:`literal`,value:`mainRed`},{name:`literal`,value:`lightRed01`},{name:`literal`,value:`lightRed02`},{name:`literal`,value:`darkCrimson01`},{name:`literal`,value:`darkCrimson02`},{name:`literal`,value:`mainCrimson`},{name:`literal`,value:`lightCrimson01`},{name:`literal`,value:`lightCrimson02`},{name:`literal`,value:`darkBlue01`},{name:`literal`,value:`darkBlue02`},{name:`literal`,value:`mainBlue`},{name:`literal`,value:`lightBlue01`},{name:`literal`,value:`lightBlue02`},{name:`literal`,value:`darkPurple01`},{name:`literal`,value:`darkPurple02`},{name:`literal`,value:`mainPurple`},{name:`literal`,value:`lightPurple01`},{name:`literal`,value:`lightPurple02`},{name:`literal`,value:`darkGrey01`},{name:`literal`,value:`darkGrey02`},{name:`literal`,value:`mainGrey`},{name:`literal`,value:`lightGrey01`},{name:`literal`,value:`lightGrey02`}]},description:`Цвет фона`,defaultValue:{value:`'mainBlue'`,computed:!1}},textColor:{required:!1,tsType:{name:`union`,raw:`keyof typeof allColors`,elements:[{name:`literal`,value:`darkNavy01`},{name:`literal`,value:`darkNavy02`},{name:`literal`,value:`mainNavy`},{name:`literal`,value:`lightNavy01`},{name:`literal`,value:`lightNavy02`},{name:`literal`,value:`darkOrange01`},{name:`literal`,value:`darkOrange02`},{name:`literal`,value:`mainOrange`},{name:`literal`,value:`lightOrange01`},{name:`literal`,value:`lightOrange02`},{name:`literal`,value:`darkGreen01`},{name:`literal`,value:`darkGreen02`},{name:`literal`,value:`mainGreen`},{name:`literal`,value:`lightGreen01`},{name:`literal`,value:`lightGreen02`},{name:`literal`,value:`darkRed01`},{name:`literal`,value:`darkRed02`},{name:`literal`,value:`mainRed`},{name:`literal`,value:`lightRed01`},{name:`literal`,value:`lightRed02`},{name:`literal`,value:`darkCrimson01`},{name:`literal`,value:`darkCrimson02`},{name:`literal`,value:`mainCrimson`},{name:`literal`,value:`lightCrimson01`},{name:`literal`,value:`lightCrimson02`},{name:`literal`,value:`darkBlue01`},{name:`literal`,value:`darkBlue02`},{name:`literal`,value:`mainBlue`},{name:`literal`,value:`lightBlue01`},{name:`literal`,value:`lightBlue02`},{name:`literal`,value:`darkPurple01`},{name:`literal`,value:`darkPurple02`},{name:`literal`,value:`mainPurple`},{name:`literal`,value:`lightPurple01`},{name:`literal`,value:`lightPurple02`},{name:`literal`,value:`darkGrey01`},{name:`literal`,value:`darkGrey02`},{name:`literal`,value:`mainGrey`},{name:`literal`,value:`lightGrey01`},{name:`literal`,value:`lightGrey02`}]},description:`Цвет текста`,defaultValue:{value:`'lightGrey02'`,computed:!1}},sticky:{required:!1,tsType:{name:`boolean`},description:`sticky header`,defaultValue:{value:`false`,computed:!1}}}}})),v,y,b,x,S,C,w,T,E,D=e((()=>{r(),v=t(),y=i`
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
`,b=({sticky:e=!1})=>(0,v.jsx)(`header`,{className:x(e),children:(0,v.jsxs)(`div`,{className:S,children:[(0,v.jsxs)(`div`,{className:C,children:[(0,v.jsx)(`div`,{className:w}),(0,v.jsx)(`div`,{className:T})]}),(0,v.jsx)(`div`,{className:E})]})}),x=e=>i`
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
`,S=i`
  width: 100%;
  max-width: 1024px;

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  padding: 0 32px;
  box-sizing: border-box;
`,C=i`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 16px; /* 👈 ВАЖНО: было 12 → стало просторнее */
  gap: 16px; /* 👈 чтобы не липло */
`,w=i`
  width: 90px;
  height: 20px;
  ${y};
`,T=i`
  width: 140px;
  height: 20px;
  ${y};
`,E=i`
  width: 50%;
  height: 30px;
  ${y};
`,b.__docgenInfo={description:``,methods:[],displayName:`HeaderSkeleton`,props:{backgroundColor:{required:!1,tsType:{name:`union`,raw:`keyof typeof allColors`,elements:[{name:`literal`,value:`darkNavy01`},{name:`literal`,value:`darkNavy02`},{name:`literal`,value:`mainNavy`},{name:`literal`,value:`lightNavy01`},{name:`literal`,value:`lightNavy02`},{name:`literal`,value:`darkOrange01`},{name:`literal`,value:`darkOrange02`},{name:`literal`,value:`mainOrange`},{name:`literal`,value:`lightOrange01`},{name:`literal`,value:`lightOrange02`},{name:`literal`,value:`darkGreen01`},{name:`literal`,value:`darkGreen02`},{name:`literal`,value:`mainGreen`},{name:`literal`,value:`lightGreen01`},{name:`literal`,value:`lightGreen02`},{name:`literal`,value:`darkRed01`},{name:`literal`,value:`darkRed02`},{name:`literal`,value:`mainRed`},{name:`literal`,value:`lightRed01`},{name:`literal`,value:`lightRed02`},{name:`literal`,value:`darkCrimson01`},{name:`literal`,value:`darkCrimson02`},{name:`literal`,value:`mainCrimson`},{name:`literal`,value:`lightCrimson01`},{name:`literal`,value:`lightCrimson02`},{name:`literal`,value:`darkBlue01`},{name:`literal`,value:`darkBlue02`},{name:`literal`,value:`mainBlue`},{name:`literal`,value:`lightBlue01`},{name:`literal`,value:`lightBlue02`},{name:`literal`,value:`darkPurple01`},{name:`literal`,value:`darkPurple02`},{name:`literal`,value:`mainPurple`},{name:`literal`,value:`lightPurple01`},{name:`literal`,value:`lightPurple02`},{name:`literal`,value:`darkGrey01`},{name:`literal`,value:`darkGrey02`},{name:`literal`,value:`mainGrey`},{name:`literal`,value:`lightGrey01`},{name:`literal`,value:`lightGrey02`}]},description:``},sticky:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),O,k,A,j,M,N,P,F,I,L,R;e((()=>{_(),D(),s(),l(),O=t(),k={title:`UI/Header`,component:f,tags:[`autodocs`],args:{title:`Каталог курсов`,backgroundColor:`mainBlue`,textColor:`lightGrey02`,sticky:!1,leftAccessory:`МатМех`,rightAccessory:(0,O.jsx)(u,{color:`mainGreen`,children:`Войти`})},argTypes:{backgroundColor:{control:`select`,options:`darkNavy01.darkNavy02.mainNavy.lightNavy01.lightNavy02.darkOrange01.darkOrange02.mainOrange.lightOrange01.lightOrange02.darkGreen01.darkGreen02.mainGreen.lightGreen01.lightGreen02.darkRed01.darkRed02.mainRed.lightRed01.lightRed02.darkCrimson01.darkCrimson02.mainCrimson.lightCrimson01.lightCrimson02.darkBlue01.darkBlue02.mainBlue.lightBlue01.lightBlue02.darkPurple01.darkPurple02.mainPurple.lightPurple01.lightPurple02.darkGrey01.darkGrey02.mainGrey.lightGrey01.lightGrey02`.split(`.`)},textColor:{control:`select`,options:`darkNavy01.darkNavy02.mainNavy.lightNavy01.lightNavy02.darkOrange01.darkOrange02.mainOrange.lightOrange01.lightOrange02.darkGreen01.darkGreen02.mainGreen.lightGreen01.lightGreen02.darkRed01.darkRed02.mainRed.lightRed01.lightRed02.darkCrimson01.darkCrimson02.mainCrimson.lightCrimson01.lightCrimson02.darkBlue01.darkBlue02.mainBlue.lightBlue01.lightBlue02.darkPurple01.darkPurple02.mainPurple.lightPurple01.lightPurple02.darkGrey01.darkGrey02.mainGrey.lightGrey01.lightGrey02`.split(`.`)},sticky:{control:`boolean`},leftAccessory:{control:`select`,options:[`none`,`text`,`icon`,`button`],mapping:{none:void 0,text:`МатМех`,icon:(0,O.jsx)(c,{}),button:(0,O.jsx)(u,{color:`mainOrange`,children:`Назад`})}},rightAccessory:{control:`select`,options:[`none`,`text`,`icon`,`button`,`largeButton`],mapping:{none:void 0,text:`Курсы Преподаватели Профиль`,icon:(0,O.jsx)(c,{}),button:(0,O.jsx)(u,{color:`mainGreen`,children:`Войти`}),largeButton:(0,O.jsx)(u,{color:`mainPurple`,size:`large`,children:`Записаться`})}}}},A={},j={args:{sticky:!0}},M={args:{leftAccessory:(0,O.jsx)(c,{}),rightAccessory:(0,O.jsx)(c,{})}},N={args:{leftAccessory:void 0,rightAccessory:void 0}},P={args:{leftAccessory:(0,O.jsx)(u,{color:`mainOrange`,children:`Назад`}),rightAccessory:(0,O.jsx)(u,{color:`mainGreen`,children:`Войти`})}},F={args:{leftAccessory:`Каталог`,rightAccessory:(0,O.jsx)(u,{color:`mainPurple`,size:`large`,children:`Записаться`})}},I={args:{backgroundColor:`mainPurple`,textColor:`lightGrey02`,leftAccessory:`МатМех`,rightAccessory:(0,O.jsx)(u,{color:`mainOrange`,children:`Меню`})}},L={render:e=>(0,O.jsx)(b,{backgroundColor:`darkGrey01`,sticky:e.sticky})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    leftAccessory: <BoardIcon />,
    rightAccessory: <BoardIcon />
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    leftAccessory: undefined,
    rightAccessory: undefined
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    leftAccessory: <Button color="mainOrange">
        Назад
      </Button>,
    rightAccessory: <Button color="mainGreen">
        Войти
      </Button>
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    leftAccessory: 'Каталог',
    rightAccessory: <Button color="mainPurple" size="large">
        Записаться
      </Button>
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    backgroundColor: 'mainPurple',
    textColor: 'lightGrey02',
    leftAccessory: 'МатМех',
    rightAccessory: <Button color="mainOrange">
        Меню
      </Button>
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <HeaderSkeleton backgroundColor={'darkGrey01'} sticky={args.sticky} />
}`,...L.parameters?.docs?.source}}},R=[`Default`,`Sticky`,`WithIcons`,`WithoutAccessories`,`WithButtons`,`WithLargeButton`,`CustomColors`,`Skeleton`]}))();export{I as CustomColors,A as Default,L as Skeleton,j as Sticky,P as WithButtons,M as WithIcons,F as WithLargeButton,N as WithoutAccessories,R as __namedExportsOrder,k as default};