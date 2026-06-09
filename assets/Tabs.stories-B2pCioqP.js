import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-B6lWK8m9.js";import{n as i,r as a,t as o}from"./emotion-css.esm-nW0xTD3m.js";import{n as s,t as c}from"./color-tokens-BPpBLVR4.js";var l,u,d,f,p,m,h,g,_,v=t((()=>{a(),l=e(n(),1),s(),u=r(),d=({tabs:e,defaultTabId:t,vertical:n=!1,withScrollButtons:r=!1,variant:a=`filled`,activeColor:o=`mainBlue`,backgroundColor:s=`lightGrey01`,className:c})=>{let[d,v]=(0,l.useState)(t??e[0]?.id),y=(0,l.useRef)(null);(0,l.useEffect)(()=>{e.find(e=>e.id===d)||v(e[0]?.id)},[e,d]);let b=e=>{y.current&&(n?y.current.scrollBy({top:e===`next`?150:-150,behavior:`smooth`}):y.current.scrollBy({left:e===`next`?150:-150,behavior:`smooth`}))},x=(t,n)=>{let r=t.key===`ArrowRight`||t.key===`ArrowDown`,i=t.key===`ArrowLeft`||t.key===`ArrowUp`;if(!r&&!i)return;t.preventDefault();let a=e[r?(n+1)%e.length:(n-1+e.length)%e.length];a.disabled||v(a.id)};return(0,u.jsxs)(`div`,{className:i(f(n),c),children:[(0,u.jsxs)(`div`,{className:p(n),children:[r&&(0,u.jsx)(`button`,{type:`button`,className:_,onClick:()=>b(`prev`),children:n?`↑`:`←`}),(0,u.jsx)(`div`,{ref:y,role:`tablist`,"aria-orientation":n?`vertical`:`horizontal`,className:m(n,a),children:e.map((e,t)=>{let r=d===e.id;return(0,u.jsx)(`button`,{role:`tab`,type:`button`,id:`tab-${e.id}`,"aria-selected":r,"aria-controls":`panel-${e.id}`,tabIndex:r?0:-1,disabled:e.disabled,className:h(r,a,o,s,n),onClick:()=>v(e.id),onKeyDown:e=>x(e,t),children:e.label},e.id)})}),r&&(0,u.jsx)(`button`,{type:`button`,className:_,onClick:()=>b(`next`),children:n?`↓`:`→`})]}),e.map(e=>{let t=d===e.id;return(0,u.jsx)(`div`,{role:`tabpanel`,id:`panel-${e.id}`,"aria-labelledby":`tab-${e.id}`,hidden:!t,className:g,children:t&&e.content},e.id)})]})},f=e=>o`
  display: flex;
  flex-direction: ${e?`row`:`column`};
  gap: 16px;
  width: fit-content;
`,p=e=>o`
  display: flex;
  flex-direction: ${e?`column`:`row`};
  align-items: flex-start;
  gap: 8px;
`,m=(e,t)=>o`
  display: flex;

  flex-direction: ${e?`column`:`row`};

  gap: ${t===`filled`?`8px`:e?`4px`:`24px`};

  overflow: auto;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${t===`underline`&&!e&&`
    border-bottom: 1px solid rgba(0,0,0,0.08);
  `}
