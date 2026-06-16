import{n as e}from"./chunk-BneVvdWh.js";import{a as t,n,r}from"./iframe-D3lb2UIJ.js";import{r as i,t as a}from"./emotion-css.esm-DZ62EKCi.js";import{m as o,n as s,t as c}from"./Icons-_Yn1YYY_.js";import{n as l,t as u}from"./Button-CCrcmS9Y.js";import{n as d,t as f}from"./Badge-Bjk5n0ss.js";import{h as p,n as m,v as h}from"./ComponentSkeletons-BH-F-KJD.js";import{n as g,t as _}from"./Header-DbMKpkWe.js";var v,y,b,x,S,C,w,T,E,D;e((()=>{i(),o(),l(),d(),g(),r(),h(),v=t(),y={none:void 0,text:`МатМех`,nav:(0,v.jsx)(`nav`,{style:{display:`flex`,gap:24,fontSize:18},children:`Курсы Преподаватели Профиль`}),icon:(0,v.jsx)(s,{size:24}),button:(0,v.jsx)(u,{color:`mainBlue`,children:`Войти`}),badge:(0,v.jsx)(f,{variant:`online`}),skeleton:(0,v.jsx)(m,{})},b={none:void 0,title:(0,v.jsx)(`h1`,{style:{margin:0,color:`#1e4391`},children:`Каталог курсов`}),titleWithLink:(0,v.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,v.jsx)(`h1`,{style:{margin:0,fontSize:40,fontWeight:400},children:`Каталог курсов`}),(0,v.jsxs)(`a`,{href:`/favorites`,style:{display:`inline-flex`,alignItems:`center`,gap:4,color:`inherit`,textDecoration:`none`,fontSize:20},children:[`Избранные `,(0,v.jsx)(c,{size:16})]})]}),skeleton:(0,v.jsx)(p,{lines:2})},x={title:`Layout/Header`,component:_,parameters:{layout:`fullscreen`},tags:[`autodocs`],args:{title:`Каталог курсов`,backgroundColor:`mainBlue`,textColor:`lightGrey02`,sticky:!1,topLeft:`МатМех`,topRight:`Курсы   Преподаватели   Профиль`},argTypes:{topLeft:{control:`select`,options:Object.keys(y),mapping:y},topRight:{control:`select`,options:Object.keys(y),mapping:y},children:{control:`select`,options:Object.keys(b),mapping:b},backgroundColor:{control:`select`,options:[void 0,...n]},textColor:{control:`select`,options:[void 0,...n]},filled:{control:`boolean`},sticky:{control:`boolean`}}},S={args:{title:void 0,topLeft:y.text,topRight:y.nav,children:b.titleWithLink}},C={render:()=>(0,v.jsx)(_,{topLeft:(0,v.jsx)(`span`,{className:w,children:`МатМех`}),topRight:(0,v.jsx)(`nav`,{className:T,children:`Курсы Преподаватели Профиль`}),backgroundColor:`mainBlue`,contentMaxWidth:980,contentPaddingX:32,children:(0,v.jsxs)(`div`,{className:E,children:[(0,v.jsx)(`h1`,{children:`Каталог курсов`}),(0,v.jsxs)(`a`,{href:`/favorites`,children:[`Избранные `,(0,v.jsx)(c,{size:16})]})]})})},w=a`
  font-size: 40px;
  line-height: 1;
`,T=a`
  display: flex;
  gap: 24px;
  font-size: 18px;
`,E=a`
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
`,S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    topLeft: slotOptions.text,
    topRight: slotOptions.nav,
    children: childrenOptions.titleWithLink
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Header topLeft={<span className={brandStyles}>МатМех</span>} topRight={<nav className={navStyles}>Курсы Преподаватели Профиль</nav>} backgroundColor="mainBlue" contentMaxWidth={980} contentPaddingX={32}>
      <div className={catalogTitleStyles}>
        <h1>Каталог курсов</h1>
        <a href="/favorites">
          Избранные <ArrowUpRightIcon size={16} />
        </a>
      </div>
    </Header>
}`,...C.parameters?.docs?.source}}},D=[`Playground`,`Catalog`]}))();export{C as Catalog,S as Playground,D as __namedExportsOrder,x as default};