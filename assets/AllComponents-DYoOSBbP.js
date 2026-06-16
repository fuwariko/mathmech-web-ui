import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-De0_M9De.js";import{a as r,i,r as a}from"./iframe-D3lb2UIJ.js";import{r as o}from"./react-BJiLO_QU.js";import{a as s,o as c}from"./blocks-2hjc2tJL.js";import{i as l,n as u,r as d,t as f}from"./emotion-css.esm-DZ62EKCi.js";import{d as p,f as m,i as h,l as g,m as _,n as v,u as y}from"./Icons-_Yn1YYY_.js";import{t as b}from"./mdx-react-shim-CiNtGoyv.js";import{n as x,t as S}from"./Button-CCrcmS9Y.js";import{n as C,t as w}from"./emotion-styled.browser.esm-BHLNlsSj.js";import{n as T,t as E}from"./check--xeZXLAC.js";import{n as D,t as O}from"./Footer-CnDGYRUJ.js";import{n as k,t as ee}from"./Link-iH7mcqCT.js";import{n as A,r as te,t as j}from"./styled-components.browser.esm-attkugRX.js";import{n as ne,t as re}from"./open-DEl7si_N.js";import{i as ie,n as ae,r as oe}from"./checkSelect-BQ2B27e0.js";import{n as se,t as ce}from"./hint-DStuSlGo.js";import{m as le,o as ue}from"./Icons-Psn06UNK.js";var de,M,fe,pe,me,he,ge,_e,ve,ye=t((()=>{d(),de=e(n(),1),a(),M=r(),fe=({items:e,activeColor:t,multiple:n=!1,icon:r=`plusMinus`,iconPosition:a=`right`,className:o})=>{let s=i(),[c,l]=(0,de.useState)([]),d=t?s[t]:s.accordionActiveText||s.globalBlue,f=s.accordionText||s.textPrimary,p=s.accordionContentText||s.textSecondary,m=s.accordionBackground||`transparent`,h=s.accordionBorder||`rgba(0, 0, 0, 0.08)`,g=e=>{if(n){l(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]);return}l(t=>t.includes(e)?[]:[e])},_=(e,t)=>{switch(e){case`plusMinus`:return t?`−`:`+`;case`chevron`:return t?`⌄`:`›`;case`arrow`:return t?`↓`:`→`;case`chevronUpDown`:return t?`▲`:`▼`;case`dots`:return`•••`;case`dash`:return`—`;case`none`:return null;default:return null}},v=e=>(0,de.isValidElement)(r)||typeof r==`object`&&r?r:_(r,e);return(0,M.jsx)(`div`,{className:u(pe,o),children:e.map(e=>{let t=c.includes(e.id),n=`accordion-trigger-${e.id}`,r=`accordion-panel-${e.id}`,i=(0,M.jsx)(`span`,{className:_e(s.accordionIconSize),"aria-hidden":`true`,children:v(t)});return(0,M.jsxs)(`div`,{className:me(m,h),children:[(0,M.jsxs)(`button`,{type:`button`,id:n,disabled:e.disabled,"aria-expanded":t,"aria-controls":r,className:he(t,d,f,s.accordionFontSize,s.accordionPaddingY),onClick:()=>g(e.id),children:[a===`left`&&i,(0,M.jsx)(`span`,{className:ge,children:e.title}),a===`right`&&i]}),t&&(0,M.jsx)(`div`,{id:r,role:`region`,"aria-labelledby":n,className:ve(p,s.accordionContentFontSize,s.accordionPaddingY),children:e.content})]},e.id)})})},pe=f`
  width: 520px;
  min-width: 520px;

  display: flex;
  flex-direction: column;
`,me=(e,t)=>f`
  background: ${e};
  border-bottom: 1px solid ${t};
`,he=(e,t,n,r,i)=>f`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 12px;

  border: none;
  background: transparent;

  padding: ${i} 16px;

  cursor: pointer;

  text-align: left;

  font-size: ${r};
  font-weight: 600;

  color: ${e?t:n};

  transition: color 0.2s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,ge=f`
  flex: 1;

  overflow-wrap: break-word;
  word-break: break-word;
`,_e=e=>f`
  width: ${e};
  min-width: ${e};

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  font-size: ${e};
  line-height: 1;
`,ve=(e,t,n)=>f`
  padding: 0 16px ${n};

  font-size: ${t};
  line-height: 22px;

  color: ${e};

  overflow-wrap: break-word;
  word-break: break-word;
`,fe.__docgenInfo={description:``,methods:[],displayName:`Accordion`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`IAccordionItem`}],raw:`IAccordionItem[]`},description:`Элементы`},activeColor:{required:!1,tsType:{name:`AppTheme`},description:`Цвет активного`},multiple:{required:!1,tsType:{name:`boolean`},description:`Разрешить несколько открытых`,defaultValue:{value:`false`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`TAccordionIcon | ReactNode`,elements:[{name:`union`,raw:`| 'plusMinus'
| 'chevron'
| 'arrow'
| 'chevronUpDown'
| 'dots'
| 'dash'
| 'none'`,elements:[{name:`literal`,value:`'plusMinus'`},{name:`literal`,value:`'chevron'`},{name:`literal`,value:`'arrow'`},{name:`literal`,value:`'chevronUpDown'`},{name:`literal`,value:`'dots'`},{name:`literal`,value:`'dash'`},{name:`literal`,value:`'none'`}]},{name:`ReactNode`}]},description:`Встроенная иконка или собственная

icon="chevron"
icon={<ChevronIcon />}`,defaultValue:{value:`'plusMinus'`,computed:!1}},iconPosition:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Расположение иконки`,defaultValue:{value:`'right'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Дополнительный класс`}}}})),N,P,be,xe,Se,Ce,we,Te,Ee,De,Oe=t((()=>{d(),a(),_(),N=r(),P=({lable:e,variant:t,value:n,color:r,borderColor:a,icon:o,size:s,className:c,style:l})=>{let d=i(),f=s??d.badgeSizeDefault,p=t?we(t,n,f):void 0,m=e??p?.label??``,h=o===!1?void 0:typeof o==`boolean`||o===void 0?p?.icon:o;return(0,N.jsxs)(`span`,{style:l,className:u(Te(be(d,p,r,a),f),c),children:[h&&(0,N.jsx)(`span`,{className:Ee,"aria-hidden":`true`,children:(0,N.jsx)(`span`,{className:De(p?.iconOffsetY),children:h})}),(0,N.jsx)(`span`,{children:m})]})},be=(e,t,n,r)=>({background:n?e[n]:e.badgeVariantBackground||t?.tone.background||e.lightBlue01,color:e.badgeVariantText||t?.tone.color||e.white,border:r?e[r]:e.badgeVariantBorder||t?.tone.border||`transparent`}),xe=e=>e===`large`?24:16,Se=e=>e===`large`?32:24,Ce=e=>e===`large`?32:24,we=(e,t,n=`medium`)=>{let r=xe(n),i=Se(n),a=Ce(n),o=t??20,s=t??`Предмет`;return{online:{label:`Онлайн`,tone:{background:`#EFC0C4`,color:`#890812`,border:`transparent`},icon:(0,N.jsx)(g,{size:r})},offline:{label:`Офлайн`,tone:{background:`#B2E0B9`,color:`#004F19`,border:`transparent`},icon:(0,N.jsx)(v,{size:a,strokeWidth:1}),iconOffsetY:`0.06em`},withTest:{label:`С тестовым`,tone:{background:`#F2D4BD`,color:`#994200`,border:`transparent`},icon:(0,N.jsx)(h,{size:r})},places:{label:`${o} мест`,tone:{background:`#ACC7FF`,color:`#0A255E`,border:`transparent`},icon:(0,N.jsx)(m,{size:i,strokeWidth:1}),iconOffsetY:`0.08em`},retake:{label:`Перезачёт`,tone:{background:`#C6C1DA`,color:`#3F3F3F`,border:`transparent`}},subject:{label:String(s),tone:{background:`#F2F2F2`,color:`#3F3F3F`,border:`transparent`}}}[e]},Te=(e,t)=>f`
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

  text-wrap: none;

  min-width: 0;
  min-height: ${t===`large`?`64px`:t===`small`?`26px`:`36px`};
  line-height: 1;

  background: ${e.background};
  color: ${e.color};

  border: 2px solid ${e.border};
