import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-B6lWK8m9.js";import{i as n,n as r,r as i,t as a}from"./emotion-css.esm-nW0xTD3m.js";import{a as o,d as s,f as c,n as l,t as u,u as d}from"./Icons-B9j9ZF3b.js";import{n as f,t as p}from"./Badge-B90ThquV.js";var m,h,g,_,v,y,b=e((()=>{i(),m=t(),h=({header:e,content:t,footer:n,direction:i=`vertical`,borderRadius:a=15,className:o})=>(0,m.jsxs)(`div`,{className:r(g(i,a),o),children:[e&&(0,m.jsx)(`div`,{className:_,children:e}),t&&(0,m.jsx)(`div`,{className:v(i),children:t}),n&&(0,m.jsx)(`div`,{className:y,children:n})]}),g=(e,t)=>a`
  box-sizing: border-box;

  display: flex;

  flex-direction: ${e===`horizontal`?`row`:`column`};

  justify-content: space-between;

  gap: 16px;

  padding: 24px 20px 20px;

  border: 1px solid #d8d8d8;

  border-radius: ${t}px;

  background: #ffffff;

  min-width: 300px;

  width: fit-content;

  max-width: 100%;

  height: fit-content;
`,_=a`
  display: flex;
  align-items: center;
  width: 100%;
`,v=e=>a`
  display: flex;
  flex-direction: ${e===`horizontal`?`row`:`column`};
  gap: 12px;
  width: 100%;