`,h=(e,t,n,r,i)=>o`
  border: none;
  outline: none;

  cursor: pointer;

  white-space: nowrap;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    opacity 0.2s ease;

  font-size: 14px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.15);
  }

  ${t===`filled`?`
        padding: 10px 18px;

        border-radius: 12px;

        background: ${e?c[n]:c[r]};

        color: ${e?`#fff`:`#111`};

        flex-shrink: 0;
      `:`
        background: transparent;

        color: ${e?c[n]:`rgba(0,0,0,0.6)`};

        display: flex;
        align-items: center;
        justify-content: flex-start;

        width: ${i?`220px`:`auto`};
        min-width: ${i?`220px`:`max-content`};

        text-align: left;

        padding: ${i?`12px 16px`:`12px 0`};

        border-bottom: ${!i&&e?`2px solid ${c[n]}`:`2px solid transparent`};

        border-left: ${i&&e?`2px solid ${c[n]}`:`2px solid transparent`};

        border-radius: 0;

        flex-shrink: 0;
      `}
`,g=o`
  width: 100%;
  min-width: 320px;
`,_=o`
  border: none;
  background: transparent;

  cursor: pointer;

  width: 32px;
  height: 32px;

  border-radius: 8px;

  font-size: 18px;

  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }
`,d.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{tabs:{required:!0,tsType:{name:`Array`,elements:[{name:`ITabItem`}],raw:`ITabItem[]`},description:`Список табов`},defaultTabId:{required:!1,tsType:{name:`string`},description:`Активный таб по умолчанию`},vertical:{required:!1,tsType:{name:`boolean`},description:`Вертикальные табы`,defaultValue:{value:`false`,computed:!1}},withScrollButtons:{required:!1,tsType:{name:`boolean`},description:`Показать стрелки прокрутки`,defaultValue:{value:`false`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'filled' | 'underline'`,elements:[{name:`literal`,value:`'filled'`},{name:`literal`,value:`'underline'`}]},description:`Вариант отображения`,defaultValue:{value:`'filled'`,computed:!1}},activeColor:{required:!1,tsType:{name:`union`,raw:`keyof typeof allColors`,elements:[{name:`literal`,value:`darkNavy01`},{name:`literal`,value:`darkNavy02`},{name:`literal`,value:`mainNavy`},{name:`literal`,value:`lightNavy01`},{name:`literal`,value:`lightNavy02`},{name:`literal`,value:`darkOrange01`},{name:`literal`,value:`darkOrange02`},{name:`literal`,value:`mainOrange`},{name:`literal`,value:`lightOrange01`},{name:`literal`,value:`lightOrange02`},{name:`literal`,value:`darkGreen01`},{name:`literal`,value:`darkGreen02`},{name:`literal`,value:`mainGreen`},{name:`literal`,value:`lightGreen01`},{name:`literal`,value:`lightGreen02`},{name:`literal`,value:`darkRed01`},{name:`literal`,value:`darkRed02`},{name:`literal`,value:`mainRed`},{name:`literal`,value:`lightRed01`},{name:`literal`,value:`lightRed02`},{name:`literal`,value:`darkCrimson01`},{name:`literal`,value:`darkCrimson02`},{name:`literal`,value:`mainCrimson`},{name:`literal`,value:`lightCrimson01`},{name:`literal`,value:`lightCrimson02`},{name:`literal`,value:`darkBlue01`},{name:`literal`,value:`darkBlue02`},{name:`literal`,value:`mainBlue`},{name:`literal`,value:`lightBlue01`},{name:`literal`,value:`lightBlue02`},{name:`literal`,value:`darkPurple01`},{name:`literal`,value:`darkPurple02`},{name:`literal`,value:`mainPurple`},{name:`literal`,value:`lightPurple01`},{name:`literal`,value:`lightPurple02`},{name:`literal`,value:`darkGrey01`},{name:`literal`,value:`darkGrey02`},{name:`literal`,value:`mainGrey`},{name:`literal`,value:`lightGrey01`},{name:`literal`,value:`lightGrey02`}]},description:`Цвет активного таба`,defaultValue:{value:`'mainBlue'`,computed:!1}},backgroundColor:{required:!1,tsType:{name:`union`,raw:`keyof typeof allColors`,elements:[{name:`literal`,value:`darkNavy01`},{name:`literal`,value:`darkNavy02`},{name:`literal`,value:`mainNavy`},{name:`literal`,value:`lightNavy01`},{name:`literal`,value:`lightNavy02`},{name:`literal`,value:`darkOrange01`},{name:`literal`,value:`darkOrange02`},{name:`literal`,value:`mainOrange`},{name:`literal`,value:`lightOrange01`},{name:`literal`,value:`lightOrange02`},{name:`literal`,value:`darkGreen01`},{name:`literal`,value:`darkGreen02`},{name:`literal`,value:`mainGreen`},{name:`literal`,value:`lightGreen01`},{name:`literal`,value:`lightGreen02`},{name:`literal`,value:`darkRed01`},{name:`literal`,value:`darkRed02`},{name:`literal`,value:`mainRed`},{name:`literal`,value:`lightRed01`},{name:`literal`,value:`lightRed02`},{name:`literal`,value:`darkCrimson01`},{name:`literal`,value:`darkCrimson02`},{name:`literal`,value:`mainCrimson`},{name:`literal`,value:`lightCrimson01`},{name:`literal`,value:`lightCrimson02`},{name:`literal`,value:`darkBlue01`},{name:`literal`,value:`darkBlue02`},{name:`literal`,value:`mainBlue`},{name:`literal`,value:`lightBlue01`},{name:`literal`,value:`lightBlue02`},{name:`literal`,value:`darkPurple01`},{name:`literal`,value:`darkPurple02`},{name:`literal`,value:`mainPurple`},{name:`literal`,value:`lightPurple01`},{name:`literal`,value:`lightPurple02`},{name:`literal`,value:`darkGrey01`},{name:`literal`,value:`darkGrey02`},{name:`literal`,value:`mainGrey`},{name:`literal`,value:`lightGrey01`},{name:`literal`,value:`lightGrey02`}]},description:`Цвет фона`,defaultValue:{value:`'lightGrey01'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Дополнительный класс`}}}})),y,b,x,S,C,w,T,E,D,O,k;t((()=>{v(),y=r(),b=`darkNavy01.darkNavy02.mainNavy.lightNavy01.lightNavy02.darkOrange01.darkOrange02.mainOrange.lightOrange01.lightOrange02.darkGreen01.darkGreen02.mainGreen.lightGreen01.lightGreen02.darkRed01.darkRed02.mainRed.lightRed01.lightRed02.darkCrimson01.darkCrimson02.mainCrimson.lightCrimson01.lightCrimson02.darkBlue01.darkBlue02.mainBlue.lightBlue01.lightBlue02.darkPurple01.darkPurple02.mainPurple.lightPurple01.lightPurple02.darkGrey01.darkGrey02.mainGrey.lightGrey01.lightGrey02`.split(`.`),x=[{id:`home`,label:`Главная`,content:(0,y.jsx)(`div`,{style:{padding:16},children:`Контент главной страницы`})},{id:`profile`,label:`Профиль`,content:(0,y.jsx)(`div`,{style:{padding:16},children:`Контент профиля`})},{id:`settings`,label:`Настройки`,content:(0,y.jsx)(`div`,{style:{padding:16},children:`Контент настроек`})}],S={title:`UI/Tabs`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],args:{tabs:x,vertical:!1,withScrollButtons:!1,variant:`filled`,activeColor:`mainBlue`,backgroundColor:`lightGrey01`},argTypes:{vertical:{control:`boolean`},withScrollButtons:{control:`boolean`},variant:{control:`radio`,options:[`filled`,`underline`]},activeColor:{control:`select`,options:b},backgroundColor:{control:`select`,options:b}}},C={},w={args:{variant:`underline`}},T={args:{vertical:!0}},E={args:{vertical:!0,variant:`underline`}},D={args:{withScrollButtons:!0,variant:`underline`,tabs:Array.from({length:10},(e,t)=>({id:`${t}`,label:`Tab ${t+1}`,content:(0,y.jsxs)(`div`,{style:{padding:16},children:[`Контент таба `,t+1]})}))}},O={args:{tabs:[x[0],{id:`disabled`,label:`Disabled`,disabled:!0,content:(0,y.jsx)(`div`,{style:{padding:16},children:`Disabled tab`})},x[2]]}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'underline'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    vertical: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    vertical: true,
    variant: 'underline'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    withScrollButtons: true,
    variant: 'underline',
    tabs: Array.from({
      length: 10
    }, (_, index) => ({
      id: \`\${index}\`,
      label: \`Tab \${index + 1}\`,
      content: <div style={{
        padding: 16
      }}>
            Контент таба {index + 1}
          </div>
    }))
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [tabs[0], {
      id: 'disabled',
      label: 'Disabled',
      disabled: true,
      content: <div style={{
        padding: 16
      }}>
            Disabled tab
          </div>
    }, tabs[2]]
  }
}`,...O.parameters?.docs?.source}}},k=[`Filled`,`Underline`,`Vertical`,`VerticalUnderline`,`WithScrollButtons`,`DisabledTab`]}))();export{O as DisabledTab,C as Filled,w as Underline,T as Vertical,E as VerticalUnderline,D as WithScrollButtons,k as __namedExportsOrder,S as default};