`,Ee=f`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
`,De=e=>f`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform: ${e?`translateY(${e})`:`none`};
`,P.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{lable:{required:!1,tsType:{name:`string`},description:`Текст внутри бейджа`},variant:{required:!1,tsType:{name:`union`,raw:`| 'online'
| 'offline'
| 'withTest'
| 'places'
| 'retake'
| 'subject'`,elements:[{name:`literal`,value:`'online'`},{name:`literal`,value:`'offline'`},{name:`literal`,value:`'withTest'`},{name:`literal`,value:`'places'`},{name:`literal`,value:`'retake'`},{name:`literal`,value:`'subject'`}]},description:`Заготовленный вариант`},value:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Значение для вариантов вроде "20 мест"`},color:{required:!1,tsType:{name:`AppTheme`},description:`Цвет фона`},borderColor:{required:!1,tsType:{name:`AppTheme`},description:`Цвет обводки`},icon:{required:!1,tsType:{name:`union`,raw:`boolean | ReactNode`,elements:[{name:`boolean`},{name:`ReactNode`}]},description:`Иконка`},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},description:`Размер`},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}}})),F,ke,Ae,je,Me,Ne,Pe=t((()=>{d(),a(),F=r(),ke=({header:e,content:t,footer:n,direction:r=`vertical`,borderRadius:a=15,className:o})=>{let s=i();return(0,F.jsxs)(`div`,{className:u(Ae(r,a,s.backgroundPrimary,s.surfacePrimary,s.surfaceText,s.mainGrey),o),children:[e&&(0,F.jsx)(`div`,{className:je,children:e}),t&&(0,F.jsx)(`div`,{className:Me(r),children:t}),n&&(0,F.jsx)(`div`,{className:Ne,children:n})]})},Ae=(e,t,n,r,i,a)=>f`
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
`,je=f`
  display: flex;
  align-items: center;
  width: 100%;
`,Me=e=>f`
  display: flex;
  flex-direction: ${e===`horizontal`?`row`:`column`};
  gap: 12px;
  width: 100%;
`,Ne=f`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  width: 100%;
`,ke.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{header:{required:!1,tsType:{name:`ReactNode`},description:`Верхняя часть карточки`},content:{required:!1,tsType:{name:`ReactNode`},description:`Центральная часть карточки`},footer:{required:!1,tsType:{name:`ReactNode`},description:`Нижняя часть карточки`},direction:{required:!1,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:`Направление контента`,defaultValue:{value:`'vertical'`,computed:!1}},borderRadius:{required:!1,tsType:{name:`number`},description:`Скругление углов (px)`,defaultValue:{value:`15`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Дополнительный className`}}}})),Fe,Ie,Le,Re=t((()=>{w(),T(),Fe=C.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + span {
    border-color: ${e=>e.$color};
    background-color: ${e=>e.$backgroundColor};
  }

  &:checked + span::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 13px;
    height: 13px;
    background-image: url("data:image/svg+xml,${encodeURIComponent(E)}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  &:checked + span::before {
    content: '';
    width: 12px;
    height: 12px;
    background-color: ${e=>e.$color};
    border-radius: 5%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
    
  &:focus + span {
    box-shadow: 0 0 0 2px ${e=>`color-mix(in srgb, ${e.$color} 50%, transparent)`};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled + span {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Ie=C.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  gap: 6px;

  &:has(input:disabled) {
    cursor: not-allowed;
  }
`,Le=C.span`
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border: 1px solid var(--mm-mainGrey, #d3d3d3);
  border-radius: 5%;
  position: relative;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;
  margin: 0;
`})),ze,Be,Ve=t((()=>{e(n(),1),Re(),a(),ze=r(),Be=({name:e,value:t,id:n,label:r,color:a=`mainNavy`,reverse:o,checked:s,disabled:c,onChange:l,required:u,...d})=>{let f=i();return(0,ze.jsxs)(Ie,{title:t,children:[(0,ze.jsx)(Fe,{type:`checkbox`,id:n,name:e,value:t,checked:s,disabled:c,onChange:e=>{l?.(e.target.value)},required:u,$color:f[a],$backgroundColor:f.backgroundPrimary,...d}),!o&&(0,ze.jsx)(Le,{}),r,o&&(0,ze.jsx)(Le,{})]})},Be.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{name:{required:!1,tsType:{name:`string`},description:`Поле для идентификации и группировки элементов в форме`},value:{required:!1,tsType:{name:`string`},description:`Значение чекбокса, уходящее на сервер`},id:{required:!1,tsType:{name:`string`},description:`Идентификатор для связи с другими элементами`},label:{required:!1,tsType:{name:`string`},description:`Текст чекбокса`},color:{required:!1,tsType:{name:`AppTheme`},description:`Цвет чекбокса`,defaultValue:{value:`'mainNavy'`,computed:!1}},reverse:{required:!1,tsType:{name:`boolean`},description:`Положение текста, отосительно чекбокса`},checked:{required:!1,tsType:{name:`boolean`},description:`Состояние "Выбрано"/"Не выбрано"`},disabled:{required:!1,tsType:{name:`boolean`},description:`Заблокированное состояние`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Отслеживание изменения состояния`},required:{required:!1,tsType:{name:`boolean`},description:`Обязательность заполнения`}},composes:[`Omit`]}})),I,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe=t((()=>{d(),a(),I=r(),He=({title:e,leftAccessory:t,rightAccessory:n,topLeft:r,topRight:a,children:o,backgroundColor:s,textColor:c,filled:l=!0,contentMaxWidth:d=1024,contentPaddingX:f=32,sticky:p=!1,className:m,style:h})=>{let g=i(),_=r??t,v=a??n,y=!!_||!!v,b=!!e||!!o;return(0,I.jsx)(`header`,{style:h,className:u(We(s?g[s]:g.headerBackground,c?g[c]:g.headerText,l,p),m),children:(0,I.jsxs)(`div`,{className:Ge(d,f),children:[y&&(0,I.jsxs)(`div`,{className:Ke,children:[(0,I.jsx)(`div`,{className:Ye(`left`),children:_}),(0,I.jsx)(`div`,{className:Ye(`right`),children:v})]}),b&&(0,I.jsxs)(`div`,{className:qe,children:[e&&(0,I.jsx)(`h1`,{className:Je,children:e}),o]})]})})},Ue=e=>typeof e==`number`?`${e}px`:e,We=(e,t,n,r)=>f`
  display: flex;

  width: 100%;
  height: max-content;

  flex-direction: column;
  align-items: center;

  gap: 40px;

  padding: 32px 0;

  position: relative;
  z-index: 2;

  background: ${n?e:`transparent`};
  color: ${t};

  box-sizing: border-box;

  ${r&&f`
    position: sticky;
    top: 0;
  `}
`,Ge=(e,t)=>f`
  width: 100%;
  max-width: ${Ue(e)};

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  padding: 0 ${Ue(t)};

  box-sizing: border-box;
`,Ke=f`
  display: flex;

  justify-content: space-between;

  gap: 30px;

  align-items: baseline;

  width: 100%;

  margin-bottom: 12px;
`,qe=f`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`,Je=f`
  margin: 0;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 400;
`,Ye=e=>f`
  display: flex;

  flex: 1;

  ${e===`left`&&f`
    justify-content: flex-start;
  `}

  ${e===`right`&&f`
    justify-content: flex-end;
  `}
`,He.__docgenInfo={description:``,methods:[],displayName:`Header`,props:{title:{required:!1,tsType:{name:`union`,raw:`string | ReactNode`,elements:[{name:`string`},{name:`ReactNode`}]},description:`Заголовок`},leftAccessory:{required:!1,tsType:{name:`union`,raw:`ReactNode | string`,elements:[{name:`ReactNode`},{name:`string`}]},description:`Левый аксессуар`},rightAccessory:{required:!1,tsType:{name:`union`,raw:`ReactNode | string`,elements:[{name:`ReactNode`},{name:`string`}]},description:`Правый аксессуар`},topLeft:{required:!1,tsType:{name:`ReactNode`},description:`Контент в верхней строке слева`},topRight:{required:!1,tsType:{name:`ReactNode`},description:`Контент в верхней строке справа`},children:{required:!1,tsType:{name:`ReactNode`},description:`Контент под верхней строкой`},backgroundColor:{required:!1,tsType:{name:`AppTheme`},description:`Цвет фона`},textColor:{required:!1,tsType:{name:`AppTheme`},description:`Цвет текста`},filled:{required:!1,tsType:{name:`boolean`},description:`Растягивать цвет фона на всю ширину`,defaultValue:{value:`true`,computed:!1}},contentMaxWidth:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Максимальная ширина внутреннего контента`,defaultValue:{value:`1024`,computed:!1}},contentPaddingX:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Горизонтальные отступы внутреннего контента`,defaultValue:{value:`32`,computed:!1}},sticky:{required:!1,tsType:{name:`boolean`},description:`sticky header`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}}}));function Ze({children:e,content:t,position:n=`top`,backgroundColor:r=`hintBackground`,textColor:a=`lightGrey02`,borderColor:o=`darkGrey01`,borderWidth:s=0,borderRadius:c=10,offset:l=8,className:d}){let f=i(),p=(0,Qe.useId)();if(!(0,Qe.isValidElement)(e))throw Error(`Hint ожидает единственный ReactElement`);let m=`--hint-anchor-${p}`,h=()=>document.getElementById(p),g=e=>{let t=h();if(t)try{t.showPopover({source:e})}catch{}},_=()=>{let e=h();if(e)try{e.hidePopover()}catch{}},v=(e,t)=>n=>{e?.(n),t?.(n)},y=e;return(0,$e.jsxs)($e.Fragment,{children:[(0,Qe.cloneElement)(y,{"aria-describedby":p,onMouseEnter:v(y.props.onMouseEnter,e=>g(e.currentTarget)),onMouseLeave:v(y.props.onMouseLeave,()=>_()),onFocus:v(y.props.onFocus,e=>g(e.currentTarget)),onBlur:v(y.props.onBlur,()=>_()),style:{...y.props.style,anchorName:m},className:u(y.props.className,d)}),(0,$e.jsx)(`div`,{id:p,popover:`auto`,role:`tooltip`,style:{positionAnchor:m,background:f[r],color:f[a],border:`${s}px solid ${f[o]}`,borderRadius:c},className:et(n,l),children:t})]})}var Qe,$e,et,tt=t((()=>{d(),Qe=e(n(),1),a(),$e=r(),et=(e,t)=>f`
  position: fixed;
  margin: 4px;
  padding: 8px 12px;

  min-width: max-content;
  max-width: 320px;

  box-sizing: border-box;

  font-size: 12px;
  line-height: 16px;

  z-index: 9999;
  pointer-events: none;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);

  position-area: ${e};

  opacity: 0;
  transition: opacity 0.18s ease, transform 0.18s ease;

  ${e===`top`&&`
    margin-bottom: ${t};
  `}

  ${e===`bottom`&&`
    margin-top: ${t};
  `}

  ${e===`left`&&`
    margin-right: ${t};
  `}

  ${e===`right`&&`
    margin-left: ${t};
  `}

  &:popover-open {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  &::backdrop {
    background: transparent;
  }
`,Ze.__docgenInfo={description:``,methods:[],displayName:`Hint`,props:{children:{required:!0,tsType:{name:`ReactElement`},description:``},content:{required:!0,tsType:{name:`ReactNode`},description:``},position:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom' | 'left' | 'right'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:``,defaultValue:{value:`'top'`,computed:!1}},backgroundColor:{required:!1,tsType:{name:`AppTheme`},description:``,defaultValue:{value:`'hintBackground'`,computed:!1}},textColor:{required:!1,tsType:{name:`AppTheme`},description:``,defaultValue:{value:`'lightGrey02'`,computed:!1}},borderColor:{required:!1,tsType:{name:`AppTheme`},description:``,defaultValue:{value:`'darkGrey01'`,computed:!1}},borderWidth:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},borderRadius:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`10`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},offset:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`8`,computed:!1}}}}})),nt,rt,it,at,ot=t((()=>{w(),nt=C.input`
    height: 48px;
    box-sizing: border-box;
    padding: 14px 16px;
    border-radius: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${e=>e.$textColor};
    background-color: ${e=>e.$backgroundColor};
    width: 100%;
    transition-property: color, background-color, border-color, background-image;
    transition-duration: .15s;
    transition-timing-function: ease-in-out;
    border: 1px solid var(--mm-mainGrey, #D3D3D3);

  &:focus {
    border-color: ${e=>e.$focusColor};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${e=>`color-mix(in srgb, ${e.$focusColor} 50%, transparent)`};
    outline: none;
  }

  /* некликабельное состояние */
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({isError:e})=>e&&`
    border-color: var(--mm-error, #D41926);
    
    &:focus {
      border-color: var(--mm-error, #D41926);
    }
      
    &:focus-visible {
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--mm-error, #D41926) 70%, transparent);
    }
  `}
`,rt=C.label`
  display: flex;
  flex-direction: column;
  width: max-width;
`,it=C.span`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 6px;
  overflow-wrap: break-word;
  word-break: break-word;
  
  & span {
    color: ${e=>e.$errorColor};
  }
`,at=C.span`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.$errorColor};
  margin-top: 4px;
  overflow-wrap: break-word;
  word-break: break-word;
`})),L,st,ct=t((()=>{e(n(),1),ot(),a(),L=r(),st=({id:e,name:t,type:n=`text`,placeholder:r,label:a,color:o=`mainNavy`,disabled:s,required:c,value:l,onChange:u,isError:d,errorMassage:f,...p})=>{let m=i(),h=e=>{u&&u(e.target.value)};return(0,L.jsxs)(rt,{title:a===void 0?`Строка ввода`:a,children:[a&&(0,L.jsxs)(it,{id:`text-description-${e}`,$errorColor:m.error,children:[a,c&&(0,L.jsx)(`span`,{"aria-hidden":!0,children:`*`})]}),(0,L.jsx)(nt,{id:e,name:t,lang:`ru`,type:n,$focusColor:m[o],$errorColor:m.error,$textColor:m.textPrimary,$backgroundColor:m.backgroundPrimary,placeholder:r,value:l,onChange:h,required:c,disabled:s,isError:d,"aria-labelledby":a?`text-description-${e}`:void 0,"aria-required":c,"aria-invalid":d,"aria-describedby":d?`error-massage-${e}`:void 0,...p}),d&&(0,L.jsx)(at,{id:`error-massage-${e}`,role:`alert`,$errorColor:m.error,children:f})]})},st.__docgenInfo={description:``,methods:[],displayName:`InputText`,props:{id:{required:!1,tsType:{name:`string`},description:`Идентификатор для связи с другими элементами`},name:{required:!1,tsType:{name:`string`},description:`Поле для идентификации и группировки элементов в форме`},placeholder:{required:!1,tsType:{name:`string`},description:`Временный текст`},label:{required:!1,tsType:{name:`string`},description:`Текст-описание`},color:{required:!1,tsType:{name:`AppTheme`},description:`Цвет фокуса`,defaultValue:{value:`'mainNavy'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Заблокированное состояние`},required:{required:!1,tsType:{name:`boolean`},description:`Обязательность заполнения`},value:{required:!1,tsType:{name:`string`},description:`Текущее значение (controlled компонент)`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Отслеживание изменения состояния`},isError:{required:!1,tsType:{name:`boolean`},description:`Состояние ошибки`},errorMassage:{required:!1,tsType:{name:`string`},description:`Текст ошибки`},type:{defaultValue:{value:`'text'`,computed:!1},required:!1}},composes:[`Omit`]}})),lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt=t((()=>{te(),lt=A.div`
  position: relative;
  width: 100%;
  display: grid;
  gap: 6px;
  border: none;
`,ut=A.label`
  color: var(--mm-textPrimary, #000);
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 6px;
  overflow-wrap: break-word;
  word-break: break-word;

  & span {
    color: var(--mm-error, #D41926);
  }; 
`,dt=A.button`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  width: 100%;
  height: 48px;
  padding: 8px 16px;
  border: 1px solid var(--mm-mainGrey, #D3D3D3);
  border-radius: 10px;
  background: var(--mm-backgroundPrimary, #fff);
  color: var(--mm-textPrimary, #222);
  font-size: 14px;
  justify-content: space-between;
  cursor: pointer;

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    border-color: var(--mm-globalBlue, #1E4391);
  }
  
  &:focus-visible {
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--mm-globalBlue, #1E4391) 50%, transparent);
    outline: none;
  }

  ${({isError:e})=>e&&`
    border-color: var(--mm-error, #D41926);
    
    &:focus {
      border-color: var(--mm-error, #D41926);
    }
      
    &:focus-visible {
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--mm-error, #D41926) 70%, transparent);
    }
  `}
`,ft=A.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${e=>e.$isPlaceholder&&j`
      color: var(--mm-textSecondary, #222);
    `}
`,pt=A.div`
  height: 12px;
  width: 12px;
  margin-bottom: 3px;
  ${e=>e.$isOpen&&j`
      transform: rotate(180deg);
      margin-bottom: 0;
      margin-top: 3px;
    `}
`,mt=A.ul`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  z-index: 10;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--mm-mainGrey, #cbd5e1);
  border-radius: 10px;
  background: var(--mm-backgroundPrimary, #fff);
  box-sizing: border-box;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.12);
  max-height: 195px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
    &::-webkit-scrollbar-thumb {
    background-clip: content-box;
    border: 2px solid transparent;
    background-color: var(--mm-mainGrey, #d3d3d3);
    border-radius: 10px;
  }
`,ht=A.li`
  display: flex;
  z-index: 1;
  width: 100%;
  border: 0;
  background: transparent;
  color: var(--mm-textPrimary, #000);
  text-align: left;
  cursor: pointer;
  box-sizing: border-box;
  min-height: 48px;
  height: 100%;
  background-color: var(--mm-backgroundPrimary, #fff);
  border: 1px solid transparent;
  border-bottom: 1px solid var(--mm-mainGrey, #CAD1E1);
  padding: 13px 16px;
  padding-left: 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  & img {
    margin-right: 8px;
  }

  ${e=>e.$active&&j`
      background: var(--mm-backgroundSecondary, #eff6ff);
      border: 1px solid var(--mm-globalBlue, #1E4391);
    `}

  ${e=>e.$selected&&j`
      font-weight: 600;
      padding-left: 16px;
    `}

  &:disabled {
    color: var(--mm-textTertiary, #9ca3af);
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid var(--mm-globalBlue, #1E4391);
    outline-offset: 2px;
  }
`,gt=A.div`
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  color: var(--mm-error, #D41926);
  top: 90px;
  overflow-wrap: break-word;
  word-break: break-word;
`,_t=A.ul`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  max-width: 100%;
  gap: 4px;
  padding: 0;
  margin: 0;

  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 7px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: content-box;
    border: 2px solid transparent;
    background-color: var(--mm-mainGrey, #d3d3d3);
    border-radius: 10px;
  }
`,vt=A.li`
  gap: 10px;
  color: var(--mm-textPrimary, #222);
  display: flex;
  font-weight: 400;
  font-size: 12px;
  line-height: 16.8px;
  background-color: var(--mm-lightBlue02, #e7f2ff);
  padding: 8px 12px;
  margin: 2px;
  height: 33px;
  border-radius: 8px;
  box-sizing: border-box;
  
  &:focus-visible {
    outline: 1px solid var(--mm-globalBlue, #1E4391);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--mm-globalBlue, #1E4391) 50%, transparent);
    outline-offset: 1px;
  }
`,yt=A.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  padding: 1px;
  font-size: 12px;
  line-height: 1;
  transition: background 0.2s;
  background: transparent;

  &[disabled] {
    cursor: not-allowed;
  }

  &:hover {
    background: color-mix(in srgb, var(--mm-globalBlue, #1E4391) 8%, transparent);
  }

  &[disabled]:hover {
    background: transparent;
  }

  &:focus-visible {
    outline: 1px solid var(--mm-globalBlue, #1E4391);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--mm-globalBlue, #1E4391) 50%, transparent);
    outline-offset: 1px;
  }

  img {
    width: 10px;
    height: 10px;
  }
`})),R,z,xt,St=t((()=>{R=e(n(),1),bt(),re(),oe(),ae(),z=r(),xt=({id:e,name:t,label:n,placeholder:r=`Выберите значения`,options:i,value:a,defaultValue:o=[],disabled:s,required:c,isError:l,errorMessage:u,className:d,onChange:f})=>{let p=`${e??t??`multiselect`}-listbox`,m=`${e??t??`multiselect`}-label`,h=`${e??t??`multiselect`}-error`,g=a!==void 0,[_,v]=(0,R.useState)(o),[y,b]=(0,R.useState)(!1),[x,S]=(0,R.useState)(0),C=(0,R.useRef)(null),w=g?a:_,T=(0,R.useMemo)(()=>i.filter(e=>w.includes(e.value)),[w,i]),E=e=>{if(e.disabled)return;let t=w.includes(e.value),n;n=t?w.filter(t=>t!==e.value):[...w,e.value],g||v(n);let r=i.filter(e=>n.includes(e.value));f?.(n,r),C.current?.focus()},D=(e,t)=>{t.stopPropagation(),t.preventDefault();let n=w.filter(t=>t!==e);g||v(n);let r=i.filter(e=>n.includes(e.value));f?.(n,r),C.current?.focus()},O=T.length>0?i.findIndex(e=>e.value===T[T.length-1].value):0,k=O>=0?O:0,ee=e=>{if(!s)switch(e.key){case`ArrowDown`:e.preventDefault(),y||S(k),b(!0),S(e=>e+1>=i.length?0:e+1);break;case`ArrowUp`:e.preventDefault(),y||S(k),b(!0),S(e=>e-1<0?i.length-1:e-1);break;case`Enter`:case` `:if(e.preventDefault(),y){let e=i[x];e&&E(e)}else S(k),b(!0);break;case`Escape`:e.preventDefault(),b(!1);break;case`Tab`:b(!1);break;case`Backspace`:if(w.length>0&&!y){e.preventDefault();let t=w.slice(0,-1);g||v(t);let n=i.filter(e=>t.includes(e.value));f?.(t,n)}break;default:break}};return(0,z.jsxs)(lt,{className:d,children:[n&&(0,z.jsxs)(ut,{id:m,htmlFor:e,children:[n,c&&(0,z.jsx)(`span`,{"aria-hidden":`true`,children:`*`})]}),(0,z.jsxs)(dt,{isError:l,ref:C,id:e,type:`button`,role:`combobox`,"aria-required":c?!0:void 0,"aria-labelledby":n?m:void 0,"aria-controls":p,"aria-expanded":y,"aria-haspopup":`listbox`,"aria-invalid":l||void 0,"aria-describedby":l?h:void 0,"aria-activedescendant":y?`${p}-option-${i[x]?.value}`:void 0,disabled:s,onClick:()=>{s||(y||S(k),b(e=>!e))},onKeyDown:ee,children:[(0,z.jsx)(_t,{children:T.length===0?(0,z.jsx)(ft,{$isPlaceholder:!0,children:r}):T.map(e=>(0,z.jsxs)(vt,{tabIndex:0,role:`option`,"aria-selected":`true`,"aria-label":e.label,onKeyDown:t=>{(t.key===`Backspace`||t.key===`Delete`)&&(t.preventDefault(),D(e.value,t))},children:[e.label,(0,z.jsx)(yt,{type:`button`,onClick:t=>D(e.value,t),tabIndex:-1,disabled:s,"aria-label":`Удалить ${e.label}`,children:(0,z.jsx)(`img`,{src:ie,alt:``,"aria-hidden":!0})})]},e.value))}),(0,z.jsx)(pt,{"aria-hidden":!0,$isOpen:y,children:(0,z.jsx)(`img`,{src:ne,alt:``})})]}),(0,z.jsx)(`input`,{type:`hidden`,name:t,value:JSON.stringify(w)}),y&&(0,z.jsx)(mt,{id:p,role:`listbox`,"aria-labelledby":n?m:void 0,"aria-multiselectable":`true`,children:i.map((e,t)=>{let n=w.includes(e.value),r=t===x;return(0,z.jsxs)(ht,{tabIndex:-1,id:`${p}-option-${e.value}`,role:`option`,"aria-selected":n,"aria-disabled":e.disabled||void 0,$active:r,$selected:n,onMouseEnter:()=>S(t),onClick:()=>E(e),children:[n&&(0,z.jsx)(`img`,{src:`data:image/svg+xml,%3csvg%20width='16'%20height='14'%20viewBox='0%200%2016%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%209.02476C1%209.02476%203.72017%2011.7289%206.18442%2012.9653C7.74622%2013.7489%2015%201%2015%201'%20stroke='%231F4492'%20stroke-width='2'%20stroke-miterlimit='16'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e`,alt:``,"aria-hidden":!0}),e.label]},e.value)})}),l&&u&&(0,z.jsx)(gt,{id:h,role:`alert`,children:u})]})},xt.__docgenInfo={description:``,methods:[],displayName:`MultiSelect`,props:{id:{required:!1,tsType:{name:`string`},description:``},name:{required:!1,tsType:{name:`string`},description:``},label:{required:!1,tsType:{name:`string`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Выберите значения'`,computed:!1}},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  value: string;
  label: string;
  disabled?: boolean;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`MultiselectOption[]`},description:``},value:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},defaultValue:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``,defaultValue:{value:`[]`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},isError:{required:!1,tsType:{name:`boolean`},description:``},errorMessage:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string[], options: MultiselectOption[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`value`},{type:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  value: string;
  label: string;
  disabled?: boolean;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`MultiselectOption[]`},name:`options`}],return:{name:`void`}}},description:``}}}})),Ct,wt,Tt,Et=t((()=>{w(),Ct=C.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + span {
    border-color: ${e=>e.$color};
    background-color: ${e=>e.$backgroundColor};
  }
  &:checked + span::before {
    content: '';
    width: 9px;
    height: 9px;
    background-color: ${e=>e.$color};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:focus + span {
    box-shadow: 0 0 0 2px ${e=>`color-mix(in srgb, ${e.$color} 50%, transparent)`};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled + span {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,wt=C.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  gap: 6px;

  &:has(input:disabled) {
    cursor: not-allowed;
  }
`,Tt=C.span`
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border: 1px solid var(--mm-mainGrey, #d3d3d3);
  border-radius: 50%;
  position: relative;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;
  margin: 0;
`})),B,Dt,Ot=t((()=>{e(n(),1),Et(),a(),B=r(),Dt=({id:e,name:t,value:n,label:r,color:a=`mainNavy`,reverse:o,checked:s,disabled:c,onChange:l,required:u,...d})=>{let f=i();return(0,B.jsxs)(wt,{title:n,children:[(0,B.jsx)(Ct,{id:e,type:`radio`,name:t,value:n,$color:f[a],$backgroundColor:f.backgroundPrimary,checked:s,disabled:c,onChange:e=>{l?.(e.target.value)},required:u,...d}),!o&&(0,B.jsx)(Tt,{}),r,o&&(0,B.jsx)(Tt,{})]})},Dt.__docgenInfo={description:``,methods:[],displayName:`Radio`,props:{name:{required:!0,tsType:{name:`string`},description:`Поле для идентификации и группировки элементов в форме`},value:{required:!0,tsType:{name:`string`},description:`Значение радио-кнопки`},id:{required:!1,tsType:{name:`string`},description:`Идентификатор для связи с другими элементами`},label:{required:!1,tsType:{name:`string`},description:`Текст радио-кнопки`},color:{required:!1,tsType:{name:`AppTheme`},description:`Цвет радио-кнопки`,defaultValue:{value:`'mainNavy'`,computed:!1}},reverse:{required:!1,tsType:{name:`boolean`},description:`Положение текста, относительно радио-кнопки`},checked:{required:!1,tsType:{name:`boolean`},description:`Состояние "Выбрано"/"Не выбрано"`},disabled:{required:!1,tsType:{name:`boolean`},description:`Заблокированное состояние`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Отслеживание изменения состояния`},required:{required:!1,tsType:{name:`boolean`},description:`Обязательность заполнения`}},composes:[`Omit`]}})),kt,At,jt,Mt,Nt,Pt,Ft=t((()=>{w(),kt=C.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`,At=C.fieldset`
  display: flex;
  justify-content: center;
  gap: 6px;
  padding: 0;
  border: none;
  margin: 0 0 10px 0;

  ${({isError:e})=>e?`
        border: 2px solid #D41926;
      `:``}
`,jt=C.input`
  position: absolute;
  cursor: pointer;
  opacity: 0;

  &:focus + div span {
    opacity: 1;
    transform: scale(1);
  }
`,Mt=C.span`
  position: absolute;
  inset: -8px;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 165, 0, 0.6) 0%,
    rgba(255, 165, 0, 0.3) 40%,
    rgba(255, 165, 0, 0) 70%
  );
  opacity: 0;
  transform: scale(0.6);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  z-index: -1;
  }
`,Nt=C.div`
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    height: auto;
    align-items: center;
    cursor: pointer;
    aria-hidden="true";

  & img {
    width: 60px;
    height: 60px;
    alt="Звезда";
    role="none";
    ${({$isMobile:e})=>e?`
        width: 50px;
        height: 50px;
      `:``}
  }
`,Pt=C.span`
  font-family: 'Montserrat', sans-serif;
  color: #D41926;
  font-weight: bolder;
  font-size: 24px;
`})),V,It,Lt=t((()=>{e(n(),1),Ft(),_(),V=r(),It=({name:e=`rating`,rating:t,setRating:n,isError:r,isMobile:i,className:a})=>{let o=i?24:48,s=e=>{n(e)};return(0,V.jsxs)(kt,{children:[(0,V.jsx)(At,{role:`radiogroup`,"aria-labelledby":r?`error-label`:void 0,isError:r,className:a,children:[1,2,3,4,5].map(n=>(0,V.jsxs)(`label`,{title:n.toString(),children:[(0,V.jsx)(jt,{name:e,value:n,id:`${n}-star`,type:`radio`,onChange:()=>s(n),"aria-label":`Оценка ${n}`,"aria-checked":n===t?`true`:`false`}),n<=t?(0,V.jsxs)(Nt,{$isMobile:i,children:[(0,V.jsx)(Mt,{}),(0,V.jsx)(y,{size:o,color:`#FFB26B`,"aria-hidden":`true`})]}):(0,V.jsxs)(Nt,{$isMobile:i,children:[(0,V.jsx)(Mt,{}),(0,V.jsx)(p,{size:o,color:`#FFB26B`,"aria-hidden":`true`})]})]}))}),r&&(0,V.jsx)(Pt,{role:`alert`,id:`error-label`,children:`Поставьте оценку`})]})},It.__docgenInfo={description:``,methods:[],displayName:`RadioStars`,props:{name:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"rating"`,computed:!1}},rating:{required:!0,tsType:{name:`number`},description:``},setRating:{required:!0,tsType:{name:`ReactDispatch`,raw:`React.Dispatch<React.SetStateAction<number>>`,elements:[{name:`ReactSetStateAction`,raw:`React.SetStateAction<number>`,elements:[{name:`number`}]}]},description:``},isError:{required:!1,tsType:{name:`boolean`},description:``},isMobile:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),Rt,zt,Bt,Vt=t((()=>{w(),Rt=C.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`,zt=C.div`
  display: flex;
  flex-wrap: nowrap;
`,Bt=C.div`
  position: relative;
  display: inline-flex;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  align-items: center;
  justify-content: center;
`,C.span`
  position: absolute;
  inset: 0;
  display: inline-flex;
  overflow: hidden;
  width: ${e=>e.fillPercent}%;
  pointer-events: none;
`})),Ht,Ut,Wt,Gt,Kt,qt=t((()=>{Ht=24,Ut=16,Wt=(e,t)=>t===void 0?e?Ut:Ht:Math.max(1,t),Gt=Wt,Kt=(e,t)=>{let n=Math.min(5,Math.max(0,e));return Math.min(1,Math.max(0,n-(t-1)))*100}})),Jt,H,Yt,Xt,Zt,Qt=t((()=>{Jt=e(n(),1),Vt(),a(),qt(),H=r(),Yt=`M12 3.5L14.7 8.9L20.5 9.7L16.2 13.8L17.3 19.5L12 16.6L6.7 19.5L7.8 13.8L3.5 9.7L9.3 8.9L12 3.5Z`,Xt=({rating:e,isSmall:t,size:n,ariaHidden:r})=>{let a=i(),o=Gt(t,n);return(0,H.jsx)(Rt,{children:(0,H.jsx)(zt,{"aria-label":r?void 0:`Оценка ${e} из 5`,role:r?void 0:`img`,"aria-hidden":r,children:[1,2,3,4,5].map(t=>(0,H.jsx)(Bt,{size:o,children:(0,H.jsx)(Zt,{size:o,color:a.lightOrange01,fillPercent:Kt(e,t)})},t))})})},Zt=({size:e,color:t,fillPercent:n})=>{let r=Jt.useId(),i=24*n/100;return(0,H.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,focusable:`false`,children:[(0,H.jsx)(`defs`,{children:(0,H.jsx)(`clipPath`,{id:r,children:(0,H.jsx)(`rect`,{x:`0`,y:`0`,width:i,height:`24`})})}),(0,H.jsx)(`path`,{d:Yt,fill:t,stroke:`none`,clipPath:`url(#${r})`}),(0,H.jsx)(`path`,{d:Yt,fill:`none`,stroke:t,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]})},Xt.__docgenInfo={description:``,methods:[],displayName:`RatingStars`,props:{rating:{required:!0,tsType:{name:`number`},description:`Оценка`},isSmall:{required:!1,tsType:{name:`boolean`},description:`Размер звезд`},size:{required:!1,tsType:{name:`number`},description:`Размер звезд в px`},ariaHidden:{required:!1,tsType:{name:`boolean`},description:`Видимость для скринридера`}}}})),$t,en,tn,nn,rn,an,on,sn,cn=t((()=>{te(),$t=A.div`
  position: relative;
  width: 100%;
  display: grid;
  gap: 6px;
  border: none;
`,en=A.label`
  color: var(--mm-textPrimary, #000);
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 6px;
  overflow-wrap: break-word;
  word-break: break-word;

  & span {
    color: var(--mm-error, #D41926);
  }; 
`,tn=A.button`
  width: 100%;
  height: 48px;
  padding: 14px 16px;
  border: 1px solid var(--mm-mainGrey, #D3D3D3);
  border-radius: 10px;
  background: var(--mm-backgroundPrimary, #fff);
  color: var(--mm-textPrimary, #222);
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    border-color: var(--mm-globalBlue, #1E4391);
  }
  
  &:focus-visible {
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--mm-globalBlue, #1E4391) 50%, transparent);
    outline: none;
  }

  ${({isError:e})=>e&&`
    border-color: var(--mm-error, #D41926);
    
    &:focus {
      border-color: var(--mm-error, #D41926);
    }
      
    &:focus-visible {
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--mm-error, #D41926) 70%, transparent);
    }
  `}
`,nn=A.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${e=>e.$isPlaceholder&&j`
      color: var(--mm-textSecondary, #222);
    `}
`,rn=A.div`
  height: 12px;
  width: 12px;
  margin-bottom: 3px;
  ${e=>e.$isOpen&&j`
      transform: rotate(180deg);
      margin-bottom: 0;
      margin-top: 3px;
    `}
`,an=A.ul`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  z-index: 10;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--mm-mainGrey, #cbd5e1);
  border-radius: 10px;
  background: var(--mm-backgroundPrimary, #fff);
  box-sizing: border-box;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.12);
  max-height: 195px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
    &::-webkit-scrollbar-thumb {
    background-clip: content-box;
    border: 2px solid transparent;
    background-color: var(--mm-mainGrey, #d3d3d3);
    border-radius: 10px;
  }
`,on=A.li`
  width: 100%;
  border: 0;
  background: transparent;
  color: var(--mm-textPrimary, #000);
  text-align: left;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
  min-height: 48px;
  height: 100%;
  background-color: var(--mm-backgroundPrimary, #fff);
  border: 1px solid transparent;
  border-bottom: 1px solid var(--mm-mainGrey, #CAD1E1);
  padding: 13px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  

    ${e=>e.$active&&j`
      background: var(--mm-backgroundSecondary, #eff6ff);
      border: 1px solid var(--mm-globalBlue, #1E4391);
    `}

  ${e=>e.$selected&&j`
      font-weight: 600;
    `}

  &:disabled {
    color: var(--mm-textTertiary, #9ca3af);
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid var(--mm-globalBlue, #2563eb);
    outline-offset: 2px;
  }
`,sn=A.div`
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  color: var(--mm-error, #D41926);
  top: 90px;
  overflow-wrap: break-word;
  word-break: break-word;
`})),U,W,ln,un=t((()=>{U=e(n(),1),cn(),re(),W=r(),ln=({id:e,name:t,label:n,placeholder:r=`Выберите значение`,options:i,value:a,defaultValue:o,disabled:s,required:c,isError:l,errorMessage:u,className:d,onChange:f})=>{let p=`${e??t??`select`}-listbox`,m=`${e??t??`select`}-label`,h=`${e??t??`select`}-error`,g=a!==void 0,[_,v]=(0,U.useState)(o??``),[y,b]=(0,U.useState)(!1),[x,S]=(0,U.useState)(0),C=(0,U.useRef)(null),w=g?a:_,T=(0,U.useMemo)(()=>i.find(e=>e.value===w),[w,i]),E=T?i.findIndex(e=>e.value===T.value):0,D=E>=0?E:0,O=e=>{e.disabled||(g||v(e.value),f?.(e.value,e),b(!1),C.current?.focus())},k=e=>{if(!s)switch(e.key){case`ArrowDown`:e.preventDefault(),y||S(D),b(!0),S(e=>e+1>=i.length?0:e+1);break;case`ArrowUp`:e.preventDefault(),y||S(D),b(!0),S(e=>e-1<0?i.length-1:e-1);break;case`Enter`:case` `:if(e.preventDefault(),y){let e=i[x];e&&O(e)}else S(D),b(!0);break;case`Escape`:e.preventDefault(),b(!1);break;case`Tab`:b(!1);break;default:break}};return(0,W.jsxs)($t,{className:d,children:[n&&(0,W.jsxs)(en,{id:m,htmlFor:e,children:[n,c&&(0,W.jsx)(`span`,{"aria-hidden":`true`,children:`*`})]}),(0,W.jsxs)(tn,{isError:l,ref:C,id:e,type:`button`,role:`combobox`,"aria-labelledby":n?m:void 0,"aria-controls":p,"aria-expanded":y,"aria-haspopup":`listbox`,"aria-required":c?!0:void 0,"aria-invalid":l||void 0,"aria-describedby":l?h:void 0,"aria-activedescendant":y?`${p}-option-${i[x]?.value}`:void 0,disabled:s,onClick:()=>{s||(y||S(D),b(e=>!e))},onKeyDown:k,children:[(0,W.jsx)(nn,{$isPlaceholder:!T,children:T?.label??r}),(0,W.jsx)(rn,{$isOpen:y,"aria-hidden":!0,children:(0,W.jsx)(`img`,{src:ne,alt:``})})]}),(0,W.jsx)(`input`,{type:`hidden`,name:t,value:w}),y&&(0,W.jsx)(an,{id:p,role:`listbox`,"aria-labelledby":n?m:void 0,children:i.map((e,t)=>{let n=e.value===w,r=t===x;return(0,W.jsx)(on,{tabIndex:-1,id:`${p}-option-${e.value}`,role:`option`,"aria-selected":x===t,"aria-disabled":e.disabled||void 0,$active:r,$selected:n,onMouseEnter:()=>S(t),onClick:()=>O(e),children:e.label},e.value)})}),l&&u&&(0,W.jsx)(sn,{id:h,role:`alert`,children:u})]})},ln.__docgenInfo={description:``,methods:[],displayName:`Select`,props:{id:{required:!1,tsType:{name:`string`},description:``},name:{required:!1,tsType:{name:`string`},description:``},label:{required:!1,tsType:{name:`string`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Выберите значение'`,computed:!1}},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  value: string;
  label: string;
  disabled?: boolean;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}}],raw:`SelectOption[]`},description:``},value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},isError:{required:!1,tsType:{name:`boolean`},description:``},errorMessage:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string, option: SelectOption) => void`,signature:{arguments:[{type:{name:`string`},name:`value`},{type:{name:`signature`,type:`object`,raw:`{
  value: string;
  label: string;
  disabled?: boolean;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`disabled`,value:{name:`boolean`,required:!1}}]}},name:`option`}],return:{name:`void`}}},description:``}}}})),dn,fn,pn,G,K,q,mn,hn,gn=t((()=>{d(),dn=r(),fn=f`
  background: linear-gradient(
    90deg,
    #e9e9e9 25%,
    #f6f6f6 37%,
    #e9e9e9 63%
  );
  background-size: 400% 100%;
  animation: ${l`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`} 1.2s ease-in-out infinite;
`,pn=e=>typeof e==`number`?`${e}px`:e,G=({width:e=`100%`,height:t=16,radius:n=8,className:r,style:i})=>(0,dn.jsx)(`span`,{"aria-hidden":`true`,style:i,className:u(mn(e,t,n),r)}),K=({size:e=24,className:t,style:n})=>(0,dn.jsx)(G,{width:e,height:e,radius:`50%`,className:t,style:n}),q=({children:e,gap:t=10,className:n,style:r})=>(0,dn.jsx)(`div`,{className:u(hn(t),n),style:r,children:e}),mn=(e,t,n)=>f`
  display: block;
  flex: 0 0 auto;
  width: ${pn(e)};
  height: ${pn(t)};
  border-radius: ${pn(n)};
  ${fn};
`,hn=e=>f`
  display: flex;
  flex-direction: column;
  gap: ${e}px;
`,G.__docgenInfo={description:``,methods:[],displayName:`SkeletonBlock`,props:{className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``,defaultValue:{value:`'100%'`,computed:!1}},height:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``,defaultValue:{value:`16`,computed:!1}},radius:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``,defaultValue:{value:`8`,computed:!1}}}},K.__docgenInfo={description:``,methods:[],displayName:`SkeletonCircle`,props:{className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``},size:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`24`,computed:!1}}}},q.__docgenInfo={description:``,methods:[],displayName:`SkeletonStack`,props:{className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},gap:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`10`,computed:!1}}}}})),J,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn=t((()=>{d(),gn(),J=r(),_n=({className:e,style:t})=>(0,J.jsx)(G,{width:88,height:32,radius:50,className:e,style:t}),vn=({className:e,style:t})=>(0,J.jsx)(G,{width:120,height:44,radius:16,className:e,style:t}),yn=({className:e,style:t})=>(0,J.jsx)(G,{width:112,height:18,radius:6,className:e,style:t}),bn=({lines:e=3,className:t,style:n})=>(0,J.jsx)(q,{gap:8,className:t,style:n,children:Array.from({length:e},(t,n)=>(0,J.jsx)(G,{width:n===e-1?`72%`:`100%`,height:16},n))}),xn=({className:e,style:t})=>(0,J.jsxs)(q,{gap:8,className:e,style:t,children:[(0,J.jsx)(G,{width:96,height:14}),(0,J.jsx)(G,{width:`100%`,height:44,radius:10})]}),Sn=({className:e,style:t})=>(0,J.jsxs)(q,{gap:8,className:e,style:t,children:[(0,J.jsx)(G,{width:112,height:14}),(0,J.jsx)(G,{width:`100%`,height:112,radius:10})]}),Cn=({className:e,style:t})=>(0,J.jsxs)(q,{gap:8,className:e,style:t,children:[(0,J.jsx)(G,{width:104,height:14}),(0,J.jsxs)(`div`,{className:Nn,children:[(0,J.jsx)(G,{width:`55%`,height:16}),(0,J.jsx)(K,{size:18})]})]}),wn=({className:e,style:t})=>(0,J.jsxs)(`div`,{className:u(Mn,e),style:t,children:[(0,J.jsx)(G,{width:24,height:24,radius:6}),(0,J.jsx)(G,{width:96,height:16})]}),Tn=({className:e,style:t})=>(0,J.jsxs)(`div`,{className:u(Mn,e),style:t,children:[(0,J.jsx)(K,{size:24}),(0,J.jsx)(G,{width:96,height:16})]}),En=({className:e,style:t})=>(0,J.jsxs)(`div`,{className:u(Mn,e),style:t,children:[(0,J.jsx)(G,{width:46,height:26,radius:50}),(0,J.jsx)(G,{width:96,height:16})]}),Dn=({className:e,style:t})=>(0,J.jsx)(`div`,{className:u(Pn,e),style:t,children:Array.from({length:5},(e,t)=>(0,J.jsx)(K,{size:24},t))}),On=({className:e,style:t})=>(0,J.jsxs)(q,{gap:16,className:e,style:t,children:[(0,J.jsxs)(`div`,{className:Fn,children:[(0,J.jsx)(G,{width:96,height:36,radius:18}),(0,J.jsx)(G,{width:120,height:36,radius:18}),(0,J.jsx)(G,{width:88,height:36,radius:18})]}),(0,J.jsx)(bn,{lines:3})]}),kn=({items:e=3,className:t,style:n})=>(0,J.jsx)(q,{gap:8,className:t,style:n,children:Array.from({length:e},(e,t)=>(0,J.jsxs)(`div`,{className:In,children:[(0,J.jsx)(G,{width:`55%`,height:16}),(0,J.jsx)(K,{size:20})]},t))}),An=({className:e,style:t})=>(0,J.jsxs)(`footer`,{className:u(Ln,e),style:t,children:[(0,J.jsx)(G,{width:160,height:16}),(0,J.jsx)(G,{width:120,height:16})]}),jn=({className:e,style:t})=>(0,J.jsxs)(`div`,{className:u(Rn,e),style:t,children:[(0,J.jsxs)(`div`,{className:zn,children:[(0,J.jsx)(G,{width:`45%`,height:24}),(0,J.jsx)(K,{size:28})]}),(0,J.jsx)(bn,{lines:4}),(0,J.jsxs)(`div`,{className:Bn,children:[(0,J.jsx)(vn,{}),(0,J.jsx)(vn,{})]})]}),Mn=f`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`,Nn=f`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  min-height: 44px;
  padding: 0 14px;
  box-sizing: border-box;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  background: #ffffff;
`,Pn=f`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,Fn=f`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,In=f`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  padding: 14px 16px;
  box-sizing: border-box;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  background: #ffffff;
`,Ln=f`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 16px 24px;
  box-sizing: border-box;
`,Rn=f`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: min(520px, 100%);
  padding: 24px;
  box-sizing: border-box;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  background: #ffffff;
`,zn=f`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`,Bn=f`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`,_n.__docgenInfo={description:``,methods:[],displayName:`BadgeSkeleton`,props:{className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}},vn.__docgenInfo={description:``,methods:[],displayName:`ButtonSkeleton`,props:{className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}},yn.__docgenInfo={description:``,methods:[],displayName:`LinkSkeleton`,props:{className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}},bn.__docgenInfo={description:``,methods:[],displayName:`TextSkeleton`,props:{className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``},lines:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`3`,computed:!1}}}},xn.__docgenInfo={description:``,methods:[],displayName:`InputTextSkeleton`,props:{className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}},Sn.__docgenInfo={description:``,methods:[],displayName:`TextareaSkeleton`,props:{className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}},Cn.__docgenInfo={description:``,methods:[],displayName:`SelectSkeleton`,props:{className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}},wn.__docgenInfo={description:``,methods:[],displayName:`CheckboxSkeleton`,props:{className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}},Tn.__docgenInfo={description:``,methods:[],displayName:`RadioSkeleton`,props:{className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}},En.__docgenInfo={description:``,methods:[],displayName:`ToggleSkeleton`,props:{className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}},Dn.__docgenInfo={description:``,methods:[],displayName:`RatingStarsSkeleton`,props:{className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}},On.__docgenInfo={description:``,methods:[],displayName:`TabsSkeleton`,props:{className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}},kn.__docgenInfo={description:``,methods:[],displayName:`AccordionSkeleton`,props:{className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``},items:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`3`,computed:!1}}}},An.__docgenInfo={description:``,methods:[],displayName:`FooterSkeleton`,props:{className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}},jn.__docgenInfo={description:``,methods:[],displayName:`DialogSkeleton`,props:{className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}}})),Hn,Y,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn=t((()=>{d(),Hn=e(n(),1),a(),Y=r(),Un=({tabs:e,defaultTabId:t,vertical:n=!1,withScrollButtons:r=!1,variant:a=`filled`,activeColor:o=`mainBlue`,backgroundColor:s=`lightGrey01`,className:c})=>{let l=i(),[d,f]=(0,Hn.useState)(t??e[0]?.id),p=(0,Hn.useRef)(null),m=e.some(e=>e.id===d)?d:e[0]?.id,h=e=>{p.current&&(n?p.current.scrollBy({top:e===`next`?150:-150,behavior:`smooth`}):p.current.scrollBy({left:e===`next`?150:-150,behavior:`smooth`}))},g=(t,n)=>{let r=t.key===`ArrowRight`||t.key===`ArrowDown`,i=t.key===`ArrowLeft`||t.key===`ArrowUp`;if(!r&&!i)return;t.preventDefault();let a=e[r?(n+1)%e.length:(n-1+e.length)%e.length];a.disabled||f(a.id)};return(0,Y.jsxs)(`div`,{className:u(Wn(n),c),children:[(0,Y.jsxs)(`div`,{className:Gn(n),children:[r&&(0,Y.jsx)(`button`,{type:`button`,"aria-label":n?`Прокрутить вкладки вверх`:`Прокрутить вкладки влево`,className:Yn,onClick:()=>h(`prev`),children:n?`↑`:`←`}),(0,Y.jsx)(`div`,{ref:p,role:`tablist`,"aria-orientation":n?`vertical`:`horizontal`,className:Kn(n,a),children:e.map((e,t)=>{let r=m===e.id;return(0,Y.jsx)(`button`,{role:`tab`,type:`button`,id:`tab-${e.id}`,"aria-selected":r,"aria-controls":`panel-${e.id}`,tabIndex:r?0:-1,disabled:e.disabled,className:qn(r,a,l[o],l[s],l.white,l.textPrimary,n),onClick:()=>f(e.id),onKeyDown:e=>g(e,t),children:e.label},e.id)})}),r&&(0,Y.jsx)(`button`,{type:`button`,"aria-label":n?`Прокрутить вкладки вниз`:`Прокрутить вкладки вправо`,className:Yn,onClick:()=>h(`next`),children:n?`↓`:`→`})]}),e.map(e=>{let t=m===e.id;return(0,Y.jsx)(`div`,{role:`tabpanel`,id:`panel-${e.id}`,"aria-labelledby":`tab-${e.id}`,hidden:!t,className:Jn,children:t&&e.content},e.id)})]})},Wn=e=>f`
  display: flex;
  flex-direction: ${e?`row`:`column`};
  gap: 16px;
  width: fit-content;
`,Gn=e=>f`
  display: flex;
  flex-direction: ${e?`column`:`row`};
  align-items: flex-start;
  gap: 8px;
`,Kn=(e,t)=>f`
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
`,qn=(e,t,n,r,i,a,o)=>f`
  border: none;
  outline: none;

  cursor: pointer;

  white-space: nowrap;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
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

        background: ${e?n:r};

        color: ${e?i:a};

        flex-shrink: 0;
      `:`
        background: transparent;

        color: ${e?n:a};

        display: flex;
        align-items: center;
        justify-content: flex-start;

        width: ${o?`220px`:`auto`};
        min-width: ${o?`220px`:`max-content`};

        text-align: left;

        padding: ${o?`12px 16px`:`12px 0`};

        border-bottom: ${!o&&e?`2px solid ${n}`:`2px solid transparent`};

        border-left: ${o&&e?`2px solid ${n}`:`2px solid transparent`};

        border-radius: 0;

        flex-shrink: 0;
      `}
`,Jn=f`
  width: 100%;
  min-width: 320px;
`,Yn=f`
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
`,Un.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{tabs:{required:!0,tsType:{name:`Array`,elements:[{name:`ITabItem`}],raw:`ITabItem[]`},description:`Список табов`},defaultTabId:{required:!1,tsType:{name:`string`},description:`Активный таб по умолчанию`},vertical:{required:!1,tsType:{name:`boolean`},description:`Вертикальные табы`,defaultValue:{value:`false`,computed:!1}},withScrollButtons:{required:!1,tsType:{name:`boolean`},description:`Показать стрелки прокрутки`,defaultValue:{value:`false`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'filled' | 'underline'`,elements:[{name:`literal`,value:`'filled'`},{name:`literal`,value:`'underline'`}]},description:`Вариант отображения`,defaultValue:{value:`'filled'`,computed:!1}},activeColor:{required:!1,tsType:{name:`AppTheme`},description:`Цвет активного таба`,defaultValue:{value:`'mainBlue'`,computed:!1}},backgroundColor:{required:!1,tsType:{name:`AppTheme`},description:`Цвет фона`,defaultValue:{value:`'lightGrey01'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Дополнительный класс`}}}})),Zn,Qn,X,$n,er,tr=t((()=>{d(),e(n(),1),a(),Zn=r(),Qn={h1:{size:40,lineHeight:1.25,weight:700},h2:{size:36,lineHeight:1.35,weight:600},h3:{size:24,lineHeight:1.45,weight:600},h4:{size:22,lineHeight:1.5,weight:500},h5:{size:21,lineHeight:1.5,weight:500},h6:{size:20,lineHeight:1.5,weight:500},paragraph:{size:18,lineHeight:1.55,weight:400},small:{size:16,lineHeight:1.55,weight:400},xsmall:{size:14,lineHeight:1.6,weight:400}},X=({children:e,variant:t=`paragraph`,as:n=`p`,size:r,weight:a,italic:o=!1,color:s,align:c=`left`,className:l})=>{let d=i(),f=Qn[t],p=er(t),m=s?d[s]:p?d.mainNavy:t===`paragraph`?d.textParagraph:d.textPrimary;return(0,Zn.jsx)(n,{className:u($n({size:r??f.size,lineHeight:f.lineHeight,weight:a??f.weight,italic:o,color:m,align:c,isHeading:p}),l),children:e})},$n=({size:e,lineHeight:t,weight:n,italic:r,color:i,align:a,isHeading:o})=>f`
  margin: ${o?`4px 0`:`0`};
  padding: 0;

  font-size: ${e}px;
  line-height: ${t};
  font-weight: ${n};
  font-style: ${r?`italic`:`normal`};

  color: ${i};

  text-align: ${a};

  overflow-wrap: break-word;
  word-break: break-word;
`,er=e=>e===`h1`||e===`h2`||e===`h3`||e===`h4`||e===`h5`||e===`h6`,X.__docgenInfo={description:``,methods:[],displayName:`Text`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`Контент`},variant:{required:!1,tsType:{name:`union`,raw:`| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'paragraph'
| 'small'
| 'xsmall'`,elements:[{name:`literal`,value:`'h1'`},{name:`literal`,value:`'h2'`},{name:`literal`,value:`'h3'`},{name:`literal`,value:`'h4'`},{name:`literal`,value:`'h5'`},{name:`literal`,value:`'h6'`},{name:`literal`,value:`'paragraph'`},{name:`literal`,value:`'small'`},{name:`literal`,value:`'xsmall'`}]},description:`Готовый вариант`,defaultValue:{value:`'paragraph'`,computed:!1}},as:{required:!1,tsType:{name:`ElementType`},description:`HTML тег`,defaultValue:{value:`'p'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`| 14
| 16
| 18
| 20
| 21
| 22
| 24
| 28
| 32
| 36
| 40`,elements:[{name:`literal`,value:`14`},{name:`literal`,value:`16`},{name:`literal`,value:`18`},{name:`literal`,value:`20`},{name:`literal`,value:`21`},{name:`literal`,value:`22`},{name:`literal`,value:`24`},{name:`literal`,value:`28`},{name:`literal`,value:`32`},{name:`literal`,value:`36`},{name:`literal`,value:`40`}]},description:`Размер`},weight:{required:!1,tsType:{name:`union`,raw:`| 400
| 500
| 600
| 700`,elements:[{name:`literal`,value:`400`},{name:`literal`,value:`500`},{name:`literal`,value:`600`},{name:`literal`,value:`700`}]},description:`Жирность`},italic:{required:!1,tsType:{name:`boolean`},description:`Курсив`,defaultValue:{value:`false`,computed:!1}},color:{required:!1,tsType:{name:`AppTheme`},description:`Цвет`},align:{required:!1,tsType:{name:`CSSProperties['textAlign']`,raw:`CSSProperties['textAlign']`},description:`Выравнивание`,defaultValue:{value:`'left'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Дополнительный класс`}}}})),nr,rr,ir,ar,or=t((()=>{w(),nr=C.textarea`
    box-sizing: border-box;
    border-radius: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${e=>e.$textColor};
    background-color: ${e=>e.$backgroundColor};
    width: 100%;
    transition-property: color, background-color, border-color, background-image;
    transition-duration: .15s;
    transition-timing-function: ease-in-out;
    border: 1px solid var(--mm-mainGrey, #D3D3D3);

    resize: vertical;
    min-height: 48px;
    padding: 14px 16px 12px;

  &:focus {
    border-color: ${e=>e.$focusColor};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${e=>`color-mix(in srgb, ${e.$focusColor} 50%, transparent)`};
    outline: none;
  }

  /* некликабельное состояние */
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({isError:e})=>e&&`
    border-color: var(--mm-error, #D41926);
    
    &:focus {
      border-color: var(--mm-error, #D41926);
    }
      
    &:focus-visible {
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--mm-error, #D41926) 70%, transparent);
    }
  `}
`,rr=C.label`
  display: flex;
  flex-direction: column;
  width: max-width;
`,ir=C.span`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 6px;
  overflow-wrap: break-word;
  word-break: break-word;
  
  & span {
    color: ${e=>e.$errorColor};
  }
`,ar=C.span`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.$errorColor};
  margin-top: 4px;
  overflow-wrap: break-word;
  word-break: break-word;
`})),Z,sr,cr=t((()=>{e(n(),1),or(),a(),Z=r(),sr=({id:e,name:t,placeholder:n,label:r,color:a=`mainNavy`,disabled:o,required:s,value:c,onChange:l,isError:u,errorMassage:d,className:f,...p})=>{let m=i(),h=e=>{l&&l(e.target.value)};return(0,Z.jsxs)(rr,{title:r===void 0?`Поле ввода`:r,className:f,children:[r&&(0,Z.jsxs)(ir,{id:`text-description-${e}`,$errorColor:m.error,children:[r,s&&(0,Z.jsx)(`span`,{"aria-hidden":!0,children:`*`})]}),(0,Z.jsx)(nr,{id:e,name:t,$focusColor:m[a],$errorColor:m.error,$textColor:m.textPrimary,$backgroundColor:m.backgroundPrimary,placeholder:n,required:s,value:c,onChange:h,disabled:o,isError:u,"aria-labelledby":r?`text-description-${e}`:void 0,"aria-required":s,"aria-invalid":u,"aria-describedby":u?`error-massage-${e}`:void 0,...p}),u&&(0,Z.jsx)(ar,{id:`error-massage-${e}`,role:`alert`,$errorColor:m.error,children:d})]})},sr.__docgenInfo={description:``,methods:[],displayName:`Textarea`,props:{id:{required:!1,tsType:{name:`string`},description:`Идентификатор для связи с другими элементами`},name:{required:!1,tsType:{name:`string`},description:`Поле для идентификации и группировки элементов в форме`},placeholder:{required:!1,tsType:{name:`string`},description:`Временный текст`},label:{required:!1,tsType:{name:`string`},description:`Текст-описание`},color:{required:!1,tsType:{name:`AppTheme`},description:`Цвет фокуса`,defaultValue:{value:`'mainNavy'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Заблокированное состояние`},required:{required:!1,tsType:{name:`boolean`},description:`Обязательность заполнения`},value:{required:!1,tsType:{name:`string`},description:`Текущее значение (controlled компонент)`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Отслеживание изменения состояния`},isError:{required:!1,tsType:{name:`boolean`},description:`Состояние ошибки`},errorMassage:{required:!1,tsType:{name:`string`},description:`Текст ошибки`},className:{required:!1,tsType:{name:`string`},description:`Дополнительные стили`}},composes:[`Omit`]}})),lr,ur,dr,fr=t((()=>{w(),lr=C.label`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;

  &:has(input:disabled) {
    cursor: not-allowed;
  }
`,ur=C.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  overflow: hidden;

  &:checked + span {
    background-color: ${e=>e.$color};
    border-color: ${e=>e.$color};
  }

  & + span::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${e=>e.$color};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all .2s ease-in-out;
  }

  &:checked + span::after {
    transform: translateX(26px);
    background-color: ${e=>e.$backgroundColor};
  }

  &:focus-visible + span {
    box-shadow: 0 0 0 2px ${e=>`color-mix(in srgb, ${e.$color} 50%, transparent)`};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled + span {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,dr=C.span`
  display: inline-flex;
  position: relative;
  margin: 2px 0;
  width: 54px;
  height: 26px;
  border-radius: 16px;
  border: 1px solid ${e=>e.$color};
  background-color: transparent;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;
`})),Q,pr,mr=t((()=>{e(n(),1),fr(),a(),Q=r(),pr=({id:e,name:t,value:n,label:r,color:a=`mainNavy`,onChange:o,checked:s,reverse:c,disabled:l,required:u})=>{let d=i(),f=e=>{o?.(e.target.value)};return(0,Q.jsxs)(lr,{title:r===void 0?`Переключатель`:r,children:[c&&(0,Q.jsx)(`span`,{id:`label-id-${e}`,children:r}),(0,Q.jsx)(ur,{type:`checkbox`,id:e,$color:d[a],$backgroundColor:d.backgroundPrimary,name:t,role:`switch`,checked:s,"aria-labelledby":`label-id-${e}`,value:n,onChange:f,disabled:l,required:u}),(0,Q.jsx)(dr,{$color:d[a]}),!c&&(0,Q.jsx)(`span`,{id:`label-id-${e}`,children:r})]})},pr.__docgenInfo={description:``,methods:[],displayName:`Toggle`,props:{id:{required:!1,tsType:{name:`string`},description:`Идентификатор для связи с другими элементами`},name:{required:!1,tsType:{name:`string`},description:`Поле для идентификации и группировки элементов в форме`},value:{required:!1,tsType:{name:`string`},description:`Значение тоггла, уходящее на сервер`},label:{required:!1,tsType:{name:`string`},description:`Текст тоггла`},color:{required:!1,tsType:{name:`AppTheme`},description:`Цвет тоггла`,defaultValue:{value:`'mainNavy'`,computed:!1}},checked:{required:!1,tsType:{name:`boolean`},description:`Состояние "Выбрано"/"Не выбрано"`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Отслеживание изменения состояния`},reverse:{required:!1,tsType:{name:`boolean`},description:`Положение текста, отосительно тоггла`},disabled:{required:!1,tsType:{name:`boolean`},description:`Заблокированное состояние`},required:{required:!1,tsType:{name:`boolean`},description:`Обязательность заполнения`}}}})),hr,gr,_r,vr,yr=t((()=>{d(),a(),se(),hr=r(),gr=({content:e,position:t=`top`,color:n=`darkGrey01`,icon:r=`info`,children:a,className:o})=>{let s=i();return(0,hr.jsx)(ce,{content:e,position:t,backgroundColor:n,className:o,children:a??(0,hr.jsx)(`div`,{className:vr(s[n],s.white),children:_r(r)})})},_r=e=>{switch(e){case`warning`:return`!`;case`question`:return`?`;default:return`i`}},vr=(e,t)=>f`
  width: 18px;
  height: 18px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  font-size: 12px;
  font-weight: 600;
  line-height: 1;

  color: ${t};
  background: ${e};

  cursor: default;
  user-select: none;

  transition:
    transform 0.15s ease,
    opacity 0.15s ease;

  &:hover {
    transform: scale(1.08);
    opacity: 0.9;
  }
`,gr.__docgenInfo={description:``,methods:[],displayName:`Tooltip`,props:{content:{required:!0,tsType:{name:`ReactNode`},description:`Контент тултипа`},position:{required:!1,tsType:{name:`union`,raw:`| 'top'
| 'bottom'
| 'left'
| 'right'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Позиция`,defaultValue:{value:`'top'`,computed:!1}},color:{required:!1,tsType:{name:`AppTheme`},description:`Цвет`,defaultValue:{value:`'darkGrey01'`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`| 'info'
| 'warning'
| 'question'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'question'`}]},description:`Иконка`,defaultValue:{value:`'info'`,computed:!1}},children:{required:!1,tsType:{name:`ReactElement`},description:`Кастомный триггер`},className:{required:!1,tsType:{name:`string`},description:``}}}}));function br(e){let t={div:`div`,h1:`h1`,img:`img`,...o(),...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(s,{title:`Все компоненты`}),`
`,`
`,`
`,`
`,`
`,`
`,(0,$.jsx)(t.h1,{id:`все-компоненты`,children:`Все компоненты`}),`
`,(0,$.jsxs)(`div`,{className:`components-grid`,children:[(0,$.jsxs)(`div`,{className:`component-tile`,children:[(0,$.jsx)(`div`,{className:`component-preview`,children:(0,$.jsx)(S,{children:`Кнопка`})}),(0,$.jsx)(`div`,{className:`component-name`,children:`Button`})]}),(0,$.jsxs)(`div`,{className:`component-tile`,children:[(0,$.jsx)(`div`,{className:`component-preview`,children:(0,$.jsx)(P,{variant:`places`,value:20})}),(0,$.jsx)(`div`,{className:`component-name`,children:`Badge`})]}),(0,$.jsxs)(`div`,{className:`component-tile`,children:[(0,$.jsx)(`div`,{className:`component-preview`,children:(0,$.jsx)(ee,{href:`#`,children:`Ссылка`})}),(0,$.jsx)(`div`,{className:`component-name`,children:`Link`})]}),(0,$.jsxs)(`div`,{className:`component-tile`,children:[(0,$.jsx)(`div`,{className:`component-preview component-preview-wide`,children:(0,$.jsx)(st,{label:`Имя студента`,placeholder:`Введите имя`,defaultValue:`Анна`})}),(0,$.jsx)(`div`,{className:`component-name`,children:`InputText`})]}),(0,$.jsxs)(`div`,{className:`component-tile`,children:[(0,$.jsx)(`div`,{className:`component-preview component-preview-wide`,children:(0,$.jsx)(sr,{label:`Комментарий`,placeholder:`Введите текст`,defaultValue:`Хочу записаться на курс`})}),(0,$.jsx)(`div`,{className:`component-name`,children:`Textarea`})]}),(0,$.jsxs)(`div`,{className:`component-tile`,children:[(0,$.jsx)(`div`,{className:`component-preview component-preview-wide`,children:(0,$.jsx)(ln,{label:`Предмет`,options:Cr,defaultValue:`math`})}),(0,$.jsx)(`div`,{className:`component-name`,children:`Select`})]}),(0,$.jsxs)(`div`,{className:`component-tile`,children:[(0,$.jsx)(`div`,{className:`component-preview component-preview-wide`,children:(0,$.jsx)(xt,{label:`Темы`,options:Cr,defaultValue:[`math`,`cs`]})}),(0,$.jsx)(`div`,{className:`component-name`,children:`MultiSelect`})]}),(0,$.jsxs)(`div`,{className:`component-tile`,children:[(0,$.jsx)(`div`,{className:`component-preview`,children:(0,$.jsx)(Be,{label:`Согласие`,checked:!0,readOnly:!0})}),(0,$.jsx)(`div`,{className:`component-name`,children:`Checkbox`})]}),(0,$.jsxs)(`div`,{className:`component-tile`,children:[(0,$.jsx)(`div`,{className:`component-preview`,children:(0,$.jsx)(Dt,{name:`overview-radio`,value:`offline`,label:`Очно`,checked:!0,readOnly:!0})}),(0,$.jsx)(`div`,{className:`component-name`,children:`Radio`})]}),(0,$.jsxs)(`div`,{className:`component-tile`,children:[(0,$.jsx)(`div`,{className:`component-preview`,children:(0,$.jsx)(pr,{label:`Открыта запись`,checked:!0,readOnly:!0})}),(0,$.jsx)(`div`,{className:`component-name`,children:`Toggle`})]}),(0,$.jsxs)(`div`,{className:`component-tile`,children:[(0,$.jsx)(`div`,{className:`component-preview`,children:(0,$.jsx)(Xt,{rating:4.5,size:32})}),(0,$.jsx)(`div`,{className:`component-name`,children:`RatingStars`})]}),(0,$.jsxs)(`div`,{className:`component-tile`,children:[(0,$.jsx)(`div`,{className:`component-preview`,children:(0,$.jsx)(Er,{})}),(0,$.jsx)(`div`,{className:`component-name`,children:`RadioStars`})]}),(0,$.jsxs)(`div`,{className:`component-tile`,children:[(0,$.jsx)(`div`,{className:`component-preview component-preview-wide`,children:(0,$.jsx)(Un,{tabs:wr})}),(0,$.jsx)(`div`,{className:`component-name`,children:`Tabs`})]}),(0,$.jsxs)(`div`,{className:`component-tile component-tile-wide`,children:[(0,$.jsx)(`div`,{className:`component-preview component-preview-wide`,children:(0,$.jsx)(fe,{items:Tr})}),(0,$.jsx)(`div`,{className:`component-name`,children:`Accordion`})]}),(0,$.jsxs)(`div`,{className:`component-tile component-tile-full`,children:[(0,$.jsxs)(`div`,{className:`component-preview component-preview-wide component-preview-row`,children:[(0,$.jsx)(ke,{header:(0,$.jsx)(P,{variant:`online`}),content:(0,$.jsx)(X,{variant:`paragraph`,children:`Алгебра и теория чисел`}),footer:(0,$.jsx)(S,{children:`Записаться`})}),(0,$.jsx)(ke,{header:(0,$.jsx)(P,{variant:`subject`,value:`Дизайн`}),content:(0,$.jsxs)(t.div,{className:`card-photo-content`,children:[(0,$.jsx)(t.img,{src:Dr,alt:`Учебная группа`}),(0,$.jsx)(X,{variant:`paragraph`,children:`Проектная работа в команде`})]}),footer:(0,$.jsx)(P,{variant:`places`,value:12})}),(0,$.jsx)(ke,{direction:`horizontal`,header:(0,$.jsx)(ue,{size:32}),content:(0,$.jsx)(X,{variant:`paragraph`,children:`Подборка курсов по фильтрам`}),footer:(0,$.jsx)(ee,{href:`#`,children:`Подробнее`})})]}),(0,$.jsx)(`div`,{className:`component-name`,children:`Card`})]}),(0,$.jsxs)(`div`,{className:`component-tile component-tile-full`,children:[(0,$.jsx)(`div`,{className:`component-preview component-preview-wide`,children:(0,$.jsx)(He,{title:`Каталог курсов`,topLeft:`Mathmech UI`,topRight:(0,$.jsx)(S,{children:`Войти`}),backgroundColor:`mainNavy`,textColor:`white`,contentMaxWidth:`100%`,contentPaddingX:16})}),(0,$.jsx)(`div`,{className:`component-name`,children:`Header`})]}),(0,$.jsxs)(`div`,{className:`component-tile component-tile-full`,children:[(0,$.jsx)(`div`,{className:`component-preview component-preview-wide`,children:(0,$.jsx)(O,{left:`Mathmech UI`,right:`Поддержка студентов`})}),(0,$.jsx)(`div`,{className:`component-name`,children:`Footer`})]}),(0,$.jsxs)(`div`,{className:`component-tile`,children:[(0,$.jsx)(`div`,{className:`component-preview`,children:(0,$.jsx)(gr,{content:`Количество свободных мест`})}),(0,$.jsx)(`div`,{className:`component-name`,children:`Tooltip`})]}),(0,$.jsxs)(`div`,{className:`component-tile`,children:[(0,$.jsxs)(`div`,{className:`component-preview component-preview-hint`,children:[(0,$.jsx)(Ze,{content:`Текст подсказки`,children:(0,$.jsx)(S,{children:`Подробнее`})}),(0,$.jsx)(`div`,{className:`static-hint`,children:`Текст подсказки`})]}),(0,$.jsx)(`div`,{className:`component-name`,children:`Hint`})]}),(0,$.jsxs)(`div`,{className:`component-tile`,children:[(0,$.jsx)(`div`,{className:`component-preview`,children:(0,$.jsx)(X,{variant:`h4`,children:`Название курса`})}),(0,$.jsx)(`div`,{className:`component-name`,children:`Text`})]}),(0,$.jsxs)(`div`,{className:`component-tile`,children:[(0,$.jsx)(`div`,{className:`component-preview`,children:(0,$.jsx)(ue,{size:48,color:`currentColor`})}),(0,$.jsx)(`div`,{className:`component-name`,children:`Icons`})]}),(0,$.jsxs)(`div`,{className:`component-tile`,children:[(0,$.jsx)(`div`,{className:`component-preview`,children:(0,$.jsxs)(`div`,{className:`skeleton-preview`,children:[(0,$.jsx)(vn,{}),(0,$.jsx)(bn,{lines:2})]})}),(0,$.jsx)(`div`,{className:`component-name`,children:`Skeletons`})]})]}),`
`,(0,$.jsxs)(`div`,{className:`component-tile component-tile-full`,children:[(0,$.jsx)(`div`,{className:`component-preview`,children:(0,$.jsxs)(`div`,{className:`dialog-preview`,role:`dialog`,"aria-labelledby":`dialog-preview-title`,"aria-modal":`false`,children:[(0,$.jsx)(`button`,{className:`dialog-preview-close`,type:`button`,"aria-label":`Закрыть модальное окно`}),(0,$.jsx)(`h2`,{id:`dialog-preview-title`,children:`Запись на курс`}),(0,$.jsx)(X,{variant:`paragraph`,children:`Проверьте данные и подтвердите заявку на курс.`}),(0,$.jsxs)(`div`,{className:`dialog-preview-actions`,children:[(0,$.jsx)(S,{variant:`secondary`,children:`Отмена`}),(0,$.jsx)(S,{children:`Подтвердить`})]})]})}),(0,$.jsx)(`div`,{className:`component-name`,children:`Dialog`})]}),`
`,(0,$.jsx)(`style`,{children:`
  .components-grid {
    width: min(100%, 1440px);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
    margin-top: 24px;
  }

  .component-tile {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .component-tile-wide {
    grid-column: span 2;
  }

  .component-tile-full {
    grid-column: 1 / -1;
  }

  .component-preview {
    min-height: 156px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    border: 1px solid var(--mm-lightGrey01, #E2D9FF);
    border-radius: 10px;
    background: var(--mm-surfacePrimary, #FFFFFF);
    color: var(--mm-surfaceText, #1B1E22);
  }

  .component-preview-wide {
    align-items: center;
    justify-content: center;
  }

  .component-preview-wide > * {
    max-width: 100%;
  }

  .component-preview-row {
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    gap: 20px;
  }

  .component-preview-row > * {
    flex: 1 1 300px;
  }

  .card-photo-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: min(100%, 360px);
  }

  .card-photo-content img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 10px;
    display: block;
  }

  .component-preview-hint {
    gap: 16px;
    align-items: center;
  }

  .static-hint {
    position: relative;
    max-width: 180px;
    padding: 10px 12px;
    border-radius: 10px;
    background: var(--mm-hintBackground, #767487);
    color: var(--mm-white, #FFFFFF);
    font-size: 14px;
    line-height: 1.35;
  }

  .static-hint::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 50%;
    width: 12px;
    height: 12px;
    background: inherit;
    transform: translateY(-50%) rotate(45deg);
  }

  .component-name {
    color: var(--mm-surfaceText, #1B1E22);
    font-size: 14px;
    font-weight: 600;
    line-height: 1.3;
    text-align: center;
  }

  .skeleton-preview {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .dialog-preview {
    position: relative;
    width: min(100%, 560px);
    padding: 40px 32px;
    border-radius: 10px;
    box-sizing: border-box;
    background: var(--mm-backgroundPrimary, #FFFFFF);
    color: var(--mm-textPrimary, #1B1E22);
    box-shadow: 0 24px 80px rgba(15, 23, 42, 0.22);
    text-align: center;
  }

  .dialog-preview h2 {
    margin: 0 0 20px;
    font-size: 32px;
    line-height: 1.2;
    font-weight: 600;
  }

  .dialog-preview-close {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 42px;
    height: 42px;
    border: none;
    border-radius: 50%;
    background: var(--mm-backgroundSecondary, #F3F3F3);
    color: var(--mm-textPrimary, #1B1E22);
    cursor: default;
  }

  .dialog-preview-close::before,
  .dialog-preview-close::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 14px;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
  }

  .dialog-preview-close::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .dialog-preview-close::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  .dialog-preview-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: 24px;
  }

  @media (max-width: 720px) {
    .components-grid {
      grid-template-columns: 1fr;
    }

    .component-tile-wide,
    .component-tile-full {
      grid-column: 1;
    }
  }
`})]})}function xr(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(br,{...e})}):br(e)}var $,Sr,Cr,wr,Tr,Er,Dr;t((()=>{$=r(),b(),c(),Sr=e(n()),ye(),Oe(),x(),Pe(),Ve(),D(),Xe(),tt(),ct(),k(),St(),Ot(),Lt(),Qt(),un(),Vn(),Xn(),tr(),cr(),mr(),yr(),le(),Cr=[{value:`math`,label:`Математика`},{value:`physics`,label:`Физика`},{value:`cs`,label:`Информатика`}],wr=[{id:`one`,label:`Описание`,content:(0,$.jsx)(`span`,{children:`Краткое описание курса`})},{id:`two`,label:`Расписание`,content:(0,$.jsx)(`span`,{children:`Занятия по вторникам`})}],Tr=[{id:`first`,title:`Что будет на курсе?`,content:`Разбор задач, практика и мини-проекты.`},{id:`second`,title:`Как проходит обучение?`,content:`Очные встречи и материалы для самостоятельной работы.`}],Er=()=>{let[e,t]=(0,Sr.useState)(4);return(0,$.jsx)(It,{name:`components-overview-stars`,rating:e,setRating:t,isMobile:!0})},Dr=`https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=640&q=80`}))();export{Er as RadioStarsPreview,Tr as accordionItems,Dr as cardImage,xr as default,Cr as selectOptions,wr as tabs};