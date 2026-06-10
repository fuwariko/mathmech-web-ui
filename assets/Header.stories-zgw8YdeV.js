import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Bn1Ys6_W.js";import{i as n,n as r,r as i,t as a}from"./emotion-css.esm-BqXpwIft.js";import{n as o,t as s}from"./color-tokens-CBhvVmg4.js";import{h as c,n as l,v as u}from"./ComponentSkeletons-0oETlvfY.js";import{f as d,i as f,l as p,m,n as h}from"./Icons-Dz2YVI0X.js";import{n as g,t as _}from"./Button-gzyN3P__.js";import{i as v,n as ee,t as y}from"./Icons-BQoP4F0v.js";var b,x,S,C,te,w,T,ne=e((()=>{i(),o(),m(),b=t(),x=({lable:e,label:t,variant:n,value:i,color:a,borderColor:o,icon:s,size:c=`medium`,className:l,style:u})=>{let d=n?te(n,i,c):void 0,f=t??e??d?.label??``,p=s===!1?void 0:typeof s==`boolean`||s===void 0?d?.icon:s;return(0,b.jsxs)(`span`,{style:u,className:r(w(S(d,a,o),c),l),children:[p&&(0,b.jsx)(`span`,{className:T,"aria-hidden":`true`,children:p}),(0,b.jsx)(`span`,{children:f})]})},S=(e,t,n)=>({background:t?s[t]:e?.tone.background??s.lightBlue01,color:e?.tone.color??`#ffffff`,border:n?s[n]:e?.tone.border??`transparent`}),C=e=>e===`large`?24:16,te=(e,t,n=`medium`)=>{let r=C(n);return{online:{label:`Онлайн`,tone:{background:s.mainGreen,color:`#ffffff`,border:`transparent`},icon:(0,b.jsx)(p,{size:r})},offline:{label:`Офлайн`,tone:{background:`transparent`,color:s.darkGreen01,border:s.darkGreen01},icon:(0,b.jsx)(h,{size:r})},withTest:{label:`С тестовым`,tone:{background:s.lightOrange01,color:`#ffffff`,border:`transparent`},icon:(0,b.jsx)(f,{size:r})},places:{label:`${t??20} мест`,tone:{background:s.lightNavy01,color:`#ffffff`,border:`transparent`},icon:(0,b.jsx)(d,{size:r})},retake:{label:`Перезачёт`,tone:{background:s.mainGrey,color:`#4d4d4d`,border:`transparent`}},subject:{label:String(t??`Математика`),tone:{background:`transparent`,color:`#4d4d4d`,border:`#4d4d4d`}}}[e]},w=(e,t)=>a`
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
`,T=a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
`,x.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{lable:{required:!1,tsType:{name:`string`},description:`Текст внутри бейджа`},label:{required:!1,tsType:{name:`string`},description:`Текст внутри бейджа`},variant:{required:!1,tsType:{name:`union`,raw:`| 'online'
| 'offline'
| 'withTest'
| 'places'
| 'retake'
| 'subject'`,elements:[{name:`literal`,value:`'online'`},{name:`literal`,value:`'offline'`},{name:`literal`,value:`'withTest'`},{name:`literal`,value:`'places'`},{name:`literal`,value:`'retake'`},{name:`literal`,value:`'subject'`}]},description:`Заготовленный вариант`},value:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Значение для вариантов вроде "20 мест"`},color:{required:!1,tsType:{name:`unknown`},description:`Цвет фона`},borderColor:{required:!1,tsType:{name:`unknown`},description:`Цвет обводки`},icon:{required:!1,tsType:{name:`union`,raw:`boolean | ReactNode`,elements:[{name:`boolean`},{name:`ReactNode`}]},description:`Иконка`},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},description:`Размер`,defaultValue:{value:`'medium'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}}})),E,D,O,k,A,j,M,N,re,ie=e((()=>{i(),E=t(),D=a`
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
`,O=({sticky:e=!1})=>(0,E.jsx)(`header`,{className:k(e),children:(0,E.jsxs)(`div`,{className:A,children:[(0,E.jsxs)(`div`,{className:j,children:[(0,E.jsx)(`div`,{className:M}),(0,E.jsx)(`div`,{className:N})]}),(0,E.jsx)(`div`,{className:re})]})}),k=e=>a`
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
`,A=a`
  width: 100%;
  max-width: 1024px;

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  padding: 0 32px;
  box-sizing: border-box;
`,j=a`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 16px; /* 👈 ВАЖНО: было 12 → стало просторнее */
  gap: 16px; /* 👈 чтобы не липло */
`,M=a`
  width: 90px;
  height: 20px;
  ${D};
`,N=a`
  width: 140px;
  height: 20px;
  ${D};
`,re=a`
  width: 50%;
  height: 30px;
  ${D};
`,O.__docgenInfo={description:``,methods:[],displayName:`HeaderSkeleton`,props:{backgroundColor:{required:!1,tsType:{name:`unknown`},description:``},sticky:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),P,F,I,L,R,z,B,V,H,ae=e((()=>{i(),o(),P=t(),F=({title:e,leftAccessory:t,rightAccessory:n,topLeft:i,topRight:a,children:o,backgroundColor:s=`mainBlue`,textColor:c=`lightGrey02`,filled:l=!0,contentMaxWidth:u=1024,contentPaddingX:d=32,sticky:f=!1,className:p,style:m})=>{let h=i??t,g=a??n,_=!!h||!!g,v=!!e||!!o;return(0,P.jsx)(`header`,{style:m,className:r(L(s,c,l,f),p),children:(0,P.jsxs)(`div`,{className:R(u,d),children:[_&&(0,P.jsxs)(`div`,{className:z,children:[(0,P.jsx)(`div`,{className:H(`left`),children:h}),(0,P.jsx)(`div`,{className:H(`right`),children:g})]}),v&&(0,P.jsxs)(`div`,{className:B,children:[e&&(0,P.jsx)(`h1`,{className:V,children:e}),o]})]})})},I=e=>typeof e==`number`?`${e}px`:e,L=(e,t,n,r)=>a`
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
`,R=(e,t)=>a`
  width: 100%;
  max-width: ${I(e)};

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  padding: 0 ${I(t)};

  box-sizing: border-box;
`,z=a`
  display: flex;

  justify-content: space-between;

  gap: 30px;

  align-items: baseline;

  width: 100%;

  margin-bottom: 12px;
`,B=a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`,V=a`
  margin: 0;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 400;
`,H=e=>a`
  display: flex;

  flex: 1;

  ${e===`left`&&a`
    justify-content: flex-start;
  `}

  ${e===`right`&&a`
    justify-content: flex-end;
  `}
`,F.__docgenInfo={description:``,methods:[],displayName:`Header`,props:{title:{required:!1,tsType:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}]},description:`Заголовок`},leftAccessory:{required:!1,tsType:{name:`union`,raw:`ReactNode | string`,elements:[{name:`ReactNode`},{name:`string`}]},description:`Левый аксессуар`},rightAccessory:{required:!1,tsType:{name:`union`,raw:`ReactNode | string`,elements:[{name:`ReactNode`},{name:`string`}]},description:`Правый аксессуар`},topLeft:{required:!1,tsType:{name:`ReactNode`},description:`Контент в верхней строке слева`},topRight:{required:!1,tsType:{name:`ReactNode`},description:`Контент в верхней строке справа`},children:{required:!1,tsType:{name:`ReactNode`},description:`Контент под верхней строкой`},backgroundColor:{required:!1,tsType:{name:`unknown`},description:`Цвет фона`,defaultValue:{value:`'mainBlue'`,computed:!1}},textColor:{required:!1,tsType:{name:`unknown`},description:`Цвет текста`,defaultValue:{value:`'lightGrey02'`,computed:!1}},filled:{required:!1,tsType:{name:`boolean`},description:`Растягивать цвет фона на всю ширину`,defaultValue:{value:`true`,computed:!1}},contentMaxWidth:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Максимальная ширина внутреннего контента`,defaultValue:{value:`1024`,computed:!1}},contentPaddingX:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Горизонтальные отступы внутреннего контента`,defaultValue:{value:`32`,computed:!1}},sticky:{required:!1,tsType:{name:`boolean`},description:`sticky header`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}}})),U,W,G,K,q,J,Y,X,Z,Q,oe,$,se,ce,le,ue,de,fe,pe;e((()=>{i(),v(),g(),ne(),ie(),u(),ae(),U=t(),W={none:void 0,text:`МатМех`,nav:(0,U.jsx)(`nav`,{style:{display:`flex`,gap:24,fontSize:18},children:`Курсы Преподаватели Профиль`}),icon:(0,U.jsx)(ee,{size:24}),button:(0,U.jsx)(_,{color:`mainBlue`,children:`Войти`}),badge:(0,U.jsx)(x,{variant:`online`}),skeleton:(0,U.jsx)(l,{})},G={none:void 0,title:(0,U.jsx)(`h1`,{style:{margin:0,color:`#1e4391`},children:`Каталог курсов`}),titleWithLink:(0,U.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,U.jsx)(`h1`,{style:{margin:0,fontSize:40,fontWeight:400},children:`Каталог курсов`}),(0,U.jsxs)(`a`,{href:`/favorites`,style:{display:`inline-flex`,alignItems:`center`,gap:4,color:`inherit`,textDecoration:`none`,fontSize:20},children:[`Избранные `,(0,U.jsx)(y,{size:16})]})]}),skeleton:(0,U.jsx)(c,{lines:2})},K={title:`UI/Header`,component:F,parameters:{layout:`fullscreen`},tags:[`autodocs`],args:{title:`Каталог курсов`,backgroundColor:`mainBlue`,textColor:`lightGrey02`,sticky:!1,topLeft:`МатМех`,topRight:`Курсы   Преподаватели   Профиль`},argTypes:{topLeft:{control:`select`,options:Object.keys(W),mapping:W},topRight:{control:`select`,options:Object.keys(W),mapping:W},children:{control:`select`,options:Object.keys(G),mapping:G},backgroundColor:{control:`select`,options:[`darkNavy01`,`darkNavy02`,`mainNavy`,`lightNavy01`,`lightBlue01`,`mainBlue`]},textColor:{control:`select`,options:[`lightGrey02`,`darkGrey01`,`mainNavy`]},filled:{control:`boolean`},sticky:{control:`boolean`}}},q={args:{title:void 0,topLeft:W.text,topRight:W.nav,children:G.titleWithLink}},J={render:()=>(0,U.jsx)(F,{topLeft:(0,U.jsx)(`span`,{className:Q,children:`МатМех`}),topRight:(0,U.jsx)(`nav`,{className:$,children:`Курсы Преподаватели Профиль`}),backgroundColor:`mainBlue`,contentMaxWidth:980,contentPaddingX:32,children:(0,U.jsxs)(`div`,{className:se,children:[(0,U.jsx)(`h1`,{children:`Каталог курсов`}),(0,U.jsxs)(`a`,{href:`/favorites`,children:[`Избранные `,(0,U.jsx)(y,{size:16})]})]})})},Y={render:()=>(0,U.jsx)(F,{topLeft:(0,U.jsx)(`span`,{className:Q,children:`МатМех`}),topRight:(0,U.jsx)(`nav`,{className:$,children:`Курсы Преподаватели Профиль`}),backgroundColor:`mainBlue`,contentMaxWidth:900,contentPaddingX:40,children:(0,U.jsxs)(`div`,{className:ce,children:[(0,U.jsxs)(`div`,{className:le,children:[(0,U.jsx)(x,{variant:`offline`}),(0,U.jsx)(x,{variant:`withTest`}),(0,U.jsx)(x,{variant:`places`,value:20}),(0,U.jsx)(x,{variant:`subject`,value:`Программирование`})]}),(0,U.jsxs)(`div`,{className:ue,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h1`,{children:`Теория множеств`}),(0,U.jsx)(`p`,{children:`Хлопин Д. В.  КМА`}),(0,U.jsx)(`p`,{children:`Для ФИИТ-3, ФИИТ-4`})]}),(0,U.jsx)(`button`,{className:de,type:`button`,"aria-label":`Добавить в избранное`,children:`♡`})]})]})})},X={render:()=>(0,U.jsx)(F,{filled:!1,textColor:`mainNavy`,contentMaxWidth:900,topLeft:(0,U.jsx)(`span`,{className:oe,children:`МатМех`}),topRight:(0,U.jsx)(_,{color:`mainBlue`,children:`Войти`}),children:(0,U.jsx)(`h1`,{className:fe,children:`Страница без заливки`})})},Z={render:()=>(0,U.jsx)(O,{})},Q=a`
  font-size: 40px;
  line-height: 1;
`,oe=a`
  font-size: 40px;
  line-height: 1;
  color: #1e4391;
`,$=a`
  display: flex;
  gap: 24px;
  font-size: 18px;
`,se=a`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h1 {
    margin: 0;
    font-size: 40px;
    font-weight: 400;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: inherit;
    text-decoration: none;
    font-size: 20px;
  }
`,ce=a`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
`,le=a`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,ue=a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  width: 100%;

  h1 {
    margin: 0 0 8px;
    font-size: 44px;
    font-weight: 400;
  }

  p {
    margin: 0 0 16px;
    font-size: 24px;
  }
`,de=a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border: 0;
  background: transparent;
  color: #ffffff;
  font-size: 64px;
  line-height: 1;
  cursor: pointer;
`,fe=a`
  margin: 0;
  color: #1e4391;
`,q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    topLeft: slotOptions.text,
    topRight: slotOptions.nav,
    children: childrenOptions.titleWithLink
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Header topLeft={<span className={brandStyles}>МатМех</span>} topRight={<nav className={navStyles}>Курсы Преподаватели Профиль</nav>} backgroundColor="mainBlue" contentMaxWidth={980} contentPaddingX={32}>
      <div className={catalogTitleStyles}>
        <h1>Каталог курсов</h1>
        <a href="/favorites">
          Избранные <ArrowUpRightIcon size={16} />
        </a>
      </div>
    </Header>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <Header topLeft={<span className={brandStyles}>МатМех</span>} topRight={<nav className={navStyles}>Курсы Преподаватели Профиль</nav>} backgroundColor="mainBlue" contentMaxWidth={900} contentPaddingX={40}>
      <div className={courseHeroStyles}>
        <div className={badgeRowsStyles}>
          <Badge variant="offline" />
          <Badge variant="withTest" />
          <Badge variant="places" value={20} />
          <Badge variant="subject" value="Программирование" />
        </div>

        <div className={courseMainStyles}>
          <div>
            <h1>Теория множеств</h1>
            <p>Хлопин Д. В.  КМА</p>
            <p>Для ФИИТ-3, ФИИТ-4</p>
          </div>

          <button className={favoriteButtonStyles} type="button" aria-label="Добавить в избранное">
            ♡
          </button>
        </div>
      </div>
    </Header>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <Header filled={false} textColor="mainNavy" contentMaxWidth={900} topLeft={<span className={brandDarkStyles}>МатМех</span>} topRight={<Button color="mainBlue">
          Войти
        </Button>}>
      <h1 className={plainTitleStyles}>Страница без заливки</h1>
    </Header>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <HeaderSkeleton />
}`,...Z.parameters?.docs?.source}}},pe=[`Playground`,`Catalog`,`CoursePage`,`WithoutFill`,`Skeleton`]}))();export{J as Catalog,Y as CoursePage,q as Playground,Z as Skeleton,X as WithoutFill,pe as __namedExportsOrder,K as default};