import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,r as a,t as o}from"./emotion-css.esm-BqXpwIft.js";import{n as s,t as c}from"./color-tokens-CBhvVmg4.js";var l,u,d,f,p,m,h,g,_,v=t((()=>{a(),l=e(n(),1),s(),u=r(),d=({tabs:e,defaultTabId:t,vertical:n=!1,withScrollButtons:r=!1,variant:a=`filled`,activeColor:o=`mainBlue`,backgroundColor:s=`lightGrey01`,className:c})=>{let[d,v]=(0,l.useState)(t??e[0]?.id),y=(0,l.useRef)(null),b=e.some(e=>e.id===d)?d:e[0]?.id,x=e=>{y.current&&(n?y.current.scrollBy({top:e===`next`?150:-150,behavior:`smooth`}):y.current.scrollBy({left:e===`next`?150:-150,behavior:`smooth`}))},S=(t,n)=>{let r=t.key===`ArrowRight`||t.key===`ArrowDown`,i=t.key===`ArrowLeft`||t.key===`ArrowUp`;if(!r&&!i)return;t.preventDefault();let a=e[r?(n+1)%e.length:(n-1+e.length)%e.length];a.disabled||v(a.id)};return(0,u.jsxs)(`div`,{className:i(f(n),c),children:[(0,u.jsxs)(`div`,{className:p(n),children:[r&&(0,u.jsx)(`button`,{type:`button`,"aria-label":n?`Прокрутить вкладки вверх`:`Прокрутить вкладки влево`,className:_,onClick:()=>x(`prev`),children:n?`↑`:`←`}),(0,u.jsx)(`div`,{ref:y,role:`tablist`,"aria-orientation":n?`vertical`:`horizontal`,className:m(n,a),children:e.map((e,t)=>{let r=b===e.id;return(0,u.jsx)(`button`,{role:`tab`,type:`button`,id:`tab-${e.id}`,"aria-selected":r,"aria-controls":`panel-${e.id}`,tabIndex:r?0:-1,disabled:e.disabled,className:h(r,a,o,s,n),onClick:()=>v(e.id),onKeyDown:e=>S(e,t),children:e.label},e.id)})}),r&&(0,u.jsx)(`button`,{type:`button`,"aria-label":n?`Прокрутить вкладки вниз`:`Прокрутить вкладки вправо`,className:_,onClick:()=>x(`next`),children:n?`↓`:`→`})]}),e.map(e=>{let t=b===e.id;return(0,u.jsx)(`div`,{role:`tabpanel`,id:`panel-${e.id}`,"aria-labelledby":`tab-${e.id}`,hidden:!t,className:g,children:t&&e.content},e.id)})]})},f=e=>o`
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
`,d.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{tabs:{required:!0,tsType:{name:`Array`,elements:[{name:`ITabItem`}],raw:`ITabItem[]`},description:`Список табов`},defaultTabId:{required:!1,tsType:{name:`string`},description:`Активный таб по умолчанию`},vertical:{required:!1,tsType:{name:`boolean`},description:`Вертикальные табы`,defaultValue:{value:`false`,computed:!1}},withScrollButtons:{required:!1,tsType:{name:`boolean`},description:`Показать стрелки прокрутки`,defaultValue:{value:`false`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'filled' | 'underline'`,elements:[{name:`literal`,value:`'filled'`},{name:`literal`,value:`'underline'`}]},description:`Вариант отображения`,defaultValue:{value:`'filled'`,computed:!1}},activeColor:{required:!1,tsType:{name:`unknown`},description:`Цвет активного таба`,defaultValue:{value:`'mainBlue'`,computed:!1}},backgroundColor:{required:!1,tsType:{name:`unknown`},description:`Цвет фона`,defaultValue:{value:`'lightGrey01'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Дополнительный класс`}}}}));export{v as n,d as t};