`,y=a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  width: 100%;
`,h.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{header:{required:!1,tsType:{name:`ReactNode`},description:`Верхняя часть карточки`},content:{required:!1,tsType:{name:`ReactNode`},description:`Центральная часть карточки`},footer:{required:!1,tsType:{name:`ReactNode`},description:`Нижняя часть карточки`},direction:{required:!1,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:`Направление контента`,defaultValue:{value:`'vertical'`,computed:!1}},borderRadius:{required:!1,tsType:{name:`number`},description:`Скругление углов (px)`,defaultValue:{value:`15`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Дополнительный className`}}}})),x,S,C,w,T,E,D,O,k,A,j,M=e((()=>{i(),x=t(),S=a`
  background: linear-gradient(
    90deg,
    #eeeeee 25%,
    #f5f5f5 37%,
    #eeeeee 63%
  );

  background-size: 400% 100%;
  animation: ${n`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`} 1.2s ease-in-out infinite;
  border-radius: 8px;
`,C=({direction:e=`vertical`,borderRadius:t=15,hasHeader:n=!0,hasFooter:i=!0,className:a})=>(0,x.jsxs)(`div`,{className:r(w(e,t),a),children:[n&&(0,x.jsx)(`div`,{className:T}),(0,x.jsxs)(`div`,{className:E(),children:[(0,x.jsx)(`div`,{className:D}),(0,x.jsx)(`div`,{className:k}),(0,x.jsx)(`div`,{className:O})]}),i&&(0,x.jsxs)(`div`,{className:A,children:[(0,x.jsx)(`div`,{className:k}),(0,x.jsx)(`div`,{className:j})]})]}),w=(e,t)=>a`
  display: flex;

  flex-direction: ${e===`horizontal`?`row`:`column`};

  justify-content: space-between;

  gap: 16px;

  padding: 24px 20px 20px;

  border: 1px solid #e6e6e6;

  border-radius: ${t}px;

  background: #ffffff;

  min-width: 300px;
  width: fit-content;
  max-width: 100%;
`,T=a`
  width: 55%;
  height: 18px;
  ${S};
`,E=()=>a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`,D=a`
  width: 100%;
  height: 16px;
  ${S};
`,O=a`
  width: 80%;
  height: 14px;
  ${S};
`,k=a`
  width: 65%;
  height: 12px;
  ${S};
`,A=a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,j=a`
  width: 60px;
  height: 20px;
  ${S};
`,C.__docgenInfo={description:``,methods:[],displayName:`CardSkeleton`,props:{direction:{required:!1,tsType:{name:`union`,raw:`'vertical' | 'horizontal'`,elements:[{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`}]},description:``,defaultValue:{value:`'vertical'`,computed:!1}},borderRadius:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`15`,computed:!1}},hasHeader:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},hasFooter:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),N,P,F,I,L,R,z,B,V,H,U;e((()=>{f(),b(),c(),M(),N=t(),P={none:void 0,badges:(0,N.jsxs)(`div`,{style:{display:`flex`,gap:4,flexWrap:`wrap`},children:[(0,N.jsx)(p,{lable:`New`,color:`darkBlue01`,borderColor:`darkGreen01`}),(0,N.jsx)(p,{lable:`Active`,color:`lightGreen01`})]}),boardIcon:(0,N.jsx)(l,{size:24}),usersScale:(0,N.jsx)(s,{size:24}),usersGroup:(0,N.jsx)(d,{size:24}),arrow:(0,N.jsx)(u,{size:24}),filter:(0,N.jsx)(o,{size:24}),text:(0,N.jsx)(`div`,{style:{fontWeight:600},children:`Header text`})},F={default:(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,maxWidth:420},children:[(0,N.jsx)(`div`,{style:{fontSize:18,fontWeight:600},children:`Большой текст контента`}),(0,N.jsx)(`div`,{style:{fontSize:14,opacity:.7},children:`Маленький текст контента (описание, пояснение или сабтекст)`})]}),short:(0,N.jsx)(`div`,{style:{fontSize:16},children:`Короткий контент`}),icon:(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,N.jsx)(l,{size:24}),(0,N.jsx)(`span`,{children:`Контент с иконкой`})]}),image:(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,N.jsx)(`img`,{src:`https://images.unsplash.com/photo-1521737604893-d14cc237f11d`,style:{width:`100%`,borderRadius:12}}),(0,N.jsx)(`div`,{style:{fontSize:14,opacity:.7},children:`Контент с изображением`})]})},I={none:void 0,text:(0,N.jsx)(`div`,{style:{fontSize:13,opacity:.8},children:`Нижний текст карточки`}),badge:(0,N.jsx)(p,{lable:`3зе`,color:`mainPurple`}),mixed:(0,N.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,width:`100%`},children:[(0,N.jsx)(`div`,{style:{fontSize:13,opacity:.8},children:`Нижний текст карточки`}),(0,N.jsx)(p,{lable:`3зе`,color:`mainPurple`})]})},L={title:`UI/Card`,component:h,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{direction:{control:`radio`,options:[`vertical`,`horizontal`]},borderRadius:{control:{type:`number`}},header:{control:`select`,options:Object.keys(P),mapping:P},content:{control:`select`,options:Object.keys(F),mapping:F},footer:{control:`select`,options:Object.keys(I),mapping:I}},args:{direction:`vertical`,borderRadius:15,header:P.badges,content:F.default,footer:I.text}},R={},z={args:{content:F.image}},B={args:{direction:`horizontal`}},V={render:e=>(0,N.jsx)(C,{direction:e.direction,borderRadius:e.borderRadius})},H={args:{header:(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,N.jsx)(l,{size:32,color:`#6C5CE7`,strokeWidth:2.2}),(0,N.jsx)(`div`,{style:{fontWeight:600},children:`Card with custom icon`})]}),content:(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,N.jsx)(d,{size:24,color:`#2D3436`,strokeWidth:1.5}),(0,N.jsx)(`div`,{style:{fontSize:14,opacity:.7},children:`Иконка с кастомным размером и цветом прямо в карточке`})]}),footer:(0,N.jsx)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:(0,N.jsx)(u,{size:16,color:`#0984E3`})})}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    content: contentOptions.image
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <CardSkeleton direction={args.direction} borderRadius={args.borderRadius} />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    header: <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
        <BoardIcon size={32} color="#6C5CE7" strokeWidth={2.2} />
        <div style={{
        fontWeight: 600
      }}>Card with custom icon</div>
      </div>,
    content: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <UsersGroupIcon size={24} color="#2D3436" strokeWidth={1.5} />
        <div style={{
        fontSize: 14,
        opacity: 0.7
      }}>
          Иконка с кастомным размером и цветом прямо в карточке
        </div>
      </div>,
    footer: <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
        <ArrowUpRightIcon size={16} color="#0984E3" />
      </div>
  }
}`,...H.parameters?.docs?.source}}},U=[`Playground`,`WithImage`,`Horizontal`,`Skeleton`,`WithCustomIcon`]}))();export{B as Horizontal,R as Playground,V as Skeleton,H as WithCustomIcon,z as WithImage,U as __namedExportsOrder,L as default};